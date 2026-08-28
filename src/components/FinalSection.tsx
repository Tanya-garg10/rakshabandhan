import React from 'react';
import { TraditionalRakhiSvg, FiligreeDivider } from './Ornaments';
import { Share2, ArrowUp, Printer, Heart } from 'lucide-react';

interface FinalSectionProps {
  fontSizeClass: string;
}

export const FinalSection: React.FC<FinalSectionProps> = ({ fontSizeClass }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    const text = `🌸 रक्षाबंधन की हार्दिक शुभकामनाएँ! 🌸\n\n"रिश्ता वही खूबसूरत है, जिसमें सालों बाद भी अपनापन वही रहे।"\n\nआपको और आपके पूरे परिवार को रक्षाबंधन की हार्दिक शुभकामनाएँ। ❤️\n\nहमारा डिजिटल परिवार एल्बम यहाँ देखें:\n${window.location.href}`;
    if (navigator.share) {
      navigator.share({
        title: 'रक्षाबंधन - रिश्तों की अनमोल यादें',
        text: text,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      alert('शुभकामना संदेश व लिंक कॉपी हो गया है!');
    }
  };

  return (
    <footer className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#2A1713] text-[#FAF5EB] overflow-hidden">
      
      {/* Background traditional mandala overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-[600px] h-[600px]">
          <circle cx="100" cy="100" r="90" stroke="#C89B3C" strokeWidth="2" fill="none" strokeDasharray="6 4" />
          <circle cx="100" cy="100" r="60" stroke="#C89B3C" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="100" r="30" stroke="#C89B3C" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Subtle Central Rakhi Glow */}
        <div className="mb-6 flex justify-center transform hover:scale-105 transition-transform duration-500">
          <TraditionalRakhiSvg size={140} />
        </div>

        {/* First Required Text Block */}
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-heading font-medium text-[#FDE68A] leading-snug sm:leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
          "रिश्ता वही खूबसूरत है,<br />
          जिसमें सालों बाद भी अपनापन वही रहे।"
        </blockquote>

        {/* Filigree Divider */}
        <div className="flex items-center justify-center my-8 gap-3">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent" />
          <span className="text-[#C89B3C] text-lg">🪷</span>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent via-[#C89B3C] to-transparent" />
        </div>

        {/* Second Required Text Block */}
        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#FFFDF9] tracking-tight leading-snug">
          आपको और आपके पूरे परिवार को<br />
          रक्षाबंधन की हार्दिक शुभकामनाएँ। ❤️
        </h3>

        {/* Senior-Friendly Big Action Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 no-print">
          
          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-base sm:text-lg rounded-xl shadow-lg border border-green-500 transition-all cursor-pointer"
          >
            <Share2 className="w-5 h-5" />
            <span>व्हाट्सएप पर शुभकामनाएँ भेजें</span>
          </button>

          <button
            onClick={() => window.print()}
            className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#3D251F] hover:bg-[#4E3028] text-[#FDFBF7] font-bold text-base sm:text-lg rounded-xl border border-[#C89B3C] transition-all cursor-pointer"
          >
            <Printer className="w-5 h-5 text-[#FDE68A]" />
            <span>एल्बम प्रिंट / सहेजें</span>
          </button>

          <button
            onClick={scrollToTop}
            className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] font-bold text-base sm:text-lg rounded-xl border border-[#C89B3C] transition-all cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 text-[#FDE68A]" />
            <span>एल्बम फिर से देखें</span>
          </button>

        </div>

        {/* Traditional Respectful Closing */}
        <div className="mt-14 pt-8 border-t border-[#4D3129] text-xs sm:text-sm text-[#BBA394] font-devanagari space-y-1">
          <p>
            जीवन भर के अटूट स्नेह और पारिवारिक संस्कारों को समर्पित • रक्षाबंधन डिजिटल परिवार एल्बम
          </p>
          <p className="text-[#8E7465]">
            "दीर्घायुरस्तु, आरोग्यमस्तु, सौख्यमस्तु"
          </p>
        </div>

      </div>
    </footer>
  );
};
