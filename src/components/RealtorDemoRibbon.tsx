import React from 'react';
import { Sparkles, ArrowRight, Building, CheckCircle } from 'lucide-react';

interface RealtorDemoRibbonProps {
  agencyName: string;
  cityName: string;
  onOpenModal: () => void;
}

export default function RealtorDemoRibbon({
  agencyName,
  cityName,
  onOpenModal
}: RealtorDemoRibbonProps) {
  return (
    <div className="bg-[#1D1B18] text-[#DFC9A8] px-4 py-2 text-xs border-b border-[#3D3831] relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="font-medium text-[11px] tracking-wide text-white">
            <strong className="text-[#DFC9A8] font-semibold">REALTOR DEMO SHOWCASE:</strong> Specially engineered for Indian Real Estate Firms & Brokers ({cityName || 'Mumbai • Delhi NCR • Bengaluru • Goa'})
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#B89358]/25 hover:bg-[#B89358]/40 text-[#DFC9A8] border border-[#B89358]/50 text-[10px] uppercase font-semibold tracking-wider transition-all cursor-pointer shadow-xs"
          >
            <Sparkles className="w-3 h-3 text-[#DFC9A8]" />
            <span>Customize For Your Firm</span>
            <ArrowRight className="w-3 h-3 ml-0.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
