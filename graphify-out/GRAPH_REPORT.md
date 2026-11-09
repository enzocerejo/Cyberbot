# Graph Report - graphify-scan  (2026-11-09)

## Corpus Check
- 30 files · ~54,144 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: .css 2, (none) 1)

## Summary
- 333 nodes · 780 edges · 14 communities
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 37 edges (avg confidence: 0.79)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Fonctions du bot et IA
- Homelab, labs réseau et certifs
- Commandes, IA et conditions
- Parcours et profil d'Enzo
- Identité visuelle et rôle du bot
- Tunnel, sécurité et audits
- Script du site (script.js)
- Mini-jeu d'attente du panel
- RGPD, légal et connexion Discord
- Technique du bot (Node.js)
- Site vitrine et GitHub Pages
- Documentation et carnet de bord
- Domaine, DNS et panel
- Incident hébergeur et sauvegardes

## God Nodes (most connected - your core abstractions)
1. `Cyber (bot Discord)` - 52 edges
2. `Panel web d'administration` - 31 edges
3. `Politique de confidentialité` - 27 edges
4. `Accueil cyberbot.fr` - 24 edges
5. `Nouveautés et statut` - 24 edges
6. `Conditions d'utilisation` - 23 edges
7. `Bien démarrer` - 23 edges
8. `Glossaire` - 22 edges
9. `Mentions légales` - 18 edges
10. `Mini Batak Pro` - 18 edges

## Surprising Connections (you probably didn't know these)
- `Tunnel Cloudflare` --semantically_similar_to--> `DMZ`  [INFERRED] [semantically similar]
  cyber/docs/07-hebergement-et-tunnel.md → portfolio/index.html
- `Cyber (bot Discord)` --semantically_similar_to--> `MEE6`  [INFERRED] [semantically similar]
  cyber/docs/01-contexte.md → cyber/docs/02-carnet-de-bord.md
- `Section Cyberbot` --references--> `Cyber (bot Discord)`  [EXTRACTED]
  portfolio/index.html → cyber/docs/01-contexte.md
- `Politique de confidentialité` --references--> `CNIL`  [EXTRACTED]
  portfolio/index.html → cyber/confidentialite.html
- `Cyber (bot Discord)` --references--> `Audits de sécurité / pentest`  [EXTRACTED]
  cyber/docs/01-contexte.md → portfolio/index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Chaîne d'exposition sécurisée du panel** — panel_web, cloudflare_tunnel, cloudflared, panel_cyberbot_fr, cloudflare, oauth2_discord [EXTRACTED 1.00]
- **Les six audits de sécurité** — cyber_docs_08_securite_et_audits_audit_1, cyber_docs_08_securite_et_audits_audit_2, cyber_docs_08_securite_et_audits_audit_3, cyber_docs_08_securite_et_audits_audit_4, cyber_docs_08_securite_et_audits_audit_5, cyber_docs_08_securite_et_audits_audit_6_pentest [EXTRACTED 1.00]
- **Mise en conformité RGPD et vérification Discord** — rgpd, mesdonnees, purge_30_jours, pages_legales, verification_discord [EXTRACTED 1.00]
- **Pages légales de Cyber** — cyber_conditions, cyber_confidentialite, cyber_mentions_legales, rgpd [EXTRACTED 1.00]
- **Prestataires recevant des données** — discord, anthropic, cloudflare, github_pages [EXTRACTED 1.00]
- **Parcours d'installation de Cyber** — cyber_demarrer_inviter, cyber_demarrer_role, cyber_demarrer_logs, cyber_demarrer_accueil, cyber_demarrer_proteger, cyber_demarrer_support, cyber_demarrer_niveaux, cyber_demarrer_petits_plus, cyber_demarrer_verifier [EXTRACTED 1.00]
- **Infrastructure Cyberbot** — cyberbot, cloudflare_tunnel, portfolio_index_panel_web, cyberbot_fr, github_pages, discord [EXTRACTED 1.00]
- **Chaîne IoT Mini Batak Pro** — portfolio_index_esp32_s3, portfolio_index_mqtt_mosquitto, portfolio_index_node_red, portfolio_index_dmz, portfolio_index_ipfire [EXTRACTED 1.00]
- **Certificats Cisco Netacad** — portfolio_index_cert_networking_basics, portfolio_index_cert_packet_tracer, portfolio_index_cert_intro_cyber, portfolio_index_cisco_netacad [EXTRACTED 1.00]

## Communities (14 total, 0 thin omitted)

### Community 0 - "Fonctions du bot et IA"
Cohesion: 0.07
Nodes (52): Module Académie, API Anthropic (/ia), Automod, Couche IA de l'automod (Claude Haiku), Responsabilité des administrateurs, Contenu des messages non enregistré, Cookie de session unique, Données enregistrées (+44 more)

### Community 1 - "Homelab, labs réseau et certifs"
Cohesion: 0.09
Nodes (45): Docker, Hetzner Cloud, Homelab (mini PC), HP EliteDesk 800 G5 Mini, IONOS VPS, Active Directory, Certificat Intro cybersécurité, Certificat Networking Basics (+37 more)

### Community 2 - "Commandes, IA et conditions"
Cohesion: 0.12
Nodes (42): Âge minimum 13 ans, Anthropic, CNIL, Assistant IA /ai, Commande /config, Commande /mydata, CSP (politique de sécurité du contenu), Page 404 (+34 more)

### Community 3 - "Parcours et profil d'Enzo"
Cohesion: 0.10
Nodes (33): CCNA, Module Académie CCNA, C/C++ Arduino, Bac pro CIEL, BTS CIEL Info & Réseaux, Électronique & programmation, Compétence Support informatique, CV PDF (+25 more)

### Community 4 - "Identité visuelle et rôle du bot"
Cohesion: 0.10
Nodes (19): BTS CIEL, Propriété intellectuelle, 2. Placer le rôle de Cyber, Refonte « Console cyber », Identité visuelle et communauté, Charte graphique (Orbitron, Inter, rouge), Logo masque de démon rouge, Pack de 57 prompts visuels (+11 more)

### Community 5 - "Tunnel, sécurité et audits"
Cohesion: 0.14
Nodes (18): Tunnel Cloudflare, cloudflared, CSRF, Token collé dans la conversation, Hébergement et tunnel, Mises à jour par dépôt GitHub privé, Sécurité et audits, Audit n°1 : code et configuration (+10 more)

### Community 6 - "Script du site (script.js)"
Cohesion: 0.14
Nodes (14): afficher(), afficherStatut(), ajouter(), blocSupport, capture, carte, depuis(), el() (+6 more)

### Community 7 - "Mini-jeu d'attente du panel"
Cohesion: 0.22
Nodes (17): adapter(), ajouterBugs(), arrondi(), boucle(), demarrer(), dessiner(), dessinerBug(), dessinerRobot() (+9 more)

### Community 8 - "RGPD, légal et connexion Discord"
Cohesion: 0.13
Nodes (17): Cloudflare Access, Bases légales (art. 6.1.b/f), Transferts hors UE, Sessions du panel en empreinte, Audit n°5 : ouverture du panel, Données personnelles et vérification Discord, Gateway Discord, Intents privilégiés (+9 more)

### Community 9 - "Technique du bot (Node.js)"
Cohesion: 0.19
Nodes (14): Audits de sécurité / pentest, check.js (vérification des commandes), IA Claude, Components V2, Cyber (bot Discord), DEMARRER.bat, discord.js, Express (+6 more)

### Community 10 - "Site vitrine et GitHub Pages"
Cohesion: 0.17
Nodes (13): build.py (générateur du site), commandes.js (liste générée), Choix techniques, Le site et le domaine, Site vitrine, Hébergeur du site, README du site vitrine, GitHub (+5 more)

### Community 11 - "Documentation et carnet de bord"
Cohesion: 0.16
Nodes (13): Modules sur mesure (« cassettes »), Claude (Anthropic), Contexte et objectifs, Carnet de bord, CONTEXTE-CLAUDE.md, Le bot et ses commandes, Les 10 améliorations du site, Bad gateway : localhost en IPv6 (+5 more)

### Community 12 - "Domaine, DNS et panel"
Cohesion: 0.24
Nodes (10): Cloudflare, Destinataires des données, Le panel d'administration, Page d'attente avec mini-jeu, cyberbot.fr, DNS, DNSSEC, OVH (+2 more)

### Community 13 - "Incident hébergeur et sauvegardes"
Cohesion: 0.40
Nodes (6): Incident : serveur supprimé par l'hébergeur, Article 5.3 des conditions Teoheberg, Audit n°3 : audit global, Dependabot et alertes malware, RESTAURER.bat, Sauvegardes automatiques

## Knowledge Gaps
- **23 isolated node(s):** `Raspberry Pi 5`, `IONOS VPS`, `Effacement automatique 30 jours après retrait`, `LCEN`, `Dependabot et alertes malware` (+18 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 36 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Cyber (bot Discord)` connect `Technique du bot (Node.js)` to `Fonctions du bot et IA`, `Homelab, labs réseau et certifs`, `Commandes, IA et conditions`, `Parcours et profil d'Enzo`, `Identité visuelle et rôle du bot`, `Tunnel, sécurité et audits`, `RGPD, légal et connexion Discord`, `Site vitrine et GitHub Pages`, `Documentation et carnet de bord`, `Domaine, DNS et panel`?**
  _High betweenness centrality (0.458) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Cyber (bot Discord)` (e.g. with `HP EliteDesk 800 G5 Mini` and `MEE6`) actually correct?**
  _`Cyber (bot Discord)` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Raspberry Pi 5`, `IONOS VPS`, `Effacement automatique 30 jours après retrait` to the rest of the system?**
  _23 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Fonctions du bot et IA` be split into smaller, more focused modules?**
  _Cohesion score 0.07402031930333818 - nodes in this community are weakly interconnected._
- **Why does `Accueil cyberbot.fr` connect `Commandes, IA et conditions` to `Fonctions du bot et IA`, `Identité visuelle et rôle du bot`, `Script du site (script.js)`, `Technique du bot (Node.js)`, `Domaine, DNS et panel`?**
  _High betweenness centrality (0.167) - this node is a cross-community bridge._
- **Should `Homelab, labs réseau et certifs` be split into smaller, more focused modules?**
  _Cohesion score 0.08973172987974098 - nodes in this community are weakly interconnected._
- **Why does `Panel web d'administration` connect `Fonctions du bot et IA` to `Commandes, IA et conditions`, `Identité visuelle et rôle du bot`, `Tunnel, sécurité et audits`, `RGPD, légal et connexion Discord`, `Technique du bot (Node.js)`, `Domaine, DNS et panel`?**
  _High betweenness centrality (0.128) - this node is a cross-community bridge._