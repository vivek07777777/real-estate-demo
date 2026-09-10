import { Agent, Property, AgencyService, ClientReview, NeighborhoodGuide, FAQItem } from './types';

export const AGENCY_INFO = {
  name: "Real Estate",
  fullName: "Real Estate Private Client Advisory LLP",
  tagline: "Ultra-Prime Residences & Private Estates • India • RERA Registered",
  demoNotice: "Customizable Realtor Demo • Designed for Top Indian Brokerages & Realtors",
  phone: "+91 98200 48800",
  landline: "+91 22 6988 8800",
  whatsapp: "+91 98200 48800",
  email: "privateoffice@auraluxury.in",
  reraOrn: "MahaRERA: A51900028491",
  regulatoryCertifications: "MahaRERA #A51900028491 • HRERA-PKL-GGM-1092 • Delhi RERA #DLRERA2023A0041 • K-RERA Reg.",
  offices: [
    { city: "Mumbai (Flagship)", address: "Maker Maxity, North Avenue, Level 5, Bandra Kurla Complex (BKC), Mumbai 400051" },
    { city: "New Delhi", address: "Lutyens' Private Suite, Barakhamba Road, Connaught Place, New Delhi 110001" },
    { city: "Gurugram", address: "DLF Cyber City, Building 10, Level 14, DLF Phase II, Gurugram 122002" },
    { city: "Bengaluru", address: "UB City, Concorde Block, Level 8, Vittal Mallya Road, Bengaluru 560001" },
    { city: "North Goa", address: "Villa Quintas, Bouta Waddo, Assagao, North Goa 403507" }
  ],
  stats: {
    lifetimeVolume: "₹8,500 Cr+",
    lifetimeVolumeUsd: "$1.02B+",
    avgDaysOnMarket: "32 Days",
    privateOffMarketDeals: "54%",
    nriRepatriationSuccess: "100%",
    vastuCertifiedPortfolios: "100%",
    clientSatisfaction: "99.8%"
  }
};

export const AGENTS: Agent[] = [
  {
    id: "agent-vikramaditya-singhania",
    name: "Vikramaditya Singhania",
    role: "Managing Principal & Lutyens' Delhi Specialist",
    licenseNumber: "Delhi RERA #DLRERA2023A0041",
    experienceYears: 19,
    totalVolume: "₹3,400 Cr+",
    activeListingsCount: 8,
    bio: "Ranked among India's most discreet and trusted advisors for ultra-high-net-worth families, industrialists, and sovereign diplomats. Vikramaditya specializes in freehold bungalows in Lutyens' Delhi (LBZ), Golf Links, and turnkey estates across Chanakyapuri and Shanti Niketan.",
    specialties: ["Lutyens' Bungalow Zone (LBZ)", "Industrialist Family Estates", "Z-Security Compound Deals", "Ultra-Prime Off-Market Delhi"],
    languages: ["English", "Hindi", "Punjabi"],
    awards: ["ET Realty Luxury Broker of the Decade 2024", "National RERA Excellence Award"],
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    phone: "+91 98200 48811",
    email: "v.singhania@auraluxury.in",
    instagram: "@vikram.singhania.estates",
    linkedin: "vikramaditya-singhania-realty",
    rating: 5.0,
    reviewCount: 62
  },
  {
    id: "agent-ananya-roy-kapoor",
    name: "Ananya Roy-Kapoor",
    role: "Senior Partner & Head of South Mumbai Penthouses",
    licenseNumber: "MahaRERA #A51900028491",
    experienceYears: 16,
    totalVolume: "₹2,850 Cr+",
    activeListingsCount: 7,
    bio: "Ananya heads Aura's Mumbai private client desk, advising India's top corporate leaders, Bollywood filmmakers, and venture capitalists on marquee sea-facing duplex penthouses along Worli Sea Face, Malabar Hill, and Bandra West's Pali Hill.",
    specialties: ["Worli Sea Face Duplexes", "Malabar Hill Sky Mansions", "Pali Hill & Bandra Estates", "NRI Repatriation & FEMA Desk"],
    languages: ["English", "Hindi", "Marathi", "Bengali"],
    awards: ["Mumbai Luxury Real Estate Advisor of the Year 2024", "CNBC-TV18 Prime Property Icon"],
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    phone: "+91 98200 48822",
    email: "a.roykapoor@auraluxury.in",
    instagram: "@ananya.roykapoor.mumbai",
    linkedin: "ananya-roy-kapoor-real-estate",
    rating: 4.9,
    reviewCount: 58
  },
  {
    id: "agent-kabir-krishnamurthy",
    name: "Kabir Krishnamurthy",
    role: "Senior Partner & Tech Founders / Golf Estates Specialist",
    licenseNumber: "HRERA-PKL-GGM-1092 • K-RERA",
    experienceYears: 15,
    totalVolume: "₹1,750 Cr+",
    activeListingsCount: 6,
    bio: "With deep roots across Bengaluru's Silicon Plateau and Gurugram's Golf Course Road, Kabir is the go-to advisor for unicorn startup founders, CXOs, and global tech executives seeking golf-front villas and sustainable smart compounds.",
    specialties: ["DLF Camellias & Magnolias", "Sadashivnagar & Indiranagar Mansions", "Zero-Carbon Smart Estates", "Vastu Architectural Audits"],
    languages: ["English", "Hindi", "Kannada", "Tamil"],
    awards: ["Bengaluru Tech City Prime Dealmaker Award", "Hurun India Top 10 Luxury Real Estate Advisors"],
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    phone: "+91 98200 48833",
    email: "k.krishnamurthy@auraluxury.in",
    instagram: "@kabir.estates.india",
    linkedin: "kabir-krishnamurthy-advisory",
    rating: 5.0,
    reviewCount: 47
  },
  {
    id: "agent-rhea-coutinho",
    name: "Rhea Coutinho",
    role: "Partner & Head of Goa & Alibaug Coastal Sanctuaries",
    licenseNumber: "Goa RERA #AGGO09230182",
    experienceYears: 12,
    totalVolume: "₹920 Cr+",
    activeListingsCount: 5,
    bio: "Rhea curates India's most coveted private holiday homes, historic Indo-Portuguese manors in Assagao, and beachfront compounds with private helicopter pads in Alibaug and Mandwa for discerning Mumbai and Delhi collectors.",
    specialties: ["Heritage Portuguese Manors in Goa", "Alibaug Beachfront Compounds", "Private Helipad Land Parcels", "Luxury Holiday Rental Yields"],
    languages: ["English", "Hindi", "Konkani", "Portuguese"],
    awards: ["Architectural Digest India Curated Estate Advisor", "Goa Heritage Conservation Broker of 2024"],
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    phone: "+91 98200 48844",
    email: "r.coutinho@auraluxury.in",
    instagram: "@rhea.coutinho.coastal",
    linkedin: "rhea-coutinho-estates",
    rating: 4.9,
    reviewCount: 39
  }
];

export const PROPERTIES: Property[] = [
  {
    id: "prop-worli-sea-face-sky-duplex",
    title: "The Worli Sea Face Sky Duplex",
    tagline: "Unobstructed Arabian Sea Panoramas & Bandra-Worli Sea Link Vistas with Private Pool",
    address: "Worli Sea Face, Worli",
    neighborhood: "Worli Sea Face",
    city: "Mumbai",
    price: 850000000,
    priceFormatted: "₹85,00,00,000",
    priceInr: 850000000,
    priceCr: "₹85.0 Cr",
    priceUsd: 10200000,
    reraPermitNumber: "MahaRERA: P51900001842",
    reraNumber: "P51900001842",
    vastuCompliance: "100% Vastu Compliant • North-East Facing",
    status: "Exclusive",
    category: "Sea-Facing Penthouse",
    bedrooms: 5,
    bathrooms: 7,
    sqft: 8600,
    lotSize: "1,800 sqft Wrap-Around Deck",
    yearBuilt: 2023,
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Occupying the top dual floors of South Mumbai's most prestigious architectural tower along Worli Sea Face, this ultra-luxury sky duplex commands breathtaking, perpetual views of the Arabian Sea and the glittering Bandra-Worli Sea Link. Featuring 24-foot double-height living salons, imported Italian Calacatta marble, temperature-controlled cantilevered plunge pool, and dedicated staff suites.",
    highlights: [
      "Unobstructed 180° Panoramic Arabian Sea & Sea Link Sunset Vistas",
      "Private Heated Cantilevered Plunge Pool on the 48th Floor Deck",
      "100% Vastu Compliant with Ishanya (North-East) Corner Master Suite",
      "Private High-Speed Direct Capsule Elevators with Biometric Security",
      "4 Reserved Podium Car Parking Spaces with EV Superchargers",
      "Complete NRI / OCI Repatriation and FEMA Compliance Documentation"
    ],
    amenities: ["Private Plunge Pool", "Sea View Deck", "Italian Marble", "Private Elevator", "Staff Quarters for 4", "Valet Concierge", "Smart Home Automation", "Clubhouse Spa Access"],
    agentId: "agent-ananya-roy-kapoor",
    agentName: "Ananya Roy-Kapoor",
    agentRole: "Senior Partner & Head of South Mumbai Penthouses",
    agentPhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    agentPhone: "+91 98200 48822",
    featured: true,
    hoaMonthly: 65000,
    propertyTaxAnnual: 480000
  },
  {
    id: "prop-lutyens-delhi-heritage-bungalow",
    title: "The Lutyens' Bungalow Heritage Estate",
    tagline: "Rare 1.25-Acre Freehold Colonial Mansion on Amrita Shergill Marg in India's Power Epicenter",
    address: "Amrita Shergill Marg, Lutyens' Bungalow Zone (LBZ)",
    neighborhood: "Lutyens' Delhi",
    city: "New Delhi",
    price: 1450000000,
    priceFormatted: "₹145,00,00,000",
    priceInr: 1450000000,
    priceCr: "₹145.0 Cr",
    priceUsd: 17400000,
    reraPermitNumber: "Delhi RERA: DL-LBZ-2024-0019",
    reraNumber: "DL-LBZ-2024-0019",
    vastuCompliance: "Brahmasthan Courtyard Layout • East-Facing Gateway",
    status: "Exclusive",
    category: "Heritage Bungalow",
    bedrooms: 7,
    bathrooms: 10,
    sqft: 16500,
    lotSize: "1.25-Acre Private Gated Grounds",
    yearBuilt: 2021,
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An irreplaceable, once-in-a-generation acquisition within the Lutyens' Bungalow Zone (LBZ)—the most exclusive residential sanctuary in Asia. Set on over an acre of ancient banyan and neem-canopied grounds, this stately manor balances classical British-colonial proportions with contemporary museum-grade interior finishes and diplomatic security.",
    highlights: [
      "Rare Freehold Title on Prestigious Amrita Shergill Marg",
      "1.25 Acres of Manicured Lawns, Putting Green & Century-Old Trees",
      "Reinforced Diplomatic Z-Security Perimeter with Dedicated Guard Annex",
      "Grand 28-Seat State Dining Hall with Butler's Pantry",
      "Separate 6-Suite Executive Staff & Security Wing",
      "Independent Crystal Swimming Pavilion & Hydrotherapy Suite"
    ],
    amenities: ["1.25-Acre Lawns", "Swimming Pavilion", "Z-Security Enclosure", "Tennis Lawn", "Staff Quarters for 10", "Grand Banquet Hall", "Library Salon", "Commercial Chef Kitchen"],
    agentId: "agent-vikramaditya-singhania",
    agentName: "Vikramaditya Singhania",
    agentRole: "Managing Principal & Lutyens' Delhi Specialist",
    agentPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    agentPhone: "+91 98200 48811",
    featured: true,
    hoaMonthly: 45000,
    propertyTaxAnnual: 950000
  },
  {
    id: "prop-camellias-golf-penthouse-gurugram",
    title: "The Camellias Signature Golf Penthouse",
    tagline: "Ultra-Luxury Duplex Overlooking Arnold Palmer Championship Fairways on Golf Course Road",
    address: "DLF Golf Links, Golf Course Road, Sector 42",
    neighborhood: "Golf Course Road",
    city: "Gurugram (Delhi NCR)",
    price: 620000000,
    priceFormatted: "₹62,00,00,000",
    priceInr: 620000000,
    priceCr: "₹62.0 Cr",
    priceUsd: 7450000,
    reraPermitNumber: "HRERA: HRERA-PKL-GGM-1092-2024",
    reraNumber: "HRERA-PKL-GGM-1092-2024",
    vastuCompliance: "100% Vastu Compliant • North Facing",
    status: "For Sale",
    category: "Golf Estate Villa",
    bedrooms: 5,
    bathrooms: 7,
    sqft: 11200,
    lotSize: "Golf Course Frontage",
    yearBuilt: 2023,
    heroImage: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Regarded as North India's most celebrated modern residential development, The Camellias at DLF Golf Links redefines super-luxury living. This duplex sky penthouse enjoys uninterrupted frontline views of the 18-hole championship golf course and Aravalli mountain ridgeline, supported by a 1.6-lakh sq ft private clubhouse.",
    highlights: [
      "Frontline Panoramic Overlook of Arnold Palmer & Gary Player Golf Fairways",
      "11,200 sq ft Customized Bare-Shell / Designer Turnkey Interior Layout",
      "Hospital-Grade MERV-14 Central Clean-Air Filtration & Climate Control",
      "Exclusive Access to the Camellias 1,60,000 sq ft Private Residents' Club",
      "Five Reserved Basements Stalls with High-Amp EV Superchargers",
      "Strict Security Protocol with Dedicated Chauffeur Waiting Lounges"
    ],
    amenities: ["Golf Fairway Views", "Camellias Clubhouse", "Heated Olympic Pool", "Private Theatre", "Clean Air Filtration", "Squash & Bowling Alley", "Staff Quarters for 4"],
    agentId: "agent-kabir-krishnamurthy",
    agentName: "Kabir Krishnamurthy",
    agentRole: "Senior Partner & Tech Founders / Golf Estates Specialist",
    agentPhoto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    agentPhone: "+91 98200 48833",
    featured: true,
    hoaMonthly: 85000,
    propertyTaxAnnual: 320000
  },
  {
    id: "prop-assagao-portuguese-manor-goa",
    title: "The Assagao Portuguese Heritage Manor",
    tagline: "Restored 1890s Indo-Portuguese Estate with Private Coconut Groves in North Goa's Culinary Enclave",
    address: "Bouta Waddo, Assagao",
    neighborhood: "Assagao",
    city: "North Goa",
    price: 265000000,
    priceFormatted: "₹26,50,00,000",
    priceInr: 265000000,
    priceCr: "₹26.5 Cr",
    priceUsd: 3180000,
    reraPermitNumber: "Goa RERA: GOA-RERA-2024-118",
    reraNumber: "GOA-RERA-2024-118",
    vastuCompliance: "Traditional Vastu Courtyard • East Facing",
    status: "Exclusive",
    category: "Goa Coastal Villa",
    bedrooms: 6,
    bathrooms: 8,
    sqft: 7400,
    lotSize: "28,000 sqft Private Hillock Plot",
    yearBuilt: 2022,
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Nestled in the tranquil, bougainvillea-lined lanes of Assagao—often termed the 'Beverly Hills of Goa'—this impeccably restored 19th-century Indo-Portuguese manor marries antique Burma teak timbering and oyster-shell windowpanes with a modern 50-foot swimming pool and lush tropical gardens.",
    highlights: [
      "28,000 sq ft Private Forested Hillock with Coconut Palms & Mango Orchards",
      "Restored Original 1890s Indo-Portuguese Architecture & High Tiled Verandahs",
      "Independent 2-Bedroom Heritage Guest Cottage on Grounds",
      "50-Foot Natural Slate Swimming Pool with Alfresco Barbecue Pavilions",
      "8-Minute Drive to Vagator & Anjuna Beachfronts; Walking Distance to Fine Dining",
      "High Potential Rental Yield (₹1.8 Cr+ Net Annual Holiday Leasing)"
    ],
    amenities: ["Private Swimming Pool", "Heritage Guest Cottage", "Orchard Lawns", "Solar Power Backup", "High-Speed Fibre Optic", "Chauffeur & Staff Suites", "Gated Security"],
    agentId: "agent-rhea-coutinho",
    agentName: "Rhea Coutinho",
    agentRole: "Partner & Head of Goa & Alibaug Coastal Sanctuaries",
    agentPhoto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    agentPhone: "+91 98200 48844",
    featured: true,
    hoaMonthly: 25000,
    propertyTaxAnnual: 95000
  },
  {
    id: "prop-malabar-hill-queens-necklace-palace",
    title: "The Malabar Hill Sea-Facing Sky Palace",
    tagline: "Exclusive Full-Floor Residence Overlooking Marine Drive Queen's Necklace & Nariman Point",
    address: "Little Gibbs Road, Malabar Hill",
    neighborhood: "Malabar Hill",
    city: "Mumbai",
    price: 1100000000,
    priceFormatted: "₹110,00,00,000",
    priceInr: 1100000000,
    priceCr: "₹110.0 Cr",
    priceUsd: 13200000,
    reraPermitNumber: "MahaRERA: P51900004921",
    reraNumber: "P51900004921",
    vastuCompliance: "100% Vastu Certified • Ishanya Orientation",
    status: "Off-Market",
    category: "Sea-Facing Penthouse",
    bedrooms: 6,
    bathrooms: 8,
    sqft: 9800,
    lotSize: "Full Single-Plate Floor",
    yearBuilt: 2024,
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Perched atop Mumbai's most blue-blooded residential promontory, this full single-plate residence commands an uninterrupted, luminescent view of the iconic Queen's Necklace curve. Features private high-capacity automobile elevator directly to your foyer, Poggenpohl commercial kitchen, and bespoke soundproofed private screening room.",
    highlights: [
      "Mumbai's Most Exclusive Address with Queen's Necklace Marine Drive Views",
      "Full Floor Privacy with Dedicated Private Vehicle Elevator to Foyer",
      "100% Vastu Certified by Top Astrological & Architectural Scholars",
      "Double Master Suites with Handcrafted Italian Gessi Sanitaryware",
      "6 Reserved Basement Parking Spaces with Private Chauffeur Rest Lounge",
      "High Net Worth Discretion Handled Under Stringent Mutual Non-Disclosure"
    ],
    amenities: ["Marine Drive View", "Vehicle Elevator", "Private Screening Room", "Wine Sommelier Cellar", "24/7 Security Escort", "Staff Quarters for 5", "Valet Service"],
    agentId: "agent-ananya-roy-kapoor",
    agentName: "Ananya Roy-Kapoor",
    agentRole: "Senior Partner & Head of South Mumbai Penthouses",
    agentPhoto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    agentPhone: "+91 98200 48822",
    featured: false,
    hoaMonthly: 95000,
    propertyTaxAnnual: 680000
  },
  {
    id: "prop-sadashivnagar-private-sanctuary-bengaluru",
    title: "The Sadashivnagar Private Sanctuary",
    tagline: "Tropical Modern Architectural Manor in Bengaluru's Premier Legacy Enclave",
    address: "Sadashivnagar, Sankey Tank Vicinity",
    neighborhood: "Sadashivnagar",
    city: "Bengaluru",
    price: 380000000,
    priceFormatted: "₹38,00,00,000",
    priceInr: 380000000,
    priceCr: "₹38.0 Cr",
    priceUsd: 4560000,
    reraPermitNumber: "K-RERA: PRM/KA/RERA/1251/310/PR/240102",
    reraNumber: "PRM/KA/RERA/1251/310/PR/240102",
    vastuCompliance: "100% Vastu Compliant • North-East Facing",
    status: "For Sale",
    category: "Architectural Estate",
    bedrooms: 5,
    bathrooms: 6,
    sqft: 8200,
    lotSize: "12,000 sqft Prime Corner Plot",
    yearBuilt: 2023,
    heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Designed by an award-winning Singapore architectural studio, this tropical minimalist manor sits on a secluded corner plot in Sadashivnagar. Featuring floating basalt water bodies, double-height exposed concrete salons, geothermal solar net-zero energy systems, and an indoor heated lap pool.",
    highlights: [
      "Prime Corner Plot in Bengaluru's High-Status Heritage Enclave",
      "Net-Zero Solar Grid Integration with Rainwater Harvesting Micro-Reservoir",
      "Temperature-Controlled Indoor Lap Pool with Glass Skylight",
      "Japanese Zen Courtyard with Rare Bonsai & Cascading Waterfall Wall",
      "Home Office with Dedicated Leased-Line Gigabit Network & Conference Room"
    ],
    amenities: ["Indoor Lap Pool", "Zen Rock Garden", "Solar Net-Zero", "Home Automation", "Executive Boardroom", "Staff Quarters for 3", "Security Vault"],
    agentId: "agent-kabir-krishnamurthy",
    agentName: "Kabir Krishnamurthy",
    agentRole: "Senior Partner & Tech Founders / Golf Estates Specialist",
    agentPhoto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    agentPhone: "+91 98200 48833",
    featured: false,
    hoaMonthly: 30000,
    propertyTaxAnnual: 180000
  }
];

export const SERVICES: AgencyService[] = [
  {
    id: "service-nri-wealth",
    title: "NRI & OCI Investment Desk",
    subtitle: "End-to-End FEMA, NRE/NRO Banking & Clean Repatriation",
    description: "Guiding Non-Resident Indians across Silicon Valley, London, Dubai, and Singapore. We manage RBI regulatory clearances, Power of Attorney (PoA) registrations, Form 15CA/15CB tax clearances, and outward remittance structures with zero friction.",
    features: [
      "Complete FEMA & RBI compliance verification for overseas funds",
      "NRE/NRO banking setup with premier private wealth partners",
      "Section 195 Lower TDS certificate processing and capital repatriation",
      "Consular & Embassy Power of Attorney (PoA) authentication support"
    ],
    icon: "ShieldCheck"
  },
  {
    id: "service-vastu-due-diligence",
    title: "Vastu Shastra & Architectural Audit",
    subtitle: "Harmonizing Energy, Cardinal Orientations & Spatial Geometry",
    description: "Recognizing the paramount importance of Vastu in luxury Indian estates, our certified Vastu scholars conduct thorough evaluations of land topography, entryway azimuths, Brahmasthan balance, and master suite Ishanya alignments.",
    features: [
      "Scientific compass degree assessment and cardinal layout certification",
      "Non-structural architectural remedies for heritage estates and sky duplexes",
      "Detailed Vastu energy flow reports signed by senior practitioners",
      "Customized modifications coordinated with interior design teams"
    ],
    icon: "Compass"
  },
  {
    id: "service-off-market-mandates",
    title: "Discreet Off-Market Allocations",
    subtitle: "Confidential Access to Lutyens' Bungalows & South Mumbai Penthouses",
    description: "Over 54% of our marquee transactions take place silently without public marketing. We represent old-economy industrial families, prominent founders, and public figures under ironclad non-disclosure agreements.",
    features: [
      "Exclusive pocket listings in Lutyens' Delhi, Malabar Hill & Assagao",
      "Silent seller introductions with verified financial qualification",
      "Private family office trust and corporate LLP structuring",
      "Direct developer promoter-level allocations before public launch"
    ],
    icon: "Lock"
  },
  {
    id: "service-capital-gains-54f",
    title: "Section 54 Capital Gains Advisory",
    subtitle: "Strategic Tax Optimization & Title Encumbrance Certification",
    description: "Navigating Section 54 and 54F capital gains reinvestment into residential property. Our legal counsel conducts 30-year title searches, RERA compliance checks, and municipal sanction verifications with senior High Court advocates.",
    features: [
      "30-Year comprehensive title search and non-encumbrance certificates",
      "Capital gains tax exemption structuring under Section 54 / 54F / 54EC",
      "State stamp duty, registration fee, and metro cess calculation",
      "RERA project escrow account audit for off-plan acquisitions"
    ],
    icon: "BarChart3"
  }
];

export const NEIGHBORHOODS: NeighborhoodGuide[] = [
  {
    id: "neigh-worli-sea-face",
    name: "Worli & Malabar Hill, Mumbai",
    tagline: "India's Billionaires' Bay: Sea-Facing Sky Mansions & Promenade Grandeur",
    averagePrice: "₹1,25,000 / sq ft",
    priceGrowth: "+16.8% YoY",
    vibe: "Arabian Sea horizons, Bandra-Worli Sea Link views, Michelin gastronomy, and old-money discretion.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    featuredEstatesCount: 19
  },
  {
    id: "neigh-lutyens-delhi",
    name: "Lutyens' Delhi (LBZ)",
    tagline: "The Power Epicenter: Sprawling Colonial Bungalows on Tree-Lined Avenues",
    averagePrice: "₹140 Cr - ₹250 Cr",
    priceGrowth: "+14.2% YoY",
    vibe: "Ancient Neem canopies, diplomatic security cordons, manicured lawns, and timeless prestige.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    featuredEstatesCount: 12
  },
  {
    id: "neigh-golf-course-road",
    name: "Golf Course Road, Gurugram",
    tagline: "The Modern Metropolis: The Camellias, Magnolias & Championship Greens",
    averagePrice: "₹55,000 / sq ft",
    priceGrowth: "+24.5% YoY",
    vibe: "Championship golf fairways, global corporate headquarters, and ultra-high-spec luxury clubhouses.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=80",
    featuredEstatesCount: 16
  },
  {
    id: "neigh-assagao-goa",
    name: "Assagao & Anjuna, North Goa",
    tagline: "The Coastal Riviera: Restored Indo-Portuguese Manors & Tropical Estates",
    averagePrice: "₹25 Cr - ₹45 Cr",
    priceGrowth: "+28.0% YoY",
    vibe: "Bougainvillea-draped heritage lanes, artisanal cafes, tranquil forest hillocks, and ocean breezes.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    featuredEstatesCount: 14
  }
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: "rev-1",
    clientName: "Sunil & Radhika Singhal",
    clientTitle: "Promoter & Chairman, Heavy Engineering Conglomerate",
    propertyTitle: "The Worli Sea Face Sky Duplex",
    propertyLocation: "Worli Sea Face, Mumbai",
    dealValue: "₹85.0 Cr",
    quote: "Ananya Roy-Kapoor and Aura Luxury Estates handled our multi-generational acquisition with exceptional poise. The Vastu compliance verification was rigorous, and the entire transaction remained strictly off-market until registration.",
    rating: 5,
    year: "2025",
    agentName: "Ananya Roy-Kapoor"
  },
  {
    id: "rev-2",
    clientName: "Pranav & Meera Bansal",
    clientTitle: "Co-Founder, B2B SaaS Unicorn",
    propertyTitle: "The Camellias Signature Golf Penthouse",
    propertyLocation: "Golf Course Road, Gurugram",
    dealValue: "₹62.0 Cr",
    quote: "Kabir Krishnamurthy's knowledge of the Camellias layout and Section 54 tax reinvestment saved us immense capital. He understands the speed and precision that technology entrepreneurs expect.",
    rating: 5,
    year: "2024",
    agentName: "Kabir Krishnamurthy"
  },
  {
    id: "rev-3",
    clientName: "Rajeev Mehta, CFA",
    clientTitle: "Managing Director, Silicon Valley Venture Fund (NRI)",
    propertyTitle: "The Assagao Portuguese Heritage Manor",
    propertyLocation: "Assagao, North Goa",
    dealValue: "₹26.5 Cr",
    quote: "As an NRI based in San Francisco, buying heritage property in Goa seemed daunting. Rhea Coutinho and the Aura legal desk oversaw the 30-year title audit, FEMA documentation, and local permissions effortlessly.",
    rating: 5,
    year: "2025",
    agentName: "Rhea Coutinho"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Buying",
    question: "Can Non-Resident Indians (NRIs) and OCIs purchase luxury residential property in India?",
    answer: "Yes. Under the Foreign Exchange Management Act (FEMA) and Reserve Bank of India (RBI) regulations, NRIs and Overseas Citizens of India (OCIs) can freely acquire residential and commercial properties in India with no prior approvals needed. Funds can be remitted through normal banking channels from overseas accounts or drawn from NRE/FCNR/NRO accounts."
  },
  {
    id: "faq-2",
    category: "Valuation",
    question: "How does Aura ensure 100% Vastu compliance for luxury residences?",
    answer: "Every featured property undergoes a scientific orientation audit led by certified Vastu scholars. We evaluate cardinal entryway alignments (Ishanya / North-East focus), Brahmasthan central open layout, kitchen placement (Agni / South-East), and master bedroom stability (Nairutya / South-West) to provide certified Vastu compliance reports."
  },
  {
    id: "faq-3",
    category: "Off-Market Advisory",
    question: "How are confidential off-market transactions conducted in India?",
    answer: "Over 54% of top-tier Indian acquisitions—particularly in Lutyens' Delhi and South Mumbai—take place off-market. We vet both buyer and seller credentials, execute mutual Non-Disclosure Agreements (NDAs), and coordinate private escrow accounts with top national banks to safeguard total privacy."
  },
  {
    id: "faq-4",
    category: "Selling",
    question: "What are the stamp duty, registration charges, and Section 54 capital gains rules?",
    answer: "Stamp duty typically ranges from 5% to 7% depending on the state (e.g., 5-6% in Maharashtra, 4-6% in Delhi, 5-7% in Haryana) plus nominal registration fees. Under Section 54 / 54F of the Indian Income Tax Act, long-term capital gains tax can be legally exempted by reinvesting the proceeds into eligible residential property within statutory timelines."
  },
  {
    id: "faq-5",
    category: "Buying",
    question: "Can I personalize or white-label this website for my real estate brokerage firm?",
    answer: "Absolutely! This platform is architected as a turnkey, ultra-luxury demo. It can be immediately customized with your agency branding, logo, local RERA registration numbers, agent team profiles, and curated property portfolio across any Indian city within 24 to 48 hours."
  }
];

export const REVIEWS = CLIENT_REVIEWS;
