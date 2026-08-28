import React, { useState, useRef } from 'react';
import { FamilyPhotoData } from '../types';
import { VintageCornerMount, FiligreeDivider } from './Ornaments';
import { Camera, Heart, Sparkles, Upload, Edit, Check, ZoomIn, X } from 'lucide-react';

interface FamilyPhotoSectionProps {
  familyPhoto: FamilyPhotoData;
  onUpdateFamilyPhoto: (updated: FamilyPhotoData) => void;
  fontSizeClass: string;
}

export const FamilyPhotoSection: React.FC<FamilyPhotoSectionProps> = ({
  familyPhoto,
  onUpdateFamilyPhoto,
  fontSizeClass,
}) => {
  const [data, setData] = useState<FamilyPhotoData>(familyPhoto);
  const [isEditing, setIsEditing] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          const updated = { ...data, imageUrl: ev.target.result as string };
          setData(updated);
          onUpdateFamilyPhoto(updated);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdateFamilyPhoto(data);
  };

  return (
    <section id="family" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F3ECE0] relative border-t border-[#DFD1BD]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EADAC2] text-[#7A4020] text-sm font-semibold mb-3 border border-[#D5BF9E]">
            <Sparkles className="w-4 h-4 text-[#C89B3C]" />
            <span>पारिवारिक धरोहर</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#671421] tracking-tight">
            {data.caption}
          </h2>

          <FiligreeDivider className="my-4" />

          <p className={`text-[#5B4333] font-medium leading-relaxed ${fontSizeClass === 'text-xl' ? 'text-2xl' : fontSizeClass === 'text-lg' ? 'text-xl' : 'text-lg'}`}>
            एक ऐसा फ्रेम जिसमें पूरा परिवार, बीते सालों की खुशियां और आने वाली पीढ़ियों के संस्कार संजोए गए हैं।
          </p>
        </div>

        {/* Large Heirloom Framed Photo Container */}
        <div className="relative p-4 sm:p-8 bg-[#463124] rounded-3xl border-8 border-[#C89B3C] shadow-2xl overflow-hidden">
          
          {/* Inner Golden Inlay & Bevel */}
          <div className="relative p-2 sm:p-4 bg-[#F5ECDC] rounded-2xl border-4 border-[#801B2B] shadow-inner">
            
            {/* Corner Filigrees */}
            <VintageCornerMount position="tl" />
            <VintageCornerMount position="tr" />
            <VintageCornerMount position="bl" />
            <VintageCornerMount position="br" />

            {/* Central Photograph */}
            <div className="relative aspect-16/10 sm:aspect-16/9 rounded-xl overflow-hidden bg-[#241710] shadow-md group">
              <img
                src={data.imageUrl}
                alt="पारिवारिक तस्वीर"
                className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.98] transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />

              {/* Hover Buttons */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-4">
                <button
                  onClick={() => setIsZoomed(true)}
                  className="px-4 py-2.5 bg-white text-[#801B2B] rounded-xl font-bold flex items-center gap-2 shadow-lg hover:bg-[#FFF9EF] transition"
                >
                  <ZoomIn className="w-5 h-5" />
                  <span>बड़ी तस्वीर देखें</span>
                </button>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2.5 bg-[#801B2B] text-white rounded-xl font-bold flex items-center gap-2 shadow-lg hover:bg-[#671421] transition"
                >
                  <Camera className="w-5 h-5" />
                  <span>तस्वीर बदलें</span>
                </button>
              </div>

              {/* Year Stamp */}
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/75 text-[#FDFBF7] rounded-md text-xs sm:text-sm font-serif border border-white/20">
                {data.year}
              </div>
            </div>

            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />

            {/* Frame Caption Details below image */}
            <div className="mt-6 p-4 sm:p-6 bg-[#FAF5EB] rounded-xl border border-[#D5C2A4] text-center">
              {isEditing ? (
                <div className="space-y-3 text-left">
                  <div>
                    <label className="block text-xs font-bold text-[#5B3E2B] mb-1">मुख्य कैप्शन:</label>
                    <input
                      type="text"
                      value={data.caption}
                      onChange={(e) => setData({ ...data, caption: e.target.value })}
                      className="w-full p-2 bg-white border border-[#C89B3C] rounded-lg font-bold text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5B3E2B] mb-1">स्मृति संदेश / अनमोल विचार:</label>
                    <textarea
                      rows={2}
                      value={data.quote}
                      onChange={(e) => setData({ ...data, quote: e.target.value })}
                      className="w-full p-2 bg-white border border-[#C89B3C] rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5B3E2B] mb-1">परिवार के सदस्य / विवरण:</label>
                    <input
                      type="text"
                      value={data.familyMembers}
                      onChange={(e) => setData({ ...data, familyMembers: e.target.value })}
                      className="w-full p-2 bg-white border border-[#C89B3C] rounded-lg text-sm"
                    />
                  </div>
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={handleSave}
                      className="px-5 py-2 bg-[#801B2B] text-white font-bold rounded-lg flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      <span>सहेजें (Save)</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-xl sm:text-2xl font-bold font-heading text-[#801B2B] mb-2">
                    {data.caption}
                  </p>
                  <p className="text-base sm:text-lg text-[#553E2E] font-medium italic max-w-2xl mx-auto leading-relaxed">
                    "{data.quote}"
                  </p>
                  <div className="mt-3 pt-3 border-t border-[#DFCEB5] flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#7D5E49]">
                    <span>{data.familyMembers}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="text-[#801B2B] font-bold hover:underline flex items-center gap-1"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>असली फोटो लगाएं</span>
                      </button>
                      <span>•</span>
                      <button
                        onClick={() => setIsEditing(true)}
                        className="text-[#801B2B] font-bold hover:underline flex items-center gap-1"
                      >
                        <Edit className="w-3.5 h-3.5" />
                        <span>विवरण बदलें</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

      {/* Fullscreen Photo Modal for Seniors */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-[#FAF5EB] rounded-2xl overflow-hidden border-4 border-[#C89B3C] shadow-2xl">
            <div className="flex items-center justify-between p-4 bg-[#F2E5D2] border-b border-[#DFCBB0]">
              <h3 className="text-xl font-bold font-heading text-[#801B2B]">
                {data.caption}
              </h3>
              <button
                onClick={() => setIsZoomed(false)}
                className="p-2 text-[#4E392B] hover:text-[#801B2B] rounded-lg hover:bg-[#E5D7C2]"
                aria-label="बंद करें"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-2 bg-[#221812] flex items-center justify-center">
              <img
                src={data.imageUrl}
                alt="पारिवारिक तस्वीर"
                className="max-h-[75vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
