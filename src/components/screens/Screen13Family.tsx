import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, Sparkles, Heart, Home } from 'lucide-react';
import { VintageCornerMount } from '../Ornaments';

interface Screen13Props {
  onNext: () => void;
}

const FAMILY_STORIES = [
  {
    id: 'f1',
    title: 'एक परिवार।',
    sub: 'The Pillars of Love',
    img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=700&q=80',
    desc: 'जहाँ हर सदस्य एक-दूसरे की ढाल है। दादा-दादी के संस्कार और माँ-बाबूजी का आशीर्वाद।',
  },
  {
    id: 'f2',
    title: 'कई कहानियाँ।',
    sub: 'Generations of Laughter',
    img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=700&q=80',
    desc: 'हर त्यौहार पर घर में होने वाली चहल-पहल, पकवानों की खुशबू और देर रात तक चलने वाली पुरानी बातें।',
  },
  {
    id: 'f3',
    title: 'हज़ार यादें।',
    sub: 'Timeless Bond',
    img: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=700&q=80',
    desc: 'जो समय के साथ धुंधली नहीं हुईं, बल्कि हर बीतते साल के साथ और भी अनमोल हो गईं।',
  },
];

export const Screen13Family: React.FC<Screen13Props> = ({ onNext }) => {
  const [selectedStory, setSelectedStory] = useState(FAMILY_STORIES[0]);

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#1D100A] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Warm Ambient Dining-Room Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(253,230,138,0.14)_0%,transparent_75%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 space-y-2 pt-2 max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C89B3C] font-semibold">
          <Home className="w-4 h-4 text-[#FDE68A]" />
          <span>परिवार का आँगन • Warmth of Family</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#FFF5DE]">
          "एक परिवार • कई कहानियाँ • हज़ार यादें"
        </h2>
        <p className="text-xs text-[#D8C4AA] font-devanagari">
          प्रत्येक फ्रेम पर क्लिक करके यादें देखें
        </p>
      </div>

      {/* 3 Interactive Photo Frames on Wall */}
      <div className="relative z-10 max-w-4xl w-full my-auto grid grid-cols-1 sm:grid-cols-3 gap-4 px-2">
        {FAMILY_STORIES.map((item) => {
          const isSelected = selectedStory.id === item.id;
          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedStory(item)}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer text-left relative ${
                isSelected
                  ? 'bg-[#FAF5EB] text-[#3D2418] border-[#C89B3C] shadow-2xl ring-2 ring-[#C89B3C]/50'
                  : 'bg-[#29170E] text-[#D8C4AA] border-[#593825] opacity-80 hover:opacity-100'
              }`}
            >
              <div className="relative aspect-4/3 rounded-lg overflow-hidden mb-3 border border-[#C89B3C]/40">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover sepia-[0.3]"
                />
                {isSelected && (
                  <div className="absolute top-2 right-2 bg-[#801B2B] text-[#FDE68A] p-1 rounded-full shadow-md">
                    <Heart className="w-3.5 h-3.5 fill-[#FDE68A]" />
                  </div>
                )}
              </div>

              <h3 className={`text-lg font-bold font-heading ${
                isSelected ? 'text-[#801B2B]' : 'text-[#FDE68A]'
              }`}>
                {item.title}
              </h3>
              <p className={`text-xs font-devanagari mt-1 leading-relaxed ${
                isSelected ? 'text-[#593925]' : 'text-[#C7B5A0]'
              }`}>
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Button */}
      <div className="relative z-10 pt-4 pb-1">
        <button
          onClick={onNext}
          className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-3 transition cursor-pointer"
        >
          <span>तब और आज (Then & Now) देखें →</span>
        </button>
      </div>
    </div>
  );
};
