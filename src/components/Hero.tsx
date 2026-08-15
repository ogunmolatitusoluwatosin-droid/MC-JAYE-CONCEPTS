import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Play, Volume2, ShieldCheck, CheckCircle2, ChevronDown, Mic2 } from 'lucide-react';
import { SITE_CONFIG } from '../config';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenReel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenReel }) => {
  return (
    <section 
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0A0A0C]"
    >
      {/* Dynamic Background Stage Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#C69F66] opacity-[0.04] blur-[160px] pointer-events-none -z-10" />

      {/* Subtle Pattern Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#2A2A2E_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.4] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-6 shadow-lg"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C69F66] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C69F66]"></span>
          </span>
          <span>Now Securing Dates for 2026 Celebrations in Lagos & Worldwide</span>
        </motion.div>

        {/* Brand Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#C69F66]">
              {SITE_CONFIG.brandName}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.08] mb-6 text-white">
            The Event Can Be <br />
            <span className="italic font-serif text-[#C69F66]">Beautiful.</span> The Program <br className="hidden sm:inline" />
            Should Be Too.
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl font-light text-[#E0E0E0]/80 tracking-wide mb-10 max-w-2xl mx-auto"
        >
          Professional MC. Seamless Flow. <br className="sm:hidden" />
          <span className="font-semibold text-white">Non-Stop Energy.</span>
        </motion.p>

        {/* Core Host Spotlight & Problem Statement Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-10 grid grid-cols-1 lg:grid-cols-12 gap-6 text-left"
        >
          {/* Real Photo Card of MC Jaye */}
          <div className="lg:col-span-5 bg-[#0F0F12] border border-[#2A2A2E] rounded-3xl p-4 sm:p-5 relative overflow-hidden group shadow-2xl flex flex-col justify-between">
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#2A2A2E] mb-4">
              <img
                src={SITE_CONFIG.whatsappPhoneNumber ? "https://i.ibb.co/v4cjtKDk/Whats-App-Image-2026-08-14-at-19-02-01.jpg" : ""}
                alt="MC Jaye Concepts Live Event Compere"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter brightness-100 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/30 pointer-events-none" />

              {/* Verified Host Badge */}
              <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-[#0A0A0C]/90 backdrop-blur-md border border-[#C69F66]/50 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#C69F66]" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C69F66]">
                  Official MC JAYE
                </span>
              </div>

              {/* Energy Tag */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0A0A0C]/85 backdrop-blur-md border border-[#2A2A2E]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif font-bold text-sm text-white">MC JAYE CONCEPTS</p>
                    <p className="text-[11px] text-[#C69F66]">High-Energy Event Host & Compere</p>
                  </div>
                  <button
                    onClick={onOpenReel}
                    className="p-2 rounded-full bg-[#C69F66] text-[#0A0A0C] hover:bg-white transition-colors"
                    aria-label="Play Reel"
                  >
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Micro-stats under portrait */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-[#16161A] border border-[#2A2A2E] text-center">
                <p className="text-[10px] uppercase tracking-wider text-[#E0E0E0]/60">Stage Coverage</p>
                <p className="font-serif font-bold text-xs text-white">Lagos & Worldwide</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#16161A] border border-[#2A2A2E] text-center">
                <p className="text-[10px] uppercase tracking-wider text-[#E0E0E0]/60">Experience</p>
                <p className="font-serif font-bold text-xs text-[#C69F66]">150+ Events</p>
              </div>
            </div>
          </div>

          {/* Problem Statement & Solution Card */}
          <div className="lg:col-span-7 bg-[#0F0F12] border border-[#2A2A2E] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-3.5 text-sm sm:text-base text-[#E0E0E0]/80 leading-relaxed font-light">
              <p className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C69F66] mt-2.5 shrink-0"></span>
                <span>Your guests didn’t come to watch the event coordinator chase the DJ.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C69F66] mt-2.5 shrink-0"></span>
                <span>They didn’t come to sit through awkward silences while someone searches for the next speaker.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C69F66] mt-2.5 shrink-0"></span>
                <span>And you certainly didn’t spend money, time, and energy planning a memorable celebration just for the program to become “Sorry, who is next?”</span>
              </p>
            </div>

            <div className="my-5 border-t border-[#2A2A2E]" />

            <div className="space-y-3 text-sm sm:text-base text-[#E0E0E0]">
              <p className="font-serif italic font-bold text-[#C69F66] text-base sm:text-lg">
                That’s where MC JAYE CONCEPTS comes in.
              </p>
              <p className="leading-relaxed font-light text-xs sm:text-sm text-[#E0E0E0]/90">
                A high-energy, culturally polished event compere built to keep your celebration organized, engaging, respectful, and alive from the first announcement to the final send-off.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#E0E0E0] text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C69F66]" />
                  No dry moments
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#E0E0E0] text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C69F66]" />
                  No unnecessary gbege
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#E0E0E0] text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C69F66]" />
                  No confused vendors
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C69F66]/15 border border-[#C69F66]/40 text-[#C69F66] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Just a program that flows
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Center Accent Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <button
            id="hero-btn-check-availability"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0A0A0C] bg-[#C69F66] hover:bg-white shadow-[0_0_20px_rgba(198,159,102,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0A0A0C]" />
            <span>Check Availability & Get Quote</span>
          </button>

          <button
            id="hero-btn-watch-highlights"
            onClick={onOpenReel}
            className="w-full sm:w-auto px-7 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white hover:text-[#C69F66] bg-[#16161A] hover:bg-[#202026] border border-[#2A2A2E] hover:border-[#C69F66]/50 shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <div className="w-6 h-6 rounded-full bg-[#C69F66]/20 group-hover:bg-[#C69F66] flex items-center justify-center transition-colors">
              <Play className="w-3 h-3 text-[#C69F66] group-hover:text-[#0A0A0C] fill-current ml-0.5" />
            </div>
            <span>Watch Energy Reel</span>
          </button>
        </motion.div>

        {/* Direct Contact Quick Action Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-12 text-xs text-[#E0E0E0]/80"
        >
          <span className="text-[11px] uppercase tracking-widest text-[#C69F66] font-semibold">
            Direct Lines:
          </span>
          <a
            href={`tel:${SITE_CONFIG.primaryPhone}`}
            className="px-3.5 py-1.5 rounded-full bg-[#16161A] border border-[#2A2A2E] hover:border-[#C69F66] text-white hover:text-[#C69F66] transition-all font-mono font-medium flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C69F66]" />
            <span>{SITE_CONFIG.primaryPhoneDisplay}</span>
          </a>
          <a
            href={`tel:${SITE_CONFIG.secondaryPhone}`}
            className="px-3.5 py-1.5 rounded-full bg-[#16161A] border border-[#2A2A2E] hover:border-[#C69F66] text-white hover:text-[#C69F66] transition-all font-mono font-medium flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C69F66]" />
            <span>{SITE_CONFIG.secondaryPhoneDisplay}</span>
          </a>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappPhoneNumber}?text=${encodeURIComponent("Hello MC JAYE, I would like to inquire about hosting my event.")}`}
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[#C69F66]/10 border border-[#C69F66]/30 hover:bg-[#C69F66] hover:text-[#0A0A0C] text-[#C69F66] transition-all font-medium flex items-center gap-1.5"
          >
            <span>WhatsApp: {SITE_CONFIG.whatsappDisplay}</span>
          </a>
        </motion.div>

        {/* Three Step Alignment / Mapping / Execution Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#2A2A2E] pt-8 max-w-3xl mx-auto text-left">
          <div className="p-4 rounded-2xl bg-[#0F0F12] border border-[#2A2A2E] flex flex-col gap-1">
            <span className="text-[#C69F66] font-serif font-bold text-lg">01</span>
            <span className="text-xs uppercase tracking-wider font-bold text-white">Alignment</span>
            <p className="text-[11px] text-[#E0E0E0]/60">Planning with DJs & Planners</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#0F0F12] border border-[#2A2A2E] flex flex-col gap-1">
            <span className="text-[#C69F66] font-serif font-bold text-lg">02</span>
            <span className="text-xs uppercase tracking-wider font-bold text-white">Mapping</span>
            <p className="text-[11px] text-[#E0E0E0]/60">Run-of-show customization</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#0F0F12] border border-[#2A2A2E] flex flex-col gap-1">
            <span className="text-[#C69F66] font-serif font-bold text-lg">03</span>
            <span className="text-xs uppercase tracking-wider font-bold text-white">Execution</span>
            <p className="text-[11px] text-[#E0E0E0]/60">Managing energy & flow</p>
          </div>
        </div>

        {/* Quick Social Proof & Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] uppercase tracking-wider text-[#E0E0E0]/60 pt-8 mt-8 border-t border-[#2A2A2E]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C69F66]" />
            <span>Zero-Gbege Guarantee™</span>
          </div>
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-[#C69F66]" />
            <span>English • Pidgin • Yoruba</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C69F66]" />
            <span>150+ Celebrations Hosted</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#deserves-more"
            className="p-2 rounded-full text-[#E0E0E0]/40 hover:text-[#C69F66] transition-colors animate-bounce"
            aria-label="Scroll Down"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
