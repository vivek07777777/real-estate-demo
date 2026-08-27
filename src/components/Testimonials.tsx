import React from 'react';
import { CLIENT_REVIEWS } from '../data';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  return (
    <div id="reviews-section" className="space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-[11px] font-semibold tracking-[0.25em] text-[#c5a880] uppercase block">
          Client Endorsements & Private Closings
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
          Trusted by Discerning Family Offices & Founders
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
          Reflecting our enduring commitment to confidentiality, strategic precision, and record-setting value creation.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {CLIENT_REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="luxury-card p-6 sm:p-8 rounded-sm flex flex-col justify-between space-y-6 relative"
          >
            <Quote className="w-8 h-8 text-[#c5a880]/20 absolute top-6 right-6" />

            <div className="space-y-4 relative z-10">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#c5a880]">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#c5a880]" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-light italic leading-relaxed">
                "{rev.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-medium text-white">{rev.clientName}</h4>
                  <p className="text-[11px] text-slate-400">{rev.clientTitle}</p>
                </div>
                <span className="text-xs font-serif font-bold text-[#dfc9a8] bg-[#c5a880]/10 px-2 py-1 rounded-sm border border-[#c5a880]/20">
                  {rev.dealValue}
                </span>
              </div>

              <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1">
                <span>{rev.propertyLocation}</span>
                <span className="text-[#c5a880]">Advisor: {rev.agentName}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
