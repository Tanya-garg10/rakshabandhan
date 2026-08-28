import React, { useState } from 'react';
import { MemoryItem } from '../types';
import { VintageCornerMount, FiligreeDivider } from './Ornaments';
import { PhotoEditModal } from './PhotoEditModal';
import { Camera, Eye, Calendar, Sparkles, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface MemoriesSectionProps {
  memories: MemoryItem[];
  onUpdateMemory: (updated: MemoryItem) => void;
  fontSizeClass: string;
}

export const MemoriesSection: React.FC<MemoriesSectionProps> = ({
  memories,
  onUpdateMemory,
  fontSizeClass,
}) => {
  const [editingMemory, setEditingMemory] = useState<MemoryItem | null>(null);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % memories.length);
    }
  };

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + memories.length) % memories.length);
    }
  };

  return (
    <section id="memories" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EFE4] relative border-t border-[#E6D8C3]">
      
      {/* Decorative background watermark */}
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EBDBC2] text-[#7A4020] text-sm font-semibold mb-3 border border-[#D5BF9E]">
            <Sparkles className="w-4 h-4 text-[#C89B3C]" />
            <span>स्मृतियों का कोना</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#671421] tracking-tight">
            वो बचपन की बातें...
          </h2>

          <FiligreeDivider className="my-4" />

          <p className={`text-[#5B4333] font-medium leading-relaxed ${fontSizeClass === 'text-xl' ? 'text-2xl' : fontSizeClass === 'text-lg' ? 'text-xl' : 'text-lg'}`}>
            पुराने पारिवारिक एल्बम के वे पन्ने, जो समय के साथ और भी अधिक अनमोल और प्यारे हो गए हैं।
          </p>

          <p className="mt-2 text-xs sm:text-sm text-[#87654E] italic">
            (सुझाव: आप किसी भी कार्ड पर "तस्वीर बदलें" दबाकर अपने परिवार की असली फोटो भी लगा सकते हैं)
          </p>
        </div>

        {/* 4-6 Memory Album Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {memories.map((mem, index) => (
            <article
              key={mem.id}
              className="group relative bg-[#FAF5EB] p-5 sm:p-6 rounded-2xl border-2 border-[#D8C5A8] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                
                {/* Photo Frame Container with Album Corners */}
                <div className="relative p-2 bg-[#F3E8D3] rounded-xl border border-[#CBB38B] mb-5 shadow-inner">
                  <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-[#3D2C24]">
                    
                    {/* Vintage Corner Mounts */}
                    <VintageCornerMount position="tl" />
                    <VintageCornerMount position="tr" />
                    <VintageCornerMount position="bl" />
                    <VintageCornerMount position="br" />

                    {/* Image with nostalgic sepia glow */}
                    <img
                      src={mem.imageUrl}
                      alt={mem.title}
                      className="w-full h-full object-cover filter contrast-[1.03] brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Quick Action Overlay on Image */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                      <button
                        onClick={() => openLightbox(index)}
                        className="p-3 bg-[#FAF5EB] text-[#801B2B] rounded-full hover:bg-white shadow-lg transition transform hover:scale-110"
                        title="बड़ी तस्वीर देखें"
                        aria-label="तस्वीर विस्तार से देखें"
                      >
                        <ZoomIn className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setEditingMemory(mem)}
                        className="p-3 bg-[#801B2B] text-white rounded-full hover:bg-[#671421] shadow-lg transition transform hover:scale-110"
                        title="तस्वीर या विवरण बदलें"
                        aria-label="तस्वीर बदलें"
                      >
                        <Camera className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Year badge if available */}
                    {mem.year && (
                      <div className="absolute bottom-2 right-2 px-2.5 py-0.5 rounded bg-black/70 text-[#FFF7ED] text-xs font-serif tracking-wider backdrop-blur-xs border border-white/20">
                        {mem.year}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Title & Content */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#801B2B]">
                      {mem.title}
                    </h3>
                  </div>

                  <p className="text-[#4E382A] text-base sm:text-lg font-medium leading-relaxed font-devanagari">
                    {mem.caption}
                  </p>

                  {mem.note && (
                    <div className="pt-2 mt-2 border-t border-[#E6D7C2]">
                      <p className="text-xs sm:text-sm text-[#7F5E48] italic font-serif">
                        "{mem.note}"
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-5 pt-3 border-t border-[#DFCBB0] flex items-center justify-between">
                <button
                  onClick={() => openLightbox(index)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#801B2B] hover:text-[#5B101D] transition"
                >
                  <Eye className="w-4 h-4" />
                  <span>विस्तार से देखें</span>
                </button>

                <button
                  onClick={() => setEditingMemory(mem)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EFE3CF] hover:bg-[#E5D4BA] text-[#5A3C28] rounded-lg text-xs sm:text-sm font-semibold border border-[#D5C2A2] transition shadow-2xs"
                >
                  <Camera className="w-3.5 h-3.5 text-[#801B2B]" />
                  <span>तस्वीर बदलें</span>
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Edit Photo Modal */}
      <PhotoEditModal
        memory={editingMemory}
        isOpen={!!editingMemory}
        onClose={() => setEditingMemory(null)}
        onSave={onUpdateMemory}
      />

      {/* Senior-Friendly Lightbox for Memories */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8">
          <div className="relative max-w-4xl w-full bg-[#FAF5EB] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#C89B3C] max-h-[95vh] flex flex-col">
            
            {/* Lightbox Top Header */}
            <div className="flex items-center justify-between p-4 bg-[#F2E5D2] border-b border-[#DFCBB0]">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#801B2B] text-white text-xs sm:text-sm font-bold rounded-full">
                  स्मृति {activeLightboxIndex + 1} / {memories.length}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#801B2B]">
                  {memories[activeLightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 text-[#4E392B] hover:text-[#801B2B] rounded-lg hover:bg-[#E5D7C2] transition"
                aria-label="बंद करें"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Lightbox Image View */}
            <div className="relative flex-1 bg-[#2C211B] flex items-center justify-center min-h-[300px] sm:min-h-[420px] overflow-hidden">
              <img
                src={memories[activeLightboxIndex].imageUrl}
                alt={memories[activeLightboxIndex].title}
                className="max-h-[60vh] w-auto max-w-full object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevLightbox}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/75 text-white rounded-full transition shadow-lg"
                aria-label="पिछली तस्वीर"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextLightbox}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/75 text-white rounded-full transition shadow-lg"
                aria-label="अगली तस्वीर"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Caption & Details */}
            <div className="p-6 bg-[#FAF5EB] border-t border-[#DFCBB0]">
              <p className="text-lg sm:text-xl font-semibold text-[#4A3528] leading-relaxed">
                {memories[activeLightboxIndex].caption}
              </p>
              {memories[activeLightboxIndex].note && (
                <p className="mt-2 text-base text-[#7A583F] italic font-serif">
                  "{memories[activeLightboxIndex].note}"
                </p>
              )}
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#E5D7C2]">
                <span className="text-sm font-semibold text-[#8C6D58]">
                  वर्ष / समय: {memories[activeLightboxIndex].year || 'अविस्मरणीय याद'}
                </span>
                <button
                  onClick={() => {
                    const currentMem = memories[activeLightboxIndex];
                    closeLightbox();
                    setEditingMemory(currentMem);
                  }}
                  className="px-4 py-2 bg-[#801B2B] text-[#FFF9EF] font-bold rounded-xl hover:bg-[#671421] transition text-sm flex items-center gap-2 shadow-sm"
                >
                  <Camera className="w-4 h-4" />
                  <span>यह तस्वीर बदलें</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
