import { notFound } from "next/navigation";
import { Metadata } from "next";
import { industries, industriesBySlug } from "@/content/industries";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryIntro from "@/components/industry/IndustryIntro";
import IndustryShowcase from "@/components/industry/IndustryShowcase";
import IndustryContent from "@/components/industry/IndustryContent";
import IndustryFAQ from "@/components/industry/IndustryFAQ";
import IndustryWhoFor from "@/components/industry/IndustryWhoFor";
import IndustryFeatures from "@/components/industry/IndustryFeatures";
import IndustrySpecificFeatures from "@/components/industry/IndustrySpecificFeatures";
import IndustrySEO from "@/components/industry/IndustrySEO";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryFinalCTA from "@/components/industry/IndustryFinalCTA";
import IndustryPricing from "@/components/industry/IndustryPricing";
import SectionDivider from "@/components/SectionDivider";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = industriesBySlug[resolvedParams.slug];
  
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

export default async function IndustryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const industry = industriesBySlug[resolvedParams.slug];

  if (!industry) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* 1. Hero */}
      <IndustryHero data={industry} />
      
      {/* 2. Intro Section */}
      <IndustryIntro text={industry.intro} />

      <SectionDivider />

      {/* 3. Showcase / Portfolio */}
      <IndustryShowcase 
        images={industry.portfolioImages} 
        title={industry.title} 
        subtitle={industry.showcaseSubtitle}
      />
      
      <SectionDivider variant="gold" />
      
      {/* 4. Who is it for */}
      <IndustryWhoFor 
        industryTitle={industry.title} 
        data={industry.whoFor}
      />
      
      {/* 5. What's included */}
      <IndustryFeatures data={industry.features} />
      
      <SectionDivider variant="gold" />

      {/* 6. Specific Features */}
      {industry.specificFeatures && (
        <>
          <IndustrySpecificFeatures data={industry.specificFeatures} />
          <SectionDivider />
        </>
      )}

      {/* 7. Pricing Section */}
      <IndustryPricing industryTitle={industry.title} />

      <SectionDivider variant="gold" />

      {/* 8. Main SEO Text Section */}
      <IndustryContent title={industry.title} sections={industry.sections} />
      
      <SectionDivider variant="gold" />

      {/* 9. SEO Foundation */}
      <IndustrySEO data={industry.seoFoundation} />
      
      <SectionDivider variant="gold" />

      {/* 10. Process */}
      <IndustryProcess data={industry.processSteps} />
      
      <SectionDivider />
      
      {/* 11. FAQ */}
      <IndustryFAQ items={industry.faq} />
      
      {/* 12. Final CTA */}
      <IndustryFinalCTA />
    </main>
  );
}