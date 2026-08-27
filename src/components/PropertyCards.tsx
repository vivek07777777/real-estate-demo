import React, { useState } from 'react';
import { Property } from '../types';
import { PROPERTIES } from '../data';
import { ArrowUpRight } from 'lucide-react';

interface PropertyCardsProps {
  onSelectProperty: (property: Property) => void;
  onBookViewing: (property: Property) => void;
  initialCategory?: string;
  initialLocation?: string;
  maxPriceFilter?: number;
  agentFilter?: string;
}

export default function PropertyCards({
  onSelectProperty,
  onBookViewing,
  initialCategory = 'All',
  initialLocation = 'All',
  maxPriceFilter = 100000000,
  agentFilter = 'All'
}: PropertyCardsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  const categories = [
    'All',
    'Architectural Estate',
    'Luxury Penthouse',
    'Waterfront',
    'Modern Villa',
    'Historic Manor'
  ];

  const filteredProperties = PROPERTIES.filter((prop) => {
    const matchesCategory =
      selectedCategory === 'All' || prop.category === selectedCategory;
    const matchesLocation =
      initialLocation === 'All' ||
      prop.neighborhood.toLowerCase().includes(initialLocation.toLowerCase()) ||
      prop.city.toLowerCase().includes(initialLocation.toLowerCase());
    const matchesPrice = prop.price <= maxPriceFilter;
    const matchesAgent =
      agentFilter === 'All' || prop.agentId === agentFilter;

    return matchesCategory && matchesLocation && matchesPrice && matchesAgent;
  });

  return (
    <div className="space-y-10">
      
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium rounded-sm whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'bg-white/10 text-white border border-white/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {cat === 'All' ? 'All Collections' : cat}
          </button>
        ))}
      </div>

      {/* Property Cards Grid */}
      {filteredProperties.length === 0 ? (
        <div className="text-center py-16 bg-[#0e1017] rounded-sm border border-white/10 p-8 space-y-3">
          <p className="text-sm text-slate-300">No residences found in this collection.</p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
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
              className="group cursor-pointer flex flex-col space-y-4"
            >
              {/* Photo Box */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#11141e] border border-white/10 group-hover:border-[#c5a880]/50 transition-colors">
                <img
                  src={prop.heroImage}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle Status Pill */}
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-sm bg-black/75 text-[#dfc9a8] border border-white/10 backdrop-blur-md">
                    {prop.status}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-3">
                  <span className="bg-black/80 text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm border border-white/15 backdrop-blur-sm flex items-center gap-1">
                    View Dossier <ArrowUpRight className="w-3 h-3 text-[#c5a880]" />
                  </span>
                </div>
              </div>

              {/* Text Meta */}
              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl font-normal text-white group-hover:text-[#dfc9a8] transition-colors leading-snug">
                    {prop.title}
                  </h3>
                  <span className="font-serif text-lg font-medium text-[#c5a880] shrink-0">
                    {prop.priceFormatted}
                  </span>
                </div>

                <p className="text-xs text-slate-400 font-light">
                  {prop.neighborhood}, {prop.city}
                </p>

                <p className="text-[11px] text-slate-400 font-light tracking-wide pt-1">
                  {prop.bedrooms} Beds • {prop.bathrooms} Baths • {prop.sqft.toLocaleString()} SF {prop.lotSize ? `• ${prop.lotSize}` : ''}
                </p>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

