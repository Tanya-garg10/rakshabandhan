import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Heart, Sun, Flower2, TreePine, CheckCircle2 } from 'lucide-react';
import { WishTagItem } from '../../types';

interface Screen09Props {
  wishes: WishTagItem[];
  onNext: () => void;
}

export const Screen09WishTree: React.FC<Screen09Props> = ({
  wishes,
  onNext,
}) => {
  const [openedWishIds, setOpenedWishIds] = useState<string[]>([]);
  const [activeWish, setActiveWish] = useState<WishTagItem | null>(null);

  const toggleWish = (wish: WishTagItem) => {
    setActiveWish(wish);
    if (!openedWishIds.includes(wish.id)) {
      setOpenedWishIds((prev) => [...prev, wish.id]);
    }
  };

  const isAllOpened = openedWishIds.length >= wishes.length;

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-between px-3 sm:px-6 py-4 overflow-hidden select-none">
      {/* Background with Radiant Tree Illumination when all opened */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          isAllOpened
            ? 'bg-[#1F0E07] bg-[radial-gradient(circle_at_center,rgba(160,80,20,0.6)_0%,rgba(15,7,3,0.98)_90%)]'
            : 'bg-[#120603] bg-[radial-gradient(circle_at_center,rgba(50,20,10,0.6)_0%,rgba(10,4,2,0.98)_90%)]'
        } pointer-events-none`}
      />

      {/* Header */}
      <div className="relative z-10 text-center space-y-1.5 pt-2 max-w-xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#2B1710]/90 border border-[#C89B3C]/50 text-xs sm:text-sm font-serif font-bold text-[#FDE68A]">
          <TreePine className="w-3.5 h-3.5 text-[#C89B3C]" />
          <span>दुआओं का वृक्ष</span>
        </span>
        <h2 className="text-2xl sm:text-4xl font-heading text-[#FFF5DE]">
          शाखों पर बंधी हर दुआ... अपनों के नाम
        </h2>
        <p className="text-xs sm:text-sm font-devanagari text-[#E2D2BC]">
          (लटकते हुए रिबन और पर्चियों को स्पर्श करके दुआएं खोलें 📜)
        </p>
      </div>

      {/* Glowing Wish Tree Visualization Stage */}
      <div className="relative z-10 my-auto w-full max-w-3xl flex flex-col items-center justify-center py-4">
        {/* Sacred Tree Silhouette & Branches SVG */}
        <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center">
          <svg
            viewBox="0 0 600 400"
            className="w-full h-full pointer-events-none drop-shadow-[0_0_25px_rgba(200,155,60,0.5)]"
          >
            {/* Trunk */}
            <path
              d="M 280,400 Q 290,260 300,200 Q 310,260 320,400 Z"
              fill="#522918"
              stroke="#C89B3C"
              strokeWidth="2"
            />
            {/* Main Branches */}
            <path
              d="M 300,200 Q 200,140 120,130"
              fill="none"
              stroke={isAllOpened ? '#FDE68A' : '#A46E3A'}
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M 300,200 Q 220,100 190,60"
              fill="none"
              stroke={isAllOpened ? '#FDE68A' : '#A46E3A'}
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M 300,200 Q 300,90 300,40"
              fill="none"
              stroke={isAllOpened ? '#FDE68A' : '#A46E3A'}
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M 300,200 Q 380,100 410,60"
              fill="none"
              stroke={isAllOpened ? '#FDE68A' : '#A46E3A'}
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M 300,200 Q 400,140 480,130"
              fill="none"
              stroke={isAllOpened ? '#FDE68A' : '#A46E3A'}
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Glowing foliage circles */}
            {Array.from({ length: 14 }).map((_, idx) => (
              <circle
                key={`leaf-${idx}`}
                cx={150 + (idx * 28) % 320}
                cy={60 + (idx * 22) % 120}
                r={isAllOpened ? 12 : 8}
                fill={isAllOpened ? '#FDE68A' : '#C89B3C'}
                opacity={isAllOpened ? 0.85 : 0.4}
                className="animate-pulse"
              />
            ))}
          </svg>

          {/* Hanging Wish Ribbons / Tags positioned on the tree branches */}
          <div className="absolute inset-0 flex items-center justify-around px-4">
            {wishes.map((item, idx) => {
              const isOpened = openedWishIds.includes(item.id);

              return (
                <motion.div
                  key={item.id}
                  initial={{ y: -10 }}
                  animate={{
                    y: [0, idx % 2 === 0 ? 8 : -8, 0],
                    rotate: [0, idx % 2 === 0 ? 3 : -3, 0],
                  }}
                  transition={{
                    duration: 3.5 + idx * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="flex flex-col items-center"
                >
                  {/* Hanging string */}
                  <div className="w-0.5 h-12 sm:h-16 bg-[#FDE68A] shadow-xs" />

                  {/* Hanging Tag Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleWish(item)}
                    className={`p-3 sm:p-4 rounded-2xl shadow-xl border-2 cursor-pointer transition-all flex flex-col items-center max-w-[130px] sm:max-w-[150px] text-center ${
                      isOpened
                        ? 'bg-[#FAF5EB] border-[#FDE68A] text-[#801B2B]'
                        : 'bg-[#801B2B] hover:bg-[#9B2236] border-[#C89B3C] text-[#FFF5DE]'
                    }`}
                  >
                    <div className="text-xl sm:text-2xl mb-1">
                      {item.iconName === 'Heart' && '❤️'}
                      {item.iconName === 'Sparkles' && '✨'}
                      {item.iconName === 'Sun' && '☀️'}
                      {item.iconName === 'Flower2' && '🌸'}
                    </div>

                    <span className="text-xs sm:text-sm font-serif font-bold leading-snug">
                      {item.wish}
                    </span>

                    {isOpened && (
                      <span className="mt-1 text-[10px] font-sans font-semibold text-green-700 flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>स्वीकृत</span>
                      </span>
                    )}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* All Opened Celebration Banner */}
        {isAllOpened && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 px-6 py-2.5 rounded-full bg-[#801B2B] border-2 border-[#FDE68A] text-sm sm:text-base font-serif font-bold text-[#FFF5DE] shadow-[0_0_25px_#FDE68A] flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-[#FDE68A] animate-spin" />
            <span>वृक्ष आलोकित हो उठा! समस्त परिवार को सदा खुशहाली का वरदान! ✨</span>
          </motion.div>
        )}
      </div>

      {/* Wish Detail Modal */}
      <AnimatePresence>
        {activeWish && (
          <motion.div
            key="wish-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
            onClick={() => setActiveWish(null)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAF5EB] rounded-3xl p-6 sm:p-8 shadow-2xl border-3 border-[#C89B3C] max-w-sm w-full text-center text-[#3D2C24]"
            >
              <div className="text-4xl mb-2">✨</div>
              <h3 className="text-2xl font-heading font-bold text-[#801B2B] mb-2">
                {activeWish.wish}
              </h3>
              <p className="text-base sm:text-lg font-devanagari text-[#5A3825] font-semibold leading-relaxed mb-6">
                "{activeWish.subtitle}"
              </p>
              <button
                onClick={() => setActiveWish(null)}
                className="w-full py-2.5 bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] font-serif font-bold rounded-xl transition cursor-pointer"
              >
                तथास्तु • सदा खुश रहें ❤️
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
          <span>अंतिम पारिवारिक दर्शन</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A] group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
