import SectionHeader from "../SectionHeader";
import IndustryPortfolioCarousel from "./IndustryPortfolioCarousel";

interface IndustryShowcaseProps {
  images: { src: string; alt: string }[];
  title: string;
  subtitle?: string;
}

export default function IndustryShowcase({ images, title, subtitle }: IndustryShowcaseProps) {
  const defaultSubtitle = "Разгледайте примерна структура и дизайн, съобразени с нуждите на този тип бизнес.";
  
  return (
    <section id="primerna-vizia" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <SectionHeader 
          title={`Примерна визия за ${title.replace("Сайт за ", "")}`}
          subtitle={subtitle || defaultSubtitle}
          className="max-w-3xl"
        />
      </div>
      
      <IndustryPortfolioCarousel images={images} />
    </section>
  );
}