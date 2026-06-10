import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import { Check, X } from "lucide-react";

export default function PricingSection() {
  const { pricing } = homeContent;
  return (
    <section id="ceni" className="py-24 bg-secondary-light">
      <div className="container mx-auto px-4">
        <SectionHeader title={pricing.title} subtitle={pricing.description} />
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] border border-border shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="flex-1 p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-border">
            <h3 className="text-2xl font-bold mb-8">Пакетът включва:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {pricing.includes.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Check size={14} />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-[400px] bg-primary-soft/30 p-10 lg:p-16 flex flex-col justify-center text-center">
            <div className="mb-10">
              <span className="block text-xs font-bold uppercase tracking-widest text-secondary mb-4">Еднократно плащане</span>
              <div className="text-7xl font-bold text-primary tracking-tight">{pricing.price}</div>
            </div>
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-6 rounded-full text-xl shadow-lg transition-all mb-8">
              {pricing.cta}
            </button>
            <div className="text-left">
              <span className="block text-[10px] font-bold uppercase text-secondary/60 mb-4 tracking-widest">Не включва автоматично:</span>
              <ul className="space-y-2">
                {pricing.notIncludes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-secondary/70">
                    <X size={12} className="shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}