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
      <div className="perspective-1000 relative h-[320px] sm:h-[500px] md:h-[750px] flex items-center justify-center overflow-hidden py-10">
        
        {/* Previous Card */}
        <motion.div 
          key={`left-${getIndex(-1)}`}
          animate={{ opacity: 0.3, x: "-58%", scale: 0.72, rotateY: -22, rotateZ: -2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute hidden lg:block w-[850px] aspect-[16/10] rounded-[3rem] overflow-hidden border border-border/30 bg-white blur-[1px] z-10 pointer-events-none shadow-2xl"
        >
           <Image src={images[getIndex(-1)].src} alt="Previous" fill className="object-cover object-top" sizes="800px" />
        </motion.div>

        {/* Active Card */}
        <div className="relative w-full max-w-[1050px] h-full z-30 group px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="relative w-full h-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-white border border-border/40 shadow-[0_40px_100px_rgba(184,145,79,0.1)]"
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

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none animate-bounce">
                <div className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-full shadow-2xl border border-white/20 flex items-center gap-2">
                  <MousePointer2 size={14} className="rotate-90" />
                  Scroll
                </div>
              </div>

              <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button onClick={prev} className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-md shadow-2xl flex items-center justify-center text-primary pointer-events-auto hover:bg-primary hover:text-white transition-all active:scale-90 border border-border/30">
                  <ChevronLeft size={28} />
                </button>
                <button onClick={next} className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-md shadow-2xl flex items-center justify-center text-primary pointer-events-auto hover:bg-primary hover:text-white transition-all active:scale-90 border border-border/30">
                  <ChevronRight size={28} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Card */}
        <motion.div 
          key={`right-${getIndex(1)}`}
          animate={{ opacity: 0.3, x: "58%", scale: 0.72, rotateY: 22, rotateZ: 2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute hidden lg:block w-[850px] aspect-[16/10] rounded-[3rem] overflow-hidden border border-border/30 bg-white blur-[1px] z-10 pointer-events-none shadow-2xl"
        >
           <Image src={images[getIndex(1)].src} alt="Next" fill className="object-cover object-top" sizes="800px" />
        </motion.div>
      </div>

      <div className="mt-12 flex flex-col items-center">
        <div className="flex items-center gap-6">
           <button onClick={prev} className="p-4 rounded-full border border-border/50 hover:bg-white hover:border-primary/30 transition-all active:scale-90">
             <ChevronLeft size={20} className="text-secondary" />
           </button>
           <div className="flex items-center gap-4 font-black text-xs text-primary tracking-[0.2em]">
             <span>{(currentIndex + 1).toString().padStart(2, '0')}</span>
             <span className="w-10 h-px bg-primary/20" />
             <span className="text-secondary/30">{images.length.toString().padStart(2, '0')}</span>
           </div>
           <button onClick={next} className="p-4 rounded-full border border-border/50 hover:bg-white hover:border-primary/30 transition-all active:scale-90">
             <ChevronRight size={20} className="text-secondary" />
           </button>
        </div>
      </div>
    </div>
  );
}