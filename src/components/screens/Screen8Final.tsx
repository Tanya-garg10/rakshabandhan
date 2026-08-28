import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Share2, Check, Printer, Heart, Sparkles, Music, ExternalLink } from 'lucide-react';
import { TraditionalRakhiSvg, FiligreeDivider } from '../Ornaments';
import { YOUTUBE_SONG_URL } from '../MusicPlayer';

interface Screen8Props {
  onRestart: () => void;
  onPrev: () => void;
  fontSizeClass: string;
}

export const Screen8Final: React.FC<Screen8Props> = ({
  onRestart,
  onPrev,
  fontSizeClass,
}) => {
  const [copied, setCopied] = useState(false);

  const greetingText = `🌸 रक्षाबंधन की हार्दिक शुभकामनाएँ 🌸\n\n"रिश्ते उम्र से नहीं, यादों और अपनापन से बड़े होते हैं।"\n\nज़िंदगी के हर पड़ाव पर हमारा स्नेह और आशीर्वाद यूँ ही बना रहे।\nहमेशा साथ, हमेशा अपना। ❤️`;

  const handleCopy = () => {
    navigator.clipboard.writeText(greetingText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(greetingText + '\n\n' + window.location.href)}`;
    window.open(url, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between py-4 sm:py-6 px-4 sm:px-8 text-center max-w-4xl mx-auto overflow-y-auto">
      {/* Top Auspicious Note */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs sm:text-sm uppercase tracking-widest text-[#8C6D53] font-serif"
      >
        स्मृति पन्ना • ०८ (अंतिम पृष्ठ)
      </motion.div>

      {/* Main Center Reflection */}
      <div className="my-auto py-2 w-full max-w-2xl space-y-6">
        {/* Subtle Central Rakhi Emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="p-4 rounded-full bg-[#FAF5EB] border-2 border-[#C89B3C] shadow-lg gold-subtle-glow">
            <TraditionalRakhiSvg size={130} className="sm:scale-110" />
          </div>
        </motion.div>

        {/* Closing Thought */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#671421] leading-snug">
            "रिश्ते उम्र से नहीं,<br />
            यादों और अपनापन से बड़े होते हैं।"
          </h2>

          <FiligreeDivider className="my-3" />

          <div className="space-y-2">
            <p className="text-xl sm:text-2xl font-serif font-bold text-[#801B2B] tracking-wide">
              Happy Raksha Bandhan
            </p>
            <p className="text-lg sm:text-xl font-serif text-[#5A3825] flex items-center justify-center gap-2">
              <span>हमेशा साथ, हमेशा अपना।</span>
              <Heart className="w-5 h-5 text-[#C82A3E] fill-[#C82A3E]" />
            </p>
          </div>
        </motion.div>

        {/* Share & Keepsake Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <button
            onClick={handleWhatsApp}
            className="px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-serif font-semibold text-sm sm:text-base rounded-xl shadow-md flex items-center gap-2 transition cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>व्हाट्सएप पर भेजें</span>
          </button>

          <button
            onClick={handleCopy}
            className="px-5 py-2.5 bg-[#FAF5EB] hover:bg-[#EFE4D2] text-[#671421] font-serif font-semibold text-sm sm:text-base rounded-xl border border-[#D8C4A7] shadow-sm flex items-center gap-2 transition cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Sparkles className="w-4 h-4 text-[#C89B3C]" />}
            <span>{copied ? 'संदेश कॉपी हो गया!' : 'संदेश कॉपी करें'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-[#FAF5EB] hover:bg-[#EFE4D2] text-[#671421] font-serif font-semibold text-sm sm:text-base rounded-xl border border-[#D8C4A7] shadow-sm flex items-center gap-2 transition cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#8C6D53]" />
            <span>एल्बम प्रिंट करें</span>
          </button>

          <a
            href={YOUTUBE_SONG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#F2E5D0] hover:bg-[#E8D6BC] text-[#801B2B] font-serif font-semibold text-sm sm:text-base rounded-xl border border-[#C89B3C] shadow-sm flex items-center gap-2 transition"
          >
            <Music className="w-4 h-4 text-[#DC2626]" />
            <span>गीत: धागों से बाँधा (YouTube)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
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
          onClick={onRestart}
          className="py-3 sm:py-4 px-7 sm:px-8 bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] font-bold text-lg sm:text-xl rounded-xl shadow-lg border border-[#C89B3C] flex items-center gap-2 transition cursor-pointer"
        >
          <RotateCcw className="w-5 h-5 text-[#FDE68A]" />
          <span>फिर से शुरू करें</span>
        </button>
      </div>
    </div>
  );
};
