import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Send } from "lucide-react";

/**
 * Formulaire de contact — envoi via Web3Forms (https://web3forms.com).
 * Le site étant 100 % statique, il n'y a pas de backend : Web3Forms relaie la
 * soumission par email vers la boîte du club (l'adresse est liée à la clé
 * d'accès, définie côté Web3Forms).
 *
 * Clé d'accès : variable d'environnement VITE_WEB3FORMS_ACCESS_KEY (voir
 * .env.example). Elle est publique par conception — elle ne fait qu'identifier
 * le destinataire, elle ne donne aucun accès aux soumissions.
 */
const ACCESS_KEY = import.meta.env["VITE_WEB3FORMS_ACCESS_KEY"] as string | undefined;
const ENDPOINT = "https://api.web3forms.com/submit";
const CLUB_EMAIL = "qfjb@parisbridge.fr";

const fieldClass =
  "mt-2 w-full rounded-lg border-[3px] border-ink bg-background px-4 py-3 font-semibold outline-none focus:ring-4 focus:ring-electric/40";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot : rempli => bot. On fait semblant d'avoir réussi.
    if (data.get("botcheck")) {
      setStatus("success");
      form.reset();
      return;
    }

    if (!ACCESS_KEY) {
      console.error("VITE_WEB3FORMS_ACCESS_KEY manquante : formulaire non configuré.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const payload = {
      access_key: ACCESS_KEY,
      subject: "Nouveau message depuis le site QFJB",
      from_name: "Site QFJB",
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { success: boolean };
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="pop-card p-6 text-foreground sm:p-8" role="status">
        <h3 className="text-2xl text-electric">Message envoyé, merci ! 🎉</h3>
        <p className="mt-3 font-semibold">
          On te répond très vite. En attendant, rendez-vous un jeudi à 20h pour découvrir le club.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="pop-card space-y-4 p-6 text-foreground sm:p-8">
      <h3 className="text-2xl text-electric">Une question ? Écrivez-nous !</h3>

      <div>
        <label htmlFor="name" className="text-sm font-extrabold uppercase">
          Votre prénom
        </label>
        <input
          id="name"
          name="name"
          required
          maxLength={80}
          className={fieldClass}
          placeholder="Camille"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-extrabold uppercase">
          Votre email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={150}
          autoComplete="email"
          className={fieldClass}
          placeholder="camille@email.fr"
        />
      </div>

      <div>
        <label htmlFor="msg" className="text-sm font-extrabold uppercase">
          Votre message
        </label>
        <textarea
          id="msg"
          name="message"
          required
          rows={4}
          maxLength={2000}
          className={fieldClass}
          placeholder="Je débute totalement, je peux venir jeudi à 20h ?"
        />
      </div>

      {/* Honeypot anti-bot : masqué aux humains. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <label className="flex items-start gap-2 text-sm font-semibold">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 size-4 shrink-0 accent-coral"
        />
        <span>
          J'accepte que mon message et mon email soient utilisés par le QFJB pour me recontacter.{" "}
          <Link to="/confidentialite" className="underline underline-offset-2 hover:text-coral">
            En savoir plus
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="pop-btn w-full bg-coral px-6 py-3 text-coral-foreground disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          "Envoi…"
        ) : (
          <>
            Envoyer <Send className="size-4" />
          </>
        )}
      </button>

      <p aria-live="polite" className="min-h-5 text-sm font-bold">
        {status === "error" && (
          <span className="text-coral">
            L'envoi a échoué. Réessaie, ou écris-nous directement à {CLUB_EMAIL}.
          </span>
        )}
      </p>
    </form>
  );
}
