import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from '../data';

interface NavbarProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBookingModal: (propertyTitle?: string, agentName?: string) => void;
  currency?: 'INR' | 'USD' | 'AED';
  onToggleCurrency?: () => void;
  agencyName?: string;
  cityName?: string;
  onOpenDemoModal?: () => void;
}

export default function Navbar({
  currentSection,
  onNavigate,
  onOpenBookingModal,
  currency = 'INR',
  onToggleCurrency,
  agencyName = AGENCY_INFO.name,
  cityName = 'MUMBAI • DELHI NCR • BENGALURU',
  onOpenDemoModal
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Estates', id: 'estates-section' },
    { label: 'Film Reel', id: 'cinematic-section' },
    { label: 'Partners', id: 'agents-section' },
    { label: 'Advisory', id: 'services-section' },
    { label: 'Private Desk', id: 'contact-section' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE4DA] shadow-xs py-3'
          : 'bg-[#FAF8F5] border-b border-[#EAE4DA]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity / Logo */}
          <div
            onClick={() => handleItemClick('hero-section')}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-xs bg-[#B89358] flex items-center justify-center p-0.5 shadow-xs">
              <div className="w-full h-full bg-[#1D1B18] flex items-center justify-center">
                <span className="font-display text-sm font-semibold text-[#DFC9A8] tracking-tighter">
                  {agencyName ? agencyName.charAt(0) : 'A'}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base tracking-[0.2em] font-semibold text-[#1D1B18] group-hover:text-[#8C6A34] transition-colors uppercase">
                {agencyName}
              </span>
              <span className="text-[8px] tracking-[0.26em] text-[#8C6A34] uppercase font-semibold">
                {cityName ? `${cityName} • RERA REGISTERED` : 'INDIA PRIVATE CLIENT REAL ESTATE • RERA'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => {
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-xs font-medium tracking-[0.16em] uppercase transition-colors relative py-1 cursor-pointer ${
                    isActive
                      ? 'text-[#8C6A34] font-semibold'
                      : 'text-[#6F6A61] hover:text-[#1D1B18]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#B89358] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3.5">
            
            

            <a
              href={`tel:${AGENCY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="text-xs text-[#6F6A61] hover:text-[#8C6A34] transition-colors font-mono tracking-tight hidden xl:inline-block"
              title="Direct Private Client Desk"
            >
              {AGENCY_INFO.phone}
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="bg-[#1D1B18] hover:bg-[#8C6A34] text-white font-medium text-xs uppercase tracking-widest px-4 py-2 rounded-sm transition-all duration-200 cursor-pointer shadow-xs"
            >
              Private Viewing
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-2">
            {onToggleCurrency && (
              <button
                onClick={onToggleCurrency}
                className="text-[10px] font-mono px-2 py-1 rounded border border-[#EAE4DA] bg-white text-[#8C6A34] font-bold"
              >
                {currency === 'INR' ? '₹ INR' : '$ USD'}
              </button>
            )}
            <button
              onClick={() => onOpenBookingModal()}
              className="bg-[#1D1B18] text-white font-medium text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-sm"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1D1B18] hover:text-[#8C6A34] border border-[#EAE4DA] bg-white rounded-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#EAE4DA] px-4 pt-4 pb-6 mt-3 shadow-xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            
            {onOpenDemoModal && (
              <div className="pb-2 border-b border-[#FAF8F5]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemoModal();
                  }}
                  className="w-full text-left py-2 px-3 bg-[#FAF8F5] border border-[#DFC9A8] rounded-xs text-xs font-semibold text-[#8C6A34] flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Realtor Demo Settings & Features</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="text-left text-xs uppercase tracking-widest text-[#1D1B18] hover:text-[#8C6A34] py-2 border-b border-[#FAF8F5] font-medium flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8C6A34]" />
              </button>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full text-center py-2.5 bg-[#1D1B18] hover:bg-[#8C6A34] text-white text-xs font-medium uppercase tracking-widest rounded-sm transition-colors"
              >
                Request Private Consultation
              </button>

              <a
                href={`tel:${AGENCY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center gap-2 text-xs text-[#6F6A61] py-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#8C6A34]" />
                <span>{AGENCY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
