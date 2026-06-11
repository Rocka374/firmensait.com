import { IndustryPageContent } from "@/content/industries/types";
import Card from "../Card";

export default function IndustryContent({ sections, benefits }: { sections: IndustryPageContent['sections'], benefits: IndustryPageContent['benefits'] }) {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="space-y-24">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{section.h2}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-lg md:text-xl text-secondary/70 leading-relaxed font-medium">
                      {p}
                    </p>
                  ))}
                </div>
                {section.h3Items && (
                  <div className="grid grid-cols-1 gap-6">
                    {section.h3Items.map((item, iIdx) => (
                      <div key={iIdx} className="p-6 bg-[#FAF8F4] rounded-2xl border border-border/40">
                        <h3 className="text-xl font-bold mb-2">{item.h3}</h3>
                        <p className="text-secondary/60 font-medium">{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-10 text-center">
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-secondary/70 font-medium">{benefit.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}