// src/components/course/CourseSalesPage.tsx
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Boxes,
  Brain,
  CheckCircle2,
  ChevronDown,
  Code2,
  Compass,
  Facebook,
  GitBranch,
  Globe,
  GraduationCap,
  Instagram,
  Menu,
  MessageCircle,
  Repeat,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { actionVariants, Logo, SectionHeading } from "@/components/site/primitives";
import { siteConfig, whatsappLink } from "@/config/site";
import { getActiveOffer, getCheckoutUrl, type Course } from "@/config/courses";

const websiteUrl = "https://ethoscursos.com.br/";
const brandYear = new Date().getFullYear();

const moduleIcons = [Brain, Code2, Boxes, GitBranch, Repeat, Rocket];
const audienceIcons = [Target, Users, TrendingUp, Compass];
const highlightIcons = [GraduationCap, Rocket, Sparkles, Code2];

function formatWhatsApp(digits: string): string {
  const ddd = digits.slice(2, 4);
  const main = digits.slice(4);
  if (main.length === 9) {
    return `(${ddd}) ${main.slice(0, 5)}-${main.slice(5)}`;
  }
  return `(${ddd}) ${main.slice(0, 4)}-${main.slice(4)}`;
}

/* Animação suave de entrada ao rolar (IntersectionObserver) */
function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        shown ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

function getNavLinks(course: Course) {
  const links = [
    { href: "#curso", label: "Curso" },
    { href: "#para-quem", label: "Para quem" },
    { href: "#conteudo", label: "Conteúdo" },
  ];
  if (getActiveOffer(course)) {
    links.push({ href: "#oferta", label: "Oferta" });
  }
  links.push({ href: "#faq", label: "Dúvidas" }, { href: "#contato", label: "Contato" });
  return links;
}

function CourseHeader({ course }: { course: Course }) {
  const links = getNavLinks(course);
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
        scrolled ? "border-b border-navy-foreground/10 bg-navy/95 backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="/" aria-label="Ethos Cursos — voltar para o site">
          <Logo tone="light" />
        </a>

        <nav aria-label="Navegação do curso" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
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
          <a
            href={getCheckoutUrl(course)}
            target="_blank"
            rel="noreferrer"
            className={actionVariants({ size: "sm" })}
          >
            {course.ctaLabel ?? "Garantir minha vaga"}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-curso-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-navy-foreground/20 text-navy-foreground lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div
          id="menu-curso-mobile"
          className="border-t border-navy-foreground/10 bg-navy px-5 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
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
          <a
            href={getCheckoutUrl(course)}
            target="_blank"
            rel="noreferrer"
            className={cn(actionVariants({ size: "lg" }), "mt-5 w-full")}
          >
            {course.ctaLabel ?? "Garantir minha vaga"}
          </a>
        </div>
      ) : null}
    </header>
  );
}

/* ---------- Hero ---------- */
function CourseHero({ course }: { course: Course }) {
  return (
    <section id="curso" className="surface-navy relative overflow-hidden py-28 lg:py-36">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {course.badge}
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy-foreground sm:text-5xl lg:text-6xl">
            {course.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            {course.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={getCheckoutUrl(course)}
              target="_blank"
              rel="noreferrer"
              className={actionVariants({ size: "lg" })}
            >
              {course.ctaLabel ?? "Garantir minha vaga"}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={actionVariants({ variant: "outlineLight", size: "lg" })}
            >
              <MessageCircle size={18} aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {course.trustItems.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 text-sm text-navy-foreground/70"
              >
                <CheckCircle2 size={16} className="text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Para quem é o curso ---------- */
function CourseAudience({ course }: { course: Course }) {
  return (
    <section id="para-quem" className="bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Para quem é o curso"
            title="Feito para quem está começando do zero"
            description="Se você se encaixa em um destes perfis, este curso foi desenhado para você."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {course.audience.map((item, index) => {
            const Icon = audienceIcons[index % audienceIcons.length];
            return (
              <Reveal key={item.title} delay={index * 80}>
                <div className="h-full rounded-md border border-navy/10 bg-white p-7 shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-1 hover:border-primary/40">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Grade / Conteúdo ---------- */
function CourseModules({ course }: { course: Course }) {
  return (
    <section id="conteudo" className="surface-navy relative overflow-hidden py-24 lg:py-28">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Conteúdo do curso"
            title="O que você vai aprender"
            description="Uma grade objetiva e progressiva para construir sua base em programação passo a passo."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {course.modules.map((module, index) => {
            const Icon = moduleIcons[index % moduleIcons.length];
            return (
              <Reveal key={module.title} delay={index * 80}>
                <div className="group h-full rounded-md border border-navy-foreground/10 bg-navy-deep/60 p-7 transition-all duration-200 hover:border-primary/50">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/15 text-primary">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-bold tracking-widest text-navy-foreground/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-navy-foreground">
                    {module.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-foreground/65">
                    {module.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Oferta ---------- */
function CourseOffer({ course }: { course: Course }) {
  const offer = getActiveOffer(course);
  if (!offer) return null;

  return (
    <section id="oferta" className="surface-navy relative overflow-hidden py-24 lg:py-28">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Oferta vigente
        </span>
        {offer.discountBadge ? (
          <span className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground">
            {offer.discountBadge}
          </span>
        ) : null}
        <h2 className="mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight text-navy-foreground sm:text-4xl">
          Oferta especial
        </h2>
        <div className="mt-8">
          <p className="text-lg text-navy-foreground/60">
            De{" "}
            <span className="line-through decoration-primary decoration-2">{offer.fullPrice}</span>{" "}
            por apenas
          </p>
          <p className="mt-2 font-display text-6xl font-bold tracking-tight text-primary sm:text-7xl">
            {offer.offerPrice}
          </p>
          {offer.installments ? (
            <p className="mt-2 text-sm text-navy-foreground/70">{offer.installments}</p>
          ) : null}
        </div>
        <a
          href={getCheckoutUrl(course)}
          target="_blank"
          rel="noreferrer"
          className={actionVariants({ size: "lg" }) + " mt-10 w-full sm:w-auto"}
        >
          {offer.ctaLabel ?? course.ctaLabel ?? "Garantir minha vaga"}
          <ArrowRight size={18} aria-hidden="true" />
        </a>
        {offer.urgencyText ? (
          <p className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-navy-foreground/55">
            {offer.urgencyText}
          </p>
        ) : null}
      </div>
    </section>
  );
}

/* ---------- Diferenciais ---------- */
function CourseHighlights({ course }: { course: Course }) {
  return (
    <section id="diferenciais" className="bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Por que a Ethos"
            title="Aprenda com quem ensina e constrói tecnologia"
            description="Mais do que teoria: uma formação prática, clara e com propósito."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {course.highlights.map((item, index) => {
            const Icon = highlightIcons[index % highlightIcons.length];
            return (
              <Reveal key={item.title} delay={index * 80}>
                <div className="flex h-full gap-5 rounded-md border border-navy/10 bg-white p-7 shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-1 hover:border-primary/40">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Garantia ---------- */
function CourseGuarantee() {
  return (
    <section id="garantia" className="bg-background pb-24 lg:pb-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div className="surface-navy relative overflow-hidden rounded-lg px-8 py-12 text-center lg:px-14">
            <div
              className="grid-lines pointer-events-none absolute inset-0 opacity-25"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                <ShieldCheck size={32} aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-navy-foreground sm:text-3xl">
                Garantia incondicional de 7 dias
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy-foreground/70 sm:text-base">
                Risco zero: entre no curso, assista às aulas e, se sentir que não é para solicite o
                solicite o reembolso total dentro de 7 dias — sem perguntas e sem burocracia.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function CourseFaq({ course }: { course: Course }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background pb-24 lg:pb-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title="Perguntas e respostas"
            align="center"
          />
        </Reveal>
        <div className="mt-12 space-y-4">
          {course.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={index * 60}>
                <div className="overflow-hidden rounded-md border border-navy/10 bg-white shadow-[var(--shadow-soft)]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold tracking-tight text-navy">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={cn(
                        "shrink-0 text-primary transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA final ---------- */
function CourseCta({ course }: { course: Course }) {
  return (
    <section className="surface-navy relative overflow-hidden py-24 lg:py-28">
      <div
        className="grid-lines pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-[1.12] tracking-tight text-navy-foreground sm:text-4xl lg:text-[2.75rem]">
            Comece hoje a construir sua base em programação
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/70 sm:text-lg">
            Acesso imediato após a confirmação do pagamento. Garantia incondicional de 7 dias.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={getCheckoutUrl(course)}
              target="_blank"
              rel="noreferrer"
              className={actionVariants({ size: "lg" })}
            >
              {course.ctaLabel ?? "Garantir minha vaga"} agora
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={actionVariants({ variant: "outlineLight", size: "lg" })}
            >
              <MessageCircle size={18} aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Contato ---------- */
function CourseContact() {
  const contactCards = [
    {
      label: "WhatsApp",
      value: siteConfig.whatsappNumber
        ? `(${siteConfig.whatsappNumber.slice(2, 4)}) ${siteConfig.whatsappNumber.slice(4)}`
        : "Chamar no WhatsApp",
      href: whatsappLink,
      icon: MessageCircle,
    },
    {
      label: "Site",
      value: "ethoscursos.com.br",
      href: websiteUrl,
      icon: Globe,
    },
    {
      label: "Facebook",
      value: "/ethoscursos",
      href: siteConfig.social.facebook,
      icon: Facebook,
    },
    {
      label: "Instagram",
      value: "@ethoscursos.ead",
      href: siteConfig.social.instagram,
      icon: Instagram,
    },
  ];

  return (
    <section id="contato" className="bg-background pb-24 lg:pb-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contato"
            title="Ficou com alguma dúvida?"
            description="Fale com a gente pelo canal que preferir — respondemos rápido e com todo prazer."
            align="center"
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-md border border-navy/10 bg-white p-5 shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {card.label}
                  </span>
                  <span className="block font-display font-semibold tracking-tight text-navy">
                    {card.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
        <Reveal className="mt-10 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className={actionVariants({ size: "lg" })}
          >
            <MessageCircle size={18} aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Rodapé ---------- */
function CourseFooter({ course }: { course: Course }) {
  const links = getNavLinks(course);
  return (
    <footer className="surface-navy border-t border-navy-foreground/10 py-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/60">
              Tecnologia, educação e propósito para quem quer crescer com clareza e confiança.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-navy-foreground/50">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-navy-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-navy-foreground/50">
              Siga a Ethos
            </p>
            <div className="mt-4 flex justify-center gap-3 md:justify-end">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Ethos Cursos"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy-foreground/20 text-navy-foreground/70 transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook da Ethos Cursos"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy-foreground/20 text-navy-foreground/70 transition-colors hover:border-primary hover:text-primary"
              >
                <Facebook size={18} aria-hidden="true" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da Ethos Cursos"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy-foreground/20 text-navy-foreground/70 transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle size={18} aria-hidden="true" />
              </a>
            </div>
            <a
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm text-navy-foreground/70 transition-colors hover:text-primary"
            >
              Voltar ao site da Ethos Cursos
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-navy-foreground/10 pt-8 text-xs text-navy-foreground/45 md:flex-row">
          <p>© {brandYear} Ethos Cursos. Todos os direitos reservados.</p>
          <p className="uppercase tracking-[0.22em]">Tecnologia &amp; Educação</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Página completa ---------- */
export function CourseSalesPage({ course }: { course: Course }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [course.slug]);

  return (
    <div className="min-h-screen bg-background font-body text-navy">
      <CourseHeader course={course} />
      <main>
        <CourseHero course={course} />
        <CourseAudience course={course} />
        <CourseModules course={course} />
        <CourseHighlights course={course} />
        <CourseOffer course={course} />
        <CourseGuarantee />
        <CourseFaq course={course} />
        <CourseCta course={course} />
        <CourseContact />
      </main>
      <CourseFooter course={course} />
    </div>
  );
}
