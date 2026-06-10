"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioPreview() {
  const { portfolio } = homeContent;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % portfolio.projects.length);
  }, [portfolio.projects.length]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + portfolio.projects.length) % portfolio.projects.length);
  }, [portfolio.projects.length]);

  // Reset scroll position and restart auto-scroll on project change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
    setIsAutoScrolling(true);
  }, [currentIndex]);

  // Auto-scroll logic
  useEffect(() => {
    if (!isAutoScrolling || !scrollRef.current) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 2) {
          scrollRef.current.scrollTop = 0;
        } else {
          scrollRef.current.scrollTop += 0.8; // Very smooth slow scroll
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isAutoScrolling, currentIndex]);

  const handleInteraction = () => {
    setIsAutoScrolling(false);
    if (autoScrollTimer.current) clearTimeout(autoScrollTimer.current);
    autoScrollTimer.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000); // Resume auto-scroll after 5s of inactivity
  };

  const getProjectIndex = (offset: number) => {
    return (currentIndex + offset + portfolio.projects.length) % portfolio.projects.length;
  };

  const activeProject = portfolio.projects[currentIndex];

  return (
    <section id="portfolio" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <SectionHeader title={portfolio.title} subtitle={portfolio.subtitle} />
      </div>

      <div className="relative w-full max-w-[1600px] mx-auto px-4">
        <div className="perspective-1000 relative h-[450px] md:h-[680px] flex items-center justify-center">
          
          {/* Previous Card (Left) */}
          <motion.div 
            key={`left-${getProjectIndex(-1)}`}
            initial={{ opacity: 0, x: -100, scale: 0.7 }}
            animate={{ opacity: 0.4, x: "-55%", scale: 0.8, rotateY: -15, rotateZ: -2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute hidden lg:block w-[750px] aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-border/40 bg-white blur-[2px] z-10 pointer-events-none shadow-2xl"
          >
             <Image 
              src={portfolio.projects[getProjectIndex(-1)].image} 
              alt="Previous" 
              fill 
              className="object-cover object-top"
              sizes="800px"
            />
          </motion.div>

          {/* Active Card (Center) */}
          <div className="relative w-full max-w-[950px] aspect-[16/10] z-30">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="relative w-full h-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-white border border-border/50 shadow-[0_50px_100px_rgba(184,145,79,0.15)] group"
                onMouseEnter={() => setIsAutoScrolling(false)}
                onMouseLeave={() => setIsAutoScrolling(true)}
              >
                {/* Scrollable Content Container */}
                <div 
                  ref={scrollRef}
                  onScroll={handleInteraction}
                  className="relative w-full h-full overflow-y-auto no-scrollbar bg-muted/20 overscroll-contain"
                >
                  <div className="relative w-full h-auto">
                    <Image
                      src={activeProject.image}
                      alt={activeProject.imageAlt}
                      width={1200}
                      height={4000}
                      className="w-full h-auto block"
                      priority
                    />
                  </div>
                </div>
                
                {/* Navigation Arrows (On Card Overlay) */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevProject(); }}
                    className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all pointer-events-auto active:scale-90"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextProject(); }}
                    className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all pointer-events-auto active:scale-90"
                  >
                    <ChevronRight size={28} />
                  </button>
                </div>

                {/* Hint: Manual Scroll */}
                <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                   <div className="bg-black/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                     Scroll to explore
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Card (Right) */}
          <motion.div 
            key={`right-${getProjectIndex(1)}`}
            initial={{ opacity: 0, x: 100, scale: 0.7 }}
            animate={{ opacity: 0.4, x: "55%", scale: 0.8, rotateY: 15, rotateZ: 2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute hidden lg:block w-[750px] aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-border/40 bg-white blur-[2px] z-10 pointer-events-none shadow-2xl"
          >
             <Image 
              src={portfolio.projects[getProjectIndex(1)].image} 
              alt="Next" 
              fill 
              className="object-cover object-top"
              sizes="800px"
            />
          </motion.div>
        </div>

        {/* Info Panel & Controls */}
        <div className="mt-16 md:mt-24 text-center max-w-3xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="space-y-4">
                <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em]">
                  {activeProject.category}
                </span>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                  {activeProject.title}
                </h3>
                <p className="text-lg md:text-xl text-secondary/70 font-medium leading-relaxed max-w-xl mx-auto">
                  {activeProject.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 mt-4">
                <Button size="lg" className="min-w-[200px]" href="#kontakti">
                  Изпрати запитване
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>

                <div className="flex items-center gap-6">
                  <button onClick={prevProject} className="p-4 rounded-full border border-border hover:bg-white transition-all active:scale-90">
                    <ChevronLeft className="text-secondary" />
                  </button>
                  <div className="flex items-center gap-3 font-black text-sm text-primary tracking-widest">
                    <span>{(currentIndex + 1).toString().padStart(2, '0')}</span>
                    <span className="w-10 h-px bg-primary/20" />
                    <span className="text-secondary/30">{portfolio.projects.length.toString().padStart(2, '0')}</span>
                  </div>
                  <button onClick={nextProject} className="p-4 rounded-full border border-border hover:bg-white transition-all active:scale-90">
                    <ChevronRight className="text-secondary" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}