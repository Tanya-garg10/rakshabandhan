import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Calendar, Sparkles } from 'lucide-react';

interface Screen06Props {
  onNext: () => void;
}

const DECADES = ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s', 'आज'];

export const Screen06TimeMovedOn: React.FC<Screen06Props> = ({ onNext }) => {
  const [currentDecadeIndex, setCurrentDecadeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDecadeIndex((prev) => (prev + 1) % DECADES.length);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#180E09] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Passing Calendar Decades Background Stream */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
        <span className="text-[120px] sm:text-[180px] font-heading font-black text-[#C89B3C] tracking-tighter">
          {DECADES[currentDecadeIndex]}
        </span>
      </div>

      {/* Header */}
      <div className="relative z-10 space-y-2 pt-2">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C89B3C] font-semibold">
          <Clock className="w-4 h-4 text-[#FDE68A]" />
          <span>समय का प्रवाह • Time Passed By</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-heading text-[#FFF5DE]"
        >
          "फिर समय चलता गया..."
        </motion.h2>
      </div>

      {/* Large Vintage Clock with Spinning Hands */}
      <div className="relative z-10 my-4 flex flex-col items-center justify-center">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-b from-[#3D2314] to-[#1F1008] border-8 border-[#C89B3C] shadow-[0_0_40px_rgba(200,155,60,0.3)] flex items-center justify-center">
          {/* Roman Numerals / Hour Dots */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 360) / 12;
            return (
              <div
                key={`clock-hour-dot-${i}`}
                className="absolute w-2 h-2 rounded-full bg-[#FDE68A]"
                style={{
                  transform: `rotate(${angle}deg) translateY(-85px)`,
                }}
              />
            );
          })}

          {/* Clock Center Hub */}
          <div className="w-5 h-5 rounded-full bg-[#FDE68A] border-2 border-[#801B2B] z-20 shadow-md" />

          {/* Hour Hand (Moving) */}
          <motion.div
            animate={{ rotate: 360 * 6 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute w-2 h-14 bg-[#FDE68A] rounded-t-full origin-bottom bottom-1/2 z-10 shadow-md"
          />

          {/* Minute Hand (Fast spinning) */}
          <motion.div
            animate={{ rotate: 360 * 24 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute w-1.5 h-20 bg-[#C89B3C] rounded-t-full origin-bottom bottom-1/2 z-10"
          />

          {/* Second Hand (Smooth Red) */}
          <motion.div
            animate={{ rotate: 360 * 72 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute w-1 h-22 bg-[#EF4444] rounded-t-full origin-bottom bottom-1/2 z-15"
          />
        </div>

        {/* Dynamic Decades Pill */}
        <div className="mt-4 flex items-center gap-2 bg-[#2D1A11] px-4 py-1.5 rounded-full border border-[#C89B3C]/50 shadow-md">
          <Calendar className="w-4 h-4 text-[#FDE68A]" />
          <span className="text-sm font-bold font-serif text-[#FDE68A] tracking-wider">
            दशक: {DECADES[currentDecadeIndex]}
          </span>
        </div>
      </div>

      {/* Emotional Narrative Lines */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 space-y-2 max-w-lg mx-auto text-[#EAD8C3]"
      >
        <p className="text-lg sm:text-xl font-devanagari text-[#FDE68A] font-semibold">
          "बचपन पीछे रह गया।"
        </p>
        <p className="text-base sm:text-lg font-devanagari text-[#D6C2A9] italic">
          "ज़िम्मेदारियाँ आगे आ गईं..."
        </p>
      </motion.div>

      {/* Bottom Button */}
      <div className="relative z-10 pt-2 pb-1">
        <button
          onClick={onNext}
          className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-3 transition cursor-pointer"
        >
          <span>ज़िंदगी की राहें देखें →</span>
        </button>
      </div>
    </div>
  );
};
