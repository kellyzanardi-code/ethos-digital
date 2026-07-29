import { SectionHeading } from "./primitives";

const steps = [
  {
    title: "Descobrir",
    text: "Entendemos o seu negócio, o público, os objetivos e o posicionamento.",
  },
  {
    title: "Planejar",
    text: "Definimos a estrutura, a mensagem, a direção visual e a estratégia de conteúdo.",
  },
  {
    title: "Construir",
    text: "Criamos o seu site e organizamos a sua comunicação digital.",
  },
  {
    title: "Crescer",
    text: "Você fortalece a presença, alcança mais pessoas e cria novas oportunidades.",
  },
];

export function Process() {
  return (
    <section id="como-funciona" className="bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Como funciona" title="Um processo simples, em quatro etapas" />

        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative pl-6 lg:pl-0 lg:pt-8">
              <span
                className="absolute left-0 top-0 h-full w-px bg-border lg:left-0 lg:top-3 lg:h-px lg:w-full"
                aria-hidden="true"
              />
              <span
                className="absolute left-[-4px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary lg:left-0 lg:top-2"
                aria-hidden="true"
              />
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Etapa {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}