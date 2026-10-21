window.PROGRAMME = window.PROGRAMME || [];
window.PROGRAMME.push({
id: 'svt', nom: 'SVT', couleur: '#10b981',
desc: "Trois thèmes : la Terre, la vie et l'organisation du vivant ; enjeux contemporains de la planète ; corps humain et santé. Les évaluations portent sur l'exploitation de documents et l'argumentation avec le vocabulaire exact.",
ressources: [
 { nom: 'Lumni SVT 2nde', url: 'https://www.lumni.fr/lycee/seconde/svt', desc: 'Vidéos et fiches conformes au programme.' },
 { nom: 'SVT Lycée (YouTube, cours en vidéo)', url: 'https://www.youtube.com/results?search_query=svt+seconde+cours', desc: 'Cherche le chapitre + « 2nde » : de nombreux profs publient des cours clairs.' },
 { nom: 'Kartable SVT 2nde', url: 'https://www.kartable.fr/seconde/svt', desc: 'Fiches et QCM.' },
 { nom: 'Programme officiel SVT', url: 'https://eduscol.education.fr/1697/programmes-et-ressources-en-sciences-de-la-vie-et-de-la-terre-voie-gt', desc: 'Les attendus exacts.' }
],
chapitres: [
{ id: 'svt-cellule', theme: 'La Terre, la vie et l\'organisation du vivant', titre: 'L\'organisation fonctionnelle du vivant : cellule, ADN, métabolisme', duree: 35,
cours: [
{ titre: 'La cellule, unité du vivant', texte: `
Tous les êtres vivants sont constitués de **cellules** (théorie cellulaire). Une cellule est délimitée par une **membrane plasmique** et contient le **cytoplasme**.
- **Eucaryotes** (animaux, végétaux, champignons) : noyau contenant l'ADN, organites (mitochondries, chloroplastes chez les végétaux).
- **Procaryotes** (bactéries) : pas de noyau, ADN libre dans le cytoplasme, pas d'organites.
Échelles : cellule ≈ 10-100 µm, bactérie ≈ 1 µm, molécule d'ADN ≈ nm. Microscope optique pour les cellules, électronique pour les organites.
Les cellules d'un organisme pluricellulaire sont **spécialisées** (neurone, globule rouge, cellule musculaire) et organisées en **tissus**, **organes**, **systèmes**.`},
{ titre: 'L\'ADN, support de l\'information génétique', texte: `
L'**ADN** (acide désoxyribonucléique) est une molécule en **double hélice** formée de deux brins de **nucléotides**. Chaque nucléotide porte une base : **A, T, C, G**. Règle de complémentarité : **A–T** et **C–G**.
La **séquence** (ordre des bases) code l'information génétique. Un **gène** est une portion d'ADN qui code un caractère/une protéine. Un gène existe en différentes versions : les **allèles** (groupe sanguin A, B, O).
**Mutation** : modification de la séquence (substitution, insertion, délétion). Source de nouveaux allèles ⟹ de biodiversité.
L'ADN est **universel** : le code génétique est le même chez tous les êtres vivants (preuve d'une origine commune ; permet la transgenèse : gène humain dans une bactérie pour produire de l'insuline).`},
{ titre: 'Métabolisme', texte: `
Le **métabolisme** = ensemble des réactions chimiques d'une cellule. Il dépend de l'**équipement enzymatique** (donc du génome) et de l'**environnement** (nutriments, lumière).
- **Autotrophes** (végétaux chlorophylliens) : fabriquent leur matière organique à partir de matière minérale (CO₂, eau, sels) grâce à la lumière : **photosynthèse** dans les chloroplastes. CO₂ + H₂O + lumière → glucose + O₂.
- **Hétérotrophes** (animaux, champignons, la plupart des bactéries) : prélèvent de la matière organique.
- **Respiration cellulaire** (dans les mitochondries) : glucose + O₂ → CO₂ + H₂O + énergie. Chez les végétaux aussi, jour et nuit.
- **Fermentation** : dégradation du glucose sans O₂ (levures : alcool + CO₂).
! Les végétaux font photosynthèse (le jour) ET respiration (en permanence). Erreur classique en contrôle.`}
],
notions: [
 { terme: 'Cellule', def: 'Unité structurale et fonctionnelle de tout être vivant, délimitée par une membrane plasmique.' },
 { terme: 'Eucaryote / procaryote', def: 'Eucaryote : noyau + organites (animaux, végétaux). Procaryote : pas de noyau (bactéries).' },
 { terme: 'Membrane plasmique', def: 'Enveloppe de la cellule, contrôle les échanges avec le milieu extérieur.' },
 { terme: 'Organites', def: 'Compartiments spécialisés des eucaryotes : noyau, mitochondries (respiration), chloroplastes (photosynthèse).' },
 { terme: 'ADN', def: 'Molécule en double hélice, support de l\'information génétique, formée de nucléotides A, T, C, G (A–T, C–G).' },
 { terme: 'Gène / allèle', def: 'Gène : portion d\'ADN codant un caractère. Allèle : version d\'un gène.', exemple: 'gène groupe sanguin, allèles A, B, O' },
 { terme: 'Mutation', def: 'Modification de la séquence de l\'ADN ; crée de nouveaux allèles, source de diversité.' },
 { terme: 'Universalité de l\'ADN', def: 'Même molécule et même code génétique chez tous les êtres vivants : argument pour une origine commune ; base de la transgenèse.' },
 { terme: 'Métabolisme', def: 'Ensemble des réactions chimiques d\'une cellule, contrôlé par les enzymes (génome) et l\'environnement.' },
 { terme: 'Autotrophe / hétérotrophe', def: 'Autotrophe : produit sa matière organique à partir de minéral (photosynthèse). Hétérotrophe : consomme de la matière organique.' },
 { terme: 'Photosynthèse', def: 'Dans les chloroplastes, à la lumière : CO₂ + H₂O → matière organique (glucose) + O₂.' },
 { terme: 'Respiration cellulaire', def: 'Dans les mitochondries : glucose + O₂ → CO₂ + H₂O + énergie. Chez tous les eucaryotes, végétaux compris.' },
 { terme: 'Fermentation', def: 'Dégradation incomplète du glucose sans dioxygène (ex : levures → éthanol + CO₂).' }
],
quiz: [
 { q: 'Quelle structure est absente chez une bactérie ?', choix: ['Membrane plasmique', 'ADN', 'Noyau', 'Cytoplasme'], r: 2, exp: 'Procaryote = ADN libre, sans noyau.' },
 { q: 'Brin d\'ADN : ATGC. Brin complémentaire ?', choix: ['ATGC', 'TACG', 'GCAT', 'CGTA'], r: 1, exp: 'A↔T, G↔C.' },
 { q: 'La photosynthèse a lieu dans…', choix: ['les mitochondries', 'le noyau', 'les chloroplastes', 'la membrane'], r: 2, exp: 'Organites verts contenant la chlorophylle.' },
 { q: 'Un végétal chlorophyllien…', choix: ['respire seulement la nuit', 'ne respire jamais', 'respire jour et nuit', 'fait la photosynthèse la nuit'], r: 2, exp: 'La respiration est permanente ; la photosynthèse nécessite la lumière.' },
 { q: 'Un allèle est…', choix: ['une portion d\'ADN', 'une version d\'un gène', 'une mutation', 'un chromosome'], r: 1, exp: 'Un même gène peut exister en plusieurs versions.' },
 { q: 'Le fait que l\'ADN soit universel permet…', choix: ['la fermentation', 'la transgenèse', 'la photosynthèse', 'la spécialisation'], r: 1, exp: 'Un gène transféré dans une autre espèce y est lu de la même façon.' }
],
pieges: ['« Les plantes respirent la nuit et font la photosynthèse le jour » : elles respirent TOUT LE TEMPS.', 'Confondre gène (emplacement) et allèle (version).', 'Dire « la cellule a besoin d\'oxygène pour vivre » : les cellules fermentaires n\'en ont pas besoin.'],
astuces: ['Pour décrire une cellule sur un document : échelle, type (eucaryote/procaryote), organites visibles, justification.', 'Schéma bilan à savoir refaire : photosynthèse et respiration avec les flèches CO₂/O₂.'],
exos: [
 { enonce: 'Expliquer pourquoi une bactérie modifiée peut produire de l\'insuline humaine.', correction: `Le code génétique est **universel** : la séquence d'ADN du gène humain de l'insuline, insérée dans la bactérie, est lue et traduite de la même façon. La bactérie synthétise donc la protéine humaine. C'est la transgenèse.` }
]},

{ id: 'svt-biodiversite', theme: 'La Terre, la vie et l\'organisation du vivant', titre: 'Biodiversité, évolution et sélection naturelle', duree: 35,
cours: [
{ titre: 'Les trois échelles de la biodiversité', texte: `
- **Écosystèmes** : diversité des milieux (forêt, récif, mare).
- **Espèces** : diversité des espèces dans un milieu. Une **espèce** = ensemble d'individus pouvant se reproduire entre eux avec une descendance **fertile**.
- **Génétique** : diversité des allèles au sein d'une espèce (ex : groupes sanguins, couleur des yeux).
La biodiversité **change au cours du temps** : apparitions, extinctions (dont 5 crises majeures ; la 6e est en cours, due à l'humain). Elle s'étudie par **échantillonnage** (on ne peut pas tout compter : quadrats, captures, suivi).`},
{ titre: 'Mécanismes de l\'évolution', texte: `
Deux moteurs expliquent la variation des **fréquences alléliques** dans une population :
- **Sélection naturelle** : dans un environnement donné, les individus portant certains allèles survivent et se reproduisent **plus** ; ces allèles deviennent plus fréquents. Ex : phalène du bouleau (forme sombre favorisée sur les troncs noircis par la pollution), résistance des bactéries aux antibiotiques.
- **Dérive génétique** : variation **aléatoire** des fréquences alléliques, surtout dans les **petites populations** (effet fondateur, goulot d'étranglement). Pas d'avantage, juste le hasard de la reproduction.
Isolement d'une population + sélection/dérive ⟹ au bout de nombreuses générations, **spéciation** (nouvelle espèce).
X La sélection naturelle n'a pas de but : les individus ne « s'adaptent » pas volontairement. La mutation arrive au hasard ; l'environnement trie.`},
{ titre: 'Communication et comportement', texte: `
La communication intraspécifique (entre individus d'une même espèce) repose sur des signaux (visuels, sonores, chimiques) : parade nuptiale, marquage. Elle intervient dans la **sélection sexuelle** : les caractères qui plaisent aux partenaires (queue du paon) se répandent même s'ils sont coûteux.`}
],
notions: [
 { terme: 'Biodiversité', def: 'Diversité du vivant à trois échelles : écosystèmes, espèces, génétique (allèles).' },
 { terme: 'Espèce', def: 'Ensemble d\'individus interféconds dont la descendance est fertile.' },
 { terme: 'Diversité génétique', def: 'Diversité des allèles au sein d\'une population ou d\'une espèce.' },
 { terme: 'Échantillonnage', def: 'Méthode d\'estimation de la biodiversité à partir d\'une partie représentative (quadrats, capture-marquage-recapture).' },
 { terme: 'Crise biologique', def: 'Extinction massive d\'espèces en peu de temps ; 5 crises majeures connues, une 6e en cours liée aux activités humaines.' },
 { terme: 'Sélection naturelle', def: 'Les individus les mieux adaptés à un milieu survivent et se reproduisent davantage : leurs allèles augmentent en fréquence.', exemple: 'phalène du bouleau' },
 { terme: 'Dérive génétique', def: 'Variation aléatoire des fréquences alléliques, forte dans les petites populations.' },
 { terme: 'Fréquence allélique', def: 'Proportion d\'un allèle dans une population ; son évolution traduit l\'évolution de la population.' },
 { terme: 'Spéciation', def: 'Apparition d\'une nouvelle espèce, souvent après isolement d\'une population et divergence.' },
 { terme: 'Sélection sexuelle', def: 'Sélection des caractères qui augmentent les chances d\'être choisi par un partenaire.' }
],
quiz: [
 { q: 'Deux individus appartiennent à la même espèce s\'ils…', choix: ['se ressemblent', 'vivent au même endroit', 'peuvent avoir une descendance fertile', 'ont le même ADN'], r: 2, exp: 'Cheval × âne = mulet stérile : espèces différentes.' },
 { q: 'La dérive génétique est plus forte dans…', choix: ['les grandes populations', 'les petites populations', 'les populations isolées et grandes', 'aucune'], r: 1, exp: 'Le hasard a plus d\'effet sur un petit effectif.' },
 { q: 'La sélection naturelle agit sur…', choix: ['les mutations avant qu\'elles apparaissent', 'la survie et la reproduction des individus', 'la volonté d\'adaptation', 'l\'environnement'], r: 1, exp: 'Les allèles avantageux dans le milieu se transmettent davantage.' },
 { q: 'Les bactéries résistantes aux antibiotiques sont un exemple de…', choix: ['dérive génétique', 'sélection naturelle', 'spéciation', 'sélection sexuelle'], r: 1, exp: 'L\'antibiotique trie : seules les bactéries portant l\'allèle de résistance survivent.' },
 { q: 'Une crise biologique est…', choix: ['une maladie', 'une extinction massive rapide', 'une mutation', 'une spéciation'], r: 1, exp: 'Ex : disparition des dinosaures il y a 66 Ma.' }
],
pieges: ['Écrire « l\'espèce a muté pour s\'adapter » : la mutation est aléatoire et précède la sélection.', 'Confondre sélection naturelle (avantage) et dérive (hasard).'],
astuces: ['Dans une question sur l\'évolution, structure toujours : 1) variation (mutation) → 2) tri (sélection ou hasard) → 3) changement de fréquence allélique au fil des générations.'],
exos: [
 { enonce: 'Dans une population de phalènes, la forme sombre passe de 2 % à 90 % en 50 ans dans une région industrielle. Expliquer.', correction: `Avant : troncs clairs, les phalènes claires sont camouflées, les sombres mangées par les oiseaux.
Pollution → troncs noircis → les sombres sont camouflées, les claires repérées et mangées.
Les sombres survivent et se reproduisent plus : l'allèle « sombre » augmente en fréquence. C'est la **sélection naturelle** (la mutation « sombre » existait déjà, à 2 %).` }
]},

{ id: 'svt-geosciences', theme: 'Enjeux contemporains de la planète', titre: 'Érosion, sédimentation et dynamique des paysages', duree: 25,
cours: [
{ titre: 'Altération et érosion', texte: `
Les paysages évoluent en permanence sous l'action de l'**eau**, du **vent**, du **gel**, des **êtres vivants**.
- **Altération** : les roches sont modifiées sur place (dissolution du calcaire par l'eau de pluie acide, fragmentation par le gel, transformation chimique du granite en arène).
- **Érosion** : les débris sont **arrachés et transportés** (rivières, glaciers, vent).
Le climat et la nature de la roche déterminent la vitesse. Un relief est le résultat d'un équilibre entre soulèvement et érosion.`},
{ titre: 'Transport, sédimentation et roches sédimentaires', texte: `
Les particules sont **transportées** (plus elles sont fines, plus elles vont loin) puis **déposées** : c'est la **sédimentation** (lacs, deltas, fonds marins). Les sédiments s'accumulent en **strates** puis se compactent et se cimentent : **diagenèse** ⟹ **roches sédimentaires** (grès, calcaire, argile).
Ces roches enregistrent les conditions passées : un calcaire à coraux = mer chaude peu profonde.
**Utilisation par l'homme** : sable et gravier (béton), calcaire (ciment), argile (brique). Ressources **non renouvelables** à l'échelle humaine ; l'extraction (carrières, sable marin) a des impacts : destruction d'habitats, modification du littoral.
! L'érosion est aussi un risque (glissements de terrain, recul des côtes) accentué par l'humain (déforestation, bétonisation).`}
],
notions: [
 { terme: 'Altération', def: 'Modification sur place des roches par l\'eau, le gel, les organismes (dissolution, fragmentation).' },
 { terme: 'Érosion', def: 'Arrachement et transport des débris de roches par l\'eau, le vent, la glace.' },
 { terme: 'Sédimentation', def: 'Dépôt des particules transportées dans un bassin (lac, mer), en couches = strates.' },
 { terme: 'Diagenèse', def: 'Compaction et cimentation des sédiments qui les transforment en roche sédimentaire.' },
 { terme: 'Roche sédimentaire', def: 'Roche formée par accumulation de sédiments (grès, calcaire, argile) ; archive des conditions passées.' },
 { terme: 'Strate', def: 'Couche de sédiments ou de roche sédimentaire ; la plus ancienne est en bas (superposition).' },
 { terme: 'Ressource géologique non renouvelable', def: 'Matériau (sable, calcaire) dont la formation est trop lente par rapport à l\'exploitation humaine.' }
],
quiz: [
 { q: 'La transformation de sédiments en roche s\'appelle…', choix: ['érosion', 'altération', 'diagenèse', 'sédimentation'], r: 2, exp: 'Compaction + cimentation.' },
 { q: 'Dans une série de strates non déformées, la plus ancienne est…', choix: ['en haut', 'en bas', 'au milieu', 'impossible à dire'], r: 1, exp: 'Principe de superposition : chaque couche se dépose sur la précédente.' },
 { q: 'Le calcaire est surtout altéré par…', choix: ['le vent', 'la dissolution par l\'eau', 'la chaleur', 'les racines'], r: 1, exp: 'L\'eau de pluie, légèrement acide (CO₂ dissous), dissout le calcaire (grottes, lapiaz).' },
 { q: 'Le sable est une ressource…', choix: ['renouvelable rapidement', 'non renouvelable à l\'échelle humaine', 'inépuisable', 'inutile'], r: 1, exp: 'Sa formation prend des milliers d\'années ; sa consommation (béton) est massive.' }
],
pieges: ['Confondre altération (sur place) et érosion (transport).', 'Dire que l\'érosion « crée » les montagnes : elle les use ; c\'est la tectonique qui les soulève.'],
astuces: ['Enchaînement à retenir : altération → érosion → transport → sédimentation → diagenèse → roche sédimentaire.'],
exos: [
 { enonce: 'Un échantillon de grès contient des grains de sable arrondis et des fossiles de coquillages marins. Que peut-on en déduire ?', correction: `Grains arrondis = **transport long** (usure). Fossiles marins = **dépôt en milieu marin**. Le grès s'est formé par sédimentation en mer de sable transporté depuis le continent, puis diagenèse.` }
]},

{ id: 'svt-agrosystemes', theme: 'Enjeux contemporains de la planète', titre: 'Agrosystèmes et développement durable', duree: 25,
cours: [
{ titre: 'Qu\'est-ce qu\'un agrosystème ?', texte: `
Un **agrosystème** est un écosystème **créé et géré par l'humain** pour produire de la biomasse (aliments, fibres, énergie). Contrairement à un écosystème naturel :
- **Exportation** de la biomasse (récolte) ⟹ le sol s'appauvrit en éléments minéraux.
- D'où des **intrants** : engrais (N, P, K), eau d'irrigation, produits phytosanitaires (pesticides), énergie.
- Biodiversité réduite (monoculture) ⟹ plus fragile face aux ravageurs.
Le **rendement** = biomasse produite par unité de surface et de temps.`},
{ titre: 'Impacts et agriculture durable', texte: `
Impacts : pollution des eaux par les nitrates (**eutrophisation** : prolifération d'algues, asphyxie), érosion des sols nus, perte de biodiversité, émissions de gaz à effet de serre, résistance des ravageurs.
Pistes durables : **rotation** des cultures et légumineuses (fixent l'azote), **agroécologie**, lutte biologique (coccinelles contre pucerons), agriculture de conservation (pas de labour, couverts végétaux), réduction des intrants, circuits courts.
! Le défi : nourrir 10 milliards d'humains en 2050 sans détruire les sols et les ressources en eau.`}
],
notions: [
 { terme: 'Agrosystème', def: 'Écosystème géré par l\'humain pour produire de la biomasse exportée (récoltes).' },
 { terme: 'Intrants', def: 'Apports extérieurs nécessaires : engrais, eau, pesticides, énergie.' },
 { terme: 'Exportation de biomasse', def: 'La récolte retire des éléments minéraux du sol, qu\'il faut compenser.' },
 { terme: 'Rendement', def: 'Quantité de biomasse produite par unité de surface et de temps (ex : tonnes/hectare/an).' },
 { terme: 'Eutrophisation', def: 'Excès de nutriments (nitrates, phosphates) dans l\'eau → prolifération d\'algues → manque d\'O₂ → mort de la faune.' },
 { terme: 'Agroécologie', def: 'Agriculture qui s\'appuie sur les mécanismes naturels (rotation, légumineuses, lutte biologique) pour limiter les intrants.' },
 { terme: 'Lutte biologique', def: 'Utiliser un organisme vivant (prédateur, parasite) contre un ravageur à la place d\'un pesticide.' }
],
quiz: [
 { q: 'Pourquoi un agrosystème a-t-il besoin d\'engrais ?', choix: ['Parce que les plantes y poussent mal', 'Parce que la récolte exporte les minéraux du sol', 'Pour tuer les insectes', 'Pour irriguer'], r: 1, exp: 'Dans un écosystème naturel, la matière retourne au sol ; dans un champ, elle part avec la récolte.' },
 { q: 'L\'eutrophisation est causée par…', choix: ['un manque d\'eau', 'un excès de nitrates et phosphates', 'des pesticides', 'le labour'], r: 1, exp: 'Les algues prolifèrent puis consomment l\'oxygène en se décomposant.' },
 { q: 'Les légumineuses sont utiles en rotation car elles…', choix: ['fixent l\'azote de l\'air', 'consomment beaucoup d\'eau', 'tuent les ravageurs', 'poussent vite'], r: 0, exp: 'Leurs bactéries symbiotiques enrichissent le sol en azote : moins d\'engrais.' },
 { q: 'Une monoculture est…', choix: ['plus résistante aux ravageurs', 'plus fragile aux ravageurs', 'plus riche en biodiversité', 'sans intrants'], r: 1, exp: 'Un ravageur adapté trouve une nourriture illimitée, pas de prédateur.' }
],
pieges: ['Opposer naïvement « agriculture = pollution » : l\'enjeu est l\'équilibre production / durabilité, argumente avec les deux faces.'],
astuces: ['Schéma de flux : entrées (intrants, soleil, CO₂) → agrosystème → sorties (récolte, pertes). Il sert pour toutes les questions.'],
exos: [
 { enonce: 'Proposer trois mesures pour réduire l\'usage d\'engrais azotés dans une exploitation de blé, en justifiant.', correction: `1) **Rotation avec des légumineuses** (pois, trèfle) : fixent l'azote atmosphérique dans le sol.
2) **Couverts végétaux** en hiver : limitent le lessivage des nitrates vers les rivières.
3) **Apports fractionnés et dosés** selon les besoins mesurés de la plante : moins de pertes.` }
]},

{ id: 'svt-procreation', theme: 'Corps humain et santé', titre: 'Procréation et sexualité humaine', duree: 30,
cours: [
{ titre: 'Du sexe génétique au sexe phénotypique', texte: `
- **Sexe génétique** : fixé à la fécondation par les chromosomes sexuels : **XX** (femme) ou **XY** (homme). Le chromosome Y porte le gène **SRY**.
- **Sexe gonadique** : avant la 7e semaine, les gonades sont indifférenciées. Si SRY est présent et actif, elles deviennent des **testicules** ; sinon des **ovaires**.
- **Sexe phénotypique** : les testicules produisent de la **testostérone** qui masculinise les voies génitales ; sans hormones, développement féminin.
- À la **puberté**, les hormones (testostérone, œstrogènes) déclenchent les caractères sexuels secondaires et la fonctionnalité des appareils.
L'**identité sexuelle** (genre, orientation) relève de la sphère personnelle et sociale : elle n'est pas déterminée uniquement par la biologie.`},
{ titre: 'Hormones et cycles', texte: `
Chez la femme : cycle ≈ **28 jours**, contrôlé par l'**hypothalamus** (GnRH) et l'**hypophyse** (FSH, LH) qui agissent sur les ovaires. Les ovaires produisent **œstrogènes** et **progestérone** qui font évoluer l'utérus (endomètre). **Ovulation** vers le 14e jour (pic de LH). Sans fécondation : règles.
Chez l'homme : production continue de spermatozoïdes et de testostérone sous contrôle de FSH/LH.
Rétrocontrôle : les hormones ovariennes agissent en retour sur l'hypophyse (négatif la plupart du temps, positif juste avant l'ovulation).`},
{ titre: 'Maîtrise de la procréation', texte: `
- **Contraception** : pilule (œstrogènes + progestatifs : bloque l'ovulation par rétrocontrôle négatif), DIU (stérilet), préservatif (**seul** moyen protégeant aussi des **IST**), implant, patch.
- **Contraception d'urgence** : pilule du lendemain (jusqu'à 3-5 jours), gratuite en pharmacie pour les mineurs.
- **IVG** : légale en France jusqu'à 14 semaines de grossesse (16 semaines d'aménorrhée), gratuite, sans autorisation parentale pour les mineures.
- **PMA** : insémination, FIV (fécondation in vitro), pour les couples infertiles.
- **IST** : chlamydia, HPV (vaccin), VIH, syphilis : dépistage gratuit et anonyme (CeGIDD).`}
],
notions: [
 { terme: 'Sexe génétique', def: 'XX ou XY, déterminé à la fécondation.' },
 { terme: 'Gène SRY', def: 'Gène du chromosome Y qui déclenche la différenciation des gonades en testicules.' },
 { terme: 'Testostérone', def: 'Hormone produite par les testicules ; masculinise les voies génitales et déclenche les caractères sexuels secondaires.' },
 { terme: 'Œstrogènes / progestérone', def: 'Hormones ovariennes qui contrôlent le cycle utérin (épaississement de l\'endomètre).' },
 { terme: 'Hypothalamus / hypophyse', def: 'Centres de commande hormonale (GnRH ; FSH et LH) des gonades.' },
 { terme: 'Ovulation', def: 'Libération d\'un ovocyte par l\'ovaire, vers le 14e jour, déclenchée par le pic de LH.' },
 { terme: 'Rétrocontrôle', def: 'Action en retour des hormones ovariennes sur l\'hypophyse ; base du fonctionnement de la pilule.' },
 { terme: 'Contraception', def: 'Méthodes empêchant une grossesse : pilule, DIU, implant, préservatif (seul protégeant des IST).' },
 { terme: 'IST', def: 'Infections sexuellement transmissibles (VIH, chlamydia, HPV…) ; prévention : préservatif, vaccin HPV, dépistage.' },
 { terme: 'PMA', def: 'Procréation médicalement assistée (insémination, FIV) en cas d\'infertilité.' }
],
quiz: [
 { q: 'Le gène SRY…', choix: ['est sur le chromosome X', 'déclenche la formation des testicules', 'produit des œstrogènes', 'est présent chez les deux sexes'], r: 1, exp: 'Présent sur Y ; sans lui, les gonades deviennent des ovaires.' },
 { q: 'Quel moyen de contraception protège aussi des IST ?', choix: ['La pilule', 'Le DIU', 'Le préservatif', 'L\'implant'], r: 2, exp: 'Seule barrière physique aux agents infectieux.' },
 { q: 'La pilule combinée agit en…', choix: ['tuant les spermatozoïdes', 'bloquant l\'ovulation par rétrocontrôle négatif', 'empêchant les règles', 'détruisant l\'ovocyte'], r: 1, exp: 'Les hormones de synthèse freinent l\'hypophyse : pas de pic de LH, pas d\'ovulation.' },
 { q: 'L\'ovulation a lieu vers le…', choix: ['1er jour', '7e jour', '14e jour', '28e jour'], r: 2, exp: 'Milieu du cycle, après le pic de LH.' },
 { q: 'En France, l\'IVG est légale jusqu\'à…', choix: ['8 semaines de grossesse', '14 semaines de grossesse', '20 semaines', 'la naissance'], r: 1, exp: 'Loi de 2022 : 14 semaines de grossesse (16 SA).' }
],
pieges: ['Confondre sexe génétique (chromosomes), gonadique (organes) et phénotypique (caractères).', 'Dire que la pilule du lendemain est un moyen de contraception régulier.'],
astuces: ['Schéma de la chaîne hormonale à savoir : hypothalamus → hypophyse (FSH/LH) → ovaires (œstrogènes/progestérone) → utérus, avec les flèches de rétrocontrôle.'],
exos: [
 { enonce: 'Un individu XY présente une mutation rendant SRY inactif. Décrire son développement.', correction: `Sans SRY fonctionnel, les gonades indifférenciées deviennent des **ovaires** (voie « par défaut »). Pas de testostérone ⟹ voies génitales et phénotype **féminins**, malgré un sexe génétique XY. Cela montre que SRY est nécessaire à la masculinisation.` }
]},

{ id: 'svt-microbiote', theme: 'Corps humain et santé', titre: 'Microbiote humain et santé', duree: 20,
cours: [
{ titre: 'Le microbiote', texte: `
Le **microbiote** = ensemble des micro-organismes (bactéries surtout, mais aussi levures, virus) vivant sur et dans notre corps : peau, bouche, vagin, et surtout **intestin** (≈ 10¹³ bactéries, autant que nos cellules, ≈ 1-2 kg).
Il s'acquiert à la **naissance** (voie basse vs césarienne), évolue avec l'alimentation (allaitement, fibres) et se stabilise vers 3 ans. Chaque personne a un microbiote unique.
C'est une **symbiose** (mutualisme) : nous l'hébergeons et le nourrissons, il nous rend des services.`},
{ titre: 'Rôles et déséquilibres', texte: `
Rôles : digestion des fibres, production de vitamines (K, B), **barrière** contre les pathogènes (effet de compétition), **éducation du système immunitaire**, influence sur le métabolisme et peut-être l'humeur (axe intestin-cerveau).
**Dysbiose** (déséquilibre) : causée par antibiotiques, alimentation pauvre en fibres, stress ; associée à obésité, maladies inflammatoires de l'intestin, allergies.
Agir : alimentation riche en fibres et variée, probiotiques, usage raisonné des antibiotiques, **transplantation fécale** (traitement d'infections à *Clostridium difficile*).`}
],
notions: [
 { terme: 'Microbiote', def: 'Ensemble des micro-organismes vivant en symbiose sur/dans un organisme ; le plus important est intestinal.' },
 { terme: 'Symbiose', def: 'Association durable à bénéfice mutuel entre deux organismes.' },
 { terme: 'Acquisition du microbiote', def: 'Commence à la naissance (contact avec le microbiote maternel), se diversifie avec l\'alimentation, se stabilise vers 3 ans.' },
 { terme: 'Effet barrière', def: 'Le microbiote occupe l\'espace et les ressources, empêchant l\'installation de pathogènes.' },
 { terme: 'Dysbiose', def: 'Déséquilibre du microbiote (antibiotiques, alimentation), associé à diverses maladies.' },
 { terme: 'Probiotiques / fibres', def: 'Micro-organismes vivants bénéfiques / nutriments des bonnes bactéries intestinales.' }
],
quiz: [
 { q: 'Le microbiote intestinal est surtout composé de…', choix: ['virus', 'bactéries', 'cellules humaines', 'champignons'], r: 1, exp: 'Environ 10¹³ bactéries.' },
 { q: 'Un traitement antibiotique peut provoquer…', choix: ['une symbiose', 'une dysbiose', 'une augmentation du microbiote', 'rien'], r: 1, exp: 'Il tue aussi les bactéries bénéfiques.' },
 { q: 'Le microbiote se met en place…', choix: ['avant la naissance uniquement', 'dès la naissance', 'à la puberté', 'à l\'âge adulte'], r: 1, exp: 'Au contact du microbiote maternel et de l\'environnement.' },
 { q: 'Quel aliment favorise un microbiote diversifié ?', choix: ['Sucres rapides', 'Fibres (légumes, légumineuses)', 'Viande rouge', 'Sodas'], r: 1, exp: 'Les fibres nourrissent les bactéries bénéfiques.' }
],
pieges: ['Dire que toutes les bactéries sont dangereuses : la plupart de celles de notre corps sont indispensables.'],
astuces: ['Résume en une phrase : « le microbiote est un organe à part entière, acquis, unique et modifiable ».'],
exos: [
 { enonce: 'Des souris sans microbiote (axéniques) ont un système immunitaire sous-développé. Que peut-on en conclure ?', correction: `Le microbiote est **nécessaire à la maturation du système immunitaire** : sans contact avec des micro-organismes, les défenses ne s'entraînent pas. C'est une preuve expérimentale du rôle éducatif du microbiote.` }
]}
]});
