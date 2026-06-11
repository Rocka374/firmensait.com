"use client";

import { IndustryPageContent } from "./types";

export const saitZaKashtaZaGosti: IndustryPageContent = {
  title: "Сайт за къща за гости",
  slug: "sait-za-kashta-za-gosti",
  href: "/sait-za-kashta-za-gosti",
  menuLabel: "Къща за гости",
  icon: "Palmtree",
  shortDescription: "Уютно представяне на вашата къща за гости.",
  metaTitle: "Изработка на сайт за къща за гости | Firmensait.com",
  metaDescription: "Професионален сайт за къща за гости.",
  h1: "Сайт за къща за гости",
  subtitle: "Покажете гостоприемството си с красив сайт.",
  heroImage: { src: "/images/portfolio/сайт за къща за гости.webp", alt: "Hero къща" },
  portfolioImages: [
    { src: "/images/portfolio/pine nest готов сайт за къща за гости.webp", alt: "Проект Pine Nest" },
    { src: "/images/portfolio/casa laguna готов сайт за къща за гости.webp", alt: "Проект Casa Laguna" },
    { src: "/images/portfolio/bela dvor готов сайт за къща за гости.webp", alt: "Проект Bela Dvor" }
  ],
  intro: "Вашата къща за гости заслужава професионално онлайн присъствие.",
  specificFeatures: {
    title: "Специфични функции за къща за гости",
    description: "Всичко, за да се почувстват гостите ви като у дома си.",
    items: [
      { title: "Стаи и удобства", text: "Детайлно описание на капацитета и обзавеждането.", icon: "Palmtree" },
      { title: "Галерия", text: "Визуално представяне на обекта и околността.", icon: "Camera" },
      { title: "Запитване", text: "Лесен начин за проверка на свободни дати.", icon: "Calendar" },
      { title: "Локация", text: "Указания как да стигнат гостите до вас.", icon: "Map" }
    ]
  },
  sections: [{ h2: "Удобства", paragraphs: ["Тук ще бъде добавен подробен текст за предимствата на вашата къща за гости."] }],
  benefits: [{ title: "Видимост", text: "Лесно намиране от нови туристи." }],
  faq: [{ q: "Има ли карта?", a: "Да, включваме Google Maps локация." }],
  relatedIndustries: ["sait-za-hotel"]
};