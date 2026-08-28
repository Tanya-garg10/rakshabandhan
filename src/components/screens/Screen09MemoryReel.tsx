import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Film, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface Screen09Props {
  onNext: () => void;
}

const REEL_FRAMES = [
  {
    id: 'f1',
    label: 'एक त्योहार...',
    sub: 'राखी की वो थाली और बचपन की खुशियाँ',
    img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80',
    year: '1970',
  },
  {
    id: 'f2',
    label: 'एक मुलाकात...',
    sub: 'सालों बाद मिलने पर वही अपनापन',
    img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80',
    year: '1985',
  },
  {
    id: 'f3',
    label: 'एक हँसी...',
    sub: 'पुरानी बातों पर बेतहाशा मुस्कुराना',
    img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    year: '1995',
  },
  {
    id: 'f4',
    label: 'एक पुरानी तस्वीर...',
    sub: 'जिसमें पूरा जमाना सिमट आया',
    img: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=600&q=80',
    year: '2010',
  },
  {
    id: 'f5',
    label: 'एक पूरा दौर...',
    sub: 'जो हमारे साथ-साथ बड़ा हुआ',
    img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80',
    year: 'आज',
  },
];

export const Screen09MemoryReel: React.FC<Screen09Props> = ({ onNext }) => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextFrame = () => {
    setScrollIndex((prev) => Math.min(REEL_FRAMES.length - 1, prev + 1));
  };

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#180E09] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Film Projector Light Beam Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(253,230,138,0.12),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 space-y-1 pt-2 max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C89B3C] font-semibold">
          <Film className="w-4 h-4 text-[#FDE68A]" />
          <span>35mm यादों की रील • Vintage Film Strip</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#FFF5DE]">
          "एक त्योहार... एक मुलाकात... एक पूरा दौर।"
        </h2>
        <p className="text-xs text-[#D8C4AA] font-devanagari">
          रील को आगे-पीछे करके सभी फ्रेम देखें
        </p>
      </div>

      {/* 35mm Vintage Film Strip Reel */}
      <div className="relative z-10 w-full max-w-4xl my-auto py-3">
        {/* Film Sprocket Perforations TOP */}
        <div className="bg-[#0A0503] py-2 px-4 flex items-center justify-between border-t-2 border-b border-[#C89B3C]/40 rounded-t-xl overflow-hidden">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={`top-sprocket-${i}`} className="w-3.5 h-2.5 bg-[#2B1810] border border-[#C89B3C]/30 rounded-xs shrink-0" />
          ))}
        </div>

        {/* The Horizontal Film Reel Viewport */}
        <div className="bg-[#0D0704] p-4 sm:p-6 overflow-hidden relative">
          <motion.div
            className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${scrollIndex * 260}px)` }}
          >
            {REEL_FRAMES.map((frame, idx) => (
              <div
                key={frame.id}
                onClick={() => setScrollIndex(idx)}
                className={`w-[240px] sm:w-[280px] shrink-0 p-3 rounded-lg border-2 transition-all cursor-pointer ${
                  scrollIndex === idx
                    ? 'bg-[#29170E] border-[#FDE68A] shadow-[0_0_25px_rgba(253,230,138,0.35)] scale-102'
                    : 'bg-[#180D07] border-[#4A2C1A] opacity-60 hover:opacity-90'
                }`}
              >
                <div className="relative aspect-4/3 bg-[#000] rounded overflow-hidden mb-2 border border-[#C89B3C]/40">
                  <img
                    src={frame.img}
                    alt={frame.label}
                    className="w-full h-full object-cover sepia-[0.4] brightness-90"
                  />
                  <span className="absolute bottom-1 right-2 text-[10px] font-mono text-[#FDE68A] bg-[#000]/70 px-1.5 py-0.5 rounded">
                    {frame.year}
                  </span>
                </div>

                <h4 className="text-base font-bold font-heading text-[#FDE68A]">
                  {frame.label}
                </h4>
                <p className="text-xs text-[#D8C4AA] font-devanagari mt-0.5 line-clamp-1">
                  {frame.sub}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Left / Right Film Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={scrollIndex === 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#801B2B] text-[#FFF9EF] border border-[#C89B3C] shadow-lg disabled:opacity-30 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextFrame}
            disabled={scrollIndex === REEL_FRAMES.length - 1}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#801B2B] text-[#FFF9EF] border border-[#C89B3C] shadow-lg disabled:opacity-30 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Film Sprocket Perforations BOTTOM */}
        <div className="bg-[#0A0503] py-2 px-4 flex items-center justify-between border-t border-b-2 border-[#C89B3C]/40 rounded-b-xl overflow-hidden">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={`bottom-sprocket-${i}`} className="w-3.5 h-2.5 bg-[#2B1810] border border-[#C89B3C]/30 rounded-xs shrink-0" />
          ))}
        </div>
      </div>

      {/* Bottom Button */}
      <div className="relative z-10 pt-2 pb-1">
        <button
          onClick={onNext}
          className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-3 transition cursor-pointer"
        >
          <span>जो बातें कभी नहीं कहीं →</span>
        </button>
      </div>
    </div>
  );
};
