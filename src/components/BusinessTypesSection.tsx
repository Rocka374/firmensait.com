import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";
import Card from "./Card";

export default function BusinessTypesSection() {
  const { businessTypes } = homeContent;
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeader title={businessTypes.title} subtitle={businessTypes.description} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {businessTypes.items.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            return (
              <Card key={idx} className="p-10 md:p-12 group">
                <div className="w-16 h-16 bg-primary-soft/50 rounded-2xl flex items-center justify-center text-primary mb-8 transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-lg text-secondary/80 leading-relaxed font-medium">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}