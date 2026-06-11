import Image from "next/image";
import { IndustryPageContent } from "@/content/industries/types";
import Button from "@/components/Button";
import { Tag, Smartphone, Search, CloudOff } from "lucide-react";

export default function IndustryHero({ data }: { data: IndustryPageContent }) {
  const trustItems = [
    { label: "Цена 350 евро", icon: Tag },
    { label: "Мобилна версия", icon: Smartphone },
    { label: "SEO структура", icon: Search },
    { label: "Без месечен хостинг", icon: CloudOff },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-[#FAF8F4]">
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
              {data.h1}
            </h1>
            <p className="text-lg md:text-xl text-secondary/80 mb-10 leading-relaxed font-medium max-w-2xl">
              {data.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
              <Button size="lg" href="/kontakti" className="px-12 py-5 shadow-xl shadow-primary/20">
                Искам сайт
              </Button>
              <Button variant="outline" size="lg" href="#primerna-vizia" className="px-12 py-5">
                Виж примерна визия
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {trustItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-secondary/60">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <item.icon size={16} />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-[700px]">
            <div className="relative aspect-[4/3] rounded-[2.5rem] bg-white p-4 shadow-[0_30px_70px_rgba(184,145,79,0.12)] border border-white/50 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <Image
                  src={data.heroImage.src}
                  alt={data.heroImage.alt}
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}