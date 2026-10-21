window.PROGRAMME = window.PROGRAMME || [];
window.PROGRAMME.push({
id: 'maths', nom: 'Mathématiques', emoji: '📐', couleur: '#6366f1',
desc: "Programme officiel 2019 : nombres et calculs, géométrie (vecteurs, droites), fonctions, statistiques et probabilités, algorithmique en Python. En 2nde, tout repose sur le calcul littéral : si tu le maîtrises, le reste suit.",
ressources: [
 { nom: 'Maths et tiques (Yvan Monka)', url: 'https://www.maths-et-tiques.fr/index.php/cours-maths/niveau-seconde', ico: '🎥', desc: 'Cours + vidéos YouTube pour chaque chapitre de 2nde, la référence des profs.' },
 { nom: 'Khan Academy (FR)', url: 'https://fr.khanacademy.org/math', ico: '🧩', desc: 'Exercices interactifs avec correction immédiate, parfait pour le rappel actif.' },
 { nom: 'Kartable 2nde', url: 'https://www.kartable.fr/seconde/mathematiques', ico: '📚', desc: 'Fiches de cours synthétiques et exercices corrigés.' },
 { nom: 'Python en ligne (Basthon)', url: 'https://console.basthon.fr/', ico: '🐍', desc: 'Pour tester tes algorithmes sans rien installer.' },
 { nom: 'Programme officiel (BO)', url: 'https://eduscol.education.fr/1667/programmes-et-ressources-en-mathematiques-voie-gt', ico: '📜', desc: 'Le vrai programme, pour savoir exactement ce qui peut tomber.' }
],
chapitres: [
/* ---------------- NOMBRES ET CALCULS ---------------- */
{ id: 'm-ensembles', theme: 'Nombres et calculs', titre: 'Ensembles de nombres, intervalles et valeur absolue', duree: 25,
cours: [
{ titre: 'Les ensembles de nombres', texte: `
Les nombres sont rangés en ensembles emboîtés, du plus petit au plus grand :
$ ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ
- **ℕ** entiers naturels : 0, 1, 2, 3…
- **ℤ** entiers relatifs : …, −2, −1, 0, 1, 2…
- **𝔻** décimaux : nombres avec un nombre fini de chiffres après la virgule (ex : 3,25 ; −0,7 ; 12).
- **ℚ** rationnels : quotients p/q d'entiers (ex : 1/3 = 0,333… ; tout décimal est rationnel).
- **ℝ** réels : tous les nombres de la droite graduée, y compris les **irrationnels** comme √2, π.
Le symbole **∈** signifie « appartient à » : 3 ∈ ℕ, −2 ∉ ℕ, √2 ∈ ℝ mais √2 ∉ ℚ.
! Pour savoir si une fraction est décimale : simplifie-la, puis regarde le dénominateur. S'il ne contient que des facteurs 2 et 5, elle est décimale (7/20 = 0,35). Sinon non (1/3, 5/6).`},
{ titre: 'Intervalles', texte: `
Un intervalle est un « morceau » de la droite des réels.
- [a ; b] : fermé, a et b compris. x ∈ [2 ; 5] ⟺ 2 ≤ x ≤ 5.
- ]a ; b[ : ouvert, bornes exclues. 2 < x < 5.
- [a ; +∞[ : x ≥ a. L'infini est **toujours** ouvert (crochet tourné vers l'extérieur).
- ]−∞ ; b] : x ≤ b.
**Réunion** ∪ (« ou ») et **intersection** ∩ (« et ») : [0 ; 3] ∩ [2 ; 5] = [2 ; 3] ; [0 ; 3] ∪ [2 ; 5] = [0 ; 5].
X Ne confonds pas « x > 2 » (]2 ; +∞[) et « x ≥ 2 » ([2 ; +∞[). Un seul crochet change tout.`},
{ titre: 'Valeur absolue et distance', texte: `
La valeur absolue |x| est la **distance de x à 0** : |5| = 5, |−5| = 5.
$ |a − b| = distance entre a et b sur la droite
Donc |x − 3| ≤ 2 signifie « x est à une distance de 3 inférieure ou égale à 2 », c'est-à-dire x ∈ [1 ; 5].
En général : |x − a| ≤ r ⟺ x ∈ [a − r ; a + r] (intervalle de centre a et de rayon r).`},
{ titre: 'Arithmétique : multiples, diviseurs, nombres premiers', texte: `
- a est un **multiple** de b (ou b **divise** a) s'il existe un entier k tel que a = k × b. 42 = 6 × 7 : 42 est multiple de 6 et de 7.
- Un entier est **pair** s'il s'écrit 2k, **impair** s'il s'écrit 2k + 1.
- Un **nombre premier** a exactement deux diviseurs : 1 et lui-même. 2, 3, 5, 7, 11, 13, 17, 19, 23… **1 n'est pas premier**.
- Tout entier ≥ 2 se décompose de façon unique en produit de facteurs premiers : 360 = 2³ × 3² × 5.
! Démonstration classique : « la somme de deux entiers impairs est paire » → (2k+1) + (2p+1) = 2(k+p+1) = 2 × entier. Apprends ce modèle, il revient tout le temps.`}
],
notions: [
 { terme: 'ℕ, ℤ, 𝔻, ℚ, ℝ', def: 'Entiers naturels ⊂ entiers relatifs ⊂ décimaux ⊂ rationnels ⊂ réels. Chaque ensemble contient le précédent.' },
 { terme: 'Nombre rationnel', def: 'Nombre qui peut s\'écrire comme quotient p/q de deux entiers (q ≠ 0).', exemple: '2/3, −7, 0,25 = 1/4' },
 { terme: 'Nombre irrationnel', def: 'Réel qui ne peut pas s\'écrire comme une fraction d\'entiers. Son écriture décimale est infinie non périodique.', exemple: '√2, π' },
 { terme: 'Nombre décimal', def: 'Nombre ayant un nombre fini de chiffres après la virgule. Fraction irréductible dont le dénominateur n\'a que des facteurs 2 et 5.', exemple: '7/20 = 0,35 oui ; 1/3 non' },
 { terme: 'Intervalle [a ; b]', def: 'Ensemble des réels x tels que a ≤ x ≤ b (bornes comprises). Crochets vers l\'extérieur ]a ; b[ = bornes exclues.' },
 { terme: 'Intersection ∩ / réunion ∪', def: '∩ = les éléments communs (« et »). ∪ = tous les éléments de l\'un ou de l\'autre (« ou »).', exemple: '[0;3]∩[2;5]=[2;3] ; [0;3]∪[2;5]=[0;5]' },
 { terme: 'Valeur absolue |x|', def: 'Distance de x à 0 ; toujours positive. |a − b| est la distance entre a et b.', exemple: '|−4| = 4 ; |x−3| ≤ 2 ⟺ x ∈ [1;5]' },
 { terme: 'Nombre premier', def: 'Entier ayant exactement deux diviseurs : 1 et lui-même. 1 n\'est pas premier, 2 est le seul premier pair.', exemple: '2, 3, 5, 7, 11, 13' },
 { terme: 'Multiple / diviseur', def: 'a est multiple de b s\'il existe un entier k avec a = k·b ; on dit alors que b divise a.', exemple: '42 = 6 × 7' },
 { terme: 'Entier pair / impair', def: 'Pair : s\'écrit 2k. Impair : s\'écrit 2k + 1 (k entier). Base de nombreuses démonstrations.' }
],
quiz: [
 { q: 'À quel plus petit ensemble appartient −3/4 ?', choix: ['ℤ', '𝔻', 'ℚ', 'ℝ seulement'], r: 1, exp: '−3/4 = −0,75 est un décimal (nombre fini de chiffres après la virgule). Il est aussi dans ℚ et ℝ, mais pas dans ℤ.' },
 { q: 'Que signifie x ∈ ]−∞ ; 4] ?', choix: ['x < 4', 'x ≤ 4', 'x > 4', 'x ≥ 4'], r: 1, exp: 'Le crochet fermé en 4 inclut 4, et −∞ est toujours ouvert.' },
 { q: '[−1 ; 3] ∩ ]0 ; 5] = ?', choix: ['[−1 ; 5]', ']0 ; 3]', '[0 ; 3]', ']0 ; 3['], r: 1, exp: 'Intersection = partie commune. 0 est exclu (crochet ouvert de ]0;5]), 3 est inclus.' },
 { q: 'L\'ensemble des x tels que |x − 2| ≤ 3 est…', choix: ['[−1 ; 5]', '[−3 ; 3]', '[2 ; 5]', ']−1 ; 5['], r: 0, exp: 'Distance à 2 inférieure ou égale à 3 : de 2−3 = −1 à 2+3 = 5, bornes comprises.' },
 { q: 'Lequel est premier ?', choix: ['51', '57', '59', '91'], r: 2, exp: '51 = 3×17, 57 = 3×19, 91 = 7×13. 59 n\'a aucun diviseur autre que 1 et lui-même.' },
 { q: '1/3 est-il décimal ?', choix: ['Oui, 0,33', 'Non, son écriture décimale est infinie', 'Oui car c\'est un rationnel', 'Il n\'est ni décimal ni rationnel'], r: 1, exp: '1/3 = 0,3333… infini périodique : rationnel mais pas décimal. Le dénominateur 3 n\'est ni 2 ni 5.' },
 { q: 'La somme de deux impairs est…', choix: ['toujours impaire', 'toujours paire', 'parfois paire', 'premier'], r: 1, exp: '(2k+1)+(2p+1) = 2(k+p+1), multiple de 2.' }
],
pieges: ['Écrire ]2 ; +∞] avec un crochet fermé sur l\'infini : l\'infini n\'est jamais atteint, crochet toujours ouvert.', 'Dire que 0,999… n\'est pas rationnel : il vaut 1 ! Et π ≈ 3,14 n\'est pas une fraction, π est irrationnel.', 'Oublier que 1 n\'est pas premier et que 2 est premier.'],
astuces: ['Pour simplifier une fraction, décompose numérateur et dénominateur en facteurs premiers et barre les facteurs communs.', 'Pour résoudre |x − a| ≤ r, pense « intervalle centré en a de rayon r ».'],
exos: [
 { enonce: 'Montrer que le produit de deux entiers impairs est impair.', correction: `Soient a = 2k + 1 et b = 2p + 1.
a × b = (2k+1)(2p+1) = 4kp + 2k + 2p + 1 = 2(2kp + k + p) + 1.
C'est de la forme 2 × entier + 1 : donc impair.` },
 { enonce: 'Déterminer l\'ensemble des réels x tels que |x + 1| < 4, puis l\'écrire comme intervalle.', correction: `|x + 1| = |x − (−1)| : distance entre x et −1.
Distance < 4 ⟺ −1 − 4 < x < −1 + 4 ⟺ x ∈ ]−5 ; 3[.` },
 { enonce: 'La fraction 21/60 est-elle décimale ?', correction: `21/60 = 7/20 (division par 3). 20 = 2² × 5 : seulement des 2 et des 5, donc oui : 7/20 = 0,35.` }
]},

{ id: 'm-calcul', theme: 'Nombres et calculs', titre: 'Puissances, racines carrées et calcul littéral', duree: 35,
cours: [
{ titre: 'Puissances', texte: `
$ aⁿ × aᵐ = aⁿ⁺ᵐ    aⁿ / aᵐ = aⁿ⁻ᵐ    (aⁿ)ᵐ = aⁿˣᵐ    (ab)ⁿ = aⁿbⁿ    a⁻ⁿ = 1/aⁿ    a⁰ = 1
Notation scientifique : a × 10ⁿ avec 1 ≤ a < 10. Ex : 0,00052 = 5,2 × 10⁻⁴.
X (a + b)ⁿ ≠ aⁿ + bⁿ. Les puissances se distribuent sur un produit, jamais sur une somme.`},
{ titre: 'Racines carrées', texte: `
√a est le nombre **positif** dont le carré vaut a (a ≥ 0). (√a)² = a et √(a²) = |a|.
$ √(a × b) = √a × √b    √(a / b) = √a / √b    mais √(a + b) ≠ √a + √b
Simplifier : √50 = √(25 × 2) = 5√2. Chercher le plus grand carré parfait (4, 9, 16, 25, 36, 49, 64, 81, 100…) qui divise.
Rendre un dénominateur rationnel : 1/√3 = √3/3 (on multiplie haut et bas par √3).`},
{ titre: 'Développer : distributivité et identités remarquables', texte: `
$ k(a + b) = ka + kb      (a + b)(c + d) = ac + ad + bc + bd
Les trois identités remarquables, à savoir dans les **deux sens** :
$ (a + b)² = a² + 2ab + b²
$ (a − b)² = a² − 2ab + b²
$ (a + b)(a − b) = a² − b²
Ex : (2x + 3)² = 4x² + 12x + 9. (3x − 1)(3x + 1) = 9x² − 1.
X Erreur n°1 de la 2nde : (a + b)² = a² + b². FAUX, il manque le double produit 2ab.`},
{ titre: 'Factoriser', texte: `
Factoriser = transformer une somme en produit. Trois outils, dans cet ordre :
- **Facteur commun** : 3x² + 6x = 3x(x + 2). Aussi (x+1)(2x−3) + (x+1)(x+5) = (x+1)(3x+2).
- **Identité a² − b²** : x² − 9 = (x − 3)(x + 3) ; 4x² − 25 = (2x − 5)(2x + 5).
- **Carré parfait** : x² + 6x + 9 = (x + 3)².
! Pourquoi factoriser ? Pour résoudre une équation « produit nul » : A × B = 0 ⟺ A = 0 ou B = 0. Et pour étudier un signe avec un tableau.`}
],
notions: [
 { terme: 'aⁿ × aᵐ', def: '= aⁿ⁺ᵐ (on additionne les exposants quand on multiplie des puissances de même base).', exemple: '2³ × 2⁴ = 2⁷' },
 { terme: 'a⁻ⁿ', def: '= 1/aⁿ. Une puissance négative est un inverse.', exemple: '10⁻³ = 0,001' },
 { terme: '(aⁿ)ᵐ', def: '= aⁿˣᵐ (on multiplie les exposants).', exemple: '(x²)³ = x⁶' },
 { terme: 'Notation scientifique', def: 'a × 10ⁿ avec 1 ≤ a < 10 et n entier relatif.', exemple: '3 450 000 = 3,45 × 10⁶' },
 { terme: '√(a×b)', def: '= √a × √b. Permet de simplifier : √72 = √(36×2) = 6√2. Ne marche PAS pour une somme.' },
 { terme: '(a + b)²', def: '= a² + 2ab + b². Ne pas oublier le double produit.', exemple: '(x+5)² = x² + 10x + 25' },
 { terme: '(a − b)²', def: '= a² − 2ab + b².', exemple: '(2x−1)² = 4x² − 4x + 1' },
 { terme: '(a + b)(a − b)', def: '= a² − b². Utile dans les deux sens, surtout pour factoriser.', exemple: 'x² − 16 = (x−4)(x+4)' },
 { terme: 'Factoriser', def: 'Écrire une somme sous forme de produit (facteur commun ou identité remarquable). L\'inverse de développer.' },
 { terme: 'Équation produit nul', def: 'A × B = 0 ⟺ A = 0 ou B = 0. C\'est pour ça qu\'on factorise.', exemple: '(x−2)(x+5)=0 ⟺ x=2 ou x=−5' }
],
quiz: [
 { q: '(3x − 2)² = ?', choix: ['9x² − 4', '9x² − 12x + 4', '9x² + 4', '3x² − 12x + 4'], r: 1, exp: '(a−b)² = a² − 2ab + b² avec a = 3x, b = 2 : 9x² − 12x + 4.' },
 { q: 'Factoriser x² − 49.', choix: ['(x − 7)²', '(x − 49)(x + 1)', '(x − 7)(x + 7)', 'Impossible'], r: 2, exp: 'a² − b² = (a−b)(a+b) avec b = 7.' },
 { q: '√75 simplifié vaut…', choix: ['5√3', '3√5', '25√3', '√25 + √50'], r: 0, exp: '75 = 25 × 3, donc √75 = √25 × √3 = 5√3.' },
 { q: '2⁵ × 2⁻³ = ?', choix: ['2⁻¹⁵', '2⁸', '4', '2²  = 4'], r: 3, exp: 'Même base : on additionne les exposants, 5 + (−3) = 2, donc 2² = 4.' },
 { q: 'Résoudre (2x + 1)(x − 4) = 0.', choix: ['x = −1/2 ou x = 4', 'x = 1/2 ou x = −4', 'x = −1 ou x = 4', 'x = 4 seulement'], r: 0, exp: 'Produit nul : 2x+1 = 0 ⟹ x = −1/2 ; x−4 = 0 ⟹ x = 4.' },
 { q: 'Factoriser 5x² − 10x.', choix: ['5(x² − 2x)', '5x(x − 2)', 'x(5x − 10)', '5x(x − 10)'], r: 1, exp: 'Le facteur commun maximal est 5x : 5x × x − 5x × 2 = 5x(x − 2).' },
 { q: '0,000 43 en notation scientifique :', choix: ['4,3 × 10⁻⁴', '43 × 10⁻⁵', '4,3 × 10⁴', '0,43 × 10⁻³'], r: 0, exp: 'On déplace la virgule de 4 rangs vers la droite : 4,3 × 10⁻⁴.' }
],
pieges: ['(a + b)² = a² + b² : FAUX. Toujours trois termes.', '√(a + b) = √a + √b : FAUX. √(9+16) = 5, pas 3 + 4 = 7.', 'Quand on développe −(x − 3), le signe moins s\'applique aux DEUX termes : −x + 3.', 'Factoriser x² − 6x + 9 en (x−3)² mais écrire x² + 6x + 9 = (x−3)² : vérifie le signe du double produit.'],
astuces: ['Pour vérifier une factorisation, redéveloppe-la mentalement. Pour vérifier un développement, teste avec x = 1 des deux côtés.', 'Face à une expression à factoriser, cherche d\'abord un facteur commun, ensuite seulement une identité remarquable.', 'Programme de calcul = traduis chaque étape par une opération, dans l\'ordre, avec des parenthèses.'],
exos: [
 { enonce: 'Développer et réduire A = (2x + 3)² − (x − 1)(x + 1).', correction: `(2x+3)² = 4x² + 12x + 9.
(x−1)(x+1) = x² − 1.
A = 4x² + 12x + 9 − (x² − 1) = 4x² + 12x + 9 − x² + 1 = **3x² + 12x + 10**.` },
 { enonce: 'Factoriser B = (x + 2)² − 16 puis résoudre B = 0.', correction: `B = (x+2)² − 4² = (x + 2 − 4)(x + 2 + 4) = (x − 2)(x + 6).
B = 0 ⟺ x − 2 = 0 ou x + 6 = 0 ⟺ **x = 2 ou x = −6**.` },
 { enonce: 'Écrire √12 + √27 − √3 sous la forme a√3.', correction: `√12 = √(4×3) = 2√3 ; √27 = √(9×3) = 3√3.
Somme = 2√3 + 3√3 − √3 = **4√3**.` }
]},

{ id: 'm-equations', theme: 'Nombres et calculs', titre: 'Équations, inéquations et tableaux de signes', duree: 35,
cours: [
{ titre: 'Résoudre une équation', texte: `
Une équation est une égalité avec une inconnue. On garde l'égalité en faisant la **même opération des deux côtés**.
- **Premier degré** : 3x − 7 = 2x + 5 ⟹ 3x − 2x = 5 + 7 ⟹ x = 12.
- **Produit nul** : (x − 1)(2x + 6) = 0 ⟹ x = 1 ou x = −3.
- **x² = a** : si a > 0, deux solutions x = √a ou x = −√a ; si a = 0, x = 0 ; si a < 0, aucune solution.
- **Quotient nul** : A/B = 0 ⟺ A = 0 et B ≠ 0 (valeur interdite !).
! Si l'équation a un x² et n'est pas de la forme x² = a, essaie de tout passer d'un côté et de factoriser.`},
{ titre: 'Inéquations du premier degré', texte: `
Même méthode qu'une équation, avec **une règle en plus** :
X Quand on multiplie ou divise par un nombre **négatif**, on **change le sens** de l'inégalité.
−2x + 3 > 7 ⟹ −2x > 4 ⟹ x < −2.
La solution s'écrit sous forme d'intervalle : S = ]−∞ ; −2[.`},
{ titre: 'Signe d\'une expression affine', texte: `
ax + b s'annule en x = −b/a. Son signe est celui de **a** à droite de cette valeur, et celui de −a à gauche.
Ex : 2x − 6 : s'annule en 3 ; a = 2 > 0 ⟹ négatif avant 3, positif après.
Ex : −x + 4 : s'annule en 4 ; a = −1 < 0 ⟹ positif avant 4, négatif après.
! Moyen mnémotechnique : « signe de −a à gauche, signe de a à droite ».`},
{ titre: 'Tableau de signes et inéquations produit / quotient', texte: `
Pour résoudre (x − 1)(−2x + 6) ≥ 0 :
- Une ligne par facteur : on cherche la racine de chacun (1 et 3) et son signe.
- Ligne du produit : règle des signes colonne par colonne.
- On lit les x pour lesquels le produit est ≥ 0 : ici S = [1 ; 3].
Pour un quotient, on met une **double barre** aux valeurs qui annulent le dénominateur (valeurs interdites) : elles sont toujours exclues.
X On ne résout JAMAIS une inéquation produit en « divisant par un facteur » : on ne connaît pas son signe. Tableau obligatoire.`}
],
notions: [
 { terme: 'Équation du premier degré', def: 'Équation de la forme ax + b = cx + d. On regroupe les x d\'un côté, les nombres de l\'autre.', exemple: '3x−7=2x+5 ⟹ x=12' },
 { terme: 'Équation x² = a', def: 'Si a > 0 : x = √a ou x = −√a. Si a = 0 : x = 0. Si a < 0 : pas de solution.', exemple: 'x² = 9 ⟹ x = 3 ou −3' },
 { terme: 'Équation quotient nul', def: 'A/B = 0 ⟺ A = 0 ET B ≠ 0. Toujours exclure les valeurs interdites.' },
 { terme: 'Valeur interdite', def: 'Valeur de x qui annule un dénominateur ; elle est exclue de l\'ensemble de définition et des solutions.', exemple: '(x+1)/(x−2) : valeur interdite 2' },
 { terme: 'Règle des inéquations', def: 'On peut ajouter/soustraire librement ; multiplier/diviser par un négatif change le sens de l\'inégalité.', exemple: '−2x > 4 ⟹ x < −2' },
 { terme: 'Signe de ax + b', def: 'S\'annule en −b/a. Signe de −a à gauche, signe de a à droite.', exemple: '2x−6 : négatif si x<3, positif si x>3' },
 { terme: 'Tableau de signes', def: 'Tableau avec une ligne par facteur, et une ligne pour le produit/quotient (règle des signes). Sert à résoudre les inéquations produit.' },
 { terme: 'Ensemble des solutions S', def: 'Réponse d\'une inéquation, à écrire comme intervalle ou réunion d\'intervalles.', exemple: 'S = ]−∞ ; 1] ∪ [3 ; +∞[' }
],
quiz: [
 { q: 'Résoudre −3x + 5 ≤ 11.', choix: ['x ≤ −2', 'x ≥ −2', 'x ≤ 2', 'x ≥ 2'], r: 1, exp: '−3x ≤ 6 ; on divise par −3 (négatif) : x ≥ −2.' },
 { q: 'Solutions de x² = 16 ?', choix: ['4', '−4', '4 et −4', '8'], r: 2, exp: 'Deux solutions : x = √16 = 4 ou x = −4.' },
 { q: 'Solutions de x² + 5 = 0 ?', choix: ['√5 et −√5', 'Aucune', '−5', '0'], r: 1, exp: 'x² = −5 impossible : un carré est toujours ≥ 0.' },
 { q: 'Le signe de −4x + 8 est…', choix: ['positif pour x > 2', 'négatif pour x > 2', 'toujours négatif', 'positif pour x > −2'], r: 1, exp: 'Racine 2 ; a = −4 < 0 donc négatif à droite de 2 (signe de a).' },
 { q: '(x − 2)/(x + 3) = 0 a pour solution…', choix: ['x = 2', 'x = −3', 'x = 2 ou x = −3', 'aucune'], r: 0, exp: 'Numérateur nul ⟹ x = 2 ; −3 est valeur interdite, pas une solution.' },
 { q: 'Résoudre (x + 1)(x − 4) < 0.', choix: [']−1 ; 4[', ']−∞;−1[ ∪ ]4;+∞[', '[−1 ; 4]', ']−4 ; 1['], r: 0, exp: 'Racines −1 et 4 ; le produit est négatif entre les racines (tableau de signes).' }
],
pieges: ['Diviser une inéquation par −2 sans retourner le signe.', 'Oublier la solution négative de x² = a.', 'Résoudre (x−1)(x+2) = 5 en posant x − 1 = 5 : le produit nul ne marche que si c\'est = 0.', 'Mettre une valeur interdite dans les solutions.'],
astuces: ['Vérifie toujours une équation en remplaçant x par la solution trouvée.', 'Pour une inéquation, prends une valeur test dans ton intervalle solution (ex : x = 0) et vérifie qu\'elle marche.', 'Dans un tableau de signes, les racines classées dans l\'ordre croissant, sinon tout est faux.'],
exos: [
 { enonce: 'Résoudre l\'inéquation (2x − 4)(−x − 1) ≥ 0.', correction: `Racines : 2x − 4 = 0 ⟹ x = 2 ; −x − 1 = 0 ⟹ x = −1.
Signe de 2x − 4 : − avant 2, + après. Signe de −x − 1 : + avant −1, − après.
Tableau : x < −1 : (−)(+) = − ; −1 < x < 2 : (−)(−) = + ; x > 2 : (+)(−) = −.
Produit ≥ 0 sur **S = [−1 ; 2]**.` },
 { enonce: 'Résoudre x² − 3x = 0.', correction: `Factorisation : x(x − 3) = 0 ⟹ x = 0 ou x = 3. **S = {0 ; 3}**.
(Surtout ne pas diviser par x : on perdrait la solution 0.)` },
 { enonce: 'Résoudre (3x + 2)/(x − 1) ≤ 0.', correction: `Valeur interdite : x = 1. Racine du numérateur : x = −2/3.
3x + 2 : − avant −2/3, + après. x − 1 : − avant 1, + après.
Quotient : + sur ]−∞;−2/3[, − sur ]−2/3;1[, + après 1.
**S = [−2/3 ; 1[** (1 exclu, double barre).` }
]},

/* ---------------- GÉOMÉTRIE ---------------- */
{ id: 'm-vecteurs', theme: 'Géométrie', titre: 'Vecteurs : coordonnées, somme, colinéarité', duree: 40,
cours: [
{ titre: 'Qu\'est-ce qu\'un vecteur ?', texte: `
Un vecteur **AB→** représente un déplacement (une **translation**) de A vers B. Il a une **direction**, un **sens** et une **longueur** (norme ‖AB→‖ = AB).
Deux vecteurs sont **égaux** s'ils ont même direction, même sens, même longueur : AB→ = DC→ ⟺ ABCD est un parallélogramme.
Le vecteur **opposé** de AB→ est BA→ = −AB→. Le **vecteur nul** 0→ = AA→.`},
{ titre: 'Coordonnées d\'un vecteur', texte: `
Dans un repère, si A(x_A ; y_A) et B(x_B ; y_B) :
$ AB→ ( x_B − x_A ; y_B − y_A )    (« arrivée moins départ »)
Norme (repère orthonormé) :
$ ‖AB→‖ = AB = √( (x_B − x_A)² + (y_B − y_A)² )
Milieu de [AB] : I( (x_A + x_B)/2 ; (y_A + y_B)/2 ).
Ex : A(1 ; 2), B(4 ; 6) : AB→(3 ; 4), AB = √(9 + 16) = 5, milieu (2,5 ; 4).`},
{ titre: 'Somme et produit par un réel', texte: `
- **Relation de Chasles** : AB→ + BC→ = AC→ (on « enchaîne » les déplacements).
- **Règle du parallélogramme** : AB→ + AD→ = AC→ si ABCD est un parallélogramme.
- Coordonnées : u→(x ; y) + v→(x' ; y') = (x + x' ; y + y') ; k·u→ = (kx ; ky).
k·u→ a la même direction que u→, même sens si k > 0, sens contraire si k < 0, et une longueur |k| fois plus grande.`},
{ titre: 'Colinéarité et déterminant', texte: `
u→ et v→ sont **colinéaires** s'il existe un réel k tel que v→ = k·u→ (même direction).
$ det(u→, v→) = x y' − y x'      u→ et v→ colinéaires ⟺ det = 0
Applications :
- (AB) et (CD) sont **parallèles** ⟺ AB→ et CD→ colinéaires.
- A, B, C sont **alignés** ⟺ AB→ et AC→ colinéaires.
Ex : u→(2 ; 3), v→(4 ; 6) : det = 2×6 − 3×4 = 0 ⟹ colinéaires (v→ = 2u→).
! Le déterminant est LA méthode à retenir : calcul rapide, pas de division, pas de cas particulier.`}
],
notions: [
 { terme: 'Vecteur AB→', def: 'Déplacement de A vers B, caractérisé par une direction, un sens et une longueur (norme).' },
 { terme: 'Vecteurs égaux', def: 'Même direction, même sens, même norme. AB→ = DC→ ⟺ ABCD est un parallélogramme.' },
 { terme: 'Coordonnées de AB→', def: '(x_B − x_A ; y_B − y_A) : arrivée moins départ.', exemple: 'A(1;2), B(4;6) ⟹ AB→(3;4)' },
 { terme: 'Norme ‖AB→‖', def: 'Longueur AB = √((x_B−x_A)² + (y_B−y_A)²) dans un repère orthonormé.', exemple: 'AB→(3;4) ⟹ ‖AB→‖ = 5' },
 { terme: 'Milieu de [AB]', def: 'I((x_A+x_B)/2 ; (y_A+y_B)/2) : moyenne des coordonnées.' },
 { terme: 'Relation de Chasles', def: 'AB→ + BC→ = AC→ : on enchaîne les vecteurs, le point intermédiaire disparaît.' },
 { terme: 'Produit k·u→', def: 'Vecteur de coordonnées (kx ; ky), même direction que u→, même sens si k > 0, sens opposé si k < 0.' },
 { terme: 'Vecteurs colinéaires', def: 'Même direction : il existe k tel que v→ = k·u→. Caractérisation : déterminant nul.' },
 { terme: 'Déterminant det(u→,v→)', def: 'xy\' − yx\'. Nul ⟺ les vecteurs sont colinéaires.', exemple: 'u(2;3), v(4;6) : 12−12 = 0' },
 { terme: 'Points alignés', def: 'A, B, C alignés ⟺ AB→ et AC→ colinéaires ⟺ det(AB→, AC→) = 0.' }
],
quiz: [
 { q: 'A(−1 ; 3) et B(2 ; −1). Coordonnées de AB→ ?', choix: ['(−3 ; 4)', '(3 ; −4)', '(1 ; 2)', '(−1 ; −3)'], r: 1, exp: 'Arrivée − départ : (2−(−1) ; −1−3) = (3 ; −4).' },
 { q: 'Norme de u→(−6 ; 8) ?', choix: ['2', '14', '10', '100'], r: 2, exp: '√(36 + 64) = √100 = 10.' },
 { q: 'AB→ + BD→ + DC→ = ?', choix: ['AC→', 'CA→', 'BC→', '0→'], r: 0, exp: 'Chasles : les points intermédiaires B et D disparaissent.' },
 { q: 'u→(3 ; −2) et v→(−6 ; 4) sont…', choix: ['orthogonaux', 'colinéaires', 'égaux', 'ni l\'un ni l\'autre'], r: 1, exp: 'det = 3×4 − (−2)(−6) = 12 − 12 = 0, et v→ = −2u→.' },
 { q: 'Si AB→ = DC→, alors ABCD est…', choix: ['un rectangle', 'un losange', 'un parallélogramme', 'un carré'], r: 2, exp: 'C\'est la caractérisation vectorielle du parallélogramme (ordre des lettres important).' },
 { q: 'Milieu de [AB] avec A(2 ; 5) et B(−4 ; 1) ?', choix: ['(−1 ; 3)', '(−2 ; 6)', '(3 ; 2)', '(−1 ; 2)'], r: 0, exp: '((2−4)/2 ; (5+1)/2) = (−1 ; 3).' },
 { q: 'Si det(u→, v→) ≠ 0, alors…', choix: ['u→ et v→ sont colinéaires', 'u→ et v→ ne sont pas colinéaires', 'u→ = v→', 'l\'un des deux est nul'], r: 1, exp: 'Le déterminant est nul si et seulement si les vecteurs sont colinéaires.' }
],
pieges: ['Calculer AB→ comme « départ − arrivée » : c\'est l\'inverse.', 'Confondre ABCD parallélogramme ⟺ AB→ = DC→ (et non AB→ = CD→, qui donnerait un parallélogramme « croisé »).', 'Oublier la racine carrée dans la norme.', 'Déterminant : produit « en croix » avec un signe moins ; xy\' − yx\', pas xx\' − yy\'.'],
astuces: ['Pour montrer que deux droites sont parallèles ou que trois points sont alignés : calcule un déterminant, conclus.', 'Pour montrer qu\'un quadrilatère est un parallélogramme : montre AB→ = DC→ avec les coordonnées.', 'Fais toujours une figure à main levée, même approximative, pour vérifier la cohérence des signes.'],
exos: [
 { enonce: 'A(1 ; 1), B(4 ; 3), C(6 ; 7), D(3 ; 5). Montrer que ABCD est un parallélogramme.', correction: `AB→ (4−1 ; 3−1) = (3 ; 2). DC→ (6−3 ; 7−5) = (3 ; 2).
AB→ = DC→ donc **ABCD est un parallélogramme**.` },
 { enonce: 'A(−2 ; 1), B(1 ; 3), C(7 ; 7). Les points sont-ils alignés ?', correction: `AB→(3 ; 2), AC→(9 ; 6).
det = 3×6 − 2×9 = 18 − 18 = 0 ⟹ colinéaires ⟹ **A, B, C alignés** (AC→ = 3 AB→).` },
 { enonce: 'Soit M tel que AM→ = 2AB→ − AC→ avec A(0;0), B(1;2), C(3;1). Coordonnées de M ?', correction: `AB→(1;2), AC→(3;1). 2AB→ − AC→ = (2−3 ; 4−1) = (−1 ; 3).
AM→ = (x_M − 0 ; y_M − 0) ⟹ **M(−1 ; 3)**.` }
]},

{ id: 'm-droites', theme: 'Géométrie', titre: 'Équations de droites et systèmes', duree: 35,
cours: [
{ titre: 'Équation réduite y = mx + p', texte: `
Toute droite **non verticale** a une équation réduite **y = mx + p**.
- **m** : coefficient directeur (la pente). m = (y_B − y_A)/(x_B − x_A) = Δy/Δx.
- **p** : ordonnée à l'origine (point (0 ; p)).
Une droite **verticale** a pour équation x = c.
Ex : droite passant par A(1 ; 2) et B(3 ; 8) : m = (8−2)/(3−1) = 3. Puis 2 = 3×1 + p ⟹ p = −1. Équation : y = 3x − 1.
! Deux droites y = mx + p et y = m'x + p' sont **parallèles** ⟺ m = m'.`},
{ titre: 'Équation cartésienne ax + by + c = 0', texte: `
Forme générale valable pour TOUTES les droites (verticales comprises).
Le vecteur **u→(−b ; a)** est un **vecteur directeur** de la droite (il indique sa direction).
Réciproquement, une droite de vecteur directeur u→(α ; β) a une équation de la forme βx − αy + c = 0.
Passage réduite → cartésienne : y = 2x − 3 ⟺ 2x − y − 3 = 0 (vecteur directeur (1 ; 2)).
Deux droites sont parallèles ⟺ leurs vecteurs directeurs sont colinéaires (déterminant nul).`},
{ titre: 'Appartenance et intersection', texte: `
- Un point M(x ; y) **appartient** à la droite si ses coordonnées **vérifient** l'équation. On remplace, on calcule.
- **Intersection** de deux droites sécantes : résoudre le **système** formé par les deux équations.
Système 2×2 : méthode par **substitution** (isoler y dans une équation, remplacer dans l'autre) ou par **combinaison** (multiplier pour éliminer une inconnue).
Ex : y = 2x − 1 et y = −x + 5 ⟹ 2x − 1 = −x + 5 ⟹ x = 2, y = 3. Point (2 ; 3).`},
{ titre: 'Projeté orthogonal (rappel)', texte: `
Le projeté orthogonal H d'un point M sur une droite d est le point de d tel que (MH) ⊥ d. C'est le point de d **le plus proche** de M ; MH est la distance de M à d.
Dans un triangle rectangle en H : cos(angle) = adjacent/hypoténuse, sin = opposé/hypoténuse, tan = opposé/adjacent (**SOH CAH TOA**).`}
],
notions: [
 { terme: 'Équation réduite', def: 'y = mx + p pour une droite non verticale ; m = coefficient directeur, p = ordonnée à l\'origine.' },
 { terme: 'Coefficient directeur m', def: 'Pente : m = (y_B − y_A)/(x_B − x_A). Positif = droite qui monte, négatif = qui descend.', exemple: 'A(1;2), B(3;8) : m = 3' },
 { terme: 'Ordonnée à l\'origine p', def: 'Valeur de y quand x = 0 ; la droite coupe l\'axe des ordonnées en (0 ; p).' },
 { terme: 'Droite verticale', def: 'Équation x = c ; pas d\'équation réduite (coefficient directeur non défini).' },
 { terme: 'Équation cartésienne', def: 'ax + by + c = 0 ; valable pour toute droite ; vecteur directeur u→(−b ; a).', exemple: '2x − y − 3 = 0 → u→(1;2)' },
 { terme: 'Vecteur directeur', def: 'Vecteur non nul dont la direction est celle de la droite. Tout vecteur AB→ avec A, B sur la droite en est un.' },
 { terme: 'Droites parallèles', def: 'Même coefficient directeur (m = m\') ou vecteurs directeurs colinéaires.' },
 { terme: 'Point sur une droite', def: 'M(x;y) ∈ d ⟺ ses coordonnées vérifient l\'équation de d.' },
 { terme: 'Système 2×2', def: 'Deux équations, deux inconnues ; solution = point d\'intersection des droites. Méthodes : substitution ou combinaison.' },
 { terme: 'Projeté orthogonal', def: 'Point H de la droite d tel que (MH) ⊥ d ; point de d le plus proche de M.' }
],
quiz: [
 { q: 'Coefficient directeur de la droite (AB) avec A(2 ; −1), B(5 ; 5) ?', choix: ['2', '1/2', '−2', '6'], r: 0, exp: 'm = (5 − (−1))/(5 − 2) = 6/3 = 2.' },
 { q: 'Le point (3 ; 4) est-il sur y = 2x − 2 ?', choix: ['Oui', 'Non', 'Impossible à savoir', 'Seulement si x > 0'], r: 0, exp: '2×3 − 2 = 4 = y. Oui.' },
 { q: 'Vecteur directeur de 3x + 2y − 5 = 0 ?', choix: ['(3 ; 2)', '(−2 ; 3)', '(2 ; 3)', '(−5 ; 3)'], r: 1, exp: 'Pour ax + by + c = 0, u→(−b ; a) = (−2 ; 3).' },
 { q: 'Les droites y = 3x + 1 et y = 3x − 4 sont…', choix: ['sécantes', 'confondues', 'parallèles', 'perpendiculaires'], r: 2, exp: 'Même coefficient directeur 3, ordonnées à l\'origine différentes.' },
 { q: 'Intersection de y = x + 1 et y = −2x + 7 ?', choix: ['(2 ; 3)', '(3 ; 2)', '(1 ; 2)', '(2 ; 1)'], r: 0, exp: 'x + 1 = −2x + 7 ⟹ 3x = 6 ⟹ x = 2, y = 3.' },
 { q: 'Équation de la droite verticale passant par (4 ; −7) ?', choix: ['y = 4', 'x = 4', 'y = −7', 'x = −7'], r: 1, exp: 'Tous ses points ont pour abscisse 4.' }
],
pieges: ['Calculer m avec Δx/Δy au lieu de Δy/Δx.', 'Lire le vecteur directeur (a ; b) au lieu de (−b ; a).', 'Oublier de vérifier la solution d\'un système dans LES DEUX équations.'],
astuces: ['Pour trouver l\'équation d\'une droite : 1) m par la formule, 2) p en remplaçant par les coordonnées d\'un point.', 'Trace rapidement les deux droites pour estimer l\'intersection et vérifier ton calcul.'],
exos: [
 { enonce: 'Déterminer l\'équation réduite de la droite passant par A(−1 ; 4) et B(2 ; −2).', correction: `m = (−2 − 4)/(2 − (−1)) = −6/3 = −2.
y = −2x + p ; avec A : 4 = −2×(−1) + p ⟹ p = 2.
**y = −2x + 2**.` },
 { enonce: 'Résoudre le système : 2x + y = 7 et x − y = 2.', correction: `Combinaison : en additionnant, 3x = 9 ⟹ x = 3. Puis 3 − y = 2 ⟹ y = 1.
Vérification : 2×3 + 1 = 7 ✔. **(3 ; 1)**.` },
 { enonce: 'Les droites d : 2x − 3y + 1 = 0 et d\' : −4x + 6y + 5 = 0 sont-elles parallèles ?', correction: `u→(3 ; 2) pour d, u'→(−6 ; −4) pour d'.
det = 3×(−4) − 2×(−6) = −12 + 12 = 0 ⟹ colinéaires ⟹ **parallèles** (et non confondues : (0 ; 1/3) ∈ d mais pas à d').` }
]},

/* ---------------- FONCTIONS ---------------- */
{ id: 'm-fonctions', theme: 'Fonctions', titre: 'Généralités sur les fonctions : image, antécédent, variations', duree: 35,
cours: [
{ titre: 'Vocabulaire', texte: `
Une fonction f associe à chaque nombre x d'un ensemble **D** (ensemble de définition) un **unique** nombre f(x).
- **Image** de x : le nombre f(x). Il y en a une seule.
- **Antécédent** de y : un x tel que f(x) = y. Il peut y en avoir 0, 1 ou plusieurs.
- **Courbe représentative** : ensemble des points (x ; f(x)).
Ex : f(x) = x² − 1. Image de 3 : f(3) = 8. Antécédents de 3 : x² − 1 = 3 ⟹ x² = 4 ⟹ x = 2 ou −2.
! Graphiquement : image = on part de l'axe des x, on monte jusqu'à la courbe, on lit sur l'axe des y. Antécédent = l'inverse.`},
{ titre: 'Ensemble de définition', texte: `
Deux interdits en 2nde :
- Pas de division par 0 : f(x) = 1/(x − 2) est définie sur ℝ \\ {2} = ]−∞ ; 2[ ∪ ]2 ; +∞[.
- Pas de racine carrée d'un négatif : g(x) = √(x − 3) définie sur [3 ; +∞[.`},
{ titre: 'Variations et extremums', texte: `
f est **croissante** sur I si pour tous a < b dans I, f(a) ≤ f(b) (la courbe monte, l'ordre est conservé).
f est **décroissante** sur I si a < b ⟹ f(a) ≥ f(b) (l'ordre est inversé).
Le **tableau de variations** résume ça avec des flèches ↗ ↘ et les valeurs aux extrémités.
**Maximum** : la plus grande valeur atteinte (f(x) ≤ M pour tout x, et M atteint). **Minimum** : idem avec la plus petite.
X Une courbe peut passer plusieurs fois par la même ordonnée. « f(x) = 2 a trois solutions » = la droite horizontale y = 2 coupe la courbe 3 fois.`},
{ titre: 'Résolution graphique', texte: `
- **f(x) = k** : abscisses des points d'intersection de la courbe avec la droite horizontale y = k.
- **f(x) ≤ k** : les x pour lesquels la courbe est **en dessous** (ou sur) la droite y = k.
- **f(x) = g(x)** : abscisses des points d'intersection des deux courbes.
- **f(x) < g(x)** : les x pour lesquels la courbe de f est **en dessous** de celle de g.
- **Signe de f** : f(x) > 0 là où la courbe est au-dessus de l'axe des abscisses.
Réponse toujours sous forme d'ensemble ou d'intervalle, lu sur l'axe des **x**.`},
{ titre: 'Parité', texte: `
- f est **paire** si f(−x) = f(x) pour tout x : courbe symétrique par rapport à l'axe des ordonnées (ex : x², |x|).
- f est **impaire** si f(−x) = −f(x) : courbe symétrique par rapport à l'origine (ex : x³, 1/x).`}
],
notions: [
 { terme: 'Image de x', def: 'Le nombre f(x). Chaque x a une image unique.', exemple: 'f(x)=x²−1 : f(3)=8' },
 { terme: 'Antécédent de y', def: 'Tout x tel que f(x) = y. Il peut y en avoir zéro, un ou plusieurs.', exemple: 'antécédents de 3 par x²−1 : 2 et −2' },
 { terme: 'Ensemble de définition', def: 'Ensemble des x pour lesquels f(x) existe. Interdits : division par 0, racine d\'un négatif.', exemple: '√(x−3) : [3;+∞[' },
 { terme: 'Fonction croissante', def: 'Sur I : a < b ⟹ f(a) ≤ f(b). Elle conserve l\'ordre ; la courbe monte.' },
 { terme: 'Fonction décroissante', def: 'Sur I : a < b ⟹ f(a) ≥ f(b). Elle inverse l\'ordre ; la courbe descend.' },
 { terme: 'Tableau de variations', def: 'Tableau résumant les intervalles où f monte/descend (flèches) avec les valeurs aux bornes et extremums.' },
 { terme: 'Maximum / minimum', def: 'Plus grande / plus petite valeur prise par f sur un intervalle ; on donne la valeur ET le x où elle est atteinte.' },
 { terme: 'Résoudre f(x) = k graphiquement', def: 'Lire les abscisses des points d\'intersection de la courbe avec la droite y = k.' },
 { terme: 'Résoudre f(x) ≤ g(x) graphiquement', def: 'Lire les x pour lesquels la courbe de f est en dessous (ou sur) celle de g.' },
 { terme: 'Fonction paire / impaire', def: 'Paire : f(−x) = f(x), symétrie par rapport à l\'axe (Oy). Impaire : f(−x) = −f(x), symétrie par rapport à l\'origine.', exemple: 'x² paire ; x³ impaire' }
],
quiz: [
 { q: 'f(x) = 2x² − 3. Image de −2 ?', choix: ['−11', '5', '−5', '11'], r: 1, exp: '2×(−2)² − 3 = 2×4 − 3 = 5. Attention : (−2)² = 4.' },
 { q: 'Combien d\'antécédents peut avoir un nombre par une fonction ?', choix: ['Exactement un', 'Au plus un', 'Zéro, un ou plusieurs', 'Toujours deux'], r: 2, exp: 'C\'est l\'image qui est unique. Un antécédent peut ne pas exister ou être multiple.' },
 { q: 'Ensemble de définition de f(x) = 3/(x + 5) ?', choix: ['ℝ', 'ℝ \\ {5}', 'ℝ \\ {−5}', '[−5 ; +∞['], r: 2, exp: 'x + 5 ≠ 0 ⟹ x ≠ −5.' },
 { q: 'f décroissante sur [0 ; 4] et 1 < 3. Alors…', choix: ['f(1) < f(3)', 'f(1) ≥ f(3)', 'f(1) = f(3)', 'on ne peut rien dire'], r: 1, exp: 'Une fonction décroissante inverse l\'ordre.' },
 { q: 'Résoudre f(x) > 2 graphiquement, c\'est lire…', choix: ['les y où la courbe est au-dessus de x = 2', 'les x où la courbe est au-dessus de y = 2', 'les x où la courbe est en dessous de y = 2', 'les points d\'intersection avec y = 2'], r: 1, exp: 'On compare la courbe à la droite horizontale y = 2 et on lit sur l\'axe des abscisses.' },
 { q: 'La fonction f(x) = x⁴ + 1 est…', choix: ['paire', 'impaire', 'ni paire ni impaire', 'croissante sur ℝ'], r: 0, exp: 'f(−x) = (−x)⁴ + 1 = x⁴ + 1 = f(x).' }
],
pieges: ['Confondre image et antécédent : « l\'image de 2 » = f(2) ; « les antécédents de 2 » = résoudre f(x) = 2.', 'Lire une inéquation graphique sur l\'axe des y au lieu de l\'axe des x.', 'Écrire un tableau de variations avec les valeurs de x à la place des valeurs de f(x) dans les flèches.'],
astuces: ['Pour calculer une image avec un négatif, mets toujours des parenthèses : f(−2) = 2×(−2)² − 3.', 'Pour « résoudre graphiquement », trace la droite y = k AU CRAYON sur le graphique, ça évite 90 % des erreurs.'],
exos: [
 { enonce: 'f(x) = x² − 4x. Calculer f(0), f(4), f(−1). Déterminer les antécédents de 0 et de −4.', correction: `f(0) = 0 ; f(4) = 16 − 16 = 0 ; f(−1) = 1 + 4 = 5.
Antécédents de 0 : x² − 4x = 0 ⟹ x(x − 4) = 0 ⟹ **x = 0 ou x = 4**.
Antécédents de −4 : x² − 4x + 4 = 0 ⟹ (x − 2)² = 0 ⟹ **x = 2** (un seul).` },
 { enonce: 'Donner l\'ensemble de définition de g(x) = √(2x + 6) / (x − 1).', correction: `Racine : 2x + 6 ≥ 0 ⟹ x ≥ −3. Dénominateur : x ≠ 1.
**D = [−3 ; 1[ ∪ ]1 ; +∞[**.` }
]},

{ id: 'm-reference', theme: 'Fonctions', titre: 'Fonctions de référence : affines, carré, inverse, racine, cube', duree: 35,
cours: [
{ titre: 'Fonctions affines f(x) = mx + p', texte: `
Courbe : une **droite** de coefficient directeur m et d'ordonnée à l'origine p.
- m > 0 : croissante sur ℝ ; m < 0 : décroissante ; m = 0 : constante.
- **Signe** : s'annule en −p/m ; signe de −m avant, signe de m après.
- Cas particulier : fonction **linéaire** f(x) = mx (p = 0, proportionnalité, passe par l'origine).
Trouver m à partir de deux valeurs : m = (f(b) − f(a))/(b − a) (**taux de variation**).`},
{ titre: 'Fonction carré f(x) = x²', texte: `
- Définie sur ℝ, **paire**, courbe = **parabole** de sommet O, tournée vers le haut.
- **Décroissante** sur ]−∞ ; 0], **croissante** sur [0 ; +∞[. Minimum 0 en x = 0.
- Conséquence : si 0 ≤ a < b alors a² < b² ; si a < b ≤ 0 alors a² > b² (l'ordre s'inverse pour les négatifs).
X −3 < 2 mais (−3)² = 9 > 2² = 4. Ne jamais « élever au carré » une inégalité sans réfléchir au signe.`},
{ titre: 'Fonction inverse f(x) = 1/x', texte: `
- Définie sur ℝ \\ {0} = ]−∞ ; 0[ ∪ ]0 ; +∞[, **impaire**, courbe = **hyperbole** (deux branches).
- **Décroissante** sur ]−∞ ; 0[ **et** sur ]0 ; +∞[ (mais pas sur ℝ* entier !).
- Si 0 < a < b alors 1/a > 1/b (passer à l'inverse renverse l'ordre pour des nombres de même signe).`},
{ titre: 'Racine carrée et cube', texte: `
- f(x) = **√x** : définie sur [0 ; +∞[, **croissante**, courbe en « demi-parabole couchée » partant de O. Si 0 ≤ a < b alors √a < √b.
- f(x) = **x³** : définie sur ℝ, **impaire**, **croissante sur ℝ** (conserve l'ordre, même pour les négatifs). Courbe avec un « plat » en O.
Comparaison sur [0 ; 1] : x³ ≤ x² ≤ x ≤ √x. Sur [1 ; +∞[ : c'est l'inverse, √x ≤ x ≤ x² ≤ x³.`},
{ titre: 'Encadrements', texte: `
On utilise les variations pour encadrer une image :
Ex : si 2 ≤ x ≤ 5, alors (carré croissante sur [0;+∞[) 4 ≤ x² ≤ 25.
Ex : si −3 ≤ x ≤ −1, alors (carré décroissante sur ]−∞;0]) 1 ≤ x² ≤ 9 (on retourne).
Ex : si −2 ≤ x ≤ 3, alors 0 ≤ x² ≤ 9 (l'intervalle contient 0 : minimum 0, maximum = le plus grand des carrés).`}
],
notions: [
 { terme: 'Fonction affine', def: 'f(x) = mx + p ; droite ; croissante si m > 0, décroissante si m < 0.' },
 { terme: 'Taux de variation', def: 'm = (f(b) − f(a))/(b − a) : permet de trouver le coefficient directeur à partir de deux images.', exemple: 'f(1)=3, f(4)=9 ⟹ m=2' },
 { terme: 'Fonction linéaire', def: 'f(x) = mx (p = 0) : traduit une proportionnalité, droite passant par l\'origine.' },
 { terme: 'Fonction carré', def: 'x ↦ x², parabole, paire, décroissante sur ]−∞;0], croissante sur [0;+∞[, minimum 0 en 0.' },
 { terme: 'Fonction inverse', def: 'x ↦ 1/x, définie sur ℝ*, impaire, hyperbole, décroissante sur ]−∞;0[ et sur ]0;+∞[.' },
 { terme: 'Fonction racine carrée', def: 'x ↦ √x, définie sur [0;+∞[, croissante.' },
 { terme: 'Fonction cube', def: 'x ↦ x³, définie sur ℝ, impaire, croissante sur ℝ.' },
 { terme: 'Parabole', def: 'Courbe de la fonction carré (et des fonctions polynômes du 2nd degré), symétrique par rapport à un axe vertical.' },
 { terme: 'Hyperbole', def: 'Courbe de la fonction inverse, deux branches, symétrique par rapport à l\'origine.' },
 { terme: 'Ordre et carré', def: 'Pour des positifs, a < b ⟹ a² < b². Pour des négatifs, a < b ⟹ a² > b² (ordre inversé).', exemple: '−3 < −1 mais 9 > 1' }
],
quiz: [
 { q: 'Si −5 ≤ x ≤ −2, alors x² est dans…', choix: ['[−25 ; −4]', '[4 ; 25]', '[−5 ; −2]', '[0 ; 25]'], r: 1, exp: 'Carré décroissante sur les négatifs : (−2)² = 4 ≤ x² ≤ (−5)² = 25.' },
 { q: 'La fonction inverse est…', choix: ['décroissante sur ℝ', 'décroissante sur ]−∞;0[ et sur ]0;+∞[', 'croissante sur ℝ*', 'paire'], r: 1, exp: 'Elle décroît sur chaque intervalle, mais on ne peut pas dire « sur ℝ* » (1/(−1) = −1 < 1/1 = 1).' },
 { q: 'Sur [0 ; 1], laquelle est vraie ?', choix: ['x² ≥ x', 'x³ ≤ x²', '√x ≤ x', 'x³ ≥ x'], r: 1, exp: 'Entre 0 et 1, plus on élève à une puissance grande, plus c\'est petit : x³ ≤ x² ≤ x ≤ √x.' },
 { q: 'f affine avec f(2) = 5 et f(6) = 13. Coefficient directeur ?', choix: ['8', '2', '4', '1/2'], r: 1, exp: 'm = (13 − 5)/(6 − 2) = 8/4 = 2.' },
 { q: 'Si −1 ≤ x ≤ 4, alors x² ∈ …', choix: ['[1 ; 16]', '[−1 ; 16]', '[0 ; 16]', '[0 ; 4]'], r: 2, exp: 'L\'intervalle contient 0 (minimum du carré) ; le max est 4² = 16.' },
 { q: 'La fonction cube est…', choix: ['paire et croissante', 'impaire et croissante sur ℝ', 'impaire et décroissante', 'définie sur [0;+∞['], r: 1, exp: '(−x)³ = −x³ et x³ conserve l\'ordre sur tout ℝ.' }
],
pieges: ['Dire que la fonction inverse est décroissante sur ℝ*.', 'Encadrer x² en prenant simplement le carré des bornes quand l\'intervalle contient 0 : le minimum est 0.', 'Confondre « croissante » (f monte) et « positive » (f au-dessus de l\'axe).'],
astuces: ['Dessine les 5 courbes de référence de tête : parabole, hyperbole, demi-parabole couchée, « S » du cube, droite. Elles résolvent la moitié des questions.', 'Pour encadrer f(x), demande-toi : sur l\'intervalle, f est-elle croissante (on garde l\'ordre) ou décroissante (on retourne) ?'],
exos: [
 { enonce: 'Comparer sans calculatrice : (−2,3)² et (−2,4)² ; puis 1/3,1 et 1/3,2.', correction: `−2,4 < −2,3 ≤ 0 et carré décroissante sur ]−∞;0] : (−2,4)² > (−2,3)².
0 < 3,1 < 3,2 et inverse décroissante sur ]0;+∞[ : 1/3,1 > 1/3,2.` },
 { enonce: 'Un abonnement coûte 15 € + 0,20 € par minute. Exprimer le coût C(x) pour x minutes, et déterminer le nombre de minutes pour 30 €.', correction: `C(x) = 0,2x + 15 (fonction affine, m = 0,2, p = 15).
0,2x + 15 = 30 ⟹ 0,2x = 15 ⟹ **x = 75 minutes**.` }
]},

/* ---------------- STATS ET PROBAS ---------------- */
{ id: 'm-proportions', theme: 'Statistiques et probabilités', titre: 'Proportions, pourcentages et évolutions', duree: 30,
cours: [
{ titre: 'Proportions', texte: `
$ proportion = effectif de la partie / effectif total     (entre 0 et 1, ou en %)
Si A ⊂ B ⊂ E : la proportion de A dans E = (proportion de A dans B) × (proportion de B dans E). Ex : 30 % des élèves sont en 2nde, et 60 % d'entre eux sont des filles ⟹ les filles de 2nde = 0,3 × 0,6 = 18 % des élèves.
X On n'additionne pas des pourcentages qui ne portent pas sur le même total.`},
{ titre: 'Évolutions et coefficient multiplicateur', texte: `
Une évolution de **t %** correspond à une multiplication par le **coefficient multiplicateur** :
$ CM = 1 + t/100     (hausse)          CM = 1 − t/100     (baisse)
+25 % ⟹ ×1,25 ; −30 % ⟹ ×0,7 ; +200 % ⟹ ×3.
**Taux d'évolution** entre V_départ et V_arrivée :
$ t = (V_arrivée − V_départ) / V_départ      (× 100 pour le %)
Ex : de 80 à 100 : t = 20/80 = 0,25 = +25 %. De 100 à 80 : t = −20/100 = −20 %. Ce n'est pas symétrique !`},
{ titre: 'Évolutions successives et réciproque', texte: `
- **Évolutions successives** : on **multiplie** les coefficients. +20 % puis −20 % ⟹ 1,2 × 0,8 = 0,96 ⟹ **−4 %** au total (pas 0 %).
- **Évolution réciproque** (pour revenir à la valeur de départ) : CM' = 1/CM. Après +25 % (×1,25), il faut ×0,8 soit −20 %.
- **Variation globale** après des hausses : +10 % deux fois ⟹ 1,1² = 1,21 ⟹ +21 %.
! Réflexe : ne raisonne JAMAIS en additionnant des pourcentages. Passe toujours par les coefficients multiplicateurs.`}
],
notions: [
 { terme: 'Proportion', def: 'Rapport partie/total, entre 0 et 1 (ou 0 % et 100 %).', exemple: '12 filles sur 30 : 0,4 = 40 %' },
 { terme: 'Proportion de proportion', def: 'Si A ⊂ B ⊂ E, p(A dans E) = p(A dans B) × p(B dans E).', exemple: '30 % × 60 % = 18 %' },
 { terme: 'Coefficient multiplicateur', def: 'CM = 1 + t/100. Hausse de t % ⟹ ×(1 + t/100) ; baisse ⟹ ×(1 − t/100).', exemple: '+25 % ⟹ ×1,25 ; −30 % ⟹ ×0,7' },
 { terme: 'Taux d\'évolution', def: 't = (V_arrivée − V_départ)/V_départ.', exemple: '80 → 100 : +25 %' },
 { terme: 'Évolutions successives', def: 'On multiplie les coefficients multiplicateurs : CM_global = CM₁ × CM₂.', exemple: '+20 % puis −20 % = ×0,96 = −4 %' },
 { terme: 'Évolution réciproque', def: 'Évolution qui ramène à la valeur initiale : CM\' = 1/CM.', exemple: 'après +25 %, il faut −20 %' }
],
quiz: [
 { q: 'Un prix passe de 50 € à 65 €. Taux d\'évolution ?', choix: ['+15 %', '+30 %', '+23 %', '+35 %'], r: 1, exp: '(65 − 50)/50 = 15/50 = 0,3 = +30 %.' },
 { q: 'Une baisse de 15 % correspond à une multiplication par…', choix: ['0,15', '0,85', '1,15', '−0,15'], r: 1, exp: 'CM = 1 − 0,15 = 0,85.' },
 { q: '+50 % puis −50 % donne au total…', choix: ['0 %', '−25 %', '+25 %', '−50 %'], r: 1, exp: '1,5 × 0,5 = 0,75 ⟹ −25 %.' },
 { q: 'Évolution réciproque d\'une hausse de 100 % ?', choix: ['−100 %', '−50 %', '−200 %', '+100 %'], r: 1, exp: '×2 puis il faut ×1/2 = ×0,5, soit −50 %.' },
 { q: 'Dans un lycée, 40 % des élèves sont en 2nde et 55 % des 2ndes font espagnol. Proportion des 2ndes hispanisants dans le lycée ?', choix: ['95 %', '22 %', '15 %', '55 %'], r: 1, exp: '0,4 × 0,55 = 0,22.' },
 { q: 'Un article à 120 € après une hausse de 20 %. Prix initial ?', choix: ['96 €', '100 €', '144 €', '110 €'], r: 1, exp: 'Prix initial = 120/1,2 = 100 €. (Pas 120 − 20 % = 96.)' }
],
pieges: ['Retrancher 20 % à un prix pour annuler une hausse de 20 %.', 'Additionner +10 % et +10 % pour trouver +20 % (c\'est +21 %).', 'Calculer un taux d\'évolution en divisant par la valeur d\'arrivée.'],
astuces: ['Écris toujours le CM avant tout calcul : « +35 % → ×1,35 ».', 'Pour retrouver une valeur initiale : valeur finale ÷ CM.'],
exos: [
 { enonce: 'Un smartphone coûte 600 €. Il augmente de 10 % puis baisse de 25 %. Prix final et taux global ?', correction: `CM global = 1,1 × 0,75 = 0,825.
Prix final = 600 × 0,825 = **495 €**. Taux global = 0,825 − 1 = **−17,5 %**.` },
 { enonce: 'La population d\'une ville passe de 12 500 à 13 750 habitants. Taux d\'évolution ? Quel taux ramènerait à 12 500 ?', correction: `t = (13 750 − 12 500)/12 500 = 1 250/12 500 = 0,1 ⟹ **+10 %**.
Réciproque : 1/1,1 ≈ 0,909 ⟹ **≈ −9,1 %**.` }
]},

{ id: 'm-stats', theme: 'Statistiques et probabilités', titre: 'Statistiques descriptives : moyenne, médiane, quartiles, écart-type', duree: 30,
cours: [
{ titre: 'Indicateurs de position', texte: `
- **Moyenne** x̄ = somme des valeurs / effectif total. Avec des effectifs : x̄ = (n₁x₁ + n₂x₂ + …)/N. Sensible aux valeurs extrêmes.
- **Médiane** Me : valeur qui partage la série **ordonnée** en deux moitiés. Si N impair, c'est la valeur du milieu ; si N pair, moyenne des deux valeurs centrales. Insensible aux extrêmes.
- **Quartiles** : Q₁ = plus petite valeur telle qu'au moins 25 % des valeurs lui soient ≤ ; Q₃ idem avec 75 %.
Ex : 2 ; 3 ; 5 ; 7 ; 8 ; 12 ; 20. N = 7, Me = 7, x̄ = 57/7 ≈ 8,1, Q₁ = 3 (7×0,25 = 1,75 → 2e valeur), Q₃ = 12 (7×0,75 = 5,25 → 6e valeur).`},
{ titre: 'Indicateurs de dispersion', texte: `
- **Étendue** = max − min.
- **Écart interquartile** = Q₃ − Q₁ : largeur de l'intervalle [Q₁ ; Q₃] contenant environ 50 % des valeurs centrales.
- **Écart-type** σ : mesure la dispersion autour de la moyenne. Petit σ = valeurs regroupées ; grand σ = valeurs dispersées. Se calcule à la calculatrice (mode STAT).
On associe **moyenne ↔ écart-type** et **médiane ↔ quartiles**.
! Une moyenne seule ne dit rien : deux classes peuvent avoir 10 de moyenne, l'une avec tout le monde à 10, l'autre avec des 0 et des 20. L'écart-type fait la différence.`},
{ titre: 'Comparer des séries', texte: `
Pour comparer deux séries (deux classes, deux produits…), on compare :
- la **position** (quelle série a les valeurs les plus élevées ? moyenne / médiane) ;
- la **dispersion** (quelle série est la plus homogène ? écart-type / écart interquartile).
Toujours conclure avec une phrase en français qui donne du sens aux nombres.`}
],
notions: [
 { terme: 'Moyenne', def: 'Somme des valeurs divisée par l\'effectif total (pondérée par les effectifs si besoin). Sensible aux valeurs extrêmes.' },
 { terme: 'Médiane', def: 'Valeur qui partage la série ordonnée en deux parties de même effectif. Insensible aux extrêmes.', exemple: '2;3;5;7;8 ⟹ Me = 5' },
 { terme: 'Quartiles Q₁ et Q₃', def: 'Q₁ : plus petite valeur telle qu\'au moins 25 % des données lui sont ≤. Q₃ : idem avec 75 %.' },
 { terme: 'Écart interquartile', def: 'Q₃ − Q₁ ; mesure de dispersion associée à la médiane ; contient ~50 % des valeurs centrales.' },
 { terme: 'Étendue', def: 'Maximum − minimum.' },
 { terme: 'Écart-type σ', def: 'Mesure de dispersion autour de la moyenne. Plus σ est grand, plus les valeurs sont dispersées.' },
 { terme: 'Couples d\'indicateurs', def: 'Moyenne va avec écart-type ; médiane va avec quartiles.' }
],
quiz: [
 { q: 'Série : 4 ; 9 ; 1 ; 7 ; 12 ; 3. Médiane ?', choix: ['7', '5,5', '6', '8'], r: 1, exp: 'Ordonnée : 1 ; 3 ; 4 ; 7 ; 9 ; 12. N pair, Me = (4 + 7)/2 = 5,5.' },
 { q: 'Quel indicateur est le plus sensible aux valeurs extrêmes ?', choix: ['La médiane', 'La moyenne', 'Q₁', 'L\'écart interquartile'], r: 1, exp: 'Une seule valeur énorme fait grimper la moyenne, pas la médiane.' },
 { q: 'Un écart-type plus grand signifie…', choix: ['une moyenne plus élevée', 'des valeurs plus dispersées', 'des valeurs plus regroupées', 'plus de valeurs'], r: 1, exp: 'σ mesure la dispersion autour de la moyenne.' },
 { q: 'Notes : 8 (coeff 2) et 14 (coeff 1). Moyenne ?', choix: ['11', '10', '12', '10,5'], r: 1, exp: '(8×2 + 14×1)/3 = 30/3 = 10.' },
 { q: 'L\'intervalle [Q₁ ; Q₃] contient environ…', choix: ['25 % des valeurs', '75 % des valeurs', '50 % des valeurs', 'toutes les valeurs'], r: 2, exp: 'Entre le 1er et le 3e quartile se trouve la moitié centrale des données.' }
],
pieges: ['Calculer la médiane sans avoir ordonné la série.', 'Oublier de pondérer par les effectifs/coefficients dans une moyenne.', 'Comparer deux séries uniquement avec la moyenne, sans parler de dispersion.'],
astuces: ['Pour Q₁ : calcule N × 0,25 ; si ce n\'est pas entier, arrondis au-dessus ; c\'est le rang de Q₁ dans la série ordonnée. Même chose avec 0,75 pour Q₃.', 'Apprends à faire tout ça sur ta calculatrice (mode statistiques 1 variable) : ça prend 30 secondes en contrôle.'],
exos: [
 { enonce: 'Notes d\'une classe : 5 ; 8 ; 8 ; 10 ; 11 ; 12 ; 12 ; 13 ; 15 ; 18. Calculer moyenne, médiane, Q₁, Q₃, écart interquartile.', correction: `N = 10. Moyenne = 112/10 = **11,2**.
Médiane = (11 + 12)/2 = **11,5**.
Q₁ : 10 × 0,25 = 2,5 → 3e valeur = **8**. Q₃ : 10 × 0,75 = 7,5 → 8e valeur = **13**.
Écart interquartile = 13 − 8 = **5**.` }
]},

{ id: 'm-probas', theme: 'Statistiques et probabilités', titre: 'Probabilités et échantillonnage', duree: 35,
cours: [
{ titre: 'Vocabulaire', texte: `
- **Expérience aléatoire** : on ne peut pas prévoir le résultat (lancer de dé).
- **Univers Ω** : ensemble de toutes les issues possibles. Dé : Ω = {1 ; 2 ; 3 ; 4 ; 5 ; 6}.
- **Événement** : sous-ensemble de Ω. A = « obtenir un nombre pair » = {2 ; 4 ; 6}.
- **Événement contraire** Ā : « non A ». P(Ā) = 1 − P(A).
- A ∩ B : « A **et** B » ; A ∪ B : « A **ou** B ». A et B **incompatibles** si A ∩ B = ∅.`},
{ titre: 'Calculer une probabilité', texte: `
En situation d'**équiprobabilité** (toutes les issues ont la même chance) :
$ P(A) = nombre d'issues favorables / nombre d'issues possibles
Propriétés : 0 ≤ P(A) ≤ 1 ; P(Ω) = 1 ; P(∅) = 0.
$ P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
Si A et B incompatibles : P(A ∪ B) = P(A) + P(B).
Ex : dé. A = pair = {2,4,6}, B = ≥ 5 = {5,6}. P(A) = 1/2, P(B) = 1/3, P(A∩B) = P({6}) = 1/6. P(A∪B) = 1/2 + 1/3 − 1/6 = 2/3.`},
{ titre: 'Outils : tableau et arbre', texte: `
- **Tableau à double entrée** : pour des données croisées (sexe × option). Les probabilités se lisent en divisant par le total général.
- **Arbre** : pour des expériences à plusieurs étapes (deux lancers de pièce). La probabilité d'un chemin = **produit** des probabilités des branches. La probabilité d'un événement = **somme** des chemins qui le réalisent.
Ex : deux lancers de pièce. P(exactement un pile) = P(PF) + P(FP) = 1/4 + 1/4 = 1/2.`},
{ titre: 'Échantillonnage et fluctuation', texte: `
Quand on répète une expérience n fois, la **fréquence** observée f d'un événement fluctue d'un échantillon à l'autre, mais se rapproche de la probabilité p quand n augmente (**loi des grands nombres**).
Principe : si un échantillon est grand, la fréquence observée est « proche » de p ; si elle en est très éloignée, on peut douter de la valeur de p (ou de l'équité du dé, de la représentativité du sondage…).
! Un sondage sur 10 personnes ne prouve rien ; sur 1 000, l'écart entre fréquence et probabilité est typiquement de l'ordre de quelques %.`}
],
notions: [
 { terme: 'Univers Ω', def: 'Ensemble de toutes les issues possibles d\'une expérience aléatoire.', exemple: 'dé : {1,2,3,4,5,6}' },
 { terme: 'Événement', def: 'Sous-ensemble de l\'univers (ensemble d\'issues).', exemple: '« pair » = {2,4,6}' },
 { terme: 'Équiprobabilité', def: 'Toutes les issues ont la même probabilité ; alors P(A) = favorables/possibles.' },
 { terme: 'Événement contraire Ā', def: 'Issues qui ne sont pas dans A. P(Ā) = 1 − P(A).' },
 { terme: 'A ∩ B et A ∪ B', def: '∩ : A et B se réalisent tous les deux. ∪ : au moins l\'un des deux.' },
 { terme: 'Formule de l\'union', def: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Si incompatibles, P(A ∪ B) = P(A) + P(B).' },
 { terme: 'Événements incompatibles', def: 'A ∩ B = ∅ : ils ne peuvent pas se réaliser en même temps.' },
 { terme: 'Arbre de probabilités', def: 'Probabilité d\'un chemin = produit des branches ; probabilité d\'un événement = somme des chemins favorables.' },
 { terme: 'Fluctuation d\'échantillonnage', def: 'La fréquence observée varie d\'un échantillon à l\'autre ; elle se rapproche de la probabilité quand la taille n augmente.' },
 { terme: 'Loi des grands nombres', def: 'Quand on répète une expérience un grand nombre de fois, la fréquence d\'un événement tend vers sa probabilité.' }
],
quiz: [
 { q: 'On tire une carte dans un jeu de 32. P(obtenir un roi) ?', choix: ['1/32', '1/8', '4/32 = 1/8', '1/4'], r: 2, exp: '4 rois sur 32 cartes = 1/8.' },
 { q: 'P(A) = 0,3, P(B) = 0,5, P(A ∩ B) = 0,1. P(A ∪ B) ?', choix: ['0,8', '0,7', '0,9', '0,15'], r: 1, exp: '0,3 + 0,5 − 0,1 = 0,7.' },
 { q: 'P(A) = 0,35. P(Ā) ?', choix: ['0,35', '0,65', '0,5', 'Impossible à savoir'], r: 1, exp: '1 − 0,35 = 0,65.' },
 { q: 'On lance deux dés. P(somme = 12) ?', choix: ['1/12', '1/36', '2/36', '1/6'], r: 1, exp: 'Une seule issue favorable (6 ; 6) sur 36 issues possibles.' },
 { q: 'Si A et B sont incompatibles, alors…', choix: ['P(A ∩ B) = 1', 'P(A ∪ B) = P(A) × P(B)', 'P(A ∩ B) = 0', 'P(A) = P(B)'], r: 2, exp: 'Incompatibles = ne peuvent pas se produire ensemble.' },
 { q: 'Sur 1 000 lancers, une pièce donne 530 piles. Fréquence de pile ?', choix: ['0,53', '0,47', '530', '0,5'], r: 0, exp: 'f = 530/1 000 = 0,53. Proche de 0,5 : fluctuation normale.' }
],
pieges: ['Compter (1 ; 2) et (2 ; 1) comme une seule issue avec deux dés : ce sont deux issues différentes.', 'Oublier de soustraire P(A ∩ B) dans la formule de l\'union.', 'Confondre fréquence (observée) et probabilité (théorique).'],
astuces: ['Pour deux dés ou deux pièces, fais le tableau 6×6 ou l\'arbre : tu vois toutes les issues.', 'Quand tu lis « au moins un », pense à l\'événement contraire « aucun » : souvent bien plus simple.'],
exos: [
 { enonce: 'Dans une classe de 30 élèves, 18 font anglais LV1, 12 espagnol LV2, et 8 font les deux. On choisit un élève au hasard. P(anglais ou espagnol) ?', correction: `P(A) = 18/30, P(E) = 12/30, P(A ∩ E) = 8/30.
P(A ∪ E) = (18 + 12 − 8)/30 = 22/30 = **11/15 ≈ 0,73**.` },
 { enonce: 'On lance trois fois une pièce équilibrée. P(obtenir au moins un pile) ?', correction: `Contraire : « aucun pile » = FFF, probabilité (1/2)³ = 1/8.
P(au moins un pile) = 1 − 1/8 = **7/8**.` }
]},

/* ---------------- ALGO ---------------- */
{ id: 'm-python', theme: 'Algorithmique et programmation', titre: 'Python : variables, conditions, boucles, fonctions', duree: 30,
cours: [
{ titre: 'Variables et types', texte: `
\`\`\`
x = 5            # int (entier)
y = 2.5          # float (décimal)
nom = "Léa"      # str (chaîne)
ok = True        # bool (booléen)
\`\`\`
Opérateurs : \`+\` \`-\` \`*\` \`/\` ; \`//\` division entière ; \`%\` reste (modulo) ; \`**\` puissance.
\`7 // 2\` vaut 3, \`7 % 2\` vaut 1, \`2 ** 3\` vaut 8.
**Affectation** : \`x = x + 1\` signifie « la nouvelle valeur de x est l'ancienne plus 1 » (ce n'est pas une équation).
! Un nombre est pair si \`n % 2 == 0\`. Un entier a divise b si \`b % a == 0\`.`},
{ titre: 'Conditions', texte: `
\`\`\`
if x > 0:
    print("positif")
elif x == 0:
    print("nul")
else:
    print("négatif")
\`\`\`
Comparaisons : \`==\` (égal), \`!=\` (différent), \`<\`, \`<=\`, \`>\`, \`>=\`. Logique : \`and\`, \`or\`, \`not\`.
X \`=\` affecte, \`==\` compare. L'indentation (4 espaces) délimite les blocs : obligatoire.`},
{ titre: 'Boucles', texte: `
**Boucle for** (nombre d'itérations connu) :
\`\`\`
for i in range(5):     # i prend 0, 1, 2, 3, 4
    print(i)
for i in range(2, 10): # de 2 à 9
\`\`\`
\`range(n)\` va de 0 à **n − 1** (n valeurs).
**Boucle while** (on répète tant qu'une condition est vraie) :
\`\`\`
n = 0
while n < 100:
    n = n + 7
print(n)   # 105 : premier multiple de 7 ≥ 100
\`\`\`
Accumulateur classique : somme des entiers de 1 à n.
\`\`\`
s = 0
for k in range(1, n + 1):
    s = s + k
\`\`\``},
{ titre: 'Fonctions', texte: `
\`\`\`
def aire_rectangle(L, l):
    return L * l

print(aire_rectangle(5, 3))   # 15
\`\`\`
Une fonction reçoit des **paramètres**, et **renvoie** (\`return\`) un résultat. \`print\` affiche, \`return\` renvoie : ce n'est pas pareil.
Exemples à savoir écrire : image d'une fonction mathématique \`def f(x): return x**2 - 3*x\`, test de parité, calcul de moyenne d'une liste \`sum(L)/len(L)\`, recherche du maximum.`},
{ titre: 'Listes', texte: `
\`\`\`
L = [3, 8, 1]
L[0]        # 3 (le premier a l'indice 0)
len(L)      # 3
L.append(5) # ajoute 5 à la fin
for v in L: # parcourt les valeurs
    print(v)
\`\`\`
Simulation aléatoire : \`from random import randint\` puis \`randint(1, 6)\` (dé). Pour estimer une probabilité, on répète N fois et on compte les succès : fréquence = succès / N.`}
],
notions: [
 { terme: 'Affectation x = x + 1', def: 'Donne à x sa valeur actuelle augmentée de 1 ; le = n\'est pas un égal mathématique.' },
 { terme: 'Division entière // et modulo %', def: '// : quotient entier ; % : reste. n % 2 == 0 teste la parité.', exemple: '17 // 5 = 3, 17 % 5 = 2' },
 { terme: 'if / elif / else', def: 'Structure conditionnelle ; les blocs sont délimités par l\'indentation.' },
 { terme: '== vs =', def: '== compare (renvoie True/False), = affecte une valeur à une variable.' },
 { terme: 'range(n)', def: 'Génère les entiers de 0 à n−1 (n valeurs). range(a, b) : de a à b−1.', exemple: 'range(3) → 0, 1, 2' },
 { terme: 'Boucle for', def: 'Répète un bloc un nombre de fois connu à l\'avance (parcours d\'un range ou d\'une liste).' },
 { terme: 'Boucle while', def: 'Répète tant qu\'une condition est vraie ; utile quand on ne connaît pas le nombre d\'itérations.' },
 { terme: 'def / return', def: 'def définit une fonction ; return renvoie son résultat (différent de print qui affiche).' },
 { terme: 'Liste', def: 'Collection ordonnée L = [..] ; L[0] premier élément, len(L) longueur, L.append(v) ajoute.' },
 { terme: 'randint(a, b)', def: 'Entier aléatoire entre a et b inclus (module random) ; sert aux simulations de probabilités.' }
],
quiz: [
 { q: 'Que vaut 23 % 5 ?', choix: ['4', '3', '4,6', '18'], r: 1, exp: '23 = 4 × 5 + 3 ; le reste est 3.' },
 { q: 'Combien de fois s\'exécute le bloc de `for i in range(4):` ?', choix: ['3', '4', '5', 'infini'], r: 1, exp: 'i prend 0, 1, 2, 3 : 4 fois.' },
 { q: 'Après `x = 3` puis `x = x * 2` puis `x = x + 1`, x vaut…', choix: ['6', '7', '8', '3'], r: 1, exp: '3 → 6 → 7.' },
 { q: 'Quelle instruction teste si n est pair ?', choix: ['n / 2 == 0', 'n % 2 = 0', 'n % 2 == 0', 'n // 2 == 0'], r: 2, exp: 'Reste de la division par 2 nul, avec == pour comparer.' },
 { q: 'Que renvoie `f(2)` si `def f(x): return 3*x - 1` ?', choix: ['5', '6', '3x−1', 'Erreur'], r: 0, exp: '3×2 − 1 = 5.' },
 { q: 'Dans `L = [4, 7, 9]`, L[1] vaut…', choix: ['4', '7', '9', '1'], r: 1, exp: 'Les indices commencent à 0 : L[0] = 4, L[1] = 7.' },
 { q: 'Quelle valeur affiche ce programme ?\n`n = 1`\n`while n < 50:`\n`    n = n * 3`\n`print(n)`', choix: ['27', '81', '50', '243'], r: 1, exp: '1 → 3 → 9 → 27 → 81 ; on s\'arrête dès que n ≥ 50.' }
],
pieges: ['range(1, 10) s\'arrête à 9, pas à 10.', 'Oublier les deux-points « : » après if / for / while / def.', 'Utiliser print au lieu de return dans une fonction : la fonction ne renvoie alors rien (None).', 'Boucle while infinie parce que la variable testée n\'est jamais modifiée.'],
astuces: ['Pour comprendre un algorithme, fais un tableau de « trace » : une colonne par variable, une ligne par tour de boucle.', 'Teste ton code sur Basthon (lien dans les ressources) avec des petites valeurs dont tu connais le résultat.'],
exos: [
 { enonce: 'Écrire une fonction `somme_pairs(n)` qui renvoie la somme des entiers pairs de 0 à n.', correction: `\`\`\`
def somme_pairs(n):
    s = 0
    for k in range(0, n + 1):
        if k % 2 == 0:
            s = s + k
    return s
\`\`\`
Test : somme_pairs(6) renvoie 0+2+4+6 = 12.` },
 { enonce: 'Écrire un programme qui simule 1000 lancers d\'un dé et affiche la fréquence du 6.', correction: `\`\`\`
from random import randint
compteur = 0
for i in range(1000):
    if randint(1, 6) == 6:
        compteur = compteur + 1
print(compteur / 1000)
\`\`\`
On obtient une valeur proche de 1/6 ≈ 0,167 (fluctuation d'échantillonnage).` }
]}
]});
