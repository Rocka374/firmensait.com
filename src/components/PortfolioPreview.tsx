"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./Button";

export default function PortfolioPreview() {
  const { portfolio } = homeContent;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextProject = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % portfolio.projects.length);
  }, [portfolio.projects.length]);

  const prevProject = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + portfolio.projects.length) % portfolio.projects.length);
  }, [portfolio.projects.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "ArrowRight") nextProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextProject, prevProject]);

  const getProjectIndex = (offset: number) => {
    return (currentIndex + offset + portfolio.projects.length) % portfolio.projects.length;
  };

  const activeProject = portfolio.projects[currentIndex];

  return (
    <section id="portfolio" className="py-24 md:py-40 bg-secondary-light/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <SectionHeader title={portfolio.title} subtitle={portfolio.subtitle} />
      </div>

      {/* 3D Carousel Scene */}
      <div className="relative w-full max-w-[1600px] mx-auto px-4">
        <div className="perspective-1000 relative h-[400px] md:h-[650px] flex items-center justify-center">
          
          {/* Previous Card (Left) */}
          <div 
            className="absolute hidden lg:block w-[750px] aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-border/40 bg-white opacity-40 blur-[2px] transition-all duration-700 ease-out z-10 pointer-events-none transform -translate-x-[55%] scale-[0.8] -rotate-y-[15deg] -rotate-z-2 shadow-2xl"
          >
             <Image 
              src={portfolio.projects[getProjectIndex(-1)].image} 
              alt="Previous Project" 
              fill 
              className="object-cover object-top"
              sizes="800px"
            />
          </div>

          {/* Active Card (Center) */}
          <div className="relative w-full max-w-[950px] aspect-[16/10] z-30 transition-all duration-700 ease-out">
            <div className="group relative w-full h-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-white border border-border/50 shadow-[0_50px_100px_rgba(184,145,79,0.15)] transition-transform duration-500 hover:scale-[1.01]">
              
              {/* Scrolling Content */}
              <div className="relative w-full h-full overflow-hidden bg-muted/20">
                <div className="absolute inset-0 portfolio-scroll-active">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.imageAlt}
                    width={1200}
                    height={3000}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none" />
              </div>

              {/* Navigation Arrows (On Card) */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={(e) => { e.stopPropagation(); prevProject(); }}
                  className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all pointer-events-auto"
                >
                  <ChevronLeft size={28} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextProject(); }}
                  className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all pointer-events-auto"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>
          </div>

          {/* Next Card (Right) */}
          <div 
            className="absolute hidden lg:block w-[750px] aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-border/40 bg-white opacity-40 blur-[2px] transition-all duration-700 ease-out z-10 pointer-events-none transform translate-x-[55%] scale-[0.8] rotate-y-[15deg] rotate-z-2 shadow-2xl"
          >
             <Image 
              src={portfolio.projects[getProjectIndex(1)].image} 
              alt="Next Project" 
              fill 
              className="object-cover object-top"
              sizes="800px"
            />
          </div>
        </div>

        {/* Info Panel & Controls */}
        <div className="mt-16 md:mt-24 text-center max-w-3xl mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
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

              {/* Counter and Arrows for mobile/desktop backup */}
              <div className="flex items-center gap-6">
                <button onClick={prevProject} className="p-3 rounded-full border border-border hover:bg-white transition-colors group">
                  <ChevronLeft className="text-secondary group-hover:text-primary" />
                </button>
                <div className="flex items-center gap-3 font-black text-sm text-primary tracking-widest">
                  <span>{(currentIndex + 1).toString().padStart(2, '0')}</span>
                  <span className="w-10 h-px bg-primary/20" />
                  <span className="text-secondary/30">{portfolio.projects.length.toString().padStart(2, '0')}</span>
                </div>
                <button onClick={nextProject} className="p-3 rounded-full border border-border hover:bg-white transition-colors group">
                  <ChevronRight className="text-secondary group-hover:text-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}