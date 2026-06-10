"use client";

import { useState, useEffect } from 'react';
import { navigationLinks, headerCTA } from '@/content/navigation';
import { siteConfig } from '@/content/site';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative h-10 w-auto md:h-12 flex items-center justify-center">
            <Image 
              src="/logo.webp" 
              alt={siteConfig.name}
              width={160}
              height={48}
              className="h-full w-auto object-contain"
              priority
              onError={(e) => {
                (e.target as any).style.display = 'none';
              }}
            />
            {/* Hidden text for SEO purposes only */}
            <span className="sr-only">{siteConfig.name}</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href} 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.title}
            </a>
          ))}
          <Link 
            href={headerCTA.href}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all shadow-md"
          >
            {headerCTA.title}
          </Link>
        </nav>

        <button className="md:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={cn(
        "fixed inset-0 top-[68px] bg-white z-40 md:hidden flex flex-col p-6 space-y-6 transition-transform duration-300",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navigationLinks.map((link) => (
          <a 
            key={link.title} 
            href={link.href} 
            className="text-xl font-bold border-b border-border pb-4"
            onClick={() => setIsOpen(false)}
          >
            {link.title}
          </a>
        ))}
        <Link 
          href={headerCTA.href}
          className="bg-primary text-white text-center font-bold py-5 rounded-full text-xl"
          onClick={() => setIsOpen(false)}
        >
          {headerCTA.title}
        </Link>
      </div>
    </header>
  );
}