import React from 'react';
import SectionHeader from './SectionHeader';
import { homeContent } from '@/content/home';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const { pricing } = homeContent;

  return (
    <section id="ceni" className="py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        <SectionHeader title={pricing.title} subtitle={pricing.description} />
        
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-border shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-border">
            <h3 className="text-2xl font-bold mb-8">Какво включва:</h3>
            <ul className="space-y-4">
              {pricing.includes.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-1 rounded-full text-primary">
                    <Check size={16} />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[380px] bg-primary-soft/30 p-8 md:p-12 flex flex-col justify-center text-center">
            <div className="mb-8">
              <span className="block text-secondary font-medium mb-2 uppercase tracking-widest text-xs">Цена</span>
              <span className="text-6xl font-bold text-primary">{pricing.price}</span>
              <p className="text-secondary mt-2 font-medium">{pricing.priceLabel}</p>
            </div>
            
            <Button className="w-full bg-primary hover:bg-primary-dark text-white rounded-full py-7 text-lg mb-8">
              {pricing.cta}
            </Button>

            <div className="text-left">
              <span className="block text-xs font-bold text-secondary uppercase mb-4 opacity-70">Не включва автоматично:</span>
              <ul className="space-y-2">
                {pricing.notIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-secondary">
                    <X size={14} className="opacity-50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;