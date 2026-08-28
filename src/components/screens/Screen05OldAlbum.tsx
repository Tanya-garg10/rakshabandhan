import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BookOpen, Sparkles, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { VintageCornerMount } from '../Ornaments';
import { MemoryItem } from '../../types';

interface Screen05Props {
  onNext: () => void;
  memories: MemoryItem[];
  onEditPhoto?: (item: MemoryItem) => void;
}

const ALBUM_PHOTOS = [
  {
    id: 'p1',
    title: 'वो समय...',
    caption: 'साइकिल, स्कूल का बस्ता और बेफ़िक्र हँसी',
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    year: '1968',
    note: 'जब एक मिठाई के दो टुकड़े भी बराबर न होने पर माँ के पास शिकायत जाती थी!',
  },
  {
    id: 'p2',
    title: 'परिवार...',
    caption: 'संयुक्त परिवार का वो भरा-पूरा आँगन और बुजुर्गों की छत्रछाया',
    url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
    year: '1982',
    note: 'पूरे परिवार के साथ एक ही दस्तरख्वान पर बैठकर खीर-पूरी का आनंद।',
  },
  {
    id: 'p3',
    title: 'त्योहार...',
    caption: 'राखी की थाली, रोली, अक्षत और दीदी का दुलार',
    url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    year: '1995',
    note: 'कलाई पर बंधी रेशमी डोर और बदले में मिला वो चमचमाता उपहार।',
  },
  {
    id: 'p4',
    title: 'कुछ बहुत प्यारी यादें...',
    caption: 'उम्र के इस मुकाम पर भी वही बचपन जैसा भोलापन',
    url: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=800&q=80',
    year: 'आज',
    note: 'बाल भले ही सफ़ेद हो गए हों, पर दिल में एक-दूसरे के लिए वही आदर और दुलार है।',
  },
];

export const Screen05OldAlbum: React.FC<Screen05Props> = ({ onNext, memories }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activePhoto, setActivePhoto] = useState<typeof ALBUM_PHOTOS[0] | null>(null);
  const [pageIndex, setPageIndex] = useState(0);

  const displayList = memories.length >= 4 ? memories.slice(0, 4) : ALBUM_PHOTOS;

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col justify-between p-4 sm:p-6 bg-[#1F120B] text-[#FAF5EB] rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,155,60,0.12),transparent_75%)] pointer-events-none" />

      {/* Header */}
      <div className="text-center space-y-1 relative z-10 max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C89B3C] font-semibold bg-[#2E190F] px-3 py-1 rounded-full border border-[#C89B3C]/30">
          <BookOpen className="w-4 h-4 text-[#FDE68A]" />
          <span>पुरानी यादों का एल्बम • Family Keepsake</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#FFF5DE]">
          पारिवारिक एल्बम के सुनहरे पन्ने
        </h2>
        <p className="text-xs sm:text-sm text-[#D8C4AA] font-devanagari">
          किसी भी तस्वीर पर क्लिक करके बड़ा देखें
        </p>
      </div>

      {/* Physical Looking Photo Album Grid */}
      <div className="relative z-10 max-w-4xl mx-auto w-full my-3">
        <div className="bg-[#FAF5EB] text-[#3D2418] p-4 sm:p-6 rounded-2xl border-4 border-[#8B5A2B] shadow-2xl relative overflow-hidden">
          {/* Leather spine effect */}
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#5C3818] border-r border-[#C89B3C]" />
          <div className="absolute right-0 top-0 bottom-0 w-3 bg-[#5C3818] border-l border-[#C89B3C]" />

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pl-2 pr-2">
            {displayList.map((photo, idx) => (
              <motion.div
                key={`album-photo-${photo.id || idx}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                onClick={() => setActivePhoto(ALBUM_PHOTOS[idx] || ALBUM_PHOTOS[0])}
                className="group relative bg-[#FFFDF9] p-3 pb-4 rounded-lg shadow-md border border-[#D5C2A5] cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <VintageCornerMount position="tl" />
                <VintageCornerMount position="tr" />
                <VintageCornerMount position="bl" />
                <VintageCornerMount position="br" />

                <div className="relative aspect-16/10 bg-[#2A1810] rounded overflow-hidden mb-2">
                  <img
                    src={photo.imageUrl || photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover sepia-[0.3] group-hover:sepia-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[#000]/20 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-[#801B2B]/90 text-[#FFF9EF] text-xs font-serif px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 text-[#FDE68A]" /> बड़ा देखें
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-[11px] font-bold text-[#801B2B] font-heading uppercase tracking-wider block">
                    {photo.title || 'वो समय...'}
                  </span>
                  <p className="text-xs font-handwritten text-[#5C3D28] line-clamp-1 mt-0.5 font-bold">
                    "{photo.caption}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Photo Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            key="album-photo-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#120B08]/85 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#FAF5EB] text-[#3D2418] max-w-lg w-full p-5 sm:p-6 rounded-2xl border-2 border-[#C89B3C] shadow-2xl relative"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-[#E5D7C2] hover:bg-[#D5C2A5] text-[#5C3818] transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-bold uppercase tracking-widest text-[#801B2B] bg-[#F2E5D0] px-2.5 py-0.5 rounded border border-[#C89B3C]/40">
                {activePhoto.year} • {activePhoto.title}
              </span>

              <div className="relative aspect-4/3 w-full bg-[#2B1810] rounded-xl overflow-hidden my-3 border border-[#C89B3C]">
                <img
                  src={activePhoto.url}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover sepia-[0.2]"
                />
              </div>

              <h3 className="text-lg font-bold font-heading text-[#801B2B]">
                {activePhoto.caption}
              </h3>

              <p className="text-sm font-devanagari text-[#5A3825] mt-1.5">
                {activePhoto.note}
              </p>

              <div className="mt-4 pt-3 border-t border-[#D8C4A7] flex justify-end">
                <button
                  onClick={() => setActivePhoto(null)}
                  className="px-4 py-2 bg-[#801B2B] text-[#FFF9EF] text-xs font-serif font-bold rounded-lg"
                >
                  वापस एल्बम में जाएँ
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-4xl mx-auto w-full">
        <p className="text-xs text-[#C89B3C] font-serif">
          ✦ "कुछ बहुत प्यारी यादें जो कभी धुंधली नहीं होतीं"
        </p>

        <button
          onClick={onNext}
          className="px-7 py-3 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-sm sm:text-base rounded-xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-2 transition cursor-pointer"
        >
          <span>समय का पहिया आगे बढ़ा →</span>
        </button>
      </div>
    </div>
  );
};
