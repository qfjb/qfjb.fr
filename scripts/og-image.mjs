/**
 * Génère l'image de partage (og:image) au format recommandé 1200×630 (1.91:1)
 * à partir de la bannière du club, par recadrage centré + redimensionnement.
 *
 *   node scripts/og-image.mjs
 *
 * Sortie : src/assets/og-image.jpg (à importer/référencer depuis __root.tsx,
 * comme les autres assets — Vite la hashera au build).
 */
import sharp from "sharp";

const SOURCE = "src/assets/logo-banniere.jpg";
const OUTPUT = "src/assets/og-image.jpg";
const WIDTH = 1200;
const HEIGHT = 630;

await sharp(SOURCE)
  .resize(WIDTH, HEIGHT, { fit: "cover", position: "centre" })
  .jpg({ quality: 88 })
  .toFile(OUTPUT);

console.log(`✔ ${OUTPUT} généré (${WIDTH}×${HEIGHT})`);
