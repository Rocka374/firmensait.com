import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import Card from "./Card";

export default function PortfolioPreview() {
  const { portfolio } = homeContent;

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title={portfolio.title} subtitle={portfolio.subtitle} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.projects.map((project, idx) => (
            <Card key={idx} className="p-0 overflow-hidden">
              <div className="relative aspect-video w-full bg-primary-soft/10">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary text-sm mb-6">{project.description}</p>
                <button className="text-primary font-bold text-sm flex items-center gap-2 group/btn">
                  Виж проекта
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}