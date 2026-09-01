import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";

import logoAsset from "@/assets/logo.png";

const NAV = [
  { label: "Accueil", to: "/" },
  { label: "Qui sommes-nous ?", to: "/equipe" },
  { label: "Événements", to: "/evenements" },
  { label: "Vie du club", to: "/vie-du-club" },
] as const;

export function PageHeader() {
  const [open, setOpen] = useState(false);

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
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-coral underline" }}
              className="text-sm font-extrabold uppercase tracking-wide underline-offset-4 hover:text-coral hover:underline"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#infos"
            className="pop-btn hidden bg-coral px-4 py-2 text-sm text-coral-foreground sm:inline-flex"
          >
            Venir un jeudi
            <ArrowRight className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="pop-btn size-10 bg-card lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t-4 border-ink bg-card px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-coral" }}
                className="font-extrabold uppercase"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="/#infos"
              onClick={() => setOpen(false)}
              className="pop-btn bg-coral px-4 py-2 text-coral-foreground"
            >
              Venir un jeudi
            </a>
          </div>
        </div>
      )}
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
