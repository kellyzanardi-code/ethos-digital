/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ACTIVE_OFFER_ID?: string;
  readonly VITE_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  fbq?: (...args: unknown[]) => void;
}
