import React from 'react';
import { SERVICES } from '../data';
import { ArrowRight, ShieldCheck, Landmark, KeySquare, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsult: () => void;
}

export default function ServicesSection({ onOpenConsult }: ServicesSectionProps) {
  return (
    <div className="space-y-12">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-[#EAE4DA]">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89358]" />
            <span className="text-[11px] font-medium tracking-[0.25em] text-[#8C6A34] uppercase">
              Advisory Practice
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1D1B18] tracking-tight">
            India Private Wealth Practice
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#6F6A61] max-w-md font-light leading-relaxed">
          From discreet off-market acquisitions in Lutyens&apos; Delhi and South Mumbai to FEMA repatriation and Vastu Shastra due diligence.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((srv, idx) => (
          <div
            key={srv.id}
            className="p-6 bg-white border border-[#EAE4DA] hover:border-[#B89358]/60 rounded-sm flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md transition-all duration-300 group"
          >
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#8C6A34] font-semibold">
                0{idx + 1}
              </span>

              <div>
                <h3 className="font-serif text-xl font-normal text-[#1D1B18] group-hover:text-[#8C6A34] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-[#8C6A34] font-medium mt-1">
                  {srv.subtitle}
                </p>
              </div>

              <p className="text-xs text-[#6F6A61] font-light leading-relaxed">
                {srv.description}
              </p>
            </div>

            <button
              onClick={onOpenConsult}
              className="text-xs uppercase tracking-widest text-[#1D1B18] group-hover:text-[#8C6A34] flex items-center gap-2 pt-4 border-t border-[#F4EFE6] cursor-pointer transition-colors font-medium"
            >
              <span>Consult Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
