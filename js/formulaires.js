'use strict';
// ---------- Outils des formulaires du site (Feedback, Demander un module) ----------
// - Adresse du bot (panel.cyberbot.fr) et envoi avec le cookie du tableau de bord : cyberbot.fr et panel.cyberbot.fr
//   sont le même site, donc une personne déjà connectée au tableau de bord est reconnue (pseudo + identifiant vérifiés).
// - Choix d'images : 3 au plus, redessinées dans le navigateur (2000 px au plus) avant l'envoi. Le fichier est plus
//   léger et les informations cachées des photos (position GPS, appareil…) disparaissent. Les GIF partent tels quels.
const BOT = (window.CYBER_CONFIG?.statutUrl || 'https://panel.cyberbot.fr/statut').replace(/\/statut$/, '');
const IMAGES_MAX = 3;
const IMAGE_OCTETS = 4 * 1024 * 1024;

function envoyerAuBot(chemin, corps) {
  return fetch(BOT + chemin, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(corps),
  });
}

// Qui est connecté au tableau de bord ? { connecte, pseudo, id } (ou non connecté si le bot ne répond pas)
let moi = null;
function quiEstConnecte() {
  moi ??= fetch(BOT + '/moi', { credentials: 'include' })
    .then((r) => (r.ok ? r.json() : { connecte: false }))
    .catch(() => ({ connecte: false }));
  return moi;
}
// Affiche « Envoyé en tant que … » à la place des champs pseudo/identifiant
async function montrerConnexion(form) {
  const r = await quiEstConnecte();
  if (!r.connecte) return false;
  const bandeau = form.querySelector('[data-connecte]');
  if (bandeau) {
    bandeau.querySelector('[data-connecte-nom]').textContent = r.pseudo;
    bandeau.hidden = false;
  }
  form.querySelectorAll('[data-anonyme]').forEach((n) => { n.hidden = true; });
  return true;
}

function lireDataUrl(blob) {
  return new Promise((ok, ko) => {
    const r = new FileReader();
    r.onload = () => ok(r.result);
    r.onerror = () => ko(new Error('Image illisible.'));
    r.readAsDataURL(blob);
  });
}
async function preparerImage(fichier) {
  if (!/^image\/(png|jpeg|gif|webp)$/.test(fichier.type)) throw new Error('Seules les images PNG, JPEG, GIF et WebP sont acceptées.');
  if (fichier.type === 'image/gif') {
    if (fichier.size > IMAGE_OCTETS) throw new Error('Chaque image fait 4 Mo au plus.');
    return lireDataUrl(fichier);
  }
  let bmp;
  try { bmp = await createImageBitmap(fichier); } catch { throw new Error('Image illisible.'); }
  const echelle = Math.min(1, 2000 / Math.max(bmp.width, bmp.height));
  const toile = document.createElement('canvas');
  toile.width = Math.round(bmp.width * echelle);
  toile.height = Math.round(bmp.height * echelle);
  toile.getContext('2d').drawImage(bmp, 0, 0, toile.width, toile.height);
  if (bmp.close) bmp.close();
  const versBlob = (type, q) => new Promise((ok) => toile.toBlob(ok, type, q));
  let blob = await versBlob('image/webp', 0.9);
  if (!blob || blob.type !== 'image/webp' || blob.size > IMAGE_OCTETS) blob = await versBlob('image/jpeg', 0.85);
  if (!blob || blob.size > IMAGE_OCTETS) throw new Error('Chaque image fait 4 Mo au plus.');
  return lireDataUrl(blob);
}

// Bloc [data-images] d'un formulaire : bouton « Ajouter des images », vignettes avec un bouton pour retirer.
// Renvoie { valeurs(), vider() } ; dire(texte) affiche les erreurs.
function choixImages(bloc, dire) {
  const images = [];
  const bouton = bloc.querySelector('[data-images-ajouter]');
  const entree = bloc.querySelector('[data-images-fichier]');
  const vignettes = bloc.querySelector('[data-images-vignettes]');
  const dessiner = () => {
    vignettes.replaceChildren(...images.map((src, i) => {
      const v = el('div', 'images-vignette');
      const img = el('img');
      img.src = src;
      img.alt = `Image ${i + 1}`;
      const retirer = el('button', 'images-retirer');
      retirer.type = 'button';
      retirer.title = 'Retirer l’image';
      retirer.setAttribute('aria-label', `Retirer l’image ${i + 1}`);
      retirer.append(icone('fermer'));
      retirer.addEventListener('click', () => { images.splice(i, 1); dessiner(); });
      v.append(img, retirer);
      return v;
    }));
    bouton.disabled = images.length >= IMAGES_MAX;
  };
  bouton.addEventListener('click', () => entree.click());
  entree.addEventListener('change', async () => {
    const fichiers = [...entree.files];
    entree.value = '';
    if (fichiers.length > IMAGES_MAX - images.length) dire(`${IMAGES_MAX} images au plus.`, false);
    for (const f of fichiers.slice(0, IMAGES_MAX - images.length)) {
      try { images.push(await preparerImage(f)); } catch (err) { dire(err.message, false); }
    }
    dessiner();
  });
  return { valeurs: () => [...images], vider: () => { images.length = 0; dessiner(); } };
}

// Compteurs de caractères ([data-compteur="id du champ"])
document.querySelectorAll('[data-compteur]').forEach((c) => {
  const champ = document.getElementById(c.dataset.compteur);
  const maj = () => { c.textContent = champ.value.length; };
  champ.addEventListener('input', maj);
  champ.form?.addEventListener('reset', () => setTimeout(maj));
  maj();
});

// Message d'état sous un formulaire (vert : ok, rouge : erreur)
const etatFormulaire = (noeud) => (texte, ok) => {
  noeud.textContent = texte;
  noeud.className = `demande-etat ${ok ? 'ok' : 'ko'}`;
};
