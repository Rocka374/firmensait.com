import { IndustryPageContent } from "./types";
export const saitZaHotel: IndustryPageContent = {
  title: "Сайт за хотел",
  slug: "sait-za-hotel",
  href: "/sait-za-hotel",
  menuLabel: "Хотел",
  icon: "Building",
  shortDescription: "Представяне на вашия хотел.",
  metaTitle: "Изработка на сайт за хотел | Firmensait.com",
  metaDescription: "Професионален сайт за хотел.",
  h1: "Сайт за хотел",
  subtitle: "Привлечете повече гости.",
  heroImage: { src: "/images/portfolio/сайт за хотел.webp", alt: "Hero хотел" },
  portfolioImages: [
    { src: "/images/portfolio/pine peak готов сайт за хотел.webp", alt: "Проект Pine Peak" },
    { src: "/images/portfolio/grand lumen готов сайт за хотел.webp", alt: "Проект Grand Lumen" },
    { src: "/images/portfolio/aurelia coast готов сайт за хотел.webp", alt: "Проект Aurelia Coast" }
  ],
  intro: "Placeholder.",
  specificFeatures: {
    title: "Специфични функции за сайт за хотел",
    description: "Покажете удобствата и гостоприемството си.",
    items: [
      { title: "Стаи и удобства", text: "Отделни блокове за различните типове настаняване.", icon: "Building" },
      { title: "Запитване", text: "Ясна форма за проверка на свободни места.", icon: "Calendar" },
      { title: "Галерия", text: "Висококачествени снимки от обекта и ресторанта.", icon: "Camera" },
      { title: "Локация", text: "Карта и информация за близки забележителности.", icon: "Map" }
    ]
  },
  sections: [{ h2: "Стаи", paragraphs: ["Placeholder."] }],
  benefits: [{ title: "Резервации", text: "Контакт." }],
  faq: [{ q: "Има ли карта?", a: "Да." }],
  relatedIndustries: ["sait-za-restorant", "sait-za-kashta-za-gosti"]
};