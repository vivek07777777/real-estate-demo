import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Calendar, MessageSquare, Phone } from 'lucide-react';
import { AGENCY_INFO } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle?: string;
  agentName?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  propertyTitle,
  agentName
}: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'Morning (10:00 AM - 01:00 PM)',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white border border-[#EAE4DA] w-full max-w-2xl rounded-sm overflow-hidden shadow-2xl relative my-8 text-[#1D1B18]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-[#FAF8F5] hover:bg-[#F4EFE6] text-[#6F6A61] hover:text-[#1D1B18] p-2 rounded-full border border-[#EAE4DA] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-[#FAF8F5] border-b border-[#EAE4DA] p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89358]" />
            <span className="text-[10px] font-semibold tracking-[0.25em] text-[#8C6A34] uppercase">
              Private Client Desk
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1B18] font-normal pt-1">
            {propertyTitle ? `Schedule Viewing: ${propertyTitle}` : 'Schedule Private Consultation'}
          </h3>
          <p className="text-xs text-[#6F6A61] font-light pt-1">
            {agentName ? `With ${agentName} & Executive Partner Desk` : `With ${AGENCY_INFO.fullName}`}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="p-8 text-center space-y-3 bg-emerald-50 border border-emerald-200 rounded-xs">
              <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
              <h4 className="font-serif text-2xl text-emerald-900 font-medium">
                Appointment Registered
              </h4>
              <p className="text-xs text-emerald-800 font-light max-w-md mx-auto">
                Thank you. Our senior partner desk will contact you via WhatsApp and phone within 2 hours to confirm security credentials and logistics.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-[#6F6A61]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Rohit Singhania"
                    className="w-full px-3.5 py-2 text-xs border border-[#EAE4DA] rounded-xs bg-[#FAF8F5]/60 focus:border-[#B89358] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-[#6F6A61]">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98200 00000"
                    className="w-full px-3.5 py-2 text-xs border border-[#EAE4DA] rounded-xs bg-[#FAF8F5]/60 focus:border-[#B89358] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-[#6F6A61]">
                    Corporate / Private Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rohit@familyoffice.com"
                    className="w-full px-3.5 py-2 text-xs border border-[#EAE4DA] rounded-xs bg-[#FAF8F5]/60 focus:border-[#B89358] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-semibold text-[#6F6A61]">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#EAE4DA] rounded-xs bg-[#FAF8F5]/60 focus:border-[#B89358] focus:outline-none"
                  >
                    <option>Morning (10:00 AM – 01:00 PM)</option>
                    <option>Afternoon (02:00 PM – 05:00 PM)</option>
                    <option>Evening Twilight (05:00 PM – 07:30 PM)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-semibold text-[#6F6A61]">
                  Confidential Brief / Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specific requirements, VIP security clearance, or NRI remittance briefing..."
                  className="w-full px-3.5 py-2 text-xs border border-[#EAE4DA] rounded-xs bg-[#FAF8F5]/60 focus:border-[#B89358] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xs bg-[#1D1B18] hover:bg-[#8C6A34] text-white text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer shadow-xs"
                >
                  Confirm Appointment Request
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-[10px] text-[#8E877C] font-light">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8C6A34]" />
                <span>Protected under RERA statutory guidelines and mutual non-disclosure.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
