import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";
import Card from "./Card";

export default function SEOSection() {
  const { seo } = homeContent;
  return (
    <section className="py-32 md:py-48 bg-gradient-to-b from-white via-secondary-light/20 to-secondary-light/30 relative">
      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <SectionHeader title={seo.title} subtitle={seo.description} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {seo.items.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            return (
              <Card key={idx} className="bg-white p-10 md:p-12 flex items-start gap-8">
                <div className="w-14 h-14 bg-primary-soft rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-4 tracking-tight">{item.title}</h3>
                  {item.description && <p className="text-secondary/70 text-lg leading-relaxed font-medium">{item.description}</p>}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}