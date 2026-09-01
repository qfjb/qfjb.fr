import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Spade, Heart, Diamond, Club, GraduationCap, Users } from "lucide-react";

import { PageHeader, PageFooter } from "@/components/page-chrome";
import photoGroupe from "@/assets/bridge-table2.jpg";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous ? — Le bureau et les profs du QFJB" },
      {
        name: "description",
        content:
          "Découvrez le bureau et l'équipe pédagogique du Quai Francilien des Jeunes Bridgeurs : les bénévoles et professeurs qui animent les jeudis soir à Neuilly-sur-Seine.",
      },
      { property: "og:title", content: "Qui sommes-nous ? — Le bureau et les profs du QFJB" },
      {
        property: "og:description",
        content:
          "Le bureau et les professeurs du QFJB : les visages derrière le club de bridge des jeunes Franciliens.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EquipePage,
});

type Person = {
  name: string;
  role: string;
  tag: string;
  bio: string;
  photo?: string;
};

const BUREAU: Person[] = [
  {
    name: "Pierre",
    role: "Président",
    tag: "Le stratège",
    bio: "Cofondateur du club, il enchaîne les tournois depuis dix ans et veille à ce que chaque jeudi reste une fête autant qu'une compétition.",
  },
  {
    name: "Margaux",
    role: "Vice-présidente",
    tag: "L'ambianceur en chef",
    bio: "Elle accueille les nouveaux venus, organise les tournois à thème et fait tomber en trois minutes tous les clichés sur le bridge.",
  },
  {
    name: "Louis",
    role: "Trésorier",
    tag: "Le gardien des cartes",
    bio: "Licences, cotisations, réservations de salle : il tient les comptes du club aussi rigoureusement qu'un plan de jeu au chelem.",
  },
  {
    name: "Camille",
    role: "Secrétaire générale",
    tag: "La cheffe d'orchestre",
    bio: "Convocations, calendrier, inscriptions aux compétitions : rien ne se perd, tout se planifie.",
  },
  {
    name: "Antoine",
    role: "Responsable communication",
    tag: "La voix du club",
    bio: "Réseaux sociaux, photos des soirées, newsletters : c'est lui qui raconte la vie du QFJB au reste de l'Île-de-France.",
  },
  {
    name: "Sarah",
    role: "Responsable événements",
    tag: "La créatrice de soirées",
    bio: "Coupe Epsilon, tournois à thème, afterworks : elle transforme une table de bridge en vraie soirée.",
  },
];

const PROFS: Person[] = [
  {
    name: "Pierre",
    role: "Cours confirmés & compétition",
    tag: "Le stratège",
    bio: "Enchères modernes, défense et préparation aux tournois par paires. Exigeant sur la technique, jamais sur le ton.",
  },
  {
    name: "Margaux",
    role: "Cours débutants",
    tag: "La prof cool",
    bio: "Deux cours gratuits pour comprendre le jeu sans jargon : on distribue, on joue, on explique en route.",
  },
  {
    name: "Louis",
    role: "Cours intermédiaires",
    tag: "Le pédagogue",
    bio: "Le passage du « je connais les règles » au « je sais construire un contrat », avec beaucoup de donnes commentées.",
  },
];

const SUITS = [Spade, Heart, Diamond, Club];

function PersonCard({ person, index }: { person: Person; index: number }) {
  const Suit = SUITS[index % SUITS.length]!;
  return (
    <article className="pop-card overflow-hidden">
      <div className="relative flex h-56 items-center justify-center border-b-4 border-ink bg-electric">
        {person.photo ? (
          <img
            src={person.photo}
            alt={`Portrait de ${person.name}`}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          <span className="font-display text-6xl text-background">{person.name.slice(0, 1)}</span>
        )}
        <span className="pop-badge absolute right-3 top-3 bg-card text-xs">
          <Suit className="size-3.5 text-coral" />
          {person.tag}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-2xl text-electric">{person.name}</h3>
        <p className="mt-1 text-sm font-extrabold uppercase tracking-wide text-coral">
          {person.role}
        </p>
        <p className="mt-3 text-sm font-semibold leading-relaxed opacity-80">{person.bio}</p>
      </div>
    </article>
  );
}

function EquipePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader />

      <section className="border-b-4 border-ink bg-electric px-4 py-16 text-background sm:py-20">
        <div className="mx-auto max-w-6xl">
          <span className="pop-badge bg-coral text-coral-foreground">
            <Users className="size-4" /> Qui sommes-nous ?
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl leading-tight sm:text-6xl">
            Le bureau et les profs qui font vivre le club
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold opacity-90">
            Le QFJB est une association portée par des bénévoles de moins de 40 ans. Une équipe qui
            organise les jeudis soir, encadre les cours et accompagne les joueurs, du tout premier
            atelier jusqu'aux compétitions fédérales.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#bureau" className="pop-btn bg-card px-6 py-3 text-foreground">
              Le bureau <ArrowRight className="size-4" />
            </a>
            <a href="#profs" className="pop-btn bg-coral px-6 py-3 text-coral-foreground">
              L'équipe pédagogique <GraduationCap className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <img
            src={photoGroupe}
            alt="Les membres du QFJB réunis lors d'une soirée du club"
            width={1600}
            height={1200}
            className="pop-card w-full object-cover"
          />
          <div>
            <h2 className="text-4xl text-electric sm:text-5xl">Notre histoire</h2>
            <div className="mt-3 h-1.5 w-24 bg-coral" />
            <p className="mt-4 font-semibold leading-relaxed opacity-85">
              Né de l'envie de quelques étudiants de continuer à jouer après leurs premiers tournois
              universitaires, le club réunit aujourd'hui plus de 80 membres actifs, avec une moyenne
              d'âge de 29 ans et 45 % de joueuses.
            </p>
            <p className="mt-4 font-semibold leading-relaxed opacity-85">
              Chaque membre du bureau est bénévole : entre deux donnes, on gère les inscriptions, on
              réserve la salle de Neuilly-sur-Seine, on prépare les tournois à thème et on accueille
              les débutants avec deux cours offerts.
            </p>
          </div>
        </div>
      </section>

      <section
        id="bureau"
        className="scroll-mt-24 border-y-4 border-ink bg-muted px-4 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl text-electric sm:text-5xl">Le bureau</h2>
          <div className="mt-3 h-1.5 w-24 bg-coral" />
          <p className="mt-4 max-w-2xl font-semibold opacity-80">
            Six bénévoles élus par les membres, qui font tourner le club toute l'année.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BUREAU.map((p, i) => (
              <PersonCard key={p.role} person={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="profs" className="scroll-mt-24 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl text-electric sm:text-5xl">L'équipe pédagogique</h2>
          <div className="mt-3 h-1.5 w-24 bg-coral" />
          <p className="mt-4 max-w-2xl font-semibold opacity-80">
            Trois professeurs, trois niveaux, une même méthode : on apprend en jouant, tous les
            jeudis à 20h.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROFS.map((p, i) => (
              <PersonCard key={p.role} person={p} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-4 border-ink bg-electric px-4 py-16 text-background sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl">Envie de rejoindre l'équipe ?</h2>
            <p className="mt-3 font-semibold opacity-90">
              Le bureau accueille chaque année de nouveaux bénévoles. Écrivez-nous à
              qfjb@parisbridge.fr.
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

      <PageFooter />
    </div>
  );
}
