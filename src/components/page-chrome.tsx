import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import logoAsset from "@/assets/logo.png";

export function PageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoAsset}
            alt="Logo QFJB"
            width={44}
            height={44}
            className="size-11 rounded-md border-2 border-ink object-cover"
          />
          <span className="font-display text-base leading-tight sm:text-lg">
            Quai Francilien
            <span className="block font-sans text-[0.65rem] font-bold uppercase tracking-widest text-coral">
              des jeunes bridgeurs
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            to="/"
            activeProps={{ className: "text-coral underline" }}
            className="text-sm font-extrabold uppercase tracking-wide underline-offset-4 hover:text-coral hover:underline"
          >
            Accueil
          </Link>
          <Link
            to="/equipe"
            activeProps={{ className: "text-coral underline" }}
            className="text-sm font-extrabold uppercase tracking-wide underline-offset-4 hover:text-coral hover:underline"
          >
            Qui sommes-nous ?
          </Link>
          <Link
            to="/evenements"
            activeProps={{ className: "text-coral underline" }}
            className="text-sm font-extrabold uppercase tracking-wide underline-offset-4 hover:text-coral hover:underline"
          >
            Événements
          </Link>
          <Link
            to="/vie-du-club"
            activeProps={{ className: "text-coral underline" }}
            className="text-sm font-extrabold uppercase tracking-wide underline-offset-4 hover:text-coral hover:underline"
          >
            Vie du club
          </Link>
        </nav>

        <Link to="/" className="pop-btn bg-card px-4 py-2 text-sm">
          <ArrowLeft className="size-4" />
          Accueil
        </Link>
      </div>
    </header>
  );
}

export function PageFooter() {
  return (
    <footer className="border-t-4 border-ink bg-card px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm font-bold uppercase opacity-70">
        <span>© {new Date().getFullYear()} Quai Francilien des Jeunes Bridgeurs</span>
        <span>Neuilly-sur-Seine · qfjb@parisbridge.fr</span>
      </div>
    </footer>
  );
}
