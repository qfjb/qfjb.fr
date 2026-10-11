import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Mail,
  Trophy,
  Users,
  Sparkles,
  Mic,
  ExternalLink,
  Quote,
  Newspaper,
  Pizza,
  GraduationCap,
} from "lucide-react";

import { SkipLink, PageHeader, PageFooter } from "@/components/page-chrome";
import { PhotoCarousel } from "@/components/photo-carousel";
import rentreeAccueil from "@/assets/rentree/accueil.jpg";
import rentreeCoursDebutants from "@/assets/rentree/cours-debutants.jpg";
import rentreeSalle from "@/assets/rentree/salle.jpg";
import rentreePizzaDuo from "@/assets/rentree/pizza-duo.jpg";
import rentreePizzaFlatlay from "@/assets/rentree/pizza-flatlay.jpg";
import rentreeRiresDuo from "@/assets/rentree/rires-duo.jpg";
import rentreeRires from "@/assets/rentree/rires.jpg";
import rentreePartie from "@/assets/rentree/partie.jpg";
import rentreeAnnonce from "@/assets/rentree/annonce.jpg";
import rentreeCalin from "@/assets/rentree/calin.jpg";
import rentreeAmbiance from "@/assets/rentree/ambiance.jpg";
import rentreeConcentration from "@/assets/rentree/concentration.jpg";
import rentreeSourire from "@/assets/rentree/sourire.jpg";
import afficheEpsilon from "@/assets/coupe-epsilon/affiche.jpg";
import epsilonSalle from "@/assets/coupe-epsilon/salle.jpg";
import epsilonPartie1 from "@/assets/coupe-epsilon/partie1.jpg";
import epsilonSourires from "@/assets/coupe-epsilon/sourires.jpg";
import epsilonPolo from "@/assets/coupe-epsilon/polo.jpg";
import epsilonGenerations from "@/assets/coupe-epsilon/generations.jpg";
import epsilonTableSourire from "@/assets/coupe-epsilon/table-sourire.jpg";
import epsilonVainqueurs from "@/assets/coupe-epsilon/vainqueurs.jpg";
import epsilonDiner from "@/assets/coupe-epsilon/diner.jpg";
import epsilonIntergenerations from "@/assets/coupe-epsilon/intergenerations.jpg";
import epsilonAmbianceSalle from "@/assets/coupe-epsilon/ambiance-salle.jpg";
import epsilonRires from "@/assets/coupe-epsilon/rires.jpg";
import epsilonFun from "@/assets/coupe-epsilon/fun.jpg";
import epsilonGroupeSourires from "@/assets/coupe-epsilon/groupe-sourires.jpg";
import epsilonCartesEnMain from "@/assets/coupe-epsilon/cartes-en-main.jpg";

const RENTREE_PHOTOS = [
  {
    src: rentreePizzaFlatlay,
    alt: "Pizzas et boîtiers de donnes de bridge sur la table du club",
    width: 1600,
    height: 2400,
  },
  {
    src: rentreeAccueil,
    alt: "Une joueuse tout sourire pendant la soirée de rentrée du QFJB",
    width: 1600,
    height: 2400,
  },
  {
    src: rentreeCoursDebutants,
    alt: "Une initiatrice explique les bases du bridge aux nouveaux arrivants",
    width: 1600,
    height: 2400,
  },
  {
    src: rentreeSalle,
    alt: "La salle du comité de Neuilly pleine pour la soirée de rentrée",
    width: 1600,
    height: 2133,
  },
  {
    src: rentreePizzaDuo,
    alt: "Deux membres du club dégustant une part de pizza",
    width: 1600,
    height: 2400,
  },
  {
    src: rentreeRiresDuo,
    alt: "Deux joueurs tout sourire pendant la soirée de rentrée",
    width: 1600,
    height: 2400,
  },
  {
    src: rentreeRires,
    alt: "Une joueuse éclate de rire en pleine partie",
    width: 1600,
    height: 2400,
  },
  {
    src: rentreePartie,
    alt: "Une partie de bridge vue de dessus pendant la soirée de rentrée",
    width: 1600,
    height: 1067,
  },
  {
    src: rentreeAnnonce,
    alt: "Deux membres du club juchées sur des tabourets pour une annonce",
    width: 1600,
    height: 2400,
  },
  {
    src: rentreeCalin,
    alt: "Deux membres du club se prennent dans les bras en souriant",
    width: 1600,
    height: 2400,
  },
  {
    src: rentreeAmbiance,
    alt: "Ambiance conviviale et pizzas entre deux donnes à la rentrée",
    width: 1600,
    height: 2400,
  },
  {
    src: rentreeConcentration,
    alt: "Une joueuse concentrée sur son jeu pendant la soirée de rentrée",
    width: 1600,
    height: 2400,
  },
  {
    src: rentreeSourire,
    alt: "Un joueur tout sourire pendant la soirée de rentrée",
    width: 1600,
    height: 2400,
  },
];

const EPSILON_PHOTOS = [
  {
    src: epsilonVainqueurs,
    alt: "Les vainqueurs de la Coupe Epsilon et leurs coupes",
    width: 1600,
    height: 2133,
  },
  {
    src: epsilonSalle,
    alt: "La salle de la Coupe Epsilon, pleine pour les 44 paires",
    width: 1600,
    height: 1200,
  },
  {
    src: epsilonPartie1,
    alt: "Une partie en cours pendant la Coupe Epsilon",
    width: 1600,
    height: 2133,
  },
  {
    src: epsilonCartesEnMain,
    alt: "Une joueuse avec ses cartes en main pendant la Coupe Epsilon",
    width: 1536,
    height: 2048,
  },
  {
    src: epsilonGenerations,
    alt: "Une table mêlant jeunes et moins jeunes bridgeurs",
    width: 1600,
    height: 2133,
  },
  { src: epsilonPolo, alt: "Un joueur en polo QFJB pendant son match", width: 1536, height: 2048 },
  {
    src: epsilonSourires,
    alt: "Une table de la Coupe Epsilon tout sourire",
    width: 1500,
    height: 2000,
  },
  {
    src: epsilonTableSourire,
    alt: "Des joueurs souriants pendant la Coupe Epsilon",
    width: 1500,
    height: 2000,
  },
  {
    src: epsilonDiner,
    alt: "Dîner de fin de journée entre participants de la Coupe Epsilon",
    width: 1600,
    height: 2133,
  },
  {
    src: epsilonIntergenerations,
    alt: "Une table mêlant jeunes et bridgeurs confirmés pendant la Coupe Epsilon",
    width: 1600,
    height: 2133,
  },
  {
    src: epsilonFun,
    alt: "Deux joueurs tout sourire posent pendant la Coupe Epsilon",
    width: 1152,
    height: 2048,
  },
  {
    src: epsilonAmbianceSalle,
    alt: "Ambiance de la salle pendant la Coupe Epsilon, tee-shirts du tournoi aux couleurs du club",
    width: 1600,
    height: 1200,
  },
  {
    src: epsilonRires,
    alt: "Une table de jeunes joueurs tout sourire pendant la Coupe Epsilon",
    width: 1600,
    height: 1200,
  },
  {
    src: epsilonGroupeSourires,
    alt: "Un groupe de joueurs tout sourire pendant la Coupe Epsilon",
    width: 1500,
    height: 2000,
  },
];

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités — QFJB" },
      {
        name: "description",
        content:
          "Les actualités du Quai Francilien des Jeunes Bridgeurs : tournoi de rentrée, Coupe Epsilon et tous les événements marquants du club.",
      },
      { property: "og:title", content: "Actualités — QFJB" },
      {
        property: "og:description",
        content:
          "Tournoi de rentrée, Coupe Epsilon et les grands moments du club de bridge des jeunes Franciliens.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ActualitesPage,
});

const RENDEZ_VOUS = [
  {
    icon: Sparkles,
    date: "Chaque trimestre",
    title: "Tournoi à thème",
    text: "Un tournoi convivial autour d'un thème original, pour rencontrer d'autres passionnés.",
  },
  {
    icon: Mic,
    date: "Chaque trimestre",
    title: "Conférence",
    text: "Une conférence donnée par les meilleurs joueurs français : ils décortiquent une convention d'enchère ou une situation de jeu de la carte et répondent aux questions.",
  },
  {
    icon: Users,
    date: "Tous les jeudis",
    title: "Soirée au club à 20h",
    text: "Cours par niveau encadrés par des jeunes bridgeurs.",
  },
];

function ActualitesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <PageHeader />

      <main id="contenu" tabIndex={-1} className="outline-none">
        <section className="border-b-4 border-ink bg-electric px-4 py-16 text-background sm:py-20">
          <div className="mx-auto max-w-6xl">
            <span className="pop-badge bg-coral text-coral-foreground">
              <Newspaper className="size-4" /> Actualités
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl leading-tight sm:text-6xl">
              Ce qui se passe au QFJB
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold opacity-90">
              Tournois, soirées spéciales et grands moments du club : on vous raconte ce qui s'est
              passé, article après article.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#actus" className="pop-btn bg-card px-6 py-3 text-foreground">
                Les actus <Newspaper className="size-4" />
              </a>
              <a href="#rendez-vous" className="pop-btn bg-coral px-6 py-3 text-coral-foreground">
                Nos rendez-vous <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Fil d'actualités */}
        <section id="actus" className="scroll-mt-24 px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl text-electric sm:text-5xl">Nos actualités</h2>
            <div className="mt-3 h-1.5 w-24 bg-coral" />
            <p className="mt-4 max-w-2xl font-semibold text-muted-foreground">
              Un condensé des moments forts du club, pour celles et ceux qui n'ont pas pu être là.
            </p>

            <div className="mt-10 space-y-16">
              {/* Article : Tournoi de rentrée */}
              <article className="pop-card p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="pop-badge bg-coral text-coral-foreground">
                    <Pizza className="size-3.5" /> Tournoi de rentrée
                  </span>
                  <span className="font-accent text-sm font-bold uppercase tracking-widest text-muted-foreground">
                    24 septembre 2026
                  </span>
                </div>
                <h3 className="mt-5 text-3xl text-electric sm:text-4xl">
                  C'est la rentrée au QFJB !
                </h3>
                <div className="mt-3 h-1.5 w-24 bg-coral" />

                <div className="mt-6 space-y-4">
                  <p className="font-semibold leading-relaxed text-muted-foreground">
                    Louis nous a concocté un tournoi de rentrée pour tout le monde — enfin, presque
                    : les petits nouveaux étaient plutôt du côté des cours, à découvrir les bases du
                    bridge avec Margaux et Pierre.
                  </p>
                  <p className="font-semibold leading-relaxed text-muted-foreground">
                    Au programme : des parties, quelques fous rires, et bien sûr des pizzas. De quoi
                    lancer la saison dans la bonne humeur.
                  </p>
                </div>

                <div className="mt-6 flex items-start gap-4 pop-card bg-muted p-5 sm:p-6">
                  <GraduationCap className="size-6 shrink-0 text-coral" />
                  <p className="font-semibold text-electric">
                    Envie de nous rejoindre ? Rendez-vous tous les jeudis soir pour une soirée
                    bridge &amp; pizzas au comité de Paris (arrêt Les Sablons) — gratuit et sans
                    engagement.
                  </p>
                </div>

                <div className="mt-8">
                  <PhotoCarousel slides={RENTREE_PHOTOS} />
                </div>
              </article>

              {/* Article : Coupe Epsilon */}
              <article className="pop-card p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="pop-badge bg-coral text-coral-foreground">
                    <Trophy className="size-3.5" /> Événement phare
                  </span>
                  <span className="font-accent text-sm font-bold uppercase tracking-widest text-muted-foreground">
                    13 septembre 2026
                  </span>
                </div>
                <h3 className="mt-5 text-3xl text-electric sm:text-4xl">
                  La Coupe Epsilon a réuni 44 paires
                </h3>
                <div className="mt-3 h-1.5 w-24 bg-coral" />

                <div className="mt-8 grid items-center gap-10 lg:grid-cols-[320px_1fr]">
                  <img
                    src={afficheEpsilon}
                    alt="Affiche de la Coupe Epsilon du QFJB"
                    width={1054}
                    height={1492}
                    className="mx-auto w-full max-w-80 rounded-md border-2 border-ink object-contain p-3"
                  />
                  <div>
                    <p className="font-semibold leading-relaxed text-muted-foreground">
                      Le QFJB organise chaque année, avec le Comité de Paris, la Coupe Epsilon : un
                      tournoi convivial qui mélange les générations, où un joueur de moins de 31 ans
                      joue avec un joueur de plus de 31 ans.
                    </p>
                    <p className="mt-4 font-semibold leading-relaxed text-muted-foreground">
                      L'ambiance y est conviviale, le niveau varié, et les rencontres entre
                      générations sont souvent les plus belles parties de la journée.
                    </p>
                    <p className="mt-4 font-semibold leading-relaxed text-muted-foreground">
                      Envie d'y jouer l'année prochaine ? Pas besoin d'être déjà confirmé : passez
                      nous voir un jeudi soir, on vous embarque bien avant septembre.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="pop-card p-5">
                    <p className="font-accent text-4xl text-coral">44</p>
                    <p className="mt-1 text-sm font-bold uppercase text-muted-foreground">paires</p>
                  </div>
                  <div className="pop-card p-5 sm:col-span-2">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                      Vainqueurs 2026
                    </p>
                    <p className="mt-1 font-accent text-2xl text-electric">
                      Colin Deheeger &amp; Jean-Claude Roman
                    </p>
                  </div>
                </div>

                <div className="mt-6 pop-card p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <Quote className="size-6 shrink-0 text-coral" />
                    <div className="space-y-3">
                      <p className="leading-relaxed text-muted-foreground">
                        Entre les annonces qui fusent, les bridgemates qui chauffent et les polos
                        QFJB repérables à dix tables, l'ambiance était à son comble toute la
                        journée.
                      </p>
                      <p className="leading-relaxed text-muted-foreground">
                        Merci à tous les joueurs d'avoir fait le déplacement, au Comité de Paris, à
                        l'arbitre, et à toute l'équipe du QFJB pour l'organisation. Rendez-vous l'an
                        prochain pour une nouvelle édition !
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://ffbridge.fr/competitions/results/groups/23893/sessions/386637/ranking"
                    target="_blank"
                    rel="noreferrer"
                    className="pop-btn mt-5 bg-electric px-6 py-3 text-background"
                  >
                    Voir le classement complet <ExternalLink className="size-4" />
                  </a>
                </div>

                <div className="mt-8">
                  <PhotoCarousel slides={EPSILON_PHOTOS} />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Rendez-vous réguliers */}
        <section
          id="rendez-vous"
          className="scroll-mt-24 border-y-4 border-ink bg-muted px-4 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl text-electric sm:text-5xl">Les rendez-vous réguliers</h2>
            <div className="mt-3 h-1.5 w-24 bg-coral" />
            <p className="mt-4 max-w-2xl font-semibold text-muted-foreground">
              En plus des actus ponctuelles, le club a aussi ses rituels, toute l'année.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {RENDEZ_VOUS.map((a) => (
                <article key={a.title} className="pop-card flex gap-4 p-6">
                  <a.icon className="size-8 shrink-0 text-coral" />
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                      {a.date}
                    </p>
                    <h3 className="text-2xl text-electric">{a.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">{a.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t-4 border-ink bg-electric px-4 py-16 text-background sm:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl">Une question sur une actu ?</h2>
              <p className="mt-3 font-semibold opacity-90">
                Écrivez-nous à qfjb@parisbridge.fr, ou venez simplement un jeudi soir à 20h : on
                vous expliquera tout autour d'une table.
              </p>
            </div>
            <a
              href="mailto:qfjb@parisbridge.fr"
              className="pop-btn bg-coral px-6 py-3 text-coral-foreground"
            >
              Nous écrire <Mail className="size-4" />
            </a>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}
