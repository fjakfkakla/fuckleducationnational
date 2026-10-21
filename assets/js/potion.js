/* Potion landing. Everything plays once when it reaches the screen, then the visitor leads. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var G = window.gsap || null;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(pointer: fine)').matches;
  var fmt = function (n) { return Math.round(n).toLocaleString('en-US'); };

  /* a small tween for numbers, so counters never depend on the CDN */
  function tween(dur, fn, ease, done) {
    var t0 = null; ease = ease || function (k) { return 1 - Math.pow(1 - k, 3); };
    function step(ts) {
      if (!t0) t0 = ts;
      var k = Math.min(1, (ts - t0) / dur);
      fn(ease(k));
      if (k < 1) requestAnimationFrame(step); else if (done) done();
    }
    requestAnimationFrame(step);
  }
  function once(el, opt, cb) {
    if (!('IntersectionObserver' in window)) { cb(); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { io.disconnect(); cb(); } });
    }, opt || { threshold: .3 });
    io.observe(el);
  }

  /* ---------- cursor ---------- */
  if (fine && !reduced) {
    document.body.classList.add('has-cursor');
    var cur = $('.cur'), ring = $('.cur-ring');
    var mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    document.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      cur.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
    });
    (function loop() {
      rx += (mx - rx) * .18; ry += (my - ry) * .18;
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
      requestAnimationFrame(loop);
    })();
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest('a,button,[role=button],input,.rail-b,.row')) document.body.classList.add('cur-on');
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest('a,button,[role=button],input,.rail-b,.row')) document.body.classList.remove('cur-on');
    });
    document.addEventListener('mousedown', function () { document.body.classList.add('cur-down'); });
    document.addEventListener('mouseup', function () { document.body.classList.remove('cur-down'); });
    document.documentElement.addEventListener('mouseleave', function () { cur.classList.add('hidden'); ring.classList.add('hidden'); });
    document.documentElement.addEventListener('mouseenter', function () { cur.classList.remove('hidden'); ring.classList.remove('hidden'); });
  }

  /* ---------- magnetic buttons ---------- */
  if (fine && !reduced) {
    $$('.magnet').forEach(function (b) {
      b.addEventListener('mousemove', function (e) {
        var r = b.getBoundingClientRect();
        var dx = (e.clientX - r.left - r.width / 2) / r.width, dy = (e.clientY - r.top - r.height / 2) / r.height;
        b.style.transform = 'translate(' + dx * 10 + 'px,' + dy * 10 + 'px) translateY(-2px) scale(1.012)';
      });
      b.addEventListener('mouseleave', function () { b.style.transform = ''; });
    });
  }

  /* ---------- nav, progress, burger ---------- */
  var nav = $('#nav'), prog = $('#progress');
  function onScroll() {
    var y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle('on', y > 24);
    prog.style.transform = 'scaleX(' + (h > 0 ? y / h : 0) + ')';
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var burger = $('#burger'), links = $('#navLinks');
  burger.addEventListener('click', function () {
    var o = links.classList.toggle('open'); burger.setAttribute('aria-expanded', o ? 'true' : 'false');
  });
  $$('a', links).forEach(function (a) { a.addEventListener('click', function () { links.classList.remove('open'); }); });

  /* ---------- reveal ---------- */
  var rv = $$('.rv');
  if ('IntersectionObserver' in window && !reduced) {
    var rio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -12% 0px' });
    rv.forEach(function (el) { rio.observe(el); });
  } else rv.forEach(function (el) { el.classList.add('in'); });

  /* ---------- hero ---------- */
  var heroBg = $('#heroBg'), hero = $('#hero'), stack = $('#heroStack');
  if (fine) hero.addEventListener('mousemove', function (e) {
    var r = hero.getBoundingClientRect();
    var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    heroBg.style.setProperty('--mx', (px * 100) + '%'); heroBg.style.setProperty('--my', (py * 100) + '%');
    if (!reduced) $$('.msg', stack).forEach(function (m, i) {
      var d = (i + 1) * 6;
      m.style.transform = 'translate(' + ((px - .5) * d) + 'px,' + ((py - .5) * d) + 'px) rotateY(' + ((px - .5) * 6) + 'deg) rotateX(' + ((.5 - py) * 6) + 'deg)';
    });
  });
  if (G && !reduced) {
    G.from('.hero-t .l1, .hero-t .l2', { y: 40, opacity: 0, duration: .9, ease: 'power3.out', stagger: .1, delay: .1 });
    G.from('.hero-actions .btn', { y: 18, opacity: 0, duration: .7, ease: 'power3.out', stagger: .08, delay: .45 });
    G.from('.msg', { y: 60, opacity: 0, rotate: -3, duration: .9, ease: 'back.out(1.5)', stagger: .14, delay: .5 });
    /* each card floats at its own pace: never the same duration twice */
    [4.6, 5.7, 5.1].forEach(function (d, i) {
      G.to('.msg-' + (i + 1), { y: '-=9', duration: d, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: i * .4 });
    });
  }
  /* the word that changes: the markets Potion covers */
  var words = ['Crypto', 'Meme', 'Stock', 'DeFi', 'Prediction'], wi = 0, swap = $('#heroSwap');
  function nextWord() {
    wi = (wi + 1) % words.length;
    var old = $('i', swap), nw = document.createElement('i'); nw.textContent = words[wi];
    nw.style.position = 'absolute'; nw.style.left = 0; nw.style.top = 0;
    swap.appendChild(nw);
    var w = Math.max(nw.offsetWidth, 10);
    if (G && !reduced) {
      G.to(old, { yPercent: -100, opacity: 0, duration: .55, ease: 'power3.in', onComplete: function () { old.remove(); nw.style.position = ''; } });
      G.fromTo(nw, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .6, ease: 'power3.out', delay: .3 });
      G.to(swap, { width: w, duration: .5, ease: 'power3.inOut' });
    } else { old.remove(); nw.style.position = ''; swap.style.width = ''; }
  }
  swap.style.width = $('i', swap).offsetWidth + 'px';
  setInterval(nextWord, 2600);

  /* ---------- ticker: double the track so it loops ---------- */
  var tk = $('#ticker'); tk.innerHTML += tk.innerHTML;

  /* ---------- performance ---------- */
  var wrNum = $('#wrNum'), tally = $('#wrTally');
  for (var i = 0; i < 163; i++) { var b = document.createElement('i'); if (i >= 137) b.className = 'r'; tally.appendChild(b); }
  var bars = $$('i', tally), wrPlayed = false;
  function rollNum(from) {
    tween(1500, function (k) { wrNum.innerHTML = (from + (71.07 - from) * k).toFixed(2) + '<small>%</small>'; }, null, function () {
      if (G && !reduced) G.fromTo(wrNum, { scale: 1.08 }, { scale: 1, duration: .6, ease: 'elastic.out(1,.45)' });
    });
  }
  function playWr() {
    rollNum(0);
    $$('[data-count]', $('#wrBoard')).forEach(function (el) {
      var v = +el.getAttribute('data-count');
      tween(1400, function (k) { el.textContent = fmt(v * k); });
    });
    if (G && !reduced) G.to(bars, { opacity: 1, scaleY: 1, duration: .45, ease: 'back.out(2)', stagger: .007, delay: .1 });
    else bars.forEach(function (b) { b.style.opacity = 1; b.style.transform = 'none'; });
    revealChart('daily', true);
  }
  once($('#wrBoard'), { threshold: .3 }, function () { wrPlayed = true; playWr(); });
  wrNum.addEventListener('click', function () { if (wrPlayed) rollNum(45); });
  wrNum.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); rollNum(45); } });

  function moveThumb(sw, btn) {
    var th = $('.thumb', sw);
    th.style.left = btn.offsetLeft + 'px'; th.style.width = btn.offsetWidth + 'px';
    $$('button', sw).forEach(function (x) { x.classList.toggle('on', x === btn); });
  }
  $$('.switch').forEach(function (sw) { var on = $('button.on', sw); if (on) moveThumb(sw, on); });
  addEventListener('resize', function () { $$('.switch').forEach(function (sw) { var on = $('button.on', sw); if (on) moveThumb(sw, on); }); });

  var imgs = $$('#chImg img'), scan = $('#chScan'), chCur = null;
  function revealChart(key, first) {
    if (key === chCur) return; chCur = key;
    var nw = imgs.filter(function (im) { return im.getAttribute('data-ch') === key; })[0];
    var old = imgs.filter(function (im) { return im !== nw && im.classList.contains('on'); })[0];
    nw.style.zIndex = 2; if (old) old.style.zIndex = 1;
    if (reduced) { imgs.forEach(function (im) { im.classList.toggle('on', im === nw); }); return; }
    nw.classList.remove('on'); nw.style.clipPath = 'inset(0 100% 0 0)';
    scan.style.opacity = 1;
    tween(first ? 1600 : 1000, function (k) {
      nw.style.clipPath = 'inset(0 ' + ((1 - k) * 100) + '% 0 0)';
      scan.style.left = 'calc(' + (k * 100) + '% - 1px)';
    }, function (k) { return 1 - Math.pow(1 - k, 2); }, function () {
      scan.style.opacity = 0; nw.classList.add('on'); nw.style.clipPath = '';
      if (old) old.classList.remove('on');
    });
  }
  $$('#chSwitch button').forEach(function (b) {
    b.addEventListener('click', function () { moveThumb($('#chSwitch'), b); revealChart(b.getAttribute('data-ch')); });
  });
  /* the chart card tilts under the mouse */
  if (fine && !reduced) $$('.ch-img').forEach(function (c) {
    c.addEventListener('mousemove', function (e) {
      var r = c.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
      c.style.transform = 'perspective(900px) rotateY(' + (px * 8) + 'deg) rotateX(' + (-py * 8) + 'deg)';
    });
    c.addEventListener('mouseleave', function () { c.style.transform = ''; });
  });

  /* ---------- process: the road follows the scenes ---------- */
  var rds = $$('#road .rd'), scenes = $$('.scene');
  function setStep(n) {
    rds.forEach(function (r) {
      var s = +r.getAttribute('data-step'), was = r.classList.contains('on');
      r.classList.toggle('done', s < n); r.classList.toggle('on', s === n);
      if (s === n && !was) { r.classList.remove('just'); void r.offsetWidth; r.classList.add('just'); }
    });
  }
  if ('IntersectionObserver' in window) {
    var sio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) setStep(+e.target.getAttribute('data-step')); });
    }, { rootMargin: '-35% 0px -45% 0px', threshold: 0 });
    scenes.forEach(function (s) { sio.observe(s); });
  }
  rds.forEach(function (r) {
    r.addEventListener('click', function () { $('#scene' + r.getAttribute('data-step')).scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' }); });
  });

  /* scene 1: the report lands */
  var cal = $('#cal'), rpDoc = $('#rpDoc'), rpToast = $('#rpToast'), rpTitle = $('#rpTitle'), rpDate = $('#rpDate'), rpLine = $('#rpLine'), rpArea = $('#rpArea');
  var calSets = { week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], month: ['1', '2', '3', '4', '5', '6', '7'] };
  var rpTl = null;
  function playReport(kind) {
    cal.innerHTML = ''; calSets[kind].forEach(function (d) { var i = document.createElement('i'); i.textContent = d; cal.appendChild(i); });
    rpTitle.textContent = kind === 'week' ? 'Weekly Market Newsletter' : 'Monthly Macro Report';
    rpDate.textContent = kind === 'week' ? 'Monday' : 'The 1st';
    var day = cal.children[0], lines = $$('.dl i', rpDoc), L = rpLine.getTotalLength();
    rpLine.style.strokeDasharray = L; rpLine.style.strokeDashoffset = L;
    rpArea.setAttribute('d', 'M0 50 L0 50 Z');
    if (!G || reduced) {
      day.classList.add('on'); rpDoc.style.opacity = 1; rpDoc.style.transform = 'none';
      lines.forEach(function (l) { l.style.transform = 'none'; }); rpLine.style.strokeDashoffset = 0; return;
    }
    if (rpTl) rpTl.kill();
    rpTl = G.timeline();
    rpTl.set(rpDoc, { opacity: 0, y: 40, rotate: -2 }).set(rpToast, { opacity: 0, y: -16, scale: .94 }).set(lines, { scaleX: 0 })
      .add(function () { day.classList.add('on'); }, .2)
      .to(rpToast, { opacity: 1, y: 0, scale: 1, duration: .5, ease: 'back.out(1.8)' }, .5)
      .to(rpDoc, { opacity: 1, y: 0, rotate: 0, duration: .7, ease: 'back.out(1.4)' }, 1.1)
      .to(lines, { scaleX: 1, duration: .4, stagger: .08, ease: 'power2.out' }, 1.4)
      .to(rpLine, { strokeDashoffset: 0, duration: .9, ease: 'power2.out', onUpdate: function () {
        var k = this.progress(), pts = [], n = 24;
        for (var j = 0; j <= n * k; j++) { var p = rpLine.getPointAtLength(L * j / n); pts.push(p.x + ' ' + p.y); }
        if (pts.length) rpArea.setAttribute('d', 'M0 54 L' + pts.join(' L') + ' L' + pts[pts.length - 1].split(' ')[0] + ' 54 Z');
      } }, 1.7)
      .to(rpToast, { opacity: 0, y: -8, duration: .4, ease: 'power2.in' }, 3.4);
  }
  once($('#scene1'), { threshold: .35 }, function () { playReport('week'); });
  $$('#rpSwitch button').forEach(function (b) {
    b.addEventListener('click', function () { moveThumb($('#rpSwitch'), b); playReport(b.getAttribute('data-rp')); });
  });

  /* scene 2: the trades move and the phone buzzes */
  var tog = $('#ntfTog'), stackN = $('#ntfStack');
  var updates = [
    { t: 'hype', title: '$HYPE long', text: 'Target reached at 61.19. +30.6%', pct: 30.6, st: 'Target hit' },
    { t: 'lit', title: '$LIT long', text: 'Closed at 1.64. +42.6%', pct: 42.6, st: 'Closed' },
    { t: 'spce', title: '$SPCE', text: 'Exit at 5.49. +166.97%', pct: 166.97, st: 'Exit' }
  ];
  var ntfTimers = [];
  function resetTrades() {
    ntfTimers.forEach(clearTimeout); ntfTimers = []; stackN.innerHTML = '';
    $$('.trade').forEach(function (tr) { $('.st', tr).textContent = 'Open'; $('.st', tr).className = 'chip st'; var p = $('.pnl', tr); p.textContent = '0.0%'; p.classList.remove('g'); });
  }
  function playNotify() {
    resetTrades();
    updates.forEach(function (u, i) {
      ntfTimers.push(setTimeout(function () {
        var n = document.createElement('div'); n.className = 'ntf';
        n.innerHTML = '<span class="app"><img src="assets/img/potion-mark.png" alt=""></span><span><b>' + u.title + '</b><small>' + u.text + '</small></span>';
        stackN.prepend(n);
        if (stackN.children.length > 3) stackN.lastElementChild.remove();
        if (G && !reduced) G.to(n, { opacity: 1, y: 0, duration: .5, ease: 'back.out(1.6)' }); else { n.style.opacity = 1; n.style.transform = 'none'; }
        Array.prototype.forEach.call(stackN.children, function (c, j) {
          if (!j) return;
          if (G && !reduced) G.to(c, { y: 7 * j, scale: 1 - .045 * j, opacity: .55 / j, duration: .4, ease: 'power2.out' });
          else { c.style.transform = 'translateY(' + 7 * j + 'px) scale(' + (1 - .045 * j) + ')'; c.style.opacity = .55 / j; }
        });
        var tr = $('.trade[data-t="' + u.t + '"]'), st = $('.st', tr), p = $('.pnl', tr);
        st.textContent = u.st; st.className = 'chip st green'; p.classList.add('g');
        tween(900, function (k) { p.textContent = '+' + (u.pct * k).toFixed(u.pct % 1 && String(u.pct).split('.')[1].length > 1 ? 2 : 1) + '%'; });
        if (G && !reduced) G.fromTo(tr, { backgroundColor: 'rgba(34,197,94,.14)' }, { backgroundColor: 'rgba(34,197,94,0)', duration: 1.2 });
      }, 600 + i * 1500));
    });
  }
  once($('#scene2'), { threshold: .35 }, function () { playNotify(); });
  tog.addEventListener('click', function () {
    var on = !tog.classList.contains('on');
    tog.classList.toggle('on', on); tog.setAttribute('aria-pressed', on ? 'true' : 'false');
    if (on) playNotify(); else resetTrades();
  });

  /* scene 3: the visitor executes */
  var side = 'long', size = 500, execBtn = $('#execBtn'), pos = $('#pos'), posPnl = $('#posPnl');
  $$('#sideSwitch button').forEach(function (b) { b.addEventListener('click', function () { moveThumb($('#sideSwitch'), b); side = b.getAttribute('data-side'); }); });
  $$('#sizes button').forEach(function (b) { b.addEventListener('click', function () { $$('#sizes button').forEach(function (x) { x.classList.toggle('on', x === b); }); size = +b.getAttribute('data-size'); }); });
  execBtn.addEventListener('click', function () {
    if (execBtn.classList.contains('is-busy')) return;
    execBtn.classList.add('is-busy'); pos.classList.remove('on');
    setTimeout(function () {
      execBtn.classList.remove('is-busy');
      pos.classList.add('on');
      var gain = size * .306, lbl = side === 'long' ? '+30.6%' : 'long only on this call';
      if (G && !reduced) G.fromTo(pos, { y: 14, opacity: 0, scale: .96 }, { y: 0, opacity: 1, scale: 1, duration: .55, ease: 'back.out(1.6)' });
      tween(900, function (k) { posPnl.innerHTML = '+$' + fmt(gain * k) + ' <span>' + lbl + '</span>'; });
    }, 900);
  });

  /* scene 4: the room talks, then the visitor talks */
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
    d.innerHTML = (me ? '<span class="pdp me"><b>You</b></span>' : '<span class="pdp"><img src="assets/img/avatars/' + c.a + '.png" alt=""></span>') +
      '<div><b>' + c.n + '<span>' + c.t + '</span></b><p>' + c.m + '</p></div>';
    feed.appendChild(d);
    while (feed.children.length > 7) feed.firstElementChild.remove();
    if (G && !reduced) G.to(d, { opacity: 1, y: 0, duration: .45, ease: 'back.out(1.6)' }); else { d.style.opacity = 1; d.style.transform = 'none'; }
  }
  var chatTimers = [];
  once($('#scene4'), { threshold: .35 }, function () {
    chat.forEach(function (c, i) { chatTimers.push(setTimeout(function () { addMsg(c); }, 300 + i * 1100)); });
    var cnt = $('#room [data-count]'); tween(1800, function (k) { cnt.textContent = fmt(108000 * k); });
  });
  $('#roomForm').addEventListener('submit', function (e) {
    e.preventDefault(); var inp = $('#roomInput'), v = inp.value.trim(); if (!v) return;
    var now = new Date(), t = ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2);
    addMsg({ n: 'You', t: t, m: v.replace(/[<>&]/g, function (ch) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;' }[ch]; }) }, true);
    inp.value = '';
  });

  /* ---------- results: the title is the data ---------- */
  var T = [
    { a: 'gas', n: '@gas', mk: 'Memes', pnl: 96500, title: 'on a World Cup memecoin.', q: 'called at 40K mcap and bid 482$, clean 200x from world cup memecoin' },
    { a: 'neilarora16', n: '@neilarora16', mk: 'Perps', pnl: 69874, title: 'on one $LIT long.', q: 'entered a perp long at 1.15 with $49K margin, called it inside Potion, and closed at 1.64 for +42.6% profit' },
    { a: 'manuel', n: '@Manuel', mk: 'Perps', pnl: 35830, title: 'on a $HYPE long.', q: 'took the perp long from 47.37 to 61.19 after calling it in Potion, locked +30.6% profit on $27,420 margin' },
    { a: 'shaman', n: '@Shaman', mk: 'Stocks', pnl: 25045, title: 'on Virgin Galactic stock.', q: 'entered and called in potion Virgin Galactic Holdings stocks at 3,24 and we exited at 5,49 with clean +166,97%' },
    { a: 'mavo', n: '@Mavo', mk: 'Memes', pnl: 7940, title: 'from $50 in $RICH.', q: 'invested $50 early in $RICH, memecoin on Solana, and called in community, caught +15872%' },
    { a: 'straightmisses', n: '@StraightMisses', mk: 'Prediction', pnl: 7934, title: 'on a CS2 prediction.', q: 'called entry at 13c for Natus Vincere vs Vitality in potion community and we exited on 100c with clean +621,3%' },
    { a: 'dannyyak', n: '@DannyYak', mk: 'Prediction', pnl: 4545, title: 'on a World Cup prediction.', q: 'called entry at 11c for Saudi Arabia vs Uruguay in potion community and we exited on 100c with clean +809,1%' },
    { a: 'mxtt', n: '@mxtt', mk: 'Memes', pnl: 4007, title: 'from $550 in $KERRY.', q: 'invested $550 and called in community, caught +725,28%' }
  ];
  var rail = $('#rsRail'), track = $('#rsTrack'), rsTitle = $('#rsTitle'), rsPdp = $('#rsPdp img'), rsName = $('#rsName'), rsChip = $('#rsChip'), rsQuote = $('#rsQuote'), rsPnl = $('#rsPnl');
  var rsI = 0, rsAuto = true, rsTimer = null, rsVisible = false, rsStarted = false;
  T.forEach(function (t, i) {
    var b = document.createElement('button'); b.className = 'rail-b' + (i === 0 ? ' on' : ''); b.setAttribute('data-i', i);
    b.innerHTML = '<span class="pdp"><img src="assets/img/avatars/' + t.a + '.png" alt=""></span><span><b>' + t.n + '</b><span>+$' + fmt(t.pnl) + '</span></span><i class="left"></i>';
    b.addEventListener('click', function () { rsAuto = false; clearTimeout(rsTimer); setResult(i); });
    rail.appendChild(b);
  });
  T.concat(T).forEach(function (t, i) {
    var c = document.createElement('button'); c.className = 'mq';
    c.innerHTML = '<div class="h"><span class="pdp sm"><img src="assets/img/avatars/' + t.a + '.png" alt=""></span><b>' + t.n + '</b><span class="chip">' + t.mk + '</span></div><p>' + t.q + '</p><div class="pnl">+$' + fmt(t.pnl) + '</div>';
    c.addEventListener('click', function () { rsAuto = false; clearTimeout(rsTimer); setResult(i % T.length); $('#rsBoard').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' }); });
    track.appendChild(c);
  });
  function setResult(i) {
    rsI = i; var t = T[i];
    $$('.rail-b', rail).forEach(function (b, j) { b.classList.toggle('on', j === i); var l = $('.left', b); l.style.transition = 'none'; l.style.width = 0; });
    rsTitle.innerHTML = '<b>+$' + fmt(t.pnl) + '</b> <em>' + t.title + '</em>';
    rsPdp.src = 'assets/img/avatars/' + t.a + '.png'; rsName.textContent = t.n; rsChip.textContent = t.mk; rsQuote.textContent = t.q;
    tween(1100, function (k) { rsPnl.textContent = '+$' + fmt(t.pnl * k); });
    if (G && !reduced) {
      G.fromTo([rsTitle, '.rs-id', rsQuote], { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .08, ease: 'power3.out' });
      G.fromTo(rsPnl, { scale: 1.06 }, { scale: 1, duration: .7, ease: 'elastic.out(1,.5)' });
    }
    if (rsAuto && rsVisible) {
      var l = $('.rail-b.on .left', rail); void l.offsetWidth; l.style.transition = 'width 6.2s linear'; l.style.width = '100%';
      rsTimer = setTimeout(function () { setResult((rsI + 1) % T.length); }, 6200);
    }
  }
  if ('IntersectionObserver' in window) {
    var rsio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        rsVisible = e.isIntersecting;
        if (rsVisible && !rsStarted) { rsStarted = true; setResult(0); }
        else if (rsVisible && rsAuto) { clearTimeout(rsTimer); setResult(rsI); }
        else if (!rsVisible) clearTimeout(rsTimer);
      });
    }, { threshold: .3 });
    rsio.observe($('#rsBoard'));
  } else { rsVisible = true; setResult(0); }

  /* ---------- offer: what is missing lights up in front ---------- */
  var tiles = $$('.tile');
  once($('#premium'), { rootMargin: '0px 0px -18% 0px', threshold: 0 }, function () {
    if (G && !reduced) G.to(tiles, { opacity: 1, y: 0, duration: .7, stagger: .08, ease: 'power3.out', delay: .15 });
    else tiles.forEach(function (t) { t.style.opacity = 1; t.style.transform = 'none'; });
    if (G && !reduced) G.fromTo('.before .pi, .before .none', { scale: 1.5, rotate: -8 }, { scale: 1, rotate: 0, duration: .55, ease: 'back.out(2)', stagger: .07, delay: .35 });
  });
  function hi(k, on) { tiles.forEach(function (t) { if (t.getAttribute('data-k') === k) t.classList.toggle('hi', on); }); }
  $$('.row').forEach(function (r) {
    var k = r.getAttribute('data-k');
    ['mouseenter', 'focus', 'touchstart'].forEach(function (ev) { r.addEventListener(ev, function () { hi(k, true); }, { passive: true }); });
    ['mouseleave', 'blur', 'touchend'].forEach(function (ev) { r.addEventListener(ev, function () { hi(k, false); }); });
  });
})();
