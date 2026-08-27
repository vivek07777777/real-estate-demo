import React, { useState } from 'react';
import { AGENCY_INFO, AGENTS, PROPERTIES } from '../data';
import { Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

interface ContactFormProps {
  initialPropertyTitle?: string;
  initialAgentName?: string;
  onSuccess?: () => void;
}

export default function ContactForm({
  initialPropertyTitle,
  initialAgentName,
  onSuccess
}: ContactFormProps) {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [inquiryType, setInquiryType] = useState(
    initialPropertyTitle ? 'Private Viewing' : 'Bespoke Advisory'
  );
  const [selectedProperty, setSelectedProperty] = useState(initialPropertyTitle || 'General Portfolio');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) return;
    setIsSubmitted(true);
    if (onSuccess) onSuccess();
  };

  return (
    <div id="contact-section" className="bg-[#0c0e14] border border-white/10 rounded-sm p-8 sm:p-12 shadow-2xl">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-[11px] font-medium tracking-[0.25em] text-[#c5a880] uppercase block">
            Private Client Desk
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">
            Initiate a Confidential Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
            Schedule a private viewing, explore unlisted off-market estates, or request an institutional valuation.
          </p>
        </div>

        {/* Form Body */}
        {isSubmitted ? (
          <div className="text-center py-12 space-y-4 animate-in fade-in bg-[#11141e] border border-white/10 p-8 rounded-sm">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#c5a880]/15 flex items-center justify-center text-[#dfc9a8]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-2xl text-white">Inquiry Received</h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{clientName}</strong>. Our senior advisory desk has received your request and will contact you directly within 2 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 px-6 py-2 bg-white/5 hover:bg-white/10 text-xs text-slate-300 uppercase tracking-wider rounded-sm transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#11141e] border border-white/10 text-slate-200 text-xs rounded-sm px-4 py-3 focus:outline-none focus:border-[#c5a880] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full bg-[#11141e] border border-white/10 text-slate-200 text-xs rounded-sm px-4 py-3 focus:outline-none focus:border-[#c5a880] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+1 (000) 000-0000"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-[#11141e] border border-white/10 text-slate-200 text-xs rounded-sm px-4 py-3 focus:outline-none focus:border-[#c5a880] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Objective
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full bg-[#11141e] border border-white/10 text-slate-200 text-xs rounded-sm px-4 py-3 focus:outline-none focus:border-[#c5a880] transition-colors"
                >
                  <option value="Private Viewing">Schedule Private Estate Viewing</option>
                  <option value="Off-Market Search">Confidential Off-Market Search</option>
                  <option value="Selling / Representation">Seller Representation & Valuation</option>
                  <option value="Bespoke Advisory">General Portfolio Consultation</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Residence of Interest (Optional)
              </label>
              <select
                value={selectedProperty}
                onChange={(e) => setSelectedProperty(e.target.value)}
                className="w-full bg-[#11141e] border border-white/10 text-slate-200 text-xs rounded-sm px-4 py-3 focus:outline-none focus:border-[#c5a880] transition-colors"
              >
                <option value="General Portfolio">General Portfolio / Off-Market</option>
                {PROPERTIES.map((p) => (
                  <option key={p.id} value={p.title}>
                    {p.title} — {p.priceFormatted}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Notes & Preferences
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share any timing preferences or specific architectural requirements..."
                className="w-full bg-[#11141e] border border-white/10 text-slate-200 text-xs rounded-sm p-4 focus:outline-none focus:border-[#c5a880] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#c5a880] hover:bg-[#dfc9a8] text-[#08090c] font-semibold text-xs uppercase tracking-widest rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Submit Confidential Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-slate-400 font-light">
              <a href={`tel:${AGENCY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-1.5 hover:text-[#dfc9a8] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>{AGENCY_INFO.phone}</span>
              </a>
              <a href={`mailto:${AGENCY_INFO.email}`} className="flex items-center gap-1.5 hover:text-[#dfc9a8] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>{AGENCY_INFO.email}</span>
              </a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}

