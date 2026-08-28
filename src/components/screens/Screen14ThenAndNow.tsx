import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { VintageCornerMount } from '../Ornaments';

interface Screen14Props {
  onNext: () => void;
}

export const Screen14ThenAndNow: React.FC<Screen14Props> = ({ onNext }) => {
  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#180E09] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.12),transparent_75%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 space-y-2 pt-2 max-w-xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-[#C89B3C] font-semibold bg-[#2A160E] px-3 py-1 rounded-full border border-[#C89B3C]/30 inline-block">
          वक्त का आईना • Then & Now
        </span>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#FFF5DE]">
          "चेहरे बदल गए... लेकिन अपनापन नहीं।"
        </h2>
      </div>

      {/* Split Screen Comparison: तब vs आज */}
      <div className="relative z-10 max-w-4xl w-full my-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-2">
        {/* LEFT: तब (Childhood) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#FAF5EB] text-[#3D2418] p-4 sm:p-5 rounded-2xl border-2 border-[#C89B3C] shadow-xl w-full max-w-sm relative"
        >
          <VintageCornerMount position="tl" />
          <VintageCornerMount position="tr" />
          <VintageCornerMount position="bl" />
          <VintageCornerMount position="br" />

          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider bg-[#801B2B] text-[#FFF9EF] px-2.5 py-0.5 rounded-full font-serif">
              तब (1960s)
            </span>
            <span className="text-xs font-serif text-[#7A4B29]">बचपन के दिन</span>
          </div>

          <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#D5C2A5] mb-2">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
              alt="तब बचपन"
              className="w-full h-full object-cover sepia-[0.5]"
            />
          </div>

          <p className="text-xs font-handwritten text-[#593925] font-bold text-center">
            "कागज़ की नाव, बारिश का पानी और वो मासूम शरारतें"
          </p>
        </motion.div>

        {/* Central Golden Connection */}
        <div className="flex flex-col items-center justify-center shrink-0">
          <div className="h-6 md:h-12 w-0.5 md:w-12 md:h-0.5 bg-[#C89B3C]" />
          <div className="w-10 h-10 rounded-full bg-[#801B2B] border-2 border-[#FDE68A] flex items-center justify-center text-[#FDE68A] shadow-md my-1 md:my-0">
            <Heart className="w-5 h-5 fill-[#FDE68A]" />
          </div>
          <div className="h-6 md:h-12 w-0.5 md:w-12 md:h-0.5 bg-[#C89B3C]" />
        </div>

        {/* RIGHT: आज (Present Senior Golden Years) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#FAF5EB] text-[#3D2418] p-4 sm:p-5 rounded-2xl border-2 border-[#C89B3C] shadow-xl w-full max-w-sm relative"
        >
          <VintageCornerMount position="tl" />
          <VintageCornerMount position="tr" />
          <VintageCornerMount position="bl" />
          <VintageCornerMount position="br" />

          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider bg-[#801B2B] text-[#FFF9EF] px-2.5 py-0.5 rounded-full font-serif">
              आज (Present)
            </span>
            <span className="text-xs font-serif text-[#7A4B29]">गोल्डन ईयर्स</span>
          </div>

          <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#D5C2A5] mb-2">
            <img
              src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=600&q=80"
              alt="आज का स्नेह"
              className="w-full h-full object-cover sepia-[0.1]"
            />
          </div>

          <p className="text-xs font-handwritten text-[#593925] font-bold text-center">
            "सफ़ेद बालों में सजी समझदारी और वही आजीवन आदर"
          </p>
        </motion.div>
      </div>

      {/* Bottom Button */}
      <div className="relative z-10 pt-4 pb-1">
        <button
          onClick={onNext}
          className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-3 transition cursor-pointer"
        >
          <span>परिवार का वटवृक्ष देखें →</span>
        </button>
      </div>
    </div>
  );
};
