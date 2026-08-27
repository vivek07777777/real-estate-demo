import React, { useState } from 'react';
import { Property, Agent } from '../types';
import { AGENTS } from '../data';
import {
  X,
  Bed,
  Bath,
  Maximize2,
  MapPin,
  Calendar,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Calculator,
  Compass,
  FileText
} from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onBookViewing: (property: Property) => void;
  onContactAgent: (agent: Agent) => void;
}

export default function PropertyDetailModal({
  property,
  onClose,
  onBookViewing,
  onContactAgent
}: PropertyDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);

  if (!property) return null;

  const images = [property.heroImage, ...(property.galleryImages || [])];
  const assignedAgent = AGENTS.find((a) => a.id === property.agentId);

  // Mortgage calculation helper
  const loanAmount = property.price * (1 - downPaymentPercent / 100);
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  const estimatedMonthlyPrincipalInterest =
    monthlyRate > 0
      ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      : loanAmount / numberOfPayments;

  const monthlyPropertyTax = (property.propertyTaxAnnual || property.price * 0.01) / 12;
  const monthlyHOA = property.hoaMonthly || 0;
  const totalEstimatedMonthly = Math.round(
    estimatedMonthlyPrincipalInterest + monthlyPropertyTax + monthlyHOA
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#0f121a] border border-white/15 w-full max-w-5xl rounded-sm overflow-hidden shadow-2xl relative my-6 max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-[#08090c] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#dfc9a8] bg-[#c5a880]/15 px-2.5 py-1 rounded-sm border border-[#c5a880]/30">
              {property.status}
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
              {property.category} • Year Built {property.yearBuilt}
            </span>
          </div>

          <button
            onClick={onClose}
            className="bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white p-1.5 rounded-full border border-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Hero Gallery Slider */}
          <div className="space-y-3">
            <div className="relative h-80 sm:h-[420px] rounded-sm overflow-hidden bg-black border border-white/10">
              <img
                src={images[activeImageIndex]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full border border-white/10 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full border border-white/10 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Photo Index Counter */}
              <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 text-xs text-slate-200 rounded-sm border border-white/10 font-mono">
                {activeImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`h-16 w-24 shrink-0 rounded-sm overflow-hidden border transition-all cursor-pointer ${
                      activeImageIndex === i ? 'border-[#c5a880] ring-1 ring-[#c5a880]' : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Main Title, Price & Address Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
            <div className="space-y-1.5">
              <h2 className="font-serif text-2xl sm:text-4xl font-light text-white leading-tight">
                {property.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#dfc9a8] font-light">
                {property.tagline}
              </p>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>{property.address}, {property.neighborhood}, {property.city}</span>
              </p>
            </div>

            <div className="text-left md:text-right shrink-0">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">Offered Price</p>
              <p className="font-serif text-3xl sm:text-4xl font-semibold text-white">
                {property.priceFormatted}
              </p>
              <p className="text-[11px] text-[#c5a880] mt-0.5">
                ≈ ${(Math.round(property.price / property.sqft)).toLocaleString()} / Sq Ft
              </p>
            </div>
          </div>

          {/* Core Spec Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/[0.03] border border-white/10 p-3.5 rounded-sm text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Bedrooms</span>
              <span className="font-serif text-xl font-bold text-white mt-1 block">{property.bedrooms} Suites</span>
            </div>
            <div className="bg-white/[0.03] border border-white/10 p-3.5 rounded-sm text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Bathrooms</span>
              <span className="font-serif text-xl font-bold text-white mt-1 block">{property.bathrooms} Full / Half</span>
            </div>
            <div className="bg-white/[0.03] border border-white/10 p-3.5 rounded-sm text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Interior Living</span>
              <span className="font-serif text-xl font-bold text-white mt-1 block">{property.sqft.toLocaleString()} Sq Ft</span>
            </div>
            <div className="bg-white/[0.03] border border-white/10 p-3.5 rounded-sm text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Lot / Grounds</span>
              <span className="font-serif text-xl font-bold text-[#c5a880] mt-1 block">{property.lotSize || 'Trophy Parcel'}</span>
            </div>
          </div>

          {/* Detailed Narrative & Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-6">
              
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-light text-white">Estate Overview & Architectural Lineage</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {property.description}
                </p>
              </div>

              {/* Curated Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-[#c5a880]">
                  Architectural & Lifestyle Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {property.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-white/[0.02] border border-white/5 p-2.5 rounded-sm text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Estate Amenities & Security Provisions
                </h4>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, i) => (
                    <span key={i} className="text-xs bg-white/5 text-slate-300 border border-white/10 px-3 py-1 rounded-sm">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Mortgage & Carrying Cost Calculator */}
              <div className="bg-[#0a0c11] border border-white/10 p-5 rounded-sm space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-[#c5a880]" />
                    <h4 className="text-xs uppercase tracking-widest text-white font-semibold">Estimated Monthly Carrying Cost</h4>
                  </div>
                  <span className="text-base font-serif font-bold text-[#dfc9a8]">
                    ${totalEstimatedMonthly.toLocaleString()} / mo
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Down Payment ({downPaymentPercent}%)</label>
                    <input
                      type="range"
                      min={10}
                      max={50}
                      step={5}
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      className="w-full accent-[#c5a880]"
                    />
                    <span className="text-slate-300 font-mono mt-1 block">
                      ${(property.price * (downPaymentPercent / 100)).toLocaleString()}
                    </span>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Interest Rate ({interestRate}%)</label>
                    <input
                      type="range"
                      min={4.0}
                      max={9.0}
                      step={0.25}
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full accent-[#c5a880]"
                    />
                    <span className="text-slate-300 font-mono mt-1 block">{interestRate}% Fixed</span>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Loan Term</label>
                    <select
                      value={loanTermYears}
                      onChange={(e) => setLoanTermYears(Number(e.target.value))}
                      className="w-full bg-[#11141e] border border-white/10 text-slate-200 py-1.5 px-2 rounded-sm"
                    >
                      <option value={30}>30-Year Fixed Jumbo</option>
                      <option value={15}>15-Year Fixed</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Assigned Lead Advisor Card & Actions */}
            <div className="lg:col-span-4 bg-[#0a0c11] border border-white/10 p-5 rounded-sm space-y-5">
              <div className="text-center space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a880]">
                  Represented Exclusively By
                </span>
                
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#c5a880]/50 shadow-lg">
                  <img
                    src={property.agentPhoto}
                    alt={property.agentName}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-serif text-lg font-bold text-white">{property.agentName}</h4>
                  <p className="text-[11px] text-[#dfc9a8] uppercase tracking-wider">{property.agentRole}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-2.5">
                <button
                  onClick={() => {
                    onClose();
                    onBookViewing(property);
                  }}
                  className="w-full py-3.5 bg-[#c5a880] hover:bg-[#dfc9a8] text-[#08090c] font-bold text-xs uppercase tracking-widest rounded-sm transition-colors cursor-pointer shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Private Tour</span>
                </button>

                {assignedAgent && (
                  <button
                    onClick={() => {
                      onClose();
                      onContactAgent(assignedAgent);
                    }}
                    className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-xs font-medium uppercase tracking-wider rounded-sm border border-white/10 transition-colors cursor-pointer"
                  >
                    View Agent Track Record
                  </button>
                )}

                <a
                  href={`tel:${property.agentPhone.replace(/[^0-9+]/g, '')}`}
                  className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs rounded-sm border border-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Direct: {property.agentPhone}</span>
                </a>
              </div>

              <div className="text-[11px] text-slate-400 text-center leading-relaxed font-light pt-2">
                Confidentiality notice: All private viewings require pre-qualification confirmation and mutual Non-Disclosure documentation.
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
