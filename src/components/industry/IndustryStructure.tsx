import SectionHeader from "../SectionHeader";
import { standardPageStructure } from "@/content/industries/shared";

export default function IndustryStructure() {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader 
          title="Примерна структура на страницата"
          subtitle="Вашият сайт ще бъде организиран логично за максимално улеснение на потребителите."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {standardPageStructure.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 p-6 rounded-2xl border border-border/40 hover:bg-[#FAF8F4]/50 transition-colors group">
              <span className="text-4xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                {(idx + 1).toString().padStart(2, '0')}
              </span>
              <span className="text-xl font-bold text-foreground/80">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}