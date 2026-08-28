import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Camera, RotateCcw } from 'lucide-react';
import { VintagePhoto } from '../../types';
import { FiligreeDivider } from '../Ornaments';

interface Screen2Props {
  onNext: () => void;
  onPrev: () => void;
  photo: VintagePhoto;
  onEditPhoto: (photo: VintagePhoto) => void;
  fontSizeClass: string;
}

export const Screen2Beginning: React.FC<Screen2Props> = ({
  onNext,
  onPrev,
  photo,
  onEditPhoto,
  fontSizeClass,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between py-4 sm:py-6 px-4 sm:px-8 text-center max-w-4xl mx-auto overflow-y-auto">
      {/* Top Page Header */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm uppercase tracking-widest text-[#8C6D53] font-serif"
        >
          स्मृति पन्ना • ०२
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#671421] mt-1"
        >
          कहानी शुरू हुई थी... बहुत साल पहले
        </motion.h2>
        <FiligreeDivider className="my-2" />
      </div>

      {/* Main Content: Vintage Photo Card + Emotion Poem */}
      <div className="my-auto py-3 w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left / Top: Vintage Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: -1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-6 flex flex-col items-center"
        >
          <div className="relative p-3 sm:p-4 bg-[#FBF7EE] rounded-xl shadow-xl border-2 border-[#D8C4A7] rotate-[-1deg] hover:rotate-0 transition-transform duration-500 max-w-sm w-full">
            {/* Vintage Photo Inner */}
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg border border-[#C8B89E] bg-[#EAE0D0] group">
              <img
                src={photo.url}
                alt="बचपन की यादें"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter sepia-[0.35] contrast-[1.08] brightness-[0.96] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-radial from-transparent to-[#4A2D1B]/20 pointer-events-none" />

              {/* Edit button */}
              <button
                onClick={() => onEditPhoto(photo)}
                className="absolute bottom-2 right-2 px-3 py-1.5 bg-[#4A1E24]/85 hover:bg-[#671421] text-[#FFF9EF] text-xs sm:text-sm rounded-lg flex items-center gap-1.5 shadow-md backdrop-blur-xs transition cursor-pointer"
                title="अपनी तस्वीर बदलें"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>तस्वीर बदलें</span>
              </button>
            </div>

            {/* Handwritten Caption */}
            <div className="mt-3 text-center">
              <p className="font-serif italic text-base sm:text-lg text-[#5A3825] font-semibold">
                "{photo.caption || 'बचपन के वो सुनहरे, बेपरवाह दिन'}"
              </p>
              <span className="text-xs text-[#8C6D53] font-serif">~ स्मृतियों की धरोहर</span>
            </div>
          </div>
        </motion.div>

        {/* Right / Bottom: Poetic lines */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:col-span-6 text-center md:text-left space-y-4 px-2 sm:px-4"
        >
          <div className="bg-[#FFFDF9]/80 border-l-4 border-[#C89B3C] p-4 sm:p-6 rounded-r-2xl shadow-sm space-y-3">
            <p className={`font-serif text-[#4A2E1B] leading-relaxed ${fontSizeClass || 'text-lg sm:text-xl'}`}>
              जब उम्र छोटी थी,
            </p>
            <p className={`font-serif text-[#4A2E1B] leading-relaxed ${fontSizeClass || 'text-lg sm:text-xl'}`}>
              साथ खेलने की आदत थी,
            </p>
            <p className={`font-serif text-[#671421] font-semibold leading-relaxed ${fontSizeClass || 'text-lg sm:text-xl'}`}>
              छोटी-छोटी बातों पर लड़ना भी था...
            </p>
            <p className={`font-serif text-[#801B2B] font-bold leading-relaxed ${fontSizeClass || 'text-lg sm:text-xl'}`}>
              और फिर कुछ ही देर में साथ बैठ जाना भी।
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#87654E] italic">
            वो मिट्टी के खिलौने, वो आंगन की दौड़, और वो एक दूसरे की थाली से मिठाई छीनने का भोलापन।
          </p>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full flex items-center justify-between gap-4 pt-4 border-t border-[#E8DCC8]/80 max-w-xl">
        <button
          onClick={onPrev}
          className="py-3 px-5 sm:px-6 bg-[#EFE4D2] hover:bg-[#E2D2BC] text-[#5A3825] font-semibold text-base sm:text-lg rounded-xl border border-[#C8B89E] transition cursor-pointer"
        >
          ← पिछला पन्ना
        </button>

        <button
          onClick={onNext}
          className="py-3 sm:py-4 px-7 sm:px-8 bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] font-bold text-lg sm:text-xl rounded-xl shadow-lg border border-[#C89B3C] flex items-center gap-2 transition cursor-pointer"
        >
          <span>आगे बढ़ें</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A]" />
        </button>
      </div>
    </div>
  );
};
