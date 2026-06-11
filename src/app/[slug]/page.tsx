import { notFound } from "next/navigation";
import { industries, industriesBySlug } from "@/content/industries";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryShowcase from "@/components/industry/IndustryShowcase";
import IndustryContent from "@/components/industry/IndustryContent";
import IndustryFAQ from "@/components/industry/IndustryFAQ";
import RelatedIndustries from "@/components/industry/RelatedIndustries";
import CTASection from "@/components/CTASection";
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
      <IndustryHero data={industry} />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-secondary/70 font-medium leading-relaxed">
            {industry.intro}
          </p>
        </div>
      </section>

      <IndustryShowcase images={industry.portfolioImages} title={industry.title} />
      
      <SectionDivider />
      
      <IndustryContent sections={industry.sections} benefits={industry.benefits} />
      
      <SectionDivider variant="gold" />
      
      <RelatedIndustries slugs={industry.relatedIndustries} />
      
      <SectionDivider />
      
      <IndustryFAQ items={industry.faq} />
      
      <CTASection />
    </main>
  );
}