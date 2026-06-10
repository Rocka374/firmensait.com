import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
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
import { getOrganizationSchema, getServiceSchema, getFAQSchema } from '@/lib/structured-data';

export default function HomePage() {
  const schemas = [
    getOrganizationSchema(),
    getServiceSchema(),
    getFAQSchema()
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      
      {/* 1. Hero */}
      <Hero />
      
      {/* 2. TrustBar */}
      <TrustBar />
      
      {/* 3. BusinessTypesSection */}
      <BusinessTypesSection />
      
      {/* 4. IndustryGrid */}
      <IndustryGrid />
      
      {/* 5. PortfolioPreview */}
      <PortfolioPreview />
      
      {/* 6. FeatureCards */}
      <FeatureCards />
      
      {/* 7. PricingSection */}
      <PricingSection />
      
      {/* 8. HostingSection */}
      <HostingSection />
      
      {/* 9. SEOSection */}
      <SEOSection />
      
      {/* 10. ProcessSection */}
      <ProcessSection />
      
      {/* 11. FAQSection */}
      <FAQSection />
      
      {/* 12. CTASection */}
      <CTASection />
    </main>
  );
}