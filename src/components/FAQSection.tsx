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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader title={homeContent.faq.title} />
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {homeContent.faq.items.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-2xl px-6 bg-secondary-light/30 overflow-hidden">
              <AccordionTrigger className="text-left font-bold text-foreground py-6 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-base pb-6 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}