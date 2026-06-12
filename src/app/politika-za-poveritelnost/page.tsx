import React from 'react';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: "Политика за поверителност | Firmensait.com",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-20 md:pt-48 md:pb-40 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader 
          title="Политика за поверителност"
          align="left"
          className="mb-16"
        />
        
        <div className="prose prose-lg max-w-none text-secondary/80 space-y-8 font-medium">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Обща информация</h2>
            <p>
              Защитата на Вашите лични данни е приоритет за нас. Тази политика за поверителност обяснява как събираме, използваме и съхраняваме Вашата информация, когато посещавате нашия уебсайт.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Събиране на информация</h2>
            <p>
              Ние събираме информация, която ни предоставяте доброволно чрез контактната форма на сайта, включително име, имейл адрес и телефонен номер, единствено с цел отговор на Вашето запитване.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Използване на „Бисквитки“ (Cookies)</h2>
            <p>
              Нашият сайт използва минимално количество технически бисквитки, необходими за правилното функциониране на платформата и подобряване на потребителското преживяване.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Вашите права</h2>
            <p>
              Вие имате право по всяко време да поискате информация за съхраняваните от нас Ваши данни, както и тяхното коригиране или изтриване.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Контакт</h2>
            <p>
              За въпроси относно защитата на данните, можете да се свържете с нас на нашия официален имейл адрес.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}