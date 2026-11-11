# Consignes pour Claude

## Carte du projet (Graphify)

Avant d'explorer ce dépôt, lis d'abord `graphify-out/GRAPH_REPORT.md` : c'est la carte (graphe de connaissances) du projet, générée avec Graphify le 9/11/2026, mise à jour le 11/11/2026. Elle donne les éléments centraux, les groupes de thèmes et les liens entre fichiers.

- La carte couvre deux dépôts réunis : les chemins qui commencent par `cyber/` sont dans CE dépôt (retire ce préfixe) ; ceux qui commencent par `portfolio/ (dépôt enzocerejo.github.io, site enzocerejo.fr)` sont dans l'autre dépôt.
- `graphify-out/graph.json` contient le graphe complet. Si l'outil `graphify` est installé (`pip install graphifyy`), tu peux l'interroger : `graphify query "question" --graph graphify-out/graph.json`, `graphify explain "Nom"`, `graphify path "A" "B"`.
- `graphify-out/graph.html` est la version interactive (à ouvrir dans un navigateur).
- La carte sert à se repérer. Lis toujours les vrais fichiers avant de les modifier : elle peut être en retard sur le code.
- Après un gros changement (nouvelle page, nouvelle section, nouveau script), régénère la carte (skill /graphify sur les deux dépôts réunis) et remplace les fichiers de `graphify-out/`.

## Règles du projet

- Enzo ne code pas : réponses en français, étapes clic par clic.
- Ne jamais mettre d'adresse e-mail ni de secret dans le dépôt ou sur le site.
- Ne jamais renommer ni supprimer un dépôt sans son accord.
