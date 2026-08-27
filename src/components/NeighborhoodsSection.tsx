import React from 'react';
import { NEIGHBORHOODS } from '../data';
import { MapPin, TrendingUp, ArrowUpRight } from 'lucide-react';

interface NeighborhoodsSectionProps {
  onSelectNeighborhood: (neighborhoodName: string) => void;
}

export default function NeighborhoodsSection({ onSelectNeighborhood }: NeighborhoodsSectionProps) {
  return (
    <div className="space-y-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#c5a880] uppercase block">
            Prime Enclaves & Micro-Markets
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-white mt-1">
            Global Luxury Neighborhood Guides
          </h2>
        </div>
        <p className="text-xs text-slate-400 max-w-md">
          In-depth intelligence across key trophy corridors with historical appreciation trends, zoning restrictions, and lifestyle amenities.
        </p>
      </div>

      {/* Neighborhood Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {NEIGHBORHOODS.map((neigh) => (
          <div
            key={neigh.id}
            onClick={() => onSelectNeighborhood(neigh.name.split('&')[0].trim())}
            className="luxury-card rounded-sm overflow-hidden group cursor-pointer flex flex-col justify-between"
          >
            <div className="relative h-64 overflow-hidden bg-[#090b10]">
              <img
                src={neigh.image}
                alt={neigh.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11141e] via-black/30 to-transparent" />
              
              <div className="absolute top-3 right-3 bg-[#08090c]/85 border border-white/10 px-2.5 py-1 text-[10px] text-[#dfc9a8] font-bold rounded-sm backdrop-blur-md flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-[#c5a880]" />
                <span>{neigh.priceGrowth}</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-[10px] uppercase tracking-widest text-[#c5a880] font-medium">Avg Portfolio Price</p>
                <p className="font-serif text-xl font-bold text-white">{neigh.averagePrice}</p>
              </div>
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-normal text-white group-hover:text-[#dfc9a8] transition-colors">
                  {neigh.name}
                </h3>
                <p className="text-xs text-slate-300 font-light mt-1 line-clamp-2">
                  {neigh.vibe}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#c5a880]">
                <span>{neigh.featuredEstatesCount} Active Portfolios</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
