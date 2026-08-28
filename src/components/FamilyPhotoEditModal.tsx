import React, { useState, useRef } from 'react';
import { X, Upload, Check, Image as ImageIcon, RotateCcw, Sparkles } from 'lucide-react';

interface FamilyPhotoEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  initialUrl: string;
  onSaveUrl: (newUrl: string) => void;
}

export const FamilyPhotoEditModal: React.FC<FamilyPhotoEditModalProps> = ({
  isOpen,
  onClose,
  title,
  initialUrl,
  onSaveUrl,
}) => {
  if (!isOpen) return null;

  const [imageUrl, setImageUrl] = useState(initialUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setImageUrl(uploadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (imageUrl.trim()) {
      onSaveUrl(imageUrl.trim());
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      <div className="bg-[#FAF5EB] rounded-3xl max-w-md w-full p-6 shadow-2xl border-3 border-[#C89B3C] max-h-[90vh] overflow-y-auto text-[#3D2C24]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#DFCBB0]">
          <div>
            <h3 className="text-xl font-heading font-bold text-[#801B2B] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C89B3C]" />
              <span>{title}</span>
            </h3>
            <p className="text-xs text-[#6A4E3D] font-serif">
              अपनी असली पारिवारिक तस्वीर अपलोड या बदलें
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#EFE4D2] hover:bg-[#DFCDB4] text-[#633A22] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Preview */}
        <div className="my-4">
          <label className="block text-xs font-serif font-bold text-[#801B2B] mb-1.5">
            तस्वीर का पूर्वावलोकन
          </label>
          <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-[#24120A] border-2 border-[#D8C4A7] shadow-inner flex items-center justify-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <ImageIcon className="w-12 h-12 text-[#C89B3C]/50" />
            )}
          </div>
        </div>

        {/* Upload Buttons */}
        <div className="space-y-3">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            className="hidden"
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-3 bg-[#F2E5D0] hover:bg-[#E8D6BC] text-[#801B2B] font-serif font-bold text-sm rounded-xl border border-[#C89B3C] shadow-sm flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <Upload className="w-4 h-4 text-[#801B2B]" />
            <span>डिवाइस से फ़ोटो चुनें</span>
          </button>

          <div>
            <label className="block text-xs font-serif font-bold text-[#6A4E3D] mb-1">
              या इमेज URL पेस्ट करें:
            </label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/family.jpg"
              className="w-full px-3 py-2 bg-white rounded-xl border border-[#DFCBB0] text-xs font-sans focus:outline-none focus:border-[#801B2B]"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 pt-3 border-t border-[#DFCBB0] flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#EFE4D2] hover:bg-[#DFCDB4] text-[#633A22] font-serif font-semibold text-xs rounded-xl cursor-pointer"
          >
            रद्द करें
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2 bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] font-serif font-bold text-xs sm:text-sm rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>सुरक्षित करें</span>
          </button>
        </div>
      </div>
    </div>
  );
};
