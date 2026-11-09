import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Check, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  MessageSquare, 
  Phone, 
  HelpCircle, 
  CheckCircle2, 
  X, 
  Award,
  Zap,
  Flame,
  ChevronDown,
  Layers
} from 'lucide-react';
import { EVENT_PACKAGES, SITE_CONFIG, PRE_EVENT_STEPS, EventPackage } from '../config';

interface PackagesPageProps {
  onSelectPackage: (tierId: string) => void;
  onNavigatePage: (page: 'home' | 'gallery' | 'packages') => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onSelectPackage, onNavigatePage }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How early in advance should we secure MC JAYE?",
      a: "Due to high demand during peak wedding and party seasons (particularly Fridays, Saturdays, and festive months in Lagos), clients typically reserve dates 2 to 6 months in advance. Early booking guarantees dedicated pre-event coordination calls."
    },
    {
      q: "Can MC JAYE travel for destination weddings or outside Lagos?",
      a: "Yes. MC JAYE regularly hosts luxury celebrations across Nigeria (Abuja, Port Harcourt, Ibadan, Abeokuta, etc.) and destination events internationally. Logistics and travel arrangements are seamlessly coordinated during your booking inquiry."
    },
    {
      q: "Does MC JAYE coordinate with our DJ and event planner beforehand?",
      a: "Absolutely. Step 03 and Step 04 of our Pre-Event Blueprint include direct liaison with your DJ for entrance hype tracks and run-of-show timing with your planner so there are zero embarrassing hitches on the microphone."
    },
    {
      q: "Can MC JAYE handle traditional cultural protocols (Yoruba, Igbo, mixed unions)?",
      a: "Yes. MC JAYE is celebrated for deep cultural intelligence, revering elders with immaculate Yoruba or royal protocol, and smoothly switching between polished English, authentic Nigerian banter, and Pidgin."
    },
    {
      q: "What is the payment structure to confirm our date?",
      a: "A 50% commitment deposit locks in your event date exclusively on MC JAYE's calendar, with the remaining balance settled according to your agreement prior to event day."
    }
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#E0E0E0]/60 mb-8 font-light">
          <button 
            onClick={() => onNavigatePage('home')}
            className="hover:text-[#C69F66] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#C69F66] font-semibold">Packages & Booking</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#C69F66]" />
            <span>Official Event Packages & Investment</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-tight mb-5">
            Choose Your Event Experience
          </h1>

          <p className="text-base sm:text-lg text-[#E0E0E0]/80 font-light leading-relaxed max-w-2xl mx-auto">
            Transparent investment for guaranteed celebration flow, cultural mastery, and unbroken energy across every celebration format.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-20">
          {EVENT_PACKAGES.map((pkg: EventPackage, idx: number) => {
            const isWeddings = pkg.id === 'weddings';

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                  isWeddings 
                    ? 'bg-[#0F0F12] border-2 border-[#C69F66] shadow-[0_0_35px_rgba(198,159,102,0.2)] scale-[1.02] z-10' 
                    : 'bg-[#0F0F12] border border-[#2A2A2E] hover:border-[#C69F66]/50'
                }`}
              >
                {/* Popular / Feature Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-[#C69F66] text-[#0A0A0C] font-bold text-[10px] uppercase tracking-widest shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#0A0A0C]" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Category Title */}
                  <h3 className="font-serif font-bold text-sm tracking-wider uppercase text-white mb-2 min-h-[40px] flex items-center">
                    {pkg.name}
                  </h3>

                  {/* Subtitle / Scope */}
                  <p className="text-xs text-[#C69F66] font-medium mb-5 min-h-[32px]">
                    {pkg.durationOrSubtitle}
                  </p>

                  {/* Price Tag */}
                  <div className="pb-5 mb-6 border-b border-[#2A2A2E]">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif font-bold text-3xl sm:text-4xl text-white tracking-tight">
                        {pkg.price}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#E0E0E0]/50 tracking-wide uppercase mt-1 block">
                      Flat Professional Honorarium
                    </span>
                  </div>

                  {/* Pitch description */}
                  <p className="text-xs text-[#E0E0E0]/80 leading-relaxed font-light mb-6">
                    {pkg.description}
                  </p>

                  {/* What is Included List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#C69F66]">
                      Included in Experience:
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.includes.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#E0E0E0]/90 font-light">
                          <Check className="w-3.5 h-3.5 text-[#C69F66] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action Button */}
                <button
                  onClick={() => onSelectPackage(pkg.id)}
                  className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                    isWeddings
                      ? 'bg-[#C69F66] text-[#0A0A0C] hover:bg-white hover:scale-[1.02]'
                      : 'bg-[#16161A] text-white hover:bg-[#C69F66] hover:text-[#0A0A0C] border border-[#2A2A2E]'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* The 5-Phase Pre-Event Framework Summary */}
        <div className="bg-[#0F0F12] border border-[#2A2A2E] rounded-3xl p-6 sm:p-10 mb-20 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Full Preparation Included With Every Package</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold mb-3">
              What Happens Before Your Event
            </h2>
            <p className="text-xs sm:text-sm text-[#E0E0E0]/70 font-light">
              Your MC doesn't just show up with a microphone. Every package includes our signature 5-phase preparation framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PRE_EVENT_STEPS.map((step, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-[#16161A] border border-[#2A2A2E] flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif font-bold text-2xl text-[#C69F66] block mb-2">
                    {step.step}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#E0E0E0]/70 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#E0E0E0]/70 font-light">
              Everything you need to know about booking, payments, and event execution.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl bg-[#0F0F12] border border-[#2A2A2E] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#16161A]/50 transition-colors"
                  >
                    <span className="font-serif font-bold text-sm sm:text-base text-white">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#C69F66] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#E0E0E0]/80 font-light leading-relaxed border-t border-[#2A2A2E]/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Immediate Booking Callout Banner */}
        <div className="bg-gradient-to-r from-[#16161A] via-[#0F0F12] to-[#16161A] border border-[#C69F66]/40 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl mb-12">
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-3">
            Have a Specific Date in Mind?
          </h3>
          <p className="text-xs sm:text-sm text-[#E0E0E0]/80 font-light max-w-xl mx-auto mb-8">
            Dates fill fast on weekends and festive months in Lagos. Check availability right now to lock your celebration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onSelectPackage('weddings')}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A0A0C] bg-[#C69F66] hover:bg-white transition-all shadow-[0_0_20px_rgba(198,159,102,0.3)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Instant Availability Inquiry</span>
            </button>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappPhoneNumber}?text=${encodeURIComponent("Hello MC JAYE, I would like to inquire about booking my event date.")}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#16161A] hover:bg-[#202026] border border-[#2A2A2E] hover:border-[#C69F66]/50 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#C69F66]" />
              <span>WhatsApp Direct ({SITE_CONFIG.whatsappDisplay})</span>
            </a>
          </div>
        </div>

        {/* Bottom Navigation CTA */}
        <div className="text-center pt-8 border-t border-[#2A2A2E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigatePage('home')}
            className="text-xs sm:text-sm text-[#E0E0E0]/70 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            ← Back to Home Experience
          </button>

          <button
            onClick={() => onNavigatePage('gallery')}
            className="text-xs sm:text-sm text-[#C69F66] hover:text-white font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>View Live Atmosphere & Photos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
