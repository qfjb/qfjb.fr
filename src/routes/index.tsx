import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Spade,
  Heart,
  Diamond,
  Club,
  ArrowRight,
  Users,
  Sparkles,
  Trophy,
  GraduationCap,
  Mic,
  Pizza,
  Smile,
  Layers,
  CalendarDays,
  Clock,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Quote,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { SkipLink, PageHeader } from "@/components/page-chrome";

import coursJeudi from "@/assets/bridge-table3.jpg";
import coursTable from "@/assets/bridge-table4.jpg";
import afficheEpsilon from "@/assets/coupe-epsilon.jpeg";
import banniere from "@/assets/logo-banniere.jpg";
import tableJeu from "@/assets/bridge-table.jpg";
import groupeMembres from "@/assets/club-group.jpg";
import joueuses from "@/assets/girl-power.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QFJB — Le club de bridge des jeunes Franciliens" },
      {
        name: "description",
        content:
          "Quai Francilien des Jeunes Bridgeurs : cours tous les jeudis à 20h à Neuilly-sur-Seine, cours gratuits, tournois à thème et ambiance jeune et conviviale.",
      },
      { property: "og:title", content: "QFJB — Le club de bridge des jeunes Franciliens" },
      {
        property: "og:description",
        content:
          "Tous les jeudis à 20h, cours gratuits pour découvrir le bridge. Débutants et confirmés, tous niveaux bienvenus.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionTitle({ children, light }: { children: string; light?: boolean }) {
  return (
    <div>
      <h2 className={`text-4xl sm:text-5xl ${light ? "text-background" : "text-electric"}`}>
        {children}
      </h2>
      <div className="mt-3 h-1.5 w-24 bg-coral" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <PageHeader />

      <main id="contenu" tabIndex={-1} className="outline-none">
        {/* Hero */}
        <section id="top" className="scroll-mt-24 border-b-4 border-ink bg-electric">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 sm:py-20">
            <div className="text-background">
              <span className="pop-badge bg-coral text-coral-foreground">
                <Sparkles className="size-3.5" /> Le club de bridge des jeunes Franciliens
              </span>
              <h1 className="mt-6 text-5xl leading-[0.95] text-background sm:text-6xl lg:text-7xl">
                Quai Francilien des Jeunes Bridgeurs
              </h1>
              <p className="mt-6 max-w-xl text-lg font-semibold opacity-90">
                Un club convivial dédié aux jeunes joueurs de bridge d'Île-de-France. Découvrir,
                progresser et jouer dans une ambiance chaleureuse — et sans pression.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#infos"
                  className="pop-btn bg-coral px-7 py-4 text-lg text-coral-foreground"
                >
                  Cours gratuits
                  <ArrowRight className="size-5" />
                </a>
                <a href="#club" className="pop-btn bg-card px-7 py-4 text-lg text-foreground">
                  Découvrir le club
                </a>
              </div>
              <div className="mt-8 flex gap-4 text-2xl">
                <Club className="size-6" />
                <Heart className="size-6 fill-coral text-coral" />
                <Spade className="size-6" />
                <Diamond className="size-6 fill-coral text-coral" />
              </div>
            </div>

            <img
              src={groupeMembres}
              alt="Les membres du QFJB réunis lors d'une soirée du club"
              width={1200}
              height={1600}
              className="pop-card h-72 w-full object-cover sm:h-96"
            />
          </div>
        </section>

        {/* Pourquoi nous rejoindre */}
        <section id="club" className="scroll-mt-24 border-b-4 border-ink py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle>Pourquoi nous rejoindre ?</SectionTitle>
            <p className="mt-4 max-w-3xl text-lg font-semibold text-muted-foreground">
              Un club de bridge jeune, dynamique et bienveillant, pensé pour accueillir les
              débutants comme les joueurs confirmés dans une ambiance conviviale.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Layers,
                  title: "Tous niveaux",
                  text: "Tu débutes ? Tu joues déjà ? On t'accueille avec le même sourire.",
                },
                {
                  icon: Heart,
                  title: "Ambiance jeune & conviviale",
                  text: "Pas de jargon austère, pas de pression : on apprend, on rigole et on progresse ensemble.",
                },
                {
                  icon: Pizza,
                  title: "Pizzas gratuites",
                  text: "Un petit creux le jeudi soir ? We got you.",
                },
                {
                  icon: Smile,
                  title: "Aucune contrainte",
                  text: "Tu viens comme tu es, quand tu veux, le club s'adapte à ton rythme.",
                },
              ].map((c) => (
                <article key={c.title} className="pop-card p-7">
                  <span className="pop-badge bg-electric text-electric-foreground">
                    <c.icon className="size-3.5" />
                  </span>
                  <h3 className="mt-4 text-2xl text-electric">{c.title}</h3>
                  <p className="mt-2 font-semibold text-muted-foreground">{c.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Ce qui se passe les jeudis */}
        <section className="border-b-4 border-ink bg-muted py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <SectionTitle>Ce qui se passe les jeudis</SectionTitle>
                <div className="mt-10 space-y-5">
                  {[
                    {
                      icon: GraduationCap,
                      title: "Cours gratuits",
                      text: "Viens découvrir le bridge sans pression, avec des cours pour tous les niveaux.",
                    },
                    {
                      icon: Users,
                      title: "Des rencontres dès la première soirée",
                      text: "On joue, on échange, on s'installe dans une ambiance conviviale et accueillante.",
                    },
                    {
                      icon: Sparkles,
                      title: "Une soirée complète",
                      text: "Cours, repas et donnes commentées : ici on ne s'ennuie pas !",
                    },
                  ].map((item) => (
                    <div key={item.title} className="pop-card flex gap-4 p-5">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-electric text-background">
                        <item.icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="text-xl text-electric">{item.title}</h3>
                        <p className="mt-1 font-semibold text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pop-card overflow-hidden p-0">
                <div className="border-b-4 border-ink bg-electric p-6 text-background">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em]">
                    À Neuilly-sur-Seine
                  </p>
                  <h3 className="mt-3 text-3xl text-background">Tous les jeudis</h3>
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-center gap-3">
                    <Clock className="size-5 text-coral" />
                    <p className="font-semibold text-foreground">20h à 23h</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="size-5 text-coral" />
                    <p className="font-semibold text-foreground">
                      73 Avenue Charles de Gaulle, 92200 Neuilly-sur-Seine
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="size-5 text-coral" />
                    <p className="font-semibold text-foreground">qfjb@parisbridge.fr</p>
                  </div>
                  <Link
                    to="/equipe"
                    className="pop-btn mt-2 w-full bg-coral px-5 py-3 text-coral-foreground"
                  >
                    Rencontrer l'équipe <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Événement phare */}
        <section className="border-b-4 border-ink py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center lg:justify-center">
              <div className="flex justify-center lg:justify-start">
                <img
                  src={afficheEpsilon}
                  alt="Affiche de la Coupe Epsilon du QFJB"
                  width={1054}
                  height={1492}
                  className="pop-card w-full max-w-[28rem] object-contain p-3"
                />
              </div>
              <div className="w-full max-w-[30rem] lg:justify-self-start">
                <span className="pop-badge bg-coral text-coral-foreground">
                  <Trophy className="size-3.5" /> Événement phare
                </span>
                <h2 className="mt-5 text-4xl text-electric sm:text-5xl">La Coupe Epsilon</h2>
                <div className="mt-3 h-1.5 w-24 bg-coral" />
                <p className="mt-4 text-lg font-semibold text-muted-foreground">
                  Le QFJB organise avec le Comité de Paris la Coupe Epsilon ! Venez nombreux le
                  dimanche 13 septembre 2026 à 14h pour un tournoi convivial où les générations sont
                  mélangées : un joueur de moins de 31 ans joue avec un joueur de plus de 31 ans.
                </p>
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: CalendarDays, value: "13 septembre" },
                    { icon: Clock, value: "14h" },
                    { icon: MapPin, value: "Paris" },
                  ].map((item) => (
                    <div key={item.value} className="pop-card p-4 text-center">
                      <item.icon className="mx-auto size-6 text-coral" />
                      <p className="mt-2 font-accent text-xl text-electric">{item.value}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/evenements"
                  className="pop-btn mt-8 bg-coral px-6 py-3 text-coral-foreground"
                >
                  Découvrir l'événement <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Vie du club / résultats */}
        <section className="border-b-4 border-ink bg-ink py-16 text-background sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle light>La vie du club</SectionTitle>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {[
                { k: "50", v: "membres actifs" },
                { k: "5", v: "ans d'existence" },
                { k: "26 %", v: "de femmes" },
                { k: "29", v: "ans de moyenne d'âge" },
              ].map((s) => (
                <div key={s.v} className="pop-card p-5 text-foreground">
                  <p className="font-accent text-4xl text-coral">{s.k}</p>
                  <p className="mt-1 text-sm font-bold uppercase text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/vie-du-club" className="pop-btn bg-coral px-6 py-3 text-coral-foreground">
                Voir les résultats <ArrowRight className="size-4" />
              </Link>
              <Link to="/equipe" className="pop-btn bg-card px-6 py-3 text-foreground">
                Rencontrer les profs <GraduationCap className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="border-b-4 border-ink bg-muted py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle>Ce qu'en disent nos membres</SectionTitle>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
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
              ].map((t) => (
                <article key={t.name} className="pop-card p-7">
                  <Quote className="size-8 text-coral" />
                  <p className="mt-4 font-semibold text-muted-foreground">{t.quote}</p>
                  <p className="mt-5 font-accent text-lg text-electric">{t.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Ambiance galerie */}
        <section className="border-b-4 border-ink py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle>L'ambiance du club</SectionTitle>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <img
                src={coursTable}
                alt="Autour de la table pendant le cours du jeudi soir"
                width={2048}
                height={1536}
                loading="lazy"
                className="pop-card col-span-2 h-64 w-full object-cover sm:h-80"
              />
              <img
                src={joueuses}
                alt="Joueuses du QFJB autour d'une table de bridge"
                width={1600}
                height={1200}
                loading="lazy"
                className="pop-card h-64 w-full object-cover sm:h-80"
              />
              <img
                src={coursJeudi}
                alt="Cours de bridge du jeudi soir au QFJB"
                width={2048}
                height={1536}
                loading="lazy"
                className="pop-card h-64 w-full object-cover sm:h-80"
              />
              <img
                src={tableJeu}
                alt="Jeunes joueurs autour d'une table de cartes un jeudi soir"
                width={1318}
                height={922}
                loading="lazy"
                className="pop-card col-span-2 h-64 w-full object-cover sm:h-80"
              />
            </div>
          </div>
        </section>

        {/* Infos pratiques */}
        <section id="infos" className="scroll-mt-24 border-b-4 border-ink bg-muted py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle>Infos pratiques</SectionTitle>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: MapPin,
                  label: "Lieu",
                  value: "73 Avenue Charles de Gaulle, 92200 Neuilly-sur-Seine",
                },
                {
                  icon: Clock,
                  label: "Horaires",
                  value: "Tous les jeudis (hors vacances scolaires) de 20h à 23h",
                },
                {
                  icon: Mail,
                  label: "Contact",
                  value: "qfjb@parisbridge.fr — 06 30 22 40 36",
                },
              ].map((i) => (
                <div key={i.label} className="pop-card flex items-start gap-4 p-6">
                  <i.icon className="mt-1 size-6 shrink-0 text-coral" />
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                      {i.label}
                    </p>
                    <p className="mt-1 font-bold text-electric">{i.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <img
              src={banniere}
              alt="Tous les jeudis, cours gratuits à 20h — chaque trimestre, un tournoi à thème"
              width={1799}
              height={1012}
              loading="lazy"
              className="pop-card mt-8 w-full object-cover"
            />
          </div>
        </section>
      </main>

      {/* Footer / contact */}
      <footer id="contact" className="bg-ink py-16 text-background sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl text-background sm:text-5xl">Rejoignez-nous !</h2>
            <div className="mt-3 h-1.5 w-24 bg-coral" />
            <p className="mt-4 max-w-md font-semibold opacity-85">
              Venez essayer gratuitement, un jeudi soir à 20h. Une question ? Écrivez-nous, on
              répond vite.
            </p>
            <div className="mt-8 space-y-3 font-semibold">
              <p className="flex items-center gap-2">
                <MapPin className="size-5 text-coral" /> 73 Avenue Charles de Gaulle, 92200
                Neuilly-sur-Seine
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-5 text-coral" />
                <a href="mailto:qfjb@parisbridge.fr" className="hover:underline">
                  qfjb@parisbridge.fr
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-5 text-coral" />
                <a href="tel:+33630224036" className="hover:underline">
                  06 30 22 40 36
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="size-5 text-coral" /> @qfjb sur les réseaux
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/qfjbridge/",
                  label: "Instagram QFJB",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/profile.php?id=100076353240882",
                  label: "Facebook QFJB",
                },
                {
                  icon: Mail,
                  href: "mailto:qfjb@parisbridge.fr",
                  label: "Email QFJB",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="pop-btn size-12 bg-card text-foreground"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl flex-wrap gap-x-4 gap-y-1 px-4 text-sm font-bold uppercase opacity-70">
          <span>© {new Date().getFullYear()} Quai Francilien des Jeunes Bridgeurs</span>
          <Link to="/confidentialite" className="underline underline-offset-2 hover:text-coral">
            Confidentialité
          </Link>
        </div>
      </footer>
    </div>
  );
}
