import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";

export default function HostingSection() {
  const { hosting } = homeContent;
  return (
    <section className="py-24 bg-gradient-to-b from-secondary-light/30 to-white">
      <div className="container mx-auto px-4">
        <SectionHeader title={hosting.title} subtitle={hosting.description} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hosting.items.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            return (
              <div key={idx} className="text-center p-8">
                <div className="w-16 h-16 bg-primary-soft rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="font-bold text-foreground leading-snug">{item.title}</h3>
                {item.description && <p className="text-secondary text-sm mt-3 leading-relaxed">{item.description}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}