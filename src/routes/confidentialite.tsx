import { createFileRoute } from "@tanstack/react-router";

import { SkipLink, PageHeader, PageFooter } from "@/components/page-chrome";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — QFJB" },
      {
        name: "description",
        content:
          "Comment le Quai Francilien des Jeunes Bridgeurs traite les données envoyées via le formulaire de contact.",
      },
      { property: "og:title", content: "Politique de confidentialité — QFJB" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ConfidentialitePage,
});

const MAJ = "septembre 2026";

function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <PageHeader />

      <main id="contenu" tabIndex={-1} className="outline-none">
        <section className="border-b-4 border-ink bg-electric px-4 py-16 text-background sm:py-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl leading-tight sm:text-5xl">Politique de confidentialité</h1>
            <p className="mt-6 font-semibold opacity-90">
              Le site du QFJB ne collecte aucune donnée automatiquement : pas de compte, pas de
              cookie, pas d'outil de mesure d'audience. La seule collecte a lieu quand vous nous
              écrivez via le formulaire de contact.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-10 font-semibold leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-2xl text-electric">Responsable du traitement</h2>
              <p className="mt-3">
                Association Quai Francilien des Jeunes Bridgeurs (QFJB), 73 Avenue Charles de
                Gaulle, 92200 Neuilly-sur-Seine —{" "}
                <a href="mailto:qfjb@parisbridge.fr" className="text-electric underline">
                  qfjb@parisbridge.fr
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-electric">Données collectées</h2>
              <p className="mt-3">
                Uniquement celles que vous saisissez dans le formulaire de contact : votre{" "}
                <strong>prénom</strong>, votre <strong>adresse email</strong> et le{" "}
                <strong>contenu de votre message</strong>. Aucune autre donnée n'est enregistrée.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-electric">Finalité et base légale</h2>
              <p className="mt-3">
                Ces informations servent uniquement à répondre à votre demande et, le cas échéant, à
                vous recontacter au sujet du club. La base légale est votre{" "}
                <strong>consentement</strong>, recueilli via la case à cocher du formulaire.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-electric">Transmission du message</h2>
              <p className="mt-3">
                Le site étant statique (sans serveur applicatif), l'envoi du formulaire passe par le
                service tiers <strong>Web3Forms</strong>, qui relaie immédiatement votre message par
                email vers la boîte du club puis ne le conserve pas. Voir la{" "}
                <a
                  href="https://web3forms.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-electric underline"
                >
                  politique de confidentialité de Web3Forms
                </a>
                . Le site lui-même est hébergé chez OVHcloud (hébergement statique, aucune donnée
                personnelle stockée côté hébergeur).
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-electric">Durée de conservation</h2>
              <p className="mt-3">
                Votre message est conservé dans la boîte email du club le temps nécessaire au
                traitement de votre demande et à l'échange qui suit, puis supprimé — au plus tard{" "}
                <strong>12 mois</strong> après le dernier contact.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-electric">Vos droits</h2>
              <p className="mt-3">
                Vous pouvez demander l'accès, la rectification ou la suppression de vos données, ou
                retirer votre consentement, en écrivant à{" "}
                <a href="mailto:qfjb@parisbridge.fr" className="text-electric underline">
                  qfjb@parisbridge.fr
                </a>
                . Vous pouvez également introduire une réclamation auprès de la{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-electric underline"
                >
                  CNIL
                </a>
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
