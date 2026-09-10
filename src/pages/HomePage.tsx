import React from 'react';
import { Link } from 'react-router-dom';
import { PROPERTIES, AGENCY_INFO, REVIEWS } from '../data';
import PageHero from '../components/PageHero';
import PropertyCard from '../components/PropertyCard';
import {
  ArrowRight,
  ShieldCheck,
  Compass,
  Lock,
  Award,
  Star,
  CheckCircle2,
  TrendingUp,
  Building2,
  Sparkles
} from 'lucide-react';

interface HomePageProps {
  currency: 'INR' | 'USD';
  onOpenBookingModal?: () => void;
}

export default function HomePage({ currency, onOpenBookingModal }: HomePageProps) {
  // 3 handpicked flagship properties for the Home page highlight
  const featuredProperties = PROPERTIES.filter((p) => p.featured).slice(0, 3);
  const featuredReview = REVIEWS[0];

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* 1. DISTINCT HOME HERO (Full Viewport Height, Striking Exterior, Confident Headline) */}
      <PageHero
        isHome={true}
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90"
        badge="Private Client Real Estate Advisory"
        
        title={
          <>
            Exceptional Homes for <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#DFC9A8]">Extraordinary Lives</span>
          </>
        }
        subtitle="Representing landmark penthouses, historic bungalows, and private coastal sanctuaries across India's most prestigious postal codes."
        ctaText="Browse Properties"
        ctaLink="/properties"
        secondaryCtaText="Learn About Us"
        secondaryCtaLink="/about"
      >
        {/* Subtle Trust Bar inside Hero */}
        <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl text-left">
          <div>
            <div className="font-serif text-2xl sm:text-3xl text-white font-normal">₹8,500 Cr+</div>
            <div className="text-[11px] uppercase tracking-wider text-[#DFC9A8] font-light">Transactions Closed</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl text-white font-normal">19+ Yrs</div>
            <div className="text-[11px] uppercase tracking-wider text-[#DFC9A8] font-light">Industry Pedigree</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl text-white font-normal">100%</div>
            <div className="text-[11px] uppercase tracking-wider text-[#DFC9A8] font-light">RERA & Title Clear</div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl text-white font-normal">54%</div>
            <div className="text-[11px] uppercase tracking-wider text-[#DFC9A8] font-light">Off-Market Deals</div>
          </div>
        </div>
      </PageHero>

      {/* 2. STATS & CREDIBILITY BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white border border-[#EAE4DA] rounded-sm p-6 sm:p-8 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE4DA]">
          <div className="flex items-center gap-4 sm:pl-2">
            <div className="w-11 h-11 rounded-xs bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#8C6A34]" />
            </div>
            <div>
              <div className="font-serif text-lg font-medium text-[#1D1B18]">RERA Verified</div>
              <div className="text-xs text-[#6F6A61] font-light">MahaRERA & Delhi Reg.</div>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:pl-6 pt-4 sm:pt-0">
            <div className="w-11 h-11 rounded-xs bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5 text-[#8C6A34]" />
            </div>
            <div>
              <div className="font-serif text-lg font-medium text-[#1D1B18]">54% Off-Market</div>
              <div className="text-xs text-[#6F6A61] font-light">Strict Non-Disclosure</div>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:pl-6 pt-4 sm:pt-0">
            <div className="w-11 h-11 rounded-xs bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5 text-[#8C6A34]" />
            </div>
            <div>
              <div className="font-serif text-lg font-medium text-[#1D1B18]">Vastu Certified</div>
              <div className="text-xs text-[#6F6A61] font-light">Architectural Harmony</div>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:pl-6 pt-4 sm:pt-0">
            <div className="w-11 h-11 rounded-xs bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#8C6A34]" />
            </div>
            <div>
              <div className="font-serif text-lg font-medium text-[#1D1B18]">99.8% Rating</div>
              <div className="text-xs text-[#6F6A61] font-light">Private Client Trust</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONDENSED FEATURED PROPERTIES TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#EAE4DA]">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89358]" />
              <span className="text-[11px] font-medium tracking-[0.25em] text-[#8C6A34] uppercase">
                Curated Collection
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1D1B18] tracking-tight">
              Featured Flagship Residences
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6A61] font-light leading-relaxed">
              A select preview of trophy penthouses, golf estates, and colonial manors currently represented by our private client partners.
            </p>
          </div>

          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C6A34] hover:text-[#1D1B18] transition-colors self-start md:self-end group"
          >
            <span>View All Properties ({PROPERTIES.length})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              currency={currency}
            />
          ))}
        </div>
      </section>

      {/* 4. VALUE PROPOSITION: WHY CHOOSE US (Condensed) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#EAE4DA] rounded-sm p-8 sm:p-14 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] font-medium tracking-[0.25em] text-[#8C6A34] uppercase">
              The Firm Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1B18] font-light">
              Fiduciary Real Estate Advisory, Tailored for Generational Wealth
            </h2>
            <p className="text-sm text-[#6F6A61] font-light leading-relaxed">
              Unlike transactional brokerages, our practice operates with institutional rigor. Every acquisition undergoes strict 30-year non-encumbrance legal audits, cardinal Vastu geometry certification, and bespoke tax structuring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-[#EAE4DA] rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#8C6A34]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1D1B18]">Discreet Representation</h3>
              <p className="text-xs text-[#6F6A61] font-light leading-relaxed">
                Over half of our transactions never appear in public registries or online portals. We represent prominent families with strict non-disclosure protections.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#EAE4DA] rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#8C6A34]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1D1B18]">30-Year Title Search</h3>
              <p className="text-xs text-[#6F6A61] font-light leading-relaxed">
                Senior High Court legal counsel validates chain-of-title, municipal sanctions, and state RERA registrations to guarantee non-encumbered freehold ownership.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#EAE4DA] rounded-sm space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#FAF8F5] border border-[#EAE4DA] flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#8C6A34]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1D1B18]">Vastu & Spatial Audits</h3>
              <p className="text-xs text-[#6F6A61] font-light leading-relaxed">
                In-house architectural scholars analyze degree alignments, Ishanya corner master suites, and Brahmasthan balance before client acquisition.
              </p>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-[#EAE4DA]">
            <span className="text-xs text-[#6F6A61] font-light">
              Explore our background, leadership team, and credentials.
            </span>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C6A34] hover:text-[#1D1B18] transition-colors"
            >
              <span>Learn More About Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TRUST & TESTIMONIAL TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#EAE4DA] rounded-sm p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-1 text-[#B89358]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1B18] font-light">
              Trusted by India&apos;s Industrial & Business Leaders
            </h3>
            <p className="text-xs sm:text-sm text-[#6F6A61] font-light leading-relaxed">
              Read verified feedback from founders, family offices, and NRI investors who partnered with our advisory on marquee acquisitions.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C6A34] hover:text-[#1D1B18] transition-colors pt-2"
            >
              <span>Read Client Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="lg:col-span-8 bg-[#FAF8F5] border border-[#EAE4DA] p-6 sm:p-8 rounded-sm space-y-4">
            <p className="font-serif text-lg sm:text-xl text-[#1D1B18] italic leading-relaxed font-light">
              &ldquo;{featuredReview.quote}&rdquo;
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-[#EAE4DA] text-xs">
              <div>
                <span className="font-semibold text-[#1D1B18]">{featuredReview.clientName}</span>
                <span className="text-[#6F6A61] font-light"> — {featuredReview.clientTitle}</span>
              </div>
              <div className="text-[#8C6A34] font-medium">
                {featuredReview.propertyTitle} ({featuredReview.dealValue})
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-sm bg-[#1D1B18] text-white p-10 sm:p-16 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#DFC9A8] uppercase">
              Private Consultation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light">
              Initiate Your Private Acquisition or Mandate
            </h2>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-xl mx-auto">
              Connect with our Managing Partners in Mumbai, New Delhi, Gurugram, or Bengaluru for a confidential briefing on on-market and off-market opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xs bg-[#B89358] hover:bg-[#A37E45] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Contact Our Partners
            </Link>
            <Link
              to="/properties"
              className="px-8 py-3.5 rounded-xs bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
            >
              Explore All Listings
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
