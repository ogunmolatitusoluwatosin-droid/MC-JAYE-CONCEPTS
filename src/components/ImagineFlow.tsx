import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, GlassWater, Camera, Smile, Users, Crown, Heart, Check, PartyPopper, ArrowRight } from 'lucide-react';

interface ImagineFlowProps {
  onOpenBooking: () => void;
}

export const ImagineFlow: React.FC<ImagineFlowProps> = ({ onOpenBooking }) => {
  const celebrantActions = [
    { label: "Dance", icon: PartyPopper },
    { label: "Eat", icon: GlassWater },
    { label: "Take Pictures", icon: Camera },
    { label: "Laugh", icon: Smile },
    { label: "Receive Your Guests", icon: Users },
    { label: "Enjoy Your People", icon: Heart },
  ];

  const engagementHighlights = [
    "Interactive games",
    "Intelligent crowd work",
    "Tasteful humour",
    "Call-and-response moments",
    "Entrance hype",
    "Strategic transitions"
  ];

  return (
    <section 
      id="imagine-flow"
      className="py-20 bg-[#0A0A0C] relative overflow-hidden"
    >
      {/* Accent Divider */}
      <div className="max-w-4xl mx-auto mb-16 px-4">
        <div className="h-[1px] bg-[#2A2A2E]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C69F66]" />
            <span>The Peace of Mind Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight leading-tight mb-4">
            Imagine What Your Event Feels Like <br className="hidden sm:inline" />
            <span className="italic text-[#C69F66]">When Everything Just Flows.</span>
          </h2>

          <p className="text-lg sm:text-2xl font-light text-[#E0E0E0]/80">
            You stop managing. You start celebrating.
          </p>
        </div>

        {/* Section Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* What You Don't Do (The Relief) */}
          <div className="lg:col-span-6 bg-[#0F0F12] border border-[#2A2A2E] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-5 flex items-center gap-2">
                <span className="text-[#C69F66]">01.</span> Zero Stress On You
              </h3>

              <div className="space-y-3.5 text-sm sm:text-base text-[#E0E0E0]/80 font-light mb-8">
                <p className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69F66]"></span>
                  <span>No running around checking whether the DJ is ready.</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69F66]"></span>
                  <span>No whispering instructions into people's ears.</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69F66]"></span>
                  <span>No worrying about whether speeches are taking forever.</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69F66]"></span>
                  <span>No wondering why there has been 15 minutes of silence.</span>
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#16161A] border border-[#2A2A2E]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#C69F66] mb-3">
                  You Can Simply:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {celebrantActions.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={idx}
                        className="px-2.5 py-2 rounded-xl bg-[#0A0A0C] border border-[#2A2A2E] text-white font-medium text-xs flex items-center gap-2"
                      >
                        <Icon className="w-3.5 h-3.5 text-[#C69F66]" />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="text-xs text-[#E0E0E0]/60 mt-6 pt-4 border-t border-[#2A2A2E] font-light">
              Because someone competent is managing the microphone and the momentum.
            </p>
          </div>

          {/* How The Room Feels (Engagement & Balance) */}
          <div className="lg:col-span-6 bg-[#0F0F12] border border-[#C69F66]/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white flex items-center gap-2">
                  <span className="text-[#C69F66]">02.</span> Your Guests Stay Engaged
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#C69F66]/10 border border-[#C69F66]/30 text-[#C69F66] text-xs font-bold font-serif italic">
                  Party go sweet.
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#E0E0E0]/80 leading-relaxed font-light mb-5">
                The room never feels forgotten. From interactive games to intelligent crowd work, tasteful humour, call-and-response moments, entrance hype, and strategic transitions, the energy is managed intentionally.
              </p>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {engagementHighlights.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-2.5 rounded-xl bg-[#16161A] border border-[#2A2A2E] text-xs font-medium text-[#E0E0E0] flex items-center gap-2"
                  >
                    <Check className="w-3.5 h-3.5 text-[#C69F66] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* VIPs and Elders Protocol */}
              <div className="p-4 rounded-2xl bg-[#16161A] border border-[#2A2A2E] space-y-2 text-xs sm:text-sm text-[#E0E0E0]/80 font-light">
                <div className="flex items-center gap-2 font-serif font-bold text-[#C69F66] mb-1">
                  <Crown className="w-4 h-4 text-[#C69F66]" />
                  <span>Your VIPs Receive The Respect They Deserve</span>
                </div>
                <p>• Elders are honoured.</p>
                <p>• Executives are addressed appropriately.</p>
                <p>• Important guests are introduced with dignity.</p>
                <p>• The younger crowd still gets the energy they came for.</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2A2A2E]">
              <p className="text-xs sm:text-sm font-serif italic font-bold text-[#C69F66] leading-snug">
                That balance is what separates a professional compere from somebody who simply knows how to hold a microphone.
              </p>
            </div>
          </div>
        </div>

        {/* Centered Accent Button */}
        <div className="text-center">
          <button
            id="imagine-btn-experience-flow"
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0A0A0C] bg-[#C69F66] hover:bg-white shadow-[0_0_20px_rgba(198,159,102,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Experience The Flow at Your Event</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
