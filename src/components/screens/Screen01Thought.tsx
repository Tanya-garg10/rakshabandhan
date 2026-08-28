import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { TraditionalRakhiSvg } from '../Ornaments';

interface Screen01Props {
  onNext: () => void;
}

export const Screen01Thought: React.FC<Screen01Props> = ({ onNext }) => {
  const [step, setStep] = useState<number>(0);

  // Progressive cinematic reveal timings
  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1200),  // "कुछ रिश्ते..."
      setTimeout(() => setStep(2), 3200),  // "वक्त के साथ पुराने नहीं होते।"
      setTimeout(() => setStep(3), 5600),  // "वो हर साल और गहरे होते जाते हैं।"
      setTimeout(() => setStep(4), 8000),  // Golden thread forms a Rakhi
      setTimeout(() => setStep(5), 10200), // "रक्षाबंधन की एक छोटी सी कहानी..." + Begin button
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-8 bg-[#120B08] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Background Subtle Golden Ambient Glow & Dust Motifs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.12)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Animated Subtle Golden Dust Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={`thought-dust-${i}`}
            className="absolute w-1 h-1 bg-[#FDE68A] rounded-full"
            style={{
              top: `${(i * 17) % 100}%`,
              left: `${(i * 23) % 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (i % 5) * 0.8,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-6 sm:space-y-8">
        {/* Animated Golden Thread SVG that reveals and morphs */}
        <div className="h-32 sm:h-40 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {step < 4 ? (
              <motion.div
                key="thread-forming"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                className="relative flex items-center justify-center"
              >
                <svg width="260" height="60" viewBox="0 0 260 60" className="overflow-visible">
                  <defs>
                    <linearGradient id="threadGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#C89B3C" stopOpacity="0" />
                      <stop offset="50%" stopColor="#FDE68A" stopOpacity="1" />
                      <stop offset="100%" stopColor="#C89B3C" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 10 30 Q 70 10 130 30 T 250 30"
                    fill="none"
                    stroke="url(#threadGlow)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse' }}
                  />
                  <motion.circle
                    cx="130"
                    cy="30"
                    r="4"
                    fill="#FFF"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                </svg>
              </motion.div>
            ) : (
              <motion.div
                key="rakhi-revealed"
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, type: 'spring', damping: 14 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#C89B3C]/30 rounded-full blur-xl scale-125 animate-pulse" />
                <TraditionalRakhiSvg size={140} className="relative z-10 drop-shadow-[0_0_25px_rgba(253,230,138,0.5)]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Thought Lines */}
        <div className="space-y-5 min-h-[160px] flex flex-col items-center justify-center">
          <AnimatePresence>
            {step >= 1 && (
              <motion.p
                key="thought-line-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-2xl sm:text-4xl font-serif text-[#FDE68A] tracking-wide font-bold"
              >
                "कुछ रिश्ते..."
              </motion.p>
            )}

            {step >= 2 && (
              <motion.p
                key="thought-line-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-xl sm:text-3xl font-devanagari text-[#FAF5EB] leading-relaxed font-semibold"
              >
                "वक्त के साथ पुराने नहीं होते।"
              </motion.p>
            )}

            {step >= 3 && (
              <motion.p
                key="thought-line-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="text-xl sm:text-3xl font-devanagari text-[#F6E2C5] italic"
              >
                "वो हर साल और गहरे होते जाते हैं।"
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Final Conclusion & Action */}
        {step >= 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="pt-4 flex flex-col items-center space-y-7"
          >
            <div className="flex items-center gap-3 text-[#C89B3C] text-base sm:text-lg font-serif">
              <span>✦</span>
              <p className="font-heading text-xl sm:text-3xl text-[#FFF3DA] tracking-wide">
                रक्षाबंधन की एक अनमोल कहानी...
              </p>
              <span>✦</span>
            </div>

            <button
              onClick={onNext}
              className="group px-9 py-4 bg-gradient-to-r from-[#801B2B] via-[#9B2236] to-[#801B2B] hover:from-[#9B2236] hover:to-[#B32B42] text-[#FFF9EF] font-serif font-bold text-lg sm:text-xl rounded-2xl border-2 border-[#C89B3C] shadow-[0_0_25px_rgba(200,155,60,0.4)] hover:shadow-[0_0_35px_rgba(200,155,60,0.7)] flex items-center gap-3.5 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>शुरुआत करें</span>
              <span className="text-[#FDE68A] font-serif">(आरंभ)</span>
              <ArrowRight className="w-6 h-6 text-[#FDE68A] group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}

        {/* Fast skip / continue trigger for seniors */}
        {step < 4 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2.5 }}
            onClick={() => setStep(5)}
            className="text-xs text-[#C89B3C]/80 underline hover:text-[#FDE68A] transition cursor-pointer pt-4"
          >
            आगे बढ़ें (Skip animation)
          </motion.button>
        )}
      </div>
    </div>
  );
};
