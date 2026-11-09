import React from 'react';
import { Instagram, Music2, MapPin, ShieldCheck, Phone, MessageSquare, Camera, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { PageId } from './Navbar';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigatePage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onNavigatePage }) => {
  const handleNav = (page: PageId) => {
    onNavigatePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C69F66]/40 shadow-[0_0_15px_rgba(198,159,102,0.25)] flex items-center justify-center bg-black shrink-0">
                <img 
                  src={SITE_CONFIG.logo} 
                  alt="MC JAYE CONCEPTS Logo" 
                  className="w-full h-full object-cover"
                />
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

          {/* Quick Navigation 3 Pages */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#C69F66]">
              Website Pages
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#E0E0E0]/70 font-light">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="hover:text-white text-[#C69F66] transition-colors font-medium cursor-pointer flex items-center gap-1.5"
                >
                  <span>1. Home Experience</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('gallery')} 
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Camera className="w-3.5 h-3.5 text-[#C69F66]" />
                  <span>2. Live Photos & Stage</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('packages')} 
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C69F66]" />
                  <span>3. Packages & Pricing</span>
                </button>
              </li>
              <li className="pt-2 border-t border-[#2A2A2E]/60">
                <button 
                  onClick={() => {
                    handleNav('home');
                    setTimeout(() => {
                      const el = document.getElementById('the-guarantee');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white text-xs text-[#E0E0E0]/50 transition-colors"
                >
                  The Zero-Gbege Guarantee™
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleNav('home');
                    setTimeout(() => {
                      const el = document.getElementById('languages');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white text-xs text-[#E0E0E0]/50 transition-colors"
                >
                  English • Pidgin • Yoruba Flow
                </button>
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
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Direct:
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

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#16161A] border border-[#2A2A2E] text-[#E0E0E0]/80 hover:text-[#C69F66] hover:border-[#C69F66]/50 transition-colors flex items-center gap-2 text-xs"
              >
                <Instagram className="w-4 h-4 text-[#C69F66]" />
                <span>Instagram</span>
              </a>

              <a
                href={SITE_CONFIG.tiktokUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#16161A] border border-[#2A2A2E] text-[#E0E0E0]/80 hover:text-[#C69F66] hover:border-[#C69F66]/50 transition-colors flex items-center gap-2 text-xs"
              >
                <Music2 className="w-4 h-4 text-[#C69F66]" />
                <span>TikTok</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="ml-auto px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0A0A0C] bg-[#C69F66] hover:bg-white transition-all shadow-md cursor-pointer"
              >
                Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Trust Badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E0E0E0]/50 font-light">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.</p>

          <div className="flex items-center gap-2 text-[#C69F66]">
            <ShieldCheck className="w-4 h-4" />
            <span>Guaranteed Zero-Gbege™ Event Execution</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
