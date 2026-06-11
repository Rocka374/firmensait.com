"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MousePointer2 } from "lucide-react";

interface Props {
  images: { src: string; alt: string }[];
}

export default function IndustryPortfolioCarousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const getIndex = (offset: number) => (currentIndex + offset + images.length) % images.length;

  return (
    <div className="relative w-full max-w-[1600px] mx-auto">
      <div className="perspective-1000 relative h-[300px] sm:h-[450px] md:h-[720px] flex items-center justify-center overflow-hidden py-10">
        
        {/* Previous Card (Left) */}
        <motion.div 
          key={`left-${getIndex(-1)}`}
          animate={{ opacity: 0.3, x: "-55%", scale: 0.75, rotateY: -20, rotateZ: -2 }}
          transition={{ duration: 0.6 }}
          className="absolute hidden lg:block w-[800px] aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-border/40 bg-white blur-[1px] z-10 pointer-events-none shadow-2xl"
        >
           <Image src={images[getIndex(-1)].src} alt="Previous" fill className="object-cover object-top" sizes="800px" />
        </motion.div>

        {/* Active Card (Center) */}
        <div className="relative w-full max-w-[1000px] h-full z-30 group px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="relative w-full h-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden bg-white border border-border/50 shadow-[0_40px_80px_rgba(184,145,79,0.12)]"
            >
              <div className="relative w-full h-full overflow-y-auto no-scrollbar scroll-smooth overscroll-contain">
                 <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  width={1200}
                  height={3000}
                  className="w-full h-auto block"
                  priority
                />
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none animate-pulse">
                <div className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                  <MousePointer2 size={14} className="rotate-90" />
                  Scroll
                </div>
              </div>

              {/* Nav Buttons (Hover only) */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={prev} className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-primary pointer-events-auto hover:bg-primary hover:text-white transition-all active:scale-90">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={next} className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-primary pointer-events-auto hover:bg-primary hover:text-white transition-all active:scale-90">
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Card (Right) */}
        <motion.div 
          key={`right-${getIndex(1)}`}
          animate={{ opacity: 0.3, x: "55%", scale: 0.75, rotateY: 20, rotateZ: 2 }}
          transition={{ duration: 0.6 }}
          className="absolute hidden lg:block w-[800px] aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-border/40 bg-white blur-[1px] z-10 pointer-events-none shadow-2xl"
        >
           <Image src={images[getIndex(1)].src} alt="Next" fill className="object-cover object-top" sizes="800px" />
        </motion.div>
      </div>

      {/* Navigation Indicators */}
      <div className="mt-12 flex flex-col items-center gap-6">
        <div className="flex items-center gap-5">
           <button onClick={prev} className="p-3 rounded-full border border-border hover:bg-white transition-all active:scale-90">
             <ChevronLeft size={20} className="text-secondary" />
           </button>
           <div className="flex items-center gap-3 font-black text-xs text-primary tracking-widest">
             <span>{(currentIndex + 1).toString().padStart(2, '0')}</span>
             <span className="w-8 h-px bg-primary/20" />
             <span className="text-secondary/30">{images.length.toString().padStart(2, '0')}</span>
           </div>
           <button onClick={next} className="p-3 rounded-full border border-border hover:bg-white transition-all active:scale-90">
             <ChevronRight size={20} className="text-secondary" />
           </button>
        </div>
      </div>
    </div>
  );
}