import SectionHeader from "../SectionHeader";
import { Info } from "lucide-react";

interface Section {
  h2: string;
  paragraphs: string[];
}

export default function IndustryContent({ title, sections }: { title: string, sections: Section[] }) {
  return (
    <section className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-[40%]">
             <SectionHeader 
              title={`Защо сайтът е важен за ${title.replace("Сайт за ", "")}?`}
              align="left"
              className="mb-8"
            />
            <div className="bg-primary/[0.03] border-l-4 border-primary p-8 rounded-r-3xl">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shrink-0">
                  <Info size={14} strokeWidth={3} />
                </div>
                <p className="text-lg font-bold text-foreground/80 leading-relaxed">
                  Добре структурираният сайт помага на клиентите по-бързо да разберат услугите ви и да изпратят запитване с доверие.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-[60%] space-y-10">
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-8">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-xl text-secondary/80 leading-relaxed font-medium">
                    {p === "Placeholder текст." || p === "Placeholder." 
                      ? "Тук ще бъде добавен основният SEO текст за конкретния бранш. Текстът ще обяснява защо професионалният сайт е важен, как клиентите търсят услугата онлайн и как добре структурираната страница помага за доверие и повече запитвания. Секцията е подготвена за по-дълго съдържание с естествено използване на ключови думи, H2/H3 структура и ясни параграфи."
                      : p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}