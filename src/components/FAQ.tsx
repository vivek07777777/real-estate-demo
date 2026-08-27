import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle, Shield, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Buying', 'Selling', 'Valuation', 'Off-Market Advisory'];

  const filteredFaqs = FAQS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq-section" className="space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-[11px] font-semibold tracking-[0.25em] text-[#c5a880] uppercase block">
          Client Inquiries & Transaction Clarity
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
          Clear, transparent guidance addressing discrete off-market acquisitions, international wealth structures, and marketing bespoke estates.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setOpenIndex(0);
            }}
            className={`px-3.5 py-1.5 text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#c5a880] text-[#08090c] font-bold shadow-md'
                : 'bg-white/5 text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto space-y-3">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.id}
              className={`luxury-card rounded-sm overflow-hidden border transition-colors ${
                isOpen ? 'border-[#c5a880]/40 bg-[#141722]' : 'border-white/10'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="space-y-1">
                  <span className="text-[10px] text-[#c5a880] font-semibold uppercase tracking-widest block">
                    {faq.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-white">
                    {faq.question}
                  </h3>
                </div>

                <div
                  className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#c5a880] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#c5a880]/15' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-white/5 animate-in fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
