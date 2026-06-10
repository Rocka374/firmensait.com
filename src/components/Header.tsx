import React, { useState, useEffect } from 'react';
import { navigationLinks, headerCTA } from '@/content/navigation';
import { siteConfig } from '@/content/site';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
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
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex flex-col">
          <a href="/" className="text-xl font-bold text-primary tracking-tight">
            {siteConfig.name}
          </a>
          <span className="text-[10px] uppercase tracking-wider text-secondary hidden sm:block">
            Професионални сайтове за малък бизнес
          </span>
        </div>

        {/* Desktop Nav */}
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
          <Button asChild className="bg-primary hover:bg-primary-dark text-white rounded-full px-6">
            <a href={headerCTA.href}>{headerCTA.title}</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-[60px] bg-white z-40 md:hidden transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col p-6 space-y-6">
          {navigationLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href} 
              className="text-lg font-medium border-b border-border pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <Button asChild className="bg-primary hover:bg-primary-dark text-white w-full py-6 text-lg">
            <a href={headerCTA.href}>{headerCTA.title}</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;