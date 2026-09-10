import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BookingModal from './components/BookingModal';

import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPropertyTitle, setBookingPropertyTitle] = useState<string | undefined>();
  const [bookingAgentName, setBookingAgentName] = useState<string | undefined>();

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'INR' ? 'USD' : 'INR'));
  };

  const handleOpenBookingModal = (propertyTitle?: string, agentName?: string) => {
    setBookingPropertyTitle(propertyTitle);
    setBookingAgentName(agentName);
    setBookingModalOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1D1B18] selection:bg-[#B89358]/30 selection:text-[#1D1B18] font-sans antialiased">
        
        {/* Reset Scroll position on route change */}
        <ScrollToTop />

        {/* Persistent Sticky Top Navigation Bar */}
        <Navbar
          currency={currency}
          onToggleCurrency={handleToggleCurrency}
          onOpenBookingModal={() => handleOpenBookingModal()}
        />

        {/* Multi-Page Routes */}
        <main className="flex-1">
          <Routes>
            {/* 1. Home Route */}
            <Route
              path="/"
              element={
                <HomePage
                  currency={currency}
                  onOpenBookingModal={() => handleOpenBookingModal()}
                />
              }
            />

            {/* 2. Properties Listing Route */}
            <Route
              path="/properties"
              element={<PropertiesPage currency={currency} />}
            />

            {/* 3. Property Detail Route */}
            <Route
              path="/properties/:id"
              element={
                <PropertyDetailPage
                  currency={currency}
                  onOpenBookingModal={handleOpenBookingModal}
                />
              }
            />

            {/* 4. About Us Route */}
            <Route
              path="/about"
              element={
                <AboutPage
                  onOpenBookingModal={() => handleOpenBookingModal()}
                />
              }
            />

            {/* 5. Architectural Gallery Route */}
            <Route
              path="/gallery"
              element={<GalleryPage />}
            />

            {/* 6. Contact Us Route */}
            <Route
              path="/contact"
              element={<ContactPage />}
            />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Dark Anchored Footer */}
        <Footer
          onOpenConsult={() => handleOpenBookingModal()}
        />

        {/* Global Viewing / Consultation Booking Modal */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          propertyTitle={bookingPropertyTitle}
          agentName={bookingAgentName}
        />

      </div>
    </Router>
  );
}
