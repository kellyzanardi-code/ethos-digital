// src/config/env.ts
// Variáveis de ambiente lidas no build (Vite).
// Configure as mesmas chaves na Cloudflare Pages → Settings → Environment variables.
export const env = {
  /** Id/slug da oferta ativa cadastrada em courses.ts (ex.: "lancamento"). */
  activeOfferId: (import.meta.env.VITE_ACTIVE_OFFER_ID as string | undefined)?.trim() || undefined,
};
