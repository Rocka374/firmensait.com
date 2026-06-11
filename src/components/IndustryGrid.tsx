import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import { ChevronRight, Info } from "lucide-react";
import Button from "./Button";

export default function IndustryGrid() {
  const { industries } = homeContent;
  return (
    <section id="branshove" className="py-24 md:py-36 relative bg-[#FAF8F4]">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title={industries.title} subtitle={industries.subtitle} />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mb-12 max-w-6xl mx-auto">
          {industries.items.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-border/40 rounded-xl p-4 md:p-5 flex items-center justify-between group cursor-pointer transition-all duration-300 hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(184,145,79,0.05)]"
            >
              <span className="font-bold text-foreground/80 text-xs md:text-sm">{item}</span>
              <ChevronRight size={14} className="text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-primary/[0.03] border border-primary/10 rounded-2xl p-6 flex items-center gap-5">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm border border-primary/5">
              <Info size={18} />
            </div>
            <p className="text-sm md:text-base font-bold text-secondary/70 leading-snug">
              Не виждате вашия бранш? Ще изградим структура според специфичните нужди на вашите услуги и клиенти.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="md" href="#kontakti">
            {industries.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}