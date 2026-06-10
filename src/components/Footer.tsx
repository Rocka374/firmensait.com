import React from 'react';
import { siteConfig } from '@/content/site';
import { navigationLinks } from '@/content/navigation';
import { homeContent } from '@/content/home';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <a href="/" className="text-2xl font-bold text-primary mb-4 block">
              {siteConfig.name}
            </a>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              Професионални сайтове за малък бизнес на достъпна цена. Помагаме на локалните фирми да растат онлайн.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Навигация</h4>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-secondary hover:text-primary text-sm transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Услуги</h4>
            <ul className="space-y-4">
              <li className="text-secondary text-sm">Изработка на сайт</li>
              <li className="text-secondary text-sm">Фирмен сайт</li>
              <li className="text-secondary text-sm">Сайт за малък бизнес</li>
              <li className="text-secondary text-sm">Изработка на сайт цена</li>
              <li className="text-secondary text-sm">Сайт без месечна такса</li>
              <li className="text-secondary text-sm">SEO структура</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Браншове</h4>
            <ul className="space-y-4">
              {homeContent.industries.items.slice(0, 5).map((item) => (
                <li key={item} className="text-secondary text-sm">{item}</li>
              ))}
              <li>
                <a href="#branshove" className="text-primary font-medium text-sm hover:underline">
                  Виж всички браншове
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex space-x-6 text-xs text-secondary">
            <a href="#" className="hover:text-primary">Общи условия</a>
            <a href="#" className="hover:text-primary">Политика за поверителност</a>
          </div>
          <p className="text-xs text-secondary">
            © {new Date().getFullYear()} {siteConfig.name}. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;