import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Heart, Star, X } from 'lucide-react';
import { LittleSmileItem } from '../../types';

interface Screen07Props {
  smiles: LittleSmileItem[];
  onNext: () => void;
}

export const Screen07LittleSmiles: React.FC<Screen07Props> = ({
  smiles,
  onNext,
}) => {
  const [activeSmile, setActiveSmile] = useState<LittleSmileItem | null>(null);

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-between px-3 sm:px-6 py-4 overflow-hidden select-none">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-[#140805] bg-[radial-gradient(ellipse_at_top,rgba(70,25,15,0.7)_0%,rgba(12,5,3,0.95)_100%)] pointer-events-none" />

      {/* Floating Gentle Sparkles & Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            animate={{
              y: [0, -35, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              top: `${(i * 20) % 90}%`,
              left: `${(i * 25) % 90}%`,
            }}
            className="absolute text-[#FDE68A] text-sm"
          >
            {i % 2 === 0 ? '✨' : '💖'}
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 text-center space-y-1.5 pt-2 max-w-xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#2B1710]/90 border border-[#C89B3C]/50 text-xs sm:text-sm font-serif font-bold text-[#FDE68A]">
          <Heart className="w-3.5 h-3.5 text-[#E11D48] fill-[#E11D48]" />
          <span>नटखट कदम</span>
        </span>
        <h2 className="text-2xl sm:text-4xl font-heading text-[#FFF5DE]">
          घर की नई मुस्कान और खुशियों की किलकारी
        </h2>
        <p className="text-xs sm:text-sm font-devanagari text-[#E2D2BC]">
          (मासूम चेहरों को स्पर्श करके दुलार दें 🥰)
        </p>
      </div>

      {/* Floating Photo Cards Grid / Floating Bubbles */}
      <div className="relative z-10 my-auto w-full max-w-4xl py-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {smiles.map((smile, idx) => (
            <motion.div
              key={smile.id}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, idx % 2 === 0 ? -8 : 8, 0],
              }}
              transition={{
                y: {
                  duration: 4 + (idx % 2),
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                duration: 0.6,
                delay: idx * 0.15,
              }}
              whileHover={{ scale: 1.08, zIndex: 10 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveSmile(smile)}
              className="bg-[#FAF5EB] p-3 pb-5 rounded-2xl shadow-xl border-2 border-[#C89B3C] flex flex-col items-center text-center cursor-pointer group hover:border-[#FDE68A] transition-all"
            >
              {/* Circular/Rounded Photo Container */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-[#D8C4A7] shadow-inner bg-[#24120A] mb-2">
                <img
                  src={smile.imageUrl}
                  alt={smile.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              {/* Tag & Caption */}
              <span className="text-[10px] sm:text-xs font-serif font-bold px-2 py-0.5 rounded-full bg-[#801B2B] text-[#FFF5DE] mb-1">
                {smile.tag}
              </span>
              <p className="text-xs sm:text-sm font-handwritten font-bold text-[#801B2B]">
                "{smile.caption}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pop Forward Zoom Modal */}
      <AnimatePresence>
        {activeSmile && (
          <motion.div
            key="smile-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
            onClick={() => setActiveSmile(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#FAF5EB] rounded-3xl p-5 sm:p-6 shadow-2xl border-3 border-[#C89B3C] max-w-sm w-full text-center text-[#3D2C24]"
            >
              <button
                onClick={() => setActiveSmile(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-[#EFE4D2] hover:bg-[#DFCDB4] text-[#633A22] transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-[#FDE68A] mb-3 bg-[#24120A]">
                <img
                  src={activeSmile.imageUrl}
                  alt={activeSmile.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#801B2B]">
                {activeSmile.title}
              </h3>
              <p className="text-base sm:text-lg font-devanagari font-semibold text-[#5A3825] mt-1">
                "{activeSmile.caption}"
              </p>

              <button
                onClick={() => setActiveSmile(null)}
                className="mt-4 w-full py-2 bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] font-serif font-bold rounded-xl transition cursor-pointer"
              >
                ढेर सारा प्यार ❤️
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Footer */}
      <div className="relative z-10 pb-2">
        <button
          onClick={onNext}
          className="group px-8 py-3.5 bg-gradient-to-r from-[#801B2B] via-[#9B2236] to-[#801B2B] hover:from-[#9B2236] hover:to-[#B32B42] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-[0_0_20px_rgba(200,155,60,0.4)] flex items-center gap-3 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>पारिवारिक मोज़ेक</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A] group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
