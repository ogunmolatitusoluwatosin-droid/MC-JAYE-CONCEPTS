import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Instagram, Music2, Phone, MessageSquare, Camera, Sparkles, Layers } from 'lucide-react';
import { SITE_CONFIG } from '../config';

export type PageId = 'home' | 'gallery' | 'packages';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (tierId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageClick = (page: PageId, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A0A0C]/95 backdrop-blur-xl border-b border-[#2A2A2E] shadow-2xl py-3.5' 
          : 'bg-[#0A0A0C]/80 backdrop-blur-md py-4 sm:py-5 border-b border-[#2A2A2E]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Identity */}
        <button 
          onClick={(e) => handlePageClick('home', e)}
          className="group flex items-center gap-3 focus:outline-none cursor-pointer text-left"
          id="nav-brand-logo"
          title="MC JAYE CONCEPTS Home"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#C69F66]/40 group-hover:border-[#C69F66] shadow-[0_0_15px_rgba(198,159,102,0.25)] flex items-center justify-center transition-all bg-black shrink-0">
            <img 
              src={SITE_CONFIG.logo} 
              alt="MC JAYE CONCEPTS Logo" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-[#C69F66] transition-colors leading-tight">
              MC JAYE <span className="text-[#C69F66]">CONCEPTS</span>
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-semibold text-[#E0E0E0]/60">
              Professional Event Hosting
            </span>
          </div>
        </button>

        {/* 3 Main Website Page Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-[#16161A]/80 border border-[#2A2A2E]">
          <button
            onClick={() => handlePageClick('home')}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
              currentPage === 'home'
                ? 'bg-[#C69F66] text-[#0A0A0C] font-bold shadow-md'
                : 'text-[#E0E0E0]/70 hover:text-white hover:bg-[#202026]'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handlePageClick('gallery')}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              currentPage === 'gallery'
                ? 'bg-[#C69F66] text-[#0A0A0C] font-bold shadow-md'
                : 'text-[#E0E0E0]/70 hover:text-white hover:bg-[#202026]'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Live Photos & Stage</span>
          </button>

          <button
            onClick={() => handlePageClick('packages')}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              currentPage === 'packages'
                ? 'bg-[#C69F66] text-[#0A0A0C] font-bold shadow-md'
                : 'text-[#E0E0E0]/70 hover:text-white hover:bg-[#202026]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Packages & Pricing</span>
          </button>
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappPhoneNumber}?text=${encodeURIComponent("Hello MC JAYE, I would like to inquire about hosting my event.")}`}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full text-xs font-semibold text-[#C69F66] hover:text-white bg-[#16161A] hover:bg-[#202026] border border-[#2A2A2E] hover:border-[#C69F66]/50 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#C69F66]" />
            <span>WhatsApp</span>
          </a>

          <button
            id="nav-btn-book-quote"
            onClick={() => onOpenBooking()}
            className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0A0A0C] bg-[#C69F66] hover:bg-white transition-all shadow-[0_0_20px_rgba(198,159,102,0.3)] hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Check Availability</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle & Quick Call */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${SITE_CONFIG.primaryPhone}`}
            className="p-2 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] hover:bg-[#C69F66] hover:text-[#0A0A0C] transition-colors"
            aria-label="Call MC Jaye"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            id="nav-btn-mobile-book"
            onClick={() => onOpenBooking()}
            className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0A0A0C] bg-[#C69F66] shadow-[0_0_15px_rgba(198,159,102,0.25)] cursor-pointer"
          >
            Quote
          </button>
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#16161A] border border-[#2A2A2E] text-slate-200 hover:text-[#C69F66] focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden mt-2 mx-4 p-5 rounded-2xl bg-[#0F0F12] border border-[#2A2A2E] shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {/* 3 Pages Selector for Mobile */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C69F66] px-1">
              Select Page:
            </span>
            <button 
              onClick={() => handlePageClick('home')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                currentPage === 'home'
                  ? 'bg-[#C69F66] text-[#0A0A0C]'
                  : 'bg-[#16161A] text-[#E0E0E0] hover:text-[#C69F66]'
              }`}
            >
              <span>1. Home Experience</span>
              {currentPage === 'home' && <span className="text-[10px] bg-[#0A0A0C] text-[#C69F66] px-2 py-0.5 rounded-full">Active</span>}
            </button>

            <button 
              onClick={() => handlePageClick('gallery')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                currentPage === 'gallery'
                  ? 'bg-[#C69F66] text-[#0A0A0C]'
                  : 'bg-[#16161A] text-[#E0E0E0] hover:text-[#C69F66]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Camera className="w-3.5 h-3.5" />
                <span>2. Live Photos & Stage</span>
              </span>
              {currentPage === 'gallery' && <span className="text-[10px] bg-[#0A0A0C] text-[#C69F66] px-2 py-0.5 rounded-full">Active</span>}
            </button>

            <button 
              onClick={() => handlePageClick('packages')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                currentPage === 'packages'
                  ? 'bg-[#C69F66] text-[#0A0A0C]'
                  : 'bg-[#16161A] text-[#E0E0E0] hover:text-[#C69F66]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>3. Packages & Pricing</span>
              </span>
              {currentPage === 'packages' && <span className="text-[10px] bg-[#0A0A0C] text-[#C69F66] px-2 py-0.5 rounded-full">Active</span>}
            </button>
          </div>

          {/* Direct Phone Lines in Mobile Menu */}
          <div className="p-3.5 rounded-xl bg-[#16161A] border border-[#2A2A2E] space-y-2 text-xs">
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#C69F66]">
              Direct Phone & WhatsApp:
            </div>
            <div className="flex flex-col gap-1.5">
              <a 
                href={`tel:${SITE_CONFIG.primaryPhone}`} 
                className="flex items-center justify-between text-[#E0E0E0] hover:text-[#C69F66]"
              >
                <span>Call Primary:</span>
                <span className="font-mono font-bold text-[#C69F66]">{SITE_CONFIG.primaryPhoneDisplay}</span>
              </a>
              <a 
                href={`tel:${SITE_CONFIG.secondaryPhone}`} 
                className="flex items-center justify-between text-[#E0E0E0] hover:text-[#C69F66]"
              >
                <span>Call Secondary:</span>
                <span className="font-mono font-bold text-[#C69F66]">{SITE_CONFIG.secondaryPhoneDisplay}</span>
              </a>
              <a 
                href={`https://wa.me/${SITE_CONFIG.whatsappPhoneNumber}?text=${encodeURIComponent("Hello MC JAYE, I would like to inquire about hosting my event.")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-[#C69F66] font-semibold pt-1.5 border-t border-[#2A2A2E]"
              >
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" /> WhatsApp:
                </span>
                <span className="font-mono">{SITE_CONFIG.whatsappDisplay}</span>
              </a>
            </div>
          </div>

          <div className="pt-2 border-t border-[#2A2A2E] flex flex-col gap-2.5">
            <button
              id="mobile-btn-book-action"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-widest text-[#0A0A0C] bg-[#C69F66] hover:bg-white shadow-[0_0_20px_rgba(198,159,102,0.3)] flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Check Availability & Get Quote</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-2 text-[11px] uppercase tracking-widest text-[#E0E0E0]/60">
            <a 
              href={SITE_CONFIG.instagramUrl}
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#C69F66] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C69F66]" />
              <span>Instagram</span>
            </a>
            <span>•</span>
            <a 
              href={SITE_CONFIG.tiktokUrl}
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#C69F66] transition-colors"
            >
              <Music2 className="w-3.5 h-3.5 text-[#C69F66]" />
              <span>TikTok</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
