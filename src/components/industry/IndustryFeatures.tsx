import SectionHeader from "../SectionHeader";
import { sharedFeatures } from "@/content/industries/shared";
import Card from "../Card";

export default function IndustryFeatures() {
  return (
    <section className="py-24 md:py-36 bg-[#FAF8F4]">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeader 
          title="Какво включва сайтът?"
          subtitle="Всеки многостраничен сайт е изграден с фокус върху функционалността и видимостта."
          className="mb-16 md:mb-20"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {sharedFeatures.map((feature, idx) => (
            <Card key={idx} className="p-8 md:p-10 bg-white border-transparent hover:shadow-xl hover:shadow-primary/5">
              <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-6">
                <feature.icon size={22} strokeWidth={2} />
              </div>
              <h3 className="font-bold text-lg mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-secondary/60 text-sm font-medium leading-relaxed">{feature.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}