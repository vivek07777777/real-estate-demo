import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Building2, MapPin, Phone, ShieldCheck, ArrowRight, Laptop, Smartphone, Palette, FileText } from 'lucide-react';
import { AGENCY_INFO } from '../data';

interface RealtorDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  customAgencyName: string;
  onUpdateAgencyName: (name: string) => void;
  customCity: string;
  onUpdateCity: (city: string) => void;
  onOpenConsult: () => void;
}

export default function RealtorDemoModal({
  isOpen,
  onClose,
  customAgencyName,
  onUpdateAgencyName,
  customCity,
  onUpdateCity,
  onOpenConsult
}: RealtorDemoModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'test-brand' | 'features'>('overview');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleShareDemo = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white border border-[#EAE4DA] w-full max-w-3xl rounded-sm overflow-hidden shadow-2xl relative my-6 text-[#1D1B18]">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#FAF8F5] border-b border-[#EAE4DA] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C6A34]">
              Realtor Business Demo • India Edition
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

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
          
          {/* Welcome Banner */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#F4EFE6] border border-[#DFC9A8]/70 text-[10px] font-semibold tracking-wider text-[#8C6A34] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specially Designed For Indian Real Estate Firms</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1B18] font-light">
              A Bespoke Digital Flagship For Your Indian Brokerage
            </h3>
            <p className="text-xs sm:text-sm text-[#6F6A61] font-light leading-relaxed">
              This interactive platform is engineered specifically for India’s high-net-worth real estate market. 
              It incorporates Indian currency denominations (₹ Crores), state RERA registries, Vastu Shastra certification, 
              and NRI repatriation desks to convert high-ticket buyers and investors.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-[#EAE4DA] text-xs font-medium uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 px-4 transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'text-[#8C6A34] border-b-2 border-[#8C6A34] font-semibold'
                  : 'text-[#6F6A61] hover:text-[#1D1B18]'
              }`}
            >
              Why It Wins Deals
            </button>
            <button
              onClick={() => setActiveTab('test-brand')}
              className={`pb-3 px-4 transition-colors cursor-pointer ${
                activeTab === 'test-brand'
                  ? 'text-[#8C6A34] border-b-2 border-[#8C6A34] font-semibold'
                  : 'text-[#6F6A61] hover:text-[#1D1B18]'
              }`}
            >
              Live Brand Simulator
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`pb-3 px-4 transition-colors cursor-pointer ${
                activeTab === 'features'
                  ? 'text-[#8C6A34] border-b-2 border-[#8C6A34] font-semibold'
                  : 'text-[#6F6A61] hover:text-[#1D1B18]'
              }`}
            >
              Turnkey Inclusions
            </button>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 bg-[#FAF8F5] border border-[#EAE4DA] rounded-sm space-y-2">
                  <div className="flex items-center gap-2 text-[#8C6A34]">
                    <ShieldCheck className="w-4 h-4" />
                    <h4 className="text-xs font-semibold uppercase tracking-wider">MahaRERA & HRERA Compliance</h4>
                  </div>
                  <p className="text-[11px] text-[#6F6A61] font-light leading-relaxed">
                    Official RERA broker certificates, project approval numbers, and DLD/authority verification prominently displayed to build immediate trust with HNI buyers.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF8F5] border border-[#EAE4DA] rounded-sm space-y-2">
                  <div className="flex items-center gap-2 text-[#8C6A34]">
                    <Building2 className="w-4 h-4" />
                    <h4 className="text-xs font-semibold uppercase tracking-wider">₹ Crores & Dual USD Currency</h4>
                  </div>
                  <p className="text-[11px] text-[#6F6A61] font-light leading-relaxed">
                    Native Indian pricing (e.g. ₹85.0 Cr) with one-click conversion to USD ($M) for Silicon Valley, Dubai, and London NRI investors.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF8F5] border border-[#EAE4DA] rounded-sm space-y-2">
                  <div className="flex items-center gap-2 text-[#8C6A34]">
                    <Palette className="w-4 h-4" />
                    <h4 className="text-xs font-semibold uppercase tracking-wider">Vastu Shastra Due Diligence</h4>
                  </div>
                  <p className="text-[11px] text-[#6F6A61] font-light leading-relaxed">
                    Dedicated Vastu compliance tags (Ishanya / North-East alignments, Brahmasthan layouts) that cater directly to Indian luxury buyers.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF8F5] border border-[#EAE4DA] rounded-sm space-y-2">
                  <div className="flex items-center gap-2 text-[#8C6A34]">
                    <Phone className="w-4 h-4" />
                    <h4 className="text-xs font-semibold uppercase tracking-wider">Direct WhatsApp Concierge</h4>
                  </div>
                  <p className="text-[11px] text-[#6F6A61] font-light leading-relaxed">
                    Over 80% of Indian luxury deals initiate via WhatsApp. Direct encrypted click-to-chat with property title auto-fill is built-in.
                  </p>
                </div>

              </div>

              <div className="p-4 bg-white border border-[#DFC9A8] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#1D1B18] block">Send this live demo to any realtor or brokerage</span>
                  <span className="text-[11px] text-[#6F6A61]">They can test the interactive features, video player, and dossier view instantly.</span>
                </div>
                <button
                  onClick={handleShareDemo}
                  className="px-4 py-2 bg-[#1D1B18] hover:bg-[#8C6A34] text-white text-xs font-medium uppercase tracking-wider rounded-xs transition-colors cursor-pointer whitespace-nowrap"
                >
                  {copied ? 'Link Copied!' : 'Copy Demo Link'}
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: LIVE BRAND SIMULATOR */}
          {activeTab === 'test-brand' && (
            <div className="space-y-4 bg-[#FAF8F5] p-5 border border-[#EAE4DA] rounded-sm">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-[#1D1B18]">Test Your Own Real Estate Brand Live</h4>
                <p className="text-xs text-[#6F6A61]">
                  Type your agency or brokerage name below and see it reflected immediately in the header and throughout this website:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold uppercase tracking-wider text-[#6F6A61]">
                    Your Firm / Brand Name
                  </label>
                  <input
                    type="text"
                    value={customAgencyName}
                    onChange={(e) => onUpdateAgencyName(e.target.value)}
                    placeholder="e.g. Singhania Luxury Estates"
                    className="w-full bg-white border border-[#EAE4DA] px-3.5 py-2.5 text-xs text-[#1D1B18] rounded-xs focus:outline-none focus:border-[#8C6A34]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold uppercase tracking-wider text-[#6F6A61]">
                    Primary Indian City Focus
                  </label>
                  <input
                    type="text"
                    value={customCity}
                    onChange={(e) => onUpdateCity(e.target.value)}
                    placeholder="e.g. Mumbai • South Delhi • Bengaluru"
                    className="w-full bg-white border border-[#EAE4DA] px-3.5 py-2.5 text-xs text-[#1D1B18] rounded-xs focus:outline-none focus:border-[#8C6A34]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <div className="text-[11px] text-[#8C6A34] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Preview active! The navbar now displays: &quot;{customAgencyName || AGENCY_INFO.name}&quot;</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: FEATURES INCLUDED */}
          {activeTab === 'features' && (
            <div className="space-y-3">
              <div className="space-y-2 text-xs text-[#6F6A61]">
                {[
                  "Personalized with your firm logo, colors, and font palette",
                  "MahaRERA, HRERA, Delhi RERA & K-RERA license integration",
                  "Direct WhatsApp Concierge linked to your brokerage desk",
                  "Curated property portfolio in Mumbai, Delhi NCR, Bengaluru, Goa & Alibaug",
                  "Architectural 4K Video Theatre player with chapter navigation",
                  "Interactive EMI & Stamp Duty carrying cost estimator",
                  "Vastu Shastra and NRI FEMA advisory modules",
                  "Fast cloud deployment ready to connect to your custom domain (.in / .com)"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 py-1">
                    <CheckCircle2 className="w-4 h-4 text-[#8C6A34] shrink-0 mt-0.5" />
                    <span className="text-[#1D1B18] font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Call to Action */}
          <div className="pt-4 border-t border-[#EAE4DA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#6F6A61] text-center sm:text-left">
              <span>Ready to personalize this website for your agency?</span>
              <p className="font-semibold text-[#1D1B18] mt-0.5">Turnkey delivery in 24-48 Hours</p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenConsult();
                }}
                className="w-full sm:w-auto px-6 py-3 bg-[#1D1B18] hover:bg-[#8C6A34] text-white text-xs font-medium uppercase tracking-widest rounded-xs transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Get This For My Business</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
