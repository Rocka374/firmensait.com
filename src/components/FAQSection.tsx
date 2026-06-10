"use client";

import SectionHeader from "./SectionHeader";
import { homeContent } from "@/content/home";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader title={homeContent.faq.title} />
        
        <Accordion type="single" collapsible className="w-full space-y-6">
          {homeContent.faq.items.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/40 rounded-[2rem] px-8 md:px-12 bg-secondary-light/30 overflow-hidden transition-all hover:border-primary/20">
              <AccordionTrigger className="text-left font-bold text-xl md:text-2xl text-foreground py-6 md:py-8 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-secondary/80 text-lg md:text-xl pb-6 md:pb-8 leading-relaxed font-medium">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}