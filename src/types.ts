export interface Agent {
  id: string;
  name: string;
  role: string;
  licenseNumber: string;
  experienceYears: number;
  totalVolume: string;
  activeListingsCount: number;
  bio: string;
  specialties: string[];
  languages: string[];
  awards: string[];
  photo: string;
  phone: string;
  email: string;
  instagram?: string;
  linkedin?: string;
  rating: number;
  reviewCount: number;
}

export interface Property {
  id: string;
  title: string;
  tagline: string;
  address: string;
  neighborhood: string;
  city: string;
  price: number;
  priceFormatted: string;
  priceInr?: number;
  priceCr?: string;
  priceAed?: number;
  priceUsd?: number;
  reraPermitNumber?: string;
  reraNumber?: string;
  vastuCompliance?: string;
  status: 'For Sale' | 'Exclusive' | 'Off-Market' | 'Just Sold' | 'Under Contract';
  category: 'Modern Villa' | 'Luxury Penthouse' | 'Architectural Estate' | 'Waterfront' | 'Historic Manor' | 'Sea-Facing Penthouse' | 'Heritage Bungalow' | 'Golf Estate Villa' | 'Goa Coastal Villa';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  lotSize?: string;
  yearBuilt: number;
  heroImage: string;
  galleryImages: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  agentId: string;
  agentName: string;
  agentRole: string;
  agentPhoto: string;
  agentPhone: string;
  featured?: boolean;
  virtualTourUrl?: string;
  hoaMonthly?: number;
  propertyTaxAnnual?: number;
}

export interface AgencyService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}

export interface ClientReview {
  id: string;
  clientName: string;
  clientTitle: string;
  propertyTitle: string;
  propertyLocation: string;
  dealValue: string;
  quote: string;
  rating: number;
  year: string;
  agentName: string;
}

export interface NeighborhoodGuide {
  id: string;
  name: string;
  tagline: string;
  averagePrice: string;
  priceGrowth: string;
  vibe: string;
  image: string;
  featuredEstatesCount: number;
}

export interface FAQItem {
  id: string;
  category: 'Buying' | 'Selling' | 'Valuation' | 'Off-Market Advisory';
  question: string;
  answer: string;
}

export interface ValuationRequest {
  propertyAddress: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  approxSqft: string;
  estimatedCondition: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  timeframe: string;
  preferredAgentId?: string;
}

export interface ViewingInquiry {
  propertyId?: string;
  propertyTitle?: string;
  agentId?: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  preferredDate: string;
  preferredTime: string;
  financingStatus: 'Pre-Approved' | 'All Cash' | 'Need Recommendation' | 'Just Inquiring';
  message: string;
}
