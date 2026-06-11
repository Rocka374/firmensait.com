import { IndustryPageContent } from "./types";
export const saitZaRestorant: IndustryPageContent = {
  title: "Сайт за ресторант",
  slug: "sait-za-restorant",
  href: "/sait-za-restorant",
  menuLabel: "Ресторант",
  icon: "Utensils",
  shortDescription: "Дигитално меню и резервации за вашия ресторант.",
  metaTitle: "Изработка на сайт за ресторант | Firmensait.com",
  metaDescription: "Професионален сайт за ресторант със страници за меню и галерия.",
  h1: "Сайт за ресторант",
  subtitle: "Привлечете повече гости с апетитно представяне на вашето меню.",
  heroImage: { src: "/images/portfolio/сайт за ресторант.webp", alt: "Hero сайт за ресторант" },
  portfolioImages: [
    { src: "/images/portfolio/verde oro готов сайт за ресторант.webp", alt: "Проект Verde Oro" },
    { src: "/images/portfolio/atelier blanc готов сайт за ресторант.webp", alt: "Проект Atelier Blanc" },
    { src: "/images/portfolio/casa nuvola изработка на сайт за ресторант.webp", alt: "Проект Casa Nuvola" }
  ],
  intro: "Вашият ресторант има нужда от дигитален дом.",
  specificFeatures: {
    title: "Специфични функции за сайт за ресторант",
    description: "Всичко необходимо, за да превърнете гладните посетители в редовни гости.",
    items: [
      { title: "Меню с категории", text: "Подредено представяне на храни, напитки и цени.", icon: "Utensils" },
      { title: "Резервации", text: "Бърза форма за запитване за свободна маса.", icon: "CalendarCheck" },
      { title: "Галерия и атмосфера", text: "Снимки от интериора и най-добрите ви ястия.", icon: "Images" },
      { title: "Локация и време", text: "Карта и информация кога заведението е отворено.", icon: "MapPin" }
    ]
  },
  sections: [{ h2: "Меню", paragraphs: ["Placeholder текст."] }],
  benefits: [{ title: "Визия", text: "Апетитен дизайн." }],
  faq: [{ q: "Има ли карта?", a: "Да." }],
  relatedIndustries: ["sait-za-kafetaria", "sait-za-hotel"]
};