import React from 'react';
import { motion } from 'motion/react';
import { RotateCcw } from 'lucide-react';
import { FiligreeDivider } from '../Ornaments';

interface Screen10Props {
  finalPhoto: {
    url: string;
    title: string;
    subText: string;
  };
  onRestart: () => void;
}

export const Screen10FinalPhoto: React.FC<Screen10Props> = ({
  finalPhoto,
  onRestart,
}) => {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-between px-3 sm:px-6 py-4 overflow-hidden select-none">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[#0F0604] bg-[radial-gradient(ellipse_at_center,rgba(60,20,10,0.7)_0%,rgba(10,3,2,0.98)_100%)] pointer-events-none" />

      {/* Cinematic Fullscreen Family Frame */}
      <div className="relative z-10 w-full max-w-4xl mx-auto my-auto flex flex-col items-center py-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative w-full h-[320px] sm:h-[440px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(200,155,60,0.6)] border-4 border-[#C89B3C] bg-[#1E0E08]"
        >
          {/* Slow Cinematic Zoom Ken-Burns Effect */}
          <motion.img
            src={finalPhoto.url}
            alt="Family Complete"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full h-full object-contain"
          />

          {/* Vignette Overlay (Darkened for better text visibility) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/40 pointer-events-none" />

          {/* Poetic Overlay on bottom of photo */}
          <div className="absolute bottom-6 left-6 right-6 text-center space-y-1 sm:space-y-2 pointer-events-none">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-lg font-devanagari text-[#E2D2BC] italic"
            >
              "कुछ रिश्ते सिर्फ़ तस्वीरों में नहीं, दिल में रहते हैं।"
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-2xl sm:text-5xl font-heading text-[#FFF5DE] tracking-wide drop-shadow-lg"
            >
              रक्षाबंधन की हार्दिक शुभकामनाएँ ❤️
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-xs sm:text-base font-serif text-[#FDE68A] font-bold"
            >
              हमारा परिवार — हमारी सबसे खूबसूरत कहानी।
            </motion.p>
          </div>
        </motion.div>

        <FiligreeDivider className="my-4 max-w-xs" />

        {/* Action Button */}
        <div className="flex items-center justify-center mt-1">
          {/* Restart */}
          <button
            onClick={onRestart}
            className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-2.5 transition cursor-pointer"
          >
            <RotateCcw className="w-5 h-5 text-[#FDE68A]" />
            <span>यादें फिर से देखें ↺</span>
          </button>
        </div>
      </div>

      {/* Footer blessing line */}
      <div className="relative z-10 pb-2 text-center text-xs text-[#C89B3C]/80 font-serif">
        ✨ प्रेम, विश्वास और अटूट पारिवारिक स्नेह की अमर गाथा ✨
      </div>
    </div>
  );
};
