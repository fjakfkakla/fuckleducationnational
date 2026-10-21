/* Révisions de seconde : moteur de l'application (JavaScript sans dépendance) */
(function () {
  'use strict';
  const P = window.PROGRAMME || [];
  const $ = (s, el = document) => el.querySelector(s);
  const view = $('#view');
  const G = window.glyphe, GE = window.GESTES;

  /* ---------- Couleur de chaque matière (la couleur nomme, elle ne peint pas l'écran) ---------- */
  const COULEURS = {
    maths: ['#1d4ed8', '#1a3fd0', '#3b6ff5', '#fff'], pc: ['#0284c7', '#0369a1', '#38bdf8', '#fff'], svt: ['#0e9e64', '#0b7d4f', '#34d399', '#fff'],
    histoire: ['#b45309', '#92400e', '#e6a91e', '#fff'], geo: ['#1592b4', '#0f7391', '#2fb8d8', '#fff'], francais: ['#db2777', '#be185d', '#f472b6', '#fff'],
    ses: ['#1e3a8a', '#0b1c4d', '#4c6fe0', '#fff'], snt: ['#64748b', '#475569', '#94a3b8', '#fff'], anglais: ['#e11d48', '#be123c', '#fb7185', '#fff'], emc: ['#f97316', '#c2410c', '#fb923c', '#fff']
  };
  const cvars = m => { const c = COULEURS[m.id] || COULEURS.maths; return `--c:${c[0]};--c2:${c[1]};--c3:${c[2]};--c-encre:${c[3]}`; };

  /* ---------- Stockage ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem('rv:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem('rv:' + k, JSON.stringify(v)); } catch {} }
  };
  const state = { srs: store.get('srs', {}), quiz: store.get('quiz', {}), lu: store.get('lu', {}), feynman: store.get('feynman', {}) };
  const save = () => { for (const k of ['srs', 'quiz', 'lu', 'feynman']) store.set(k, state[k]); };
  const today = () => new Date().toISOString().slice(0, 10);
  let toastT;
  function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 1600); }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- Mini markdown ---------- */
  function inline(s) {
    return esc(s).split(/(`[^`]+`)/).map(part => {
      if (part.startsWith('`') && part.endsWith('`') && part.length > 1) return '<code>' + part.slice(1, -1) + '</code>';
      return part
        .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
        .replace(/(^|[\s(«'])\*([^*\n]+?)\*(?=[\s).,;:!?»']|$)/g, '$1<i>$2</i>')
        .replace(/([A-Za-zÀ-ÿᴬ‖‖])_([A-Za-z0-9À-ÿ]+)/g, '$1<sub>$2</sub>');
    }).join('');
  }
  function md(txt) {
    const lines = txt.trim().split('\n');
    let out = '', inList = false, inPre = false, pre = [];
    const closeList = () => { if (inList) { out += '</ul>'; inList = false; } };
    for (const raw of lines) {
      const l = raw.trimEnd();
      if (l.startsWith('```')) { if (inPre) { out += '<pre>' + esc(pre.join('\n')) + '</pre>'; pre = []; inPre = false; } else { closeList(); inPre = true; } continue; }
      if (inPre) { pre.push(raw); continue; }
      if (l.startsWith('## ')) { closeList(); out += '<h4>' + inline(l.slice(3)) + '</h4>'; }
      else if (l.startsWith('$ ')) { closeList(); out += '<div class="formule">' + inline(l.slice(2)) + '</div>'; }
      else if (l.startsWith('! ')) { closeList(); out += '<div class="note"><span class="label">Méthode</span>' + inline(l.slice(2)) + '</div>'; }
      else if (l.startsWith('X ')) { closeList(); out += '<div class="note warn"><span class="label">Erreur fréquente</span>' + inline(l.slice(2)) + '</div>'; }
      else if (l.startsWith('- ')) { if (!inList) { out += '<ul>'; inList = true; } out += '<li>' + inline(l.slice(2)) + '</li>'; }
      else if (l === '') { closeList(); }
      else { closeList(); out += '<p>' + inline(l) + '</p>'; }
    }
    closeList();
    return out;
  }

  /* ---------- Données ---------- */
  const chapitres = [];
  P.forEach(m => m.chapitres.forEach((c, i) => { c.matiere = m; c.num = i + 1; chapitres.push(c); }));
  const findChap = id => chapitres.find(c => c.id === id);
  const cards = c => (c.notions || []).map((n, i) => ({ id: c.id + ':n' + i, q: n.terme, a: n.def, ex: n.exemple, chap: c }));
  const allCards = () => chapitres.flatMap(cards);
  const isDue = k => { const s = state.srs[k.id]; return !s || s.due <= today(); };
  const dueCards = () => allCards().filter(isDue);

  /* ---------- SM-2 (répétition espacée) ---------- */
  function rate(id, q) {
    const s = state.srs[id] || { ef: 2.5, iv: 0, reps: 0 };
    if (q < 3) { s.reps = 0; s.iv = 1; }
    else { s.reps++; s.iv = s.reps === 1 ? 1 : s.reps === 2 ? 3 : Math.round(s.iv * s.ef); s.ef = Math.max(1.3, s.ef + 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)); }
    const d = new Date(); d.setDate(d.getDate() + s.iv); s.due = d.toISOString().slice(0, 10);
    state.srs[id] = s; save();
  }
  function progress(c) {
    const ks = cards(c); if (!ks.length) return 0;
    const known = ks.filter(k => state.srs[k.id] && state.srs[k.id].reps >= 2).length;
    const q = state.quiz[c.id] ? state.quiz[c.id].best : 0;
    return Math.min(100, Math.round((known / ks.length) * 60 + (state.lu[c.id] ? 15 : 0) + q * 25));
  }
  function matProgress(m) { const l = m.chapitres.map(progress); return Math.round(l.reduce((a, b) => a + b, 0) / Math.max(1, l.length)); }
  const pct = n => n + ' %';
  const pastille = (m, cls = 'pastille') => `<span class="${cls}" style="${cvars(m)}">${G(m.id)}</span>`;
  const piece = (m, g) => `<span class="piece${g ? ' g' : ''}" style="${cvars(m)}">${G(m.id)}</span>`;

  /* ---------- Navigation ---------- */
  function nav() {
    const n = $('#nav'); const h = location.hash || '#/';
    const on = href => h === href || (href !== '#/' && h.startsWith(href));
    n.innerHTML =
      `<a href="#/" class="${on('#/') ? 'active' : ''}">Aujourd'hui</a>` +
      `<a href="#/revision" class="${on('#/revision') ? 'active' : ''}">Révision du jour<span class="chip">${dueCards().length}</span></a>` +
      `<a href="#/methode" class="${on('#/methode') ? 'active' : ''}">Méthode</a>` +
      `<a href="#/progression" class="${on('#/progression') ? 'active' : ''}">Progression</a>` +
      '<div class="sep">Matières</div>' +
      P.map(m => `<a href="#/matiere/${m.id}" class="${on('#/matiere/' + m.id) || (h.startsWith('#/chapitre/') && findChap(h.split('/')[2]) && findChap(h.split('/')[2]).matiere === m) ? 'active' : ''}" style="${cvars(m)}">${pastille(m)}${m.nom}<span class="chip">${pct(matProgress(m))}</span></a>`).join('');
    $('#sidebar').classList.remove('open');
  }
  function route() {
    const h = (location.hash || '#/').slice(2).split('/');
    window.scrollTo(0, 0);
    if (h[0] === '') home();
    else if (h[0] === 'matiere') matiere(h[1]);
    else if (h[0] === 'chapitre') chapitre(h[1], h[2] || 'cours');
    else if (h[0] === 'revision') revision(h[1]);
    else if (h[0] === 'methode') methode();
    else if (h[0] === 'progression' || h[0] === 'stats') progression();
    else home();
    nav();
  }
  window.addEventListener('hashchange', route);
  const tete = (titre, droite = '', m = null) => `<div class="tete"><h1>${m ? piece(m, true) : ''}<span>${titre}</span></h1><div class="droite">${droite}</div></div>`;

  /* ---------- Aujourd'hui ---------- */
  function home() {
    const due = dueCards().length;
    const lus = chapitres.filter(c => state.lu[c.id]).length;
    const quizOk = Object.values(state.quiz).filter(q => q.best >= 0.8).length;
    const sues = allCards().filter(k => state.srs[k.id] && state.srs[k.id].reps >= 2).length;
    const premier = chapitres.find(c => !state.lu[c.id]);
    const action = due ? `<a class="plaque blanc" href="#/revision">Réviser ${due} carte${due > 1 ? 's' : ''}${GE.fleche}</a>`
      : premier ? `<a class="plaque blanc" href="#/chapitre/${premier.id}">${lus ? 'Chapitre suivant' : 'Premier chapitre'}${GE.fleche}</a>` : '';
    const date = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
    const tuile = (m, v, l) => `<div class="tuile" style="${cvars(m)}"><span class="pastille">${G(m.id)}</span><span class="v">${v}</span><span class="l">${l}</span></div>`;
    view.innerHTML = tete("Aujourd'hui") + `
    <div class="planche">
      <div class="date">${date.charAt(0).toUpperCase() + date.slice(1)}</div>
      <div class="tuiles">
        <div class="tuile" style="--c:#1d4ed8"><span class="v">${due}</span><span class="l">cartes à revoir</span></div>
        <div class="tuile" style="--c:#0e9e64"><span class="v">${sues}</span><span class="l">cartes sues</span></div>
        <div class="tuile" style="--c:#b45309"><span class="v">${lus}<span style="font-size:16px;color:#8a93a8"> / ${chapitres.length}</span></span><span class="l">chapitres lus</span></div>
        <div class="tuile" style="--c:#db2777"><span class="v">${quizOk}</span><span class="l">quiz réussis</span></div>
      </div>
      ${action}
    </div>
    <h2>Matières</h2>
    ${P.map(m => `<a class="ligne" href="#/matiere/${m.id}" style="${cvars(m)}">${pastille(m)}<span class="nom g">${m.nom}</span><span class="chip c">${pct(matProgress(m))}</span><span class="fleche">${GE.fleche}</span></a>`).join('')}`;
  }

  /* ---------- Matière ---------- */
  function matiere(id) {
    const m = P.find(x => x.id === id); if (!m) return home();
    const themes = [...new Set(m.chapitres.map(c => c.theme))];
    const dues = m.chapitres.flatMap(cards).filter(isDue).length;
    view.innerHTML = `<div style="${cvars(m)}">` + tete(m.nom, `<span class="chip c">${pct(matProgress(m))}</span>${dues ? `<a class="plaque" href="#/revision/${m.id}">Réviser ${dues} carte${dues > 1 ? 's' : ''}${GE.fleche}</a>` : ''}`, m) +
      themes.map(t => `<h2>${t}</h2>` + m.chapitres.filter(c => c.theme === t).map(c => `
        <a class="ligne" href="#/chapitre/${c.id}"><span class="num">${c.num}</span><span class="nom">${c.titre}</span><span class="chip">${c.duree || 20} min</span><span class="chip c">${pct(progress(c))}</span><span class="fleche">${GE.fleche}</span></a>`).join('')).join('') +
      `<h2>Ressources</h2>${(m.ressources || []).map(r => `<a class="ressource" href="${r.url}" target="_blank" rel="noopener">${r.nom}${GE.externe}</a>`).join('')}</div>`;
  }

  /* ---------- Chapitre ---------- */
  function switchHtml(c, tab) {
    const tabs = [['cours', 'Cours'], ['notions', 'Notions'], ['flash', 'Cartes'], ['quiz', 'Quiz'], ['feynman', 'Expliquer'], ['exos', 'Exercices']];
    return `<div class="switch" id="switch"><span class="aplat"></span>${tabs.map(([k, l]) => `<button class="${tab === k ? 'on' : ''}" data-h="#/chapitre/${c.id}/${k}">${l}</button>`).join('')}</div>`;
  }
  function switchInit() {
    const sw = $('#switch'); if (!sw) return;
    const place = () => { const b = sw.querySelector('button.on'); const a = sw.querySelector('.aplat'); if (b) { a.style.left = b.offsetLeft + 'px'; a.style.width = b.offsetWidth + 'px'; } };
    sw.querySelectorAll('button').forEach(b => b.onclick = () => { sw.querySelectorAll('button').forEach(x => x.classList.remove('on')); b.classList.add('on'); place(); setTimeout(() => { location.hash = b.dataset.h; }, 120); });
    const chap = location.hash.split('/')[2] || '';
    const prev = sessionStorage.getItem('sw'); const a = sw.querySelector('.aplat'); a.style.transition = 'none';
    if (prev && prev.split(',')[0] === chap) { const [, l, w] = prev.split(','); a.style.left = l + 'px'; a.style.width = w + 'px'; } else { place(); }
    a.getBoundingClientRect(); a.style.transition = '';
    place(); const b = sw.querySelector('button.on'); if (b) sessionStorage.setItem('sw', chap + ',' + b.offsetLeft + ',' + b.offsetWidth);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);
  }
  function chapitre(id, tab) {
    const c = findChap(id); if (!c) return home();
    const m = c.matiere; const next = m.chapitres[c.num];
    view.innerHTML = `<div style="${cvars(m)}">` + tete(c.titre, `<span class="chip">${c.duree || 20} min</span><span class="chip c">${pct(progress(c))}</span>`, m) + switchHtml(c, tab) + `<div id="tab"></div></div>`;
    switchInit();
    const el = $('#tab');
    if (tab === 'cours') {
      el.innerHTML = `<div class="carte cours">${c.cours.map(s => `<h4>${esc(s.titre)}</h4>${md(s.texte)}`).join('')}</div>
      <div class="actions"><button class="plaque" id="luBtn">${state.lu[c.id] ? 'Revoir les cartes' : 'Marquer comme lu'}${GE.fleche}</button>${next ? `<a class="fantome" href="#/chapitre/${next.id}">Chapitre suivant</a>` : ''}</div>`;
      $('#luBtn').onclick = () => { state.lu[c.id] = true; save(); location.hash = '#/chapitre/' + c.id + '/flash'; };
    }
    if (tab === 'notions') el.innerHTML = (c.notions || []).map(n => `<div class="def"><b>${esc(n.terme)}</b> : ${inline(n.def)}${n.exemple ? `<div class="ex">${inline(n.exemple)}</div>` : ''}</div>`).join('') || '<p class="vide">Aucune notion</p>';
    if (tab === 'flash') flashSession(el, cards(c), false);
    if (tab === 'quiz') quizSession(el, c);
    if (tab === 'feynman') feynman(el, c);
    if (tab === 'exos') {
      el.innerHTML = `${c.pieges && c.pieges.length ? '<h3>Erreurs fréquentes</h3><div class="carte cours"><ul>' + c.pieges.map(p => `<li>${inline(p)}</li>`).join('') + '</ul></div>' : ''}
      ${c.astuces && c.astuces.length ? '<h3>Méthode</h3><div class="carte cours"><ul>' + c.astuces.map(p => `<li>${inline(p)}</li>`).join('') + '</ul></div>' : ''}
      ${c.exos && c.exos.length ? '<h3>Exercices</h3>' + c.exos.map((e, i) => `<div class="exo"><span class="num">${i + 1}</span>${inline(e.enonce)}<details><summary>${GE.chevron}Correction</summary><div class="cours" style="margin-top:8px">${md(e.correction)}</div></details></div>`).join('') : ''}
      ${!(c.pieges || c.astuces || c.exos) ? '<p class="vide">Aucun exercice</p>' : ''}`;
    }
  }

  /* ---------- Cartes ---------- */
  function flashSession(el, deck, srsMode) {
    let list = srsMode ? deck.filter(isDue) : deck.slice();
    for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
    if (srsMode) list = list.slice(0, 40);
    let i = 0, ok = 0;
    if (!list.length) { el.innerHTML = '<p class="vide">Aucune carte à revoir</p>'; return; }
    function render() {
      if (i >= list.length) {
        el.innerHTML = `<div class="carte"><div class="quiz-q">${ok} carte${ok > 1 ? 's' : ''} sue${ok > 1 ? 's' : ''} sur ${list.length}</div><p>Les cartes ratées reviennent demain, les autres plus tard.</p><div class="actions"><button class="plaque" id="again">Recommencer</button><a class="fantome" href="#/">Aujourd'hui</a></div></div>`;
        $('#again').onclick = () => location.reload(); return;
      }
      const k = list[i];
      el.innerHTML = `<div class="flash" style="${cvars(k.chap.matiere)}">
      <div class="actions" style="margin:0 0 14px;justify-content:space-between"><span class="chip">${esc(k.chap.matiere.nom)}</span><span class="chip">${i + 1} / ${list.length}</span></div>
      <div class="flash-carte" id="fc">
        <div class="q">${inline(k.q)}</div>
        <div class="a hidden" id="fa">${inline(k.a)}${k.ex ? `<div class="ex">${inline(k.ex)}</div>` : ''}</div>
      </div>
      <div class="flash-rate hidden" id="rate">
        <button class="fantome" data-q="0"><span class="num">1</span>Raté</button><button class="fantome" data-q="3"><span class="num">2</span>Difficile</button><button class="fantome" data-q="4"><span class="num">3</span>Su</button><button class="fantome" data-q="5"><span class="num">4</span>Facile</button>
      </div></div>`;
      const fc = $('#fc');
      fc.onclick = () => { $('#fa').classList.remove('hidden'); $('#rate').classList.remove('hidden'); };
      $('#rate').querySelectorAll('button').forEach(b => b.onclick = e => { e.stopPropagation(); const q = +b.dataset.q; rate(k.id, q); if (q >= 4) ok++; i++; render(); nav(); });
    }
    render();
    el._keys = e => {
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
      const fc = $('#fc'); if (!fc) return;
      if (e.code === 'Space') { e.preventDefault(); fc.click(); }
      const n = { Digit1: 0, Digit2: 3, Digit3: 4, Digit4: 5 }[e.code];
      if (n != null && !$('#rate').classList.contains('hidden')) { const b = $('#rate button[data-q="' + n + '"]'); if (b) b.click(); }
    };
  }
  document.addEventListener('keydown', e => {
    const t = $('#tab') || view; if (t && t._keys) t._keys(e);
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') { if (e.key === 'Escape') e.target.blur(); return; }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); $('#search').focus(); }
  });

  /* ---------- Quiz ---------- */
  function quizSession(el, c) {
    const qs = (c.quiz || []).slice();
    if (!qs.length) { el.innerHTML = '<p class="vide">Aucun quiz</p>'; return; }
    for (let i = qs.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [qs[i], qs[j]] = [qs[j], qs[i]]; }
    let i = 0, score = 0;
    function render() {
      if (i >= qs.length) {
        const prev = state.quiz[c.id] || { best: 0, done: 0 };
        state.quiz[c.id] = { best: Math.max(prev.best, score / qs.length), done: prev.done + 1 }; save(); nav();
        const r = score / qs.length;
        el.innerHTML = `<div class="carte"><div class="quiz-q">${score} sur ${qs.length}</div><p>${r < 0.5 ? 'Relis le cours, puis refais le quiz.' : r < 0.8 ? 'Refais le quiz dans quelques jours.' : 'Chapitre acquis : les cartes suffisent pour l\'entretenir.'}</p>
        <div class="actions">${r < 0.8 ? `<a class="plaque" href="#/chapitre/${c.id}/cours">Revoir le cours${GE.fleche}</a><button class="fantome" id="again">Refaire</button>` : `<button class="plaque" id="again">Refaire</button>`}</div></div>`;
        $('#again').onclick = () => quizSession(el, c); return;
      }
      const q = qs[i];
      el.innerHTML = `<div class="actions" style="margin:0 0 14px"><span class="chip">${i + 1} / ${qs.length}</span></div><div class="quiz-q">${inline(q.q)}</div><div class="choices">${q.choix.map((ch, k) => `<button class="choice" data-k="${k}">${inline(ch)}</button>`).join('')}</div><div id="exp"></div>`;
      el.querySelectorAll('.choice').forEach(b => b.onclick = () => {
        const k = +b.dataset.k; el.querySelectorAll('.choice').forEach(x => x.disabled = true);
        el.querySelector(`.choice[data-k="${q.r}"]`).classList.add('correct');
        if (k === q.r) score++; else b.classList.add('wrong');
        $('#exp').innerHTML = `<div class="exp"><b>${k === q.r ? 'Exact.' : 'Faux.'}</b> ${inline(q.exp || '')}</div><div class="actions"><button class="plaque" id="next">Suivant${GE.fleche}</button></div>`;
        $('#next').onclick = () => { i++; render(); }; $('#next').focus();
      });
    }
    render();
  }

  /* ---------- Expliquer ---------- */
  function feynman(el, c) {
    const key = c.id; const saved = state.feynman[key] || '';
    el.innerHTML = `<textarea id="fey" placeholder="Explique ce chapitre avec tes mots, sans regarder le cours.">${esc(saved)}</textarea>
      <div class="actions"><button class="plaque" id="feyCheck">Comparer avec le cours${GE.fleche}</button><span class="chip" id="feyCount"></span></div>
      <div id="feyRes"></div>`;
    const ta = $('#fey'); const count = () => { $('#feyCount').textContent = ta.value.trim().split(/\s+/).filter(Boolean).length + ' mots'; }; count();
    ta.oninput = () => { state.feynman[key] = ta.value; save(); count(); };
    $('#feyCheck').onclick = () => {
      const strip = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
      const txt = strip(ta.value);
      const notions = (c.notions || []).map(n => n.terme);
      const key2 = n => { const b = strip(n.split(' (')[0]); return b.slice(0, Math.max(4, b.length - 2)); };
      const found = notions.filter(n => txt.includes(key2(n)));
      const missing = notions.filter(n => !found.includes(n));
      $('#feyRes').innerHTML = `<div class="carte" style="margin-top:22px"><h3 style="margin-top:0">Notions citées <span class="chip c">${found.length} / ${notions.length}</span></h3><p>${found.map(esc).join(', ') || 'aucune'}</p><h3>Notions absentes</h3><p>${missing.map(esc).join(', ') || 'aucune'}</p></div>
      <h3>Le cours</h3><div class="carte cours">${c.cours.map(s => `<h4>${esc(s.titre)}</h4>${md(s.texte)}`).join('')}</div>`;
    };
  }

  /* ---------- Révision du jour ---------- */
  function revision(matId) {
    const m = matId ? P.find(x => x.id === matId) : null;
    const deck = m ? m.chapitres.flatMap(cards) : allCards();
    const due = deck.filter(isDue).length;
    view.innerHTML = tete('Révision du jour', `<span class="chip c">${due} carte${due > 1 ? 's' : ''}</span>`) +
      `<div class="segment" style="margin-bottom:22px"><a href="#/revision" class="${m ? '' : 'on'}">Tout</a>${P.map(x => `<a href="#/revision/${x.id}" class="${m === x ? 'on' : ''}">${x.nom}</a>`).join('')}</div><div id="tab"></div>`;
    flashSession($('#tab'), deck, true);
  }

  /* ---------- Méthode ---------- */
  function methode() {
    const M = window.METHODES || [];
    view.innerHTML = tete('Méthode') + M.map(s => `<h2>${esc(s.titre)}</h2><div class="carte cours">${md(s.texte)}</div>`).join('');
  }

  /* ---------- Progression ---------- */
  function progression() {
    const all = allCards();
    const mastered = all.filter(k => state.srs[k.id] && state.srs[k.id].reps >= 2).length;
    const started = chapitres.filter(c => state.lu[c.id] || cards(c).some(k => state.srs[k.id]) || state.quiz[c.id]);
    const weak = started.map(c => ({ c, p: progress(c) })).filter(x => x.p < 60).sort((a, b) => a.p - b.p).slice(0, 8);
    view.innerHTML = tete('Progression', `<span class="chip">${mastered} / ${all.length} cartes sues</span><span class="chip">${started.length} / ${chapitres.length} chapitres commencés</span>`) +
      `<div class="grille">${P.map(m => `<a class="tuile-m" href="#/matiere/${m.id}" style="${cvars(m)}"><span class="haut">${pastille(m)}${m.nom}</span><span class="v">${pct(matProgress(m))}</span><span class="barre"><i style="width:${matProgress(m)}%"></i></span></a>`).join('')}</div>
      <h2>À retravailler</h2>
      ${weak.length ? weak.map(({ c, p }) => `<a class="ligne" href="#/chapitre/${c.id}" style="${cvars(c.matiere)}">${pastille(c.matiere)}<span class="nom">${c.titre}</span><span class="chip c">${pct(p)}</span><span class="fleche">${GE.fleche}</span></a>`).join('') : '<p class="vide">Aucun chapitre</p>'}
      <p style="margin-top:36px"><button class="lnk" id="resetBtn">Effacer la progression</button></p>`;
    $('#resetBtn').onclick = () => { if (confirm('Effacer toute la progression enregistrée dans ce navigateur ?')) { Object.keys(localStorage).filter(k => k.startsWith('rv:')).forEach(k => localStorage.removeItem(k)); location.reload(); } };
  }

  /* ---------- Recherche ---------- */
  const strip = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const index = [];
  chapitres.forEach(c => {
    index.push({ type: 'Chapitre', t: c.titre, s: c.matiere.nom + ' · ' + c.theme, href: '#/chapitre/' + c.id, m: c.matiere, key: strip(c.titre + ' ' + c.theme) });
    (c.notions || []).forEach(n => index.push({ type: 'Notion', t: n.terme, s: n.def, href: '#/chapitre/' + c.id + '/notions', m: c.matiere, key: strip(n.terme + ' ' + n.def) }));
    c.cours.forEach(s => index.push({ type: 'Cours', t: s.titre, s: c.matiere.nom + ' · ' + c.titre, href: '#/chapitre/' + c.id, m: c.matiere, key: strip(s.titre + ' ' + s.texte) }));
  });
  const sIn = $('#search'), sRes = $('#searchResults'); let sel = 0, hits = [];
  function doSearch() {
    const q = strip(sIn.value.trim()); if (q.length < 2) { sRes.classList.remove('open'); return; }
    const words = q.split(/\s+/);
    hits = index.map(it => { let sc = 0; for (const w of words) { if (strip(it.t).includes(w)) sc += it.type === 'Chapitre' ? 6 : 4; else if (it.key.includes(w)) sc += 1; else return null; } return { it, sc }; }).filter(Boolean).sort((a, b) => b.sc - a.sc).slice(0, 12).map(x => x.it);
    sel = 0;
    const hl = s => { let h = esc(s); words.forEach(w => { h = h.replace(new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>'); }); return h; };
    sRes.innerHTML = hits.length ? hits.map((it, i) => `<div class="sr ${i === sel ? 'sel' : ''}" data-i="${i}" style="${cvars(it.m)}"><span class="pastille">${G(it.m.id)}</span><span class="t"><b>${hl(it.t)}</b><small>${hl(it.s.slice(0, 110))}</small></span></div>`).join('') : '<div class="vide" style="padding:14px">Aucun résultat</div>';
    sRes.classList.add('open');
    sRes.querySelectorAll('.sr[data-i]').forEach(d => d.onclick = () => go(+d.dataset.i));
  }
  function go(i) { if (hits[i]) { location.hash = hits[i].href; sRes.classList.remove('open'); sIn.value = ''; sIn.blur(); } }
  sIn.addEventListener('input', doSearch);
  sIn.addEventListener('focus', doSearch);
  sIn.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { sel = Math.min(hits.length - 1, sel + 1); } else if (e.key === 'ArrowUp') { sel = Math.max(0, sel - 1); } else if (e.key === 'Enter') { go(sel); return; } else if (e.key === 'Escape') { sRes.classList.remove('open'); return; } else return;
    e.preventDefault(); sRes.querySelectorAll('.sr').forEach((d, i) => d.classList.toggle('sel', i === sel));
  });
  document.addEventListener('click', e => { if (!$('#searchWrap').contains(e.target)) sRes.classList.remove('open'); });

  /* ---------- Thème, menu, minuteur ---------- */
  const root = document.documentElement;
  const savedTheme = store.get('theme', null); if (savedTheme) root.dataset.theme = savedTheme;
  $('#themeBtn').onclick = () => { const cur = root.dataset.theme || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'); root.dataset.theme = cur === 'dark' ? 'light' : 'dark'; store.set('theme', root.dataset.theme); };
  $('#burger').onclick = () => $('#sidebar').classList.toggle('open');

  let pomoLeft = 25 * 60, pomoRun = null, pomoPhase = 'focus';
  const fmt = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  function pomoDraw() { $('#pomoTime').textContent = fmt(pomoLeft); $('#pomoBtn').textContent = pomoRun ? fmt(pomoLeft) : 'Minuteur'; $('#pomoLabel').textContent = pomoPhase === 'focus' ? 'Travail, 25 minutes' : 'Pause, 5 minutes'; }
  function togglePomo() { $('#pomo').classList.toggle('hidden'); }
  $('#pomoBtn').onclick = togglePomo; $('#pomoClose').onclick = togglePomo;
  $('#pomoReset').onclick = () => { clearInterval(pomoRun); pomoRun = null; pomoPhase = 'focus'; pomoLeft = 25 * 60; $('#pomoStart').textContent = 'Démarrer'; pomoDraw(); };
  $('#pomoStart').onclick = () => {
    if (pomoRun) { clearInterval(pomoRun); pomoRun = null; $('#pomoStart').textContent = 'Reprendre'; pomoDraw(); return; }
    $('#pomoStart').textContent = 'Pause';
    pomoRun = setInterval(() => {
      pomoLeft--;
      if (pomoLeft <= 0) { if (pomoPhase === 'focus') { pomoPhase = 'break'; pomoLeft = 5 * 60; } else { pomoPhase = 'focus'; pomoLeft = 25 * 60; } toast(pomoPhase === 'focus' ? 'Fin de la pause' : 'Pause de 5 minutes'); }
      pomoDraw();
    }, 1000);
  };
  pomoDraw();
  route();
})();
