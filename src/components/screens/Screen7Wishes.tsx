import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Sparkles, Sun, Shield, Flower2 } from 'lucide-react';
import { TraditionalRakhiSvg, FiligreeDivider } from '../Ornaments';
import { BlessingItem } from '../../types';

interface Screen7Props {
  onNext: () => void;
  onPrev: () => void;
  blessings: BlessingItem[];
  fontSizeClass: string;
}

export const Screen7Wishes: React.FC<Screen7Props> = ({
  onNext,
  onPrev,
  blessings,
  fontSizeClass,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between py-4 sm:py-6 px-4 sm:px-8 text-center max-w-4xl mx-auto overflow-y-auto">
      {/* Top Header */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm uppercase tracking-widest text-[#8C6D53] font-serif"
        >
          स्मृति पन्ना • ०७
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#671421] mt-1"
        >
          इस रक्षाबंधन...
        </motion.h2>
        <FiligreeDivider className="my-2" />
      </div>

      {/* Main Prayer & Wish Message */}
      <div className="my-auto py-2 w-full max-w-2xl space-y-5">
        {/* Sacred Prayer Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-5 sm:p-7 bg-[#FFFDF7] rounded-2xl shadow-lg border-2 border-[#D8C4A7] relative"
        >
          <div className="space-y-3 font-serif text-[#4A2E1B]">
            <p className={`leading-relaxed ${fontSizeClass || 'text-base sm:text-xl'}`}>
              ईश्वर से यही प्रार्थना है कि<br />
              <strong className="text-[#801B2B]">हमारे परिवार में हमेशा प्रेम बना रहे,</strong><br />
              दीर्घायु, उत्तम स्वास्थ्य और खुशियाँ बनी रहें,<br />
              और हमारी ये खूबसूरत यादें<br />
              आने वाली पीढ़ियों तक यूँ ही प्रेरणा बनकर चलती रहें।
            </p>
          </div>

          <FiligreeDivider className="my-4" />

          <div className="flex items-center justify-center gap-2 text-xl sm:text-3xl font-bold text-[#801B2B] font-devanagari">
            <span>रक्षाबंधन की हार्दिक शुभकामनाएँ</span>
            <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#C82A3E] fill-[#C82A3E] inline-block animate-pulse" />
          </div>
        </motion.div>

        {/* 3 Auspicious Pillars */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-[#FAF5EB] rounded-xl border border-[#D8C4A7] text-center">
            <Sun className="w-5 h-5 mx-auto text-[#C89B3C] mb-1" />
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#671421]">दीर्घायु व स्वास्थ्य</h4>
          </div>
          <div className="p-3 bg-[#FAF5EB] rounded-xl border border-[#D8C4A7] text-center">
            <Heart className="w-5 h-5 mx-auto text-[#C82A3E] fill-[#C82A3E] mb-1" />
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#671421]">सदाबहार स्नेह</h4>
          </div>
          <div className="p-3 bg-[#FAF5EB] rounded-xl border border-[#D8C4A7] text-center">
            <Flower2 className="w-5 h-5 mx-auto text-[#C89B3C] mb-1" />
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#671421]">सुख एवं शांति</h4>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full flex items-center justify-between gap-4 pt-4 border-t border-[#E8DCC8]/80 max-w-xl">
        <button
          onClick={onPrev}
          className="py-3 px-5 sm:px-6 bg-[#EFE4D2] hover:bg-[#E2D2BC] text-[#5A3825] font-semibold text-base sm:text-lg rounded-xl border border-[#C8B89E] transition cursor-pointer"
        >
          ← पिछला पन्ना
        </button>

        <button
          onClick={onNext}
          className="py-3 sm:py-4 px-7 sm:px-8 bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] font-bold text-lg sm:text-xl rounded-xl shadow-lg border border-[#C89B3C] flex items-center gap-2 transition cursor-pointer"
        >
          <span>अंतिम विचार</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A]" />
        </button>
      </div>
    </div>
  );
};
