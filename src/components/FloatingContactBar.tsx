import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Calendar, ChevronUp, X, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../config';

interface FloatingContactBarProps {
  onOpenBooking: () => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({ onOpenBooking }) => {
  const [expanded, setExpanded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 280);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      id="floating-contact-container"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5"
    >
      {/* Back to Top / Main Page Quick Button (Shown when scrolled down) */}
      {showBackToTop && (
        <button
          id="btn-floating-back-to-top"
          onClick={scrollToTop}
          className="h-10 px-3.5 rounded-full bg-[#0F0F12]/95 hover:bg-[#C69F66] text-[#E0E0E0] hover:text-[#0A0A0C] border border-[#2A2A2E] hover:border-[#C69F66] shadow-xl flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200"
          title="Back to Top of Main Page"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Top</span>
        </button>
      )}

      {/* Expanded Menu with Full Numbers */}
      {expanded && (
        <div 
          id="floating-contact-menu"
          className="bg-[#0F0F12] border border-[#C69F66]/50 rounded-2xl p-4 shadow-2xl w-72 mb-1 animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#2A2A2E]">
            <span className="text-xs font-serif font-bold text-white tracking-wide">
              Direct Contact & WhatsApp
            </span>
            <button
              onClick={() => setExpanded(false)}
              className="p-1 rounded-md text-[#E0E0E0]/60 hover:text-white hover:bg-[#16161A]"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {/* WhatsApp */}
            <a
              id="float-btn-whatsapp"
              href={`https://wa.me/${SITE_CONFIG.whatsappPhoneNumber}?text=${encodeURIComponent("Hello MC JAYE, I would like to inquire about booking you for my event.")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#C69F66]/15 hover:bg-[#C69F66] text-[#C69F66] hover:text-[#0A0A0C] border border-[#C69F66]/30 transition-colors group text-xs font-semibold"
            >
              <span className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </span>
              <span className="font-mono">{SITE_CONFIG.whatsappDisplay}</span>
            </a>

            {/* Primary Phone */}
            <a
              id="float-btn-call-1"
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#16161A] hover:bg-[#202026] text-white hover:text-[#C69F66] border border-[#2A2A2E] hover:border-[#C69F66]/50 transition-colors text-xs font-medium"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C69F66]" />
                <span>Primary Line</span>
              </span>
              <span className="font-mono text-[#C69F66] font-bold">{SITE_CONFIG.primaryPhoneDisplay}</span>
            </a>

            {/* Secondary Phone */}
            <a
              id="float-btn-call-2"
              href={`tel:${SITE_CONFIG.secondaryPhone}`}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#16161A] hover:bg-[#202026] text-white hover:text-[#C69F66] border border-[#2A2A2E] hover:border-[#C69F66]/50 transition-colors text-xs font-medium"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C69F66]" />
                <span>Second Line</span>
              </span>
              <span className="font-mono text-[#C69F66] font-bold">{SITE_CONFIG.secondaryPhoneDisplay}</span>
            </a>

            {/* Quote Action */}
            <button
              onClick={() => {
                setExpanded(false);
                onOpenBooking();
              }}
              className="w-full mt-1 py-2.5 px-3 rounded-xl bg-[#C69F66] hover:bg-white text-[#0A0A0C] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Check Date Availability</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Badges */}
      <div className="flex items-center gap-2">
        {/* WhatsApp Quick Button */}
        <a
          id="floating-whatsapp-direct"
          href={`https://wa.me/${SITE_CONFIG.whatsappPhoneNumber}?text=${encodeURIComponent("Hello MC JAYE, I would like to inquire about booking you for my event.")}`}
          target="_blank"
          rel="noreferrer"
          className="h-12 px-4 rounded-full bg-[#16161A] hover:bg-[#202026] border border-[#C69F66]/60 text-white hover:text-[#C69F66] shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex items-center gap-2 text-xs font-semibold transition-all group"
          title={`WhatsApp: ${SITE_CONFIG.whatsappDisplay}`}
        >
          <div className="w-3 h-3 rounded-full bg-[#C69F66] animate-ping opacity-75 hidden sm:inline-block" />
          <MessageSquare className="w-4 h-4 text-[#C69F66]" />
          <span className="hidden sm:inline">WhatsApp</span>
          <span className="font-mono text-[#C69F66] text-[11px] font-bold">{SITE_CONFIG.whatsappDisplay}</span>
        </a>

        {/* Quick Menu Toggle Button */}
        <button
          id="floating-contact-toggle"
          onClick={() => setExpanded(!expanded)}
          className="h-12 w-12 rounded-full bg-[#C69F66] hover:bg-white text-[#0A0A0C] shadow-[0_0_20px_rgba(198,159,102,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          aria-label="Direct Phone & Inquiries"
        >
          {expanded ? <ChevronUp className="w-5 h-5" /> : <Phone className="w-5 h-5 fill-current" />}
        </button>
      </div>
    </div>
  );
};
