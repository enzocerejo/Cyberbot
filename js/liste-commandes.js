'use strict';
// ---------- Liste des commandes (page d'accueil) ----------
const data = window.CYBER_COMMANDES;
if (data && $('#liste')) {
  const total = data.reduce((n, c) => n + c.commands.length, 0);
  const $nb = $('#nb-commandes');
  if ($nb) $nb.textContent = total;
  const $cats = $('#cats');
  const $liste = $('#liste');
  const $recherche = $('#recherche');
  let categorie = 'toutes';

  const boutonCat = (id, label, n) => {
    const b = el('button', `cat${id === categorie ? ' active' : ''}`, label);
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', String(id === categorie));
    b.append(el('small', null, n));
    b.addEventListener('click', () => { categorie = id; afficher(); });
    return b;
  };

  function afficher() {
    $cats.replaceChildren(boutonCat('toutes', 'Toutes', total), ...data.map((c) => boutonCat(c.id, `${c.emoji} ${c.label}`, c.commands.length)));
    const q = $recherche.value.trim().toLowerCase().replace(/^\//, '');
    const cmds = data
      .filter((c) => categorie === 'toutes' || c.id === categorie)
      .flatMap((c) => c.commands.map((cmd) => ({ ...cmd, emoji: c.emoji })))
      .filter((cmd) => !q || cmd.name.includes(q) || cmd.desc.toLowerCase().includes(q) || cmd.subs.some((s) => s.name.includes(q)));

    if (!cmds.length) { $liste.replaceChildren(el('p', 'vide', 'Aucune commande trouvée.')); return; }
    $liste.replaceChildren(...cmds.map((cmd, i) => {
      const card = el('article', 'cmd');
      card.style.animationDelay = `${Math.min(i, 20) * 15}ms`;
      const head = el('div', 'cmd-head');
      head.append(el('span', null, cmd.emoji), el('span', 'cmd-name', `/${cmd.name}`));
      if (cmd.staff) head.append(el('span', 'tag-staff', 'staff'));
      card.append(head, el('p', null, cmd.desc));
      if (cmd.subs.length) {
        const subs = el('div', 'subs');
        subs.append(...cmd.subs.map((s) => { const t = el('span', null, s.name); t.title = s.desc; return t; }));
        card.append(subs);
      }
      return card;
    }));
  }
  $recherche.addEventListener('input', afficher);
  afficher();
}

