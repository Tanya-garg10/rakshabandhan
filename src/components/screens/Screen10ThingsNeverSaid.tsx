import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Feather, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

interface Screen10Props {
  onNext: () => void;
}

const UNSAID_CARDS = [
  {
    id: 'c1',
    hi: 'ख्याल रखना।',
    en: 'Take care of yourself',
    desc: 'चाहे कितनी भी उम्र हो जाए, जब भी हम मिलते हैं या बात करते हैं, मन में यही सबसे पहली दुआ होती है।',
  },
  {
    id: 'c2',
    hi: 'अपना ध्यान रखना।',
    en: 'Stay blessed & well',
    desc: 'समय पर दवा लेना, सेहत का ख्याल रखना—ये बातें भले ही शब्दों में कम बोली जाएँ, पर दिल में हर पल रहती हैं।',
  },
  {
    id: 'c3',
    hi: 'जब भी ज़रूरत हो, याद करना।',
    en: 'I am always one call away',
    desc: 'चाहे रात के बारह बजे हों या जीवन की कोई भी मुश्किल, तुम्हारा भाई/बहन हमेशा तुम्हारे साथ खड़ा है।',
  },
  {
    id: 'c4',
    hi: 'तुम हमेशा अपने हो।',
    en: 'You are forever my family',
    desc: 'दुनिया चाहे जितनी बदल जाए, तुम्हारे लिए हमारे घर और दिल के दरवाज़े हमेशा खुले हैं।',
  },
];

export const Screen10ThingsNeverSaid: React.FC<Screen10Props> = ({ onNext }) => {
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set(['c1']));

  const toggleCard = (id: string) => {
    setRevealedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#1D100A] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Warm Antique Desk Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.15),transparent_75%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 space-y-2 pt-2 max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C89B3C] font-semibold">
          <Feather className="w-4 h-4 text-[#FDE68A]" />
          <span>दिल की अनकही बातें • Words From the Heart</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#FFF5DE]">
          "कुछ बातें शायद कभी कही नहीं गईं..."
        </h2>
        <p className="text-xs sm:text-sm text-[#D8C4AA] font-devanagari">
          प्रत्येक पत्रक को खोलकर पढ़ें ({revealedIds.size}/4 पढ़ी गईं)
        </p>
      </div>

      {/* 4 Vintage Parchment Emotion Cards */}
      <div className="relative z-10 max-w-3xl w-full my-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 px-2">
        {UNSAID_CARDS.map((card, idx) => {
          const isRevealed = revealedIds.has(card.id);
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              onClick={() => toggleCard(card.id)}
              className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer text-left relative ${
                isRevealed
                  ? 'bg-[#FAF5EB] text-[#3D2418] border-[#C89B3C] shadow-xl scale-101'
                  : 'bg-[#2B1810] text-[#E0D0BE] border-[#5A3825] hover:bg-[#382015]'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isRevealed ? 'bg-[#801B2B] text-[#FFF9EF]' : 'bg-[#180C07] text-[#C89B3C]'
                  }`}>
                    संदेश 0{idx + 1}
                  </span>
                  <h3 className={`text-lg sm:text-xl font-bold font-heading mt-2 ${
                    isRevealed ? 'text-[#801B2B]' : 'text-[#FDE68A]'
                  }`}>
                    "{card.hi}"
                  </h3>
                </div>

                <div className={`p-2 rounded-full ${isRevealed ? 'bg-[#801B2B] text-[#FDE68A]' : 'bg-[#180C07] text-[#C89B3C]'}`}>
                  <Heart className="w-4 h-4 fill-current" />
                </div>
              </div>

              <p className={`text-xs sm:text-sm font-devanagari mt-2.5 leading-relaxed ${
                isRevealed ? 'text-[#4D3222]' : 'text-[#C7B5A0] line-clamp-2'
              }`}>
                {card.desc}
              </p>

              <div className="mt-3 pt-2 border-t border-current/10 flex items-center justify-between text-[11px] font-serif opacity-80">
                <span>{card.en}</span>
                <span className="text-[#C89B3C] font-bold">
                  {isRevealed ? '✓ खुला हुआ' : 'क्लिक करके पढ़ें'}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Button */}
      <div className="relative z-10 pt-2 pb-1">
        <button
          onClick={onNext}
          className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-3 transition cursor-pointer"
        >
          <span>पवित्र राखी के दर्शन करें →</span>
        </button>
      </div>
    </div>
  );
};
