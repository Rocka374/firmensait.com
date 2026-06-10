import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";

export default function ProcessSection() {
  const { process } = homeContent;
  return (
    <section id="kak-rabotim" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader title={process.title} />
        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-14 left-[8%] right-[8%] h-px bg-border/40 z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-4 relative z-10">
            {process.steps.map((step, idx) => {
              const Icon = (Icons as any)[step.icon] || Icons.Check;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-background border border-border/40 flex items-center justify-center mb-6 md:mb-8 relative transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/5">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-primary/10 flex items-center justify-center bg-white group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                       <Icon size={24} strokeWidth={1.5} className="md:w-7 md:h-7" />
                    </div>
                    <div className="absolute -top-1 right-2 w-7 h-7 md:w-8 md:h-8 bg-primary text-white text-[10px] md:text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="font-bold text-[10px] md:text-[11px] uppercase tracking-[0.15em] mb-2 md:mb-3 text-foreground/80">{step.title}</h3>
                  <p className="text-secondary/70 text-[11px] md:text-xs leading-relaxed max-w-[160px] md:max-w-[150px]">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}