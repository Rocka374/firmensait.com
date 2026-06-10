"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import Card from "./Card";

export default function PortfolioPreview() {
  const { portfolio } = homeContent;

  return (
    <section id="portfolio" className="py-32 md:py-44 bg-white">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <SectionHeader title={portfolio.title} subtitle={portfolio.subtitle} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {portfolio.projects.map((project, idx) => (
            <Card key={idx} className="p-0 overflow-hidden group border-none bg-transparent hover:shadow-none">
              <div className="relative aspect-[16/10] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-border/30 mb-12 bg-secondary-light">
                {/* CSS Website UI Placeholder */}
                <div className="absolute inset-0 p-8 flex flex-col gap-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-6 w-16 bg-primary rounded-full" />
                    <div className="flex gap-3">
                      <div className="h-3 w-10 bg-primary rounded-full" />
                      <div className="h-3 w-10 bg-primary rounded-full" />
                    </div>
                  </div>
                  <div className="h-44 w-full bg-primary/40 rounded-[2rem]" />
                  <div className="h-5 w-3/4 bg-primary/30 rounded-full" />
                </div>

                <div className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur-md px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-primary shadow-lg">
                  {project.title}
                </div>
                
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onError={(e) => { (e.target as any).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="px-4">
                <h3 className="text-4xl font-bold mb-5 text-foreground tracking-tight">{project.title}</h3>
                <p className="text-xl text-secondary/70 mb-10 leading-relaxed line-clamp-2 font-medium">{project.description}</p>
                <div className="inline-flex items-center gap-4 text-primary font-bold text-lg group/link cursor-pointer">
                  <span className="relative">
                    Виж проекта
                    <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
                  </span>
                  <span className="transform group-hover/link:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}