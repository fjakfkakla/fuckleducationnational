window.PROGRAMME = window.PROGRAMME || [];
window.PROGRAMME.push({
id: 'francais', nom: 'Français', emoji: '📖', couleur: '#ec4899',
desc: "Quatre objets d'étude (poésie, littérature d'idées, roman, théâtre) + grammaire + méthodes du commentaire et de la dissertation. Le français en 2nde prépare l'EAF de 1re : apprends les mouvements, les figures de style et la méthode dès maintenant.",
ressources: [
 { nom: 'Lumni Français 2nde', url: 'https://www.lumni.fr/lycee/seconde/francais', ico: '📺', desc: 'Méthode et œuvres.' },
 { nom: 'Mediaclasse (YouTube)', url: 'https://www.youtube.com/@Mediaclasse', ico: '🎥', desc: 'Analyses d\'œuvres et méthode du commentaire, très clair.' },
 { nom: 'Études littéraires', url: 'https://www.etudes-litteraires.com/', ico: '📚', desc: 'Figures de style, mouvements, méthodologie.' },
 { nom: 'Projet Voltaire', url: 'https://www.projet-voltaire.fr/', ico: '✍️', desc: 'Orthographe et grammaire : exercices d\'entraînement.' },
 { nom: 'Gallica (BnF)', url: 'https://gallica.bnf.fr/', ico: '🏛️', desc: 'Les textes originaux, gratuits.' }
],
chapitres: [
{ id: 'f-figures', theme: 'Outils d\'analyse', titre: 'Figures de style et procédés d\'écriture', duree: 30,
cours: [
{ titre: 'Figures d\'analogie', texte: `
- **Comparaison** : rapproche deux éléments avec un **outil de comparaison** (comme, tel, semblable à, ainsi que). « Il est fort **comme** un lion. »
- **Métaphore** : comparaison **sans** outil. « Cet homme est un lion. » Métaphore **filée** : prolongée sur plusieurs lignes.
- **Personnification** : attribue des traits humains à une chose/animal. « Le vent hurle. »
- **Allégorie** : représente une idée abstraite par une image concrète (la Mort avec une faux).`},
{ titre: 'Figures d\'opposition et d\'amplification', texte: `
- **Antithèse** : oppose deux termes dans une même phrase. « Je vis, je meurs ; je me brûle et me noie. » (Louise Labé)
- **Oxymore** : deux mots contradictoires côte à côte. « Cette obscure clarté » (Corneille).
- **Hyperbole** : exagération. « Je meurs de faim. »
- **Litote** : dire moins pour suggérer plus. « Va, je ne te hais point. » (= je t'aime, Corneille)
- **Euphémisme** : atténue une réalité brutale. « Il nous a quittés. »
- **Gradation** : termes d'intensité croissante. « Va, cours, vole et nous venge. »
- **Anaphore** : répétition d'un mot en début de phrase/vers. « Paris outragé ! Paris brisé ! Paris martyrisé ! »`},
{ titre: 'Figures de substitution et de construction', texte: `
- **Métonymie** : remplacer par un terme lié logiquement (contenant/contenu, cause/effet). « Boire un verre. » « Lire un Zola. »
- **Synecdoque** : la partie pour le tout. « Une voile à l'horizon. »
- **Périphrase** : plusieurs mots pour un seul. « Le roi des animaux. »
- **Parallélisme** : même construction répétée. « Tel père, tel fils. »
- **Chiasme** : structure en croix AB/BA. « Il faut manger pour vivre et non vivre pour manger. »
- **Énumération / accumulation** : liste de termes.
- **Ironie / antiphrase** : dire le contraire de ce qu'on pense. « Quel beau temps ! » (sous la pluie)
- **Question rhétorique** : question dont la réponse est évidente.`},
{ titre: 'Autres procédés à repérer', texte: `
- **Champ lexical** : ensemble de mots d'un même thème (la mort, la nature).
- **Registres** : lyrique (sentiments), tragique (fatalité), comique, pathétique (pitié), épique (héroïsme), satirique, polémique, fantastique.
- **Types de phrases**, ponctuation (points de suspension, exclamations), **temps verbaux** (présent de vérité générale, imparfait de description, passé simple de l'action).
- **Focalisation** : interne (à travers un personnage), externe (caméra), zéro (narrateur omniscient).
- **Versification** : alexandrin (12 syllabes), octosyllabe (8), décasyllabe (10) ; rimes plates (AABB), croisées (ABAB), embrassées (ABBA) ; **enjambement**, **rejet**, **césure** à l'hémistiche ; sonnet = 2 quatrains + 2 tercets.
! En commentaire, nommer la figure ne suffit jamais : il faut dire **quel effet** elle produit et ce qu'elle révèle du sens.`}
],
notions: [
 { terme: 'Comparaison', def: 'Rapprochement de deux éléments avec un outil de comparaison (comme, tel…).', exemple: '« fort comme un lion »' },
 { terme: 'Métaphore', def: 'Comparaison sans outil ; identifie directement deux réalités. Filée si prolongée.', exemple: '« cet homme est un lion »' },
 { terme: 'Personnification', def: 'Prêter des caractéristiques humaines à un objet, un animal, une idée.', exemple: '« le vent hurle »' },
 { terme: 'Antithèse', def: 'Opposition de deux termes ou idées dans une même phrase.', exemple: '« je vis, je meurs »' },
 { terme: 'Oxymore', def: 'Alliance de deux mots contradictoires.', exemple: '« obscure clarté »' },
 { terme: 'Hyperbole', def: 'Exagération pour frapper l\'esprit.', exemple: '« je meurs de faim »' },
 { terme: 'Litote', def: 'Dire moins pour faire entendre plus.', exemple: '« je ne te hais point »' },
 { terme: 'Euphémisme', def: 'Atténuer une réalité désagréable.', exemple: '« il nous a quittés »' },
 { terme: 'Gradation', def: 'Succession de termes d\'intensité croissante (ou décroissante).', exemple: '« va, cours, vole »' },
 { terme: 'Anaphore', def: 'Répétition d\'un même mot en tête de vers ou de phrase.', exemple: '« Paris outragé ! Paris brisé ! »' },
 { terme: 'Métonymie', def: 'Remplacer un mot par un autre lié logiquement (contenant, auteur, lieu…).', exemple: '« boire un verre »' },
 { terme: 'Chiasme', def: 'Construction en croix AB / BA.', exemple: '« manger pour vivre, vivre pour manger »' },
 { terme: 'Antiphrase (ironie)', def: 'Dire le contraire de ce que l\'on pense pour se moquer.', exemple: '« quel beau temps ! » sous la pluie' },
 { terme: 'Champ lexical', def: 'Ensemble de mots renvoyant à un même thème.' },
 { terme: 'Registre', def: 'Tonalité d\'un texte : lyrique, tragique, comique, pathétique, épique, satirique, fantastique.' },
 { terme: 'Alexandrin', def: 'Vers de 12 syllabes, coupé à l\'hémistiche (6/6) par la césure.' },
 { terme: 'Enjambement / rejet', def: 'Phrase qui déborde la fin du vers ; rejet quand un court élément est reporté au vers suivant.' },
 { terme: 'Focalisation', def: 'Point de vue du récit : interne (un personnage), externe (témoin), zéro (omniscient).' }
],
quiz: [
 { q: '« Cette obscure clarté qui tombe des étoiles » est…', choix: ['une antithèse', 'un oxymore', 'une litote', 'une métaphore'], r: 1, exp: 'Deux mots contradictoires accolés.' },
 { q: '« Va, je ne te hais point » est…', choix: ['un euphémisme', 'une hyperbole', 'une litote', 'une ironie'], r: 2, exp: 'Dire moins (ne pas haïr) pour dire plus (aimer).' },
 { q: '« Le vent hurle dans les arbres » :', choix: ['comparaison', 'personnification', 'métonymie', 'allégorie'], r: 1, exp: 'Le vent reçoit une action humaine/animale.' },
 { q: '« Lire un Zola » est…', choix: ['une métaphore', 'une synecdoque', 'une métonymie', 'une périphrase'], r: 2, exp: 'L\'auteur pour l\'œuvre.' },
 { q: 'Un sonnet est composé de…', choix: ['4 quatrains', '2 quatrains et 2 tercets', '3 tercets', '14 alexandrins libres'], r: 1, exp: '14 vers : 4 + 4 + 3 + 3.' },
 { q: 'Le registre qui vise à susciter la pitié :', choix: ['lyrique', 'épique', 'pathétique', 'satirique'], r: 2, exp: 'Pathos = souffrance.' },
 { q: '« Va, cours, vole et nous venge » est…', choix: ['une anaphore', 'une gradation', 'un chiasme', 'un parallélisme'], r: 1, exp: 'Intensité croissante : marcher → courir → voler.' }
],
pieges: ['Confondre antithèse (deux termes opposés dans la phrase) et oxymore (deux termes contradictoires accolés).', 'Confondre métaphore (ressemblance) et métonymie (lien logique).', 'Repérer une figure sans en expliquer l\'effet : zéro point.'],
astuces: ['Formule magique du commentaire : citation + nom du procédé + effet produit + interprétation (ce que ça révèle).', 'Fais des fiches « figure → exemple perso → effet typique ».'],
exos: [
 { enonce: 'Analyser : « Je vis, je meurs ; je me brûle et me noie » (Louise Labé).', correction: `Vers construit sur des **antithèses** (vis/meurs, brûle/noie) et un **parallélisme** (je + verbe). Le rythme binaire traduit les contradictions de la passion amoureuse : la poétesse est ballottée entre des états extrêmes. Le **registre lyrique** (je, sentiments) exprime la souffrance et l'intensité de l'amour, thème pétrarquiste du XVIe siècle.` }
]},

{ id: 'f-poesie', theme: 'La poésie du Moyen Âge au XVIIIe siècle', titre: 'Poésie : mouvements, formes et auteurs', duree: 30,
cours: [
{ titre: 'Du Moyen Âge à la Pléiade', texte: `
- **Moyen Âge** : poésie chantée des **troubadours** (sud, langue d'oc) et **trouvères** (nord) : amour courtois (fin'amor). **Rutebeuf**, **Christine de Pizan**, **Charles d'Orléans**, **François Villon** (*Ballade des pendus*, XVe) : lyrisme personnel, mort, misère.
- **XVIe, la Pléiade** : groupe de 7 poètes autour de **Ronsard** et **Du Bellay** ; *Défense et illustration de la langue française* (1549) : enrichir le français, imiter les Anciens et Pétrarque. Formes : **sonnet**, ode. Thèmes : amour (Ronsard, « Mignonne, allons voir si la rose »), **fuite du temps**, **carpe diem** (cueille le jour), nostalgie (Du Bellay, *Les Regrets*, « Heureux qui comme Ulysse »).
- **Louise Labé** : voix féminine de l'amour passionné (Lyon).`},
{ titre: 'Baroque, classicisme, Lumières', texte: `
- **Baroque** (fin XVIe-début XVIIe) : instabilité, mouvement, illusion, mort ; images frappantes, métaphores (Agrippa d'Aubigné, *Les Tragiques* ; Théophile de Viau).
- **Classicisme** (XVIIe) : ordre, raison, clarté, règles. **La Fontaine** : *Fables* (1668-1694) : « plaire et instruire », critique de la cour et des puissants sous le masque des animaux. **Boileau** : *Art poétique*.
- **XVIIIe** : poésie moins centrale (le siècle de la prose) ; **André Chénier**, poésie et Révolution.
Fonctions de la poésie : exprimer les sentiments (lyrisme), célébrer, dénoncer (engagement), jouer avec le langage, dire le monde autrement.`}
],
notions: [
 { terme: 'Lyrisme', def: 'Expression des sentiments personnels (amour, mélancolie, nature) à la 1re personne ; vient de la lyre d\'Orphée.' },
 { terme: 'Amour courtois (fin\'amor)', def: 'Idéal médiéval : le chevalier-poète sert une dame inaccessible.' },
 { terme: 'François Villon', def: 'Poète du XVe siècle (Ballade des pendus, Testament) : misère, mort, ironie.' },
 { terme: 'Pléiade', def: 'Groupe de poètes du XVIe (Ronsard, Du Bellay) voulant illustrer la langue française en imitant les Anciens.' },
 { terme: 'Carpe diem', def: '« Cueille le jour » : profiter du présent face à la fuite du temps (Ronsard).' },
 { terme: 'Sonnet', def: '14 vers : deux quatrains et deux tercets, souvent en alexandrins ; chute au dernier vers.' },
 { terme: 'Baroque', def: 'Esthétique de l\'instabilité, de l\'illusion et du mouvement (fin XVIe-XVIIe).' },
 { terme: 'Classicisme', def: 'Idéal du XVIIe : raison, mesure, règles, imitation des Anciens, « plaire et instruire ».' },
 { terme: 'La Fontaine', def: 'Fables (1668-1694) : récits animaliers en vers à morale, critique sociale et politique.' },
 { terme: 'Apologue', def: 'Récit court à visée morale (fable, parabole, conte philosophique).' }
],
quiz: [
 { q: 'La Pléiade est un groupe de poètes du…', choix: ['XIVe', 'XVIe', 'XVIIe', 'XVIIIe'], r: 1, exp: 'Ronsard, Du Bellay, autour de 1550.' },
 { q: '« Mignonne, allons voir si la rose » illustre le thème…', choix: ['de la guerre', 'du carpe diem', 'de la religion', 'de la ville'], r: 1, exp: 'La rose fane : profite de ta jeunesse.' },
 { q: 'Les Fables de La Fontaine appartiennent au…', choix: ['baroque', 'classicisme', 'romantisme', 'Moyen Âge'], r: 1, exp: 'XVIIe siècle, « plaire et instruire ».' },
 { q: 'L\'auteur de la Ballade des pendus est…', choix: ['Ronsard', 'Villon', 'Du Bellay', 'Labé'], r: 1, exp: 'François Villon, XVe siècle.' },
 { q: 'Un apologue est…', choix: ['un poème d\'amour', 'un récit à visée morale', 'une tragédie', 'un éloge'], r: 1, exp: 'Fable, conte philosophique, parabole.' }
],
pieges: ['Dater la Pléiade au XVIIe : c\'est le XVIe (Renaissance).', 'Croire que « lyrique » veut dire « joyeux » : c\'est l\'expression des sentiments, souvent tristes.'],
astuces: ['Frise à retenir : Villon (XVe) → Pléiade (1550) → baroque (1600) → classicisme (1660) → Lumières (1750).'],
exos: [
 { enonce: 'Pourquoi La Fontaine utilise-t-il des animaux dans ses fables ?', correction: `1) **Plaire** : récit vivant, humour, vers variés. 2) **Instruire** : la morale est universelle. 3) **Contourner la censure** : critiquer le roi (le lion), les courtisans (le renard flatteur), la justice, sans les nommer. L'animal est un masque qui permet la satire sous Louis XIV.` }
]},

{ id: 'f-idees', theme: 'La littérature d\'idées et la presse du XIXe au XXIe siècle', titre: 'Argumenter : littérature d\'idées, presse et médias', duree: 30,
cours: [
{ titre: 'Convaincre, persuader, délibérer', texte: `
- **Convaincre** : s'adresser à la raison avec des **arguments** et des **exemples** (logos).
- **Persuader** : toucher les sentiments (pathos) et jouer sur l'image de l'orateur (ethos).
- **Délibérer** : peser le pour et le contre avant de trancher.
**Thèse** = idée défendue ; **argument** = raison qui la soutient ; **exemple** = fait concret qui l'illustre. **Thèse réfutée** = celle que l'on combat.
Types de raisonnement : déductif (du général au particulier), inductif (l'inverse), par analogie, par l'absurde, **concession** (« certes… mais »).
Formes : essai, pamphlet, lettre ouverte, discours, article, éditorial, manifeste, **apologue** (argumentation indirecte par un récit : fable, conte, utopie).`},
{ titre: 'La presse et les grands combats', texte: `
- XIXe : essor de la presse (loi de **1881** sur la liberté de la presse), journaux à un sou. **Zola, « J'accuse… ! » (1898)** dans *L'Aurore* : lettre ouverte au président défendant Dreyfus ; modèle de l'intellectuel engagé.
- **Hugo** : discours contre la peine de mort, contre la misère (1849) ; *Le Dernier Jour d'un condamné*.
- XXe : Camus, Sartre (engagement), Simone de Beauvoir (*Le Deuxième Sexe*, 1949), journalisme de guerre.
- XXIe : médias numériques, réseaux sociaux, **fake news**, fact-checking ; enjeu de la liberté d'expression (Charlie Hebdo, 2015).`},
{ titre: 'Analyser un texte argumentatif', texte: `
Repérer : énonciation (qui parle, à qui ?), thèse, structure des arguments (connecteurs : d'abord, en outre, or, donc, cependant), procédés de persuasion (question rhétorique, anaphore, hyperbole, ironie, apostrophe, impératif, pronoms « nous/vous »), registre (polémique, satirique, lyrique).
! Dans un écrit d'appropriation ou une dissertation, chaque paragraphe = une idée + un argument + un exemple précis (œuvre, auteur, citation) + une phrase de bilan.`}
],
notions: [
 { terme: 'Thèse', def: 'Idée que l\'auteur défend (ou réfute) dans un texte argumentatif.' },
 { terme: 'Argument / exemple', def: 'Argument : raison qui soutient la thèse. Exemple : fait concret qui l\'illustre.' },
 { terme: 'Convaincre / persuader', def: 'Convaincre : par la raison (arguments). Persuader : par les émotions et l\'autorité de l\'orateur.' },
 { terme: 'Concession', def: 'Admettre une partie de la thèse adverse avant de la réfuter (« certes… mais »).' },
 { terme: 'Argumentation indirecte', def: 'Défendre une idée à travers un récit (fable, conte philosophique, utopie) plutôt qu\'un discours.' },
 { terme: 'Pamphlet', def: 'Texte court, violent et polémique contre une personne ou une institution.' },
 { terme: 'Lettre ouverte', def: 'Lettre adressée à une personne mais publiée pour toucher l\'opinion (« J\'accuse… ! »).' },
 { terme: '« J\'accuse… ! » (1898)', def: 'Article de Zola dans L\'Aurore défendant Dreyfus ; naissance de la figure de l\'intellectuel engagé.' },
 { terme: 'Loi de 1881', def: 'Loi fondatrice de la liberté de la presse en France.' },
 { terme: 'Registre polémique', def: 'Tonalité de combat : attaques, ironie, indignation, hyperboles.' },
 { terme: 'Ethos, pathos, logos', def: 'Trois moyens de persuasion (Aristote) : image de l\'orateur, émotions du public, arguments rationnels.' }
],
quiz: [
 { q: '« J\'accuse… ! » est publié par Zola en…', choix: ['1881', '1894', '1898', '1906'], r: 2, exp: 'Dans L\'Aurore, pendant l\'affaire Dreyfus.' },
 { q: 'Persuader, c\'est agir sur…', choix: ['la raison', 'les sentiments', 'les faits', 'la grammaire'], r: 1, exp: 'Convaincre = raison ; persuader = émotions.' },
 { q: 'Une fable est une argumentation…', choix: ['directe', 'indirecte', 'scientifique', 'juridique'], r: 1, exp: 'La thèse passe par un récit.' },
 { q: '« Certes la peine de mort dissuade, mais… » est…', choix: ['une concession', 'une hyperbole', 'un raisonnement par l\'absurde', 'une litote'], r: 0, exp: 'On accorde un point pour mieux réfuter.' },
 { q: 'La loi sur la liberté de la presse date de…', choix: ['1789', '1848', '1881', '1944'], r: 2, exp: 'Fondement du droit de la presse encore en vigueur.' }
],
pieges: ['Confondre thème (sujet) et thèse (position de l\'auteur).', 'Confondre argument (abstrait) et exemple (concret).'],
astuces: ['Pour trouver la thèse : « L\'auteur veut nous faire admettre que… ». Finis la phrase.', 'Apprends 5 exemples passe-partout : La Fontaine, Voltaire (Candide), Hugo (peine de mort), Zola (J\'accuse), Beauvoir.'],
exos: [
 { enonce: 'Rédiger un paragraphe argumenté : « La fiction est-elle plus efficace que le discours direct pour défendre une idée ? »', correction: `Exemple de paragraphe : La fiction est souvent plus efficace car elle contourne les résistances du lecteur. **Argument** : le récit fait vivre l'idée au lieu de l'imposer. **Exemple** : dans *Candide* (1759), Voltaire ne déclare pas que la guerre est absurde ; il décrit la « boucherie héroïque » avec une ironie qui laisse le lecteur conclure seul. **Bilan** : l'argumentation indirecte persuade en faisant ressentir, ce que le discours direct, plus clair, ne fait pas toujours.` }
]},

{ id: 'f-roman', theme: 'Le roman et le récit du XVIIIe au XXIe siècle', titre: 'Roman et récit : mouvements, narration, personnages', duree: 30,
cours: [
{ titre: 'Histoire du roman', texte: `
- **XVIIe** : *La Princesse de Clèves* (Mme de La Fayette, 1678), premier roman d'analyse psychologique.
- **XVIIIe** : roman épistolaire (*Les Liaisons dangereuses*, Laclos, 1782), conte philosophique (*Candide*, Voltaire, 1759), roman-mémoires (Prévost, *Manon Lescaut*).
- **XIXe** : **romantisme** (Hugo, *Les Misérables* ; Chateaubriand) ; **réalisme** (Balzac, *La Comédie humaine* ; Stendhal, *Le Rouge et le Noir* ; Flaubert, *Madame Bovary*, 1857) : peindre la société telle qu'elle est ; **naturalisme** (Zola, *Les Rougon-Macquart*, *Germinal*) : le roman comme expérience scientifique, hérédité et milieu ; Maupassant (nouvelles).
- **XXe** : Proust, Céline, **Nouveau Roman** (Sarraute, Robbe-Grillet : remise en cause du personnage et de l'intrigue), Camus (*L'Étranger*, 1942), Duras, Perec.
- **XXIe** : autofiction (Ernaux, prix Nobel 2022), roman engagé, littérature mondiale.`},
{ titre: 'Outils du récit', texte: `
- **Narrateur** : interne (« je », personnage) ou externe (« il ») ; ≠ auteur.
- **Point de vue / focalisation** : interne, externe, omnisciente.
- **Temps du récit** : passé simple + imparfait (récit classique), présent (immédiateté). **Ordre** : analepse (retour en arrière), prolepse (anticipation). **Rythme** : scène, sommaire, ellipse, pause (description).
- **Discours rapporté** : direct (guillemets), indirect (« il dit que »), indirect libre (sans verbe introducteur ni guillemets ; typique de Flaubert).
- **Personnage** : portrait physique et moral, évolution, **incipit** (début, qui pose le cadre) et **excipit** (fin).
- **Schéma narratif** : situation initiale, élément perturbateur, péripéties, résolution, situation finale.`}
],
notions: [
 { terme: 'Réalisme', def: 'Mouvement du XIXe (Balzac, Stendhal, Flaubert) visant à représenter la réalité sociale sans l\'idéaliser.' },
 { terme: 'Naturalisme', def: 'Prolongement scientifique du réalisme (Zola) : le personnage est déterminé par l\'hérédité et le milieu.' },
 { terme: 'Romantisme', def: 'Mouvement du début XIXe : expression du moi, passions, nature, histoire, révolte (Hugo, Chateaubriand).' },
 { terme: 'Roman épistolaire', def: 'Roman constitué de lettres (Les Liaisons dangereuses, 1782).' },
 { terme: 'Conte philosophique', def: 'Récit court et plaisant porteur d\'une critique (Candide, 1759).' },
 { terme: 'Nouveau Roman', def: 'Années 1950-60 : refus de l\'intrigue et du personnage traditionnels (Robbe-Grillet, Sarraute).' },
 { terme: 'Narrateur', def: 'Celui qui raconte (interne ou externe) ; à ne jamais confondre avec l\'auteur.' },
 { terme: 'Analepse / prolepse', def: 'Retour en arrière / anticipation dans le récit.' },
 { terme: 'Discours indirect libre', def: 'Paroles ou pensées rapportées sans guillemets ni verbe introducteur, fondues dans le récit (Flaubert).' },
 { terme: 'Incipit', def: 'Début d\'un roman : il pose le cadre, les personnages, le pacte de lecture.' },
 { terme: 'Ellipse narrative', def: 'Passage sous silence d\'une durée de l\'histoire (« Dix ans plus tard… »).' }
],
quiz: [
 { q: 'Madame Bovary (1857) relève du…', choix: ['romantisme', 'réalisme', 'Nouveau Roman', 'baroque'], r: 1, exp: 'Flaubert, peinture de la médiocrité provinciale.' },
 { q: 'Le naturalisme est associé à…', choix: ['Hugo', 'Zola', 'Voltaire', 'Camus'], r: 1, exp: 'Les Rougon-Macquart, « histoire naturelle et sociale ».' },
 { q: 'Un retour en arrière dans le récit est…', choix: ['une prolepse', 'une ellipse', 'une analepse', 'une pause'], r: 2, exp: 'Ana = en arrière.' },
 { q: '« Elle songeait qu\'il reviendrait demain, sûrement » sans guillemets est…', choix: ['du discours direct', 'du discours indirect', 'du discours indirect libre', 'une description'], r: 2, exp: 'Pensées rapportées sans verbe introducteur ni guillemets.' },
 { q: 'Candide (1759) est…', choix: ['un roman réaliste', 'un conte philosophique', 'un roman épistolaire', 'une autobiographie'], r: 1, exp: 'Voltaire y critique l\'optimisme de Leibniz.' },
 { q: 'Le narrateur et l\'auteur sont…', choix: ['toujours la même personne', 'deux instances distinctes', 'identiques dans les romans à la 1re personne', 'identiques en focalisation zéro'], r: 1, exp: 'Même en autobiographie on distingue les deux.' }
],
pieges: ['Écrire « l\'auteur dit » pour les paroles d\'un personnage ou du narrateur.', 'Confondre réalisme (peindre le réel) et naturalisme (expliquer scientifiquement).'],
astuces: ['Pour analyser un incipit : qui ? où ? quand ? quoi ? + quel pacte de lecture (réaliste, fantastique, ironique) ?'],
exos: [
 { enonce: 'En quoi un incipit réaliste du XIXe se distingue-t-il d\'un incipit de roman du XXe siècle ?', correction: `Incipit réaliste (Balzac, *Le Père Goriot*) : description longue et précise du lieu, date, milieu social, narrateur omniscient qui explique ; pacte de vraisemblance. Incipit du XXe (Camus, *L'Étranger* : « Aujourd'hui, maman est morte. ») : brièveté, 1re personne, présent, absence d'explication, trouble sur le personnage : le lecteur doit reconstruire le sens. Le roman passe de la peinture du monde à l'expérience de la conscience.` }
]},

{ id: 'f-theatre', theme: 'Le théâtre du XVIIe au XXIe siècle', titre: 'Théâtre : genres, règles et mise en scène', duree: 30,
cours: [
{ titre: 'Le théâtre classique (XVIIe)', texte: `
- **Règles** : **trois unités** (temps : 24 h ; lieu : un seul ; action : une intrigue), **bienséance** (pas de sang ni de mort sur scène), **vraisemblance**. Codifiées par Boileau.
- **Tragédie** : héros nobles, fatalité, passion impossible, dénouement malheureux ; en alexandrins ; vise la **catharsis** (purgation des passions, Aristote). **Corneille** (*Le Cid*, 1637 : honneur contre amour) ; **Racine** (*Phèdre*, 1677 ; *Andromaque*) : passion destructrice.
- **Comédie** : personnages bourgeois, ridicules, dénouement heureux ; « castigat ridendo mores » (corriger les mœurs par le rire). **Molière** (*Tartuffe*, *Dom Juan*, *Le Misanthrope*, *Le Malade imaginaire*, 1673) : comique de mots, de gestes, de situation, de caractère ; satire de l'hypocrisie, des médecins, des précieuses.`},
{ titre: 'Du XVIIIe au XXIe', texte: `
- **XVIIIe** : **Marivaux** (*Le Jeu de l'amour et du hasard*, 1730 : marivaudage, masques) ; **Beaumarchais** (*Le Mariage de Figaro*, 1784 : critique des privilèges, annonce la Révolution).
- **XIXe** : **drame romantique** (Hugo, *Hernani*, 1830 : bataille d'Hernani, refus des unités, mélange des genres ; Musset, *Lorenzaccio*).
- **XXe** : théâtre de l'**absurde** (Ionesco, *La Cantatrice chauve*, *Rhinocéros* ; Beckett, *En attendant Godot*, 1953) : langage qui se vide, absence d'intrigue ; théâtre engagé (Sartre, Camus) ; Anouilh (*Antigone*, 1944), Giraudoux. Importance croissante du **metteur en scène**.
- **XXIe** : Lagarce (*Juste la fin du monde*), Mouawad, Pommerat.`},
{ titre: 'Vocabulaire et mise en scène', texte: `
- **Didascalies** : indications scéniques de l'auteur (en italique) ; **répliques** ; **tirade** (longue réplique) ; **monologue** (seul en scène) ; **aparté** (le public entend, pas les autres personnages) ; **stichomythie** (répliques courtes qui s'enchaînent) ; **quiproquo** (malentendu).
- **Structure** : actes et scènes ; **exposition** (I), **nœud**, **péripéties**, **dénouement**. **Double énonciation** : les personnages se parlent, mais c'est au public que l'auteur s'adresse.
- **Mise en scène** : décor, costumes, lumière, jeu, espace ; un même texte donne des spectacles très différents (Tartuffe classique vs moderne).`}
],
notions: [
 { terme: 'Règle des trois unités', def: 'Temps (24 h), lieu (un seul), action (une seule intrigue) : règles du théâtre classique.' },
 { terme: 'Bienséance', def: 'Ne pas choquer le public : pas de violence ni de mort sur scène (récit par un messager).' },
 { terme: 'Catharsis', def: 'Purgation des passions du spectateur par la terreur et la pitié (Aristote) ; but de la tragédie.' },
 { terme: 'Tragédie classique', def: 'Héros nobles, fatalité, alexandrins, dénouement malheureux (Corneille, Racine).' },
 { terme: 'Comédie', def: 'Personnages ordinaires, ridicule, dénouement heureux ; « corriger les mœurs par le rire » (Molière).' },
 { terme: 'Comique de…', def: 'Mots (jeux de langage), gestes (coups), situation (quiproquo), caractère (défaut exagéré), répétition.' },
 { terme: 'Drame romantique', def: 'Hugo (Hernani, 1830) : refus des unités et de la bienséance, mélange du sublime et du grotesque.' },
 { terme: 'Théâtre de l\'absurde', def: 'Ionesco, Beckett (années 1950) : intrigue absente, langage qui se vide, condition humaine dérisoire.' },
 { terme: 'Didascalies', def: 'Indications de l\'auteur sur le jeu, le décor, le ton (en italique).' },
 { terme: 'Aparté', def: 'Réplique entendue du public mais pas des autres personnages.' },
 { terme: 'Quiproquo', def: 'Malentendu : un personnage est pris pour un autre, ressort comique.' },
 { terme: 'Double énonciation', def: 'Les paroles des personnages s\'adressent en réalité aussi au public.' },
 { terme: 'Tirade / monologue', def: 'Tirade : longue réplique adressée à un autre. Monologue : personnage seul qui parle.' }
],
quiz: [
 { q: 'La règle des trois unités concerne…', choix: ['temps, lieu, action', 'acteurs, décor, public', 'actes, scènes, répliques', 'comédie, tragédie, drame'], r: 0, exp: 'Théâtre classique, XVIIe siècle.' },
 { q: 'Phèdre (1677) est une tragédie de…', choix: ['Corneille', 'Molière', 'Racine', 'Hugo'], r: 2, exp: 'Passion coupable et fatalité.' },
 { q: 'La bataille d\'Hernani (1830) oppose…', choix: ['comédie et tragédie', 'classiques et romantiques', 'Molière et Racine', 'absurde et engagé'], r: 1, exp: 'Hugo brise les règles classiques.' },
 { q: 'En attendant Godot (1953) relève du…', choix: ['classicisme', 'drame romantique', 'théâtre de l\'absurde', 'vaudeville'], r: 2, exp: 'Beckett : attente sans fin, dialogue vide.' },
 { q: 'Une réplique entendue du public mais pas des autres personnages est…', choix: ['une tirade', 'un monologue', 'un aparté', 'une didascalie'], r: 2, exp: 'Ressort comique et complicité avec le public.' },
 { q: 'Le but de la comédie selon Molière :', choix: ['faire peur', 'corriger les mœurs par le rire', 'purger les passions', 'célébrer le roi'], r: 1, exp: '« Castigat ridendo mores ».' }
],
pieges: ['Confondre didascalie (indication de l\'auteur) et réplique (parole du personnage).', 'Attribuer Le Cid à Racine : c\'est Corneille (1637).'],
astuces: ['Pour chaque scène : qui est sur scène ? que veut chacun ? quel est le rapport de force ? Ça donne l\'enjeu.', 'Pense toujours « texte ET représentation » : un commentaire de théâtre doit parler de l\'effet sur le public.'],
exos: [
 { enonce: 'Pourquoi le drame romantique rompt-il avec les règles classiques ?', correction: `Hugo (préface de *Cromwell*, 1827) veut un théâtre « total » reflétant la vie : mélange du **sublime et du grotesque**, du rire et des larmes ; refus des unités de temps et de lieu (action sur plusieurs années et pays) ; héros du peuple ou marginaux ; vers libéré (« Serait-ce déjà lui ? C'est bien à l'escalier / Dérobé » : enjambement scandaleux d'*Hernani*). But : liberté de l'artiste et vérité historique contre les conventions aristocratiques.` }
]},

{ id: 'f-methodes', theme: 'Méthodes et grammaire', titre: 'Commentaire, dissertation et grammaire de 2nde', duree: 35,
cours: [
{ titre: 'Le commentaire littéraire', texte: `
Objectif : montrer comment le texte produit du sens et des effets.
1. **Lire 3 fois** : sens global, repérage des procédés, **projet de lecture** (une question : qu'est-ce qui fait l'intérêt de ce texte ?).
2. **Introduction** : amorce (contexte, auteur, mouvement), présentation du texte, projet de lecture, annonce du plan.
3. **Développement** : 2 ou 3 axes (ex : I. un portrait satirique ; II. une critique de la société), chaque axe en 2-3 sous-parties ; **chaque paragraphe = idée + citation + procédé + effet/interprétation**.
4. **Conclusion** : bilan, réponse au projet, ouverture (autre œuvre, mouvement).
X Interdit : la paraphrase (redire le texte), le plan « forme / fond », l'inventaire de figures sans interprétation.`},
{ titre: 'La dissertation', texte: `
Sujet = une question ou une citation sur une œuvre / un genre.
1. **Analyser le sujet** : définir les mots-clés, reformuler, chercher le présupposé et le paradoxe ⟹ **problématique**.
2. **Plan** : dialectique (thèse / antithèse / dépassement) pour une question fermée ; thématique (3 aspects) pour une question ouverte.
3. Chaque paragraphe : **argument + exemple précis** (œuvre, personnage, scène, citation) + explication du lien.
4. Introduction : amorce, sujet cité, problématique, plan. Conclusion : réponse nette + ouverture.
! 2 exemples bien analysés valent mieux que 6 cités en passant.`},
{ titre: 'Grammaire au programme de 2nde', texte: `
- **Les subordonnées** : **relatives** (qui, que, dont, où ; complètent un nom : « le livre *que* je lis »), **conjonctives** (que, parce que, quand, si… ; complètent un verbe ou toute la phrase : « je pense *qu'il* viendra »), **interrogatives indirectes** (« je me demande *s'il* viendra »).
- **Fonctions** : sujet, COD, COI, attribut du sujet, complément circonstanciel, complément du nom, épithète / apposition.
- **L'interrogation** : directe totale (oui/non) ou partielle (mot interrogatif) ; indirecte (sans ? ni inversion).
- **La négation** : ne… pas / plus / jamais / rien / personne / aucun ; ne explétif (« je crains qu'il *ne* vienne », pas une négation) ; **négation restrictive** « ne… que » = seulement.
- **Valeurs des temps** : présent d'énonciation, de narration, de vérité générale ; imparfait (description, habitude, arrière-plan) ; passé simple (actions de premier plan) ; conditionnel (hypothèse, politesse, futur dans le passé).
- **Lexique** : formation des mots (préfixe, radical, suffixe), étymologie, polysémie, connotation / dénotation.`}
],
notions: [
 { terme: 'Projet de lecture', def: 'Question directrice du commentaire : ce qui fait l\'intérêt du texte, à laquelle le plan répond.' },
 { terme: 'Paraphrase', def: 'Redire le texte avec d\'autres mots sans l\'analyser : l\'erreur à éviter absolument.' },
 { terme: 'Paragraphe de commentaire', def: 'Idée + citation + nom du procédé + effet + interprétation.' },
 { terme: 'Problématique', def: 'Question centrale issue de l\'analyse du sujet, à laquelle la dissertation répond.' },
 { terme: 'Plan dialectique', def: 'Thèse / antithèse / synthèse (dépassement) ; pour une question fermée.' },
 { terme: 'Proposition subordonnée relative', def: 'Introduite par un pronom relatif (qui, que, dont, où, lequel), elle complète un nom (antécédent).', exemple: '« le livre que je lis »' },
 { terme: 'Proposition subordonnée conjonctive', def: 'Introduite par une conjonction (que, parce que, si, quand…), elle complète un verbe ou la phrase.', exemple: '« je pense qu\'il viendra »' },
 { terme: 'Interrogative indirecte', def: 'Question intégrée dans une phrase déclarative, sans point d\'interrogation.', exemple: '« je me demande s\'il viendra »' },
 { terme: 'Négation restrictive', def: '« ne… que » = seulement ; ce n\'est pas une vraie négation.', exemple: '« il ne lit que des BD »' },
 { terme: 'Ne explétif', def: '« ne » sans valeur négative après craindre, avant que, à moins que.', exemple: '« je crains qu\'il ne vienne »' },
 { terme: 'Imparfait / passé simple', def: 'Imparfait : arrière-plan, description, habitude. Passé simple : actions ponctuelles de premier plan.' },
 { terme: 'Connotation / dénotation', def: 'Dénotation : sens objectif du mot. Connotation : valeurs associées (« rouge » : passion, danger).' }
],
quiz: [
 { q: '« La maison où je suis né » : la subordonnée est…', choix: ['conjonctive', 'relative', 'interrogative indirecte', 'indépendante'], r: 1, exp: '« où » est un pronom relatif, antécédent « maison ».' },
 { q: '« Je ne mange que des fruits » signifie…', choix: ['je ne mange pas de fruits', 'je mange seulement des fruits', 'je ne mange rien', 'je mange beaucoup de fruits'], r: 1, exp: 'Négation restrictive.' },
 { q: 'Dans « Il pleuvait. Soudain, la porte claqua. », le passé simple exprime…', choix: ['l\'arrière-plan', 'une habitude', 'une action de premier plan', 'une description'], r: 2, exp: 'L\'imparfait pose le décor, le passé simple fait avancer l\'action.' },
 { q: 'Un plan dialectique est…', choix: ['forme / fond', 'thèse / antithèse / synthèse', 'début / milieu / fin', 'auteur / œuvre / contexte'], r: 1, exp: 'Pour une question fermée (oui/non).' },
 { q: 'La paraphrase en commentaire, c\'est…', choix: ['analyser les procédés', 'redire le texte sans l\'analyser', 'citer le texte', 'résumer la biographie'], r: 1, exp: 'Erreur n°1 des commentaires de 2nde.' },
 { q: '« Je pense qu\'il a raison » : la subordonnée est…', choix: ['relative', 'conjonctive COD', 'interrogative indirecte', 'circonstancielle'], r: 1, exp: '« que » conjonction ; la subordonnée est COD de « pense ».' }
],
pieges: ['Confondre « que » pronom relatif (remplace un nom : « le film que j\'ai vu ») et « que » conjonction (« je sais que tu viens »).', 'Commencer une dissertation sans définir les mots du sujet.', 'Mettre un point d\'interrogation à une interrogative indirecte.'],
astuces: ['Test du « que » : si tu peux remplacer par « lequel/laquelle », c\'est un relatif.', 'Avant d\'écrire une intro, écris ton plan en 3 lignes : si tu ne peux pas, tu n\'es pas prêt.', 'Chronomètre-toi : 4 h au bac = 1 h d\'analyse/plan, 2 h 30 de rédaction, 30 min de relecture.'],
exos: [
 { enonce: 'Identifier la nature et la fonction des subordonnées : « Quand il pleut, je lis le roman que tu m\'as offert, et je me demande si tu l\'as aimé. »', correction: `« Quand il pleut » : subordonnée **conjonctive circonstancielle** de temps.
« que tu m'as offert » : subordonnée **relative**, complément de l'antécédent « roman ».
« si tu l'as aimé » : subordonnée **interrogative indirecte**, COD de « me demande ».` }
]}
]});
