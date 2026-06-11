import { IndustryPageContent } from "./types";
export const saitZaAvtoserviz: IndustryPageContent = {
  title: "Сайт за автосервиз",
  slug: "sait-za-avtoserviz",
  href: "/sait-za-avtoserviz",
  menuLabel: "Автосервиз",
  icon: "Car",
  shortDescription: "Бърз и надежден сайт за вашия автосервиз.",
  metaTitle: "Изработка на сайт за автосервиз | Firmensait.com",
  metaDescription: "Професионален сайт за сервиз и диагностика.",
  h1: "Сайт за автосервиз",
  subtitle: "Привлечете повече шофьори с модерен сервизен сайт.",
  heroImage: { src: "/images/portfolio/сайт за авто сервиз.webp", alt: "Hero сайт за автосервиз" },
  portfolioImages: [
    { src: "/images/portfolio/Pit stop auto готов сайт за авто сервиз.webp", alt: "Проект Pit Stop Auto" },
    { src: "/images/portfolio/garage 24 готов сайт за сервиз.webp", alt: "Проект Garage 24" },
    { src: "/images/portfolio/майстор сервиз готов сайт за сервиз.webp", alt: "Проект Майстор Сервиз" }
  ],
  intro: "Placeholder текст.",
  specificFeatures: {
    title: "Специфични функции за автосервиз",
    description: "Всичко необходимо за доверието на шофьорите.",
    items: [
      { title: "Авто услуги", text: "Диагностика, ремонт, смяна на консумативи.", icon: "Car" },
      { title: "Запитване", text: "Бърза връзка за консултация или час.", icon: "MessageSquare" },
      { title: "Работно време", text: "Ясна информация кога сте на разположение.", icon: "Clock" },
      { title: "Контакт", text: "Локация и телефон за спешни случаи.", icon: "Phone" }
    ]
  },
  sections: [{ h2: "Услуги", paragraphs: ["Placeholder."] }],
  benefits: [{ title: "Локация", text: "Лесно намиране." }],
  faq: [{ q: "Има ли цени?", a: "Да." }],
  relatedIndustries: ["sait-za-remontni-deynosti"]
};