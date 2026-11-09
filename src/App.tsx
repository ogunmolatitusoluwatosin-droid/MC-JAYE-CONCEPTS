/**
 * ============================================================================
 * MC JAYE CONCEPTS — 3-PAGE OFFICIAL WEBSITE
 * ============================================================================
 * 
 * Page 1: Home Experience (Hero, Philosophy, Zero-Gbege Guarantee, Live Delivery, Testimonials)
 * Page 2: Live Photos & Stage Command (Authentic high-res gallery, wardrobe showcase, lightbox)
 * Page 3: Event Packages & Booking (Detailed pricing tiers, 5-phase framework, FAQs, date reservation)
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
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
import { GalleryPage } from './components/GalleryPage';
import { PackagesPage } from './components/PackagesPage';
import { BookingModal } from './components/BookingModal';
import { ThankYouModal } from './components/ThankYouModal';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';
import { LeadSubmission } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string | undefined>('weddings');
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [lastLeadData, setLastLeadData] = useState<LeadSubmission | null>(null);

  // Sync hash routing if user uses bookmarks or browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#gallery' || hash === '#photos') {
        setCurrentPage('gallery');
      } else if (hash === '#packages' || hash === '#pricing') {
        setCurrentPage('packages');
      } else if (hash === '#home' || hash === '') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // initial check
    if (window.location.hash === '#gallery') setCurrentPage('gallery');
    if (window.location.hash === '#packages') setCurrentPage('packages');

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      {/* 1. Global Navigation Bar with 3-Page Switcher */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={navigateToPage}
        onOpenBooking={handleOpenBooking} 
      />

      {/* 2. Page Content Render */}
      <main id="main-content">
        {/* PAGE 1: HOME EXPERIENCE */}
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-300">
            {/* Hero Spotlight with verified authentic photo & quick actions */}
            <Hero 
              onOpenBooking={() => handleOpenBooking()} 
              onNavigateToGallery={() => navigateToPage('gallery')}
            />

            {/* Atmosphere Gallery Preview Strip */}
            <AtmosphereGallery />

            {/* Section: Your Event Deserves More Than Someone Holding a Microphone */}
            <DeservesMore />

            {/* Section: Introducing The Zero-Gbege Guarantee™ */}
            <ZeroGbegeGuarantee 
              onOpenBooking={() => handleOpenBooking()} 
            />

            {/* Section: Imagine What Your Event Feels Like When Everything Just Flows */}
            <ImagineFlow 
              onOpenBooking={() => handleOpenBooking()} 
            />

            {/* Section: Live Multilingual Flow (English • Pidgin • Yoruba) */}
            <LanguagesAndSoundboard />

            {/* Section: 5-Step Pre-Event Framework Preview */}
            <PreEventFramework 
              onOpenBooking={() => handleOpenBooking()} 
            />

            {/* Section: Packages & Pricing Preview with link to full page */}
            <PricingPackages 
              onSelectPackage={(tierId) => handleOpenBooking(tierId)} 
            />

            {/* Section: Why MC JAYE CONCEPTS */}
            <WhyMcJaye 
              onOpenBooking={() => handleOpenBooking()} 
            />

            {/* Section: “But What If My Event Is Different?” */}
            <EventDifferent 
              onOpenBooking={() => handleOpenBooking()} 
            />

            {/* Section: Final Callout & Celebration Commitment */}
            <FinalCallout 
              onOpenBooking={() => handleOpenBooking()} 
            />
          </div>
        )}

        {/* PAGE 2: LIVE PHOTOS & STAGE PRESENCE */}
        {currentPage === 'gallery' && (
          <div className="animate-in fade-in duration-300">
            <GalleryPage 
              onOpenBooking={handleOpenBooking}
              onNavigatePage={navigateToPage}
            />
          </div>
        )}

        {/* PAGE 3: EVENT PACKAGES & BOOKING */}
        {currentPage === 'packages' && (
          <div className="animate-in fade-in duration-300">
            <PackagesPage 
              onSelectPackage={(tierId) => handleOpenBooking(tierId)}
              onNavigatePage={navigateToPage}
            />
          </div>
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()} 
        onNavigatePage={navigateToPage}
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
