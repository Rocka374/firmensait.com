import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";

export default function ProcessSection() {
  const { process } = homeContent;
  return (
    <section id="kak-rabotim" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader title={process.title} />
        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-14 left-[8%] right-[8%] h-px bg-border/50 z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4 relative z-10">
            {process.steps.map((step, idx) => {
              const Icon = (Icons as any)[step.icon] || Icons.Check;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-28 h-28 rounded-full bg-background border border-border/50 flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:border-primary group-hover:shadow-xl group-hover:shadow-primary/10">
                    <div className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center bg-white group-hover:bg-primary group-hover:text-white transition-all duration-500">
                       <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <div className="absolute -top-1 right-2 w-8 h-8 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="font-bold text-[11px] uppercase tracking-[0.2em] mb-3 text-foreground/60">{step.title}</h3>
                  <p className="text-secondary/80 text-xs leading-relaxed max-w-[150px]">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}