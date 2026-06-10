import React from 'react';
import SectionHeader from './SectionHeader';
import { homeContent } from '@/content/home';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Industries = () => {
  const { industries } = homeContent;

  return (
    <section id="branshove" className="py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        <SectionHeader title={industries.title} subtitle={industries.subtitle} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {industries.items.map((item) => (
            <div 
              key={item} 
              className="bg-white p-6 rounded-xl border border-border flex items-center justify-between group hover:border-primary transition-colors cursor-default"
            >
              <span className="font-medium text-foreground">{item}</span>
              <ChevronRight className="text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" size={18} />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary-soft rounded-full px-8">
            {industries.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Industries;