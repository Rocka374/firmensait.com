"use client";

import Image from "next/image";
import { IndustryPageContent } from "@/content/industries/types";
import Button from "@/components/Button";
import { Tag, Smartphone, Search, CloudOff } from "lucide-react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function IndustryHero({ data }: { data: IndustryPageContent }) {
  const trustItems = [
    { label: "Цена 350 евро", icon: Tag },
    { label: "Мобилна версия", icon: Smartphone },
    { label: "SEO структура", icon: Search },
    { label: "Без месечен хостинг", icon: CloudOff },
  ];

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-white">
      {/* Premium radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/[0.04] rounded-full blur-[130px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-[1440px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-1 text-center lg:text-left relative z-20 max-w-[620px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold text-foreground leading-[1.05] mb-8 tracking-tight">
                {data.h1}
              </h1>
              <p className="text-lg md:text-xl text-secondary/70 mb-12 leading-relaxed font-medium">
                {data.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 mb-14">
                <Button size="lg" href="/kontakti" className="px-12 py-5 shadow-2xl shadow-primary/20 min-w-[200px]">
                  Искам сайт
                </Button>
                <Button variant="outline" size="lg" href="#primerna-vizia" className="px-12 py-5 min-w-[200px]">
                  Виж проекти
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-y-6 gap-x-10 border-t border-border/40 pt-10">
                {trustItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-secondary/60 group">
                    <div className="w-9 h-9 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                      <item.icon size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-widest leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full max-w-[680px] relative">
             <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-full aspect-[16/11] bg-white rounded-[2.5rem] p-4 md:p-6 shadow-[0_35px_100px_rgba(0,0,0,0.07)] border border-border/40"
            >
              <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
                <Image
                  src={data.heroImage.src}
                  alt={data.heroImage.alt}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}