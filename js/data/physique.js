window.PROGRAMME = window.PROGRAMME || [];
window.PROGRAMME.push({
id: 'pc', nom: 'Physique-Chimie', couleur: '#0ea5e9',
desc: "Trois thèmes : constitution et transformations de la matière, mouvement et interactions, ondes et signaux. Points récurrents en évaluation : concentration, atome et classification, équation de réaction, vecteur vitesse, loi de Snell-Descartes, loi d'Ohm.",
ressources: [
 { nom: 'Physique-Chimie Lycée (Mathrix / Les Bons Profs)', url: 'https://www.youtube.com/results?search_query=physique+chimie+seconde+cours', desc: 'Vidéos courtes par chapitre, idéal pour comprendre avant de s\'entraîner.' },
 { nom: 'Lumni 2nde Physique-Chimie', url: 'https://www.lumni.fr/lycee/seconde/physique-chimie', desc: 'Contenus gratuits de l\'Éducation nationale, structurés selon le programme.' },
 { nom: 'PhET (simulations)', url: 'https://phet.colorado.edu/fr/', desc: 'Simulations interactives : circuits, réfraction, états de la matière. Pour comprendre en manipulant.' },
 { nom: 'Kartable Physique-Chimie 2nde', url: 'https://www.kartable.fr/seconde/physique-chimie', desc: 'Fiches et exercices corrigés.' },
 { nom: 'Programme officiel', url: 'https://eduscol.education.fr/1746/programmes-et-ressources-en-physique-chimie-voie-gt', desc: 'Pour vérifier ce qui est exigible.' }
],
chapitres: [
{ id: 'pc-solutions', theme: 'Constitution et transformations de la matière', titre: 'Corps purs, mélanges et solutions aqueuses', duree: 30,
cours: [
{ titre: 'Corps pur et mélange', texte: `
- **Corps pur** : une seule espèce chimique (eau distillée H₂O, dioxygène O₂, cuivre Cu).
- **Mélange** : plusieurs espèces. **Homogène** si on ne distingue pas les constituants (eau salée, air), **hétérogène** sinon (eau + huile, jus avec pulpe).
- Tests d'identification : sulfate de cuivre anhydre (bleuit avec l'**eau**), eau de chaux (se trouble avec le **CO₂**), bûchette incandescente (se rallume avec **O₂**), flamme (détonation avec **H₂**).
- **Composition** : l'air est un mélange ≈ 78 % N₂, 21 % O₂, 1 % autres (Ar, CO₂…).
- La **masse volumique** ρ = m/V (en g/mL ou kg/m³) caractérise une espèce : eau 1,0 g/mL, huile ≈ 0,92 g/mL (elle flotte).`},
{ titre: 'Solutions aqueuses', texte: `
Une **solution** = un **soluté** (espèce dissoute) + un **solvant** (l'eau pour une solution aqueuse). Dissolution ≠ fusion.
**Concentration en masse** :
$ C_m = m_soluté / V_solution      (en g/L ; m en g, V en L)
Ex : 5 g de sel dans 250 mL d'eau : C_m = 5/0,25 = 20 g/L.
**Solubilité** : masse maximale de soluté que l'on peut dissoudre dans 1 L de solvant. Au-delà, la solution est **saturée**.`},
{ titre: 'Préparer une solution', texte: `
- **Dissolution** : peser le soluté (balance, coupelle), le mettre dans une **fiole jaugée**, ajouter de l'eau aux ¾, agiter, compléter jusqu'au **trait de jauge**, homogénéiser.
- **Dilution** : prélever un volume V_mère de solution mère (pipette jaugée) et compléter avec de l'eau jusqu'à V_fille. La quantité de soluté se conserve :
$ C_mère × V_mère = C_fille × V_fille
**Facteur de dilution** F = C_mère/C_fille = V_fille/V_mère. Diluer 10 fois : prélever 10 mL, compléter à 100 mL.`},
{ titre: 'Dosage par étalonnage', texte: `
Pour trouver la concentration inconnue d'une solution :
- On prépare une **gamme d'étalonnage** : plusieurs solutions de concentrations connues.
- On compare la solution inconnue aux étalons (couleur à l'œil, ou mieux, absorbance avec un spectrophotomètre, ou masse volumique).
- On trace la courbe d'étalonnage (absorbance en fonction de C) et on **lit graphiquement** la concentration inconnue.
! Vocabulaire : « étalonner » = construire une référence ; « doser » = déterminer une quantité.`}
],
notions: [
 { terme: 'Corps pur', def: 'Matière constituée d\'une seule espèce chimique.', exemple: 'eau distillée, dioxygène' },
 { terme: 'Mélange homogène / hétérogène', def: 'Homogène : constituants indiscernables (air, eau salée). Hétérogène : visibles (eau + huile).' },
 { terme: 'Masse volumique ρ', def: 'ρ = m/V ; caractéristique d\'une espèce.', exemple: 'eau : 1,0 g/mL' },
 { terme: 'Soluté / solvant', def: 'Soluté : espèce dissoute. Solvant : liquide qui dissout (eau ⟹ solution aqueuse).' },
 { terme: 'Concentration en masse C_m', def: 'C_m = m_soluté / V_solution, en g/L.', exemple: '5 g dans 250 mL ⟹ 20 g/L' },
 { terme: 'Solubilité', def: 'Masse maximale de soluté dissoluble par litre de solvant ; au-delà la solution est saturée.' },
 { terme: 'Dilution', def: 'Ajouter du solvant pour diminuer la concentration ; C_mère·V_mère = C_fille·V_fille.' },
 { terme: 'Facteur de dilution F', def: 'F = C_mère/C_fille = V_fille/V_mère.', exemple: 'F = 10 : 10 mL → 100 mL' },
 { terme: 'Fiole jaugée', def: 'Verrerie précise pour obtenir un volume exact de solution (trait de jauge).' },
 { terme: 'Dosage par étalonnage', def: 'Déterminer une concentration inconnue en comparant à une gamme de solutions de concentrations connues.' },
 { terme: 'Test à l\'eau de chaux', def: 'Se trouble en présence de dioxyde de carbone CO₂.' },
 { terme: 'Test au sulfate de cuivre anhydre', def: 'Blanc, devient bleu en présence d\'eau.' }
],
quiz: [
 { q: 'On dissout 8 g de sucre dans 400 mL d\'eau. Concentration en masse ?', choix: ['0,02 g/L', '20 g/L', '2 g/L', '3 200 g/L'], r: 1, exp: 'C_m = 8 / 0,400 = 20 g/L. Convertir les mL en L.' },
 { q: 'Pour diluer 5 fois 20 mL de solution mère, on complète à…', choix: ['25 mL', '100 mL', '4 mL', '200 mL'], r: 1, exp: 'V_fille = F × V_mère = 5 × 20 = 100 mL.' },
 { q: 'L\'eau de chaux se trouble en présence de…', choix: ['dioxygène', 'dihydrogène', 'dioxyde de carbone', 'eau'], r: 2, exp: 'Test caractéristique du CO₂.' },
 { q: 'L\'air est…', choix: ['un corps pur', 'un mélange homogène', 'un mélange hétérogène', 'une solution aqueuse'], r: 1, exp: '≈ 78 % N₂ + 21 % O₂ + 1 % autres, indiscernables.' },
 { q: 'La masse volumique d\'un liquide est 0,8 g/mL. Masse de 250 mL ?', choix: ['312 g', '200 g', '0,0032 g', '250 g'], r: 1, exp: 'm = ρ × V = 0,8 × 250 = 200 g.' },
 { q: 'Lors d\'une dilution, la quantité de soluté…', choix: ['augmente', 'diminue', 'reste la même', 'devient nulle'], r: 2, exp: 'On ajoute seulement du solvant : le soluté est conservé, sa concentration diminue.' }
],
pieges: ['Oublier de convertir les mL en L dans C_m = m/V.', 'Confondre dissolution (le sucre se dissout dans l\'eau) et fusion (la glace fond).', 'Dire « le sel disparaît » : il est dissous, sa masse est conservée.'],
astuces: ['Dilution : « mère-fille », C_m V_m = C_f V_f. Écris les 4 valeurs, isole l\'inconnue.', 'Verrerie : « jaugée » = précis (fiole, pipette), « gradué » = approximatif (éprouvette, bécher).'],
exos: [
 { enonce: 'On veut préparer 200 mL de solution de glucose à 15 g/L. Quelle masse peser ? Décrire le protocole.', correction: `m = C_m × V = 15 × 0,200 = **3,0 g**.
Protocole : peser 3,0 g de glucose, l'introduire dans une fiole jaugée de 200 mL avec un entonnoir, rincer, remplir aux 3/4 d'eau distillée, agiter, compléter au trait de jauge, homogénéiser.` },
 { enonce: 'Une solution mère à 50 g/L. On en prélève 10 mL que l\'on complète à 250 mL. Concentration fille ? Facteur de dilution ?', correction: `C_f = C_m × V_m / V_f = 50 × 10 / 250 = **2 g/L**.
F = 250/10 = **25**.` }
]},

{ id: 'pc-atome', theme: 'Constitution et transformations de la matière', titre: 'Atome, élément chimique, cortège électronique et classification', duree: 40,
cours: [
{ titre: 'Structure de l\'atome', texte: `
Un atome = un **noyau** (protons chargés +, neutrons neutres) + des **électrons** (chargés −) qui gravitent autour. Il est **électriquement neutre** : autant de protons que d'électrons.
Notation : **ᴬ_Z X** avec **Z** = nombre de protons (numéro atomique) et **A** = nombre de nucléons (protons + neutrons). Neutrons = A − Z.
Ex : ¹²₆C : 6 protons, 6 neutrons, 6 électrons. ²³₁₁Na : 11 p, 12 n, 11 e⁻.
- Masse : m_proton ≈ m_neutron ≈ 1,67 × 10⁻²⁷ kg ; électron ≈ 2000 fois plus léger ⟹ la masse de l'atome est dans le noyau : m ≈ A × m_nucléon.
- Taille : atome ≈ 10⁻¹⁰ m, noyau ≈ 10⁻¹⁵ m : l'atome est essentiellement **vide** (structure lacunaire).
- Charge élémentaire e = 1,6 × 10⁻¹⁹ C. Charge du noyau = +Z·e.`},
{ titre: 'Élément chimique et isotopes', texte: `
Un **élément chimique** est caractérisé par son numéro atomique **Z**. Tous les atomes et ions ayant le même Z appartiennent au même élément (l'élément cuivre : Cu, Cu²⁺…).
**Isotopes** : même Z, A différent (même nombre de protons, pas de neutrons). ¹²C, ¹³C, ¹⁴C sont des isotopes du carbone.
Un **ion monoatomique** : atome qui a gagné (anion, −) ou perdu (cation, +) des électrons. Na⁺ : 11 p, 10 e⁻. Cl⁻ : 17 p, 18 e⁻.`},
{ titre: 'Cortège électronique', texte: `
Les électrons se répartissent en **couches** (n = 1, 2, 3…) et **sous-couches** (s, p). Règles : on remplit dans l'ordre **1s, 2s, 2p, 3s, 3p** ; une sous-couche s contient au max **2** électrons, une p au max **6**.
Ex : C (Z = 6) : 1s² 2s² 2p². Na (Z = 11) : 1s² 2s² 2p⁶ 3s¹. Cl (Z = 17) : 1s² 2s² 2p⁶ 3s² 3p⁵.
**Électrons de valence** : ceux de la dernière couche occupée (n le plus grand). C : 4 ; Na : 1 ; Cl : 7. Ce sont eux qui font la chimie de l'élément.`},
{ titre: 'Classification périodique', texte: `
Les éléments sont rangés par **Z croissant**. Une **ligne** (période) = une couche ; une **colonne** (famille) = même nombre d'électrons de valence ⟹ propriétés chimiques voisines.
- Colonne 1 : **alcalins** (Li, Na, K) : 1 e⁻ de valence, donnent des ions +.
- Colonne 17 : **halogènes** (F, Cl, Br, I) : 7 e⁻ de valence, donnent des ions −.
- Colonne 18 : **gaz nobles** (He, Ne, Ar) : couche de valence pleine, très stables, ne réagissent pas.
**Règles du duet et de l'octet** : les atomes forment des ions ou des molécules pour acquérir la configuration du gaz noble le plus proche : 2 e⁻ (duet, pour H, Li) ou 8 e⁻ (octet) de valence.
Ex : Na (1 e⁻ de valence) perd 1 e⁻ ⟹ Na⁺ (configuration de Ne). Cl (7) gagne 1 ⟹ Cl⁻ (config. de Ar). Mg (2) ⟹ Mg²⁺. O (6) ⟹ O²⁻.
! Charge d'un ion = (colonne) pour les colonnes 1-2 (+1, +2) ; (colonne − 18) pour 15-17 (−3, −2, −1).`}
],
notions: [
 { terme: 'Numéro atomique Z', def: 'Nombre de protons du noyau ; il définit l\'élément chimique. Dans un atome neutre, c\'est aussi le nombre d\'électrons.' },
 { terme: 'Nombre de nucléons A', def: 'Protons + neutrons. Nombre de neutrons = A − Z.', exemple: '²³₁₁Na : 12 neutrons' },
 { terme: 'Isotopes', def: 'Atomes de même Z (même élément) mais de A différent (nombre de neutrons différent).', exemple: '¹²C et ¹⁴C' },
 { terme: 'Ion monoatomique', def: 'Atome ayant gagné (anion −) ou perdu (cation +) un ou plusieurs électrons.', exemple: 'Na⁺, Cl⁻, Mg²⁺' },
 { terme: 'Structure lacunaire', def: 'L\'atome est essentiellement vide : noyau (10⁻¹⁵ m) 100 000 fois plus petit que l\'atome (10⁻¹⁰ m).' },
 { terme: 'Masse de l\'atome', def: 'Concentrée dans le noyau : m ≈ A × 1,67 × 10⁻²⁷ kg (les électrons sont négligeables).' },
 { terme: 'Configuration électronique', def: 'Répartition des électrons : 1s² 2s² 2p⁶ 3s² 3p⁶ dans cet ordre, max 2 par s et 6 par p.', exemple: 'Na : 1s² 2s² 2p⁶ 3s¹' },
 { terme: 'Électrons de valence', def: 'Électrons de la dernière couche occupée ; ils déterminent les propriétés chimiques et la colonne du tableau.', exemple: 'Cl : 7' },
 { terme: 'Règles du duet et de l\'octet', def: 'Un atome tend à acquérir 2 (duet : H, Li) ou 8 (octet) électrons de valence, comme le gaz noble le plus proche, en formant des ions ou des liaisons.' },
 { terme: 'Famille chimique', def: 'Colonne du tableau périodique : même nombre d\'électrons de valence, propriétés semblables.', exemple: 'alcalins (col. 1), halogènes (col. 17), gaz nobles (col. 18)' },
 { terme: 'Charge élémentaire e', def: 'e = 1,6 × 10⁻¹⁹ C ; charge du proton +e, de l\'électron −e.' }
],
quiz: [
 { q: 'Composition de l\'atome ³⁵₁₇Cl ?', choix: ['17 p, 35 n, 17 e⁻', '17 p, 18 n, 17 e⁻', '18 p, 17 n, 18 e⁻', '35 p, 17 n, 35 e⁻'], r: 1, exp: 'Z = 17 protons et électrons ; neutrons = 35 − 17 = 18.' },
 { q: 'Configuration électronique de l\'oxygène (Z = 8) ?', choix: ['1s² 2s² 2p⁴', '1s² 2s⁶', '1s² 2p⁶', '1s² 2s² 2p⁶'], r: 0, exp: '2 + 2 + 4 = 8 électrons.' },
 { q: 'L\'ion formé par le magnésium (colonne 2) est…', choix: ['Mg⁻', 'Mg²⁻', 'Mg⁺', 'Mg²⁺'], r: 3, exp: '2 électrons de valence perdus pour atteindre l\'octet de Ne.' },
 { q: 'Deux isotopes ont…', choix: ['même A, Z différent', 'même Z, A différent', 'même nombre de neutrons', 'des charges différentes'], r: 1, exp: 'Même élément (Z), nombre de neutrons différent.' },
 { q: 'La masse d\'un atome est concentrée…', choix: ['dans les électrons', 'dans le noyau', 'uniformément', 'dans la couche externe'], r: 1, exp: 'Les électrons sont ~2000 fois plus légers que les nucléons.' },
 { q: 'Les éléments d\'une même colonne ont…', choix: ['le même Z', 'la même masse', 'le même nombre d\'électrons de valence', 'le même nombre de couches'], r: 2, exp: 'C\'est ce qui explique leurs propriétés chimiques voisines.' },
 { q: 'Ordre de grandeur de la taille d\'un atome ?', choix: ['10⁻¹⁵ m', '10⁻¹⁰ m', '10⁻⁶ m', '10⁻³ m'], r: 1, exp: '0,1 nanomètre = 10⁻¹⁰ m ; le noyau est 100 000 fois plus petit.' }
],
pieges: ['Confondre A (nucléons) et Z (protons). Neutrons = A − Z, pas A.', 'Dans Na⁺, il y a toujours 11 protons : c\'est le nombre d\'électrons qui change (10).', 'Écrire 2s⁴ : une sous-couche s ne contient jamais plus de 2 électrons.'],
astuces: ['Pour la charge d\'un ion : colonnes 1, 2 ⟹ +1, +2 ; colonnes 16, 17 ⟹ −2, −1. Les atomes veulent ressembler au gaz noble le plus proche.', 'Compte toujours les électrons de ta configuration : la somme des exposants doit valoir Z.'],
exos: [
 { enonce: 'L\'aluminium a pour numéro atomique 13 et pour isotope le plus courant ²⁷Al. Donner sa composition, sa configuration électronique, ses électrons de valence et l\'ion qu\'il forme.', correction: `13 protons, 27 − 13 = 14 neutrons, 13 électrons.
Configuration : 1s² 2s² 2p⁶ 3s² 3p¹. Électrons de valence : 2 + 1 = **3** (couche n = 3).
Pour atteindre l'octet (config. du néon), il perd 3 électrons ⟹ **Al³⁺**.` },
 { enonce: 'Calculer la masse approchée d\'un atome de carbone 12.', correction: `m ≈ A × m_nucléon = 12 × 1,67 × 10⁻²⁷ = **2,0 × 10⁻²⁶ kg**.` }
]},

{ id: 'pc-molecules', theme: 'Constitution et transformations de la matière', titre: 'Molécules, schémas de Lewis, ions et solides', duree: 30,
cours: [
{ titre: 'Molécules et liaisons covalentes', texte: `
Une **molécule** = assemblage d'atomes liés par des **liaisons covalentes** (mise en commun de 2 électrons, un par atome). Chaque atome cherche à satisfaire la règle de l'octet (duet pour H).
Nombre de liaisons formées = nombre d'électrons manquants pour l'octet :
- H : 1 liaison ; O : 2 ; N : 3 ; C : 4 ; Cl : 1.
**Formule brute** : H₂O, CO₂, CH₄, NH₃. **Formule développée** : toutes les liaisons dessinées. **Semi-développée** : sans les liaisons C–H (CH₃–CH₂–OH).`},
{ titre: 'Schéma de Lewis', texte: `
Représente les **doublets liants** (traits entre atomes) et les **doublets non liants** (traits autour d'un atome, électrons non partagés).
Méthode : 1) compter les électrons de valence de chaque atome ; 2) dessiner les liaisons ; 3) compléter avec des doublets non liants jusqu'à l'octet.
- H₂O : O fait 2 liaisons et garde 2 doublets non liants.
- NH₃ : N fait 3 liaisons, 1 doublet non liant.
- CO₂ : O=C=O, deux doubles liaisons, chaque O a 2 doublets non liants.
- CH₄ : 4 liaisons simples, pas de doublet non liant.
**Géométrie** : les doublets se repoussent. CH₄ tétraédrique, NH₃ pyramidale, H₂O coudée, CO₂ linéaire.`},
{ titre: 'Ions polyatomiques et solides ioniques', texte: `
Ions polyatomiques à connaître : hydroxyde **HO⁻**, nitrate **NO₃⁻**, sulfate **SO₄²⁻**, carbonate **CO₃²⁻**, ammonium **NH₄⁺**, hydrogène (oxonium) **H⁺ / H₃O⁺**.
Un **solide ionique** est un empilement régulier de cations et d'anions, **électriquement neutre**. Sa formule indique les proportions : NaCl, CaCl₂ (1 Ca²⁺ pour 2 Cl⁻), Al₂(SO₄)₃.
Un **solide moléculaire** (glace, sucre) est un empilement de molécules.
! Pour écrire la formule d'un solide ionique : équilibre les charges. Fe³⁺ et SO₄²⁻ ⟹ Fe₂(SO₄)₃ (2×3 = 3×2).`},
{ titre: 'Polarité et dissolution', texte: `
L'eau est une molécule **polaire** (charges partielles δ+ sur H, δ− sur O). Elle dissout bien les solides ioniques (NaCl → Na⁺ + Cl⁻) et les molécules polaires. L'huile, apolaire, ne se mélange pas à l'eau.
**Équation de dissolution** : NaCl(s) → Na⁺(aq) + Cl⁻(aq) ; CaCl₂(s) → Ca²⁺(aq) + 2 Cl⁻(aq).`}
],
notions: [
 { terme: 'Liaison covalente', def: 'Mise en commun de deux électrons entre deux atomes (un doublet liant).' },
 { terme: 'Nombre de liaisons', def: 'H : 1, O : 2, N : 3, C : 4, halogènes : 1 (nombre d\'électrons manquants pour l\'octet/duet).' },
 { terme: 'Doublet liant / non liant', def: 'Liant : partagé entre deux atomes (liaison). Non liant : paire d\'électrons restant sur un atome.', exemple: 'O dans H₂O : 2 liants, 2 non liants' },
 { terme: 'Schéma de Lewis', def: 'Représentation d\'une molécule avec tous ses doublets liants et non liants.' },
 { terme: 'Formule brute / développée / semi-développée', def: 'Brute : nombre d\'atomes (C₂H₆O). Développée : toutes les liaisons. Semi-développée : sans les liaisons C–H.' },
 { terme: 'Géométrie des molécules', def: 'Les doublets se repoussent : CH₄ tétraédrique, NH₃ pyramidale, H₂O coudée, CO₂ linéaire.' },
 { terme: 'Ions polyatomiques', def: 'HO⁻ hydroxyde, NO₃⁻ nitrate, SO₄²⁻ sulfate, CO₃²⁻ carbonate, NH₄⁺ ammonium.' },
 { terme: 'Solide ionique', def: 'Empilement ordonné de cations et d\'anions, globalement neutre ; formule = proportions.', exemple: 'CaCl₂, Al₂O₃' },
 { terme: 'Molécule polaire', def: 'Molécule présentant des charges partielles δ+ et δ− (ex : eau) ; dissout les ions et les espèces polaires.' },
 { terme: 'Équation de dissolution', def: 'Solide ionique → ions aqueux, avec conservation des éléments et des charges.', exemple: 'CaCl₂(s) → Ca²⁺(aq) + 2 Cl⁻(aq)' }
],
quiz: [
 { q: 'Combien de liaisons covalentes forme l\'azote N ?', choix: ['1', '2', '3', '4'], r: 2, exp: '5 électrons de valence, il en manque 3 pour l\'octet.' },
 { q: 'Dans H₂O, l\'oxygène possède…', choix: ['2 doublets non liants', '1 doublet non liant', 'aucun', '4 doublets non liants'], r: 0, exp: '6 électrons de valence : 2 dans les liaisons O–H, 4 restants = 2 doublets non liants.' },
 { q: 'Formule du sulfate d\'aluminium (Al³⁺, SO₄²⁻) ?', choix: ['AlSO₄', 'Al₂(SO₄)₃', 'Al₃(SO₄)₂', 'Al(SO₄)₃'], r: 1, exp: '2 Al³⁺ = +6, 3 SO₄²⁻ = −6 : neutre.' },
 { q: 'La géométrie de CH₄ est…', choix: ['plane carrée', 'linéaire', 'tétraédrique', 'pyramidale'], r: 2, exp: 'Les 4 doublets liants se repoussent au maximum dans l\'espace.' },
 { q: 'Formule de l\'ion nitrate ?', choix: ['NO₂⁻', 'NO₃⁻', 'NH₄⁺', 'N³⁻'], r: 1, exp: 'Nitrate = NO₃⁻ ; ammonium = NH₄⁺.' },
 { q: 'Pourquoi l\'eau dissout-elle le sel ?', choix: ['Elle est chaude', 'Elle est polaire', 'Elle est apolaire', 'Elle est acide'], r: 1, exp: 'Les charges partielles de l\'eau attirent les ions Na⁺ et Cl⁻ et les séparent.' }
],
pieges: ['Oublier les doublets non liants dans un schéma de Lewis (O en a 2, N en a 1, Cl en a 3).', 'Écrire une formule de solide ionique non neutre, ex : CaCl au lieu de CaCl₂.', 'Dessiner H₂O linéaire : elle est coudée à cause des doublets non liants.'],
astuces: ['Mémo liaisons : H1 O2 N3 C4. Tu peux reconstruire n\'importe quelle petite molécule avec ça.', 'Solide ionique : « croise » les charges : Al³⁺ + O²⁻ ⟹ Al₂O₃.'],
exos: [
 { enonce: 'Établir le schéma de Lewis de l\'ammoniac NH₃ et prévoir sa géométrie.', correction: `N : 5 électrons de valence ; H : 1 chacun. Total = 8 électrons = 4 doublets.
N forme 3 liaisons N–H (3 doublets liants) et garde 1 doublet non liant.
Les 4 doublets se repoussent : géométrie **pyramidale** (le doublet non liant occupe un sommet).` },
 { enonce: 'Écrire l\'équation de dissolution du nitrate de calcium Ca(NO₃)₂ dans l\'eau.', correction: `Ca(NO₃)₂(s) → Ca²⁺(aq) + 2 NO₃⁻(aq).
Vérification : charges +2 et 2×(−1) = 0 ; éléments conservés.` }
]},

{ id: 'pc-transformations', theme: 'Constitution et transformations de la matière', titre: 'Transformations physiques, chimiques et nucléaires', duree: 40,
cours: [
{ titre: 'Transformations physiques', texte: `
Changement d'**état** sans changement d'espèce chimique : fusion (s→l), solidification (l→s), vaporisation (l→g), liquéfaction (g→l), sublimation (s→g), condensation (g→s).
- Pour un corps pur, le changement d'état se fait à **température constante** (palier : eau 0 °C, 100 °C sous 1 atm).
- Il s'accompagne d'un **transfert d'énergie** : fusion et vaporisation **absorbent** de l'énergie (endothermique) ; solidification et liquéfaction en **libèrent**.
$ Q = m × L      (Q en J, m en kg, L = énergie massique de changement d'état en J/kg)
Ex : faire fondre 2 kg de glace (L_fusion = 334 kJ/kg) : Q = 2 × 334 = 668 kJ.`},
{ titre: 'Transformations chimiques', texte: `
Des **réactifs** disparaissent, des **produits** apparaissent. Les éléments et la charge se **conservent** : on **équilibre** l'équation avec des **nombres stœchiométriques**.
$ CH₄ + 2 O₂ → CO₂ + 2 H₂O         (combustion du méthane)
Méthode : équilibrer d'abord l'élément qui apparaît dans le moins d'espèces, H et O en dernier. Ne jamais modifier les indices (H₂O reste H₂O).
Réactions à connaître : combustions (avec O₂, donne CO₂ et H₂O), fer + acide (Fe + 2 H⁺ → Fe²⁺ + H₂), synthèse (2 H₂ + O₂ → 2 H₂O).
La transformation peut être exothermique (libère de l'énergie, combustion) ou endothermique.`},
{ titre: 'Réactif limitant', texte: `
Les réactifs sont rarement en proportions exactes. Le **réactif limitant** est celui qui est **entièrement consommé** en premier : il arrête la réaction. L'autre est en **excès**.
Méthode : pour chaque réactif, calculer (quantité disponible) / (nombre stœchiométrique). Le plus petit rapport désigne le limitant.
Ex : 4 H₂ et 1 O₂ pour 2 H₂ + O₂ → 2 H₂O. H₂ : 4/2 = 2 ; O₂ : 1/1 = 1 ⟹ **O₂ limitant**. On forme 2 H₂O, il reste 2 H₂.
Un **mélange stœchiométrique** = proportions exactes, tous les réactifs disparaissent.
! On raisonne en quantité de matière (mol) ou en nombre de molécules, jamais en masse directement.`},
{ titre: 'Transformations nucléaires', texte: `
Le **noyau** change : un élément se transforme en un autre. Énergie colossale (Soleil, centrales).
- **Fission** : un gros noyau se casse : ²³⁵U + n → ⁹⁴Sr + ¹⁴⁰Xe + 2n.
- **Fusion** : deux petits noyaux s'assemblent : ²H + ³H → ⁴He + n (Soleil, ITER).
- **Radioactivité** : un noyau instable émet une particule : ¹⁴₆C → ¹⁴₇N + ⁰₋₁e.
Lois de conservation (Soddy) : conservation de **A** (somme des nucléons) et de **Z** (somme des charges) de part et d'autre de la flèche.
Physique ≠ chimique ≠ nucléaire : l'espèce / les molécules / les noyaux changent.`}
],
notions: [
 { terme: 'Changements d\'état', def: 'Fusion s→l, solidification l→s, vaporisation l→g, liquéfaction g→l, sublimation s→g, condensation g→s.' },
 { terme: 'Palier de température', def: 'Pour un corps pur, la température reste constante pendant tout le changement d\'état.' },
 { terme: 'Énergie de changement d\'état', def: 'Q = m × L ; L en J/kg. Fusion et vaporisation absorbent de l\'énergie, l\'inverse en libère.', exemple: '2 kg de glace : 2×334 = 668 kJ' },
 { terme: 'Transformation chimique', def: 'Des réactifs se transforment en produits ; les éléments et la charge sont conservés.' },
 { terme: 'Équation de réaction équilibrée', def: 'Même nombre d\'atomes de chaque élément des deux côtés, via les nombres stœchiométriques (jamais les indices).', exemple: 'CH₄ + 2 O₂ → CO₂ + 2 H₂O' },
 { terme: 'Combustion', def: 'Réaction avec le dioxygène, exothermique ; combustion complète d\'un hydrocarbure → CO₂ + H₂O.' },
 { terme: 'Réactif limitant', def: 'Réactif totalement consommé qui arrête la réaction ; celui dont le rapport (quantité/nombre stœchiométrique) est le plus petit.' },
 { terme: 'Mélange stœchiométrique', def: 'Réactifs dans les proportions exactes de l\'équation : tous disparaissent.' },
 { terme: 'Transformation nucléaire', def: 'Le noyau change (fission, fusion, radioactivité) ; les éléments ne sont pas conservés mais A et Z totaux le sont.' },
 { terme: 'Fission / fusion', def: 'Fission : un gros noyau se casse (centrales). Fusion : deux petits noyaux s\'assemblent (Soleil).' },
 { terme: 'Lois de Soddy', def: 'Dans une équation nucléaire, conservation du nombre de nucléons A et de la charge Z.' }
],
quiz: [
 { q: 'Équilibrer : C₃H₈ + … O₂ → … CO₂ + … H₂O', choix: ['C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O', 'C₃H₈ + 3 O₂ → 3 CO₂ + 4 H₂O', 'C₃H₈ + 7 O₂ → 3 CO₂ + 8 H₂O', 'C₃H₈ + O₂ → CO₂ + H₂O'], r: 0, exp: '3 C → 3 CO₂ ; 8 H → 4 H₂O ; O : 6 + 4 = 10 = 5 O₂.' },
 { q: 'La vaporisation de l\'eau…', choix: ['libère de l\'énergie', 'absorbe de l\'énergie', 'se fait sans énergie', 'change l\'espèce chimique'], r: 1, exp: 'Il faut fournir de l\'énergie pour séparer les molécules (c\'est pourquoi la transpiration refroidit).' },
 { q: '3 H₂ et 2 O₂ réagissent selon 2 H₂ + O₂ → 2 H₂O. Réactif limitant ?', choix: ['H₂', 'O₂', 'Aucun (stœchiométrique)', 'H₂O'], r: 0, exp: 'H₂ : 3/2 = 1,5 ; O₂ : 2/1 = 2. Le plus petit est H₂.' },
 { q: 'Dans ²³⁸₉₂U → ²³⁴₉₀Th + X, X est…', choix: ['un électron', 'un neutron', '⁴₂He', '¹₁H'], r: 2, exp: 'A : 238 − 234 = 4 ; Z : 92 − 90 = 2 ⟹ noyau d\'hélium (particule α).' },
 { q: 'Faire fondre 500 g de glace (L = 334 kJ/kg) demande…', choix: ['167 kJ', '668 kJ', '167 000 kJ', '334 kJ'], r: 0, exp: 'Q = 0,5 × 334 = 167 kJ.' },
 { q: 'Quelle transformation est nucléaire ?', choix: ['La fonte d\'un glaçon', 'La combustion du bois', 'La fusion de l\'hydrogène dans le Soleil', 'La dissolution du sel'], r: 2, exp: 'Les noyaux d\'hydrogène se transforment en hélium : l\'élément change.' }
],
pieges: ['Équilibrer en changeant un indice (H₂O → H₃O) : interdit, ça change la molécule.', 'Croire que le réactif limitant est celui qu\'il y a « en plus petite quantité » : il faut diviser par le nombre stœchiométrique.', 'Confondre fusion nucléaire (noyaux qui s\'assemblent) et fusion (glace qui fond).'],
astuces: ['Équilibrage : C d\'abord, puis H, puis O en dernier (l\'O₂ seul permet d\'ajuster sans tout casser).', 'Réactif limitant : tableau à 3 lignes (initial, en cours, final) avec x l\'avancement, c\'est le plus sûr.'],
exos: [
 { enonce: 'On fait réagir 6 molécules de Fe avec 6 molécules de O₂ selon 4 Fe + 3 O₂ → 2 Fe₂O₃. Réactif limitant, produits formés, réactif restant ?', correction: `Fe : 6/4 = 1,5 ; O₂ : 6/3 = 2 ⟹ **Fe limitant**.
6 Fe consomment 6 × 3/4 = 4,5 O₂ et donnent 6 × 2/4 = **3 Fe₂O₃**.
Il reste 6 − 4,5 = **1,5 O₂**.` },
 { enonce: 'Compléter : ⁶⁰₂₇Co → ⁶⁰₂₈Ni + ?', correction: `Conservation de A : 60 = 60 + A ⟹ A = 0. Conservation de Z : 27 = 28 + Z ⟹ Z = −1.
La particule est un **électron ⁰₋₁e** (radioactivité β⁻).` }
]},

{ id: 'pc-mouvement', theme: 'Mouvement et interactions', titre: 'Décrire un mouvement : référentiel, trajectoire, vecteur vitesse', duree: 30,
cours: [
{ titre: 'Référentiel et relativité du mouvement', texte: `
Décrire un mouvement nécessite de choisir un **référentiel** (objet de référence + horloge). Un passager assis est immobile dans le référentiel du train, mais en mouvement dans le référentiel terrestre.
Référentiels usuels : **terrestre** (lié au sol), **géocentrique** (centre de la Terre, axes vers des étoiles fixes ; satellites), **héliocentrique** (centre du Soleil ; planètes).
Un **système** est l'objet étudié, souvent modélisé par un **point** (son centre).`},
{ titre: 'Trajectoire et vitesse', texte: `
- **Trajectoire** : ensemble des positions successives. Rectiligne, circulaire, curviligne.
- **Vitesse moyenne** v = d/Δt (m/s). Conversion : 1 m/s = 3,6 km/h.
- **Vecteur vitesse** v→ à un instant t : direction = tangente à la trajectoire, sens = celui du mouvement, norme = vitesse instantanée.
$ v→(t) ≈ M(t)M(t+Δt)→ / Δt       (sur une chronophotographie : point suivant moins point actuel, divisé par l'intervalle de temps)
Avec des points espacés de τ = 0,1 s et M₃M₄ = 2,5 cm à l'échelle 1/10 (soit 25 cm réels) : v₃ = 0,25/0,1 = 2,5 m/s.`},
{ titre: 'Types de mouvement', texte: `
On croise la forme de la trajectoire et l'évolution de la vitesse :
- **Rectiligne uniforme** : ligne droite, vitesse constante (v→ constant). Points équidistants.
- **Rectiligne accéléré / ralenti** : droite, points de plus en plus / de moins en moins espacés.
- **Circulaire uniforme** : cercle, norme de v constante, mais v→ change de direction (donc v→ n'est pas constant).
! Le vecteur vitesse est constant seulement si direction, sens ET norme sont constants.`}
],
notions: [
 { terme: 'Référentiel', def: 'Objet de référence (+ horloge) par rapport auquel on décrit le mouvement. Le mouvement dépend du référentiel.' },
 { terme: 'Référentiels terrestre / géocentrique / héliocentrique', def: 'Lié au sol / au centre de la Terre (satellites, Lune) / au centre du Soleil (planètes).' },
 { terme: 'Trajectoire', def: 'Ensemble des positions successives du point : rectiligne, circulaire, curviligne.' },
 { terme: 'Vitesse moyenne', def: 'v = d / Δt. 1 m/s = 3,6 km/h.', exemple: '90 km/h = 25 m/s' },
 { terme: 'Vecteur vitesse v→', def: 'Tangent à la trajectoire, dans le sens du mouvement, de norme égale à la vitesse instantanée.' },
 { terme: 'Vitesse instantanée (chronophoto)', def: 'v_i ≈ MᵢMᵢ₊₁ / τ avec τ l\'intervalle de temps entre deux positions.' },
 { terme: 'Mouvement rectiligne uniforme', def: 'Trajectoire droite et vitesse constante : v→ constant, points équidistants.' },
 { terme: 'Mouvement circulaire uniforme', def: 'Trajectoire circulaire, norme de la vitesse constante, mais v→ varie en direction.' }
],
quiz: [
 { q: '72 km/h en m/s ?', choix: ['20 m/s', '259 m/s', '7,2 m/s', '36 m/s'], r: 0, exp: '72/3,6 = 20 m/s.' },
 { q: 'Le vecteur vitesse est toujours…', choix: ['vertical', 'tangent à la trajectoire', 'perpendiculaire à la trajectoire', 'constant'], r: 1, exp: 'Il indique la direction du mouvement à cet instant.' },
 { q: 'Dans quel référentiel la Lune a-t-elle un mouvement quasi circulaire ?', choix: ['terrestre', 'géocentrique', 'héliocentrique', 'lunaire'], r: 1, exp: 'Autour du centre de la Terre.' },
 { q: 'Un mouvement circulaire uniforme a un vecteur vitesse…', choix: ['constant', 'de norme constante mais de direction variable', 'nul', 'de norme variable'], r: 1, exp: 'La vitesse (norme) ne change pas, mais la direction tourne.' },
 { q: 'Sur une chronophotographie, des points de plus en plus espacés indiquent…', choix: ['un mouvement uniforme', 'un mouvement accéléré', 'un mouvement ralenti', 'un arrêt'], r: 1, exp: 'Même durée entre les points, distance qui augmente : vitesse croissante.' }
],
pieges: ['Oublier de préciser le référentiel : « la Terre est immobile » n\'a aucun sens sans référentiel.', 'Diviser par 3,6 pour passer de m/s en km/h : c\'est multiplier.', 'Dessiner le vecteur vitesse non tangent (ex : vers le centre du cercle).'],
astuces: ['Pour tracer v→ en un point M₃ d\'une chronophoto : trace M₂M₄ (ou M₃M₄), c\'est la direction ; la longueur se déduit de l\'échelle.', 'Vérifie toujours l\'unité : m et s donnent des m/s.'],
exos: [
 { enonce: 'Sur une chronophotographie (τ = 0,20 s, échelle 1 cm pour 0,5 m), la distance M₂M₃ mesure 3,0 cm. Calculer v₂.', correction: `Distance réelle = 3,0 × 0,5 = 1,5 m.
v₂ = 1,5 / 0,20 = **7,5 m/s** (= 27 km/h).` }
]},

{ id: 'pc-forces', theme: 'Mouvement et interactions', titre: 'Forces, principe d\'inertie et gravitation', duree: 35,
cours: [
{ titre: 'Modéliser une action par une force', texte: `
Une **action mécanique** (contact ou à distance) se modélise par une **force**, représentée par un **vecteur** F→ : point d'application, direction, sens, norme (en **newton**, N). Mesurée avec un dynamomètre.
Exemples : poids, réaction du support, tension d'un fil, frottements, force de gravitation, force électrique.
**Diagramme objet-interactions** : le système au centre, les objets qui agissent sur lui autour, flèches doubles (contact : trait plein ; distance : pointillé).`},
{ titre: 'Poids et gravitation', texte: `
**Loi de la gravitation universelle** (Newton) : deux corps de masses m_A et m_B séparés de d s'attirent avec une force
$ F = G × m_A × m_B / d²        G = 6,67 × 10⁻¹¹ N·m²·kg⁻²
Le **poids** est la force de gravitation exercée par la Terre sur un objet :
$ P = m × g       (P en N, m en kg, g ≈ 9,8 N/kg sur Terre, 1,6 sur la Lune)
Le poids est vertical, vers le bas, appliqué au centre de gravité. La **masse** (kg) ne change pas d'un astre à l'autre ; le **poids** (N) si.`},
{ titre: 'Principe d\'inertie', texte: `
$ Un système est immobile ou en mouvement rectiligne uniforme ⟺ les forces qui s'exercent sur lui se compensent (somme vectorielle nulle).
Deux lectures :
- Si les forces se compensent (ou pas de force), le vecteur vitesse est constant (pas forcément nul).
- Si le vecteur vitesse varie (direction OU norme), alors les forces ne se compensent pas.
Ex : un palet sur une table à coussin d'air glisse en ligne droite à vitesse constante : poids et réaction se compensent. Une voiture qui tourne à vitesse constante : v→ change de direction ⟹ les forces ne se compensent pas.
! Une force n'est pas nécessaire pour entretenir un mouvement, seulement pour le modifier. C'est contre-intuitif mais c'est la base de toute la mécanique.`}
],
notions: [
 { terme: 'Force', def: 'Modélisation d\'une action mécanique par un vecteur : point d\'application, direction, sens, norme (newton N).' },
 { terme: 'Diagramme objet-interactions', def: 'Schéma des interactions entre le système et les objets extérieurs (contact en trait plein, distance en pointillé).' },
 { terme: 'Loi de gravitation universelle', def: 'F = G·m_A·m_B/d², attractive, G = 6,67×10⁻¹¹ SI. Diminue avec le carré de la distance.' },
 { terme: 'Poids', def: 'P = m × g ; force de gravitation terrestre, verticale vers le bas, en newtons. g ≈ 9,8 N/kg.', exemple: '60 kg ⟹ P ≈ 588 N' },
 { terme: 'Masse vs poids', def: 'La masse (kg) est invariante ; le poids (N) dépend de l\'astre (g).' },
 { terme: 'Principe d\'inertie', def: 'Forces qui se compensent ⟺ immobile ou mouvement rectiligne uniforme (v→ constant).' },
 { terme: 'Réaction du support', def: 'Force exercée par un support sur l\'objet posé ; compense le poids si l\'objet est en équilibre sur un plan horizontal.' },
 { terme: 'Forces qui se compensent', def: 'Somme vectorielle nulle : même direction, même norme, sens opposés pour deux forces.' }
],
quiz: [
 { q: 'Un astronaute de 80 kg sur la Lune (g = 1,6 N/kg). Sa masse et son poids ?', choix: ['80 kg et 784 N', '13 kg et 128 N', '80 kg et 128 N', '128 kg et 80 N'], r: 2, exp: 'La masse ne change pas. P = 80 × 1,6 = 128 N.' },
 { q: 'Si la distance entre deux corps double, la force de gravitation est…', choix: ['divisée par 2', 'divisée par 4', 'multipliée par 2', 'inchangée'], r: 1, exp: 'F ∝ 1/d² : 2² = 4.' },
 { q: 'Un objet dont les forces se compensent…', choix: ['est forcément immobile', 'ralentit', 'a un vecteur vitesse constant', 'tombe'], r: 2, exp: 'Immobile OU rectiligne uniforme.' },
 { q: 'Une voiture tourne à vitesse constante. Les forces…', choix: ['se compensent', 'ne se compensent pas', 'sont nulles', 'sont toutes verticales'], r: 1, exp: 'La direction de v→ change ⟹ v→ varie ⟹ forces non compensées.' },
 { q: 'L\'unité de la force est…', choix: ['le kilogramme', 'le joule', 'le newton', 'le N/kg'], r: 2, exp: 'N ; le N/kg est l\'unité de g.' }
],
pieges: ['Dire « il n\'y a pas de force donc l\'objet s\'arrête » : sans force, il continue tout droit à la même vitesse.', 'Écrire P = m × g avec m en grammes.', 'Confondre masse et poids dans le langage courant (« je pèse 60 kg » est faux physiquement : 60 kg est une masse).'],
astuces: ['Pour chaque situation, liste les forces : poids (toujours), réaction si contact avec un support, tension si fil, frottements si mentionnés.', 'Principe d\'inertie : regarde le vecteur vitesse. Constant ⟹ forces compensées. Variable ⟹ non compensées.'],
exos: [
 { enonce: 'Calculer la force de gravitation entre la Terre (5,97 × 10²⁴ kg) et la Lune (7,35 × 10²² kg), distantes de 3,84 × 10⁸ m.', correction: `F = 6,67×10⁻¹¹ × 5,97×10²⁴ × 7,35×10²² / (3,84×10⁸)²
= 6,67×10⁻¹¹ × 4,39×10⁴⁷ / 1,47×10¹⁷ ≈ **2,0 × 10²⁰ N**.` },
 { enonce: 'Un livre de 1,2 kg est posé sur une table. Faire le bilan des forces et les représenter (échelle 1 cm pour 5 N).', correction: `Poids P = 1,2 × 9,8 ≈ 11,8 N, vertical vers le bas, appliqué au centre.
Réaction R de la table : verticale vers le haut, même norme (le livre est immobile ⟹ forces compensées).
Chaque vecteur mesure 11,8/5 ≈ 2,4 cm.` }
]},

{ id: 'pc-son', theme: 'Ondes et signaux', titre: 'Émission et perception d\'un son', duree: 25,
cours: [
{ titre: 'Nature du son', texte: `
Un son est une **vibration** mécanique qui se propage dans un **milieu matériel** (air, eau, solide), **pas dans le vide**. Il faut un émetteur (corde, membrane), un milieu, un récepteur (oreille, micro).
Vitesse du son : ≈ **340 m/s** dans l'air, 1 500 m/s dans l'eau, 5 000 m/s dans l'acier. Bien plus lent que la lumière (3 × 10⁸ m/s) : l'éclair avant le tonnerre.
Distance = v × Δt : un tonnerre entendu 3 s après l'éclair ⟹ orage à ≈ 1 km.`},
{ titre: 'Période, fréquence, hauteur, intensité', texte: `
Un signal sonore **périodique** se répète identique à lui-même au bout d'une **période T** (s).
$ f = 1 / T        (f en Hz, T en s)
- **Hauteur** : liée à la fréquence. Aigu = f élevée ; grave = f faible. Le la₃ = 440 Hz. Oreille humaine : 20 Hz à 20 000 Hz (infrasons en dessous, ultrasons au-dessus).
- **Intensité / niveau sonore** : lié à l'amplitude. Mesuré en décibels (**dB**). Le niveau augmente de 3 dB quand on double l'intensité. Seuil de douleur ≈ 120 dB ; danger au-delà de 85 dB prolongé.
- **Timbre** : forme du signal, permet de distinguer deux instruments jouant la même note.
Lecture d'un oscillogramme : on mesure la durée de plusieurs périodes (plus précis) et on divise.`}
],
notions: [
 { terme: 'Son', def: 'Vibration mécanique se propageant dans un milieu matériel ; impossible dans le vide.' },
 { terme: 'Vitesse du son', def: '≈ 340 m/s dans l\'air ; plus rapide dans les liquides et solides.' },
 { terme: 'Période T', def: 'Durée d\'un motif élémentaire du signal périodique, en secondes.' },
 { terme: 'Fréquence f', def: 'Nombre de périodes par seconde, f = 1/T, en hertz (Hz).', exemple: 'T = 2 ms ⟹ f = 500 Hz' },
 { terme: 'Hauteur d\'un son', def: 'Grave ou aigu : dépend de la fréquence (aigu = fréquence élevée).' },
 { terme: 'Niveau sonore', def: 'Mesuré en décibels (dB) ; lié à l\'amplitude/intensité. +3 dB quand l\'intensité double.' },
 { terme: 'Timbre', def: 'Forme du signal ; distingue deux sources jouant la même note.' },
 { terme: 'Domaine audible', def: '20 Hz à 20 000 Hz ; infrasons en dessous, ultrasons au-dessus.' }
],
quiz: [
 { q: 'Un signal a une période de 4 ms. Fréquence ?', choix: ['250 Hz', '4 Hz', '2 500 Hz', '0,25 Hz'], r: 0, exp: 'f = 1/0,004 = 250 Hz.' },
 { q: 'Un son plus aigu a…', choix: ['une plus grande amplitude', 'une fréquence plus élevée', 'une période plus longue', 'un niveau plus élevé'], r: 1, exp: 'Hauteur ↔ fréquence.' },
 { q: 'Le son ne se propage pas…', choix: ['dans l\'eau', 'dans l\'acier', 'dans le vide', 'dans l\'air'], r: 2, exp: 'Il lui faut de la matière à faire vibrer.' },
 { q: 'On entend le tonnerre 5 s après l\'éclair. Distance de l\'orage ?', choix: ['1,7 km', '68 m', '5 km', '17 km'], r: 0, exp: 'd = 340 × 5 = 1 700 m.' },
 { q: 'Quand l\'intensité sonore double, le niveau augmente de…', choix: ['2 dB', '3 dB', '10 dB', '100 %'], r: 1, exp: 'L\'échelle des décibels est logarithmique.' }
],
pieges: ['Confondre période (s) et fréquence (Hz) ; mesurer une seule période sur l\'oscillogramme (imprécis).', 'Oublier de convertir les ms en s avant f = 1/T.'],
astuces: ['Sur un oscillogramme, compte le nombre de carreaux pour 3 ou 4 périodes, puis divise.', 'Mnémo : plus la période est COURTE, plus le son est AIGU.'],
exos: [
 { enonce: 'Sur un oscillogramme réglé à 1 ms/division, 5 périodes occupent 8 divisions. Période et fréquence ?', correction: `5T = 8 ms ⟹ T = 1,6 ms = 1,6 × 10⁻³ s.
f = 1/T = **625 Hz**.` }
]},

{ id: 'pc-lumiere', theme: 'Ondes et signaux', titre: 'Lumière : spectres, réfraction, lentilles et œil', duree: 35,
cours: [
{ titre: 'Propagation et spectres', texte: `
La lumière se propage en **ligne droite** dans un milieu homogène, à c = 3,00 × 10⁸ m/s dans le vide. Une **année-lumière** est une distance (≈ 9,5 × 10¹⁵ m).
Chaque **radiation** est caractérisée par sa **longueur d'onde λ** (nm). Visible : **400 nm (violet) à 800 nm (rouge)**. UV en dessous, IR au-dessus.
Spectres :
- **Continu** d'émission : corps chaud (lampe à incandescence, étoile). Plus le corps est chaud, plus le spectre s'enrichit vers le bleu.
- **De raies** d'émission : gaz excité (lampe à vapeur de sodium), raies colorées sur fond noir : signature de l'élément.
- **De raies d'absorption** : raies noires sur fond continu : la lumière a traversé un gaz qui absorbe ses propres raies (atmosphère des étoiles ⟹ composition chimique).`},
{ titre: 'Réfraction : lois de Snell-Descartes', texte: `
Quand la lumière change de milieu, elle est déviée : **réfraction**. Angles mesurés par rapport à la **normale** (perpendiculaire à la surface).
$ n₁ × sin(i₁) = n₂ × sin(i₂)
n = **indice de réfraction** (air ≈ 1,00 ; eau 1,33 ; verre ≈ 1,5). Plus n est grand, plus le milieu est réfringent et plus la lumière y est lente (v = c/n).
- Passage air → verre (n₂ > n₁) : le rayon se **rapproche** de la normale (i₂ < i₁).
- Passage verre → air : il s'en **éloigne**. Au-delà d'un angle limite, il n'y a plus de réfraction : **réflexion totale** (fibres optiques).
**Dispersion** : n dépend de λ, d'où l'arc-en-ciel et le prisme : le violet est plus dévié que le rouge.
**Réflexion** : angle de réflexion = angle d'incidence.`},
{ titre: 'Lentilles minces convergentes', texte: `
Une lentille convergente (bords minces) a un **centre optique O**, un **foyer image F'** et un **foyer objet F**, et une **distance focale f' = OF'**. Vergence C = 1/f' (en dioptries δ, f' en m).
Trois rayons pour construire l'image A'B' d'un objet AB :
- Rayon passant par **O** : non dévié.
- Rayon parallèle à l'axe : ressort en passant par **F'**.
- Rayon passant par **F** : ressort parallèle à l'axe.
Image réelle (sur l'écran, renversée) si l'objet est avant F ; image virtuelle (loupe, droite, agrandie) si l'objet est entre F et O.
**Grandissement** γ = A'B'/AB = OA'/OA (mesures algébriques : négatif si image renversée).`},
{ titre: 'L\'œil et sa modélisation', texte: `
Modèle de l'œil réduit : **diaphragme** (iris + pupille), **lentille convergente** (cristallin), **écran** (rétine). L'image rétinienne est renversée, le cerveau la redresse.
**Accommodation** : le cristallin se bombe pour voir net de près (la distance focale diminue), car la distance cristallin-rétine est fixe. Un appareil photo, lui, déplace l'objectif.
Défauts : myopie (œil trop convergent, image avant la rétine, corrigé par lentille divergente), hypermétropie (inverse).`}
],
notions: [
 { terme: 'Longueur d\'onde λ', def: 'Caractérise une radiation lumineuse, en nm. Visible : 400 (violet) à 800 nm (rouge).' },
 { terme: 'Spectre continu', def: 'Émis par un corps chaud ; s\'enrichit en bleu quand la température augmente.' },
 { terme: 'Spectre de raies d\'émission', def: 'Raies colorées sur fond noir, émis par un gaz excité ; signature de l\'élément.' },
 { terme: 'Spectre de raies d\'absorption', def: 'Raies noires sur fond continu : un gaz a absorbé certaines radiations. Permet de connaître la composition des étoiles.' },
 { terme: 'Réfraction', def: 'Changement de direction de la lumière au passage d\'un milieu à un autre.' },
 { terme: 'Loi de Snell-Descartes', def: 'n₁ sin i₁ = n₂ sin i₂ ; angles par rapport à la normale.', exemple: 'air→eau, i₁ = 30° ⟹ sin i₂ = 0,5/1,33 ⟹ i₂ ≈ 22°' },
 { terme: 'Indice de réfraction n', def: 'n = c/v ≥ 1 ; air 1,00, eau 1,33, verre 1,5. Plus n est grand, plus la lumière est lente.' },
 { terme: 'Réflexion totale', def: 'Passage d\'un milieu plus réfringent vers un moins réfringent avec un angle d\'incidence trop grand : plus de réfraction. Fibres optiques.' },
 { terme: 'Dispersion', def: 'n dépend de λ : la lumière blanche est décomposée (prisme, arc-en-ciel) ; violet plus dévié que rouge.' },
 { terme: 'Lentille convergente', def: 'Bords minces ; centre optique O, foyers F et F\', distance focale f\' = OF\', vergence C = 1/f\' (dioptries).' },
 { terme: 'Trois rayons de construction', def: 'Par O : non dévié. Parallèle à l\'axe : passe par F\'. Par F : ressort parallèle à l\'axe.' },
 { terme: 'Grandissement γ', def: 'γ = A\'B\'/AB = OA\'/OA ; |γ| > 1 image agrandie ; γ < 0 image renversée.' },
 { terme: 'Accommodation', def: 'Le cristallin modifie sa distance focale (se bombe) pour former une image nette sur la rétine quel que soit l\'éloignement.' },
 { terme: 'Modèle de l\'œil réduit', def: 'Diaphragme (iris) + lentille convergente (cristallin) + écran (rétine).' }
],
quiz: [
 { q: 'Un rayon passe de l\'air (n = 1) à l\'eau (n = 1,33) avec i₁ = 40°. Angle réfracté ?', choix: ['≈ 29°', '≈ 40°', '≈ 59°', '≈ 13°'], r: 0, exp: 'sin i₂ = sin 40°/1,33 = 0,643/1,33 ≈ 0,483 ⟹ i₂ ≈ 28,9°.' },
 { q: 'Un spectre de raies d\'absorption est…', choix: ['des raies colorées sur fond noir', 'des raies noires sur fond coloré', 'un dégradé continu', 'émis par une lampe à incandescence'], r: 1, exp: 'Le gaz traversé absorbe certaines longueurs d\'onde.' },
 { q: 'Un rayon passant par le centre optique d\'une lentille…', choix: ['passe par F\'', 'n\'est pas dévié', 'ressort parallèle', 'est réfléchi'], r: 1, exp: 'C\'est l\'un des trois rayons de construction.' },
 { q: 'Une lentille de distance focale 25 cm a une vergence de…', choix: ['25 δ', '0,04 δ', '4 δ', '2,5 δ'], r: 2, exp: 'C = 1/0,25 = 4 dioptries (f\' en mètres).' },
 { q: 'Pour voir net un objet proche, l\'œil…', choix: ['recule la rétine', 'augmente la distance focale du cristallin', 'diminue la distance focale du cristallin', 'ferme la pupille'], r: 2, exp: 'Accommodation : le cristallin se bombe, il devient plus convergent.' },
 { q: 'Dans le vide, la lumière se propage à…', choix: ['340 m/s', '3 × 10⁸ m/s', '3 × 10⁵ m/s', '3 × 10⁸ km/s'], r: 1, exp: '300 000 km/s = 3 × 10⁸ m/s.' },
 { q: 'Lors du passage verre → air, le rayon réfracté…', choix: ['se rapproche de la normale', 's\'éloigne de la normale', 'n\'est pas dévié', 'disparaît toujours'], r: 1, exp: 'n diminue ⟹ i₂ > i₁. Au-delà de l\'angle limite : réflexion totale.' }
],
pieges: ['Mesurer les angles par rapport à la surface au lieu de la normale.', 'Mettre f\' en cm dans la vergence : C = 1/f\' avec f\' en MÈTRES.', 'Oublier que l\'année-lumière est une distance, pas un temps.', 'Dessiner un rayon par F\' qui ressort parallèle : c\'est par F (foyer objet) qu\'il doit passer avant la lentille.'],
astuces: ['Snell-Descartes : écris la formule, remplace, isole sin i₂, puis Arcsin sur la calculatrice en mode DEGRÉS.', 'Construction d\'image : deux rayons suffisent, le troisième sert de vérification.'],
exos: [
 { enonce: 'Un rayon arrive sur du verre (n = 1,5) depuis l\'air avec un angle d\'incidence de 60°. Calculer l\'angle de réfraction.', correction: `1,00 × sin 60° = 1,5 × sin i₂ ⟹ sin i₂ = 0,866/1,5 = 0,577 ⟹ **i₂ ≈ 35°**.
Le rayon se rapproche de la normale (milieu plus réfringent).` },
 { enonce: 'Un objet de 2 cm est placé à 15 cm d\'une lentille de distance focale 10 cm. Construire l\'image et donner ses caractéristiques (faire le schéma à l\'échelle).', correction: `Construction : le rayon par O non dévié, le rayon parallèle passe par F' (à 10 cm derrière). Ils se coupent à **30 cm** de la lentille.
Image **réelle, renversée, agrandie** : A'B' = 4 cm, γ = −2.` }
]},

{ id: 'pc-electricite', theme: 'Ondes et signaux', titre: 'Circuits électriques, loi d\'Ohm et capteurs', duree: 30,
cours: [
{ titre: 'Grandeurs et lois des circuits', texte: `
- **Tension** U (volt, V) : mesurée avec un voltmètre **en dérivation** (en parallèle).
- **Intensité** I (ampère, A) : mesurée avec un ampèremètre **en série**.
- **Loi des nœuds** : la somme des intensités qui arrivent à un nœud = somme de celles qui en partent (I = I₁ + I₂ dans un circuit en dérivation).
- **Loi des mailles** : dans une maille, la somme des tensions est nulle ; en série, U_générateur = U₁ + U₂.
- En série, l'intensité est la même partout ; en dérivation, la tension est la même pour chaque branche.`},
{ titre: 'Loi d\'Ohm et caractéristique', texte: `
Une **résistance** (conducteur ohmique) vérifie :
$ U = R × I        (U en V, I en A, R en ohms Ω)
Sa **caractéristique** (courbe U en fonction de I) est une **droite passant par l'origine** ; sa pente est R.
Un dipôle non ohmique (lampe, diode, DEL) a une caractéristique non linéaire.
**Point de fonctionnement** : intersection de la caractéristique du générateur et de celle du récepteur : c'est le (U ; I) réel du circuit.
Résistances en série : R_eq = R₁ + R₂.`},
{ titre: 'Capteurs', texte: `
Un **capteur** convertit une grandeur physique (température, lumière, pression) en grandeur électrique (résistance, tension).
- **Thermistance** (CTN) : résistance qui diminue quand la température augmente.
- **Photorésistance** (LDR) : résistance qui diminue avec l'éclairement.
- Microcontrôleur (Arduino) : lit la tension aux bornes du capteur via un pont diviseur et la convertit en valeur numérique.
On **étalonne** un capteur : on trace sa courbe de réponse (ex : R en fonction de T) pour pouvoir ensuite traduire une mesure.`}
],
notions: [
 { terme: 'Tension U', def: 'En volts (V) ; voltmètre branché en dérivation.' },
 { terme: 'Intensité I', def: 'En ampères (A) ; ampèremètre branché en série.' },
 { terme: 'Loi des nœuds', def: 'Somme des intensités entrant dans un nœud = somme des intensités sortant.', exemple: 'I = I₁ + I₂' },
 { terme: 'Loi des mailles', def: 'La tension du générateur se répartit entre les dipôles en série : U = U₁ + U₂.' },
 { terme: 'Loi d\'Ohm', def: 'U = R × I pour un conducteur ohmique ; R en ohms (Ω).', exemple: 'R = 100 Ω, I = 0,05 A ⟹ U = 5 V' },
 { terme: 'Caractéristique d\'un dipôle', def: 'Courbe U = f(I). Droite par l\'origine pour une résistance (pente = R).' },
 { terme: 'Point de fonctionnement', def: 'Intersection des caractéristiques du générateur et du récepteur : tension et intensité réelles du circuit.' },
 { terme: 'Capteur', def: 'Dispositif convertissant une grandeur physique en grandeur électrique (CTN, photorésistance…).' },
 { terme: 'Thermistance CTN', def: 'Résistance qui diminue quand la température augmente.' }
],
quiz: [
 { q: 'Une résistance de 220 Ω est traversée par 20 mA. Tension ?', choix: ['4,4 V', '11 V', '4 400 V', '0,09 V'], r: 0, exp: 'U = 220 × 0,020 = 4,4 V. Convertir les mA.' },
 { q: 'Un ampèremètre se branche…', choix: ['en dérivation', 'en série', 'aux bornes du générateur', 'n\'importe comment'], r: 1, exp: 'Il doit être traversé par le courant à mesurer.' },
 { q: 'La caractéristique d\'un conducteur ohmique est…', choix: ['une parabole', 'une droite passant par l\'origine', 'une droite ne passant pas par l\'origine', 'une courbe quelconque'], r: 1, exp: 'U proportionnelle à I.' },
 { q: 'Dans un circuit en dérivation, I = 0,5 A dans la branche principale et I₁ = 0,2 A. I₂ ?', choix: ['0,7 A', '0,3 A', '0,2 A', '0,1 A'], r: 1, exp: 'Loi des nœuds : 0,5 − 0,2 = 0,3 A.' },
 { q: 'La résistance d\'une CTN…', choix: ['augmente avec T', 'diminue quand T augmente', 'ne dépend pas de T', 'dépend de la lumière'], r: 1, exp: 'CTN = Coefficient de Température Négatif.' }
],
pieges: ['Oublier de convertir mA en A dans la loi d\'Ohm.', 'Brancher un ampèremètre en dérivation (court-circuit).', 'Lire la pente d\'une caractéristique I = f(U) comme R : c\'est 1/R dans ce sens.'],
astuces: ['Triangle U / (R × I) : cache la grandeur cherchée, le reste donne la formule.', 'Un graphique : regarde toujours ce qu\'il y a en abscisse et en ordonnée avant de calculer une pente.'],
exos: [
 { enonce: 'Un générateur 9 V alimente deux résistances en série R₁ = 100 Ω et R₂ = 200 Ω. Intensité et tension aux bornes de chaque résistance ?', correction: `R_eq = 300 Ω. I = U/R_eq = 9/300 = **0,03 A = 30 mA**.
U₁ = 100 × 0,03 = **3 V** ; U₂ = 200 × 0,03 = **6 V**. Vérif : 3 + 6 = 9 V (loi des mailles).` }
]}
]});
