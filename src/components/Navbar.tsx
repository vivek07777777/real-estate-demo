import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { AGENCY_INFO } from "../data";

interface NavbarProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBookingModal: (propertyTitle?: string, agentName?: string) => void;
}

export default function Navbar({
  currentSection,
  onNavigate,
  onOpenBookingModal,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Portfolio", id: "estates-section" },
    { label: "Advisors", id: "agents-section" },
    { label: "Advisory", id: "services-section" },
    { label: "Inquire", id: "contact-section" },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090c]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-4"
          : "bg-gradient-to-b from-[#08090c]/90 via-[#08090c]/40 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity / Minimal Logo */}
          <div
            onClick={() => handleItemClick("hero-section")}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-sm bg-[#c5a880] flex items-center justify-center p-0.5 shadow-sm">
              <div className="w-full h-full bg-[#08090c] flex items-center justify-center">
                <span className="font-display text-sm font-bold text-[#dfc9a8] tracking-tighter">
                  A
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base tracking-[0.22em] font-semibold text-white group-hover:text-[#dfc9a8] transition-colors uppercase">
                Real Estate
              </span>
              <span className="text-[8px] tracking-[0.3em] text-slate-400 uppercase font-medium">
                ESTATES & ADVISORY
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-xs font-medium tracking-[0.15em] uppercase transition-colors relative py-1 cursor-pointer ${
                    isActive
                      ? "text-[#dfc9a8]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${AGENCY_INFO.phone.replace(/[^0-9+]/g, "")}`}
              className="text-xs text-slate-400 hover:text-[#dfc9a8] transition-colors font-mono tracking-wide"
              title="Direct Brokerage Desk"
            >
              {AGENCY_INFO.phone}
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="bg-[#c5a880] hover:bg-[#dfc9a8] text-[#08090c] font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-sm transition-all duration-200 cursor-pointer"
            >
              Private Viewing
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenBookingModal()}
              className="bg-[#c5a880] text-[#08090c] font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-sm"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white border border-white/10 rounded-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c10] border-b border-white/10 px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="text-left text-xs uppercase tracking-widest text-slate-300 hover:text-[#dfc9a8] py-2 border-b border-white/5 font-medium flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full text-center py-2.5 bg-[#c5a880] text-[#08090c] text-xs font-bold uppercase tracking-widest rounded-sm"
              >
                Request Private Consultation
              </button>

              <a
                href={`tel:${AGENCY_INFO.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center justify-center gap-2 text-xs text-slate-400 py-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>{AGENCY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
