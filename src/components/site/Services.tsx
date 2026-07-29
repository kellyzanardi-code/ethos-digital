import { Check, Globe, Layers, MessageSquareText } from "lucide-react";
import { ActionLink, SectionHeading } from "./primitives";

const services = [
  {
    icon: Globe,
    title: "Sites profissionais",
    description:
      "Sites criados para comunicar o seu valor, gerar credibilidade e transformar visitantes em clientes.",
    items: [
      "Design responsivo",
      "Experiência de uso moderna",
      "Caminhos claros de conversão",
      "Apresentação profissional da marca",
      "Estrutura preparada para SEO",
    ],
    cta: "Começar meu site",
  },
  {
    icon: MessageSquareText,
    title: "Conteúdo estratégico para redes sociais",
    description:
      "Conteúdo criado com propósito para fortalecer a sua marca, engajar o público e apoiar os objetivos do negócio.",
    items: [
      "Planejamento de conteúdo",
      "Posts estratégicos",
      "Consistência de identidade visual",
      "Legendas e chamadas para ação",
      "Comunicação focada no público",
    ],
    cta: "Fortalecer minhas redes",
  },
  {
    icon: Layers,
    title: "Site + estratégia de redes sociais",
    description:
      "Uma presença digital completa, unindo um site profissional a uma comunicação consistente e estratégica.",
    items: ["Um parceiro. Duas frentes de crescimento."],
    cta: "Construir minha presença digital",
    highlight: true,
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções digitais para negócios que querem crescer"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, ...service }) => (
            <article
              key={service.title}
              className={`group flex flex-col rounded-lg border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] ${
                service.highlight
                  ? "border-primary/40 bg-navy text-navy-foreground"
                  : "border-border bg-card"
              }`}
            >
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-md ${
                  service.highlight
                    ? "bg-primary/15 text-primary"
                    : "bg-secondary text-navy"
                }`}
              >
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3
                className={`mt-6 text-xl font-bold ${
                  service.highlight ? "text-navy-foreground" : "text-navy"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  service.highlight
                    ? "text-navy-foreground/75"
                    : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className={`flex gap-2.5 text-sm ${
                      service.highlight
                        ? "text-navy-foreground/85"
                        : "text-foreground/80"
                    }`}
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <ActionLink
                href="#contato"
                variant={service.highlight ? "primary" : "outlineDark"}
                className="mt-8 w-full"
              >
                {service.cta}
              </ActionLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}