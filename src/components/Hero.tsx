"use client";

import Image from "next/image";
import { homeContent } from "@/content/home";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Clock } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-[1.2] text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <ShieldCheck size={14} />
              Професионална изработка
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[1.05] mb-8 tracking-tight">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-secondary/80 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              {hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
              <Button variant="primary" size="lg" href="#kontakti" className="w-full sm:w-auto px-12 py-5 shadow-xl shadow-primary/20">
                {hero.primaryCTA}
              </Button>
              <Button variant="outline" size="lg" href="#portfolio" className="w-full sm:w-auto px-12 py-5">
                {hero.secondaryCTA}
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 border-t border-border/40">
              {hero.trustItems.slice(0, 3).map((item) => (
                <div key={item} className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle2 className="text-primary h-5 w-5 shrink-0" />
                  <span className="text-sm md:text-base font-bold text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 w-full relative max-w-[650px] lg:max-w-none mx-auto"
          >
            <div className="relative z-10 aspect-[16/11] w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-[8px] md:border-[12px] border-white bg-white group">
              <div className="relative w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-secondary-light">
                {/* CSS Placeholder UI */}
                <div className="absolute inset-0 p-8 flex flex-col gap-4 opacity-30">
                  <div className="h-8 w-1/3 bg-primary/20 rounded-full" />
                  <div className="h-40 w-full bg-primary/10 rounded-3xl" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-primary/5 rounded-2xl" />
                    <div className="h-24 bg-primary/5 rounded-2xl" />
                    <div className="h-24 bg-primary/5 rounded-2xl" />
                  </div>
                </div>
                
                <Image
                  src={hero.heroImage}
                  alt={hero.heroImageAlt}
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={(e) => { (e.target as any).style.display = 'none'; }}
                />
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-2xl border border-border/30 hidden sm:flex items-center gap-4"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Clock size={24} />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-secondary/40 leading-none mb-1 tracking-widest">Срок</div>
                <div className="text-sm md:text-base font-bold">1–2 седмици</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 z-20 bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-2xl border border-border/30 hidden sm:flex items-center gap-4"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-2xl flex items-center justify-center text-primary">
                <Zap size={24} />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-secondary/40 leading-none mb-1 tracking-widest">Оптимизация</div>
                <div className="text-sm md:text-base font-bold text-foreground">SEO Структура</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}