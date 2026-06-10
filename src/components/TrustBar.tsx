import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";

export default function TrustBar() {
  return (
    <div className="bg-white/50 backdrop-blur-sm border-y border-border/30 py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 lg:gap-6">
          {homeContent.trustBar.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            return (
              <div key={idx} className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group">
                <Icon size={16} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.2em] whitespace-nowrap">
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