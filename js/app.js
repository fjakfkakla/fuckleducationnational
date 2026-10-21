/* Révisions de seconde — moteur de l'application (JavaScript sans dépendance) */
(function () {
  'use strict';
  const P = window.PROGRAMME || [];
  const $ = (s, el = document) => el.querySelector(s);
  const view = $('#view');

  /* ---------- Stockage ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem('rv:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem('rv:' + k, JSON.stringify(v)); } catch {} }
  };
  const state = {
    srs: store.get('srs', {}),      // id -> {ef, iv, due, reps}
    quiz: store.get('quiz', {}),    // chapId -> {best, done}
    lu: store.get('lu', {}),        // chapId -> true
    feynman: store.get('feynman', {})
  };
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
  const cards = c => {
    const list = [];
    (c.notions || []).forEach((n, i) => list.push({ id: c.id + ':n' + i, q: n.terme, a: n.def, ex: n.exemple, chap: c }));
    return list;
  };
  const allCards = () => chapitres.flatMap(cards);
  const isDue = k => { const s = state.srs[k.id]; return !s || s.due <= today(); };
  const dueCards = () => allCards().filter(isDue);

  /* ---------- SM-2 (répétition espacée) ---------- */
  function rate(id, q) { // q : 0 = raté, 3 = difficile, 4 = su, 5 = facile
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
    return Math.min(100, Math.round((known / ks.length) * 60 + (state.lu[c.id] ? 15 : 0) + q * 25));
  }
  function matProgress(m) { const l = m.chapitres.map(progress); return Math.round(l.reduce((a, b) => a + b, 0) / Math.max(1, l.length)); }
  const pct = n => n + ' %';

  /* ---------- Navigation ---------- */
  function nav() {
    const n = $('#nav'); const h = location.hash || '#/';
    const link = (href, label, extra = '') => `<a href="${href}" class="${h === href || (href !== '#/' && h.startsWith(href)) ? 'active' : ''}"><span>${label}</span>${extra}</a>`;
    n.innerHTML = link('#/', 'Accueil') + link('#/revision', 'Révision du jour', `<span class="count">${dueCards().length}</span>`)
      + link('#/methode', 'Méthode') + link('#/progression', 'Progression')
      + '<div class="sep">Matières</div>'
      + P.map(m => link('#/matiere/' + m.id, m.nom, `<span class="count">${pct(matProgress(m))}</span>`)).join('');
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

  /* ---------- Pages ---------- */
  function home() {
    const due = dueCards().length;
    const lus = Object.keys(state.lu).filter(findChap).length;
    view.innerHTML = `
    <h1>Révisions de seconde</h1>
    <p class="lead">Le programme de 2nde en ${chapitres.length} chapitres. Chaque chapitre comprend un cours court, des cartes à réviser, un quiz et des exercices corrigés. Les cartes reviennent à intervalles croissants selon ce que tu as retenu.</p>
    <div class="actions">
      <a class="btn primary" href="#/revision">Révision du jour${due ? ' (' + due + ' cartes)' : ''}</a>
      <span class="muted">${lus} chapitre${lus > 1 ? 's' : ''} lu${lus > 1 ? 's' : ''} sur ${chapitres.length}</span>
    </div>
    <h2>Matières</h2>
    <div class="list">${P.map(m => `
      <a class="row-item" href="#/matiere/${m.id}">
        <div class="t"><b>${m.nom}</b><small>${m.chapitres.length} chapitres</small></div>
        <div class="pct">${pct(matProgress(m))}</div>
      </a>`).join('')}
    </div>`;
  }

  function matiere(id) {
    const m = P.find(x => x.id === id); if (!m) return home();
    const themes = [...new Set(m.chapitres.map(c => c.theme))];
    view.innerHTML = `
    <div class="meta"><a href="#/">Accueil</a> › ${m.nom}</div>
    <h1>${m.nom}</h1>
    <p class="lead">${m.desc || ''}</p>
    <div class="actions"><a class="btn" href="#/revision/${m.id}">Réviser les cartes de cette matière</a><span class="muted">${pct(matProgress(m))} maîtrisé</span></div>
    ${themes.map(t => `<h2>${t}</h2><div class="list">` + m.chapitres.filter(c => c.theme === t).map(c => `
      <a class="row-item" href="#/chapitre/${c.id}">
        <div class="n">${c.num}</div>
        <div class="t"><b>${c.titre}</b><small>${cards(c).length} cartes · ${(c.quiz || []).length} questions · ${c.duree || 20} min</small></div>
        <div class="pct">${pct(progress(c))}</div>
      </a>`).join('') + '</div>').join('')}
    <h2>Ressources</h2>
    <div class="list">${(m.ressources || []).map(r => `<a class="ressource" href="${r.url}" target="_blank" rel="noopener"><b>${r.nom}</b><small>${r.desc}</small></a>`).join('')}</div>`;
  }

  function chapitre(id, tab) {
    const c = findChap(id); if (!c) return home();
    const m = c.matiere;
    const tabs = [['cours', 'Cours'], ['notions', 'Notions'], ['flash', 'Cartes'], ['quiz', 'Quiz'], ['feynman', 'Expliquer'], ['exos', 'Exercices']];
    const next = m.chapitres[c.num];
    view.innerHTML = `
    <div class="meta"><a href="#/">Accueil</a> › <a href="#/matiere/${m.id}">${m.nom}</a> › ${c.theme}</div>
    <h1>${c.titre}</h1>
    <div class="meta">${c.duree || 20} min · ${pct(progress(c))} maîtrisé${next ? ` · <a href="#/chapitre/${next.id}">Chapitre suivant</a>` : ''}</div>
    <div class="tabs">${tabs.map(([k, l]) => `<button class="${tab === k ? 'active' : ''}" onclick="location.hash='#/chapitre/${c.id}/${k}'">${l}</button>`).join('')}</div>
    <div id="tab"></div>`;
    const el = $('#tab');
    if (tab === 'cours') {
      el.innerHTML = `<div class="cours">${c.cours.map(s => `<h4>${esc(s.titre)}</h4>${md(s.texte)}`).join('')}</div>
      <div class="actions">
        <button class="btn primary" id="luBtn">${state.lu[c.id] ? 'Lu. Passer aux cartes' : 'Marquer comme lu et passer aux cartes'}</button>
      </div>`;
      $('#luBtn').onclick = () => { state.lu[c.id] = true; save(); location.hash = '#/chapitre/' + c.id + '/flash'; };
    }
    if (tab === 'notions') {
      el.innerHTML = (c.notions || []).map(n => `<div class="def"><b>${esc(n.terme)}</b> : ${inline(n.def)}${n.exemple ? `<div class="ex">Exemple : ${inline(n.exemple)}</div>` : ''}</div>`).join('') || '<p class="empty">Pas de notions pour ce chapitre.</p>';
    }
    if (tab === 'flash') flashSession(el, cards(c), false);
    if (tab === 'quiz') quizSession(el, c);
    if (tab === 'feynman') feynman(el, c);
    if (tab === 'exos') {
      el.innerHTML = `${c.pieges && c.pieges.length ? '<h3>Erreurs fréquentes</h3><ul class="cours">' + c.pieges.map(p => `<li>${inline(p)}</li>`).join('') + '</ul>' : ''}
      ${c.astuces && c.astuces.length ? '<h3>Méthode</h3><ul class="cours">' + c.astuces.map(p => `<li>${inline(p)}</li>`).join('') + '</ul>' : ''}
      ${c.exos && c.exos.length ? '<h3>Exercices</h3><p class="muted">À faire sur papier avant d\'ouvrir la correction.</p><div class="list">' + c.exos.map((e, i) => `<div class="exo"><b>${i + 1}.</b> ${inline(e.enonce)}<details><summary>Correction</summary><div class="cours" style="margin-top:8px">${md(e.correction)}</div></details></div>`).join('') + '</div>' : ''}
      ${!(c.pieges || c.astuces || c.exos) ? '<p class="empty">Pas d\'exercices pour ce chapitre.</p>' : ''}`;
    }
  }

  /* ---------- Cartes ---------- */
  function flashSession(el, deck, srsMode) {
    let list = srsMode ? deck.filter(isDue) : deck.slice();
    for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
    if (srsMode) list = list.slice(0, 40);
    let i = 0, ok = 0;
    if (!list.length) { el.innerHTML = `<p class="empty">Aucune carte à revoir pour le moment. Les prochaines reviendront à leur date prévue.</p>`; return; }
    function render() {
      if (i >= list.length) {
        el.innerHTML = `<p>Session terminée : ${ok} carte${ok > 1 ? 's' : ''} sur ${list.length} sue${ok > 1 ? 's' : ''}. Les cartes ratées reviendront demain, les autres plus tard.</p>
        <div class="actions"><button class="btn" id="again">Recommencer</button><a class="btn" href="#/">Accueil</a></div>`;
        $('#again').onclick = () => location.reload(); return;
      }
      const k = list[i];
      el.innerHTML = `<p class="meta">${esc(k.chap.matiere.nom)} · ${esc(k.chap.titre)} · ${i + 1} / ${list.length}</p>
      <div class="flash"><div class="flash-card" id="fc">
        <div class="tag">Question</div>
        <div class="q">${inline(k.q)}</div>
        <div class="a hidden" id="fa"><div class="tag">Réponse</div>${inline(k.a)}${k.ex ? `<div class="muted" style="margin-top:6px;font-size:14px">Exemple : ${inline(k.ex)}</div>` : ''}</div>
        <p class="muted" id="fhint" style="margin:16px 0 0;font-size:14px">Réponds mentalement, puis clique sur la carte ou appuie sur Espace.</p>
      </div>
      <div class="flash-rate" id="rate" style="visibility:hidden">
        <button class="btn" data-q="0"><kbd>1</kbd>Raté</button><button class="btn" data-q="3"><kbd>2</kbd>Difficile</button><button class="btn" data-q="4"><kbd>3</kbd>Su</button><button class="btn" data-q="5"><kbd>4</kbd>Facile</button>
      </div></div>`;
      const fc = $('#fc');
      fc.onclick = () => { $('#fa').classList.remove('hidden'); $('#fhint').remove(); $('#rate').style.visibility = 'visible'; };
      $('#rate').querySelectorAll('button').forEach(b => b.onclick = e => { e.stopPropagation(); const q = +b.dataset.q; rate(k.id, q); if (q >= 4) ok++; i++; render(); nav(); });
    }
    render();
    el._keys = e => {
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
      const fc = $('#fc'); if (!fc) return;
      if (e.code === 'Space') { e.preventDefault(); fc.click(); }
      const n = { Digit1: 0, Digit2: 3, Digit3: 4, Digit4: 5 }[e.code];
      if (n != null && $('#rate').style.visibility === 'visible') { const b = $('#rate button[data-q="' + n + '"]'); if (b) b.click(); }
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
    if (!qs.length) { el.innerHTML = '<p class="empty">Pas de quiz pour ce chapitre.</p>'; return; }
    for (let i = qs.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [qs[i], qs[j]] = [qs[j], qs[i]]; }
    let i = 0, score = 0;
    function render() {
      if (i >= qs.length) {
        const prev = state.quiz[c.id] || { best: 0, done: 0 };
        state.quiz[c.id] = { best: Math.max(prev.best, score / qs.length), done: prev.done + 1 }; save(); nav();
        const r = score / qs.length;
        el.innerHTML = `<p>${score} bonne${score > 1 ? 's' : ''} réponse${score > 1 ? 's' : ''} sur ${qs.length}.${r < 0.5 ? ' Relis le cours avant de refaire le quiz.' : r < 0.8 ? ' Refais le quiz dans quelques jours.' : ' Le chapitre est acquis ; les cartes suffiront pour l\'entretenir.'}</p>
        <div class="actions"><button class="btn" id="again">Refaire</button><a class="btn" href="#/chapitre/${c.id}/cours">Revoir le cours</a></div>`;
        $('#again').onclick = () => quizSession(el, c); return;
      }
      const q = qs[i];
      el.innerHTML = `<p class="meta">Question ${i + 1} sur ${qs.length}</p><div class="quiz-q">${inline(q.q)}</div><div class="choices">${q.choix.map((ch, k) => `<button class="choice" data-k="${k}">${inline(ch)}</button>`).join('')}</div><div id="exp"></div>`;
      el.querySelectorAll('.choice').forEach(b => b.onclick = () => {
        const k = +b.dataset.k; el.querySelectorAll('.choice').forEach(x => x.disabled = true);
        el.querySelector(`.choice[data-k="${q.r}"]`).classList.add('correct');
        if (k === q.r) score++; else b.classList.add('wrong');
        $('#exp').innerHTML = `<div class="exp">${k === q.r ? 'Exact. ' : 'Faux. '}${inline(q.exp || '')}</div><div class="actions"><button class="btn primary" id="next">Suivant</button></div>`;
        $('#next').onclick = () => { i++; render(); }; $('#next').focus();
      });
    }
    render();
  }

  /* ---------- Expliquer (Feynman) ---------- */
  function feynman(el, c) {
    const key = c.id; const saved = state.feynman[key] || '';
    el.innerHTML = `
      <p>Explique ce chapitre par écrit, avec tes mots, sans regarder le cours. Les points où tu bloques sont ceux à retravailler. Compare ensuite avec le cours.</p>
      <textarea id="fey" placeholder="Ton explication">${esc(saved)}</textarea>
      <div class="actions"><button class="btn primary" id="feyCheck">Comparer avec le cours</button><span class="muted" id="feyCount"></span></div>
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
      $('#feyRes').innerHTML = `<div class="exp"><p style="margin-top:0"><b>Notions citées</b> (${found.length} sur ${notions.length}) : ${found.map(esc).join(', ') || 'aucune'}.</p><p style="margin-bottom:0"><b>Notions absentes</b> : ${missing.map(esc).join(', ') || 'aucune'}.</p></div>
      <h3>Le cours</h3><div class="cours">${c.cours.map(s => `<h4>${esc(s.titre)}</h4>${md(s.texte)}`).join('')}</div>`;
    };
  }

  /* ---------- Révision du jour ---------- */
  function revision(matId) {
    const m = matId ? P.find(x => x.id === matId) : null;
    const deck = m ? m.chapitres.flatMap(cards) : allCards();
    const due = deck.filter(isDue);
    view.innerHTML = `<h1>Révision du jour${m ? ' · ' + m.nom : ''}</h1>
    <p class="lead">${due.length} carte${due.length > 1 ? 's' : ''} à revoir${due.length > 40 ? ', par séries de 40' : ''}. ${m ? '' : 'Les matières sont mélangées volontairement : cela oblige à retrouver le bon contexte à chaque carte.'}</p>
    <p class="meta">${m ? '<a href="#/revision">Toutes les matières</a>' : P.map(x => `<a href="#/revision/${x.id}">${x.nom}</a>`).join(' · ')}</p>
    <div id="tab"></div>`;
    flashSession($('#tab'), deck, true);
  }

  /* ---------- Méthode ---------- */
  function methode() {
    const M = window.METHODES || [];
    view.innerHTML = `<h1>Méthode</h1>
    <p class="lead">Ce que la recherche sur la mémoire a établi sur les façons de réviser, et comment l'appliquer.</p>
    ${M.map(s => `<h2>${esc(s.titre)}</h2><div class="cours">${md(s.texte)}</div>`).join('')}`;
  }

  /* ---------- Progression ---------- */
  function progression() {
    const all = allCards();
    const mastered = all.filter(k => state.srs[k.id] && state.srs[k.id].reps >= 2).length;
    const started = chapitres.filter(c => state.lu[c.id] || cards(c).some(k => state.srs[k.id]) || state.quiz[c.id]);
    const weak = started.map(c => ({ c, p: progress(c) })).filter(x => x.p < 60).sort((a, b) => a.p - b.p).slice(0, 8);
    view.innerHTML = `<h1>Progression</h1>
    <p class="lead">${mastered} carte${mastered > 1 ? 's' : ''} sur ${all.length} revue${mastered > 1 ? 's' : ''} au moins deux fois avec succès. ${started.length} chapitre${started.length > 1 ? 's' : ''} commencé${started.length > 1 ? 's' : ''} sur ${chapitres.length}.</p>
    <h2>Par matière</h2>
    <div class="list">${P.map(m => `<a class="row-item" href="#/matiere/${m.id}"><div class="t"><b>${m.nom}</b><div class="bar"><i style="width:${matProgress(m)}%"></i></div></div><div class="pct">${pct(matProgress(m))}</div></a>`).join('')}</div>
    <h2>À retravailler</h2>
    ${weak.length ? '<div class="list">' + weak.map(({ c, p }) => `<a class="row-item" href="#/chapitre/${c.id}"><div class="t"><b>${c.titre}</b><small>${c.matiere.nom}</small></div><div class="pct">${pct(p)}</div></a>`).join('') + '</div>' : '<p class="muted">Les chapitres commencés mais peu maîtrisés apparaîtront ici.</p>'}
    <p style="margin-top:32px"><button class="link" id="resetBtn">Effacer toute la progression</button></p>`;
    $('#resetBtn').onclick = () => { if (confirm('Effacer toute la progression enregistrée dans ce navigateur ?')) { Object.keys(localStorage).filter(k => k.startsWith('rv:')).forEach(k => localStorage.removeItem(k)); location.reload(); } };
  }

  /* ---------- Recherche ---------- */
  const strip = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const index = [];
  chapitres.forEach(c => {
    index.push({ type: 'Chapitre', t: c.titre, s: c.matiere.nom + ' · ' + c.theme, href: '#/chapitre/' + c.id, key: strip(c.titre + ' ' + c.theme) });
    (c.notions || []).forEach(n => index.push({ type: 'Notion', t: n.terme, s: n.def, href: '#/chapitre/' + c.id + '/notions', key: strip(n.terme + ' ' + n.def) }));
    c.cours.forEach(s => index.push({ type: 'Cours', t: s.titre, s: c.matiere.nom + ' · ' + c.titre, href: '#/chapitre/' + c.id, key: strip(s.titre + ' ' + s.texte) }));
  });
  const sIn = $('#search'), sRes = $('#searchResults'); let sel = 0, hits = [];
  function doSearch() {
    const q = strip(sIn.value.trim()); if (q.length < 2) { sRes.classList.remove('open'); return; }
    const words = q.split(/\s+/);
    hits = index.map(it => { let sc = 0; for (const w of words) { if (strip(it.t).includes(w)) sc += it.type === 'Chapitre' ? 6 : 4; else if (it.key.includes(w)) sc += 1; else return null; } return { it, sc }; }).filter(Boolean).sort((a, b) => b.sc - a.sc).slice(0, 12).map(x => x.it);
    sel = 0;
    const hl = s => { let h = esc(s); words.forEach(w => { h = h.replace(new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>'); }); return h; };
    sRes.innerHTML = hits.length ? hits.map((it, i) => `<div class="sr ${i === sel ? 'sel' : ''}" data-i="${i}"><span class="k">${it.type}</span><b>${hl(it.t)}</b><small>${hl(it.s.slice(0, 110))}</small></div>`).join('') : '<div class="sr"><small>Aucun résultat</small></div>';
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
  function pomoDraw() { $('#pomoTime').textContent = fmt(pomoLeft); $('#pomoBtn').textContent = 'Minuteur ' + fmt(pomoLeft); $('#pomoLabel').textContent = pomoPhase === 'focus' ? 'Travail, 25 minutes' : 'Pause, 5 minutes'; }
  function togglePomo() { $('#pomo').classList.toggle('hidden'); }
  $('#pomoBtn').onclick = togglePomo; $('#pomoClose').onclick = togglePomo;
  $('#pomoReset').onclick = () => { clearInterval(pomoRun); pomoRun = null; pomoPhase = 'focus'; pomoLeft = 25 * 60; $('#pomoStart').textContent = 'Démarrer'; pomoDraw(); };
  $('#pomoStart').onclick = () => {
    if (pomoRun) { clearInterval(pomoRun); pomoRun = null; $('#pomoStart').textContent = 'Reprendre'; return; }
    $('#pomoStart').textContent = 'Pause';
    pomoRun = setInterval(() => {
      pomoLeft--;
      if (pomoLeft <= 0) {
        if (pomoPhase === 'focus') { pomoPhase = 'break'; pomoLeft = 5 * 60; } else { pomoPhase = 'focus'; pomoLeft = 25 * 60; }
        toast(pomoPhase === 'focus' ? 'Fin de la pause' : 'Pause de 5 minutes');
      }
      pomoDraw();
    }, 1000);
  };
  pomoDraw();
  route();
})();
