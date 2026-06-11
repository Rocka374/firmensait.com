import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import * as Icons from "lucide-react";
import Card from "./Card";

export default function HostingSection() {
  const { hosting } = homeContent;
  return (
    <section className="py-32 md:py-48 bg-[#FAF8F4] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title={hosting.title} subtitle={hosting.description} className="max-w-4xl" />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            
            {/* Comparison style card or Main value card */}
            <div className="md:col-span-2">
              <Card className="bg-white p-10 md:p-16 border-primary/10 flex flex-col md:flex-row items-center gap-12 group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] translate-x-32 -translate-y-32" />
                
                <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                    <Icons.CheckCircle2 size={16} />
                    Вашето голямо предимство
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                    Спестявате от <span className="text-primary">месечни абонаменти</span> за поддръжка
                  </h3>
                  <p className="text-xl text-secondary/70 font-medium leading-relaxed">
                    Докато повечето фирми таксуват ежемесечно за поддръжка и хостинг, нашето решение позволява на стандартните фирмени сайтове да работят без тези текущи разходи.
                  </p>
                </div>
                
                <div className="w-full md:w-[380px] bg-secondary-light/50 rounded-[2.5rem] p-10 flex flex-col gap-8">
                  <div className="flex items-center justify-between p-4 border-b border-border/40">
                    <span className="text-sm font-bold text-secondary/50 uppercase tracking-widest">Месечна такса</span>
                    <span className="text-xl font-bold text-secondary/40 line-through">20-50€</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary rounded-2xl text-white shadow-xl shadow-primary/20 scale-105 transition-transform group-hover:scale-110 duration-500">
                    <span className="text-sm font-bold uppercase tracking-widest">Вашата такса</span>
                    <span className="text-3xl font-black">0€</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sub benefits */}
            {hosting.items.slice(0, 4).map((item, idx) => {
              const Icon = (Icons as any)[item.icon] || Icons.Check;
              return (
                <div key={idx} className="bg-white/50 border border-border/30 rounded-[2rem] p-10 flex items-start gap-8 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-secondary/70 text-base leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}