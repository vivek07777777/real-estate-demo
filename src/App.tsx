import React, { useState } from 'react';
import { Property, Agent } from './types';
import { PROPERTIES } from './data';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
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
    <div className="min-h-screen bg-[#08090c] text-slate-100 selection:bg-[#c5a880]/30 selection:text-white font-sans antialiased">
      
      {/* Sticky Minimal Navbar */}
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onOpenBookingModal={handleOpenBookingModal}
      />

      <main className="space-y-28 sm:space-y-36 pb-24">
        
        {/* 1. HERO SECTION */}
        <HeroSection
          onOpenBookingModal={() => handleOpenBookingModal()}
          onExploreEstates={() => handleNavigate('estates-section')}
        />

        {/* 2. ESTATES SHOWCASE SECTION */}
        <section id="estates-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-28">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] font-medium tracking-[0.25em] text-[#c5a880] uppercase block">
              Curated Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              Notable Residences & Architectural Estates
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              An exclusive selection of premier trophy residences and private sanctuaries across primary markets.
            </p>
          </div>

          <PropertyCards
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            onBookViewing={(prop) => handleOpenBookingModal(prop.title, prop.agentName)}
          />
        </section>

        {/* 3. SENIOR AGENTS & ADVISORS SECTION */}
        <section id="agents-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-28">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] font-medium tracking-[0.25em] text-[#c5a880] uppercase block">
              Advisors
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              Senior Real Estate Partners
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Unrivaled market intelligence and discreet representation for discerning buyers, sellers, and family offices.
            </p>
          </div>

          <AgentCards
            onSelectAgent={(agent) => setSelectedAgent(agent)}
            onContactAgent={(agent) => handleOpenBookingModal(undefined, agent.name)}
          />
        </section>

        {/* 4. ADVISORY PILLARS */}
        <section id="services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <ServicesSection
            onOpenConsult={() => handleOpenBookingModal()}
          />
        </section>

        {/* 5. CONTACT & PRIVATE APPOINTMENT DESK */}
        <section id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
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
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#0f121a] border border-white/15 w-full max-w-3xl rounded-sm overflow-hidden shadow-2xl relative my-6">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-slate-300 hover:text-white p-2 rounded-full border border-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 max-h-[88vh] overflow-y-auto">
              <ContactForm
                initialPropertyTitle={bookingPropertyTitle}
                initialAgentName={bookingAgentName}
                onSuccess={() => {}}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

