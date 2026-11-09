import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Phone, Mail, MapPin, Sparkles, ShieldCheck, Loader2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_CONFIG, EVENT_PACKAGES } from '../config';
import { LeadSubmission } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  selectedTierId?: string;
  onClose: () => void;
  onSuccess: (lead: LeadSubmission) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  selectedTierId,
  onClose,
  onSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [whatsappPhone, setWhatsappPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('Lagos, Nigeria');
  const [selectedTier, setSelectedTier] = useState('weddings');
  const [additionalNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedTierId) {
      setSelectedTier(selectedTierId);
    }
  }, [selectedTierId]);

  if (!isOpen) return null;

  const triggerGoldConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C69F66', '#E0E0E0', '#FFFFFF', '#967442'],
      });
    } catch {
      // safe fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || !whatsappPhone.trim() || !email.trim() || !eventDate.trim() || !eventLocation.trim()) {
      setErrorMsg('Please fill in all required fields so we can confirm date availability.');
      return;
    }

    setIsSubmitting(true);

    const leadData: LeadSubmission = {
      fullName: fullName.trim(),
      whatsappPhone: whatsappPhone.trim(),
      email: email.trim(),
      eventDate: eventDate.trim(),
      eventLocation: eventLocation.trim(),
      selectedTier: selectedTier,
      additionalNotes: additionalNotes.trim(),
      submittedAt: new Date().toISOString(),
    };

    // Attempt sending to Google Apps Script Webhook
    try {
      const webhookUrl = SITE_CONFIG.googleAppsScriptWebhookUrl;
      
      // If client has provided a real URL, dispatch the payload
      if (webhookUrl && !webhookUrl.includes('YOUR_DEPLOYED_APP_SCRIPT_ID')) {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...leadData,
            sheetName: SITE_CONFIG.googleSheetName,
            source: 'MC JAYE CONCEPTS Official Website'
          }),
        }).catch((err) => {
          console.warn('Webhook dispatch caught:', err);
        });
      }
    } catch (err) {
      console.warn('Submission network check:', err);
    } finally {
      // Complete funnel & celebrate
      setIsSubmitting(false);
      triggerGoldConfetti();
      onSuccess(leadData);
    }
  };

  return (
    <AnimatePresence>
      <div 
        id="booking-modal-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-xl my-8 bg-[#0F0F12] border border-[#C69F66]/40 rounded-3xl p-6 sm:p-10 relative overflow-hidden text-left shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        >
          {/* Close Button */}
          <button
            id="btn-close-booking-modal"
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#E0E0E0]/60 hover:text-white hover:border-[#C69F66] transition-colors cursor-pointer z-20"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header with Official Brand Logo */}
          <div className="mb-8 pr-8 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C69F66]/50 shadow-[0_0_15px_rgba(198,159,102,0.3)] bg-black shrink-0 hidden sm:block">
              <img 
                src={SITE_CONFIG.logo} 
                alt="MC JAYE CONCEPTS Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-[11px] font-semibold uppercase tracking-wider mb-2 shadow-lg">
                <Sparkles className="w-3 h-3 text-[#C69F66]" />
                <span>Direct Date Availability & Quote</span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Check Your Date & Get Quote
              </h3>
              <p className="text-xs sm:text-sm text-[#E0E0E0]/70 mt-1 font-light">
                Guaranteed Zero-Gbege™ response directly to your WhatsApp.
              </p>
            </div>
          </div>

          {errorMsg && (
            <div className="mb-4 p-3 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-medium">
              {errorMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 1. Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#E0E0E0]/80 mb-1.5">
                Full Name <span className="text-[#C69F66]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E0E0E0]/40">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Dr. Tunde Adeleke / Mrs. Folake Bakare"
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#16161A] border border-[#2A2A2E] text-sm text-white placeholder:text-[#E0E0E0]/30 focus:outline-none focus:border-[#C69F66] transition-colors font-light"
                />
              </div>
            </div>

            {/* 2. WhatsApp Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#E0E0E0]/80 mb-1.5">
                  WhatsApp Number <span className="text-[#C69F66]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E0E0E0]/40">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={whatsappPhone}
                    onChange={(e) => setWhatsappPhone(e.target.value)}
                    placeholder="e.g. 08012345678"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#16161A] border border-[#2A2A2E] text-sm text-white placeholder:text-[#E0E0E0]/30 focus:outline-none focus:border-[#C69F66] transition-colors font-light"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#E0E0E0]/80 mb-1.5">
                  Email Address <span className="text-[#C69F66]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E0E0E0]/40">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#16161A] border border-[#2A2A2E] text-sm text-white placeholder:text-[#E0E0E0]/30 focus:outline-none focus:border-[#C69F66] transition-colors font-light"
                  />
                </div>
              </div>
            </div>

            {/* 3. Event Date & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#E0E0E0]/80 mb-1.5">
                  Event Date <span className="text-[#C69F66]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E0E0E0]/40">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#16161A] border border-[#2A2A2E] text-sm text-white focus:outline-none focus:border-[#C69F66] transition-colors font-light [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#E0E0E0]/80 mb-1.5">
                  Event Location <span className="text-[#C69F66]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E0E0E0]/40">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    placeholder="e.g. Victoria Island, Lagos / Abuja"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#16161A] border border-[#2A2A2E] text-sm text-white placeholder:text-[#E0E0E0]/30 focus:outline-none focus:border-[#C69F66] transition-colors font-light"
                  />
                </div>
              </div>
            </div>

            {/* 4. Selected Event Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#E0E0E0]/80 mb-1.5">
                Selected Event Tier <span className="text-[#C69F66]">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {EVENT_PACKAGES.map((pkg) => (
                  <button
                    type="button"
                    key={pkg.id}
                    onClick={() => setSelectedTier(pkg.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedTier === pkg.id
                        ? 'bg-[#16161A] border-[#C69F66] text-white shadow-lg'
                        : 'bg-[#16161A] border-[#2A2A2E] text-[#E0E0E0]/60 hover:border-[#2A2A2E]/80'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-serif font-bold text-white">
                      <span className="truncate pr-1">{pkg.name.split(' ')[0]}</span>
                      <span className="text-[#C69F66] font-normal">{pkg.price}</span>
                    </div>
                    <p className="text-[10px] text-[#E0E0E0]/60 truncate mt-0.5 font-light">
                      {pkg.durationOrSubtitle}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit & Return Buttons */}
            <div className="pt-3 space-y-2.5">
              <button
                type="submit"
                id="btn-submit-booking-form"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0A0A0C] bg-[#C69F66] hover:bg-white shadow-[0_0_20px_rgba(198,159,102,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying Date & Securing Quote...</span>
                  </>
                ) : (
                  <>
                    <span>Check Availability & Get Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <button
                type="button"
                id="btn-cancel-return-booking"
                onClick={onClose}
                className="w-full py-3 rounded-full text-xs font-semibold text-[#E0E0E0]/70 hover:text-white bg-[#16161A] hover:bg-[#202026] border border-[#2A2A2E] hover:border-[#C69F66]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>← Return to Main Page</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#E0E0E0]/60 font-light pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C69F66]" />
              <span>Instant WhatsApp routing with custom run-of-show summary</span>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
