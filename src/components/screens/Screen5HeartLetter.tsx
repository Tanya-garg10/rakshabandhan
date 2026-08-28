import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Edit3, Heart, Save } from 'lucide-react';
import { FiligreeDivider, CornerFlourish } from '../Ornaments';

interface Screen5Props {
  onNext: () => void;
  onPrev: () => void;
  fontSizeClass: string;
}

export const Screen5HeartLetter: React.FC<Screen5Props> = ({
  onNext,
  onPrev,
  fontSizeClass,
}) => {
  const defaultLetter = `ज़िंदगी के इतने सालों में
कितने ही मौसम आए और चले गए,
कितनी ही यादें पीछे छूट गईं।

लेकिन भाई-बहन का रिश्ता
आज भी उतना ही अपना है।

शायद यही रिश्तों की सबसे खूबसूरत बात है—
समय बदल जाता है,
पर अपनापन नहीं बदलता।`;

  const [letterText, setLetterText] = useState<string>(() => {
    return localStorage.getItem('rakhi_heart_letter_v1') || defaultLetter;
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    localStorage.setItem('rakhi_heart_letter_v1', letterText);
    setIsEditing(false);
  };

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
          स्मृति पन्ना • ०५
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#671421] mt-1 flex items-center justify-center gap-2"
        >
          <span>दिल से...</span>
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#C82A3E] fill-[#C82A3E]" />
        </motion.h2>
        <FiligreeDivider className="my-2" />
      </div>

      {/* Main Vintage Letter Parchment */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="my-auto py-2 w-full max-w-2xl"
      >
        <div className="relative p-6 sm:p-10 bg-[#FFFDF7] rounded-2xl shadow-xl border-2 border-[#D8C4A7] text-left">
          <CornerFlourish className="top-2 left-2" />
          <CornerFlourish className="top-2 right-2 rotate-90" />
          <CornerFlourish className="bottom-2 left-2 -rotate-90" />
          <CornerFlourish className="bottom-2 right-2 rotate-180" />

          {/* Letter header / Edit toggle */}
          <div className="flex items-center justify-between border-b border-[#E8DCC8] pb-3 mb-4">
            <span className="text-xs sm:text-sm font-serif italic text-[#8C6D53]">
              एक आत्मीय पाती • अपनों के नाम
            </span>
            <button
              onClick={() => {
                if (isEditing) handleSave();
                else setIsEditing(true);
              }}
              className="text-xs sm:text-sm px-2.5 py-1 rounded-md bg-[#F2E5D0] hover:bg-[#E8D6BD] text-[#671421] font-serif font-semibold flex items-center gap-1 transition cursor-pointer"
            >
              {isEditing ? (
                <>
                  <Save className="w-3.5 h-3.5" />
                  <span>सहेजें</span>
                </>
              ) : (
                <>
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>संदेश बदलें</span>
                </>
              )}
            </button>
          </div>

          {/* Letter Content */}
          {isEditing ? (
            <textarea
              value={letterText}
              onChange={(e) => setLetterText(e.target.value)}
              rows={9}
              className="w-full p-3 text-base sm:text-lg font-serif text-[#4A2E1B] bg-[#FAF5EB] border border-[#C89B3C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#801B2B]"
            />
          ) : (
            <div className={`font-serif text-[#4A2E1B] leading-relaxed sm:leading-loose whitespace-pre-line ${fontSizeClass || 'text-base sm:text-xl'}`}>
              {letterText}
            </div>
          )}

          {/* Signoff */}
          <div className="mt-6 pt-3 border-t border-[#E8DCC8] text-right font-serif">
            <p className="text-sm sm:text-base text-[#671421] font-bold">
              सदा आपका / आपकी,
            </p>
            <p className="text-xs sm:text-sm text-[#8C6D53] italic">
              स्नेह और अनंत आशीषों के साथ
            </p>
          </div>
        </div>
      </motion.div>

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
          <span>परिवार की याद</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A]" />
        </button>
      </div>
    </div>
  );
};
