import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Camera, Mail, Sparkles, X, Coffee, Flower2, Flame, Heart } from 'lucide-react';
import { MemoryWallPhoto } from '../../types';

interface Screen04Props {
  photos: MemoryWallPhoto[];
  onNext: () => void;
}

export const Screen04MemoryWall: React.FC<Screen04Props> = ({
  photos,
  onNext,
}) => {
  const [activePhoto, setActivePhoto] = useState<MemoryWallPhoto | null>(null);
  const [objectMessage, setObjectMessage] = useState<{
    icon: string;
    title: string;
    text: string;
  } | null>(null);
  const [cameraFlash, setCameraFlash] = useState(false);

  const handleObjectClick = (type: 'camera' | 'diya' | 'letter' | 'flower' | 'cup') => {
    if (type === 'camera') {
      setCameraFlash(true);
      setTimeout(() => setCameraFlash(false), 500);
      setObjectMessage({
        icon: '📷',
        title: 'कैमरा',
        text: 'एक और तस्वीर बाकी है... जिसमें हम सब साथ मुस्कुराएँगे! 📸',
      });
    } else if (type === 'diya') {
      setObjectMessage({
        icon: '🪔',
        title: 'दीपक',
        text: 'अपनों के लिए एक छोटी सी दुआ... ईश्वर हमारे परिवार को सदा सलामत रखे। 🪔',
      });
    } else if (type === 'letter') {
      setObjectMessage({
        icon: '✉️',
        title: 'चिट्ठी',
        text: 'कुछ बातें तस्वीरों में भी छुपी होती हैं... जो सिर्फ़ दिल पढ़ सकता है। ✉️',
      });
    } else if (type === 'flower') {
      setObjectMessage({
        icon: '🌸',
        title: 'पुष्प',
        text: 'रिश्तों की खुशबू कभी कम नहीं होती, हर साल और ताज़ा हो जाती है। 🌸',
      });
    } else if (type === 'cup') {
      setObjectMessage({
        icon: '☕',
        title: 'चाय का कप',
        text: 'शाम की चाय और परिवार की वो अंतहीन हँसी-मज़ाक वाली बातें! ☕',
      });
    }
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-between px-3 sm:px-6 py-4 overflow-hidden select-none">
      {/* Camera Flash Overlay */}
      <AnimatePresence>
        {cameraFlash && (
          <motion.div
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-white pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Textured Wall Background */}
      <div className="absolute inset-0 bg-[#1A0E08] bg-[radial-gradient(circle_at_top,rgba(60,28,15,0.7)_0%,rgba(18,8,4,0.95)_100%)] pointer-events-none" />

      {/* Subtle Fairy Lights string on top of the wall */}
      <div className="absolute top-0 left-0 right-0 h-10 flex justify-around items-start pointer-events-none z-0 px-4">
        {Array.from({ length: 12 }).map((_, idx) => (
          <div key={`light-${idx}`} className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-[#C89B3C]/50" />
            <motion.div
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.9, 1.2, 0.9],
              }}
              transition={{
                duration: 2 + (idx % 3),
                repeat: Infinity,
                delay: idx * 0.2,
              }}
              className="w-2.5 h-2.5 rounded-full bg-[#FDE68A] shadow-[0_0_10px_#FDE68A]"
            />
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 text-center space-y-1.5 pt-3 max-w-xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#2B1710]/90 border border-[#C89B3C]/50 text-xs sm:text-sm font-serif font-bold text-[#FDE68A]">
          <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
          <span>यादों की दीवार</span>
        </span>
        <h2 className="text-2xl sm:text-4xl font-heading text-[#FFF5DE]">
          दीवार पर सजी खुशियों की तस्वीरें
        </h2>
        <p className="text-xs sm:text-sm font-devanagari text-[#E2D2BC]">
          (तस्वीरों व नीचे रखी वस्तुओं को स्पर्श करें 📸 🪔 ✉️)
        </p>
      </div>

      {/* Interactive Photo Wall Gallery */}
      <div className="relative z-10 my-auto w-full max-w-5xl py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => setActivePhoto(photo)}
              style={{ transform: `rotate(${photo.tilt}deg)` }}
              className="relative bg-[#FAF5EB] p-2.5 sm:p-3.5 pb-6 rounded-lg shadow-xl border border-[#D8C4A7] cursor-pointer group transition-all"
            >
              {/* Pin / Tape / Clip Decorator */}
              {photo.pinType === 'clip' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-5 rounded-xs bg-[#C89B3C] shadow-md border border-[#8C6D34] flex items-center justify-center">
                  <div className="w-2 h-1 bg-[#4A3215] rounded-xs" />
                </div>
              )}
              {photo.pinType === 'tape' && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#F2E5D0]/80 shadow-xs border-y border-white/40 -rotate-3" />
              )}
              {photo.pinType === 'frame' && (
                <div className="absolute inset-1 border-2 border-[#C89B3C]/50 pointer-events-none rounded-sm" />
              )}

              {/* Photo Image */}
              <div className="relative w-full h-32 sm:h-44 rounded-md overflow-hidden bg-[#24150D] shadow-inner">
                <img
                  src={photo.imageUrl}
                  alt={photo.caption}
                  className="w-full h-full object-contain bg-[#24150D] group-hover:scale-106 transition-transform duration-500"
                />
              </div>

              {/* Caption */}
              <p className="mt-2 text-center text-xs sm:text-sm font-handwritten font-bold text-[#5A3825] truncate">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Small Interactive Objects Shelf below the wall */}
        <div className="mt-6 p-3 sm:p-4 rounded-2xl bg-[#24120A]/90 border border-[#C89B3C]/40 shadow-xl flex items-center justify-around gap-2 flex-wrap text-center">
          <button
            onClick={() => handleObjectClick('camera')}
            className="p-2 sm:p-3 rounded-xl bg-[#3B1E12] hover:bg-[#522918] text-[#FDE68A] transition flex items-center gap-1.5 text-xs sm:text-sm font-serif font-bold cursor-pointer border border-[#C89B3C]/30 shadow-sm"
          >
            <Camera className="w-4 h-4 text-[#FDE68A]" />
            <span>📷 कैमरा</span>
          </button>

          <button
            onClick={() => handleObjectClick('diya')}
            className="p-2 sm:p-3 rounded-xl bg-[#3B1E12] hover:bg-[#522918] text-[#FDE68A] transition flex items-center gap-1.5 text-xs sm:text-sm font-serif font-bold cursor-pointer border border-[#C89B3C]/30 shadow-sm"
          >
            <Flame className="w-4 h-4 text-[#F97316] animate-pulse" />
            <span>🪔 दीया</span>
          </button>

          <button
            onClick={() => handleObjectClick('letter')}
            className="p-2 sm:p-3 rounded-xl bg-[#3B1E12] hover:bg-[#522918] text-[#FDE68A] transition flex items-center gap-1.5 text-xs sm:text-sm font-serif font-bold cursor-pointer border border-[#C89B3C]/30 shadow-sm"
          >
            <Mail className="w-4 h-4 text-[#FDE68A]" />
            <span>✉️ चिट्ठी</span>
          </button>

          <button
            onClick={() => handleObjectClick('flower')}
            className="p-2 sm:p-3 rounded-xl bg-[#3B1E12] hover:bg-[#522918] text-[#FDE68A] transition flex items-center gap-1.5 text-xs sm:text-sm font-serif font-bold cursor-pointer border border-[#C89B3C]/30 shadow-sm"
          >
            <Flower2 className="w-4 h-4 text-[#FB7185]" />
            <span>🌸 पुष्प</span>
          </button>

          <button
            onClick={() => handleObjectClick('cup')}
            className="p-2 sm:p-3 rounded-xl bg-[#3B1E12] hover:bg-[#522918] text-[#FDE68A] transition flex items-center gap-1.5 text-xs sm:text-sm font-serif font-bold cursor-pointer border border-[#C89B3C]/30 shadow-sm"
          >
            <Coffee className="w-4 h-4 text-[#FDE68A]" />
            <span>☕ चाय</span>
          </button>
        </div>
      </div>

      {/* Object Popup Modal */}
      <AnimatePresence>
        {objectMessage && (
          <motion.div
            key="object-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
            onClick={() => setObjectMessage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAF5EB] rounded-2xl p-6 shadow-2xl border-2 border-[#C89B3C] max-w-sm w-full text-center text-[#3D2C24]"
            >
              <div className="text-4xl mb-2">{objectMessage.icon}</div>
              <h3 className="text-xl font-heading font-bold text-[#801B2B] mb-2">
                {objectMessage.title}
              </h3>
              <p className="text-base font-devanagari text-[#5A3825] font-semibold leading-relaxed mb-4">
                "{objectMessage.text}"
              </p>
              <button
                onClick={() => setObjectMessage(null)}
                className="w-full py-2 bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] font-serif font-bold rounded-xl transition cursor-pointer"
              >
                सुंदर ❤️
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photo Zoom Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            key="photo-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAF5EB] rounded-2xl p-4 sm:p-6 shadow-2xl border-2 border-[#C89B3C] max-w-md w-full text-center"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-[#EFE4D2] hover:bg-[#DFCDB4] text-[#633A22] transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden shadow-inner border border-[#D8C4A7] mb-3">
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.caption}
                  className="w-full h-full object-contain bg-[#24150D]"
                />
              </div>

              <p className="text-lg font-handwritten font-bold text-[#801B2B]">
                "{activePhoto.caption}"
              </p>

              <button
                onClick={() => setActivePhoto(null)}
                className="mt-4 w-full py-2 bg-[#801B2B] text-[#FFF9EF] font-serif font-bold rounded-xl cursor-pointer"
              >
                बंद करें
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Footer */}
      <div className="relative z-10 pb-2">
        <button
          onClick={onNext}
          className="group px-8 py-3.5 bg-gradient-to-r from-[#801B2B] via-[#9B2236] to-[#801B2B] hover:from-[#9B2236] hover:to-[#B32B42] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-[0_0_20px_rgba(200,155,60,0.4)] flex items-center gap-3 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>राखी पूजन दृश्य</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A] group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
