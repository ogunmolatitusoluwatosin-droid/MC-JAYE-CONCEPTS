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
import { AtmosphereGallery } from './components/AtmosphereGallery';
import { DeservesMore } from './components/DeservesMore';
import { ZeroGbegeGuarantee } from './components/ZeroGbegeGuarantee';
import { ImagineFlow } from './components/ImagineFlow';
import { LanguagesAndSoundboard } from './components/LanguagesAndSoundboard';
import { PreEventFramework } from './components/PreEventFramework';
import { PricingPackages } from './components/PricingPackages';
import { WhyMcJaye } from './components/WhyMcJaye';
import { EventDifferent } from './components/EventDifferent';
import { FinalCallout } from './components/FinalCallout';
import { BookingModal } from './components/BookingModal';
import { ThankYouModal } from './components/ThankYouModal';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';
import { LeadSubmission } from './types';
import { SITE_CONFIG } from './config';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string | undefined>('weddings');
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
      />

      {/* 2. Main Narrative & Sales Page Sections */}
      <main>
        {/* Section 0: Hero Spotlight & Value Delivery */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Section 1: Atmosphere Gallery & Stage Presence (Moved Upward so pictures are seen right away!) */}
        <AtmosphereGallery />

        {/* Section 2: Your Event Deserves More Than Someone Holding a Microphone */}
        <DeservesMore />

        {/* Section 3: Introducing The Zero-Gbege Guarantee™ */}
        <ZeroGbegeGuarantee 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Section 4: Imagine What Your Event Feels Like When Everything Just Flows */}
        <ImagineFlow 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Section 5: The Signature Soundboard & Multilingual Flow */}
        <LanguagesAndSoundboard />

        {/* Section 6: What Happens Before Your Event Matters (5-Step Framework) */}
        <PreEventFramework 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Section 7: Choose Your Experience & Pricing */}
        <PricingPackages 
          onSelectPackage={(tierId) => handleOpenBooking(tierId)} 
        />

        {/* Section 8: Why MC JAYE CONCEPTS? */}
        <WhyMcJaye 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* Section 9: “But What If My Event Is Different?” */}
        <EventDifferent 
          onOpenBooking={() => handleOpenBooking()} 
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

      {/* Thank You & Fast-Track WhatsApp Modal */}
      <ThankYouModal
        isOpen={isThankYouModalOpen}
        leadData={lastLeadData}
        onClose={() => setIsThankYouModalOpen(false)}
      />
    </div>
  );
}
