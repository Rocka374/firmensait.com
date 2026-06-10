import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import { ChevronRight } from "lucide-react";
import Button from "./Button";
import Card from "./Card";

export default function IndustryGrid() {
  const { industries } = homeContent;
  return (
    <section id="branshove" className="py-24 md:py-36 relative bg-gradient-to-b from-white via-secondary-light/30 to-secondary-light/50">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title={industries.title} subtitle={industries.subtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {industries.items.map((item, idx) => (
            <Card key={idx} className="p-6 flex items-center justify-between group cursor-default">
              <span className="font-bold text-foreground text-sm">{item}</span>
              <ChevronRight size={18} className="text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" size="lg" href="#branshove">
            {industries.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}