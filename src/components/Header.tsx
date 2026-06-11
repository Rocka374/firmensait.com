"use client";

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Home, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { industries } from '@/content/industries';
import * as Icons from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const closeAll = () => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobilePortfolioOpen(false);
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out",
        "z-[99999]", // Изключително висок z-index
        scrolled || isMegaMenuOpen || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-xl shadow-md py-3" 
          : "bg-white/80 md:bg-transparent py-5 md:py-6" // Плътен фон на мобилен дори без скрол
      )}>
        <div className="container mx-auto px-4 flex items-center justify-between relative">
          {/* Лого с фиксиран висок z-index */}
          <Link href="/" className="flex items-center group relative z-[100001]" onClick={closeAll}>
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
                aria-haspopup="menu"
                aria-expanded={isMegaMenuOpen}
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
                "fixed top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-full max-w-[1120px] z-[100000] transition-all duration-300 ease-out pointer-events-none opacity-0 translate-y-3",
                isMegaMenuOpen && "opacity-100 translate-y-0 pointer-events-auto"
              )}>
                <div className="mx-4 bg-[#FFFCF7] rounded-[2.25rem] border border-border/60 shadow-[0_30px_90px_rgba(23,23,23,0.12)] overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <div className="flex flex-col lg:flex-row min-h-[460px]">
                    {/* ... (mega menu content stays the same) */}
                    <div className="lg:w-[340px] bg-primary/[0.035] p-10 flex flex-col border-r border-border/40 relative">
                      <div className="absolute bottom-0 left-0 right-0 h-40 bg-[radial-gradient(circle_at_bottom,_rgba(184,145,79,0.05)_0%,_transparent_70%)] pointer-events-none" />
                      <div className="flex-1 relative z-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.2em] mb-6">
                          Разгледайте
                        </span>
                        <h3 className="text-3xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                          Портфолио по браншове
                        </h3>
                        <p className="text-secondary/75 text-base leading-relaxed font-medium">
                          Изберете примерна уеб визия според типа бизнес. Всеки сайт е с уникална SEO структура.
                        </p>
                      </div>
                      <div className="mt-12 p-6 bg-white border border-primary/10 rounded-2xl shadow-sm relative z-10">
                        <p className="text-xs font-bold text-secondary/60 mb-1 uppercase tracking-wider">Не виждате вашия бранш?</p>
                        <p className="text-[11px] text-secondary/50 mb-5 leading-snug font-medium">Ще подготвим структура според вашите услуги.</p>
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
              className="ml-4 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all shadow-[0_10px_25px_-5px_rgba(184,145,79,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(184,145,79,0.4)] active:scale-95"
            >
              Искам сайт
            </Link>
          </nav>

          {/* Хамбургер бутон с най-висок z-index */}
          <button 
            className="md:hidden relative z-[100001] text-foreground p-3 focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Затвори меню" : "Отвори меню"}
          >
            <div className="relative w-8 h-8">
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <X size={32} strokeWidth={2} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Menu size={32} strokeWidth={2} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>

        {/* Мобилен Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 bg-[#FAF8F4] z-[100000] md:hidden overflow-y-auto pt-24 pb-10"
              style={{ height: '100dvh', width: '100vw' }} // Използваме dvh за мобилни
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />

              <div className="px-5 relative z-[100001]">
                <div className="mb-8 mt-4">
                  <h2 className="text-3xl font-bold text-foreground mb-2">Меню</h2>
                  <p className="text-secondary/70 text-sm font-medium">
                    Изберете секция или разгледайте примерни сайтове по браншове.
                  </p>
                </div>

                <div className="space-y-3 mb-10">
                  <Link 
                    href="/" 
                    onClick={closeAll}
                    className="flex items-center justify-between bg-white border border-border/40 rounded-2xl px-5 py-5 shadow-sm active:bg-primary/[0.04] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                        <Home size={20} strokeWidth={2} />
                      </div>
                      <span className="font-bold text-lg text-foreground/90">Начало</span>
                    </div>
                    <ChevronRight size={20} className="text-primary/40" />
                  </Link>

                  <Link 
                    href="/kontakti" 
                    onClick={closeAll}
                    className="flex items-center justify-between bg-white border border-border/40 rounded-2xl px-5 py-5 shadow-sm active:bg-primary/[0.04] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                        <Mail size={20} strokeWidth={2} />
                      </div>
                      <span className="font-bold text-lg text-foreground/90">Контакти</span>
                    </div>
                    <ChevronRight size={20} className="text-primary/40" />
                  </Link>
                </div>

                <div className="mb-8">
                  <button 
                    onClick={() => setIsMobilePortfolioOpen(!isMobilePortfolioOpen)}
                    aria-expanded={isMobilePortfolioOpen}
                    className={cn(
                      "w-full flex items-center justify-between p-5 rounded-2xl shadow-sm transition-all duration-300 text-left border",
                      isMobilePortfolioOpen 
                        ? "bg-primary/[0.06] border-primary/20" 
                        : "bg-white border-primary/15"
                    )}
                  >
                    <div>
                      <h3 className="font-bold text-lg text-foreground/90 leading-none mb-2">Портфолио по браншове</h3>
                      <p className="text-xs font-medium text-secondary/60">20 примерни уеб визии според типа бизнес.</p>
                    </div>
                    <ChevronDown size={24} className={cn("text-primary transition-transform duration-300", isMobilePortfolioOpen && "rotate-180")} />
                  </button>

                  <AnimatePresence>
                    {isMobilePortfolioOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 grid grid-cols-1 gap-2">
                          {industries.map((item) => {
                            if (!item?.href) return null;
                            const Icon = (Icons as any)[item.icon] || Icons.Check;
                            return (
                              <Link 
                                key={item.slug} 
                                href={item.href}
                                className="flex items-center justify-between bg-white border border-border/30 rounded-xl p-3 shadow-sm active:bg-primary/[0.05] transition-colors"
                                onClick={closeAll}
                              >
                                <div className="flex min-w-0 items-center gap-3">
                                  <div className="w-9 h-9 shrink-0 rounded-xl bg-primary/[0.08] flex items-center justify-center text-primary">
                                    <Icon size={17} strokeWidth={2.5} />
                                  </div>
                                  <span className="text-sm font-semibold text-foreground/90 leading-tight min-w-0 break-words line-clamp-2">
                                    {item.title.replace("Сайт за ", "")}
                                  </span>
                                </div>
                                <ChevronRight size={14} className="text-primary/50 shrink-0 ml-2" />
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="bg-primary text-white rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(184,145,79,0.25)] relative overflow-hidden">
                  <div className="absolute top-[-20%] right-[-10%] w-[120px] h-[120px] bg-white/10 rounded-full blur-[40px] pointer-events-none" />
                  
                  <div className="relative z-10 mb-6">
                    <h3 className="text-2xl font-bold mb-2">Готови ли сте за нов сайт?</h3>
                    <p className="text-white/80 text-sm font-medium">Изпратете запитване и ще обсъдим вашия бизнес.</p>
                  </div>

                  <Link 
                    href="/kontakti" 
                    onClick={closeAll}
                    className="flex items-center justify-center gap-2 w-full bg-white text-primary font-black py-4 rounded-full text-lg shadow-xl active:scale-95 transition-transform"
                  >
                    Искам сайт
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Backdrop за десктоп мега менюто */}
        <div 
          className={cn(
            "fixed inset-0 bg-background/45 backdrop-blur-[3px] z-[99998] transition-opacity duration-300 pointer-events-none opacity-0",
            isMegaMenuOpen && "opacity-100 pointer-events-auto"
          )} 
          onClick={() => setIsMegaMenuOpen(false)}
        />
      </header>
    </>
  );
}