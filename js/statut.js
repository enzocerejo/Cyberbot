'use strict';
// ---------- Statut de Cyber (en direct, via panel.cyberbot.fr/statut) ----------
// Le bot répond lui-même : s'il est éteint (ou son ordinateur), la requête échoue et le site affiche « hors ligne ».
const cfg = window.CYBER_CONFIG || {};
const pills = document.querySelectorAll('[data-statut]');
const carte = $('#statut-carte');
const EN = document.documentElement.lang === 'en';
const LOCALE = EN ? 'en-US' : 'fr-FR';
const nombre = (n) => n.toLocaleString(LOCALE);

function afficherStatut(etat, titre, detail) {
  pills.forEach((p) => {
    p.classList.add('show');
    p.querySelector('.dot-status').className = `dot-status ${etat}`;
    p.querySelector('.pill-txt').textContent = etat === 'on' ? (EN ? 'Online' : 'En ligne') : etat === 'off' ? (EN ? 'Offline' : 'Hors ligne') : (EN ? 'Unknown status' : 'Statut inconnu');
  });
  if (carte) {
    carte.className = `status-card ${etat}`;
    $('#statut-point').className = `dot-status ${etat}`;
    $('#statut-titre').textContent = titre;
    $('#statut-detail').textContent = detail;
    $('#statut-heure').textContent = `${EN ? 'Checked at' : 'Vérifié à'} ${new Date().toLocaleTimeString(LOCALE, { hour: '2-digit', minute: '2-digit' })}`;
  }
}

function depuis(ms) {
  const min = Math.max(1, Math.round((Date.now() - ms) / 60_000));
  if (min < 60) return EN ? `${min} min` : `${min} min`;
  const h = Math.round(min / 60);
  if (h < 48) return EN ? `${h} h` : `${h} h`;
  const j = Math.round(h / 24);
  return EN ? `${j} days` : `${j} jours`;
}

async function verifierStatut() {
  const url = cfg.statutUrl || 'https://panel.cyberbot.fr/statut';
  try {
    const r = await fetch(url, { cache: 'no-store' });
    if (!r.ok) throw new Error(String(r.status));
    const s = await r.json();
    if (!s.enLigne) throw new Error('hors ligne');
    const parts = [];
    if (Number.isFinite(s.serveurs)) parts.push(EN ? `${nombre(s.serveurs)} server${s.serveurs > 1 ? 's' : ''}` : `${nombre(s.serveurs)} serveur${s.serveurs > 1 ? 's' : ''}`);
    if (Number.isFinite(s.membres)) parts.push(EN ? `${nombre(s.membres)} members` : `${nombre(s.membres)} membres`);
    if (Number.isFinite(s.depuis)) parts.push(EN ? `online for ${depuis(s.depuis)}` : `en ligne depuis ${depuis(s.depuis)}`);
    afficherStatut('on', EN ? 'Cyber is online' : 'Cyber est en ligne', parts.join(' · ') || (EN ? 'All commands work normally.' : 'Toutes les commandes fonctionnent normalement.'));
    document.querySelectorAll('[data-serveurs]').forEach((b) => {
      if (!Number.isFinite(s.serveurs)) return;
      b.querySelector('b').textContent = nombre(s.serveurs);
      b.hidden = false;
    });
  } catch {
    afficherStatut('off', EN ? 'Cyber is offline' : 'Cyber est hors ligne',
      EN ? 'The bot is under maintenance or restarting. Try again in a few minutes.' : 'Le bot est en maintenance ou redémarre. Réessaie dans quelques minutes.');
  }
}
if (pills.length || carte || document.querySelector('[data-serveurs]')) {
  verifierStatut();
  setInterval(verifierStatut, 60_000);
}

// ---------- Chiffres en direct : membres du serveur de support (invitation publique Discord) ----------
const blocSupport = document.querySelectorAll('[data-support]');
if (blocSupport.length) {
  fetch('https://discord.com/api/v10/invites/erqHM5s8Vz?with_counts=true')
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
    .then((inv) => {
      const n = inv.approximate_member_count;
      if (!Number.isFinite(n) || n < 1) return;
      const langue = document.documentElement.lang === 'en' ? 'en-US' : 'fr-FR';
      blocSupport.forEach((b) => {
        b.querySelector('[data-support-membres]').textContent = n.toLocaleString(langue);
        b.hidden = false;
      });
    })
    .catch(() => {}); // Discord injoignable : le compteur reste caché
}

