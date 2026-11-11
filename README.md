# Cyber · site vitrine

> 📘 **Documentation complète du projet** (carnet de bord, choix techniques, sécurité, audits) : [docs/](docs/README.md)

Site du bot Discord **Cyber**, hébergé avec GitHub Pages : https://cyberbot.fr

## Pages
- `index.html` : accueil, fonctions, liste des commandes, FAQ
- `demarrer.html` : guide « Bien démarrer »
- `nouveautes.html` : statut en direct et historique des versions
- `conditions.html` et `confidentialite.html` : pages légales

Les pages HTML sont générées : on modifie `outils/site/*.main.html` dans le dépôt du bot puis on lance `python outils/site/build.py` (même en-tête et même pied de page partout).

## Fichiers
- `style.css` : le design (toutes les couleurs sont des variables en haut du fichier, dans `:root`)
- `js/` : les scripts, chargés dans cet ordre : `commun.js` (menu, outils), `liste-commandes.js`, `effets.js`, `statut.js`, `captures.js`, `fond.js` (réseau animé), `demo.js` (démo Discord), `visite.js` (visite guidée)
- `config.js` : réglages modifiables (statut en ligne)
- `commandes.js` : liste des commandes (générée depuis le code du bot)
- `assets/` : images · `assets/polices/` : polices Orbitron et Inter (licence SIL OFL, hébergées ici pour ne rien envoyer à Google)

Ce dépôt ne contient aucun secret : le token et le code du bot restent privés.

## Publier une mise à jour
Double-clique sur `PUBLIER.bat` : tout le dossier (images comprises) est envoyé sur GitHub.
La première fois, il faut avoir installé [Git](https://git-scm.com/download/win) et se connecter à GitHub dans la fenêtre qui s'ouvre.
