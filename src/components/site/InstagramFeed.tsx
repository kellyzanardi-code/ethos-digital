import { useQuery } from "@tanstack/react-query";
import { Instagram } from "lucide-react";
import { ActionLink, SectionHeading } from "./primitives";
import { siteConfig } from "@/config/site";
import { getInstagramPosts } from "@/lib/instagram";

export function InstagramFeed() {
  const { data, isLoading } = useQuery({
    queryKey: ["instagram-posts"],
    queryFn: () => getInstagramPosts(),
    staleTime: 1000 * 60 * 30,
  });

  const posts = data?.posts ?? [];

  // Sem token configurado ou sem posts: a seção nem aparece
  if (!isLoading && posts.length === 0) return null;

  return (
    <section id="instagram" className="bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Instagram"
          title="Acompanhe a Ethos no Instagram"
          description="Conteúdo estratégico, bastidores e novidades — direto do nosso perfil."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="aspect-square animate-pulse rounded-lg bg-secondary" />
              ))
            : posts.map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block overflow-hidden rounded-lg border border-border bg-card"
                >
                  <img
                    src={post.thumbnailUrl ?? post.mediaUrl}
                    alt={post.caption?.slice(0, 100) ?? "Post do Instagram da Ethos Cursos"}
                    className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-end bg-navy/60 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="line-clamp-3 text-xs leading-relaxed text-navy-foreground">
                      {post.caption ?? "Ver no Instagram"}
                    </p>
                  </div>
                </a>
              ))}
        </div>

        <div className="mt-10 text-center">
          <ActionLink
            href={siteConfig.social.instagram || "#contato"}
            target="_blank"
            rel="noreferrer"
            size="lg"
          >
            <Instagram size={18} aria-hidden="true" />
            Seguir no Instagram
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
