# Déploiement — qfjb.fr

Le site est **100 % statique** (prérendu). On ne déploie **que le dossier
`dist/client/`** à la racine web du domaine, sur l'hébergement mutualisé OVH.
`dist/server/` n'est pas utilisé (pas de Node côté hébergeur).

## 1. Pré-requis (une seule fois)

- **Clé Web3Forms** : `cp .env.example .env` puis renseigner
  `VITE_WEB3FORMS_ACCESS_KEY=…`. Elle est injectée **au build** ; sans elle le
  formulaire de contact renvoie une erreur à l'envoi.
- **Identifiants FTP** : `cp .env.deploy.example .env.deploy` puis renseigner
  `FTP_HOST` / `FTP_USER` / `FTP_PASSWORD` / `FTP_REMOTE_DIR` (infos dans l'espace
  client OVH → _Hébergements → FTP-SSH_). `FTP_REMOTE_DIR` = racine web, en
  général `/www`.
- `npm install` (installe `basic-ftp`, utilisé par le script de déploiement).

Les deux fichiers `.env*` sont gitignored — ils ne doivent jamais être commités.

## 2. Déploiement scripté

```bash
npm run deploy
```

Ce que fait la commande :

1. `npm run build` → génère `dist/client/` (un `index.html` par route, les
   assets hashés, `404.html`, `.htaccess`, `sitemap.xml`, `robots.txt`).
2. Connexion FTP et upload de tout `dist/client/` dans `FTP_REMOTE_DIR`
   (écrase les fichiers existants).

Options :

| Commande                       | Effet                                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------------------- |
| `npm run deploy -- --no-build` | upload seul, sans rebuild                                                                 |
| `npm run deploy -- --clean`    | vide d'abord le dossier distant (vrai miroir — supprime aussi les vieux assets orphelins) |

`--clean` est refusé si `FTP_REMOTE_DIR` vaut `/` (garde-fou).

## 3. Déploiement manuel (fallback, ex. FileZilla)

1. `npm run build` (avec `.env` présent).
2. Se connecter en FTP à l'hébergement OVH.
3. Copier **le contenu de `dist/client/`** (et pas le dossier lui-même) dans le
   répertoire web (`/www`). Bien inclure les fichiers cachés : **`.htaccess`**.
4. Ne rien envoyer d'autre (`dist/server/` reste en local).

## 4. Vérifications après déploiement

- `https://qfjb.fr` s'affiche, les 4 pages + `/confidentialite` répondent.
- Une URL inexistante (`https://qfjb.fr/nimportequoi`) renvoie la page 404
  stylée (via `ErrorDocument 404 /404.html` du `.htaccess`).
- Les images se chargent (chemins `/assets/...` → le site doit être servi à la
  **racine** du domaine, pas dans un sous-dossier).
- Formulaire de contact : envoyer un message test, vérifier la réception sur
  `qfjb@parisbridge.fr`.
- HTTPS actif (voir `TODO.md` → « Avant la mise en ligne publique »).

## 5. Notes

- Le `.htaccess` (`public/.htaccess`) gère le repli 404, le cache long des
  assets hashés et la compression. Il est copié tel quel dans `dist/client/`.
- Le sitemap déclare `https://qfjb.fr/…` : ne le soumettre à Google qu'une fois
  le domaine en HTTPS.
