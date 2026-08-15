import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Play, Pause, Volume2, Sparkles, Calendar, Music2, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config';

interface VideoReelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const VideoReelModal: React.FC<VideoReelModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeClipIndex, setActiveClipIndex] = useState(0);

  if (!isOpen) return null;

  const reelClips = [
    {
      title: "Wedding Grand Reception Entrance",
      subtitle: "500+ guests hyping the celebrants in Victoria Island, Lagos",
      duration: "0:45",
      energy: "Pure Hype",
      tag: "Wedding Reception",
    },
    {
      title: "Executive Corporate Gala Dinner",
      subtitle: "Formal dignitary protocols, keynote introductions, and flawless timekeeping",
      duration: "1:10",
      energy: "Executive Polish",
      tag: "Corporate Event",
    },
    {
      title: "70th Milestone Golden Birthday",
      subtitle: "Traditional Yoruba elder reverence, prayer flow, and lively family banter",
      duration: "0:55",
      energy: "Cultural Dignity",
      tag: "Milestone Celebration",
    },
  ];

  const currentClip = reelClips[activeClipIndex];

  return (
    <div 
      id="video-reel-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-2xl my-6 bg-[#0F0F12] border border-[#C69F66]/40 rounded-3xl p-6 sm:p-10 relative overflow-hidden text-left shadow-2xl"
      >
        {/* Close Button */}
        <button
          id="btn-close-reel-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#E0E0E0]/60 hover:text-white hover:border-[#C69F66] transition-colors cursor-pointer z-20"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-3 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#C69F66]" />
            <span>High-Energy Live Highlights</span>
          </div>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight">
            MC JAYE In Action
          </h3>
          <p className="text-xs sm:text-sm text-[#E0E0E0]/70 font-light mt-1">
            Witness the unbroken room momentum, crowd response, and seamless transitions.
          </p>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative rounded-2xl bg-[#16161A] border border-[#2A2A2E] overflow-hidden mb-6 aspect-video flex flex-col justify-between p-6 group">
          {/* Animated Background Ambience */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0F0F12]/80 to-[#16161A]/50 -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C69F66]/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Top Info Bar */}
          <div className="flex items-center justify-between z-10">
            <span className="px-3 py-1 rounded-full bg-[#0A0A0C] border border-[#2A2A2E] text-[#C69F66] text-xs font-bold uppercase tracking-wider">
              {currentClip.tag}
            </span>
            <div className="flex items-center gap-2 text-xs font-mono text-[#C69F66] bg-[#0A0A0C] px-3 py-1 rounded-full border border-[#2A2A2E]">
              <span className="w-2 h-2 rounded-full bg-[#C69F66] animate-ping" />
              <span>LIVE MOMENTUM: {currentClip.energy}</span>
            </div>
          </div>

          {/* Center Play/Pause State & Stage Visualizer */}
          <div className="text-center z-10 py-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-[#C69F66] hover:bg-white text-[#0A0A0C] flex items-center justify-center mx-auto mb-3 shadow-xl shadow-[#C69F66]/20 hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-[#0A0A0C]" />
              ) : (
                <Play className="w-6 h-6 fill-[#0A0A0C] ml-1" />
              )}
            </button>
            <h4 className="font-serif font-bold text-lg sm:text-xl text-white">
              {currentClip.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#E0E0E0]/70 max-w-md mx-auto mt-1 font-light">
              {currentClip.subtitle}
            </p>
          </div>

          {/* Bottom Audio Frequency Pulse */}
          <div className="flex items-center justify-between text-xs text-[#E0E0E0]/60 z-10 pt-2 border-t border-[#2A2A2E]">
            <div className="flex items-center gap-1.5 font-light">
              <Volume2 className="w-4 h-4 text-[#C69F66]" />
              <span>Mic & DJ Audio Sync</span>
            </div>
            <div className="flex items-center gap-1">
              {[30, 60, 90, 40, 80, 100, 50, 70, 90, 30].map((h, i) => (
                <div
                  key={i}
                  className="w-1 bg-[#C69F66] rounded-full transition-all duration-300"
                  style={{ height: isPlaying ? `${h * 0.25}px` : '4px' }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Clip Switcher Tabs */}
        <div className="grid grid-cols-3 gap-2.5 mb-6">
          {reelClips.map((clip, idx) => (
            <button
              key={idx}
              onClick={() => setActiveClipIndex(idx)}
              className={`p-3 rounded-2xl border text-left text-xs transition-all cursor-pointer ${
                activeClipIndex === idx
                  ? 'bg-[#16161A] border-[#C69F66] text-white font-bold'
                  : 'bg-[#16161A] border-[#2A2A2E] text-[#E0E0E0]/60 hover:border-[#2A2A2E]/80'
              }`}
            >
              <div className="truncate font-serif font-semibold">{clip.tag}</div>
              <div className="text-[10px] text-[#C69F66] mt-0.5 font-light">{clip.duration}</div>
            </button>
          ))}
        </div>

        {/* Direct Booking CTA & Return Button */}
        <div className="space-y-2.5">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              id="reel-modal-btn-book"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:flex-1 py-4 px-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0A0A0C] bg-[#C69F66] hover:bg-white shadow-lg shadow-[#C69F66]/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Calendar className="w-4 h-4 text-[#0A0A0C]" />
              <span>Check Availability For Your Event</span>
              <ArrowRight className="w-4 h-4 text-[#0A0A0C]" />
            </button>

            <a
              href={SITE_CONFIG.tiktokUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#16161A] border border-[#2A2A2E] hover:border-[#C69F66] text-[#E0E0E0] hover:text-[#C69F66] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
            >
              <Music2 className="w-4 h-4 text-[#C69F66]" />
              <span>More on TikTok</span>
            </a>
          </div>

          <button
            id="btn-return-home-from-reel"
            onClick={onClose}
            className="w-full py-3 rounded-full text-xs font-semibold text-[#E0E0E0]/70 hover:text-white bg-[#16161A] hover:bg-[#202026] border border-[#2A2A2E] hover:border-[#C69F66]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>← Return to Main Page</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
