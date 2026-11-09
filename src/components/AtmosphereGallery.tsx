import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Camera, Instagram, Music2, Maximize2, X, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { GALLERY_ITEMS, SITE_CONFIG } from '../config';

interface AtmosphereGalleryProps {
  onOpenReel?: () => void;
}

export const AtmosphereGallery: React.FC<AtmosphereGalleryProps> = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section 
      id="gallery"
      className="py-16 sm:py-20 bg-[#0A0A0C] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Short & Captivating */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-3 shadow-lg">
            <Camera className="w-3.5 h-3.5 text-[#C69F66]" />
            <span>Live Atmosphere & Photos</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight leading-tight mb-3">
            The Room In Action
          </h2>

          <p className="text-sm sm:text-base text-[#E0E0E0]/80 font-light">
            Real celebrations. Authentic energy. Pure stage command.
          </p>
        </div>

        {/* Gallery Cards Grid - Pictures are prominent, large, and click-to-view */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => openLightbox(idx)}
              className="bg-[#0F0F12] border border-[#2A2A2E] hover:border-[#C69F66]/60 rounded-3xl overflow-hidden group transition-all flex flex-col justify-between shadow-2xl cursor-pointer"
            >
              {/* Visual Presentation Area - Tall, high-visibility picture */}
              <div className="h-80 sm:h-96 bg-[#16161A] relative overflow-hidden">
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-100 group-hover:brightness-105"
                  loading="lazy"
                />

                {/* Subtle Gradient vignette strictly at bottom */}
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

              </div>

              {/* Caption details - Short, captivating copy */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base text-white mb-1 group-hover:text-[#C69F66] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E0E0E0]/70 leading-relaxed font-light">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof & Direct Connect Channels */}
        <div className="bg-[#0F0F12] border border-[#2A2A2E] rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 max-w-5xl mx-auto shadow-2xl">
          <div className="text-center lg:text-left">
            <h3 className="font-serif font-bold text-lg sm:text-xl text-white mb-1">
              Watch Live Videos & Event Clips Daily
            </h3>
            <p className="text-xs sm:text-sm text-[#E0E0E0]/70 font-light">
              Follow MC JAYE on TikTok & Instagram for live entrance hype, crowd reactions, and wedding highlights.
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
              id="gallery-btn-whatsapp"
              href={`https://wa.me/${SITE_CONFIG.whatsappPhoneNumber}?text=${encodeURIComponent("Hello MC JAYE, I saw your event gallery and would like to book.")}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#16161A] hover:bg-[#C69F66] hover:text-[#0A0A0C] border border-[#C69F66]/40 text-xs font-semibold text-[#C69F66] flex items-center gap-2 transition-all group"
            >
              <MessageSquare className="w-4 h-4 text-[#C69F66] group-hover:text-[#0A0A0C]" />
              <span>WhatsApp ({SITE_CONFIG.whatsappDisplay})</span>
            </a>

            <a
              id="gallery-btn-tiktok"
              href={SITE_CONFIG.tiktokUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#16161A] hover:bg-[#C69F66] hover:text-[#0A0A0C] border border-[#2A2A2E] text-xs font-semibold text-[#E0E0E0] flex items-center gap-2 transition-all group"
            >
              <Music2 className="w-4 h-4 text-[#C69F66] group-hover:text-[#0A0A0C]" />
              <span>TikTok {SITE_CONFIG.tiktokHandle}</span>
            </a>

            <a
              id="gallery-btn-instagram"
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#16161A] hover:bg-[#C69F66] hover:text-[#0A0A0C] border border-[#2A2A2E] text-xs font-semibold text-[#E0E0E0] flex items-center gap-2 transition-all group"
            >
              <Instagram className="w-4 h-4 text-[#C69F66] group-hover:text-[#0A0A0C]" />
              <span>Instagram {SITE_CONFIG.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 p-3 rounded-full bg-[#16161A] text-white hover:text-[#C69F66] hover:bg-[#202026] border border-[#2A2A2E] transition-all z-50 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#16161A]/80 hover:bg-[#C69F66] text-white hover:text-[#0A0A0C] border border-[#2A2A2E] transition-all z-50 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#16161A]/80 hover:bg-[#C69F66] text-white hover:text-[#0A0A0C] border border-[#2A2A2E] transition-all z-50 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_ITEMS[lightboxIndex].image}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[70vh] object-contain rounded-2xl border border-[#2A2A2E] shadow-2xl"
              />

              <div className="mt-4 text-center max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>{GALLERY_ITEMS[lightboxIndex].tag}</span>
                  <span>•</span>
                  <span>{GALLERY_ITEMS[lightboxIndex].energy}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-serif font-bold text-white">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#E0E0E0]/80 mt-1 font-light mb-3">
                  {GALLERY_ITEMS[lightboxIndex].subtitle}
                </p>

                <button
                  onClick={closeLightbox}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#16161A] hover:bg-[#202026] text-xs font-semibold text-[#E0E0E0] hover:text-[#C69F66] border border-[#2A2A2E] hover:border-[#C69F66]/50 transition-all cursor-pointer"
                >
                  <span>← Return to Main Page</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
