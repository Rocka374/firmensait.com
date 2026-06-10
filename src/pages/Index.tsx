import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesGrid from '@/components/FeaturesGrid';
import Industries from '@/components/Industries';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { homeContent } from '@/content/home';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary-soft selection:text-primary">
      <Header />
      
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Bar / Quick Features */}
        <div className="bg-white border-y border-border py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {homeContent.trustBar.map((item, idx) => (
                <div key={idx} className="flex items-center justify-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                  <span className="text-secondary font-medium text-xs uppercase tracking-widest">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Business Types */}
        <FeaturesGrid 
          title={homeContent.businessTypes.title}
          subtitle={homeContent.businessTypes.description}
          items={homeContent.businessTypes.cards}
          columns={3}
          variant="white"
        />

        {/* 4. Industries Grid */}
        <Industries />

        {/* 5. Portfolio Preview */}
        <Portfolio />

        {/* 6. Features Breakdown */}
        <FeaturesGrid 
          title={homeContent.features.title}
          items={homeContent.features.items}
          columns={4}
          variant="light"
        />

        {/* 7. Pricing Section */}
        <Pricing />

        {/* 8. No Monthly Hosting Section */}
        <FeaturesGrid 
          title={homeContent.hosting.title}
          subtitle={homeContent.hosting.description}
          items={homeContent.hosting.items}
          columns={4}
          variant="white"
        />

        {/* 9. SEO Section */}
        <FeaturesGrid 
          title={homeContent.seo.title}
          subtitle={homeContent.seo.description}
          items={homeContent.seo.items}
          columns={3}
          variant="light"
        />

        {/* 10. How we work */}
        <Process />

        {/* 11. FAQ */}
        <FAQ />

        {/* 12. Final CTA Section */}
        <section id="kontakti" className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{homeContent.cta.title}</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">{homeContent.cta.description}</p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-12 py-8 text-xl font-bold shadow-xl transform hover:scale-105 transition-all">
              {homeContent.cta.button}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;