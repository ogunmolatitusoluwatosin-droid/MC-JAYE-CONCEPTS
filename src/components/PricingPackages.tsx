import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, Star, ArrowRight, Shield } from 'lucide-react';
import { EVENT_PACKAGES, EventPackage } from '../config';

interface PricingPackagesProps {
  onSelectPackage: (tierId: string) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPackage }) => {
  return (
    <section 
      id="packages"
      className="py-20 bg-[#0A0A0C] relative overflow-hidden"
    >
      {/* Accent Divider */}
      <div className="max-w-4xl mx-auto mb-16 px-4">
        <div className="h-[1px] bg-[#2A2A2E]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161A] border border-[#2A2A2E] text-[#C69F66] text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#C69F66]" />
            <span>Curated Event Packages</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight leading-tight mb-4">
            Choose Your Experience
          </h2>

          <p className="text-base sm:text-lg text-[#E0E0E0]/80 font-light">
            Transparent investment for guaranteed celebration flow, cultural mastery, and non-stop energy.
          </p>
        </div>

        {/* 4 Elevated Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-14">
          {EVENT_PACKAGES.map((pkg: EventPackage, idx: number) => {
            const isWeddings = pkg.id === 'weddings';

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                  isWeddings 
                    ? 'bg-[#0F0F12] border-2 border-[#C69F66] shadow-[0_0_30px_rgba(198,159,102,0.15)]' 
                    : 'bg-[#0F0F12] border border-[#2A2A2E] hover:border-[#C69F66]/50'
                }`}
              >
                {/* Popular / Feature Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-[#C69F66] text-[#0A0A0C] font-bold text-[10px] uppercase tracking-widest shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#0A0A0C]" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Title */}
                  <div className="mb-4 pt-2">
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-white tracking-tight min-h-[48px] flex items-center">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#C69F66] font-medium mt-1">
                      {pkg.durationOrSubtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-5 pb-5 border-b border-[#2A2A2E]">
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif font-bold text-3xl sm:text-4xl text-white">
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  {/* Package Description verbatim */}
                  <p className="text-xs sm:text-sm text-[#E0E0E0]/70 leading-relaxed font-light mb-6">
                    {pkg.description}
                  </p>

                  {/* Includes List verbatim */}
                  <div className="space-y-2.5 mb-8">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#C69F66]">
                      Includes:
                    </p>
                    {pkg.includes.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#E0E0E0]/80 font-light">
                        <Check className="w-3.5 h-3.5 text-[#C69F66] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-[#2A2A2E]">
                  <button
                    id={`btn-select-tier-${pkg.id}`}
                    onClick={() => onSelectPackage(pkg.id)}
                    className={`w-full py-3 px-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isWeddings
                        ? 'bg-[#C69F66] text-[#0A0A0C] hover:bg-white shadow-[0_0_15px_rgba(198,159,102,0.3)]'
                        : 'bg-[#16161A] text-white hover:text-[#0A0A0C] hover:bg-[#C69F66] border border-[#2A2A2E]'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Footer Pill */}
        <div className="text-center max-w-2xl mx-auto p-4 rounded-full bg-[#16161A] border border-[#2A2A2E] flex items-center justify-center gap-3 text-xs sm:text-sm text-[#E0E0E0]/70 font-light shadow-lg">
          <Shield className="w-4 h-4 text-[#C69F66] shrink-0" />
          <span>Every tier includes pre-event alignment, timeline review, and the Zero-Gbege Guarantee™.</span>
        </div>
      </div>
    </section>
  );
};
