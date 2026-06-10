"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./Button";

export default function PortfolioPreview() {
  const { portfolio } = homeContent;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % portfolio.projects.length);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + portfolio.projects.length) % portfolio.projects.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const activeProject = portfolio.projects[currentIndex];

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeader title={portfolio.title} subtitle={portfolio.subtitle} />
        
        <div className="relative mt-12 lg:mt-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* 1. Large Screenshot Preview */}
            <div className="flex-1 w-full relative group">
              <div className="relative aspect-[16/10] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(184,145,79,0.15)] border border-border/40 bg-secondary-light">
                <div 
                  className={cn(
                    "relative w-full h-full transition-all duration-700 ease-out transform",
                    isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                  )}
                >
                  <Image
                    src={activeProject.image}
                    alt={activeProject.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  {/* Glass Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Navigation Arrows - Desktop Overlaid */}
              <div className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20">
                <button 
                  onClick={prevProject}
                  className="w-14 h-14 rounded-full bg-white shadow-xl border border-border/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110"
                >
                  <ChevronLeft size={28} />
                </button>
              </div>
              <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                <button 
                  onClick={nextProject}
                  className="w-14 h-14 rounded-full bg-white shadow-xl border border-border/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>

            {/* 2. Project Info Sidebar */}
            <div className="lg:w-[400px] flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className={cn(
                "transition-all duration-500",
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              )}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                  {activeProject.category || "Проект"}
                </span>
                
                <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                  {activeProject.title}
                </h3>
                
                <p className="text-lg md:text-xl text-secondary/70 mb-10 leading-relaxed font-medium">
                  {activeProject.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Button variant="primary" size="lg" href="#kontakti" className="w-full sm:w-auto px-10 py-5">
                    Искам такъв сайт
                  </Button>
                  
                  <div className="text-primary font-black text-sm uppercase tracking-widest flex items-center gap-2 group cursor-pointer">
                    {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1} 
                    <span className="text-secondary/30">/</span> 
                    {portfolio.projects.length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Mobile Navigation Controls */}
          <div className="flex md:hidden justify-center items-center gap-8 mt-12">
            <button 
              onClick={prevProject}
              className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center text-primary"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="text-lg font-black text-primary tracking-tighter">
              {currentIndex + 1} / {portfolio.projects.length}
            </div>
            <button 
              onClick={nextProject}
              className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center text-primary"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* 4. Thumbnails Scroll Area (Desktop) */}
          <div className="hidden lg:block mt-24 overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex gap-6 pb-4 overflow-x-auto no-scrollbar"
              style={{ scrollBehavior: 'smooth' }}
            >
              {portfolio.projects.map((project, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={cn(
                    "relative shrink-0 w-44 aspect-[16/10] rounded-2xl overflow-hidden border-2 transition-all duration-300",
                    currentIndex === idx ? "border-primary scale-105 shadow-lg" : "border-transparent opacity-40 hover:opacity-100"
                  )}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}