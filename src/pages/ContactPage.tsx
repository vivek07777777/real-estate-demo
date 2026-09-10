import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { AGENCY_INFO, FAQS } from '../data';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Building2,
  Send
} from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    inquiryType: 'Acquisition of Trophy Residence',
    cityFocus: 'Mumbai',
    budgetTier: '₹50 Cr - ₹100 Cr',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 8000);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      
      {/* 1. DISTINCT CONTACT HERO (46vh, Office / Executive Suite, Confident Headline) */}
      <PageHero
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=90"
        badge="Confidential Advisory Desk"
        badgeIcon={<ShieldCheck className="w-3.5 h-3.5 text-[#DFC9A8]" />}
        title="Initiate a Confidential Dialogue"
        subtitle="Our senior partners are at your service across Mumbai, New Delhi, Gurugram, Bengaluru, and Goa."
        ctaText="Submit Inquiry"
        onCtaClick={() => {
          const el = document.getElementById('contact-form-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. REGIONAL OFFICE DIRECTORY STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {AGENCY_INFO.offices.map((office, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#EAE4DA] rounded-sm p-5 space-y-2 shadow-xs"
            >
              <div className="flex items-center gap-2 text-[#8C6A34]">
                <Building2 className="w-4 h-4" />
                <span className="font-serif text-sm font-semibold text-[#1D1B18]">
                  {office.city}
                </span>
              </div>
              <p className="text-[11px] text-[#6F6A61] font-light leading-relaxed">
                {office.address}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CONTACT FORM & PRIVATE CHANNELS GRID */}
      <section id="contact-form-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (7 cols): Comprehensive Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#EAE4DA] rounded-sm p-8 sm:p-12 space-y-8 shadow-xs">
            <div className="space-y-2">
              <span className="text-[11px] font-medium tracking-[0.25em] text-[#8C6A34] uppercase">
                Direct Communication
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1B18] font-light">
                Private Consultation Request
              </h2>
              <p className="text-xs sm:text-sm text-[#6F6A61] font-light">
                All communications are handled under stringent attorney-client confidentiality and mutual non-disclosure agreements.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-sm text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-800">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-emerald-900 font-medium">
                  Inquiry Registered with Senior Partner Desk
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold">{formData.fullName || 'Client'}</span>. A Managing Principal will reach out via WhatsApp and phone within 2 hours. Reference Dossier: #AUR-{Math.floor(100000 + Math.random() * 900000)}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-semibold tracking-wider text-[#6F6A61] block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g., Rohit Singhania"
                      className="w-full px-4 py-2.5 rounded-xs border border-[#EAE4DA] text-xs text-[#1D1B18] focus:border-[#B89358] focus:outline-none bg-[#FAF8F5]/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-semibold tracking-wider text-[#6F6A61] block">
                      Phone / WhatsApp (with Country Code) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98200 00000 or +1 (415)..."
                      className="w-full px-4 py-2.5 rounded-xs border border-[#EAE4DA] text-xs text-[#1D1B18] focus:border-[#B89358] focus:outline-none bg-[#FAF8F5]/60"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-semibold tracking-wider text-[#6F6A61] block">
                    Corporate / Personal Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rohit@singhaniaholdings.com"
                    className="w-full px-4 py-2.5 rounded-xs border border-[#EAE4DA] text-xs text-[#1D1B18] focus:border-[#B89358] focus:outline-none bg-[#FAF8F5]/60"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-semibold tracking-wider text-[#6F6A61] block">
                      Nature of Inquiry
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xs border border-[#EAE4DA] text-xs text-[#1D1B18] focus:border-[#B89358] focus:outline-none bg-[#FAF8F5]/60"
                    >
                      <option>Acquisition of Trophy Residence</option>
                      <option>Confidential Off-Market Listing</option>
                      <option>NRI / FEMA Repatriation Advice</option>
                      <option>Section 54 Capital Gains Reinvestment</option>
                      <option>Estate Valuation & Title Audit</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-semibold tracking-wider text-[#6F6A61] block">
                      City / Region of Interest
                    </label>
                    <select
                      value={formData.cityFocus}
                      onChange={(e) => setFormData({ ...formData, cityFocus: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xs border border-[#EAE4DA] text-xs text-[#1D1B18] focus:border-[#B89358] focus:outline-none bg-[#FAF8F5]/60"
                    >
                      <option>Mumbai (Worli, Malabar Hill, BKC)</option>
                      <option>New Delhi (Lutyens LBZ, Chanakyapuri)</option>
                      <option>Gurugram (Golf Course Road, Camellias)</option>
                      <option>North Goa (Assagao, Anjuna, Alibaug)</option>
                      <option>Bengaluru (Sadashivnagar, UB City)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-semibold tracking-wider text-[#6F6A61] block">
                      Anticipated Budget Tier
                    </label>
                    <select
                      value={formData.budgetTier}
                      onChange={(e) => setFormData({ ...formData, budgetTier: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xs border border-[#EAE4DA] text-xs text-[#1D1B18] focus:border-[#B89358] focus:outline-none bg-[#FAF8F5]/60"
                    >
                      <option>₹25 Cr – ₹50 Cr</option>
                      <option>₹50 Cr – ₹100 Cr</option>
                      <option>₹100 Cr – ₹250 Cr</option>
                      <option>₹250 Cr+ (Industrial Scale)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-semibold tracking-wider text-[#6F6A61] block">
                    Specific Requirements or Brief
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Specific architectural preferences, Vastu guidelines, timeline, or non-disclosure parameters..."
                    className="w-full px-4 py-3 rounded-xs border border-[#EAE4DA] text-xs text-[#1D1B18] focus:border-[#B89358] focus:outline-none bg-[#FAF8F5]/60"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xs bg-[#1D1B18] hover:bg-[#8C6A34] text-white text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Confidential Mandate Request</span>
                </button>

                <p className="text-[11px] text-[#8E877C] text-center font-light">
                  Direct communication protected by RERA guidelines and non-disclosure standards.
                </p>
              </form>
            )}
          </div>

          {/* Right Column (5 cols): Office Details, WhatsApp & Interactive Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Lines & Concierge */}
            <div className="bg-white border border-[#EAE4DA] rounded-sm p-8 space-y-6 shadow-xs">
              <h3 className="font-serif text-2xl font-medium text-[#1D1B18]">
                Private Client Channels
              </h3>

              <div className="space-y-4 text-xs text-[#4A453E]">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#8C6A34] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8E877C] block text-[10px] uppercase font-semibold">
                      Direct Advisory Line
                    </span>
                    <a href={`tel:${AGENCY_INFO.phone}`} className="font-mono text-sm text-[#1D1B18] font-semibold hover:text-[#8C6A34]">
                      {AGENCY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#8C6A34] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8E877C] block text-[10px] uppercase font-semibold">
                      Confidential Inbox
                    </span>
                    <a href={`mailto:${AGENCY_INFO.email}`} className="text-sm text-[#1D1B18] font-medium hover:text-[#8C6A34]">
                      {AGENCY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#8C6A34] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8E877C] block text-[10px] uppercase font-semibold">
                      Operating Hours
                    </span>
                    <span className="text-xs text-[#1D1B18] block">
                      Monday – Saturday: 09:30 AM – 07:30 PM IST
                    </span>
                    <span className="text-[11px] text-[#8E877C]">
                      Sunday: By appointment for verified family offices
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919820048800?text=${encodeURIComponent("Hello, I would like to schedule a private advisory consultation.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xs bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-widest font-semibold transition-colors shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Private Concierge</span>
                </a>
              </div>
            </div>

            {/* Embedded Map Representation */}
            <div className="bg-white border border-[#EAE4DA] rounded-sm p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-medium text-[#1D1B18]">
                  Flagship Advisory Suite
                </h4>
                <span className="text-xs text-[#8C6A34] font-medium">
                  BKC, Mumbai
                </span>
              </div>

              <div className="relative aspect-[16/10] w-full rounded-xs overflow-hidden border border-[#EAE4DA] bg-[#F4EFE6] flex items-center justify-center p-6 text-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8C6A34_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 space-y-2">
                  <MapPin className="w-8 h-8 text-[#8C6A34] mx-auto animate-bounce" />
                  <div className="font-serif text-base font-medium text-[#1D1B18]">
                    Maker Maxity, North Avenue, Level 5
                  </div>
                  <div className="text-xs text-[#6F6A61]">
                    Bandra Kurla Complex (BKC), Mumbai 400051
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FREQUENTLY ASKED ADVISORY QUESTIONS (ACCORDION) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[11px] font-medium tracking-[0.25em] text-[#8C6A34] uppercase">
            Clarity & Protocol
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1B18] font-light">
            Frequently Addressed Advisory Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = activeFaqIndex === index;
            return (
              <div
                key={faq.id}
                className="bg-white border border-[#EAE4DA] rounded-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5]"
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-[#1D1B18]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8C6A34] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#4A453E] font-light leading-relaxed border-t border-[#F4EFE6] bg-[#FAF8F5]/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
