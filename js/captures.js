'use strict';
// ---------- Captures du tableau de bord (onglets) ----------
const capture = document.querySelector('#capture img');
document.querySelectorAll('[data-capture]').forEach((btn, i, tous) => {
  btn.addEventListener('click', () => {
    tous.forEach((b) => { b.classList.toggle('active', b === btn); b.setAttribute('aria-selected', String(b === btn)); });
    const src = `assets/captures/${btn.dataset.capture}.webp`;
    if (capture.getAttribute('src') === src) return;
    capture.classList.add('change');
    const img = new Image();
    img.onload = img.onerror = () => { capture.src = src; capture.alt = btn.dataset.alt; capture.classList.remove('change'); };
    img.src = src;
  });
  // Flèches gauche/droite pour passer d'un onglet à l'autre au clavier
  btn.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const suivant = tous[(i + (e.key === 'ArrowRight' ? 1 : tous.length - 1)) % tous.length];
    suivant.focus(); suivant.click();
  });
});

