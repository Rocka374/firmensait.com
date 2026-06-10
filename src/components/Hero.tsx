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

// Reusable Premium Badge Component
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
    "bg-white/90 backdrop-blur-md border border-white/50 shadow-[0_12px_40px_rgba(184,145,79,0.12)] px-5 py-4 rounded-[1.5rem] flex items-center gap-4 transition-all duration-300 hover:shadow-[0_15px_45px_rgba(184,145,79,0.18)]",
    className
  )}>
    <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
      <Icon size={18} strokeWidth={2.5} />
    </div>
    <span className="text-sm font-bold text-secondary whitespace-nowrap">{children}</span>
  </div>
);

const FloatingBadge = ({ 
  children, 
  icon: Icon, 
  className,
  delay = 0
}: { 
  children: React.ReactNode; 
  icon: any; 
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={cn(
      "hidden md:flex absolute z-30 bg-white/90 backdrop-blur-md border border-white/50 shadow-[0_12px_40px_rgba(184,145,79,0.15)] px-5 py-3 rounded-[1.25rem] items-center gap-3 whitespace-nowrap",
      className
    )}
  >
    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
      <Icon size={18} strokeWidth={2.5} />
    </div>
    <span className="text-sm font-bold text-secondary">{children}</span>
  </motion.div>
);

export default function Hero() {
  const { hero } = homeContent;

  const primaryBadges = [
    { label: "Цена 350 евро", icon: Tag },
    { label: "Готов до 10 дни", icon: Clock },
    { label: "Без месечен хостинг", icon: CloudOff },
  ];

  const secondaryBadges = [
    { label: "SEO структура", icon: Search },
    { label: "Мобилна версия", icon: Smartphone },
    { label: "Достъп до файловете", icon: Code },
    { label: "Достъп до хостинга", icon: ShieldCheck },
  ];

  // Logic to highlight the price in H1
  const renderTitle = () => {
    const priceText = "350 евро";
    const parts = hero.title.split(priceText);
    
    return (
      <>
        {parts[0]}
        <span className="text-primary">{priceText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-48 md:pb-48 overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Soft Transition to white section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-0" />

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20 md:mb-28">
          
          {/* Left Content */}
          <div className="flex-1 lg:flex-[0.9] text-center lg:text-left relative z-20">
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[1.05] mb-8 tracking-tight">
              {renderTitle()}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-secondary/80 mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto lg:mx-0 font-medium">
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

          {/* Right Visual Showcase */}
          <div className="flex-1 lg:flex-[1.1] w-full relative max-w-[850px] lg:max-w-none mx-auto py-10 lg:py-0 z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(184,145,79,0.12)_0%,_transparent_70%)] pointer-events-none transform scale-150" />

            <div className="relative z-10 w-full aspect-[16/11]">
              {/* Desktop Floating Badges */}
              <FloatingBadge icon={Tag} className="top-[5%] right-[-2%]" delay={0.2}>
                Цена 350 евро
              </FloatingBadge>
              
              <FloatingBadge icon={Clock} className="top-[40%] left-[-8%]" delay={0.4}>
                Готов до 10 дни
              </FloatingBadge>
              
              <FloatingBadge icon={CloudOff} className="bottom-[5%] right-[10%]" delay={0.6}>
                Без месечен хостинг
              </FloatingBadge>

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

        {/* Mobile View Badge Grid */}
        <div className="flex flex-col md:hidden gap-4 mb-8">
          {[...primaryBadges, ...secondaryBadges].map((badge, idx) => (
            <HeroBadge key={idx} icon={badge.icon}>
              {badge.label}
            </HeroBadge>
          ))}
        </div>

        {/* Desktop View Secondary Badges Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryBadges.map((badge, idx) => (
            <HeroBadge key={idx} icon={badge.icon}>
              {badge.label}
            </HeroBadge>
          ))}
        </div>
      </div>
    </section>
  );
}