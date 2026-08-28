import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Camera, Sparkles } from 'lucide-react';
import { VintagePhoto } from '../../types';
import { FiligreeDivider } from '../Ornaments';

interface Screen3Props {
  onNext: () => void;
  onPrev: () => void;
  photos: VintagePhoto[];
  onEditPhoto: (photo: VintagePhoto) => void;
  fontSizeClass: string;
}

export const Screen3GrowingUp: React.FC<Screen3Props> = ({
  onNext,
  onPrev,
  photos,
  onEditPhoto,
  fontSizeClass,
}) => {
  const [activeEra, setActiveEra] = useState<number>(0);

  // Take up to 3-4 photos representing eras
  const eras = [
    { title: 'बचपन', desc: 'मासूमियत और शरारतें' },
    { title: 'जवानी', desc: 'सपनों की उड़ान' },
    { title: 'परिवार', desc: 'ज़िम्मेदारियाँ और प्यार' },
    { title: 'आज', desc: 'सदाबहार अपनापन' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-between py-4 sm:py-6 px-4 sm:px-8 text-center max-w-5xl mx-auto overflow-y-auto">
      {/* Top Header */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm uppercase tracking-widest text-[#8C6D53] font-serif"
        >
          स्मृति पन्ना • ०३
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#671421] mt-1"
        >
          वक्त बदलता गया...
        </motion.h2>
        <FiligreeDivider className="my-2" />
      </div>

      {/* Main Core: 3-4 Photos grid + Emotional Message */}
      <div className="my-auto py-2 w-full space-y-4">
        {/* Poetic Message Banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-[#FFFDF9]/90 border border-[#D8C4A7] p-3 sm:p-4 rounded-xl shadow-xs"
        >
          <p className={`font-serif text-[#4A2E1B] leading-relaxed ${fontSizeClass || 'text-base sm:text-lg'}`}>
            बचपन की शरारतों से लेकर ज़िंदगी की ज़िम्मेदारियों तक,<br />
            <span className="text-[#801B2B] font-bold">रास्ते अलग हुए... लेकिन रिश्ता कभी अलग नहीं हुआ।</span>
          </p>
        </motion.div>

        {/* Interactive Era Pills for Senior Ease */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-1">
          {eras.map((era, idx) => (
            <button
              key={era.title}
              onClick={() => setActiveEra(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-serif font-bold transition-all cursor-pointer border ${
                activeEra === idx
                  ? 'bg-[#801B2B] text-[#FFF9EF] border-[#C89B3C] shadow-md scale-105'
                  : 'bg-[#F2E5D0] text-[#6A4832] border-[#D8C4A7] hover:bg-[#E8D6BD]'
              }`}
            >
              {era.title} <span className="opacity-75 font-normal">({era.desc})</span>
            </button>
          ))}
        </div>

        {/* Vintage Photos Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-1">
          {photos.slice(0, 3).map((item, index) => {
            const isSelected = activeEra === index;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`p-3 bg-[#FBF7EE] rounded-xl shadow-md border-2 transition-all duration-300 ${
                  isSelected
                    ? 'border-[#C89B3C] ring-2 ring-[#C89B3C]/40 transform -translate-y-1'
                    : 'border-[#D8C4A7]'
                }`}
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-lg border border-[#C8B89E] bg-[#EAE0D0] group">
                  <img
                    src={item.url}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter sepia-[0.3] contrast-[1.05] brightness-[0.98] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#4A1E24]/80 text-[#FDE68A] text-[11px] rounded-md font-serif">
                    {item.era}
                  </div>
                  <button
                    onClick={() => onEditPhoto(item)}
                    className="absolute bottom-2 right-2 p-1.5 bg-[#4A1E24]/80 hover:bg-[#671421] text-[#FFF9EF] rounded-md shadow transition cursor-pointer"
                    title="तस्वीर बदलें"
                  >
                    <Camera className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="mt-2 text-center">
                  <h4 className="font-heading font-bold text-[#671421] text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#6A4832] font-serif line-clamp-2 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full flex items-center justify-between gap-4 pt-3 border-t border-[#E8DCC8]/80 max-w-xl">
        <button
          onClick={onPrev}
          className="py-2.5 sm:py-3 px-5 sm:px-6 bg-[#EFE4D2] hover:bg-[#E2D2BC] text-[#5A3825] font-semibold text-base sm:text-lg rounded-xl border border-[#C8B89E] transition cursor-pointer"
        >
          ← पिछला पन्ना
        </button>

        <button
          onClick={onNext}
          className="py-2.5 sm:py-3.5 px-6 sm:px-8 bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] font-bold text-lg sm:text-xl rounded-xl shadow-lg border border-[#C89B3C] flex items-center gap-2 transition cursor-pointer"
        >
          <span>अगली याद</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A]" />
        </button>
      </div>
    </div>
  );
};
