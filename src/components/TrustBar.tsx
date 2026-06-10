import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";

export default function TrustBar() {
  return (
    <div className="bg-white/70 backdrop-blur-md border-y border-border/30 py-10 md:py-14 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 lg:gap-8">
          {homeContent.trustBar.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            return (
              <div key={idx} className="flex items-center gap-4 opacity-75 hover:opacity-100 transition-all duration-300 cursor-default group">
                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Icon size={18} className="text-primary/90 group-hover:scale-110 transition-all" />
                </div>
                <span className="text-secondary font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] whitespace-nowrap">
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