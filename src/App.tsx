import React, { useState } from 'react';
import { Property, Agent } from './types';
import { PROPERTIES, AGENCY_INFO } from './data';

import RealtorDemoRibbon from './components/RealtorDemoRibbon';
import RealtorDemoModal from './components/RealtorDemoModal';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CinematicShowcase from './components/CinematicShowcase';
import PropertyCards from './components/PropertyCards';
import AgentCards from './components/AgentCards';
import ServicesSection from './components/ServicesSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PropertyDetailModal from './components/PropertyDetailModal';
import AgentDetailModal from './components/AgentDetailModal';

import { X } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState<string>('hero-section');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  
  // Dynamic brand customization for any Indian realtor/brokerage viewing the demo
  const [customAgencyName, setCustomAgencyName] = useState<string>(AGENCY_INFO.name);
  const [customCity, setCustomCity] = useState<string>('MUMBAI • DELHI NCR • BENGALURU • GOA');
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Modal states
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPropertyTitle, setBookingPropertyTitle] = useState<string | undefined>();
  const [bookingAgentName, setBookingAgentName] = useState<string | undefined>();

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'INR' ? 'USD' : 'INR'));
  };

  const handleOpenBookingModal = (propertyTitle?: string, agentName?: string) => {
    setBookingPropertyTitle(propertyTitle);
    setBookingAgentName(agentName);
    setBookingModalOpen(true);
  };

  const handleSelectPropertyFromId = (propertyId: string) => {
    const prop = PROPERTIES.find((p) => p.id === propertyId);
    if (prop) {
      setSelectedProperty(prop);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1D1B18] selection:bg-[#B89358]/30 selection:text-[#1D1B18] font-sans antialiased">
      
      {/* 0. Top Realtor Showcase Demo Ribbon */}
      <RealtorDemoRibbon
        agencyName={customAgencyName}
        cityName={customCity}
        onOpenModal={() => setDemoModalOpen(true)}
      />

      {/* Sticky Classical Light Navbar */}
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onOpenBookingModal={handleOpenBookingModal}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        agencyName={customAgencyName}
        cityName={customCity}
        onOpenDemoModal={() => setDemoModalOpen(true)}
      />

      <main className="space-y-24 sm:space-y-32 pb-24">
        
        {/* 1. HERO SECTION WITH ARCHITECTURAL VIDEO */}
        <HeroSection
          onOpenBookingModal={() => handleOpenBookingModal()}
          onExploreEstates={() => handleNavigate('estates-section')}
          onWatchFilm={() => handleNavigate('cinematic-section')}
          onOpenDemoModal={() => setDemoModalOpen(true)}
          agencyName={customAgencyName}
        />

        {/* 2. CINEMATIC ARCHITECTURAL FILM REEL */}
        <section id="cinematic-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <CinematicShowcase
            onBookViewing={(title) => handleOpenBookingModal(title)}
          />
        </section>

        {/* 3. ESTATES SHOWCASE SECTION */}
        <section id="estates-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-[#EAE4DA]">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89358]" />
                <span className="text-[11px] font-medium tracking-[0.25em] text-[#8C6A34] uppercase">
                  Curated Indian Residences
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1D1B18] tracking-tight">
                Trophy Mansions & Sea-Facing Sky Penthouses
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#6F6A61] max-w-md font-light leading-relaxed">
              Every residence is verified with State RERA registrations (MahaRERA, HRERA, Delhi RERA), 30-year non-encumbrance legal audits, and cardinal Vastu compliance.
            </p>
          </div>

          <PropertyCards
            currency={currency}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            onBookViewing={(prop) => handleOpenBookingModal(prop.title, prop.agentName)}
          />
        </section>

        {/* 4. SENIOR AGENTS & ADVISORS SECTION */}
        <section id="agents-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-[#EAE4DA]">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89358]" />
                <span className="text-[11px] font-medium tracking-[0.25em] text-[#8C6A34] uppercase">
                  State RERA Accredited Partners
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1D1B18] tracking-tight">
                Managing Partners & Advisory Board
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#6F6A61] max-w-md font-light leading-relaxed">
              India&apos;s most accomplished real estate advisors with over ₹8,500 Cr+ in closed mandates across Mumbai, Delhi LBZ, Gurugram, and Bengaluru.
            </p>
          </div>

          <AgentCards
            onSelectAgent={(agent) => setSelectedAgent(agent)}
            onContactAgent={(agent) => handleOpenBookingModal(undefined, agent.name)}
          />
        </section>

        {/* 5. ADVISORY PILLARS */}
        <section id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <ServicesSection
            onOpenConsult={() => handleOpenBookingModal()}
          />
        </section>

        {/* 6. CONTACT & PRIVATE APPOINTMENT DESK */}
        <section id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <ContactForm
            initialPropertyTitle={bookingPropertyTitle}
            initialAgentName={bookingAgentName}
            onSuccess={() => {}}
          />
        </section>

      </main>

      {/* FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsult={() => handleOpenBookingModal()}
        agencyName={customAgencyName}
      />

      {/* REALTOR DEMO SHOWCASE MODAL / BRAND SIMULATOR */}
      <RealtorDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        customAgencyName={customAgencyName}
        onUpdateAgencyName={(name) => setCustomAgencyName(name)}
        customCity={customCity}
        onUpdateCity={(city) => setCustomCity(city)}
        onOpenConsult={() => handleOpenBookingModal()}
      />

      {/* PROPERTY DETAIL DOSSIER MODAL */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onBookViewing={(prop) => {
          setSelectedProperty(null);
          handleOpenBookingModal(prop.title, prop.agentName);
        }}
        onContactAgent={(agent) => {
          setSelectedProperty(null);
          setSelectedAgent(agent);
        }}
      />

      {/* AGENT DETAIL MODAL */}
      <AgentDetailModal
        agent={selectedAgent}
        onClose={() => setSelectedAgent(null)}
        onBookAgentConsult={(agent) => {
          setSelectedAgent(null);
          handleOpenBookingModal(undefined, agent.name);
        }}
        onSelectProperty={(propId) => {
          setSelectedAgent(null);
          handleSelectPropertyFromId(propId);
        }}
      />

      {/* STANDALONE PRIVATE CONSULTATION / VIEWING BOOKING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white border border-[#EAE4DA] w-full max-w-3xl rounded-sm overflow-hidden shadow-2xl relative my-6 text-[#1D1B18]">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 z-20 bg-[#FAF8F5] hover:bg-[#F4EFE6] text-[#6F6A61] hover:text-[#1D1B18] p-2 rounded-full border border-[#EAE4DA] transition-colors cursor-pointer shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 max-h-[88vh] overflow-y-auto">
              <ContactForm
                initialPropertyTitle={bookingPropertyTitle}
                initialAgentName={bookingAgentName}
                onSuccess={() => setBookingModalOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
