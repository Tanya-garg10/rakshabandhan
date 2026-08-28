import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

interface Screen08Props {
  onNext: () => void;
}

const WORDS = [
  { hi: 'फ़िक्र', en: 'Care', delay: 800 },
  { hi: 'दुआ', en: 'Prayer', delay: 2000 },
  { hi: 'भरोसा', en: 'Trust', delay: 3200 },
  { hi: 'अपनापन', en: 'Belonging', delay: 4400 },
  { hi: 'साथ', en: 'Togetherness', delay: 5600 },
];

export const Screen08UnseenBond: React.FC<Screen08Props> = ({ onNext }) => {
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    WORDS.forEach((_, idx) => {
      setTimeout(() => {
        setRevealedCount((prev) => Math.max(prev, idx + 1));
      }, (idx + 1) * 1100);
    });
  }, []);

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#120A07] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Dark Ambient Lighting with glowing golden aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.18)_0%,transparent_75%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 space-y-2 pt-2">
        <span className="text-xs uppercase tracking-widest text-[#C89B3C] font-semibold bg-[#26140D] px-3 py-1 rounded-full border border-[#C89B3C]/30 inline-block">
          अदृश्य बंधन • The Unseen Bond
        </span>
      </div>

      {/* Glowing Golden Thread with Words Appearing Along It */}
      <div className="relative z-10 max-w-3xl w-full my-auto flex flex-col items-center">
        {/* The Golden Line */}
        <div className="relative w-full py-10 flex items-center justify-center">
          {/* Pulsing Back Glow */}
          <div className="absolute inset-x-0 h-1 bg-[#FDE68A]/20 blur-md" />
          
          <svg className="w-full h-12 overflow-visible">
            <line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="#FDE68A"
              strokeWidth="3"
              strokeDasharray="8 4"
              className="drop-shadow-[0_0_12px_#FDE68A]"
            />
          </svg>

          {/* Left & Right Anchors */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#801B2B] border-2 border-[#FDE68A] shadow-[0_0_15px_#FDE68A]" />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#801B2B] border-2 border-[#FDE68A] shadow-[0_0_15px_#FDE68A]" />
        </div>

        {/* 5 Emotional Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 w-full">
          {WORDS.map((item, idx) => {
            const isShown = revealedCount > idx;
            return (
              <motion.div
                key={item.hi}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: isShown ? 1 : 0.2, scale: isShown ? 1 : 0.85, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`p-3 sm:p-4 rounded-xl border text-center transition-all ${
                  isShown
                    ? 'bg-[#2E180E] border-[#C89B3C] shadow-[0_0_20px_rgba(200,155,60,0.25)]'
                    : 'bg-[#180C07] border-[#422617] opacity-40'
                }`}
              >
                <p className="text-xl sm:text-2xl font-bold font-heading text-[#FDE68A]">
                  {item.hi}
                </p>
                <p className="text-[11px] text-[#C89B3C] font-serif uppercase tracking-wider mt-0.5">
                  {item.en}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* The Final Heart Connection Message */}
        {revealedCount >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 space-y-2"
          >
            <div className="flex items-center justify-center gap-2 text-[#EF4444]">
              <Heart className="w-5 h-5 fill-[#EF4444] animate-pulse" />
              <p className="text-2xl sm:text-3xl font-heading text-[#FFF5DE]">
                "यही तो है भाई-बहन का रिश्ता।"
              </p>
              <Heart className="w-5 h-5 fill-[#EF4444] animate-pulse" />
            </div>
            <p className="text-sm sm:text-base text-[#D8C4AA] font-devanagari">
              जो आँखों से दिखाई नहीं देता, पर हर सांस में महसूस होता है।
            </p>
          </motion.div>
        )}
      </div>

      {/* Bottom Button */}
      <div className="relative z-10 pt-2 pb-1">
        <button
          onClick={onNext}
          className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-3 transition cursor-pointer"
        >
          <span>यादों की रील देखें →</span>
        </button>
      </div>
    </div>
  );
};
