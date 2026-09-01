import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      // Le site vitrine n'a aucune donnée dynamique : on prérend chaque route
      // en HTML statique au build. Le dossier dist/client suffit alors à
      // l'hébergement (upload FTP), sans serveur Node.
      server: { entry: "server" },
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
      sitemap: {
        enabled: true,
        host: "https://qfjb.fr",
      },
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
