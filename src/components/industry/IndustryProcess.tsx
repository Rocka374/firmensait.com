import SectionHeader from "../SectionHeader";
import { sharedProcess } from "@/content/industries/shared";

export default function IndustryProcess() {
  return (
    <section className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader title="Как протича изработката?" />
        
        <div className="max-w-7xl mx-auto relative mt-24">
          <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border/60 to-transparent z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-16 lg:gap-10 relative z-10">
            {sharedProcess.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-white border border-border/40 flex items-center justify-center transition-all duration-500 group-hover:border-primary group-hover:shadow-xl group-hover:shadow-primary/10">
                    <div className="w-16 h-16 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <step.icon size={26} strokeWidth={2} />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-primary text-white text-[10px] font-black rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="font-black text-xs uppercase tracking-[0.2em] mb-3 text-foreground/90">{step.title}</h3>
                <p className="text-secondary/60 text-sm font-bold leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}