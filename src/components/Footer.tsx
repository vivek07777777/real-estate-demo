import React from 'react';
import { Link } from 'react-router-dom';
import { AGENCY_INFO } from '../data';
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Clock,
  Instagram,
  Linkedin,
  Compass
} from 'lucide-react';

interface FooterProps {
  onOpenConsult?: () => void;
}

export default function Footer({ onOpenConsult }: FooterProps) {
  return (
    <footer className="bg-[#141311] text-[#EAE4DA] pt-20 pb-12 border-t border-[#2A2824]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Callout Strip: Confidential Mandates */}
        <div className="p-8 sm:p-10 rounded-xs bg-[#1F1D1A] border border-[#33302B] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] tracking-[0.25em] text-[#DFC9A8] uppercase font-semibold">
              Discreet Representation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
              Representing India&apos;s Most Discerning Property Portfolios
            </h3>
            <p className="text-xs sm:text-sm text-[#A59F94] font-light leading-relaxed">
              Whether acquiring a trophy penthouse on Worli Sea Face or liquidating an off-market freehold estate in Lutyens&apos; Delhi, our partners provide fiduciary counsel under mutual non-disclosure agreements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5">
            {onOpenConsult ? (
              <button
                onClick={onOpenConsult}
                className="px-6 py-3 rounded-xs bg-[#B89358] hover:bg-[#A37E45] text-white text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer shadow-sm"
              >
                Book Private Consultation
              </button>
            ) : (
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xs bg-[#B89358] hover:bg-[#A37E45] text-white text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer shadow-sm"
              >
                Book Private Consultation
              </Link>
            )}

            <a
              href={`tel:${AGENCY_INFO.phone}`}
              className="px-5 py-3 rounded-xs border border-[#444039] hover:border-[#DFC9A8] text-white/90 text-xs uppercase tracking-widest font-medium transition-colors"
            >
              Direct Line
            </a>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pt-4">
          
          {/* Column 1: Brand & Fiduciary Accreditation */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xs bg-[#B89358] flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-[#141311] flex items-center justify-center">
                  <span className="font-display text-sm font-semibold text-[#DFC9A8]">R</span>
                </div>
              </div>
              <div>
                <span className="font-display text-base tracking-[0.2em] font-semibold text-white uppercase block">
                  {AGENCY_INFO.name}
                </span>
                <span className="text-[8px] tracking-[0.2em] text-[#DFC9A8] uppercase font-semibold block">
                  Private Client Office
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#A59F94] font-light leading-relaxed max-w-md">
              {AGENCY_INFO.fullName} is an institutional luxury real estate advisory representing high-net-worth individuals, family offices, and NRI investors in India&apos;s most coveted micro-markets.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-[#8E877C]">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B89358]" />
                <span>{AGENCY_INFO.reraOrn}</span>
              </p>
              <p className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#B89358]" />
                <span>Certified Vastu Audits & FEMA Repatriation Desk</span>
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A59F94] font-light">
              <li>
                <Link to="/" className="hover:text-[#DFC9A8] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-[#DFC9A8] transition-colors">
                  Curated Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#DFC9A8] transition-colors">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#DFC9A8] transition-colors">
                  Architectural Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#DFC9A8] transition-colors">
                  Contact & Private Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional Practice Suites */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Regional Suites
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A59F94] font-light">
              <li className="space-y-0.5">
                <span className="text-white block font-medium">Mumbai Flagship</span>
                <span className="text-[11px] text-[#8E877C]">Maker Maxity, BKC</span>
              </li>
              <li className="space-y-0.5">
                <span className="text-white block font-medium">New Delhi LBZ</span>
                <span className="text-[11px] text-[#8E877C]">Connaught Place Suite</span>
              </li>
              <li className="space-y-0.5">
                <span className="text-white block font-medium">Gurugram Golf Links</span>
                <span className="text-[11px] text-[#8E877C]">DLF Cyber City Level 14</span>
              </li>
              <li className="space-y-0.5">
                <span className="text-white block font-medium">Bengaluru & Goa</span>
                <span className="text-[11px] text-[#8E877C]">UB City & Assagao Quintas</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Private Contacts & Hours */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#A59F94] font-light">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#DFC9A8]" />
                <a href={`tel:${AGENCY_INFO.phone}`} className="hover:text-white">
                  {AGENCY_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#DFC9A8]" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white">
                  {AGENCY_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2 text-[11px] pt-1">
                <Clock className="w-3.5 h-3.5 text-[#DFC9A8]" />
                <span>Mon – Sat: 09:30 AM – 07:30 PM IST</span>
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xs bg-[#24211D] border border-[#3A362F] flex items-center justify-center text-[#DFC9A8] hover:text-white hover:border-[#B89358] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xs bg-[#24211D] border border-[#3A362F] flex items-center justify-center text-[#DFC9A8] hover:text-white hover:border-[#B89358] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Accreditation & Copyright Bar */}
        <div className="pt-8 border-t border-[#2A2824] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#7E786E]">
          <p>
            © {new Date().getFullYear()} {AGENCY_INFO.fullName}. All rights reserved.
          </p>

          <p className="text-center md:text-right font-light max-w-xl">
            Regulated under {AGENCY_INFO.regulatoryCertifications}. Real estate transactions conducted in adherence to RERA guidelines and FEMA non-resident investor statutory standards.
          </p>
        </div>

      </div>
    </footer>
  );
}
