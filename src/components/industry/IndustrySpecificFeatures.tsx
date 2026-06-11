import SectionHeader from "../SectionHeader";
import Card from "../Card";
import * as Icons from "lucide-react";

interface Props {
  data: {
    title: string;
    description: string;
    items: {
      title: string;
      text: string;
      icon: string;
    }[];
  };
}

export default function IndustrySpecificFeatures({ data }: Props) {
  return (
    <section className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <SectionHeader 
              title={data.title}
              subtitle={data.description}
              align="left"
              className="mb-0"
            />
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {data.items.slice(0, 4).map((item, idx) => {
              const Icon = (Icons as any)[item.icon] || Icons.Check;
              return (
                <div 
                  key={idx} 
                  className="p-8 md:p-10 rounded-[2.5rem] bg-[#FAF8F4]/50 border border-border/40 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-secondary/70 text-base leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}