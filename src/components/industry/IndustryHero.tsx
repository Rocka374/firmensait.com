"use client";

import Image from "next/image";
import { IndustryPageContent } from "@/content/industries/types";
import Button from "@/components/Button";
import { Tag, Smartphone, Search, CloudOff, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function IndustryHero({ data }: { data: IndustryPageContent }) {
  const trustItems = [
    { label: "Цена 350 евро", icon: Tag },
    { label: "Мобилна версия", icon: Smartphone },
    { label: "SEO структура", icon: Search },
    { label: "Без месечен хостинг", icon: CloudOff },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <div className="flex-1 text-center lg:text-left relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-8 tracking-tight">
                {data.h1}
              </h1>
              <p className="text-lg md:text-xl text-secondary/80 mb-10 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                {data.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
                <Button size="lg" href="/kontakti" className="px-12 py-5 shadow-xl shadow-primary/20">
                  Искам сайт
                </Button>
                <Button variant="outline" size="lg" href="#primerna-vizia" className="px-12 py-5">
                  Виж примери
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-y-5 gap-x-8 max-w-md mx-auto lg:mx-0 border-t border-border/30 pt-10">
                {trustItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-secondary/60">
                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                      <item.icon size={16} strokeWidth={2.5} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full max-w-[850px] relative">
             <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-full aspect-[16/11]"
            >
              <Image
                src={data.heroImage.src}
                alt={data.heroImage.alt}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(184,145,79,0.08)_0%,_transparent_70%)] pointer-events-none transform scale-125 -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}