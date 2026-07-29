import ethosMark from "@/assets/ethos-mark.png";
import { SectionHeading } from "./primitives";

const points = [
  "Aprendizado prático",
  "Comunicação clara",
  "Tecnologia com propósito",
  "Crescimento digital de longo prazo",
];

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Sobre a Ethos"
            title="Tecnologia, educação e propósito"
            description="A Ethos Cursos reúne tecnologia, educação e experiência prática para ajudar pessoas e negócios a avançarem com clareza e confiança."
          />
          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3.5 text-sm font-medium text-navy"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center">
          <div
            className="absolute inset-x-8 bottom-8 top-8 rounded-lg bg-secondary"
            aria-hidden="true"
          />
          <img
            src={ethosMark}
            alt="Símbolo da Ethos Cursos: uma coluna formada por livros empilhados"
            width={816}
            height={816}
            loading="lazy"
            className="relative w-64 max-w-full object-contain lg:w-80"
          />
        </div>
      </div>
    </section>
  );
}