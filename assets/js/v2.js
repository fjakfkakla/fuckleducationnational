/* Potion V2. Scroll leads: things appear as they reach the screen, the stage follows the text, the results slide as you scroll. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var G = window.gsap || null, ST = window.ScrollTrigger || null;
  if (G && ST) G.registerPlugin(ST);
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var narrow = window.matchMedia('(max-width: 980px)').matches;
  var fmt = function (n) { return Math.round(n).toLocaleString('en-US'); };

  function tween(dur, fn, ease, done) {
    var t0 = null; ease = ease || function (k) { return 1 - Math.pow(1 - k, 3); };
    function step(ts) { if (!t0) t0 = ts; var k = Math.min(1, (ts - t0) / dur); fn(ease(k)); if (k < 1) requestAnimationFrame(step); else if (done) done(); }
    requestAnimationFrame(step);
  }
  function once(el, opt, cb) {
    if (!el) return;
    if (!('IntersectionObserver' in window)) { cb(); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { io.disconnect(); cb(); } }); }, opt || { threshold: .3 });
    io.observe(el);
  }

  /* nav, progress */
  var nav = $('#nav'), prog = $('#progress');
  function onScroll() { var y = scrollY, h = document.documentElement.scrollHeight - innerHeight; nav.classList.toggle('on', y > 24); prog.style.transform = 'scaleX(' + (h > 0 ? y / h : 0) + ')'; }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var burger = $('#burger'), links = $('#navLinks');
  burger.addEventListener('click', function () { var o = links.classList.toggle('open'); burger.setAttribute('aria-expanded', o ? 'true' : 'false'); });
  $$('a', links).forEach(function (a) { a.addEventListener('click', function () { links.classList.remove('open'); }); });

  /* reveal */
  var rv = $$('.rv');
  if ('IntersectionObserver' in window && !reduced) {
    var rio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } }); }, { rootMargin: '0px 0px -10% 0px' });
    rv.forEach(function (el) { rio.observe(el); });
  } else rv.forEach(function (el) { el.classList.add('in'); });

  /* hero: the frame lies flat as you scroll, the word changes */
  if (G && !reduced) {
    G.from('.hero-t, .hero-actions', { y: 26, opacity: 0, duration: .9, ease: 'power3.out', stagger: .12, delay: .1 });
    G.from('.frame', { y: 60, opacity: 0, duration: 1, ease: 'power3.out', delay: .4 });
    if (ST && !narrow) G.to('.frame', { rotateX: 0, scale: 1, ease: 'none', scrollTrigger: { trigger: '.hero-stage', start: 'top 85%', end: 'top 25%', scrub: .6 } });
  } else { $('.frame').style.transform = 'none'; }
  var words = ['Crypto', 'Meme', 'Stock', 'DeFi', 'Prediction'], wi = 0, swap = $('#swap');
  function nextWord() {
    wi = (wi + 1) % words.length;
    var old = $('i', swap), nw = document.createElement('i'); nw.textContent = words[wi];
    nw.style.position = 'absolute'; nw.style.left = 0; nw.style.top = 0; swap.appendChild(nw);
    var w = nw.offsetWidth;
    if (G && !reduced) {
      G.to(old, { yPercent: -100, opacity: 0, duration: .5, ease: 'power3.in', onComplete: function () { old.remove(); nw.style.position = ''; } });
      G.fromTo(nw, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .55, ease: 'power3.out', delay: .28 });
      G.to(swap, { width: w, duration: .45, ease: 'power3.inOut' });
    } else { old.remove(); nw.style.position = ''; swap.style.width = ''; }
  }
  swap.style.width = $('i', swap).offsetWidth + 'px';
  setInterval(nextWord, 2800);
  var heroPnl = $('#heroPnl');
  once($('.frame'), { threshold: .4 }, function () { tween(1600, function (k) { heroPnl.textContent = (71.07 * k).toFixed(2) + '% win rate'; }); });

  /* strip loops */
  var strip = $('#strip'); strip.innerHTML += strip.innerHTML;

  /* performance */
  var tally = $('#tally');
  for (var i = 0; i < 163; i++) { var b = document.createElement('i'); if (i >= 137) b.className = 'r'; tally.appendChild(b); }
  var bars = $$('i', tally), imgs = $$('.ch-img img');
  function wipe(img, dur) {
    if (reduced) { img.style.clipPath = 'inset(0 0 0 0)'; return; }
    tween(dur, function (k) { img.style.clipPath = 'inset(0 ' + ((1 - k) * 100) + '% 0 0)'; }, function (k) { return 1 - Math.pow(1 - k, 2); });
  }
  once($('#stats'), { threshold: .4 }, function () {
    $$('#stats [data-count]').forEach(function (el) {
      var v = +el.getAttribute('data-count'), dec = +(el.getAttribute('data-dec') || 0), suf = el.getAttribute('data-suf') || '';
      tween(1500, function (k) { el.textContent = (dec ? (v * k).toFixed(dec) : fmt(v * k)) + suf; });
    });
  });
  once($('#perf'), { threshold: .3 }, function () {
    if (G && !reduced) G.to(bars, { opacity: 1, scaleY: 1, duration: .4, ease: 'back.out(2)', stagger: .006 }); else bars.forEach(function (b) { b.style.opacity = 1; b.style.transform = 'none'; });
    imgs.forEach(function (im, j) { setTimeout(function () { wipe(im, 1500); }, j * 350); });
  });

  /* process: the text scrolls, the stage switches */
  var steps = $$('.step'), scs = $$('.sc'), played = {};
  function show(n) {
    steps.forEach(function (s) { s.classList.toggle('on', +s.getAttribute('data-step') === n); });
    scs.forEach(function (s) { s.classList.toggle('on', +s.getAttribute('data-step') === n); });
    if (!played[n]) { played[n] = true; (sceneStart[n] || function () {})(); }
  }
  var sceneStart = {};
  if ('IntersectionObserver' in window) {
    var pio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) show(+e.target.getAttribute('data-step')); }); },
      narrow ? { threshold: .2 } : { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    (narrow ? scs : steps).forEach(function (s) { pio.observe(s); });
  }
  if (narrow) steps.forEach(function (st) { var sc = $('.sc[data-step="' + st.getAttribute('data-step') + '"]'); if (sc) st.appendChild(sc); });

  function moveThumb(sw, btn) {
    var th = $('.thumb', sw); th.style.left = btn.offsetLeft + 'px'; th.style.width = btn.offsetWidth + 'px';
    $$('button', sw).forEach(function (x) { x.classList.toggle('on', x === btn); });
  }
  function initSwitches() { $$('.switch').forEach(function (sw) { var on = $('button.on', sw); if (on) moveThumb(sw, on); }); }
  initSwitches(); addEventListener('resize', initSwitches);

  /* scene 1 */
  var cal = $('#cal'), rpDoc = $('#rpDoc'), rpToast = $('#rpToast'), rpTitle = $('#rpTitle'), rpDate = $('#rpDate'), rpLine = $('#rpLine'), rpArea = $('#rpArea');
  var calSets = { week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], month: ['1', '2', '3', '4', '5', '6', '7'] }, rpTl = null;
  function playReport(kind) {
    cal.innerHTML = ''; calSets[kind].forEach(function (d) { var i = document.createElement('i'); i.textContent = d; cal.appendChild(i); });
    rpTitle.textContent = kind === 'week' ? 'Weekly Market Newsletter' : 'Monthly Macro Report'; rpDate.textContent = kind === 'week' ? 'Monday' : 'The 1st';
    var day = cal.children[0], lines = $$('.dl i', rpDoc), L = rpLine.getTotalLength();
    rpLine.style.strokeDasharray = L; rpLine.style.strokeDashoffset = L; rpArea.setAttribute('d', 'M0 70 L0 70 Z');
    if (!G || reduced) { day.classList.add('on'); rpDoc.style.opacity = 1; rpDoc.style.transform = 'none'; lines.forEach(function (l) { l.style.transform = 'none'; }); rpLine.style.strokeDashoffset = 0; return; }
    if (rpTl) rpTl.kill();
    rpTl = G.timeline();
    rpTl.set(rpDoc, { opacity: 0, y: 24 }).set(rpToast, { opacity: 0, y: -14 }).set(lines, { scaleX: 0 })
      .add(function () { day.classList.add('on'); }, .2)
      .to(rpToast, { opacity: 1, y: 0, duration: .45, ease: 'power3.out' }, .5)
      .to(rpDoc, { opacity: 1, y: 0, duration: .6, ease: 'power3.out' }, 1)
      .to(lines, { scaleX: 1, duration: .4, stagger: .08, ease: 'power2.out' }, 1.3)
      .to(rpLine, { strokeDashoffset: 0, duration: .9, ease: 'power2.out', onUpdate: function () {
        var k = this.progress(), pts = [], n = 24;
        for (var j = 0; j <= n * k; j++) { var p = rpLine.getPointAtLength(L * j / n); pts.push(p.x + ' ' + p.y); }
        if (pts.length) rpArea.setAttribute('d', 'M0 70 L' + pts.join(' L') + ' L' + pts[pts.length - 1].split(' ')[0] + ' 70 Z');
      } }, 1.6)
      .to(rpToast, { opacity: 0, y: -8, duration: .4 }, 3.4);
  }
  sceneStart[1] = function () { playReport('week'); };
  $$('#rpSwitch button').forEach(function (b) { b.addEventListener('click', function () { moveThumb($('#rpSwitch'), b); playReport(b.getAttribute('data-rp')); }); });

  /* scene 2 */
  var tog = $('#ntfTog'), stackN = $('#ntfStack'), ntfTimers = [];
  var updates = [
    { t: 'hype', title: '$HYPE long', text: 'Target reached at 61.19. +30.6%', pct: 30.6, st: 'Target hit' },
    { t: 'lit', title: '$LIT long', text: 'Closed at 1.64. +42.6%', pct: 42.6, st: 'Closed' },
    { t: 'spce', title: '$SPCE', text: 'Exit at 5.49. +166.97%', pct: 166.97, st: 'Exit' }
  ];
  function resetTrades() {
    ntfTimers.forEach(clearTimeout); ntfTimers = []; stackN.innerHTML = '';
    $$('.trade').forEach(function (tr) { var st = $('.st', tr); st.textContent = 'Open'; st.className = 'chip st'; var p = $('.pnl', tr); p.textContent = '0.0%'; p.classList.remove('g'); });
  }
  function playNotify() {
    resetTrades();
    updates.forEach(function (u, i) {
      ntfTimers.push(setTimeout(function () {
        var n = document.createElement('div'); n.className = 'ntf';
        n.innerHTML = '<span class="app"><img src="assets/img/potion-mark.png" alt=""></span><span><b>' + u.title + '</b><small>' + u.text + '</small></span>';
        stackN.prepend(n); if (stackN.children.length > 3) stackN.lastElementChild.remove();
        if (G && !reduced) G.to(n, { opacity: 1, y: 0, duration: .45, ease: 'power3.out' }); else { n.style.opacity = 1; n.style.transform = 'none'; }
        Array.prototype.forEach.call(stackN.children, function (c, j) { if (!j) return; if (G && !reduced) G.to(c, { y: 6 * j, scale: 1 - .04 * j, opacity: .5 / j, duration: .4 }); else { c.style.transform = 'translateY(' + 6 * j + 'px) scale(' + (1 - .04 * j) + ')'; c.style.opacity = .5 / j; } });
        var tr = $('.trade[data-t="' + u.t + '"]'), st = $('.st', tr), p = $('.pnl', tr);
        st.textContent = u.st; st.className = 'chip st green'; p.classList.add('g');
        var dec = String(u.pct).split('.')[1] && String(u.pct).split('.')[1].length > 1 ? 2 : 1;
        tween(900, function (k) { p.textContent = '+' + (u.pct * k).toFixed(dec) + '%'; });
      }, 500 + i * 1400));
    });
  }
  sceneStart[2] = playNotify;
  tog.addEventListener('click', function () { var on = !tog.classList.contains('on'); tog.classList.toggle('on', on); tog.setAttribute('aria-pressed', on ? 'true' : 'false'); if (on) playNotify(); else resetTrades(); });

  /* scene 3 */
  var side = 'long', size = 500, execBtn = $('#execBtn'), pos = $('#pos'), posPnl = $('#posPnl');
  $$('#sideSwitch button').forEach(function (b) { b.addEventListener('click', function () { moveThumb($('#sideSwitch'), b); side = b.getAttribute('data-side'); }); });
  $$('#sizes button').forEach(function (b) { b.addEventListener('click', function () { $$('#sizes button').forEach(function (x) { x.classList.toggle('on', x === b); }); size = +b.getAttribute('data-size'); }); });
  execBtn.addEventListener('click', function () {
    if (execBtn.classList.contains('is-busy')) return;
    execBtn.classList.add('is-busy'); pos.classList.remove('on');
    setTimeout(function () {
      execBtn.classList.remove('is-busy'); pos.classList.add('on');
      var gain = size * .306, lbl = side === 'long' ? '+30.6%' : 'long only on this call';
      if (G && !reduced) G.fromTo(pos, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: .5, ease: 'power3.out' });
      tween(900, function (k) { posPnl.innerHTML = '+$' + fmt(gain * k) + ' <span>' + lbl + '</span>'; });
    }, 900);
  });

  /* scene 4 */
  var feed = $('#roomFeed');
  var chat = [
    { a: 'gas', n: '@gas', t: '09:41', m: 'we fcking flying on <strong>$SPCX</strong>' },
    { a: 'manuel', n: '@Manuel', t: '09:41', m: 'SpaceX agreed to acquire Cursor' },
    { a: 'shaman', n: '@Shaman', t: '09:42', m: 'I just printed <strong>+40%</strong> on $SPCX' },
    { a: 'mxtt', n: '@mxtt', t: '09:42', m: 'Do you think we go higher?' },
    { a: 'mavo', n: '@Mavo', t: '09:43', m: 'helllya' }
  ];
  function addMsg(c, me) {
    var d = document.createElement('div'); d.className = 'rm' + (me ? ' me' : '');
    d.innerHTML = (me ? '<span class="pdp me"><b>You</b></span>' : '<span class="pdp"><img src="assets/img/avatars/' + c.a + '.png" alt=""></span>') + '<div><b>' + c.n + '<span>' + c.t + '</span></b><p>' + c.m + '</p></div>';
    feed.appendChild(d); while (feed.children.length > 6) feed.firstElementChild.remove();
    if (G && !reduced) G.to(d, { opacity: 1, y: 0, duration: .4, ease: 'power3.out' }); else { d.style.opacity = 1; d.style.transform = 'none'; }
  }
  sceneStart[4] = function () {
    chat.forEach(function (c, i) { setTimeout(function () { addMsg(c); }, 300 + i * 1000); });
    var cnt = $('#members'); tween(1800, function (k) { cnt.textContent = fmt(108000 * k) + ' members'; });
  };
  $('#roomForm').addEventListener('submit', function (e) {
    e.preventDefault(); var inp = $('#roomInput'), v = inp.value.trim(); if (!v) return;
    var now = new Date(), t = ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2);
    addMsg({ n: 'You', t: t, m: v.replace(/[<>&]/g, function (ch) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;' }[ch]; }) }, true); inp.value = '';
  });

  /* results: the track slides left while the page scrolls down */
  var T = [
    { a: 'gas', n: '@gas', mk: 'Memes', pnl: 96500, q: 'called at 40K mcap and bid 482$, clean 200x from world cup memecoin' },
    { a: 'neilarora16', n: '@neilarora16', mk: 'Perps', pnl: 69874, q: 'entered a perp long at 1.15 with $49K margin, called it inside Potion, and closed at 1.64 for +42.6% profit' },
    { a: 'manuel', n: '@Manuel', mk: 'Perps', pnl: 35830, q: 'took the perp long from 47.37 to 61.19 after calling it in Potion, locked +30.6% profit on $27,420 margin' },
    { a: 'shaman', n: '@Shaman', mk: 'Stocks', pnl: 25045, q: 'entered and called in potion Virgin Galactic Holdings stocks at 3,24 and we exited at 5,49 with clean +166,97%' },
    { a: 'mavo', n: '@Mavo', mk: 'Memes', pnl: 7940, q: 'invested $50 early in $RICH, memecoin on Solana, and called in community, caught +15872%' },
    { a: 'straightmisses', n: '@StraightMisses', mk: 'Prediction', pnl: 7934, q: 'called entry at 13c for Natus Vincere vs Vitality in potion community and we exited on 100c with clean +621,3%' },
    { a: 'dannyyak', n: '@DannyYak', mk: 'Prediction', pnl: 4545, q: 'called entry at 11c for Saudi Arabia vs Uruguay in potion community and we exited on 100c with clean +809,1%' },
    { a: 'mxtt', n: '@mxtt', mk: 'Memes', pnl: 4007, q: 'invested $550 and called in community, caught +725,28%' }
  ];
  var track = $('#rsTrack'), total = 0;
  T.forEach(function (t) {
    total += t.pnl;
    var c = document.createElement('article'); c.className = 'rc';
    c.innerHTML = '<div class="h"><span class="pdp"><img src="assets/img/avatars/' + t.a + '.png" alt=""></span><b>' + t.n + '</b><span class="chip">' + t.mk + '</span></div><p>' + t.q + '</p><div class="pnl" data-pnl="' + t.pnl + '">+$0<small>reported by ' + t.n + '</small></div>';
    track.appendChild(c);
  });
  $('#rsTotal').textContent = '+$' + fmt(total);
  var rsCounted = false;
  function countResults() {
    if (rsCounted) return; rsCounted = true;
    $$('.rc .pnl').forEach(function (el, j) {
      var v = +el.getAttribute('data-pnl'), small = el.innerHTML.slice(el.innerHTML.indexOf('<small'));
      setTimeout(function () { tween(1200, function (k) { el.innerHTML = '+$' + fmt(v * k) + small; }); }, j * 90);
    });
  }
  if (G && ST && !narrow && !reduced) {
    var dist = function () { return track.scrollWidth - innerWidth + 40; };
    G.to(track, { x: function () { return -dist(); }, ease: 'none', scrollTrigger: { trigger: '#results', start: 'top top', end: function () { return '+=' + dist(); }, pin: '.rs-pin', scrub: .8, invalidateOnRefresh: true, onEnter: countResults } });
  } else once($('#results'), { threshold: .2 }, countResults);

  /* offer: the clock follows the scroll */
  var dRail = $('#dayRail'), fill = $('#dayFill'), knob = $('#dayKnob'), evs = $$('#day .ev li'), pnlL = $('#dayPnlL'), pnlR = $('#dayPnlR');
  function setDay(p) {
    p = Math.max(0, Math.min(1, p));
    var h = dRail.clientHeight - 80;
    fill.style.height = (p * h) + 'px'; knob.style.top = (66 + p * h) + 'px';
    evs.forEach(function (li) { li.classList.toggle('on', +li.getAttribute('data-at') <= p); });
    var l = p < .32 ? 0 : p < .62 ? 40 * (p - .32) / .3 : p < .9 ? 40 * (1 - (p - .62) / .28) : 0;
    pnlL.textContent = (l > 0 ? '+' : '') + l.toFixed(0) + '%'; pnlL.style.color = l > 0 ? 'var(--green2)' : 'var(--dim)';
    var r = p < .11 ? 0 : p < .54 ? 166.97 * (p - .11) / .43 : 166.97;
    pnlR.textContent = '+' + r.toFixed(r >= 166.97 ? 2 : 0) + '%';
  }
  if (G && ST && !narrow && !reduced) {
    ST.create({ trigger: '#day', start: 'top 75%', end: 'bottom 55%', scrub: true, onUpdate: function (self) { setDay(self.progress); } });
  } else once($('#day'), { threshold: .3 }, function () { if (reduced || narrow) setDay(1); else tween(4500, setDay, function (k) { return k; }); });
  addEventListener('resize', function () { if (ST) ST.refresh(); });
  if (!narrow) show(1);
})();
