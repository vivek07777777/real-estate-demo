import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ChevronDown, ArrowRight } from 'lucide-react';
import { AGENCY_INFO } from '../data';

interface NavbarProps {
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
  onOpenBookingModal?: () => void;
}

export default function Navbar({
  currency,
  onToggleCurrency,
  onOpenBookingModal
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Subtle elevation on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#EAE4DA] shadow-xs py-3.5'
            : 'bg-[#FAF8F5]/90 backdrop-blur-xs border-b border-[#EAE4DA]/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* 1. Left Brand Identity */}
            <Link
              to="/"
              className="flex items-center gap-3 group text-left"
              aria-label="Real Estate Home"
            >
              <div className="w-9 h-9 rounded-xs bg-[#B89358] flex items-center justify-center p-0.5 shadow-xs transition-transform duration-200 group-hover:scale-105">
                <div className="w-full h-full bg-[#1D1B18] flex items-center justify-center">
                  <span className="font-display text-sm font-semibold text-[#DFC9A8] tracking-tighter">
                    R
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <span
                  id="brand-name"
                  className="font-display text-base tracking-[0.2em] font-semibold text-[#1D1B18] group-hover:text-[#8C6A34] transition-colors uppercase"
                >
                  {AGENCY_INFO.name}
                </span>
                <span className="text-[8px] tracking-[0.26em] text-[#8C6A34] uppercase font-semibold">
                  Private Client Office
                </span>
              </div>
            </Link>

            {/* 2. Center Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-[#8C6A34] font-semibold'
                        : 'text-[#4A453E] hover:text-[#1D1B18]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#B89358] rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* 3. Right Action Area: Currency Switcher & CTA */}
            <div className="hidden sm:flex items-center gap-3.5">
              {/* Currency Selector */}
              <button
                onClick={onToggleCurrency}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-[#EAE4DA] hover:border-[#B89358] bg-white text-[11px] font-medium text-[#4A453E] hover:text-[#1D1B18] transition-colors cursor-pointer shadow-2xs"
                title="Switch Currency Display (INR / USD)"
                aria-label="Toggle currency"
              >
                <span className="text-[#8C6A34] font-mono font-bold">
                  {currency === 'INR' ? '₹' : '$'}
                </span>
                <span>{currency}</span>
              </button>

              {/* Direct WhatsApp Concierge */}
              <a
                href={`https://wa.me/919820048800?text=${encodeURIComponent("Hello, I would like to inquire regarding private real estate advisory.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1.5 text-xs text-[#4A453E] hover:text-[#1D1B18] transition-colors px-2 py-1.5"
                title="WhatsApp Private Concierge"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-[11px] tracking-wider uppercase font-medium">WhatsApp</span>
              </a>

              {/* Primary Consultation CTA Button */}
              {onOpenBookingModal ? (
                <button
                  onClick={onOpenBookingModal}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-[#1D1B18] hover:bg-[#8C6A34] text-white text-xs uppercase tracking-widest font-medium transition-colors shadow-xs cursor-pointer"
                >
                  <span>Schedule Viewing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-[#1D1B18] hover:bg-[#8C6A34] text-white text-xs uppercase tracking-widest font-medium transition-colors shadow-xs cursor-pointer"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={onToggleCurrency}
                className="px-2.5 py-1 rounded-xs border border-[#EAE4DA] bg-white text-[10px] font-mono font-medium text-[#4A453E]"
              >
                {currency}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xs border border-[#EAE4DA] text-[#1D1B18] hover:bg-[#F4EFE6] transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-black/50 backdrop-blur-xs">
          <div className="fixed top-[65px] left-0 right-0 bg-[#FAF8F5] border-b border-[#EAE4DA] shadow-xl p-6 space-y-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `py-2.5 text-sm uppercase tracking-widest font-medium border-b border-[#EAE4DA]/60 ${
                      isActive ? 'text-[#8C6A34] font-semibold' : 'text-[#1D1B18]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="pt-2 space-y-3">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#1D1B18] text-white text-xs uppercase tracking-widest font-medium rounded-xs"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-between text-xs text-[#6F6A61] pt-2">
                <span>RERA: {AGENCY_INFO.reraOrn}</span>
                <a href={`tel:${AGENCY_INFO.phone}`} className="font-mono text-[#8C6A34]">
                  {AGENCY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
