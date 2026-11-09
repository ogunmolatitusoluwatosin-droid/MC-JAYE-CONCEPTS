/**
 * ============================================================================
 * MC JAYE CONCEPTS — MAIN CLIENT CONFIGURATION & FUNNEL SETTINGS
 * ============================================================================
 * 
 * NOTE FOR SITE OWNER / ADMIN:
 * This is the SINGLE place where all your URLs, phone numbers, and webhook 
 * settings live. You do not need to hunt through code. Simply update the values 
 * below between the quotes.
 * 
 * HOW TO VIEW YOUR FORM SUBMISSIONS:
 * To see leads and client inquiries submitted through this website, open your 
 * Google Sheet directly named: "MC_Jaye_Concept_Lagos_Leads_2026".
 * Submissions are also routed directly to your WhatsApp with pre-filled details.
 * ============================================================================
 */

import mcJayeBlazerImg from './assets/images/mc_jaye_blazer.jpg';
import mcJayeHeroImg from './assets/images/mc_jaye_hero.jpg';
import mcJayeTraditionalImg from './assets/images/mc_jaye_traditional.jpg';
import mcJayeReceptionImg from './assets/images/mc_jaye_reception.jpg';
import mcJayeLogoImg from './assets/images/mc_jaye_logo.jpeg';

export const SITE_CONFIG = {
  // BRAND LOGO
  logo: mcJayeLogoImg,
  // 1. YOUR WHATSAPP NUMBER & DIRECT CALL LINES
  // WhatsApp number: 08033106047 -> International format: 2348033106047
  whatsappPhoneNumber: "2348033106047",
  whatsappDisplay: "08033106047",
  
  // Direct Phone Lines
  primaryPhone: "+2348033106047",
  primaryPhoneDisplay: "+234 803 310 6047",
  secondaryPhone: "+2348068724558",
  secondaryPhoneDisplay: "+234 806 872 4558",

  // 2. GOOGLE APPS SCRIPT WEBHOOK URL
  // What it is: The URL of your deployed Google Apps Script Web App connected to your Google Sheet.
  // Where to get it: In your Google Sheet ("MC_Jaye_Concept_Lagos_Leads_2026"), go to Extensions > Apps Script > Deploy > New Deployment > Web App.
  // If you haven't set it up yet, leave this placeholder or paste your URL here when ready.
  googleAppsScriptWebhookUrl: "https://script.google.com/macros/s/AKfycbx_YOUR_DEPLOYED_APP_SCRIPT_ID/exec",

  // 3. GOOGLE SHEET DATABASE NAME
  // What it is: The exact name of your Google Sheet tab/file where inquiries are recorded.
  googleSheetName: "MC_Jaye_Concept_Lagos_Leads_2026",

  // 4. INSTAGRAM PROFILE URL
  instagramUrl: "https://www.instagram.com/iam_mcjaye?igsh=MWU4bGphd3RoenlzMw%3D%3D&utm_source=qr",
  instagramHandle: "@iam_mcjaye",

  // 5. TIKTOK PROFILE URL
  tiktokUrl: "https://www.tiktok.com/@iam_mcjaye?_r=1&_t=ZS-98nIgbEcv2X",
  tiktokHandle: "@iam_mcjaye",

  // 6. BRAND & LOCATION IDENTITY
  brandName: "MC JAYE CONCEPTS",
  primaryLocation: "Lagos, Nigeria (Available Nationwide & Destination Events)",
  currencySymbol: "₦",
};

/**
 * EXACT EVENT PACKAGES & PRICING VERBATIM FROM COPY
 */
export interface EventPackage {
  id: string;
  name: string;
  price: string;
  priceNumeric: number;
  durationOrSubtitle: string;
  tagline: string;
  description: string;
  includes: string[];
  ctaText: string;
  popular?: boolean;
  badge?: string;
}

export const EVENT_PACKAGES: EventPackage[] = [
  {
    id: "intimate",
    name: "INTIMATE BIRTHDAYS & HOUSEWARMINGS",
    price: "₦100,000",
    priceNumeric: 100000,
    durationOrSubtitle: "Up to 3 hours",
    tagline: "Structure & Lively Engagement",
    description: "Perfect for intimate celebrations that still deserve professional structure and lively engagement.",
    includes: [
      "Essential crowd engagement",
      "Script review",
      "Program flow management",
      "Professional announcements",
      "Interactive moments"
    ],
    ctaText: "BOOK YOUR DATE",
  },
  {
    id: "milestone",
    name: "MILESTONE PARTIES",
    price: "₦200,000",
    priceNumeric: 200000,
    durationOrSubtitle: "50th & 70th Birthdays • Anniversaries & More",
    tagline: "Dignity & High-Spirit Celebration",
    description: "Because celebrating a milestone deserves more than an ordinary party host.",
    includes: [
      "Full-day hosting",
      "VIP & elder protocol",
      "Custom icebreakers",
      "Crowd engagement",
      "Program flow management",
      "Special-moment coordination"
    ],
    ctaText: "CELEBRATE IN STYLE",
    badge: "Milestone Specialist",
  },
  {
    id: "weddings",
    name: "WEDDINGS",
    price: "₦200,000",
    priceNumeric: 200000,
    durationOrSubtitle: "Traditional & White Reception",
    tagline: "Zero Stress For The Couple",
    description: "Your wedding should be about the two of you — not about fixing program problems.",
    includes: [
      "Full-day coordination",
      "DJ & vendor cues",
      "Entrance hyping",
      "Bridal games",
      "Guest engagement",
      "Program time management",
      "Cultural protocol"
    ],
    ctaText: "SECURE YOUR WEDDING DATE",
    popular: true,
    badge: "Most Requested",
  },
  {
    id: "corporate",
    name: "CORPORATE EVENTS",
    price: "₦250,000",
    priceNumeric: 250000,
    durationOrSubtitle: "Galas • Product Launches • Conferences",
    tagline: "Boardroom Polish & Room Energy",
    description: "Professional enough for the boardroom. Engaging enough for the room.",
    includes: [
      "Formal timekeeping",
      "Brand-aligned delivery",
      "Executive protocol management",
      "Speaker introductions",
      "Stage transitions",
      "Audience engagement",
      "Vendor coordination"
    ],
    ctaText: "BOOK CORPORATE HOSTING",
    badge: "Executive Polish",
  }
];

/**
 * The 5-Step Pre-Event Framework verbatim from copy
 */
export const PRE_EVENT_STEPS = [
  {
    step: "01",
    title: "Alignment",
    description: "We speak with the relevant planners, coordinators, DJs, and stage teams."
  },
  {
    step: "02",
    title: "Program Mapping",
    description: "We review your schedule and identify potential delays, transitions, speeches, entrances, games, cake cutting, spraying sessions, and other critical moments."
  },
  {
    step: "03",
    title: "Script Customization",
    description: "Your event gets a tailored run-of-show rather than a recycled script."
  },
  {
    step: "04",
    title: "Execution",
    description: "On the day, we manage transitions, timing, announcements, audience engagement, and vendor cues."
  },
  {
    step: "05",
    title: "Energy Control",
    description: "We know when to turn the room up — and when to bring it back down."
  }
];

/**
 * Direct Image Assets for MC Jaye Concepts
 */
export const MC_IMAGES = {
  logo: mcJayeLogoImg,
  hero: mcJayeHeroImg,
  traditional: mcJayeTraditionalImg,
  crowdEngage: mcJayeReceptionImg,
  blazerSuit: mcJayeBlazerImg,
  corporateSuit: mcJayeBlazerImg,
};

/**
 * Atmosphere and Gallery photo items with direct image URLs
 */
export const GALLERY_ITEMS = [
  {
    title: "The Entrance Hype & Stage Command",
    subtitle: "High-voltage celebration with flawless coordination and presence",
    image: mcJayeHeroImg,
    tag: "Weddings & Luxury Galas",
    energy: "Pure Hype"
  },
  {
    title: "Cultural Protocol & Elder Reverence",
    subtitle: "Honouring Nigerian traditions with deep dignity, warmth, and respect",
    image: mcJayeTraditionalImg,
    tag: "Traditional & Milestones",
    energy: "Deep Respect"
  },
  {
    title: "Unbroken Room Momentum",
    subtitle: "Zero awkward silences, natural charisma, and total guest engagement",
    image: mcJayeReceptionImg,
    tag: "Celebrations & Receptions",
    energy: "Seamless Flow"
  },
  {
    title: "Executive Polish & Timekeeping",
    subtitle: "MC Jaye in tailored blazer attire, keeping your program strictly on schedule",
    image: mcJayeBlazerImg,
    tag: "Corporate & Formal Galas",
    energy: "Precision"
  }
];
