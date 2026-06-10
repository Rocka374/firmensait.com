import React from 'react';
import SectionHeader from './SectionHeader';
import { homeContent } from '@/content/home';
import * as Icons from 'lucide-react';

const Process = () => {
  const { process } = homeContent;

  return (
    <section id="kak-rabotim" className="py-20 bg-secondary-light overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader title={process.title} />
        
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {process.steps.map((step, idx) => {
              const IconComponent = (Icons as any)[step.icon] || Icons.Check;
              return (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary mb-6 shadow-lg">
                    <div className="relative">
                      <IconComponent size={32} />
                      <div className="absolute -top-1 -right-4 w-6 h-6 bg-primary text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-sm uppercase tracking-wider">{step.title}</h3>
                  <p className="text-secondary text-xs leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;