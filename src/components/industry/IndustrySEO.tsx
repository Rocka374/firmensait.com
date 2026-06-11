import SectionHeader from "../SectionHeader";
import { sharedSEO } from "@/content/industries/shared";
import Card from "../Card";

interface Props {
  data?: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      text: string;
      icon: any;
    }[];
  };
}

export default function IndustrySEO({ data }: Props) {
  const title = data?.title || "SEO основа за по-добра видимост";
  const subtitle = data?.subtitle || "Всяка страница е подготвена по съвременните изисквания за класиране в Google.";
  const items = data?.items || sharedSEO;

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
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-6 p-8 bg-white rounded-3xl border border-border/30">
               <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <item.icon size={22} strokeWidth={2} />
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-secondary/60 text-base font-medium leading-relaxed">{item.text}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}