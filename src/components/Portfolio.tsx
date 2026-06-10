"use client";

import React from 'react';
import SectionHeader from './SectionHeader';
import { homeContent } from '@/content/home';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const { portfolio } = homeContent;

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title={portfolio.title} subtitle={portfolio.subtitle} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.projects.map((project, idx) => (
            <div key={idx} className="group rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-secondary-light relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="bg-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ExternalLink className="text-primary" />
                   </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary text-sm mb-6">{project.description}</p>
                <Button variant="outline" className="text-primary font-bold p-0 h-auto">
                  Виж проекта
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;