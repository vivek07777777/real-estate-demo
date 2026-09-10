import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../types';
import { Bed, Bath, Maximize2, Compass, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface PropertyCardProps {
  key?: React.Key;
  property: Property;
  currency?: 'INR' | 'USD';
}

export default function PropertyCard({ property, currency = 'INR' }: PropertyCardProps) {
  const formatPrimaryPrice = () => {
    if (currency === 'USD' && property.priceUsd) {
      return `$${(property.priceUsd / 1000000).toFixed(1)}M`;
    }
    if (property.priceCr) {
      return property.priceCr;
    }
    if (property.priceInr) {
      return `₹${(property.priceInr / 10000000).toFixed(1)} Cr`;
    }
    return property.priceFormatted;
  };

  const formatSecondaryPrice = () => {
    if (currency === 'USD') {
      if (property.priceCr) return property.priceCr;
      if (property.priceInr) return `₹${(property.priceInr / 10000000).toFixed(1)} Cr`;
    }
    if (property.priceUsd) {
      return `$${(property.priceUsd / 1000000).toFixed(1)}M`;
    }
    return '';
  };

  return (
    <Link
      to={`/properties/${property.id}`}
      className="group flex flex-col bg-white border border-[#EAE4DA] rounded-sm overflow-hidden shadow-sm hover:shadow-md hover:border-[#B89358]/50 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Property Photo with Aspect Ratio */}
      <div className="relative aspect-[16/11] overflow-hidden bg-[#F4EFE6]">
        <img
          src={property.heroImage}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/60 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest bg-[#1D1B18]/90 text-[#DFC9A8] backdrop-blur-md rounded-xs">
              {property.status}
            </span>
            {property.vastuCompliance && (
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[8px] font-medium uppercase tracking-wider bg-white/95 text-emerald-800 backdrop-blur-md rounded-xs">
                <Compass className="w-2.5 h-2.5 text-emerald-700" />
                <span>Vastu</span>
              </span>
            )}
          </div>

          <span className="px-2 py-0.5 text-[9px] font-medium text-white/90 bg-black/40 backdrop-blur-md rounded-xs">
            {property.city}
          </span>
        </div>

        {/* Bottom Hover CTA Hint */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xs bg-[#B89358] text-white text-[10px] uppercase font-semibold tracking-wider shadow-sm">
            <span>Dossier</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Property Metadata Card Body */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2">
          {/* Price Row */}
          <div className="flex items-baseline justify-between gap-2">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-medium text-[#1D1B18] group-hover:text-[#8C6A34] transition-colors">
                {formatPrimaryPrice()}
              </span>
              {formatSecondaryPrice() && (
                <span className="text-xs text-[#6F6A61] font-light">
                  ({formatSecondaryPrice()})
                </span>
              )}
            </div>
            <span className="text-[10px] uppercase font-medium tracking-wider text-[#8C6A34]">
              {property.category}
            </span>
          </div>

          {/* Title & Tagline */}
          <h3 className="font-serif text-lg font-normal text-[#1D1B18] leading-snug line-clamp-1 group-hover:text-[#8C6A34] transition-colors">
            {property.title}
          </h3>

          <p className="text-xs text-[#6F6A61] font-light line-clamp-1">
            {property.address}, {property.neighborhood}
          </p>
        </div>

        {/* Specs Grid Divider */}
        <div className="pt-3 border-t border-[#F4EFE6] flex items-center justify-between text-xs text-[#4A453E]">
          <div className="flex items-center gap-1.5" title={`${property.bedrooms} Bedrooms`}>
            <Bed className="w-3.5 h-3.5 text-[#8C6A34]" />
            <span>{property.bedrooms} Beds</span>
          </div>

          <div className="w-px h-3 bg-[#EAE4DA]" />

          <div className="flex items-center gap-1.5" title={`${property.bathrooms} Bathrooms`}>
            <Bath className="w-3.5 h-3.5 text-[#8C6A34]" />
            <span>{property.bathrooms} Baths</span>
          </div>

          <div className="w-px h-3 bg-[#EAE4DA]" />

          <div className="flex items-center gap-1.5" title="Super Built-Up Area">
            <Maximize2 className="w-3.5 h-3.5 text-[#8C6A34]" />
            <span>{property.sqft.toLocaleString()} Sq Ft</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
