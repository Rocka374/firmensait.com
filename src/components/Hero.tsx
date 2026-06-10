"use client";

import Image from "next/image";
import { homeContent } from "@/content/home";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Clock } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-background">
      {/* Decorative Background Blob */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-accent/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-[1.2] text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <ShieldCheck size={14} />
              Професионална изработка
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-8 tracking-tight">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
              <Button variant="primary" size="lg" href="#kontakti" className="px-12 py-5 shadow-xl shadow-primary/20">
                {hero.primaryCTA}
              </Button>
              <Button variant="outline" size="lg" href="#portfolio" className="px-12 py-5">
                {hero.secondaryCTA}
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {hero.trustItems.slice(0, 3).map((item) => (
                <div key={item} className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle2 className="text-primary h-5 w-5 shrink-0" />
                  <span className="text-sm font-bold text-secondary/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 w-full relative"
          >
            {/* Premium Mockup Frame */}
            <div className="relative z-10 aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-[8px] border-white bg-white group">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-primary-soft/30 transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={hero.heroImage}
                  alt={hero.heroImageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-border/50 hidden md:flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-secondary/60 leading-none mb-1">Срок</div>
                <div className="text-sm font-bold">1–2 седмици</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 z-20 bg-white p-4 rounded-2xl shadow-xl border border-border/50 hidden md:flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary">
                <Zap size={20} />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-secondary/60 leading-none mb-1">Оптимизация</div>
                <div className="text-sm font-bold text-foreground">SEO Структура</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}