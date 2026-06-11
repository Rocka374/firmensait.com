import { IndustryPageContent } from "./types";
export const saitZaKafetaria: IndustryPageContent = {
  title: "Сайт за кафетария",
  slug: "sait-za-kafetaria",
  href: "/sait-za-kafetaria",
  menuLabel: "Кафетария",
  icon: "Coffee",
  shortDescription: "Уютна уеб визия за вашето кафене.",
  metaTitle: "Изработка на сайт за кафетария | Firmensait.com",
  metaDescription: "Професионален сайт за кафетария.",
  h1: "Сайт за кафетария",
  subtitle: "Споделете аромата на вашия бизнес онлайн.",
  heroImage: { src: "/images/portfolio/сайт за кафетария.webp", alt: "Hero кафе" },
  portfolioImages: [
    { src: "/images/portfolio/nero готов сайт за кафетария.webp", alt: "Проект Nero" },
    { src: "/images/portfolio/lumiere готов сайт за кафетария.webp", alt: "Проект Lumiere" },
    { src: "/images/portfolio/aurora готов сайт за кафетария.webp", alt: "Проект Aurora" }
  ],
  intro: "Placeholder.",
  specificFeatures: {
    title: "Специфични функции за кафетария",
    description: "Всичко необходимо за едно уютно онлайн присъствие.",
    items: [
      { title: "Меню с напитки", text: "Представяне на селекцията кафе, десерти и закуски.", icon: "Coffee" },
      { title: "Атмосфера", text: "Галерия със снимки от интериора на вашето кафене.", icon: "Camera" },
      { title: "Работно време", text: "Ясна информация кога клиентите могат да ви посетят.", icon: "Clock" },
      { title: "Локация", text: "Интегрирана карта за лесно намиране на мястото.", icon: "Map" }
    ]
  },
  sections: [{ h2: "Меню", paragraphs: ["Placeholder."] }],
  benefits: [{ title: "Стил", text: "Модерен." }],
  faq: [{ q: "Има ли карта?", a: "Да." }],
  relatedIndustries: ["sait-za-restorant"]
};