import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { ArrowLeft, Spade, Heart, Diamond, Club } from "lucide-react";

import appCss from "../styles.css?url";
import ogImage from "@/assets/logo-banniere.jpg";
import { PageHeader } from "@/components/page-chrome";
import { reportRuntimeError } from "../lib/runtime-error-reporting";

function SuitRow({ className }: { className: string }) {
  return (
    <div className={`flex gap-3 ${className}`} aria-hidden="true">
      <Spade className="size-7" />
      <Heart className="size-7" />
      <Diamond className="size-7" />
      <Club className="size-7" />
    </div>
  );
}

// URL absolue du site (schéma + domaine). Les robots des réseaux sociaux
// récupèrent l'image hors contexte : og:image doit être une URL complète,
// pas un chemin relatif comme "/assets/...".
const SITE_URL = "https://qfjb.fr";
const OG_IMAGE_URL = `${SITE_URL}${ogImage}`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PageHeader />
      <div className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-16">
        <SuitRow className="text-coral" />
        <div className="pop-card w-full max-w-lg p-8 text-center sm:p-10">
          <p className="font-display text-8xl leading-none text-coral">404</p>
          <h1 className="mt-4 text-2xl">Page introuvable</h1>
          <p className="mt-3 font-semibold text-foreground/80">
            Cette page n'existe pas ou a changé de place.
          </p>
          <p className="mt-1 font-semibold text-foreground/80">
            La table, elle, est toujours dressée : tous les jeudis à 20h.
          </p>
          <Link to="/" className="pop-btn mt-8 bg-coral px-6 py-3 text-coral-foreground">
            <ArrowLeft className="size-4" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportRuntimeError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 py-16">
      <SuitRow className="text-electric" />
      <div className="pop-card w-full max-w-lg p-8 text-center sm:p-10">
        <h1 className="text-2xl">Cette page n'a pas pu se charger</h1>
        <p className="mt-3 font-semibold text-foreground/80">
          Un souci est survenu de notre côté. Réessaie, ou reviens à l'accueil.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="pop-btn bg-coral px-6 py-3 text-coral-foreground"
          >
            Réessayer
          </button>
          <a href="/" className="pop-btn bg-card px-6 py-3">
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "QFJB — Quai Francilien des Jeunes Bridgeurs" },
      {
        name: "description",
        content: "Le club de bridge des jeunes Franciliens, tous les jeudis à 20h.",
      },
      { property: "og:title", content: "QFJB — Quai Francilien des Jeunes Bridgeurs" },
      {
        property: "og:description",
        content: "Le club de bridge des jeunes Franciliens, tous les jeudis à 20h.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "QFJB" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1799" },
      { property: "og:image:height", content: "1012" },
      {
        property: "og:image:alt",
        content: "Bannière du Quai Francilien des Jeunes Bridgeurs",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Sans+3:wght@400;600;700;800&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
