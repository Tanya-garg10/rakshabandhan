import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Sparkles, Eye } from 'lucide-react';
import { VintageCornerMount } from '../Ornaments';

interface Screen03Props {
  onNext: () => void;
}

export const Screen03OnceUponATime: React.FC<Screen03Props> = ({ onNext }) => {
  const [developed, setDeveloped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeveloped(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#22140D] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Old Film Grain & Ambient Dust overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#180E09]/80 via-transparent to-[#180E09]/90 pointer-events-none" />

      {/* Header Badge */}
      <div className="relative z-10 space-y-3 pt-2">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-[#FDE68A] font-semibold bg-[#2B1710] px-4 py-1.5 rounded-full border border-[#C89B3C] inline-flex">
          <BookOpen className="w-4 h-4 text-[#FDE68A]" />
          <span>डायरी के पुराने पन्ने • The Beginning</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading text-[#FFF5DE] tracking-wide leading-tight">
          "बहुत साल पहले..."
        </h2>
      </div>

      {/* Vintage Photo Developing in Darkroom Animation */}
      <div className="relative z-10 max-w-lg w-full my-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2 }}
          className="relative bg-[#FAF5EB] p-4 sm:p-6 pb-8 rounded-lg shadow-2xl border-2 border-[#D8C2A0] w-full max-w-md mx-auto"
        >
          <VintageCornerMount position="tl" />
          <VintageCornerMount position="tr" />
          <VintageCornerMount position="bl" />
          <VintageCornerMount position="br" />

          {/* Photo Frame Container with Developing Effect */}
          <div className="relative aspect-4/3 w-full bg-[#3D2C24] overflow-hidden rounded border border-[#C89B3C]/40">
            {/* Developing chemical overlay */}
            <motion.div
              initial={{ opacity: 0.9, backgroundColor: '#78350F' }}
              animate={{ opacity: developed ? 0 : 0.7, backgroundColor: developed ? '#000000' : '#854D0E' }}
              transition={{ duration: 3 }}
              className="absolute inset-0 z-10 pointer-events-none mix-blend-color"
            />

            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
              alt="बचपन की यादें"
              className={`w-full h-full object-cover transition-all duration-3000 ease-in-out ${
                developed ? 'sepia-[0.45] contrast-105 brightness-95' : 'sepia-[0.95] blur-xs brightness-75'
              }`}
            />

            {/* Developing status badge */}
            {!developed && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#2B1810]/60">
                <span className="text-sm font-serif text-[#FDE68A] animate-pulse flex items-center gap-2 font-bold">
                  <Sparkles className="w-4 h-4" />
                  यादें ताज़ा हो रही हैं...
                </span>
              </div>
            )}
          </div>

          {/* Handwritten Caption on Photo Border */}
          <p className="mt-3.5 text-center text-base sm:text-lg font-handwritten text-[#5B3E2B] font-bold">
            "हमारा पुराना आँगन और वो भोली मुस्कान" (1960s)
          </p>
        </motion.div>

        {/* Narrative Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 space-y-2.5 max-w-lg text-[#E8D9C8]"
        >
          <p className="text-xl sm:text-2xl font-devanagari font-semibold">
            "जब दुनिया छोटी थी... <span className="text-[#FDE68A] font-bold">घर बड़ा था।</span>"
          </p>
          <p className="text-base sm:text-xl font-devanagari text-[#F3E5D4] italic">
            "और खुशियाँ बहुत छोटी-छोटी बातों में मिल जाती थीं।"
          </p>
        </motion.div>
      </div>

      {/* Bottom Button */}
      <div className="relative z-10 pt-2 pb-1">
        <button
          onClick={onNext}
          className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-3 transition cursor-pointer"
        >
          <span>आगे चलें (बचपन की गलियाँ)</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A]" />
        </button>
      </div>
    </div>
  );
};
