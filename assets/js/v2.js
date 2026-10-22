/* Potion V2. Rolling figures, a board of real calls, a week that opens day by day, cards that light under the mouse, one table. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(pointer: fine)').matches;
  var fmt = function (n) { return Math.round(n).toLocaleString('en-US'); };
  function once(el, opt, cb) {
    if (!el) return;
    if (!('IntersectionObserver' in window)) { cb(); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { io.disconnect(); cb(); } }); }, opt || { threshold: .3 });
    io.observe(el);
  }

  /* nav */
  var nav = $('#nav');
  addEventListener('scroll', function () { nav.classList.toggle('on', scrollY > 24); }, { passive: true });

  /* reveal */
  var rv = $$('.rv, .lines');
  if ('IntersectionObserver' in window && !reduced) {
    var rio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } }); }, { rootMargin: '0px 0px -10% 0px' });
    rv.forEach(function (el) { rio.observe(el); });
  } else rv.forEach(function (el) { el.classList.add('in'); });

  /* odometer: build columns once, roll when asked */
  function odBuild(el) {
    var txt = el.getAttribute('data-od'); el.innerHTML = ''; el.setAttribute('aria-label', txt);
    txt.split('').forEach(function (ch, idx) {
      if (/\d/.test(ch)) {
        var d = document.createElement('span'); d.className = 'd'; var col = document.createElement('i');
        for (var k = 0; k <= 9; k++) { var b = document.createElement('b'); b.textContent = k; col.appendChild(b); }
        col.setAttribute('data-to', ch); col.style.transitionDelay = (idx * .07) + 's'; d.appendChild(col); el.appendChild(d);
      } else { var c = document.createElement('span'); c.className = 'c' + (ch === '.' || ch === ',' ? ' dot' : ''); c.textContent = ch; el.appendChild(c); }
    });
  }
  function odRoll(el) { $$('.d i', el).forEach(function (col) { col.style.transform = 'translateY(-' + col.getAttribute('data-to') + 'em)'; }); }
  $$('[data-od]').forEach(odBuild);
  if (reduced) $$('[data-od]').forEach(odRoll);

  /* hero board: the rows, twice, so it loops */
  var calls = [
    { s: '$SPCE', c: 'stk', m: 'Stocks', a: '3.24', b: '5.49', g: '+166.97%' },
    { s: '$HYPE', c: 'btc', m: 'Perps', a: '47.37', b: '61.19', g: '+30.6%' },
    { s: '$LIT', c: 'btc', m: 'Perps', a: '1.15', b: '1.64', g: '+42.6%' },
    { s: 'KSA vs URU', c: 'pred', m: 'Prediction', a: '11c', b: '100c', g: '+809.1%' },
    { s: 'NAVI vs VIT', c: 'pred', m: 'Prediction', a: '13c', b: '100c', g: '+621.3%' },
    { s: '$RICH', c: 'sol', m: 'Memes', a: '$50 in', b: '', g: '+15,872%' },
    { s: '$KERRY', c: 'sol', m: 'Memes', a: '$550 in', b: '', g: '+725.28%' },
    { s: 'World Cup meme', c: 'sol', m: 'Memes', a: '40K mcap', b: '', g: '200x' }
  ];
  var bt = $('#boardT');
  calls.concat(calls).forEach(function (r) {
    var d = document.createElement('div'); d.className = 'row';
    d.innerHTML = '<span class="sym"><span class="coin ' + r.c + '"><svg><use href="#m-' + r.c + '"/></svg></span>' + r.s + '</span><span class="mk">' + r.m + '</span><span class="px">' + (r.b ? r.a + ' <b>to ' + r.b + '</b>' : '<b>' + r.a + '</b>') + '</span><span class="g">' + r.g + '</span>';
    bt.appendChild(d);
  });

  /* figures roll when they arrive */
  once($('#figs'), { threshold: .4 }, function () { $$('#figs [data-od]').forEach(odRoll); });

  /* viewer: blinds open on the image chosen */
  var vimgs = $$('#vframe img'), blinds = $('#blinds'), vtabs = $$('.vtab'), vAuto = true, vTimer = null, vCur = null;
  for (var i = 0; i < 8; i++) blinds.appendChild(document.createElement('i'));
  var strips = $$('i', blinds);
  function showChart(key) {
    if (key === vCur) return; vCur = key;
    vtabs.forEach(function (t) { t.classList.toggle('on', t.getAttribute('data-ch') === key); });
    vimgs.forEach(function (im) { im.classList.toggle('on', im.getAttribute('data-ch') === key); });
    if (reduced) return;
    strips.forEach(function (s) { s.style.transition = 'none'; s.style.transform = 'scaleY(1)'; });
    requestAnimationFrame(function () { requestAnimationFrame(function () {
      strips.forEach(function (s, j) { s.style.transition = 'transform .8s cubic-bezier(.16,1,.3,1) ' + (j * .06) + 's'; s.style.transform = 'scaleY(0)'; });
    }); });
    clearTimeout(vTimer);
    if (vAuto) vTimer = setTimeout(function () { showChart(key === 'daily' ? 'cum' : 'daily'); }, 6000);
  }
  once($('#viewer'), { threshold: .35 }, function () { showChart('daily'); });
  vtabs.forEach(function (t) { t.addEventListener('click', function () { vAuto = false; clearTimeout(vTimer); showChart(t.getAttribute('data-ch')); }); });

  /* the week: one day open at a time; it walks by itself until someone touches it */
  var days = $$('.day'), dots = $$('.week-dots i'), wAuto = true, wTimer = null, wCur = -1, wStarted = false;
  function openDay(n) {
    wCur = n;
    days.forEach(function (d, j) { d.classList.toggle('on', j === n); });
    dots.forEach(function (d, j) { d.classList.toggle('done', j < n); d.classList.toggle('on', j === n); if (j > n) d.className = ''; });
    if (n === 5) startRoom();
    if (n === 2) { execBtn.classList.remove('is-busy'); fillBox.style.display = 'none'; }
    clearTimeout(wTimer);
    if (wAuto && !reduced) wTimer = setTimeout(function () { openDay((n + 1) % days.length); }, 4600);
  }
  days.forEach(function (d, j) {
    d.addEventListener('click', function () { if (wCur === j) return; wAuto = false; wStarted = true; clearTimeout(wTimer); dots.forEach(function (x) { x.className = ''; }); openDay(j); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); d.click(); } });
  });
  once($('#week'), { threshold: .3 }, function () { wStarted = true; if (wCur < 0) openDay(0); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { es.forEach(function (e) { if (!e.isIntersecting) clearTimeout(wTimer); else if (wStarted && wAuto) openDay(wCur < 0 ? 0 : wCur); }); }, { threshold: .1 }).observe($('#week'));
  }
  /* wednesday: the visitor executes */
  var execBtn = $('#execBtn'), fillBox = $('#fillBox'), fillPnl = $('#fillPnl');
  execBtn.addEventListener('click', function (e) {
    e.stopPropagation(); if (execBtn.classList.contains('is-busy')) return;
    wAuto = false; clearTimeout(wTimer); dots.forEach(function (x) { x.className = ''; });
    execBtn.classList.add('is-busy');
    setTimeout(function () {
      execBtn.classList.remove('is-busy'); fillBox.style.display = 'flex';
      var t0 = null; (function step(ts) { if (!t0) t0 = ts; var k = Math.min(1, (ts - t0) / 900); k = 1 - Math.pow(1 - k, 3); fillPnl.textContent = '+$' + fmt(153 * k); if (k < 1) requestAnimationFrame(step); })(performance.now());
    }, 900);
  });
  /* weekend: the room */
  var feed = $('#roomFeed'), roomDone = false;
  var chat = [
    { a: 'gas', n: '@gas', t: '09:41', m: 'we fcking flying on <strong>$SPCX</strong>' },
    { a: 'manuel', n: '@Manuel', t: '09:41', m: 'SpaceX agreed to acquire Cursor' },
    { a: 'shaman', n: '@Shaman', t: '09:42', m: 'I just printed <strong>+40%</strong> on $SPCX' },
    { a: 'mxtt', n: '@mxtt', t: '09:42', m: 'Do you think we go higher?' },
    { a: 'mavo', n: '@Mavo', t: '09:43', m: 'helllya' }
  ];
  function addMsg(c, me) {
    var d = document.createElement('div'); d.className = 'rm' + (me ? ' me' : '');
    d.innerHTML = (me ? '<span class="pdp sm me"><b>You</b></span>' : '<span class="pdp sm"><img src="assets/img/avatars/' + c.a + '.png" alt=""></span>') + '<div><b>' + c.n + '<span>' + c.t + '</span></b><p>' + c.m + '</p></div>';
    feed.appendChild(d); while (feed.children.length > 5) feed.firstElementChild.remove();
    requestAnimationFrame(function () { requestAnimationFrame(function () { d.classList.add('in'); }); });
  }
  function startRoom() { if (roomDone) return; roomDone = true; chat.forEach(function (c, i) { setTimeout(function () { addMsg(c); }, 300 + i * 900); }); }
  $('#roomForm').addEventListener('submit', function (e) {
    e.preventDefault(); e.stopPropagation(); var inp = $('#roomInput'), v = inp.value.trim(); if (!v) return;
    wAuto = false; clearTimeout(wTimer); dots.forEach(function (x) { x.className = ''; });
    var now = new Date(), t = ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2);
    addMsg({ n: 'You', t: t, m: v.replace(/[<>&]/g, function (ch) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;' }[ch]; }) }, true); inp.value = '';
  });
  $$('#week input, #week button').forEach(function (el) { el.addEventListener('click', function (e) { e.stopPropagation(); }); });

  /* markets: the light follows the mouse */
  if (fine) $$('.mk-card').forEach(function (c) {
    c.addEventListener('mousemove', function (e) { var r = c.getBoundingClientRect(); c.style.setProperty('--x', (e.clientX - r.left) + 'px'); c.style.setProperty('--y', (e.clientY - r.top) + 'px'); });
  });

  /* table rows, one after another */
  var trs = $$('.table .tr');
  once($('#table'), { threshold: .15 }, function () { trs.forEach(function (tr, j) { setTimeout(function () { tr.classList.add('in'); }, j * 70); }); });

  /* faq */
  $$('.q').forEach(function (q) {
    var b = $('button', q), a = $('.a', q);
    b.addEventListener('click', function () {
      var open = q.classList.contains('open');
      $$('.q.open').forEach(function (o) { o.classList.remove('open'); $('.a', o).style.maxHeight = 0; $('button', o).setAttribute('aria-expanded', 'false'); });
      if (!open) { q.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; b.setAttribute('aria-expanded', 'true'); }
    });
  });
})();
