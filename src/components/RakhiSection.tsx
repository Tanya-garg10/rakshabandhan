import React, { useState } from 'react';
import { TraditionalRakhiSvg, FiligreeDivider } from './Ornaments';
import { Heart, Sparkles, Check } from 'lucide-react';

interface RakhiSectionProps {
  fontSizeClass: string;
}

export const RakhiSection: React.FC<RakhiSectionProps> = ({ fontSizeClass }) => {
  const [blessingActive, setBlessingActive] = useState(false);

  const handleTieRakhi = () => {
    setBlessingActive(true);
    setTimeout(() => {
      setBlessingActive(false);
    }, 4500);
  };

  return (
    <section id="rakhi" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EDE0] relative overflow-hidden border-y border-[#E2D5C0]">
      
      {/* Auspicious background radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-r from-[#EEDBBF]/60 via-[#F3E3CD]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Sacred Kalash / Tilak Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8D6BD] text-[#7A4020] text-sm font-semibold mb-6 border border-[#D0BD9F]">
          <span className="text-[#801B2B] text-base">✦</span>
          <span>पवित्र रक्षा सूत्र एवं स्नेह बंधन</span>
          <span className="text-[#801B2B] text-base">✦</span>
        </div>

        {/* Central Traditional Rakhi Illustration */}
        <div className="my-6 flex justify-center transform hover:scale-105 transition-transform duration-700">
          <div className="relative p-6 sm:p-8 rounded-full bg-aged-parchment border-4 border-[#C89B3C] shadow-xl gold-subtle-glow">
            <TraditionalRakhiSvg size={200} className="sm:scale-125" />
            
            {/* Auspicious Roli Akshat Indicator */}
            {blessingActive && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-pulse">
                <div className="w-full h-full rounded-full border-4 border-[#801B2B] opacity-75" />
              </div>
            )}
          </div>
        </div>

        {/* Primary Required Heading */}
        <h2 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#671421] tracking-tight">
          राखी सिर्फ़ एक धागा नहीं...
        </h2>

        {/* Filigree Divider */}
        <FiligreeDivider className="my-5" />

        {/* Primary Required Text */}
        <p className={`max-w-2xl mx-auto text-[#473326] font-medium font-devanagari leading-relaxed ${fontSizeClass === 'text-xl' ? 'text-2xl' : fontSizeClass === 'text-lg' ? 'text-xl' : 'text-lg sm:text-xl'}`}>
          "यह उन अनगिनत यादों, दुआओं और अपनापन का प्रतीक है, जो वर्षों के साथ और मजबूत होते गए।"
        </p>

        {/* Simple & Elegant Traditional Blessing Action for Seniors */}
        <div className="mt-10 max-w-md mx-auto">
          <button
            onClick={handleTieRakhi}
            className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all shadow-md flex items-center justify-center gap-3 border ${
              blessingActive
                ? 'bg-[#2E7D32] text-white border-green-700'
                : 'bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] border-[#C89B3C]'
            }`}
          >
            {blessingActive ? (
              <>
                <Check className="w-6 h-6 text-[#FDE68A]" />
                <span>शुभकामना व आशीर्वाद प्रेषित! (हर पल मंगलमय हो)</span>
              </>
            ) : (
              <>
                <Heart className="w-5 h-5 text-[#FDE68A]" />
                <span>तिलक लगाएं व रक्षा सूत्र बांधें</span>
                <Sparkles className="w-5 h-5 text-[#FDE68A]" />
              </>
            )}
          </button>

          {blessingActive && (
            <div className="mt-4 p-3 bg-[#EAF5EA] text-[#1B5E20] border border-[#A5D6A7] rounded-xl text-base font-semibold transition-all">
              🌸 "सदा सुखी रहो, स्वस्थ रहो और लंबी उम्र पाओ।" — मन से दिया गया हार्दिक आशीर्वाद
            </div>
          )}
        </div>

        {/* Respectful Footnote */}
        <p className="mt-6 text-xs sm:text-sm text-[#87654E] italic">
          सदियों पुरानी परंपरा, जो आज साठ-सत्तर के इस आत्मीय पड़ाव पर और भी श्रद्धापूर्ण हो जाती है।
        </p>

      </div>
    </section>
  );
};
