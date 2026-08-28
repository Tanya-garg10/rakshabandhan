import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Camera, ImagePlus, Sparkles } from 'lucide-react';
import { FamilyPhotoData } from '../../types';
import { FiligreeDivider } from '../Ornaments';

interface Screen6Props {
  onNext: () => void;
  onPrev: () => void;
  familyPhoto: FamilyPhotoData;
  onEditFamilyPhoto: () => void;
  fontSizeClass: string;
}

export const Screen6FamilyMemory: React.FC<Screen6Props> = ({
  onNext,
  onPrev,
  familyPhoto,
  onEditFamilyPhoto,
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
          स्मृति पन्ना • ०६
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#671421] mt-1"
        >
          एक तस्वीर... हज़ार यादें।
        </motion.h2>
        <FiligreeDivider className="my-2" />
      </div>

      {/* Main Center Classic Grand Frame */}
      <div className="my-auto py-2 w-full max-w-2xl space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative p-4 sm:p-6 bg-[#FDFBF7] rounded-2xl shadow-xl border-3 border-[#C89B3C] gold-subtle-glow"
        >
          {/* Main Photo Display */}
          <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl border-2 border-[#D8C4A7] bg-[#EAE0D0] group shadow-inner">
            <img
              src={familyPhoto.url}
              alt="परिवार की सुनहरी तस्वीर"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter sepia-[0.25] contrast-[1.06] group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-radial from-transparent to-[#3D1E0B]/20 pointer-events-none" />

            {/* Quick Change Action */}
            <button
              onClick={onEditFamilyPhoto}
              className="absolute bottom-3 right-3 px-3.5 py-2 bg-[#4A1E24]/85 hover:bg-[#671421] text-[#FFF9EF] text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 shadow-lg backdrop-blur-xs transition cursor-pointer border border-[#C89B3C]"
            >
              <Camera className="w-4 h-4 text-[#FDE68A]" />
              <span>अपनी पारिवारिक तस्वीर जोड़ें</span>
            </button>
          </div>

          {/* Emotional Caption */}
          <div className="mt-4 space-y-1">
            <h3 className="text-base sm:text-xl font-bold font-heading text-[#671421]">
              {familyPhoto.title || 'हमारा संपूर्ण परिवार'}
            </h3>
            <p className="text-xs sm:text-sm text-[#7A5A43] font-serif italic">
              {familyPhoto.note || 'हर मुस्कान में बसा है एक किस्सा, हर नज़र में छिपा है गहरा स्नेह।'}
            </p>
          </div>
        </motion.div>

        {/* Poetic description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`font-serif text-[#4A2E1B] leading-relaxed max-w-xl mx-auto ${fontSizeClass || 'text-base sm:text-lg'}`}
        >
          "इन तस्वीरों में सिर्फ़ चेहरे नहीं,<br />
          <span className="text-[#801B2B] font-bold">पूरी एक ज़िंदगी की कहानी छुपी है।"</span>
        </motion.p>
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
          <span>शुभकामनाएँ</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A]" />
        </button>
      </div>
    </div>
  );
};
