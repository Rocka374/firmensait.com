import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";

export default function TrustBar() {
  return (
    <div className="bg-white/60 backdrop-blur-md border-y border-border/30 py-8 md:py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 md:gap-10 lg:gap-6">
          {homeContent.trustBar.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            return (
              <div key={idx} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-all duration-300 cursor-default group">
                <Icon size={16} className="text-primary/80 group-hover:scale-110 group-hover:text-primary transition-all" />
                <span className="text-secondary font-bold text-[9px] md:text-[10px] uppercase tracking-[0.15em] whitespace-nowrap">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}