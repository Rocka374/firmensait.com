import { IndustryPageContent } from "./types";
export const saitZaRemontniDeynosti: IndustryPageContent = {
  title: "Сайт за ремонтни дейности",
  slug: "sait-za-remontni-deynosti",
  href: "/sait-za-remontni-deynosti",
  menuLabel: "Ремонти",
  icon: "Hammer",
  shortDescription: "Майсторска уеб визия за вашите ремонтни услуги.",
  metaTitle: "Изработка на сайт за ремонти | Firmensait.com",
  metaDescription: "Професионален сайт за майстори.",
  h1: "Сайт за ремонтни дейности",
  subtitle: "Вашият опит заслужава професионално представяне.",
  heroImage: { src: "/images/portfolio/сайт за ремонтни услуги.webp", alt: "Hero сайт за ремонти" },
  portfolioImages: [
    { src: "/images/portfolio/ремонтти24 готов сайт за ремонти.webp", alt: "Проект Ремонтти24" },
    { src: "/images/portfolio/майстор дом готов сайт за ремонти.webp", alt: "Проект Майстор Дом" },
    { src: "/images/portfolio/fixpoint готов сайт за ремонти.webp", alt: "Проект Fixpoint" }
  ],
  intro: "Placeholder текст.",
  specificFeatures: {
    title: "Специфични функции за ремонтни услуги",
    description: "Докажете качеството на вашата работа.",
    items: [
      { title: "Видове ремонти", text: "Разбивка по дейности - ВиК, Ел, довършителни.", icon: "Hammer" },
      { title: "Преди и след", text: "Визуално доказателство за качеството на проектите.", icon: "Camera" },
      { title: "Заявка за оглед", text: "Форма за запитване за оглед и оферта.", icon: "Search" },
      { title: "Райони", text: "Къде извършвате вашите услуги.", icon: "Map" }
    ]
  },
  sections: [{ h2: "Услуги", paragraphs: ["Placeholder."] }],
  benefits: [{ title: "Качество", text: "Доказани проекти." }],
  faq: [{ q: "Има ли цени?", a: "Да." }],
  relatedIndustries: ["sait-za-avtoserviz"]
};