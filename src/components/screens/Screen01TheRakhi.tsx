import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { TraditionalRakhiSvg, GoldenShimmerDust } from '../Ornaments';

interface Screen01Props {
  onNext: () => void;
}

export const Screen01TheRakhi: React.FC<Screen01Props> = ({ onNext }) => {
  const [hasClickedRakhi, setHasClickedRakhi] = useState(false);
  const [rippleEffect, setRippleEffect] = useState(false);

  const handleRakhiClick = () => {
    setRippleEffect(true);
    setHasClickedRakhi(true);
    setTimeout(() => setRippleEffect(false), 2000);
  };

  return (
    <div className="relative min-h-[82vh] flex flex-col items-center justify-between text-center px-4 py-6 overflow-hidden">
      {/* Golden Shimmer Background Dust */}
      <GoldenShimmerDust count={18} />

      {/* Travelling Golden Thread Animation across the screen */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-45"
        preserveAspectRatio="none"
        viewBox="0 0 1000 600"
      >
        <defs>
          <linearGradient id="goldThreadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C89B3C" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C89B3C" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <motion.path
          d="M -100,300 C 200,180 350,420 500,300 C 650,180 800,420 1100,300"
          fill="none"
          stroke="url(#goldThreadGrad)"
          strokeWidth="3.5"
          strokeDasharray="12, 6"
          initial={{ pathOffset: 0 }}
          animate={{ pathOffset: 1 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path
          d="M -100,280 C 250,400 400,160 500,300 C 600,440 750,200 1100,280"
          fill="none"
          stroke="#E6A15C"
          strokeWidth="1.5"
          initial={{ pathOffset: 0 }}
          animate={{ pathOffset: -1 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </svg>

      {/* Top subtle badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-2"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B1710]/80 border border-[#C89B3C]/50 text-xs sm:text-sm font-serif font-bold text-[#FDE68A] tracking-wider uppercase shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
          <span>रक्षाबंधन की पावन स्मृति</span>
        </span>
      </motion.div>

      {/* Center Hero: Floating Rakhi & Circular Ripple */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center py-4">
        {/* Circular Ripples when clicked */}
        <AnimatePresence>
          {rippleEffect && (
            <>
              <motion.div
                key="ripple-1"
                initial={{ scale: 0.8, opacity: 0.9 }}
                animate={{ scale: 2.8, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6, ease: 'easeOut' }}
                className="absolute w-44 h-44 rounded-full border-2 border-[#FDE68A] pointer-events-none"
              />
              <motion.div
                key="ripple-2"
                initial={{ scale: 0.6, opacity: 0.8 }}
                animate={{ scale: 2.2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
                className="absolute w-44 h-44 rounded-full border border-[#C89B3C] pointer-events-none"
              />
            </>
          )}
        </AnimatePresence>

        {/* Ambient Glow behind Rakhi */}
        <div className="absolute w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(200,155,60,0.3)_0%,transparent_70%)] animate-pulse pointer-events-none" />

        {/* Clickable Floating Rakhi */}
        <motion.button
          onClick={handleRakhiClick}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1.5, -1.5, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative group p-4 sm:p-6 cursor-pointer focus:outline-none"
          title="राखी को स्पर्श करें"
        >
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center drop-shadow-[0_0_35px_rgba(200,155,60,0.65)]">
            <TraditionalRakhiSvg size={180} />
          </div>

          {!hasClickedRakhi && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-3 text-xs sm:text-sm font-serif font-semibold text-[#FDE68A] bg-[#221008]/80 px-3 py-1 rounded-full border border-[#C89B3C]/40"
            >
              (राखी को स्पर्श करें 👆)
            </motion.p>
          )}
        </motion.button>

        {/* Revealed Poetic Lines */}
        <div className="mt-5 space-y-3 min-h-[110px] flex flex-col items-center justify-center">
          <AnimatePresence>
            {hasClickedRakhi && (
              <>
                <motion.h2
                  key="rakhi-line-1"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  className="text-3xl sm:text-5xl font-heading text-[#FFF5DE] tracking-wide"
                >
                  "एक धागा..."
                </motion.h2>

                <motion.p
                  key="rakhi-line-2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                  className="text-2xl sm:text-4xl font-devanagari text-[#FDE68A] font-bold flex items-center gap-2 justify-center"
                >
                  <span>और कितने सारे अपने।</span>
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#E11D48] fill-[#E11D48] animate-pulse inline" />
                </motion.p>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Next Action Button */}
      <div className="relative z-10 pb-4">
        {hasClickedRakhi ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={onNext}
            className="group px-8 py-3.5 sm:px-10 sm:py-4 bg-gradient-to-r from-[#801B2B] via-[#9B2236] to-[#801B2B] hover:from-[#9B2236] hover:to-[#B32B42] text-[#FFF9EF] font-serif font-bold text-lg sm:text-xl rounded-2xl border-2 border-[#C89B3C] shadow-[0_0_25px_rgba(200,155,60,0.45)] hover:shadow-[0_0_35px_rgba(200,155,60,0.7)] flex items-center gap-3 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>आगे चलें</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#FDE68A] group-hover:translate-x-1.5 transition-transform" />
          </motion.button>
        ) : (
          <p className="text-xs sm:text-sm text-[#D8C4AA] font-serif">
            रक्षाबंधन का यह पावन धागा दिलों को जोड़ता है ✨
          </p>
        )}
      </div>
    </div>
  );
};
