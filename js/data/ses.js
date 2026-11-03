window.PROGRAMME = window.PROGRAMME || [];
window.PROGRAMME.push({
id: 'ses', nom: 'SES', couleur: '#8b5cf6',
desc: "Économie (production, marché), sociologie (socialisation, liens sociaux), science politique (participation). L'année pose le vocabulaire ; les évaluations portent sur la précision des définitions et la lecture de documents chiffrés.",
ressources: [
 { nom: 'Melchior', url: 'https://www.melchior.fr/', desc: 'Le site de référence des profs de SES : cours, exercices, actualités.' },
 { nom: 'Lumni SES 2nde', url: 'https://www.lumni.fr/lycee/seconde/ses', desc: 'Vidéos par chapitre.' },
 { nom: 'INSEE', url: 'https://www.insee.fr/', desc: 'Les vrais chiffres (emploi, revenus, population) pour illustrer.' },
 { nom: 'Dessine-moi l\'éco (YouTube)', url: 'https://www.youtube.com/@Dessinemoileco', desc: 'Notions économiques en 3 minutes.' }
],
chapitres: [
{ id: 'ses-raisonner', theme: 'Science économique', titre: 'Comment raisonnent économistes, sociologues et politistes ?', duree: 20,
cours: [
{ titre: 'Trois disciplines, une démarche', texte: `
- **Économie** : étudie la production, la répartition et la consommation de biens et services dans un monde de **rareté** (ressources limitées, besoins illimités) ⟹ nécessité de **choix** et de **coût d'opportunité** (ce à quoi on renonce).
- **Sociologie** : étudie les comportements sociaux, les groupes, les normes, en montrant que nos choix sont influencés par la société (Durkheim : le suicide a des causes sociales).
- **Science politique** : étudie le pouvoir, l'État, le vote, les mobilisations.
Démarche scientifique commune : **hypothèse** → **modèle** (simplification) → confrontation aux **données** (enquêtes, statistiques, expérience) → validation ou rejet.
! Le raisonnement « toutes choses égales par ailleurs » : on fait varier un seul facteur pour isoler son effet.`},
{ titre: 'Lire des données', texte: `
- **Proportion / part** (en %) : partie / total × 100.
- **Taux de variation** : (V_arrivée − V_départ) / V_départ × 100. Coefficient multiplicateur = V_arrivée / V_départ.
- **Indice** base 100 : valeur / valeur de référence × 100 ; un indice 125 = +25 %.
- **Corrélation ≠ causalité** : deux variables qui évoluent ensemble ne sont pas forcément liées par une cause (ventes de glaces et noyades : la chaleur explique les deux).
- Phrase de lecture type : « Selon l'INSEE, en 2023, 7,3 % de la population active française était au chômage. »`}
],
notions: [
 { terme: 'Rareté', def: 'Les ressources sont limitées face à des besoins illimités : il faut faire des choix.' },
 { terme: 'Coût d\'opportunité', def: 'Valeur de la meilleure alternative à laquelle on renonce en faisant un choix.', exemple: 'une heure de révision = une heure de jeu en moins' },
 { terme: 'Modèle', def: 'Représentation simplifiée de la réalité servant à raisonner et à faire des prévisions.' },
 { terme: 'Toutes choses égales par ailleurs', def: 'Raisonner en ne faisant varier qu\'un seul facteur à la fois.' },
 { terme: 'Corrélation / causalité', def: 'Corrélation : deux variables évoluent ensemble. Causalité : l\'une provoque l\'autre. La première n\'implique pas la seconde.' },
 { terme: 'Taux de variation', def: '(arrivée − départ) / départ × 100.' },
 { terme: 'Indice base 100', def: 'Valeur rapportée à une référence fixée à 100 ; indice 125 = hausse de 25 %.' }
],
quiz: [
 { q: 'Le coût d\'opportunité d\'une heure passée à réviser est…', choix: ['le prix du manuel', 'ce que tu aurais fait d\'autre pendant cette heure', 'la note obtenue', 'zéro'], r: 1, exp: 'Ce à quoi on renonce.' },
 { q: 'Un indice passe de 100 à 140 : évolution ?', choix: ['+40 points seulement', '+40 %', '+140 %', '×40'], r: 1, exp: '140/100 = 1,4 ⟹ +40 %.' },
 { q: 'Les ventes de glaces et les noyades augmentent ensemble en été. C\'est…', choix: ['une causalité', 'une corrélation sans causalité directe', 'une coïncidence impossible', 'un modèle'], r: 1, exp: 'La chaleur est la cause commune.' },
 { q: 'La sociologie montre surtout que nos comportements…', choix: ['sont purement individuels', 'sont influencés par la société', 'sont génétiques', 'sont irrationnels'], r: 1, exp: 'Normes, socialisation, groupe social.' }
],
pieges: ['Confondre « points de pourcentage » (différence entre deux %) et « % » (variation relative).', 'Lire un tableau sans vérifier l\'unité, la source, la date.'],
astuces: ['Phrase de lecture = source + date + lieu + donnée + unité. Automatise-la.'],
exos: [
 { enonce: 'Le taux de chômage passe de 8 % à 10 %. Exprimer l\'évolution de deux façons.', correction: `En **points de pourcentage** : +2 points. En **pourcentage** : (10 − 8)/8 = +25 %. Les deux sont vraies mais ne disent pas la même chose.` }
]},

{ id: 'ses-durkheim', theme: 'Sociologie et science politique', titre: 'La méthode de Durkheim : le suicide, un fait social', duree: 30,
cours: [
{ titre: 'Le projet de Durkheim', texte: `
**Émile Durkheim** (1858-1917) est le fondateur de la sociologie française (première chaire de sociologie, à Bordeaux puis à la Sorbonne). Son projet : faire de la sociologie une **science** à part entière, comme la physique ou la biologie, avec :
- un **objet propre** : les **faits sociaux** (et non les individus, étudiés par la psychologie) ;
- une **méthode propre**, exposée dans *Les Règles de la méthode sociologique* (1895) ;
- une **démonstration** : *Le Suicide* (1897), premier grand livre de sociologie fondé sur des statistiques.
! L'idée de départ : si même le suicide, l'acte le plus intime et le plus individuel qui soit, a des causes sociales, alors tous nos comportements ont une part sociale.`},
{ titre: 'Le fait social et ses trois caractéristiques', texte: `
Un **fait social** est une « manière d'agir, de penser et de sentir » qui présente trois caractéristiques :
- **Extériorité** : il existe **en dehors** de l'individu, avant lui et après lui (la langue française existait avant ta naissance ; tu ne l'as pas inventée).
- **Contrainte** (ou **coercition**, le mot de Durkheim) : il **s'impose** à l'individu, qui subit une sanction s'il s'en écarte (parler une autre langue, ne pas dire bonjour, s'habiller « bizarrement » : moqueries, exclusion, amende).
- **Généralité** (ou **régularité**) : il est **partagé** par l'ensemble d'un groupe et se **répète** de façon stable (le taux de suicide d'un pays est presque le même chaque année) ; il est général parce qu'il est collectif, et non l'inverse.
Exemples : la langue, la monnaie, la mode, les règles de politesse, les croyances religieuses, le droit, et… le taux de suicide d'un pays.
## Les deux règles de méthode qui en découlent
- **Traiter les faits sociaux comme des choses** : les observer **de l'extérieur**, **objectivement**, avec des données, en écartant les **prénotions** (les idées toutes faites, le sens commun : « on se suicide par folie », « par chagrin d'amour »).
- **Expliquer le social par le social** : la cause d'un fait social est toujours **un autre fait social**, jamais la psychologie ou la biologie d'un individu. C'est le **holisme** : la société est plus que la somme des individus, elle pèse sur eux.
X Durkheim n'explique pas pourquoi **telle personne** se suicide (ça, c'est la psychologie) ; il explique pourquoi **un groupe** a un taux de suicide plus élevé qu'un autre.`},
{ titre: 'Le Suicide (1897) : la démarche, étape par étape', texte: `
**1. Construire un objet mesurable.** Durkheim ne travaille pas sur des cas, mais sur le **taux de suicide** :
$ Taux de suicide = nombre de suicides / population × 1 000 000 (suicides par million d'habitants)
**2. Observer une régularité.** D'une année sur l'autre, le taux de chaque pays est remarquablement **stable**, alors que les individus qui se suicident changent. Chaque société « est prédisposée à fournir un contingent déterminé de morts volontaires ». Cette régularité prouve que le taux est un **fait social**, qui a une réalité propre.
**3. Écarter les explications non sociales.** Avec les statistiques, Durkheim montre que ni la **folie** (les femmes sont plus internées mais se suicident moins), ni l'**hérédité** ou la « race », ni le **climat**, ni l'**imitation** ne rendent compte des variations du taux.
**4. Comparer les taux de groupes sociaux** : c'est la **méthode comparative**, ou méthode des **variations concomitantes** (quand une variable sociale change, le taux change avec elle). Résultats :
- Les **protestants** se suicident plus que les **catholiques**, eux-mêmes plus que les **juifs** (en Prusse, vers 1850 : environ 160 suicides par million chez les protestants contre environ 50 chez les catholiques).
- Les **célibataires** plus que les **mariés**, et les couples **sans enfants** plus que ceux **avec enfants**.
- Le taux **augmente** pendant les **crises économiques**, mais aussi pendant les **booms** d'enrichissement brutal.
- Le taux **baisse** en temps de **guerre** ou de crise politique (la société se resserre).
- Les **militaires** se suicident plus que les civils.
**5. Conclure sur des causes sociales.** Les variations concomitantes ne sont pas des coïncidences : elles renvoient à deux forces sociales, l'**intégration** et la **régulation**.
! Démarche scientifique complète : hypothèse → données chiffrées → comparaison → élimination des hypothèses fausses → explication. C'est une méthode **quantitative** (chiffres, taux), **comparative** (groupes, pays, périodes) et **objective** (faits traités comme des choses).`},
{ titre: 'Les explications : intégration, régulation et les quatre types de suicide', texte: `
- **Intégration** : force des **liens** qui rattachent l'individu à ses groupes (famille, religion, nation). « Le suicide varie en raison inverse du degré d'intégration des groupes sociaux dont fait partie l'individu. »
- **Régulation** : force des **normes** qui encadrent et limitent les désirs des individus.
Chaque force peut être en défaut ou en excès, d'où **quatre types** :
- **Suicide égoïste** : **défaut d'intégration**. L'individu est trop seul, livré à lui-même. Ex. : célibataires, personnes sans enfants, protestants (le protestantisme laisse plus de place au libre examen individuel et encadre moins que le catholicisme, qui est plus communautaire).
- **Suicide altruiste** : **excès d'intégration**. L'individu compte si peu face au groupe qu'il se sacrifie pour lui. Ex. : soldats, kamikazes, veuves tenues de suivre leur mari dans la mort, vieillards des sociétés traditionnelles.
- **Suicide anomique** : **défaut de régulation** (**anomie** = absence de règles). Les désirs ne sont plus bornés : crises économiques, enrichissement brutal, divorce (anomie conjugale).
- **Suicide fataliste** : **excès de régulation**. L'avenir est totalement bouché. Ex. : esclaves, jeunes époux mariés de force. Durkheim ne le mentionne qu'en note.
X Ne pas dire « les catholiques se suicident moins parce que leur religion interdit le suicide » : le protestantisme l'interdit tout autant. La différence tient à l'**intégration** : la vie catholique est plus collective et plus encadrée.`},
{ titre: 'Portée et limites', texte: `
- **Apports** : première preuve que le social explique l'intime ; naissance de la sociologie quantitative ; les concepts d'intégration et d'anomie sont encore utilisés (chômage, isolement, déclassement). Christian Baudelot et Roger Establet (*Durkheim et le suicide*, 1984) retrouvent un siècle plus tard le lien entre crises économiques, chômage et suicide.
- **Limites** : les statistiques de suicide sont **construites** (sous-déclaration dans les pays catholiques, où le suicide est honteux ; confusion possible avec les accidents) ; Maurice Halbwachs (1930) montre que l'opposition ville / campagne explique une partie des écarts entre religions ; passer d'une **corrélation** à une **causalité** reste un saut à justifier.
- **Débat de méthode** : au **holisme** de Durkheim (la société pèse sur l'individu) s'oppose l'**individualisme méthodologique** de Max Weber (partir du sens que les individus donnent à leurs actes).`}
],
notions: [
 { terme: 'Fait social (Durkheim)', def: 'Manière d\'agir, de penser et de sentir, extérieure à l\'individu, qui s\'impose à lui par contrainte et qui est générale dans un groupe.', exemple: 'la langue, la monnaie, la mode, le taux de suicide' },
 { terme: 'Les trois caractéristiques du fait social', def: 'Extériorité (existe hors de l\'individu), contrainte ou coercition (s\'impose à lui, sanction si écart), généralité ou régularité (partagé par le groupe, se répète de façon stable).' },
 { terme: 'Traiter les faits sociaux comme des choses', def: 'Première règle de méthode : observer les faits sociaux de l\'extérieur, objectivement, avec des données, en écartant les prénotions.' },
 { terme: 'Prénotion', def: 'Idée toute faite, issue du sens commun, que le sociologue doit écarter avant d\'étudier un fait social.', exemple: '« on se suicide par folie ou par chagrin d\'amour »' },
 { terme: 'Expliquer le social par le social', def: 'Deuxième règle : la cause d\'un fait social est un autre fait social, pas la psychologie ou la biologie d\'un individu.' },
 { terme: 'Holisme', def: 'Démarche qui part de la société (du tout) pour expliquer les comportements individuels. Opposé : individualisme méthodologique (Weber).' },
 { terme: 'Taux de suicide', def: 'Nombre de suicides rapporté à la population, exprimé pour un million d\'habitants. Permet de comparer des groupes de tailles différentes.' },
 { terme: 'Méthode comparative (variations concomitantes)', def: 'Comparer les taux de plusieurs groupes, pays ou périodes : si le taux varie avec une variable sociale, celle-ci est une cause possible.', exemple: 'protestants / catholiques, mariés / célibataires, crise / prospérité' },
 { terme: 'Méthode quantitative', def: 'Méthode fondée sur des données chiffrées (statistiques, taux, tableaux) et non sur des témoignages individuels.' },
 { terme: 'Intégration', def: 'Force des liens qui rattachent un individu à ses groupes (famille, religion, nation). Le suicide varie en raison inverse de l\'intégration.' },
 { terme: 'Régulation', def: 'Force des normes qui encadrent et limitent les désirs des individus.' },
 { terme: 'Suicide égoïste', def: 'Défaut d\'intégration : l\'individu est trop seul.', exemple: 'célibataires, protestants' },
 { terme: 'Suicide altruiste', def: 'Excès d\'intégration : l\'individu se sacrifie pour le groupe.', exemple: 'soldats, kamikazes' },
 { terme: 'Suicide anomique', def: 'Défaut de régulation (anomie) : les désirs ne sont plus bornés par des règles.', exemple: 'crise économique, enrichissement brutal, divorce' },
 { terme: 'Suicide fataliste', def: 'Excès de régulation : avenir totalement bouché.', exemple: 'esclaves' },
 { terme: 'Anomie', def: 'Situation où les normes sociales s\'affaiblissent ou disparaissent et ne régulent plus les conduites.' }
],
quiz: [
 { q: 'Pour Durkheim, un fait social est…', choix: ['un événement de l\'actualité', 'une manière d\'agir extérieure à l\'individu qui s\'impose à lui', 'un choix personnel', 'un fait économique'], r: 1, exp: 'Extériorité, contrainte, généralité.' },
 { q: 'Quelle n\'est PAS une des trois caractéristiques du fait social ?', choix: ['extériorité', 'coercition', 'régularité', 'rentabilité'], r: 3, exp: 'Les trois : extériorité, contrainte (coercition), généralité (régularité).' },
 { q: '« Traiter les faits sociaux comme des choses » signifie…', choix: ['les mépriser', 'les observer objectivement, de l\'extérieur, avec des données', 'les acheter', 'les expliquer par la psychologie'], r: 1, exp: 'Objectivité, écarter les prénotions.' },
 { q: 'Durkheim étudie le suicide à partir…', choix: ['de lettres de suicidés', 'd\'entretiens avec des familles', 'de taux de suicide par pays et par groupe', 'de son intuition'], r: 2, exp: 'Méthode quantitative : statistiques officielles.' },
 { q: 'Pourquoi le taux de suicide est-il un fait social ?', choix: ['parce qu\'il est stable d\'une année à l\'autre dans chaque société, indépendamment des individus', 'parce qu\'il est élevé', 'parce que le suicide est interdit', 'parce qu\'il baisse'], r: 0, exp: 'Régularité → réalité propre, extérieure aux individus.' },
 { q: 'Comparer le taux des protestants et des catholiques, c\'est…', choix: ['la méthode expérimentale', 'la méthode comparative (variations concomitantes)', 'un sondage', 'une prénotion'], r: 1, exp: 'Faire varier une variable sociale et observer le taux.' },
 { q: 'Le suicide des célibataires est plus fréquent : c\'est un suicide…', choix: ['altruiste', 'anomique', 'égoïste', 'fataliste'], r: 2, exp: 'Défaut d\'intégration.' },
 { q: 'Le suicide augmente en période de crise économique : c\'est un suicide…', choix: ['égoïste', 'anomique', 'altruiste', 'fataliste'], r: 1, exp: 'Défaut de régulation : les repères s\'effondrent.' },
 { q: 'Un soldat qui se sacrifie pour son régiment relève du suicide…', choix: ['altruiste', 'égoïste', 'anomique', 'fataliste'], r: 0, exp: 'Excès d\'intégration : le groupe compte plus que l\'individu.' },
 { q: '« Expliquer le social par le social » veut dire…', choix: ['interroger les gens', 'chercher la cause d\'un fait social dans un autre fait social', 'étudier le cerveau', 'faire de la politique'], r: 1, exp: 'Jamais par la psychologie ou la biologie individuelle.' }
],
pieges: [
 'Croire que Durkheim explique pourquoi telle personne se suicide. Non : il explique les **taux**, c\'est-à-dire pourquoi un groupe se suicide plus qu\'un autre.',
 'Confondre **intégration** (liens, appartenance) et **régulation** (règles, normes). Égoïste / altruiste = intégration ; anomique / fataliste = régulation.',
 'Dire « les catholiques se suicident moins parce que leur religion interdit le suicide » : le protestantisme l\'interdit aussi. La bonne réponse est le degré d\'intégration.',
 'Oublier que le taux est rapporté à la population (par million d\'habitants) : comparer des nombres bruts de suicides entre un grand et un petit pays n\'a aucun sens.',
 'Écrire « Durkeim » ou « Durckheim ». C\'est **Durkheim**.'
],
astuces: [
 'Mémo des trois caractéristiques : **E.C.G.** = Extériorité, Contrainte, Généralité (ou **E.C.R.** : Extériorité, Coercition, Régularité, selon le vocabulaire du cours).',
 'Mémo des types : intégration **trop faible → égoïste**, **trop forte → altruiste** ; régulation **trop faible → anomique**, **trop forte → fataliste**.',
 'Phrase de lecture d\'un tableau : « D\'après Durkheim, en Prusse entre 1849 et 1855, il y avait environ 160 suicides par million d\'habitants chez les protestants, contre environ 50 chez les catholiques, soit environ 3 fois plus. »',
 'Plan d\'une réponse rédigée : 1) définir (fait social, taux), 2) décrire la méthode (quantitative, comparative, objective), 3) donner un résultat chiffré, 4) expliquer (intégration / régulation), 5) conclure (le social explique l\'individuel).'
],
exos: [
 { enonce: 'Pourquoi peut-on dire, selon Durkheim, que le suicide est un fait social ? (réponse rédigée, 10 lignes)', correction: `Le suicide semble l'acte le plus individuel qui soit. Pourtant, Durkheim observe dans *Le Suicide* (1897) que le **taux de suicide** (nombre de suicides par million d'habitants) de chaque pays est **stable d'une année sur l'autre**, alors que les personnes qui se suicident changent. Cette régularité ne peut pas venir des individus : elle vient de la société. Le taux présente les trois caractéristiques du fait social : il est **extérieur** aux individus, il **s'impose** à eux (chaque société « fournit un contingent déterminé de morts volontaires ») et il est **général**. Durkheim montre ensuite, par la **méthode comparative**, que le taux varie avec des variables sociales (religion, situation familiale, conjoncture économique) et non avec la folie ou le climat. Il explique donc **le social par le social** : ce sont le degré d'**intégration** et de **régulation** des groupes qui font varier le suicide.` },
 { enonce: 'Document : taux de suicide par million d\'habitants en Prusse (1849-1855) : protestants 159,9 ; catholiques 49,6 ; juifs 46,4. 1) Rédiger une phrase de lecture pour les protestants. 2) Calculer le rapport protestants / catholiques. 3) Comment Durkheim explique-t-il cet écart ?', correction: `1) D'après Durkheim, en Prusse entre 1849 et 1855, on comptait 159,9 suicides par million d'habitants protestants. 2) 159,9 / 49,6 ≈ **3,2** : les protestants se suicident environ 3 fois plus que les catholiques. 3) Les deux religions condamnent le suicide ; la différence tient donc à l'**intégration**. Le catholicisme encadre davantage la vie de ses fidèles (rites, hiérarchie, communauté), tandis que le protestantisme laisse l'individu plus seul face à sa foi (libre examen). Moins intégrés, les protestants sont plus exposés au suicide **égoïste**.` },
 { enonce: 'Classer les situations suivantes dans l\'un des quatre types de suicide et justifier : a) un krach boursier ; b) un célibataire sans famille ; c) un soldat qui se sacrifie ; d) un esclave.', correction: `a) **Anomique** : la crise détruit les repères, les désirs et les positions ne sont plus régulés. b) **Égoïste** : défaut d'intégration, l'individu n'est rattaché à aucun groupe protecteur. c) **Altruiste** : excès d'intégration, l'individu s'efface devant le groupe. d) **Fataliste** : excès de régulation, aucun avenir possible.` },
 { enonce: 'Expliquer la différence entre la démarche de Durkheim et une explication psychologique du suicide.', correction: `L'explication psychologique part de l'**individu** : son histoire, ses troubles, ses émotions ; elle répond à « pourquoi cette personne ? ». Durkheim part de la **société** : il compare des **taux** entre groupes et répond à « pourquoi ce groupe plus qu'un autre ? ». Il écarte explicitement la folie comme cause des variations du taux, et cherche des causes **sociales** (intégration, régulation). C'est le principe « expliquer le social par le social », propre au **holisme**.` }
]},

{ id: 'ses-production', theme: 'Science économique', titre: 'Comment crée-t-on des richesses et comment les mesure-t-on ?', duree: 30,
cours: [
{ titre: 'Qui produit ?', texte: `
La **production** = création de biens (matériels) et de services (immatériels) à partir de **facteurs de production** : **travail** et **capital** (machines, bâtiments). Plus les **consommations intermédiaires** (matières premières, énergie, détruites ou transformées dans le processus).
- **Production marchande** : vendue à un prix couvrant les coûts (entreprises).
- **Production non marchande** : gratuite ou quasi gratuite (administrations publiques : école, hôpital ; associations).
Organisations productives : **entreprises** (privées, but lucratif), **administrations publiques**, **associations** / économie sociale et solidaire.
X Le bénévolat et le travail domestique ne sont pas comptés dans la production officielle (PIB).`},
{ titre: 'Mesurer la production', texte: `
$ Valeur ajoutée (VA) = valeur de la production − consommations intermédiaires
La VA mesure la richesse réellement créée par l'entreprise. Elle est **partagée** entre : salaires (travail), impôts (État), profit/dividendes (propriétaires), investissement (épargne de l'entreprise).
$ PIB = somme des valeurs ajoutées (+ impôts sur les produits − subventions)
Le PIB mesure la production d'un pays en un an. **Croissance** = augmentation du PIB (en volume, hors inflation).
**Limites du PIB** : ignore le travail domestique et le bénévolat, l'économie informelle, la répartition des richesses, le bien-être, la pollution et l'épuisement des ressources. D'où l'IDH, l'empreinte écologique, le « PIB vert ».`},
{ titre: 'Coûts, profit et productivité', texte: `
- **Coût total** = coûts fixes (loyer, machines, quel que soit le volume) + coûts variables (matières, énergie, qui dépendent de la quantité).
- **Recette** = prix × quantité vendue. **Profit** = recette − coût total.
- **Productivité** = production / facteurs utilisés (par travailleur ou par heure). Elle augmente avec le capital, la formation, l'organisation, l'innovation. Gains de productivité ⟹ baisse des coûts ⟹ hausse des salaires, baisse des prix, hausse des profits ou baisse du temps de travail.`}
],
notions: [
 { terme: 'Production', def: 'Activité créant des biens et services à partir de facteurs de production (travail, capital) et de consommations intermédiaires.' },
 { terme: 'Production marchande / non marchande', def: 'Marchande : vendue à un prix couvrant les coûts. Non marchande : gratuite ou quasi gratuite (services publics).' },
 { terme: 'Facteurs de production', def: 'Travail (main-d\'œuvre) et capital (machines, bâtiments, outils).' },
 { terme: 'Consommations intermédiaires', def: 'Biens et services détruits ou transformés au cours de la production (matières premières, énergie).' },
 { terme: 'Valeur ajoutée', def: 'Production − consommations intermédiaires : richesse réellement créée, partagée entre salaires, impôts, profits.' },
 { terme: 'PIB', def: 'Somme des valeurs ajoutées produites dans un pays en un an ; sa hausse = croissance.' },
 { terme: 'Limites du PIB', def: 'Ignore le travail domestique, le bénévolat, l\'informel, les inégalités, le bien-être, l\'environnement.' },
 { terme: 'Coûts fixes / variables', def: 'Fixes : indépendants de la quantité produite. Variables : proportionnels à la production.' },
 { terme: 'Profit', def: 'Recettes − coûts totaux.' },
 { terme: 'Productivité', def: 'Production / quantité de facteurs utilisés (par travailleur ou par heure).' }
],
quiz: [
 { q: 'Une boulangerie vend pour 200 000 € de pain et achète 60 000 € de farine, énergie, emballages. Valeur ajoutée ?', choix: ['200 000 €', '260 000 €', '140 000 €', '60 000 €'], r: 2, exp: 'VA = production − CI = 200 000 − 60 000.' },
 { q: 'L\'école publique produit un service…', choix: ['marchand', 'non marchand', 'intermédiaire', 'domestique'], r: 1, exp: 'Gratuit, financé par l\'impôt.' },
 { q: 'Le PIB est…', choix: ['la somme des profits', 'la somme des valeurs ajoutées', 'la somme des ventes', 'la somme des salaires'], r: 1, exp: 'Additionner les ventes compterait plusieurs fois les mêmes biens.' },
 { q: 'Qu\'est-ce qui n\'est PAS compté dans le PIB ?', choix: ['Les services publics', 'Le travail domestique non rémunéré', 'Les ventes de voitures', 'Les salaires des fonctionnaires'], r: 1, exp: 'Pas de prix, pas d\'enregistrement.' },
 { q: 'Le loyer d\'une usine est un coût…', choix: ['variable', 'fixe', 'intermédiaire', 'd\'opportunité'], r: 1, exp: 'Il est dû quelle que soit la production.' }
],
pieges: ['Confondre chiffre d\'affaires (ventes) et valeur ajoutée (ventes − CI).', 'Croire que le profit = la valeur ajoutée : le profit est ce qui reste après les salaires et impôts.'],
astuces: ['Schéma de la VA : un gâteau coupé en parts (salaires, impôts, profits, investissement). Dessine-le une fois.'],
exos: [
 { enonce: 'Pourquoi un pays dont le PIB augmente peut-il voir le bien-être de sa population stagner ?', correction: `Le PIB mesure la production, pas sa répartition (croissance captée par les plus riches), ni la qualité de vie (temps de travail, santé), ni les dégâts environnementaux (pollution compte positivement si elle génère des dépenses de réparation). Ex : la Chine a une forte croissance mais une pollution massive et de fortes inégalités.` }
]},

{ id: 'ses-marche', theme: 'Science économique', titre: 'Comment se forment les prix sur un marché ?', duree: 30,
cours: [
{ titre: 'Offre et demande', texte: `
Un **marché** est un lieu (réel ou virtuel) de rencontre entre **offreurs** (vendeurs) et **demandeurs** (acheteurs), où se fixe un prix.
- **Demande** : quantité que les acheteurs veulent acheter à chaque prix. Quand le prix **augmente**, la demande **diminue** (courbe décroissante).
- **Offre** : quantité que les vendeurs veulent vendre à chaque prix. Quand le prix **augmente**, l'offre **augmente** (courbe croissante).
- **Prix d'équilibre** : prix où offre = demande (intersection des courbes). Quantité d'équilibre associée.
Si le prix est au-dessus de l'équilibre : **surplus** (excès d'offre) ⟹ le prix baisse. En dessous : **pénurie** (excès de demande) ⟹ le prix monte.`},
{ titre: 'Déplacements des courbes', texte: `
- La demande se **déplace** (à prix donné) quand changent : le revenu, les goûts, le prix des autres biens (substituts, compléments), le nombre d'acheteurs. Hausse de la demande ⟹ prix et quantité d'équilibre **augmentent**.
- L'offre se déplace quand changent : les coûts de production, la technologie, le nombre de vendeurs, les taxes. Hausse de l'offre ⟹ prix **baisse**, quantité **augmente**.
Ex : mauvaise récolte de cacao ⟹ offre baisse ⟹ prix du chocolat monte.
X Ne pas confondre « déplacement **le long** de la courbe » (changement de prix) et « déplacement **de** la courbe » (changement d'un autre facteur).`},
{ titre: 'Interventions sur le marché', texte: `
- **Prix plancher** (au-dessus de l'équilibre, ex : SMIC sur le marché du travail, prix agricoles) ⟹ surplus (chômage selon certains économistes).
- **Prix plafond** (en dessous, ex : loyers encadrés) ⟹ pénurie (file d'attente, marché noir).
- **Taxes** (sur le tabac, le carbone) : augmentent le prix, réduisent la quantité échangée ; utiles contre les **externalités négatives** (pollution).
- Le marché suppose la **concurrence** ; un **monopole** (un seul vendeur) fixe un prix plus élevé.`}
],
notions: [
 { terme: 'Marché', def: 'Lieu de rencontre entre offre et demande où se forme un prix.' },
 { terme: 'Demande', def: 'Quantité que les acheteurs souhaitent acheter à chaque niveau de prix ; décroissante avec le prix.' },
 { terme: 'Offre', def: 'Quantité que les vendeurs souhaitent vendre à chaque niveau de prix ; croissante avec le prix.' },
 { terme: 'Prix d\'équilibre', def: 'Prix pour lequel quantité offerte = quantité demandée.' },
 { terme: 'Surplus / pénurie', def: 'Surplus : offre > demande (prix trop haut). Pénurie : demande > offre (prix trop bas).' },
 { terme: 'Déplacement de la demande', def: 'À prix donné, la demande change à cause du revenu, des goûts, du prix des autres biens.' },
 { terme: 'Prix plancher / plafond', def: 'Plancher : minimum légal (SMIC) → surplus. Plafond : maximum légal (loyers) → pénurie.' },
 { terme: 'Externalité', def: 'Effet d\'une activité sur un tiers sans compensation (pollution = négative ; vaccination = positive).' },
 { terme: 'Monopole', def: 'Marché avec un seul offreur, qui peut imposer un prix élevé.' }
],
quiz: [
 { q: 'Si le prix du café augmente, la quantité demandée…', choix: ['augmente', 'diminue', 'ne change pas', 'devient nulle'], r: 1, exp: 'Loi de la demande : relation décroissante.' },
 { q: 'Une hausse des revenus des consommateurs provoque…', choix: ['un déplacement de la demande vers la droite', 'une baisse de la demande', 'une hausse de l\'offre', 'rien'], r: 0, exp: 'À chaque prix, on achète plus ⟹ prix et quantité d\'équilibre augmentent.' },
 { q: 'Un prix plafond fixé sous l\'équilibre crée…', choix: ['un surplus', 'une pénurie', 'l\'équilibre', 'un monopole'], r: 1, exp: 'Demande > offre à ce prix.' },
 { q: 'Une sécheresse réduit la récolte de blé. Sur le marché du blé…', choix: ['l\'offre baisse, le prix monte', 'la demande baisse', 'le prix baisse', 'l\'offre augmente'], r: 0, exp: 'Déplacement de l\'offre vers la gauche.' },
 { q: 'La pollution d\'une usine est…', choix: ['une externalité positive', 'une externalité négative', 'un coût fixe', 'une consommation intermédiaire'], r: 1, exp: 'Coût subi par des tiers sans compensation.' }
],
pieges: ['Dire « la demande augmente quand le prix baisse » quand il s\'agit d\'un mouvement le long de la courbe : on dit « la quantité demandée ».', 'Inverser les pentes : offre croissante, demande décroissante.'],
astuces: ['Dessine systématiquement le graphique offre/demande avec P en ordonnée et Q en abscisse : la moitié des questions se résolvent visuellement.'],
exos: [
 { enonce: 'Sur un marché, l\'offre est Q = 2P et la demande Q = 120 − P. Prix et quantité d\'équilibre ? Que se passe-t-il si le prix est fixé à 50 ?', correction: `Équilibre : 2P = 120 − P ⟹ 3P = 120 ⟹ **P = 40, Q = 80**.
À P = 50 : offre = 100, demande = 70 ⟹ **surplus de 30** ; les vendeurs baisseront leurs prix.` }
]},

{ id: 'ses-socialisation', theme: 'Sociologie et science politique', titre: 'Comment devenons-nous des acteurs sociaux ? La socialisation', duree: 25,
cours: [
{ titre: 'La socialisation', texte: `
La **socialisation** est le processus par lequel un individu **intériorise** les **normes** (règles de comportement) et les **valeurs** (idéaux : liberté, respect, réussite) de la société, et apprend des **rôles** sociaux.
- **Socialisation primaire** (enfance) : famille d'abord, puis école, pairs, médias. Fondamentale et durable.
- **Socialisation secondaire** (adulte) : travail, couple, associations : adaptations, parfois ruptures.
Mécanismes : **inculcation** (apprentissage explicite : « dis bonjour »), **imitation**, **interaction**, **sanctions** (récompenses / punitions, regard des autres).
La socialisation **différenciée** : selon le **genre** (jouets, couleurs, attentes, métiers : filles vers le soin et le littéraire, garçons vers la technique) et selon le **milieu social** (langage, loisirs, rapport à l'école ; Bourdieu : capital culturel, habitus).`},
{ titre: 'Conséquences', texte: `
- Les goûts, les choix d'orientation, le vocabulaire, les pratiques culturelles apparaissent « naturels » mais sont **socialement construits**.
- Inégalités scolaires : les enfants de cadres réussissent mieux (familiarité avec la culture scolaire), même à intelligence égale.
- Mais la socialisation n'est pas un déterminisme absolu : **socialisations plurielles** (famille / pairs / école en désaccord), trajectoires de mobilité, transfuges de classe (Annie Ernaux, Édouard Louis).`}
],
notions: [
 { terme: 'Socialisation', def: 'Processus d\'intériorisation des normes, valeurs et rôles d\'une société.' },
 { terme: 'Normes', def: 'Règles de conduite (formelles : lois ; informelles : politesse) dont la transgression entraîne des sanctions.' },
 { terme: 'Valeurs', def: 'Idéaux partagés qui orientent les normes (liberté, égalité, réussite, respect).' },
 { terme: 'Socialisation primaire / secondaire', def: 'Primaire : enfance (famille, école). Secondaire : âge adulte (travail, couple).' },
 { terme: 'Instances de socialisation', def: 'Famille, école, groupe de pairs, médias, travail, associations.' },
 { terme: 'Socialisation différenciée', def: 'Différences de socialisation selon le genre et le milieu social.' },
 { terme: 'Genre', def: 'Construction sociale des différences entre masculin et féminin (≠ sexe biologique).' },
 { terme: 'Capital culturel (Bourdieu)', def: 'Ressources culturelles (diplômes, langage, goûts) transmises par la famille et valorisées par l\'école.' },
 { terme: 'Inculcation / imitation', def: 'Apprentissage explicite par consignes / apprentissage implicite par observation des autres.' }
],
quiz: [
 { q: 'La socialisation primaire se déroule…', choix: ['au travail', 'dans l\'enfance', 'à la retraite', 'uniquement à l\'école'], r: 1, exp: 'Famille et école surtout.' },
 { q: 'Offrir des poupées aux filles et des camions aux garçons relève de…', choix: ['la socialisation secondaire', 'la socialisation différenciée selon le genre', 'l\'inculcation scolaire', 'la nature'], r: 1, exp: 'Attentes différentes selon le sexe de l\'enfant.' },
 { q: 'Une norme est…', choix: ['un idéal', 'une règle de conduite', 'une loi uniquement', 'une valeur'], r: 1, exp: 'Formelle ou informelle, assortie de sanctions.' },
 { q: 'Le capital culturel selon Bourdieu explique…', choix: ['les inégalités de revenus', 'les inégalités de réussite scolaire', 'le chômage', 'les prix'], r: 1, exp: 'L\'école valorise une culture plus familière aux enfants de cadres.' },
 { q: 'Le genre désigne…', choix: ['le sexe biologique', 'la construction sociale du masculin et du féminin', 'un type de famille', 'l\'orientation sexuelle'], r: 1, exp: 'Les rôles attendus, pas l\'anatomie.' }
],
pieges: ['Opposer nature et socialisation de façon simpliste : les deux interagissent, mais ce qui intéresse la sociologie est la part sociale.', 'Confondre normes (règles) et valeurs (idéaux).'],
astuces: ['Pour chaque exemple de la vie quotidienne (vêtements, langage, loisirs), demande-toi : quelle instance, quel mécanisme, différencié selon quoi ?'],
exos: [
 { enonce: 'Expliquer, à l\'aide d\'un exemple, en quoi les choix d\'orientation scolaire sont socialement construits.', correction: `Les filles sont majoritaires en littéraire et santé, les garçons en sciences de l'ingénieur, alors que leurs résultats en maths sont proches au collège. Explication : socialisation différenciée (jouets, attentes des parents et enseignants, modèles médiatiques), auto-censure (« ce n'est pas pour moi »). De même, les enfants d'ouvriers s'orientent plus vers les filières courtes (moindre information, capital culturel). Le choix « libre » est orienté par la socialisation.` }
]},

{ id: 'ses-liens', theme: 'Sociologie et science politique', titre: 'Liens sociaux et participation politique', duree: 25,
cours: [
{ titre: 'Comment s\'organise la vie en société ?', texte: `
- **Groupe social** : ensemble d'individus ayant des interactions et une conscience d'appartenance (famille, classe, équipe). **Groupe primaire** (petit, liens affectifs) / **secondaire** (grand, liens fonctionnels : entreprise).
- **Réseaux sociaux** (au sens sociologique) : ensemble des relations d'un individu ; **liens forts** (proches) et **liens faibles** (connaissances) ; Granovetter : les liens faibles sont souvent plus utiles pour trouver un emploi (accès à d'autres cercles).
- **Lien social** : ce qui relie les individus : famille, travail, citoyenneté, associations. Durkheim : solidarité **mécanique** (sociétés traditionnelles, similitude) / **organique** (sociétés modernes, complémentarité par la division du travail).
- Risques : **isolement**, **exclusion**, **désaffiliation** (Castel) quand travail et liens familiaux se défont.`},
{ titre: 'Participation politique', texte: `
- **Participation conventionnelle** : vote, adhésion à un parti, militantisme. **Non conventionnelle** : manifestation, pétition, grève, boycott, occupation, hacktivisme.
- **Abstention** : en hausse (présidentielle 2022 : 28 % au 2e tour, législatives : > 50 %) ; plus forte chez les jeunes et les milieux populaires ; abstention « hors jeu » (désintérêt) vs « dans le jeu » (protestation).
- Facteurs de participation : âge, diplôme, intégration sociale, politisation familiale ; **engagement** : militantisme, bénévolat, pétitions en ligne, mouvements (climat, #MeToo, Gilets jaunes).
- **Répertoire d'action** (Tilly) : ensemble des moyens d'action disponibles à une époque.`}
],
notions: [
 { terme: 'Groupe social', def: 'Ensemble d\'individus en interaction ayant conscience d\'appartenir à un même groupe.' },
 { terme: 'Groupe primaire / secondaire', def: 'Primaire : petit, relations affectives (famille, amis). Secondaire : grand, relations impersonnelles (entreprise).' },
 { terme: 'Liens forts / faibles (Granovetter)', def: 'Forts : proches. Faibles : connaissances, souvent plus efficaces pour accéder à des informations nouvelles (emploi).' },
 { terme: 'Lien social', def: 'Ensemble des relations qui rattachent l\'individu à la société (famille, travail, citoyenneté).' },
 { terme: 'Solidarité mécanique / organique (Durkheim)', def: 'Mécanique : cohésion par similitude. Organique : cohésion par complémentarité (division du travail).' },
 { terme: 'Désaffiliation', def: 'Rupture progressive des liens (emploi, famille) menant à l\'exclusion (Castel).' },
 { terme: 'Participation conventionnelle / non conventionnelle', def: 'Conventionnelle : vote, parti. Non conventionnelle : manifestation, pétition, boycott.' },
 { terme: 'Abstention', def: 'Non-participation au vote ; croissante, inégale selon l\'âge et le milieu social.' },
 { terme: 'Répertoire d\'action collective', def: 'Ensemble des moyens de protestation disponibles à une époque (Tilly).' }
],
quiz: [
 { q: 'Selon Granovetter, pour trouver un emploi, les plus utiles sont…', choix: ['les liens forts', 'les liens faibles', 'les parents', 'les collègues'], r: 1, exp: 'Ils donnent accès à des informations hors de son cercle.' },
 { q: 'Une manifestation est une participation…', choix: ['conventionnelle', 'non conventionnelle', 'illégale', 'électorale'], r: 1, exp: 'Hors des institutions électorales.' },
 { q: 'La solidarité organique selon Durkheim repose sur…', choix: ['la similitude', 'la complémentarité', 'la religion', 'la famille'], r: 1, exp: 'Division du travail des sociétés modernes.' },
 { q: 'L\'abstention est la plus forte chez…', choix: ['les retraités', 'les jeunes', 'les diplômés', 'les cadres'], r: 1, exp: 'Et dans les milieux populaires.' },
 { q: 'La famille est un groupe…', choix: ['secondaire', 'primaire', 'de pairs', 'de référence'], r: 1, exp: 'Petit, liens affectifs.' }
],
pieges: ['Confondre « réseau social » au sens de Facebook et au sens sociologique (ensemble des relations).', 'Dire que les abstentionnistes « ne s\'intéressent pas à la politique » : certains s\'abstiennent par protestation.'],
astuces: ['Pour une question sur le lien social, distingue : les sources (famille, travail…), les évolutions (fragilisation ?), les nouvelles formes (numérique, associations).'],
exos: [
 { enonce: 'Montrer que l\'engagement politique des jeunes ne se réduit pas au vote.', correction: `Les 18-24 ans s'abstiennent beaucoup (≈ 40 % à la présidentielle 2022, > 70 % aux législatives) mais participent autrement : manifestations pour le climat (Fridays for Future), pétitions en ligne, boycotts, bénévolat, mobilisations sur les réseaux sociaux (#MeToo). Leur répertoire d'action est non conventionnel, plus ponctuel et moins institutionnel.` }
]}
]});
