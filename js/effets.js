'use strict';
// Effets des cartes et des sections : compteurs, halo, bouton copier, apparition au défilement
// ---------- Compteurs animés ----------
function compter(node) {
  const target = parseInt(node.textContent, 10);
  if (!Number.isFinite(target) || reduceMotion) return;
  const suffix = node.textContent.replace(/^\d+/, '');
  const start = performance.now();
  const step = (t) => {
    const p = Math.min(1, (t - start) / 1200);
    node.textContent = Math.round(target * (1 - (1 - p) ** 3)) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ---------- Halo qui suit la souris sur les cartes ----------
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--x', `${e.clientX - r.left}px`);
    card.style.setProperty('--y', `${e.clientY - r.top}px`);
  });
});

// ---------- Boutons « copier la commande » ----------
document.querySelectorAll('.cmd-copy').forEach((b) => {
  b.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(b.dataset.copy);
    } catch {
      const t = el('textarea'); t.value = b.dataset.copy; document.body.append(t); t.select();
      document.execCommand('copy'); t.remove();
    }
    b.classList.add('copied');
    setTimeout(() => b.classList.remove('copied'), 1600);
  });
});

// ---------- Apparition douce au défilement ----------
const io = 'IntersectionObserver' in window && !reduceMotion ? new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    e.target.classList.add('visible');
    if (e.target.matches('.counters')) e.target.querySelectorAll('b').forEach(compter);
    io.unobserve(e.target);
  }
}, { threshold: 0.12 }) : null;
document.querySelectorAll('.card, .section > h2, .faq details, .split > *, .step, .release, .legal article, .counters').forEach((n) => {
  if (io) { n.classList.add('reveal'); io.observe(n); }
});

