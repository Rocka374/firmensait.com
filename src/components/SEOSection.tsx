import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";
import Card from "./Card";

export default function SEOSection() {
  const { seo } = homeContent;
  return (
    <section className="py-32 md:py-48 bg-white relative overflow-hidden max-w-full">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/4" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-1 w-full max-w-2xl">
            <SectionHeader title={seo.title} subtitle={seo.description} align="left" className="mb-14" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {seo.items.map((item, idx) => {
                const Icon = (Icons as any)[item.icon] || Icons.Check;
                return (
                  <div key={idx} className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 tracking-tight leading-tight">{item.title}</h4>
                      {item.description && (
                        <p className="text-secondary/60 text-sm leading-relaxed font-medium">{item.description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 w-full relative overflow-hidden lg:overflow-visible">
            {/* Visual Search Preview Mockup */}
            <div className="relative bg-white border border-border/40 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.05)] overflow-hidden">
               <div className="h-10 bg-secondary-light/30 border-b border-border/30 flex items-center px-6 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-border/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border/80" />
               </div>
               <div className="p-10 space-y-10">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <Icons.Search size={20} />
                     </div>
                     <div className="h-4 w-48 bg-secondary-light rounded-full" />
                  </div>
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-green-100" />
                        <div className="h-3 w-32 bg-secondary-light rounded-full" />
                     </div>
                     <div className="h-6 w-full max-w-md bg-primary/10 rounded-lg" />
                     <div className="space-y-2">
                        <div className="h-3 w-full bg-secondary-light/50 rounded-full" />
                        <div className="h-3 w-4/5 bg-secondary-light/50 rounded-full" />
                     </div>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <div className="px-4 py-2 rounded-lg border border-border/40 text-[10px] font-bold uppercase tracking-widest text-secondary/40">Sitemap.xml</div>
                    <div className="px-4 py-2 rounded-lg border border-border/40 text-[10px] font-bold uppercase tracking-widest text-secondary/40">Clean URLs</div>
                  </div>
               </div>
               
               {/* Floating Badge - Corrected position for mobile */}
               <div className="absolute bottom-6 right-2 left-2 md:left-auto md:bottom-10 md:right-10 bg-white shadow-2xl rounded-2xl p-6 border border-primary/10 flex items-center gap-5 scale-90 md:scale-100">
                  <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                    <Icons.Zap size={28} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 mb-1">SEO Основи</div>
                    <div className="text-xl font-bold text-foreground">Оптимизирана структура</div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}