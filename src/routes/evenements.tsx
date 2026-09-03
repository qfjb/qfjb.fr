import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  Mail,
  Trophy,
  Users,
  Sparkles,
  Mic,
} from "lucide-react";

import { PageHeader, PageFooter } from "@/components/page-chrome";
import afficheEpsilon from "@/assets/coupe-epsilon.jpeg";
import soireeClub from "@/assets/bridge-table2.jpg";

export const Route = createFileRoute("/evenements")({
  head: () => ({
    meta: [
      { title: "Événements & Coupe Epsilon — QFJB" },
      {
        name: "description",
        content:
          "La Coupe Epsilon et tous les rendez-vous du Quai Francilien des Jeunes Bridgeurs : tournois à thème, conférences et soirées du jeudi à Neuilly-sur-Seine.",
      },
      { property: "og:title", content: "Événements & Coupe Epsilon — QFJB" },
      {
        property: "og:description",
        content:
          "Coupe Epsilon, tournois à thème et conférences : le calendrier des événements du club de bridge des jeunes Franciliens.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EvenementsPage,
});

const AGENDA = [
  {
    icon: Trophy,
    date: "Dimanche 13 septembre 2026",
    title: "Coupe Epsilon",
    text: "Le grand rendez-vous annuel du club, ouvert aux jeunes de toute l'Île-de-France.",
    highlight: true,
  },
  {
    icon: Sparkles,
    date: "Jeudi 4 décembre",
    title: "Tournoi à thème « Noël en rouge »",
    text: "Un tournoi convivial, déguisement bienvenu, prix pour les meilleures paires.",
  },
  {
    icon: Mic,
    date: "Jeudi 22 janvier",
    title: "Conférence : la défense moderne",
    text: "Chaque trimestre, une conférence donnée par les meilleurs joueurs français : ils décortiquent leurs donnes et répondent aux questions.",
  },
  {
    icon: Users,
    date: "Tous les jeudis",
    title: "Soirée club à 20h",
    text: "Cours par niveau puis tournoi de régularité. Des cours gratuits pour découvrir.",
  },
];

function EvenementsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader />

      <section className="border-b-4 border-ink bg-electric px-4 py-16 text-background sm:py-20">
        <div className="mx-auto max-w-6xl">
          <span className="pop-badge bg-coral text-coral-foreground">
            <CalendarDays className="size-4" /> Événements
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl leading-tight sm:text-6xl">
            La Coupe Epsilon et tous nos rendez-vous
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold opacity-90">
            Au-delà des jeudis soir, le QFJB organise chaque année des tournois à thème, des
            conférences et son événement phare : la Coupe Epsilon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#epsilon" className="pop-btn bg-card px-6 py-3 text-foreground">
              La Coupe Epsilon <Trophy className="size-4" />
            </a>
            <a href="#agenda" className="pop-btn bg-coral px-6 py-3 text-coral-foreground">
              Le calendrier <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Coupe Epsilon */}
      <section id="epsilon" className="scroll-mt-24 px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <img
            src={afficheEpsilon}
            alt="Affiche de la Coupe Epsilon du QFJB"
            width={1054}
            height={1492}
            className="pop-card w-full bg-card object-contain p-3"
          />
          <div>
            <span className="pop-badge bg-coral text-coral-foreground">
              <Trophy className="size-3.5" /> Événement phare
            </span>
            <h2 className="mt-5 text-4xl text-electric sm:text-5xl">La Coupe Epsilon</h2>
            <div className="mt-3 h-1.5 w-24 bg-coral" />
            <p className="mt-4 font-semibold leading-relaxed opacity-85">
              Le QFJB organise avec le Comité de Paris la Coupe Epsilon. Venez nombreux le dimanche
              13 septembre 2026 à 14h participer à un tournoi convivial dont le principe est de
              mélanger les générations : un joueur de moins de 31 ans joue avec un joueur de plus de
              31 ans.
            </p>
            <p className="mt-4 font-semibold leading-relaxed opacity-85">
              Inscriptions sur le site de la FFB, et n’hésitez pas à nous envoyer un message si
              besoin. L’ambiance est conviviale, le niveau est varié et les rencontres sont souvent
              les plus belles parties de la journée.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: CalendarDays, k: "13 septembre", v: "Dimanche" },
                { icon: Clock, k: "14h", v: "Début" },
                { icon: MapPin, k: "Paris", v: "Comité" },
              ].map((i) => (
                <div key={i.k} className="pop-card p-4">
                  <i.icon className="size-6 text-coral" />
                  <p className="mt-2 font-accent text-xl text-electric">{i.k}</p>
                  <p className="text-xs font-bold uppercase text-muted-foreground">{i.v}</p>
                </div>
              ))}
            </div>
            <a
              href="https://www.ffbridge.fr/competitions/entries/committee-competitions/17125/enter"
              target="_blank"
              rel="noreferrer"
              className="pop-btn mt-8 bg-coral px-6 py-3 text-coral-foreground"
            >
              S'inscrire à la Coupe <Mail className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section
        id="agenda"
        className="scroll-mt-24 border-y-4 border-ink bg-muted px-4 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl text-electric sm:text-5xl">Le calendrier du club</h2>
          <div className="mt-3 h-1.5 w-24 bg-coral" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {AGENDA.map((a) => (
              <article
                key={a.title}
                className={`pop-card flex gap-4 p-6 ${a.highlight ? "bg-lemon" : ""}`}
              >
                <a.icon className="size-8 shrink-0 text-coral" />
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                    {a.date}
                  </p>
                  <h3 className="text-2xl text-electric">{a.title}</h3>
                  <p className="mt-2 text-sm font-semibold opacity-80">{a.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-4 border-ink bg-electric px-4 py-16 text-background sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
          <img
            src={soireeClub}
            alt="Ambiance conviviale lors d'une soirée du club"
            width={1600}
            height={1200}
            loading="lazy"
            className="pop-card w-full object-cover"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl">Une question sur un événement ?</h2>
            <p className="mt-3 font-semibold opacity-90">
              Écrivez-nous à qfjb@parisbridge.fr, ou venez simplement un jeudi soir à 20h : on vous
              expliquera tout autour d'une table.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:qfjb@parisbridge.fr"
                className="pop-btn bg-coral px-6 py-3 text-coral-foreground"
              >
                Nous écrire <Mail className="size-4" />
              </a>
              <Link to="/vie-du-club" className="pop-btn bg-card px-6 py-3 text-foreground">
                Vie du club <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
