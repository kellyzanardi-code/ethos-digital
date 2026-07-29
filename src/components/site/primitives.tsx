import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import ethosMark from "@/assets/ethos-mark.png";

export const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:brightness-110 hover:-translate-y-0.5 shadow-[var(--shadow-soft)]",
        outlineLight:
          "border border-navy-foreground/30 text-navy-foreground hover:border-primary hover:text-primary",
        outlineDark:
          "border border-navy/25 text-navy hover:border-primary hover:text-primary",
        ghost: "text-navy hover:text-primary",
      },
      size: {
        md: "h-11 px-5",
        lg: "h-12 px-7 text-[0.95rem]",
        sm: "h-9 px-4 text-[0.8rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ActionProps = VariantProps<typeof actionVariants> & {
  className?: string;
  children: ReactNode;
};

export function ActionLink({
  href,
  variant,
  size,
  className,
  children,
}: ActionProps & { href: string }) {
  return (
    <a href={href} className={cn(actionVariants({ variant, size }), className)}>
      {children}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-navy-foreground" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-navy-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <img
        src={ethosMark}
        alt="Ethos Cursos"
        width={40}
        height={40}
        className="h-9 w-9 object-contain"
      />
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-base font-bold tracking-tight",
            tone === "light" ? "text-navy-foreground" : "text-navy",
          )}
        >
          Ethos Cursos
        </span>
        <span className="block text-[0.65rem] uppercase tracking-[0.28em] text-primary">
          Tecnologia & Educação
        </span>
      </span>
    </span>
  );
}