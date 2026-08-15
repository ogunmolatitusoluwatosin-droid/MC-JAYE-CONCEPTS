import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, Users, Clock, Flame } from 'lucide-react';

interface WhyMcJayeProps {
  onOpenBooking: () => void;
}

export const WhyMcJaye: React.FC<WhyMcJayeProps> = ({ onOpenBooking }) => {
  const fivePillars = [
    { title: "The Culture", icon: Compass, desc: "Traditional nuances, Yoruba & Nigerian customs, and honoring heritage." },
    { title: "The Crowd", icon: Users, desc: "Reading the vibe, drawing in shy tables, and keeping everyone engaged." },
    { title: "The Protocol", icon: Award, desc: "Executive dignitary introductions, VIP hierarchy, and formal decorum." },
    { title: "The Timing", icon: Clock, desc: "Seamless vendor coordination, speech management, and schedule precision." },
    { title: "The Energy", icon: Flame, desc: "Turning the hype up without losing control, and letting emotional moments breathe." },
  ];

  return (
    <section 
      id="why-mc-jaye"
      className="py-20 bg-[#0A0A0C] relative overflow-hidden"
    >
      {/* Considered Divider */}
      <div className="max-w-4xl mx-auto mb-16 px-4">
        <div className="h-[1px] bg-[#2A2A2E]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg">
            <Award className="w-3.5 h-3.5 text-[#C69F66]" />
            <span>Uncompromising Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight leading-tight mb-4">
            Why MC JAYE CONCEPTS?
          </h2>

          <p className="text-lg sm:text-2xl font-serif italic text-[#C69F66]">
            Because your event isn't a rehearsal.
          </p>
        </div>

        {/* The Reality & Stakes Box */}
        <div className="max-w-5xl mx-auto bg-[#0F0F12] border border-[#2A2A2E] rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text and Stakes */}
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#E0E0E0]/80 font-light leading-relaxed">
              <p className="text-base sm:text-lg text-white font-normal">
                You get one opportunity to create the atmosphere your guests will remember.
              </p>
              <p>
                And when the room is full, the cameras are rolling, your VIPs are seated, and the program begins...
              </p>
              <p className="text-[#C69F66] font-serif font-bold text-lg">
                You don't want to discover that your MC is not ready.
              </p>
              <div className="p-4 rounded-2xl bg-[#16161A] border border-[#C69F66]/30">
                <p className="font-serif font-bold text-sm sm:text-base text-white">
                  "Every celebration has its own unique heartbeat. Our job is to honour your culture and amplify the room without overwhelming it."
                </p>
                <p className="text-xs text-[#C69F66] mt-1 font-serif italic">— MC JAYE</p>
              </div>
            </div>

            {/* Visual Host Dual Card */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden border border-[#2A2A2E] h-52 group">
                <img
                  src="https://i.ibb.co/sB6t5Fz/Whats-App-Image-2026-08-14-at-18-49-31.jpg"
                  alt="MC Jaye in traditional attire"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 right-2 text-[10px] uppercase font-bold tracking-wider text-[#C69F66] bg-black/75 px-2 py-0.5 rounded backdrop-blur-sm text-center">
                  Cultural Decorum
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-[#2A2A2E] h-52 group">
                <img
                  src="https://i.ibb.co/V06D231s/Whats-App-Image-2026-08-14-at-18-49-30.jpg"
                  alt="MC Jaye crowd engagement"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 right-2 text-[10px] uppercase font-bold tracking-wider text-[#C69F66] bg-black/75 px-2 py-0.5 rounded backdrop-blur-sm text-center">
                  Crowd Engagement
                </span>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-[#2A2A2E]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C69F66] mb-6">
              You want someone who understands:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {fivePillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#16161A] border border-[#2A2A2E] hover:border-[#C69F66]/40 transition-colors flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-[#0A0A0C] text-[#C69F66]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif font-bold text-sm sm:text-base text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-[#E0E0E0]/60 leading-snug font-light">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-[#16161A] border border-[#C69F66]/30 text-center">
              <p className="font-serif font-bold text-base sm:text-lg text-white">
                And knows how to bring all five together seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
