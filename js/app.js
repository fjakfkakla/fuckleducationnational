/* Seconde Turbo — moteur de l'application (vanilla JS, aucune dépendance) */
(function () {
  'use strict';
  const P = window.PROGRAMME || [];
  const $ = (s, el = document) => el.querySelector(s);
  const view = $('#view');

  /* ---------- Stockage ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem('st:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem('st:' + k, JSON.stringify(v)); } catch {} }
  };
  const state = {
    xp: store.get('xp', 0),
    srs: store.get('srs', {}),        // id -> {ef, iv, due, reps}
    quiz: store.get('quiz', {}),      // chapId -> {best, done}
    lu: store.get('lu', {}),          // chapId -> true
    streak: store.get('streak', { last: null, n: 0 }),
    feynman: store.get('feynman', {})
  };
  const save = () => { for (const k of ['xp', 'srs', 'quiz', 'lu', 'streak', 'feynman']) store.set(k, state[k]); };
  const today = () => new Date().toISOString().slice(0, 10);
  function addXP(n, msg) {
    state.xp += n; $('#xpVal').textContent = state.xp;
    const t = today();
    if (state.streak.last !== t) {
      const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
      state.streak.n = state.streak.last === y ? state.streak.n + 1 : 1;
      state.streak.last = t;
    }
    save(); toast((msg ? msg + ' ' : '') + '+' + n + ' XP');
  }
  let toastT;
  function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 1800); }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- Mini markdown ---------- */
  function inline(s) {
    return esc(s).split(/(`[^`]+`)/).map(part => {
      if (part.startsWith('`') && part.endsWith('`') && part.length > 1) return '<code>' + part.slice(1, -1) + '</code>';
      return part
        .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
        .replace(/(^|[\s(«'])\*([^*\n]+?)\*(?=[\s).,;:!?»']|$)/g, '$1<i>$2</i>')
        .replace(/([A-Za-zÀ-ÿᴬ\u2016‖])_([A-Za-z0-9À-ÿ]+)/g, '$1<sub>$2</sub>');
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
      else if (l.startsWith('! ')) { closeList(); out += '<div class="hint">💡 ' + inline(l.slice(2)) + '</div>'; }
      else if (l.startsWith('X ')) { closeList(); out += '<div class="danger">⚠️ ' + inline(l.slice(2)) + '</div>'; }
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
  const cards = c => {
    const list = [];
    (c.notions || []).forEach((n, i) => list.push({ id: c.id + ':n' + i, q: n.terme, a: n.def, ex: n.exemple, chap: c }));
    (c.questions || []).forEach((n, i) => list.push({ id: c.id + ':q' + i, q: n.q, a: n.a, chap: c }));
    return list;
  };
  const allCards = () => chapitres.flatMap(cards);
  const dueCards = () => { const t = today(); return allCards().filter(k => { const s = state.srs[k.id]; return !s || s.due <= t; }); };
  const newCardsCount = () => allCards().filter(k => !state.srs[k.id]).length;

  /* ---------- SM-2 (répétition espacée) ---------- */
  function rate(id, q) { // q : 0 = raté, 3 = difficile, 4 = bien, 5 = facile
    const s = state.srs[id] || { ef: 2.5, iv: 0, reps: 0 };
    if (q < 3) { s.reps = 0; s.iv = 1; }
    else {
      s.reps++;
      s.iv = s.reps === 1 ? 1 : s.reps === 2 ? 3 : Math.round(s.iv * s.ef);
      s.ef = Math.max(1.3, s.ef + 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    }
    const d = new Date(); d.setDate(d.getDate() + s.iv); s.due = d.toISOString().slice(0, 10);
    state.srs[id] = s; save();
  }
  function progress(c) {
    const ks = cards(c); if (!ks.length) return 0;
    const known = ks.filter(k => state.srs[k.id] && state.srs[k.id].reps >= 2).length;
    const q = state.quiz[c.id] ? state.quiz[c.id].best : 0;
    return Math.round(((known / ks.length) * 60) + (state.lu[c.id] ? 15 : 0) + (q * 25));
  }
  function matProgress(m) { const l = m.chapitres.map(progress); return Math.round(l.reduce((a, b) => a + b, 0) / Math.max(1, l.length)); }

  /* ---------- Navigation ---------- */
  function nav() {
    const n = $('#nav'); const h = location.hash || '#/';
    const link = (href, label, extra = '') => `<a href="${href}" class="${h === href || (href !== '#/' && h.startsWith(href)) ? 'active' : ''}">${label}${extra}</a>`;
    n.innerHTML = link('#/', '🏠 Accueil') + link('#/revision', '🔁 Révision du jour', `<span class="pill">${dueCards().length}</span>`)
      + link('#/methode', '🧠 Méthode') + link('#/stats', '📊 Progrès')
      + '<div class="sep">Matières</div>'
      + P.map(m => link('#/matiere/' + m.id, `<span class="dot" style="background:${m.couleur}"></span>${m.nom}`, `<span class="pill">${matProgress(m)}%</span>`)).join('');
    $('#sidebar').classList.remove('open');
  }
  function route() {
    const h = (location.hash || '#/').slice(2).split('/');
    window.scrollTo(0, 0);
    if (h[0] === '' ) home();
    else if (h[0] === 'matiere') matiere(h[1]);
    else if (h[0] === 'chapitre') chapitre(h[1], h[2] || 'cours');
    else if (h[0] === 'revision') revision(h[1]);
    else if (h[0] === 'methode') methode();
    else if (h[0] === 'stats') stats();
    else home();
    nav();
  }
  window.addEventListener('hashchange', route);

  /* ---------- Pages ---------- */
  function home() {
    const due = dueCards().length;
    const total = chapitres.length, lus = Object.keys(state.lu).length;
    view.innerHTML = `
    <div class="hero">
      <h1>Salut 👋 Prêt à réviser intelligemment ?</h1>
      <p>Pas de relecture passive ici. Tu te testes, tu espaces, tu expliques avec tes mots. C'est ce que les sciences cognitives montrent de plus efficace.</p>
      <div class="row" style="margin-top:14px">
        <button class="btn" onclick="location.hash='#/revision'">🔁 ${due ? due + ' cartes à revoir aujourd\'hui' : 'Lancer une session'}</button>
        <button class="btn hero-ghost" onclick="location.hash='#/methode'">🧠 Comment apprendre vite</button>
      </div>
    </div>
    <div class="statgrid" style="margin-bottom:24px">
      <div class="card stat"><b>${state.xp}</b><span>XP</span></div>
      <div class="card stat"><b>${state.streak.n}🔥</b><span>jours d'affilée</span></div>
      <div class="card stat"><b>${lus}/${total}</b><span>chapitres lus</span></div>
      <div class="card stat"><b>${due}</b><span>cartes dues</span></div>
    </div>
    <h2>Matières</h2>
    <div class="grid">${P.map(m => `
      <div class="card link" onclick="location.hash='#/matiere/${m.id}'">
        <div class="emoji">${m.emoji}</div>
        <div class="title">${m.nom}</div>
        <div class="sub">${m.chapitres.length} chapitres · ${m.chapitres.reduce((a, c) => a + cards(c).length, 0)} cartes</div>
        <div class="bar"><i style="width:${matProgress(m)}%;background:${m.couleur}"></i></div>
      </div>`).join('')}
    </div>
    <h2>Raccourcis</h2>
    <p class="muted"><span class="kbd">Ctrl K</span> rechercher · dans les flashcards : <span class="kbd">Espace</span> retourner, <span class="kbd">1</span>-<span class="kbd">4</span> noter · <span class="kbd">P</span> Pomodoro</p>`;
  }

  function matiere(id) {
    const m = P.find(x => x.id === id); if (!m) return home();
    const themes = [...new Set(m.chapitres.map(c => c.theme))];
    view.innerHTML = `
    <div class="breadcrumb"><a href="#/">Accueil</a> › ${m.nom}</div>
    <h1>${m.emoji} ${m.nom}</h1>
    <p class="lead">${m.desc || ''}</p>
    <div class="row" style="margin-bottom:10px">
      <span class="chip acc">${matProgress(m)}% maîtrisé</span>
      <button class="btn small" onclick="location.hash='#/revision/${m.id}'">🔁 Réviser cette matière</button>
    </div>
    ${themes.map(t => `<h2>${t}</h2>` + m.chapitres.filter(c => c.theme === t).map(c => `
      <div class="chap-row" onclick="location.hash='#/chapitre/${c.id}'">
        <div class="n" style="background:${m.couleur}">${c.num}</div>
        <div class="t"><b>${c.titre}</b><small>${cards(c).length} cartes · ${(c.quiz || []).length} questions de quiz · ~${c.duree || 20} min</small></div>
        <div class="pct">${progress(c)}%</div>
      </div>`).join('')).join('')}
    <h2>Meilleures ressources gratuites</h2>
    <div class="grid wide">${(m.ressources || []).map(r => `<a class="ressource" href="${r.url}" target="_blank" rel="noopener"><span class="ico">${r.ico || '🔗'}</span><div><b>${r.nom}</b><small>${r.desc}</small></div></a>`).join('')}</div>`;
  }

  function chapitre(id, tab) {
    const c = findChap(id); if (!c) return home();
    const m = c.matiere;
    const tabs = [['cours', '📖 Cours'], ['notions', '🔑 Notions'], ['flash', '🃏 Flashcards'], ['quiz', '✅ Quiz'], ['feynman', '🗣 Explique-le'], ['exos', '✍️ Exos & pièges']];
    view.innerHTML = `
    <div class="breadcrumb"><a href="#/">Accueil</a> › <a href="#/matiere/${m.id}">${m.nom}</a> › ${c.theme}</div>
    <h1>${c.titre}</h1>
    <div class="row"><span class="chip" style="background:${m.couleur}22;color:${m.couleur}">${m.nom}</span><span class="chip">~${c.duree || 20} min</span><span class="chip ${progress(c) >= 80 ? 'ok' : ''}">${progress(c)}% maîtrisé</span>${c.num < m.chapitres.length ? `<a class="chip" href="#/chapitre/${m.chapitres[c.num].id}">Suivant →</a>` : ''}</div>
    <div class="tabs">${tabs.map(([k, l]) => `<button class="${tab === k ? 'active' : ''}" onclick="location.hash='#/chapitre/${c.id}/${k}'">${l}</button>`).join('')}</div>
    <div id="tab"></div>`;
    const el = $('#tab');
    if (tab === 'cours') {
      el.innerHTML = `<div class="cours">${c.cours.map(s => `<h4>${esc(s.titre)}</h4>${md(s.texte)}`).join('')}</div>
      <div class="row" style="margin-top:16px">
        <button class="btn primary" id="luBtn">${state.lu[c.id] ? '✔ Lu' : '✔ J\'ai compris ce cours'}</button>
        <button class="btn" onclick="location.hash='#/chapitre/${c.id}/flash'">🃏 Passer aux flashcards</button>
      </div>
      <div class="hint" style="margin-top:14px">Lire ne suffit pas : ferme le cours et passe aux flashcards ou au quiz. C'est l'effort de rappel qui ancre la mémoire.</div>`;
      $('#luBtn').onclick = () => { if (!state.lu[c.id]) { state.lu[c.id] = true; addXP(10, 'Cours lu !'); } location.hash = '#/chapitre/' + c.id + '/flash'; };
    }
    if (tab === 'notions') {
      el.innerHTML = (c.notions || []).map(n => `<div class="def"><b>${esc(n.terme)}</b> — ${inline(n.def)}${n.exemple ? `<div class="ex">Ex : ${inline(n.exemple)}</div>` : ''}</div>`).join('') || '<p class="empty">Pas de notions pour ce chapitre.</p>';
    }
    if (tab === 'flash') flashSession(el, cards(c), c.titre);
    if (tab === 'quiz') quizSession(el, c);
    if (tab === 'feynman') feynman(el, c);
    if (tab === 'exos') {
      el.innerHTML = `${c.pieges && c.pieges.length ? '<h3>⚠️ Pièges classiques</h3>' + c.pieges.map(p => `<div class="danger">${inline(p)}</div>`).join('') : ''}
      ${c.astuces && c.astuces.length ? '<h3>💡 Astuces & méthodes</h3>' + c.astuces.map(p => `<div class="hint">${inline(p)}</div>`).join('') : ''}
      ${c.exos && c.exos.length ? '<h3>✍️ Exercices types (à faire sur papier, puis vérifier)</h3>' + c.exos.map((e, i) => `<div class="card" style="margin:10px 0"><b>Exo ${i + 1}.</b> ${inline(e.enonce)}<details style="margin-top:8px"><summary style="cursor:pointer;color:var(--accent);font-weight:600">Voir la correction</summary><div style="margin-top:8px">${md(e.correction)}</div></details></div>`).join('') : ''}
      ${!(c.pieges || c.astuces || c.exos) ? '<p class="empty">Rien ici pour l\'instant.</p>' : ''}`;
    }
  }

  /* ---------- Flashcards ---------- */
  function flashSession(el, deck, label, srsMode) {
    let list = deck.slice();
    if (srsMode) { const t = today(); list = list.filter(k => !state.srs[k.id] || state.srs[k.id].due <= t); }
    for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
    if (srsMode) list = list.slice(0, 40);
    let i = 0, ok = 0;
    if (!list.length) { el.innerHTML = `<div class="empty"><div style="font-size:40px">🎉</div><p>Rien à revoir ici pour l'instant. Reviens demain, ou lance un quiz.</p></div>`; return; }
    function render() {
      if (i >= list.length) {
        el.innerHTML = `<div class="card" style="text-align:center;max-width:520px;margin:0 auto"><div style="font-size:40px">🏁</div><h3>Session terminée</h3><p>${ok}/${list.length} cartes réussies. Les cartes ratées reviendront demain, les réussies plus tard : c'est la répétition espacée.</p><div class="row" style="justify-content:center"><button class="btn primary" onclick="location.reload()">Recommencer</button><button class="btn" onclick="location.hash='#/'">Accueil</button></div></div>`;
        return;
      }
      const k = list[i];
      el.innerHTML = `<p class="muted" style="text-align:center">${label} · carte ${i + 1}/${list.length}</p>
      <div class="flash"><div class="flash-card" id="fc">
        <div class="flash-face"><span class="tag">${esc(k.chap.matiere.nom)} · question</span><div>${inline(k.q)}</div><div class="muted" style="font-size:13px;margin-top:14px">Réponds dans ta tête, puis clique / Espace</div></div>
        <div class="flash-face back"><span class="tag">réponse</span><div>${inline(k.a)}${k.ex ? `<div class="muted" style="margin-top:8px;font-size:13px">Ex : ${inline(k.ex)}</div>` : ''}</div></div>
      </div></div>
      <div class="flash-rate" id="rate" style="visibility:hidden">
        <button class="btn bad" data-q="0">1 · Raté</button><button class="btn warn" data-q="3">2 · Difficile</button><button class="btn ok" data-q="4">3 · Bien</button><button class="btn primary" data-q="5">4 · Facile</button>
      </div>
      <p class="muted" style="text-align:center;font-size:12px;margin-top:10px">Sois honnête avec toi-même : noter « facile » une carte que tu ne savais pas, c'est te mentir.</p>`;
      const fc = $('#fc');
      fc.onclick = () => { fc.classList.toggle('flipped'); $('#rate').style.visibility = 'visible'; };
      $('#rate').querySelectorAll('button').forEach(b => b.onclick = () => { const q = +b.dataset.q; rate(k.id, q); if (q >= 4) ok++; if (q >= 3) addXP(q >= 4 ? 3 : 1); i++; render(); });
    }
    render();
    el._keys = e => {
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
      const fc = $('#fc'); if (!fc) return;
      if (e.code === 'Space') { e.preventDefault(); fc.click(); }
      const n = { Digit1: 0, Digit2: 3, Digit3: 4, Digit4: 5 }[e.code];
      if (n != null && fc.classList.contains('flipped')) { const b = $('#rate button[data-q="' + n + '"]'); if (b) b.click(); }
    };
  }
  document.addEventListener('keydown', e => { const t = $('#tab') || view; if (t && t._keys) t._keys(e); if (e.key === 'p' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') togglePomo(); if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); $('#search').focus(); } });

  /* ---------- Quiz ---------- */
  function quizSession(el, c) {
    const qs = (c.quiz || []).slice();
    if (!qs.length) { el.innerHTML = '<p class="empty">Pas de quiz pour ce chapitre.</p>'; return; }
    for (let i = qs.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [qs[i], qs[j]] = [qs[j], qs[i]]; }
    let i = 0, score = 0;
    function render() {
      if (i >= qs.length) {
        const pct = Math.round(score / qs.length * 100);
        const prev = state.quiz[c.id] || { best: 0, done: 0 };
        state.quiz[c.id] = { best: Math.max(prev.best, score / qs.length), done: prev.done + 1 }; save();
        addXP(score * 5, 'Quiz terminé !');
        el.innerHTML = `<div class="card" style="text-align:center;max-width:520px;margin:0 auto"><div class="score-ring" style="--p:${pct}"><span>${pct}%</span></div><h3>${pct >= 80 ? 'Excellent 🔥' : pct >= 50 ? 'Pas mal, continue' : 'Retourne voir le cours, puis réessaie'}</h3><p>${score}/${qs.length} bonnes réponses</p><div class="row" style="justify-content:center"><button class="btn primary" onclick="location.hash='#/chapitre/${c.id}/cours';">📖 Revoir le cours</button><button class="btn" id="again">↺ Refaire</button></div></div>`;
        $('#again').onclick = () => quizSession(el, c); return;
      }
      const q = qs[i];
      el.innerHTML = `<p class="muted">Question ${i + 1}/${qs.length} · score ${score}</p><div class="card"><div class="quiz-q">${inline(q.q)}</div><div class="choices">${q.choix.map((ch, k) => `<button class="choice" data-k="${k}">${inline(ch)}</button>`).join('')}</div><div id="exp"></div></div>`;
      el.querySelectorAll('.choice').forEach(b => b.onclick = () => {
        const k = +b.dataset.k; el.querySelectorAll('.choice').forEach(x => x.disabled = true);
        el.querySelector(`.choice[data-k="${q.r}"]`).classList.add('correct');
        if (k === q.r) score++; else b.classList.add('wrong');
        $('#exp').innerHTML = `<div class="exp">${k === q.r ? '✅ Exact. ' : '❌ Non. '}${inline(q.exp || '')}</div><div class="row" style="margin-top:10px"><button class="btn primary" id="next">Suivant →</button></div>`;
        $('#next').onclick = () => { i++; render(); }; $('#next').focus();
      });
    }
    render();
  }

  /* ---------- Feynman ---------- */
  function feynman(el, c) {
    const key = c.id; const saved = state.feynman[key] || '';
    el.innerHTML = `<div class="card">
      <h3 style="margin-top:0">🗣 Technique de Feynman</h3>
      <p class="muted">Explique ce chapitre comme à un élève de 6e, sans regarder le cours. Si tu bloques, c'est précisément ce que tu ne maîtrises pas. Ensuite compare avec le cours et corrige.</p>
      <p><b>Sujet :</b> ${esc(c.titre)}</p>
      <textarea id="fey" placeholder="Écris ton explication ici… (avec tes mots, des exemples, et les formules clés)">${esc(saved)}</textarea>
      <div class="row" style="margin-top:10px"><button class="btn primary" id="feyCheck">Comparer avec le cours</button><span class="muted" id="feyCount"></span></div>
      <div id="feyRes"></div>
    </div>`;
    const ta = $('#fey'); const count = () => { $('#feyCount').textContent = ta.value.trim().split(/\s+/).filter(Boolean).length + ' mots'; }; count();
    ta.oninput = () => { state.feynman[key] = ta.value; save(); count(); };
    $('#feyCheck').onclick = () => {
      const txt = ta.value.toLowerCase();
      const notions = (c.notions || []).map(n => n.terme);
      const strip = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
      const found = notions.filter(n => strip(txt).includes(strip(n.split(' (')[0]).slice(0, Math.max(4, strip(n.split(' (')[0]).length - 2))));
      const missing = notions.filter(n => !found.includes(n));
      if (ta.value.trim().split(/\s+/).length > 40) addXP(15, 'Explication rédigée !');
      $('#feyRes').innerHTML = `<div class="exp"><b>Notions que tu as citées (${found.length}/${notions.length}) :</b> ${found.map(f => `<span class="chip ok">${esc(f)}</span>`).join(' ') || '—'}<br><br><b>Notions oubliées :</b> ${missing.map(f => `<span class="chip warn">${esc(f)}</span>`).join(' ') || 'aucune 🎉'}<br><br>Maintenant, relis le cours et complète ce qui manque. Puis recommence sans regarder.</div>
      <h3>Le cours pour comparer</h3><div class="cours">${c.cours.map(s => `<h4>${esc(s.titre)}</h4>${md(s.texte)}`).join('')}</div>`;
    };
  }

  /* ---------- Révision du jour ---------- */
  function revision(matId) {
    const m = matId ? P.find(x => x.id === matId) : null;
    const deck = m ? m.chapitres.flatMap(cards) : allCards();
    const due = (() => { const t = today(); return deck.filter(k => !state.srs[k.id] || state.srs[k.id].due <= t); })();
    view.innerHTML = `<h1>🔁 Révision du jour${m ? ' · ' + m.nom : ''}</h1>
    <p class="lead">${due.length} cartes dues (nouvelles ou à revoir). L'algorithme mélange les matières : c'est voulu (interleaving), ça renforce la mémoire bien plus que réviser un seul chapitre à la fois.</p>
    <div class="row" style="margin-bottom:16px">${m ? '<a class="btn small" href="#/revision">Toutes les matières</a>' : P.map(x => `<a class="btn small" href="#/revision/${x.id}">${x.emoji} ${x.nom}</a>`).join('')}</div>
    <div id="tab"></div>`;
    flashSession($('#tab'), deck, m ? m.nom : 'Toutes matières', true);
  }

  /* ---------- Méthode ---------- */
  function methode() {
    const M = window.METHODES || [];
    view.innerHTML = `<h1>🧠 Comment apprendre vraiment vite</h1>
    <p class="lead">Pas de magie, des résultats de recherche (Dunlosky 2013, Roediger & Karpicke 2006, Cepeda 2006, Bjork). Ce qui marche, ce qui ne marche pas, et comment l'appliquer en 2nde.</p>
    ${M.map(s => `<div class="cours" style="margin-bottom:16px"><h3 style="margin-top:0">${esc(s.titre)}</h3>${md(s.texte)}</div>`).join('')}`;
  }

  /* ---------- Stats ---------- */
  function stats() {
    const all = allCards(); const srs = Object.values(state.srs);
    const mastered = all.filter(k => state.srs[k.id] && state.srs[k.id].reps >= 2).length;
    const weak = chapitres.map(c => ({ c, p: progress(c) })).filter(x => x.p < 50 && (state.lu[x.c.id] || cards(x.c).some(k => state.srs[k.id]))).sort((a, b) => a.p - b.p).slice(0, 6);
    view.innerHTML = `<h1>📊 Progrès</h1>
    <div class="statgrid" style="margin-bottom:20px">
      <div class="card stat"><b>${state.xp}</b><span>XP total</span></div>
      <div class="card stat"><b>${state.streak.n}🔥</b><span>série (jours)</span></div>
      <div class="card stat"><b>${mastered}/${all.length}</b><span>cartes maîtrisées</span></div>
      <div class="card stat"><b>${srs.length}</b><span>cartes vues</span></div>
      <div class="card stat"><b>${Object.values(state.quiz).reduce((a, q) => a + q.done, 0)}</b><span>quiz faits</span></div>
    </div>
    <h2>Par matière</h2>
    ${P.map(m => `<div class="card" style="margin:8px 0"><div class="row" style="justify-content:space-between"><b>${m.emoji} ${m.nom}</b><span class="muted">${matProgress(m)}%</span></div><div class="bar"><i style="width:${matProgress(m)}%;background:${m.couleur}"></i></div></div>`).join('')}
    <h2>Chapitres à travailler en priorité</h2>
    ${weak.length ? weak.map(({ c, p }) => `<div class="chap-row" onclick="location.hash='#/chapitre/${c.id}'"><div class="n" style="background:${c.matiere.couleur}">${c.num}</div><div class="t"><b>${c.titre}</b><small>${c.matiere.nom}</small></div><div class="pct">${p}%</div></div>`).join('') : '<p class="muted">Commence à réviser pour voir apparaître tes points faibles ici.</p>'}
    <div class="row" style="margin-top:24px"><button class="btn ghost small" id="resetBtn">Réinitialiser toute ma progression</button></div>`;
    $('#resetBtn').onclick = () => { if (confirm('Tout effacer ? (XP, cartes, quiz)')) { localStorage.clear(); location.reload(); } };
  }

  /* ---------- Recherche ---------- */
  const strip = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const index = [];
  chapitres.forEach(c => {
    index.push({ type: 'Chapitre', t: c.titre, s: c.matiere.nom + ' · ' + c.theme, href: '#/chapitre/' + c.id, m: c.matiere, key: strip(c.titre + ' ' + c.theme) });
    (c.notions || []).forEach((n, i) => index.push({ type: 'Notion', t: n.terme, s: n.def, href: '#/chapitre/' + c.id + '/notions', m: c.matiere, key: strip(n.terme + ' ' + n.def) }));
    c.cours.forEach(s => index.push({ type: 'Cours', t: s.titre, s: c.titre, href: '#/chapitre/' + c.id, m: c.matiere, key: strip(s.titre + ' ' + s.texte) }));
  });
  const sIn = $('#search'), sRes = $('#searchResults'); let sel = 0, hits = [];
  function doSearch() {
    const q = strip(sIn.value.trim()); if (q.length < 2) { sRes.classList.remove('open'); return; }
    const words = q.split(/\s+/);
    hits = index.map(it => { let sc = 0; for (const w of words) { if (strip(it.t).includes(w)) sc += it.type === 'Chapitre' ? 6 : 4; else if (it.key.includes(w)) sc += 1; else return null; } return { it, sc }; }).filter(Boolean).sort((a, b) => b.sc - a.sc).slice(0, 12).map(x => x.it);
    sel = 0;
    const hl = s => { let h = esc(s); words.forEach(w => { h = h.replace(new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>'); }); return h; };
    sRes.innerHTML = hits.length ? hits.map((it, i) => `<div class="sr ${i === sel ? 'sel' : ''}" data-i="${i}"><span class="k" style="background:${it.m.couleur}">${it.type}</span><div><b>${hl(it.t)}</b><small>${hl(it.s.slice(0, 110))}</small></div></div>`).join('') : '<div class="sr"><small>Aucun résultat</small></div>';
    sRes.classList.add('open');
    sRes.querySelectorAll('.sr[data-i]').forEach(d => d.onclick = () => go(+d.dataset.i));
  }
  function go(i) { if (hits[i]) { location.hash = hits[i].href; sRes.classList.remove('open'); sIn.value = ''; sIn.blur(); } }
  sIn.addEventListener('input', doSearch);
  sIn.addEventListener('focus', doSearch);
  sIn.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { sel = Math.min(hits.length - 1, sel + 1); } else if (e.key === 'ArrowUp') { sel = Math.max(0, sel - 1); } else if (e.key === 'Enter') { go(sel); return; } else if (e.key === 'Escape') { sRes.classList.remove('open'); sIn.blur(); return; } else return;
    e.preventDefault(); sRes.querySelectorAll('.sr').forEach((d, i) => d.classList.toggle('sel', i === sel));
  });
  document.addEventListener('click', e => { if (!$('#searchWrap').contains(e.target)) sRes.classList.remove('open'); });

  /* ---------- Thème, menu, Pomodoro ---------- */
  const root = document.documentElement;
  const savedTheme = store.get('theme', null); if (savedTheme) root.dataset.theme = savedTheme;
  $('#themeBtn').onclick = () => { const cur = root.dataset.theme || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'); root.dataset.theme = cur === 'dark' ? 'light' : 'dark'; store.set('theme', root.dataset.theme); };
  $('#burger').onclick = () => $('#sidebar').classList.toggle('open');

  let pomoLeft = 25 * 60, pomoRun = null, pomoPhase = 'focus';
  const fmt = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  function pomoDraw() { $('#pomoTime').textContent = fmt(pomoLeft); $('#pomoBtn').textContent = '⏱ ' + fmt(pomoLeft); $('#pomoLabel').textContent = pomoPhase === 'focus' ? 'Concentration (25 min, téléphone loin)' : 'Pause (5 min, lève-toi)'; }
  function togglePomo() { $('#pomo').classList.toggle('hidden'); }
  $('#pomoBtn').onclick = togglePomo; $('#pomoClose').onclick = togglePomo;
  $('#pomoReset').onclick = () => { clearInterval(pomoRun); pomoRun = null; pomoPhase = 'focus'; pomoLeft = 25 * 60; $('#pomoStart').textContent = '▶ Démarrer'; pomoDraw(); };
  $('#pomoStart').onclick = () => {
    if (pomoRun) { clearInterval(pomoRun); pomoRun = null; $('#pomoStart').textContent = '▶ Reprendre'; return; }
    $('#pomoStart').textContent = '⏸ Pause';
    pomoRun = setInterval(() => {
      pomoLeft--; if (pomoLeft <= 0) {
        if (pomoPhase === 'focus') { addXP(20, 'Pomodoro terminé !'); pomoPhase = 'break'; pomoLeft = 5 * 60; } else { pomoPhase = 'focus'; pomoLeft = 25 * 60; }
        try { new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU' + 'A'.repeat(200)).play(); } catch {}
        toast(pomoPhase === 'focus' ? 'Pause finie, on reprend !' : 'Pause !');
      } pomoDraw();
    }, 1000);
  };
  pomoDraw();

  $('#xpVal').textContent = state.xp;
  route();
})();
