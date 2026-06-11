import SectionHeader from "../SectionHeader";
import { sharedProcess } from "@/content/industries/shared";

export default function IndustryProcess() {
  return (
    <section className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader title="Как протича изработката?" />
        
        <div className="max-w-6xl mx-auto relative mt-20">
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-px bg-border/40 z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {sharedProcess.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white border border-border/40 flex items-center justify-center mb-6 transition-all group-hover:border-primary group-hover:shadow-lg">
                   <div className="w-14 h-14 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <step.icon size={22} strokeWidth={2} />
                   </div>
                </div>
                <h3 className="font-bold text-xs uppercase tracking-[0.2em] mb-2">{step.title}</h3>
                <p className="text-secondary/50 text-sm font-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}