import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Menu, X, Instagram, Music2, Phone, MessageSquare, PhoneCall } from 'lucide-react';
import { SITE_CONFIG } from '../config';

interface NavbarProps {
  onOpenBooking: (tierId?: string) => void;
  onOpenReel: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenReel }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCallDropdown, setShowCallDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A0A0C]/95 backdrop-blur-xl border-b border-[#2A2A2E] shadow-2xl py-3.5' 
          : 'bg-transparent py-5 border-b border-[#2A2A2E]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Identity */}
        <a 
          href="#"
          onClick={handleScrollToTop}
          className="group flex items-center gap-3 focus:outline-none cursor-pointer"
          id="nav-brand-logo"
          title="Return to Main Page"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#16161A] border border-[#2A2A2E] group-hover:border-[#C69F66]/60 flex items-center justify-center transition-all shadow-md">
            <span className="font-serif font-black text-lg text-[#C69F66] tracking-wider">MJ</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white group-hover:text-[#C69F66] transition-colors">
              MC JAYE <span className="text-[#C69F66]">CONCEPTS</span>
            </span>
            <span className="text-[9px] tracking-[0.25em] uppercase font-semibold text-[#E0E0E0]/50">
              Professional Event Hosting
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-[11px] uppercase tracking-widest font-semibold text-[#E0E0E0]/70">
          <a 
            href="#"
            onClick={handleScrollToTop}
            className="hover:text-[#C69F66] transition-colors py-1 text-white font-bold cursor-pointer"
          >
            Main Page
          </a>
          <a 
            href="#the-guarantee" 
            className="hover:text-[#C69F66] transition-colors py-1"
          >
            The Guarantee
          </a>
          <a 
            href="#languages" 
            className="hover:text-[#C69F66] transition-colors py-1 flex items-center gap-1.5"
          >
            <span>3 Languages</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C69F66] animate-pulse"></span>
          </a>
          <a 
            href="#framework" 
            className="hover:text-[#C69F66] transition-colors py-1"
          >
            How It Works
          </a>
          <a 
            href="#packages" 
            className="hover:text-[#C69F66] transition-colors py-1"
          >
            Packages & Pricing
          </a>
          <a 
            href="#why-mc-jaye" 
            className="hover:text-[#C69F66] transition-colors py-1"
          >
            Why MC JAYE
          </a>
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick Call Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCallDropdown(!showCallDropdown)}
              onBlur={() => setTimeout(() => setShowCallDropdown(false), 250)}
              className="px-3.5 py-2 rounded-full text-xs font-semibold text-[#E0E0E0] hover:text-[#C69F66] bg-[#16161A] hover:bg-[#202026] border border-[#2A2A2E] hover:border-[#C69F66]/50 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#C69F66]" />
              <span>Call MC Jaye</span>
            </button>

            {showCallDropdown && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-[#0F0F12] border border-[#2A2A2E] rounded-2xl p-2 shadow-2xl z-50 flex flex-col gap-1 animate-in fade-in zoom-in-95 duration-150">
                <a
                  href={`tel:${SITE_CONFIG.primaryPhone}`}
                  className="px-3 py-2 rounded-xl hover:bg-[#16161A] text-xs font-medium text-white flex items-center justify-between group"
                >
                  <span className="text-[#E0E0E0]/80">Primary Line:</span>
                  <span className="font-mono text-[#C69F66] font-bold">{SITE_CONFIG.primaryPhoneDisplay}</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.secondaryPhone}`}
                  className="px-3 py-2 rounded-xl hover:bg-[#16161A] text-xs font-medium text-white flex items-center justify-between group"
                >
                  <span className="text-[#E0E0E0]/80">Second Line:</span>
                  <span className="font-mono text-[#C69F66] font-bold">{SITE_CONFIG.secondaryPhoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappPhoneNumber}?text=${encodeURIComponent("Hello MC JAYE, I would like to inquire about hosting my event.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-xl bg-[#C69F66]/10 hover:bg-[#C69F66] hover:text-[#0A0A0C] text-xs font-semibold text-[#C69F66] flex items-center gap-2 mt-1 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: {SITE_CONFIG.whatsappDisplay}</span>
                </a>
              </div>
            )}
          </div>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappPhoneNumber}?text=${encodeURIComponent("Hello MC JAYE, I would like to inquire about hosting my event.")}`}
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2 rounded-full text-xs font-semibold text-[#C69F66] hover:text-white bg-[#16161A] hover:bg-[#202026] border border-[#2A2A2E] hover:border-[#C69F66]/50 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#C69F66]" />
            <span>WhatsApp</span>
          </a>

          <button
            id="nav-btn-watch-reel"
            onClick={onOpenReel}
            className="px-3.5 py-2 rounded-full text-xs font-semibold text-[#E0E0E0] hover:text-[#C69F66] bg-[#16161A] hover:bg-[#202026] border border-[#2A2A2E] hover:border-[#C69F66]/50 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C69F66]" />
            <span>Reel</span>
          </button>

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
        <div className="flex items-center gap-2 md:hidden">
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
          className="md:hidden mt-2 mx-4 p-5 rounded-2xl bg-[#0F0F12] border border-[#2A2A2E] shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#E0E0E0]/80">
            <a 
              href="#" 
              onClick={handleScrollToTop}
              className="px-3 py-2 rounded-lg bg-[#16161A] text-white hover:text-[#C69F66] transition-colors font-bold flex items-center justify-between"
            >
              <span>Main Page (Home)</span>
              <span className="text-[10px] text-[#C69F66] font-mono">↑ Top</span>
            </a>
            <a 
              href="#the-guarantee" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#16161A] hover:text-[#C69F66] transition-colors"
            >
              The Zero-Gbege Guarantee™
            </a>
            <a 
              href="#languages" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#16161A] hover:text-[#C69F66] transition-colors"
            >
              3 Languages (English • Pidgin • Yoruba)
            </a>
            <a 
              href="#framework" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#16161A] hover:text-[#C69F66] transition-colors"
            >
              How It Works (5-Step Framework)
            </a>
            <a 
              href="#packages" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#16161A] hover:text-[#C69F66] transition-colors"
            >
              Packages & Pricing
            </a>
            <a 
              href="#why-mc-jaye" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#16161A] hover:text-[#C69F66] transition-colors"
            >
              Why MC JAYE CONCEPTS
            </a>
          </nav>

          {/* Direct Phone Lines in Mobile Menu */}
          <div className="p-3 rounded-xl bg-[#16161A] border border-[#2A2A2E] space-y-2 text-xs">
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#C69F66]">
              Direct Contact Lines:
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
                className="flex items-center justify-between text-[#C69F66] font-semibold pt-1 border-t border-[#2A2A2E]"
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
              id="mobile-btn-watch-reel"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReel();
              }}
              className="w-full py-2.5 rounded-full text-xs font-semibold text-[#C69F66] bg-[#16161A] border border-[#2A2A2E] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#C69F66]" />
              <span>Watch Highlights Reel</span>
            </button>

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
