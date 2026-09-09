import React from 'react';
import { AGENCY_INFO } from '../data';
import { ShieldCheck, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsult: () => void;
  agencyName?: string;
}

export default function Footer({ onNavigate, agencyName = AGENCY_INFO.name }: FooterProps) {
  return (
    <footer className="bg-[#FAF8F5] text-[#6F6A61] border-t border-[#EAE4DA] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Brand & Contact Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#EAE4DA]">
          
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-xs bg-[#B89358] flex items-center justify-center p-0.5 shadow-xs">
                <div className="w-full h-full bg-[#1D1B18] flex items-center justify-center">
                  <span className="font-display text-xs font-bold text-[#DFC9A8]">
                    {agencyName ? agencyName.charAt(0) : 'A'}
                  </span>
                </div>
              </div>
              <span className="font-display text-base tracking-[0.2em] font-semibold text-[#1D1B18] uppercase">
                {agencyName}
              </span>
            </div>
            <p className="text-xs text-[#6F6A61] font-light max-w-sm">
              Private client real estate office specializing in ultra-prime Indian residences, heritage bungalows & sky palaces.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-xs uppercase tracking-widest text-[#6F6A61]">
            <button
              onClick={() => onNavigate('estates-section')}
              className="hover:text-[#8C6A34] transition-colors cursor-pointer"
            >
              Residences
            </button>
            <button
              onClick={() => onNavigate('cinematic-section')}
              className="hover:text-[#8C6A34] transition-colors cursor-pointer"
            >
              Film Reel
            </button>
            <button
              onClick={() => onNavigate('agents-section')}
              className="hover:text-[#8C6A34] transition-colors cursor-pointer"
            >
              Partners
            </button>
            <button
              onClick={() => onNavigate('services-section')}
              className="hover:text-[#8C6A34] transition-colors cursor-pointer"
            >
              Advisory
            </button>
            <button
              onClick={() => onNavigate('contact-section')}
              className="hover:text-[#8C6A34] transition-colors cursor-pointer"
            >
              Inquire
            </button>
          </div>

          <div className="text-xs text-[#1D1B18] font-mono">
            <span>{AGENCY_INFO.phone}</span>
          </div>

        </div>

        {/* Indian Regulatory & Accreditation Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6F6A61] font-light">
          <p>© {new Date().getFullYear()} {agencyName}. All rights reserved. MahaRERA Reg. #A51900028491 • Delhi RERA #DLRERA2023A0041.</p>
          <p>Bandra-Kurla Complex (BKC) Mumbai • Barakhamba Road New Delhi • DLF Golf Course Road • Assagao Goa</p>
        </div>

      </div>
    </footer>
  );
}
