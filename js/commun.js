'use strict';
// Outils communs à toutes les pages : raccourcis, menu mobile, adresse propre, année du pied de page
const $ = (sel) => document.querySelector(sel);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

