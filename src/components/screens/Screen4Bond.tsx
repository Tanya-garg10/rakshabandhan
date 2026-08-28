import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { TraditionalRakhiSvg, FiligreeDivider } from '../Ornaments';

interface Screen4Props {
  onNext: () => void;
  onPrev: () => void;
  fontSizeClass: string;
}

export const Screen4Bond: React.FC<Screen4Props> = ({
  onNext,
  onPrev,
  fontSizeClass,
}) => {
  const points = [
    { title: 'यह भरोसा है।', desc: 'जो बिना कहे हर मुश्किल में साथ खड़ा रहता है।' },
    { title: 'यह अपनापन है।', desc: 'जो मीलों की दूरी और सालों के फासले को पल भर में मिटा देता है।' },
    { title: 'यह उन यादों का रिश्ता है...', desc: '...जो उम्र के साथ और भी गहरा, पवित्र और अनमोल होता जाता है।' },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-between py-4 sm:py-6 px-4 sm:px-8 text-center max-w-4xl mx-auto overflow-y-auto">
      {/* Top Header */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm uppercase tracking-widest text-[#8C6D53] font-serif"
        >
          स्मृति पन्ना • ०४
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#671421] mt-1"
        >
          राखी सिर्फ़ एक धागा नहीं है।
        </motion.h2>
        <FiligreeDivider className="my-2" />
      </div>

      {/* Main Center Rakhi Symbol & Staggered Reveal Lines */}
      <div className="my-auto py-2 w-full max-w-2xl space-y-6">
        {/* Animated Rakhi Centerpiece */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="p-3 sm:p-5 rounded-full bg-[#FAF5EB] border-2 border-[#C89B3C] shadow-lg relative">
            <TraditionalRakhiSvg size={130} className="sm:scale-115" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
              className="absolute -inset-1 rounded-full border border-dashed border-[#C89B3C]/50 pointer-events-none"
            />
          </div>
        </motion.div>

        {/* 3 Meaning Cards / Lines with staggered reveal */}
        <div className="space-y-3.5">
          {points.map((pt, idx) => (
            <motion.div
              key={pt.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + idx * 0.3 }}
              className="p-4 sm:p-5 bg-[#FFFDF9]/90 border border-[#D8C4A7] rounded-2xl shadow-xs text-center sm:text-left flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#F5E8D4] border border-[#C89B3C] flex items-center justify-center shrink-0 text-[#801B2B] font-bold">
                {idx === 0 && <ShieldCheck className="w-5 h-5 text-[#801B2B]" />}
                {idx === 1 && <Heart className="w-5 h-5 text-[#801B2B] fill-[#801B2B]" />}
                {idx === 2 && <Sparkles className="w-5 h-5 text-[#C89B3C]" />}
              </div>
              <div className="space-y-0.5">
                <h3 className="text-lg sm:text-xl font-bold font-serif text-[#801B2B]">
                  {pt.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5A3825] font-serif">
                  {pt.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full flex items-center justify-between gap-4 pt-4 border-t border-[#E8DCC8]/80 max-w-xl">
        <button
          onClick={onPrev}
          className="py-3 px-5 sm:px-6 bg-[#EFE4D2] hover:bg-[#E2D2BC] text-[#5A3825] font-semibold text-base sm:text-lg rounded-xl border border-[#C8B89E] transition cursor-pointer"
        >
          ← पिछला पन्ना
        </button>

        <button
          onClick={onNext}
          className="py-3 sm:py-4 px-7 sm:px-8 bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] font-bold text-lg sm:text-xl rounded-xl shadow-lg border border-[#C89B3C] flex items-center gap-2 transition cursor-pointer"
        >
          <span>एक खास संदेश</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A]" />
        </button>
      </div>
    </div>
  );
};
