"use client";

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Home, Mail } from 'lucide-react';
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

  // Scroll listener for sticky header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close Mega Menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Body scroll lock for mobile drawer
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

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 w-full transition-all duration-300 ease-in-out h-[96px] z-[100]",
        scrolled || isMegaMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border/30" 
          : "bg-[#FAF8F4]/80 backdrop-blur-sm z-[100]"
      )}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-[110]" onClick={closeAll}>
            <span className="text-xl md:text-3xl font-bold text-foreground tracking-tighter flex items-baseline">
              Firmensait
              <span className="text-primary ml-0.5 text-lg md:text-2xl font-black opacity-80">.com</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 h-full">
            <Link 
              href="/" 
              className="px-5 py-2 text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
            >
              Начало
            </Link>
            
            <div className="relative h-full flex items-center" ref={megaMenuRef}>
              <button 
                className={cn(
                  "flex items-center gap-1.5 px-6 h-11 rounded-full text-sm font-bold transition-all duration-300 border",
                  isMegaMenuOpen 
                    ? "bg-primary/10 text-primary border-primary/20 shadow-sm" 
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5 border-transparent"
                )}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              >
                Портфолио
                <ChevronDown size={14} className={cn("transition-transform duration-300", isMegaMenuOpen && "rotate-180")} />
              </button>

              {/* Mega Menu Dropdown */}
              <div className={cn(
                "fixed top-[96px] left-1/2 -translate-x-1/2 w-full max-w-[1120px] z-[120] transition-all duration-300 ease-out pointer-events-none opacity-0 translate-y-3",
                isMegaMenuOpen && "opacity-100 translate-y-0 pointer-events-auto"
              )}>
                <div className="mx-4 bg-[#FFFCF7] rounded-[2.25rem] border border-border/60 shadow-[0_30px_90px_rgba(23,23,23,0.12)] overflow-hidden">
                  <div className="flex flex-col lg:flex-row min-h-[460px]">
                    <div className="lg:w-[340px] bg-primary/[0.03] p-10 flex flex-col border-r border-border/40">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                          Разгледайте
                        </span>
                        <h3 className="text-3xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                          Портфолио по браншове
                        </h3>
                        <p className="text-secondary/70 text-base leading-relaxed font-medium">
                          Изберете примерна уеб визия според типа бизнес.
                        </p>
                      </div>
                      <div className="mt-12 p-6 bg-white border border-primary/10 rounded-2xl shadow-sm">
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

                    <div className="flex-1 p-8 overflow-y-auto max-h-[70vh]">
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                        {industries.map((item) => {
                          const Icon = (Icons as any)[item.icon] || Icons.Check;
                          return (
                            <Link 
                              key={item.slug} 
                              href={item.href}
                              className="group flex items-center gap-3 p-3 rounded-2xl border border-transparent hover:bg-primary/[0.06] hover:border-primary/15 transition-all duration-200"
                              onClick={closeAll}
                            >
                              <div className="w-9 h-9 shrink-0 rounded-xl bg-primary/[0.08] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Icon size={16} strokeWidth={2.5} />
                              </div>
                              <span className="text-[13px] font-bold text-foreground/80 group-hover:text-primary transition-colors leading-tight">
                                {item.menuLabel}
                              </span>
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
              className="px-5 py-2 text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
            >
              Контакти
            </Link>
            
            <Link 
              href="/kontakti"
              className="ml-4 h-12 px-8 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all shadow-[0_8px_20px_-4px_rgba(184,145,79,0.3)] active:scale-95 flex items-center justify-center leading-none"
            >
              Искам сайт
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden relative z-[160] text-foreground w-12 h-12 flex items-center justify-center bg-white border border-border/40 rounded-2xl shadow-sm" 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Затвори меню" : "Отвори меню"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[150] bg-[#FAF8F4] md:hidden flex flex-col overflow-y-auto overscroll-contain no-scrollbar">
          {/* Internal Sticky Bar in Drawer - Matches Header Height */}
          <div className="sticky top-0 z-[160] h-[96px] flex items-center justify-between px-4 bg-[#FAF8F4]/95 backdrop-blur-md border-b border-border/30">
            <Link href="/" className="flex items-center" onClick={closeAll}>
              <span className="text-xl font-bold text-foreground tracking-tighter flex items-baseline">
                Firmensait
                <span className="text-primary ml-0.5 text-lg font-black opacity-80">.com</span>
              </span>
            </Link>
          </div>

          <div className="flex-1 px-5 py-8 space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <Link 
                href="/" 
                className="flex items-center justify-between p-5 bg-white border border-border/40 rounded-2xl shadow-sm active:scale-[0.98] transition-all" 
                onClick={closeAll}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                    <Home size={20} />
                  </div>
                  <span className="text-lg font-bold">Начало</span>
                </div>
                <ArrowRight size={18} className="text-secondary/30" />
              </Link>

              <Link 
                href="/kontakti" 
                className="flex items-center justify-between p-5 bg-white border border-border/40 rounded-2xl shadow-sm active:scale-[0.98] transition-all" 
                onClick={closeAll}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg font-bold">Контакти</span>
                </div>
                <ArrowRight size={18} className="text-secondary/30" />
              </Link>
            </div>
            
            {/* Industry Accordion Section */}
            <div className="pt-4">
              <button 
                className={cn(
                  "w-full flex items-center justify-between p-5 rounded-2xl border transition-all",
                  isMobilePortfolioOpen 
                    ? "bg-primary text-white border-primary shadow-lg" 
                    : "bg-white text-foreground border-border/40"
                )}
                onClick={() => setIsMobilePortfolioOpen(!isMobilePortfolioOpen)}
              >
                <div className="flex flex-col items-start text-left">
                  <span className="text-lg font-bold">Портфолио по браншове</span>
                  <span className={cn("text-[10px] uppercase font-black tracking-widest mt-0.5 opacity-70", isMobilePortfolioOpen ? "text-white" : "text-primary")}>
                    20 примерни уеб визии
                  </span>
                </div>
                <ChevronDown size={22} className={cn("transition-transform duration-300", isMobilePortfolioOpen && "rotate-180")} />
              </button>
              
              <div className={cn(
                "grid grid-cols-1 gap-2 overflow-hidden transition-all duration-500",
                isMobilePortfolioOpen ? "max-h-[3000px] opacity-100 mt-4 mb-8" : "max-h-0 opacity-0"
              )}>
                {industries.map((item) => {
                  const Icon = (Icons as any)[item.icon] || Icons.Check;
                  return (
                    <Link 
                      key={item.slug} 
                      href={item.href}
                      className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-border/20 active:bg-primary/5"
                      onClick={closeAll}
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0">
                          <Icon size={16} strokeWidth={2.5} />
                        </div>
                        <span className="font-bold text-sm text-foreground/80 leading-tight truncate">{item.title}</span>
                      </div>
                      <ArrowRight size={14} className="text-secondary/20 shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CTA Card in Drawer */}
            <div className="mt-8 bg-primary p-8 rounded-[2rem] text-white relative overflow-hidden">
               <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-[40px]" />
               <h3 className="text-xl font-bold mb-3 relative z-10">Готови ли сте за нов сайт?</h3>
               <p className="opacity-80 text-sm mb-8 leading-relaxed relative z-10">Опишете вашия бизнес и ще ви върнем предложение за структура.</p>
               <Link 
                 href="/kontakti" 
                 onClick={closeAll}
                 className="w-full bg-white text-primary font-black py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-transform"
               >
                 Искам сайт
                 <ArrowRight size={18} />
               </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}