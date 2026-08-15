import React from 'react';
import { motion } from 'motion/react';
import { SlidersHorizontal, ArrowRight } from 'lucide-react';

interface EventDifferentProps {
  onOpenBooking: () => void;
}

export const EventDifferent: React.FC<EventDifferentProps> = ({ onOpenBooking }) => {
  const eventContrasts = [
    {
      left: "A Wedding",
      right: "A 70th Birthday",
      note: "Romantic hype & bridal games vs. deep elder honour & legacy tributes"
    },
    {
      left: "A Corporate Launch",
      right: "A Housewarming",
      note: "Brand prestige & executive timekeeping vs. cozy celebration & informal warmth"
    },
    {
      left: "A Traditional Ceremony",
      right: "A Formal Conference",
      note: "Heritage customs & cultural nuances vs. structured keynote protocol"
    }
  ];

  return (
    <section 
      id="event-different"
      className="py-16 bg-[#0A0A0C] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-[#0F0F12] border border-[#C69F66]/30 rounded-3xl p-6 sm:p-10 relative shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-3">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C69F66]" />
              <span>Bespoke Adaptability</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight leading-tight mb-2">
              “But What If My Event Is Different?”
            </h2>

            <p className="text-xl sm:text-2xl font-serif italic text-[#C69F66]">
              That’s exactly the point.
            </p>
          </div>

          <p className="text-center text-sm sm:text-base text-[#E0E0E0]/80 mb-8 font-light">
            Your event shouldn't sound like everybody else's.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8">
            {eventContrasts.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[#16161A] border border-[#2A2A2E] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-xs font-serif font-bold text-white mb-2">
                  <span className="text-[#C69F66]">{item.left}</span>
                  <span className="text-[#2A2A2E]">≠</span>
                  <span className="text-white">{item.right}</span>
                </div>
                <p className="text-xs text-[#E0E0E0]/60 leading-relaxed font-light">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-[#16161A] border border-[#2A2A2E] text-center mb-8">
            <p className="text-sm sm:text-base text-[#E0E0E0]/90 font-light">
              So the hosting approach is adapted to <span className="text-[#C69F66] font-medium">your audience</span>, <span className="text-[#C69F66] font-medium">your occasion</span>, <span className="text-[#C69F66] font-medium">your personality</span>, and <span className="text-[#C69F66] font-medium">your program</span>.
            </p>
          </div>

          <div className="text-center">
            <button
              id="event-different-btn-request"
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0A0A0C] bg-[#C69F66] hover:bg-white shadow-[0_0_20px_rgba(198,159,102,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Get A Custom Run-of-Show For Your Event</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
