# Graph Report - carte  (2026-11-15)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1478 nodes · 3188 edges · 128 communities (91 shown, 37 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 250 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Module Académie (defi)
- Fun : /pfc
- Dépendances (package.json)
- Module Modération
- Module Utilitaires (sondages)
- Cœur du bot : guide-support
- Rôles : /role
- Outils : construction du site
- Cœur du bot : loader
- Stockage : fichiers JSON
- Panel (interface) : formulaires
- Panel (serveur) : discord
- Module Salons vocaux
- Tests de référence : monde (2)
- Cœur du bot : onboarding
- Module Utilitaires (feedbacks)
- Utilitaires : /userinfo
- Traductions FR/EN
- Panel : tunnel Cloudflare
- Tests visuels : sondages
- Outils communs : securite
- Module Rôles (reglement-support)
- Utilitaires : /aide
- Stockage : base de données
- Cœur du bot : enregistrement
- Stockage : données perso (RGPD)
- Tickets : /ticket
- Module Académie
- Panel : onglet modules
- Panel : onglet sondages
- Tests de référence : harnais
- Cœur du bot : modules
- Outils communs : journal
- Module Communauté (giveaways)
- Académie : /quiz
- Panel (serveur) : sessions et API
- Panel (interface) : pages
- Stockage : sauvegardes
- Tests de référence : comparer
- Tests visuels : captures
- Tests : demandes-module
- Panel (serveur) : server
- Rôles : /verification
- Cœur du bot : statut-salon
- Vérification du code (check.js)
- Module Académie (2)
- Cœur du bot : bio
- Traductions FR/EN (2)
- Fun : /blague
- Tests visuels : panel-serveur
- Cœur du bot : v2
- Outils communs : math
- Panel : onglet verification
- Tests de référence : scenarios
- Tests visuels : panel
- Docker
- Panel (interface) : apercus
- Tests de référence : liste
- Outils : nouveau-module
- Cœur du bot : bienvenue-support
- Tests : modules-sur-mesure
- Tests de référence : harnais (2)
- Événement Discord : interactionCreate
- Cœur du bot : instance
- Panel (interface) : langue
- Panel (interface) : mots
- Tests : lint-panel
- Tests de référence : harnais (3)
- Module Académie (subnet)
- Panel : onglet tickets
- Tests de référence : monde
- Tests : statut-salon
- Mise en forme du code
- Événement Discord : messageCreate
- Administration : /embed
- Communauté : /tag
- Panel (interface) : icones
- Panel : onglet general
- Utilitaires : /demandermodule
- Panel (interface) : etat
- Panel (interface) : navigation
- Panel : onglet vocaux
- Outils : installer.sh
- Site cyberbot.fr : panel d'attente
- Site cyberbot.fr : statut
- Module Automod
- Site cyberbot.fr : commun
- Outils : generer-commandes-site
- Cœur du bot : sur-mesure
- Site cyberbot.fr : icones
- Site : configuration GitHub Pages
- Site cyberbot.fr : captures
- Site cyberbot.fr : demande
- Site cyberbot.fr : feedback
- Panel (interface) : tutoriel
- Tests : feedbacks
- Événement Discord : ready
- Académie : /ia
- Module Académie (defi) (2)

## God Nodes (most connected - your core abstractions)
1. `discord.js` - 111 edges
2. `base()` - 94 edges
3. `journal` - 46 edges
4. `prive` - 38 edges
5. `touch()` - 36 edges
6. `col()` - 33 edges
7. `sendLog()` - 22 edges
8. `ts()` - 21 edges
9. `t()` - 19 edges
10. `setGuild()` - 19 edges

## Surprising Connections (you probably didn't know these)
- `traduit()` --calls--> `corps()`  [EXTRACTED]
  tests/guide.js → src/i18n/index.js
- `handleComponent()` --calls--> `base()`  [EXTRACTED]
  src/modules/administration/commandes/embed.js → src/commun/embeds.js
- `execute()` --calls--> `base()`  [EXTRACTED]
  src/modules/communaute/commandes/suggestion.js → src/commun/embeds.js
- `sortie` --calls--> `nomAnglais()`  [EXTRACTED]
  outils/generer-commandes-site.js → src/i18n/index.js
- `sortie` --calls--> `t()`  [EXTRACTED]
  outils/generer-commandes-site.js → src/i18n/index.js

## Import Cycles
- None detected.

## Communities (128 total, 37 thin omitted)

### Community 0 - "Module Académie (defi)"
Cohesion: 0.17
Nodes (21): execute(), aujourdhui(), boutonsQuiz(), classementDuJour(), cloturer(), creerSalon(), dateFr(), duree() (+13 more)

### Community 1 - "Fun : /pfc"
Cohesion: 0.06
Nodes (34): { Events }, execute(), base(), { EmbedBuilder }, execute(), { SlashCommandBuilder }, execute(), { SlashCommandBuilder } (+26 more)

### Community 2 - "Dépendances (package.json)"
Cohesion: 0.05
Nodes (42): globals, js, dependencies, discord.js@^14.28.1, dotenv@^16.4.5, express@^4.22.3, @sentry/node@^10.78.0, description (+34 more)

### Community 3 - "Module Modération"
Cohesion: 0.19
Nodes (17): execute(), { SlashCommandBuilder, PermissionFlagsBits }, execute(), { SlashCommandBuilder, PermissionFlagsBits }, execute(), { SlashCommandBuilder, PermissionFlagsBits }, execute(), { SlashCommandBuilder, PermissionFlagsBits } (+9 more)

### Community 4 - "Module Utilitaires (sondages)"
Cohesion: 0.09
Nodes (48): parseDuration(), ts(), intact(), execute(), { SlashCommandBuilder }, execute(), { SlashCommandBuilder }, execute() (+40 more)

### Community 5 - "Cœur du bot : guide-support"
Cohesion: 0.11
Nodes (32): { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder }, bi(), bouton(), boutonsRubriques(), cestFait(), crypto, dansLangue(), demarrer() (+24 more)

### Community 6 - "Rôles : /role"
Cohesion: 0.18
Nodes (12): { Events }, execute(), { Events }, execute(), sendLog(), execute(), { SlashCommandBuilder, PermissionFlagsBits }, execute() (+4 more)

### Community 7 - "Outils : construction du site"
Cohesion: 0.10
Nodes (16): fiche(), js(), adresse(), autre_langue(), footer(), a(), head(), icones() (+8 more)

### Community 8 - "Cœur du bot : loader"
Cohesion: 0.25
Nodes (8): CATEGORIE_DU_DOMAINE, DOSSIER_MODULES, fichiersDeCommandes(), fs, loadCommands(), path, CATEGORIE_MODULE, SUR_MESURE

### Community 9 - "Stockage : fichiers JSON"
Cohesion: 0.10
Nodes (21): DATA, fs, net, path, RACINE, zlib, addWarn(), cache (+13 more)

### Community 10 - "Panel (interface) : formulaires"
Cohesion: 0.13
Nodes (21): aDesModifs(), barreEnregistrement(), changer(), channelSelect(), choixImages(), choixRole(), choixRoles(), choixSalon() (+13 more)

### Community 11 - "Panel (serveur) : discord"
Cohesion: 0.15
Nodes (19): actif(), maNote(), stats(), { ChannelType }, inviteUrl(), isSnowflake(), listeRoles(), proprioOuDroit() (+11 more)

### Community 12 - "Module Salons vocaux"
Cohesion: 0.18
Nodes (22): { Events }, execute(), appliquer(), basculer(), donner(), execute(), handleComponent(), majPanneau() (+14 more)

### Community 13 - "Tests de référence : monde (2)"
Cohesion: 0.08
Nodes (18): appels, { AsyncResource }, CANAUX, DEBUT, IDS, journal, MEMBRES, messagesExistants (+10 more)

### Community 14 - "Cœur du bot : onboarding"
Cohesion: 0.24
Nodes (12): definir(), etat(), boutons(), embedAccueil(), { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits, ChannelType }, envoyer(), salonPourEcrire(), essais (+4 more)

### Community 15 - "Module Utilitaires (feedbacks)"
Cohesion: 0.07
Nodes (49): { AttachmentBuilder }, depuisDataUrls(), depuisDiscord(), EXTENSIONS, joindre(), jpegSansMeta(), PNG_META, pngSansMeta() (+41 more)

### Community 16 - "Utilitaires : /userinfo"
Cohesion: 0.18
Nodes (15): execute(), MEDALS, { SlashCommandBuilder }, execute(), bar(), levelFromXp(), peek(), ranking() (+7 more)

### Community 17 - "Traductions FR/EN"
Cohesion: 0.10
Nodes (26): ajouterBouton(), arbre(), { AsyncLocalStorage }, bilingueSalon(), BORD, boutonLangue(), brut(), cache (+18 more)

### Community 18 - "Panel : tunnel Cloudflare"
Cohesion: 0.22
Nodes (12): BINAIRE, crypto, demarrer(), DOSSIER, EMPREINTE, fs, lancer(), path (+4 more)

### Community 19 - "Tests visuels : sondages"
Cohesion: 0.13
Nodes (12): APPELS, assert, COOKIE, fs, os, path, { spawn }, assert (+4 more)

### Community 20 - "Outils communs : securite"
Cohesion: 0.17
Nodes (17): ipPrivee(), ipv4Privee(), ipv6EnMots(), limiteur(), net, nomInterne(), { PermissionFlagsBits }, TLD_INTERNES (+9 more)

### Community 21 - "Module Rôles (reglement-support)"
Cohesion: 0.13
Nodes (16): args, rest, { REST, Routes, PermissionsBitField }, PERMS_DANGEREUSES, hebergeur, changerLangue(), construire(), DEFAUT (+8 more)

### Community 22 - "Utilitaires : /aide"
Cohesion: 0.23
Nodes (11): CATS, execute(), grouped(), handleComponent(), home(), liens(), menu(), page() (+3 more)

### Community 23 - "Stockage : base de données"
Cohesion: 0.11
Nodes (16): contenu(), cache, collections(), DATA_DIR, dirty, ecrireLigne, ecrit, effacerLigne (+8 more)

### Community 24 - "Cœur du bot : enregistrement"
Cohesion: 0.23
Nodes (11): actualiser(), corps(), enAttente, enregistrerPartout(), enregistrerSur(), pause(), rest, { REST, Routes } (+3 more)

### Community 25 - "Stockage : données perso (RGPD)"
Cohesion: 0.23
Nodes (15): { Events }, execute(), execute(), handleComponent(), demarrer(), depart(), effacer(), effacerServeur() (+7 more)

### Community 26 - "Tickets : /ticket"
Cohesion: 0.26
Nodes (16): closeTicket(), enFermeture, execute(), formulaire(), handleComponent(), openTicket(), ouvertures, panneau() (+8 more)

### Community 27 - "Module Académie"
Cohesion: 0.18
Nodes (17): autocomplete(), execute(), handleComponent(), { SlashCommandBuilder }, autocomplete(), execute(), autocomplete(), execute() (+9 more)

### Community 28 - "Panel : onglet modules"
Cohesion: 0.12
Nodes (8): tabAcademie(), tabOverview(), tabAutomod(), tabWelcome(), fenetreDemande(), tabModules(), tabLevels(), VUES()

### Community 29 - "Panel : onglet sondages"
Cohesion: 0.19
Nodes (15): choixDuSondage(), dessinEmoji(), dureeLisible(), DUREES_SONDAGE, emojiApercu(), emojiDuServeur(), EMOJIS_SONDAGE, LETTRES_SONDAGE (+7 more)

### Community 30 - "Tests de référence : harnais"
Cohesion: 0.12
Nodes (14): client, DATA, definitions, djs, dossierEv, evenements, fs, { loadCommands } (+6 more)

### Community 31 - "Cœur du bot : modules"
Cohesion: 0.21
Nodes (13): creerCode(), fs, path, crypto, empreinte(), genererCode(), normaliserCode(), CATALOGUE (+5 more)

### Community 32 - "Outils communs : journal"
Cohesion: 0.18
Nodes (12): { Events }, execute(), ecrire(), ecrireFichier(), ETIQUETTES, fs, heure(), journal (+4 more)

### Community 33 - "Module Communauté (giveaways)"
Cohesion: 0.28
Nodes (13): nettoyerSalons(), { PermissionFlagsBits }, start(), execute(), handleComponent(), { SlashCommandBuilder, PermissionFlagsBits, ChannelType }, { ActionRowBuilder, ButtonBuilder, ButtonStyle }, buttonRow() (+5 more)

### Community 34 - "Académie : /quiz"
Cohesion: 0.21
Nodes (18): bilan(), CLE, crypto, demarrerSerie(), derniers, execute(), filtreDe(), handleComponent() (+10 more)

### Community 35 - "Panel (serveur) : sessions et API"
Cohesion: 0.21
Nodes (14): canManage(), discordGet(), crypto, RETOURS, cookieSession(), crypto, empreinte(), garder() (+6 more)

### Community 36 - "Panel (interface) : pages"
Cohesion: 0.15
Nodes (10): GROUPES, guildPage(), LANGUE_NOM, memoriserMenus(), MODULES_MENU, nb(), ouverts, serverList() (+2 more)

### Community 37 - "Stockage : sauvegardes"
Cohesion: 0.23
Nodes (12): { AttachmentBuilder, PermissionFlagsBits }, aujourdhui(), demarrer(), dernierEnvoi(), envoyerSurDiscord(), fs, MARQUEUR, nettoyer() (+4 more)

### Community 38 - "Tests de référence : comparer"
Cohesion: 0.13
Nodes (15): apres, avant, comparer(), defsApres, defsAvant, differences, { execFileSync }, fs (+7 more)

### Community 39 - "Tests visuels : captures"
Cohesion: 0.15
Nodes (12): capturer(), comparer(), ECRANS, fs, http, PAGES, path, serveur() (+4 more)

### Community 40 - "Tests : demandes-module"
Cohesion: 0.25
Nodes (6): { execFileSync }, fs, os, path, RACINE, tmp

### Community 41 - "Panel (serveur) : server"
Cohesion: 0.29
Nodes (10): ipClient(), limiter(), limites, memeSite(), express, path, { PermissionFlagsBits }, SITES (+2 more)

### Community 42 - "Rôles : /verification"
Cohesion: 0.15
Nodes (19): { Events }, execute(), fill(), problemeRole(), roleDangereux(), execute(), builder, execute() (+11 more)

### Community 43 - "Cœur du bot : statut-salon"
Cohesion: 0.35
Nodes (13): arreter(), demarrer(), embed(), ETATS, joignable(), publier(), reglages(), supprimerAncien() (+5 more)

### Community 44 - "Vérification du code (check.js)"
Cohesion: 0.25
Nodes (5): anglais, checkAnglais(), checkOptions(), cmds, errors

### Community 45 - "Module Académie (2)"
Cohesion: 0.18
Nodes (12): BASE, cisco, glossaire, osi, ports, { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder }, enregistrer(), FICHES (+4 more)

### Community 46 - "Cœur du bot : bio"
Cohesion: 0.48
Nodes (6): demarrer(), mettreAJour(), nombre(), pluriel(), { Routes }, texte()

### Community 47 - "Traductions FR/EN (2)"
Cohesion: 0.22
Nodes (11): choisirLangue(), dansServeur(), langueMembre(), langueMp(), languePersonne(), langueServeur(), preferences(), serveurMixte() (+3 more)

### Community 48 - "Fun : /blague"
Cohesion: 0.21
Nodes (11): garderBilingue(), installer(), langueActuelle(), langueCible(), langueDe(), execute(), J, J_EN (+3 more)

### Community 49 - "Tests visuels : panel-serveur"
Cohesion: 0.20
Nodes (9): attendre, client, crypto, empreinte, fs, path, [port, cookie, fichierAppels], RACINE (+1 more)

### Community 50 - "Cœur du bot : v2"
Cohesion: 0.31
Nodes (10): compter(), conteneur(), convertirCorps(), date(), GARDER_CLASSIQUE, installer(), longueur(), { MessagePayload, MessageFlags, Message, MessageComponentInteraction } (+2 more)

### Community 51 - "Outils communs : math"
Cohesion: 0.29
Nodes (9): calc(), add(), mul(), power(), primary(), CONST, FN, execute() (+1 more)

### Community 52 - "Panel : onglet verification"
Cohesion: 0.33
Nodes (9): apercuCartes(), apercuReglement(), BLOCS, editeurCartes(), LIMITES_CARTES, ouvrirReglements(), roleOuCreation(), tabVerification() (+1 more)

### Community 53 - "Tests de référence : scenarios"
Cohesion: 0.18
Nodes (8): C, MEMBRE, MEMBRE_EN, MODO, PROPRIO, R, S, simples

### Community 54 - "Tests visuels : panel"
Cohesion: 0.18
Nodes (10): C, COOKIE, ECRANS, fs, ONGLETS, path, R, REQUETES (+2 more)

### Community 55 - "Docker"
Cohesion: 0.20
Nodes (9): build, cap_add, container_name, env_file, restart, sysctls, volumes, services (+1 more)

### Community 56 - "Panel (interface) : apercus"
Cohesion: 0.29
Nodes (6): apercuBox(), discordMsg(), etiquetteApercu(), heureDiscord(), md(), messageEditor()

### Community 57 - "Tests de référence : liste"
Cohesion: 0.22
Nodes (5): lignes, { PermissionsBitField }, resume(), texte(), TYPES

### Community 58 - "Outils : nouveau-module"
Cohesion: 0.22
Nodes (8): auj, dossier, fs, [id, nom, serveurId], MODULES, nomCommande, path, RESERVES

### Community 59 - "Cœur du bot : bienvenue-support"
Cohesion: 0.53
Nodes (5): accueillir(), { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle }, envois, message(), serveurSupport()

### Community 60 - "Tests : modules-sur-mesure"
Cohesion: 0.22
Nodes (7): assert, { execFileSync }, fs, os, path, RACINE, tmp

### Community 61 - "Tests de référence : harnais (2)"
Cohesion: 0.33
Nodes (9): guild(), interactionCommande(), membreInteraction(), options(), roleBrut(), creerClient(), membreBrut(), permissionsDe() (+1 more)

### Community 62 - "Événement Discord : interactionCreate"
Cohesion: 0.43
Nodes (6): clics, { Events, Collection }, execute(), reply(), traiter(), versFrancais()

### Community 63 - "Cœur du bot : instance"
Cohesion: 0.21
Nodes (12): crypto, demanderArret(), garantirInstanceUnique(), net, pause(), reserver(), secret(), arreter() (+4 more)

### Community 64 - "Panel (interface) : langue"
Cohesion: 0.32
Nodes (7): ATTRIBUTS, enAnglais(), $langue, LANGUE_PANEL, MOTIFS_EN, traduire(), traduireArbre()

### Community 65 - "Panel (interface) : mots"
Cohesion: 0.46
Nodes (6): aplatir(), decouper(), formes(), preparer(), recolles(), trouver()

### Community 66 - "Tests : lint-panel"
Cohesion: 0.25
Nodes (7): { ESLint }, fs, html, path, PUBLIC, scripts, texte

### Community 67 - "Tests de référence : harnais (3)"
Cohesion: 0.25
Nodes (8): base(), canalDe(), interactionComposant(), interactionFormulaire(), auteurBot(), canalBrut(), messageBrut(), nouvelId()

### Community 68 - "Module Académie (subnet)"
Cohesion: 0.48
Nodes (5): execute(), { SlashCommandBuilder }, parse(), toInt(), toIp()

### Community 69 - "Panel : onglet tickets"
Cohesion: 0.52
Nodes (6): editeurType(), ouvrirGalerie(), previewPanneauTickets(), publishCard(), tabTickets(), ticketVide()

### Community 70 - "Tests de référence : monde"
Cohesion: 0.29
Nodes (5): attendre(), avancer(), DateFixe, maintenant(), vider()

### Community 71 - "Tests : statut-salon"
Cohesion: 0.29
Nodes (6): { execFileSync }, fs, os, path, RACINE, tmp

### Community 72 - "Mise en forme du code"
Cohesion: 0.33
Nodes (5): arrowParens, endOfLine, printWidth, singleQuote, trailingComma

### Community 73 - "Événement Discord : messageCreate"
Cohesion: 0.21
Nodes (12): annoncesAfk, dejaSignale(), { Events }, execute(), noter(), execute(), getUser(), execute() (+4 more)

### Community 74 - "Administration : /embed"
Cohesion: 0.50
Nodes (4): execute(), handleComponent(), input(), {
  SlashCommandBuilder,
  PermissionFlagsBits,
  ChannelType,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
}

### Community 75 - "Communauté : /tag"
Cohesion: 0.60
Nodes (4): autocomplete(), execute(), { SlashCommandBuilder, PermissionFlagsBits }, tags()

### Community 76 - "Panel (interface) : icones"
Cohesion: 0.50
Nodes (3): carte(), icon(), ICONES

### Community 79 - "Utilitaires : /demandermodule"
Cohesion: 0.11
Nodes (18): discord.js, { MessageFlags }, prive, { SlashCommandBuilder }, { SlashCommandBuilder, PermissionFlagsBits, ChannelType }, { SlashCommandBuilder }, TERMES, { SlashCommandBuilder, PermissionFlagsBits, ChannelType } (+10 more)

### Community 80 - "Panel (interface) : etat"
Cohesion: 0.50
Nodes (3): $account, $app, $toast

### Community 81 - "Panel (interface) : navigation"
Cohesion: 0.83
Nodes (3): boot(), ongletVoulu(), render()

### Community 82 - "Panel : onglet vocaux"
Cohesion: 0.50
Nodes (3): CONTROLES_VOCAUX, tabVoice(), redessiner()

### Community 105 - "Site cyberbot.fr : panel d'attente"
Cohesion: 0.12
Nodes (23): BOT, choixImages(), ERREURS_EN, lireDataUrl(), montrerConnexion(), preparerImage(), quiEstConnecte(), adapter() (+15 more)

### Community 106 - "Site cyberbot.fr : statut"
Cohesion: 0.36
Nodes (7): afficherStatut(), blocSupport, carte, depuis(), nombre(), pills, verifierStatut()

### Community 107 - "Module Automod"
Cohesion: 0.21
Nodes (12): check(), DEFAULTS, getCfg(), moderer(), { PermissionFlagsBits }, recent, setCfg(), strikes (+4 more)

### Community 109 - "Outils : generer-commandes-site"
Cohesion: 0.21
Nodes (12): CATS, cmds, fs, path, sortie, total, avecIntact(), composant() (+4 more)

### Community 111 - "Cœur du bot : sur-mesure"
Cohesion: 0.18
Nodes (8): DOSSIER_MODULES, fs, path, RESERVES, assert, fs, path, RACINE

### Community 123 - "Panel (interface) : tutoriel"
Cohesion: 0.27
Nodes (9): carteConfiguration(), cleConfig(), cleTuto(), ETAPES_CONFIG, ETAPES_TUTO, memo, repere(), tutoriel (+1 more)

### Community 124 - "Tests : feedbacks"
Cohesion: 0.29
Nodes (6): { execFileSync }, fs, os, path, RACINE, tmp

### Community 125 - "Événement Discord : ready"
Cohesion: 0.53
Nodes (5): demarrerModulesSurMesure(), enregistrerCommandes(), { Events, ActivityType }, execute(), presence()

### Community 126 - "Académie : /ia"
Cohesion: 0.47
Nodes (5): demander(), execute(), limiter(), { SlashCommandBuilder }, usage

### Community 127 - "Module Académie (defi) (2)"
Cohesion: 0.60
Nodes (5): handleComponent(), ecranQuestion(), jouer(), repondre(), question()

## Knowledge Gaps
- **37 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `discord.js` connect `Utilitaires : /demandermodule` to `Module Académie (defi)`, `Fun : /pfc`, `Dépendances (package.json)`, `Module Modération`, `Module Utilitaires (sondages)`, `Cœur du bot : guide-support`, `Rôles : /role`, `Panel (serveur) : discord`, `Module Salons vocaux`, `Tests de référence : monde (2)`, `Cœur du bot : onboarding`, `Module Utilitaires (feedbacks)`, `Utilitaires : /userinfo`, `Outils communs : securite`, `Module Rôles (reglement-support)`, `Utilitaires : /aide`, `Cœur du bot : enregistrement`, `Stockage : données perso (RGPD)`, `Tickets : /ticket`, `Module Académie`, `Tests de référence : harnais`, `Outils communs : journal`, `Module Communauté (giveaways)`, `Académie : /quiz`, `Stockage : sauvegardes`, `Panel (serveur) : server`, `Rôles : /verification`, `Module Académie (2)`, `Cœur du bot : bio`, `Fun : /blague`, `Cœur du bot : v2`, `Outils communs : math`, `Tests de référence : liste`, `Cœur du bot : bienvenue-support`, `Tests de référence : harnais (2)`, `Événement Discord : interactionCreate`, `Cœur du bot : instance`, `Module Académie (subnet)`, `Événement Discord : messageCreate`, `Administration : /embed`, `Communauté : /tag`, `Module Automod`, `Événement Discord : ready`, `Académie : /ia`?**
  _High betweenness centrality (0.192) - this node is a cross-community bridge._
- **Should `Fun : /pfc` be split into smaller, more focused modules?**
  _Cohesion score 0.058823529411764705 - nodes in this community are weakly interconnected._
- **Why does `base()` connect `Fun : /pfc` to `Module Modération`, `Module Utilitaires (sondages)`, `Rôles : /role`, `Panel (serveur) : discord`, `Module Salons vocaux`, `Cœur du bot : onboarding`, `Module Utilitaires (feedbacks)`, `Utilitaires : /userinfo`, `Outils communs : securite`, `Utilitaires : /aide`, `Stockage : données perso (RGPD)`, `Tickets : /ticket`, `Module Académie`, `Module Communauté (giveaways)`, `Académie : /quiz`, `Rôles : /verification`, `Cœur du bot : statut-salon`, `Traductions FR/EN (2)`, `Fun : /blague`, `Outils communs : math`, `Module Académie (subnet)`, `Événement Discord : messageCreate`, `Administration : /embed`, `Communauté : /tag`, `Utilitaires : /demandermodule`, `Module Automod`, `Académie : /ia`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Should `Dépendances (package.json)` be split into smaller, more focused modules?**
  _Cohesion score 0.047619047619047616 - nodes in this community are weakly interconnected._
- **Why does `journal` connect `Outils communs : journal` to `Module Académie (defi)`, `Fun : /pfc`, `Module Modération`, `Module Utilitaires (sondages)`, `Cœur du bot : guide-support`, `Rôles : /role`, `Cœur du bot : loader`, `Stockage : fichiers JSON`, `Panel (serveur) : discord`, `Module Salons vocaux`, `Module Utilitaires (feedbacks)`, `Utilitaires : /userinfo`, `Traductions FR/EN`, `Panel : tunnel Cloudflare`, `Stockage : base de données`, `Cœur du bot : enregistrement`, `Stockage : données perso (RGPD)`, `Tickets : /ticket`, `Module Communauté (giveaways)`, `Panel (serveur) : sessions et API`, `Stockage : sauvegardes`, `Panel (serveur) : server`, `Rôles : /verification`, `Cœur du bot : statut-salon`, `Cœur du bot : bio`, `Cœur du bot : v2`, `Cœur du bot : bienvenue-support`, `Événement Discord : interactionCreate`, `Cœur du bot : instance`, `Événement Discord : messageCreate`, `Utilitaires : /demandermodule`, `Module Automod`, `Événement Discord : ready`, `Académie : /ia`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Should `Module Utilitaires (sondages)` be split into smaller, more focused modules?**
  _Cohesion score 0.08701298701298701 - nodes in this community are weakly interconnected._
- **Should `Cœur du bot : guide-support` be split into smaller, more focused modules?**
  _Cohesion score 0.10588235294117647 - nodes in this community are weakly interconnected._