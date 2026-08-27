import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenBookingModal: () => void;
  onExploreEstates: () => void;
}

export default function HeroSection({
  onOpenBookingModal,
  onExploreEstates
}: HeroSectionProps) {
  return (
    <section id="hero-section" className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-16 overflow-hidden bg-[#08090c]">
      
      {/* Background Architectural Canvas Layer with Dark Vignette */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Architectural Estate"
          className="w-full h-full object-cover object-center filter opacity-30 scale-105"
        />
        {/* Soft Dark Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/70 to-[#08090c]/85" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#08090c]/50 to-[#08090c]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto text-center space-y-8">
        
        {/* Editorial Eyebrow */}
        <div className="inline-block">
          <span className="text-[11px] font-medium tracking-[0.3em] text-[#c5a880] uppercase">
            Private Brokerage & Advisory
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-[1.12]">
          Timeless Architecture. <br />
          <span className="italic font-normal text-[#dfc9a8]">
            Discreet Advisory.
          </span>
        </h1>

        {/* Refined Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
          Representing premier residential estates, architectural landmarks, and confidential off-market acquisitions across Beverly Hills, Manhattan, and Miami.
        </p>

        {/* Minimal Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onExploreEstates}
            className="bg-[#c5a880] hover:bg-[#dfc9a8] text-[#08090c] font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-200 cursor-pointer flex items-center gap-2.5 shadow-lg hover:shadow-[#c5a880]/20"
          >
            <span>Explore Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenBookingModal}
            className="bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium text-xs uppercase tracking-widest px-8 py-4 rounded-sm border border-white/15 hover:border-[#c5a880]/50 transition-all duration-200 cursor-pointer"
          >
            Private Consultation
          </button>
        </div>

      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center gap-2 pt-8">
        <button
          onClick={onExploreEstates}
          className="text-slate-400 hover:text-[#dfc9a8] transition-colors flex flex-col items-center gap-1.5 cursor-pointer group"
          aria-label="Scroll down to portfolio"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-slate-400 group-hover:text-[#dfc9a8]">
            Curated Works
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-[#c5a880] animate-bounce" />
        </button>
      </div>

    </section>
  );
}

