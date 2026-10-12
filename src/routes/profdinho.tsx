import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Code2,
  Facebook,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  ListOrdered,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  TrendingUp,
  X,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ActionLink, Logo, SectionHeading } from "@/components/site/primitives";
import { siteConfig, whatsappLink } from "@/config/site";
import dinhoHero from "@/assets/dinho-hero.jpg";

// ---------------------------------------------------------------------------
// Metadados da página (mesmo padrão de src/routes/index.tsx)
// ---------------------------------------------------------------------------

const title = "Prof. Dinho Zanardi | Ethos Cursos";
const description =
  "Professor de TI e Arquiteto de Sistemas há mais de 20 anos. Cursos práticos de tecnologia, 100% on-line, do iniciante ao avançado — tech que faz sentido.";

export const Route = createFileRoute("/profdinho")({
  component: ProfDinhoPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/profdinho" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/profdinho" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Professor Dinho Zanardi",
          jobTitle: "Professor de TI e Arquiteto de Sistemas",
          description,
          url: "/profdinho",
          sameAs: [
            "https://www.instagram.com/dinhozanardi/",
            "https://www.linkedin.com/in/edcleissonzanardi",
            "https://github.com/profdinho",
          ],
          worksFor: { "@type": "Organization", name: "Ethos Cursos", url: "/" },
        }),
      },
    ],
  }),
});

// ---------------------------------------------------------------------------
// Navbar — mesma estrutura e classes do Navbar do site; hrefs adaptados
// para funcionar a partir de /profdinho (âncoras da home viram /#secao)
// ---------------------------------------------------------------------------

const navbarLinks = [
  { href: "/", label: "Início" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#cursos", label: "Cursos" },
  { href: "/#sobre", label: "Sobre a Ethos" },
  { href: "#contato", label: "Contato" },
];

function NavbarProfdinho() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-navy/95 backdrop-blur border-b border-navy-foreground/10" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="/" aria-label="Ethos Cursos — ir para o início do site">
          <Logo tone="light" />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navbarLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-navy-foreground/80 transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ActionLink href="/#contato" size="sm">
            Fale com a Ethos
          </ActionLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-navy-foreground/20 text-navy-foreground lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="border-t border-navy-foreground/10 bg-navy px-5 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {navbarLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-navy-foreground/10 py-3.5 text-sm font-medium text-navy-foreground/85 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ActionLink href="/#contato" className="mt-5 w-full" size="lg">
            Fale com a Ethos
          </ActionLink>
        </div>
      ) : null}
    </header>
  );
}

// ---------------------------------------------------------------------------
// Hero — mesma composição do Hero da home (badge, headline, CTAs, card com foto)
// ---------------------------------------------------------------------------

function HeroProfdinho() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden surface-navy pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:px-8">
        <div className="reveal">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Professor de TI · Arquiteto de Sistemas · 20+ anos
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-[3.4rem]">
            Ensino tech que faz <span className="text-primary">sentido.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            Sou o Professor Dinho Zanardi. Há mais de 20 anos ensino desenvolvimento de sistemas e
            atuo como arquiteto de software — e ajudo pessoas a ir do zero ao nível avançado em
            tecnologia, com método prático, direto e sem enrolação.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="#cursos-dinho" size="lg">
              Conhecer os cursos
            </ActionLink>
            <ActionLink href={whatsappLink} variant="outlineLight" size="lg">
              <MessageCircle size={18} aria-hidden="true" />
              Falar no WhatsApp
            </ActionLink>
          </div>
          <p className="mt-6 text-sm text-navy-foreground/60">Sócio-fundador da Ethos Cursos</p>
        </div>

        <div className="reveal relative" style={{ animationDelay: "120ms" }}>
          <div className="overflow-hidden rounded-xl border border-navy-foreground/10 bg-navy-deep shadow-2xl">
            <div className="flex items-center gap-2 border-b border-navy-foreground/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
              <span className="ml-3 text-[0.7rem] tracking-wide text-navy-foreground/50">
                profdinho · Ethos Cursos
              </span>
            </div>
            <img
              src={dinhoHero}
              alt="Professor Dinho Zanardi"
              className="max-h-[460px] w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Especialidades
// ---------------------------------------------------------------------------

const especialidades = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Java",
  "SQL",
  "Microsserviços",
  "AWS",
];

function Especialidades() {
  return (
    <section className="border-y border-navy/10 bg-background py-10">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Tecnologia que eu domino e ensino
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
          {especialidades.map((item) => (
            <li
              key={item}
              className="rounded-full border border-navy/15 bg-card px-4 py-1.5 text-sm font-medium text-navy"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Sobre
// ---------------------------------------------------------------------------

function SobreDinho() {
  return (
    <section id="sobre-dinho" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="reveal">
          <SectionHeading
            eyebrow="Sobre mim"
            title="Quem é o Prof. Dinho"
            description="Duas décadas divididas entre a sala de aula e a arquitetura de sistemas reais."
          />
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Sou professor de Tecnologia da Informação e Arquiteto de Sistemas há mais de 20 anos —
              as duas profissões que exerço até hoje.
            </p>
            <p>
              Minha experiência de mercado está em Sistemas Web (HTML, CSS, JavaScript e React),
              Java, SQL e microsserviços, além de computação em nuvem com AWS.
            </p>
            <p>
              Criei a Ethos Cursos para unir tecnologia, educação e propósito: ajudar pessoas e
              negócios a avançarem com clareza e confiança.
            </p>
          </div>
        </div>

        <aside
          className="reveal rounded-xl border border-navy/10 bg-card p-7 shadow-sm"
          style={{ animationDelay: "120ms" }}
        >
          <h3 className="font-display text-base font-bold text-navy">Minha especialidade</h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li>
              <strong className="font-semibold text-navy">Sistemas Web</strong> — HTML, CSS,
              JavaScript e React
            </li>
            <li>
              <strong className="font-semibold text-navy">Backend e dados</strong> — Java, SQL e
              microsserviços
            </li>
            <li>
              <strong className="font-semibold text-navy">Nuvem</strong> — computação em nuvem com
              AWS
            </li>
            <li>
              <strong className="font-semibold text-navy">Educação prática</strong> — didática para
              quem está começando
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Metodologia
// ---------------------------------------------------------------------------

const metodologia = [
  {
    icon: MessageCircle,
    title: "Linguagem simples",
    text: "Explicações sem jargão desnecessário: você entende o porquê de cada conceito.",
  },
  {
    icon: ListOrdered,
    title: "Passo a passo",
    text: "Exemplos pequenos e executáveis, construindo complexidade aos poucos.",
  },
  {
    icon: Code2,
    title: "Prática desde o primeiro dia",
    text: "Projetos reais desde o início — você aprende fazendo, não só assistindo.",
  },
  {
    icon: TrendingUp,
    title: "Do iniciante ao avançado",
    text: "Trilha contínua até você se tornar uma pessoa desenvolvedora confiante.",
  },
];

function Metodologia() {
  return (
    <section className="surface-navy py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          tone="light"
          align="center"
          eyebrow="Metodologia"
          title="Por que aprender comigo?"
          description="Um método direto, construído em mais de duas décadas de sala de aula e de mercado."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metodologia.map((item, index) => (
            <div
              key={item.title}
              className="reveal rounded-xl border border-navy-foreground/10 bg-navy-deep/60 p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-base font-bold text-navy-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Cursos — cards no mesmo padrão do componente Courses do site
// ---------------------------------------------------------------------------

const cursosDinho = [
  {
    name: "Lógica de Programação e Algoritmos",
    description: "Antes de aprender qualquer linguagem, aprenda a pensar.",
    status: "aberto" as const,
    href: "/curso/logica-algoritmos",
    cta: "Ver página do curso",
  },
  {
    name: "Introdução ao Desenvolvimento Web com HTML e CSS",
    description: "Entenda a estrutura e a apresentação visual por trás dos sites modernos.",
    status: "breve" as const,
  },
  {
    name: "JavaScript Aplicado ao Desenvolvimento Web",
    description: "Adicione interatividade, comportamento e funcionalidade real às páginas web.",
    status: "breve" as const,
  },
];

function CursosDinho() {
  return (
    <section id="cursos-dinho" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Cursos"
          title="Cursos práticos de tecnologia"
          description="Cursos 100% on-line, para você aprender no seu ritmo — no computador ou no celular."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cursosDinho.map((course, index) => (
            <article
              key={course.name}
              className="reveal flex flex-col rounded-xl border border-navy/10 bg-card p-7 shadow-sm"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {course.status === "aberto" ? (
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex w-fit items-center rounded-full bg-primary/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary">
                    Matrículas abertas
                  </span>
                  <span className="inline-flex w-fit items-center rounded-full bg-gold/20 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy">
                    100% on-line
                  </span>
                </div>
              ) : (
                <span className="inline-flex w-fit items-center rounded-full bg-gold/20 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy">
                  Em breve
                </span>
              )}

              <h3 className="mt-5 text-lg font-bold leading-snug text-navy">{course.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {course.description}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <MonitorSmartphone size={15} className="text-primary" aria-hidden="true" />
                Aulas 100% on-line — estude de onde quiser, no seu ritmo
              </p>

              <div className="mt-6">
                {course.status === "aberto" && course.href ? (
                  <ActionLink href={course.href} size="sm">
                    {course.cta}
                  </ActionLink>
                ) : (
                  <a
                    href={whatsappLink}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:underline"
                  >
                    <MessageCircle size={15} aria-hidden="true" />
                    Avise-me no WhatsApp
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Para quem é
// ---------------------------------------------------------------------------

const paraQuem = [
  "Está começando do zero e quer construir uma base sólida em programação.",
  "Já estuda por conta própria, mas se perde sem um caminho claro.",
  "Quer se tornar uma pessoa desenvolvedora confiante, do básico ao avançado.",
];

function ParaQuem() {
  return (
    <section className="bg-card py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Para quem é"
          title="Feito para quem quer entrar de verdade na tecnologia"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {paraQuem.map((item, index) => (
            <div
              key={item}
              className="reveal rounded-xl border border-navy/10 bg-background p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// CTA final
// ---------------------------------------------------------------------------

function CtaFinal() {
  return (
    <section id="contato" className="surface-navy py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <SectionHeading
          tone="light"
          align="center"
          eyebrow="Próximo passo"
          title="Pronto para aprender tech que faz sentido?"
          description="Fale comigo, acompanhe o dia a dia ou conheça a Ethos Cursos."
        />
        <div className="mt-9 flex flex-col items-center gap-3">
          {/* Fileira 1 — conversão e rede pessoal */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ActionLink href={whatsappLink} size="lg">
              <MessageCircle size={18} aria-hidden="true" />
              Falar no WhatsApp
            </ActionLink>
            <ActionLink
              href="https://www.instagram.com/dinhozanardi/"
              variant="outlineLight"
              size="lg"
            >
              <Instagram size={18} aria-hidden="true" />
              Seguir no Instagram
            </ActionLink>
          </div>

          {/* Fileira 2 — perfis profissionais */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ActionLink
              href="https://www.linkedin.com/in/edcleissonzanardi"
              variant="outlineLight"
              size="lg"
            >
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </ActionLink>
            <ActionLink href="https://github.com/profdinho" variant="outlineLight" size="lg">
              <Github size={18} aria-hidden="true" />
              GitHub
            </ActionLink>
          </div>
        </div>
        <p className="mt-6 text-sm text-navy-foreground/60">
          <a
            href="/"
            className="underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
          >
            Conhecer a Ethos Cursos
          </a>
        </p>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Footer — mesmo componente visual do site; colunas apontam para a home
// ---------------------------------------------------------------------------

const footerColumns = [
  {
    title: "Navegação",
    links: [
      { href: "/", label: "Início" },
      { href: "/#servicos", label: "Serviços" },
      { href: "/#como-funciona", label: "Como funciona" },
      { href: "/#sobre", label: "Sobre a Ethos" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { href: "/#servicos", label: "Sites profissionais" },
      { href: "/#servicos", label: "Conteúdo para redes sociais" },
      { href: "/#servicos", label: "Site + estratégia" },
    ],
  },
  {
    title: "Cursos",
    links: [
      { href: "/curso/logica-algoritmos", label: "Lógica de programação" },
      { href: "/#cursos", label: "HTML e CSS" },
      { href: "/#cursos", label: "JavaScript" },
    ],
  },
];

function FooterProfdinho() {
  return (
    <footer className="border-t border-navy-foreground/10 bg-navy-deep py-16 text-navy-foreground">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/60">
              Tecnologia, educação e comunicação estratégica para negócios que querem clareza.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-navy-foreground/60">
              <a
                href={siteConfig.social.instagram || "#contato"}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
              <a
                href={siteConfig.social.facebook || "#contato"}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="h-4 w-4" />
                <span>Facebook</span>
              </a>
              <a
                href={siteConfig.social.youtube || "#contato"}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube className="h-4 w-4" />
                <span>YouTube</span>
              </a>
              <a
                href={whatsappLink}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.linkedin.com/in/edcleissonzanardi"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn do Professor Dinho"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/profdinho"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub do Professor Dinho"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-navy-foreground/65 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy-foreground/10 pt-6 text-xs text-navy-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ethos Cursos. Todos os direitos reservados.</p>
          <a href="/#contato" className="hover:text-primary">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Página
// ---------------------------------------------------------------------------

function ProfDinhoPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavbarProfdinho />
      <main>
        <HeroProfdinho />
        <Especialidades />
        <SobreDinho />
        <Metodologia />
        <CursosDinho />
        <ParaQuem />
        <CtaFinal />
      </main>
      <FooterProfdinho />
    </div>
  );
}
