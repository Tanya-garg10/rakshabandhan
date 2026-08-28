import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, BookOpen, Sparkles, Book, Heart } from 'lucide-react';
import { AlbumPhoto } from '../../types';
import { VintageCornerMount, OrnamentalFrame } from '../Ornaments';

interface Screen03Props {
  pages: AlbumPhoto[][];
  onNext: () => void;
}

export const Screen03TheAlbum: React.FC<Screen03Props> = ({
  pages,
  onNext,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = pages.length;

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-between px-3 sm:px-6 py-4 overflow-hidden">
      {/* Wooden Tabletop Ambient Texture */}
      <div className="absolute inset-0 bg-[#160B06] bg-[radial-gradient(ellipse_at_center,rgba(50,22,10,0.7)_0%,rgba(15,7,3,0.95)_100%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center space-y-2 pt-2 max-w-xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#2B1710]/90 border border-[#C89B3C]/50 text-xs sm:text-sm font-serif font-bold text-[#FDE68A]">
          <BookOpen className="w-3.5 h-3.5 text-[#C89B3C]" />
          <span>पारिवारिक एल्बम</span>
        </span>
        <h2 className="text-2xl sm:text-4xl font-heading text-[#FFF5DE]">
          "पन्नों में सिमटी हुई अनमोल कहानियाँ..."
        </h2>
      </div>

      {/* Realistic Interactive Album */}
      <div className="relative z-10 my-auto w-full max-w-4xl flex items-center justify-center py-4">
        {!isOpen ? (
          /* Closed Album on Wooden Table */
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="relative cursor-pointer group"
            onClick={() => setIsOpen(true)}
          >
            {/* Album Spine & Shadow */}
            <div className="w-[300px] sm:w-[420px] h-[360px] sm:h-[480px] bg-[#3B1218] rounded-r-2xl rounded-l-md shadow-[0_25px_50px_rgba(0,0,0,0.8),inset_0_0_40px_rgba(0,0,0,0.6)] border-4 border-[#C89B3C] p-6 sm:p-8 flex flex-col items-center justify-between text-center relative overflow-hidden transform group-hover:scale-102 transition-transform duration-300">
              {/* Embossed Leather & Gold Foil Frame */}
              <div className="absolute inset-3 border-2 border-dashed border-[#FDE68A]/40 rounded-r-xl rounded-l-xs pointer-events-none" />
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/60 via-black/20 to-transparent border-r border-[#C89B3C]/50" />

              {/* Gold Filigree Header */}
              <div className="pt-6 relative z-10">
                <Sparkles className="w-8 h-8 text-[#FDE68A] mx-auto animate-pulse mb-2" />
                <h3 className="text-2xl sm:text-3xl font-heading text-[#FDE68A] tracking-wider drop-shadow-md">
                  हमारा परिवार
                </h3>
                <p className="text-xs sm:text-sm font-devanagari text-[#E2D2BC] mt-1 font-semibold">
                  यादों की सुनहरी धरोहर
                </p>
              </div>

              {/* Center Medallion */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#FDE68A] bg-[#22070C] flex flex-col items-center justify-center p-3 shadow-inner relative z-10">
                <Heart className="w-8 h-8 text-[#E11D48] fill-[#E11D48] mb-1 animate-bounce" />
                <span className="text-[11px] font-serif font-bold text-[#FDE68A]">
                  अटूट बंधन
                </span>
              </div>

              {/* Open Album CTA Button */}
              <div className="relative z-10 pb-4">
                <button
                  type="button"
                  className="px-6 py-2.5 bg-gradient-to-r from-[#C89B3C] to-[#E6A15C] text-[#2A1005] font-serif font-bold text-sm sm:text-base rounded-xl shadow-lg flex items-center gap-2 group-hover:shadow-[0_0_20px_#FDE68A] transition cursor-pointer"
                >
                  <Book className="w-4 h-4" />
                  <span>एल्बम खोलें</span>
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Opened Realistic Album with Dual Pages */
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-[#FAF5EB] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] border-4 border-[#C89B3C] p-4 sm:p-8 relative overflow-hidden"
          >
            {/* Center Album Crease/Spine shadow */}
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-r from-black/15 via-black/35 to-black/15 z-20 pointer-events-none" />

            {/* Page Header */}
            <div className="flex items-center justify-between border-b border-[#D8C4A7] pb-3 mb-4 text-[#6A4832] font-serif text-xs sm:text-sm">
              <span className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C89B3C]" />
                <span>पृष्ठ {currentPage + 1} / {totalPages}</span>
              </span>
              <span className="italic font-devanagari font-semibold">
                "हंसी, दुलार और बीते हुए कल की महक"
              </span>
            </div>

            {/* Dual Photo Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              {pages[currentPage]?.map((photo, pIdx) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: pIdx * 0.15 }}
                  className="bg-[#FFFDF7] p-3 sm:p-4 pb-6 rounded-xl shadow-md border border-[#DFCDB4] relative group hover:shadow-xl transition-shadow"
                  style={{
                    transform: `rotate(${photo.rotation || (pIdx === 0 ? -1.5 : 1.5)}deg)`,
                  }}
                >
                  <VintageCornerMount position="tl" />
                  <VintageCornerMount position="tr" />
                  <VintageCornerMount position="bl" />
                  <VintageCornerMount position="br" />

                  {/* Photo Container */}
                  <div className="relative w-full h-48 sm:h-64 rounded-lg overflow-hidden bg-[#24150D] shadow-inner">
                    <img
                      src={photo.imageUrl}
                      alt={photo.label}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                  </div>

                  {/* Handwritten Labels */}
                  <div className="mt-3 text-center space-y-1">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-[#801B2B]/10 text-[#801B2B] text-base sm:text-lg font-handwritten font-bold tracking-wide">
                      "{photo.label}"
                    </span>
                    <p className="text-xs sm:text-sm font-devanagari text-[#5A3825] font-semibold">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Album Page Flip Controls */}
            <div className="mt-6 pt-4 border-t border-[#D8C4A7] flex items-center justify-between gap-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className={`px-4 py-2 rounded-xl font-serif font-bold text-xs sm:text-sm flex items-center gap-1.5 transition cursor-pointer border ${
                  currentPage === 0
                    ? 'opacity-40 bg-[#E8DCB8] text-[#8C7456] border-[#D8C4A7] cursor-not-allowed'
                    : 'bg-[#F2E5D0] hover:bg-[#E8D6BC] text-[#801B2B] border-[#C89B3C]'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>पिछला पृष्ठ</span>
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-1.5 rounded-lg bg-[#EFE4D2] hover:bg-[#DFCDB4] text-[#633A22] text-xs font-serif font-semibold transition cursor-pointer"
              >
                एल्बम बंद करें
              </button>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className={`px-4 py-2 rounded-xl font-serif font-bold text-xs sm:text-sm flex items-center gap-1.5 transition cursor-pointer border ${
                  currentPage === totalPages - 1
                    ? 'opacity-40 bg-[#E8DCB8] text-[#8C7456] border-[#D8C4A7] cursor-not-allowed'
                    : 'bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] border-[#C89B3C]'
                }`}
              >
                <span>अगला पृष्ठ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="relative z-10 pb-2">
        <button
          onClick={onNext}
          className="group px-8 py-3.5 bg-gradient-to-r from-[#801B2B] via-[#9B2236] to-[#801B2B] hover:from-[#9B2236] hover:to-[#B32B42] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-[0_0_20px_rgba(200,155,60,0.4)] flex items-center gap-3 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>मेमोरी वॉल देखें</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A] group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
