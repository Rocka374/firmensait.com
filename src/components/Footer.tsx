import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { navigationLinks } from '@/content/navigation';
import { footerContent } from '@/content/footer';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border/30 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <Link href="/" className="text-3xl font-bold text-primary mb-8 block tracking-tight">
              {siteConfig.name}
            </Link>
            <p className="text-secondary/70 text-base leading-relaxed max-w-sm mb-10">
              {footerContent.about.text}
            </p>
            <div className="flex flex-col gap-2">
              <a href={`mailto:${siteConfig.links.email}`} className="text-foreground font-bold hover:text-primary transition-colors">
                {siteConfig.links.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-secondary/50 mb-8">Навигация</h4>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-foreground font-medium hover:text-primary transition-colors text-sm">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-secondary/50 mb-8">Услуги</h4>
            <ul className="space-y-4">
              {footerContent.services.slice(0, 5).map(item => (
                <li key={item} className="text-secondary/70 text-sm font-medium">{item}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-secondary/50 mb-8">Браншове</h4>
            <ul className="space-y-4">
              {footerContent.industries.slice(0, 5).map(item => (
                <li key={item} className="text-secondary/70 text-sm font-medium">{item}</li>
              ))}
              <li><a href="#branshove" className="text-primary font-bold text-sm">Виж всички</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-secondary/40">
            {footerContent.bottomLinks.map(link => (
              <Link key={link.title} href={link.href} className="hover:text-primary transition-colors">{link.title}</Link>
            ))}
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}