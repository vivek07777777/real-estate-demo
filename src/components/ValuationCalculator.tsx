import React, { useState } from 'react';
import { Sparkles, Calculator, CheckCircle2, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';
import { AGENTS } from '../data';

interface ValuationCalculatorProps {
  onSuccess?: () => void;
}

export default function ValuationCalculator({ onSuccess }: ValuationCalculatorProps) {
  const [address, setAddress] = useState('');
  const [propertyType, setPropertyType] = useState('Architectural Estate');
  const [sqft, setSqft] = useState('6500');
  const [bedrooms, setBedrooms] = useState(5);
  const [bathrooms, setBathrooms] = useState(6);
  const [condition, setCondition] = useState('Ultra-Luxury Reimagined');
  const [viewType, setViewType] = useState('Panoramic Ocean / Jetliner');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [preferredAgent, setPreferredAgent] = useState('All');
  const [submitted, setSubmitted] = useState(false);

  // Dynamic Valuation Estimation calculation
  const numericSqft = Number(sqft.replace(/[^0-9]/g, '')) || 5000;
  let basePricePerSqft = 2200;
  if (propertyType === 'Luxury Penthouse') basePricePerSqft = 3400;
  if (propertyType === 'Waterfront') basePricePerSqft = 2900;
  if (propertyType === 'Historic Manor') basePricePerSqft = 2600;

  let conditionMultiplier = 1.0;
  if (condition === 'Ultra-Luxury Reimagined') conditionMultiplier = 1.25;
  if (condition === 'Needs Renovation') conditionMultiplier = 0.85;

  let viewMultiplier = 1.0;
  if (viewType === 'Panoramic Ocean / Jetliner') viewMultiplier = 1.2;
  if (viewType === 'City Skyline') viewMultiplier = 1.1;

  const estimatedValue = Math.round(numericSqft * basePricePerSqft * conditionMultiplier * viewMultiplier);
  const lowerRange = Math.round(estimatedValue * 0.94);
  const upperRange = Math.round(estimatedValue * 1.08);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address || !ownerEmail) return;
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  return (
    <div id="valuation-section" className="relative bg-[#0c0e14] border border-white/10 rounded-sm p-6 sm:p-10 shadow-2xl">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#c5a880]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Context & Real-Time Calculation Preview */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/20 text-[#dfc9a8] text-[11px] font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Institutional Market Valuation</span>
            </div>
            <h3 className="font-serif text-3xl font-light text-white leading-tight">
              Discover Your Property’s True Market Worth
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Algorithmic tools overlook architectural pedigree, custom millwork, and private view corridors. Our proprietary evaluation model calculates precise equity benchmarks.
            </p>
          </div>

          {/* Dynamic Value Range Display Card */}
          <div className="bg-[#08090c] border border-white/10 p-5 rounded-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                Preliminary Valuation Bracket
              </span>
              <span className="text-[10px] text-[#c5a880] font-mono">Live Simulation</span>
            </div>

            <div className="space-y-1">
              <p className="font-serif text-3xl sm:text-4xl font-semibold text-white">
                ${(lowerRange / 1000000).toFixed(2)}M – ${(upperRange / 1000000).toFixed(2)}M
              </p>
              <p className="text-xs text-[#dfc9a8]">
                Estimated Benchmark: ≈ ${(estimatedValue).toLocaleString()} (${Math.round(estimatedValue / numericSqft).toLocaleString()} / sqft)
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Incorporates recent 2025-2026 prime neighborhood closings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Calibrated for off-market buyer demand & architectural premium</span>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0" />
            <span>Strict privacy: No automated spam. 100% confidential appraisal.</span>
          </div>
        </div>

        {/* Right Side: Interactive Valuation Form */}
        <div className="lg:col-span-7 bg-[#11141e] border border-white/10 p-6 sm:p-8 rounded-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#c5a880]/15 border border-[#c5a880]/40 flex items-center justify-center text-[#dfc9a8]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl text-white">Valuation Request Received</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{ownerName || 'Property Owner'}</strong>. A senior partner has been assigned to compile your comprehensive Comparative Market Analysis (CMA) dossier for <strong className="text-white">{address}</strong>.
              </p>
              <p className="text-xs text-[#c5a880]">
                We will deliver the private executive report to {ownerEmail} within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2 bg-white/5 hover:bg-white/10 text-xs text-slate-300 rounded-sm border border-white/10 uppercase tracking-wider"
              >
                Perform Another Valuation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                  Property Street Address & Enclave *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. 1042 Bellagio Road, Bel Air, Los Angeles, CA"
                  className="w-full bg-[#08090c] border border-white/10 text-slate-200 text-xs rounded-sm px-3.5 py-2.5 focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    Property Architecture
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-[#08090c] border border-white/10 text-slate-200 text-xs rounded-sm px-3 py-2.5 focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="Architectural Estate">Architectural Single-Family Estate</option>
                    <option value="Luxury Penthouse">Trophy Penthouse / High-Rise</option>
                    <option value="Waterfront">Waterfront / Deepwater Property</option>
                    <option value="Modern Villa">Modern Designer Villa</option>
                    <option value="Historic Manor">Historic / Traditional Manor</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    Approx. Living Area (Sq Ft)
                  </label>
                  <input
                    type="number"
                    value={sqft}
                    onChange={(e) => setSqft(e.target.value)}
                    placeholder="e.g. 7500"
                    className="w-full bg-[#08090c] border border-white/10 text-slate-200 text-xs rounded-sm px-3.5 py-2.5 focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    Bedrooms
                  </label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(Number(e.target.value))}
                    className="w-full bg-[#08090c] border border-white/10 text-slate-200 text-xs rounded-sm px-3 py-2.5 focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value={3}>3 Suites</option>
                    <option value={4}>4 Suites</option>
                    <option value={5}>5 Suites</option>
                    <option value={6}>6+ Suites</option>
                    <option value={8}>8+ Suites</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    Bathrooms
                  </label>
                  <select
                    value={bathrooms}
                    onChange={(e) => setBathrooms(Number(e.target.value))}
                    className="w-full bg-[#08090c] border border-white/10 text-slate-200 text-xs rounded-sm px-3 py-2.5 focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value={4}>4 Baths</option>
                    <option value={5}>5 Baths</option>
                    <option value={6}>6 Baths</option>
                    <option value={8}>8+ Baths</option>
                    <option value={10}>10+ Baths</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    View Corridor
                  </label>
                  <select
                    value={viewType}
                    onChange={(e) => setViewType(e.target.value)}
                    className="w-full bg-[#08090c] border border-white/10 text-slate-200 text-xs rounded-sm px-3 py-2.5 focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="Panoramic Ocean / Jetliner">Panoramic Ocean / Jetliner</option>
                    <option value="City Skyline">Downtown City Skyline</option>
                    <option value="Mountain / Canyon">Mountain & Canyon</option>
                    <option value="Private Grounds">Lush Private Grounds</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                  Condition & Finishes
                </label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full bg-[#08090c] border border-white/10 text-slate-200 text-xs rounded-sm px-3 py-2.5 focus:outline-none focus:border-[#c5a880]"
                >
                  <option value="Ultra-Luxury Reimagined">Ultra-Luxury Turnkey / Brand New Custom Build</option>
                  <option value="Pristine Original">Pristine Architecture / Well Maintained</option>
                  <option value="Needs Renovation">Opportunity for Reimagining / Value-Add</option>
                </select>
              </div>

              {/* Owner Contact Information */}
              <div className="pt-3 border-t border-white/10 space-y-3">
                <p className="text-xs uppercase tracking-wider text-[#c5a880] font-semibold">
                  Where should we send your certified CMA report?
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="w-full bg-[#08090c] border border-white/10 text-slate-200 text-xs rounded-sm px-3 py-2.5 focus:outline-none focus:border-[#c5a880]"
                  />

                  <input
                    type="email"
                    required
                    placeholder="Private Email *"
                    value={ownerEmail}
                    onChange={(e) => setOwnerEmail(e.target.value)}
                    className="w-full bg-[#08090c] border border-white/10 text-slate-200 text-xs rounded-sm px-3 py-2.5 focus:outline-none focus:border-[#c5a880]"
                  />

                  <input
                    type="tel"
                    placeholder="Direct Phone Number"
                    value={ownerPhone}
                    onChange={(e) => setOwnerPhone(e.target.value)}
                    className="w-full bg-[#08090c] border border-white/10 text-slate-200 text-xs rounded-sm px-3 py-2.5 focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-slate-400">Assign Preferred Senior Advisor (Optional)</label>
                  <select
                    value={preferredAgent}
                    onChange={(e) => setPreferredAgent(e.target.value)}
                    className="w-full bg-[#08090c] border border-white/10 text-slate-200 text-xs rounded-sm px-3 py-2 focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="All">Assign Best Matched Senior Partner</option>
                    {AGENTS.map((agent) => (
                      <option key={agent.id} value={agent.id}>
                        {agent.name} — {agent.role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#c5a880] hover:bg-[#dfc9a8] text-[#08090c] font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-200 shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Certified Market Valuation Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
