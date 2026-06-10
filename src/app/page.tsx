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
import { getOrganizationSchema, getServiceSchema, getFAQSchema } from '@/lib/structured-data';

export default function HomePage() {
  const schemas = [
    getOrganizationSchema(),
    getServiceSchema(),
    getFAQSchema()
  ];

  // Escaping the JSON string to prevent XSS by replacing "<" with its unicode equivalent
  // This prevents breaking out of the <script> tag via "</script>" sequences
  const jsonLdContent = JSON.stringify(schemas).replace(/</g, '\\u003c');

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdContent }}
      />
      
      {/* 1. Hero */}
      <Hero />
      
      {/* 2. BusinessTypesSection */}
      <BusinessTypesSection />
      
      {/* 3. IndustryGrid */}
      <IndustryGrid />
      
      {/* 4. PortfolioPreview */}
      <PortfolioPreview />
      
      {/* 5. FeatureCards */}
      <FeatureCards />
      
      {/* 6. PricingSection */}
      <PricingSection />
      
      {/* 7. HostingSection */}
      <HostingSection />
      
      {/* 8. SEOSection */}
      <SEOSection />
      
      {/* 9. ProcessSection */}
      <ProcessSection />
      
      {/* 10. FAQSection */}
      <FAQSection />
      
      {/* 11. CTASection */}
      <CTASection />
    </main>
  );
}