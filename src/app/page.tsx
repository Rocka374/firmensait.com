import Hero from '@/components/Hero';
import BusinessTypesSection from '@/components/BusinessTypesSection';
import IndustryGrid from '@/components/IndustryGrid';
import PortfolioPreview from '@/components/PortfolioPreview';
import FeatureCards from '@/components/FeatureCards';
import PricingSection from '@/components/PricingSection';
import HostingSection from '@/components/HostingSection';
import SEOSection from '@/components/SEOSection';
import ProcessSection from '@/components/ProcessSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import SectionDivider from '@/components/SectionDivider';
import { getOrganizationSchema, getServiceSchema, getFAQSchema } from '@/lib/structured-data';

export default function HomePage() {
  const schemas = [
    getOrganizationSchema(),
    getServiceSchema(),
    getFAQSchema()
  ];

  const jsonLdContent = JSON.stringify(schemas).replace(/</g, '\\u003c');

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdContent }}
      />
      
      {/* 1. Hero */}
      <Hero />
      
      {/* 2. Portfolio Preview */}
      <PortfolioPreview />
      
      <SectionDivider variant="gold" />

      {/* 3. Business Types */}
      <BusinessTypesSection />
      
      <SectionDivider />

      {/* 4. Industry Grid */}
      <IndustryGrid />
      
      <SectionDivider variant="gold" />

      {/* 5. Feature Cards */}
      <FeatureCards />
      
      <SectionDivider />

      {/* 6. Pricing Section */}
      <PricingSection />
      
      <SectionDivider variant="gold" />

      {/* 7. Hosting Section */}
      <HostingSection />
      
      <SectionDivider />

      {/* 8. SEO Section */}
      <SEOSection />
      
      <SectionDivider variant="gold" />

      {/* 9. Process Section */}
      <ProcessSection />
      
      <SectionDivider />

      {/* 10. FAQ Section */}
      <FAQSection />
      
      {/* 11. CTA Section */}
      <CTASection />
    </main>
  );
}