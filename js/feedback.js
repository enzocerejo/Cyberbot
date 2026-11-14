'use strict';
// ---------- Onglet « Feedback » : avis, idée ou bug, avec des images ----------
// Le message part vers le bot (panel.cyberbot.fr/feedback), qui le publie dans le salon privé #feedbacks de l'équipe.
// Connecté au tableau de bord : pseudo + identifiant ajoutés et vérifiés. Sinon : pseudo et/ou identifiant demandés.
const formFeedback = $('#feedback-form');
if (formFeedback) {
  const dire = etatFormulaire($('#feedback-etat'));
  const bouton = formFeedback.querySelector('button[type="submit"]');
  const images = choixImages(formFeedback.querySelector('[data-images]'), dire);
  let connecte = false;
  montrerConnexion(formFeedback).then((c) => { connecte = c; });

  formFeedback.addEventListener('submit', async (e) => {
    e.preventDefault();
    const f = formFeedback.elements;
    const v = (nom) => f[nom].value.trim();
    if (v('message').length < 10) return dire('Écris ton message (10 caractères au moins).', false), f.message.focus();
    if (!connecte) {
      if (v('discordId') && !/^\d{17,20}$/.test(v('discordId')))
        return dire('L’identifiant Discord est un nombre de 17 à 20 chiffres.', false), f.discordId.focus();
      if (v('pseudo').length < 2 && !v('discordId'))
        return dire('Indique ton pseudo ou ton identifiant Discord pour qu’on puisse te répondre.', false), f.pseudo.focus();
    }
    if (!f.accord.checked) return dire('Coche la case pour accepter l’envoi de ton message.', false), f.accord.focus();

    bouton.disabled = true;
    dire('Envoi en cours…', true);
    try {
      const r = await envoyerAuBot('/feedback', {
        type: f.type.value, message: v('message'), images: images.valeurs(),
        ...(connecte ? {} : { pseudo: v('pseudo'), discordId: v('discordId') }),
        site_web: f.site_web.value, accord: f.accord.checked,
      });
      const corps = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(corps.error || 'Le bot n’a pas pu recevoir ton message.');
      formFeedback.reset();
      images.vider();
      dire('Merci ! Ton message est bien arrivé à l’équipe de Cyber.', true);
    } catch (err) {
      const horsLigne = err instanceof TypeError; // réseau coupé ou bot éteint
      dire(horsLigne ? 'Cyber est hors ligne pour le moment. Réessaie plus tard ou passe par le serveur de support.' : err.message, false);
    } finally {
      bouton.disabled = false;
    }
  });
}
