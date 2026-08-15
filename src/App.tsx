/**
 * ============================================================================
 * MC JAYE CONCEPTS — OFFICIAL LANDING & SALES EXPERIENCE
 * ============================================================================
 * 
 * ℹ️ QUICK SETTINGS GUIDE FOR SITE OWNER:
 * All your links, WhatsApp number, and webhook URLs are configured in:
 * `src/config.ts` (at the top of the project).
 * 
 * • To view incoming leads: Open your Google Sheet named "MC_Jaye_Concept_Lagos_Leads_2026"
 * • Direct WhatsApp inquiries will ping you instantly with the client's event details.
 * ============================================================================
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DeservesMore } from './components/DeservesMore';
import { ZeroGbegeGuarantee } from './components/ZeroGbegeGuarantee';
import { ImagineFlow } from './components/ImagineFlow';
import { LanguagesAndSoundboard } from './components/LanguagesAndSoundboard';
import { PreEventFramework } from './components/PreEventFramework';
import { PricingPackages } from './components/PricingPackages';
import { WhyMcJaye } from './components/WhyMcJaye';
import { EventDifferent } from './components/EventDifferent';
import { AtmosphereGallery } from './components/AtmosphereGallery';
import { FinalCallout } from './components/FinalCallout';
import { BookingModal } from './components/BookingModal';
import { ThankYouModal } from './components/ThankYouModal';
import { VideoReelModal } from './components/VideoReelModal';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';
import { LeadSubmission } from './types';
import { SITE_CONFIG } from './config';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string | undefined>('weddings');
  const [isReelModalOpen, setIsReelModalOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [lastLeadData, setLastLeadData] = useState<LeadSubmission | null>(null);

  const handleOpenBooking = (tierId?: string) => {
    if (tierId) {
      setSelectedTierId(tierId);
    }
    setIsBookingModalOpen(true);
  };

  const handleBookingSuccess = (lead: LeadSubmission) => {
    setIsBookingModalOpen(false);
    setLastLeadData(lead);
    setIsThankYouModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E0E0E0] font-sans selection:bg-[#C69F66] selection:text-[#0A0A0C] relative overflow-x-hidden">
      {/* Background Ambient Luxury Light */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C69F66] opacity-[0.03] blur-[150px] pointer-events-none rounded-full -z-10" />

      {/* 1. Global Navigation Bar */}
      <Navbar 
        onOpenBooking={handleOpenBooking} 
        onOpenReel={() => setIsReelModalOpen(true)} 
      />

      {/* 2. Main Narrative & Sales Page Sections */}
      <main>
        {/* Section 0: Hero & Opening Problem Statement */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenReel={() => setIsReelModalOpen(true)} 
        />

        {/* Section 1: Your Event Deserves More Than Someone Holding a Microphone */}
        <DeservesMore />

        {/* Section 2: Introducing The Zero-Gbege Guarantee™ */}
        <ZeroGbegeGuarantee 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Section 3: Imagine What Your Event Feels Like When Everything Just Flows */}
        <ImagineFlow 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Section 4: One MC. Three Languages. One Seamless Experience (The Signature Soundboard) */}
        <LanguagesAndSoundboard />

        {/* Section 5: What Happens Before Your Event Matters (5-Step Framework) */}
        <PreEventFramework 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Section 6: Choose Your Experience & Pricing */}
        <PricingPackages 
          onSelectPackage={(tierId) => handleOpenBooking(tierId)} 
        />

        {/* Section 7: Why MC JAYE CONCEPTS? */}
        <WhyMcJaye 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Section 8: “But What If My Event Is Different?” */}
        <EventDifferent 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Section 9: Atmosphere Gallery & Video Highlights */}
        <AtmosphereGallery 
          onOpenReel={() => setIsReelModalOpen(true)} 
        />

        {/* Section 10: Final Callout & Celebration Commitment */}
        <FinalCallout 
          onOpenBooking={() => handleOpenBooking()} 
        />
      </main>

      {/* 3. Global Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* 4. Floating Contact & Quick Actions Bar */}
      <FloatingContactBar 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* 5. Interactive Modals */}
      {/* Booking Form Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        selectedTierId={selectedTierId}
        onClose={() => setIsBookingModalOpen(false)}
        onSuccess={handleBookingSuccess}
      />

      {/* Video Reel Modal */}
      <VideoReelModal
        isOpen={isReelModalOpen}
        onClose={() => setIsReelModalOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Thank You & Fast-Track WhatsApp Modal */}
      <ThankYouModal
        isOpen={isThankYouModalOpen}
        leadData={lastLeadData}
        onClose={() => setIsThankYouModalOpen(false)}
      />
    </div>
  );
}
