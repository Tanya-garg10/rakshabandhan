import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TraditionalRakhiSvg, FiligreeDivider } from '../Ornaments';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

interface Screen1Props {
  onNext: () => void;
  fontSizeClass: string;
}

export const Screen1Opening: React.FC<Screen1Props> = ({ onNext, fontSizeClass }) => {
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondLine(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between py-6 px-4 sm:px-8 text-center max-w-4xl mx-auto overflow-y-auto">
      {/* Top Auspicious Badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2E5D0] border border-[#D8C4A7] text-[#7A4020] text-sm sm:text-base font-serif shadow-2xs mt-2"
      >
        <Sparkles className="w-4 h-4 text-[#C89B3C]" />
        <span>पवित्र रक्षाबंधन पर्व • स्मृतियों का आत्मीय एल्बम</span>
        <Sparkles className="w-4 h-4 text-[#C89B3C]" />
      </motion.div>

      {/* Center Thought Display */}
      <div className="my-auto py-8 w-full max-w-3xl space-y-6">
        {/* Subtle Central Rakhi */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex justify-center mb-4"
        >
          <div className="p-4 rounded-full bg-[#FAF5EB] border-2 border-[#C89B3C] shadow-md gold-subtle-glow">
            <TraditionalRakhiSvg size={140} className="sm:scale-110" />
          </div>
        </motion.div>

        {/* First Line */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#671421] leading-relaxed tracking-tight"
        >
          "कुछ रिश्ते वक्त के साथ पुराने नहीं होते..."
        </motion.h1>

        {/* Second Line revealed after pause */}
        <AnimatePresence>
          {showSecondLine && (
            <motion.div
              key="opening-second-line"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#801B2B] leading-relaxed tracking-tight">
                "...वो हर साल और भी खूबसूरत हो जाते हैं।"
              </h2>

              <FiligreeDivider className="my-4" />

              <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-[#801B2B] font-devanagari">
                <span>रक्षाबंधन</span>
                <Heart className="w-7 h-7 text-[#C82A3E] fill-[#C82A3E] inline-block animate-pulse" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="w-full max-w-md pb-4"
      >
        <button
          onClick={onNext}
          className="w-full py-4 sm:py-5 px-8 bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] font-bold text-xl sm:text-2xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#C89B3C] flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <span>यादों का सफ़र शुरू करें</span>
          <ArrowRight className="w-6 h-6 text-[#FDE68A]" />
        </button>
        <p className="mt-3 text-xs sm:text-sm text-[#87654E] italic font-serif">
          (पन्ने पलटने के लिए नीचे दिए गए बटन पर टैप करें या स्क्रीन पर स्वाइप करें)
        </p>
      </motion.div>
    </div>
  );
};
