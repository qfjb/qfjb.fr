# Quai Francilien des Jeunes Bridgeurs (QFJB) — Site Vitrine

## Context & Vision

Ce projet est le site vitrine du **Quai Francilien des Jeunes Bridgeurs (QFJB)**, un club de bridge d'Île-de-France réservé aux moins de 40 ans.

L'objectif principal est de **dépoussiérer l'image du bridge**, de séduire une cible jeune et dynamique, et d'offrir une vitrine crédible pour attirer des partenaires et des sponsors.

## Primary Objectives

1. **Recrutement d'adhérents :** Convertir les visiteurs (débutants curieux ou joueurs confirmés) grâce au levier "cours gratuits les jeudis à 20h".
2. **Sponsoring & Financement :** Rassurer et crédibiliser le club auprès des partenaires et des donateurs via une page de soutien dédiée.
3. **Information & Vie du club :** Diffuser le calendrier des événements (Coupe Epsilon, tournois à thème), les résultats et la vie de l'association.

## Structure du site attendue

- **Accueil :** informations générales sur le club, présentation, adresse, horaires des jeudis soir, message d'accroche et CTA vers les cours gratuits.
- **Événements / Coupe Epsilon :** page dédiée à l'événement phare, son déroulé, l'agenda et les informations pratiques.
- **Bureau + profs :** page de présentation du club avec les profils de Pierre, Louis et Margaux, ainsi que le bureau et l'équipe pédagogique.
- **Vie du club / résultats des membres :** palmarès, classement interne, témoignages et ambiance du club.
- **À venir :** galerie photo, page de don avec explication de l'usage de l'argent et bouton d'appel à l'action vers le don.

## Todo / prochaines pages à prévoir

- [ ] **Galerie photo :** rassembler les meilleures photos des soirées, des tournois et de la vie du club.
- [ ] **Page don :** expliquer à quoi sert l'argent, quels sont les besoins du club, et inclure un bouton vers le site de don / collecte.
- [ ] **Contenu supplémentaire :** ajouter les textes, photos et informations exactes pour remplir les pages encore incomplètes.

## Target Audience

- **Débutants complets :** Jeunes actifs / étudiants curieux de découvrir un jeu de stratégie sans pression.
- **Joueurs confirmés :** Jeunes joueurs cherchant des partenaires de leur tranche d'âge et un cadre convivial.
- **Sponsors & Partenaires :** Institutions ou entreprises privées.

## Brand Identity & Tone

- **Tone:** Accueillant, dynamique, direct, avec une pointe d'humour. Désamorce le côté "austère" traditionnellement associé au bridge.
- **Visual Style:** Inspiré de la plaquette du club, trouvable ici : src\assets\Ebauche Plaquette QFJB.pdf
- **Colors:** Bleu nuit (`#0F2C59`), Rouge/Corail (`#E63946`), Fond Slate/Blanc (`#F8FAFC`).

## Key Key Information

- **Lieu :** 73 Avenue Charles de Gaulle, 92200 Neuilly-sur-Seine
- **Rendez-vous :** Tous les jeudis de 20h à 23h (hors vacances scolaires)
- **Accroche phare :** "cours gratuits pour découvrir le club"
- **Contact :** qfjb@parisbridge.fr | 06 30 22 40 36

## Informations techniques utiles à garder en mémoire

- **Stack principal :** Vite + React 19 + TypeScript + Tailwind CSS v4 + TanStack Router + TanStack Query + React Start.
- **Structure de routes :** Le site est organisé par routes fichier dans `src/routes/` : accueil, équipe, événements, vie du club. La route racine est gérée dans `src/routes/__root.tsx` et le fichier `src/routeTree.gen.ts` est généré automatiquement.
- **Composants partagés :** Le chrome commun du site (header/footer) est centralisé dans `src/components/page-chrome.tsx` et réutilisé sur **toutes** les pages internes (`PageHeader` inclut un menu mobile hamburger + CTA « Venir un jeudi » vers `/#infos`, `PageFooter` la barre de bas de page). Ne pas réimplémenter de footer inline dans une route.
- **Design system :** La palette est définie dans `src/styles.css` avec les couleurs de marque : bleu nuit, corail/rouge, fond clair, `lemon` = accent chaud pour les éléments mis en avant. Esthétique “pop/neobrutaliste” : bordures épaisses, ombres portées (`shadow-pop`), boutons à fort contraste (`pop-btn` / `pop-card` / `pop-badge`). Alternance des sections : blanc ↔ `bg-muted` (gris), les sections colorées/grises portent une bordure `border-y-4 border-ink` ; les ancres internes utilisent `scroll-mt-24` pour ne pas passer sous le header collant.
- **Échelle d'espacement des sections (à respecter) :** section = `py-16 sm:py-20` (partout, y compris les bandeaux et CTA de fin) ; titre → trait corail (`h-1.5 w-24 bg-coral`) = `mt-3` ; titre → paragraphe d'intro = `mt-4` ; bloc titre → grille/liste de contenu = `mt-10` ; badge → titre = `mt-5`. Les hero : h1 `mt-6` → paragraphe, pas de trait corail sous le h1.
- **Typographie :** `Playfair Display` pour les titres, `Source Sans 3` pour le texte, avec beaucoup de titres en majuscules et une hiérarchie visuelle énergique.
- **Assets :** Les images du club sont importées depuis `src/assets/` ; certains fichiers utilisent des `.asset.json` pour exposer des métadonnées d’image + URL.
- **Commandes locales :**
  - `npm install`
  - `npm run dev` pour lancer le site localement
  - `npm run build` pour vérifier la production
  - `npm run preview` pour prévisualiser le build
  - `npm run lint` pour le contrôle ESLint
- **Mise en page :** Les pages sont écrites en français, avec un ton direct, jeune et convivial, sans trace de jargon “austère” du bridge.
- **Objectif UX :** Convaincre les débutants avec l'accroche “cours gratuits”, rassurer les confirmés et inspirer confiance aux partenaires/sponsors.
- **Erreur SSR :** Le serveur est wrapped dans `src/server.ts` pour normaliser les erreurs côté SSR et afficher une page d’erreur fiable sans casser le site.
- **Déploiement (prérendu statique) :** Le site n'a aucune donnée dynamique (pas de `loader`, pas de `createServerFn`). `vite.config.ts` active `prerender` : `npm run build` génère un HTML complet par route dans `dist/client/` (`index.html`, `equipe/index.html`, etc.). On déploie **uniquement `dist/client/`** en FTP à la racine du domaine (hébergement statique OVH, pas de Node). `dist/server/` est ignoré. Les chemins d'assets sont absolus (`/assets/...`) donc le site doit être servi depuis la racine du domaine. `public/.htaccess` gère le repli 404 (`ErrorDocument 404 /404.html`) et le cache ; `public/404.html` est une page statique autonome.
- **Formulaire de contact :** `src/components/contact-form.tsx`, envoi via **Web3Forms** (POST `https://api.web3forms.com/submit`, pas de backend). Clé d'accès dans `VITE_WEB3FORMS_ACCESS_KEY` (`.env`, cf. `.env.example`) — clé publique par nature, inlinée dans le bundle client. Inclut honeypot `botcheck`, case de consentement RGPD, états idle/submitting/success/error. Jamais de server function TanStack (incompatible hébergement statique). Reste à faire : page politique de confidentialité liée depuis la case de consentement.
- **Conventions de code :** On privilégie des composants simples et lisibles, des classes Tailwind utilitaires, et des liens de navigation internes avec TanStack Router plutôt que des redirections externes lourdes.
- **Contexte critique pour la suite :** Le projet est déjà orienté “site vitrine de club” plus que “site institutionnel classique” ; les prochaines modifications doivent conserver la dynamique jeune, les couleurs fortes et la tonalité francophone authentique.
