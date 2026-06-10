import React from 'react';
import { homeContent } from '@/content/home';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const { hero } = homeContent;

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-8 leading-relaxed max-w-2xl">
              {hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 py-7 text-lg">
                {hero.primaryCTA}
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-foreground hover:bg-primary-soft rounded-full px-8 py-7 text-lg">
                {hero.secondaryCTA}
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6">
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
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-white p-2">
              <div className="aspect-[4/3] bg-primary-soft flex items-center justify-center text-primary/40 text-xl font-medium">
                {/* Тук ще се зареди /images/home/home-hero.jpg */}
                <img 
                  src={hero.heroImage} 
                  alt={hero.heroImageAlt}
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as any).parentElement.innerText = 'Home Hero Image Mockup';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;