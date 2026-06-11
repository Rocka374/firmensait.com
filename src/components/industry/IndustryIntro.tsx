import SectionHeader from "../SectionHeader";

export default function IndustryIntro({ text }: { text: string }) {
  const placeholder = "Тук ще бъде добавен кратък въвеждащ текст за конкретния бранш, услугите и начина, по който сайтът помага на бизнеса да се представи професионално онлайн.";
  
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
          За страницата
        </span>
        <p className="text-xl md:text-2xl text-secondary/70 font-medium leading-relaxed italic">
          "{text === "Placeholder текст." ? placeholder : text}"
        </p>
      </div>
    </section>
  );
}