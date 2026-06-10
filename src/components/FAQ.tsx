import React from 'react';
import SectionHeader from './SectionHeader';
import { homeContent } from '@/content/home';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const { faq } = homeContent;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader title={faq.title} />
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faq.items.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-2xl px-6 bg-secondary-light/30">
              <AccordionTrigger className="text-left font-bold text-foreground py-6 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-base pb-6">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;