window.PROGRAMME = window.PROGRAMME || [];
window.PROGRAMME.push({
id: 'histoire', nom: 'Histoire', couleur: '#f59e0b',
desc: "« Grandes étapes de la formation du monde moderne » : Méditerranée antique et médiévale, XVe-XVIe siècles, l'État moderne en France et en Angleterre, les XVIIe-XVIIIe siècles. Dates repères, vocabulaire et explication des causes et conséquences.",
ressources: [
 { nom: 'Lumni Histoire 2nde', url: 'https://www.lumni.fr/lycee/seconde/histoire', desc: 'Vidéos courtes par chapitre.' },
 { nom: 'Kartable Histoire 2nde', url: 'https://www.kartable.fr/seconde/histoire', desc: 'Fiches de cours et frises.' },
 { nom: 'Nota Bene / Histoire (YouTube)', url: 'https://www.youtube.com/results?search_query=histoire+seconde+cours', desc: 'Pour comprendre le contexte de façon vivante.' },
 { nom: 'Programme officiel', url: 'https://eduscol.education.fr/1646/programmes-et-ressources-en-histoire-geographie-voie-gt', desc: 'Les 4 thèmes et les points de passage obligatoires.' }
],
chapitres: [
{ id: 'h-athenes-rome', theme: 'Le monde méditerranéen : empreintes de l\'Antiquité et du Moyen Âge', titre: 'La Méditerranée antique : Athènes et Rome', duree: 35,
cours: [
{ titre: 'Athènes, la démocratie (Ve siècle av. J.-C.)', texte: `
- **Cité** (polis) : petit État indépendant (ville + campagne). Athènes invente la **démocratie** : réformes de Clisthène (508 av. J.-C.), apogée sous **Périclès** (vers 450-429).
- **Citoyens** : hommes libres, nés de père (puis de deux parents) athéniens, ayant fait l'éphébie. ≈ 40 000 sur 300 000 habitants. **Exclus** : femmes, métèques (étrangers), esclaves.
- Institutions : **Ecclésia** (assemblée de tous les citoyens, vote les lois sur la Pnyx), **Boulè** (500 tirés au sort, préparent les lois), **Héliée** (tribunal), **stratèges** (élus, dirigent l'armée ; Périclès 15 fois).
- Démocratie **directe** : on vote soi-même, pas de députés. Le **tirage au sort** est jugé plus démocratique que l'élection. **Ostracisme** : bannissement de 10 ans voté contre un citoyen dangereux.
- Guerres **médiques** contre les Perses (Marathon 490, Salamine 480) ⟹ Ligue de Délos, Athènes domine la mer Égée. Guerre du **Péloponnèse** (431-404) contre Sparte : défaite d'Athènes.
- Le **Parthénon** (447-432) : temple d'Athéna sur l'Acropole, symbole de la puissance.`},
{ titre: 'Rome : de la République à l\'Empire', texte: `
- **République** (509-27 av. J.-C.) : pouvoir partagé entre les **consuls** (2, élus pour 1 an), le **Sénat** (anciens magistrats, en pratique le vrai pouvoir), les **comices** (assemblées du peuple). Société inégalitaire : patriciens / plébéiens, citoyens / esclaves.
- Conquêtes : toute la Méditerranée (« mare nostrum »), Gaule par **César** (58-51). Guerres civiles ⟹ César dictateur, assassiné en **44 av. J.-C.**
- **Auguste** (Octave) : en **27 av. J.-C.** reçoit le titre d'Augustus et fonde le **Principat** : un empereur concentrant les pouvoirs tout en gardant les apparences républicaines. Pax Romana.
- **Romanisation** : diffusion de la langue (latin), du droit, du mode de vie (thermes, forum, amphithéâtre) dans les provinces. **Édit de Caracalla (212)** : citoyenneté à tous les hommes libres de l'Empire.
- **Christianisme** : né en Judée, persécuté puis toléré (édit de Milan, **Constantin, 313**), religion officielle en 380 (Théodose).
! Point de passage : « Constantin, empereur d'un empire qui se christianise et se réorganise territorialement » (fondation de Constantinople en 330).`}
],
notions: [
 { terme: 'Cité (polis)', def: 'Petit État indépendant grec composé d\'une ville et de sa campagne, avec ses propres lois.' },
 { terme: 'Démocratie directe', def: 'Régime où les citoyens votent eux-mêmes les lois (Ecclésia) sans représentants.' },
 { terme: 'Citoyen athénien', def: 'Homme libre, né de parents athéniens, ayant fait son service militaire (éphébie) ; ≈ 15 % de la population.' },
 { terme: 'Ecclésia', def: 'Assemblée de tous les citoyens athéniens, qui vote les lois, la guerre et la paix.' },
 { terme: 'Boulè', def: 'Conseil de 500 citoyens tirés au sort qui prépare les lois.' },
 { terme: 'Périclès', def: 'Stratège athénien réélu 15 fois (≈ 450-429 av. J.-C.), symbole de l\'apogée de la démocratie et du Parthénon.' },
 { terme: 'Ostracisme', def: 'Vote d\'exil de 10 ans contre un citoyen jugé dangereux pour la démocratie.' },
 { terme: 'République romaine', def: '509-27 av. J.-C. : pouvoir partagé entre consuls, Sénat et comices ; dominé par l\'aristocratie.' },
 { terme: 'Auguste et le Principat', def: 'En 27 av. J.-C., Octave devient Auguste : premier empereur, concentre les pouvoirs sous des formes républicaines.' },
 { terme: 'Romanisation', def: 'Diffusion de la langue, du droit, de l\'urbanisme et des modes de vie romains dans les provinces conquises.' },
 { terme: 'Édit de Caracalla (212)', def: 'Accorde la citoyenneté romaine à tous les hommes libres de l\'Empire.' },
 { terme: 'Constantin (313)', def: 'Empereur qui légalise le christianisme (édit de Milan) et fonde Constantinople (330).' }
],
quiz: [
 { q: 'Qui fait partie des citoyens à Athènes ?', choix: ['Toutes les personnes nées à Athènes', 'Les hommes libres nés de parents athéniens', 'Les hommes et les femmes libres', 'Tous les habitants'], r: 1, exp: 'Femmes, métèques et esclaves sont exclus.' },
 { q: 'L\'Ecclésia est…', choix: ['un tribunal', 'l\'assemblée des citoyens', 'un conseil de 500', 'l\'armée'], r: 1, exp: 'Elle se réunit sur la Pnyx et vote les lois.' },
 { q: 'En 27 av. J.-C.…', choix: ['César est assassiné', 'Rome devient une République', 'Octave devient Auguste, premier empereur', 'Constantin se convertit'], r: 2, exp: 'Début du Principat / de l\'Empire.' },
 { q: 'L\'édit de Caracalla (212)…', choix: ['interdit le christianisme', 'donne la citoyenneté à tous les hommes libres de l\'Empire', 'divise l\'Empire', 'fonde Constantinople'], r: 1, exp: 'Étape finale de la romanisation.' },
 { q: 'L\'édit de Milan (313) est pris par…', choix: ['Auguste', 'Périclès', 'Constantin', 'Théodose'], r: 2, exp: 'Il autorise le christianisme ; Théodose en fera la religion officielle en 380.' },
 { q: 'À Athènes, les stratèges sont…', choix: ['tirés au sort', 'élus', 'nommés par Périclès', 'des esclaves'], r: 1, exp: 'Fonction militaire trop importante pour le hasard : élection annuelle.' }
],
pieges: ['Dire que la démocratie athénienne est « comme la nôtre » : elle est directe, limitée à 15 % de la population, esclavagiste.', 'Confondre République romaine (avant 27 av. J.-C.) et Empire (après).', 'Oublier « av. J.-C. » dans les dates : 44 et 44 av. J.-C. sont séparés de 88 ans.'],
astuces: ['Apprends une frise minimale : 508 (Clisthène) – 490/480 (guerres médiques) – 431-404 (Péloponnèse) – 509 (République) – 44 (mort de César) – 27 (Auguste) – 212 (Caracalla) – 313 (Milan) – 380 (Théodose).', 'Pour une question de cours, structure : contexte, acteurs, institutions, limites.'],
exos: [
 { enonce: 'Question problématisée : en quoi la démocratie athénienne est-elle à la fois novatrice et limitée ?', correction: `**Novatrice** : pouvoir au peuple (Ecclésia), tirage au sort (Boulè, Héliée), égalité devant la loi (isonomie), liberté de parole (iségoria), rémunération des charges sous Périclès.
**Limitée** : citoyenneté réservée à 15 % de la population (exclusion des femmes, métèques, esclaves), influence des grands orateurs et des stratèges, société reposant sur l'esclavage, impérialisme sur les alliés de la ligue de Délos.` }
]},

{ id: 'h-mediterranee-medievale', theme: 'Le monde méditerranéen : empreintes de l\'Antiquité et du Moyen Âge', titre: 'La Méditerranée médiévale : espace d\'échanges et de conflits', duree: 30,
cours: [
{ titre: 'Trois civilisations', texte: `
Entre le XIe et le XIIIe siècle, trois ensembles se partagent la Méditerranée :
- **L'Occident chrétien** (catholique, latin) : royaumes féodaux, autorité du **pape** à Rome ; essor économique et urbain, villes marchandes italiennes (Venise, Gênes).
- **L'Empire byzantin** (chrétien **orthodoxe**, grec) : capitale **Constantinople**, empereur (basileus) à la tête de l'Église. **Schisme de 1054** avec Rome.
- **Le monde musulman** : divisé entre **califats** (Abbassides de Bagdad, Fatimides du Caire, Omeyyades de Cordoue) ; sunnites et chiites. Civilisation brillante (sciences, Bagdad, Cordoue).`},
{ titre: 'Conflits', texte: `
- **Croisades** (1095-1291) : appel du pape Urbain II à Clermont (**1095**), prise de Jérusalem (1099), États latins d'Orient, reconquête par Saladin (1187), chute d'Acre (1291). La **4e croisade (1204)** pille Constantinople : chrétiens contre chrétiens.
- **Reconquista** : reconquête de l'Espagne musulmane par les royaumes chrétiens (Tolède 1085, Las Navas de Tolosa 1212, Grenade **1492**).
- **Djihad** et expansion turque : les Turcs seldjoukides prennent l'Anatolie (Manzikert 1071).`},
{ titre: 'Échanges et contacts', texte: `
- **Commerce** : Venise et Gênes font le lien entre Orient (épices, soie) et Occident (draps, bois, métaux). Comptoirs, **lettres de change**.
- **Transferts culturels** : traduction en latin des savoirs grecs et arabes (Tolède, Palerme) ; chiffres « arabes » (indiens), algèbre, médecine (Avicenne), philosophie (Averroès commentant Aristote).
- **Sicile normande** (Roger II, XIIe s.) et **Espagne** (al-Andalus) : coexistence (pas toujours pacifique) de chrétiens, musulmans et juifs. Mudéjars, mozarabes.
! Point de passage : Venise, grande puissance maritime et commerciale ; Bernard de Clairvaux et la 2e croisade.`}
],
notions: [
 { terme: 'Empire byzantin', def: 'Empire romain d\'Orient, chrétien orthodoxe, de langue grecque, capitale Constantinople, dirigé par le basileus.' },
 { terme: 'Schisme de 1054', def: 'Rupture définitive entre l\'Église catholique (Rome, pape) et l\'Église orthodoxe (Constantinople, patriarche).' },
 { terme: 'Califat', def: 'État musulman dirigé par un calife, successeur du Prophète (Abbassides à Bagdad, Fatimides au Caire, Omeyyades à Cordoue).' },
 { terme: 'Croisade', def: 'Expédition militaire chrétienne prêchée par le pape pour reprendre Jérusalem (1re en 1095-1099 ; fin en 1291).' },
 { terme: 'Reconquista', def: 'Reconquête de la péninsule Ibérique par les royaumes chrétiens, du VIIIe siècle à 1492 (Grenade).' },
 { terme: 'Djihad', def: 'Effort pour la foi musulmane, pouvant prendre la forme d\'une guerre sainte.' },
 { terme: 'Venise', def: 'République maritime dominant le commerce entre Orient et Occident (épices, soie), comptoirs et flotte puissante.' },
 { terme: 'Transferts culturels', def: 'Circulation des savoirs (traductions à Tolède, Palerme) : sciences grecques et arabes vers l\'Occident latin.' },
 { terme: 'Al-Andalus', def: 'Espagne musulmane ; lieu de coexistence et d\'échanges entre musulmans, chrétiens et juifs.' }
],
quiz: [
 { q: 'La 1re croisade est lancée en…', choix: ['1054', '1095', '1204', '1291'], r: 1, exp: 'Appel d\'Urbain II à Clermont.' },
 { q: 'Constantinople est la capitale…', choix: ['du califat abbasside', 'de l\'Empire byzantin', 'du royaume de France', 'de Venise'], r: 1, exp: 'Empire chrétien orthodoxe de langue grecque.' },
 { q: 'Le schisme de 1054 sépare…', choix: ['sunnites et chiites', 'catholiques et orthodoxes', 'chrétiens et musulmans', 'Venise et Gênes'], r: 1, exp: 'Rome vs Constantinople.' },
 { q: 'La Reconquista s\'achève en…', choix: ['1212', '1291', '1453', '1492'], r: 3, exp: 'Prise de Grenade par les Rois catholiques.' },
 { q: 'Tolède au XIIe siècle est célèbre pour…', choix: ['ses croisades', 'ses traductions de l\'arabe au latin', 'sa flotte', 'son califat'], r: 1, exp: 'Les savoirs grecs et arabes passent en Occident.' },
 { q: 'En 1204, la 4e croisade…', choix: ['prend Jérusalem', 'pille Constantinople', 'reprend Grenade', 'fonde Venise'], r: 1, exp: 'Des chrétiens latins pillent la capitale chrétienne orthodoxe.' }
],
pieges: ['Présenter la Méditerranée médiévale uniquement comme un lieu de guerre : le programme insiste sur « échanges ET conflits ».', 'Confondre orthodoxes (Byzance) et catholiques (Rome).'],
astuces: ['Tableau à 3 colonnes (Occident / Byzance / Islam) : religion, langue, capitale, chef, points forts. Il résume tout le chapitre.'],
exos: [
 { enonce: 'Montrer que la Méditerranée médiévale est un espace d\'échanges malgré les conflits.', correction: `Conflits : croisades, Reconquista, djihad, schisme. Mais : commerce de Venise et Gênes avec l'Orient musulman et byzantin (épices, soie) ; traductions à Tolède et Palerme (Averroès, Avicenne, mathématiques) ; coexistence en Sicile et en al-Andalus ; techniques (papier, boussole, chiffres). La guerre n'empêche pas la circulation des biens et des idées, elle la favorise parfois (États latins = comptoirs).` }
]},

{ id: 'h-decouvertes', theme: 'XVe-XVIe siècle : un nouveau rapport au monde', titre: 'L\'ouverture atlantique : grandes découvertes et premiers empires', duree: 30,
cours: [
{ titre: 'Pourquoi partir ?', texte: `
- **Causes** : recherche d'une route vers les épices d'Asie sans passer par les Ottomans (prise de **Constantinople en 1453**) ; soif d'or et d'argent ; esprit de croisade et évangélisation ; curiosité de la Renaissance.
- **Moyens** : caravelle, boussole, astrolabe, portulans ; financement par les monarchies ibériques.
- Portugal : **Vasco de Gama** atteint l'Inde par le cap de Bonne-Espérance (**1498**). Espagne : **Christophe Colomb** en Amérique (**1492**). **Magellan** : premier tour du monde (1519-1522). Traité de **Tordesillas (1494)** : le pape partage le monde entre Espagne et Portugal.`},
{ titre: 'Conquête et empires', texte: `
- **Cortés** détruit l'Empire aztèque (1519-1521), **Pizarro** l'Empire inca (1532). Supériorité militaire (armes à feu, chevaux), alliances avec des peuples soumis, et surtout **maladies** (variole) : effondrement démographique des Amérindiens (−90 % en un siècle).
- **Encomienda**, mines d'argent (**Potosí**), plantations ⟹ **traite atlantique** des esclaves africains dès le XVIe siècle (commerce triangulaire).
- Débats : **controverse de Valladolid (1550)** : Las Casas défend l'humanité des Indiens contre Sepúlveda.
- **Échange colombien** : maïs, pomme de terre, tomate, cacao vers l'Europe ; blé, cheval, canne à sucre, maladies vers l'Amérique.
- Résultat : l'Europe devient le centre d'une **première mondialisation** ; afflux de métaux précieux ; Séville puis Anvers, Amsterdam.`}
],
notions: [
 { terme: '1453', def: 'Prise de Constantinople par les Ottomans : fin de l\'Empire byzantin, routes vers l\'Orient perturbées.' },
 { terme: '1492', def: 'Colomb atteint les Caraïbes (Amérique) pour l\'Espagne ; prise de Grenade ; expulsion des juifs d\'Espagne.' },
 { terme: 'Vasco de Gama (1498)', def: 'Navigateur portugais ouvrant la route maritime des Indes par le cap de Bonne-Espérance.' },
 { terme: 'Magellan (1519-1522)', def: 'Première circumnavigation, prouvant la sphéricité de la Terre et l\'unité des océans.' },
 { terme: 'Traité de Tordesillas (1494)', def: 'Partage du monde à découvrir entre Espagne et Portugal, sous l\'autorité du pape.' },
 { terme: 'Conquistadores', def: 'Conquérants espagnols (Cortés, Pizarro) qui soumettent les empires aztèque et inca.' },
 { terme: 'Choc microbien', def: 'Épidémies (variole, rougeole) apportées par les Européens, causant la mort de la majorité des Amérindiens.' },
 { terme: 'Traite atlantique', def: 'Déportation d\'Africains réduits en esclavage vers les plantations et mines d\'Amérique (commerce triangulaire).' },
 { terme: 'Controverse de Valladolid (1550)', def: 'Débat sur la nature des Indiens : Las Casas (humains, à protéger) contre Sepúlveda.' },
 { terme: 'Échange colombien', def: 'Transferts de plantes, animaux, maladies entre Ancien et Nouveau Monde après 1492.' }
],
quiz: [
 { q: 'Qui atteint l\'Inde par la mer en 1498 ?', choix: ['Colomb', 'Magellan', 'Vasco de Gama', 'Cortés'], r: 2, exp: 'Pour le Portugal, par le cap de Bonne-Espérance.' },
 { q: 'Le traité de Tordesillas (1494) partage le monde entre…', choix: ['France et Angleterre', 'Espagne et Portugal', 'Venise et Gênes', 'Ottomans et Espagne'], r: 1, exp: 'Sous l\'arbitrage du pape.' },
 { q: 'Principale cause de l\'effondrement démographique amérindien ?', choix: ['Les combats', 'Les maladies européennes', 'La famine', 'Les migrations'], r: 1, exp: 'Variole, rougeole : aucune immunité.' },
 { q: 'La controverse de Valladolid (1550) porte sur…', choix: ['la route des Indes', 'l\'humanité des Indiens', 'le partage de l\'Amérique', 'la Réforme'], r: 1, exp: 'Las Casas vs Sepúlveda.' },
 { q: 'Quelle plante vient d\'Amérique ?', choix: ['Le blé', 'La canne à sucre', 'La pomme de terre', 'Le riz'], r: 2, exp: 'Avec le maïs, la tomate, le cacao, le tabac.' }
],
pieges: ['Dire que Colomb « découvre » l\'Amérique : des millions de personnes y vivaient ; dis « atteint » ou « arrive en ».', 'Oublier la dimension religieuse (évangélisation) des motivations.'],
astuces: ['Schéma causes → moyens → acteurs → conséquences (démographiques, économiques, culturelles) : la structure parfaite pour une question problématisée.'],
exos: [
 { enonce: 'Expliquer pourquoi quelques centaines d\'Espagnols ont pu vaincre l\'Empire aztèque.', correction: `Supériorité technique (acier, arquebuses, chevaux), alliances avec les peuples soumis aux Aztèques (Tlaxcaltèques), stratégie de Cortés (capture de Moctezuma), et surtout l'épidémie de variole qui ravage Tenochtitlan en 1520-1521. Conquête achevée en 1521.` }
]},

{ id: 'h-renaissance', theme: 'XVe-XVIe siècle : un nouveau rapport au monde', titre: 'Renaissance, humanisme et réformes religieuses', duree: 30,
cours: [
{ titre: 'Humanisme et Renaissance', texte: `
- **Humanisme** (XVe-XVIe) : mouvement intellectuel qui place l'**homme** au centre, redécouvre les textes antiques (grec, latin, hébreu), croit en l'**éducation** et le progrès. **Érasme** (Éloge de la folie, 1511), **Rabelais**, **Montaigne**, **Thomas More** (Utopie).
- **Imprimerie** (Gutenberg, vers **1450**) : diffusion massive des livres et des idées, baisse du prix, essor de l'alphabétisation. Facteur clé de la Réforme.
- **Renaissance artistique** : née en Italie (Florence, Médicis), perspective, anatomie, retour à l'Antiquité, **mécénat**. Léonard de Vinci, Michel-Ange, Raphaël ; en France, François Ier (Chambord, Fontainebleau).
- **Révolution scientifique** : Copernic (**héliocentrisme**, 1543), puis Galilée, Kepler, Vésale (anatomie).`},
{ titre: 'Réformes et guerres de religion', texte: `
- Critiques de l'Église : richesse, indulgences, ignorance du clergé.
- **Luther** : 95 thèses (**1517**) ; salut par la **foi seule**, autorité de la **Bible seule**, rejet du pape ; traduction de la Bible en allemand. Excommunié en 1521. Diffusion en Allemagne, Scandinavie.
- **Calvin** : à Genève (1541), **prédestination**, Église austère ; diffusion en France (huguenots), Pays-Bas, Écosse.
- **Henri VIII** : Église anglicane (1534), le roi à la tête de l'Église.
- **Contre-Réforme / Réforme catholique** : **concile de Trente (1545-1563)** réaffirme les dogmes, forme le clergé, Jésuites, art baroque.
- **Guerres de religion en France** (1562-1598) : massacre de la **Saint-Barthélemy (24 août 1572)**. **Édit de Nantes (1598)** par **Henri IV** : liberté de culte limitée aux protestants, paix civile.`}
],
notions: [
 { terme: 'Humanisme', def: 'Mouvement intellectuel des XVe-XVIe siècles plaçant l\'homme au centre, fondé sur l\'étude des textes antiques et la confiance en l\'éducation.' },
 { terme: 'Érasme', def: 'Humaniste hollandais (1466-1536), « prince des humanistes », Éloge de la folie, prône une réforme pacifique de l\'Église.' },
 { terme: 'Imprimerie (v. 1450)', def: 'Invention de Gutenberg permettant la diffusion rapide des livres et des idées (humanisme, Réforme).' },
 { terme: 'Mécénat', def: 'Soutien financier d\'un riche (Médicis, François Ier) aux artistes et savants.' },
 { terme: 'Héliocentrisme', def: 'Théorie de Copernic (1543) : la Terre tourne autour du Soleil ; contredit l\'Église.' },
 { terme: 'Luther et les 95 thèses (1517)', def: 'Moine allemand dénonçant les indulgences ; salut par la foi seule, Bible seule ; naissance du protestantisme.' },
 { terme: 'Calvin', def: 'Réformateur français installé à Genève (1541) ; prédestination ; influence en France (huguenots).' },
 { terme: 'Concile de Trente (1545-1563)', def: 'Réponse catholique à la Réforme : réaffirmation des dogmes, formation des prêtres, Jésuites.' },
 { terme: 'Saint-Barthélemy (24 août 1572)', def: 'Massacre de milliers de protestants à Paris puis en province pendant les guerres de religion.' },
 { terme: 'Édit de Nantes (1598)', def: 'Henri IV accorde la liberté de conscience et un culte limité aux protestants : fin des guerres de religion.' }
],
quiz: [
 { q: 'Luther affiche ses 95 thèses en…', choix: ['1492', '1517', '1545', '1598'], r: 1, exp: 'Contre les indulgences, à Wittenberg.' },
 { q: 'Quelle invention accélère la diffusion de l\'humanisme et de la Réforme ?', choix: ['La boussole', 'L\'imprimerie', 'La caravelle', 'Le télescope'], r: 1, exp: 'Gutenberg vers 1450.' },
 { q: 'Le concile de Trente est…', choix: ['une réunion protestante', 'la réponse catholique à la Réforme', 'un traité de paix', 'une université'], r: 1, exp: 'Réforme catholique / Contre-Réforme.' },
 { q: 'L\'édit de Nantes (1598) est signé par…', choix: ['François Ier', 'Henri IV', 'Louis XIV', 'Charles IX'], r: 1, exp: 'Il met fin aux guerres de religion.' },
 { q: 'Copernic défend…', choix: ['le géocentrisme', 'l\'héliocentrisme', 'la prédestination', 'les indulgences'], r: 1, exp: 'Le Soleil au centre (1543).' },
 { q: 'Pour Luther, le salut s\'obtient par…', choix: ['les bonnes œuvres', 'les indulgences', 'la foi seule', 'le pape'], r: 2, exp: '« Sola fide », « sola scriptura ».' }
],
pieges: ['Confondre Réforme (protestante) et Contre-Réforme (catholique).', 'Dire que l\'édit de Nantes instaure l\'égalité religieuse : il tolère un culte protestant limité, le catholicisme reste religion d\'État.'],
astuces: ['Retenir le trio humanisme / Renaissance / Réforme comme trois faces d\'un même mouvement : retour aux textes (antiques, Bible), esprit critique, imprimerie.'],
exos: [
 { enonce: 'Pourquoi peut-on dire que l\'imprimerie est une « révolution » ?', correction: `Avant : copie manuscrite, livres rares et chers. Après Gutenberg (v. 1450) : des millions d'exemplaires en 50 ans, prix divisé, textes standardisés. Effets : diffusion des textes antiques (humanisme), de la Bible en langue vulgaire et des thèses de Luther (Réforme), des découvertes scientifiques. L'information échappe au contrôle de l'Église et des princes.` }
]},

{ id: 'h-etat-moderne', theme: 'L\'État à l\'époque moderne : France et Angleterre', titre: 'L\'affirmation de l\'État dans le royaume de France', duree: 30,
cours: [
{ titre: 'Construction de l\'État monarchique', texte: `
- **François Ier** (1515-1547) : **ordonnance de Villers-Cotterêts (1539)** : le français remplace le latin dans les actes officiels ; **concordat de Bologne (1516)** : le roi nomme les évêques. Cour itinérante puis Louvre, Fontainebleau.
- **Henri IV** (1589-1610) : rétablit la paix (édit de Nantes), relève l'économie avec Sully.
- **Louis XIII et Richelieu** (1624-1642) : soumission des protestants (siège de La Rochelle, 1628), abaissement des grands, **intendants** dans les provinces, guerre contre les Habsbourg.
- **Fronde** (1648-1653) : révolte des parlements et des nobles pendant la minorité de Louis XIV ; traumatisme qui le pousse à l'absolutisme.`},
{ titre: 'Louis XIV et l\'absolutisme', texte: `
- **Monarchie absolue de droit divin** : le roi tient son pouvoir de Dieu, concentre les pouvoirs législatif, exécutif, judiciaire ; mais est limité par les **lois fondamentales** et les coutumes. Louis XIV règne personnellement à partir de **1661** (mort de Mazarin).
- Outils : **Versailles** (1682, la cour domestique la noblesse), **Colbert** (mercantilisme, manufactures, marine), **intendants**, armée permanente (Louvois), **lettres de cachet**, contrôle des parlements.
- **Révocation de l'édit de Nantes (1685)** : interdiction du protestantisme ; fuite de 200 000 huguenots.
- Guerres incessantes (Hollande, ligue d'Augsbourg, succession d'Espagne) ⟹ dettes, famines (1693, 1709).
! Point de passage : « Louis XIV à Versailles : la mise en scène du pouvoir » ; « Colbert et le développement économique ».`},
{ titre: 'Le modèle anglais : monarchie parlementaire', texte: `
- **Révolution anglaise** (1642-1649) : conflit entre le roi Charles Ier et le **Parlement** ; Charles Ier exécuté en **1649** ; république de Cromwell ; restauration en 1660.
- **Glorieuse Révolution (1688)** : Jacques II chassé ; Guillaume d'Orange accepte le **Bill of Rights (1689)** : le roi ne peut ni lever d'impôts ni suspendre les lois sans le Parlement ; liberté des élections et des débats.
- **Habeas corpus (1679)** : pas d'emprisonnement arbitraire.
- Résultat : **monarchie parlementaire**, modèle pour les Lumières (Montesquieu, Voltaire).`}
],
notions: [
 { terme: 'Ordonnance de Villers-Cotterêts (1539)', def: 'François Ier impose le français dans les actes administratifs et judiciaires.' },
 { terme: 'Monarchie absolue de droit divin', def: 'Le roi tient son pouvoir de Dieu et concentre tous les pouvoirs, dans le respect des lois fondamentales.' },
 { terme: 'Richelieu', def: 'Principal ministre de Louis XIII (1624-1642) : renforce l\'autorité royale contre les protestants et les grands.' },
 { terme: 'Fronde (1648-1653)', def: 'Révolte des parlements et de la noblesse contre Mazarin pendant la minorité de Louis XIV.' },
 { terme: 'Intendants', def: 'Représentants du roi dans les provinces (justice, police, finances), outils de la centralisation.' },
 { terme: 'Versailles (1682)', def: 'Résidence royale et siège du gouvernement ; mise en scène du pouvoir et domestication de la noblesse.' },
 { terme: 'Colbert', def: 'Ministre de Louis XIV : mercantilisme (exporter plus qu\'importer), manufactures, marine, compagnies de commerce.' },
 { terme: 'Révocation de l\'édit de Nantes (1685)', def: 'Édit de Fontainebleau : interdiction du protestantisme, exil de 200 000 huguenots.' },
 { terme: 'Bill of Rights (1689)', def: 'Texte limitant le pouvoir du roi d\'Angleterre au profit du Parlement : naissance de la monarchie parlementaire.' },
 { terme: 'Habeas corpus (1679)', def: 'Loi anglaise interdisant la détention arbitraire : tout prisonnier doit être présenté à un juge.' }
],
quiz: [
 { q: 'L\'ordonnance de Villers-Cotterêts (1539)…', choix: ['impose le latin', 'impose le français dans les actes officiels', 'crée les intendants', 'révoque l\'édit de Nantes'], r: 1, exp: 'François Ier.' },
 { q: 'Louis XIV commence à gouverner seul en…', choix: ['1643', '1661', '1682', '1685'], r: 1, exp: 'À la mort de Mazarin.' },
 { q: 'La révocation de l\'édit de Nantes a lieu en…', choix: ['1598', '1648', '1685', '1715'], r: 2, exp: 'Édit de Fontainebleau.' },
 { q: 'Le Bill of Rights (1689)…', choix: ['renforce le roi', 'limite le roi au profit du Parlement', 'crée la république', 'exécute Charles Ier'], r: 1, exp: 'Après la Glorieuse Révolution.' },
 { q: 'Le mercantilisme de Colbert consiste à…', choix: ['tout importer', 'exporter plus qu\'importer pour accumuler l\'or', 'supprimer les impôts', 'abolir les manufactures'], r: 1, exp: 'Manufactures royales, protectionnisme, compagnies.' },
 { q: 'La Fronde est…', choix: ['une guerre contre l\'Espagne', 'une révolte contre Mazarin', 'une fête à Versailles', 'une réforme religieuse'], r: 1, exp: '1648-1653, pendant la minorité de Louis XIV.' }
],
pieges: ['« Absolu » ne veut pas dire « sans limites » : le roi respecte les lois fondamentales (succession, catholicisme, inaliénabilité du domaine).', 'Confondre révolution anglaise (1642-1649, exécution du roi) et Glorieuse Révolution (1688, sans sang).'],
astuces: ['Compare toujours France (absolutisme) / Angleterre (parlementarisme) sur : qui vote l\'impôt, qui fait la loi, place de la religion.'],
exos: [
 { enonce: 'Comment Louis XIV met-il en scène son pouvoir à Versailles ?', correction: `Architecture grandiose (galerie des Glaces, jardins de Le Nôtre), symbolique solaire (le Roi-Soleil), étiquette réglant chaque geste (lever, coucher), la noblesse logée et surveillée dépend des pensions et faveurs ; arts au service du roi (Lully, Molière, Le Brun) ; portraits officiels (Rigaud, 1701). Versailles devient l'image de la monarchie absolue en Europe.` }
]},

{ id: 'h-lumieres', theme: 'Dynamiques et ruptures dans les sociétés des XVIIe et XVIIIe siècles', titre: 'Les Lumières et les évolutions de la société française', duree: 30,
cours: [
{ titre: 'Les Lumières', texte: `
Mouvement intellectuel du XVIIIe siècle qui veut éclairer les hommes par la **raison**, contre l'ignorance, l'intolérance et l'absolutisme.
- **Montesquieu** : *De l'esprit des lois* (1748), **séparation des pouvoirs**, admiration du modèle anglais.
- **Voltaire** : combat pour la **tolérance** (affaire Calas, 1762), contre le fanatisme.
- **Rousseau** : *Du contrat social* (1762), **souveraineté du peuple**, volonté générale.
- **Diderot et d'Alembert** : l'**Encyclopédie** (1751-1772), 28 volumes, somme des savoirs, critique indirecte de l'absolutisme et de l'Église.
Diffusion : **salons** (Mme Geoffrin), cafés, académies, loges maçonniques, journaux, librairies clandestines (livres interdits, censure).
Les despotes éclairés (Frédéric II, Catherine II) appliquent certaines idées sans renoncer au pouvoir absolu.`},
{ titre: 'Sciences et société', texte: `
- **Révolution scientifique** : Newton (gravitation, 1687), Lavoisier (chimie), Buffon (histoire naturelle), Linné (classification). Académies des sciences, expéditions (Bougainville, Cook).
- **Essor de la bourgeoisie** : commerce atlantique (Bordeaux, Nantes, traite négrière), manufactures, banques. Une élite riche mais sans pouvoir politique dans une société d'**ordres** (clergé, noblesse, tiers état).
- **Émilie du Châtelet** (point de passage) : physicienne, traduit Newton ; symbole des femmes savantes malgré leur exclusion des académies.
- **Esclavage** : critiqué par les Lumières (Montesquieu, Condorcet) mais le Code noir (1685) reste en vigueur ; apogée de la traite au XVIIIe.`}
],
notions: [
 { terme: 'Lumières', def: 'Mouvement intellectuel du XVIIIe siècle fondé sur la raison, le progrès, la tolérance, la critique de l\'absolutisme.' },
 { terme: 'Montesquieu', def: 'De l\'esprit des lois (1748) : séparation des pouvoirs législatif, exécutif, judiciaire.' },
 { terme: 'Voltaire', def: 'Philosophe du combat pour la tolérance (affaire Calas) et contre le fanatisme religieux.' },
 { terme: 'Rousseau', def: 'Du contrat social (1762) : la souveraineté appartient au peuple ; volonté générale.' },
 { terme: 'Encyclopédie (1751-1772)', def: 'Dirigée par Diderot et d\'Alembert, somme des savoirs et vecteur des idées des Lumières.' },
 { terme: 'Salons', def: 'Réunions mondaines tenues par des femmes (Mme Geoffrin) où circulent les idées nouvelles.' },
 { terme: 'Despotisme éclairé', def: 'Monarques (Frédéric II, Catherine II) adoptant des réformes inspirées des Lumières sans partager le pouvoir.' },
 { terme: 'Société d\'ordres', def: 'Clergé, noblesse (privilégiés), tiers état (98 %, paie les impôts) : hiérarchie contestée par la bourgeoisie montante.' },
 { terme: 'Émilie du Châtelet', def: 'Savante française (1706-1749), traductrice de Newton, figure de l\'accès difficile des femmes aux sciences.' },
 { terme: 'Code noir (1685)', def: 'Ordonnance réglementant l\'esclavage dans les colonies françaises ; les esclaves y sont des « biens meubles ».' }
],
quiz: [
 { q: 'Qui théorise la séparation des pouvoirs ?', choix: ['Voltaire', 'Rousseau', 'Montesquieu', 'Diderot'], r: 2, exp: 'De l\'esprit des lois, 1748.' },
 { q: 'L\'Encyclopédie est dirigée par…', choix: ['Voltaire et Rousseau', 'Diderot et d\'Alembert', 'Newton et Lavoisier', 'Montesquieu'], r: 1, exp: '28 volumes entre 1751 et 1772.' },
 { q: 'L\'affaire Calas (1762) illustre le combat de Voltaire pour…', choix: ['la république', 'la tolérance religieuse', 'l\'abolition de la noblesse', 'les sciences'], r: 1, exp: 'Un protestant injustement condamné ; Voltaire obtient sa réhabilitation.' },
 { q: 'La société française du XVIIIe est divisée en…', choix: ['classes', 'castes', 'trois ordres', 'deux ordres'], r: 2, exp: 'Clergé, noblesse, tiers état.' },
 { q: 'Rousseau défend…', choix: ['le droit divin', 'la souveraineté du peuple', 'le despotisme', 'l\'esclavage'], r: 1, exp: 'Du contrat social.' }
],
pieges: ['Présenter les Lumières comme des révolutionnaires : la plupart veulent réformer la monarchie, pas l\'abattre.', 'Oublier que le XVIIIe est aussi l\'apogée de la traite négrière, malgré les Lumières.'],
astuces: ['Associe chaque philosophe à UNE idée et UNE œuvre : Montesquieu / séparation des pouvoirs / Esprit des lois ; Voltaire / tolérance / Calas ; Rousseau / peuple souverain / Contrat social.'],
exos: [
 { enonce: 'Comment les idées des Lumières se diffusent-elles malgré la censure ?', correction: `Salons et cafés (sociabilité), académies et loges maçonniques, Encyclopédie (souscription, 4 000 exemplaires puis rééditions), presse (gazettes), livres imprimés à l'étranger (Amsterdam, Genève) et introduits clandestinement, correspondances (Voltaire), théâtre (Beaumarchais). Public : élites nobles et bourgeoises, puis diffusion vers les classes moyennes urbaines par l'alphabétisation croissante.` }
]}
]});
