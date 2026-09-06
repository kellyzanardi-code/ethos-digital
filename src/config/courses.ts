// src/config/courses.ts
// Cadastro central dos cursos da Ethos Cursos.
// Fonte única de verdade para os cards do site e para as páginas de venda.
// Para criar a página de um novo curso: adicione um objeto nesta lista
// com status "available" e a rota /curso/:slug passa a funcionar.

export type CourseStatus = "available" | "coming-soon";

export interface CourseModule {
  title: string;
  description: string;
}

export interface CourseCard {
  title: string;
  description: string;
}

export interface CourseFaqItem {
  question: string;
  answer: string;
}

export interface Course {
  /** Identificador usado na URL: /curso/:slug */
  slug: string;
  /** Nome do curso (usado em título e metadados) */
  name: string;
  /** "available" = tem página de venda no ar | "coming-soon" = em preparação */
  status: CourseStatus;
  /** Selo exibido no topo do hero (ex.: "Curso 100% online") */
  badge: string;
  /** Título principal do hero */
  headline: string;
  /** Subtítulo / descrição curta (também usada no card do site) */
  description: string;
  /** Link do checkout (Kiwify ou outro gateway) — obrigatório quando available */
  checkoutUrl?: string;
  /** Texto do botão de compra (padrão: "Garantir minha vaga") */
  ctaLabel?: string;
  /** Itens de confiança exibidos no hero */
  trustItems: string[];
  /** Seção "Para quem é o curso" */
  audience: CourseCard[];
  /** Seção "O que você vai aprender" */
  modules: CourseModule[];
  /** Seção de diferenciais */
  highlights: CourseCard[];
  /** Perguntas frequentes */
  faq: CourseFaqItem[];
  /** Metadados de SEO */
  meta: { title: string; description: string };
}

export const courses: Course[] = [
  {
    slug: "logica-algoritmos",
    name: "Lógica de Programação e Algoritmos",
    status: "available",
    badge: "Curso 100% online",
    headline: "Lógica de Programação e Algoritmos",
    description:
      "Aprenda a pensar de forma lógica, resolver problemas e construir a base necessária para se tornar uma pessoa desenvolvedora confiante.",
    checkoutUrl: "https://pay.kiwify.com.br/FT9By55",
    ctaLabel: "Garantir minha vaga",
    trustItems: [
      "Acesso vitalício",
      "Certificado de conclusão",
      "Suporte direto com o professor",
      "Garantia incondicional de 7 dias",
    ],
    audience: [
      {
        title: "Quem nunca programou",
        description:
          "Se você está começando do absoluto zero, este é o ponto de partida certo: sem termos complicados, no seu ritmo.",
      },
      {
        title: "Estudantes",
        description:
          "Precisa de uma base sólida em raciocínio lógico para avançar nos estudos de tecnologia sem travar.",
      },
      {
        title: "Migração de carreira",
        description:
          "Quer entrar na área de tecnologia e precisa construir alicerces fortes antes de aprender qualquer linguagem.",
      },
      {
        title: "Futuros desenvolvedores",
        description:
          "Vai estudar desenvolvimento web, JavaScript, Java ou outras linguagens e quer chegar preparado(a).",
      },
    ],
    modules: [
      {
        title: "Pensamento Computacional",
        description:
          "Desenvolva o raciocínio lógico para enxergar problemas como sequências de passos solucionáveis.",
      },
      {
        title: "Algoritmos",
        description:
          "Entenda o que são algoritmos e aprenda a criar sequências claras de instruções para resolver problemas do dia a dia.",
      },
      {
        title: "Variáveis",
        description:
          "Aprenda a armazenar e organizar dados, conhecer os tipos de informação e nomear tudo com clareza.",
      },
      {
        title: "Estruturas Condicionais",
        description:
          "Controle o fluxo do seu algoritmo com as decisões em português: se, senão se e senão.",
      },
      {
        title: "Estruturas de Repetição",
        description:
          "Automatize tarefas repetitivas com as estruturas em português: para, enquanto e repita.",
      },
      {
        title: "Exercícios e Desafios",
        description:
          "Pratique com exercícios progressivos e desafios comentados para fixar cada conceito na prática.",
      },
    ],
    highlights: [
      {
        title: "Professor com 20+ anos de TI",
        description:
          "Aulas conduzidas por um professor de Tecnologia da Informação e Arquiteto de Sistemas com mais de duas décadas de experiência.",
      },
      {
        title: "Aprendizado prático",
        description:
          "Exercícios e desafios reais desde a primeira aula — você aprende fazendo, não só assistindo.",
      },
      {
        title: "Didática clara",
        description:
          "Linguagem simples e acolhedora para quem está começando, sem jargões desnecessários.",
      },
      {
        title: "Base para qualquer linguagem",
        description:
          "O que você aprende aqui vale para JavaScript, Java, Python e qualquer outra linguagem que escolher depois.",
      },
    ],
    faq: [
      {
        question: "Nunca programei na vida. Consigo acompanhar?",
        answer:
          "Sim! O curso foi desenhado exatamente para iniciantes absolutos. Você começa pelo raciocínio lógico e avança passo a passo, sem precisar de nenhum conhecimento prévio.",
      },
      {
        question: "Como recebo o acesso ao curso?",
        answer:
          "Assim que o pagamento for confirmado na Kiwify, você recebe o acesso por e-mail e já pode começar a estudar na hora, em qualquer dispositivo.",
      },
      {
        question: "O curso emite certificado?",
        answer:
          "Sim. Ao concluir o curso, você recebe um certificado de conclusão para enriquecer seu currículo e seu portfólio.",
      },
      {
        question: "Por quanto tempo tenho acesso?",
        answer:
          "O acesso é vitalício. Você estuda no seu ritmo e pode revisar o conteúdo sempre que quiser, inclusive após atualizações futuras.",
      },
      {
        question: "E se eu não gostar do curso?",
        answer:
          "Você tem 7 dias de garantia incondicional: se sentir que não é para você, basta solicitar o reembolso na Kiwify e devolvemos 100% do valor.",
      },
    ],
    meta: {
      title: "Lógica de Programação e Algoritmos — Ethos Cursos",
      description:
        "Curso online de Lógica de Programação e Algoritmos: aprenda a pensar de forma lógica, resolver problemas e construir a base para se tornar uma pessoa desenvolvedora. Acesso vitalício e certificado.",
    },
  },
  {
    slug: "html-css",
    name: "Introdução ao Desenvolvimento Web com HTML e CSS",
    status: "coming-soon",
    badge: "Em breve",
    headline: "Introdução ao Desenvolvimento Web com HTML e CSS",
    description:
      "Entenda a estrutura e a apresentação visual por trás dos sites modernos utilizando HTML e CSS.",
    trustItems: [],
    audience: [],
    modules: [],
    highlights: [],
    faq: [],
    meta: {
      title: "Introdução ao Desenvolvimento Web — Ethos Cursos",
      description:
        "Curso de HTML e CSS da Ethos Cursos: entenda a estrutura e a apresentação visual por trás dos sites modernos.",
    },
  },
  {
    slug: "javascript",
    name: "JavaScript Aplicado ao Desenvolvimento Web",
    status: "coming-soon",
    badge: "Em breve",
    headline: "JavaScript Aplicado ao Desenvolvimento Web",
    description:
      "Adicione interatividade, comportamento e funcionalidade real às páginas web com JavaScript.",
    trustItems: [],
    audience: [],
    modules: [],
    highlights: [],
    faq: [],
    meta: {
      title: "JavaScript Aplicado ao Desenvolvimento Web — Ethos Cursos",
      description:
        "Curso de JavaScript da Ethos Cursos: adicione interatividade e funcionalidade real às páginas web.",
    },
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
