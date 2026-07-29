import { SectionHeading } from "./primitives";

const statements = [
  { title: "Estratégia clara", text: "Cada decisão começa pelo objetivo do seu negócio." },
  { title: "Execução profissional", text: "Entregas cuidadosas, organizadas e bem comunicadas." },
  { title: "Melhoria contínua", text: "Ajustes constantes para acompanhar o seu crescimento." },
];

export function Trust() {
  return (
    <section className="bg-secondary py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Confiança"
          title="Feito com clareza. Desenhado para crescer."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {statements.map((item) => (
            <div key={item.title} className="rounded-lg border border-border bg-card p-8">
              <h3 className="text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-lg border border-dashed border-border p-8 text-sm text-muted-foreground"
            >
              Depoimento de cliente em breve
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}