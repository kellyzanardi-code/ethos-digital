import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ActionLink, Logo } from "./primitives";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#cursos", label: "Cursos" },
  { href: "#sobre", label: "Sobre a Ethos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
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
        scrolled
          ? "bg-navy/95 backdrop-blur border-b border-navy-foreground/10"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" aria-label="Ethos Cursos — ir para o início">
          <Logo tone="light" />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
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
          <ActionLink href="#contato" size="sm">
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
          <ActionLink
            href="#contato"
            className="mt-5 w-full"
            size="lg"
          >
            Fale com a Ethos
          </ActionLink>
        </div>
      ) : null}
    </header>
  );
}