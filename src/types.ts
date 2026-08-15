export interface LeadSubmission {
  fullName: string;
  whatsappPhone: string;
  email: string;
  eventDate: string;
  eventLocation: string;
  selectedTier: string;
  additionalNotes?: string;
  submittedAt?: string;
}

export type LanguageMode = 'english' | 'pidgin' | 'yoruba';
export type EnergyLevel = 'hype' | 'protocol' | 'cultural';
