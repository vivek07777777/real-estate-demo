import React from 'react';
import { Link } from 'react-router-dom';
import { AGENTS, REVIEWS, AGENCY_INFO } from '../data';
import PageHero from '../components/PageHero';
import {
  ShieldCheck,
  Award,
  Users,
  Compass,
  Building2,
  Lock,
  Star,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Linkedin
} from 'lucide-react';

interface AboutPageProps {
  onOpenBookingModal?: () => void;
}

export default function AboutPage({ onOpenBookingModal }: AboutPageProps) {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      
      {/* 1. DISTINCT ABOUT HERO (46vh, Interior / Architectural Heritage Backdrop, Confident Headline) */}
      <PageHero
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90"
        badge="Fiduciary Real Estate Advisory"
        badgeIcon={<Award className="w-3.5 h-3.5 text-[#DFC9A8]" />}
        title="A Legacy of Discreet Advisory"
        subtitle="Guiding industrial families, founders, and global NRI capital with uncompromising fiduciary integrity and legal precision."
        ctaText="Meet Our Partners"
        onCtaClick={() => {
          const el = document.getElementById('partners-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        secondaryCtaText="Contact Private Office"
        secondaryCtaLink="/contact"
      />

      {/* 2. STATS & CREDIBILITY MILESTONES BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white border border-[#EAE4DA] rounded-sm p-8 sm:p-10 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE4DA]">
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-4xl text-[#1D1B18] font-normal">
              {AGENCY_INFO.stats.lifetimeVolume}
            </div>
            <div className="text-xs uppercase tracking-wider text-[#8C6A34] font-medium">
              High-Ticket Volume Closed
            </div>
            <div className="text-[11px] text-[#8E877C] font-light">Across Mumbai, Delhi, & NCR</div>
          </div>

          <div className="space-y-1 sm:pl-8 pt-4 sm:pt-0">
            <div className="font-serif text-3xl sm:text-4xl text-[#1D1B18] font-normal">
              19+ Years
            </div>
            <div className="text-xs uppercase tracking-wider text-[#8C6A34] font-medium">
              Institutional Heritage
            </div>
            <div className="text-[11px] text-[#8E877C] font-light">Established since 2005</div>
          </div>

          <div className="space-y-1 sm:pl-8 pt-4 sm:pt-0">
            <div className="font-serif text-3xl sm:text-4xl text-[#1D1B18] font-normal">
              {AGENCY_INFO.stats.privateOffMarketDeals}
            </div>
            <div className="text-xs uppercase tracking-wider text-[#8C6A34] font-medium">
              Off-Market Transactions
            </div>
            <div className="text-[11px] text-[#8E877C] font-light">Strict Non-Disclosure Protocols</div>
          </div>

          <div className="space-y-1 sm:pl-8 pt-4 sm:pt-0">
            <div className="font-serif text-3xl sm:text-4xl text-[#1D1B18] font-normal">
              {AGENCY_INFO.stats.clientSatisfaction}
            </div>
            <div className="text-xs uppercase tracking-wider text-[#8C6A34] font-medium">
              Client Retention Rate
            </div>
            <div className="text-[11px] text-[#8E877C] font-light">Family office repeat mandates</div>
          </div>
        </div>
      </section>

      {/* 3. COMPANY STORY & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89358]" />
              <span className="text-[11px] font-medium tracking-[0.25em] text-[#8C6A34] uppercase">
                Our Founding Heritage
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1D1B18] tracking-tight leading-tight">
              Redefining Real Estate as a Rigorous Private Client Discipline
            </h2>

            <p className="text-sm sm:text-base text-[#4A453E] font-light leading-relaxed">
              Founded nearly two decades ago to serve India&apos;s most prominent business houses, {AGENCY_INFO.fullName} was built to dismantle the transactional shortcomings of traditional brokerage.
            </p>

            <p className="text-sm text-[#6F6A61] font-light leading-relaxed">
              In an asset class characterized by opaque land titles, nuanced municipal bylaws, and complex capital gains regulations, we operate as trusted fiduciaries. We do not simply market properties; we rigorously audit 30-year non-encumbrance chains, verify cardinal Vastu alignments, and structure cross-border FEMA inward remittances with unmatched precision.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#8C6A34] shrink-0 mt-0.5" />
                <span className="text-xs text-[#4A453E] font-medium">
                  State RERA Accreditations (MahaRERA & Delhi RERA)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#8C6A34] shrink-0 mt-0.5" />
                <span className="text-xs text-[#4A453E] font-medium">
                  High Court Advocates Title Review Panel
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#8C6A34] shrink-0 mt-0.5" />
                <span className="text-xs text-[#4A453E] font-medium">
                  Vedic Vastu & Architectural Geometry Audits
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#8C6A34] shrink-0 mt-0.5" />
                <span className="text-xs text-[#4A453E] font-medium">
                  FEMA, NRE/NRO & Section 54 Tax Counsel
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#EAE4DA] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Architecture & Heritage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-[10px] uppercase tracking-widest text-[#DFC9A8] font-medium">
                  Lutyens&apos; Delhi Private Practice
                </div>
                <div className="font-serif text-lg font-light">
                  Freehold Heritage Estates & Diplomatic Sanctuaries
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SENIOR MANAGING PARTNERS & ADVISORY BOARD */}
      <section id="partners-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#EAE4DA]">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89358]" />
              <span className="text-[11px] font-medium tracking-[0.25em] text-[#8C6A34] uppercase">
                Senior Leadership
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1D1B18] tracking-tight">
              Managing Partners & Advisory Board
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6A61] font-light leading-relaxed">
              India&apos;s most accomplished real estate advisors, holding individual state regulatory licenses and multi-thousand crore transaction records.
            </p>
          </div>

          <div className="text-xs text-[#8C6A34] font-medium">
            Representing Mumbai • Delhi NCR • Bengaluru • Goa
          </div>
        </div>

        {/* Detailed Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AGENTS.map((agent) => (
            <div
              key={agent.id}
              className="bg-white border border-[#EAE4DA] rounded-sm overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
            >
              {/* Photo & Badge */}
              <div className="relative aspect-[4/3] bg-[#F4EFE6] overflow-hidden">
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-xs text-[10px] text-white font-mono">
                  {agent.experienceYears} Years Experience
                </div>
                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xs text-xs text-[#1D1B18] font-medium truncate">
                  {agent.licenseNumber}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#1D1B18]">
                      {agent.name}
                    </h3>
                    <p className="text-xs text-[#8C6A34] font-medium pt-0.5">
                      {agent.role}
                    </p>
                  </div>

                  <p className="text-xs text-[#6F6A61] font-light leading-relaxed line-clamp-3">
                    {agent.bio}
                  </p>

                  <div className="pt-2 space-y-1 text-xs text-[#4A453E]">
                    <div className="flex justify-between border-b border-[#F4EFE6] pb-1">
                      <span className="text-[#8E877C]">Lifetime Volume:</span>
                      <span className="font-semibold text-[#1D1B18]">{agent.totalVolume}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#F4EFE6] pb-1">
                      <span className="text-[#8E877C]">Languages:</span>
                      <span>{agent.languages.join(', ')}</span>
                    </div>
                  </div>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {agent.specialties.slice(0, 3).map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-xs bg-[#FAF8F5] border border-[#EAE4DA] text-[10px] text-[#4A453E]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Communications */}
                <div className="pt-4 border-t border-[#F4EFE6] flex items-center justify-between gap-2">
                  <a
                    href={`tel:${agent.phone}`}
                    className="flex-1 py-2 px-3 rounded-xs border border-[#EAE4DA] hover:border-[#1D1B18] text-[#1D1B18] text-center text-xs font-medium transition-colors"
                  >
                    Direct Call
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex-1 py-2 px-3 rounded-xs bg-[#1D1B18] hover:bg-[#8C6A34] text-white text-center text-xs font-medium transition-colors"
                  >
                    Confidential Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. VERIFIED CLIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[11px] font-medium tracking-[0.25em] text-[#8C6A34] uppercase">
            Private Client Endorsements
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1B18] font-light">
            Verified Endorsements from Marquee Transactions
          </h2>
          <p className="text-xs sm:text-sm text-[#6F6A61] font-light leading-relaxed">
            Representing industrial family offices, unicorn founders, and senior sovereign diplomats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-[#EAE4DA] rounded-sm p-7 space-y-5 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#B89358]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="font-serif text-base text-[#1D1B18] italic font-light leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#F4EFE6] space-y-1 text-xs">
                <div className="font-semibold text-[#1D1B18]">{review.clientName}</div>
                <div className="text-[#6F6A61] font-light">{review.clientTitle}</div>
                <div className="text-[#8C6A34] font-medium pt-1">
                  {review.propertyTitle} • {review.dealValue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TRUST & REGULATORY ACCREDITATION BADGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-[#FAF8F5] border border-[#EAE4DA] rounded-sm text-center space-y-6">
          <h3 className="font-serif text-xl sm:text-2xl text-[#1D1B18] font-light">
            Regulatory Compliance & Industry Memberships
          </h3>
          <p className="text-xs text-[#6F6A61] font-light max-w-xl mx-auto leading-relaxed">
            All partners and transactions adhere strictly to the Real Estate (Regulation and Development) Act, 2016, Foreign Exchange Management Act (FEMA), and State Bar title validation norms.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 text-xs font-mono text-[#4A453E]">
            <span className="px-4 py-2 bg-white border border-[#EAE4DA] rounded-xs shadow-2xs">
              MahaRERA: A51900028491
            </span>
            <span className="px-4 py-2 bg-white border border-[#EAE4DA] rounded-xs shadow-2xs">
              Delhi RERA: DLRERA2023A0041
            </span>
            <span className="px-4 py-2 bg-white border border-[#EAE4DA] rounded-xs shadow-2xs">
              HRERA-PKL-GGM-1092
            </span>
            <span className="px-4 py-2 bg-white border border-[#EAE4DA] rounded-xs shadow-2xs">
              Vastu Certified Advisory Board
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
