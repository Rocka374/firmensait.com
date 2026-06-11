"use client";

import Image from "next/image";
import { IndustryPageContent } from "@/content/industries/types";
import Button from "@/components/Button";
import { Tag, Smartphone, Search, CloudOff } from "lucide-react";
import { motion } from "framer-motion";

export default function IndustryHero({ data }: { data: IndustryPageContent }) {
  const trustItems = [
    { label: "Цена 350 евро", icon: Tag },
    { label: "Мобилна версия", icon: Smartphone },
    { label: "SEO структура", icon: Search },
    { label: "Без месечен хостинг", icon: CloudOff },
  ];

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-white">
      {/* Extremely subtle radial glow for depth, but staying within white theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-1 text-center lg:text-left relative z-20 max-w-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">Портфолио по браншове</span>
                 <div className="w-8 h-px bg-primary/20" />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-8 tracking-tight">
                {data.h1}
              </h1>
              <p className="text-lg md:text-xl text-secondary/70 mb-10 leading-relaxed font-medium">
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

              <div className="grid grid-cols-2 gap-y-5 gap-x-8 border-t border-border/40 pt-10">
                {trustItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-secondary/60 group">
                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                      <item.icon size={16} strokeWidth={2.5} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full max-w-[640px] relative">
             <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-full aspect-[16/11]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={data.heroImage.src}
                  alt={data.heroImage.alt}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}