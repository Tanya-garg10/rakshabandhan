import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Heart, CheckCircle } from 'lucide-react';

interface Screen19Props {
  onNext: () => void;
}

const TIMELINE_YEARS = [
  { year: '1960s', title: 'शुरुआत', desc: 'आँगन की धूल, स्लेट-बस्ता और भोला बचपन।' },
  { year: '1970s', title: 'शरारतें', desc: 'साइकिल की सवारी और राखी पर एक रुपये का सिक्का।' },
  { year: '1980s', title: 'युवा दौर', desc: 'सपने, उच्च शिक्षा और करियर की नई उड़ान।' },
  { year: '1990s', title: 'गृहस्थी', desc: 'नए रिश्ते जुड़े, परिवार बढ़े और ज़िम्मेदारियाँ।' },
  { year: '2000s', title: 'परिपक्वता', desc: 'बच्चों की शादियाँ और त्योहारों पर मीठी भेंट।' },
  { year: '2010s', title: 'विरासत', desc: 'नाती-पोतों का शोर और पुरानी कहानियों की महफ़िल।' },
  { year: '2020s', title: 'आशीर्वाद', desc: 'डिजिटल कॉल और हर परिस्थिति में बना अपनापन।' },
  { year: 'आज', title: 'अटूट धागा', desc: '60-70 वर्षों का पवित्र और अमर स्नेह।' },
];

export const Screen19ThreadOfYears: React.FC<Screen19Props> = ({ onNext }) => {
  const [activeYear, setActiveYear] = useState(TIMELINE_YEARS[7]);

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#120A07] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.18)_0%,transparent_75%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 space-y-1 pt-1 max-w-xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-[#C89B3C] font-semibold bg-[#26140D] px-3.5 py-1 rounded-full border border-[#C89B3C]/30 inline-block">
          दशकों का अटूट धागा • The Thread of Years
        </span>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#FFF5DE]">
          "दशक बदलते रहे... लेकिन यह धागा कभी टूटा नहीं।"
        </h2>
      </div>

      {/* The Unbroken Golden Thread Running Through Decades */}
      <div className="relative z-10 max-w-4xl w-full my-auto px-2">
        {/* The Golden Line */}
        <div className="relative py-4">
          <div className="h-1 w-full bg-gradient-to-r from-[#801B2B] via-[#FDE68A] to-[#801B2B] rounded-full shadow-[0_0_15px_#FDE68A]" />
        </div>

        {/* 8 Decade Nodes */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-6">
          {TIMELINE_YEARS.map((item) => {
            const isSelected = activeYear.year === item.year;
            return (
              <button
                key={item.year}
                onClick={() => setActiveYear(item)}
                className={`p-2 sm:p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center relative ${
                  isSelected
                    ? 'bg-[#801B2B] text-[#FFF9EF] border-[#FDE68A] shadow-[0_0_15px_rgba(253,230,138,0.4)] scale-105'
                    : 'bg-[#22120A] text-[#D8C4AA] border-[#4A2917] hover:bg-[#321B0F]'
                }`}
              >
                <div className={`w-2.5 h-2.5 rounded-full mb-1 ${isSelected ? 'bg-[#FDE68A]' : 'bg-[#C89B3C]'}`} />
                <span className="text-xs font-bold font-serif">{item.year}</span>
                <span className="text-[10px] opacity-75 font-devanagari line-clamp-1">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Highlight Card for Active Decade */}
        <motion.div
          key={activeYear.year}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#24130B]/95 p-5 rounded-2xl border-2 border-[#C89B3C] shadow-2xl max-w-lg mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 text-[#FDE68A] font-bold font-heading text-lg">
            <Sparkles className="w-4 h-4 text-[#FDE68A]" />
            <span>{activeYear.year} : {activeYear.title}</span>
          </div>
          <p className="text-sm sm:text-base font-devanagari text-[#FAF5EB] mt-2 leading-relaxed">
            "{activeYear.desc}"
          </p>
        </motion.div>
      </div>

      {/* Bottom Button */}
      <div className="relative z-10 pt-3 pb-1">
        <button
          onClick={onNext}
          className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-3 transition cursor-pointer"
        >
          <span>अंतिम अभिनंदन (Grand Finale) →</span>
        </button>
      </div>
    </div>
  );
};
