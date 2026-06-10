"use client";

import Image from "next/image";
import { homeContent } from "@/content/home";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
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

const HeroBadge = ({ 
  children, 
  icon: Icon, 
  className
}: { 
  children: React.ReactNode; 
  icon: any; 
  className?: string; 
}) => (
  <div className={cn(
    "bg-white/60 backdrop-blur-sm border border-border/40 px-4 py-3.5 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300",
    className
  )}>
    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
      <Icon size={16} className="md:w-5 md:h-5" strokeWidth={2.5} />
    </div>
    <span className="text-xs sm:text-sm font-bold text-secondary whitespace-nowrap">{children}</span>
  </div>
);

export default function Hero() {
  const { hero } = homeContent;

  const badges = [
    { label: "Цена 350 евро", icon: Tag },
    { label: "Готов за 1–2 седмици", icon: Clock },
    { label: "Google-ready сайт", icon: Search },
    { label: "Мобилна версия", icon: Smartphone },
    { label: "Без месечен хостинг", icon: CloudOff },
    { label: "Достъп до файловете", icon: Code },
    { label: "SEO структура", icon: Globe },
    { label: "Достъп до хостинга", icon: ShieldCheck },
  ];

  return (
    <section className="relative pt-24 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-background">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center mb-16 md:mb-24 gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="flex-1 lg:flex-[0.9] text-center lg:text-left relative z-20">
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
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button variant="primary" size="lg" href="#kontakti" className="w-full sm:w-auto px-12 py-5 shadow-xl shadow-primary/20">
                {hero.primaryCTA}
              </Button>
              <Button variant="outline" size="lg" href="#portfolio" className="w-full sm:w-auto px-12 py-5">
                {hero.secondaryCTA}
              </Button>
            </div>
          </div>

          {/* Right Visual Showcase - Cleaned from shadows and animations */}
          <div className="flex-1 lg:flex-[1.1] w-full relative max-w-[850px] lg:max-w-none mx-auto py-10 lg:py-0 z-10">
            {/* Subtle Radial Glow Behind Image */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(184,145,79,0.12)_0%,_transparent_70%)] pointer-events-none transform scale-150" />

            <div className="relative z-10 w-full aspect-[16/11]">
              <div className="relative w-full h-full">
                <Image
                  src={hero.heroImage}
                  alt={hero.heroImageAlt}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  onError={(e) => { (e.target as any).style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Badges Grid - 1 per row on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, idx) => (
            <HeroBadge key={idx} icon={badge.icon}>
              {badge.label}
            </HeroBadge>
          ))}
        </div>
      </div>
    </section>
  );
}