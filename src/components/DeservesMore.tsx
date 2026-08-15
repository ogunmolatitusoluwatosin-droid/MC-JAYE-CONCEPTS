import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Flame, HeartHandshake, Award, Clock, Waves, Compass, Mic } from 'lucide-react';

export const DeservesMore: React.FC = () => {
  const masteryPillars = [
    {
      title: "When to Hype the Room",
      description: "Electrifying entrances, spraying sessions, and dancefloor moments with peak energy.",
      icon: Flame,
      num: "01",
    },
    {
      title: "When to Calm It Down",
      description: "Smooth transitions that restore order without killing the celebratory spirit.",
      icon: Waves,
      num: "02",
    },
    {
      title: "When to Respect the Elders",
      description: "Proper cultural protocols, respectful introductions, and honouring tradition with dignity.",
      icon: HeartHandshake,
      num: "03",
    },
    {
      title: "When to Move Forward",
      description: "Gentle yet firm timekeeping so speeches don't drag and schedules stay tight.",
      icon: Clock,
      num: "04",
    },
    {
      title: "When to Let It Breathe",
      description: "Allowing heartfelt emotional moments, prayers, and toasts their genuine space.",
      icon: Compass,
      num: "05",
    },
  ];

  return (
    <section 
      id="deserves-more"
      className="py-20 bg-[#0A0A0C] relative overflow-hidden"
    >
      {/* Considered Section Divider Accent */}
      <div className="max-w-4xl mx-auto mb-16 px-4">
        <div className="h-[1px] bg-[#2A2A2E]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-4">
            <Mic className="w-3.5 h-3.5" />
            <span>Mastery Over The Microphone</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight leading-tight mb-4">
            Your Event Deserves More Than <br className="hidden sm:inline" />
            <span className="italic text-[#C69F66]">Someone Holding A Microphone.</span>
          </h2>

          <p className="text-base sm:text-xl font-light text-[#E0E0E0]/80">
            A great MC does more than make jokes.
          </p>
        </div>

        {/* Narrative Description & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0F0F12] border border-[#2A2A2E] rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                The Anatomy of Room Control
              </h3>
              <p className="text-sm sm:text-base text-[#E0E0E0]/80 leading-relaxed font-light">
                The right MC knows when to hype the room, when to calm it down, when to respect the elders, when to move the program forward, and when to simply let the moment breathe.
              </p>
              <p className="text-sm sm:text-base text-[#E0E0E0]/80 leading-relaxed font-light">
                Whether it’s your wedding, milestone birthday, corporate gala, product launch, anniversary, or intimate celebration, MC JAYE CONCEPTS takes control of the room without taking away from the occasion.
              </p>
              
              <div className="p-5 rounded-2xl bg-[#16161A] border border-[#C69F66]/30 text-center">
                <p className="font-serif font-bold text-xl text-white">
                  You enjoy your event.
                </p>
                <p className="text-[#C69F66] font-semibold text-lg font-serif italic">
                  We handle the flow.
                </p>
              </div>
            </div>
          </div>

          {/* 5 Dynamic Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {masteryPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`bg-[#16161A] border border-[#2A2A2E] hover:border-[#C69F66]/50 rounded-2xl p-5 transition-all shadow-lg ${
                    idx === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#0A0A0C] border border-[#2A2A2E] text-[#C69F66]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif font-bold text-base text-white">
                        {pillar.title}
                      </h4>
                    </div>
                    <span className="font-serif font-bold text-xs text-[#C69F66]">{pillar.num}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E0E0E0]/70 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
