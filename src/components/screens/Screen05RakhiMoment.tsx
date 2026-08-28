import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Flame, Heart, CheckCircle2 } from 'lucide-react';
import { TraditionalRakhiSvg } from '../Ornaments';

interface Screen05Props {
  sisterImg: string;
  brotherImg: string;
  onNext: () => void;
}

export const Screen05RakhiMoment: React.FC<Screen05Props> = ({
  sisterImg,
  brotherImg,
  onNext,
}) => {
  const [rakhiBound, setRakhiBound] = useState(false);
  const [tilakApplied, setTilakApplied] = useState(false);
  const [riceOffered, setRiceOffered] = useState(false);
  const [diyaLit, setDiyaLit] = useState(false);
  const [sweetsShared, setSweetsShared] = useState(false);

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-between px-3 sm:px-6 py-4 overflow-hidden select-none">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[#160B08] bg-[radial-gradient(ellipse_at_center,rgba(80,25,12,0.6)_0%,rgba(15,7,4,0.98)_100%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center space-y-1.5 pt-2 max-w-xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#2B1710]/90 border border-[#C89B3C]/50 text-xs sm:text-sm font-serif font-bold text-[#FDE68A]">
          <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
          <span>पावन अनुष्ठान</span>
        </span>
        <h2 className="text-2xl sm:text-4xl font-heading text-[#FFF5DE]">
          थाल सजाई है प्यार से...
        </h2>
        <p className="text-xs sm:text-sm font-devanagari text-[#E2D2BC]">
          (थाल की प्रत्येक वस्तु को स्पर्श करके रस्म पूरी करें 🧵 🔴 🪔 🍬)
        </p>
      </div>

      {/* Connected Photos Stage */}
      <div className="relative z-10 my-auto w-full max-w-3xl flex flex-col items-center justify-center">
        <div className="relative w-full flex items-center justify-between px-4 sm:px-12 py-6">
          {/* Sister Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative flex flex-col items-center"
          >
            <div className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-3 border-[#C89B3C] shadow-2xl bg-[#24120A]">
              <img
                src={sisterImg}
                alt="Sister"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <span className="mt-2 text-xs sm:text-sm font-serif font-bold text-[#FDE68A] bg-[#2B1710] px-3 py-0.5 rounded-full border border-[#C89B3C]/40">
              प्यारी बहना
            </span>
          </motion.div>

          {/* Center Golden Rakhi Thread Connection */}
          <div className="flex-1 relative h-24 flex items-center justify-center px-2">
            {rakhiBound ? (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="relative w-full flex items-center justify-center"
              >
                {/* SVG Golden Thread connecting photos */}
                <svg className="w-full h-12 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 300 40">
                  <motion.path
                    d="M 0,20 Q 150,5 300,20"
                    fill="none"
                    stroke="#FDE68A"
                    strokeWidth="3.5"
                    strokeDasharray="6, 3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                  />
                  <path d="M 0,20 Q 150,35 300,20" fill="none" stroke="#E11D48" strokeWidth="2" />
                </svg>

                {/* Centered Rakhi Emblem */}
                <div className="absolute -top-3 w-14 h-14 sm:w-16 sm:h-16 drop-shadow-[0_0_20px_#FDE68A]">
                  <TraditionalRakhiSvg size={60} />
                </div>
              </motion.div>
            ) : (
              <div className="text-center">
                <span className="text-xs font-serif text-[#C89B3C]/70 italic animate-pulse">
                  (राखी बांधने के लिए नीचे 'राखी' छुएं)
                </span>
              </div>
            )}
          </div>

          {/* Brother Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative flex flex-col items-center"
          >
            <div className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-3 border-[#C89B3C] shadow-2xl bg-[#24120A]">
              <img
                src={brotherImg}
                alt="Brother"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Applied Tilak Mark */}
              {tilakApplied && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center"
                >
                  <div className="w-3 h-5 rounded-full bg-[#E11D48] shadow-[0_0_10px_#E11D48]" />
                  {riceOffered && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FDE68A] -mt-1 shadow-xs" />
                  )}
                </motion.div>
              )}
            </div>
            <span className="mt-2 text-xs sm:text-sm font-serif font-bold text-[#FDE68A] bg-[#2B1710] px-3 py-0.5 rounded-full border border-[#C89B3C]/40">
              स्नेही भैया
            </span>
          </motion.div>
        </div>

        {/* Emotion Caption when Rakhi is clicked */}
        {rakhiBound && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-2 space-y-1"
          >
            <p className="text-xl sm:text-3xl font-heading text-[#FDE68A]">
              "रिश्ता वही..."
            </p>
            <p className="text-lg sm:text-2xl font-devanagari text-[#FFF5DE] font-semibold">
              "बस यादें बढ़ती गईं। ❤️"
            </p>
          </motion.div>
        )}

        {/* The Puja Thali Interactive Items */}
        <div className="mt-4 p-4 rounded-3xl bg-[#25130A]/95 border-2 border-[#C89B3C] shadow-2xl w-full max-w-xl">
          <div className="text-center pb-3 text-xs sm:text-sm font-serif font-bold text-[#FDE68A] flex items-center justify-center gap-1.5">
            <span>✨ पूजा की थाल ✨</span>
          </div>

          <div className="grid grid-cols-5 gap-2 sm:gap-3 text-center">
            {/* 1. Rakhi */}
            <button
              onClick={() => setRakhiBound(true)}
              className={`p-2.5 rounded-2xl border flex flex-col items-center justify-center transition cursor-pointer ${
                rakhiBound
                  ? 'bg-[#801B2B] border-[#FDE68A] text-[#FFF5DE]'
                  : 'bg-[#3B1E12] hover:bg-[#522918] border-[#C89B3C]/40 text-[#FDE68A]'
              }`}
            >
              <div className="w-8 h-8 flex items-center justify-center text-xl">🧵</div>
              <span className="text-[11px] sm:text-xs font-serif font-bold mt-1">राखी</span>
              {rakhiBound && <CheckCircle2 className="w-3.5 h-3.5 text-[#FDE68A] mt-0.5" />}
            </button>

            {/* 2. Tilak */}
            <button
              onClick={() => setTilakApplied(true)}
              className={`p-2.5 rounded-2xl border flex flex-col items-center justify-center transition cursor-pointer ${
                tilakApplied
                  ? 'bg-[#801B2B] border-[#FDE68A] text-[#FFF5DE]'
                  : 'bg-[#3B1E12] hover:bg-[#522918] border-[#C89B3C]/40 text-[#FDE68A]'
              }`}
            >
              <div className="w-8 h-8 flex items-center justify-center text-xl">🔴</div>
              <span className="text-[11px] sm:text-xs font-serif font-bold mt-1">तिलक</span>
              {tilakApplied && <CheckCircle2 className="w-3.5 h-3.5 text-[#FDE68A] mt-0.5" />}
            </button>

            {/* 3. Rice / Akshat */}
            <button
              onClick={() => setRiceOffered(true)}
              className={`p-2.5 rounded-2xl border flex flex-col items-center justify-center transition cursor-pointer ${
                riceOffered
                  ? 'bg-[#801B2B] border-[#FDE68A] text-[#FFF5DE]'
                  : 'bg-[#3B1E12] hover:bg-[#522918] border-[#C89B3C]/40 text-[#FDE68A]'
              }`}
            >
              <div className="w-8 h-8 flex items-center justify-center text-xl">🌾</div>
              <span className="text-[11px] sm:text-xs font-serif font-bold mt-1">अक्षत</span>
              {riceOffered && <CheckCircle2 className="w-3.5 h-3.5 text-[#FDE68A] mt-0.5" />}
            </button>

            {/* 4. Diya */}
            <button
              onClick={() => setDiyaLit(true)}
              className={`p-2.5 rounded-2xl border flex flex-col items-center justify-center transition cursor-pointer ${
                diyaLit
                  ? 'bg-[#801B2B] border-[#FDE68A] text-[#FFF5DE]'
                  : 'bg-[#3B1E12] hover:bg-[#522918] border-[#C89B3C]/40 text-[#FDE68A]'
              }`}
            >
              <div className="w-8 h-8 flex items-center justify-center text-xl">
                <Flame className={`w-6 h-6 ${diyaLit ? 'text-[#FDE68A] animate-pulse' : 'text-[#F97316]'}`} />
              </div>
              <span className="text-[11px] sm:text-xs font-serif font-bold mt-1">दीपक</span>
              {diyaLit && <CheckCircle2 className="w-3.5 h-3.5 text-[#FDE68A] mt-0.5" />}
            </button>

            {/* 5. Sweet Box */}
            <button
              onClick={() => setSweetsShared(true)}
              className={`p-2.5 rounded-2xl border flex flex-col items-center justify-center transition cursor-pointer ${
                sweetsShared
                  ? 'bg-[#801B2B] border-[#FDE68A] text-[#FFF5DE]'
                  : 'bg-[#3B1E12] hover:bg-[#522918] border-[#C89B3C]/40 text-[#FDE68A]'
              }`}
            >
              <div className="w-8 h-8 flex items-center justify-center text-xl">🍬</div>
              <span className="text-[11px] sm:text-xs font-serif font-bold mt-1">मिठाई</span>
              {sweetsShared && <CheckCircle2 className="w-3.5 h-3.5 text-[#FDE68A] mt-0.5" />}
            </button>
          </div>
        </div>

        {/* Sweets Animation Popover */}
        <AnimatePresence>
          {sweetsShared && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="mt-3 px-4 py-2 rounded-xl bg-[#801B2B] border border-[#FDE68A] text-xs sm:text-sm font-serif font-bold text-[#FFF5DE] flex items-center gap-2 shadow-lg"
            >
              <span>🍬 काजू कतली व लड्‌डू का मिठास भरा भोग! मुँह मीठा कीजिए!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="relative z-10 pb-2">
        <button
          onClick={onNext}
          className="group px-8 py-3.5 bg-gradient-to-r from-[#801B2B] via-[#9B2236] to-[#801B2B] hover:from-[#9B2236] hover:to-[#B32B42] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-[0_0_20px_rgba(200,155,60,0.4)] flex items-center gap-3 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>समय का सफ़र</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A] group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
