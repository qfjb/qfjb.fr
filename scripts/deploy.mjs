/**
 * Déploiement du site statique sur l'hébergement OVH par FTP.
 *
 *   npm run deploy               # build + upload (écrase les fichiers existants)
 *   npm run deploy -- --no-build # upload seul (dist/client/ doit exister)
 *   npm run deploy -- --clean    # vide d'abord le dossier distant (vrai miroir)
 *
 * Config : .env.deploy (cf. .env.deploy.example), chargé via --env-file-if-exists
 * dans le script npm. Variables : FTP_HOST, FTP_USER, FTP_PASSWORD,
 * FTP_REMOTE_DIR, FTP_SECURE.
 *
 * Ne pousse QUE dist/client/ (le HTML prérendu + les assets). dist/server/ est
 * ignoré : l'hébergement OVH est statique, pas de Node.
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import * as ftp from "basic-ftp";

const LOCAL_DIR = "dist/client";
const REQUIRED = ["FTP_HOST", "FTP_USER", "FTP_PASSWORD", "FTP_REMOTE_DIR"];

const missing = REQUIRED.filter((k) => !process.env[k]);
if (missing.length) {
  console.error(
    `\n✖ Variables manquantes : ${missing.join(", ")}\n` +
      `  Crée .env.deploy à partir de .env.deploy.example.\n`,
  );
  process.exit(1);
}

const noBuild = process.argv.includes("--no-build");
const clean = process.argv.includes("--clean");

if (!noBuild) {
  console.log("→ npm run build");
  execSync("npm run build", { stdio: "inherit" });
}

if (!fs.existsSync(LOCAL_DIR) || !fs.existsSync(path.join(LOCAL_DIR, "index.html"))) {
  console.error(`\n✖ ${LOCAL_DIR}/index.html introuvable — lance d'abord "npm run build".\n`);
  process.exit(1);
}

const client = new ftp.Client(30_000);
client.ftp.verbose = true;

try {
  await client.access({
    host: process.env.FTP_HOST,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    secure: String(process.env.FTP_SECURE).toLowerCase() === "true",
  });

  const remoteDir = process.env.FTP_REMOTE_DIR;
  console.log(`\n→ Upload ${LOCAL_DIR}/  →  ${process.env.FTP_HOST}:${remoteDir}\n`);

  await client.ensureDir(remoteDir); // se place aussi dans ce dossier

  if (clean) {
    if (!remoteDir || remoteDir === "/" || remoteDir === ".") {
      console.error("✖ --clean refusé : FTP_REMOTE_DIR doit être un sous-dossier (ex. /www).");
      process.exit(1);
    }
    console.log("→ Nettoyage du dossier distant…");
    await client.clearWorkingDir();
  }

  await client.uploadFromDir(LOCAL_DIR);

  console.log("\n✔ Déploiement terminé.");
} catch (err) {
  console.error("\n✖ Échec du déploiement :", err.message);
  process.exitCode = 1;
} finally {
  client.close();
}
