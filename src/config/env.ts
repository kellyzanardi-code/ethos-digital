// src/config/env.ts
// Variáveis de ambiente lidas no build (Vite).
// Configure as mesmas chaves na Cloudflare Pages → Settings → Environment variables.

export const env = {
  /** Link do checkout vigente (ex.: Kiwify). Sobrescreve os fallbacks do curso/oferta. */
  checkoutUrl: (import.meta.env.VITE_CHECKOUT_URL as string | undefined)?.trim() || undefined,
  /** Id/slug da oferta ativa cadastrada em courses.ts (ex.: "lancamento"). */
  activeOfferId: (import.meta.env.VITE_ACTIVE_OFFER_ID as string | undefined)?.trim() || undefined,
};
