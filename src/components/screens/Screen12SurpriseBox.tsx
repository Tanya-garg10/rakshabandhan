import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Gift, Sparkles, Heart } from 'lucide-react';

interface Screen12Props {
  onNext: () => void;
}

export const Screen12SurpriseBox: React.FC<Screen12Props> = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#180E09] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Golden Particles & Floating Petals */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.15),transparent_70%)] pointer-events-none" />

      {isOpen && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`box-petal-${i}`}
              initial={{
                y: 100,
                x: (i * 35) % 300 - 150,
                opacity: 0,
                scale: 0.5,
                rotate: 0,
              }}
              animate={{
                y: -350,
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.8],
                rotate: 360,
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: (i % 6) * 0.3,
                ease: 'easeOut',
              }}
              className="absolute bottom-10 left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EF4444] shadow-sm"
              style={{
                borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 space-y-2 pt-2 max-w-xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-[#C89B3C] font-semibold bg-[#2C180F] px-3 py-1 rounded-full border border-[#C89B3C]/30 inline-block">
          तोहफ़ा • The Surprise Box
        </span>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#FFF5DE]">
          "इसमें एक छोटी सी बात छुपी है..."
        </h2>
        <p className="text-xs text-[#D8C4AA] font-devanagari">
          उपहार के डिब्बे पर क्लिक करें
        </p>
      </div>

      {/* The Traditional Indian Handcrafted Gift Box */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center max-w-md w-full">
        {!isOpen ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer flex flex-col items-center space-y-4"
          >
            {/* Box Closed SVG */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 bg-gradient-to-b from-[#801B2B] to-[#59101C] rounded-2xl border-4 border-[#C89B3C] shadow-[0_0_40px_rgba(200,155,60,0.3)] flex items-center justify-center">
              {/* Golden Silk Ribbon Ribbon */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-[#EAB308] via-[#FDE68A] to-[#EAB308] shadow-md" />
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-b from-[#EAB308] via-[#FDE68A] to-[#EAB308] shadow-md" />
              
              {/* Ribbon Bow on top */}
              <div className="absolute -top-4 w-12 h-12 rounded-full bg-[#FDE68A] border-2 border-[#B45309] shadow-lg flex items-center justify-center text-[#801B2B] font-bold">
                🎀
              </div>

              <div className="relative z-10 bg-[#1E0F08]/80 p-3 rounded-full border border-[#C89B3C]">
                <Gift className="w-8 h-8 text-[#FDE68A] animate-bounce" />
              </div>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-2.5 bg-[#FDE68A] hover:bg-[#FCD34D] text-[#801B2B] font-bold font-serif text-sm rounded-xl border border-[#C89B3C] shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#801B2B]" />
              <span>उपहार खोलें (Open Gift)</span>
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="bg-[#FFFDF9] text-[#3D2418] p-6 sm:p-8 rounded-3xl border-3 border-[#C89B3C] shadow-[0_0_50px_rgba(200,155,60,0.4)] relative text-center"
          >
            <div className="w-12 h-12 rounded-full bg-[#801B2B] text-[#FDE68A] flex items-center justify-center mx-auto mb-3 shadow-md">
              <Heart className="w-6 h-6 fill-[#FDE68A]" />
            </div>

            <p className="text-base sm:text-xl font-heading text-[#801B2B] font-bold leading-relaxed">
              "कुछ रिश्ते किस्मत से मिलते हैं।"
            </p>

            <p className="text-sm sm:text-base font-devanagari text-[#593925] mt-2 font-medium">
              भाई-बहन का रिश्ता उन्हीं सबसे खूबसूरत और अनमोल तोहफ़ों में से एक है।
            </p>

            <div className="mt-4 pt-3 border-t border-[#E8DCC8] text-xs font-handwritten text-[#7A4B29] font-bold">
              ✦ जीवन भर का साथ और हर पल का विश्वास ✦
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom Button */}
      <div className="relative z-10 pt-4 pb-1">
        <button
          onClick={onNext}
          className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-3 transition cursor-pointer"
        >
          <span>परिवार के आँगन में चलें →</span>
        </button>
      </div>
    </div>
  );
};
