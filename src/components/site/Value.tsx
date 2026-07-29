import { Eye, Link2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./primitives";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Credibilidade",
    text: "Pareça profissional desde a primeira impressão.",
  },
  {
    icon: Eye,
    title: "Visibilidade",
    text: "Facilite para que clientes encontrem o seu negócio.",
  },
  {
    icon: Link2,
    title: "Conexão",
    text: "Comunique-se com consistência no site e nas redes sociais.",
  },
];

export function Value() {
  return (
    <section className="relative overflow-hidden surface-navy py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          tone="light"
          eyebrow="Por que importa"
          title="Seu negócio merece ser encontrado, lembrado e escolhido."
          description="Um bom serviço é apenas parte da jornada. O seu negócio também precisa de uma presença digital que comunique valor, gere confiança e facilite a decisão do cliente."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-navy-foreground/12 bg-navy-foreground/12 md:grid-cols-3">
          {pillars.map(({ icon: Icon, ...pillar }) => (
            <div key={pillar.title} className="bg-navy p-8 transition-colors hover:bg-navy-deep">
              <Icon size={24} strokeWidth={1.6} className="text-primary" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-bold text-navy-foreground">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}