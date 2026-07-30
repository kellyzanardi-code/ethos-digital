import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SectionHeading, actionVariants } from "./primitives";

const courses = [
  {
    title: "Lógica de programação e algoritmos",
    text: "Aprenda a pensar de forma lógica, resolver problemas e construir a base necessária para se tornar uma pessoa desenvolvedora confiante.",
  },
  {
    title: "Introdução ao desenvolvimento web com HTML e CSS",
    text: "Entenda a estrutura e a apresentação visual por trás dos sites modernos utilizando HTML e CSS.",
  },
  {
    title: "JavaScript aplicado ao desenvolvimento web",
    text: "Adicione interatividade, comportamento e funcionalidade real às páginas web com JavaScript.",
  },
];

function NotifyForm({ course, onDone }: { course: string; onDone: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (name.trim().length < 2 || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      toast.error("Preencha um nome e um e-mail válidos.");
      return;
    }
    toast.success("Inscrição registrada. Avisaremos assim que o curso abrir.");
    onDone();
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
      <button type="submit" className={actionVariants({ size: "lg" }) + " w-full"}>
        Quero ser avisado
      </button>
    </form>
  );
}

function CourseCard({ title, text }: { title: string; text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex flex-col rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy">
        Em breve
      </span>
      <h3 className="mt-5 text-lg font-bold leading-snug text-navy">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className={actionVariants({ variant: "outlineDark" }) + " mt-7 w-full"}>
          Avise-me
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-navy">Avise-me sobre este curso</DialogTitle>
            <DialogDescription>{title}</DialogDescription>
          </DialogHeader>
          <NotifyForm course={title} onDone={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
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
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
