"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import { ChevronLeft, ChevronRight, ExternalLink, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioPreview() {
  const { portfolio } = homeContent;
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollDirection = useRef(1);
  const isHovered = useRef(false);
  const userPaused = useRef(false);
  const isProgrammaticScroll = useRef(false);
  const resumeTimer = useRef<NodeJS.Timeout | null>(null);
  const requestRef = useRef<number | null>(null);

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % portfolio.projects.length);
  }, [portfolio.projects.length]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + portfolio.projects.length) % portfolio.projects.length);
  }, [portfolio.projects.length]);

  const clearTimers = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    if (requestRef.current) cancelAnimationFrame(requestRef.current);
  };

  const scheduleResume = (delay = 3000) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      userPaused.current = false;
    }, delay);
  };

  const pauseForUserInteraction = () => {
    userPaused.current = true;
    scheduleResume(5000);
  };

  const animate = useCallback(() => {
    if (scrollRef.current && !isHovered.current && !userPaused.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const maxScroll = scrollHeight - clientHeight;

      if (maxScroll > 0) {
        if (scrollTop >= maxScroll - 1) {
          scrollDirection.current = -1;
        } else if (scrollTop <= 0) {
          scrollDirection.current = 1;
        }

        const speed = 0.6;
        const newScrollTop = scrollTop + (speed * scrollDirection.current);

        isProgrammaticScroll.current = true;
        scrollRef.current.scrollTop = newScrollTop;
        
        requestAnimationFrame(() => {
          isProgrammaticScroll.current = false;
        });
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    clearTimers();
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
    scrollDirection.current = 1;
    userPaused.current = false;
    requestRef.current = requestAnimationFrame(animate);
    
    return () => clearTimers();
  }, [currentIndex, animate]);

  const getProjectIndex = (offset: number) => {
    return (currentIndex + offset + portfolio.projects.length) % portfolio.projects.length;
  };

  const activeProject = portfolio.projects[currentIndex];
  const prevProjectData = portfolio.projects[getProjectIndex(-1)];
  const nextProjectData = portfolio.projects[getProjectIndex(1)];

  return (
    <section id="portfolio" className="py-12 md:py-40 bg-white overflow-hidden max-w-full">
      <div className="container mx-auto px-4 mb-8 md:mb-16">
        <SectionHeader 
          title={portfolio.title} 
          subtitle={portfolio.subtitle} 
          className="max-w-2xl"
        />
      </div>

      <div className="relative w-full max-w-[1600px] mx-auto px-4">
        <div className="perspective-1000 relative h-[280px] sm:h-[400px] md:h-[680px] flex items-center justify-center">
          
          <motion.div 
            key={`left-${getProjectIndex(-1)}`}
            initial={{ opacity: 0, x: -100, scale: 0.7 }}
            animate={{ opacity: 0.3, x: "-58%", scale: 0.72, rotateY: -22, rotateZ: -2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute hidden lg:block w-[850px] aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-border/40 bg-white blur-[2px] z-10 pointer-events-none shadow-2xl"
          >
             <Image 
              src={prevProjectData.image} 
              alt="Предишен проект" 
              fill 
              className="object-cover object-top"
              sizes="400px"
              loading="lazy"
            />
          </motion.div>

          <div className="relative w-full max-w-[1050px] h-full z-30">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -10 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="relative w-full h-full rounded-[1.5rem] md:rounded-[3.5rem] overflow-hidden bg-white border border-border/50 shadow-[0_30px_60px_rgba(184,145,79,0.12)] group"
                onMouseEnter={() => { isHovered.current = true; }}
                onMouseLeave={() => { isHovered.current = false; scheduleResume(2000); }}
              >
                <div 
                  ref={scrollRef}
                  onScroll={() => {
                    if (!isProgrammaticScroll.current) {
                      pauseForUserInteraction();
                    }
                  }}
                  onWheel={pauseForUserInteraction}
                  onTouchStart={pauseForUserInteraction}
                  onPointerDown={pauseForUserInteraction}
                  className="relative w-full h-full overflow-y-auto no-scrollbar bg-muted/10 overscroll-contain"
                >
                  <div className="relative w-full h-auto">
                    <Image
                      src={activeProject.image}
                      alt={activeProject.imageAlt}
                      width={1200}
                      height={4000}
                      className="w-full h-auto block"
                      // Първото изображение в списъка (което се вижда при зареждане) е priority
                      priority={currentIndex === 0}
                      loading={currentIndex === 0 ? undefined : "lazy"}
                      fetchPriority={currentIndex === 0 ? "high" : "auto"}
                      // Оптимизиран sizes: на мобилни е около 80-85% от екрана
                      sizes="(max-width: 768px) 85vw, 1050px"
                    />
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
                  <div className="flex flex-col items-center gap-2 animate-pulse">
                    <div className="bg-primary/90 backdrop-blur-md text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                      <MousePointer2 size={14} className="rotate-90" />
                      Scroll
                    </div>
                  </div>
                </div>

                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 hidden md:flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevProject(); }}
                    aria-label="Предишен проект"
                    className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all pointer-events-auto active:scale-90"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextProject(); }}
                    aria-label="Следващ проект"
                    className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all pointer-events-auto active:scale-90"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div 
            key={`right-${getProjectIndex(1)}`}
            initial={{ opacity: 0, x: 100, scale: 0.7 }}
            animate={{ opacity: 0.3, x: "58%", scale: 0.72, rotateY: 22, rotateZ: 2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute hidden lg:block w-[750px] aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-border/40 bg-white blur-[2px] z-10 pointer-events-none shadow-2xl"
          >
             <Image 
              src={nextProjectData.image} 
              alt="Следващ проект" 
              fill 
              className="object-cover object-top"
              sizes="400px"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="mt-8 md:mt-24 text-center max-w-2xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4 md:gap-6"
            >
              <div className="space-y-2 md:space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.15em]">
                  {activeProject.category}
                </span>
                <h3 className="text-2xl md:text-5xl font-bold tracking-tight text-foreground">
                  {activeProject.title}
                </h3>
                <p className="text-sm md:text-xl text-secondary/70 font-medium leading-relaxed max-w-lg mx-auto">
                  {activeProject.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-2 w-full max-w-xs sm:max-w-none">
                <Button size="lg" className="w-full sm:min-w-[200px] py-4" href="#kontakti">
                  Изпрати запитване
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>

                <div className="flex items-center gap-5">
                  <button 
                    onClick={prevProject} 
                    aria-label="Предишен проект"
                    className="p-3 rounded-full border border-border hover:bg-white transition-all active:scale-90"
                  >
                    <ChevronLeft size={20} className="text-secondary" />
                  </button>
                  <div className="flex items-center gap-3 font-black text-sm text-primary tracking-widest">
                    <span>{(currentIndex + 1).toString().padStart(2, '0')}</span>
                    <span className="w-6 h-px bg-primary/20" />
                    <span className="text-secondary/30">{portfolio.projects.length.toString().padStart(2, '0')}</span>
                  </div>
                  <button 
                    onClick={nextProject} 
                    aria-label="Следващ проект"
                    className="p-3 rounded-full border border-border hover:bg-white transition-all active:scale-90"
                  >
                    <ChevronRight size={20} className="text-secondary" />
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