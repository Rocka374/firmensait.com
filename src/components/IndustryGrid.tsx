import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import { ChevronRight } from "lucide-react";

export default function IndustryGrid() {
  const { industries } = homeContent;
  return (
    <section id="branshove" className="py-24 bg-secondary-light/50">
      <div className="container mx-auto px-4">
        <SectionHeader title={industries.title} subtitle={industries.subtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {industries.items.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-border flex items-center justify-between group hover:border-primary transition-all cursor-default shadow-sm">
              <span className="font-bold text-foreground text-sm">{item}</span>
              <ChevronRight size={18} className="text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="border-2 border-primary text-primary font-bold py-4 px-10 rounded-full hover:bg-primary hover:text-white transition-all">
            {industries.cta}
          </button>
        </div>
      </div>
    </section>
  );
}