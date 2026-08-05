// Configure os canais de contato reais da Ethos Cursos aqui.
// Deixe como está enquanto os dados oficiais não estiverem definidos.
export const siteConfig = {
  name: "Ethos Cursos",
  // Ex.: "5511999999999" (somente números, com DDI e DDD)
  whatsappNumber: "5511970570281",
  whatsappShortLink: "https://wa.me/message/GZTIWLGET7PQG1",
  email: "ethoscursos.ead@gmail.com",
  phoneLabel: "Telefone a definir",
  social: {
    instagram: "https://www.instagram.com/ethoscursos.ead",
    facebook: "https://www.facebook.com/ethoscursos",
    youtube: "https://www.youtube.com/@ethoscursos",
  },
} as const;

export const whatsappLink = siteConfig.whatsappShortLink
  ? siteConfig.whatsappShortLink
  : siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}`
    : "#contato";
