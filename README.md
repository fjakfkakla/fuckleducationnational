# ⚡ Seconde Turbo

Application web de révision pour **tout le programme de 2nde générale** (programmes officiels 2019), construite sur ce que les sciences cognitives montrent de plus efficace : rappel actif, répétition espacée, entremêlement, technique de Feynman, exercices avec correction.

**Aucune installation.** Ouvre `index.html` dans un navigateur (double-clic), ou héberge le dossier sur GitHub Pages.

## Contenu

| Matière | Chapitres | Ce qu'il y a dedans |
|---|---|---|
| Mathématiques | 11 | ensembles, calcul littéral, équations/inéquations, vecteurs, droites, fonctions, stats, probas, Python |
| Physique-Chimie | 9 | solutions, atome/classification, molécules, transformations, mouvement, forces, son, lumière, électricité |
| SVT | 6 | cellule/ADN/métabolisme, biodiversité/évolution, géosciences, agrosystèmes, procréation, microbiote |
| Histoire | 6 | Athènes/Rome, Méditerranée médiévale, découvertes, Renaissance/Réformes, État moderne, Lumières |
| Géographie | 4 | environnement/risques, développement, mobilités, Afrique australe |
| Français | 6 | figures de style, poésie, littérature d'idées, roman, théâtre, méthodes + grammaire |
| SES | 5 | raisonnement, production/PIB, marché, socialisation, liens sociaux/participation |
| SNT | 4 | Internet, Web, réseaux sociaux/données, localisation/embarqué/photo |
| Anglais | 3 | temps, modaux/comparatifs, vocabulaire/connecteurs/méthode |
| EMC | 1 | la liberté, les libertés |

Au total : **55 chapitres, ~550 notions (flashcards), ~300 questions de quiz, ~75 exercices corrigés**, les pièges classiques et les meilleures ressources gratuites par matière.

## Fonctionnalités

- 🔍 **Recherche instantanée** (Ctrl K) sur les chapitres, notions et cours.
- 📖 **Cours** synthétiques avec formules, astuces et pièges.
- 🃏 **Flashcards à répétition espacée** (algorithme SM-2, celui d'Anki) : « Révision du jour » te montre uniquement ce qui doit être revu.
- ✅ **Quiz** avec correction immédiate et explication.
- 🗣 **Technique de Feynman** : explique le chapitre avec tes mots, l'appli compare aux notions clés.
- ✍️ **Exercices types** avec correction masquée.
- ⏱ **Pomodoro** 25/5, 📊 **progression** par matière et chapitre, XP et série de jours.
- 🌙 Thème sombre/clair, mobile, clavier (Espace = retourner, 1-4 = noter, P = Pomodoro).
- 🧠 Page **Méthode** : ce qui marche vraiment pour apprendre vite (et ce qui ne marche pas).

La progression est sauvegardée dans le navigateur (localStorage), sans compte.

## Ajouter du contenu

Chaque matière est un fichier dans `js/data/`. Un chapitre est un objet avec `cours` (sections en mini-markdown), `notions` (deviennent des flashcards), `quiz`, `pieges`, `astuces`, `exos`. Copie un chapitre existant et modifie-le.

Mini-markdown des cours : `## ` sous-titre, `$ ` formule, `! ` astuce, `X ` piège, `- ` liste, ` ``` ` bloc de code, `**gras**`, `*italique*`, `` `code` ``, `x_A` indice.
