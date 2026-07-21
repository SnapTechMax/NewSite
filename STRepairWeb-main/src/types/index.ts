// Service Types
export interface Service {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  painPoint?: string;
  painDescription?: string;
  description: string;
  metaDescription: string;
  icon: string;
  image?: string;
  features: Feature[];
  benefits: string[];
  faqs: FAQ[];
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Location Types
export interface Location {
  id: string;
  slug: string;
  name: string;
  county: string;
  state: string;
  zipCodes: string[];
  phone: string;
  description: string;
  metaDescription: string;
  nearbyAreas: string[];
  // Enhanced personalization fields
  introParagraph: string;
  valuePropositions: string[];
  closingStatement: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  badge?: string;
}

// Company Types
export interface CompanyInfo {
  name: string;
  legalName: string;
  phone: string;
  email?: string;
  foundedYear: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    monday?: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    yelp?: string;
    google?: string;
  };
  owner: {
    name: string;
    title: string;
    photo?: string;
    experience?: string[];
  };
  ratings: {
    google: {
      score: number;
      reviewCount: number;
      url: string;
    };
    yelp?: {
      score: number;
      reviewCount: number;
      url: string;
    };
  };
  certifications?: string[];
}

// Testimonial Types
export interface Testimonial {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    location: string;
    photo?: string;
    avatarColor?: string;
  };
  rating: number;
  source?: "google" | "yelp" | "direct";
}
