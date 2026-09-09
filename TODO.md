# TODO

## Formulaire de contact

- [x] Clé Web3Forms configurée dans `.env` (`VITE_WEB3FORMS_ACCESS_KEY`).
- [ ] Envoyer un vrai message test via le formulaire et vérifier la réception
      sur `qfjb@parisbridge.fr`.
- [ ] Pour le déploiement automatique : ajouter la clé en **secret GitHub
      Actions** `VITE_WEB3FORMS_ACCESS_KEY` (cf. `DEPLOY.md`).

## Mise en ligne

- [x] HTTPS activé sur OVH (Let's Encrypt, `qfjb.fr` + `www.qfjb.fr`).
- [x] Redirections `http → https` et `www → non-www` dans `public/.htaccess`.
- [ ] Déployer la version avec le nouveau `.htaccess` (via FileZilla ou
      `npm run deploy`) et vérifier :
      - `http://qfjb.fr` et `https://www.qfjb.fr` redirigent bien vers
        `https://qfjb.fr` ;
      - une URL inexistante affiche la page 404 stylée ;
      - le formulaire de contact envoie bien un email.

## SEO / partage social

- [ ] Soumettre le sitemap (`https://qfjb.fr/sitemap.xml`) dans Google Search
      Console ; vérifier le rendu des partages avec les debuggers Facebook /
      LinkedIn / le validateur Twitter Card.
- [ ] Visuel `og:image` dédié en 1200×630 (ratio 1.91:1) — le 16:9 actuel
      fonctionne mais est recadré par les réseaux.

## Perf / accessibilité

- [ ] Icône `apple-touch-icon` **180×180 dédiée** — pointe pour l'instant sur
      `/favicon.png`, trop petit (upscaling flou à l'ajout à l'écran d'accueil iOS).
- [ ] Optimiser le poids des images : `logo-banniere.jpg` ~620 Ko, plusieurs
      photos > 200 Ko. Convertir en WebP + ajouter `srcset` pour le responsive.

## Contenu

- [ ] Cartes du bureau (`equipe.tsx`) : monogramme + nom + rôle seulement.
      Ajouter une phrase de présentation par personne quand le contenu sera
      dispo (le champ `bio` du type `Person` est déjà prêt et optionnel).
- [ ] (Optionnel) Faire apparaître quelque part l'info tarif : **adhésion
      gratuite**, seule la licence FFB est payante (gratuite jusqu'à 26 ans,
      1re année offerte pour les adultes, sinon 65 €). Bon argument de
      recrutement — à mettre sur une future page « Rejoindre » ou une FAQ.

## À surveiller

- Titres forcés en capitales via CSS : garder un œil sur la lisibilité des
  titres longs au fil des nouveaux contenus.
