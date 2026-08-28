import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, Sparkles, Moon } from 'lucide-react';
import { TraditionalRakhiSvg } from '../Ornaments';

interface Screen16Props {
  onNext: () => void;
}

const WISHES = [
  { id: 'w1', text: 'हमेशा स्वस्थ रहें।', sub: 'Good Health & Vitality', x: 20, y: 30 },
  { id: 'w2', text: 'हमेशा खुश रहें।', sub: 'Endless Joy & Peace', x: 75, y: 25 },
  { id: 'w3', text: 'परिवार यूँ ही साथ रहे।', sub: 'Family Togetherness', x: 50, y: 55 },
  { id: 'w4', text: 'पुरानी यादें हमेशा मुस्कान दें।', sub: 'Cherished Memories', x: 25, y: 75 },
  { id: 'w5', text: 'नई यादें बनती रहें।', sub: 'New Blessings Forever', x: 80, y: 70 },
];

export const Screen16LittleWishes: React.FC<Screen16Props> = ({ onNext }) => {
  const [clickedWishes, setClickedWishes] = useState<Set<string>>(new Set(['w1', 'w3']));
  const [activeWish, setActiveWish] = useState<string | null>('हमेशा स्वस्थ रहें।');

  const handleStarClick = (w: typeof WISHES[0]) => {
    setClickedWishes((prev) => new Set([...prev, w.id]));
    setActiveWish(w.text);
  };

  const isConstellationComplete = clickedWishes.size >= 4;

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#0B0609] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Deep Celestial Night Sky with Stardust */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0%,transparent_75%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 space-y-1 pt-2 max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C89B3C] font-semibold">
          <Moon className="w-4 h-4 text-[#FDE68A]" />
          <span>तारों की दुआएँ • Little Wishes</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#FFF5DE]">
          "सदा बनी रहे परमात्मा की कृपा"
        </h2>
        <p className="text-xs text-[#D8C4AA] font-devanagari">
          चमकते तारों पर क्लिक करें ({clickedWishes.size}/5 दुआएँ खुलीं)
        </p>
      </div>

      {/* Night Sky Constellation Area */}
      <div className="relative z-10 w-full max-w-2xl h-64 sm:h-72 my-auto bg-[#140B12]/80 rounded-2xl border border-[#C89B3C]/30 p-4 relative overflow-hidden flex items-center justify-center">
        {/* Constellation Lines SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {isConstellationComplete && (
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
              d="M 120 70 L 480 60 L 300 140 L 150 200 L 500 180 Z"
              stroke="#FDE68A"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
              className="opacity-70 drop-shadow-[0_0_8px_#FDE68A]"
            />
          )}
        </svg>

        {/* 5 Interactive Stars */}
        {WISHES.map((w) => {
          const isClicked = clickedWishes.has(w.id);
          return (
            <motion.button
              key={w.id}
              onClick={() => handleStarClick(w)}
              whileHover={{ scale: 1.25 }}
              className="absolute p-2 rounded-full cursor-pointer transition-all transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group"
              style={{ left: `${w.x}%`, top: `${w.y}%` }}
            >
              <div className={`p-2 rounded-full border transition-all ${
                isClicked
                  ? 'bg-[#801B2B] border-[#FDE68A] text-[#FDE68A] shadow-[0_0_15px_#FDE68A]'
                  : 'bg-[#2B1420] border-[#C89B3C]/50 text-[#C89B3C]'
              }`}>
                <Star className={`w-4 h-4 sm:w-5 sm:h-5 ${isClicked ? 'fill-[#FDE68A]' : 'animate-pulse'}`} />
              </div>
              <span className="text-[10px] font-devanagari text-[#FFF5DE] bg-[#000]/80 px-1.5 py-0.5 rounded mt-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {w.text}
              </span>
            </motion.button>
          );
        })}

        {/* Central Constellation Rakhi Emblem if complete */}
        {isConstellationComplete && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="pointer-events-none"
          >
            <TraditionalRakhiSvg size={100} className="drop-shadow-[0_0_20px_#FDE68A]" />
          </motion.div>
        )}
      </div>

      {/* Active Wish Display */}
      {activeWish && (
        <motion.div
          key={activeWish}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 bg-[#2B1420] px-6 py-2.5 rounded-full border border-[#C89B3C] text-sm sm:text-base font-serif font-bold text-[#FDE68A] flex items-center gap-2 shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-[#FDE68A]" />
          <span>⭐ {activeWish}</span>
        </motion.div>
      )}

      {/* Bottom Button */}
      <div className="relative z-10 pt-4 pb-1">
        <button
          onClick={onNext}
          className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-3 transition cursor-pointer"
        >
          <span>आत्मीय पत्र (Personal Letter) पढ़ें →</span>
        </button>
      </div>
    </div>
  );
};
