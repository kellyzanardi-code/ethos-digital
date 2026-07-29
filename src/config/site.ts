// Configure os canais de contato reais da Ethos Cursos aqui.
// Deixe como está enquanto os dados oficiais não estiverem definidos.
export const siteConfig = {
  name: "Ethos Cursos",
  // Ex.: "5511999999999" (somente números, com DDI e DDD)
  whatsappNumber: "", // TODO: preencher
  email: "", // TODO: preencher (ex.: contato@ethoscursos.com.br)
  phoneLabel: "Telefone a definir",
  social: {
    instagram: "", // TODO
    linkedin: "", // TODO
    youtube: "", // TODO
  },
} as const;

export const whatsappLink = siteConfig.whatsappNumber
  ? `https://wa.me/${siteConfig.whatsappNumber}`
  : "#contato";