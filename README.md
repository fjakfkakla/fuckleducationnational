# Révisions de seconde

Site de révision couvrant le programme de 2nde générale (programmes officiels de 2019). Fonctionne sans installation : ouvrir `index.html` dans un navigateur, ou publier le dossier avec GitHub Pages.

## Contenu

| Matière | Chapitres |
|---|---|
| Mathématiques | 11 |
| Physique-Chimie | 9 |
| SVT | 6 |
| Histoire | 6 |
| Géographie | 4 |
| Français | 6 |
| SES | 5 |
| SNT | 4 |
| Anglais | 3 |
| EMC | 1 |

Chaque chapitre comprend un cours court, les notions à connaître (qui servent de cartes), un quiz corrigé, les erreurs fréquentes, des conseils de méthode et des exercices avec correction. Chaque matière renvoie vers quelques ressources gratuites.

## Fonctionnement

- Recherche sur les chapitres, les notions et le texte des cours (Ctrl K).
- Cartes à répétition espacée (algorithme SM-2) : la page Révision du jour ne propose que les cartes dues.
- Quiz avec correction et explication.
- Onglet Expliquer : rédiger le chapitre avec ses mots, puis comparer avec le cours.
- Minuteur 25 / 5 minutes.
- Progression par matière et par chapitre, enregistrée dans le navigateur (localStorage), sans compte.
- Thème clair ou sombre, utilisable sur téléphone.

La page Méthode résume les résultats de la recherche sur les techniques de révision et propose une organisation.

## Ajouter du contenu

Chaque matière est un fichier dans `js/data/`. Un chapitre est un objet avec `cours` (sections), `notions` (deviennent des cartes), `quiz`, `pieges`, `astuces` et `exos`. Copier un chapitre existant et le modifier.

Mise en forme des cours : `## ` sous-titre, `$ ` formule, `! ` encadré de méthode, `X ` erreur fréquente, `- ` liste, bloc de code entre ` ``` `, `**gras**`, `*italique*`, `` `code` ``, `x_A` pour un indice.
