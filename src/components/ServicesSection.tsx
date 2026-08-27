import React from 'react';
import { SERVICES } from '../data';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsult: () => void;
}

export default function ServicesSection({ onOpenConsult }: ServicesSectionProps) {
  return (
    <div className="space-y-12">
      
      {/* Section Header */}
      <div className="max-w-2xl space-y-3">
        <span className="text-[11px] font-medium tracking-[0.25em] text-[#c5a880] uppercase block">
          Advisory Pillars
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight">
          Comprehensive Real Estate Representation
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
          From confidential off-market acquisitions to strategic dispositions and institutional valuations.
        </p>
      </div>

      {/* Services Grid (3 or 4 Clean Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.slice(0, 3).map((srv, idx) => (
          <div
            key={srv.id}
            className="p-6 bg-[#0e1017] border border-white/10 rounded-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#c5a880] font-semibold">
                0{idx + 1}
              </span>

              <div>
                <h3 className="font-serif text-2xl font-normal text-white">
                  {srv.title}
                </h3>
                <p className="text-xs text-[#dfc9a8] font-light mt-1">
                  {srv.subtitle}
                </p>
              </div>

              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {srv.description}
              </p>
            </div>

            <button
              onClick={onOpenConsult}
              className="text-xs uppercase tracking-widest text-[#c5a880] hover:text-[#dfc9a8] flex items-center gap-2 pt-4 border-t border-white/10 cursor-pointer transition-colors"
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

