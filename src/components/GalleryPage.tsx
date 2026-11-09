import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Sparkles, 
  Calendar, 
  MessageSquare, 
  Phone, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Music2, 
  Instagram, 
  ShieldCheck, 
  Flame, 
  Clock, 
  Award,
  Layers,
  ArrowRight
} from 'lucide-react';
import { GALLERY_ITEMS, SITE_CONFIG, MC_IMAGES } from '../config';

interface GalleryPageProps {
  onOpenBooking: (tierId?: string) => void;
  onNavigatePage: (page: 'home' | 'gallery' | 'packages') => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking, onNavigatePage }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [filterTag, setFilterTag] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos & Live Moments' },
    { id: 'Weddings & Luxury Galas', label: 'Weddings & Galas' },
    { id: 'Traditional & Milestones', label: 'Traditional Engagements' },
    { id: 'Celebrations & Receptions', label: 'Celebrations & Reception' },
    { id: 'Corporate & Formal Galas', label: 'Corporate Galas' },
  ];

  const filteredItems = filterTag === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.tag === filterTag);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

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
          <span className="text-[#C69F66] font-semibold">Live Event Gallery</span>
        </div>

        {/* Hero Header for Gallery Page */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg">
            <Camera className="w-3.5 h-3.5 text-[#C69F66]" />
            <span>Official Event Photography & Live Stage Presence</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-tight mb-5">
            Stage Command & Live Atmosphere
          </h1>

          <p className="text-base sm:text-lg text-[#E0E0E0]/80 font-light leading-relaxed max-w-2xl mx-auto">
            Explore authentic photographs of MC JAYE hosting premier Nigerian weddings, traditional milestones, black-tie corporate banquets, and high-energy celebration dancefloors.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterTag(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterTag === cat.id
                  ? 'bg-[#C69F66] text-[#0A0A0C] shadow-[0_0_20px_rgba(198,159,102,0.3)] font-bold scale-105'
                  : 'bg-[#16161A] text-[#E0E0E0]/70 hover:text-white hover:bg-[#202026] border border-[#2A2A2E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Showcase Banner (Hero Shot + Stage Bio) */}
        <div className="bg-[#0F0F12] border border-[#2A2A2E] rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Real Photo in Blazer / Suit */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#2A2A2E] shadow-2xl group h-96 sm:h-[460px]">
              <img
                src={MC_IMAGES.blazerSuit}
                alt="MC Jaye in tailored blazer attire"
                className="w-full h-full object-cover object-top filter brightness-100 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C]/90 via-transparent to-black/20 pointer-events-none" />
              
              <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-[#0A0A0C]/90 backdrop-blur-md border border-[#C69F66]/50 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#C69F66]" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C69F66]">
                  Executive Host in Blazer
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0A0A0C]/90 backdrop-blur-md border border-[#2A2A2E]">
                <p className="font-serif font-bold text-sm text-white">MC JAYE CONCEPTS</p>
                <p className="text-xs text-[#C69F66]">Corporate Precision & Formal Gala Excellence</p>
              </div>
            </div>

            {/* Description & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Sluggishness • Zero Awkward Pauses</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold leading-snug">
                Pristine Wardrobe & Commanding Presence for Every Style of Event
              </h2>

              <p className="text-sm sm:text-base text-[#E0E0E0]/80 leading-relaxed font-light">
                Whether commanding the room in a sharp bespoke tuxedo for an executive awards dinner, or donning regal traditional Agbada to lead royal Yoruba wedding protocols, MC JAYE brings immaculate style, vocal clarity, and magnetic warmth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#16161A] border border-[#2A2A2E]">
                  <div className="flex items-center gap-2 text-white font-serif font-bold text-sm mb-1">
                    <Flame className="w-4 h-4 text-[#C69F66]" />
                    <span>Hype Without Chaos</span>
                  </div>
                  <p className="text-xs text-[#E0E0E0]/70 font-light">
                    Electrifies the entrance and dancefloor with synchronized DJ audio cues.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#16161A] border border-[#2A2A2E]">
                  <div className="flex items-center gap-2 text-white font-serif font-bold text-sm mb-1">
                    <Clock className="w-4 h-4 text-[#C69F66]" />
                    <span>Strict Time Control</span>
                  </div>
                  <p className="text-xs text-[#E0E0E0]/70 font-light">
                    Prevents schedule drag so meals, toasts, and cake cutting happen seamlessly.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking('weddings')}
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A0A0C] bg-[#C69F66] hover:bg-white transition-all shadow-[0_0_25px_rgba(198,159,102,0.3)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve MC JAYE for Your Date</span>
                </button>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappPhoneNumber}?text=${encodeURIComponent("Hello MC JAYE, I am browsing your Live Gallery and would like to check availability.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#16161A] hover:bg-[#202026] border border-[#2A2A2E] hover:border-[#C69F66]/50 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#C69F66]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid (All 4 Verified Real Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => openLightbox(idx)}
              className="bg-[#0F0F12] border border-[#2A2A2E] hover:border-[#C69F66]/60 rounded-3xl overflow-hidden group transition-all flex flex-col justify-between shadow-2xl cursor-pointer"
            >
              {/* Picture Container with High Aspect Ratio */}
              <div className="h-80 sm:h-96 bg-[#16161A] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-100 group-hover:brightness-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-transparent to-black/20 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-[#0A0A0C]/85 backdrop-blur-md border border-[#2A2A2E] text-[#C69F66] font-semibold text-[10px] uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#0A0A0C]/85 backdrop-blur-md border border-[#2A2A2E] text-white text-[10px] font-mono font-medium flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#C69F66]" />
                    {item.energy}
                  </span>
                </div>

                {/* View HD Pill */}
                <div className="absolute bottom-3 right-3 z-10">
                  <div className="px-3 py-1.5 rounded-full bg-[#0A0A0C]/90 backdrop-blur-md border border-[#C69F66]/50 text-white text-[11px] font-semibold flex items-center gap-1.5 group-hover:bg-[#C69F66] group-hover:text-[#0A0A0C] transition-colors">
                    <Maximize2 className="w-3 h-3" />
                    <span>View HD</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-white mb-1.5 group-hover:text-[#C69F66] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E0E0E0]/70 leading-relaxed font-light">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#2A2A2E] flex items-center justify-between text-[11px] text-[#C69F66] font-medium">
                  <span>Authentic MC Jaye Event</span>
                  <span className="text-white/40 group-hover:text-[#C69F66] transition-colors">Click to expand →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Social Video Showcase Bar */}
        <div className="bg-[#0F0F12] border border-[#2A2A2E] rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 max-w-5xl mx-auto shadow-2xl mb-12">
          <div className="text-center lg:text-left">
            <h3 className="font-serif font-bold text-xl text-white mb-1">
              Watch Daily Videos & Real Entrance Clips
            </h3>
            <p className="text-xs sm:text-sm text-[#E0E0E0]/70 font-light">
              See MC JAYE live in action on TikTok and Instagram — unedited entrances, crowd hype, and guest joy.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-3 text-xs text-[#E0E0E0]/80">
              <span className="text-[#C69F66] font-semibold">Direct Call:</span>
              <a href={`tel:${SITE_CONFIG.primaryPhone}`} className="font-mono font-bold text-white hover:text-[#C69F66]">
                {SITE_CONFIG.primaryPhoneDisplay}
              </a>
              <span className="text-[#2A2A2E]">•</span>
              <a href={`tel:${SITE_CONFIG.secondaryPhone}`} className="font-mono font-bold text-white hover:text-[#C69F66]">
                {SITE_CONFIG.secondaryPhoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappPhoneNumber}?text=${encodeURIComponent("Hello MC JAYE, I saw your event gallery and would like to book.")}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#16161A] hover:bg-[#C69F66] hover:text-[#0A0A0C] border border-[#C69F66]/40 text-xs font-semibold text-[#C69F66] flex items-center gap-2 transition-all group"
            >
              <MessageSquare className="w-4 h-4 text-[#C69F66] group-hover:text-[#0A0A0C]" />
              <span>WhatsApp ({SITE_CONFIG.whatsappDisplay})</span>
            </a>

            <a
              href={SITE_CONFIG.tiktokUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#16161A] hover:bg-[#C69F66] hover:text-[#0A0A0C] border border-[#2A2A2E] text-xs font-semibold text-[#E0E0E0] flex items-center gap-2 transition-all group"
            >
              <Music2 className="w-4 h-4 text-[#C69F66] group-hover:text-[#0A0A0C]" />
              <span>TikTok {SITE_CONFIG.tiktokHandle}</span>
            </a>

            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#16161A] hover:bg-[#C69F66] hover:text-[#0A0A0C] border border-[#2A2A2E] text-xs font-semibold text-[#E0E0E0] flex items-center gap-2 transition-all group"
            >
              <Instagram className="w-4 h-4 text-[#C69F66] group-hover:text-[#0A0A0C]" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom Navigation CTA to Next Page */}
        <div className="text-center pt-8 border-t border-[#2A2A2E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigatePage('home')}
            className="text-xs sm:text-sm text-[#E0E0E0]/70 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            ← Back to Home Experience
          </button>

          <button
            onClick={() => onNavigatePage('packages')}
            className="text-xs sm:text-sm text-[#C69F66] hover:text-white font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Explore Event Packages & Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal for HD Inspection */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 p-3 rounded-full bg-[#16161A] border border-[#2A2A2E] text-white hover:text-[#C69F66] hover:bg-[#202026] transition-colors z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#16161A]/90 border border-[#2A2A2E] text-white hover:text-[#C69F66] hover:bg-[#202026] transition-colors z-50 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#16161A]/90 border border-[#2A2A2E] text-white hover:text-[#C69F66] hover:bg-[#202026] transition-colors z-50 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Full-size High-Def Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] bg-[#0F0F12] border border-[#2A2A2E] rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[500px]">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Modal Details & Action Bar */}
              <div className="p-4 sm:p-6 bg-[#0F0F12] border-t border-[#2A2A2E] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#C69F66]/20 border border-[#C69F66]/40 text-[#C69F66] text-[10px] font-bold uppercase tracking-wider">
                      {filteredItems[lightboxIndex].tag}
                    </span>
                    <span className="text-xs text-[#E0E0E0]/60">
                      Photo {lightboxIndex + 1} of {filteredItems.length}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-lg text-white">
                    {filteredItems[lightboxIndex].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#E0E0E0]/70 font-light">
                    {filteredItems[lightboxIndex].subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => {
                      closeLightbox();
                      onOpenBooking();
                    }}
                    className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0A0A0C] bg-[#C69F66] hover:bg-white transition-all shadow-lg cursor-pointer"
                  >
                    Check Availability
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
