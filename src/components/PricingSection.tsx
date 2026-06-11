import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import { Check, X, ArrowRight, Star } from "lucide-react";
import Button from "./Button";

export default function PricingSection() {
  const { pricing } = homeContent;
  return (
    <section id="ceni" className="py-32 md:py-56 bg-white relative">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[800px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <SectionHeader title={pricing.title} subtitle={pricing.description} />
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[3rem] md:rounded-[5rem] border border-border/40 shadow-[0_50px_150px_-20px_rgba(184,145,79,0.1)] overflow-hidden flex flex-col lg:flex-row">
            
            {/* Features List */}
            <div className="flex-[1.4] p-10 md:p-20 lg:p-24 bg-white">
              <div className="flex items-center gap-5 mb-14">
                <div className="w-14 h-14 bg-primary-soft rounded-full flex items-center justify-center text-primary shadow-sm">
                  <Star size={26} fill="currentColor" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Включени услуги</h3>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-16">
                {pricing.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-5 group">
                    <div className="mt-1.5 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-xl font-bold text-foreground/90 leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-20 pt-14 border-t border-border/30">
                <span className="block text-[11px] font-black uppercase text-secondary/40 mb-10 tracking-[0.3em]">Не включва автоматично:</span>
                <div className="flex flex-wrap gap-x-12 gap-y-6">
                  {pricing.notIncludes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[13px] font-bold text-secondary/40">
                      <X size={16} className="opacity-40" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Column */}
            <div className="lg:w-[500px] bg-primary p-12 md:p-24 flex flex-col justify-center relative overflow-hidden text-white">
              {/* Glass/Glow Effect */}
              <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[200px] h-[200px] bg-black/10 rounded-full blur-[60px]" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/15 text-[11px] font-black uppercase tracking-[0.3em] mb-12 backdrop-blur-sm border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  {pricing.priceLabel}
                </div>
                
                <div className="flex items-center justify-center gap-4 mb-16 relative">
                  {/* Subtle outer glow for the price */}
                  <div className="absolute inset-0 bg-white/20 blur-[60px] rounded-full scale-150 opacity-30" />
                  <div className="text-[8rem] md:text-[10rem] font-bold tracking-tighter leading-none flex items-baseline gap-2">
                    {pricing.price.split(' ')[0]}
                    <span className="text-4xl md:text-6xl font-black opacity-60">€</span>
                  </div>
                </div>
                
                <Button variant="secondary" size="xl" className="w-full bg-white text-primary hover:bg-[#FAF8F4] shadow-2xl py-12 text-2xl font-black rounded-[2rem]" href="#kontakti">
                  {pricing.cta}
                  <ArrowRight className="ml-4" size={28} />
                </Button>
                
                <p className="mt-12 text-sm font-bold opacity-50 tracking-[0.2em] uppercase">
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