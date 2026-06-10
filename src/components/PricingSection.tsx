import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import { Check, X, ArrowRight } from "lucide-react";
import Button from "./Button";

export default function PricingSection() {
  const { pricing } = homeContent;
  return (
    <section id="ceni" className="py-24 md:py-32 bg-secondary-light/30">
      <div className="container mx-auto px-4">
        <SectionHeader title={pricing.title} subtitle={pricing.description} />
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[3rem] border border-border/50 shadow-[0_30px_100px_rgba(184,145,79,0.06)] overflow-hidden flex flex-col lg:flex-row">
            <div className="flex-[1.2] p-10 md:p-16 lg:p-20">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Check size={20} />
                </div>
                <h3 className="text-2xl font-bold">Пакетът включва:</h3>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                {pricing.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                    <span className="font-bold text-foreground/80 leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-16 pt-10 border-t border-border/30">
                <span className="block text-[10px] font-bold uppercase text-secondary/40 mb-6 tracking-[0.2em]">Не включва автоматично:</span>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  {pricing.notIncludes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-secondary/60">
                      <X size={12} className="opacity-40" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-[450px] bg-primary text-white p-12 md:p-16 lg:p-20 flex flex-col justify-center relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-white/5 rounded-full blur-3xl" />
              
              <div className="relative z-10 text-center">
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-widest mb-6">
                  {pricing.priceLabel}
                </span>
                <div className="flex items-baseline justify-center gap-2 mb-10">
                   <div className="text-8xl font-bold tracking-tighter leading-none">{pricing.price.split(' ')[0]}</div>
                   <div className="text-4xl font-bold opacity-80">{pricing.price.split(' ')[1]}</div>
                </div>
                
                <Button variant="secondary" size="xl" className="w-full bg-white text-primary hover:bg-white/90 shadow-2xl py-8 text-xl" href="#kontakti">
                  {pricing.cta}
                  <ArrowRight className="ml-3" size={20} />
                </Button>
                
                <p className="mt-8 text-sm font-medium opacity-70">
                  Без скрити такси. Прозрачно ценообразуване.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}