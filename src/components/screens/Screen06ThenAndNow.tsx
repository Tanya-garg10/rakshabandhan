import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, SlidersHorizontal, Heart } from 'lucide-react';

interface Screen06Props {
  beforeImg: string;
  afterImg: string;
  beforeLabel?: string;
  afterLabel?: string;
  onNext: () => void;
}

export const Screen06ThenAndNow: React.FC<Screen06Props> = ({
  beforeImg,
  afterImg,
  beforeLabel = 'पुरानी अनमोल यादें',
  afterLabel = 'आज का प्यारा परिवार',
  onNext,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-between px-3 sm:px-6 py-4 overflow-hidden select-none">
      {/* Background Ambient Texture */}
      <div className="absolute inset-0 bg-[#160B08] bg-[radial-gradient(circle_at_center,rgba(60,25,12,0.6)_0%,rgba(12,6,3,0.98)_100%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center space-y-1.5 pt-2 max-w-xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#2B1710]/90 border border-[#C89B3C]/50 text-xs sm:text-sm font-serif font-bold text-[#FDE68A]">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#C89B3C]" />
          <span>समय का सफ़र</span>
        </span>
        <h2 className="text-2xl sm:text-4xl font-heading text-[#FFF5DE]">
          "वक्त बदलता रहा..."
        </h2>
        <p className="text-lg sm:text-2xl font-devanagari text-[#FDE68A] font-bold flex items-center justify-center gap-2">
          <span>"...पर अपने वही रहे।"</span>
          <Heart className="w-5 h-5 text-[#E11D48] fill-[#E11D48] inline" />
        </p>
      </div>

      {/* The WOW Before/After Interactive Comparison Slider */}
      <div className="relative z-10 my-auto w-full max-w-2xl py-2 flex flex-col items-center">
        <div
          ref={containerRef}
          onMouseDown={() => {
            isDragging.current = true;
          }}
          onMouseUp={() => {
            isDragging.current = false;
          }}
          onMouseLeave={() => {
            isDragging.current = false;
          }}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onClick={(e) => handleMove(e.clientX)}
          className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border-4 border-[#C89B3C] shadow-2xl cursor-ew-resize bg-[#20100A]"
        >
          {/* AFTER Image (Background full layer - Modern family) */}
          <img
            src={afterImg}
            alt="Family Today"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Right Label */}
          <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#2B1710]/85 border border-[#C89B3C] text-[11px] sm:text-xs font-serif font-bold text-[#FDE68A] shadow-md pointer-events-none">
            {afterLabel}
          </div>

          {/* BEFORE Image (Clipped overlay layer - Vintage family) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={beforeImg}
              alt="Vintage Family Memory"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                filter: 'sepia(0.35) contrast(1.05)',
              }}
            />

            {/* Left Label */}
            <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#801B2B]/90 border border-[#FDE68A] text-[11px] sm:text-xs font-serif font-bold text-[#FFF5DE] shadow-md pointer-events-none">
              {beforeLabel}
            </div>
          </div>

          {/* Golden Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#FDE68A] via-[#FFF9EF] to-[#FDE68A] shadow-[0_0_15px_#FDE68A] z-30 pointer-events-none"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            {/* Draggable Center Button Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#801B2B] to-[#9B2236] border-2 border-[#FDE68A] shadow-[0_0_20px_rgba(200,155,60,0.8)] flex items-center justify-center text-[#FFF5DE]">
              <SlidersHorizontal className="w-5 h-5 text-[#FDE68A]" />
            </div>
          </div>
        </div>

        {/* Drag Instruction Cue */}
        <p className="mt-3 text-xs sm:text-sm font-devanagari text-[#E2D2BC] flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#FDE68A]" />
          <span>(स्लाइडर को बाएँ से दाएँ खींचकर जादू देखें ⟷)</span>
        </p>
      </div>

      {/* Navigation Footer */}
      <div className="relative z-10 pb-2">
        <button
          onClick={onNext}
          className="group px-8 py-3.5 bg-gradient-to-r from-[#801B2B] via-[#9B2236] to-[#801B2B] hover:from-[#9B2236] hover:to-[#B32B42] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-[0_0_20px_rgba(200,155,60,0.4)] flex items-center gap-3 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>घर की नन्ही खुशियाँ</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A] group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
