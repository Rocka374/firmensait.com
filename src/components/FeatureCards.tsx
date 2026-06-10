import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";
import Card from "./Card";

export default function FeatureCards() {
  const { features } = homeContent;
  return (
    <section className="py-32 md:py-44 bg-white">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <SectionHeader title={features.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.items.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            return (
              <Card key={idx} className="p-10 md:p-12 group hover:scale-[1.02] duration-300">
                <div className="w-16 h-16 bg-primary-soft rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-2xl mb-4 tracking-tight">{item.title}</h3>
                <p className="text-secondary/80 text-lg leading-relaxed font-medium">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}