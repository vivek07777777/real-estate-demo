import {
  Agent,
  Property,
  AgencyService,
  ClientReview,
  NeighborhoodGuide,
  FAQItem,
} from "./types";

export const AGENCY_INFO = {
  name: "Real Estate & PARTNERS",
  tagline: "Private Real Estate Advisory & Bespoke Acquisitions",
  phone: "+1 (310) 892-4400",
  email: "privateclient@aurarealty.com",
  offices: [
    {
      city: "Beverly Hills",
      address: "440 N Rodeo Drive, Penthouse 4, Beverly Hills, CA 90210",
    },
    {
      city: "Manhattan",
      address: "767 Fifth Avenue, 28th Floor, New York, NY 10153",
    },
    {
      city: "Miami",
      address: "1111 Lincoln Road, Suite 700, Miami Beach, FL 33139",
    },
  ],
  stats: {
    lifetimeVolume: "$2.8B+",
    avgDaysOnMarket: "19 Days",
    listToSaleRatio: "99.2%",
    privateOffMarketDeals: "42%",
    clientSatisfaction: "99.8%",
  },
};

export const AGENTS: Agent[] = [
  {
    id: "agent-julian-vance",
    name: "Julian Vance",
    role: "Managing Principal & Luxury Estates Director",
    licenseNumber: "DRE #01948201",
    experienceYears: 18,
    totalVolume: "$850M+",
    activeListingsCount: 8,
    bio: "Ranked among the top 10 luxury estate advisors globally. Julian specializes in ultra-prime estates, architecturally significant properties, and private off-market transactions across Beverly Hills, Bel Air, and Malibu.",
    specialties: [
      "Architectural Estates",
      "Off-Market Pocket Listings",
      "High-Net-Worth Acquisitions",
      "Private Negotiation",
    ],
    languages: ["English", "French"],
    awards: [
      "WSJ Real Trends Top 25 Nationally (2022-2025)",
      "Variety Showbiz Real Estate Elite",
      "President's Pinnacle Trophy",
    ],
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    phone: "+1 (310) 892-4412",
    email: "j.vance@aurarealty.com",
    instagram: "@julianvance.estates",
    linkedin: "julian-vance-realty",
    rating: 5.0,
    reviewCount: 48,
  },
  {
    id: "agent-elena-rostova",
    name: "Elena Rostova",
    role: "Partner & Head of Penthouse & High-Rise Division",
    licenseNumber: "NY-RE #4928109",
    experienceYears: 14,
    totalVolume: "$620M+",
    activeListingsCount: 6,
    bio: "Elena oversees Aura's Manhattan and coastal high-rise portfolios. With a background in corporate finance and architectural design, she brings unmatched analytical valuation rigor to trophy asset acquisitions.",
    specialties: [
      "Trophy Penthouses",
      "New Development Advisory",
      "International Wealth Portfolios",
      "1031 Exchange",
    ],
    languages: ["English", "Italian", "Russian"],
    awards: [
      "Manhattan Luxury Broker of the Year 2024",
      "Forbes 40 Under 40 in Real Estate",
    ],
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    phone: "+1 (212) 655-9018",
    email: "e.rostova@aurarealty.com",
    instagram: "@elena.rostova.realty",
    linkedin: "elena-rostova-estates",
    rating: 4.9,
    reviewCount: 39,
  },
  {
    id: "agent-marcus-sterling",
    name: "Marcus Sterling",
    role: "Senior Partner & Waterfront Specialist",
    licenseNumber: "FL-BK #3299104",
    experienceYears: 16,
    totalVolume: "$710M+",
    activeListingsCount: 7,
    bio: "A trusted advisor to institutional investors, venture founders, and sports figures. Marcus commands unmatched market intelligence in coastal waterfront estates, deepwater dockage, and island sanctuaries.",
    specialties: [
      "Oceanfront Compounds",
      "Equestrian & Acreage",
      "Yacht Dockage Estates",
      "Custom Build Representation",
    ],
    languages: ["English", "Spanish"],
    awards: [
      "South Florida Platinum Producer Award",
      "Top Waterfront Producer (2021-2025)",
    ],
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    phone: "+1 (305) 441-8930",
    email: "m.sterling@aurarealty.com",
    instagram: "@marcussterling.realestate",
    linkedin: "marcus-sterling-realty",
    rating: 5.0,
    reviewCount: 42,
  },
  {
    id: "agent-charlotte-dupre",
    name: "Charlotte Dupré",
    role: "Private Client Advisor & Design Consultant",
    licenseNumber: "DRE #02119402",
    experienceYears: 10,
    totalVolume: "$390M+",
    activeListingsCount: 5,
    bio: "Charlotte seamlessly pairs world-class real estate advisory with architectural staging vision. Her curated marketing strategies deliver record price-per-square-foot closings for modern architectural icons.",
    specialties: [
      "Mid-Century Moderns",
      "Designer Staging Strategy",
      "First-Time Trophy Buyers",
      "Discrete Acquisitions",
    ],
    languages: ["English", "French", "German"],
    awards: [
      "Rising Star Vanguard Award",
      "Architectural Digest Featured Agent",
    ],
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    phone: "+1 (310) 892-4435",
    email: "c.dupre@aurarealty.com",
    instagram: "@charlotte.dupre.homes",
    linkedin: "charlotte-dupre-advisory",
    rating: 4.9,
    reviewCount: 31,
  },
];

export const PROPERTIES: Property[] = [
  {
    id: "prop-the-bel-air-promontory",
    title: "The Bel Air Promontory Estate",
    tagline:
      "Unrivaled Jetliner Views Across the Los Angeles Basin to the Pacific Ocean",
    address: "10948 Bellagio Road",
    neighborhood: "Bel Air",
    city: "Los Angeles, CA",
    price: 34500000,
    priceFormatted: "$34,500,000",
    status: "Exclusive",
    category: "Architectural Estate",
    bedrooms: 7,
    bathrooms: 11,
    sqft: 14200,
    lotSize: "1.85 Acres",
    yearBuilt: 2023,
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Perched majestically on an ultra-private promontory behind double security gates, this architectural masterpiece represents the pinnacle of California modernism. Floor-to-ceiling automated glass walls disappear to blend indoor living with an 85-foot cantilevered infinity pool, zero-edge spa, and sweeping panoramic views from downtown to Catalina Island.",
    highlights: [
      "85ft Cantilevered Zero-Edge Infinity Pool",
      "1,200-Bottle Temperature-Controlled Wine Gallery",
      "18-Seat Dolby Atmos Cinema with Acoustic Paneling",
      "Primary Suite with Dual Spa Baths & Couture Dressing Rooms",
      "Subterranean 8-Car Gallery with Turntable",
    ],
    amenities: [
      "Infinity Pool",
      "Dolby Cinema",
      "Wine Cellar",
      "Wellness Spa & Sauna",
      "Smart Home Automation",
      "Private Security Gate",
      "Elevator",
      "Commercial Chef Kitchen",
    ],
    agentId: "agent-julian-vance",
    agentName: "Julian Vance",
    agentRole: "Managing Principal & Luxury Estates Director",
    agentPhoto:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    agentPhone: "+1 (310) 892-4412",
    featured: true,
    hoaMonthly: 1250,
    propertyTaxAnnual: 345000,
  },
  {
    id: "prop-the-tribeca-crown-penthouse",
    title: "The Tribeca Crown Duplex",
    tagline:
      "Tri-Level Glass Penthouse with 2,400 Sq Ft Private Landscaped Sky Terrace",
    address: "70 Vestry Street, Penthouse South",
    neighborhood: "Tribeca",
    city: "New York, NY",
    price: 28900000,
    priceFormatted: "$28,900,000",
    status: "For Sale",
    category: "Luxury Penthouse",
    bedrooms: 5,
    bathrooms: 6,
    sqft: 7850,
    lotSize: "2,400 sqft Terrace",
    yearBuilt: 2021,
    heroImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Commanding protected Hudson River vistas and the glittering downtown skyline, this crown jewel penthouse is designed by master architect Robert A.M. Stern. Featuring custom French walnut millwork, Calacatta marble fireplaces, a private elevator foyer, and a sprawling rooftop terrace with an outdoor kitchen and plunge pool.",
    highlights: [
      "Private Keyed Elevator Opening to Double-Height Foyer",
      "Hudson River Sunset Views from Every Principal Room",
      "Private Rooftop Heated Hydrotherapy Plunge Pool",
      "Full Service Doorman, Valet & Automated Parking Garage",
      "Custom Boffi Kitchen with Gaggenau 400 Series Suite",
    ],
    amenities: [
      "Private Roof Terrace",
      "Plunge Pool",
      "24/7 Concierge",
      "Valet Parking",
      "Fitness Center",
      "Spa & Hamam",
      "Wine Storage",
      "Fireplace",
    ],
    agentId: "agent-elena-rostova",
    agentName: "Elena Rostova",
    agentRole: "Partner & Head of Penthouse Division",
    agentPhoto:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    agentPhone: "+1 (212) 655-9018",
    featured: true,
    hoaMonthly: 6400,
    propertyTaxAnnual: 289000,
  },
  {
    id: "prop-palmetto-waterfront-sanctuary",
    title: "The Biscayne Bay Sanctuary",
    tagline:
      "Gated Modern Waterfront Oasis with 140 Feet of Prime Deepwater Dockage",
    address: "4540 North Bay Road",
    neighborhood: "Miami Beach",
    city: "Miami Beach, FL",
    price: 24750000,
    priceFormatted: "$24,750,000",
    status: "For Sale",
    category: "Waterfront",
    bedrooms: 6,
    bathrooms: 8,
    sqft: 9600,
    lotSize: "0.62 Acres",
    yearBuilt: 2022,
    heroImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Nestled along the prestigious North Bay Road, this tropical modern sanctuary blends lush organic landscaping with crisp architectural lines. Engineered to accommodate up to a 120-foot mega yacht with no fixed bridges to ocean access, accompanied by a resort-style saltwater pool, cabana kitchen, and private rooftop lounge.",
    highlights: [
      "140ft Deepwater Dockage Ready for Mega-Yacht",
      "Open-Concept Indoor/Outdoor Living with Pocketing Glass",
      "Covered Summer Kitchen & Teppanyaki Dining Pavilion",
      "Full Crestron Home Automation & Biometric Security",
      "Guest Villa with Independent Living & Kitchen Suite",
    ],
    amenities: [
      "Deepwater Yacht Dock",
      "Saltwater Pool",
      "Cabana & BBQ",
      "Guest House",
      "Rooftop Terrace",
      "Generator",
      "Security Cameras",
    ],
    agentId: "agent-marcus-sterling",
    agentName: "Marcus Sterling",
    agentRole: "Senior Partner & Waterfront Specialist",
    agentPhoto:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    agentPhone: "+1 (305) 441-8930",
    featured: true,
    hoaMonthly: 850,
    propertyTaxAnnual: 247000,
  },
  {
    id: "prop-the-modernist-glass-pavilion",
    title: "The Trousdale Glass Pavilion",
    tagline:
      "Restored Architectural Icon by Mid-Century Master with Lush Zen Gardens",
    address: "1420 Loma Vista Drive",
    neighborhood: "Trousdale Estates",
    city: "Beverly Hills, CA",
    price: 18200000,
    priceFormatted: "$18,200,000",
    status: "Off-Market",
    category: "Modern Villa",
    bedrooms: 4,
    bathrooms: 6,
    sqft: 6400,
    lotSize: "0.78 Acres",
    yearBuilt: 2020,
    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "An extraordinary fusion of classic mid-century proportions and 21st-century luxury in the coveted Trousdale Estates enclave. Featuring terrazzo flooring, rich walnut slatted walls, open courtyards with ancient olive trees, and an artist's studio overlooking a black quartz swimming pool.",
    highlights: [
      "Seamless Indoor/Outdoor Zen Courtyard Architecture",
      "Black Quartz Mirror Pool with Sunbathing Deck",
      "Custom Poliform Italian Kitchen with Hidden Prep Pantry",
      "Discreet Off-Market Confidentiality Agreement Applicable",
      "Motor Court for 6 Vehicles with Gated Porte-Cochère",
    ],
    amenities: [
      "Mirror Pool",
      "Zen Gardens",
      "Smart Audio System",
      "Private Gated Entrance",
      "Outdoor Shower",
      "Wine Display",
    ],
    agentId: "agent-charlotte-dupre",
    agentName: "Charlotte Dupré",
    agentRole: "Private Client Advisor & Design Consultant",
    agentPhoto:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    agentPhone: "+1 (310) 892-4435",
    featured: false,
    hoaMonthly: 450,
    propertyTaxAnnual: 182000,
  },
  {
    id: "prop-aspen-alpine-sanctuary",
    title: "Red Mountain Alpine Retreat",
    tagline:
      "Ski-In/Ski-Out Mountain Masterpiece Framed by Soaring Douglas Fir & Quartzite",
    address: "210 Willoughby Way",
    neighborhood: "Red Mountain",
    city: "Aspen, CO",
    price: 31000000,
    priceFormatted: "$31,000,000",
    status: "For Sale",
    category: "Architectural Estate",
    bedrooms: 6,
    bathrooms: 9,
    sqft: 11200,
    lotSize: "2.4 Acres",
    yearBuilt: 2024,
    heroImage:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Commanding sweeping unobstructed views of Aspen Mountain and the Roaring Fork Valley, this landmark estate combines organic materials with cutting-edge engineering. Includes a heated ski locker room, oxygen-enriched master suite, indoor/outdoor heated pool, and private helipad access nearby.",
    highlights: [
      "Direct Ski-In / Ski-Out Access to World-Class Slopes",
      "Oxygen-Enriched Primary Suite for Altitude Comfort",
      "Heated Driveway, Stone Terraces & Mountain-View Firepits",
      "Custom Bouldering Wall & Wellness Cryotherapy Room",
    ],
    amenities: [
      "Heated Indoor/Outdoor Pool",
      "Ski Room",
      "Oxygen System",
      "Wellness Spa",
      "Wine Vault",
      "Heated Motor Court",
    ],
    agentId: "agent-julian-vance",
    agentName: "Julian Vance",
    agentRole: "Managing Principal & Luxury Estates Director",
    agentPhoto:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    agentPhone: "+1 (310) 892-4412",
    featured: false,
    hoaMonthly: 980,
    propertyTaxAnnual: 310000,
  },
  {
    id: "prop-palm-beach-ocean-manor",
    title: "The Ocean Boulevard Palladian Villa",
    tagline:
      "Iconic Palm Beach Oceanfront Estate with Private Deeded Beach Access",
    address: "980 S Ocean Boulevard",
    neighborhood: "Estate Section",
    city: "Palm Beach, FL",
    price: 46000000,
    priceFormatted: "$46,000,000",
    status: "Under Contract",
    category: "Historic Manor",
    bedrooms: 8,
    bathrooms: 12,
    sqft: 16800,
    lotSize: "1.4 Acres",
    yearBuilt: 2021,
    heroImage:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A breathtaking tribute to classical Mediterranean architecture, meticulously reimagined for modern grand entertaining. Sits directly across from deeded ocean frontage, featuring hand-carved coral stone loggias, reflection fountains, and private tennis court.",
    highlights: [
      "Direct Private Deeded Atlantic Ocean Beach Access",
      "Championship Regulation Har-Tru Tennis Court",
      "Formal Ballroom & Grand Double Curved Staircase",
      "Independent 2-Bedroom Guest Villa & Staff Quarters",
    ],
    amenities: [
      "Tennis Court",
      "Deeded Beach",
      "Ballroom",
      "Staff Quarters",
      "Loggia Dining",
      "Reflecting Pools",
    ],
    agentId: "agent-marcus-sterling",
    agentName: "Marcus Sterling",
    agentRole: "Senior Partner & Waterfront Specialist",
    agentPhoto:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    agentPhone: "+1 (305) 441-8930",
    featured: false,
    hoaMonthly: 0,
    propertyTaxAnnual: 460000,
  },
];

export const SERVICES: AgencyService[] = [
  {
    id: "service-seller-representation",
    title: "Strategic Seller Representation",
    subtitle: "Maximizing Trophy Asset Valuation with Global Discretion",
    description:
      "We deploy bespoke cinematic production, targeted international private wealth syndication, and disciplined pricing strategies that consistently set record neighborhood comps.",
    features: [
      "Architectural staging & high-fidelity 4K cinematic film production",
      "Private syndication across Financial Times, WSJ, and Robb Report",
      "Confidential NDA-guarded buyer pre-qualification",
      "Uncompromising contract negotiation protecting your equity",
    ],
    icon: "TrendingUp",
  },
  {
    id: "service-buyer-advisory",
    title: "Private Buyer & Investor Concierge",
    subtitle: "Exclusive Access to Off-Market Trophy Properties",
    description:
      "Over 40% of our transactions never appear on public MLS. We leverage deep personal relationships with family offices and estate owners to secure silent properties before they reach the market.",
    features: [
      "Access to private pocket listings and unlisted estates",
      "Neighborhood micro-analytics & historical yield projections",
      "Bespoke private jet/chauffeur viewing itineraries",
      "Full confidentiality & anonymous entity structuring assistance",
    ],
    icon: "Compass",
  },
  {
    id: "service-property-valuation",
    title: "Comprehensive Market Valuation (CMA)",
    subtitle: "Data-Driven Intelligence Backed by Real-Time Closing Metrics",
    description:
      "Our certified valuation specialists deliver institutional-grade market assessments factoring in architectural lineage, irreplaceable views, custom finishes, and macroeconomic trends.",
    features: [
      "Comparative price-per-square-foot micro analysis",
      "Appraisal readiness & property enhancement ROI mapping",
      "Tax assessment review & capital gains planning insights",
      "Same-day executive summary delivery",
    ],
    icon: "BarChart3",
  },
  {
    id: "service-development-advisory",
    title: "New Development & Design Consulting",
    subtitle: "From Ground-Up Architectural Vision to Sold-Out Sellout",
    description:
      "We partner with visionary developers and architects from pre-construction floor plate optimization to final retail positioning and international launch campaigns.",
    features: [
      "Floor plan optimization & luxury buyer demographic targeting",
      "Finishes, material palette & amenities programming",
      "Comprehensive multi-channel global marketing roadmaps",
      "On-site sales leadership & private VIP preview galas",
    ],
    icon: "Layers",
  },
];

export const NEIGHBORHOODS: NeighborhoodGuide[] = [
  {
    id: "neigh-beverly-hills",
    name: "Beverly Hills & Bel Air",
    tagline: "The Golden Triangle of Global Luxury & Legacy Estates",
    averagePrice: "$12.4M",
    priceGrowth: "+8.7% YoY",
    vibe: "Gated compounds, legendary estates, and Michelin dining.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80",
    featuredEstatesCount: 14,
  },
  {
    id: "neigh-tribeca-soho",
    name: "Tribeca & Central Park",
    tagline: "Architectural Cast-Iron Lofts & Sky-High Glass Penthouses",
    averagePrice: "$9.8M",
    priceGrowth: "+6.4% YoY",
    vibe: "Cobblestone streets, bespoke art galleries, and panoramic city skylines.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    featuredEstatesCount: 11,
  },
  {
    id: "neigh-miami-beach",
    name: "Miami Beach & Star Island",
    tagline: "Tropical Modern Oceanfront & Deepwater Boating Enclaves",
    averagePrice: "$14.2M",
    priceGrowth: "+11.2% YoY",
    vibe: "Yacht culture, palm-lined avenues, and year-round coastal serenity.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80",
    featuredEstatesCount: 16,
  },
  {
    id: "neigh-aspen-valley",
    name: "Aspen & Red Mountain",
    tagline: "Alpine Solitude & World-Class Skiing for the Global Elite",
    averagePrice: "$18.5M",
    priceGrowth: "+9.1% YoY",
    vibe: "Pristine mountain peaks, private clubs, and cultural festivals.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    featuredEstatesCount: 9,
  },
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: "rev-1",
    clientName: "David & Vivienne K.",
    clientTitle: "Tech Venture Capital Partners",
    propertyTitle: "The Bel Air Promontory Estate",
    propertyLocation: "Bel Air, Los Angeles",
    dealValue: "$34.5M",
    quote:
      "Julian Vance and the Aura team operate at a tier of sophistication unmatched in this industry. Their discretion during our off-market acquisition was flawless, and Julian negotiated terms that protected our family’s privacy completely.",
    rating: 5,
    year: "2025",
    agentName: "Julian Vance",
  },
  {
    id: "rev-2",
    clientName: "Siddharth M.",
    clientTitle: "Managing Director, Global Macro Fund",
    propertyTitle: "The Tribeca Duplex Penthouse",
    propertyLocation: "Tribeca, New York",
    dealValue: "$28.9M",
    quote:
      "Elena Rostova's analytical depth and market timing were surgical. She identified an unlisted penthouse opportunity 3 weeks before it went public, saving us significant capital while securing the premier residence in the building.",
    rating: 5,
    year: "2024",
    agentName: "Elena Rostova",
  },
  {
    id: "rev-3",
    clientName: "Genevieve L.",
    clientTitle: "Contemporary Art Collector & Philanthropist",
    propertyTitle: "Biscayne Bay Ocean Sanctuary",
    propertyLocation: "Miami Beach, FL",
    dealValue: "$24.75M",
    quote:
      "Marcus Sterling is the only waterfront agent I trust with our acquisitions. His intimate knowledge of dockage depths, coastal building codes, and silent seller motivations made a complex multi-million dollar closing effortless.",
    rating: 5,
    year: "2025",
    agentName: "Marcus Sterling",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Off-Market Advisory",
    question:
      "How do your agents secure confidential off-market pocket listings?",
    answer:
      "Over 40% of premier luxury transactions occur without public MLS marketing. Through our private client registry, direct relationships with family offices, estate attorneys, and high-profile owners, we arrange discrete off-market introductions protected by mutual Non-Disclosure Agreements (NDAs).",
  },
  {
    id: "faq-2",
    category: "Selling",
    question:
      "What is your strategy for marketing multi-million dollar estates?",
    answer:
      "Every property receives a customized cinematic production suite, targeted digital placement in publications like The Wall Street Journal, Financial Times, and Robb Report, coupled with direct private invitations sent to our curated global network of qualified ultra-high-net-worth buyers.",
  },
  {
    id: "faq-3",
    category: "Valuation",
    question: "How is a custom Comparative Market Analysis (CMA) prepared?",
    answer:
      "Unlike algorithmic automated estimators that miss custom finishes, our senior agents evaluate micro-neighborhood comps, architectural pedigree, view corridors, historical absorption rates, and recent off-market closings to formulate an exact strategic valuation.",
  },
  {
    id: "faq-4",
    category: "Buying",
    question:
      "Can you assist international buyers with cross-border tax & legal structuring?",
    answer:
      "Yes. We frequently collaborate with top tier international tax attorneys, wealth managers, and escrow specialists to structure compliant purchases through LLCs, trusts, and foreign investment entities with complete confidentiality.",
  },
  {
    id: "faq-5",
    category: "Buying",
    question: "How do we schedule a private, confidential estate viewing?",
    answer:
      "You can book directly through our online private appointment portal or contact the designated listing agent via phone or encrypted WhatsApp. We coordinate private chauffeur arrivals, security protocol clearance, and private agent-accompanied tours.",
  },
];
