window.PROGRAMME = window.PROGRAMME || [];
window.PROGRAMME.push({
id: 'geo', nom: 'Géographie', emoji: '🌍', couleur: '#14b8a6',
desc: "« Environnement, développement, mobilité : les défis d'un monde en transition ». Quatre thèmes : sociétés et environnements, territoires et développement, mobilités, et l'Afrique australe. La clé en géo : des exemples localisés + le vocabulaire + savoir faire un croquis.",
ressources: [
 { nom: 'Lumni Géographie 2nde', url: 'https://www.lumni.fr/lycee/seconde/geographie', ico: '📺', desc: 'Vidéos par thème, études de cas.' },
 { nom: 'Kartable Géographie 2nde', url: 'https://www.kartable.fr/seconde/geographie', ico: '📚', desc: 'Fiches, croquis et vocabulaire.' },
 { nom: 'Géoconfluences (ENS Lyon)', url: 'https://geoconfluences.ens-lyon.fr/', ico: '🗺️', desc: 'Glossaire et articles de référence pour les études de cas (niveau élevé mais fiable).' },
 { nom: 'Our World in Data', url: 'https://ourworldindata.org/', ico: '📊', desc: 'Les chiffres à jour (IDH, population, migrations) pour illustrer tes réponses.' }
],
chapitres: [
{ id: 'g-environnement', theme: 'Sociétés et environnements : des équilibres fragiles', titre: 'Ressources, risques et changement climatique', duree: 30,
cours: [
{ titre: 'Des ressources sous pression', texte: `
Une **ressource** est un élément de la nature utile aux sociétés (eau, sol, forêt, énergie, minerais). Elle peut être **renouvelable** (eau, bois, si gérée) ou non (pétrole, charbon).
- **Eau** : inégalement répartie ; stress hydrique au Moyen-Orient, en Afrique du Nord, en Inde ; conflits d'usage (agriculture = 70 % des prélèvements) ; barrages contestés (Nil, GERD éthiopien).
- **Énergie** : 80 % fossile ; transition vers renouvelables (solaire, éolien) ; nucléaire en France.
- **Forêts** : déforestation en Amazonie, Indonésie (huile de palme), pour l'agriculture et l'élevage.
- **Arctique** : fonte de la banquise ⟹ convoitises (hydrocarbures, routes maritimes) et fragilité.
Notion-clé : **développement durable** (rapport Brundtland, 1987) : répondre aux besoins du présent sans compromettre ceux des générations futures ; 3 piliers : économique, social, environnemental.`},
{ titre: 'Risques et vulnérabilité', texte: `
$ Risque = aléa × vulnérabilité × enjeux
- **Aléa** : phénomène potentiellement dangereux (séisme, cyclone, inondation, industriel).
- **Enjeux** : ce qui est exposé (population, bâtiments, activités).
- **Vulnérabilité** : fragilité face à l'aléa ; dépend du niveau de développement, de la prévention, de l'urbanisation.
- **Catastrophe** : quand le risque se réalise.
Exemples : séisme Haïti 2010 (≈ 230 000 morts, pays pauvre) vs Japon 2011 (≈ 18 000 morts, surtout par le tsunami, pays riche et préparé) : même aléa, vulnérabilité opposée. Inondations à Paris (crue de 1910, PPRI).
**Gestion** : prévention (normes parasismiques, digues), prévision (alerte), éducation, aménagement (zones non constructibles, PPR).`},
{ titre: 'Changement climatique', texte: `
Réchauffement de +1,1 °C depuis 1850, dû aux **gaz à effet de serre** (CO₂, CH₄) des activités humaines. Conséquences : montée des eaux (deltas, Bangladesh, Maldives, Pays-Bas), événements extrêmes, migrations climatiques.
Réponses : **accord de Paris (COP21, 2015)** : limiter à +2 °C, viser +1,5 °C ; **atténuation** (réduire les émissions) et **adaptation** (digues, cultures résistantes). Inégalités : les pays riches émettent le plus, les pays pauvres subissent le plus.`}
],
notions: [
 { terme: 'Ressource', def: 'Élément naturel utile à une société ; renouvelable ou non selon son rythme de régénération.' },
 { terme: 'Développement durable', def: 'Développement répondant aux besoins présents sans compromettre les générations futures ; piliers économique, social, environnemental (Brundtland, 1987).' },
 { terme: 'Stress hydrique', def: 'Situation où la demande en eau dépasse les ressources disponibles (< 1 700 m³/hab/an).' },
 { terme: 'Aléa', def: 'Phénomène naturel ou technologique potentiellement dangereux (séisme, cyclone, accident industriel).' },
 { terme: 'Vulnérabilité', def: 'Fragilité d\'une société face à un aléa ; dépend du développement, de la prévention, de l\'aménagement.' },
 { terme: 'Risque', def: 'Aléa × vulnérabilité × enjeux ; probabilité qu\'un aléa frappe des enjeux.' },
 { terme: 'Catastrophe', def: 'Réalisation du risque, avec dommages humains et matériels.' },
 { terme: 'Résilience', def: 'Capacité d\'une société à se remettre d\'une catastrophe.' },
 { terme: 'Atténuation / adaptation', def: 'Atténuation : réduire les émissions de GES. Adaptation : s\'ajuster aux effets du réchauffement.' },
 { terme: 'Accord de Paris (2015)', def: 'COP21 : engagement des États à limiter le réchauffement bien en dessous de +2 °C.' },
 { terme: 'Transition', def: 'Passage d\'un modèle à un autre (énergétique, démographique, urbain, écologique) : fil directeur du programme.' }
],
quiz: [
 { q: 'Le risque est le produit de…', choix: ['aléa et catastrophe', 'aléa, vulnérabilité et enjeux', 'enjeux et résilience', 'climat et population'], r: 1, exp: 'Sans enjeux ni vulnérabilité, un aléa n\'est pas un risque.' },
 { q: 'Pourquoi le séisme d\'Haïti (2010) a-t-il fait bien plus de morts que celui du Japon (2011) ?', choix: ['Il était plus puissant', 'La vulnérabilité d\'Haïti était plus forte', 'Le Japon n\'a pas été touché', 'À cause du tsunami'], r: 1, exp: 'Pauvreté, constructions non parasismiques, État faible.' },
 { q: 'Le développement durable repose sur…', choix: ['2 piliers', '3 piliers', '4 piliers', '1 pilier'], r: 1, exp: 'Économique, social, environnemental.' },
 { q: 'L\'accord de Paris date de…', choix: ['1987', '1997', '2015', '2020'], r: 2, exp: 'COP21.' },
 { q: 'L\'agriculture consomme environ…', choix: ['10 % de l\'eau prélevée', '30 %', '70 %', '95 %'], r: 2, exp: 'L\'irrigation est le premier usage mondial de l\'eau.' }
],
pieges: ['Confondre aléa (le phénomène) et risque (la menace pour une société).', 'Oublier de localiser : en géo, chaque idée doit avoir un exemple situé (pays, ville, région).'],
astuces: ['Structure type : constat (chiffres, carte) → causes → acteurs (États, ONG, entreprises, habitants) → solutions et limites.', 'Pour un croquis, légende en 2-3 parties avec des titres qui sont des idées, pas des listes.'],
exos: [
 { enonce: 'Montrer, à partir d\'un exemple, que la vulnérabilité face à un risque dépend du niveau de développement.', correction: `Exemple des séismes d'Haïti (2010, magnitude 7, ~230 000 morts) et du Japon (2011, magnitude 9, ~18 000 morts surtout par le tsunami). Au Japon : normes parasismiques, alertes, exercices, État efficace. En Haïti : bâtiments fragiles, bidonvilles, pas de secours organisés, pauvreté. L'aléa était même plus fort au Japon : c'est la vulnérabilité qui fait la catastrophe.` }
]},

{ id: 'g-developpement', theme: 'Territoires, populations et développement', titre: 'Démographie, développement et inégalités', duree: 30,
cours: [
{ titre: 'Dynamiques démographiques', texte: `
≈ 8 milliards d'humains (2022), 9,7 milliards prévus en 2050. La croissance se concentre en **Afrique subsaharienne** ; l'Europe, le Japon, la Chine vieillissent.
**Transition démographique** : passage d'un régime de forte natalité / forte mortalité à faible natalité / faible mortalité, en deux phases (la mortalité baisse d'abord ⟹ explosion démographique, puis la natalité). L'Europe l'a faite au XIXe, l'Afrique est en cours.
Indicateurs : taux de natalité, de mortalité, **indice de fécondité** (enfants/femme : Niger ≈ 6,5 ; France 1,8 ; Corée du Sud 0,7), espérance de vie, structure par âge (pyramide des âges).
Enjeux : **vieillissement** (retraites, santé) au Nord, **jeunesse** (éducation, emploi) au Sud, dividende démographique.`},
{ titre: 'Mesurer le développement', texte: `
- **PIB/habitant** : richesse produite par personne ; ne dit rien de la répartition.
- **IDH** (indice de développement humain, PNUD) : combine espérance de vie, éducation, revenu ; entre 0 et 1. Norvège ≈ 0,96, France ≈ 0,90, Niger ≈ 0,40.
- **Indice de Gini** : inégalités de revenus (0 = égalité parfaite).
- Seuil de pauvreté extrême : 2,15 $/jour (Banque mondiale).
Le monde n'est plus en « Nord/Sud » simple : **pays émergents** (BRICS : Brésil, Russie, Inde, Chine, Afrique du Sud), **PMA** (pays les moins avancés, 45 pays surtout africains), inégalités **internes** fortes (Inde, Brésil, États-Unis).
La **transition** vers le développement a un coût environnemental (Chine : 1er émetteur de CO₂) : d'où l'objectif de développement durable.`},
{ titre: 'Études de cas : Chine, Inde, Russie', texte: `
- **Chine** : politique de l'enfant unique (1979-2015) ⟹ vieillissement rapide, déséquilibre des sexes ; 1re population jusqu'en 2023 ; émergence spectaculaire mais inégalités littoral/intérieur.
- **Inde** : 1re population mondiale depuis 2023, population jeune, fécondité en baisse (2,0), forte pauvreté rurale, puissance numérique (Bangalore).
- **Russie** : déclin démographique, espérance de vie masculine faible, territoire immense et vide (Sibérie).`}
],
notions: [
 { terme: 'Transition démographique', def: 'Passage d\'une forte natalité/mortalité à une faible natalité/mortalité, avec une phase intermédiaire de forte croissance.' },
 { terme: 'Indice de fécondité', def: 'Nombre moyen d\'enfants par femme ; 2,1 = renouvellement des générations.', exemple: 'Niger 6,5 ; France 1,8' },
 { terme: 'Vieillissement', def: 'Augmentation de la part des plus de 65 ans (Japon, Europe, Chine) ; enjeux de retraites et de santé.' },
 { terme: 'PIB par habitant', def: 'Richesse produite divisée par la population ; indicateur économique sans dimension sociale.' },
 { terme: 'IDH', def: 'Indice de développement humain (0 à 1) : espérance de vie, niveau d\'éducation, revenu par habitant.', exemple: 'Norvège 0,96 ; Niger 0,40' },
 { terme: 'Indice de Gini', def: 'Mesure des inégalités de revenus dans un pays (0 égalité, 1 inégalité totale).' },
 { terme: 'Pays émergent', def: 'Pays à croissance rapide s\'intégrant à la mondialisation (BRICS).' },
 { terme: 'PMA', def: 'Pays les moins avancés (ONU) : faible revenu, faible développement humain, grande vulnérabilité.' },
 { terme: 'Développement', def: 'Amélioration durable des conditions de vie (santé, éducation, revenus) d\'une population ; différent de la seule croissance.' },
 { terme: 'Politique de l\'enfant unique', def: 'Chine, 1979-2015 : limitation des naissances ayant provoqué vieillissement et déficit de filles.' }
],
quiz: [
 { q: 'L\'IDH combine…', choix: ['PIB et population', 'espérance de vie, éducation et revenu', 'natalité et mortalité', 'inégalités et pauvreté'], r: 1, exp: 'Indice du PNUD entre 0 et 1.' },
 { q: 'Dans la transition démographique, qu\'est-ce qui baisse en premier ?', choix: ['La natalité', 'La mortalité', 'La fécondité', 'L\'immigration'], r: 1, exp: 'Progrès médicaux et alimentaires ; la natalité suit avec retard, d\'où la croissance.' },
 { q: 'Le continent où la croissance démographique est la plus forte :', choix: ['Europe', 'Asie', 'Afrique', 'Amérique'], r: 2, exp: 'Afrique subsaharienne, fécondité > 4 enfants/femme.' },
 { q: 'Le pays le plus peuplé du monde depuis 2023 :', choix: ['Chine', 'Inde', 'États-Unis', 'Indonésie'], r: 1, exp: 'L\'Inde a dépassé la Chine.' },
 { q: 'BRICS désigne…', choix: ['les PMA', 'les pays émergents (Brésil, Russie, Inde, Chine, Afrique du Sud)', 'l\'Union européenne', 'les pays du G7'], r: 1, exp: 'Élargi depuis 2024 à d\'autres pays.' }
],
pieges: ['Confondre croissance (économique) et développement (conditions de vie).', 'Utiliser « pays du Nord / du Sud » sans nuancer : les émergents brouillent la carte.'],
astuces: ['Retiens 3 chiffres par thème : 8 Md d\'humains, IDH Norvège/France/Niger, fécondité Niger/France. Ça suffit pour illustrer.'],
exos: [
 { enonce: 'Pourquoi le PIB par habitant ne suffit-il pas à mesurer le développement ?', correction: `Le PIB/hab mesure une richesse moyenne : il ignore la répartition (Guinée équatoriale : PIB/hab élevé grâce au pétrole mais IDH faible), la santé, l'éducation, les libertés et l'environnement. L'IDH ajoute espérance de vie et éducation ; Gini mesure les inégalités. Il faut croiser les indicateurs.` }
]},

{ id: 'g-mobilites', theme: 'Des mobilités généralisées', titre: 'Migrations, tourisme et mobilités', duree: 30,
cours: [
{ titre: 'Migrations internationales', texte: `
≈ **280 millions** de migrants internationaux (3,6 % de l'humanité) + migrations internes bien plus nombreuses (exode rural en Chine : 300 millions de « mingong »).
- **Causes** : économiques (travail), politiques (guerres : Syrie, Ukraine, Soudan), familiales, études, climatiques.
- **Flux** : Sud → Nord (Mexique → États-Unis, Afrique/Moyen-Orient → Europe), mais aussi Sud → Sud (majoritaires : Inde → Golfe, Afrique de l'Ouest), Nord → Nord.
- **Réfugiés** : 35 millions (HCR) ; la plupart dans les pays voisins (Turquie, Liban, Ouganda), pas en Europe.
- **Effets** : remises (transferts d'argent : 650 Md $/an, > aide au développement), fuite des cerveaux, diasporas ; dans les pays d'accueil : besoins de main-d'œuvre, tensions politiques, murs et contrôles (frontière USA-Mexique, Méditerranée, Frontex).`},
{ titre: 'Tourisme international', texte: `
≈ **1,5 milliard** de touristes internationaux par an (2019, avant Covid) ; 1re destination : France (90 millions). Démocratisation (congés payés, low cost), mais 5 % de l'humanité seulement voyage à l'étranger.
Effets : revenus et emplois (10 % du PIB mondial), mais **surtourisme** (Venise, Barcelone, Bali), pollution (avion), dégradation des sites, dépendance. Réponses : quotas, taxes, tourisme durable.`},
{ titre: 'Les mobilités du quotidien et les transports', texte: `
Mobilités pendulaires (domicile-travail), périurbanisation, dépendance automobile ; métropoles saturées. Infrastructures : hubs aéroportuaires (Dubaï, Atlanta), ports (Shanghai), LGV ; inégalités d'accès (zones rurales, pays pauvres).
Étude de cas possible : la **Méditerranée**, espace de tourisme ET de migrations (Lampedusa, Ceuta), symbole de la mondialisation des mobilités et de ses drames.`}
],
notions: [
 { terme: 'Migrant international', def: 'Personne vivant dans un pays autre que celui de sa naissance ; ≈ 280 millions (3,6 % de l\'humanité).' },
 { terme: 'Réfugié', def: 'Personne fuyant une persécution ou une guerre, protégée par la convention de Genève (1951) ; majoritairement accueillie dans les pays voisins.' },
 { terme: 'Remises (transferts)', def: 'Argent envoyé par les migrants dans leur pays d\'origine ; dépasse l\'aide publique au développement.' },
 { terme: 'Diaspora', def: 'Communauté dispersée hors de son pays d\'origine mais gardant des liens (chinoise, indienne, libanaise).' },
 { terme: 'Fuite des cerveaux', def: 'Émigration des personnes qualifiées (médecins, ingénieurs) des pays pauvres vers les pays riches.' },
 { terme: 'Surtourisme', def: 'Fréquentation touristique excessive dégradant un site et la vie des habitants (Venise, Barcelone).' },
 { terme: 'Mobilités pendulaires', def: 'Déplacements quotidiens domicile-travail ou domicile-études.' },
 { terme: 'Hub', def: 'Plateforme de correspondance concentrant les flux (aéroport de Dubaï, port de Singapour).' },
 { terme: 'Frontière', def: 'Limite entre États ; à la fois interface (échanges) et barrière (murs, contrôles : USA-Mexique, Frontex).' }
],
quiz: [
 { q: 'Les migrants internationaux représentent environ…', choix: ['1 % de l\'humanité', '3,6 %', '15 %', '30 %'], r: 1, exp: '≈ 280 millions de personnes.' },
 { q: 'La majorité des réfugiés sont accueillis…', choix: ['en Europe', 'aux États-Unis', 'dans les pays voisins de leur pays d\'origine', 'au Canada'], r: 2, exp: 'Turquie, Liban, Pakistan, Ouganda…' },
 { q: 'Première destination touristique mondiale ?', choix: ['Espagne', 'États-Unis', 'France', 'Chine'], r: 2, exp: '≈ 90 millions de visiteurs par an.' },
 { q: 'Les remises des migrants…', choix: ['sont négligeables', 'dépassent l\'aide publique au développement', 'vont surtout vers l\'Europe', 'sont interdites'], r: 1, exp: '≈ 650 milliards $ par an.' },
 { q: 'Quelle part de l\'humanité voyage à l\'étranger chaque année ?', choix: ['≈ 5 %', '≈ 25 %', '≈ 50 %', '≈ 80 %'], r: 0, exp: 'Le tourisme international reste une mobilité de riches.' }
],
pieges: ['Croire que les migrations vont surtout du Sud vers l\'Europe : les flux Sud-Sud sont majoritaires.', 'Confondre migrant (toute personne changeant de pays) et réfugié (statut juridique).'],
astuces: ['Pour chaque mobilité : qui ? d\'où vers où ? pourquoi ? avec quels effets (départ / arrivée) ? Grille universelle.'],
exos: [
 { enonce: 'En quoi la Méditerranée est-elle un espace révélateur des mobilités contemporaines ?', correction: `Tourisme de masse (1re région touristique mondiale : Espagne, Italie, France, Grèce ; croisières) et migrations (Afrique, Moyen-Orient → Europe via Libye, Turquie ; Lampedusa, Lesbos). Frontière fermée (Frontex) et meurtrière (> 25 000 morts depuis 2014) à côté de flux touristiques libres : la mondialisation des mobilités est très inégale selon les passeports et les revenus.` }
]},

{ id: 'g-afrique-australe', theme: 'L\'Afrique australe : un espace en profonde mutation', titre: 'L\'Afrique australe : développement, ressources et mobilités', duree: 25,
cours: [
{ titre: 'Un espace contrasté', texte: `
L'Afrique australe = Afrique du Sud, Namibie, Botswana, Zimbabwe, Mozambique, Angola, Zambie, Malawi, Lesotho, Eswatini, Madagascar… regroupés dans la **SADC**.
- **Afrique du Sud** : puissance émergente (BRICS), 1re économie industrialisée du continent, mais pays parmi les plus **inégalitaires** au monde (héritage de l'**apartheid**, aboli en 1991-1994 ; Mandela président en 1994). Townships (Soweto), chômage ≈ 30 %, criminalité.
- **Botswana** : diamants, bonne gouvernance, IDH en hausse. **Mozambique, Malawi, Madagascar** : PMA, pauvreté, cyclones (Idai 2019).
- **Richesses** : or, platine, diamants, charbon, cuivre (Zambie), gaz (Mozambique) ; mais « malédiction des ressources » (dépendance, corruption, pollution).`},
{ titre: 'Environnement et mobilités', texte: `
- **Pressions** : sécheresses (Le Cap « Day Zero » 2018), déforestation, braconnage (rhinocéros), mines polluantes ; parcs transfrontaliers (Kruger) et **tourisme de safari** comme ressource.
- **Mobilités** : migrations de travail vers l'Afrique du Sud (Zimbabwéens, Mozambicains ; xénophobie), exode rural, tourisme international (Cap, chutes Victoria), migrations climatiques.
- **Transition** : urbaine (Johannesburg-Pretoria, Le Cap), énergétique (charbon ⟹ renouvelables), démographique (en cours), politique (fin de l'apartheid, démocraties fragiles).`}
],
notions: [
 { terme: 'Afrique australe', def: 'Région sud du continent (Afrique du Sud, Namibie, Botswana, Mozambique, Zimbabwe…), organisée dans la SADC.' },
 { terme: 'Apartheid', def: 'Régime de ségrégation raciale en Afrique du Sud (1948-1991) ; ses inégalités persistent (townships).' },
 { terme: 'Township', def: 'Quartier périphérique créé sous l\'apartheid pour la population noire (Soweto), souvent pauvre et sous-équipé.' },
 { terme: 'Malédiction des ressources', def: 'Paradoxe : des pays riches en matières premières restent pauvres (dépendance, corruption, conflits).' },
 { terme: 'SADC', def: 'Communauté de développement d\'Afrique australe : organisation régionale de 16 États.' },
 { terme: 'Pays émergent (Afrique du Sud)', def: 'Membre des BRICS, 1re puissance industrielle d\'Afrique, mais très inégalitaire.' },
 { terme: 'Day Zero (Le Cap, 2018)', def: 'Crise de l\'eau où la ville a failli couper l\'alimentation : symbole du stress hydrique.' },
 { terme: 'Parc transfrontalier', def: 'Aire protégée à cheval sur plusieurs États (Grand Limpopo) : conservation et tourisme.' }
],
quiz: [
 { q: 'L\'apartheid a été aboli au début des années…', choix: ['1960', '1970', '1990', '2000'], r: 2, exp: '1991 ; Mandela élu en 1994.' },
 { q: 'Le pays émergent d\'Afrique australe membre des BRICS :', choix: ['Botswana', 'Mozambique', 'Afrique du Sud', 'Zambie'], r: 2, exp: 'Le S de BRICS.' },
 { q: 'Le Botswana est connu pour…', choix: ['son pétrole', 'ses diamants et sa bonne gouvernance', 'son tourisme balnéaire', 'sa pauvreté extrême'], r: 1, exp: 'Un exemple où la ressource a servi le développement.' },
 { q: '« Day Zero » au Cap (2018) illustre…', choix: ['une crise migratoire', 'une crise de l\'eau', 'un séisme', 'une émeute'], r: 1, exp: 'Sécheresse prolongée, réservoirs quasi vides.' },
 { q: 'Les migrations de travail dans la région se dirigent surtout vers…', choix: ['Madagascar', 'l\'Afrique du Sud', 'le Malawi', 'l\'Europe'], r: 1, exp: 'Mines, agriculture, services ; tensions xénophobes.' }
],
pieges: ['Présenter l\'Afrique australe comme uniforme : Afrique du Sud émergente vs Mozambique PMA.'],
astuces: ['Ce thème recycle les trois précédents (environnement, développement, mobilités) : réutilise les notions avec des exemples locaux.'],
exos: [
 { enonce: 'Croquis : organisez une légende en trois parties sur « l\'Afrique australe, un espace en mutation ».', correction: `I. Des niveaux de développement contrastés : Afrique du Sud émergente (aplat foncé), pays intermédiaires (Botswana, Namibie), PMA (Mozambique, Malawi, Madagascar).
II. Des ressources convoitées sous pression : mines (symboles), parcs et tourisme, zones de stress hydrique (hachures).
III. Des mobilités qui structurent l'espace : flux migratoires vers l'Afrique du Sud (flèches), flux touristiques, métropoles (Johannesburg, Le Cap), corridors de transport.` }
]}
]});
