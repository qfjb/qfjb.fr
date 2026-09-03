import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Trophy, Quote, Users } from "lucide-react";

import { PageHeader, PageFooter } from "@/components/page-chrome";
import championsFrance2025 from "@/assets/open4performance2025.jpg";
import groupeMembres from "@/assets/club-group.jpg";
import tableJeu from "@/assets/bridge-table.jpg";
import debriefBordeaux from "@/assets/debrief_bordeaux.jpg";
import joueuses from "@/assets/girl-power.jpg";

export const Route = createFileRoute("/vie-du-club")({
  head: () => ({
    meta: [
      { title: "Vie du club & résultats des membres — QFJB" },
      {
        name: "description",
        content:
          "Les résultats en compétition des membres du Quai Francilien des Jeunes Bridgeurs, les témoignages et l'ambiance des jeudis soir.",
      },
      { property: "og:title", content: "Vie du club & résultats des membres — QFJB" },
      {
        property: "og:description",
        content: "Palmarès, témoignages et ambiance du club de bridge des jeunes Franciliens.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VieDuClubPage,
});

const PALMARES = [
  {
    year: "2025",
    items: [
      {
        icon: Trophy,
        tag: "Open Par 4 Performance",
        text: "Champions de France : Pierre Tissot, Pierre Ollivier, Alexandre Leroy, Baptiste Moulin, Adrien de la Vaissière, Philippe Meneret",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        icon: Trophy,
        tag: "Mixte Par 4 Honneur",
        text: "Champions de France : Marie Cambonie, Lucie Barratault, Abel Thomas, Arnaud Neulat, Jean Bernard Eytard",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        icon: Trophy,
        tag: "Open Par 2 Promotion",
        text: "Champions de France : Hector Brunel, Arnaud Neulat",
      },
    ],
  },
];

const TEMOIGNAGES = [
  {
    quote: "J'ai rencontré mon chéri à la soirée de Noël du QFJB !",
    name: "Lucie Barratault",
  },
  {
    quote:
      "J'ai très vite été séduit par l'ambiance du club et la possibilité de profiter de cours gratuitement. Grâce au QFJB je me suis constitué un nouveau cercle d'amis avec qui je prends plaisir à jouer en compétition.",
    name: "Pierre Ollivier",
  },
  {
    quote:
      "D'excellents profs, des fous rires, des pizzas gratuites et des soirées qui se terminent au bar à pas d'heure… Facile dans le top 3 des moments de ma semaine !",
    name: "Chloé Sack",
  },
];

function VieDuClubPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader />

      <section className="border-b-4 border-ink bg-electric px-4 py-16 text-background sm:py-20">
        <div className="mx-auto max-w-6xl">
          <span className="pop-badge bg-coral text-coral-foreground">
            <Trophy className="size-4" /> Vie du club
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl leading-tight sm:text-6xl">
            Les résultats et la vie de nos membres
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold opacity-90">
            Chaque saison, nos joueurs défendent les couleurs du QFJB en compétition fédérale — et
            se retrouvent tous les jeudis pour vivre le club dans une ambiance jeune et conviviale.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#palmares" className="pop-btn bg-card px-6 py-3 text-foreground">
              Le palmarès <Trophy className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="border-b-4 border-ink bg-ink py-16 text-background sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-4">
          {[
            { k: "50", v: "membres actifs" },
            { k: "5", v: "ans d'existence" },
            { k: "26 %", v: "de femmes" },
            { k: "29", v: "ans de moyenne d'âge" },
          ].map((s) => (
            <div key={s.v} className="pop-card bg-card p-5 text-foreground">
              <p className="font-accent text-4xl text-coral">{s.k}</p>
              <p className="mt-1 text-sm font-bold uppercase text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Palmarès */}
      <section id="palmares" className="scroll-mt-24 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl text-electric sm:text-5xl">Nos réussites</h2>
          <div className="mt-3 h-1.5 w-24 bg-coral" />
          <p className="mt-4 max-w-2xl font-semibold opacity-80">
            Plusieurs de nos membres sont Champions de France — la preuve qu'on peut débuter au club
            et viser haut.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
            <img
              src={championsFrance2025}
              alt="Les joueurs du QFJB champions de France 2025 en Open Par 4 Performance"
              width={1600}
              height={1200}
              loading="lazy"
              className="pop-card w-full object-cover lg:sticky lg:top-24"
            />
            <div className="space-y-8">
              {PALMARES.map((season) => (
                <div key={season.year}>
                  <span className="pop-badge bg-lemon">Saison {season.year}</span>
                  <div className="mt-4 space-y-4">
                    {season.items.map((r) => (
                      <div key={r.text} className="pop-card flex items-center gap-4 p-5">
                        <r.icon className="size-7 shrink-0 text-coral" />
                        <div>
                          <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                            {r.tag}
                          </p>
                          <p className="font-bold text-electric">{r.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="border-y-4 border-ink bg-muted px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl text-electric sm:text-5xl">Témoignages</h2>
          <div className="mt-3 h-1.5 w-24 bg-coral" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TEMOIGNAGES.map((t) => (
              <article key={t.name} className="pop-card p-7">
                <Quote className="size-8 text-coral" />
                <p className="mt-4 font-semibold opacity-80">{t.quote}</p>
                <p className="mt-5 font-accent text-lg text-electric">{t.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl text-electric sm:text-5xl">L'ambiance du club</h2>
          <div className="mt-3 h-1.5 w-24 bg-coral" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: groupeMembres, alt: "Les membres du QFJB réunis" },
              { src: tableJeu, alt: "Partie de bridge entre membres du club" },
              { src: debriefBordeaux, alt: "Débrief entre membres du club à Bordeaux" },
              { src: joueuses, alt: "Cartes et jetons sur une table de bridge" },
            ].map((g) => (
              <img
                key={g.alt}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="pop-card h-56 w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-4 border-ink bg-electric px-4 py-16 text-background sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl">Envie de nous rejoindre ?</h2>
            <p className="mt-3 font-semibold opacity-90">
              Rendez-vous jeudi à 20h : des cours gratuits pour démarrer et découvrir le club.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/equipe" className="pop-btn bg-card px-6 py-3 text-foreground">
              L'équipe <Users className="size-4" />
            </Link>
            <Link to="/evenements" className="pop-btn bg-coral px-6 py-3 text-coral-foreground">
              Les événements <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
