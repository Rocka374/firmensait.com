import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";

export default function FeatureCards() {
  const { features } = homeContent;
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title={features.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.items.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            return (
              <div key={idx} className="p-8 rounded-3xl border border-border bg-white hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}