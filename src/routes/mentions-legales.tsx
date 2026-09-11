import { createFileRoute, Link } from "@tanstack/react-router";

import { SkipLink, PageHeader, PageFooter } from "@/components/page-chrome";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — QFJB" },
      {
        name: "description",
        content:
          "Éditeur, directeur de la publication et hébergeur du site du Quai Francilien des Jeunes Bridgeurs.",
      },
      { property: "og:title", content: "Mentions légales — QFJB" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MentionsLegalesPage,
});

const MAJ = "septembre 2026";

function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <PageHeader />

      <main id="contenu" tabIndex={-1} className="outline-none">
        <section className="border-b-4 border-ink bg-electric px-4 py-16 text-background sm:py-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl leading-tight sm:text-5xl">Mentions légales</h1>
            <p className="mt-6 font-semibold opacity-90">
              Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie
              numérique (LCEN), voici les informations d'identification du site qfjb.fr.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-10 font-semibold leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-2xl text-electric">Éditeur du site</h2>
              <p className="mt-3">
                Le site qfjb.fr est édité par l'association{" "}
                <strong>Quai Francilien des Jeunes Bridgeurs (QFJB)</strong>, association loi 1901,
                dont le siège est situé 73 Avenue Charles de Gaulle, 92200 Neuilly-sur-Seine.
              </p>
              <p className="mt-3">
                Contact :{" "}
                <a href="mailto:qfjb@parisbridge.fr" className="text-electric underline">
                  qfjb@parisbridge.fr
                </a>{" "}
                —{" "}
                <a href="tel:+33630224036" className="text-electric underline">
                  06 30 22 40 36
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-electric">Directeur de la publication</h2>
              <p className="mt-3">
                <strong>Jean-Bernard Eytard</strong>, Président de l'association.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-electric">Hébergement</h2>
              <p className="mt-3">
                Le site est hébergé par <strong>OVH SAS</strong>, 2 rue Kellermann, 59100 Roubaix,
                France.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-electric">Propriété intellectuelle</h2>
              <p className="mt-3">
                L'ensemble des contenus présents sur ce site (textes, photographies, logo,
                illustrations) est la propriété du QFJB, sauf mention contraire, et ne peut être
                reproduit sans autorisation préalable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-electric">Données personnelles</h2>
              <p className="mt-3">
                Le traitement des données envoyées via le formulaire de contact est détaillé dans
                notre{" "}
                <Link to="/confidentialite" className="text-electric underline">
                  politique de confidentialité
                </Link>
                .
              </p>
            </div>

            <p className="text-sm">Dernière mise à jour : {MAJ}.</p>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
}
