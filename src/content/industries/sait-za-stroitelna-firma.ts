import { IndustryPageContent } from "./types";
export const saitZaStroitelnaFirma: IndustryPageContent = {
  title: "Сайт за строителна фирма",
  slug: "sait-za-stroitelna-firma",
  href: "/sait-za-stroitelna-firma",
  menuLabel: "Строителство",
  icon: "HardHat",
  shortDescription: "Солидно онлайн присъствие за строителни проекти.",
  metaTitle: "Изработка на сайт за строителна фирма | Firmensait.com",
  metaDescription: "Професионален сайт за строителство.",
  h1: "Сайт за строителна фирма",
  subtitle: "Изградете бъдещето с професионален строителен сайт.",
  heroImage: { src: "/images/portfolio/сайт за строителна фирма.webp", alt: "Hero сайт за строителство" },
  portfolioImages: [
    { src: "/images/portfolio/urban structure готов сайт за строителна фирма.webp", alt: "Проект Urban Structure" },
    { src: "/images/portfolio/stroi proekt готов сайт за строителна фирма.webp", alt: "Проект Stroi Proekt" },
    { src: "/images/portfolio/monolit build готов сайт за строителна фирма.webp", alt: "Проект Monolit Build" }
  ],
  intro: "Placeholder текст.",
  specificFeatures: {
    title: "Специфични функции за строителна фирма",
    description: "Покажете мащаба и опита си.",
    items: [
      { title: "Строителни услуги", text: "Груб строеж, проектиране, ключ.", icon: "HardHat" },
      { title: "Обекти", text: "Секция със завършени и текущи проекти.", icon: "Building2" },
      { title: "Консултация", text: "Форма за запитване за бъдещ проект.", icon: "MessageSquare" },
      { title: "Екип", text: "Професионалистите зад вашата работа.", icon: "Users" }
    ]
  },
  sections: [{ h2: "Проекти", paragraphs: ["Placeholder."] }],
  benefits: [{ title: "Мащаб", text: "Покажете възможностите си." }],
  faq: [{ q: "Има ли лицензи?", a: "Възможно е." }],
  relatedIndustries: ["sait-za-nedvizhimi-imoti"]
};