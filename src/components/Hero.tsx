"use client";

import Image from "next/image";
import { homeContent } from "@/content/home";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-8 leading-relaxed">
              {hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="primary" size="lg" href="#kontakti">
                {hero.primaryCTA}
              </Button>
              <Button variant="outline" size="lg" href="#portfolio">
                {hero.secondaryCTA}
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {hero.trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-white p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-primary-soft/30">
                <Image
                  src={hero.heroImage}
                  alt={hero.heroImageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}