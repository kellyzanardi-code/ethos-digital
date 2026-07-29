import heroTeam from "@/assets/hero-team.jpg";
import { ActionLink } from "./primitives";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden surface-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:px-8">
        <div className="reveal">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Tecnologia · Educação · Propósito
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-[3.4rem]">
            Construa sua presença digital.{" "}
            <span className="text-primary">Cresça com propósito.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            A Ethos Cursos cria sites profissionais, conteúdo estratégico para redes
            sociais e educação prática em tecnologia para tornar negócios mais
            visíveis, credíveis e competitivos.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="#contato" size="lg">
              Quero meu site
            </ActionLink>
            <ActionLink href="#contato" variant="outlineLight" size="lg">
              Falar com a Ethos
            </ActionLink>
          </div>
        </div>

        <div className="reveal relative" style={{ animationDelay: "120ms" }}>
          <div className="overflow-hidden rounded-lg border border-navy-foreground/15 shadow-[var(--shadow-elegant)]">
            <div className="flex items-center gap-1.5 border-b border-navy-foreground/10 bg-navy-deep px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
              <span className="ml-3 text-[0.7rem] tracking-wide text-navy-foreground/50">
                ethoscursos · projeto em construção
              </span>
            </div>
            <img
              src={heroTeam}
              alt="Equipe trabalhando no desenvolvimento de um site com a identidade da Ethos Cursos na tela"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}