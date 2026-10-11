import { createFileRoute } from "@tanstack/react-router";
import { Gift, Spade, Heart, Diamond, Quote, HandCoins, Percent, Mail } from "lucide-react";

import { SkipLink, PageHeader, PageFooter } from "@/components/page-chrome";
import groupeMembres from "@/assets/club-group.jpg";

export const Route = createFileRoute("/don")({
  head: () => ({
    meta: [
      { title: "Faire un don — Soutenez le QFJB" },
      {
        name: "description",
        content:
          "Soutenez le développement du bridge pour les jeunes : vos dons permettent au Quai Francilien des Jeunes Bridgeurs de rester gratuit, accueillant et ouvert à tous.",
      },
      { property: "og:title", content: "Faire un don — Soutenez le QFJB" },
      {
        property: "og:description",
        content:
          "Vos dons financent les cours gratuits, les premières compétitions des jeunes bridgeurs et le développement du club.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DonPage,
});

const POURQUOI = [
  {
    icon: Spade,
    title: "L'accueil du jeudi soir",
    text: "Les cours gratuits encadrés par des jeunes bridgeurs de haut niveau, des conférences d'expert chaque trimestre, le repas pizzas offert aux participants.",
  },
  {
    icon: Heart,
    title: "Les premières compétitions",
    text: "La participation des jeunes bridgeurs à leurs premières compétitions : interclubs, tournois inter-quais, compétitions fédérales.",
  },
  {
    icon: Diamond,
    title: "Des projets de communication",
    text: "Pour faire connaître le club, le bridge, et accueillir toujours plus de jeunes.",
  },
];

const COUTS = [
  { montant: "26 €", label: "Un match d'interclubs, équipe de 4 joueurs -26 ans" },
  { montant: "150 €", label: "Un cours pour 15 personnes" },
  { montant: "75 €", label: "Un repas pizzas pour 15 personnes" },
];

function DonPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <PageHeader />

      <main id="contenu" tabIndex={-1} className="outline-none">
        <section className="border-b-4 border-ink bg-electric px-4 py-16 text-background sm:py-20">
          <div className="mx-auto max-w-6xl">
            <span className="pop-badge bg-coral text-coral-foreground">
              <Gift className="size-4" /> Soutenir le club
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl leading-tight sm:text-6xl">
              Soutenez le développement du bridge pour les jeunes !
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold italic opacity-90">
              Appel aux dons — pour que le club reste gratuit, accueillant et ouvert à tous.
            </p>
            <div className="mt-8">
              <a
                href="https://www.monetico-online-asso.com/qfjb/dons"
                target="_blank"
                rel="noreferrer"
                className="pop-btn bg-coral px-7 py-4 text-lg text-coral-foreground"
              >
                Faire un don en ligne <HandCoins className="size-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Présentation */}
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg font-semibold leading-relaxed text-muted-foreground">
              Le QFJB est un club convivial dédié aux jeunes joueurs de bridge d'Île-de-France.
              Notre objectif : faire découvrir et progresser dans ce jeu de stratégie et de
              partenariat, dans une ambiance chaleureuse et sans pression. Débutants et joueurs
              confirmés sont les bienvenus, chaque jeudi soir.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border-4 border-ink bg-peach p-4 text-center sm:flex-row sm:justify-center sm:divide-x-4 sm:divide-ink">
              {["S'amuser", "Progresser", "Créer des liens"].map((m) => (
                <span key={m} className="font-accent text-lg text-electric sm:px-8">
                  {m}
                </span>
              ))}
            </div>
            <p className="mt-8 text-center text-lg font-extrabold text-coral">
              Le QFJB est financé par la collecte de dons, le sponsoring et le comité de bridge de
              Paris.
            </p>
          </div>
        </section>

        {/* Ce que votre don fait vivre */}
        <section className="border-y-4 border-ink bg-muted px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl text-electric sm:text-5xl">Ce que votre don fait vivre</h2>
            <div className="mt-3 h-1.5 w-24 bg-coral" />
            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                {POURQUOI.map((p) => (
                  <div key={p.title} className="pop-card flex gap-4 p-5">
                    <p.icon className="size-7 shrink-0 text-coral" />
                    <div>
                      <h3 className="text-xl text-electric">{p.title}</h3>
                      <p className="mt-1 font-semibold text-muted-foreground">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <img
                  src={groupeMembres}
                  alt="Les membres du QFJB réunis lors d'une soirée du club"
                  width={1200}
                  height={1600}
                  loading="lazy"
                  className="pop-card h-80 w-full object-cover sm:h-96"
                />
                <div className="pop-card mt-4 bg-electric p-5 text-background">
                  <Quote className="size-6 text-coral" />
                  <p className="mt-3 font-semibold">
                    D'excellents profs, des fous rires, des pizzas gratuites… Facile dans le top 3
                    des moments de ma semaine !
                  </p>
                  <p className="mt-3 font-accent text-lg">Chloé, membre du QFJB</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quelques chiffres */}
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <span className="pop-badge bg-coral text-coral-foreground">
              <HandCoins className="size-3.5" /> Quelques chiffres
            </span>
            <h2 className="mt-5 text-4xl text-electric sm:text-5xl">
              Chaque don a un impact concret
            </h2>
            <div className="mt-3 h-1.5 w-24 bg-coral" />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {COUTS.map((c) => (
                <div key={c.label} className="pop-card p-5">
                  <p className="font-accent text-4xl text-coral">{c.montant}</p>
                  <p className="mt-1 text-sm font-bold text-muted-foreground">{c.label}</p>
                </div>
              ))}
            </div>
            <div className="pop-card mt-6 bg-lemon p-6 text-center">
              <p className="text-xl font-extrabold text-electric sm:text-2xl">
                Chaque nouveau membre coûte 450 € par an au QFJB !
              </p>
            </div>
          </div>
        </section>

        {/* Comment donner */}
        <section className="border-y-4 border-ink bg-muted px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl text-electric sm:text-5xl">Comment donner ?</h2>
            <div className="mt-3 h-1.5 w-24 bg-coral" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="pop-card flex items-center gap-4 p-5">
                <Percent className="size-8 shrink-0 text-coral" />
                <p className="font-semibold text-muted-foreground">
                  Vos dons sont défiscalisés :{" "}
                  <span className="font-extrabold text-electric">
                    66 % pour les particuliers, 60 % pour les entreprises.
                  </span>
                </p>
              </div>
              <div className="pop-card flex items-center gap-4 p-5">
                <Gift className="size-8 shrink-0 text-coral" />
                <p className="font-semibold text-muted-foreground">
                  Les dons en nature sont aussi les bienvenus (par exemple donner une conférence un
                  jeudi soir au QFJB).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="border-t-4 border-ink bg-electric px-4 py-16 text-background sm:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl">Merci de faire grandir le club !</h2>
              <p className="mt-3 max-w-xl font-semibold opacity-90">
                Le paiement en ligne se fait en quelques clics, via la plateforme sécurisée de notre
                banque. Une question ? Écrivez-nous, on répond vite.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.monetico-online-asso.com/qfjb/dons"
                target="_blank"
                rel="noreferrer"
                className="pop-btn bg-coral px-6 py-3 text-coral-foreground"
              >
                Faire un don en ligne <HandCoins className="size-4" />
              </a>
              <a
                href="mailto:qfjb@parisbridge.fr"
                className="pop-btn bg-card px-6 py-3 text-foreground"
              >
                Nous écrire <Mail className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}
