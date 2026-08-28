import React, { useState } from 'react';
import { TimelineStage } from '../types';
import { FiligreeDivider } from './Ornaments';
import { Sparkles, Heart, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';

interface TimelineSectionProps {
  stages: TimelineStage[];
  fontSizeClass: string;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ stages, fontSizeClass }) => {
  const [activeStageId, setActiveStageId] = useState<string>(stages[0]?.id || 'stage-1');

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF6EE] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EFE3CF] text-[#7A4020] text-sm font-semibold mb-3 border border-[#D5BF9E]">
            <Clock className="w-4 h-4 text-[#C89B3C]" />
            <span>जीवन के चार अनुपम अध्याय</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#671421] tracking-tight">
            बचपन → जवानी → परिवार → आज
          </h2>

          <FiligreeDivider className="my-4" />

          <p className={`text-[#5B4333] font-medium leading-relaxed ${fontSizeClass === 'text-xl' ? 'text-2xl' : fontSizeClass === 'text-lg' ? 'text-xl' : 'text-lg'}`}>
            दशकों का सफर, जीवन के अनगिनत पड़ाव... पर भाई-बहन के प्रेम का वह पहला धागा आज भी उतना ही सच्चा और मजबूत है।
          </p>
        </div>

        {/* Senior-Friendly Interactive Stage Pills / Breadcrumbs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {stages.map((stage, idx) => {
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 border-2 cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-[#801B2B] ${
                  isActive
                    ? 'bg-[#801B2B] text-[#FFF7ED] border-[#C89B3C] shadow-md scale-105'
                    : 'bg-[#F2E7D5] text-[#553C2B] border-[#D5C3A5] hover:bg-[#EBDDC8]'
                }`}
                aria-pressed={isActive}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${
                  isActive ? 'bg-[#C89B3C] text-[#4A1D05]' : 'bg-[#DECEB6] text-[#614532]'
                }`}>
                  {idx + 1}
                </span>
                <span>{stage.stageName}</span>
                {idx < stages.length - 1 && (
                  <span className="hidden md:inline text-xs opacity-50 ml-1">→</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Active Stage Highlight Box */}
        <div className="bg-aged-parchment rounded-3xl p-6 sm:p-10 border-2 border-[#D8C5A8] shadow-lg relative overflow-hidden mb-12">
          
          {/* Subtle Corner Ornamentation */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#EAD9C0] to-transparent rounded-bl-full pointer-events-none opacity-40" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 bg-[#801B2B] text-[#FFF6E5] text-sm font-bold rounded-lg border border-[#C89B3C]">
                  {activeStage.period}
                </span>
                <span className="text-xl sm:text-2xl font-bold font-heading text-[#801B2B]">
                  {activeStage.stageName} : {activeStage.subtitle}
                </span>
              </div>

              <p className="text-lg sm:text-xl text-[#3D2C24] font-medium leading-relaxed font-devanagari">
                {activeStage.message}
              </p>

              {/* Heartfelt Reflection Card */}
              <div className="p-4 sm:p-5 bg-[#F6EDE0] rounded-2xl border-l-4 border-[#801B2B] shadow-inner mt-4">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[#801B2B] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-[#801B2B] block mb-1">
                      हृदय का अनुभव
                    </span>
                    <p className="text-base sm:text-lg text-[#523A2A] font-semibold italic">
                      "{activeStage.reflection}"
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-sm text-[#7D5C45] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C89B3C]" />
                <span>स्मृति दृश्य: {activeStage.imageHint}</span>
              </div>
            </div>

            {/* Right Summary Graphic Column */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#F2E5D2] rounded-2xl border border-[#D5C2A4] text-center">
              <div className="w-20 h-20 rounded-full bg-[#801B2B] flex items-center justify-center text-[#FDFBF7] mb-4 border-2 border-[#C89B3C] shadow-md">
                <span className="text-3xl font-heading font-bold">{activeStage.stageName[0]}</span>
              </div>
              <h4 className="text-lg font-bold text-[#671421] mb-1">
                {activeStage.stageName} का पड़ाव
              </h4>
              <p className="text-xs sm:text-sm text-[#70523E]">
                समय बदला, परिस्थितियाँ बदलीं, पर रक्षा का सूत्र सदा अमर रहा।
              </p>
            </div>

          </div>
        </div>

        {/* Complete 4-Step Vertical/Horizontal Stepper Overview for Seniors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, idx) => (
            <div
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                stage.id === activeStageId
                  ? 'bg-[#F4E9D8] border-[#801B2B] shadow-md'
                  : 'bg-[#FAF5EB] border-[#DFCBB0] hover:border-[#C89B3C]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold font-heading text-[#801B2B]">
                  0{idx + 1}.
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#E8D9C2] text-[#614532]">
                  {stage.period}
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#4A3528] mb-1">
                {stage.stageName}
              </h4>
              <p className="text-xs text-[#7A583F] line-clamp-2">
                {stage.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
