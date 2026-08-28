import React, { useState } from 'react';
import { PersonalMessageData } from '../types';
import { FiligreeDivider } from './Ornaments';
import { Edit3, Check, Copy, Heart, Feather } from 'lucide-react';

interface LetterSectionProps {
  initialLetter: PersonalMessageData;
  fontSizeClass: string;
}

export const LetterSection: React.FC<LetterSectionProps> = ({ initialLetter, fontSizeClass }) => {
  const [letterData, setLetterData] = useState<PersonalMessageData>(initialLetter);
  const [isEditing, setIsEditing] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);

  const handleCopy = () => {
    const fullText = `${letterData.brotherName},\n\n${letterData.letterBody}\n\n${letterData.closing}\n— ${letterData.sisterName}`;
    navigator.clipboard.writeText(fullText);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 3000);
  };

  return (
    <section id="message" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF6EE] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EFE1CC] text-[#7A4020] text-sm font-semibold mb-3 border border-[#D5BF9E]">
            <Feather className="w-4 h-4 text-[#C89B3C]" />
            <span>हृदय से निकली आत्मीय चिट्ठी</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#671421] tracking-tight">
            दिल से कुछ बातें...
          </h2>

          <FiligreeDivider className="my-4" />

          <p className={`text-[#5B4333] font-medium leading-relaxed ${fontSizeClass === 'text-xl' ? 'text-2xl' : fontSizeClass === 'text-lg' ? 'text-xl' : 'text-lg'}`}>
            एक संस्मरण पत्र, जो उन अनकहे एहसासों को बयां करता है जो बरसों से दिल में बसे हैं।
          </p>
        </div>

        {/* Handwritten Letter Styled Card */}
        <div className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-12 border-2 border-[#D8C5A8] shadow-xl overflow-hidden bg-vintage-paper">
          
          {/* Top Stamp & Vintage Postmark Decoration */}
          <div className="flex items-start justify-between border-b border-[#DFCBB0] pb-6 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8C6D58] font-bold block mb-1">
                रक्षाबंधन पावन संदेश • वर्ष 2026
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-heading text-[#801B2B]">
                {isEditing ? (
                  <input
                    type="text"
                    value={letterData.brotherName}
                    onChange={(e) => setLetterData({ ...letterData, brotherName: e.target.value })}
                    className="border-b-2 border-[#801B2B] bg-transparent text-[#801B2B] px-1 py-0.5 focus:outline-none"
                    placeholder="उदा. आदरणीय भैया"
                  />
                ) : (
                  <span>{letterData.brotherName} के नाम</span>
                )}
              </div>
            </div>

            {/* Vintage Postal Stamp Seal */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#F6EDE0] border-2 border-dashed border-[#801B2B] flex flex-col items-center justify-center text-[#801B2B] shadow-inner p-1">
              <span className="text-xs font-bold uppercase">स्नेह पत्र</span>
              <span className="text-lg">🪷</span>
              <span className="text-[10px] font-serif">प्रेम मुद्रा</span>
            </div>
          </div>

          {/* Letter Body - Handwritten Style */}
          <div className="space-y-6">
            {isEditing ? (
              <textarea
                rows={8}
                value={letterData.letterBody}
                onChange={(e) => setLetterData({ ...letterData, letterBody: e.target.value })}
                className="w-full p-4 bg-[#FAF5EB] border-2 border-[#C89B3C] rounded-xl text-lg sm:text-xl font-handwritten text-[#3D281C] leading-relaxed focus:outline-none resize-y"
              />
            ) : (
              <div className="font-handwritten text-xl sm:text-2xl text-[#3A261B] leading-loose whitespace-pre-line tracking-wide">
                {letterData.letterBody}
              </div>
            )}

            {/* Required Direct Text Quote Highlight */}
            <div className="p-5 bg-[#F6EDE0] rounded-2xl border-l-4 border-[#C89B3C] my-6">
              <p className="text-lg sm:text-xl font-bold font-devanagari text-[#671421] leading-relaxed">
                "ज़िंदगी की राह में कितने ही साल बीत गए, कितने ही रिश्ते जुड़े और कितने ही पल याद बन गए। लेकिन भाई-बहन का रिश्ता आज भी उतना ही अपना है। इस राखी पर बस यही दुआ है कि हमारा साथ, हमारी यादें और हमारा अपनापन हमेशा बना रहे।"
              </p>
            </div>

            {/* Letter Signoff */}
            <div className="pt-6 border-t border-[#DFCBB0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#8C6D58] font-bold block mb-1">
                  शुभकामना प्रेषक:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={letterData.sisterName}
                    onChange={(e) => setLetterData({ ...letterData, sisterName: e.target.value })}
                    className="border-b-2 border-[#801B2B] bg-transparent text-lg font-bold text-[#801B2B] px-1 py-0.5 focus:outline-none"
                    placeholder="उदा. आपकी प्यारी बहन"
                  />
                ) : (
                  <span className="text-xl sm:text-2xl font-bold font-handwritten text-[#801B2B]">
                    — {letterData.sisterName}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#C89B3C] text-[#671421] bg-[#F9F3E8] hover:bg-[#F3E7D3] font-bold text-sm transition"
                >
                  {isEditing ? <Check className="w-4 h-4 text-green-700" /> : <Edit3 className="w-4 h-4 text-[#801B2B]" />}
                  <span>{isEditing ? 'सहेजें (Done)' : 'संदेश बदलें'}</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#801B2B] text-[#FFF7ED] hover:bg-[#671421] font-bold text-sm transition shadow-sm"
                >
                  <Copy className="w-4 h-4 text-[#FDE68A]" />
                  <span>पत्र कॉपी करें</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Copy Notification Toast */}
        {copiedToast && (
          <div className="mt-4 p-3 bg-[#EAF5EA] text-[#1B5E20] border border-[#A5D6A7] rounded-xl text-center text-sm font-semibold transition-all">
            ✓ संदेश सफलतापूर्वक कॉपी हो गया है! अब आप इसे व्हाट्सएप या संदेश में भेज सकते हैं।
          </div>
        )}

      </div>
    </section>
  );
};
