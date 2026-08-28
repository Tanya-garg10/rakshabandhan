import React from 'react';
import { motion } from 'motion/react';

export const TraditionalRakhiSvg: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 180 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
        aria-label="पवित्र रक्षा सूत्र"
      >
        <defs>
          <radialGradient id="goldGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF1B8" />
            <stop offset="45%" stopColor="#E2A93B" />
            <stop offset="90%" stopColor="#9E6B15" />
            <stop offset="100%" stopColor="#684205" />
          </radialGradient>
          <radialGradient id="rubyGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F87171" />
            <stop offset="40%" stopColor="#B91C1C" />
            <stop offset="85%" stopColor="#7F1D1D" />
            <stop offset="100%" stopColor="#450A0A" />
          </radialGradient>
          <radialGradient id="pearlGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#E5E5E5" />
            <stop offset="100%" stopColor="#A3A3A3" />
          </radialGradient>
          <linearGradient id="threadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="25%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#DC2626" />
            <stop offset="75%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
        </defs>

        {/* Left & Right Mauli Thread / Kalawa */}
        <path
          d="M 5 100 Q 40 85 80 100 T 120 100 Q 160 115 195 100"
          stroke="url(#threadGrad)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 5 97 Q 40 110 80 97 T 120 97 Q 160 85 195 97"
          stroke="#EAB308"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4 3"
        />

        {/* Outer Golden Petals / Sunburst Mandala */}
        <g transform="translate(100, 100)">
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <g key={`rakhi-petal-${i}`} transform={`rotate(${angle})`}>
                <path
                  d="M 0 -48 C 5 -42, 6 -32, 0 -28 C -6 -32, -5 -42, 0 -48 Z"
                  fill="url(#goldGrad)"
                />
                <circle cx="0" cy="-44" r="2.5" fill="url(#pearlGrad)" />
              </g>
            );
          })}

          {/* Golden Ring of Pearls */}
          <circle cx="0" cy="0" r="32" stroke="url(#goldGrad)" strokeWidth="3" fill="none" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 360) / 12;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * 32;
            const y = Math.sin(rad) * 32;
            return (
              <circle key={`rakhi-pearl-${i}`} cx={x} cy={y} r="3" fill="url(#pearlGrad)" stroke="#B45309" strokeWidth="0.5" />
            );
          })}

          {/* Inner Maroon Medallion */}
          <circle cx="0" cy="0" r="26" fill="url(#rubyGrad)" stroke="#E2A93B" strokeWidth="2" />

          {/* Sacred Golden Floral Core */}
          <circle cx="0" cy="0" r="14" fill="url(#goldGrad)" />
          <circle cx="0" cy="0" r="6" fill="#881337" />
          <circle cx="0" cy="2.5" r="2.5" fill="#FFFBEB" />

          {/* Subtle Kundan Gems */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 360) / 8;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * 19;
            const y = Math.sin(rad) * 19;
            return (
              <circle key={`rakhi-gem-${i}`} cx={x} cy={y} r="2" fill="#FEF08A" />
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export const VintageCornerMount: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br' }> = ({ position }) => {
  const classes = {
    tl: 'top-0 left-0 border-t-2 border-l-2',
    tr: 'top-0 right-0 border-t-2 border-r-2',
    bl: 'bottom-0 left-0 border-b-2 border-l-2',
    br: 'bottom-0 right-0 border-b-2 border-r-2',
  }[position];

  return (
    <div
      className={`absolute w-7 h-7 ${classes} border-[#A17942] z-20 pointer-events-none opacity-85 transition-opacity`}
      style={{
        clipPath:
          position === 'tl'
            ? 'polygon(0 0, 100% 0, 0 100%)'
            : position === 'tr'
            ? 'polygon(0 0, 100% 0, 100% 100%)'
            : position === 'bl'
            ? 'polygon(0 0, 0 100%, 100% 100%)'
            : 'polygon(100% 0, 100% 100%, 0 100%)',
        backgroundColor: '#CBB288',
      }}
    />
  );
};

export const FiligreeDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#C89B3C] to-[#801B2B]/40" />
      <div className="flex items-center gap-1.5 text-[#801B2B]">
        <span className="text-[#C89B3C] text-sm">✦</span>
        <span className="text-base font-serif text-[#801B2B]">❖</span>
        <span className="text-[#C89B3C] text-sm">✦</span>
      </div>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-l from-transparent via-[#C89B3C] to-[#801B2B]/40" />
    </div>
  );
};

export const GoldenShimmerDust: React.FC<{ count?: number }> = ({ count = 16 }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={`shimmer-${i}`}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.75, 0.15],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: (i * 0.3) % 3,
            ease: 'easeInOut',
          }}
          style={{
            top: `${(i * 17) % 95}%`,
            left: `${(i * 21) % 95}%`,
          }}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#FDE68A] shadow-[0_0_8px_#FDE68A]"
        />
      ))}
    </div>
  );
};

export const OrnamentalFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative p-3 rounded-2xl border-2 border-[#C89B3C] bg-[#FAF5EB] shadow-xl ${className}`}>
      <VintageCornerMount position="tl" />
      <VintageCornerMount position="tr" />
      <VintageCornerMount position="bl" />
      <VintageCornerMount position="br" />
      {children}
    </div>
  );
};

export const CornerFlourish: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute w-6 h-6 text-[#C89B3C] pointer-events-none opacity-75 ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 22 V8 C2 4.686 4.686 2 8 2 H22" />
        <path d="M6 18 V10 C6 7.79 7.79 6 10 6 H18" strokeDasharray="2 2" />
        <circle cx="5" cy="5" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
};

export const AuspiciousKalashSvg: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M50 20 C42 20 40 32 40 36 L60 36 C60 32 58 20 50 20 Z" fill="#C89B3C" />
      <circle cx="50" cy="18" r="8" fill="#801B2B" stroke="#E2A93B" strokeWidth="2" />
      <path d="M36 36 Q30 50 34 70 Q38 85 50 85 Q62 85 66 70 Q70 50 64 36 Z" fill="#A8752B" stroke="#684205" strokeWidth="2" />
      <path d="M40 50 L60 50 M37 62 L63 62" stroke="#FEF08A" strokeWidth="2" strokeDasharray="3 2" />
      <circle cx="50" cy="56" r="3" fill="#801B2B" />
    </svg>
  );
};


