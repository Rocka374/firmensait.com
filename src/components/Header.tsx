"use client";

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { industries } from '@/content/industries';
import * as Icons from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled || isMegaMenuOpen ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group" onClick={() => setIsMegaMenuOpen(false)}>
          <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tight flex items-baseline">
            Firmensait
            <span className="text-primary text-base md:text-xl ml-0.5">.com</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
            Начало
          </Link>
          
          <div className="relative" ref={megaMenuRef}>
            <button 
              className={cn(
                "flex items-center gap-1 text-sm font-bold transition-colors",
                isMegaMenuOpen ? "text-primary" : "text-foreground hover:text-primary"
              )}
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              Портфолио
              <ChevronDown size={14} className={cn("transition-transform", isMegaMenuOpen && "rotate-180")} />
            </button>

            {/* Desktop Mega Menu */}
            {isMegaMenuOpen && (
              <div className="fixed top-[74px] left-0 right-0 w-full bg-white border-b border-border/40 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="container mx-auto px-4 py-12 max-w-7xl">
                  <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-[300px] shrink-0">
                      <h3 className="text-3xl font-bold text-foreground mb-4">Портфолио по браншове</h3>
                      <p className="text-secondary/70 text-sm leading-relaxed mb-8">
                        Изберете примерна уеб визия според типа бизнес. Всеки сайт е с уникална SEO структура.
                      </p>
                      <Link 
                        href="/kontakti" 
                        className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:translate-x-1 transition-all"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        Попитайте за вашия бизнес
                        <Icons.ArrowRight size={14} />
                      </Link>
                    </div>

                    <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-2">
                      {industries.map((item) => {
                        const Icon = (Icons as any)[item.icon] || Icons.Check;
                        return (
                          <Link 
                            key={item.slug} 
                            href={item.href}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 group transition-colors"
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            <div className="w-8 h-8 rounded-lg bg-secondary-light/50 flex items-center justify-center text-secondary group-hover:bg-white group-hover:text-primary group-hover:shadow-sm transition-all">
                              <Icon size={16} />
                            </div>
                            <span className="text-sm font-bold text-foreground/80 group-hover:text-primary">{item.menuLabel}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/kontakti" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
            Контакти
          </Link>
          
          <Link 
            href="/kontakti"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all shadow-md active:scale-95"
          >
            Искам сайт
          </Link>
        </nav>

        <button className="md:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={cn(
        "fixed inset-0 top-[68px] bg-white z-40 md:hidden flex flex-col transition-transform duration-300 overflow-y-auto",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-6 space-y-6">
          <Link href="/" className="text-xl font-bold border-b border-border pb-4 block" onClick={() => setIsOpen(false)}>
            Начало
          </Link>
          
          <div className="space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-secondary/40">Портфолио</span>
            <div className="grid grid-cols-1 gap-1">
              {industries.map((item) => (
                <Link 
                  key={item.slug} 
                  href={item.href}
                  className="text-lg font-bold py-2 border-b border-border/30 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/kontakti" className="text-xl font-bold border-b border-border pb-4 block" onClick={() => setIsOpen(false)}>
            Контакти
          </Link>
          
          <Link 
            href="/kontakti"
            className="bg-primary text-white text-center font-bold py-5 rounded-full text-xl block"
            onClick={() => setIsOpen(false)}
          >
            Искам сайт
          </Link>
        </div>
      </div>
    </header>
  );
}