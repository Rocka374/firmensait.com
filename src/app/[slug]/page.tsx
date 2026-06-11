import { notFound } from "next/navigation";
import { industries, industriesBySlug } from "@/content/industries";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryShowcase from "@/components/industry/IndustryShowcase";
import IndustryContent from "@/components/industry/IndustryContent";
import IndustryFAQ from "@/components/industry/IndustryFAQ";
import RelatedIndustries from "@/components/industry/RelatedIndustries";
import IndustryWhoFor from "@/components/industry/IndustryWhoFor";
import IndustryFeatures from "@/components/industry/IndustryFeatures";
import IndustryStructure from "@/components/industry/IndustryStructure";
import IndustrySEO from "@/components/industry/IndustrySEO";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryFinalCTA from "@/components/industry/IndustryFinalCTA";
import SectionDivider from "@/components/SectionDivider";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const industry = industriesBySlug[params.slug];
  if (!industry) return {};

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: `/${industry.slug}`,
    },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `/${industry.slug}`,
      images: [{ url: industry.heroImage.src }],
    },
  };
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

      {/* 6. Main Content Section (Storytelling/SEO) */}
      <IndustryContent sections={industry.sections} benefits={industry.benefits} />
      
      <SectionDivider />

      {/* 7. Page Structure */}
      <IndustryStructure />

      {/* 8. SEO Section */}
      <IndustrySEO />
      
      <SectionDivider variant="gold" />

      {/* 9. Process */}
      <IndustryProcess />
      
      <SectionDivider />
      
      {/* 10. Related Industries */}
      <RelatedIndustries slugs={industry.relatedIndustries} />
      
      <SectionDivider />
      
      {/* 11. FAQ */}
      <IndustryFAQ items={industry.faq} />
      
      {/* 12. Final CTA */}
      <IndustryFinalCTA />
    </main>
  );
}