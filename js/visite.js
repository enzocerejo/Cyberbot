'use strict';
// ---------- Visite guidée : les étapes défilent toutes seules (pause au survol) ----------
document.querySelectorAll('[data-visite]').forEach((visite) => {
  const onglets = [...visite.querySelectorAll('.visite-onglet')];
  const DUREE = 7000;
  visite.style.setProperty('--visite-duree', DUREE + 'ms');
  let actuel = 0, minuteur = null, reste = DUREE, debut = 0, enVue = false, survol = false;
  const montrer = (i, focus) => {
    actuel = (i + onglets.length) % onglets.length;
    onglets.forEach((o, j) => {
      const on = j === actuel;
      o.classList.toggle('actif', on);
      o.setAttribute('aria-selected', on);
      o.tabIndex = on ? 0 : -1;
      const p = document.getElementById(o.getAttribute('aria-controls'));
      p.hidden = !on;
      p.classList.toggle('actif', on);
    });
    if (focus) onglets[actuel].focus();
    reste = DUREE;
    planifier();
  };
  const planifier = () => {
    clearTimeout(minuteur);
    const pause = reduceMotion || !enVue || survol;
    visite.classList.toggle('pause', pause);
    if (pause) return;
    debut = Date.now();
    minuteur = setTimeout(() => montrer(actuel + 1), reste);
  };
  const arreter = () => { if (!visite.classList.contains('pause')) reste = Math.max(0, reste - (Date.now() - debut)); };
  onglets.forEach((o, i) => {
    o.addEventListener('click', () => montrer(i));
    o.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); montrer(actuel + (e.key === 'ArrowRight' ? 1 : -1), true); }
    });
  });
  visite.addEventListener('mouseenter', () => { arreter(); survol = true; planifier(); });
  visite.addEventListener('mouseleave', () => { survol = false; planifier(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => { if (!e.isIntersecting) arreter(); enVue = e.isIntersecting; planifier(); }, { threshold: 0.3 }).observe(visite);
  } else { enVue = true; planifier(); }
  onglets.forEach((o, j) => { o.tabIndex = j === 0 ? 0 : -1; });
});
