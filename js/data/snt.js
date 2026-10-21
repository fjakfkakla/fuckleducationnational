window.PROGRAMME = window.PROGRAMME || [];
window.PROGRAMME.push({
id: 'snt', nom: 'SNT', emoji: '💻', couleur: '#64748b',
desc: "Sciences numériques et technologie : internet, web, réseaux sociaux, données structurées, localisation, informatique embarquée, photo numérique, + Python. Matière de culture générale numérique : facile à réviser, les notions sont concrètes.",
ressources: [
 { nom: 'Lumni SNT', url: 'https://www.lumni.fr/lycee/seconde/snt', ico: '📺', desc: 'Vidéos sur les 7 thèmes.' },
 { nom: 'Basthon (Python en ligne)', url: 'https://console.basthon.fr/', ico: '🐍', desc: 'Pour tester le code.' },
 { nom: 'Pixees (Inria)', url: 'https://pixees.fr/', ico: '🎓', desc: 'Ressources officielles de référence pour SNT/NSI.' }
],
chapitres: [
{ id: 'snt-internet', theme: 'Internet et le Web', titre: 'Internet : protocoles, adresses IP, DNS', duree: 25,
cours: [
{ titre: 'Comment fonctionne Internet', texte: `
**Internet** = réseau de réseaux reliant des machines dans le monde entier. Né d'ARPANET (1969), ouvert au public dans les années 1990.
- Chaque machine a une **adresse IP** (IPv4 : 4 nombres de 0 à 255, ex 192.168.1.10 ; IPv6 plus longue car IPv4 est saturé).
- Les données sont découpées en **paquets** qui circulent indépendamment par des chemins différents via des **routeurs**, puis sont réassemblés : c'est robuste (si une route tombe, on en prend une autre).
- Protocoles : **IP** (adressage et routage), **TCP** (fiabilité : accusés de réception, remise dans l'ordre). Ensemble : TCP/IP.
- **DNS** : annuaire qui traduit un nom de domaine (wikipedia.org) en adresse IP. Hiérarchie : .org (TLD) → wikipedia → fr.wikipedia.
- Réseau **pair-à-pair** (P2P) : échanges directs entre machines sans serveur central (BitTorrent).
- Neutralité du net : tous les paquets sont traités de la même façon, quel que soit leur contenu.`}
],
notions: [
 { terme: 'Internet', def: 'Réseau mondial de réseaux interconnectés, basé sur TCP/IP.' },
 { terme: 'Adresse IP', def: 'Identifiant numérique unique d\'une machine sur le réseau (IPv4 : 4 octets ; IPv6).' },
 { terme: 'Paquet', def: 'Petit bloc de données transmis indépendamment, avec adresses source et destination.' },
 { terme: 'Routeur', def: 'Machine qui aiguille les paquets vers leur destination de proche en proche.' },
 { terme: 'TCP / IP', def: 'IP : adressage et routage des paquets. TCP : fiabilité (ordre, accusés de réception).' },
 { terme: 'DNS', def: 'Système traduisant les noms de domaine en adresses IP.' },
 { terme: 'Pair-à-pair (P2P)', def: 'Échange direct entre machines sans serveur central.' },
 { terme: 'Neutralité du net', def: 'Principe d\'égalité de traitement de tous les flux de données.' }
],
quiz: [
 { q: 'Le DNS sert à…', choix: ['chiffrer les données', 'traduire un nom de domaine en adresse IP', 'découper les paquets', 'stocker les pages web'], r: 1, exp: 'C\'est l\'annuaire d\'Internet.' },
 { q: 'Laquelle est une adresse IPv4 valide ?', choix: ['192.168.1.300', '10.0.0.1', '256.1.1.1', 'www.exemple.fr'], r: 1, exp: 'Quatre nombres entre 0 et 255.' },
 { q: 'TCP assure…', choix: ['le routage', 'la fiabilité et l\'ordre des paquets', 'le chiffrement', 'la résolution des noms'], r: 1, exp: 'Accusés de réception, retransmission.' },
 { q: 'Si un routeur tombe en panne…', choix: ['Internet s\'arrête', 'les paquets prennent un autre chemin', 'les données sont perdues', 'le DNS échoue'], r: 1, exp: 'Robustesse du routage par paquets.' }
],
pieges: ['Confondre Internet (le réseau) et le Web (un service parmi d\'autres : mail, streaming…).'],
astuces: ['Compare à la Poste : adresse IP = adresse postale, paquets = lettres, routeurs = centres de tri, DNS = annuaire.'],
exos: [
 { enonce: 'Expliquer le trajet d\'un message envoyé depuis ton téléphone vers un serveur.', correction: `Le message est découpé en paquets portant l'IP source et l'IP destination (obtenue via DNS si on a tapé un nom). Les paquets partent par la box/antenne, traversent des routeurs qui les aiguillent de proche en proche, éventuellement par des chemins différents. À l'arrivée, TCP vérifie que tous les paquets sont là, les remet dans l'ordre et redemande ceux qui manquent.` }
]},

{ id: 'snt-web', theme: 'Internet et le Web', titre: 'Le Web : HTML, URL, HTTP, moteurs de recherche', duree: 25,
cours: [
{ titre: 'Le Web', texte: `
Inventé par **Tim Berners-Lee** au CERN en **1989-1991** : des pages reliées par des **hyperliens**, accessibles par un navigateur.
- **URL** : adresse d'une ressource : \`https://fr.wikipedia.org/wiki/Web\` = protocole + nom de domaine + chemin.
- **HTTP/HTTPS** : protocole de requête/réponse entre **client** (navigateur) et **serveur**. HTTPS = chiffré (cadenas).
- **HTML** : langage de balises structurant la page (\`<h1>\`, \`<p>\`, \`<a href="…">\`, \`<img>\`). **CSS** : mise en forme. **JavaScript** : interactivité.
- **Moteur de recherche** : des robots (crawlers) parcourent le web, indexent les pages ; un algorithme (**PageRank** : une page est importante si des pages importantes pointent vers elle) classe les résultats. Les résultats sont aussi influencés par la publicité et la personnalisation.
- **Cookies** : petits fichiers déposés par les sites pour mémoriser (session, préférences) ou **tracer** (publicité) ; RGPD : consentement obligatoire.`}
],
notions: [
 { terme: 'Web', def: 'Ensemble de pages hypertextes reliées par des liens, accessibles via Internet (Berners-Lee, 1989).' },
 { terme: 'URL', def: 'Adresse d\'une ressource : protocole + domaine + chemin.', exemple: 'https://site.fr/page' },
 { terme: 'HTTP / HTTPS', def: 'Protocole client-serveur du web ; HTTPS est la version chiffrée.' },
 { terme: 'HTML / CSS / JavaScript', def: 'Structure de la page / mise en forme / interactivité.' },
 { terme: 'Client / serveur', def: 'Le client (navigateur) envoie une requête, le serveur renvoie la page.' },
 { terme: 'Moteur de recherche', def: 'Robots qui explorent et indexent le web + algorithme de classement (PageRank).' },
 { terme: 'PageRank', def: 'Algorithme de Google : une page est bien classée si beaucoup de pages importantes la citent.' },
 { terme: 'Cookie', def: 'Fichier déposé par un site sur l\'ordinateur de l\'utilisateur ; sessions, préférences ou traçage publicitaire.' },
 { terme: 'RGPD', def: 'Règlement européen (2018) protégeant les données personnelles : consentement, droit d\'accès et d\'effacement.' }
],
quiz: [
 { q: 'Le Web a été inventé par…', choix: ['Bill Gates', 'Tim Berners-Lee', 'Steve Jobs', 'Vint Cerf'], r: 1, exp: 'Au CERN, 1989.' },
 { q: 'Dans https://www.lycee.fr/accueil.html, « https » est…', choix: ['le nom de domaine', 'le protocole', 'le chemin', 'le serveur'], r: 1, exp: 'Protocole sécurisé.' },
 { q: 'HTML sert à…', choix: ['structurer une page', 'la mettre en forme', 'la rendre interactive', 'la chiffrer'], r: 0, exp: 'CSS = forme, JS = interactivité.' },
 { q: 'PageRank classe une page selon…', choix: ['sa longueur', 'les liens qui pointent vers elle', 'sa date', 'son prix'], r: 1, exp: 'Popularité par les liens entrants.' },
 { q: 'Le RGPD impose…', choix: ['des cookies obligatoires', 'le consentement pour les données personnelles', 'le HTTPS', 'la gratuité des sites'], r: 1, exp: 'Et les droits d\'accès, de rectification, d\'effacement.' }
],
pieges: ['Croire que les premiers résultats d\'un moteur sont « les meilleurs » : ce sont les plus liés / payés / personnalisés.'],
astuces: ['Ouvre le code source d\'une page (Ctrl U) pour voir le HTML : ça rend tout concret.'],
exos: [
 { enonce: 'Écrire une page HTML minimale avec un titre, un paragraphe et un lien.', correction: `\`\`\`
<!doctype html>
<html>
  <head><title>Ma page</title></head>
  <body>
    <h1>Bonjour</h1>
    <p>Ceci est un paragraphe.</p>
    <a href="https://fr.wikipedia.org">Wikipédia</a>
  </body>
</html>
\`\`\`` }
]},

{ id: 'snt-reseaux-donnees', theme: 'Réseaux sociaux et données', titre: 'Réseaux sociaux et données structurées', duree: 25,
cours: [
{ titre: 'Réseaux sociaux', texte: `
- Un réseau social se modélise par un **graphe** : sommets = personnes, arêtes = relations. **Distance** entre deux personnes = nombre minimal d'arêtes ; **diamètre** = plus grande distance ; **centre** = sommet d'excentricité minimale. **Petit monde** (Milgram, 1967) : 6 degrés de séparation.
- **Modèle économique** : gratuit pour l'utilisateur, financé par la **publicité ciblée** grâce aux données collectées (« si c'est gratuit, c'est toi le produit »).
- Risques : **cyberharcèlement** (délit, loi de 2014/2018), **bulles de filtre** (l'algorithme ne montre que ce qui plaît), fake news, addiction (conception pour capter l'attention : notifications, scroll infini), atteinte à la vie privée, **droit à l'image**.
- Identité numérique, e-réputation : ce qui est publié reste.`},
{ titre: 'Données structurées', texte: `
- Une **donnée** = valeur décrivant un objet (nom, âge). Organisées en **tables** : lignes = objets/enregistrements, colonnes = **descripteurs** (attributs). Format **CSV** (valeurs séparées par des virgules), **JSON**, tableurs.
- Opérations : **rechercher** (filtrer selon un critère), **trier**, **calculer** (moyenne), **croiser** deux tables via un descripteur commun.
- **Métadonnées** : données sur les données (date, auteur, lieu GPS d'une photo).
- **Cloud** : stockage sur des serveurs distants dans des **centres de données** (data centers) ; coût énergétique important (≈ 2-3 % de l'électricité mondiale).
- **Open data** : données publiques ouvertes (data.gouv.fr). Données **personnelles** : protégées par le RGPD et la CNIL.`}
],
notions: [
 { terme: 'Graphe', def: 'Modèle d\'un réseau : sommets (personnes) reliés par des arêtes (relations).' },
 { terme: 'Distance / diamètre d\'un graphe', def: 'Distance : plus court chemin entre deux sommets. Diamètre : la plus grande distance du graphe.' },
 { terme: 'Petit monde (Milgram)', def: 'Deux personnes quelconques sont reliées par une courte chaîne (≈ 6 intermédiaires).' },
 { terme: 'Publicité ciblée', def: 'Modèle économique des réseaux sociaux : les données des utilisateurs servent à vendre des publicités personnalisées.' },
 { terme: 'Bulle de filtre', def: 'Enfermement dans des contenus conformes à ses opinions, dû aux algorithmes de recommandation.' },
 { terme: 'Cyberharcèlement', def: 'Harcèlement par moyens numériques ; délit puni par la loi.' },
 { terme: 'Table / descripteur', def: 'Table : collection d\'enregistrements (lignes). Descripteur : attribut (colonne).' },
 { terme: 'CSV', def: 'Format texte de données tabulaires, valeurs séparées par des virgules ou points-virgules.' },
 { terme: 'Métadonnées', def: 'Données décrivant d\'autres données (date, auteur, position GPS d\'une photo).' },
 { terme: 'Centre de données (data center)', def: 'Bâtiment regroupant des serveurs de stockage et de calcul ; forte consommation d\'énergie.' },
 { terme: 'CNIL', def: 'Autorité française de protection des données personnelles.' }
],
quiz: [
 { q: 'Dans un graphe social, une arête représente…', choix: ['une personne', 'une relation', 'un message', 'un groupe'], r: 1, exp: 'Les sommets sont les personnes.' },
 { q: 'Les réseaux sociaux gratuits se financent par…', choix: ['les abonnements', 'la publicité ciblée', 'l\'État', 'les dons'], r: 1, exp: 'Grâce aux données collectées.' },
 { q: 'Une bulle de filtre…', choix: ['protège des virus', 'enferme dans des contenus conformes à ses opinions', 'bloque les publicités', 'filtre les spams'], r: 1, exp: 'Effet des algorithmes de recommandation.' },
 { q: 'Dans une table, une colonne est…', choix: ['un enregistrement', 'un descripteur', 'une métadonnée', 'un fichier'], r: 1, exp: 'Une ligne = un objet, une colonne = un attribut.' },
 { q: 'Les coordonnées GPS d\'une photo sont…', choix: ['des données', 'des métadonnées', 'des pixels', 'du cloud'], r: 1, exp: 'Informations sur la photo, pas la photo elle-même.' }
],
pieges: ['Oublier que la distance dans un graphe est le PLUS COURT chemin.'],
astuces: ['Pour calculer le diamètre, fais le tableau des distances entre toutes les paires de sommets.'],
exos: [
 { enonce: 'Graphe : A–B, B–C, C–D, B–D, D–E. Distance de A à E ? Diamètre ?', correction: `A→B→D→E : distance(A,E) = **3**. Autres distances max : A–E = 3, A–C = 2, C–E = 2. **Diamètre = 3**. Centre : B ou D (excentricité 2).` }
]},

{ id: 'snt-localisation-embarque', theme: 'Localisation, objets connectés, photo', titre: 'GPS, cartographie, informatique embarquée et photo numérique', duree: 25,
cours: [
{ titre: 'Localisation et cartographie', texte: `
- **GPS** (Global Positioning System, américain ; Galileo en Europe) : ≈ 30 satellites envoient l'heure et leur position ; le récepteur calcule sa distance à chacun (temps de trajet × vitesse de la lumière) ; avec **4 satellites** on obtient latitude, longitude, altitude (**trilatération**). Précision ≈ quelques mètres.
- Coordonnées : **latitude** (−90° à 90°, équateur = 0) et **longitude** (−180° à 180°, Greenwich = 0). Format **NMEA** des trames GPS.
- **Cartes numériques** : OpenStreetMap (collaboratif, libre) vs Google Maps ; cartes en **couches** (routes, bâtiments, satellite) ; **calcul d'itinéraire** = plus court chemin dans un graphe (algorithme de Dijkstra).
- Enjeux : traçage, vie privée, dépendance.`},
{ titre: 'Informatique embarquée et objets connectés', texte: `
- **Système embarqué** : ordinateur intégré dans un objet (voiture, lave-linge, montre) avec **capteurs** (température, accélération), **actionneurs** (moteur, LED) et un **programme**. Contraintes : temps réel, faible consommation, sécurité.
- **IoT** (Internet des objets) : objets reliés à Internet (domotique, montres, compteurs Linky). Risques : piratage, données personnelles.
- Programmation type (Arduino / micro:bit) : boucle infinie qui lit les capteurs, décide, commande les actionneurs.
\`\`\`
while True:
    temp = lire_capteur()
    if temp > 25:
        allumer_ventilateur()
    else:
        eteindre_ventilateur()
\`\`\``},
{ titre: 'Photographie numérique', texte: `
- Un **capteur** (CCD/CMOS) convertit la lumière en signal ; une image = grille de **pixels** ; chaque pixel = 3 valeurs **RVB** (rouge, vert, bleu) de 0 à 255 ⟹ 16 millions de couleurs (24 bits).
- **Définition** = nombre de pixels (ex : 4000 × 3000 = 12 Mpx). **Résolution** = pixels par pouce (ppp/dpi).
- Poids d'une image non compressée = largeur × hauteur × 3 octets. 12 Mpx ⟹ 36 Mo ; d'où la **compression** (JPEG, avec perte ; PNG, sans perte).
- **Métadonnées EXIF** : date, appareil, GPS, réglages.
- Traitement d'image = algorithmes sur les pixels : négatif (255 − valeur), niveaux de gris (moyenne RVB), seuillage, filtres, retouche (deepfakes : enjeux de confiance).`}
],
notions: [
 { terme: 'GPS / Galileo', def: 'Systèmes de positionnement par satellites ; le récepteur se localise par trilatération à partir d\'au moins 4 satellites.' },
 { terme: 'Latitude / longitude', def: 'Coordonnées angulaires : latitude (N/S, équateur = 0°), longitude (E/O, Greenwich = 0°).' },
 { terme: 'Trilatération', def: 'Calcul de position à partir des distances à plusieurs points connus (satellites).' },
 { terme: 'Calcul d\'itinéraire', def: 'Recherche du plus court chemin dans un graphe routier (algorithme de Dijkstra).' },
 { terme: 'Système embarqué', def: 'Ordinateur intégré à un objet, avec capteurs, actionneurs et programme.' },
 { terme: 'Capteur / actionneur', def: 'Capteur : mesure une grandeur (température). Actionneur : agit (moteur, LED).' },
 { terme: 'IoT', def: 'Internet des objets : objets du quotidien connectés à Internet.' },
 { terme: 'Pixel et RVB', def: 'Plus petit élément d\'une image, codé par 3 valeurs rouge-vert-bleu de 0 à 255.' },
 { terme: 'Définition d\'une image', def: 'Nombre total de pixels (largeur × hauteur), en mégapixels.' },
 { terme: 'Compression JPEG / PNG', def: 'JPEG : avec perte (petit). PNG : sans perte (plus lourd).' },
 { terme: 'EXIF', def: 'Métadonnées d\'une photo : date, appareil, réglages, GPS.' }
],
quiz: [
 { q: 'Combien de satellites minimum pour une position GPS 3D ?', choix: ['1', '2', '3', '4'], r: 3, exp: '3 pour la position + 1 pour corriger l\'horloge.' },
 { q: 'Le pixel (255, 255, 255) est…', choix: ['noir', 'blanc', 'rouge', 'gris'], r: 1, exp: 'Toutes les composantes au maximum.' },
 { q: 'Une image de 2000 × 1000 pixels non compressée pèse environ…', choix: ['2 Mo', '6 Mo', '200 ko', '2 Go'], r: 1, exp: '2 000 000 pixels × 3 octets = 6 Mo.' },
 { q: 'Un thermomètre dans une voiture est…', choix: ['un actionneur', 'un capteur', 'un processeur', 'une carte'], r: 1, exp: 'Il mesure ; l\'actionneur agit.' },
 { q: 'La longitude 0° passe par…', choix: ['Paris', 'Greenwich', 'l\'équateur', 'New York'], r: 1, exp: 'Méridien de référence.' },
 { q: 'Le négatif d\'un pixel de valeur 50 est…', choix: ['−50', '205', '50', '255'], r: 1, exp: '255 − 50 = 205.' }
],
pieges: ['Confondre définition (nombre de pixels) et résolution (densité, dpi).', 'Confondre latitude (horizontale sur la carte, mesure N/S) et longitude.'],
astuces: ['Mnémo : la LAtitude ce sont les LAttes horizontales d\'une échelle ; la longitude les montants verticaux.'],
exos: [
 { enonce: 'Écrire en Python une fonction qui transforme un pixel RVB en niveau de gris.', correction: `\`\`\`
def gris(r, v, b):
    return (r + v + b) // 3
\`\`\`
Puis on affecte cette valeur aux trois composantes. (Une pondération 0,3 R + 0,59 V + 0,11 B est plus fidèle à l'œil.)` }
]}
]});
