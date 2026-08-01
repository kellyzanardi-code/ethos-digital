import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { siteConfig, whatsappLink } from "@/config/site";
import { submitLead } from "@/lib/contact";
import { SectionHeading, actionVariants } from "./primitives";

const needs = [
  "Site profissional",
  "Conteúdo para redes sociais",
  "Site + estratégia de redes sociais",
  "Cursos",
  "Outro",
];

const fieldClass =
  "h-12 w-full rounded-md border border-navy-foreground/20 bg-navy-deep px-4 text-sm text-navy-foreground placeholder:text-navy-foreground/40 outline-none transition-colors focus-visible:border-primary";

export function Contact() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("nome") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("mensagem") ?? "").trim();

    if (name.length < 2 || name.length > 100) {
      toast.error("Informe um nome válido.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 255) {
      toast.error("Informe um e-mail válido.");
      return;
    }
    if (message.length < 5 || message.length > 1000) {
      toast.error("Escreva uma mensagem com pelo menos 5 caracteres.");
      return;
    }

    setSending(true);

    void submitLead({
      name,
      businessName: String(data.get("empresa") ?? "").trim() || undefined,
      email,
      phone: String(data.get("telefone") ?? "").trim(),
      helpType: String(data.get("necessidade") ?? "").trim(),
      message,
    })
      .then(() => {
        form.reset();
        toast.success("Mensagem registrada. Entraremos em contato em breve.");
      })
      .catch((error: unknown) => {
        console.error(error);
        toast.error("Não foi possível enviar sua mensagem agora. Tente novamente.");
      })
      .finally(() => {
        setSending(false);
      });
  }

  return (
    <section id="contato" className="relative overflow-hidden surface-navy py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-40"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            tone="light"
            eyebrow="Contato"
            title="Pronto para fortalecer sua presença digital?"
            description="Conte o que o seu negócio precisa e vamos identificar o melhor próximo passo para o seu site, seu conteúdo ou sua jornada de educação em tecnologia."
          />
          <div className="mt-8 space-y-2 text-sm text-navy-foreground/60">
            <p>E-mail: {siteConfig.email || "a definir"}</p>
            <p>
              WhatsApp: {siteConfig.whatsappNumber ? `+${siteConfig.whatsappNumber}` : "a definir"}
            </p>
          </div>
          <a
            href={whatsappLink}
            className={actionVariants({ variant: "outlineLight", size: "lg" }) + " mt-6"}
          >
            <MessageCircle size={18} aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-navy-foreground">
              Nome
            </label>
            <input id="nome" name="nome" required maxLength={100} className={fieldClass} />
          </div>
          <div>
            <label
              htmlFor="empresa"
              className="mb-1.5 block text-sm font-medium text-navy-foreground"
            >
              Nome do negócio
            </label>
            <input id="empresa" name="empresa" maxLength={120} className={fieldClass} />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-navy-foreground"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={255}
              className={fieldClass}
            />
          </div>
          <div>
            <label
              htmlFor="telefone"
              className="mb-1.5 block text-sm font-medium text-navy-foreground"
            >
              WhatsApp ou telefone
            </label>
            <input id="telefone" name="telefone" type="tel" maxLength={30} className={fieldClass} />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="necessidade"
              className="mb-1.5 block text-sm font-medium text-navy-foreground"
            >
              Com o que você precisa de ajuda?
            </label>
            <select
              id="necessidade"
              name="necessidade"
              defaultValue={needs[0]}
              className={fieldClass}
            >
              {needs.map((need) => (
                <option key={need} value={need} className="text-foreground">
                  {need}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="mensagem"
              className="mb-1.5 block text-sm font-medium text-navy-foreground"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              required
              maxLength={1000}
              className={fieldClass.replace("h-12", "min-h-32 py-3")}
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className={actionVariants({ size: "lg" }) + " sm:col-span-2"}
          >
            {sending ? "Enviando…" : "Falar com a Ethos Cursos"}
          </button>
        </form>
      </div>
    </section>
  );
}
