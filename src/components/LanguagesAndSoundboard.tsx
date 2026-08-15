import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Sparkles, Globe2, Mic2, Flame, HeartHandshake, Briefcase, CheckCircle2 } from 'lucide-react';
import { LanguageMode } from '../types';

export const LanguagesAndSoundboard: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<LanguageMode>('pidgin');

  const languageData = {
    english: {
      title: "Polished Corporate English",
      tone: "Boardroom Eloquence & Executive Protocol",
      energyLevel: "92% Precision",
      vibe: "Formal, articulate, impeccable timekeeping, dignified VIP address",
      icon: Briefcase,
      samplePhrases: [
        {
          cue: "Opening Call",
          text: "“Distinguished ladies and gentlemen, welcome to an evening of exceptional milestones...”"
        },
        {
          cue: "Speaker Transition",
          text: "“Let us warmly invite our keynote speaker to the podium with a resounding round of applause.”"
        },
        {
          cue: "Time Protocol",
          text: "“We are proceeding strictly on schedule. Next, the ceremonial toast to our visionary executives.”"
        }
      ],
      tag: "Ideal for Corporate Galas, AGM, Conferences, Product Launches"
    },
    pidgin: {
      title: "Familiar Nigerian Banter",
      tone: "Unfiltered Party Joy & Non-Stop Dancefloor Hype",
      energyLevel: "100% Maximum Hype",
      vibe: "Relatable, witty, high-voltage crowd work, spraying sessions, pure vibes",
      icon: Flame,
      samplePhrases: [
        {
          cue: "Entrance Ignition",
          text: "“Lagos make some noise! If you know say you come to celebrate our celebrant, stand on your feet!”"
        },
        {
          cue: "Spraying Session",
          text: "“DJ turn up the volume! Money dey talk today, make we show love to the couple properly!”"
        },
        {
          cue: "Crowd Work",
          text: "“Table 4, I dey look una o! The party never start until una stand up shake body!”"
        }
      ],
      tag: "Ideal for Receptions, After-Parties, 50th Birthdays, Housewarmings"
    },
    yoruba: {
      title: "Culturally Grounded Yoruba",
      tone: "Traditional Warmth & Deep Elder Respect",
      energyLevel: "96% Cultural Polish",
      vibe: "Reverent, proverb-rich, respectful greetings (E ku oro aje), traditional coordination",
      icon: HeartHandshake,
      samplePhrases: [
        {
          cue: "Elder Recognition",
          text: "“E ku ijoko loni o, awon agbaagba ile wa, e je ki a f’iyin fun olorun pelu ebun alafia...”"
        },
        {
          cue: "Traditional Entrance",
          text: "“Awon ebi iyawo ati ebi oko, e bo si ori itage, ayo yin ko ni di ibanuje laelae!”"
        },
        {
          cue: "Blessing & Prayers",
          text: "“Owo a ma r’owo gbe, ebi a ma d’owo, adura awon obi wa a gba loni o!”"
        }
      ],
      tag: "Ideal for Traditional Engagements, Nikkah, 70th Birthdays, Family Milestones"
    }
  };

  const current = languageData[selectedLang];
  const Icon = current.icon;

  // Web Audio chime simulation for interactive tactile feel
  const playSoundChime = (type: 'beep' | 'switch') => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      if (type === 'switch') {
        osc.frequency.setValueAtTime(selectedLang === 'english' ? 440 : selectedLang === 'pidgin' ? 587.33 : 523.25, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch {
      // Audio context might be restricted before interaction
    }
  };

  const handleSelectLanguage = (lang: LanguageMode) => {
    setSelectedLang(lang);
    playSoundChime('switch');
  };

  return (
    <section 
      id="languages"
      className="py-20 bg-[#0A0A0C] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg">
            <Globe2 className="w-3.5 h-3.5 text-[#C69F66]" />
            <span>Cultural Intelligence & Linguistic Adaptability</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight leading-tight mb-4">
            One MC. Three Languages. <br className="hidden sm:inline" />
            <span className="italic text-[#C69F66]">One Seamless Experience.</span>
          </h2>

          <p className="text-base sm:text-xl font-light text-[#E0E0E0]/80 mb-4">
            MC JAYE CONCEPTS delivers comfortably across:
          </p>

          {/* 3 Languages Banner Pill */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-6 px-6 py-2.5 rounded-full bg-[#16161A] border border-[#2A2A2E] text-white font-serif font-bold text-sm sm:text-base mb-4 shadow-xl">
            <span className={selectedLang === 'english' ? 'text-[#C69F66] font-extrabold' : 'text-[#E0E0E0]/60'}>English</span>
            <span className="text-[#2A2A2E]">•</span>
            <span className={selectedLang === 'pidgin' ? 'text-[#C69F66] font-extrabold' : 'text-[#E0E0E0]/60'}>Pidgin</span>
            <span className="text-[#2A2A2E]">•</span>
            <span className={selectedLang === 'yoruba' ? 'text-[#C69F66] font-extrabold' : 'text-[#E0E0E0]/60'}>Yoruba</span>
          </div>

          <p className="text-sm sm:text-base text-[#E0E0E0]/70 font-light max-w-2xl mx-auto">
            So whether the room calls for polished corporate English, familiar Nigerian banter, or a culturally grounded Yoruba moment, the delivery adapts without losing professionalism.
          </p>
        </div>

        {/* Interactive Experience Soundboard / Voice Cadence Showcase */}
        <div className="max-w-4xl mx-auto bg-[#0F0F12] border border-[#2A2A2E] rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          {/* Top Control Dial */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#2A2A2E] mb-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#E0E0E0]/80 font-medium">
              <Mic2 className="w-4 h-4 text-[#C69F66]" />
              <span>Select Live Room Delivery Style:</span>
            </div>

            {/* Language Switch Buttons */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#0A0A0C] border border-[#2A2A2E]">
              {(['english', 'pidgin', 'yoruba'] as LanguageMode[]).map((lang) => (
                <button
                  key={lang}
                  id={`btn-lang-${lang}`}
                  onClick={() => handleSelectLanguage(lang)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-all cursor-pointer ${
                    selectedLang === lang
                      ? 'bg-[#C69F66] text-[#0A0A0C] font-bold shadow-[0_0_15px_rgba(198,159,102,0.3)]'
                      : 'text-[#E0E0E0]/60 hover:text-white hover:bg-[#16161A]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Active Mode Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedLang}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-[#16161A] border border-[#2A2A2E] text-[#C69F66]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                      {current.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#C69F66] font-medium">
                      {current.tone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16161A] border border-[#2A2A2E] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69F66] animate-pulse"></span>
                  <span className="text-xs font-medium text-[#E0E0E0]/80">Room Energy: {current.energyLevel}</span>
                </div>
              </div>

              {/* Dynamic Waveform Visualizer simulation */}
              <div className="p-4 rounded-2xl bg-[#0A0A0C] border border-[#2A2A2E] space-y-2">
                <div className="flex items-center justify-between text-xs text-[#E0E0E0]/50 px-1">
                  <span>Vocal Cadence & Delivery Waveform</span>
                  <span className="text-[#C69F66] font-mono text-[11px]">Live Microphone Output</span>
                </div>

                {/* Animated Waveform Bars */}
                <div className="h-10 flex items-center justify-center gap-1 sm:gap-1.5 px-2">
                  {[40, 65, 85, 45, 95, 70, 30, 80, 100, 55, 90, 45, 75, 95, 60, 85, 50, 90, 70, 40, 60, 80, 50].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [
                          `${Math.max(15, h * 0.3)}%`,
                          `${h}%`,
                          `${Math.max(20, h * 0.5)}%`,
                        ]
                      }}
                      transition={{
                        duration: 0.8 + (i % 5) * 0.15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                      className="w-1 sm:w-1.5 rounded-full bg-[#C69F66]"
                    />
                  ))}
                </div>
              </div>

              {/* Sample Cadence Quotes */}
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[#C69F66]">
                  Real-time Delivery Sample:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {current.samplePhrases.map((phrase, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-[#16161A] border border-[#2A2A2E] flex flex-col justify-between"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C69F66] mb-2 block">
                        {phrase.cue}
                      </span>
                      <p className="text-xs sm:text-sm text-[#E0E0E0]/80 font-serif italic leading-relaxed">
                        {phrase.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suitability Tag */}
              <div className="pt-3 border-t border-[#2A2A2E] flex items-center gap-2 text-xs text-[#E0E0E0]/70 font-light">
                <CheckCircle2 className="w-4 h-4 text-[#C69F66] shrink-0" />
                <span>{current.tag}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
