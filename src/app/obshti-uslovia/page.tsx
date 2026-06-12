import React from 'react';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: "Общи условия | Firmensait.com",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-20 md:pt-48 md:pb-40 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader 
          title="Общи условия"
          align="left"
          className="mb-16"
        />
        
        <div className="prose prose-lg max-w-none text-secondary/80 space-y-8 font-medium">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Предмет</h2>
            <p>
              Настоящите Общи условия уреждат отношенията между потребителите на този уебсайт и Firmensait.com във връзка с предлаганите услуги за изработка на уеб сайтове.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Услуги</h2>
            <p>
              Основните ни услуги включват проектиране, дизайн и техническа разработка на многостранични фирмени сайтове. Условията за всеки проект се договарят индивидуално.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Авторски права</h2>
            <p>
              След пълното заплащане на договорената сума, клиентът придобива пълна собственост върху файловете и съдържанието на своя уебсайт.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Ограничаване на отговорността</h2>
            <p>
              Ние не носим отговорност за прекъсвания в работата на сайта, причинени от външни фактори или трети страни (домейни, хостинг доставчици и др.).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Промени в условията</h2>
            <p>
              Запазваме си правото да променяме настоящите Общи условия по всяко време, като актуалната версия винаги ще бъде достъпна на тази страница.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}