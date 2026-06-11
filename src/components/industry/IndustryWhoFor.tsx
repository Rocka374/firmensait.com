import SectionHeader from "../SectionHeader";
import Card from "../Card";
import { Users, Target, Rocket } from "lucide-react";

interface Props {
  industryTitle: string;
  data?: {
    title: string;
    items: {
      title: string;
      text: string;
      icon: any;
    }[];
  };
}

export default function IndustryWhoFor({ industryTitle, data }: Props) {
  const defaultItems = [
    { 
      title: "За малък бизнес", 
      text: "Идеално решение за фирми, които искат професионално присъствие на достъпна цена.",
      icon: Users 
    },
    { 
      title: "За локални услуги", 
      text: "Подходящо за бизнеси, разчитащи на клиенти от конкретен район или град.",
      icon: Target 
    },
    { 
      title: "За стартиращи проекти", 
      text: "Бърз старт онлайн с готова структура и SEO основа за всяка услуга.",
      icon: Rocket 
    }
  ];

  const title = data?.title || `За кого е подходящ сайтът за ${industryTitle.replace("Сайт за ", "")}?`;
  const items = data?.items || defaultItems;

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeader 
          title={title}
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <Card key={idx} className="p-10 group border-border/30 hover:border-primary/30">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
              <p className="text-secondary/70 font-medium leading-relaxed">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}