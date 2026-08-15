import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Sliders } from 'lucide-react';
import { PRE_EVENT_STEPS } from '../config';

interface PreEventFrameworkProps {
  onOpenBooking: () => void;
}

export const PreEventFramework: React.FC<PreEventFrameworkProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="framework"
      className="py-20 bg-[#0A0A0C] relative overflow-hidden"
    >
      {/* Accent Divider */}
      <div className="max-w-4xl mx-auto mb-16 px-4">
        <div className="h-[1px] bg-[#2A2A2E]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg">
            <Sliders className="w-3.5 h-3.5 text-[#C69F66]" />
            <span>The 5-Phase Blueprint</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight leading-tight mb-4">
            What Happens Before Your Event Matters
          </h2>

          <p className="text-lg sm:text-2xl font-serif italic text-[#C69F66] mb-2">
            Your MC Doesn't Just Show Up With A Microphone.
          </p>

          <p className="text-sm sm:text-base text-[#E0E0E0]/70 font-light">
            Before the event:
          </p>
        </div>

        {/* 5-Step Process Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {PRE_EVENT_STEPS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`bg-[#0F0F12] border border-[#2A2A2E] hover:border-[#C69F66]/50 rounded-3xl p-6 flex flex-col justify-between transition-all shadow-xl ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif font-bold text-2xl sm:text-3xl text-[#C69F66]">
                    {item.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#C69F66]/60" />
                </div>

                <h3 className="font-serif font-bold text-base sm:text-lg text-white mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#E0E0E0]/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#2A2A2E] flex items-center gap-1.5 text-[11px] text-[#C69F66] font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-[#C69F66] shrink-0" />
                <span>Phase Guaranteed</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Energy + Control Philosophical Climax Card */}
        <div className="max-w-3xl mx-auto bg-[#0F0F12] border border-[#C69F66]/40 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#C69F66]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-3 mb-8">
            <p className="text-base sm:text-xl font-light text-[#E0E0E0]/90">
              Because energy without control is <span className="text-red-400 italic">noise</span>.
            </p>
            <p className="text-base sm:text-xl font-light text-[#E0E0E0]/90">
              And control without energy is <span className="text-[#E0E0E0]/50 italic">boring</span>.
            </p>
            <p className="font-serif font-bold text-2xl sm:text-4xl text-white pt-2">
              You need <span className="italic text-[#C69F66]">both</span>.
            </p>
          </div>

          <button
            id="framework-btn-book"
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0A0A0C] bg-[#C69F66] hover:bg-white shadow-[0_0_20px_rgba(198,159,102,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Lock In MC JAYE For Your Event Date</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
