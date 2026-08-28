import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

interface Screen02Props {
  onNext: () => void;
}

export const Screen02Thread: React.FC<Screen02Props> = ({ onNext }) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 180, y: 120 });
  const [isTransformed, setIsTransformed] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransformed(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#180E0A] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl select-none cursor-crosshair"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,155,60,0.15),transparent_70%)] pointer-events-none" />

      {/* Top Prompts */}
      <div className="relative z-10 max-w-xl mx-auto space-y-4 pt-4">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs sm:text-sm uppercase tracking-widest text-[#FDE68A] font-semibold bg-[#2B1710] px-4 py-1.5 rounded-full border border-[#C89B3C] inline-block"
        >
          धागे की दास्तान • The Sacred Thread
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl sm:text-5xl font-heading text-[#FFF5DE] leading-tight"
        >
          "कभी सोचा है..."
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-xl sm:text-2xl text-[#E6D4BE] font-devanagari max-w-lg mx-auto font-medium"
        >
          "एक छोटा सा धागा इतनी बड़ी कहानी कैसे कह देता है?"
        </motion.p>
      </div>

      {/* Interactive Golden Thread Canvas / SVG */}
      <div className="relative w-full max-w-2xl h-56 sm:h-72 my-auto flex items-center justify-center pointer-events-none">
        <svg className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="goldSilkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C89B3C" />
              <stop offset="30%" stopColor="#FDE68A" />
              <stop offset="70%" stopColor="#E2A93B" />
              <stop offset="100%" stopColor="#801B2B" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Golden Interactive Elastic Wave */}
          <path
            d={`M 20 140 Q ${mousePos.x * 0.7 + 50} ${mousePos.y * 0.7 + 30}, 200 140 T 380 140 Q ${mousePos.x + 30} ${mousePos.y}, 580 140`}
            fill="none"
            stroke="url(#goldSilkGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#goldGlow)"
            className="transition-all duration-150 ease-out"
          />

          {/* Second Intertwined Silk Ribbon Thread */}
          <path
            d={`M 20 140 Q ${mousePos.x * 0.5 + 80} ${280 - mousePos.y * 0.6}, 200 140 T 380 140 Q ${mousePos.x} ${260 - mousePos.y * 0.5}, 580 140`}
            fill="none"
            stroke="#DC2626"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            strokeLinecap="round"
            className="opacity-75 transition-all duration-200 ease-out"
          />

          {/* Interactive bead following pointer */}
          <circle
            cx={mousePos.x}
            cy={mousePos.y}
            r="7"
            fill="#FEF08A"
            stroke="#92400E"
            strokeWidth="2"
            className="transition-all duration-75 ease-out drop-shadow-[0_0_12px_#FDE68A]"
          />
        </svg>

        {/* Morphing Word inside the thread */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isTransformed ? 1.1 : 0.9, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="bg-[#24130D]/90 backdrop-blur-md px-6 py-3.5 rounded-2xl border-2 border-[#C89B3C] shadow-[0_0_30px_rgba(200,155,60,0.3)]"
          >
            <div className="flex items-center gap-2 justify-center">
              <Sparkles className="w-5 h-5 text-[#FDE68A] animate-pulse" />
              <p className="text-xl sm:text-2xl font-bold font-heading text-[#FDE68A]">
                {isTransformed ? 'एक रिश्ता।' : 'एक डोर...'}
              </p>
              <Heart className="w-4 h-4 text-[#EF4444] fill-[#EF4444]" />
            </div>
            <p className="text-xs text-[#D6C2A9] font-serif mt-0.5">
              (स्क्रीन पर उँगली या कर्सर घुमाकर धागे को महसूस करें)
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="relative z-10 max-w-md mx-auto w-full pt-4 pb-2">
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          onClick={onNext}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#801B2B] hover:bg-[#992033] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center justify-center gap-3 transition cursor-pointer mx-auto"
        >
          <span>देखते हैं...</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A]" />
        </motion.button>
      </div>
    </div>
  );
};
