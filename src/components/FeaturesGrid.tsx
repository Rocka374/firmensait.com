import React from 'react';
import SectionHeader from './SectionHeader';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureItem {
  title: string;
  description?: string;
  icon: string;
}

interface FeaturesGridProps {
  title: string;
  subtitle?: string;
  items: FeatureItem[];
  columns?: number;
  className?: string;
  id?: string;
  variant?: 'light' | 'white';
}

const FeaturesGrid = ({ title, subtitle, items, columns = 4, className, id, variant = 'white' }: FeaturesGridProps) => {
  return (
    <section id={id} className={cn(
      "py-20",
      variant === 'light' ? "bg-secondary-light" : "bg-white",
      className
    )}>
      <div className="container mx-auto px-4">
        <SectionHeader title={title} subtitle={subtitle} />
        
        <div className={cn(
          "grid gap-6 md:gap-8",
          columns === 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : 
          columns === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
        )}>
          {items.map((item, idx) => {
            const IconComponent = (Icons as any)[item.icon] || Icons.Check;
            return (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center text-primary mb-6">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                {item.description && (
                  <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;