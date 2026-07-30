// Configure os canais de contato reais da Ethos Cursos aqui.
// Deixe como está enquanto os dados oficiais não estiverem definidos.
export const siteConfig = {
  name: "Ethos Cursos",
  // Ex.: "5511999999999" (somente números, com DDI e DDD)
  whatsappNumber: "5511970570281",
  email: "ethoscursos.ead@gmail.com",
  phoneLabel: "Telefone a definir",
  social: {
    instagram: "https://www.instagram.com/ethoscursos.ead",
    facebook: "https://www.facebook.com/profile.php?id=61562790657936",
    youtube: "https://www.youtube.com/@ethoscursos",
  },
} as const;

export const whatsappLink = siteConfig.whatsappNumber
  ? `https://wa.me/${siteConfig.whatsappNumber}`
  : "#contato";
