import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import { ChevronRight, Info } from "lucide-react";
import Button from "./Button";
import Card from "./Card";

export default function IndustryGrid() {
  const { industries } = homeContent;
  return (
    <section id="branshove" className="py-32 md:py-48 relative bg-[#FAF8F4]">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title={industries.title} subtitle={industries.subtitle} />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-6xl mx-auto">
          {industries.items.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-border/40 rounded-2xl p-5 md:p-6 flex items-center justify-between group cursor-pointer transition-all duration-300 hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(184,145,79,0.05)]"
            >
              <span className="font-bold text-foreground/80 text-sm md:text-base">{item}</span>
              <ChevronRight size={16} className="text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm">
              <Info size={24} />
            </div>
            <p className="text-lg font-bold text-secondary/80 leading-snug">
              Не виждате вашия бранш? Ще изградим структура според специфичните нужди на вашите услуги и клиенти.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" href="#kontakti">
            {industries.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}