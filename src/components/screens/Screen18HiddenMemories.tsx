import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Clock, Camera, Coffee, Radio, Book, Flame, Flower2, Gift, Sparkles, CheckCircle2 } from 'lucide-react';

interface Screen18Props {
  onNext: () => void;
}

interface RoomObject {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  quote: string;
  story: string;
}

const ROOM_OBJECTS: RoomObject[] = [
  {
    id: 'clock',
    name: 'पुरानी घड़ी',
    icon: Clock,
    quote: 'समय चाहे कितना भी बीत जाए, यादें ताज़ा रहती हैं।',
    story: 'दीवार पर टिकी वो पेंडुलम वाली घड़ी, जिसके हर घंटे पर बजने वाले घंटे के साथ बचपन का एक-एक दिन बीतता था।',
  },
  {
    id: 'camera',
    name: 'विंटेज कैमरा',
    icon: Camera,
    quote: 'एक और तस्वीर के लिए जगह बाकी है।',
    story: 'ब्लैक एंड व्हाइट और सेपिया फिल्मों का वो दौर, जहाँ एक क्लिक के लिए सब सीधे खड़े होकर पूरे मन से मुस्कुराते थे।',
  },
  {
    id: 'tea',
    name: 'मिट्टी का कुल्हड़ / चाय',
    icon: Coffee,
    quote: 'कुछ बातें चाय के साथ ही अच्छी लगती हैं।',
    story: 'सर्दियों की सुबह या बारिश की शाम, साथ बैठकर अदरक वाली चाय की चुस्कियों के बीच पुरानी बातें छेड़ना।',
  },
  {
    id: 'radio',
    name: 'पुराना रेडियो',
    icon: Radio,
    quote: 'कभी-कभी एक पुराना गीत पूरा बचपन लौटा देता है।',
    story: 'विविध भारती की वो मधुर धुनें और बिनाका गीतमाला, जिसे पूरा परिवार एक साथ बैठकर सुनता था।',
  },
  {
    id: 'diary',
    name: 'पुरानी डायरी',
    icon: Book,
    quote: 'सबसे अच्छी यादें लिखी नहीं जातीं, वो दिल में रहती हैं।',
    story: 'सूखे फूलों की पंखुड़ियों और राखी के धागों से सजी वो निजी डायरी, जिसमें पूरी ज़िंदगी का सार है।',
  },
  {
    id: 'diya',
    name: 'पीतल का दीया',
    icon: Flame,
    quote: 'उजाला और दुआएँ हमेशा साथ रहेंगी।',
    story: 'राखी की आरती उतारते समय आँखों में छलक आई वो ममतामयी चमक, जो हर संकट से रक्षा करती है।',
  },
  {
    id: 'flower',
    name: 'गेंदे और गुलाब के फूल',
    icon: Flower2,
    quote: 'स्नेह की महक कभी कम नहीं होती।',
    story: 'पूजा की थाली में सजे ताज़ा फूलों की वो भीनी-भीनी खुशबू, जो आज भी त्योहारों की याद दिला देती है।',
  },
  {
    id: 'gift',
    name: 'उपहार का डिब्बा',
    icon: Gift,
    quote: 'दुआओं का सबसे बड़ा तोहफ़ा।',
    story: 'तोहफ़े में रखी वस्तु भले ही समय के साथ बदल जाए, पर देने वाले का प्यार हमेशा अनमोल रहता है।',
  },
];

export const Screen18HiddenMemories: React.FC<Screen18Props> = ({ onNext }) => {
  const [discoveredIds, setDiscoveredIds] = useState<Set<string>>(new Set(['tea', 'radio']));
  const [activeObj, setActiveObj] = useState<RoomObject | null>(ROOM_OBJECTS[2]);

  const handleSelect = (obj: RoomObject) => {
    setActiveObj(obj);
    setDiscoveredIds((prev) => new Set([...prev, obj.id]));
  };

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#180E09] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 space-y-1 pt-1 max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C89B3C] font-semibold bg-[#2A160E] px-3.5 py-1 rounded-full border border-[#C89B3C]/30">
          <Sparkles className="w-4 h-4 text-[#FDE68A]" />
          <span>छुपी हुई यादों का कक्ष • Memory Room</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#FFF5DE]">
          कक्ष की अनमोल वस्तुएँ
        </h2>
        <p className="text-xs text-[#D8C4AA] font-devanagari">
          कमरे में रखी वस्तुओं को छूकर पुरानी यादें खोजें ({discoveredIds.size}/8 खोजी गईं)
        </p>
      </div>

      {/* 8 Heritage Objects Grid */}
      <div className="relative z-10 max-w-4xl w-full my-auto px-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-4">
          {ROOM_OBJECTS.map((obj) => {
            const isSelected = activeObj?.id === obj.id;
            const isFound = discoveredIds.has(obj.id);
            const Icon = obj.icon;

            return (
              <button
                key={obj.id}
                onClick={() => handleSelect(obj)}
                className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center relative ${
                  isSelected
                    ? 'bg-[#801B2B] text-[#FFF9EF] border-[#C89B3C] shadow-lg ring-2 ring-[#C89B3C]/50'
                    : isFound
                    ? 'bg-[#FAF5EB] text-[#3D2418] border-[#C89B3C]'
                    : 'bg-[#28160E] text-[#D8C4AA] border-[#4D2B19] hover:bg-[#382015]'
                }`}
              >
                {isFound && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FDE68A] absolute top-1.5 right-1.5" />
                )}
                <div className={`p-2 rounded-full mb-1 ${isSelected ? 'bg-[#9E2337]' : isFound ? 'bg-[#EFE4D2]' : 'bg-[#180C07]'}`}>
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-[#FDE68A]' : isFound ? 'text-[#801B2B]' : 'text-[#C89B3C]'}`} />
                </div>
                <span className="text-xs font-bold font-devanagari line-clamp-1">
                  {obj.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Revealed Story Card */}
        {activeObj && (
          <motion.div
            key={activeObj.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FFFDF9] text-[#3D2418] p-4 sm:p-5 rounded-2xl border-2 border-[#C89B3C] shadow-xl max-w-xl mx-auto text-left"
          >
            <div className="flex items-center gap-2 text-[#801B2B] font-bold font-heading text-sm sm:text-base">
              <Sparkles className="w-4 h-4 text-[#C89B3C]" />
              <span>{activeObj.name} : "{activeObj.quote}"</span>
            </div>
            <p className="text-xs sm:text-sm font-devanagari text-[#593925] mt-1.5 leading-relaxed">
              {activeObj.story}
            </p>
          </motion.div>
        )}
      </div>

      {/* Bottom Button */}
      <div className="relative z-10 pt-3 pb-1">
        <button
          onClick={onNext}
          className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-3 transition cursor-pointer"
        >
          <span>दशकों की यात्रा (The Thread of Years) →</span>
        </button>
      </div>
    </div>
  );
};
