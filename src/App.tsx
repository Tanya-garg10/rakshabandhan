import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DEFAULT_ALBUM_DATA } from './data/defaultData';
import { FamilyAlbumData } from './types';

// 10 Interactive Screens
import { Screen01TheRakhi } from './components/screens/Screen01TheRakhi';
import { Screen02Constellation } from './components/screens/Screen02Constellation';
import { Screen03TheAlbum } from './components/screens/Screen03TheAlbum';
import { Screen04MemoryWall } from './components/screens/Screen04MemoryWall';
import { Screen05RakhiMoment } from './components/screens/Screen05RakhiMoment';
import { Screen06ThenAndNow } from './components/screens/Screen06ThenAndNow';
import { Screen07LittleSmiles } from './components/screens/Screen07LittleSmiles';
import { Screen08FamilyMosaic } from './components/screens/Screen08FamilyMosaic';
import { Screen09WishTree } from './components/screens/Screen09WishTree';
import { Screen10FinalPhoto } from './components/screens/Screen10FinalPhoto';

import { MusicPlayer } from './components/MusicPlayer';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  List,
  X,
} from 'lucide-react';

export const CHAPTER_NAMES = [
  '01 • पवित्र रक्षा सूत्र',
  '02 • पारिवारिक नक्षत्र',
  '03 • पुरानी एल्बम',
  '04 • यादों की दीवार',
  '05 • पावन अनुष्ठान',
  '06 • तब और अब',
  '07 • नन्हे कदम',
  '08 • पारिवारिक मोज़ेक',
  '09 • दुआओं का वृक्ष',
  '10 • अंतिम पारिवारिक दर्शन',
] as const;

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isChapterMenuOpen, setIsChapterMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Play audio on first user interaction to bypass browser autoplay blocks
  useEffect(() => {
    const handleFirstInteraction = () => {
      setIsPlayingAudio(true);
      ['click', 'touchstart', 'keydown'].forEach((evt) =>
        document.removeEventListener(evt, handleFirstInteraction)
      );
    };

    ['click', 'touchstart', 'keydown'].forEach((evt) =>
      document.addEventListener(evt, handleFirstInteraction, { once: true })
    );

    return () => {
      ['click', 'touchstart', 'keydown'].forEach((evt) =>
        document.removeEventListener(evt, handleFirstInteraction)
      );
    };
  }, []);

  // Persistent Album Data
  const [albumData, setAlbumData] = useState<FamilyAlbumData>(() => {
    try {
      const saved = localStorage.getItem('rakhi_family_album_v2');
      return saved ? JSON.parse(saved) : DEFAULT_ALBUM_DATA;
    } catch {
      return DEFAULT_ALBUM_DATA;
    }
  });

  // Force load from defaultData for now (disable localStorage)
  useEffect(() => {
    setAlbumData(DEFAULT_ALBUM_DATA);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('rakhi_family_album_v2', JSON.stringify(albumData));
    } catch {}
  }, [albumData]);

  // Keyboard navigation (Left/Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentScreen < 9) {
        setDirection(1);
        setCurrentScreen((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentScreen > 0) {
        setDirection(-1);
        setCurrentScreen((prev) => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScreen]);

  const goToNext = () => {
    if (currentScreen < 9) {
      setDirection(1);
      setCurrentScreen((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrev = () => {
    if (currentScreen > 0) {
      setDirection(-1);
      setCurrentScreen((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToScreen = (index: number) => {
    setDirection(index > currentScreen ? 1 : -1);
    setCurrentScreen(index);
    setIsChapterMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen bg-[#0E0604] text-[#FAF5EB] flex flex-col justify-between selection:bg-[#C89B3C] selection:text-[#180802] font-serif text-base"
    >
      {/* Top Fixed Floating Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#160B08]/90 backdrop-blur-md border-b border-[#C89B3C]/30 px-3 sm:px-6 py-2.5 flex items-center justify-between shadow-lg">
        {/* Left: App Title & Chapter Dropdown */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsChapterMenuOpen(true)}
            className="px-3 py-1.5 rounded-xl bg-[#28140C] hover:bg-[#3D1E12] border border-[#C89B3C]/50 text-xs sm:text-sm font-serif font-bold text-[#FDE68A] flex items-center gap-1.5 transition cursor-pointer shadow-xs"
            title="सभी 10 दृश्य देखें"
          >
            <List className="w-4 h-4 text-[#C89B3C]" />
            <span>दृश्य {currentScreen + 1}/10</span>
          </button>

          <span className="hidden md:inline-block text-xs font-serif text-[#D8C4AA] truncate max-w-[260px]">
            {CHAPTER_NAMES[currentScreen]}
          </span>
        </div>

        {/* Center: Interactive Chapter Progress Dots */}
        <div className="hidden sm:flex items-center gap-1.5">
          {Array.from({ length: 10 }).map((_, idx) => (
            <button
              key={`dot-${idx}`}
              onClick={() => goToScreen(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentScreen
                  ? 'w-6 bg-gradient-to-r from-[#C89B3C] to-[#FDE68A] shadow-[0_0_8px_#FDE68A]'
                  : 'w-2 bg-[#422215] hover:bg-[#C89B3C]/60'
              }`}
              title={CHAPTER_NAMES[idx]}
            />
          ))}
        </div>

        {/* Right: Music Player */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <MusicPlayer
            isPlaying={isPlayingAudio}
            onTogglePlay={(playing) => setIsPlayingAudio(playing)}
          />
        </div>
      </header>

      {/* Main Chapter Canvas */}
      <main className="flex-1 relative flex flex-col justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`screen-${currentScreen}`}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full h-full flex-1 flex flex-col justify-center"
          >
            {currentScreen === 0 && <Screen01TheRakhi onNext={goToNext} />}
            {currentScreen === 1 && (
              <Screen02Constellation
                members={albumData.constellation}
                onNext={goToNext}
              />
            )}
            {currentScreen === 2 && (
              <Screen03TheAlbum
                pages={albumData.albumPages}
                onNext={goToNext}
              />
            )}
            {currentScreen === 3 && (
              <Screen04MemoryWall
                photos={albumData.wallPhotos}
                onNext={goToNext}
              />
            )}
            {currentScreen === 4 && (
              <Screen05RakhiMoment
                sisterImg={albumData.rakhiPhotos.sisterImg}
                brotherImg={albumData.rakhiPhotos.brotherImg}
                onNext={goToNext}
              />
            )}
            {currentScreen === 5 && (
              <Screen06ThenAndNow
                beforeImg={albumData.thenAndNow.beforeImg}
                afterImg={albumData.thenAndNow.afterImg}
                beforeLabel={albumData.thenAndNow.beforeLabel}
                afterLabel={albumData.thenAndNow.afterLabel}
                onNext={goToNext}
              />
            )}
            {currentScreen === 6 && (
              <Screen07LittleSmiles
                smiles={albumData.littleSmiles}
                onNext={goToNext}
              />
            )}
            {currentScreen === 7 && (
              <Screen08FamilyMosaic
                photos={albumData.mosaicPhotos}
                onNext={goToNext}
              />
            )}
            {currentScreen === 8 && (
              <Screen09WishTree
                wishes={albumData.wishTags}
                onNext={goToNext}
              />
            )}
            {currentScreen === 9 && (
              <Screen10FinalPhoto
                finalPhoto={albumData.finalPhoto}
                onRestart={() => goToScreen(0)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Chapter Drawer Menu */}
      <AnimatePresence>
        {isChapterMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-start"
            onClick={() => setIsChapterMenuOpen(false)}
          >
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xs sm:max-w-sm bg-[#1A0E08] border-r-2 border-[#C89B3C] h-full p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#C89B3C]/30">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#FDE68A]" />
                    <h3 className="text-lg font-heading text-[#FFF5DE] font-bold">
                      एल्बम के 10 दृश्य
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsChapterMenuOpen(false)}
                    className="p-1 rounded-lg bg-[#2B140A] text-[#D8C4AA] hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-4 space-y-2">
                  {CHAPTER_NAMES.map((title, idx) => (
                    <button
                      key={`menu-item-${idx}`}
                      onClick={() => goToScreen(idx)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-serif font-semibold transition cursor-pointer flex items-center justify-between ${
                        idx === currentScreen
                          ? 'bg-[#801B2B] text-[#FFF9EF] border border-[#FDE68A] shadow-md font-bold'
                          : 'bg-[#251208] text-[#D8C4AA] hover:bg-[#381B0E] hover:text-[#FFF5DE]'
                      }`}
                    >
                      <span>{title}</span>
                      {idx === currentScreen && (
                        <span className="w-2 h-2 rounded-full bg-[#FDE68A] animate-ping" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#C89B3C]/30 text-center text-xs text-[#C89B3C]/70">
                एक धागा, अनगिनत यादें ❤️
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bottom Quick Steppers for Touch & Mouse */}
      <footer className="relative z-30 bg-[#160B08]/90 border-t border-[#C89B3C]/20 px-4 py-2 flex items-center justify-between text-xs text-[#C89B3C]/80 font-serif">
        <button
          onClick={goToPrev}
          disabled={currentScreen === 0}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-xl border border-[#C89B3C]/40 font-bold transition cursor-pointer ${
            currentScreen === 0
              ? 'opacity-30 cursor-not-allowed text-[#7A5A48]'
              : 'bg-[#28140C] hover:bg-[#3D1E12] text-[#FDE68A]'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>पिछला</span>
        </button>

        <span className="text-[11px] sm:text-xs text-[#D8C4AA] font-devanagari">
          {currentScreen + 1} / 10 • {CHAPTER_NAMES[currentScreen].split('•')[1] || ''}
        </span>

        <button
          onClick={goToNext}
          disabled={currentScreen === 9}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-xl border border-[#C89B3C]/40 font-bold transition cursor-pointer ${
            currentScreen === 9
              ? 'opacity-30 cursor-not-allowed text-[#7A5A48]'
              : 'bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF]'
          }`}
        >
          <span>अगला</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
}
