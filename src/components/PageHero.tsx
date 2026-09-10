import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  image: string;
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  onCtaClick?: () => void;
  isHome?: boolean;
  children?: React.ReactNode;
}

export default function PageHero({
  image,
  badge,
  badgeIcon,
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  onCtaClick,
  isHome = false,
  children
}: PageHeroProps) {
  return (
    <section
      className={`relative w-full overflow-hidden flex flex-col justify-center text-white ${
        isHome
          ? 'min-h-[90vh] lg:min-h-[94vh] pt-24 pb-16'
          : 'min-h-[44vh] md:min-h-[48vh] pt-28 pb-16'
      }`}
    >
      {/* Background Image with Crisp Object Fit & Scale */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={image}
          alt="Hero Background"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
        />

        {/* Dual Layer Architectural Dark Overlay for Guaranteed Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141311]/75 via-[#141311]/55 to-[#141311]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141311]/80 via-transparent to-[#141311]/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`space-y-5 ${isHome ? 'max-w-3xl' : 'max-w-2xl'}`}>
          
          {/* Subtle Classical Eyebrow Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DFC9A8] text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase">
              {badgeIcon}
              <span>{badge}</span>
            </div>
          )}

          {/* Confident Typographic Headline */}
          <h1
            className={`font-serif font-light tracking-tight text-white leading-[1.12] ${
              isHome
                ? 'text-4xl sm:text-6xl lg:text-7xl'
                : 'text-3xl sm:text-5xl lg:text-6xl'
            }`}
          >
            {title}
          </h1>

          {/* Supporting Sentence */}
          <p className="text-sm sm:text-base lg:text-lg text-white/85 font-light leading-relaxed max-w-xl">
            {subtitle}
          </p>

          {/* Call to Action Button Row */}
          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {ctaText && (
                ctaLink ? (
                  <Link
                    to={ctaLink}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-sm bg-[#B89358] hover:bg-[#A37E45] text-white text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:translate-y-[-1px] cursor-pointer"
                  >
                    <span>{ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <button
                    onClick={onCtaClick}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-sm bg-[#B89358] hover:bg-[#A37E45] text-white text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:translate-y-[-1px] cursor-pointer"
                  >
                    <span>{ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )
              )}

              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  to={secondaryCtaLink}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs uppercase tracking-widest font-medium transition-all duration-200 backdrop-blur-xs cursor-pointer"
                >
                  <span>{secondaryCtaText}</span>
                </Link>
              )}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
