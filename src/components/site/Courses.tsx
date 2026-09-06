import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SectionHeading, actionVariants } from "./primitives";
import { Checkbox } from "@/components/ui/checkbox";
import { submitLead } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { courses, type Course } from "@/config/courses";

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function NotifyForm({ course, onDone }: { course: string; onDone: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [consent, setConsent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const website = String(data.get("website") ?? "").trim();
    const websiteTimestamp = String(data.get("website_timestamp") ?? "").trim();

    if (website || websiteTimestamp) {
      toast.error("Envio bloqueado por segurança.");
      return;
    }

    if (name.trim().length < 2 || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      toast.error("Preencha um nome e um e-mail válidos.");
      return;
    }
    if (!consent) {
      toast.error("Aceite o consentimento para continuar.");
      return;
    }
    void submitLead({
      name: name.trim(),
      businessName: undefined,
      email: email.trim(),
      phone: whatsapp.trim(),
      helpType: `Cursos`,
      message: `Tenho interesse em inscrever-me no curso: ${course}`,
    })
      .then(() => {
        toast.success("Inscrição registrada. Avisaremos assim que o curso abrir.");
        onDone();
      })
      .catch((error: unknown) => {
        console.error(error);
        toast.error("Não foi possível registrar sua inscrição agora. Tente novamente.");
      });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div>
        <label htmlFor={`nome-${course}`} className="mb-1.5 block text-sm font-medium text-navy">
          Nome
        </label>
        <input
          id={`nome-${course}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          required
          className="h-11 w-full rounded-md border border-input bg-background px-3.5 text-sm outline-none focus-visible:border-primary"
        />
      </div>
      <div>
        <label htmlFor={`email-${course}`} className="mb-1.5 block text-sm font-medium text-navy">
          E-mail
        </label>
        <input
          id={`email-${course}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={255}
          required
          className="h-11 w-full rounded-md border border-input bg-background px-3.5 text-sm outline-none focus-visible:border-primary"
        />
      </div>
      <div>
        <label
          htmlFor={`whatsapp-${course}`}
          className="mb-1.5 block text-sm font-medium text-navy"
        >
          WhatsApp
        </label>
        <input
          id={`whatsapp-${course}`}
          type="tel"
          value={whatsapp}
          onChange={(event) => setWhatsapp(formatPhone(event.target.value))}
          maxLength={15}
          placeholder="(11) 99999-9999"
          className="h-11 w-full rounded-md border border-input bg-background px-3.5 text-sm outline-none focus-visible:border-primary"
        />
      </div>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`website-${course}`} className="sr-only">
          Website
        </label>
        <input
          id={`website-${course}`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
        <input name="website_timestamp" type="hidden" value="" />
      </div>
      <div className="flex items-start gap-3">
        <Checkbox
          id={`consentimento-${course}`}
          checked={consent}
          onCheckedChange={(checked) => setConsent(checked === true)}
        />
        <label
          htmlFor={`consentimento-${course}`}
          className="text-xs leading-relaxed text-muted-foreground"
        >
          Autorizo o uso do meu nome e e-mail para receber informações sobre este curso.
        </label>
      </div>
      <button type="submit" className={actionVariants({ size: "lg" }) + " w-full"}>
        Quero ser avisado
      </button>
    </form>
  );
}

function CourseCard({ course }: { course: Course }) {
  const [open, setOpen] = useState(false);
  const isAvailable = course.status === "available";

  const badge = (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em]",
        isAvailable ? "bg-primary/15 text-primary" : "bg-gold/20 text-navy",
      )}
    >
      {isAvailable ? "Matrículas abertas" : "Em breve"}
    </span>
  );

  const title = <h3 className="mt-5 text-lg font-bold leading-snug text-navy">{course.name}</h3>;

  const text = (
    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
      {course.description}
    </p>
  );

  return (
    <article className="flex flex-col rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      {isAvailable ? (
        <Link to="/curso/$slug" params={{ slug: course.slug }} className="flex h-full flex-col">
          {badge}
          {title}
          {text}
          <span className={actionVariants({ size: "md" }) + " mt-7 w-full"}>
            Ver página do curso
            <ArrowRight size={16} aria-hidden="true" />
          </span>
        </Link>
      ) : (
        <>
          {badge}
          {title}
          {text}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className={actionVariants({ variant: "outlineDark" }) + " mt-7 w-full"}>
              Avise-me
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-navy">Avise-me sobre este curso</DialogTitle>
                <DialogDescription>{course.name}</DialogDescription>
              </DialogHeader>
              <NotifyForm course={course.name} onDone={() => setOpen(false)} />
            </DialogContent>
          </Dialog>
        </>
      )}
    </article>
  );
}

export function Courses() {
  return (
    <section id="cursos" className="bg-secondary py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Educação"
          title="Cursos práticos de tecnologia"
          description="A Ethos Cursos está preparando cursos práticos, pensados para ajudar iniciantes a construir bases sólidas em programação e desenvolvimento web."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
