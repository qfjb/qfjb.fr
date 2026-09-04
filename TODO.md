# TODO

## Formulaire de contact — configuration Web3Forms (manuel)

Le composant [`src/components/contact-form.tsx`](src/components/contact-form.tsx) est prêt,
mais il lui faut une clé d'accès Web3Forms pour envoyer les emails.

- [ ] Aller sur https://web3forms.com et saisir l'adresse `qfjb@parisbridge.fr`
- [ ] Valider le mail de confirmation reçu, puis copier l'**Access Key**
- [ ] `cp .env.example .env` et coller la clé dans `VITE_WEB3FORMS_ACCESS_KEY=`
- [ ] Tester en local avec `npm run dev` (envoyer un message test)
- [ ] S'assurer que `.env` est présent sur la machine qui fait `npm run build`
      avant l'upload FTP — la clé est injectée au build (site statique).
      Sans clé, le formulaire s'affiche mais renvoie une erreur à l'envoi.

## Avant la mise en ligne publique

- [ ] **Activer HTTPS sur l'hébergement OVH** (certificat SSL gratuit Let's
      Encrypt, à activer dans l'espace client OVH → rubrique Multisite/SSL,
      actif sous ~24h). Tout le code utilise déjà `https://qfjb.fr` : rien à
      changer, il suffit d'activer le certificat. Ne pas partager le lien ni
      soumettre le sitemap avant que `https://qfjb.fr` réponde — sinon les
      vignettes de partage (og:image) et le sitemap pointeront dans le vide.
- [ ] Une fois le SSL actif, ajouter dans `public/.htaccess` une redirection
      HTTP → HTTPS (RewriteCond `%{HTTPS} off`).

## Suites liées

- [ ] Créer une page **politique de confidentialité** (qui collecte quoi,
      Web3Forms comme relais, durée de conservation) et la lier depuis la case
      de consentement du formulaire.
- [ ] Déploiement : documenter/scripter l'upload de `dist/client/` en FTP sur
      l'hébergement OVH (voir la note « Déploiement » dans `CLAUDE.md`).

## SEO / partage social

- [ ] Quand `https://qfjb.fr` sera en ligne (voir « Avant la mise en ligne ») :
      soumettre le sitemap dans Google Search Console, et vérifier le rendu des
      partages avec les debuggers Facebook / LinkedIn / le validateur Twitter Card.
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

## À surveiller

- Titres forcés en capitales via CSS : garder un œil sur la lisibilité des
  titres longs au fil des nouveaux contenus.
