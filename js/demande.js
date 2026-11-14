'use strict';
// ---------- Formulaire « Demander un module » (page modules) ----------
// La demande part vers le bot (panel.cyberbot.fr/demande-module), qui la publie dans le salon privé de l'équipe.
const formDemande = $('#demande-form');
if (formDemande) {
  const dire = etatFormulaire($('#demande-etat'));
  const bouton = formDemande.querySelector('button[type="submit"]');
  const images = choixImages(formDemande.querySelector('[data-images]'), dire);
  let connecte = false;
  montrerConnexion(formDemande).then((c) => { connecte = c; });

  formDemande.addEventListener('submit', async (e) => {
    e.preventDefault();
    const f = formDemande.elements;
    const v = (nom) => f[nom].value.trim();
    if (v('nom').length < 3) return dire('Donne un nom à ton module (3 caractères au moins).', false), f.nom.focus();
    if (v('description').length < 20) return dire('Décris ce que doit faire le module (20 caractères au moins).', false), f.description.focus();
    if (!connecte && v('pseudo').length < 2) return dire('Indique ton pseudo Discord pour qu’on puisse te répondre.', false), f.pseudo.focus();
    if (!f.accord.checked) return dire('Coche la case pour accepter l’envoi de ta demande.', false), f.accord.focus();

    bouton.disabled = true;
    dire('Envoi en cours…', true);
    try {
      const r = await envoyerAuBot('/demande-module', {
        nom: v('nom'), description: v('description'), details: v('details'),
        pseudo: v('pseudo'), serveur: v('serveur'), images: images.valeurs(),
        site_web: f.site_web.value, accord: f.accord.checked,
      });
      const corps = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(corps.error || 'Le bot n’a pas pu recevoir ta demande.');
      formDemande.reset();
      images.vider();
      dire('Demande envoyée ! L’équipe de Cyber va la lire et te contactera sur Discord.', true);
    } catch (err) {
      const horsLigne = err instanceof TypeError; // réseau coupé ou bot éteint
      dire(horsLigne ? 'Cyber est hors ligne pour le moment. Réessaie plus tard ou passe par le serveur de support.' : err.message, false);
    } finally {
      bouton.disabled = false;
    }
  });
}
