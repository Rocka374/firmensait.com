"use client";

import Image from "next/image";
import { homeContent } from "@/content/home";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Clock } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative pt-32 pb-24 md:pt-52 md:pb-48 overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-[1.3] text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-10 md:mb-12">
              <ShieldCheck size={16} />
              Професионална изработка
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold text-foreground leading-[1.02] mb-10 md:mb-12 tracking-tight">
              {hero.title}
            </h1>
            <p className="text-xl md:text-3xl text-secondary/80 mb-12 md:mb-16 leading-relaxed max-w-3xl mx-auto lg:mx-0 font-medium">
              {hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mb-16 md:mb-20">
              <Button variant="primary" size="xl" href="#kontakti" className="w-full sm:w-auto px-16 py-8 text-xl shadow-2xl shadow-primary/25">
                {hero.primaryCTA}
              </Button>
              <Button variant="outline" size="xl" href="#portfolio" className="w-full sm:w-auto px-16 py-8 text-xl">
                {hero.secondaryCTA}
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 pt-12 border-t border-border/40">
              {hero.trustItems.slice(0, 3).map((item) => (
                <div key={item} className="flex items-center gap-4 justify-center lg:justify-start">
                  <CheckCircle2 className="text-primary h-6 w-6 shrink-0" />
                  <span className="text-sm md:text-lg font-bold text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 w-full relative max-w-[800px] lg:max-w-none mx-auto"
          >
            {/* Premium Mockup Frame */}
            <div className="relative z-10 aspect-[16/11] w-full rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.12)] border-[8px] md:border-[16px] border-white bg-white group">
              <div className="relative w-full h-full rounded-[1.8rem] md:rounded-[2.8rem] overflow-hidden bg-secondary-light">
                {/* CSS Placeholder UI */}
                <div className="absolute inset-0 p-12 flex flex-col gap-6 opacity-30">
                  <div className="h-10 w-1/3 bg-primary/20 rounded-full" />
                  <div className="h-60 w-full bg-primary/10 rounded-[3rem]" />
                  <div className="grid grid-cols-3 gap-6">
                    <div className="h-32 bg-primary/5 rounded-3xl" />
                    <div className="h-32 bg-primary/5 rounded-3xl" />
                    <div className="h-32 bg-primary/5 rounded-3xl" />
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
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 z-20 bg-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl border border-border/30 hidden sm:flex items-center gap-6"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Clock size={32} />
              </div>
              <div>
                <div className="text-xs uppercase font-bold text-secondary/40 leading-none mb-1.5 tracking-widest">Срок</div>
                <div className="text-lg md:text-xl font-bold">1–2 седмици</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-12 -left-12 z-20 bg-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl border border-border/30 hidden sm:flex items-center gap-6"
            >
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary">
                <Zap size={32} />
              </div>
              <div>
                <div className="text-xs uppercase font-bold text-secondary/40 leading-none mb-1.5 tracking-widest">Оптимизация</div>
                <div className="text-lg md:text-xl font-bold text-foreground">SEO Структура</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}