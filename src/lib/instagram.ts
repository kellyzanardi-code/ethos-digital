import { createServerFn } from "@tanstack/react-start";
// Se o seu projeto usar outro pacote, ajuste para "@tanstack/react-start"

export type InstagramPost = {
  id: string;
  caption: string | null;
  mediaType: string;
  mediaUrl: string;
  permalink: string;
  thumbnailUrl: string | null;
  timestamp: string;
};

const CACHE_TTL_MS = 1000 * 60 * 60; // 1 hora
let cache: { posts: InstagramPost[]; fetchedAt: number } | null = null;

export const getInstagramPosts = createServerFn({ method: "GET" }).handler(async () => {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return { posts: [] as InstagramPost[], configured: false };

  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
    return { posts: cache.posts, configured: true };
  }

  const url =
    "https://graph.instagram.com/v26.0/me/media" +
    "?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp" +
    "&limit=8&access_token=" +
    encodeURIComponent(token);

  const response = await fetch(url);

  if (!response.ok) {
    // Token expirado ou falha: usa o cache antigo, se existir
    if (cache) return { posts: cache.posts, configured: true };
    return { posts: [] as InstagramPost[], configured: true };
  }

  const data = (await response.json()) as {
    data: Array<{
      id: string;
      caption?: string;
      media_type: string;
      media_url: string;
      permalink: string;
      thumbnail_url?: string;
      timestamp: string;
    }>;
  };

  const posts: InstagramPost[] = data.data.map((item) => ({
    id: item.id,
    caption: item.caption ?? null,
    mediaType: item.media_type,
    mediaUrl: item.media_url,
    permalink: item.permalink,
    thumbnailUrl: item.thumbnail_url ?? null,
    timestamp: item.timestamp,
  }));

  cache = { posts, fetchedAt: Date.now() };
  return { posts, configured: true };
});
