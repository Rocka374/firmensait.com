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

const TrustRowItem = ({ icon: Icon, children }: { icon: any, children: React.ReactNode }) => (
  <div className="flex items-center gap-2.5">
    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
      <Icon size={12} strokeWidth={3} />
    </div>
    <span className="text-[11px] md:text-[13px] font-bold text-secondary/80 whitespace-nowrap">{children}</span>
  </div>
);

export default function Hero() {
  const { hero } = homeContent;

  const desktopTrustRow = [
    { label: "SEO структура", icon: Search },
    { label: "Мобилна версия", icon: Smartphone },
    { label: "Достъп до файловете", icon: Code },
    { label: "Достъп до хостинга", icon: ShieldCheck },
  ];

  const mobileProofGrid = [
    { label: "Цена 350 евро", icon: Tag },
    { label: "Готов за 1–2 седмици", icon: Clock },
    { label: "Без месечен хостинг", icon: CloudOff },
    { label: "Мобилна версия", icon: Smartphone },
    { label: "SEO структура", icon: Search },
    { label: "Достъп до файловете", icon: Code },
  ];

  return (
    <section className="relative pt-24 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="flex-1 lg:flex-[0.9] text-center lg:text-left relative z-20">
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[1.05] mb-8 tracking-tight">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-secondary/80 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              {hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10 md:mb-12">
              <Button variant="primary" size="lg" href="#kontakti" className="w-full sm:w-auto px-12 py-5 shadow-xl shadow-primary/20">
                {hero.primaryCTA}
              </Button>
              <Button variant="outline" size="lg" href="#portfolio" className="w-full sm:w-auto px-12 py-5">
                {hero.secondaryCTA}
              </Button>
            </div>

            {/* Desktop Trust Row */}
            <div className="hidden md:flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 pt-10 border-t border-border/40">
              {desktopTrustRow.map((item, idx) => (
                <TrustRowItem key={idx} icon={item.icon}>{item.label}</TrustRowItem>
              ))}
            </div>

            {/* Mobile Proof Grid */}
            <div className="grid grid-cols-2 md:hidden gap-x-4 gap-y-5 pt-8 border-t border-border/40 text-left">
              {mobileProofGrid.map((item, idx) => (
                <TrustRowItem key={idx} icon={item.icon}>{item.label}</TrustRowItem>
              ))}
            </div>
          </div>

          {/* Right Visual Showcase */}
          <div className="flex-1 lg:flex-[1.1] w-full relative max-w-[850px] lg:max-w-none mx-auto py-10 lg:py-0 z-10">
            {/* Glow Behind Image */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(184,145,79,0.12)_0%,_transparent_70%)] pointer-events-none transform scale-150" />

            <div className="relative z-10 w-full aspect-[16/11]">
              {/* Desktop Floating Badges */}
              <FloatingBadge icon={Tag} className="top-[5%] right-[-2%]" delay={0.2}>
                Цена 350 евро
              </FloatingBadge>
              
              <FloatingBadge icon={Clock} className="top-[40%] left-[-8%]" delay={0.4}>
                Готов за 1–2 седмици
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
      </div>
    </section>
  );
}