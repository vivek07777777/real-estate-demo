import React, { useState, useMemo } from 'react';
import PageHero from '../components/PageHero';
import LightboxModal, { LightboxItem } from '../components/LightboxModal';
import { Camera, Maximize2, Sparkles, Filter } from 'lucide-react';

const GALLERY_ITEMS: LightboxItem[] = [
  {
    id: 'gal-1',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    title: 'Arabian Sea Cantilevered Plunge Deck',
    category: 'Sea-Facing Penthouses',
    location: 'Worli Sea Face, Mumbai',
    specs: '48th Floor • 8,600 Sq Ft Sky Duplex',
    description: 'Unobstructed 180° sunset vistas of the Bandra-Worli Sea Link with heated cantilevered infinity pool.'
  },
  {
    id: 'gal-2',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    title: 'The Lutyens Colonial Manor Facade',
    category: 'Heritage Bungalows',
    location: 'Amrita Shergill Marg, New Delhi',
    specs: '1.25-Acre Gated Private Grounds',
    description: 'Classical British-colonial porticos flanked by century-old neem canopies in the heart of the LBZ sanctuary.'
  },
  {
    id: 'gal-3',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1600&q=85',
    title: 'Arnold Palmer Golf Course Overlook',
    category: 'Golf Estates',
    location: 'The Camellias, DLF Golf Course Road, Gurugram',
    specs: '11,200 Sq Ft Sky Residence',
    description: 'Frontline panoramic overlook across championship fairways and Aravalli mountain ridgeline.'
  },
  {
    id: 'gal-4',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    title: 'Italian Calacatta Double-Height Salon',
    category: 'Interiors & Salons',
    location: 'Worli Sea Face, Mumbai',
    specs: '24-Foot Ceiling • Imported Calacatta Oro',
    description: 'Custom acoustic wall panelling, custom chandeliers, and floor-to-ceiling sound-attenuated glazing.'
  },
  {
    id: 'gal-5',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    title: 'Indo-Portuguese Slate Pool Courtyard',
    category: 'Coastal Sanctuaries',
    location: 'Assagao, North Goa',
    specs: '50-Foot Natural Slate Lap Pool',
    description: 'Restored 1890s manor framed by mature coconut groves, frangipani blossoms, and antique balcão verandas.'
  },
  {
    id: 'gal-6',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    title: 'Marine Drive Queen’s Necklace Twilight Salon',
    category: 'Sea-Facing Penthouses',
    location: 'Malabar Hill, Mumbai',
    specs: 'Full-Floor Plate • Private Automobile Lift',
    description: 'Luminescent nighttime views spanning the entire curve of Marine Drive and Nariman Point skyline.'
  },
  {
    id: 'gal-7',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85',
    title: 'State Banquet Hall & Butler Suite',
    category: 'Interiors & Salons',
    location: 'Lutyens Bungalow Zone, New Delhi',
    specs: '28-Seat Formal Dining',
    description: 'Hand-carved Burma teak ceilings with adjacent sommelier wine reserve and commercial chef annex.'
  },
  {
    id: 'gal-8',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
    title: 'Minimalist Basalt Water Courtyard',
    category: 'Interiors & Salons',
    location: 'Sadashivnagar, Bengaluru',
    specs: 'Japanese Zen Rock Installation',
    description: 'Floating basalt stepping stones across reflecting ponds with integrated rainwater micro-catchment.'
  },
  {
    id: 'gal-9',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
    title: 'Ishanya Orientation Master Suite',
    category: 'Interiors & Salons',
    location: 'Worli Sea Face, Mumbai',
    specs: 'Vastu Certified North-East Wing',
    description: 'Sunrise views over the harbor with Gessi chromatherapy rain showers and private meditation terrace.'
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const categories = [
    'All',
    'Sea-Facing Penthouses',
    'Heritage Bungalows',
    'Golf Estates',
    'Coastal Sanctuaries',
    'Interiors & Salons'
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenLightbox = (item: LightboxItem) => {
    const idx = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
    setCurrentImageIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-24">
      
      {/* 1. DISTINCT GALLERY HERO (46vh, Architectural Composition, Confident Headline) */}
      <PageHero
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90"
        badge="Architectural Portfolio"
        badgeIcon={<Camera className="w-3.5 h-3.5 text-[#DFC9A8]" />}
        title="Architectural Perspectives"
        subtitle="A visual exploration of India's finest private residences, bespoke interior salons, and landscaped grounds."
        ctaText="Explore Collections"
        onCtaClick={() => {
          const el = document.getElementById('gallery-grid');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. CATEGORY FILTER TABS */}
      <section id="gallery-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-[#EAE4DA]">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xs text-xs uppercase tracking-wider font-medium transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#1D1B18] text-white shadow-xs'
                    : 'bg-white border border-[#EAE4DA] text-[#4A453E] hover:border-[#B89358]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#8E877C] font-mono">
            {filteredItems.length} Architectural Studies
          </div>
        </div>
      </section>

      {/* 3. POLISHED MASONRY / LIGHTBOX IMAGE GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-[#1D1B18] border border-[#EAE4DA] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/90 via-[#141311]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Category Tag */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 text-[9px] uppercase tracking-wider font-semibold bg-black/50 text-[#DFC9A8] backdrop-blur-md rounded-xs">
                  {item.category}
                </span>
              </div>

              {/* Zoom Icon Button */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-white/20 text-white backdrop-blur-md">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <h3 className="font-serif text-lg font-light leading-snug group-hover:text-[#DFC9A8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/75 font-light">
                  {item.location}
                </p>
                {item.specs && (
                  <p className="text-[10px] text-[#DFC9A8] font-mono pt-0.5">
                    {item.specs}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setCurrentImageIndex(idx)}
      />

    </div>
  );
}
