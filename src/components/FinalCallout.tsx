import React from 'react';
import { motion } from 'motion/react';
import { Heart, CheckCircle2, Calendar } from 'lucide-react';
import { SITE_CONFIG } from '../config';

interface FinalCalloutProps {
  onOpenBooking: () => void;
}

export const FinalCallout: React.FC<FinalCalloutProps> = ({ onOpenBooking }) => {
  const emotionalMemories = [
    "The laughter.",
    "The energy.",
    "The special moments.",
    "The way the room came alive.",
    "The way everything flowed."
  ];

  const ourCommitments = [
    "We'll handle the microphone.",
    "We'll manage the momentum.",
    "We'll protect the program.",
    "We'll engage the room.",
    "We'll respect the occasion."
  ];

  return (
    <section 
      id="final-callout"
      className="py-24 bg-[#0A0A0C] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Memory & Feeling Card */}
        <div className="max-w-4xl mx-auto bg-[#0F0F12] border border-[#2A2A2E] rounded-3xl p-6 sm:p-12 mb-14 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg">
            <Heart className="w-3.5 h-3.5 text-[#C69F66]" />
            <span>The Lasting Impression</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight leading-tight mb-6">
            Your Guests Will Remember How Your Event Made Them Feel.
          </h2>

          <div className="space-y-2 text-sm sm:text-base text-[#E0E0E0]/70 font-light mb-8 italic">
            <p>Long after the food is finished...</p>
            <p>Long after the DJ packs up...</p>
            <p>Long after the decorations come down...</p>
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-[#C69F66] mb-4">
            People remember:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
            {emotionalMemories.map((item, idx) => (
              <span 
                key={idx}
                className="px-5 py-2.5 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#E0E0E0] font-serif text-sm shadow-md"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-base sm:text-lg font-serif italic text-[#C69F66]">
            That's the experience MC JAYE CONCEPTS is built to create.
          </p>
        </div>

        {/* The Final Commitment Grand Card */}
        <div className="max-w-4xl mx-auto bg-[#0F0F12] border-2 border-[#C69F66]/40 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C69F66]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Host Avatar & Verified Badge */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#C69F66] to-white/20 shadow-xl mb-3">
              <img
                src="https://i.ibb.co/hF7XZ2Kv/Whats-App-Image-2026-08-14-at-18-49-28.jpg"
                alt="MC Jaye Concepts"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top rounded-full"
              />
              <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-[#C69F66] text-[#0A0A0C]">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#C69F66]">
              Direct Host Promise
            </span>
          </div>

          <h3 className="font-serif font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-8">
            Your Only Job Is To Enjoy Your Event.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8 text-left">
            {ourCommitments.map((line, idx) => (
              <div 
                key={idx}
                className={`p-3.5 rounded-2xl bg-[#16161A] border border-[#2A2A2E] text-xs sm:text-sm text-[#E0E0E0]/80 font-light flex items-center gap-2 ${
                  idx === 4 ? 'sm:col-span-2 md:col-span-1' : ''
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-[#C69F66] shrink-0" />
                <span>{line}</span>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#16161A] border border-[#2A2A2E] max-w-xl mx-auto mb-10 shadow-lg">
            <div className="flex items-center justify-center gap-4 text-base sm:text-xl font-serif font-bold">
              <span className="text-white">You bring the celebration.</span>
              <span className="text-[#C69F66]">•</span>
              <span className="text-[#C69F66] italic">We bring the control.</span>
            </div>
          </div>

          <div className="space-y-3 mb-10">
            <p className="font-serif font-bold text-xl sm:text-3xl text-white">
              Ready to Give Your Guests An Event Worth Talking About?
            </p>
            <p className="text-sm sm:text-base text-[#C69F66] font-light">
              Because when the program flows... Everybody enjoys themselves.
            </p>
          </div>

          {/* Centered Main CTA & Direct Phone Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button
              id="final-btn-book-now"
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0A0A0C] bg-[#C69F66] hover:bg-white shadow-[0_0_25px_rgba(198,159,102,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#0A0A0C]" />
              <span>Check Your Date & Book MC JAYE CONCEPTS</span>
            </button>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappPhoneNumber}?text=${encodeURIComponent("Hello MC JAYE, I would like to book you for my event.")}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-[#C69F66] bg-[#16161A] hover:bg-[#202026] border border-[#2A2A2E] hover:border-[#C69F66]/50 shadow-lg transition-all flex items-center justify-center gap-2.5"
            >
              <span>Chat WhatsApp ({SITE_CONFIG.whatsappDisplay})</span>
            </a>
          </div>

          {/* Quick Click to Call Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#E0E0E0]/80">
            <span className="text-[11px] uppercase tracking-widest text-[#C69F66] font-semibold">
              Speak With MC Jaye Directly:
            </span>
            <a
              href={`tel:${SITE_CONFIG.primaryPhone}`}
              className="font-mono text-white hover:text-[#C69F66] transition-colors underline decoration-[#C69F66]/40 underline-offset-4"
            >
              {SITE_CONFIG.primaryPhoneDisplay}
            </a>
            <span className="text-[#2A2A2E] hidden sm:inline">|</span>
            <a
              href={`tel:${SITE_CONFIG.secondaryPhone}`}
              className="font-mono text-white hover:text-[#C69F66] transition-colors underline decoration-[#C69F66]/40 underline-offset-4"
            >
              {SITE_CONFIG.secondaryPhoneDisplay}
            </a>
          </div>

          {/* Brand Signature */}
          <div className="mt-12 pt-6 border-t border-[#2A2A2E]">
            <p className="font-serif font-bold text-xl text-white tracking-wide">
              {SITE_CONFIG.brandName}
            </p>
            <p className="text-xs sm:text-sm text-[#C69F66] mt-1 font-light">
              Professional Hosting. Cultural Intelligence. Unforgettable Energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
