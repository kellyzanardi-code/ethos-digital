import { createFileRoute } from "@tanstack/react-router";
import { CourseSalesPage } from "@/components/course/CourseSalesPage";
import { getCourseBySlug } from "@/config/courses";

export const Route = createFileRoute("/curso/$slug")({
  component: CoursePage,
  head: ({ params }) => {
    const course = getCourseBySlug(params.slug);
    if (!course) return { meta: [] };
    return {
      meta: [
        { title: course.meta.title },
        { name: "description", content: course.meta.description },
        { property: "og:title", content: course.meta.title },
        { property: "og:description", content: course.meta.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
});

function CoursePage() {
  const { slug } = Route.useParams();
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <div className="surface-navy flex min-h-screen items-center justify-center px-5">
        <div className="max-w-md text-center">
          <h1 className="font-display text-2xl font-bold tracking-tight text-navy-foreground">
            Curso não encontrado
          </h1>
          <a href="/" className="mt-6 inline-flex text-sm font-medium text-primary hover:underline">
            Voltar para o site da Ethos Cursos
          </a>
        </div>
      </div>
    );
  }

  if (course.status === "coming-soon") {
    return (
      <div className="surface-navy flex min-h-screen items-center justify-center px-5">
        <div className="max-w-md text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Em breve
          </span>
          <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-navy-foreground">
            {course.name}
          </h1>
          <p className="mt-4 text-navy-foreground/70">{course.description}</p>
          <a href="/" className="mt-8 inline-flex text-sm font-medium text-primary hover:underline">
            Voltar para o site da Ethos Cursos
          </a>
        </div>
      </div>
    );
  }

  return <CourseSalesPage course={course} />;
}
