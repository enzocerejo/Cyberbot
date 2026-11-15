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
  // « Autre chose » : un champ pour préciser le sujet
  const blocSujet = formFeedback.querySelector('[data-sujet]');
  const majSujet = () => { blocSujet.hidden = formFeedback.elements.type.value !== 'autre'; };
  formFeedback.querySelectorAll('input[name="type"]').forEach((r) => r.addEventListener('change', majSujet));
  formFeedback.addEventListener('reset', () => setTimeout(majSujet));

  formFeedback.addEventListener('submit', async (e) => {
    e.preventDefault();
    const f = formFeedback.elements;
    const v = (nom) => f[nom].value.trim();
    const autre = f.type.value === 'autre';
    if (autre && v('sujet').length < 3) return dire(tr('Précise le sujet de ton message (3 caractères au moins).', 'Specify the topic of your message (at least 3 characters).'), false), f.sujet.focus();
    if (v('message').length < 10) return dire(tr('Écris ton message (10 caractères au moins).', 'Write your message (at least 10 characters).'), false), f.message.focus();
    if (!connecte) {
      if (v('discordId') && !/^\d{17,20}$/.test(v('discordId')))
        return dire(tr('L’identifiant Discord est un nombre de 17 à 20 chiffres.', 'A Discord ID is a number with 17 to 20 digits.'), false), f.discordId.focus();
      if (v('pseudo').length < 2 && !v('discordId'))
        return dire(tr('Indique ton pseudo ou ton identifiant Discord pour qu’on puisse te répondre.', 'Enter your Discord username or ID so we can reply to you.'), false), f.pseudo.focus();
    }
    if (!f.accord.checked) return dire(tr('Coche la case pour accepter l’envoi de ton message.', 'Tick the box to agree to sending your message.'), false), f.accord.focus();

    bouton.disabled = true;
    dire(tr('Envoi en cours…', 'Sending…'), true);
    try {
      const r = await envoyerAuBot('/feedback', {
        type: f.type.value, ...(autre ? { sujet: v('sujet') } : {}), message: v('message'), images: images.valeurs(),
        ...(connecte ? {} : { pseudo: v('pseudo'), discordId: v('discordId') }),
        site_web: f.site_web.value, accord: f.accord.checked,
      });
      const corps = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(erreurBot(corps.error) || tr('Le bot n’a pas pu recevoir ton message.', 'The bot could not receive your message.'));
      formFeedback.reset();
      images.vider();
      dire(tr('Merci ! Ton message est bien arrivé à l’équipe de Cyber.', 'Thank you! Your message has reached the Cyber team.'), true);
    } catch (err) {
      const horsLigne = err instanceof TypeError; // réseau coupé ou bot éteint
      dire(horsLigne ? tr('Cyber est hors ligne pour le moment. Réessaie plus tard ou passe par le serveur de support.', 'Cyber is offline right now. Try again later or use the support server.') : err.message, false);
    } finally {
      bouton.disabled = false;
    }
  });
}
