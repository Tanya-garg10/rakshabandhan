import React from 'react';
import { TraditionalRakhiSvg, FiligreeDivider } from './Ornaments';
import { ChevronDown, Heart, Sparkles, BookOpen } from 'lucide-react';

interface HeroSectionProps {
  fontSizeClass: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ fontSizeClass }) => {
  const scrollToMemories = () => {
    const el = document.getElementById('memories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-vintage-paper">
      
      {/* Subtle traditional backdrop motifs */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 opacity-10 pointer-events-none -translate-x-12 -translate-y-12">
        <svg viewBox="0 0 100 100" fill="#801B2B">
          <circle cx="50" cy="50" r="45" stroke="#C89B3C" strokeWidth="2" fill="none" strokeDasharray="4 2" />
          <path d="M50 10 Q60 40 90 50 Q60 60 50 90 Q40 60 10 50 Q40 40 50 10 Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 opacity-10 pointer-events-none translate-x-12 translate-y-12">
        <svg viewBox="0 0 100 100" fill="#801B2B">
          <circle cx="50" cy="50" r="45" stroke="#C89B3C" strokeWidth="2" fill="none" strokeDasharray="4 2" />
          <path d="M50 10 Q60 40 90 50 Q60 60 50 90 Q40 60 10 50 Q40 40 50 10 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Sacred Sanskrit Shloka Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E7D3] border border-[#D9C4A6] text-[#7A4020] text-sm sm:text-base font-serif mb-6 shadow-xs">
          <Sparkles className="w-4 h-4 text-[#C89B3C]" />
          <span>पवित्र रक्षाबंधन पर्व • सावन पूर्णिमा</span>
          <Sparkles className="w-4 h-4 text-[#C89B3C]" />
        </div>

        {/* Subtle Traditional Rakhi Illustration */}
        <div className="my-2 flex justify-center transform hover:scale-105 transition-transform duration-500">
          <TraditionalRakhiSvg size={160} className="sm:scale-110" />
        </div>

        {/* Primary Required Heading */}
        <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#671421] leading-tight sm:leading-tight tracking-tight drop-shadow-xs">
          रिश्तों की डोर, उम्र के हर पड़ाव पर ❤️
        </h1>

        {/* Filigree Divider */}
        <FiligreeDivider className="my-5" />

        {/* Primary Required Subheading */}
        <p className={`max-w-2xl mx-auto text-[#4E392B] font-medium font-devanagari leading-relaxed ${fontSizeClass === 'text-xl' ? 'text-2xl' : fontSizeClass === 'text-lg' ? 'text-xl' : 'text-lg sm:text-xl'}`}>
          "कुछ रिश्ते समय के साथ पुराने नहीं होते, बल्कि और भी गहरे हो जाते हैं।"
        </p>

        {/* Nostalgic Greeting Card / Album Intro Callout */}
        <div className="mt-8 mx-auto max-w-xl p-5 sm:p-6 bg-aged-parchment rounded-2xl border border-[#DFCEB3] shadow-md relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[#801B2B] text-[#FFF7ED] text-xs sm:text-sm font-semibold rounded-full border border-[#C89B3C] shadow-xs">
            जीवन भर का अनमोल स्नेह
          </div>
          <p className="text-[#5A4031] text-base sm:text-lg italic font-devanagari pt-1">
            बचपन के आंगन से लेकर आज साठ-सत्तर के इस स्वर्णिम पड़ाव तक... यह डिजिटल एल्बम भाई-बहन के उस प्रेम को समर्पित है जो हर साल और अधिक पावन होता गया।
          </p>
        </div>

        {/* Primary Required Action Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToMemories}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] font-bold text-lg sm:text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C89B3C] transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#801B2B]/40 active:translate-y-0 cursor-pointer"
          >
            <BookOpen className="w-5 h-5 text-[#FDE68A]" />
            <span>यादों का सफ़र शुरू करें</span>
            <ChevronDown className="w-5 h-5 text-[#FDE68A]" />
          </button>
        </div>

        {/* Subtle Shloka Footer */}
        <div className="mt-8 text-xs sm:text-sm text-[#8C6D58] font-serif">
          येन बद्धो बली राजा दानवेन्द्रो महाबलः। तेन त्वामपि बध्नामि रक्षे मा चल मा चल॥
        </div>

      </div>
    </section>
  );
};
