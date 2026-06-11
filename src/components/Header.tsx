"use client";

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { industries } from '@/content/industries';
import * as Icons from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobilePortfolioOpen, setIsMobilePortfolioOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // По-стабилна детекция на скрол
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    
    // Първоначална проверка
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [scrolled]);

  const closeAll = () => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobilePortfolioOpen(false);
    document.body.style.overflow = 'unset';
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    if (newState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 w-full transition-all duration-300 ease-in-out",
        // На мобилни винаги искаме малко повече видимост, ако менюто е отворено
        scrolled || isMegaMenuOpen || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-xl shadow-md py-3 z-[150]" 
          : "bg-transparent py-6 z-[150]"
      )}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center group relative z-[160]" onClick={closeAll}>
            <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tighter flex items-baseline">
              Firmensait
              <span className="text-primary ml-0.5 text-xl md:text-2xl font-black opacity-80">.com</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link 
              href="/" 
              className="px-5 py-2.5 text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
            >
              Начало
            </Link>
            
            <div className="relative" ref={megaMenuRef}>
              <button 
                className={cn(
                  "flex items-center gap-1.5 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border",
                  isMegaMenuOpen 
                    ? "bg-primary/10 text-primary border-primary/20 shadow-sm" 
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5 border-transparent"
                )}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              >
                Портфолио
                <ChevronDown size={14} className={cn("transition-transform duration-300", isMegaMenuOpen && "rotate-180")} />
              </button>

              <div className={cn(
                "fixed top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-full max-w-[1120px] z-[170] transition-all duration-300 ease-out pointer-events-none opacity-0 translate-y-3",
                isMegaMenuOpen && "opacity-100 translate-y-0 pointer-events-auto"
              )}>
                <div className="mx-4 bg-[#FFFCF7] rounded-[2.25rem] border border-border/60 shadow-[0_30px_90px_rgba(23,23,23,0.12)] overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  
                  <div className="flex flex-col lg:flex-row min-h-[460px]">
                    <div className="lg:w-[340px] bg-primary/[0.035] p-10 flex flex-col border-r border-border/40 relative">
                      <div className="flex-1 relative z-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.2em] mb-6">
                          Разгледайте
                        </span>
                        <h3 className="text-3xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                          Портфолио по браншове
                        </h3>
                        <p className="text-secondary/75 text-base leading-relaxed font-medium">
                          Изберете примерна уеб визия според типа бизнес.
                        </p>
                      </div>

                      <div className="mt-12 p-6 bg-white border border-primary/10 rounded-2xl shadow-sm relative z-10">
                        <Link 
                          href="/kontakti" 
                          className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest group/cta hover:text-primary-dark transition-colors"
                          onClick={closeAll}
                        >
                          Попитайте за вашия бизнес
                          <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    <div className="flex-1 p-6 lg:p-8 min-w-0">
                      <div className="grid min-w-0 grid-cols-2 lg:grid-cols-4 gap-2">
                        {industries.map((item) => {
                          if (!item?.href) return null;
                          const Icon = (Icons as any)[item.icon] || Icons.Check;
                          return (
                            <Link 
                              key={item.slug} 
                              href={item.href}
                              className="group flex min-w-0 items-center gap-3 p-3 rounded-2xl border border-transparent hover:bg-primary/[0.06] hover:border-primary/15 transition-all duration-200 hover:-translate-y-0.5 overflow-hidden box-border"
                              onClick={closeAll}
                            >
                              <div className="w-9 h-9 shrink-0 rounded-xl bg-primary/[0.08] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                <Icon size={17} strokeWidth={2.5} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <span className="block text-[13px] font-bold text-foreground/85 group-hover:text-primary transition-colors leading-tight break-words line-clamp-2">
                                  {item.menuLabel}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/kontakti" 
              className="px-5 py-2.5 text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
            >
              Контакти
            </Link>
            
            <Link 
              href="/kontakti"
              className="ml-4 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all shadow-[0_10px_25px_-5px_rgba(184,145,79,0.3)] active:scale-95"
            >
              Искам сайт
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden relative z-[160] text-foreground p-3 bg-white/50 backdrop-blur-md rounded-xl border border-border/20 shadow-sm" 
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Backdrop for Mega Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-background/45 backdrop-blur-[3px] z-[40] transition-opacity duration-300 pointer-events-none opacity-0",
            isMegaMenuOpen && "opacity-100 pointer-events-auto"
          )} 
          onClick={() => setIsMegaMenuOpen(false)}
        />

        {/* Mobile Menu Overlay */}
        <div className={cn(
          "fixed inset-0 bg-white z-[155] md:hidden flex flex-col transition-transform duration-500 ease-in-out pt-28 overflow-y-auto",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="p-6 space-y-4">
            <Link 
              href="/" 
              className="text-2xl font-bold border-b border-border/40 pb-4 block px-2" 
              onClick={closeAll}
            >
              Начало
            </Link>
            
            <div className="space-y-4">
              <button 
                className="w-full flex items-center justify-between text-2xl font-bold border-b border-border/40 pb-4 px-2 text-left"
                onClick={() => setIsMobilePortfolioOpen(!isMobilePortfolioOpen)}
              >
                Портфолио
                <ChevronDown size={24} className={cn("transition-transform duration-300", isMobilePortfolioOpen && "rotate-180")} />
              </button>
              
              <div className={cn(
                "grid grid-cols-1 gap-3 overflow-hidden transition-all duration-300",
                isMobilePortfolioOpen ? "max-h-[2000px] opacity-100 mb-8 mt-4" : "max-h-0 opacity-0"
              )}>
                {industries.map((item) => {
                  if (!item?.href) return null;
                  const Icon = (Icons as any)[item.icon] || Icons.Check;
                  return (
                    <Link 
                      key={item.slug} 
                      href={item.href}
                      className="flex items-center gap-4 p-4 bg-[#FAF8F4] rounded-2xl border border-border/30 active:bg-primary/10 transition-all"
                      onClick={closeAll}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-primary/10 flex items-center justify-center text-primary shrink-0 shadow-sm">
                        <Icon size={20} strokeWidth={2.5} />
                      </div>
                      <span className="font-bold text-foreground/80">{item.menuLabel}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link 
              href="/kontakti" 
              className="text-2xl font-bold border-b border-border/40 pb-4 block px-2" 
              onClick={closeAll}
            >
              Контакти
            </Link>
            
            <div className="pt-8 px-2 pb-10">
              <Link 
                href="/kontakti"
                className="bg-primary text-white text-center font-bold py-5 rounded-full text-xl block shadow-xl shadow-primary/20 active:scale-95 transition-transform"
                onClick={closeAll}
              >
                Искам сайт
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}