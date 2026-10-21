window.PROGRAMME = window.PROGRAMME || [];
window.PROGRAMME.push({
id: 'anglais', nom: 'Anglais', emoji: '🇬🇧', couleur: '#ef4444',
desc: "En 2nde, l'objectif est le niveau B1 : comprendre, parler et écrire sur des sujets courants. Ce qui rapporte le plus : maîtriser les temps, les modaux, les connecteurs, et 300 mots de vocabulaire bien choisis. L'anglais s'apprend par exposition quotidienne : 15 min par jour de séries en VO sous-titrées anglais > 2 h le dimanche.",
ressources: [
 { nom: 'BBC Learning English', url: 'https://www.bbc.co.uk/learningenglish', ico: '📻', desc: 'Grammaire, vocabulaire, audio authentique, gratuit.' },
 { nom: 'Anki + decks anglais', url: 'https://apps.ankiweb.net/', ico: '🃏', desc: 'La meilleure appli de répétition espacée pour le vocabulaire.' },
 { nom: 'YouGlish', url: 'https://youglish.com/', ico: '🔊', desc: 'Entends n\'importe quel mot prononcé dans de vraies vidéos.' },
 { nom: 'Language Reactor', url: 'https://www.languagereactor.com/', ico: '🎬', desc: 'Extension pour regarder Netflix/YouTube avec double sous-titres.' },
 { nom: 'Lumni Anglais 2nde', url: 'https://www.lumni.fr/lycee/seconde/anglais', ico: '📺', desc: 'Les axes culturels du programme.' }
],
chapitres: [
{ id: 'en-temps', theme: 'Grammaire', titre: 'Les temps : present, past, present perfect, future', duree: 35,
cours: [
{ titre: 'Present simple vs present continuous (BE + -ing)', texte: `
- **Present simple** : habitudes, vérités générales, goûts. *I play football on Saturdays. Water boils at 100 °C.* ⚠ **-s à la 3e personne** : *she plays*. Négation/question avec **do/does** : *She doesn't play. Does she play?*
- **Present continuous** : action en cours, temporaire, ou projet proche. *I'm playing right now. She's working in London this month. We're leaving tomorrow.*
Adverbes : always, usually, often, never (simple) / now, at the moment, today (continuous).
X Verbes d'état jamais en -ing : *know, like, want, believe, understand, need*. « I'm knowing » n'existe pas.`},
{ titre: 'Past simple vs present perfect', texte: `
- **Past simple** (prétérit) : action **terminée** à un moment **précis** du passé. Verbes réguliers : **-ed** ; irréguliers : *go → went, see → saw, take → took, eat → ate, write → wrote, have → had, make → made, come → came, buy → bought, think → thought*. *I visited London in 2022. She went home.* Négation : **didn't** + base verbale.
- **Present perfect** (HAVE + participe passé) : lien entre passé et **présent** : expérience (*I have been to Spain*), résultat visible (*I've lost my keys*), action qui continue (*I've lived here for 10 years*). Marqueurs : **ever, never, just, already, yet, since, for**.
$ moment précis (yesterday, in 2010, ago, last week) ⟹ PAST SIMPLE    |    sans date, lien avec maintenant ⟹ PRESENT PERFECT
- **Past continuous** (was/were + -ing) : action en cours interrompue : *I was sleeping when the phone rang.*
- **For** + durée (*for two years*) / **since** + point de départ (*since 2020*).`},
{ titre: 'Parler du futur', texte: `
- **Will** + base verbale : prédiction, décision spontanée, promesse. *It will rain. I'll help you.*
- **Be going to** : intention, projet décidé, prédiction avec indices. *I'm going to study medicine. Look at the clouds, it's going to rain.*
- **Present continuous** : rendez-vous fixé. *I'm meeting Tom at 6.*
- **Conditionnel** : **would** + base verbale. *I would go if I had time.* Hypothèse : **if + past simple, would** (*If I were rich, I would travel.*) ; probable : **if + present, will** (*If it rains, we'll stay home.*).`}
],
notions: [
 { terme: 'Present simple', def: 'Habitudes et vérités générales ; -s à la 3e personne ; négation avec don\'t/doesn\'t.', exemple: 'She plays tennis every week.' },
 { terme: 'Present continuous', def: 'BE + V-ing : action en cours, situation temporaire, projet proche.', exemple: 'I\'m reading now.' },
 { terme: 'Verbes d\'état', def: 'know, like, want, need, believe, understand : jamais à la forme en -ing.' },
 { terme: 'Past simple', def: 'Action terminée à un moment précis du passé ; -ed ou verbe irrégulier ; didn\'t + base verbale.', exemple: 'I saw him yesterday.' },
 { terme: 'Present perfect', def: 'HAVE + participe passé : lien passé-présent (expérience, résultat, durée) ; jamais avec une date précise.', exemple: 'I have never eaten sushi.' },
 { terme: 'For / since', def: 'For + durée (for 3 years) ; since + point de départ (since Monday).' },
 { terme: 'Past continuous', def: 'was/were + V-ing : action en cours dans le passé, souvent interrompue.', exemple: 'I was sleeping when you called.' },
 { terme: 'Will vs be going to', def: 'Will : prédiction, décision spontanée. Going to : intention, projet, indice visible.' },
 { terme: 'Conditionnel (if)', def: 'If + present, will (probable) ; If + past, would (hypothétique).', exemple: 'If I were you, I would go.' },
 { terme: 'Verbes irréguliers de base', def: 'go/went/gone, see/saw/seen, take/took/taken, eat/ate/eaten, write/wrote/written, buy/bought/bought, think/thought/thought, come/came/come.' }
],
quiz: [
 { q: 'I ___ to London in 2019.', choix: ['have been', 'went', 'go', 'was going'], r: 1, exp: 'Date précise ⟹ past simple.' },
 { q: 'She ___ here since 2015.', choix: ['lives', 'lived', 'has lived', 'is living'], r: 2, exp: '« since » + action qui continue ⟹ present perfect.' },
 { q: 'Look at those clouds! It ___ rain.', choix: ['will', 'is going to', 'is', 'would'], r: 1, exp: 'Prédiction avec indice visible ⟹ going to.' },
 { q: 'I ___ TV when she arrived.', choix: ['watched', 'was watching', 'have watched', 'watch'], r: 1, exp: 'Action en cours interrompue ⟹ past continuous.' },
 { q: 'He ___ football every Sunday.', choix: ['play', 'plays', 'is playing', 'played'], r: 1, exp: 'Habitude, 3e personne ⟹ plays.' },
 { q: 'If I ___ rich, I would buy a boat.', choix: ['am', 'was/were', 'will be', 'would be'], r: 1, exp: 'Hypothèse irréelle : if + past simple, would.' },
 { q: '« I ___ my keys! I can\'t open the door. »', choix: ['lost', 'have lost', 'was losing', 'lose'], r: 1, exp: 'Résultat présent ⟹ present perfect.' }
],
pieges: ['Oublier le -s à la 3e personne du singulier : erreur n°1 des copies.', 'Present perfect avec une date : « I have seen him yesterday » est faux.', 'Mettre un verbe au passé après « did » : « did you went » ⟹ « did you go ».'],
astuces: ['Test present perfect : si tu peux ajouter « jusqu\'à maintenant » ou « déjà/jamais », c\'est le present perfect. Si tu peux dire « quand ? » avec une date, past simple.', 'Apprends les 50 verbes irréguliers les plus fréquents par paquets de 10, en flashcards.'],
exos: [
 { enonce: 'Mettre au temps correct : « Yesterday I (go) to the cinema. I (never/see) such a good film! I (watch) it when my phone (ring). »', correction: `Yesterday I **went** to the cinema. I **have never seen** such a good film! I **was watching** it when my phone **rang**.` }
]},

{ id: 'en-modaux', theme: 'Grammaire', titre: 'Modaux, comparatifs, quantifieurs et structures clés', duree: 30,
cours: [
{ titre: 'Les modaux', texte: `
Toujours suivis de la **base verbale** (sans to), pas de -s, négation avec not.
- **can / can't** : capacité, permission. *I can swim. Can I go out?* Passé : **could**.
- **must** : obligation forte (venant de soi) ; **mustn't** = interdiction. *You mustn't smoke here.* ≠ **don't have to** = pas obligé. *You don't have to come.*
- **have to** : obligation externe. *I have to wear a uniform.*
- **should** : conseil. *You should sleep more.*
- **may / might** : possibilité, permission polie. *It might rain.*
- **will / would** : futur / conditionnel, politesse (*Would you like…?*).
- Capacité / probabilité : *must be* (certitude), *can't be* (impossible), *may be* (peut-être).`},
{ titre: 'Comparatifs et superlatifs', texte: `
- Adjectifs **courts** (1 syllabe, ou 2 terminés en -y) : **-er / the -est**. *tall → taller → the tallest ; happy → happier → the happiest ; big → bigger.*
- Adjectifs **longs** : **more / the most**. *interesting → more interesting → the most interesting.*
- Irréguliers : *good → better → the best ; bad → worse → the worst ; far → further.*
- **as … as** (aussi… que), **not as … as**, **less … than**. *She is as tall as me.*
- *the more…, the more…* ; *more and more*.`},
{ titre: 'Quantifieurs, articles, pronoms', texte: `
- **Dénombrables** (a book, two books) / **indénombrables** (water, information, advice, furniture : jamais de pluriel ni de « a »).
- **much** + indénombrable, **many** + dénombrable, **a lot of** partout. **few / a few** (dénombrable), **little / a little** (indénombrable). **some** (affirmatif), **any** (négatif/question).
- Article **the** : absent devant les généralités (*I like music*, *Life is short*) ; **a/an** devant une profession (*She is a doctor*).
- **Génitif** : *Tom's car*, *my parents' house*.
- Pronoms relatifs : **who** (personnes), **which** (choses), **whose** (dont), **where**. *The man who called. The book which I read.*
- **Question tags** : *You're French, aren't you? She can't swim, can she?*
- Gérondif après *like, enjoy, stop, avoid* (*I enjoy reading*) ; infinitif après *want, decide, hope* (*I want to go*).`}
],
notions: [
 { terme: 'Modal + base verbale', def: 'can, must, should, may, might, will, would : suivis du verbe sans « to », sans -s.' },
 { terme: 'mustn\'t vs don\'t have to', def: 'mustn\'t = interdiction ; don\'t have to = pas obligé.', exemple: 'You mustn\'t cheat. You don\'t have to come.' },
 { terme: 'should', def: 'Conseil, recommandation.', exemple: 'You should revise every day.' },
 { terme: 'might / may', def: 'Possibilité incertaine (peut-être).', exemple: 'It might snow.' },
 { terme: 'Comparatif court / long', def: 'Court : -er than (taller). Long : more … than (more difficult).' },
 { terme: 'Superlatif', def: 'the -est / the most ; irréguliers : the best, the worst.' },
 { terme: 'as … as', def: 'Égalité : as tall as ; not as tall as = moins grand.' },
 { terme: 'much / many / a lot of', def: 'much + indénombrable, many + dénombrable, a lot of + les deux.' },
 { terme: 'Indénombrables fréquents', def: 'information, advice, furniture, news, money, homework : pas de pluriel, pas de « a ».' },
 { terme: 'Pronoms relatifs', def: 'who (personnes), which (choses), whose (possession), where (lieu), that (les deux).' },
 { terme: 'Question tag', def: 'Mini-question en fin de phrase, inverse de la principale.', exemple: 'It\'s cold, isn\'t it?' },
 { terme: 'Gérondif vs infinitif', def: 'enjoy/like/stop/avoid + V-ing ; want/decide/hope/need + to V.' }
],
quiz: [
 { q: 'You ___ smoke in the classroom. (interdiction)', choix: ['don\'t have to', 'mustn\'t', 'shouldn\'t', 'can'], r: 1, exp: 'Interdiction forte = mustn\'t.' },
 { q: 'This exercise is ___ than the previous one.', choix: ['more easy', 'easier', 'the easiest', 'most easy'], r: 1, exp: 'Adjectif court en -y ⟹ easier.' },
 { q: 'How ___ money do you have?', choix: ['many', 'much', 'a few', 'few'], r: 1, exp: 'money est indénombrable.' },
 { q: 'The woman ___ lives next door is a doctor.', choix: ['which', 'who', 'whose', 'where'], r: 1, exp: 'Personne ⟹ who.' },
 { q: 'She can swim, ___?', choix: ['can she', 'can\'t she', 'does she', 'isn\'t she'], r: 1, exp: 'Phrase affirmative ⟹ tag négatif avec le même auxiliaire.' },
 { q: 'I enjoy ___ to music.', choix: ['listen', 'to listen', 'listening', 'listened'], r: 2, exp: 'enjoy + V-ing.' },
 { q: 'It\'s ___ film I have ever seen.', choix: ['the better', 'the best', 'the most good', 'best'], r: 1, exp: 'Superlatif irrégulier de good.' }
],
pieges: ['« He can to swim », « She musts » : jamais de « to » ni de -s après un modal.', '« informations », « an advice » : indénombrables.', '« more better » : jamais de double comparatif.'],
astuces: ['Pour chaque modal, mémorise une phrase-exemple que tu peux recycler à l\'oral.'],
exos: [
 { enonce: 'Traduire : « Tu devrais faire plus de sport. Tu n\'es pas obligé de courir, mais tu ne dois pas rester assis toute la journée. »', correction: `You **should** do more sport. You **don't have to** run, but you **mustn't** stay seated all day.` }
]},

{ id: 'en-expression', theme: 'Expression et méthodes', titre: 'Vocabulaire essentiel, connecteurs et méthode pour l\'écrit et l\'oral', duree: 30,
cours: [
{ titre: 'Connecteurs et expressions pour argumenter', texte: `
- Ajouter : *moreover, furthermore, besides, in addition, also*.
- Opposer : *however, nevertheless, whereas, although, on the one hand… on the other hand, but, yet*.
- Cause / conséquence : *because, since, as, due to / therefore, so, as a result, consequently*.
- Illustrer : *for example, for instance, such as*.
- Conclure : *to conclude, in a nutshell, all in all, finally*.
- Donner son avis : *In my opinion, I believe that, as far as I'm concerned, I strongly agree/disagree, it seems to me that*.
- Nuancer : *to some extent, it depends, admittedly… but*.`},
{ titre: 'Vocabulaire des axes du programme', texte: `
Le programme de 2nde propose 8 axes culturels ; les champs lexicaux qui reviennent :
- **Vie quotidienne, société** : *to grow up, to struggle, to cope with, a challenge, to achieve, wealthy/poor, inequality, to belong, a community, to fit in.*
- **Environnement** : *global warming, pollution, to recycle, sustainable, to waste, renewable energy, to protect, to endanger, a threat.*
- **Technologie, médias** : *a device, to download, social media, to share, privacy, fake news, addictive, to influence, a screen.*
- **Études, travail** : *to apply for, a job interview, a skill, to hire/fire, a career, a degree, to succeed/fail.*
- **Histoire, engagement** : *rights, freedom, to fight for, to protest, a hero, to commit, a struggle, to overcome, equality.*
- **Sentiments** : *to be fed up with, to be keen on, to look forward to, to be afraid of, to be proud of, to feel guilty.*
Faux amis : *actually* (en fait), *eventually* (finalement), *to attend* (assister à), *a library* (bibliothèque), *sensible* (raisonnable), *to resume* (reprendre), *a journey* (voyage).`},
{ titre: 'Méthode : écrit, oral, compréhension', texte: `
- **Expression écrite** (80-150 mots) : 1) lis la consigne et surligne les tâches ; 2) plan en 3 points ; 3) une idée par paragraphe avec un connecteur ; 4) relis : -s à la 3e personne, temps, articles, ordre des mots (adjectif avant le nom : *a red car*).
- **Oral** : parle en phrases courtes ; utilise des gap-fillers (*well, let me think, I mean*) plutôt que « euh » ; ne traduis pas du français, reformule.
- **Compréhension orale** : 1re écoute pour le sens global (qui, où, quoi), 2e pour les détails, note des mots-clés, pas des phrases ; les chiffres, dates, noms propres sont toujours attendus.
- **Compréhension écrite** : lis les questions AVANT le texte ; repère titre, source, date ; ne bloque pas sur un mot inconnu, devine par le contexte.
! Exposition quotidienne : 15 min de série en VO (sous-titres anglais), un podcast, les paroles d'une chanson. C'est ce qui fait la différence à l'oral.`}
],
notions: [
 { terme: 'however / whereas / although', def: 'Connecteurs d\'opposition : cependant / tandis que / bien que.' },
 { terme: 'therefore / as a result', def: 'Connecteurs de conséquence : donc / par conséquent.' },
 { terme: 'moreover / furthermore', def: 'Connecteurs d\'addition : de plus / en outre.' },
 { terme: 'In my opinion / as far as I\'m concerned', def: 'Expressions pour donner son avis.' },
 { terme: 'actually', def: 'Faux ami : « en fait », pas « actuellement » (currently).' },
 { terme: 'eventually', def: 'Faux ami : « finalement », pas « éventuellement » (possibly).' },
 { terme: 'to look forward to + V-ing', def: 'Avoir hâte de.', exemple: 'I\'m looking forward to seeing you.' },
 { terme: 'to cope with / to deal with', def: 'Faire face à / s\'occuper de.' },
 { terme: 'global warming / sustainable', def: 'Réchauffement climatique / durable.' },
 { terme: 'to apply for a job', def: 'Postuler à un emploi.' },
 { terme: 'Ordre des mots', def: 'Adjectif avant le nom (a big house) ; adverbe de fréquence avant le verbe (I often go) mais après be (I am often late).' }
],
quiz: [
 { q: '« Actually » signifie…', choix: ['actuellement', 'en fait', 'activement', 'finalement'], r: 1, exp: 'Actuellement = currently / nowadays.' },
 { q: 'Connecteur d\'opposition :', choix: ['moreover', 'therefore', 'however', 'for instance'], r: 2, exp: 'However = cependant.' },
 { q: 'I\'m looking forward to ___ you.', choix: ['see', 'seeing', 'to see', 'saw'], r: 1, exp: '« to » est ici une préposition ⟹ V-ing.' },
 { q: 'Traduction de « une bibliothèque » :', choix: ['a bookshop', 'a library', 'a librairie', 'a bookstore'], r: 1, exp: 'Librairie = bookshop.' },
 { q: 'Quel ordre est correct ?', choix: ['a car red', 'a red car', 'red a car', 'car a red'], r: 1, exp: 'Adjectif avant le nom.' },
 { q: '« To conclude » se place…', choix: ['au début', 'au milieu', 'à la fin', 'nulle part'], r: 2, exp: 'Connecteur de conclusion.' }
],
pieges: ['Traduire mot à mot : « I am agree » (⟹ I agree), « I have 15 years » (⟹ I am 15).', 'Oublier le sujet : « Is important » ⟹ « It is important ».'],
astuces: ['Apprends 10 connecteurs par cœur et place-les systématiquement : ça structure et ça impressionne.', 'Tiens un carnet de 5 mots nouveaux par jour rencontrés dans une série ou une chanson.'],
exos: [
 { enonce: 'Écrire 80 mots : « Should teenagers spend less time on social media? Give your opinion. »', correction: `Exemple : In my opinion, teenagers should spend less time on social media. **First of all**, social networks are addictive: many of us check our phones dozens of times a day. **Moreover**, they can damage self-esteem because people compare themselves to perfect pictures. **However**, social media can be useful to stay in touch with friends and to learn new things. **To conclude**, the problem is not social media itself but the time we waste on it; limiting it to one hour a day seems sensible. (90 words)` }
]}
]});
