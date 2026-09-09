import React, { useState } from 'react';
import { Property, Agent } from '../types';
import { AGENTS, AGENCY_INFO } from '../data';
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
  ChevronLeft,
  ChevronRight,
  Calculator,
  Compass,
  MessageSquare,
  FileCheck
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
  const [downPaymentPercent, setDownPaymentPercent] = useState(25);
  const [interestRate, setInterestRate] = useState(8.5); // Standard Indian luxury home loan benchmark (SBI / HDFC)
  const [loanTermYears, setLoanTermYears] = useState(20);

  if (!property) return null;

  const images = [property.heroImage, ...(property.galleryImages || [])];
  const assignedAgent = AGENTS.find((a) => a.id === property.agentId);

  // Indian financial calculation helper in INR
  const basePriceInr = property.priceInr || property.price;
  const loanAmount = basePriceInr * (1 - downPaymentPercent / 100);
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  const estimatedMonthlyEmi =
    monthlyRate > 0
      ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      : loanAmount / numberOfPayments;

  const estimatedStampDuty = basePriceInr * 0.06; // Approx 6% stamp duty + cess in Maharashtra / Delhi / Haryana
  const estimatedMonthlyMaintenance = property.hoaMonthly || 45000;

  const formatCrores = (amount: number) => {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  };

  const formatLakhs = (amount: number) => {
    return `₹${(amount / 100000).toFixed(2)} Lakh`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white border border-[#EAE4DA] w-full max-w-5xl rounded-sm overflow-hidden shadow-2xl relative my-6 max-h-[92vh] flex flex-col text-[#1D1B18]">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-[#FAF8F5] border-b border-[#EAE4DA] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C6A34] bg-[#DFC9A8]/40 px-2.5 py-1 rounded-xs border border-[#B89358]/40">
              {property.status}
            </span>
            <span className="text-xs text-[#6F6A61] font-medium hidden sm:inline-block">
              {property.category} • {property.city} • Built {property.yearBuilt}
            </span>
          </div>

          <button
            onClick={onClose}
            className="bg-white hover:bg-[#F4EFE6] text-[#6F6A61] hover:text-[#1D1B18] p-1.5 rounded-full border border-[#EAE4DA] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Hero Gallery Slider */}
          <div className="space-y-3">
            <div className="relative h-80 sm:h-[420px] rounded-xs overflow-hidden bg-[#FAF8F5] border border-[#EAE4DA]">
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
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/85 hover:bg-white text-[#1D1B18] border border-[#EAE4DA] shadow-md cursor-pointer transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/85 hover:bg-white text-[#1D1B18] border border-[#EAE4DA] shadow-md cursor-pointer transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* RERA and Vastu Pill */}
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {property.reraPermitNumber && (
                  <span className="text-[10px] font-mono px-3 py-1.5 rounded-xs bg-[#1D1B18]/90 text-white backdrop-blur-md border border-white/20">
                    {property.reraPermitNumber}
                  </span>
                )}
                {property.vastuCompliance && (
                  <span className="text-[10px] font-medium px-3 py-1.5 rounded-xs bg-white/90 text-emerald-800 backdrop-blur-md border border-[#EAE4DA] flex items-center gap-1.5">
                    <Compass className="w-3 h-3 text-emerald-700" />
                    <span>{property.vastuCompliance}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-xs overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-[#8C6A34] scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Pricing Block */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#EAE4DA]">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8C6A34]">
                {property.neighborhood}, {property.city}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1B18] font-normal leading-tight">
                {property.title}
              </h2>
              <p className="text-sm text-[#6F6A61] font-light leading-relaxed">
                {property.tagline}
              </p>
            </div>

            <div className="space-y-1 md:text-right shrink-0">
              <div className="font-serif text-3xl sm:text-4xl text-[#8C6A34] font-medium">
                {property.priceCr || formatCrores(basePriceInr)}
              </div>
              <div className="text-xs text-[#6F6A61] font-light">
                Approx. ${(property.priceUsd ? (property.priceUsd / 1000000).toFixed(1) : '10.0')}M USD • Freehold Clean Title
              </div>
              <div className="text-[10px] text-emerald-700 font-medium pt-1">
                Eligible for Section 54 Capital Gains Exemption
              </div>
            </div>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#FAF8F5] border border-[#EAE4DA] rounded-sm text-center">
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase tracking-wider text-[#6F6A61] font-medium block">Bedrooms</span>
              <span className="text-xl font-serif text-[#1D1B18]">{property.bedrooms} Suites</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase tracking-wider text-[#6F6A61] font-medium block">Bathrooms</span>
              <span className="text-xl font-serif text-[#1D1B18]">{property.bathrooms} Baths</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase tracking-wider text-[#6F6A61] font-medium block">Super Built-Up</span>
              <span className="text-xl font-serif text-[#1D1B18]">{property.sqft.toLocaleString()} Sq Ft</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase tracking-wider text-[#6F6A61] font-medium block">Plot / Grounds</span>
              <span className="text-xl font-serif text-[#1D1B18]">{property.lotSize || 'Prime Compound'}</span>
            </div>
          </div>

          {/* Description & Narrative */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-[#1D1B18]">
              Architectural Dossier
            </h4>
            <p className="text-sm text-[#4A453E] font-light leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Highlights & Features */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-[#1D1B18]">
              Key Estate Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.highlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-[#4A453E] font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6A34] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities Tags */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-[#1D1B18]">
              Private Amenities
            </h4>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#FAF8F5] border border-[#EAE4DA] text-xs text-[#1D1B18] rounded-xs font-light"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Indian Carrying Cost & EMI Calculator */}
          <div className="bg-[#FAF8F5] border border-[#EAE4DA] rounded-sm p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE4DA] pb-3">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#8C6A34]" />
                <h4 className="text-xs uppercase font-semibold tracking-wider text-[#1D1B18]">
                  Indian Luxury Home Loan & Carrying Cost Estimator
                </h4>
              </div>
              <span className="text-[10px] text-[#6F6A61] font-mono">
                Benchmark: 8.5% p.a. • HDFC / SBI Wealth Desk
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-wider text-[#6F6A61] font-medium block">
                  Down Payment: {downPaymentPercent}% ({formatCrores(basePriceInr * (downPaymentPercent / 100))})
                </label>
                <input
                  type="range"
                  min={15}
                  max={50}
                  step={5}
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-[#8C6A34] cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-wider text-[#6F6A61] font-medium block">
                  Interest Rate: {interestRate}% p.a.
                </label>
                <input
                  type="range"
                  min={7.5}
                  max={10.5}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#8C6A34] cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-wider text-[#6F6A61] font-medium block">
                  Loan Tenure: {loanTermYears} Years
                </label>
                <input
                  type="range"
                  min={10}
                  max={25}
                  step={5}
                  value={loanTermYears}
                  onChange={(e) => setLoanTermYears(Number(e.target.value))}
                  className="w-full accent-[#8C6A34] cursor-pointer"
                />
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#EAE4DA]">
              <div className="bg-white p-3.5 border border-[#EAE4DA] rounded-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#6F6A61] block">Estimated Monthly EMI</span>
                <span className="text-xl font-serif text-[#1D1B18] font-bold mt-1 block">
                  {formatLakhs(estimatedMonthlyEmi)}
                </span>
                <span className="text-[10px] text-[#6F6A61]">Principal & Interest</span>
              </div>

              <div className="bg-white p-3.5 border border-[#EAE4DA] rounded-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#6F6A61] block">Est. State Stamp Duty</span>
                <span className="text-xl font-serif text-[#8C6A34] font-bold mt-1 block">
                  {formatCrores(estimatedStampDuty)}
                </span>
                <span className="text-[10px] text-[#6F6A61]">One-time ~6% (State + Cess)</span>
              </div>

              <div className="bg-white p-3.5 border border-[#EAE4DA] rounded-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#6F6A61] block">Legal & Title Due Diligence</span>
                <span className="text-sm font-serif text-emerald-800 font-semibold mt-1.5 block flex items-center gap-1">
                  <FileCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Verified Clean Title</span>
                </span>
                <span className="text-[10px] text-[#6F6A61]">30-Year Non-Encumbrance</span>
              </div>
            </div>

          </div>

          {/* Assigned Senior Partner Card & Direct Action CTAs */}
          {assignedAgent && (
            <div className="p-5 bg-white border border-[#DFC9A8] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
              <div className="flex items-center gap-4">
                <img
                  src={assignedAgent.photo}
                  alt={assignedAgent.name}
                  className="w-14 h-14 rounded-full object-cover border border-[#EAE4DA]"
                />
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C6A34]">
                    Listing Partner
                  </span>
                  <h5 className="font-serif text-lg font-medium text-[#1D1B18]">{assignedAgent.name}</h5>
                  <p className="text-xs text-[#6F6A61] font-light">{assignedAgent.licenseNumber}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${AGENCY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Inquiring%20about%20${encodeURIComponent(property.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-medium uppercase tracking-wider rounded-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Partner</span>
                </a>

                <button
                  onClick={() => onBookViewing(property)}
                  className="px-6 py-2.5 bg-[#1D1B18] hover:bg-[#8C6A34] text-white text-xs font-medium uppercase tracking-widest rounded-xs transition-colors cursor-pointer shadow-sm"
                >
                  Book Private Tour
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
