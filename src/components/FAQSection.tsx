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
    <section className="py-32 md:py-48 bg-white relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <SectionHeader title={homeContent.faq.title} className="mb-20 md:mb-24" />
        
        <Accordion type="single" collapsible className="w-full space-y-5">
          {homeContent.faq.items.map((item, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-${idx}`} 
              className="border border-border/40 rounded-[2rem] px-8 md:px-12 bg-secondary-light/20 overflow-hidden transition-all hover:bg-secondary-light/40 hover:border-primary/20"
            >
              <AccordionTrigger className="text-left font-bold text-xl md:text-2xl text-foreground py-8 md:py-10 hover:no-underline transition-colors group">
                <span className="group-hover:text-primary transition-colors">{item.q}</span>
              </AccordionTrigger>
              <AccordionContent className="text-secondary/70 text-lg md:text-xl pb-8 md:pb-10 leading-relaxed font-medium">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}