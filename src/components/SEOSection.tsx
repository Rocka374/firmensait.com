import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";

export default function SEOSection() {
  const { seo } = homeContent;
  return (
    <section className="py-24 bg-secondary-light/30">
      <div className="container mx-auto px-4">
        <SectionHeader title={seo.title} subtitle={seo.description} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {seo.items.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-border shadow-sm flex items-start gap-6">
                <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  {item.description && <p className="text-secondary text-sm leading-relaxed">{item.description}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}