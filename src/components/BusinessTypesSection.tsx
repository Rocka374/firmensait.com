import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";

export default function BusinessTypesSection() {
  const { businessTypes } = homeContent;
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title={businessTypes.title} subtitle={businessTypes.description} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessTypes.items.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            return (
              <div key={idx} className="bg-secondary-light/30 p-10 rounded-[2rem] border border-border group hover:border-primary transition-colors">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-secondary leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}