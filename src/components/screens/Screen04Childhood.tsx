import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Backpack, Bike, Home, Sparkles, Cookie, Puzzle, Heart, CheckCircle2 } from 'lucide-react';

interface Screen04Props {
  onNext: () => void;
}

interface ChildhoodObject {
  id: string;
  name: string;
  subname: string;
  icon: React.ComponentType<{ className?: string }>;
  memoryTitle: string;
  memoryStory: string;
  quote: string;
}

const OBJECTS: ChildhoodObject[] = [
  {
    id: 'bag',
    name: 'स्कूल का बस्ता',
    subname: 'School Bag',
    icon: Backpack,
    memoryTitle: 'वो दिन...',
    memoryStory: 'कंधे पर भारी बस्ता, हाथ में स्लेट और एक-दूसरे का हाथ पकड़कर स्कूल जाने की वो सुबह। रास्ते में इमली तोड़ना और बारिश में भीगना।',
    quote: 'जब गृहकार्य भी एक-दूसरे की कॉपी देखकर ही पूरा होता था!',
  },
  {
    id: 'toys',
    name: 'लकड़ी के खिलौने व लट्टू',
    subname: 'Toys & Games',
    icon: Puzzle,
    memoryTitle: 'वो शरारत...',
    memoryStory: 'आँगन में गिट्टे, लट्टू और छुपन-छुपाई। जब खेल के नियम अपनी मर्जी से बनते थे और हारने वाला फिर से पहली बारी माँगता था।',
    quote: 'खिलौना टूटने पर पहले रोना, फिर दोनों मिलकर चुपके से छुपाना।',
  },
  {
    id: 'cycle',
    name: 'पुरानी साइकिल',
    subname: 'Vintage Bicycle',
    icon: Bike,
    memoryTitle: 'वो लड़ाई...',
    memoryStory: 'साइकिल की डंडी पर आगे कौन बैठेगा, इस बात पर आधे घंटे की तकरार। पर जैसे ही हवा चलती, दोनों के ठहाके पूरे मोहल्ले में गूँजते थे।',
    quote: 'घुटने छिल जाने पर माँ से छुपाना और एक-दूसरे पर मरहम लगाना।',
  },
  {
    id: 'home',
    name: 'पैतृक घर का आँगन',
    subname: 'Family Home',
    icon: Home,
    memoryTitle: 'और पाँच मिनट बाद फिर दोस्ती।',
    memoryStory: 'बड़ा सा आँगन, नीम का पेड़, और गर्मियों की रातों में छत पर बिछी चारपाइयाँ। तारों को गिनते-गिनते कहानियाँ सुनना।',
    quote: 'कितना भी झगड़ा हो, शाम ढलते ही एक ही थाली में खाना।',
  },
  {
    id: 'sweets',
    name: 'जलेबी और बेसन के लड्डू',
    subname: 'Festive Sweets',
    icon: Cookie,
    memoryTitle: 'राखी की थाली का स्वाद...',
    memoryStory: 'माँ के हाथ के ताज़ा बने लड्डू। राखी बंधते ही पहला लड्डू मुँह में ठूँसना और मुट्ठी में थमाए गए वो पहले एक-दो रुपये का सिक्का।',
    quote: 'वो एक रुपया भी उस ज़माने में खज़ाने से कम नहीं लगता था!',
  },
];

export const Screen04Childhood: React.FC<Screen04Props> = ({ onNext }) => {
  const [selectedObj, setSelectedObj] = useState<ChildhoodObject>(OBJECTS[0]);
  const [viewedIds, setViewedIds] = useState<Set<string>>(new Set(['bag']));

  const handleSelect = (obj: ChildhoodObject) => {
    setSelectedObj(obj);
    setViewedIds((prev) => new Set([...prev, obj.id]));
  };

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col justify-between p-4 sm:p-6 bg-[#21130C] text-[#FAF5EB] rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl overflow-hidden">
      {/* Subtle Background Ambiance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(128,27,43,0.25),transparent_70%)] pointer-events-none" />

      {/* Top Header */}
      <div className="text-center space-y-1 relative z-10 max-w-xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-[#C89B3C] font-semibold bg-[#341B12] px-3 py-1 rounded-full border border-[#C89B3C]/30 inline-block">
          बचपन का संदूक • Click the Treasures
        </span>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#FFF5DE]">
          बचपन की अनमोल निशानियाँ
        </h2>
        <p className="text-xs sm:text-sm text-[#D8C4AA] font-devanagari">
          हर वस्तु पर क्लिक करें और पुरानी शरारतों की यादों को खोलें ({viewedIds.size}/5 देखी गईं)
        </p>
      </div>

      {/* Interactive Objects Row */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 my-4 max-w-4xl mx-auto w-full">
        {OBJECTS.map((item) => {
          const isSelected = selectedObj.id === item.id;
          const isViewed = viewedIds.has(item.id);
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item)}
              className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center relative ${
                isSelected
                  ? 'bg-[#801B2B] text-[#FFF9EF] border-[#C89B3C] shadow-lg ring-2 ring-[#C89B3C]/50 scale-102'
                  : 'bg-[#2E1A12] text-[#E0D0BE] border-[#5A3825] hover:bg-[#3D2319]'
              }`}
            >
              {isViewed && (
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FDE68A] absolute top-1.5 right-1.5" />
              )}
              <div className={`p-2 rounded-full mb-1.5 ${isSelected ? 'bg-[#9E2337]' : 'bg-[#1C100B]'}`}>
                <Icon className={`w-5 h-5 ${isSelected ? 'text-[#FDE68A]' : 'text-[#C89B3C]'}`} />
              </div>
              <span className="text-xs font-bold font-devanagari line-clamp-1">
                {item.name}
              </span>
              <span className="text-[10px] opacity-75 font-sans">
                {item.subname}
              </span>
            </button>
          );
        })}
      </div>

      {/* Memory Card Viewer with Rich Nostalgic Content */}
      <div className="relative z-10 max-w-2xl mx-auto w-full my-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedObj.id}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="bg-[#FFFDF8] text-[#3D2418] p-5 sm:p-6 rounded-2xl border-2 border-[#C89B3C] shadow-2xl relative"
          >
            {/* Stamp / Decorative ribbon */}
            <div className="absolute -top-3.5 left-6 bg-[#801B2B] text-[#FDE68A] text-xs font-bold font-heading px-3 py-1 rounded-full border border-[#C89B3C] shadow-xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{selectedObj.memoryTitle}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-heading text-[#801B2B] font-bold mt-2">
              {selectedObj.name}
            </h3>

            <p className="text-sm sm:text-base font-devanagari text-[#4A3225] leading-relaxed mt-2.5">
              {selectedObj.memoryStory}
            </p>

            <div className="mt-4 pt-3 border-t border-[#E8DCC8] bg-[#FAF5EB] p-3 rounded-xl border border-[#E0D0BA] flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#801B2B] shrink-0" />
              <p className="text-xs sm:text-sm font-handwritten text-[#7A4B29] italic font-semibold">
                "{selectedObj.quote}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Actions */}
      <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-2xl mx-auto w-full">
        <div className="flex items-center gap-1.5 text-xs text-[#C89B3C] font-serif">
          <Sparkles className="w-4 h-4" />
          <span>"वो लड़ाई... और पाँच मिनट बाद फिर दोस्ती।"</span>
        </div>

        <button
          onClick={onNext}
          className="px-7 py-3 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-sm sm:text-base rounded-xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-2 transition cursor-pointer"
        >
          <span>पुराना एल्बम खोलें →</span>
        </button>
      </div>
    </div>
  );
};
