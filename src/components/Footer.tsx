import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { navigationLinks } from '@/content/navigation';
import { footerContent } from '@/content/footer';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="text-2xl font-bold text-primary mb-6 block">
              {siteConfig.name}
            </Link>
            <p className="text-secondary text-sm leading-relaxed">
              {footerContent.about.text}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Навигация</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-secondary hover:text-primary text-sm">Начало</Link></li>
              {navigationLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-secondary hover:text-primary text-sm">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Услуги</h4>
            <ul className="space-y-4">
              {footerContent.services.map(item => (
                <li key={item} className="text-secondary text-sm">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Браншове</h4>
            <ul className="space-y-4">
              {footerContent.industries.map(item => (
                <li key={item} className="text-secondary text-sm">{item}</li>
              ))}
              <li><a href="#branshove" className="text-primary font-bold text-sm">Виж всички</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex space-x-6 text-xs text-secondary">
            {footerContent.bottomLinks.map(link => (
              <Link key={link.title} href={link.href} className="hover:text-primary">{link.title}</Link>
            ))}
          </div>
          <p className="text-xs text-secondary">
            © {new Date().getFullYear()} {siteConfig.name}. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}