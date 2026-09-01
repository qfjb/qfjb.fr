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
- [ ] Remplacer éventuellement `logo-banniere.jpg` par un visuel dédié 1200×630
      (ratio idéal ~1.91:1) une fois la plaquette prête.

## Accessibilité / perf (nice-to-have)

- [ ] Lien d'évitement « Aller au contenu » en tête de page (a11y clavier).
- [ ] Optimiser le poids des images : `logo-banniere.jpg` fait 619 Ko, plusieurs
      photos > 200 Ko. Convertir en WebP + ajouter `srcset` pour le responsive.

## Cohérence visuelle — reste à faire (lot C, à la reprise du contenu)

- [ ] Coupe Epsilon annoncée avec deux dates sur `evenements.tsx` : « dimanche
      13 septembre 2026 » dans la section dédiée vs « Samedi 14 novembre » dans
      l'agenda (`AGENDA[0]`). L'accueil dit « 13 septembre ». À trancher.
- [ ] Le « déroulé de la soirée » (18h30→21h45) décrit une soirée alors que la
      Coupe est un dimanche à 14h — revoir horaires ou intitulé.
- [ ] Harmoniser la taille des `<h3>` de cartes (`text-xl` vs `text-2xl` selon
      les sections) et les 3 façons de faire du texte atténué
      (`text-muted-foreground` / `opacity-80` / `text-foreground/80`).
- [ ] Titres forcés en capitales via CSS : surveiller la lisibilité des titres
      longs sur les nouveaux contenus.

## Ménage (optionnel)

- [x] `equipe.tsx` : footer inline dégradé remplacé par `<PageFooter />`.
- [x] `src/assets/groupe_bordeaux.jpeg` supprimé (inutilisé).
- [ ] `@tanstack/react-query` est branché (`QueryClientProvider`) mais inutilisé.
      Le garder si on prévoit des données dynamiques, sinon le retirer.
- [ ] `src/components/ui/` contient beaucoup de composants shadcn non utilisés
      (sidebar, carousel, chart, form…). Élaguer ce qui ne sert pas.
- [ ] `--mint` dans `styles.css` : défini et mappé mais utilisé nulle part.
