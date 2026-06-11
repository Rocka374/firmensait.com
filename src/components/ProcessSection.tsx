import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";

export default function ProcessSection() {
  const { process } = homeContent;
  return (
    <section id="kak-rabotim" className="py-32 md:py-48 bg-[#FAF8F4] overflow-hidden relative">
      <div className="container mx-auto px-4">
        <SectionHeader title={process.title} />
        
        <div className="max-w-7xl mx-auto relative mt-20">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[55px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-14 lg:gap-6 relative z-10">
            {process.steps.map((step, idx) => {
              const Icon = (Icons as any)[step.icon] || Icons.Check;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  
                  {/* Step Visual */}
                  <div className="relative mb-10">
                    <div className="w-28 h-28 rounded-full bg-white border border-border/40 flex items-center justify-center transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_20px_50px_rgba(184,145,79,0.12)]">
                      <div className="w-20 h-20 rounded-full border border-primary/5 flex items-center justify-center bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                         <Icon size={28} strokeWidth={1.5} />
                      </div>
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-1 right-1 w-10 h-10 bg-primary text-white text-xs font-black rounded-full flex items-center justify-center shadow-xl border-4 border-[#FAF8F4]">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Step Text */}
                  <div className="space-y-3 px-4">
                    <h3 className="font-black text-[11px] md:text-xs uppercase tracking-[0.25em] text-foreground/80 leading-snug min-h-[3em] flex items-center justify-center">
                      {step.title}
                    </h3>
                    <p className="text-secondary/60 text-xs md:text-[13px] leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}