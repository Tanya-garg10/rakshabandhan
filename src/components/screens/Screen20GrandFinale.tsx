import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Share2, Heart, Sparkles, Music, Download, Check, Volume2 } from 'lucide-react';
import { TraditionalRakhiSvg, AuspiciousKalashSvg } from '../Ornaments';
import { PersonalMessageData } from '../../types';

interface Screen20Props {
  onRestart: () => void;
  letterData: PersonalMessageData;
}

export const Screen20GrandFinale: React.FC<Screen20Props> = ({ onRestart, letterData }) => {
  const [copied, setCopied] = useState(false);

  const brotherName = letterData.brotherName || 'भैया';
  const sisterName = letterData.sisterName || 'दीदी / बहन';

  const shareText = `🌸 *एक धागा, हज़ार यादें* 🌸\n\nरक्षाबंधन की हार्दिक शुभकामनाएँ!\n"${brotherName} और ${sisterName} के स्नेह के 60-70 वर्षों की अनमोल यादें।"\n\nइस खूबसूरत डिजिटल स्मृति एल्बम को यहाँ देखें:\n${window.location.href}`;

  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#160B07] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-[#C89B3C] shadow-[0_0_60px_rgba(200,155,60,0.35)]">
      {/* Divine Golden Rays & Floating Glitter Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(253,230,138,0.2)_0%,transparent_75%)] pointer-events-none" />

      {/* Header with Auspicious Kalash */}
      <div className="relative z-10 space-y-2 pt-1 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#FDE68A] font-semibold bg-[#32160C] px-4 py-1.5 rounded-full border border-[#C89B3C]">
          <Sparkles className="w-4 h-4 text-[#FDE68A]" />
          <span>पवित्र रक्षाबंधन महापर्व • Grand Raksha Bandhan Finale</span>
          <Sparkles className="w-4 h-4 text-[#FDE68A]" />
        </div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl font-heading text-[#FFF5DE] leading-tight"
        >
          "रक्षाबंधन की ढेर सारी शुभकामनाएँ ❤️"
        </motion.h1>

        <p className="text-base sm:text-xl font-heading text-[#FDE68A] font-bold">
          "एक धागा... हज़ार यादें... और ज़िंदगी भर का प्यार।"
        </p>
      </div>

      {/* Auspicious Centerpiece: Grand Traditional Rakhi & Thali */}
      <div className="relative z-10 my-4 flex flex-col items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#C89B3C]/30 rounded-full blur-3xl pointer-events-none" />
          <TraditionalRakhiSvg size={190} className="drop-shadow-[0_0_40px_rgba(253,230,138,0.7)]" />
        </motion.div>

        {/* Dedicated Brother & Sister Name Card */}
        <div className="mt-4 bg-[#28150D]/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#C89B3C] shadow-lg flex items-center gap-3">
          <Heart className="w-4 h-4 text-[#EF4444] fill-[#EF4444]" />
          <span className="text-sm sm:text-base font-bold font-serif text-[#FFF9EF]">
            {brotherName} & {sisterName}
          </span>
          <Heart className="w-4 h-4 text-[#EF4444] fill-[#EF4444]" />
        </div>
      </div>

      {/* Bottom Actions & Song Link */}
      <div className="relative z-10 w-full max-w-2xl space-y-3 pt-2">
        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={handleWhatsAppShare}
            className="px-6 py-3 bg-[#15803D] hover:bg-[#166534] text-[#FFFFFF] font-serif font-bold text-sm sm:text-base rounded-xl border border-[#4ADE80]/40 shadow-lg flex items-center justify-center gap-2 cursor-pointer transition"
          >
            <Share2 className="w-5 h-5" />
            <span>व्हाट्सएप पर शेयर करें (WhatsApp)</span>
          </button>

          <button
            onClick={onRestart}
            className="px-6 py-3 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-sm sm:text-base rounded-xl border border-[#C89B3C] shadow-lg flex items-center justify-center gap-2 cursor-pointer transition"
          >
            <RotateCcw className="w-5 h-5 text-[#FDE68A]" />
            <span>फिर से देखें (Replay Album)</span>
          </button>
        </div>

        {/* Music Song Credit & Links */}
        <div className="pt-3 border-t border-[#C89B3C]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#D8C4AA] font-serif">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="https://youtu.be/eB127b64pnE?si=XZA-HNSrF1lwcSVd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FDE68A] flex items-center gap-2 text-[#FDE68A] font-semibold bg-[#801B2B]/70 px-3 py-1.5 rounded-xl border border-[#C89B3C]/50 transition shadow-xs"
            >
              <Music className="w-4 h-4 text-[#EF4444]" />
              <span>गाना: धागों से बाँधा (YouTube पर सुनें)</span>
            </a>
          </div>

          <button
            onClick={handleCopyLink}
            className="hover:text-[#FDE68A] flex items-center gap-1.5 text-[#FDE68A] font-semibold bg-[#28150D] px-3 py-1.5 rounded-xl border border-[#C89B3C]/40 cursor-pointer transition"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4 text-[#C89B3C]" />}
            <span>{copied ? 'लिंक कॉपी हो गया!' : 'एल्बम लिंक कॉपी करें'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
