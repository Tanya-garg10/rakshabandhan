import React, { useState, useRef } from 'react';
import { MemoryItem } from '../types';
import { X, Upload, Check, Image as ImageIcon, RotateCcw } from 'lucide-react';

interface PhotoEditModalProps {
  memory: MemoryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: MemoryItem) => void;
}

export const PhotoEditModal: React.FC<PhotoEditModalProps> = ({
  memory,
  isOpen,
  onClose,
  onSave,
}) => {
  if (!isOpen || !memory) return null;

  const [title, setTitle] = useState(memory.title);
  const [caption, setCaption] = useState(memory.caption);
  const [year, setYear] = useState(memory.year || '');
  const [note, setNote] = useState(memory.note || '');
  const [imageUrl, setImageUrl] = useState(memory.url || memory.imageUrl || '');
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
    const finalUrl = imageUrl.trim() || memory.url || memory.imageUrl || '';
    onSave({
      ...memory,
      title: title.trim() || memory.title,
      caption: caption.trim() || memory.caption,
      year: year.trim(),
      note: note.trim(),
      url: finalUrl,
      imageUrl: finalUrl,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF5EB] rounded-2xl max-w-lg w-full p-6 shadow-2xl border-2 border-[#C89B3C] max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#DFCBB0]">
          <div>
            <h3 className="text-xl font-bold font-heading text-[#801B2B]">
              तस्वीर एवं स्मृति संपादित करें
            </h3>
            <p className="text-xs sm:text-sm text-[#735541]">
              अपनी असली पारिवारिक तस्वीर जोड़ें व संस्मरण लिखें
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#735541] hover:text-[#801B2B] rounded-lg hover:bg-[#EEDBC3] transition"
            aria-label="बंद करें"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-4 pt-4">
          
          {/* Current Photo Preview */}
          <div className="relative rounded-xl overflow-hidden border-2 border-[#CBB288] bg-[#EBE0CD] aspect-4/3 flex items-center justify-center shadow-inner">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="text-center p-6 text-[#7A583F]">
                <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">कोई तस्वीर चयनित नहीं है</p>
              </div>
            )}
          </div>

          {/* Upload Button */}
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-3 px-4 bg-[#801B2B] text-[#FFF6E5] rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#671421] transition shadow-sm border border-[#C89B3C]"
            >
              <Upload className="w-5 h-5" />
              <span>डिवाइस / फोन से असली तस्वीर अपलोड करें</span>
            </button>
          </div>

          {/* Or Photo URL input */}
          <div>
            <label className="block text-xs font-semibold text-[#5C4232] mb-1">
              या इंटरनेट इमेज लिंक (Image URL) दर्ज करें:
            </label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/photo.jpg"
              className="w-full px-3 py-2 text-sm bg-[#FFFDF9] border border-[#D5C2A5] rounded-lg text-[#3E291D] focus:ring-2 focus:ring-[#801B2B] focus:outline-none"
            />
          </div>

          {/* Title input */}
          <div>
            <label className="block text-sm font-semibold text-[#5C4232] mb-1">
              शीर्षक (Title):
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 text-base font-semibold bg-[#FFFDF9] border border-[#D5C2A5] rounded-lg text-[#3E291D] focus:ring-2 focus:ring-[#801B2B] focus:outline-none"
            />
          </div>

          {/* Year input */}
          <div>
            <label className="block text-sm font-semibold text-[#5C4232] mb-1">
              वर्ष / समय (उदा. 1968, 1975):
            </label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="उदा. 1970"
              className="w-full px-3 py-2 text-sm bg-[#FFFDF9] border border-[#D5C2A5] rounded-lg text-[#3E291D] focus:ring-2 focus:ring-[#801B2B] focus:outline-none"
            />
          </div>

          {/* Caption input */}
          <div>
            <label className="block text-sm font-semibold text-[#5C4232] mb-1">
              याद का विवरण / कैप्शन:
            </label>
            <textarea
              rows={2}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-[#FFFDF9] border border-[#D5C2A5] rounded-lg text-[#3E291D] focus:ring-2 focus:ring-[#801B2B] focus:outline-none resize-none"
            />
          </div>

          {/* Special note input */}
          <div>
            <label className="block text-sm font-semibold text-[#5C4232] mb-1">
              विशेष स्मृति नोट:
            </label>
            <textarea
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="उस दिन की कोई खास बात..."
              className="w-full px-3 py-2 text-sm bg-[#FFFDF9] border border-[#D5C2A5] rounded-lg text-[#3E291D] focus:ring-2 focus:ring-[#801B2B] focus:outline-none resize-none"
            />
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-6 border-t border-[#DFCBB0] mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-[#CBB288] text-[#5C4232] font-semibold hover:bg-[#EFE2CF] transition"
          >
            रद्द करें
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2.5 rounded-xl bg-[#801B2B] text-[#FFF9EF] font-bold hover:bg-[#671421] transition flex items-center gap-2 shadow-md border border-[#C89B3C]"
          >
            <Check className="w-5 h-5" />
            <span>सहेजें (Save)</span>
          </button>
        </div>

      </div>
    </div>
  );
};
