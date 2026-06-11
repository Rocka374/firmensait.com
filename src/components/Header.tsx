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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMegaMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const closeAll = () => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out",
        scrolled || isMegaMenuOpen 
          ? "bg-white/80 backdrop-blur-xl shadow-sm py-3" 
          : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center group relative z-[101]" onClick={closeAll}>
            <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tighter flex items-baseline">
              Firmensait
              <span className="text-primary ml-0.5 text-xs md:text-sm font-black opacity-80">.com</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
            >
              Начало
            </Link>
            
            <div className="relative" ref={megaMenuRef}>
              <button 
                aria-haspopup="menu"
                aria-expanded={isMegaMenuOpen}
                className={cn(
                  "flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300",
                  isMegaMenuOpen 
                    ? "bg-primary/10 text-primary border border-primary/20" 
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5 border border-transparent"
                )}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              >
                Портфолио
                <ChevronDown size={14} className={cn("transition-transform duration-300", isMegaMenuOpen && "rotate-180")} />
              </button>

              <div className={cn(
                "fixed top-[74px] left-1/2 -translate-x-1/2 w-full max-w-[1150px] z-50 transition-all duration-300 ease-out pointer-events-none opacity-0 translate-y-2",
                isMegaMenuOpen && "opacity-100 translate-y-0 pointer-events-auto"
              )}>
                <div className="mx-4 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-border/50 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.12)] overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                  
                  <div className="flex flex-col lg:flex-row min-h-[480px]">
                    <div className="lg:w-[320px] bg-primary/[0.03] p-10 flex flex-col border-r border-border/30">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
                          Разгледайте
                        </span>
                        <h3 className="text-3xl font-bold text-foreground leading-tight mb-4">Портфолио по браншове</h3>
                        <p className="text-secondary/70 text-sm leading-relaxed">
                          Изберете примерна уеб визия според типа бизнес. Всеки сайт е с уникална SEO структура.
                        </p>
                      </div>

                      <div className="mt-12 pt-8 border-t border-border/40">
                        <p className="text-xs font-bold text-secondary/60 mb-1 uppercase tracking-wider">Не виждате вашия бранш?</p>
                        <p className="text-[11px] text-secondary/40 mb-5 leading-snug">Ще подготвим структура според вашите услуги.</p>
                        <Link 
                          href="/kontakti" 
                          className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:translate-x-1 transition-all group/cta"
                          onClick={closeAll}
                        >
                          Попитайте за вашия бизнес
                          <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    <div className="flex-1 p-8 lg:p-10">
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-2">
                        {industries.map((item) => {
                          if (!item?.href) return null; // Safety check
                          const Icon = (Icons as any)[item.icon] || Icons.Check;
                          return (
                            <Link 
                              key={item.slug} 
                              href={item.href}
                              className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-primary/[0.06] border border-transparent hover:border-primary/10 group transition-all duration-200 hover:translate-x-1"
                              onClick={closeAll}
                            >
                              <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                <Icon size={18} strokeWidth={2.5} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[13px] font-bold text-foreground/80 group-hover:text-primary transition-colors leading-tight">
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
              className="px-4 py-2 text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
            >
              Контакти
            </Link>
            
            <Link 
              href="/kontakti"
              className="ml-4 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all shadow-[0_10px_25px_-5px_rgba(184,145,79,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(184,145,79,0.4)] active:scale-95"
            >
              Искам сайт
            </Link>
          </nav>

          <button 
            className="md:hidden relative z-[101] text-foreground p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={cn(
          "fixed inset-0 bg-white z-[100] md:hidden flex flex-col transition-transform duration-500 ease-in-out pt-24 overflow-y-auto",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="p-6 space-y-4">
            <Link 
              href="/" 
              className="text-2xl font-bold border-b border-border/40 pb-4 block" 
              onClick={closeAll}
            >
              Начало
            </Link>
            
            <div className="space-y-4">
              <button 
                className="w-full flex items-center justify-between text-2xl font-bold border-b border-border/40 pb-4"
                onClick={() => setIsMobilePortfolioOpen(!isMobilePortfolioOpen)}
              >
                Портфолио
                <ChevronDown size={24} className={cn("transition-transform", isMobilePortfolioOpen && "rotate-180")} />
              </button>
              
              <div className={cn(
                "grid grid-cols-1 gap-2 overflow-hidden transition-all duration-300",
                isMobilePortfolioOpen ? "max-h-[1000px] opacity-100 mb-6" : "max-h-0 opacity-0"
              )}>
                {industries.map((item) => {
                  if (!item?.href) return null; // Safety check
                  const Icon = (Icons as any)[item.icon] || Icons.Check;
                  return (
                    <Link 
                      key={item.slug} 
                      href={item.href}
                      className="flex items-center gap-4 p-4 bg-secondary-light/30 rounded-2xl border border-border/30 active:bg-primary/5 transition-colors"
                      onClick={closeAll}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-border/40 flex items-center justify-center text-primary shadow-sm">
                        <Icon size={20} />
                      </div>
                      <span className="font-bold text-foreground/80">{item.menuLabel}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link 
              href="/kontakti" 
              className="text-2xl font-bold border-b border-border/40 pb-4 block" 
              onClick={closeAll}
            >
              Контакти
            </Link>
            
            <div className="pt-8">
              <Link 
                href="/kontakti"
                className="bg-primary text-white text-center font-bold py-5 rounded-full text-xl block shadow-xl shadow-primary/20"
                onClick={closeAll}
              >
                Искам сайт
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <div 
        className={cn(
          "fixed inset-0 bg-black/5 backdrop-blur-sm z-[40] transition-opacity duration-300 pointer-events-none opacity-0",
          isMegaMenuOpen && "opacity-100 pointer-events-auto"
        )} 
        onClick={() => setIsMegaMenuOpen(false)}
      />
    </>
  );
}