import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";
import Card from "./Card";

export default function BusinessTypesSection() {
  const { businessTypes } = homeContent;
  return (
    <section className="py-32 md:py-48 bg-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <SectionHeader 
          title={businessTypes.title} 
          subtitle={businessTypes.description} 
          className="max-w-4xl"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {businessTypes.items.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            return (
              <Card key={idx} className="p-12 md:p-14 group border-border/20 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary-soft/30 rounded-[2rem] flex items-center justify-center text-primary mb-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white shadow-sm">
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">{item.title}</h3>
                <p className="text-lg text-secondary/80 leading-relaxed font-medium">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}