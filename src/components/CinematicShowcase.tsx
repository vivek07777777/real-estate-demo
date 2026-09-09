import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Compass, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CinematicShowcaseProps {
  onBookViewing: (propertyTitle?: string) => void;
}

interface VideoChapter {
  id: string;
  title: string;
  location: string;
  duration: string;
  tagline: string;
  videoUrl: string;
  poster: string;
  propertyTitle: string;
  priceFormatted: string;
  specs: string;
}

const CHAPTERS: VideoChapter[] = [
  {
    id: "chap-worli-mumbai",
    title: "Worli Sea Face Sky Duplex",
    location: "Worli Sea Face, South Mumbai",
    duration: "0:45",
    tagline: "Unobstructed 180° Arabian Sea vistas and glittering Bandra-Worli Sea Link panoramas",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-luxury-house-exterior-at-sunset-41484-large.mp4",
    poster: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
    propertyTitle: "The Worli Sea Face Sky Duplex",
    priceFormatted: "₹85.0 Cr ($10.2M)",
    specs: "5 Suites • 7 Baths • 8,600 Sq Ft • Private Pool Deck"
  },
  {
    id: "chap-lutyens-delhi",
    title: "Lutyens' Delhi Colonial Heritage Manor",
    location: "Amrita Shergill Marg, LBZ, New Delhi",
    duration: "0:38",
    tagline: "1.25-Acre private gated sanctuary in India's sovereign power epicenter with century-old trees",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxurious-modern-interior-living-room-41485-large.mp4",
    poster: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    propertyTitle: "The Lutyens' Bungalow Heritage Estate",
    priceFormatted: "₹145.0 Cr ($17.4M)",
    specs: "7 Suites • 10 Baths • 16,500 Sq Ft • 1.25-Acre Lawns"
  },
  {
    id: "chap-camellias-gurugram",
    title: "The Camellias Signature Golf Penthouse",
    location: "DLF Golf Links, Golf Course Road, Gurugram",
    duration: "0:52",
    tagline: "Ultra-luxury penthouse facing Arnold Palmer championship fairways and Aravalli horizons",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-dubai-skyscrapers-and-traffic-at-dusk-41223-large.mp4",
    poster: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1600&q=85",
    propertyTitle: "The Camellias Signature Golf Penthouse",
    priceFormatted: "₹62.0 Cr ($7.4M)",
    specs: "5 Suites • 7 Baths • 11,200 Sq Ft • Double-Height Salon"
  }
];

export default function CinematicShowcase({ onBookViewing }: CinematicShowcaseProps) {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentChapter = CHAPTERS[activeChapterIndex];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [activeChapterIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);

    const minutes = Math.floor(current / 60);
    const seconds = Math.floor(current % 60);
    setCurrentTime(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickRatio = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = clickRatio * (videoRef.current.duration || 1);
    videoRef.current.currentTime = newTime;
    setProgress(clickRatio * 100);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      videoRef.current.requestFullscreen().catch(() => {});
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-[#EAE4DA]">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89358]" />
            <span className="text-[11px] font-medium tracking-[0.25em] text-[#8C6A34] uppercase">
              Cinematic Architecture Series
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1D1B18] tracking-tight">
            Curated 4K Architectural Films
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#6F6A61] max-w-md font-light leading-relaxed">
          High-definition aerial cinematography and interior walkthroughs across Worli Sea Face, Lutyens&apos; Delhi, and DLF Golf Links.
        </p>
      </div>

      {/* Main Theatre Box */}
      <div className="relative rounded-sm overflow-hidden bg-[#1D1B18] border border-[#EAE4DA] shadow-xl group">
        
        {/* Video Canvas */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
          <video
            ref={videoRef}
            src={currentChapter.videoUrl}
            poster={currentChapter.poster}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-cover object-center"
          />

          {/* Vignette Gradients for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* Top Info Bar Over Video */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-xs bg-[#1D1B18]/80 text-[#DFC9A8] text-[9px] uppercase tracking-widest font-semibold border border-[#B89358]/40 backdrop-blur-md">
                Cinema Reel 4K
              </span>
              <span className="text-xs text-white/90 font-light tracking-wide drop-shadow-md hidden sm:inline">
                {currentChapter.location}
              </span>
            </div>

            <div className="pointer-events-auto flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white/90 hover:text-white backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
                aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-white/70" /> : <Volume2 className="w-4 h-4 text-[#DFC9A8]" />}
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white/90 hover:text-white backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Overlay Info & Controls */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 space-y-4">
            
            {/* Title & Quick Meta */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#DFC9A8] block">
                  Featured Residence • {currentChapter.priceFormatted}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-white font-light drop-shadow-md">
                  {currentChapter.title}
                </h3>
                <p className="text-xs text-white/80 font-light line-clamp-1 drop-shadow-sm">
                  {currentChapter.tagline}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onBookViewing(currentChapter.propertyTitle)}
                  className="bg-[#DFC9A8] hover:bg-white text-[#1D1B18] font-medium text-xs uppercase tracking-widest px-5 py-2.5 rounded-xs transition-colors cursor-pointer shadow-md flex items-center gap-2 shrink-0"
                >
                  <span>Book Private Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Scrubber Timeline Bar */}
            <div className="space-y-2 pt-2">
              <div
                onClick={handleTimelineClick}
                className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer transition-all relative overflow-hidden backdrop-blur-xs"
              >
                <div
                  className="h-full bg-gradient-to-r from-[#B89358] to-[#DFC9A8] rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] text-white/70 font-mono">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                  >
                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 text-[#DFC9A8]" />}
                    <span className="uppercase">{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>
                  <span>{currentTime} / {currentChapter.duration}</span>
                </div>
                <span className="hidden sm:inline font-sans">{currentChapter.specs}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Chapter Selection Strip */}
        <div className="bg-[#FAF8F5] border-t border-[#EAE4DA] p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          {CHAPTERS.map((chap, idx) => {
            const isSelected = idx === activeChapterIndex;
            return (
              <button
                key={chap.id}
                onClick={() => {
                  setActiveChapterIndex(idx);
                  setProgress(0);
                }}
                className={`text-left p-3 rounded-xs border transition-all cursor-pointer flex items-start gap-3 ${
                  isSelected
                    ? 'bg-white border-[#8C6A34] shadow-sm ring-1 ring-[#8C6A34]'
                    : 'bg-white/60 hover:bg-white border-[#EAE4DA] hover:border-[#DFC9A8]'
                }`}
              >
                <div className="relative w-16 h-12 rounded-xs overflow-hidden shrink-0 bg-black">
                  <img
                    src={chap.poster}
                    alt={chap.title}
                    className="w-full h-full object-cover"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-[#8C6A34]/40 flex items-center justify-center">
                      <Play className="w-3.5 h-3.5 text-white fill-white" />
                    </div>
                  )}
                </div>

                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-[#8C6A34] font-semibold">
                      Chapter 0{idx + 1}
                    </span>
                    <span className="font-mono text-[9px] text-[#6F6A61]">
                      {chap.duration}
                    </span>
                  </div>
                  <h4 className="text-xs font-serif font-medium text-[#1D1B18] truncate">
                    {chap.title}
                  </h4>
                  <p className="text-[10px] text-[#8C6A34] font-medium truncate">
                    {chap.priceFormatted}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>

    </div>
  );
}
