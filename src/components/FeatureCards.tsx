import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";
import Card from "./Card";
import { cn } from "@/lib/utils";

export default function FeatureCards() {
  const { features } = homeContent;
  
  // Highlight some key features
  const highlightedFeatures = ["Palette", "Smartphone", "Search", "Mail"];

  return (
    <section className="py-24 md:py-36 bg-white relative">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-col items-center mb-16 md:mb-20">
          <SectionHeader title={features.title} align="center" className="mb-6" />
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary">Всичко необходимо за старт</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.items.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            const isHighlighted = highlightedFeatures.includes(item.icon);
            
            return (
              <Card 
                key={idx} 
                className={cn(
                  "p-8 md:p-10 group transition-all duration-500",
                  isHighlighted ? "border-primary/20 shadow-[0_15px_40px_rgba(184,145,79,0.05)]" : "border-border/30"
                )}
              >
                <div className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500",
                  isHighlighted ? "bg-primary text-white" : "bg-primary-soft/50 text-primary group-hover:bg-primary group-hover:text-white"
                )}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl md:text-2xl mb-3 tracking-tight leading-tight">{item.title}</h3>
                <p className="text-secondary/80 text-base md:text-lg leading-relaxed font-medium">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}