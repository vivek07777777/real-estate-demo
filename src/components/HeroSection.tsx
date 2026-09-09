import React, { useState, useRef } from 'react';
import { ArrowRight, ArrowDown, Play, Pause, Volume2, VolumeX, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { AGENCY_INFO } from '../data';

interface HeroSectionProps {
  onOpenBookingModal: () => void;
  onExploreEstates: () => void;
  onWatchFilm?: () => void;
  onOpenDemoModal?: () => void;
  agencyName?: string;
}

export default function HeroSection({
  onOpenBookingModal,
  onExploreEstates,
  onWatchFilm,
  onOpenDemoModal,
  agencyName = AGENCY_INFO.name
}: HeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="hero-section" className="relative min-h-[90vh] flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#FAF8F5]">
      
      {/* Background Architectural Video & Ambient Layer */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
          className="w-full h-full object-cover object-center filter opacity-20 scale-105 transition-opacity duration-1000"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-luxury-house-exterior-at-sunset-41484-large.mp4" type="video/mp4" />
        </video>

        {/* Sophisticated Classic Light Gradients & Warm Travertine Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-[#FAF8F5]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-transparent to-[#FAF8F5]" />
      </div>

      {/* Floating Ambient Video Controls Pill */}
      <div className="absolute top-8 sm:top-10 right-4 sm:right-8 z-20 pointer-events-auto flex items-center gap-2">
        <div className="bg-white/85 hover:bg-white backdrop-blur-md border border-[#EAE4DA] px-3 py-1.5 rounded-full shadow-xs flex items-center gap-3 text-xs text-[#1D1B18] transition-all">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-medium tracking-wider uppercase text-[#6F6A61]">
              Architecture Reel
            </span>
          </div>
          <div className="w-px h-3 bg-[#EAE4DA]" />
          <button
            onClick={toggleVideoPlay}
            className="hover:text-[#B89358] transition-colors cursor-pointer"
            aria-label={isPlaying ? "Pause Ambient Video" : "Play Ambient Video"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={toggleVideoMute}
            className="hover:text-[#B89358] transition-colors cursor-pointer"
            aria-label={isMuted ? "Unmute Ambient Sound" : "Mute Ambient Sound"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#6F6A61]" /> : <Volume2 className="w-3.5 h-3.5 text-[#B89358]" />}
          </button>
        </div>
      </div>

      {/* Hero Content Center */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto text-center space-y-7">
        
        {/* Classical Indian Authority & RERA Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#DFC9A8]/70 shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-[#8C6A34]" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#8C6A34] uppercase">
            RERA Registered Brokerage • MahaRERA #A51900028491 • Delhi RERA
          </span>
        </div>

        {/* Grand Classic Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#1D1B18] tracking-tight leading-[1.12]">
          India&apos;s Foremost Private Estates. <br />
          <span className="italic font-normal text-[#8C6A34]">
            Lutyens&apos; Mansions & Worli Sky Duplexes
          </span>
        </h1>

        {/* Refined Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-[#4A453E] font-light max-w-2xl mx-auto leading-relaxed">
          Discreet client advisory representing legacy industrialists, technology founders, and global NRIs across South Mumbai, 
          Lutyens&apos; Delhi (LBZ), Golf Course Road Gurugram, Bengaluru, and Goa.
        </p>

        {/* Action Triggers */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
          <button
            onClick={onExploreEstates}
            className="bg-[#1D1B18] hover:bg-[#8C6A34] text-white font-medium text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-200 cursor-pointer flex items-center gap-2.5 shadow-md hover:shadow-lg"
          >
            <span>Explore Curated Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenBookingModal}
            className="bg-white hover:bg-[#F4EFE6] text-[#1D1B18] font-medium text-xs uppercase tracking-widest px-8 py-4 rounded-sm border border-[#DFC9A8] hover:border-[#8C6A34] transition-all duration-200 cursor-pointer shadow-xs"
          >
            Schedule Confidential Advisory
          </button>

          {onWatchFilm && (
            <button
              onClick={onWatchFilm}
              className="bg-transparent hover:bg-[#F4EFE6]/60 text-[#8C6A34] font-medium text-xs uppercase tracking-widest px-6 py-4 rounded-sm border border-transparent hover:border-[#DFC9A8] transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Watch Film Reel</span>
            </button>
          )}
        </div>

      </div>

      {/* Hero Stats & Trust Strip */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-[#EAE4DA]">
          
          <div className="space-y-0.5 text-center md:text-left">
            <span className="font-serif text-2xl sm:text-3xl text-[#1D1B18] font-light block">
              ₹8,500 Cr+
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#6F6A61] font-medium">
              Career Advisory Volume ($1.02B+)
            </span>
          </div>

          <div className="space-y-0.5 text-center md:text-left">
            <span className="font-serif text-2xl sm:text-3xl text-[#8C6A34] font-light block">
              100% Vastu
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#6F6A61] font-medium">
              Certified Cardinal Alignment
            </span>
          </div>

          <div className="space-y-0.5 text-center md:text-left">
            <span className="font-serif text-2xl sm:text-3xl text-[#1D1B18] font-light block">
              NRI & OCI Desk
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#6F6A61] font-medium">
              Full FEMA & Repatriation Compliance
            </span>
          </div>

          <div className="space-y-0.5 text-center md:text-left">
            <span className="font-serif text-2xl sm:text-3xl text-[#1D1B18] font-light block">
              54%
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#6F6A61] font-medium">
              Discreet Off-Market Closings
            </span>
          </div>

        </div>

        {/* Subtle Scroll Down Prompt */}
        <div className="text-center pt-8">
          <button
            onClick={onExploreEstates}
            className="text-[#6F6A61] hover:text-[#8C6A34] transition-colors inline-flex flex-col items-center gap-1 cursor-pointer group"
            aria-label="Scroll down to residences"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium group-hover:text-[#8C6A34]">
              View Trophy Portfolio
            </span>
            <ArrowDown className="w-3.5 h-3.5 text-[#B89358] animate-bounce" />
          </button>
        </div>

      </div>

    </section>
  );
}
