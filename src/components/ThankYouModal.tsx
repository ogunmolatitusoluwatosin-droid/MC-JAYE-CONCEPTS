import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageSquare, Sparkles, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG, EVENT_PACKAGES } from '../config';
import { LeadSubmission } from '../types';

interface ThankYouModalProps {
  isOpen: boolean;
  leadData: LeadSubmission | null;
  onClose: () => void;
}

export const ThankYouModal: React.FC<ThankYouModalProps> = ({
  isOpen,
  leadData,
  onClose,
}) => {
  if (!isOpen || !leadData) return null;

  const pkg = EVENT_PACKAGES.find(p => p.id === leadData.selectedTier) || EVENT_PACKAGES[2];

  // Construct pre-filled WhatsApp message
  const preFilledMessage = encodeURIComponent(
    `Hello MC JAYE,\n\nI just checked availability on your website for my upcoming celebration!\n\n` +
    `• Name: ${leadData.fullName}\n` +
    `• Event Date: ${leadData.eventDate}\n` +
    `• Location: ${leadData.eventLocation}\n` +
    `• Selected Tier: ${pkg.name} (${pkg.price})\n` +
    `• Contact: ${leadData.whatsappPhone}\n\n` +
    `Kindly confirm your availability for this date so we can secure the booking and discuss our run-of-show. Thank you!`
  );

  const whatsappDirectUrl = `https://wa.me/${SITE_CONFIG.whatsappPhoneNumber}?text=${preFilledMessage}`;

  return (
    <div 
      id="thank-you-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-lg my-8 bg-[#0F0F12] border border-[#C69F66]/40 rounded-3xl p-6 sm:p-10 relative overflow-hidden text-center shadow-2xl"
      >
        {/* Close Button */}
        <button
          id="btn-close-thank-you"
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#E0E0E0]/60 hover:text-white hover:border-[#C69F66] transition-colors cursor-pointer z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Celebration Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#16161A] border border-[#C69F66]/40 p-[1px] mx-auto mb-5 shadow-xl flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-[#C69F66]" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-3 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#C69F66]" />
          <span>Inquiry Logged Successfully</span>
        </div>

        <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight mb-2">
          Your Date Is Reserved In Queue!
        </h3>

        <p className="text-xs sm:text-sm text-[#E0E0E0]/80 font-light mb-6">
          Thank you, <span className="text-[#C69F66] font-medium">{leadData.fullName}</span>. To lock in your date immediately and skip the queue, connect with MC JAYE directly on WhatsApp:
        </p>

        {/* Summary Card */}
        <div className="p-5 rounded-2xl bg-[#16161A] border border-[#2A2A2E] text-left mb-6 space-y-2.5 text-xs text-[#E0E0E0]/80 font-light">
          <div className="flex items-center justify-between pb-2 border-b border-[#2A2A2E]">
            <span className="text-[#E0E0E0]/60">Package:</span>
            <span className="font-serif font-bold text-[#C69F66]">{pkg.name}</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-[#2A2A2E]">
            <span className="text-[#E0E0E0]/60">Investment:</span>
            <span className="font-serif font-bold text-white">{pkg.price}</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-[#2A2A2E]">
            <span className="text-[#E0E0E0]/60">Date:</span>
            <span className="font-medium text-white">{leadData.eventDate}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#E0E0E0]/60">Location:</span>
            <span className="font-medium text-white">{leadData.eventLocation}</span>
          </div>
        </div>

        {/* Main WhatsApp Direct Action */}
        <a
          id="btn-whatsapp-direct-chat"
          href={whatsappDirectUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full py-4 px-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0A0A0C] bg-[#C69F66] hover:bg-white shadow-[0_0_20px_rgba(198,159,102,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 mb-3"
        >
          <MessageSquare className="w-4 h-4 text-[#0A0A0C] fill-[#0A0A0C]" />
          <span>Chat with MC JAYE on WhatsApp ({SITE_CONFIG.whatsappDisplay})</span>
          <ArrowRight className="w-4 h-4 text-[#0A0A0C]" />
        </a>

        {/* Direct Call Fallback */}
        <div className="p-3 rounded-2xl bg-[#16161A] border border-[#2A2A2E] text-xs text-[#E0E0E0]/80 mb-4 flex flex-wrap items-center justify-center gap-3">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#C69F66]">Or Call Directly:</span>
          <a href={`tel:${SITE_CONFIG.primaryPhone}`} className="font-mono font-bold text-white hover:text-[#C69F66] transition-colors">
            {SITE_CONFIG.primaryPhoneDisplay}
          </a>
          <span className="text-[#2A2A2E]">|</span>
          <a href={`tel:${SITE_CONFIG.secondaryPhone}`} className="font-mono font-bold text-white hover:text-[#C69F66] transition-colors">
            {SITE_CONFIG.secondaryPhoneDisplay}
          </a>
        </div>

        {/* Return to Main Page Action Button */}
        <button
          id="btn-return-home-from-thankyou"
          onClick={onClose}
          className="w-full py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-widest text-[#E0E0E0] hover:text-white bg-[#16161A] hover:bg-[#202026] border border-[#2A2A2E] hover:border-[#C69F66] transition-all flex items-center justify-center gap-2 mb-3 cursor-pointer shadow-md"
        >
          <span>← Return to Main Page</span>
        </button>

        <div className="flex items-center justify-center gap-2 text-[11px] text-[#E0E0E0]/60 font-light pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C69F66]" />
          <span>Pre-filled details will open in your WhatsApp app automatically.</span>
        </div>
      </motion.div>
    </div>
  );
};
