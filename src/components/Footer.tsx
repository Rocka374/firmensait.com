import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { navigationLinks } from '@/content/navigation';
import { footerContent } from '@/content/footer';
import { industries } from '@/content/industries';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border/30 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <Link href="/" className="text-3xl font-bold text-foreground mb-8 block tracking-tight">
              Firmensait<span className="text-primary">.com</span>
            </Link>
            <p className="text-secondary/70 text-base leading-relaxed max-w-sm mb-10 font-medium">
              {footerContent.about.text}
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-1">Свържете се с нас</span>
              <a href={`mailto:${siteConfig.links.email}`} className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                {siteConfig.links.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-secondary/40 mb-8">Навигация</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-foreground font-bold hover:text-primary transition-colors text-sm">Начало</Link></li>
              <li><Link href="/kontakti" className="text-foreground font-bold hover:text-primary transition-colors text-sm">Контакти</Link></li>
              {navigationLinks.slice(0, 4).map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-foreground font-bold hover:text-primary transition-colors text-sm">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-secondary/40 mb-8">Портфолио по браншове</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {industries.map((item) => {
                if (!item?.href) return null; // Safety check
                return (
                  <Link 
                    key={item.slug} 
                    href={item.href} 
                    className="text-secondary/80 text-sm font-bold hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex space-x-8 text-[10px] font-black uppercase tracking-widest text-secondary/30">
            {footerContent.bottomLinks.map(link => (
              <Link key={link.title} href={link.href} className="hover:text-primary transition-colors">{link.title}</Link>
            ))}
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-secondary/30">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}