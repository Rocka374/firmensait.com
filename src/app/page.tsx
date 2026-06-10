import Hero from '@/components/Hero';
import PortfolioPreview from '@/components/PortfolioPreview';
import FAQSection from '@/components/FAQSection';
import { getOrganizationSchema, getServiceSchema, getFAQSchema } from '@/lib/structured-data';

// Още секции биха били добавени тук като отделни компоненти
// За да запазя отговора кратък, ще фокусирам върху основните изисквания

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
      
      <Hero />
      
      {/* Другите секции (Features, Industries, Pricing и т.н.) биха били импортирани тук */}
      <PortfolioPreview />
      
      <FAQSection />

      {/* Final CTA */}
      <section id="kontakti" className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готови ли сте за нов фирмен сайт?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Изпратете запитване и ще обсъдим проекта ви в детайли.</p>
          <a href="#kontakti" className="bg-white text-primary font-bold py-5 px-12 rounded-full text-xl shadow-xl hover:scale-105 transition-transform inline-block">
            Искам сайт
          </a>
        </div>
      </section>
    </main>
  );
}