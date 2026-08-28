import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';
import { TraditionalRakhiSvg, AuspiciousKalashSvg } from '../Ornaments';

interface Screen11Props {
  onNext: () => void;
}

export const Screen11Rakhi: React.FC<Screen11Props> = ({ onNext }) => {
  const [diya1Lit, setDiya1Lit] = useState(false);
  const [diya2Lit, setDiya2Lit] = useState(false);
  const [rakhiGlow, setRakhiGlow] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDiya1Lit(true), 800);
    const t2 = setTimeout(() => setDiya2Lit(true), 2200);
    const t3 = setTimeout(() => setRakhiGlow(true), 3600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#0F0805] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Warm Diya Light Glow radiating outwards */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(253,230,138,0.15)_0%,transparent_75%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 space-y-2 pt-2">
        <span className="text-xs uppercase tracking-widest text-[#C89B3C] font-semibold bg-[#21110A] px-3.5 py-1 rounded-full border border-[#C89B3C]/40 inline-block">
          पवित्र रक्षा सूत्र • The Sacred Rakhi
        </span>
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl sm:text-4xl font-heading text-[#FFF5DE]"
        >
          "ये सिर्फ़ राखी नहीं है..."
        </motion.h2>
      </div>

      {/* Central Rakhi with Floating Diyas on Both Sides */}
      <div className="relative z-10 max-w-xl w-full my-auto flex items-center justify-center gap-4 sm:gap-8">
        {/* Left Diya */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <div className="relative cursor-pointer" onClick={() => setDiya1Lit(true)}>
            {diya1Lit && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-8 bg-gradient-to-t from-[#EF4444] via-[#F59E0B] to-[#FEF08A] rounded-full blur-[1px] shadow-[0_0_20px_#F59E0B]"
              />
            )}
            <div className="w-12 h-6 sm:w-14 sm:h-7 bg-[#78350F] rounded-b-full border border-[#D97706] shadow-inner" />
          </div>
          <span className="text-[11px] font-serif text-[#C89B3C] mt-2">शुभ मंगल</span>
        </motion.div>

        {/* Central Glowing Traditional Rakhi */}
        <div className="relative">
          {rakhiGlow && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.4 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              className="absolute inset-0 bg-[#C89B3C] rounded-full blur-2xl pointer-events-none"
            />
          )}

          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, type: 'spring' }}
          >
            <TraditionalRakhiSvg size={170} className="drop-shadow-[0_0_35px_rgba(253,230,138,0.6)]" />
          </motion.div>
        </div>

        {/* Right Diya */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="relative cursor-pointer" onClick={() => setDiya2Lit(true)}>
            {diya2Lit && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-8 bg-gradient-to-t from-[#EF4444] via-[#F59E0B] to-[#FEF08A] rounded-full blur-[1px] shadow-[0_0_20px_#F59E0B]"
              />
            )}
            <div className="w-12 h-6 sm:w-14 sm:h-7 bg-[#78350F] rounded-b-full border border-[#D97706] shadow-inner" />
          </div>
          <span className="text-[11px] font-serif text-[#C89B3C] mt-2">अटल विश्वास</span>
        </motion.div>
      </div>

      {/* Meaning of Rakhi Emotional Block */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 max-w-lg mx-auto bg-[#1F100A]/85 p-4 sm:p-5 rounded-2xl border border-[#C89B3C]/40 shadow-xl space-y-2"
      >
        <p className="text-sm sm:text-base font-devanagari text-[#FAF5EB] leading-relaxed">
          "ये उन सभी सालों का प्रतीक है जिनमें हम बदले भी... बड़े भी हुए..."
        </p>
        <p className="text-base sm:text-lg font-heading text-[#FDE68A] font-bold">
          "लेकिन एक-दूसरे के लिए अपने ही रहे।"
        </p>
      </motion.div>

      {/* Bottom Button */}
      <div className="relative z-10 pt-4 pb-1">
        <button
          onClick={onNext}
          className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-3 transition cursor-pointer"
        >
          <span>उपहार का संदूक खोलें →</span>
        </button>
      </div>
    </div>
  );
};
