import React from 'react';
import { Instagram, Music2, MapPin, ShieldCheck, Phone, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../config';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer 
      id="main-footer"
      className="bg-[#050507] border-t border-[#2A2A2E] pt-16 pb-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2A2A2E]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#16161A] border border-[#2A2A2E] p-[1px] flex items-center justify-center shadow-lg">
                <span className="font-serif font-bold text-lg text-[#C69F66]">MJ</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white">
                  {SITE_CONFIG.brandName}
                </h3>
                <p className="text-xs text-[#C69F66] font-medium font-serif italic">
                  Professional Event Compere & Master of Ceremonies
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E0E0E0]/70 max-w-md leading-relaxed font-light">
              Professional Hosting. Cultural Intelligence. Unforgettable Energy. Seamless program coordination across Lagos, Nigeria, and destination celebrations worldwide.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#E0E0E0]/60 font-light">
              <MapPin className="w-4 h-4 text-[#C69F66] shrink-0" />
              <span>{SITE_CONFIG.primaryLocation}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#C69F66]">
              Quick Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#E0E0E0]/70 font-light">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                  className="hover:text-white text-[#C69F66] transition-colors font-medium cursor-pointer"
                >
                  ↑ Main Page (Top of Page)
                </button>
              </li>
              <li>
                <a href="#the-guarantee" className="hover:text-white transition-colors">
                  The Zero-Gbege Guarantee™
                </a>
              </li>
              <li>
                <a href="#languages" className="hover:text-white transition-colors">
                  3 Languages (English • Pidgin • Yoruba)
                </a>
              </li>
              <li>
                <a href="#framework" className="hover:text-white transition-colors">
                  5-Step Pre-Event Framework
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Experience Packages & Pricing
                </a>
              </li>
              <li>
                <a href="#why-mc-jaye" className="hover:text-white transition-colors">
                  Why MC JAYE CONCEPTS
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Lines & Socials */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#C69F66]">
              Direct Contact & Booking
            </p>

            {/* Direct Phone Numbers Box */}
            <div className="p-3.5 rounded-2xl bg-[#16161A] border border-[#2A2A2E] space-y-2 text-xs">
              <div className="flex items-center justify-between text-[#E0E0E0]/80">
                <span className="flex items-center gap-1.5 font-light">
                  <Phone className="w-3.5 h-3.5 text-[#C69F66]" /> Call Primary:
                </span>
                <a href={`tel:${SITE_CONFIG.primaryPhone}`} className="font-mono font-bold text-white hover:text-[#C69F66]">
                  {SITE_CONFIG.primaryPhoneDisplay}
                </a>
              </div>
              <div className="flex items-center justify-between text-[#E0E0E0]/80">
                <span className="flex items-center gap-1.5 font-light">
                  <Phone className="w-3.5 h-3.5 text-[#C69F66]" /> Call Secondary:
                </span>
                <a href={`tel:${SITE_CONFIG.secondaryPhone}`} className="font-mono font-bold text-white hover:text-[#C69F66]">
                  {SITE_CONFIG.secondaryPhoneDisplay}
                </a>
              </div>
              <div className="flex items-center justify-between text-[#C69F66] font-semibold pt-1 border-t border-[#2A2A2E]">
                <span className="flex items-center gap-1.5 font-light">
                  <MessageSquare className="w-3.5 h-3.5 text-[#C69F66]" /> WhatsApp:
                </span>
                <a 
                  href={`https://wa.me/${SITE_CONFIG.whatsappPhoneNumber}?text=${encodeURIComponent("Hello MC JAYE, I would like to inquire about hosting my event.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono font-bold hover:underline"
                >
                  {SITE_CONFIG.whatsappDisplay}
                </a>
              </div>
            </div>
            
            <div className="flex gap-2">
              <a
                id="footer-btn-instagram"
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-2.5 rounded-full bg-[#16161A] hover:bg-[#C69F66] hover:text-[#0A0A0C] border border-[#2A2A2E] text-xs font-semibold text-[#E0E0E0] flex items-center justify-center gap-2 transition-all group"
              >
                <Instagram className="w-4 h-4 text-[#C69F66] group-hover:text-[#0A0A0C]" />
                <span>Instagram</span>
              </a>

              <a
                id="footer-btn-tiktok"
                href={SITE_CONFIG.tiktokUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-2.5 rounded-full bg-[#16161A] hover:bg-[#C69F66] hover:text-[#0A0A0C] border border-[#2A2A2E] text-xs font-semibold text-[#E0E0E0] flex items-center justify-center gap-2 transition-all group"
              >
                <Music2 className="w-4 h-4 text-[#C69F66] group-hover:text-[#0A0A0C]" />
                <span>TikTok</span>
              </a>
            </div>

            <button
              id="footer-btn-quick-check"
              onClick={onOpenBooking}
              className="w-full py-3 px-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#0A0A0C] bg-[#C69F66] hover:bg-white shadow-md shadow-[#C69F66]/20 transition-all cursor-pointer"
            >
              Check Date Availability & Quote
            </button>
          </div>
        </div>

        {/* Copyright, Zero-Gbege Badge & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E0E0E0]/60 font-light">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[#C69F66] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#C69F66]" />
              <span>The Zero-Gbege Guarantee™ Verified Event Experience</span>
            </div>

            <button
              id="footer-btn-back-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-3.5 py-1.5 rounded-full bg-[#16161A] hover:bg-[#C69F66] text-[#E0E0E0] hover:text-[#0A0A0C] border border-[#2A2A2E] hover:border-[#C69F66] text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              title="Return to Main Page"
            >
              <span>↑ Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
