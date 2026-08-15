import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, XCircle, CheckCircle2, Sparkles, Volume2, ArrowRight } from 'lucide-react';

interface ZeroGbegeGuaranteeProps {
  onOpenBooking: () => void;
}

export const ZeroGbegeGuarantee: React.FC<ZeroGbegeGuaranteeProps> = ({ onOpenBooking }) => {
  const chaoticMoments = [
    "“DJ, are you ready?”",
    "“Who has the cake?”",
    "“Where is the celebrant?”",
    "“Has the next speaker arrived?”",
  ];

  const zeroGbegeElements = [
    {
      title: "Protocol",
      desc: "VIP seating, elder recognition, and formal stage decorum handled with pristine respect."
    },
    {
      title: "Personality",
      desc: "Warmth, intelligent humour, charisma, and organic interaction that lights up every guest."
    },
    {
      title: "Precision",
      desc: "Meticulous run-of-show timing, synchronized DJ audio cues, and seamless vendor coordination."
    },
    {
      title: "Pure Energy",
      desc: "Hype, spraying moments, call-and-response, and unbroken celebration flow."
    }
  ];

  return (
    <section 
      id="the-guarantee"
      className="py-20 bg-[#0A0A0C] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg">
            <ShieldCheck className="w-4 h-4 text-[#C69F66]" />
            <span>The Signature Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight leading-tight mb-4">
            Introducing The <br className="sm:hidden" />
            <span className="italic text-[#C69F66]">Zero-Gbege Guarantee™</span>
          </h2>

          <p className="text-base sm:text-xl font-light text-[#E0E0E0]/80 mb-3">
            Your event starts on time. Stays organized. And keeps the energy alive.
          </p>

          <p className="text-sm sm:text-base text-[#E0E0E0]/60 font-light">
            Because Nigerian events can be beautiful without becoming chaotic.
          </p>
        </div>

        {/* Pre-event Alignment Callout Card */}
        <div className="max-w-4xl mx-auto mb-12 bg-[#0F0F12] border border-[#2A2A2E] rounded-3xl p-6 sm:p-8 relative shadow-2xl">
          <p className="text-sm sm:text-base text-[#E0E0E0]/80 leading-relaxed font-light mb-6">
            Before your big day, we align with your event planner, DJ, stage coordinator, and key vendors so everyone understands the flow.
          </p>

          <div className="mb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C69F66] mb-4">
              Then we build a custom run-of-show that balances:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {zeroGbegeElements.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-[#16161A] border border-[#2A2A2E] hover:border-[#C69F66]/40 transition-colors flex flex-col justify-between"
                >
                  <div className="flex items-center gap-1.5 text-white font-serif font-bold text-sm sm:text-base mb-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C69F66] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-[#E0E0E0]/60 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Side-by-Side Comparison Box */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Chaos Box */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#141012] border border-red-900/30 backdrop-blur-md shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-red-400 font-serif font-bold text-base sm:text-lg mb-5">
                <XCircle className="w-5 h-5 text-red-400" />
                <span>So Instead Of...</span>
              </div>
              <div className="space-y-3">
                {chaoticMoments.map((quote, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0A0A0C] border border-red-900/20 text-[#E0E0E0]/80 font-mono text-xs sm:text-sm flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></span>
                    <span>{quote}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-red-400/80 mt-6 font-light">
              ✕ Confused vendors, awkward pauses, and frustrated celebrants.
            </p>
          </div>

          {/* MC Jaye Transformation Box */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#0F0F12] border border-[#C69F66]/40 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#C69F66]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-[#C69F66] font-serif font-bold text-base sm:text-lg mb-5">
                <CheckCircle2 className="w-5 h-5 text-[#C69F66]" />
                <span>You Experience:</span>
              </div>

              <div className="p-5 rounded-2xl bg-[#16161A] border border-[#2A2A2E] space-y-3">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#C69F66]">
                  <Volume2 className="w-3.5 h-3.5 text-[#C69F66]" />
                  <span>The Room Response</span>
                </div>
                <p className="font-serif italic font-bold text-lg sm:text-xl text-white">
                  “Ladies and gentlemen, let's make some noise…”
                </p>
                <div className="pt-2 border-t border-[#2A2A2E] flex items-center gap-2 text-[#C69F66] font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-[#C69F66]" />
                  <span>And the room responds in unison.</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#E0E0E0]/70 mt-6 flex items-center gap-2 font-light">
              <ShieldCheck className="w-4 h-4 text-[#C69F66] shrink-0" />
              <span>Full room momentum, on-time milestones, and zero stress.</span>
            </p>
          </div>
        </div>

        {/* Centered Accent Action */}
        <div className="mt-12 text-center">
          <button
            id="guarantee-btn-secure-flow"
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0A0A0C] bg-[#C69F66] hover:bg-white shadow-[0_0_20px_rgba(198,159,102,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Protect Your Celebration Flow</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
