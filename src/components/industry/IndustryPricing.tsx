import SectionHeader from "../SectionHeader";
import { homeContent } from "@/content/home";
import { Check, X, ArrowRight, Star } from "lucide-react";
import Button from "../Button";

interface IndustryPricingProps {
  industryTitle: string;
}

export default function IndustryPricing({ industryTitle }: IndustryPricingProps) {
  const { pricing } = homeContent;
  
  // Трансформираме заглавието от "Сайт за хотел" в "Изработка на сайт за хотел"
  const displayTitle = industryTitle.startsWith("Сайт за") 
    ? `Изработка на ${industryTitle.toLowerCase()}`
    : `Изработка на сайт за ${industryTitle.toLowerCase()}`;

  return (
    <section id="ceni" className="py-24 md:py-36 bg-white relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <SectionHeader 
          title={`${displayTitle} от 350 евро`} 
          subtitle={pricing.description} 
        />
        
        <div className="max-w-6xl mx-auto mt-16 md:mt-24">
          <div className="bg-white rounded-[3rem] md:rounded-[4rem] border border-border/40 shadow-[0_40px_120px_-20px_rgba(184,145,79,0.08)] overflow-hidden flex flex-col lg:flex-row">
            
            {/* Features List */}
            <div className="flex-[1.3] p-8 md:p-16 lg:p-20 bg-white">
              <div className="flex items-center gap-4 mb-10 md:mb-12">
                <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center text-primary">
                  <Star size={22} fill="currentColor" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Включени услуги</h3>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
                {pricing.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-lg font-bold text-foreground/80 leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-16 pt-12 border-t border-border/30">
                <span className="block text-[10px] font-black uppercase text-secondary/40 mb-8 tracking-[0.3em]">Не включва автоматично:</span>
                <div className="flex flex-wrap gap-x-10 gap-y-5">
                  {pricing.notIncludes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-[12px] font-bold text-secondary/40">
                      <X size={14} className="opacity-40" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Column */}
            <div className="lg:w-[440px] bg-primary p-10 md:p-16 lg:p-20 flex flex-col justify-center relative overflow-hidden text-white">
              <div className="absolute top-[-10%] right-[-10%] w-[250px] h-[250px] bg-white/10 rounded-full blur-[70px]" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 text-[10px] font-black uppercase tracking-[0.2em] mb-10 backdrop-blur-sm border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  {pricing.priceLabel}
                </div>
                
                <div className="flex items-center justify-center gap-3 mb-12">
                  <div className="text-7xl md:text-8xl font-bold tracking-tighter leading-none flex items-baseline gap-1">
                    {pricing.price.split(' ')[0]}
                    <span className="text-3xl md:text-5xl font-black opacity-60">€</span>
                  </div>
                </div>
                
                <Button variant="secondary" size="lg" className="w-full bg-white text-primary hover:bg-[#FAF8F4] shadow-2xl py-8 text-xl font-black rounded-2xl" href="/kontakti">
                  Изпрати запитване
                  <ArrowRight className="ml-3" size={22} />
                </Button>
                
                <p className="mt-10 text-[10px] font-black opacity-40 tracking-[0.3em] uppercase">
                  Прозрачно и ясно
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}