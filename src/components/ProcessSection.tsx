import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";

export default function ProcessSection() {
  const { process } = homeContent;
  return (
    <section id="kak-rabotim" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader title={process.title} />
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border z-0"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 relative z-10">
            {process.steps.map((step, idx) => {
              const Icon = (Icons as any)[step.icon] || Icons.Check;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-primary/10 flex items-center justify-center text-primary mb-6 shadow-xl relative transition-transform group-hover:scale-110">
                    <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center bg-white">
                       <Icon size={32} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-8 h-8 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-2">{step.title}</h3>
                  <p className="text-secondary text-xs leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}