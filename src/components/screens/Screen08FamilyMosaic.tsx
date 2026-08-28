import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Heart, RefreshCw, LayoutGrid } from 'lucide-react';
import { GoldenShimmerDust } from '../Ornaments';

interface Screen08Props {
  photos: { id: string; url: string; title: string }[];
  onNext: () => void;
}

export const Screen08FamilyMosaic: React.FC<Screen08Props> = ({
  photos,
  onNext,
}) => {
  const [isAssembled, setIsAssembled] = useState(false);
  const [showHeartBurst, setShowHeartBurst] = useState(false);

  useEffect(() => {
    // Automatically assemble after 2.8s
    const timer = setTimeout(() => {
      setIsAssembled(true);
      setShowHeartBurst(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleAssemble = () => {
    setIsAssembled(true);
    setShowHeartBurst(true);
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-between px-3 sm:px-6 py-4 overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[#120704] bg-[radial-gradient(ellipse_at_center,rgba(80,20,10,0.6)_0%,rgba(10,4,2,0.98)_100%)] pointer-events-none" />

      {/* Shimmer Dust */}
      <GoldenShimmerDust count={20} />

      {/* Header */}
      <div className="relative z-10 text-center space-y-1.5 pt-2 max-w-xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#2B1710]/90 border border-[#C89B3C]/50 text-xs sm:text-sm font-serif font-bold text-[#FDE68A]">
          <LayoutGrid className="w-3.5 h-3.5 text-[#C89B3C]" />
          <span>तस्वीरों का संगम</span>
        </span>
        <h2 className="text-2xl sm:text-4xl font-heading text-[#FFF5DE]">
          "अलग-अलग तस्वीरें..."
        </h2>
        <AnimatePresence>
          {isAssembled && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-xl sm:text-3xl font-devanagari text-[#FDE68A] font-bold flex items-center justify-center gap-2"
            >
              <span>"...मिलकर एक परिवार बनाती हैं।"</span>
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#E11D48] fill-[#E11D48] animate-bounce inline" />
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* The Dynamic Mosaic Stage */}
      <div className="relative z-10 my-auto w-full max-w-3xl min-h-[380px] sm:min-h-[440px] flex items-center justify-center py-4">
        {/* Heart Burst Particle Effect when assembled */}
        <AnimatePresence>
          {showHeartBurst && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
            >
              <div className="w-96 h-96 rounded-full border-4 border-[#FDE68A] shadow-[0_0_50px_#FDE68A]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mosaic Layout Grid */}
        <div
          className={`transition-all duration-1000 ${
            isAssembled
              ? 'grid grid-cols-3 gap-2.5 sm:gap-4 p-3 sm:p-5 rounded-3xl bg-[#FAF5EB]/95 shadow-[0_0_50px_rgba(200,155,60,0.5)] border-3 border-[#C89B3C]'
              : 'relative w-full h-[360px]'
          }`}
        >
          {photos.slice(0, 9).map((item, idx) => {
            // Scattered initial randomized coordinates
            const scatterPositions = [
              { x: -140, y: -120, rot: -14 },
              { x: 0, y: -160, rot: 8 },
              { x: 140, y: -110, rot: -10 },
              { x: -160, y: 0, rot: 12 },
              { x: 0, y: 0, rot: -5 },
              { x: 160, y: 10, rot: 15 },
              { x: -130, y: 130, rot: -8 },
              { x: 10, y: 150, rot: 10 },
              { x: 140, y: 120, rot: -12 },
            ];

            const pos = scatterPositions[idx] || { x: 0, y: 0, rot: 0 };

            return (
              <motion.div
                key={item.id}
                layout
                animate={
                  isAssembled
                    ? { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }
                    : {
                        x: pos.x,
                        y: pos.y,
                        rotate: pos.rot,
                        scale: 0.9,
                        opacity: 0.85,
                      }
                }
                transition={{
                  type: 'spring',
                  stiffness: 70,
                  damping: 15,
                  duration: 1.2,
                  delay: isAssembled ? idx * 0.08 : 0,
                }}
                className={`overflow-hidden rounded-xl bg-[#24120A] shadow-md border ${
                  isAssembled
                    ? 'border-[#D8C4A7] hover:scale-105 transition-transform'
                    : 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[#C89B3C]'
                }`}
                style={{
                  width: isAssembled ? 'auto' : '90px',
                  height: isAssembled ? '100px' : '90px',
                }}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-contain bg-[#24120A]"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Manual Trigger if user wants to toggle assembly */}
        {!isAssembled && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30">
            <button
              onClick={handleAssemble}
              className="px-4 py-1.5 rounded-full bg-[#C89B3C] text-[#2B1005] font-serif font-bold text-xs shadow-lg animate-pulse flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>तस्वीरें जोड़ें</span>
            </button>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="relative z-10 pb-2">
        <button
          onClick={onNext}
          className="group px-8 py-3.5 bg-gradient-to-r from-[#801B2B] via-[#9B2236] to-[#801B2B] hover:from-[#9B2236] hover:to-[#B32B42] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-[0_0_20px_rgba(200,155,60,0.4)] flex items-center gap-3 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>दुआओं का वृक्ष</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A] group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
