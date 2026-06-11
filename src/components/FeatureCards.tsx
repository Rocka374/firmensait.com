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
    <section className="py-32 md:py-48 bg-white relative">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <SectionHeader title={features.title} align="left" className="mb-0" />
          <div className="mt-8 md:mt-0 flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/10">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-black uppercase tracking-widest text-primary">Всичко необходимо за старт</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.items.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            const isHighlighted = highlightedFeatures.includes(item.icon);
            
            return (
              <Card 
                key={idx} 
                className={cn(
                  "p-10 md:p-12 group transition-all duration-500",
                  isHighlighted ? "border-primary/20 shadow-[0_15px_40px_rgba(184,145,79,0.05)]" : "border-border/30"
                )}
              >
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500",
                  isHighlighted ? "bg-primary text-white" : "bg-primary-soft/50 text-primary group-hover:bg-primary group-hover:text-white"
                )}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-2xl mb-4 tracking-tight leading-tight">{item.title}</h3>
                <p className="text-secondary/80 text-lg leading-relaxed font-medium">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}