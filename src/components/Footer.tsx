import React from "react";
import { AGENCY_INFO } from "../data";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsult: () => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#050608] text-slate-400 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Brand & Contact Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-[#c5a880] flex items-center justify-center p-0.5 shadow-sm">
                <div className="w-full h-full bg-[#08090c] flex items-center justify-center">
                  <span className="font-display text-xs font-bold text-[#dfc9a8]">
                    A
                  </span>
                </div>
              </div>
              <span className="font-display text-base tracking-[0.2em] font-semibold text-white uppercase">
                Real Estate
              </span>
            </div>
            <p className="text-xs text-slate-400 font-light max-w-sm">
              Private estate advisory & architectural representation.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-xs uppercase tracking-widest text-slate-400">
            <button
              onClick={() => onNavigate("estates-section")}
              className="hover:text-[#dfc9a8] transition-colors cursor-pointer"
            >
              Portfolio
            </button>
            <button
              onClick={() => onNavigate("agents-section")}
              className="hover:text-[#dfc9a8] transition-colors cursor-pointer"
            >
              Advisors
            </button>
            <button
              onClick={() => onNavigate("services-section")}
              className="hover:text-[#dfc9a8] transition-colors cursor-pointer"
            >
              Advisory
            </button>
            <button
              onClick={() => onNavigate("contact-section")}
              className="hover:text-[#dfc9a8] transition-colors cursor-pointer"
            >
              Inquire
            </button>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            <span>{AGENCY_INFO.phone}</span>
          </div>
        </div>

        {/* Legal Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-light">
          <p>
            © {new Date().getFullYear()} Real Estate. All rights reserved. Equal
            Housing Opportunity.
          </p>
          <p>DRE #01948201 • Beverly Hills • New York • Miami</p>
        </div>
      </div>
    </footer>
  );
}
