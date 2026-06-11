import { 
  Smartphone, 
  Search, 
  Layers, 
  Layout, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Link as LinkIcon, 
  FileText, 
  AlignLeft,
  Send,
  MessageSquare,
  Code,
  Rocket
} from "lucide-react";

export const sharedFeatures = [
  { title: "Модерен дизайн", text: "Индивидуална визия, съобразена с вашия бранш.", icon: Layout },
  { title: "Мобилна версия", text: "Сайтът изглежда перфектно на телефон и таблет.", icon: Smartphone },
  { title: "Страници за услуги", text: "Отделна страница за всяка ваша дейност за по-добро SEO.", icon: Layers },
  { title: "Контактна форма", text: "Лесен начин за клиентите да ви изпратят запитване.", icon: MessageSquare },
  { title: "Бързо зареждане", text: "Оптимизация за светкавична скорост на всички страници.", icon: Zap },
  { title: "SEO структура", text: "Правилно подредени заглавия и мета данни.", icon: Search },
  { title: "Публикуване", text: "Пълна подготовка и качване на сайта онлайн.", icon: Globe },
];

export const sharedSEO = [
  { title: "H1–H3 структура", text: "Йерархия на заглавията за по-добро разбиране от Google.", icon: AlignLeft },
  { title: "Мета данни", text: "Уникални заглавия и описания за всяка отделна страница.", icon: FileText },
  { title: "Чист URL адрес", text: "Лесни за четене адреси от типа /usluga-1.", icon: LinkIcon },
  { title: "Бързо зареждане", text: "Оптимизация на кода и изображенията за скорост.", icon: Zap },
  { title: "Мобилно SEO", text: "Пълна съвместимост с изискванията на Google за мобилни.", icon: Smartphone },
  { title: "Сигурност", text: "Интегриран SSL сертификат за защитена връзка.", icon: ShieldCheck },
];

export const sharedProcess = [
  { title: "Запитване", description: "Свързвате се с нас.", icon: Send },
  { title: "Нужди", description: "Обсъждаме услугите.", icon: MessageSquare },
  { title: "Структура", description: "Планиране на страниците.", icon: Layers },
  { title: "Изработка", description: "Създаваме дизайна.", icon: Code },
  { title: "Публикуване", description: "Сайтът е онлайн.", icon: Rocket },
];

export const standardPageStructure = [
  "Начална секция (Hero)",
  "Представяне на услугите",
  "Предимства за клиента",
  "Галерия / Визия",
  "Форма за запитване",
  "Често задавани въпроси",
  "Финална покана (CTA)"
];