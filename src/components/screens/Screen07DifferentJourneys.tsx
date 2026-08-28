import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Heart, Home, GraduationCap, Briefcase, Users, Sun } from 'lucide-react';

interface Screen07Props {
  onNext: () => void;
}

const STAGES = [
  { label: 'घर', sub: 'Ancestral Home', icon: Home },
  { label: 'पढ़ाई', sub: 'Education', icon: GraduationCap },
  { label: 'नौकरी', sub: 'Career', icon: Briefcase },
  { label: 'परिवार', sub: 'Own Family', icon: Users },
  { label: 'आज', sub: 'Today', icon: Sun },
];

export const Screen07DifferentJourneys: React.FC<Screen07Props> = ({ onNext }) => {
  const [activeStep, setActiveStep] = useState(4);

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#1A0F0A] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,60,0.12),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 space-y-2 pt-2">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C89B3C] font-semibold">
          <Compass className="w-4 h-4 text-[#FDE68A]" />
          <span>जीवन की अलग राहें • Parallel Journeys</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#FFF5DE]">
          "ज़िंदगी ने अपनी-अपनी राहें दे दीं..."
        </h2>
      </div>

      {/* Two Diverging & Reconnecting Paths Diagram */}
      <div className="relative z-10 max-w-2xl w-full my-auto px-2">
        {/* Brother & Sister Path Track */}
        <div className="space-y-6 sm:space-y-8">
          {/* Path 1: भाई का सफ़र (Brother's path) */}
          <div className="bg-[#29170E]/80 p-3 sm:p-4 rounded-xl border border-[#C89B3C]/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#FDE68A] uppercase tracking-wider font-serif flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" /> भाई का सफ़र
              </span>
              <span className="text-[11px] text-[#C89B3C] font-serif">दूरी से बेअसर</span>
            </div>
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
              {STAGES.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div
                    key={`b-${idx}`}
                    className="p-2 rounded-lg bg-[#1E0F08] border border-[#C89B3C]/40 flex flex-col items-center text-center"
                  >
                    <Icon className="w-4 h-4 text-[#3B82F6] mb-1" />
                    <span className="text-xs font-bold font-devanagari text-[#FAF5EB]">
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Golden Reconnection Bridge */}
          <div className="relative flex items-center justify-center py-2">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent" />
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bg-[#801B2B] text-[#FDE68A] px-4 py-1.5 rounded-full border-2 border-[#C89B3C] shadow-lg flex items-center gap-2 text-xs font-bold font-heading"
            >
              <Heart className="w-4 h-4 text-[#EF4444] fill-[#EF4444]" />
              <span>अटूट स्नेह की डोर</span>
            </motion.div>
          </div>

          {/* Path 2: बहन का सफ़र (Sister's path) */}
          <div className="bg-[#29170E]/80 p-3 sm:p-4 rounded-xl border border-[#C89B3C]/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#FDE68A] uppercase tracking-wider font-serif flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EC4899]" /> बहन का सफ़र
              </span>
              <span className="text-[11px] text-[#C89B3C] font-serif">दुआओं का साथ</span>
            </div>
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
              {STAGES.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div
                    key={`s-${idx}`}
                    className="p-2 rounded-lg bg-[#1E0F08] border border-[#C89B3C]/40 flex flex-col items-center text-center"
                  >
                    <Icon className="w-4 h-4 text-[#EC4899] mb-1" />
                    <span className="text-xs font-bold font-devanagari text-[#FAF5EB]">
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Emotional Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 space-y-1 text-[#EAD8C3]"
        >
          <p className="text-base sm:text-lg font-devanagari text-[#FFF5DE] font-semibold">
            "लेकिन कुछ रिश्ते..."
          </p>
          <p className="text-lg sm:text-xl font-heading text-[#FDE68A] italic">
            "दूरी से दूर नहीं होते।"
          </p>
        </motion.div>
      </div>

      {/* Bottom Button */}
      <div className="relative z-10 pt-2 pb-1">
        <button
          onClick={onNext}
          className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-3 transition cursor-pointer"
        >
          <span>अदृश्य बंधन को महसूस करें →</span>
        </button>
      </div>
    </div>
  );
};
