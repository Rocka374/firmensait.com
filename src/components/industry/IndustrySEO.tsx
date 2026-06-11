import SectionHeader from "../SectionHeader";
import Card from "../Card";
import * as Icons from "lucide-react";

interface Props {
  data?: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      text: string;
      icon: string;
    }[];
  };
}

export default function IndustrySEO({ data }: Props) {
  const title = data?.title || "SEO основа за по-добра видимост";
  const subtitle = data?.subtitle || "Всяка страница е подготвена по съвременните изисквания за класиране в Google.";
  
  const defaultItems = [
    { title: "H1–H3 структура", text: "Йерархия на заглавията за по-добро разбиране от Google.", icon: "AlignLeft" },
    { title: "Мета данни", text: "Уникални заглавия и описания за всяка отделна страница.", icon: "FileText" },
    { title: "Чисти URL адреси", text: "Лесни за четене адреси от типа /usluga-1.", icon: "Link" },
  ];

  const items = data?.items || defaultItems;

  return (
    <section className="py-24 md:py-36 bg-[#FAF8F4] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <SectionHeader 
          title={title}
          subtitle={subtitle}
          className="mb-16 md:mb-20"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const IconComponent = (Icons as any)[item.icon] || Icons.Check;
            return (
              <div key={idx} className="flex items-start gap-6 p-8 bg-white rounded-3xl border border-border/30">
                 <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <IconComponent size={22} strokeWidth={2} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-secondary/60 text-base font-medium leading-relaxed">{item.text}</p>
                 </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}