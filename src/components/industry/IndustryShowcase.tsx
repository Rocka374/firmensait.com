import Image from "next/image";
import SectionHeader from "../SectionHeader";

interface IndustryShowcaseProps {
  images: { src: string; alt: string }[];
  title: string;
}

export default function IndustryShowcase({ images, title }: IndustryShowcaseProps) {
  return (
    <section id="primerna-vizia" className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeader 
          title={`Примерна визия за ${title.replace("Сайт за ", "")}`}
          subtitle="Разгледайте примерна структура и дизайн, съобразени с нуждите на този тип бизнес."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Main Large Image */}
          <div className="md:col-span-8 rounded-[2.5rem] overflow-hidden border border-border/40 shadow-2xl">
             <div className="aspect-[16/10] relative">
                <Image 
                  src={images[0].src} 
                  alt={images[0].alt} 
                  fill 
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
             </div>
          </div>

          {/* Side Cards */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {images.slice(1, 3).map((img, idx) => (
              <div key={idx} className="rounded-[2rem] overflow-hidden border border-border/40 shadow-lg aspect-square relative">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}