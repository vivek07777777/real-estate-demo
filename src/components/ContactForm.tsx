import React, { useState } from 'react';
import { AGENCY_INFO, PROPERTIES } from '../data';
import { Phone, Mail, CheckCircle2, ArrowRight, MessageSquare, ShieldCheck, FileCheck } from 'lucide-react';

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
  const [selectedProperty, setSelectedProperty] = useState(initialPropertyTitle || 'General Indian Luxury Portfolio');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) return;
    setIsSubmitted(true);
    if (onSuccess) onSuccess();
  };

  return (
    <div id="contact-section" className="bg-white border border-[#EAE4DA] rounded-sm p-8 sm:p-12 shadow-sm">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EAE4DA]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8C6A34]" />
            <span className="text-[10px] font-semibold tracking-[0.25em] text-[#8C6A34] uppercase">
              Confidential Private Client Desk
            </span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1D1B18] tracking-tight">
            Initiate a Private Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-[#6F6A61] font-light leading-relaxed">
            Schedule an exclusive private viewing, explore unlisted South Mumbai & Lutyens&apos; Delhi estates, or discuss NRI / OCI FEMA capital repatriation.
          </p>
        </div>

        {/* Form Body */}
        {isSubmitted ? (
          <div className="text-center py-12 space-y-4 animate-in fade-in bg-[#FAF8F5] border border-[#EAE4DA] p-8 rounded-sm">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#DFC9A8]/40 flex items-center justify-center text-[#8C6A34]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-2xl text-[#1D1B18]">Inquiry Received</h4>
            <p className="text-xs text-[#6F6A61] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#1D1B18] font-medium">{clientName}</strong>. Our senior advisory desk has received your dossier and a Managing Partner will reach out privately within 2 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 px-6 py-2 bg-white hover:bg-[#F4EFE6] border border-[#EAE4DA] text-xs text-[#1D1B18] uppercase tracking-wider rounded-xs transition-colors cursor-pointer font-medium"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-[#6F6A61]">
                  Client Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Singhania"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-[#1D1B18] placeholder:text-[#9B958B] text-xs rounded-xs px-4 py-3 focus:outline-none focus:border-[#B89358] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-[#6F6A61]">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-[#1D1B18] placeholder:text-[#9B958B] text-xs rounded-xs px-4 py-3 focus:outline-none focus:border-[#B89358] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-[#6F6A61]">
                  Contact Number (WhatsApp enabled)
                </label>
                <input
                  type="tel"
                  placeholder="+91 98000 00000 / +1 (415) ..."
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-[#1D1B18] placeholder:text-[#9B958B] text-xs rounded-xs px-4 py-3 focus:outline-none focus:border-[#B89358] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-[#6F6A61]">
                  Nature of Inquiry
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-[#1D1B18] text-xs rounded-xs px-4 py-3 focus:outline-none focus:border-[#B89358] transition-colors"
                >
                  <option value="Private Viewing">Private Property Viewing</option>
                  <option value="Off-Market Estates">Off-Market Trophy Estates (Worli / Lutyens&apos; LBZ)</option>
                  <option value="NRI OCI Advisory">NRI / OCI Investment & FEMA Repatriation</option>
                  <option value="Vastu Due Diligence">Vastu Shastra & Architectural Evaluation</option>
                  <option value="Section 54 Capital Gains">Section 54 Capital Gains Planning</option>
                  <option value="Discreet Sale">Discreet Property Disposition</option>
                </select>
              </div>
            </div>

            {/* Target Property Selection */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-[#6F6A61]">
                Target Residence / Location (Optional)
              </label>
              <select
                value={selectedProperty}
                onChange={(e) => setSelectedProperty(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-[#1D1B18] text-xs rounded-xs px-4 py-3 focus:outline-none focus:border-[#B89358] transition-colors"
              >
                <option value="General Indian Luxury Portfolio">General Indian Luxury Portfolio Inquiry</option>
                {PROPERTIES.map((p) => (
                  <option key={p.id} value={p.title}>
                    {p.title} ({p.neighborhood}, {p.city} • {p.priceCr || p.priceFormatted})
                  </option>
                ))}
              </select>
            </div>

            {/* Note / Message */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold uppercase tracking-wider text-[#6F6A61]">
                Specific Requirements / Timing / Confidentiality Terms
              </label>
              <textarea
                rows={3}
                placeholder="Specify preferred cities (Mumbai, Delhi, Goa), cardinal orientation/Vastu requirements, or non-disclosure parameters..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#EAE4DA] text-[#1D1B18] placeholder:text-[#9B958B] text-xs rounded-xs px-4 py-3 focus:outline-none focus:border-[#B89358] transition-colors resize-none"
              />
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[11px] text-[#6F6A61] font-light flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>All client communications protected under non-disclosure confidentiality.</span>
              </p>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${AGENCY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Aura%20Realty,%20I%20would%20like%20to%20inquire%20regarding%20luxury%20properties%20in%20India.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-xs text-xs font-medium uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#1D1B18] hover:bg-[#8C6A34] text-white font-medium text-xs uppercase tracking-widest px-8 py-3 rounded-xs transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Submit Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </form>
        )}

        {/* Agency Direct Contacts Ribbon */}
        <div className="pt-8 border-t border-[#EAE4DA] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left text-xs text-[#6F6A61]">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C6A34] block">Mumbai & Delhi Headquarters</span>
            <p className="font-light text-[#1D1B18] mt-1">{AGENCY_INFO.offices[0]?.address || 'Maker Maxity, 5th Floor, Bandra-Kurla Complex (BKC), Mumbai'}</p>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C6A34] block">Direct Brokerage Desk</span>
            <p className="font-mono text-[#1D1B18] mt-1">{AGENCY_INFO.phone}</p>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C6A34] block">Regulatory Accreditation</span>
            <p className="text-[#1D1B18] mt-1">MahaRERA #A51900028491 • Delhi RERA #DLRERA2023A0041</p>
          </div>
        </div>

      </div>
    </div>
  );
}
