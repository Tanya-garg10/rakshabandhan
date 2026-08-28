import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Feather, Heart, Edit3, Check } from 'lucide-react';
import { PersonalMessageData } from '../../types';

interface Screen17Props {
  onNext: () => void;
  letterData: PersonalMessageData;
  onUpdateLetter?: (data: Partial<PersonalMessageData>) => void;
}

export const Screen17PersonalLetter: React.FC<Screen17Props> = ({
  onNext,
  letterData,
  onUpdateLetter,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [recipient, setRecipient] = useState(letterData.brotherName || 'आदरणीय भैया');
  const [sender, setSender] = useState(letterData.sisterName || 'आपकी प्यारी बहन');

  const handleSaveNames = () => {
    setIsEditing(false);
    if (onUpdateLetter) {
      onUpdateLetter({ brotherName: recipient, sisterName: sender });
    }
  };

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-6 sm:py-8 bg-[#1F120B] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Warm Ambient Lamp Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(253,230,138,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 space-y-1 pt-1 max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C89B3C] font-semibold">
          <Feather className="w-4 h-4 text-[#FDE68A]" />
          <span>आत्मीय पत्र • A Personal Letter</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#FFF5DE]">
          "आपके नाम..."
        </h2>
      </div>

      {/* Aged Parchment Handwritten Letter */}
      <div className="relative z-10 max-w-2xl w-full my-auto px-2">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#FAF5EB] text-[#3D2418] p-6 sm:p-8 rounded-2xl border-4 border-[#D8C4A7] shadow-2xl relative text-left"
        >
          {/* Letter Seal / Stamp */}
          <div className="absolute top-4 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#801B2B] border-2 border-[#C89B3C] shadow-md flex items-center justify-center text-[#FDE68A] text-xs font-heading font-bold">
            <Heart className="w-5 h-5 fill-[#FDE68A]" />
          </div>

          {/* Salutation */}
          <div className="mb-4 flex items-center justify-between pr-14">
            {isEditing ? (
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="text-base sm:text-lg font-heading text-[#801B2B] font-bold bg-[#EFE4D2] px-2 py-1 rounded border border-[#C89B3C] w-48"
                placeholder="उदा. आदरणीय भैया"
              />
            ) : (
              <h3 className="text-lg sm:text-xl font-heading text-[#801B2B] font-bold">
                {recipient},
              </h3>
            )}

            <button
              onClick={() => (isEditing ? handleSaveNames() : setIsEditing(true))}
              className="text-xs text-[#801B2B] hover:text-[#A02336] flex items-center gap-1 font-serif font-bold bg-[#EFE4D2] px-2 py-1 rounded cursor-pointer border border-[#D5C2A5]"
            >
              {isEditing ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-700" /> सहेजें
                </>
              ) : (
                <>
                  <Edit3 className="w-3.5 h-3.5" /> नाम बदलें
                </>
              )}
            </button>
          </div>

          {/* Letter Body */}
          <div className="space-y-3 font-handwritten text-[#4A3020] text-sm sm:text-base leading-relaxed font-semibold">
            <p>
              इतने वर्षों की इस खूबसूरत यात्रा में कितनी ही यादें जुड़ती गईं।
            </p>
            <p>
              कुछ पल याद हैं, कुछ तस्वीरों में हैं, और कुछ बस दिल में।
            </p>
            <p className="text-[#801B2B] font-bold text-base sm:text-lg">
              लेकिन हर साल राखी हमें एक बात फिर याद दिलाती है—
            </p>
            <p className="italic text-base sm:text-lg text-[#6B1423] font-bold bg-[#F2E5D0]/60 p-2 rounded-lg border-l-4 border-[#801B2B]">
              "कुछ रिश्तों की कोई उम्र नहीं होती। वो बस हमेशा अपने रहते हैं।"
            </p>
          </div>

          {/* Signature Area */}
          <div className="mt-6 pt-4 border-t border-[#E0D0BA] flex flex-col items-end">
            <span className="text-xs text-[#7A5A43] font-serif">स्नेह और सम्मान सहित,</span>
            {isEditing ? (
              <input
                type="text"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                className="mt-1 text-sm font-handwritten text-[#801B2B] font-bold bg-[#EFE4D2] px-2 py-1 rounded border border-[#C89B3C] w-48 text-right"
                placeholder="उदा. आपकी बहन"
              />
            ) : (
              <p className="text-base sm:text-lg font-handwritten text-[#801B2B] font-bold mt-0.5">
                {sender}
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom Button */}
      <div className="relative z-10 pt-3 pb-1">
        <button
          onClick={onNext}
          className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-3 transition cursor-pointer"
        >
          <span>छुपी हुई यादें (Hidden Memories) खोजें →</span>
        </button>
      </div>
    </div>
  );
};
