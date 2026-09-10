import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROPERTIES, AGENTS } from '../data';
import PropertyCard from '../components/PropertyCard';
import {
  Bed,
  Bath,
  Maximize2,
  Calendar,
  Compass,
  ShieldCheck,
  MapPin,
  Share2,
  Phone,
  Mail,
  MessageSquare,
  ArrowLeft,
  CheckCircle2,
  Calculator,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Building2
} from 'lucide-react';

interface PropertyDetailPageProps {
  currency: 'INR' | 'USD';
  onOpenBookingModal?: (propertyTitle?: string, agentName?: string) => void;
}

export default function PropertyDetailPage({
  currency,
  onOpenBookingModal
}: PropertyDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find target property
  const property = PROPERTIES.find((p) => p.id === id);

  // Fallback if property not found
  if (!property) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center space-y-6">
        <Building2 className="w-12 h-12 text-[#8C6A34] mx-auto" />
        <h1 className="font-serif text-3xl sm:text-4xl text-[#1D1B18] font-light">
          Residence Dossier Not Found
        </h1>
        <p className="text-xs sm:text-sm text-[#6F6A61] max-w-md mx-auto">
          The requested luxury listing may have been placed under off-market contract or transferred.
        </p>
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D1B18] text-white text-xs uppercase tracking-widest font-medium rounded-xs hover:bg-[#8C6A34] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Listings</span>
        </Link>
      </div>
    );
  }

  // Find assigned agent
  const agent = AGENTS.find((a) => a.id === property.agentId) || AGENTS[0];

  // Gallery state
  const allImages = [property.heroImage, ...(property.galleryImages || [])];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Interactive EMI Calculator State
  const propertyPriceInr = property.priceInr || property.price;
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(25);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(20);

  // Financial Math
  const loanPrincipal = propertyPriceInr * (1 - downPaymentPercent / 100);
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = loanTenureYears * 12;
  const monthlyEmi =
    (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);
  const stampDutyEstimate = propertyPriceInr * 0.06; // 6% average state stamp duty

  // Similar properties
  const relatedProperties = PROPERTIES.filter((p) => p.id !== property.id).slice(0, 3);

  // Form submission feedback
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  const formatPrice = () => {
    if (currency === 'USD' && property.priceUsd) {
      return `$${(property.priceUsd / 1000000).toFixed(1)}M USD`;
    }
    return property.priceCr || property.priceFormatted;
  };

  return (
    <div className="pt-24 sm:pt-28 pb-24 space-y-16">
      
      {/* 1. TOP BREADCRUMBS & TITLE BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EAE4DA]">
          
          {/* Breadcrumbs */}
          <div className="space-y-1.5">
            <nav className="flex items-center gap-2 text-xs text-[#8E877C] font-light">
              <Link to="/" className="hover:text-[#1D1B18] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/properties" className="hover:text-[#1D1B18] transition-colors">
                Properties
              </Link>
              <span>/</span>
              <span className="text-[#1D1B18] font-medium truncate max-w-xs sm:max-w-md">
                {property.title}
              </span>
            </nav>

            <h1 className="font-serif text-2xl sm:text-4xl text-[#1D1B18] font-normal tracking-tight">
              {property.title}
            </h1>

            <p className="text-xs sm:text-sm text-[#6F6A61] flex items-center gap-2 font-light">
              <MapPin className="w-3.5 h-3.5 text-[#8C6A34] shrink-0" />
              <span>
                {property.address}, {property.neighborhood}, {property.city}
              </span>
            </p>
          </div>

          {/* Action Row: Price Badge & Share */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            <div className="text-left md:text-right">
              <span className="text-[10px] uppercase tracking-wider text-[#8C6A34] font-semibold block">
                Acquisition Price
              </span>
              <div className="font-serif text-3xl sm:text-4xl font-medium text-[#1D1B18]">
                {formatPrice()}
              </div>
            </div>

            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert('Property link copied to clipboard.');
              }}
              className="p-3 rounded-xs border border-[#EAE4DA] hover:border-[#B89358] bg-white text-[#4A453E] hover:text-[#1D1B18] transition-colors cursor-pointer"
              title="Share Residence Link"
              aria-label="Share property link"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* 2. HIGH FIDELITY IMAGE GALLERY / CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {/* Main Stage Viewport */}
          <div className="relative aspect-[16/9] max-h-[620px] w-full rounded-sm overflow-hidden bg-[#1D1B18] shadow-md">
            <img
              src={allImages[activeImageIndex]}
              alt={`${property.title} - View ${activeImageIndex + 1}`}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />

            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveImageIndex((activeImageIndex - 1 + allImages.length) % allImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => setActiveImageIndex((activeImageIndex + 1) % allImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Bottom Overlay Info Tag */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="px-3 py-1 rounded-xs bg-[#1D1B18]/90 text-white text-xs backdrop-blur-md font-mono">
                {activeImageIndex + 1} / {allImages.length} Photographs
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xs bg-[#B89358] text-white text-xs font-semibold uppercase tracking-wider">
                  {property.status}
                </span>
                {property.reraNumber && (
                  <span className="hidden sm:inline-block px-3 py-1 rounded-xs bg-white/95 text-[#1D1B18] text-xs font-medium backdrop-blur-md">
                    RERA: {property.reraNumber}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Thumbnail Track */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative shrink-0 w-24 sm:w-32 aspect-[16/10] rounded-xs overflow-hidden border transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? 'border-[#B89358] ring-2 ring-[#B89358]/40 scale-[0.98]'
                    : 'border-[#EAE4DA] opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. KEY SPECS ROW STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#EAE4DA] rounded-sm p-6 sm:p-8 shadow-xs grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE4DA]">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#8E877C] font-semibold flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-[#8C6A34]" /> Bedrooms
            </span>
            <div className="font-serif text-2xl text-[#1D1B18] font-medium">{property.bedrooms} Suites</div>
          </div>

          <div className="space-y-1 sm:pl-6 pt-4 sm:pt-0">
            <span className="text-[10px] uppercase tracking-wider text-[#8E877C] font-semibold flex items-center gap-1.5">
              <Bath className="w-3.5 h-3.5 text-[#8C6A34]" /> Bathrooms
            </span>
            <div className="font-serif text-2xl text-[#1D1B18] font-medium">{property.bathrooms} Baths</div>
          </div>

          <div className="space-y-1 sm:pl-6 pt-4 sm:pt-0">
            <span className="text-[10px] uppercase tracking-wider text-[#8E877C] font-semibold flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#8C6A34]" /> Built-Up Area
            </span>
            <div className="font-serif text-2xl text-[#1D1B18] font-medium">{property.sqft.toLocaleString()} Sq Ft</div>
          </div>

          <div className="space-y-1 sm:pl-6 pt-4 sm:pt-0">
            <span className="text-[10px] uppercase tracking-wider text-[#8E877C] font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#8C6A34]" /> Built / Handover
            </span>
            <div className="font-serif text-2xl text-[#1D1B18] font-medium">{property.yearBuilt}</div>
          </div>

          <div className="space-y-1 sm:pl-6 pt-4 sm:pt-0">
            <span className="text-[10px] uppercase tracking-wider text-[#8E877C] font-semibold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#8C6A34]" /> Vastu Status
            </span>
            <div className="font-serif text-sm font-medium text-emerald-800 leading-snug">
              {property.vastuCompliance ? '100% Compliant' : 'Audited'}
            </div>
          </div>

          <div className="space-y-1 sm:pl-6 pt-4 sm:pt-0">
            <span className="text-[10px] uppercase tracking-wider text-[#8E877C] font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8C6A34]" /> RERA Certified
            </span>
            <div className="font-serif text-sm font-medium text-[#1D1B18] truncate">
              {property.reraNumber || 'State Registered'}
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN TWO-COLUMN BODY: NARRATIVE + AGENT & INQUIRY CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (8 cols): Description, Highlights, Amenities, Vastu & Financials */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Tagline & Overview */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89358]" />
                <span className="text-[11px] font-medium tracking-[0.25em] text-[#8C6A34] uppercase">
                  Architectural Dossier
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1D1B18] font-light">
                {property.tagline}
              </h2>
              <p className="text-sm sm:text-base text-[#4A453E] font-light leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Architectural & Investment Highlights */}
            {property.highlights && property.highlights.length > 0 && (
              <div className="p-8 bg-white border border-[#EAE4DA] rounded-sm space-y-6">
                <h3 className="font-serif text-xl sm:text-2xl text-[#1D1B18] font-medium">
                  Salient Residence Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#8C6A34] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#4A453E] font-light leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Amenities Grid */}
            {property.amenities && property.amenities.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl text-[#1D1B18] font-medium">
                  Bespoke Amenities & Specifications
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {property.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white border border-[#EAE4DA] rounded-xs text-xs font-medium text-[#4A453E] shadow-2xs"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Vastu Shastra & Title Due Diligence Card */}
            <div className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#EAE4DA] rounded-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xs bg-white border border-[#EAE4DA] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#8C6A34]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#1D1B18]">
                    Vastu Shastra & Non-Encumbrance Guarantee
                  </h4>
                  <span className="text-xs text-[#6F6A61] font-light">
                    Audited by senior Vedic scholars & 30-year High Court title search
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#6F6A61] font-light leading-relaxed">
                {property.vastuCompliance || "Full cardinal compass evaluation conducted. The entryway, master chambers, and central spatial core conform to canonical Vastu shastra guidelines for prosperity and balance."}
              </p>
            </div>

            {/* Interactive Luxury Home Loan & Carrying Cost Calculator */}
            <div className="p-8 bg-white border border-[#EAE4DA] rounded-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#EAE4DA] pb-4">
                <div className="flex items-center gap-3">
                  <Calculator className="w-5 h-5 text-[#8C6A34]" />
                  <div>
                    <h3 className="font-serif text-xl font-medium text-[#1D1B18]">
                      Estimated Carrying Cost & EMI
                    </h3>
                    <span className="text-xs text-[#6F6A61] font-light">
                      Benchmarked against premier Indian private wealth home loan rates
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#8C6A34] font-semibold block">
                    Est. Monthly EMI
                  </span>
                  <span className="font-serif text-2xl font-semibold text-[#1D1B18]">
                    ₹{(monthlyEmi / 100000).toFixed(2)} Lakhs
                  </span>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#6F6A61]">Down Payment:</span>
                    <span className="font-semibold text-[#1D1B18]">{downPaymentPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="50"
                    step="5"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-[#B89358] cursor-pointer"
                  />
                  <span className="text-[10px] text-[#8E877C] block">
                    ₹{((propertyPriceInr * downPaymentPercent) / 1000000000).toFixed(2)} Cr equity
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#6F6A61]">Interest Rate (p.a.):</span>
                    <span className="font-semibold text-[#1D1B18]">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="7.5"
                    max="11"
                    step="0.25"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-[#B89358] cursor-pointer"
                  />
                  <span className="text-[10px] text-[#8E877C] block">HDFC / SBI Wealth benchmark</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#6F6A61]">Tenure:</span>
                    <span className="font-semibold text-[#1D1B18]">{loanTenureYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="25"
                    step="5"
                    value={loanTenureYears}
                    onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                    className="w-full accent-[#B89358] cursor-pointer"
                  />
                  <span className="text-[10px] text-[#8E877C] block">{totalMonths} monthly repayments</span>
                </div>
              </div>

              {/* Tax & Registration Note */}
              <div className="pt-4 border-t border-[#F4EFE6] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#6F6A61]">
                <span>Est. State Stamp Duty & Registration (~6%):</span>
                <span className="font-medium text-[#1D1B18]">
                  ₹{(stampDutyEstimate / 10000000).toFixed(2)} Cr (Section 54 tax offset guidance available)
                </span>
              </div>
            </div>

            {/* Location & Neighborhood Map Representation */}
            <div className="p-8 bg-white border border-[#EAE4DA] rounded-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl sm:text-2xl text-[#1D1B18] font-medium">
                  Enclave & Neighborhood Context
                </h3>
                <span className="text-xs text-[#8C6A34] font-medium">
                  {property.city}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#6F6A61] font-light">
                Positioned in {property.neighborhood}, offering premier proximity to high-commission diplomatic enclaves, international schools, private aviation terminals, and culinary destinations.
              </p>

              {/* Styled Map Graphic representation */}
              <div className="relative aspect-[21/9] w-full rounded-xs overflow-hidden border border-[#EAE4DA] bg-[#F4EFE6] flex items-center justify-center p-6 text-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8C6A34_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 space-y-2">
                  <MapPin className="w-8 h-8 text-[#8C6A34] mx-auto animate-bounce" />
                  <div className="font-serif text-lg font-medium text-[#1D1B18]">
                    {property.address}
                  </div>
                  <div className="text-xs text-[#6F6A61]">
                    GPS Coordinates & Exact Private Access Briefing provided upon NDA execution
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Sticky Agent Contact Card & Direct Inquiry Form */}
          <div className="lg:col-span-4 space-y-8 sticky top-28">
            
            {/* Senior Agent Contact Card */}
            <div className="bg-white border border-[#EAE4DA] rounded-sm p-6 sm:p-7 space-y-6 shadow-sm">
              <div className="flex items-center gap-4">
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-16 h-16 rounded-xs object-cover border border-[#EAE4DA]"
                />
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#8C6A34] font-semibold block">
                    Listing Partner
                  </span>
                  <h4 className="font-serif text-xl font-medium text-[#1D1B18]">
                    {agent.name}
                  </h4>
                  <p className="text-xs text-[#6F6A61] font-light">
                    {agent.role}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#6F6A61] border-y border-[#F4EFE6] py-3">
                <div className="flex justify-between">
                  <span>Licence:</span>
                  <span className="font-mono text-[#1D1B18]">{agent.licenseNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="text-[#1D1B18]">{agent.experienceYears} Years in Luxury</span>
                </div>
                <div className="flex justify-between">
                  <span>Track Record:</span>
                  <span className="font-medium text-[#8C6A34]">{agent.totalVolume} Closed</span>
                </div>
              </div>

              {/* Direct Communications */}
              <div className="space-y-2.5">
                <a
                  href={`https://wa.me/919820048800?text=${encodeURIComponent(`Inquiry for ${property.title} (${property.city}) - Price: ${property.priceCr || property.priceFormatted}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xs bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-widest font-semibold transition-colors shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>

                <a
                  href={`tel:${agent.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xs border border-[#EAE4DA] hover:border-[#1D1B18] text-[#1D1B18] text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8C6A34]" />
                  <span>Call {agent.phone}</span>
                </a>
              </div>
            </div>

            {/* Direct Viewing Request Form */}
            <div className="bg-white border border-[#EAE4DA] rounded-sm p-6 sm:p-7 space-y-5 shadow-sm">
              <h4 className="font-serif text-xl font-medium text-[#1D1B18]">
                Request Confidential Viewing
              </h4>
              <p className="text-xs text-[#6F6A61] font-light">
                Private viewings are coordinated with a minimum of 24 hours notice for security protocol clearance.
              </p>

              {formSubmitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xs text-xs text-emerald-900 space-y-1">
                  <div className="font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Viewing Request Registered</span>
                  </div>
                  <p className="text-emerald-800 font-light">
                    {agent.name}&apos;s executive desk will contact you via WhatsApp and phone within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider font-semibold text-[#6F6A61] block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rohit Singhania"
                      className="w-full px-3.5 py-2 text-xs border border-[#EAE4DA] rounded-xs focus:border-[#B89358] focus:outline-none bg-[#FAF8F5]/60"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider font-semibold text-[#6F6A61] block mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98200 00000"
                      className="w-full px-3.5 py-2 text-xs border border-[#EAE4DA] rounded-xs focus:border-[#B89358] focus:outline-none bg-[#FAF8F5]/60"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider font-semibold text-[#6F6A61] block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rohit@familyoffice.com"
                      className="w-full px-3.5 py-2 text-xs border border-[#EAE4DA] rounded-xs focus:border-[#B89358] focus:outline-none bg-[#FAF8F5]/60"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider font-semibold text-[#6F6A61] block mb-1">
                      Preferred Date & Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Requested viewing date, NRI status, or questions..."
                      className="w-full px-3.5 py-2 text-xs border border-[#EAE4DA] rounded-xs focus:border-[#B89358] focus:outline-none bg-[#FAF8F5]/60"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xs bg-[#1D1B18] hover:bg-[#8C6A34] text-white text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
                  >
                    Submit Private Request
                  </button>

                  <p className="text-[10px] text-[#8E877C] text-center font-light">
                    Protected by mutual non-disclosure and RERA compliance.
                  </p>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 5. SIMILAR / RELATED RESIDENCES CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8 border-t border-[#EAE4DA]">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#8C6A34]">
              Portfolio Context
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1D1B18]">
              Similar Landmark Residences
            </h3>
          </div>

          <Link
            to="/properties"
            className="text-xs uppercase tracking-widest font-semibold text-[#8C6A34] hover:text-[#1D1B18] transition-colors"
          >
            Explore All Listings
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProperties.map((p) => (
            <PropertyCard
              key={p.id}
              property={p}
              currency={currency}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
