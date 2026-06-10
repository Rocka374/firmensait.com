import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-border py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-4">
          {homeContent.trustBar.map((item, idx) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            return (
              <div key={idx} className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default group">
                <Icon size={18} className="text-primary" />
                <span className="text-secondary font-medium text-[10px] uppercase tracking-widest whitespace-nowrap">
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