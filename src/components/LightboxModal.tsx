import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export interface LightboxItem {
  id: string;
  image: string;
  title: string;
  category: string;
  location: string;
  specs?: string;
  description?: string;
}

interface LightboxModalProps {
  items: LightboxItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-[#141311]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200">
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between z-20 text-white">
        <div className="flex items-center gap-3">
          <span className="text-[11px] uppercase tracking-widest text-[#DFC9A8] font-mono">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="hidden sm:inline-block text-xs text-white/60">
            • {currentItem.category}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage with Navigation */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white/90 hover:text-white backdrop-blur-md transition-all cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Image */}
        <div className="max-h-[72vh] max-w-5xl w-full flex items-center justify-center p-2">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-xs shadow-2xl transition-all duration-300"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white/90 hover:text-white backdrop-blur-md transition-all cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="max-w-4xl mx-auto text-center space-y-1 z-20 text-white">
        <h3 className="font-serif text-xl sm:text-2xl font-light text-white">
          {currentItem.title}
        </h3>
        <p className="text-xs text-white/70 font-light">
          {currentItem.location} {currentItem.specs && `• ${currentItem.specs}`}
        </p>
        {currentItem.description && (
          <p className="text-xs text-[#DFC9A8] max-w-xl mx-auto pt-1 font-light">
            {currentItem.description}
          </p>
        )}
      </div>
    </div>
  );
}
