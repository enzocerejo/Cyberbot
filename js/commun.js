'use strict';
// Outils communs à toutes les pages : raccourcis, menu mobile, adresse propre, année du pied de page
const $ = (sel) => document.querySelector(sel);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Langue de la page (<html lang>) : tr('texte français', 'English text') renvoie le texte de la page
const SITE_EN = document.documentElement.lang === 'en';
const tr = (fr, en) => (SITE_EN ? en : fr);

// ---------- Langue choisie (bouton FR / EN) ----------
// Un clic sur un lien vers l'autre langue retient le choix dans ce navigateur. Quand on revient plus tard sur une
// page française depuis un autre site (Discord, Google…), on arrive directement sur sa version anglaise.
const CLE_LANGUE = 'cyber-langue-site';
const memoLangue = (l) => { try { localStorage.setItem(CLE_LANGUE, l); } catch { /* stockage bloqué : tant pis */ } };
document.addEventListener('click', (e) => {
  const a = e.target.closest?.('a[hreflang]');
  if (a && /^(fr|en)$/.test(a.hreflang) && a.matches('.lang, [data-langue]')) memoLangue(a.hreflang);
});
(() => {
  let choix = null;
  try { choix = localStorage.getItem(CLE_LANGUE); } catch { return; }
  const ici = document.documentElement.lang;
  if (!choix || choix === ici) return;
  let depuisLeSite = false;
  try { depuisLeSite = !!document.referrer && new URL(document.referrer).origin === location.origin; } catch { /* adresse illisible */ }
  if (depuisLeSite) return; // on navigue déjà sur le site : on respecte les liens cliqués
  const alt = document.querySelector(`link[rel="alternate"][hreflang="${choix}"]`);
  if (alt && new URL(alt.href).origin === location.origin) location.replace(alt.href + location.hash);
})();

// ---------- Menu mobile ----------
const menuBtn = $('.menu-btn');
const links = $('.links');
if (menuBtn && links) {
  menuBtn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') { links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  });
}

// ---------- Adresse propre : enlève « .html » de la barre d'adresse (index.html → /) ----------
if (/\.html$/.test(location.pathname) && history.replaceState) {
  const propre = location.pathname.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '');
  history.replaceState(null, '', propre + location.search + location.hash);
}

document.querySelectorAll('[data-annee]').forEach((n) => { n.textContent = new Date().getFullYear(); });

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

