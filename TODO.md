# TODO

## Formulaire de contact

- [ ] Pour le déploiement automatique : ajouter la clé en **secret GitHub
      Actions** `VITE_WEB3FORMS_ACCESS_KEY` (cf. `DEPLOY.md`).

## SEO / partage social

- [ ] Vérifier le rendu des partages avec le validateur LinkedIn / Twitter Card
      (Facebook déjà confirmé OK via le débogueur).

## Perf / accessibilité

- [ ] Icône `apple-touch-icon` **180×180 dédiée** — pointe pour l'instant sur
      `/favicon.png`, trop petit (upscaling flou à l'ajout à l'écran d'accueil iOS).
- [ ] Optimiser le poids des images : `logo-banniere.jpg` ~620 Ko, plusieurs
      photos > 200 Ko. Convertir en WebP (`sharp` est déjà en devDependency,
      cf. `scripts/og-image.mjs`) + ajouter `srcset` pour le responsive.

## Contenu

- [ ] Cartes du bureau (`equipe.tsx`) : monogramme + nom + rôle seulement.
      Ajouter une phrase de présentation par personne quand le contenu sera
      dispo (le champ `bio` du type `Person` est déjà prêt et optionnel).
- [ ] (Optionnel) Faire apparaître quelque part l'info tarif : **adhésion
      gratuite**, seule la licence FFB est payante (gratuite jusqu'à 26 ans,
      1re année offerte pour les adultes, sinon 65 €). Bon argument de
      recrutement — à mettre sur une future page « Rejoindre » ou une FAQ.

## Maintenance / dette technique

- [ ] Remplacer les icônes `lucide-react` marquées _deprecated_ : `Instagram` et
      `Facebook` (icônes de marques retirées progressivement par lucide) dans les
      liens réseaux sociaux de `index.tsx`. Elles fonctionnent encore mais
      disparaîtront à une future montée de version.
- [ ] Import mort : `Mic` n'est plus utilisé dans `index.tsx`.

## À surveiller

- Titres forcés en capitales via CSS : garder un œil sur la lisibilité des
  titres longs au fil des nouveaux contenus.
