import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import Card from "./Card";

export default function PortfolioPreview() {
  const { portfolio } = homeContent;

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title={portfolio.title} subtitle={portfolio.subtitle} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolio.projects.map((project, idx) => (
            <Card key={idx} className="p-0 overflow-hidden group border-none bg-transparent hover:shadow-none">
              <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden shadow-lg border border-border/30 mb-8">
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
                  {project.title}
                </div>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="px-4 text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">{project.title}</h3>
                <p className="text-secondary/70 text-sm mb-6 leading-relaxed line-clamp-2">{project.description}</p>
                <div className="inline-flex items-center gap-2 text-primary font-bold text-sm group/link cursor-pointer">
                  <span className="relative">
                    Виж проекта
                    <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
                  </span>
                  <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}