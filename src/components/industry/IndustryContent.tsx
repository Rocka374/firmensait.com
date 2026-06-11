import SectionHeader from "../SectionHeader";

interface Section {
  h2: string;
  paragraphs: string[];
}

export default function IndustryContent({ title, sections }: { title: string, sections: Section[] }) {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader 
          title={`Защо сайтът е важен за ${title.replace("Сайт за ", "")}?`}
          align="left"
          className="mb-16"
        />
        
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-lg md:text-xl text-secondary/80 leading-relaxed font-medium">
                  {p === "Placeholder текст." || p === "Placeholder." 
                    ? "Тук ще бъде добавен основният SEO текст за конкретния бранш. Текстът ще обяснява защо професионалният сайт е важен, как клиентите търсят услугата онлайн и как добре структурираната страница помага за доверие и повече запитвания. Секцията е подготвена за по-дълго съдържание с естествено използване на ключови думи, H2/H3 структура и ясни параграфи."
                    : p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}