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
      {/* Decorative Background Blob */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-accent/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-[1.2] text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">
              <ShieldCheck size={14} />
              Професионална изработка
            </div>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 md:mb-8 tracking-tight">
              {hero.title}
            </h1>
            <p className="text-base md:text-xl text-secondary mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 opacity-90">
              {hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10 md:mb-12">
              <Button variant="primary" size="lg" href="#kontakti" className="w-full sm:w-auto px-10">
                {hero.primaryCTA}
              </Button>
              <Button variant="outline" size="lg" href="#portfolio" className="w-full sm:w-auto px-10">
                {hero.secondaryCTA}
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-border/50">
              {hero.trustItems.slice(0, 3).map((item) => (
                <div key={item} className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="text-primary h-4 w-4 shrink-0" />
                  <span className="text-[10px] md:text-sm font-bold text-secondary/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 w-full relative max-w-[600px] lg:max-w-none mx-auto"
          >
            <div className="relative z-10 aspect-[4/3] w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.08)] border-[4px] md:border-[8px] border-white bg-white group">
              <div className="relative w-full h-full rounded-[1rem] md:rounded-[1.5rem] overflow-hidden bg-primary-soft/20">
                <Image
                  src={hero.heroImage}
                  alt={hero.heroImageAlt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Floating Badges - Optimized for Tablet/Desktop */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 z-20 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg border border-border/40 hidden sm:flex items-center gap-3"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center text-primary">
                <Clock size={18} />
              </div>
              <div>
                <div className="text-[8px] md:text-[10px] uppercase font-bold text-secondary/60 leading-none mb-1">Срок</div>
                <div className="text-xs md:text-sm font-bold">1–2 седмици</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg border border-border/40 hidden sm:flex items-center gap-3"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded-lg md:rounded-xl flex items-center justify-center text-primary">
                <Zap size={18} />
              </div>
              <div>
                <div className="text-[8px] md:text-[10px] uppercase font-bold text-secondary/60 leading-none mb-1">Оптимизация</div>
                <div className="text-xs md:text-sm font-bold text-foreground">SEO Структура</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}