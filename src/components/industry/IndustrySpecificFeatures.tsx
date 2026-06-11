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
    <section className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeader 
          title={data.title}
          subtitle={data.description}
          className="mb-16 md:mb-20"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {data.items.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            return (
              <Card 
                key={idx} 
                className="p-8 md:p-10 border-border/40 hover:border-primary/20 hover:bg-primary/[0.01] group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/[0.08] flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight leading-tight">{item.title}</h3>
                <p className="text-secondary/70 text-base leading-relaxed font-medium">
                  {item.text}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}