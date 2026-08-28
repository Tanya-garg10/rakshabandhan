import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, X, Heart, Star, ZoomIn } from 'lucide-react';
import { ConstellationMember } from '../../types';

interface Screen02Props {
  members: ConstellationMember[];
  onNext: () => void;
}

export const Screen02Constellation: React.FC<Screen02Props> = ({
  members,
  onNext,
}) => {
  const [activeMember, setActiveMember] = useState<ConstellationMember | null>(null);
  const [linesDrawn, setLinesDrawn] = useState(false);
  const [photosRevealed, setPhotosRevealed] = useState(false);

  useEffect(() => {
    const lineTimer = setTimeout(() => setLinesDrawn(true), 600);
    const photoTimer = setTimeout(() => setPhotosRevealed(true), 1400);
    return () => {
      clearTimeout(lineTimer);
      clearTimeout(photoTimer);
    };
  }, []);

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-between px-3 sm:px-6 py-4 overflow-hidden select-none">
      {/* Background Starry Constellation Mesh */}
      <div className="absolute inset-0 bg-[#0F0805] bg-[radial-gradient(ellipse_at_center,rgba(60,25,12,0.6)_0%,rgba(10,5,3,0.95)_80%)] pointer-events-none" />

      {/* Tiny shimmering stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 2.5 + (i % 5),
              repeat: Infinity,
              delay: (i * 0.2) % 3,
            }}
            style={{
              top: `${(i * 19) % 95}%`,
              left: `${(i * 23) % 95}%`,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#FDE68A] shadow-[0_0_8px_#FDE68A]"
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 text-center space-y-2 pt-2 max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#2B1710]/90 border border-[#C89B3C]/50 text-xs sm:text-sm font-serif font-bold text-[#FDE68A]"
        >
          <Star className="w-3.5 h-3.5 text-[#C89B3C] fill-[#C89B3C]" />
          <span>पारिवारिक नक्षत्र</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-4xl font-heading text-[#FFF5DE]"
        >
          तारों जैसे बिखरे हैं सब... पर जुड़े एक डोर से।
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs sm:text-sm font-devanagari text-[#E2D2BC]"
        >
          (किसी भी सदस्य के बिंदु पर स्पर्श करें 🌟)
        </motion.p>
      </div>

      {/* Constellation Canvas / Nodes Map */}
      <div className="relative z-10 w-full max-w-3xl h-[420px] sm:h-[480px] my-auto">
        {/* SVG Connecting Golden Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C89B3C" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FDE68A" stopOpacity="1" />
              <stop offset="100%" stopColor="#C89B3C" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {linesDrawn && (
            <>
              {/* Lines linking center elders to children, siblings and babies */}
              <motion.line
                x1="50%"
                y1="20%"
                x2="25%"
                y2="42%"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeDasharray="4,4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1.2 }}
              />
              <motion.line
                x1="50%"
                y1="20%"
                x2="75%"
                y2="42%"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeDasharray="4,4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              />
              <motion.line
                x1="25%"
                y1="42%"
                x2="20%"
                y2="72%"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeDasharray="4,4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              />
              <motion.line
                x1="25%"
                y1="42%"
                x2="50%"
                y2="65%"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeDasharray="4,4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
              <motion.line
                x1="75%"
                y1="42%"
                x2="50%"
                y2="65%"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeDasharray="4,4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1.2, delay: 0.6 }}
              />
              <motion.line
                x1="75%"
                y1="42%"
                x2="80%"
                y2="74%"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeDasharray="4,4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1.2, delay: 0.7 }}
              />
              <motion.line
                x1="20%"
                y1="72%"
                x2="50%"
                y2="65%"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                strokeDasharray="3,3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
              <motion.line
                x1="50%"
                y1="65%"
                x2="80%"
                y2="74%"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                strokeDasharray="3,3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.2, delay: 0.9 }}
              />
            </>
          )}
        </svg>

        {/* Nodes (Family Members) */}
        {members.map((member, idx) => (
          <div
            key={member.id}
            style={{
              position: 'absolute',
              top: `${member.y}%`,
              left: `${member.x}%`,
              transform: 'translate(-50%, -50%)',
            }}
            className="group"
          >
            {/* Pulsing Star Beacon */}
            <motion.button
              onClick={() => setActiveMember(member)}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{ delay: 0.6 + idx * 0.15 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex flex-col items-center cursor-pointer focus:outline-none"
            >
              {/* Outer Golden Halo */}
              <span className="absolute -inset-2 rounded-full bg-[#C89B3C]/30 animate-ping" />
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#FDE68A] blur-xs opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Photo Node Avatar */}
              <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-full border-2 border-[#FDE68A] shadow-xl overflow-hidden bg-[#1E0F0A] flex items-center justify-center">
                {photosRevealed ? (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <Sparkles className="w-5 h-5 text-[#FDE68A] animate-spin" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Node Label Below */}
              <div className="mt-1.5 px-2 py-0.5 rounded-md bg-[#1B0B06]/90 border border-[#C89B3C]/60 text-[11px] sm:text-xs font-serif font-bold text-[#FFF5DE] whitespace-nowrap shadow-md group-hover:border-[#FDE68A] transition-colors">
                {member.name}
              </div>
            </motion.button>
          </div>
        ))}
      </div>

      {/* Enlarged Photo Spotlight Modal */}
      <AnimatePresence>
        {activeMember && (
          <motion.div
            key="constellation-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0503]/85 backdrop-blur-md"
            onClick={() => setActiveMember(null)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm sm:max-w-md bg-[#FAF5EB] rounded-2xl p-5 sm:p-6 shadow-2xl border-2 border-[#C89B3C] text-center text-[#3D2C24]"
            >
              <button
                onClick={() => setActiveMember(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-[#EFE4D2] hover:bg-[#DFCDB4] text-[#633A22] transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden shadow-inner border border-[#D8C4A7] mb-4">
                <img
                  src={activeMember.imageUrl}
                  alt={activeMember.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-serif font-bold px-2.5 py-0.5 rounded-full bg-[#801B2B] text-[#FFF5DE] inline-block">
                  {activeMember.role}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#801B2B]">
                  {activeMember.name}
                </h3>
                <p className="text-base sm:text-lg font-devanagari font-semibold text-[#5A3825] flex items-center justify-center gap-1.5 pt-1">
                  <span>"{activeMember.caption}"</span>
                </p>
              </div>

              <button
                onClick={() => setActiveMember(null)}
                className="mt-5 w-full py-2.5 bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] font-serif font-bold text-sm sm:text-base rounded-xl transition cursor-pointer"
              >
                बंद करें
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Navigation */}
      <div className="relative z-10 pb-2">
        <button
          onClick={onNext}
          className="group px-8 py-3.5 bg-gradient-to-r from-[#801B2B] via-[#9B2236] to-[#801B2B] hover:from-[#9B2236] hover:to-[#B32B42] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-[0_0_20px_rgba(200,155,60,0.4)] flex items-center gap-3 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>एल्बम खोलें</span>
          <ArrowRight className="w-5 h-5 text-[#FDE68A] group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
