import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import { Check, X, ArrowRight } from "lucide-react";
import Button from "./Button";

export default function PricingSection() {
  const { pricing } = homeContent;
  return (
    <section id="ceni" className="py-24 md:py-40 bg-gradient-to-b from-white via-secondary-light/20 to-secondary-light/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeader title={pricing.title} subtitle={pricing.description} />
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[4rem] border border-border/50 shadow-[0_40px_120px_rgba(184,145,79,0.08)] overflow-hidden flex flex-col lg:flex-row">
            <div className="flex-[1.3] p-12 md:p-20 lg:p-24">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shadow-inner">
                  <Check size={24} />
                </div>
                <h3 className="text-3xl font-bold tracking-tight">Пакетът включва:</h3>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-16">
                {pricing.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-5 group">
                    <div className="mt-2 w-2.5 h-2.5 rounded-full bg-primary/30 group-hover:bg-primary transition-all duration-300 shrink-0" />
                    <span className="text-lg font-bold text-foreground/80 leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-20 pt-12 border-t border-border/40">
                <span className="block text-[11px] font-bold uppercase text-secondary/40 mb-8 tracking-[0.25em]">Не включва автоматично:</span>
                <div className="flex flex-wrap gap-x-10 gap-y-4">
                  {pricing.notIncludes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-secondary/50">
                      <X size={14} className="opacity-30" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-[480px] bg-primary text-white p-14 md:p-20 lg:p-24 flex flex-col justify-center relative overflow-hidden">
              {/* Refined Background Decoration */}
              <div className="absolute top-[-30%] right-[-30%] w-full h-full bg-white/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] bg-black/10 rounded-full blur-[100px]" />
              
              <div className="relative z-10 text-center">
                <span className="inline-block px-5 py-1.5 rounded-full bg-white/15 text-[10px] font-bold uppercase tracking-[0.25em] mb-8">
                  {pricing.priceLabel}
                </span>
                <div className="flex items-baseline justify-center gap-3 mb-12">
                   <div className="text-[7rem] md:text-[8.5rem] font-bold tracking-tighter leading-none">{pricing.price.split(' ')[0]}</div>
                   <div className="text-4xl md:text-5xl font-bold opacity-80">{pricing.price.split(' ')[1]}</div>
                </div>
                
                <Button variant="secondary" size="xl" className="w-full bg-white text-primary hover:bg-white/95 shadow-3xl py-10 text-2xl font-black" href="#kontakti">
                  {pricing.cta}
                  <ArrowRight className="ml-4" size={24} />
                </Button>
                
                <p className="mt-10 text-sm font-bold opacity-60 tracking-wide uppercase">
                  Прозрачно ценообразуване
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}