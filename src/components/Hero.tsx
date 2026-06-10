"use client";

import Image from "next/image";
import { homeContent } from "@/content/home";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Smartphone, 
  Search, 
  CloudOff, 
  Code,
  Tag,
  Globe
} from "lucide-react";
import Button from "./Button";
import { cn } from "@/lib/utils";

const FloatingBadge = ({ 
  children, 
  icon: Icon, 
  className, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  icon: any; 
  className?: string; 
  delay?: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={cn(
      "absolute z-30 bg-white/80 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_rgba(184,145,79,0.12)] px-4 py-2.5 rounded-2xl flex items-center gap-2.5",
      className
    )}
  >
    <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
      <Icon size={16} strokeWidth={2.5} />
    </div>
    <span className="text-xs md:text-sm font-bold text-secondary whitespace-nowrap">{children}</span>
  </motion.div>
);

export default function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative pt-24 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-background">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content - Reduced flex to give more space to image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 lg:flex-[0.8] text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <ShieldCheck size={14} />
              Професионална изработка
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[5.2rem] font-bold text-foreground leading-[1.05] mb-8 tracking-tight">
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

            {hero.trustItems && hero.trustItems.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 border-t border-border/40">
                {hero.trustItems.slice(0, 3).map((item) => (
                  <div key={item} className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle2 className="text-primary h-5 w-5 shrink-0" />
                    <span className="text-sm md:text-base font-bold text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Visual Showcase - Increased flex and size */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 lg:flex-[1.4] w-full relative max-w-[850px] lg:max-w-none mx-auto py-10 lg:py-0"
          >
            {/* Subtle Radial Glow Behind Image */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(184,145,79,0.15)_0%,_transparent_70%)] pointer-events-none transform scale-150" />

            <div className="relative z-10 w-full aspect-[16/11] group">
              <div className="relative w-full h-full rounded-[3rem] md:rounded-[4rem] overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                {/* CSS Placeholder / UI Background */}
                <div className="absolute inset-0 p-8 flex flex-col gap-4 opacity-20 bg-primary/5">
                  <div className="h-8 w-1/3 bg-primary/20 rounded-full" />
                  <div className="h-40 w-full bg-primary/10 rounded-3xl" />
                </div>
                
                <Image
                  src={hero.heroImage}
                  alt={hero.heroImageAlt}
                  fill
                  priority
                  className="object-contain lg:object-cover drop-shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  onError={(e) => { (e.target as any).style.display = 'none'; }}
                />

                {/* Soft Fade Mask at edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-30 pointer-events-none" />
              </div>
            </div>

            {/* Premium Floating Badges */}
            <FloatingBadge 
              icon={Tag} 
              className="top-0 right-[-2%] md:top-[8%] md:right-[-2%]" 
              delay={0.2}
            >
              Цена 350 евро
            </FloatingBadge>

            <FloatingBadge 
              icon={Clock} 
              className="top-[-8%] left-[5%] md:top-[5%] md:left-[-5%]" 
              delay={0.4}
            >
              Готов за 1–2 седмици
            </FloatingBadge>

            <FloatingBadge 
              icon={Search} 
              className="hidden md:flex top-[35%] left-[-22%]" 
              delay={0.6}
            >
              Google-ready сайт
            </FloatingBadge>

            <FloatingBadge 
              icon={Smartphone} 
              className="bottom-[2%] right-[2%] md:bottom-[12%] md:right-[-8%]" 
              delay={0.8}
            >
              Мобилна версия
            </FloatingBadge>

            <FloatingBadge 
              icon={CloudOff} 
              className="hidden lg:flex bottom-[8%] left-[-15%]" 
              delay={1.0}
            >
              Без месечен хостинг
            </FloatingBadge>

            <FloatingBadge 
              icon={Code} 
              className="hidden xl:flex top-[62%] right-[-12%]" 
              delay={1.2}
            >
              Достъп до файловете
            </FloatingBadge>

            <FloatingBadge 
              icon={Globe} 
              className="hidden lg:flex top-[80%] left-[2%]" 
              delay={1.4}
            >
              SEO структура
            </FloatingBadge>

            <FloatingBadge 
              icon={ShieldCheck} 
              className="hidden xl:flex top-[22%] right-[22%]" 
              delay={1.6}
            >
              Достъп до хостинга
            </FloatingBadge>

          </motion.div>
        </div>
      </div>
    </section>
  );
}