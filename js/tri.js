'use strict';
// ---------- Nouveautés : petit bouton pour inverser l'ordre (plus récent d'abord <-> plus ancien d'abord) ----------
// Le choix est retenu dans ce navigateur. Sans JavaScript, le bouton reste caché et la page garde l'ordre normal.
(() => {
  const bouton = $('#tri-ordre');
  const frise = $('.timeline');
  if (!bouton || !frise) return;
  const CLE = 'cyber-ordre-nouveautes';
  const texte = bouton.querySelector('span');

  function appliquer(ancienDabord) {
    // Les blocs sont écrits du plus récent au plus ancien : il suffit de les retourner quand l'ordre change
    const blocs = [...frise.querySelectorAll(':scope > .release')];
    if (frise.classList.contains('ancien-d-abord') !== ancienDabord) blocs.reverse().forEach((b) => frise.appendChild(b));
    frise.classList.toggle('ancien-d-abord', ancienDabord);
    texte.textContent = ancienDabord ? tr('Plus ancien d\'abord', 'Oldest first') : tr('Plus récent d\'abord', 'Newest first');
  }

  let ancien = false;
  try { ancien = localStorage.getItem(CLE) === 'ancien'; } catch { /* stockage bloqué : ordre normal */ }
  appliquer(ancien);
  bouton.hidden = false;
  bouton.addEventListener('click', () => {
    ancien = !ancien;
    appliquer(ancien);
    try { localStorage.setItem(CLE, ancien ? 'ancien' : 'recent'); } catch { /* tant pis */ }
  });
})();
