import SectionHeader from "../SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function IndustryFAQ({ items }: { items: { q: string, a: string }[] }) {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader title="Често задавани въпроси" className="mb-16" />
        <Accordion type="single" collapsible className="w-full space-y-4">
          {items.map((item, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`} className="border border-border/40 rounded-2xl px-6 md:px-10 bg-[#FAF8F4]/50">
              <AccordionTrigger className="text-left font-bold text-lg md:text-xl py-6 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-secondary/70 text-lg pb-6 leading-relaxed font-medium">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}