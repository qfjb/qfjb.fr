# Quai Francilien des Jeunes Bridgeurs — site vitrine

Site vitrine du **QFJB**, club de bridge d'Île-de-France réservé aux moins de 40 ans.
Objectif : recruter des adhérents (débutants comme confirmés), montrer la vie du
club et les résultats en compétition, et donner une image crédible aux partenaires.

## Stack

- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** — design system dans `src/styles.css`, esthétique
  « pop / néobrutaliste » (bordures épaisses, ombres portées, fort contraste)
- **TanStack Router + React Start** — routing par fichiers dans `src/routes/`
- **Prérendu statique** : le site n'a aucune donnée dynamique. `npm run build`
  génère un HTML complet par route dans `dist/client/`, déployé en FTP sur un
  hébergement statique (OVH), sans serveur Node
- `lucide-react` pour les icônes. Pas de shadcn/ui, pas de TanStack Query.

## Développement local

Node 24 (voir `.nvmrc`).

```sh
npm install
npm run dev
```

## Scripts

| Commande | Effet |
| --- | --- |
| `npm run dev` | serveur de dev |
| `npm run build` | build de production → `dist/client/` |
| `npm run preview` | prévisualise le build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier (écriture) |
| `npm run deploy` | build + upload FTP de `dist/client/` (voir `DEPLOY.md`) |

## Structure

- `src/routes/` — une route par fichier : `index.tsx` (accueil), `equipe.tsx`,
  `evenements.tsx`, `vie-du-club.tsx`, `confidentialite.tsx`. `__root.tsx` = shell
  commun (meta, og:image, pages 404 / erreur). `routeTree.gen.ts` est généré.
- `src/components/page-chrome.tsx` — chrome partagé : `SkipLink`, `PageHeader`
  (nav + menu mobile), `PageFooter`. Utilisé sur toutes les pages.
- `src/components/contact-form.tsx` — formulaire de contact.
- `src/styles.css` — design system (couleurs de marque, `pop-btn` / `pop-card` /
  `pop-badge`, typo Montserrat / Space Grotesk / Source Sans 3).
- `src/assets/` — images du club (importées, hashées par Vite).
- `public/` — `.htaccess` (repli 404 + cache), `404.html`, `favicon.png`,
  `robots.txt`.

## Variables d'environnement

Fichiers gitignored, à créer à partir des `.example` :

- **`.env`** — `VITE_WEB3FORMS_ACCESS_KEY` : clé du service qui relaie le
  formulaire de contact par email (voir ci-dessous). Injectée **au build**.
- **`.env.deploy`** — identifiants FTP pour `npm run deploy`.

## Formulaire de contact

Le site étant statique (pas de backend), l'envoi du formulaire passe par
**Web3Forms** : un `POST` vers leur API, qui relaie le message par email vers la
boîte du club. Pas de compte pour le visiteur, pas de base de données. Le
formulaire inclut un honeypot anti-bot et une case de consentement ; la page
`/confidentialite` décrit le traitement RGPD. Détails et alternatives dans
`CLAUDE.md`.

## Déploiement

Procédure complète (manuelle et automatisée via GitHub Actions) dans
**`DEPLOY.md`**. En résumé : `npm run build`, puis upload de **`dist/client/`
uniquement** à la racine web du domaine.

## Documentation du dépôt

- **`CLAUDE.md`** — conventions détaillées (design system, échelle d'espacement
  des sections, choix techniques, déploiement).
- **`TODO.md`** — ce qu'il reste à faire avant / après la mise en ligne.
- **`DEPLOY.md`** — déploiement pas à pas + secrets GitHub Actions.
