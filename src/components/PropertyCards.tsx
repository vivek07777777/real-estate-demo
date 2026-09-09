import React, { useState } from 'react';
import { Property } from '../types';
import { PROPERTIES } from '../data';
import { ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';

interface PropertyCardsProps {
  onSelectProperty: (property: Property) => void;
  onBookViewing: (property: Property) => void;
  currency?: 'INR' | 'USD' | 'AED';
  initialCategory?: string;
  initialLocation?: string;
  maxPriceFilter?: number;
  agentFilter?: string;
}

export default function PropertyCards({
  onSelectProperty,
  onBookViewing,
  currency = 'INR',
  initialCategory = 'All',
  initialLocation = 'All',
  maxPriceFilter = 2000000000,
  agentFilter = 'All'
}: PropertyCardsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  const categories = [
    'All',
    'Sea-Facing Penthouse',
    'Heritage Bungalow',
    'Golf Estate Villa',
    'Goa Coastal Villa',
    'Architectural Estate'
  ];

  const filteredProperties = PROPERTIES.filter((prop) => {
    const matchesCategory =
      selectedCategory === 'All' || prop.category === selectedCategory;
    const matchesLocation =
      initialLocation === 'All' ||
      prop.neighborhood.toLowerCase().includes(initialLocation.toLowerCase()) ||
      prop.city.toLowerCase().includes(initialLocation.toLowerCase());
    const matchesPrice = (prop.priceInr || prop.price) <= maxPriceFilter;
    const matchesAgent =
      agentFilter === 'All' || prop.agentId === agentFilter;

    return matchesCategory && matchesLocation && matchesPrice && matchesAgent;
  });

  const formatPrimaryPrice = (prop: Property) => {
    if (currency === 'USD' && prop.priceUsd) {
      return `$${(prop.priceUsd / 1000000).toFixed(1)}M`;
    }
    if (prop.priceCr) {
      return prop.priceCr;
    }
    if (prop.priceInr) {
      return `₹${(prop.priceInr / 10000000).toFixed(1)} Cr`;
    }
    return prop.priceFormatted;
  };

  const formatSecondaryPrice = (prop: Property) => {
    if (currency === 'USD') {
      if (prop.priceCr) return `(${prop.priceCr})`;
      if (prop.priceInr) return `(₹${(prop.priceInr / 10000000).toFixed(1)} Cr)`;
    }
    if (prop.priceUsd) {
      return `(approx. $${(prop.priceUsd / 1000000).toFixed(1)}M)`;
    }
    return '';
  };

  return (
    <div className="space-y-10">
      
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#EAE4DA]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium rounded-sm whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#1D1B18] text-white shadow-xs'
                : 'text-[#6F6A61] hover:text-[#1D1B18] hover:bg-[#F4EFE6]/50'
            }`}
          >
            {cat === 'All' ? 'All Indian Estates' : cat}
          </button>
        ))}
      </div>

      {/* Property Cards Grid */}
      {filteredProperties.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-sm border border-[#EAE4DA] p-8 space-y-3">
          <p className="text-sm text-[#6F6A61]">No residences currently listed in this specific category.</p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="px-4 py-2 bg-[#F4EFE6] hover:bg-[#EAE4DA] text-[#1D1B18] text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer font-medium"
          >
            View All Estates
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              onClick={() => onSelectProperty(prop)}
              className="group cursor-pointer flex flex-col space-y-4 bg-white p-4 rounded-sm border border-[#EAE4DA] hover:border-[#B89358]/60 hover:shadow-lg transition-all duration-300"
            >
              {/* Photo Box */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xs bg-[#FAF8F5]">
                <img
                  src={prop.heroImage}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Status & Vastu Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
                  <span className="text-[9px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-xs bg-[#1D1B18]/90 text-[#DFC9A8] backdrop-blur-md">
                    {prop.status}
                  </span>
                  {prop.vastuCompliance && (
                    <span className="text-[8px] font-medium tracking-wider uppercase px-2 py-1 rounded-xs bg-white/95 text-emerald-800 backdrop-blur-md flex items-center gap-1 shadow-2xs">
                      <Compass className="w-2.5 h-2.5 text-emerald-700" />
                      <span>Vastu Verified</span>
                    </span>
                  )}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#1D1B18]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-3">
                  <span className="bg-[#1D1B18]/90 text-white text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-xs backdrop-blur-sm flex items-center gap-1 font-medium">
                    Private Dossier <ArrowUpRight className="w-3 h-3 text-[#DFC9A8]" />
                  </span>
                </div>
              </div>

              {/* Text Meta */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl font-normal text-[#1D1B18] group-hover:text-[#8C6A34] transition-colors leading-snug">
                    {prop.title}
                  </h3>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-lg font-medium text-[#8C6A34]">
                    {formatPrimaryPrice(prop)}
                  </span>
                  <span className="text-[11px] font-light text-[#6F6A61]">
                    {formatSecondaryPrice(prop)}
                  </span>
                </div>

                <p className="text-xs text-[#6F6A61] font-light">
                  {prop.neighborhood}, {prop.city}
                </p>

                <div className="pt-2 border-t border-[#F4EFE6] flex items-center justify-between text-[11px] text-[#6F6A61]">
                  <span>
                    {prop.bedrooms} Beds • {prop.bathrooms} Baths • {prop.sqft.toLocaleString()} Sq Ft
                  </span>
                  {prop.reraPermitNumber && (
                    <span className="font-mono text-[9px] text-[#8C6A34]">
                      {prop.reraPermitNumber}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
