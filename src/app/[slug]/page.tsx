"use client";

import { notFound } from "next/navigation";
import { industries, industriesBySlug } from "@/content/industries";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryShowcase from "@/components/industry/IndustryShowcase";
import IndustryFAQ from "@/components/industry/IndustryFAQ";
import IndustryWhoFor from "@/components/industry/IndustryWhoFor";
import IndustryFeatures from "@/components/industry/IndustryFeatures";
import IndustrySpecificFeatures from "@/components/industry/IndustrySpecificFeatures";
import IndustrySEO from "@/components/industry/IndustrySEO";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryFinalCTA from "@/components/industry/IndustryFinalCTA";
import SectionDivider from "@/components/SectionDivider";

interface Props {
  params: { slug: string };
}

export default function IndustryPage({ params }: Props) {
  const industry = industriesBySlug[params.slug];

  if (!industry) {
    notFound();
  }

  return (
    <main>
      {/* 1. Hero */}
      <IndustryHero data={industry} />
      
      {/* 2. Intro Text */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-secondary/70 font-medium leading-relaxed italic">
            "{industry.intro}"
          </p>
        </div>
      </section>

      {/* 3. Showcase / Portfolio */}
      <IndustryShowcase images={industry.portfolioImages} title={industry.title} />
      
      <SectionDivider />
      
      {/* 4. Who is it for */}
      <IndustryWhoFor industryTitle={industry.title} />
      
      {/* 5. What's included */}
      <IndustryFeatures />
      
      <SectionDivider variant="gold" />

      {/* 6. Specific Features (NEW) */}
      {industry.specificFeatures && (
        <>
          <IndustrySpecificFeatures data={industry.specificFeatures} />
          <SectionDivider />
        </>
      )}

      {/* 7. SEO Section */}
      <IndustrySEO />
      
      <SectionDivider variant="gold" />

      {/* 8. Process */}
      <IndustryProcess />
      
      <SectionDivider />
      
      {/* 9. FAQ */}
      <IndustryFAQ items={industry.faq} />
      
      {/* 10. Final CTA */}
      <IndustryFinalCTA />
    </main>
  );
}