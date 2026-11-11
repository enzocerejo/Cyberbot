# Graph Report - graphify-scan  (2026-11-11)

## Corpus Check
- 42 files · ~68,993 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 1 file(s) not represented in the graph (top: .bat 1)

## Summary
- 378 nodes · 840 edges · 17 communities (15 shown, 2 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 68 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Carnet de bord et audits
- Parcours, compétences et projets
- Portfolio : accueil, dépôt et contact
- Panel, tunnel et sécurité
- Pages légales et nouveautés du site Cyber
- Hébergement, incident et identité
- Liste des commandes du bot
- Fonctions du bot et IA
- Site vitrine, domaine et DNS
- Accueil cyberbot.fr et ses scripts
- Mini-jeu d'attente du panel
- RGPD et données personnelles
- Guide Bien démarrer et modules
- Statut en direct (statut.js)
- Pages 404 et attente
- En-tête et menu (commun.js)

## God Nodes (most connected - your core abstractions)
1. `Page d'accueil Cyber` - 28 edges
2. `Glossaire` - 27 edges
3. `Carnet de bord` - 23 edges
4. `Choix techniques` - 23 edges
5. `Page d'accueil du portfolio` - 23 edges
6. `Le panel d'administration` - 20 edges
7. `Texte pour le portfolio` - 20 edges
8. `Tunnel Cloudflare` - 19 edges
9. `Le site et le domaine` - 18 edges
10. `Hébergement et tunnel` - 18 edges

## Surprising Connections (you probably didn't know these)
- `Serveur Discord de support` --references--> `Commandes : Systèmes (automod, tickets, giveaways…)`  [INFERRED]
  portfolio/cyberbot/index.html → cyber/commandes.js
- `Tunnel Cloudflare` --semantically_similar_to--> `Projet Pare-feu IPFire (WAN, LAN, DMZ)`  [INFERRED] [semantically similar]
  cyber/docs/07-hebergement-et-tunnel.md → portfolio/index.html
- `Fenêtre mentions légales et confidentialité` --semantically_similar_to--> `RGPD`  [INFERRED] [semantically similar]
  portfolio/index.html → cyber/docs/09-rgpd-et-verification.md
- `Script build.py` --references--> `Liste des commandes (CYBER_COMMANDES)`  [INFERRED]
  portfolio/cyberbot/index.html → cyber/commandes.js
- `Commandes : Fun` --conceptually_related_to--> `Module Communauté + Sécurité`  [INFERRED]
  cyber/commandes.js → portfolio/cyberbot/index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Verrous de sécurité du panel** — oauth2_discord, csp, hsts, csrf, xss, cloudflare_tunnel, cyber_docs_05_panel_sessions_sqlite [EXTRACTED 1.00]
- **Chaîne de publication du site** — build_py, cyber_commandes_cyber_commandes, publier_bat, synchroniser_site_bat, github_pages, cyberbot_fr [EXTRACTED 1.00]
- **Exposer le panel sans ouvrir de port** — cloudflare_tunnel, cloudflared, empreinte_sha256, cyber_docs_07_hebergement_et_tunnel_tunnel_js, panel_cyberbot_fr, fichier_env [EXTRACTED 1.00]
- **Pages légales du site Cyber** — cyber_conditions_conditions_utilisation, cyber_confidentialite_politique, cyber_mentions_legales_page [EXTRACTED 1.00]
- **Cycle de vie d'un module (base, publics, sur mesure)** — cyber_index_module_communaute, cyber_index_module_securite, cyber_index_modules_publics, cyber_index_academie, cyber_modules_sur_mesure, cyber_modules_code_module [INFERRED 0.85]
- **Gestion des données personnelles** — cyber_confidentialite_donnees_bot, cyber_confidentialite_duree_conservation, cyber_confidentialite_droits_rgpd, cyber_nouveautes_controle_donnees, cyber_commandes_groupe_utilitaires [INFERRED 0.85]
- **Flux du formulaire de contact** — portfolio_index_formulaire_contact, portfolio_index_validation_formulaire, portfolio_index_case_piege_antirobot, portfolio_index_send, portfolio_index_say, portfolio_index_web3forms [EXTRACTED 1.00]
- **Infrastructure sécurisée de Cyber** — cyberbot_fr, panel_web, cloudflare_tunnel, portfolio_index_depot_github_cyberbot, portfolio_index_passage_sqlite, portfolio_index_audits_securite [EXTRACTED 1.00]
- **Règles de rangement et adresses publiques stables** — portfolio_readme_adresses_publiques_stables, portfolio_readme_regles_rangement, portfolio_claude_rangement_depot, portfolio_readme_fichiers_racine [INFERRED 0.85]
- **Chaîne d'accès sécurisé au panel** — portfolio_cyberbot_index_domaine_cyberbot_fr, cloudflare_tunnel, cloudflare_access, portfolio_cyberbot_index_securite_panel, panel_web [EXTRACTED 1.00]
- **Les 9 groupes des 61 commandes** — cyber_commandes_groupe_utilitaires, cyber_commandes_groupe_academie, cyber_commandes_groupe_reseau, cyber_commandes_groupe_niveaux, cyber_commandes_groupe_systemes, cyber_commandes_groupe_moderation, cyber_commandes_groupe_roles, cyber_commandes_groupe_fun, cyber_commandes_groupe_admin [EXTRACTED 1.00]
- **Chaîne de publication du site** — portfolio_cyberbot_index_build_py, cyber_commandes_cyber_commandes, portfolio_cyberbot_index_scripts_bat, cyberbot_fr [EXTRACTED 1.00]

## Communities (17 total, 2 thin omitted)

### Community 0 - "Carnet de bord et audits"
Cohesion: 0.08
Nodes (45): BTS CIEL, check.js (vérification des commandes), Claude (Anthropic), Consignes pour Claude (dépôt cyber), Carte du projet (Graphify), Contexte et objectifs, Carnet de bord, CONTEXTE-CLAUDE.md (+37 more)

### Community 1 - "Parcours, compétences et projets"
Cohesion: 0.08
Nodes (45): Homelab (mini PC), Académie réseau (révisions CCNA), Six audits de sécurité menés avec l'IA, Bac pro CIEL (mention Bien), BTS CIEL option Informatique et Réseaux, Formation CCNA (Cisco Netacad), Certificat Introduction à la cybersécurité, Certificat Networking Basics (+37 more)

### Community 2 - "Portfolio : accueil, dépôt et contact"
Cohesion: 0.08
Nodes (36): Consignes pour Claude (portfolio), Documentation en anglais (cyberbot/en/index.html), Documentation en français (cyberbot/index.html), Documentation du projet Cyberbot (enzocerejo.fr/cyberbot/), Images de la documentation (cyberbot/images/), Barre de navigation, Politique de sécurité du contenu (CSP), CV d'Enzo (PDF) (+28 more)

### Community 3 - "Panel, tunnel et sécurité"
Cohesion: 0.10
Nodes (37): Cloudflare Access, Tunnel Cloudflare, CSP (politique de sécurité du contenu), CSRF, Le panel d'administration, Page d'attente avec mini-jeu, Sessions du panel en empreinte, Audit n°2 : panel et attaques web (+29 more)

### Community 4 - "Pages légales et nouveautés du site Cyber"
Cohesion: 0.09
Nodes (34): Commandes : Académie (module optionnel), Commandes : Outils réseau (Académie), Conditions d'utilisation, Contenus générés par l'IA, Règles d'utilisation (usages interdits), Responsabilité des administrateurs, Service fourni en l'état, Assistant IA /ai (Anthropic) (+26 more)

### Community 5 - "Hébergement, incident et identité"
Cohesion: 0.10
Nodes (30): cloudflared, Incident : serveur supprimé par l'hébergeur, Éditeur de règlement (façon Discohook), Hébergement et tunnel, Article 5.3 des conditions Teoheberg, Bad gateway : localhost en IPv6, src/utils/tunnel.js, Identité visuelle et communauté (+22 more)

### Community 6 - "Liste des commandes du bot"
Cohesion: 0.17
Nodes (18): Liste des commandes (CYBER_COMMANDES), Commandes : Fun, Commandes : Modération, Commandes : Niveaux, Commandes : Rôles, Commandes : Systèmes (automod, tickets, giveaways…), Commandes : Utilitaires, Droits RGPD et /mydata (+10 more)

### Community 7 - "Fonctions du bot et IA"
Cohesion: 0.18
Nodes (18): Module Académie, API Anthropic (/ia), Automod, Couche IA de l'automod (Claude Haiku), Automod anti-lettres déguisées, Modules sur mesure (« cassettes »), CCNA, Components V2 (+10 more)

### Community 8 - "Site vitrine, domaine et DNS"
Cohesion: 0.19
Nodes (17): build.py (générateur du site), Cloudflare, Le site et le domaine, Adresses propres sans .html, Site vitrine, README du site vitrine, cyberbot.fr, DNSSEC (+9 more)

### Community 9 - "Accueil cyberbot.fr et ses scripts"
Cohesion: 0.12
Nodes (6): Page d'accueil Cyber, Démo animée Discord, Données structurées SoftwareApplication, Questions fréquentes, Grille des fonctions, capture

### Community 10 - "Mini-jeu d'attente du panel"
Cohesion: 0.24
Nodes (16): adapter(), ajouterBugs(), arrondi(), boucle(), demarrer(), dessiner(), dessinerBug(), dessinerRobot() (+8 more)

### Community 11 - "RGPD et données personnelles"
Cohesion: 0.29
Nodes (11): Données personnelles et vérification Discord, donnees.js (export et effacement), Gateway Discord, LCEN, Commande /mesdonnees, Pages légales (conditions, confidentialité, mentions), Pages légales, Stockage SQLite (+3 more)

### Community 12 - "Guide Bien démarrer et modules"
Cohesion: 0.25
Nodes (9): Commandes à copier en un clic, Guide Bien démarrer, Placer le rôle de Cyber, Lien d'invitation Discord, Modules publics (tableau de bord), Serveur de support Discord, Code de module (CYB-7F3A-K9), Processus de demande d'un module (+1 more)

### Community 13 - "Statut en direct (statut.js)"
Cohesion: 0.36
Nodes (7): afficherStatut(), blocSupport, carte, depuis(), nombre(), pills, verifierStatut()

### Community 14 - "Pages 404 et attente"
Cohesion: 0.40
Nodes (5): Page 404 introuvable, Commandes : Admin (config, embed, modules), Section Commandes avec recherche, Mini-jeu du robot Cyber, Page d'attente du tableau de bord

## Knowledge Gaps
- **26 isolated node(s):** `Carte du projet (Graphify)`, `Responsabilité des administrateurs`, `Service fourni en l'état`, `Contenu des messages non enregistré`, `Placer le rôle de Cyber` (+21 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 44 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Connexion OAuth2 Discord` connect `Panel, tunnel et sécurité` to `Carnet de bord et audits`, `Pages légales et nouveautés du site Cyber`?**
  _High betweenness centrality (0.207) - this node is a cross-community bridge._
- **What connects `Carte du projet (Graphify)`, `Responsabilité des administrateurs`, `Service fourni en l'état` to the rest of the system?**
  _26 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Carnet de bord et audits` be split into smaller, more focused modules?**
  _Cohesion score 0.0803633822501747 - nodes in this community are weakly interconnected._
- **Why does `Page d'accueil Cyber` connect `Accueil cyberbot.fr et ses scripts` to `Pages légales et nouveautés du site Cyber`, `Liste des commandes du bot`, `Guide Bien démarrer et modules`, `Statut en direct (statut.js)`, `Pages 404 et attente`, `En-tête et menu (commun.js)`, `Démo animée Discord (demo.js)`?**
  _High betweenness centrality (0.184) - this node is a cross-community bridge._
- **Should `Parcours, compétences et projets` be split into smaller, more focused modules?**
  _Cohesion score 0.08080808080808081 - nodes in this community are weakly interconnected._
- **Why does `Politique de confidentialité` connect `Pages légales et nouveautés du site Cyber` to `Accueil cyberbot.fr et ses scripts`, `Panel, tunnel et sécurité`, `Liste des commandes du bot`?**
  _High betweenness centrality (0.139) - this node is a cross-community bridge._
- **Should `Portfolio : accueil, dépôt et contact` be split into smaller, more focused modules?**
  _Cohesion score 0.07822410147991543 - nodes in this community are weakly interconnected._