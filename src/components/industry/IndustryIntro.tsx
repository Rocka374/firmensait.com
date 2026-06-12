import SectionHeader from "../SectionHeader";

export default function IndustryIntro({ text }: { text: string }) {
  const placeholder = "Тук ще бъде добавен кратък въвеждащ текст за конкретния бранш, услугите и начина, по който сайтът помага на бизнеса да се представи професионално онлайн.";
  
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-[#FAF8F4]/50 border border-border/30 rounded-[2.5rem] p-10 md:p-16 text-center shadow-sm">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
            За страницата
          </div>
          <p className="text-xl md:text-3xl text-foreground/80 font-bold leading-relaxed tracking-tight italic">
            „{text === "Placeholder текст." ? placeholder : text}“
          </p>
        </div>
      </div>
    </section>
  );
}