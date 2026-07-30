import { siteConfig, whatsappLink } from "@/config/site";
import { Facebook, Instagram, MessageCircle, Youtube } from "lucide-react";
import { Logo } from "./primitives";

const columns = [
  {
    title: "Navegação",
    links: [
      { href: "#inicio", label: "Início" },
      { href: "#servicos", label: "Serviços" },
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#sobre", label: "Sobre a Ethos" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { href: "#servicos", label: "Sites profissionais" },
      { href: "#servicos", label: "Conteúdo para redes sociais" },
      { href: "#servicos", label: "Site + estratégia" },
    ],
  },
  {
    title: "Cursos",
    links: [
      { href: "#cursos", label: "Lógica de programação" },
      { href: "#cursos", label: "HTML e CSS" },
      { href: "#cursos", label: "JavaScript" },
    ],
  },
];

export function Footer() {
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
            </div>
          </div>

          {columns.map((column) => (
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
          <a href="#contato" className="hover:text-primary">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}
