import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";
import Card from "./Card";

export default function BusinessTypesSection() {
  const { businessTypes } = homeContent;
  return (
    <section className="py-32 md:py-44 bg-white">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <SectionHeader title={businessTypes.title} subtitle={businessTypes.description} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {businessTypes.items.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            return (
              <Card key={idx} className="p-12 md:p-16 rounded-[3rem] group">
                <div className="w-20 h-20 bg-primary-soft/50 rounded-3xl flex items-center justify-center text-primary mb-10 transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">{item.title}</h3>
                <p className="text-xl text-secondary/80 leading-relaxed font-medium">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}