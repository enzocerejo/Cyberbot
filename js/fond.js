'use strict';
// ---------- Fond : réseau de nœuds connectés ----------
(function reseau() {
  const cv = document.getElementById('reseau');
  if (!cv || !cv.getContext) return;
  const ctx = cv.getContext('2d');
  let w, h, dpr, nodes = [], raf = null;
  const souris = { x: -9999, y: -9999 };
  const DIST = 140;

  function taille() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth; h = window.innerHeight;
    cv.width = w * dpr; cv.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(90, Math.round((w * h) / 17000));
    nodes = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.8, phase: Math.random() * Math.PI * 2,
    }));
  }

  function dessiner(t) {
    ctx.clearRect(0, 0, w, h);
    for (const a of nodes) {
      if (!reduceMotion) {
        a.x += a.vx; a.y += a.vy;
        if (a.x < -20) a.x = w + 20; if (a.x > w + 20) a.x = -20;
        if (a.y < -20) a.y = h + 20; if (a.y > h + 20) a.y = -20;
      }
    }
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
        if (d < DIST) {
          ctx.strokeStyle = `rgba(255, 61, 90, ${(1 - d / DIST) * 0.34})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const dm = Math.hypot(a.x - souris.x, a.y - souris.y);
      if (dm < 180) {
        ctx.strokeStyle = `rgba(255, 122, 140, ${(1 - dm / 180) * 0.55})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(souris.x, souris.y); ctx.stroke();
      }
      const lueur = reduceMotion ? 0.7 : 0.55 + Math.sin(t / 900 + a.phase) * 0.35;
      ctx.fillStyle = `rgba(255, 90, 110, ${lueur})`;
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
    if (!reduceMotion) raf = requestAnimationFrame(dessiner);
  }

  taille();
  dessiner(0);
  window.addEventListener('resize', () => { taille(); if (reduceMotion) dessiner(0); });
  window.addEventListener('pointermove', (e) => { souris.x = e.clientX; souris.y = e.clientY; });
  window.addEventListener('pointerleave', () => { souris.x = souris.y = -9999; });
  document.addEventListener('visibilitychange', () => {
    if (reduceMotion) return;
    if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(dessiner);
  });
})();

