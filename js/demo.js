'use strict';
// ---------- Démo animée : Cyber en action dans Discord ----------
(function demo() {
  const feed = document.getElementById('demo-feed');
  const input = document.querySelector('.demo-input');
  const typing = document.getElementById('demo-typing');
  if (!feed) return;
  const heure = () => `Aujourd'hui à ${new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`;
  const pause = (ms) => new Promise((r) => setTimeout(r, reduceMotion ? 0 : ms));
  const COULEURS = { Léo: '#5865f2', Spam_bot: '#ed4245', Enzo: '#ff3d5a', Maya: '#3ba55d' };

  function ajouter(auteur, contenu, opts = {}) {
    const m = el('div', 'msg');
    const av = el('div', 'av');
    if (auteur === 'Cyber') { const i = el('img'); i.src = 'assets/logo.webp'; i.alt = ''; av.append(i); }
    else { av.textContent = auteur[0]; av.style.background = COULEURS[auteur] || '#4e5058'; }
    const corps = el('div');
    const who = el('div', 'who', auteur);
    if (auteur === 'Cyber') who.append(el('span', 'app', 'APP'));
    who.append(el('time', null, heure()));
    corps.append(who);
    if (contenu) corps.append(el('div', `txt${opts.cmd ? ' cmd' : ''}`, contenu));
    if (opts.embed) corps.append(opts.embed);
    m.append(av, corps);
    feed.append(m);
    while (feed.children.length > 6) feed.firstElementChild.remove();
    return m;
  }

  function embed(titre, lignes, extra) {
    const e = el('div', 'emb');
    e.append(el('b', null, titre));
    for (const l of lignes) {
      const d = el('div');
      for (const part of l) d.append(typeof part === 'string' ? part : part);
      e.append(d);
    }
    if (extra) e.append(extra);
    return e;
  }
  const mention = (n) => el('span', 'mention', `@${n}`);

  async function taper(texte) {
    input.classList.add('typing');
    typing.textContent = '';
    for (const c of texte) { typing.textContent += c; await pause(55); }
    await pause(350);
    input.classList.remove('typing');
    typing.textContent = 'Envoyer un message dans #général';
  }

  const scenes = [
    async () => {
      ajouter('Cyber', null, { embed: embed('👋 Nouveau membre', [['Bienvenue ', mention('Léo'), ' sur ', el('b', null, 'Mon serveur'), ' ! Tu es notre 128ᵉ membre 🎉']]) });
    },
    async () => {
      const spam = ajouter('Spam_bot', 'nitro gratuit ici 🎁 discord.gg/free-nitro');
      await pause(1100);
      spam.classList.add('deleted');
      await pause(500);
      const w = ajouter('Cyber', null, { embed: embed('🤖 Automod', [[mention('Spam_bot'), ', invitation Discord interdite (1/3).']]) });
      w.querySelector('.emb').style.borderLeftColor = '#ffc457';
      await pause(1400);
      spam.classList.add('gone');
      await pause(400);
      spam.remove();
    },
    async () => {
      await taper('/rang');
      ajouter('Enzo', '/rang', { cmd: true });
      await pause(600);
      const bar = el('div', 'bar'); const fill = el('span'); bar.append(fill);
      ajouter('Cyber', null, { embed: embed('📈 Rang de Enzo', [['Niveau ', el('b', null, '12'), ' · Classement ', el('b', null, '#3')], ['1 840 / 2 400 XP']], bar) });
      await pause(80); fill.style.width = '77%';
    },
    async () => {
      await taper('/ticket ouvrir');
      ajouter('Maya', '🎫 Ouvrir un ticket');
      await pause(600);
      const b = el('span', 'btn-d', '🔒 Fermer le ticket');
      ajouter('Cyber', null, { embed: embed('🎫 Ticket ouvert', [['Ton ticket est prêt : ', el('b', null, '#ticket-0042')], ['L\'équipe va te répondre.']], b) });
    },
    async () => {
      await taper('/sousreseau 10.0.0.0/26');
      ajouter('Enzo', '/sousreseau 10.0.0.0/26', { cmd: true });
      await pause(600);
      ajouter('Cyber', null, { embed: embed('🧮 10.0.0.0/26', [['Masque ', el('b', null, '255.255.255.192')], ['Broadcast ', el('b', null, '10.0.0.63'), ' · ', el('b', null, '62'), ' hôtes']]) });
    },
  ];

  let visible = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(feed);
  }
  (async () => {
    if (reduceMotion) { for (const s of scenes) await s(); return; }
    for (let i = 0; ; i = (i + 1) % scenes.length) {
      while (!visible || document.hidden) await pause(500);
      await scenes[i]();
      await pause(2600);
    }
  })();
})();

