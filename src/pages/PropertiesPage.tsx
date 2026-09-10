import React, { useState, useMemo } from 'react';
import { PROPERTIES } from '../data';
import { Property } from '../types';
import PageHero from '../components/PageHero';
import PropertyCard from '../components/PropertyCard';
import {
  Search,
  SlidersHorizontal,
  X,
  LayoutGrid,
  List,
  Building2,
  MapPin,
  ChevronDown
} from 'lucide-react';

interface PropertiesPageProps {
  currency: 'INR' | 'USD';
}

export default function PropertiesPage({ currency }: PropertiesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('All');
  const [selectedBedrooms, setSelectedBedrooms] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-desc' | 'price-asc' | 'sqft-desc'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Cities extracted
  const cities = ['All', 'Mumbai', 'New Delhi', 'Gurugram (Delhi NCR)', 'North Goa', 'Bengaluru'];

  // Categories extracted
  const categories = [
    'All',
    'Sea-Facing Penthouse',
    'Heritage Bungalow',
    'Golf Estate Villa',
    'Architectural Estate',
    'Goa Coastal Villa'
  ];

  // Filtering logic
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      // 1. Search Query
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = prop.title.toLowerCase().includes(query);
        const matchesAddress = prop.address.toLowerCase().includes(query);
        const matchesCity = prop.city.toLowerCase().includes(query);
        const matchesNeighborhood = prop.neighborhood.toLowerCase().includes(query);
        const matchesTagline = prop.tagline.toLowerCase().includes(query);
        if (!matchesTitle && !matchesAddress && !matchesCity && !matchesNeighborhood && !matchesTagline) {
          return false;
        }
      }

      // 2. City Filter
      if (selectedCity !== 'All' && prop.city !== selectedCity) {
        return false;
      }

      // 3. Category Filter
      if (selectedCategory !== 'All' && prop.category !== selectedCategory) {
        return false;
      }

      // 4. Price Filter (Based on INR)
      if (selectedPriceRange !== 'All') {
        const price = prop.priceInr || prop.price;
        if (selectedPriceRange === 'under-50' && price > 500000000) return false;
        if (selectedPriceRange === '50-100' && (price < 500000000 || price > 1000000000)) return false;
        if (selectedPriceRange === 'above-100' && price <= 1000000000) return false;
      }

      // 5. Bedrooms Filter
      if (selectedBedrooms !== 'All') {
        const minBeds = parseInt(selectedBedrooms, 10);
        if (prop.bedrooms < minBeds) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-desc') {
        return (b.priceInr || b.price) - (a.priceInr || a.price);
      }
      if (sortBy === 'price-asc') {
        return (a.priceInr || a.price) - (b.priceInr || b.price);
      }
      if (sortBy === 'sqft-desc') {
        return b.sqft - a.sqft;
      }
      return 0; // Default featured order
    });
  }, [searchTerm, selectedCity, selectedCategory, selectedPriceRange, selectedBedrooms, sortBy]);

  const hasActiveFilters =
    searchTerm !== '' ||
    selectedCity !== 'All' ||
    selectedCategory !== 'All' ||
    selectedPriceRange !== 'All' ||
    selectedBedrooms !== 'All';

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCity('All');
    setSelectedCategory('All');
    setSelectedPriceRange('All');
    setSelectedBedrooms('All');
    setSortBy('featured');
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      
      {/* 1. DISTINCT PROPERTIES HERO (Shorter 46vh, City Skyline Backdrop, Confident Headline) */}
      <PageHero
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=90"
        badge="Curated National Portfolio"
        badgeIcon={<Building2 className="w-3.5 h-3.5 text-[#DFC9A8]" />}
        title="Curated Luxury Real Estate"
        subtitle="Explore verified freehold estates, landmark penthouses, and private compounds across India's premier metropolitan enclaves."
        ctaText="Filter Listings"
        onCtaClick={() => {
          const el = document.getElementById('filters-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. SEARCH & FILTER CONTROLS BAR */}
      <section id="filters-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white border border-[#EAE4DA] rounded-sm p-6 space-y-6 shadow-xs">
          
          {/* Top Search Input + View Mode Toggle */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C6A34]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by property title, address, neighborhood (Worli, Lutyens', Assagao)..."
                className="w-full pl-10 pr-10 py-3 rounded-xs border border-[#EAE4DA] focus:border-[#B89358] focus:outline-none bg-[#FAF8F5]/60 text-sm text-[#1D1B18] placeholder-[#9E978C] transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8E877C] hover:text-[#1D1B18]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* View Mode & Sort Dropdowns */}
            <div className="flex items-center gap-3 self-end md:self-auto">
              <div className="flex items-center border border-[#EAE4DA] rounded-xs bg-[#FAF8F5] p-0.5">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-xs transition-colors cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-white text-[#1D1B18] shadow-2xs'
                      : 'text-[#8E877C] hover:text-[#1D1B18]'
                  }`}
                  aria-label="Grid view"
                  title="Grid view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-xs transition-colors cursor-pointer ${
                    viewMode === 'list'
                      ? 'bg-white text-[#1D1B18] shadow-2xs'
                      : 'text-[#8E877C] hover:text-[#1D1B18]'
                  }`}
                  aria-label="List view"
                  title="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="appearance-none pl-3.5 pr-8 py-2.5 rounded-xs border border-[#EAE4DA] bg-white text-xs font-medium text-[#1D1B18] focus:outline-none focus:border-[#B89358] cursor-pointer"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="sqft-desc">Area: Largest First</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none text-[#8E877C]" />
              </div>
            </div>
          </div>

          {/* Secondary Filter Dropdowns Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-[#F4EFE6]">
            {/* City Dropdown */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-semibold tracking-wider text-[#6F6A61] block">
                Region / City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-[#EAE4DA] rounded-xs bg-[#FAF8F5]/80 text-[#1D1B18] focus:border-[#B89358] focus:outline-none cursor-pointer"
              >
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c === 'All' ? 'All Regions' : c}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Dropdown */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-semibold tracking-wider text-[#6F6A61] block">
                Property Type
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-[#EAE4DA] rounded-xs bg-[#FAF8F5]/80 text-[#1D1B18] focus:border-[#B89358] focus:outline-none cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Typologies' : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-semibold tracking-wider text-[#6F6A61] block">
                Budget (INR)
              </label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-[#EAE4DA] rounded-xs bg-[#FAF8F5]/80 text-[#1D1B18] focus:border-[#B89358] focus:outline-none cursor-pointer"
              >
                <option value="All">All Price Tiers</option>
                <option value="under-50">Under ₹50 Cr</option>
                <option value="50-100">₹50 Cr – ₹100 Cr</option>
                <option value="above-100">Above ₹100 Cr</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-semibold tracking-wider text-[#6F6A61] block">
                Bedrooms
              </label>
              <select
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-[#EAE4DA] rounded-xs bg-[#FAF8F5]/80 text-[#1D1B18] focus:border-[#B89358] focus:outline-none cursor-pointer"
              >
                <option value="All">Any Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
                <option value="6">6+ Bedrooms</option>
                <option value="7">7+ Bedrooms</option>
              </select>
            </div>
          </div>

          {/* Filter Status & Clear Button */}
          <div className="flex items-center justify-between pt-2 text-xs text-[#6F6A61]">
            <div>
              Showing <span className="font-semibold text-[#1D1B18]">{filteredProperties.length}</span> of {PROPERTIES.length} residences
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center gap-1.5 text-xs text-[#8C6A34] hover:text-[#1D1B18] font-medium transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 3. LISTINGS RESULTS GRID / LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProperties.length > 0 ? (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
            }
          >
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                currency={currency}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#EAE4DA] rounded-sm p-16 text-center space-y-4 max-w-xl mx-auto">
            <Building2 className="w-10 h-10 text-[#8C6A34] mx-auto" />
            <h3 className="font-serif text-2xl text-[#1D1B18] font-light">
              No Matching Residences Found
            </h3>
            <p className="text-xs text-[#6F6A61] font-light">
              We could not find any properties matching your current filter criteria. Try broadening your price range or clearing regional filters.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-6 py-2.5 rounded-xs bg-[#1D1B18] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#8C6A34] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
