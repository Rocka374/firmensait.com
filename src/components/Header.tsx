"use client";

import React, { useState, useEffect, useRef, ElementType } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Home, Mail, Check } from 'lucide-react';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { industries } from '@/content/industries';

/**
 * Helper to safely retrieve Lucide icons from string keys.
 */
const getIcon = (iconName: string): ElementType => {
  const IconComponent = (Icons as any)[iconName];
  return IconComponent || Check;
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobilePortfolioOpen, setIsMobilePortfolioOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeAll = () => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobilePortfolioOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerHasBackground = scrolled || isMegaMenuOpen || isMobileMenuOpen;

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 w-full transition-all duration-500 ease-in-out z-[100] h-[72px] md:h-[88px]",
        headerHasBackground
          ? "bg-white/95 backdrop-blur-lg shadow-[0_2px_20px_-2px_rgba(23,23,23,0.03)] border-b border-border/40" 
          : "bg-transparent border-b border-transparent"
      )}>
        <div className="container mx-auto px-6 h-full flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center group relative z-[110]" onClick={closeAll}>
            <span className="text-2xl md:text-[34px] font-bold text-foreground tracking-tighter flex items-baseline leading-none transition-transform duration-300 group-hover:scale-[1.02]">
              Firmensait
              <span className="text-primary ml-0.5 text-xl md:text-[28px] font-black opacity-90">.com</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-10 h-full">
            <Link 
              href="/" 
              className="px-2 py-2 text-[15px] font-bold text-foreground/80 hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              Начало
            </Link>
            
            <div className="relative h-full flex items-center" ref={megaMenuRef}>
              <button 
                className={cn(
                  "flex items-center gap-2 px-6 h-12 rounded-full text-[15px] font-bold transition-all duration-300 border border-transparent",
                  isMegaMenuOpen 
                    ? "bg-primary/10 text-primary border-primary/20 shadow-inner" 
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                )}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                aria-label="Отвори портфолио меню"
              >
                Портфолио
                <ChevronDown size={16} className={cn("transition-transform duration-500", isMegaMenuOpen && "rotate-180")} />
              </button>

              <div className={cn(
                "fixed top-[100px] left-1/2 -translate-x-1/2 w-full max-w-[1140px] z-[120] transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) pointer-events-none opacity-0 translate-y-4",
                isMegaMenuOpen && "opacity-100 translate-y-0 pointer-events-auto"
              )}>
                <div className="mx-4 bg-white rounded-[2.5rem] border border-border/50 shadow-[0_40px_100px_-15px_rgba(23,23,23,0.15)] overflow-hidden">
                  <div className="flex flex-col lg:flex-row min-h-[450px]">
                    <div className="lg:w-[340px] bg-[#FAF8F4] p-10 flex flex-col border-r border-border/40">
                      <div className="flex-1">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.25em] mb-8">
                          Разгледайте
                        </span>
                        <h3 className="text-3xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
                          Портфолио по браншове
                        </h3>
                        <p className="text-secondary/70 text-base leading-relaxed font-medium">
                          Вижте реални проекти и открийте най-подходящата структура за вашия бизнес.
                        </p>
                      </div>
                      <div className="mt-10 p-6 bg-white border border-primary/10 rounded-3xl shadow-sm group/card">
                        <Link 
                          href="/kontakti" 
                          className="inline-flex items-center gap-3 text-primary font-black text-[11px] uppercase tracking-widest group/cta hover:text-primary-dark transition-all"
                          onClick={closeAll}
                        >
                          Запитване за бранш
                          <ArrowRight size={16} className="group-hover/cta:translate-x-1.5 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    <div className="flex-1 p-8 overflow-y-auto max-h-[75vh]">
                      <div className="grid grid-cols-4 gap-3">
                        {industries.map((item) => {
                          const IconComponent = getIcon(item.icon);
                          return (
                            <Link 
                              key={item.slug} 
                              href={item.href}
                              className="group flex items-center gap-3.5 min-w-0 overflow-hidden rounded-2xl border border-transparent p-4 min-h-[64px] transition-all duration-300 hover:bg-primary/[0.06] hover:border-primary/15 hover:shadow-[0_10px_25px_-10px_rgba(184,145,79,0.15)]"
                              onClick={closeAll}
                            >
                              <div className="w-10 h-10 shrink-0 rounded-[12px] bg-primary/[0.08] flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                                <IconComponent size={18} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <span className="block text-[13px] font-bold leading-snug text-foreground/90 group-hover:text-primary transition-colors truncate">
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
              className="px-2 py-2 text-[15px] font-bold text-foreground/80 hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              Контакти
            </Link>
            
            <Link 
              href="/kontakti"
              className="ml-6 h-13 px-10 bg-primary hover:bg-primary-dark text-white text-[15px] font-bold rounded-full transition-all duration-300 shadow-[0_12px_28px_-6px_rgba(184,145,79,0.35)] hover:shadow-[0_15px_35px_-8px_rgba(184,145,79,0.45)] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center leading-none"
            >
              Искам сайт
            </Link>
          </nav>

          {!isMobileMenuOpen && (
            <button 
              className="md:hidden relative z-[110] text-foreground w-14 h-14 flex items-center justify-center bg-white border border-border/40 rounded-2xl shadow-sm active:scale-95 transition-transform" 
              onClick={toggleMobileMenu}
              aria-label="Отвори меню"
            >
              <Menu size={28} />
            </button>
          )}
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-[#FAF8F4] md:hidden flex flex-col overflow-y-auto overscroll-contain animate-in fade-in duration-300">
          <div className="sticky top-0 z-[210] h-[80px] min-h-[80px] flex items-center justify-between px-6 bg-[#FAF8F4]/98 backdrop-blur-md border-b border-border/30">
            <Link href="/" className="flex items-center" onClick={closeAll}>
              <span className="text-2xl font-bold text-foreground tracking-tighter flex items-baseline">
                Firmensait
                <span className="text-primary ml-0.5 text-xl font-black opacity-90">.com</span>
              </span>
            </Link>
            
            <button
              type="button"
              onClick={closeAll}
              aria-label="Затвори меню"
              className="w-14 h-14 shrink-0 rounded-2xl bg-white border border-border/40 shadow-sm flex items-center justify-center text-foreground active:scale-95 transition-transform"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex-1 px-6 pt-8 pb-12 space-y-5">
            <div className="grid grid-cols-1 gap-5">
              <Link 
                href="/" 
                className="flex items-center justify-between p-6 bg-white border border-border/40 rounded-[2rem] shadow-sm active:scale-[0.98] transition-all" 
                onClick={closeAll}
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                    <Home size={24} />
                  </div>
                  <span className="text-xl font-bold">Начало</span>
                </div>
                <ArrowRight size={20} className="text-secondary/30" />
              </Link>

              <Link 
                href="/kontakti" 
                className="flex items-center justify-between p-6 bg-white border border-border/40 rounded-[2rem] shadow-sm active:scale-[0.98] transition-all" 
                onClick={closeAll}
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <span className="text-xl font-bold">Контакти</span>
                </div>
                <ArrowRight size={20} className="text-secondary/30" />
              </Link>
            </div>
            
            <div className="pt-2">
              <button 
                className={cn(
                  "w-full flex items-center justify-between p-6 rounded-[2rem] border transition-all duration-300 shadow-sm",
                  isMobilePortfolioOpen 
                    ? "bg-primary text-white border-primary shadow-lg" 
                    : "bg-white text-foreground border-border/40"
                )}
                onClick={() => setIsMobilePortfolioOpen(!isMobilePortfolioOpen)}
                aria-label="Превключи портфолио"
              >
                <div className="flex flex-col items-start text-left">
                  <span className="text-xl font-bold">Портфолио по браншове</span>
                  <span className={cn("text-[10px] uppercase font-black tracking-widest mt-1 opacity-80", isMobilePortfolioOpen ? "text-white" : "text-primary")}>
                    Над 80 реализирани проекта
                  </span>
                </div>
                <ChevronDown size={24} className={cn("transition-transform duration-500", isMobilePortfolioOpen && "rotate-180")} />
              </button>
              
              <div className={cn(
                "grid grid-cols-1 gap-2.5 overflow-hidden transition-all duration-700 ease-in-out",
                isMobilePortfolioOpen ? "max-h-[4000px] opacity-100 mt-5 mb-10" : "max-h-0 opacity-0"
              )}>
                {industries.map((item) => {
                  const IconComp = getIcon(item.icon);
                  return (
                    <Link 
                      key={item.slug} 
                      href={item.href}
                      className="flex items-center justify-between p-5 bg-white/50 rounded-2xl border border-border/20 active:bg-primary/5 transition-colors"
                      onClick={closeAll}
                    >
                      <div className="flex items-center gap-5 min-w-0 flex-1">
                        <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                          <IconComp size={20} />
                        </div>
                        <span className="font-bold text-base text-foreground/80 leading-tight truncate">
                          {item.title}
                        </span>
                      </div>
                      <ArrowRight size={16} className="text-secondary/20 shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 bg-primary p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-[-15%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-[40px]" />
               <h3 className="text-2xl font-bold mb-4 relative z-10">Готови ли сте за нов сайт?</h3>
               <p className="opacity-90 text-base mb-10 leading-relaxed relative z-10">Опишете вашия бизнес и ще ви върнем предложение за структура.</p>
               <Link 
                 href="/kontakti" 
                 onClick={closeAll}
                 className="w-full bg-white text-primary font-black py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all text-lg"
               >
                 Искам сайт
                 <ArrowRight size={22} />
               </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}