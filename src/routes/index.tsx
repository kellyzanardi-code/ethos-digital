import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Value } from "@/components/site/Value";
import { Process } from "@/components/site/Process";
import { Courses } from "@/components/site/Courses";
import { About } from "@/components/site/About";
import { Trust } from "@/components/site/Trust";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Ethos Cursos — Sites profissionais e conteúdo estratégico";
const description =
  "Sites profissionais, conteúdo estratégico para redes sociais e cursos práticos de tecnologia para tornar seu negócio mais visível e competitivo.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Ethos Cursos",
          description,
          url: "/",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Value />
        <Process />
        <Courses />
        <About />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
