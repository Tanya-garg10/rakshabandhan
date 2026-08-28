import React, { useState } from 'react';
import { Volume2, VolumeX, Share2, Printer, Menu, X, Type } from 'lucide-react';
import { ambientPlayer } from '../utils/audioAmbience';

interface NavbarProps {
  fontSizeLevel: number; // 0 = normal, 1 = large, 2 = extra large
  onFontSizeChange: (level: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ fontSizeLevel, onFontSizeChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  const toggleAudio = () => {
    const active = ambientPlayer.toggle();
    setIsPlaying(active);
  };

  const navLinks = [
    { label: 'गृह (Home)', href: '#hero' },
    { label: 'यादें (Memories)', href: '#memories' },
    { label: 'जीवन सफ़र (Journey)', href: '#timeline' },
    { label: 'पवित्र राखी (Rakhi)', href: '#rakhi' },
    { label: 'दिल से संदेश (Letter)', href: '#message' },
    { label: 'परिवार (Family)', href: '#family' },
    { label: 'आशीर्वाद (Blessings)', href: '#blessings' },
  ];

  const handleShare = () => {
    const text = `🌸 रक्षाबंधन की हार्दिक शुभकामनाएँ! 🌸\n\n"रिश्तों की डोर, उम्र के हर पड़ाव पर ❤️"\nकुछ रिश्ते समय के साथ पुराने नहीं होते, बल्कि और भी गहरे हो जाते हैं।\n\nहमारा डिजिटल परिवार एल्बम यहाँ देखें:\n${window.location.href}`;
    if (navigator.share) {
      navigator.share({
        title: 'रक्षाबंधन - रिश्तों की अनमोल यादें',
        text: text,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 3000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBF8F2]/95 backdrop-blur-md border-b border-[#E2D5C0] shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Header Title */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#801B2B] rounded-lg p-1">
            <div className="w-11 h-11 rounded-full bg-[#801B2B] flex items-center justify-center text-[#FDFBF7] shadow-inner border border-[#C89B3C]">
              <span className="text-xl font-heading">ॐ</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl sm:text-2xl font-bold font-heading text-[#801B2B] tracking-wide">
                रक्षाबंधन
              </span>
              <span className="text-xs sm:text-sm text-[#735747] font-medium">
                रिश्तों की अनमोल धरोहर
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="मुख्य नेविगेशन">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-base font-semibold text-[#4A3528] hover:text-[#801B2B] hover:bg-[#F2E8D7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#801B2B]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Utility Tools for Senior Accessibility */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Font Size Adjuster for Senior Readers */}
            <div className="flex items-center bg-[#F2E8D7] rounded-lg p-1 border border-[#DFD0B8] shadow-inner" title="अक्षर का आकार बदलें">
              <button
                onClick={() => onFontSizeChange(Math.max(0, fontSizeLevel - 1))}
                aria-label="अक्षर छोटे करें"
                disabled={fontSizeLevel === 0}
                className="px-2 py-1 text-xs font-bold text-[#5B3E2B] disabled:opacity-40 hover:bg-[#E5D7C2] rounded transition"
              >
                अ-
              </button>
              <span className="px-1 text-xs text-[#7A583F] font-semibold flex items-center gap-0.5">
                <Type className="w-3.5 h-3.5" />
              </span>
              <button
                onClick={() => onFontSizeChange(Math.min(2, fontSizeLevel + 1))}
                aria-label="अक्षर बड़े करें"
                disabled={fontSizeLevel === 2}
                className="px-2 py-1 text-xs font-bold text-[#5B3E2B] disabled:opacity-40 hover:bg-[#E5D7C2] rounded transition"
              >
                अ+
              </button>
            </div>

            {/* Peaceful Indian Ambient Music Toggle */}
            <button
              onClick={toggleAudio}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold border transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#801B2B] ${
                isPlaying
                  ? 'bg-[#801B2B] text-[#FFF6E5] border-[#671421]'
                  : 'bg-[#F6EFE2] text-[#5B3E2B] border-[#DFCDB4] hover:bg-[#EFE4D2]'
              }`}
              title={isPlaying ? 'संगीत बंद करें' : 'मधुर धुन सुनें'}
            >
              {isPlaying ? <Volume2 className="w-4 h-4 text-[#FDE68A]" /> : <VolumeX className="w-4 h-4 text-[#7A583F]" />}
              <span className="hidden sm:inline">{isPlaying ? 'धुन सक्रिय' : 'मधुर धुन'}</span>
            </button>

            {/* WhatsApp / Copy Share Button */}
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-[#2E7D32] hover:bg-[#1B5E20] text-white transition shadow-sm focus:outline-none focus:ring-2 focus:ring-green-800"
              title="व्हाट्सएप पर शेयर करें"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden md:inline">शुभकामना भेजें</span>
            </button>

            {/* Print Keepsake Button */}
            <button
              onClick={handlePrint}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium bg-[#F6EFE2] text-[#5B3E2B] border border-[#DFCDB4] hover:bg-[#EFE4D2] transition shadow-sm"
              title="एल्बम प्रिंट करें / सहेजें"
            >
              <Printer className="w-4 h-4 text-[#7A583F]" />
              <span>प्रिंट</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#5B3E2B] hover:bg-[#F2E8D7] focus:outline-none focus:ring-2 focus:ring-[#801B2B]"
              aria-label="मेनू खोलें"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-[#E5D7C2] bg-[#FAF5EB] rounded-b-xl shadow-lg px-2 space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-lg font-semibold text-[#4A3528] hover:text-[#801B2B] hover:bg-[#EEDFC8] transition"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#DFCEB3] flex items-center justify-between px-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 text-base font-medium text-[#5B3E2B] py-2"
              >
                <Printer className="w-5 h-5 text-[#801B2B]" />
                <span>एल्बम प्रिंट / सहेजें</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Toast Notification */}
      {shareToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#801B2B] text-[#FFF7ED] px-5 py-3 rounded-xl shadow-2xl border border-[#C89B3C] text-sm sm:text-base font-semibold transition-all">
          ✓ शुभकामना संदेश व लिंक कॉपी हो गया है!
        </div>
      )}
    </header>
  );
};
