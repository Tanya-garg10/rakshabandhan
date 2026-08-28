import React, { useState } from 'react';
import { BlessingItem } from '../types';
import { FiligreeDivider, AuspiciousKalashSvg } from './Ornaments';
import { Heart, Plus, Sparkles, Send, User, MessageCircle } from 'lucide-react';

interface BlessingsSectionProps {
  blessings: BlessingItem[];
  onAddBlessing: (item: BlessingItem) => void;
  fontSizeClass: string;
}

export const BlessingsSection: React.FC<BlessingsSectionProps> = ({
  blessings,
  onAddBlessing,
  fontSizeClass,
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !message.trim()) return;

    const newBlessing: BlessingItem = {
      id: `bless-${Date.now()}`,
      senderName: senderName.trim(),
      relation: relation.trim() || 'शुभचिंतक / परिवार',
      message: message.trim(),
      date: 'रक्षाबंधन 2026',
    };

    onAddBlessing(newBlessing);
    setSenderName('');
    setRelation('');
    setMessage('');
    setShowAddForm(false);
  };

  return (
    <section id="blessings" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF5EB] relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EFE0CB] text-[#7A4020] text-sm font-semibold mb-3 border border-[#D5BF9E]">
            <Heart className="w-4 h-4 text-[#801B2B]" />
            <span>परिवार के मंगल भाव</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#671421] tracking-tight">
            ढेरों शुभकामनाएँ और आशीर्वाद
          </h2>

          <FiligreeDivider className="my-4" />

          <p className={`text-[#5B4333] font-medium leading-relaxed ${fontSizeClass === 'text-xl' ? 'text-2xl' : fontSizeClass === 'text-lg' ? 'text-xl' : 'text-lg'}`}>
            अपनों की तरफ से स्नेहिल मंगलकामनाएँ, जो जीवन के हर सफर में संबल और सुख प्रदान करती हैं।
          </p>
        </div>

        {/* Blessings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {blessings.map((item) => (
            <div
              key={item.id}
              className="bg-aged-parchment p-6 rounded-2xl border-2 border-[#DFCBB0] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8D9C2]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-[#801B2B] text-[#FFF7ED] flex items-center justify-center font-bold text-sm border border-[#C89B3C]">
                      {item.senderName[0] || 'आ'}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#671421] text-base sm:text-lg">
                        {item.senderName}
                      </h4>
                      <span className="text-xs text-[#8C6D58] font-medium block">
                        {item.relation}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 bg-[#F2E5D2] rounded text-[#7D5C45] font-serif">
                    {item.date}
                  </span>
                </div>

                <p className="text-base sm:text-lg text-[#473428] font-medium leading-relaxed font-devanagari italic">
                  "{item.message}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8D9C2] flex items-center justify-end text-xs text-[#9B775F] gap-1">
                <span>शुभ आशीर्वाद</span>
                <span className="text-[#801B2B]">❤️</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action to Add New Blessing */}
        <div className="max-w-2xl mx-auto text-center">
          {!showAddForm ? (
            <button
              onClick={() => setShowAddForm(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#801B2B] hover:bg-[#671421] text-[#FFF9EF] font-bold text-base sm:text-lg rounded-xl shadow-md border border-[#C89B3C] transition cursor-pointer"
            >
              <Plus className="w-5 h-5 text-[#FDE68A]" />
              <span>परिवार की ओर से शुभकामना / आशीर्वाद संदेश जोड़ें</span>
            </button>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-aged-parchment p-6 sm:p-8 rounded-3xl border-2 border-[#C89B3C] shadow-xl text-left space-y-4 animate-fadeIn"
            >
              <div className="flex items-center justify-between border-b border-[#DFCBB0] pb-3">
                <h3 className="text-xl font-bold font-heading text-[#801B2B] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#C89B3C]" />
                  <span>अपना आशीर्वाद संदेश लिखें</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="text-sm font-semibold text-[#8C6D58] hover:text-[#801B2B]"
                >
                  रद्द करें
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#5B3E2B] mb-1">
                    आपका नाम:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="उदा. रमेश, सुमन, नाती-पोते"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D5C2A5] rounded-lg text-base text-[#3E291D] focus:ring-2 focus:ring-[#801B2B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#5B3E2B] mb-1">
                    रिश्ता / संबंध:
                  </label>
                  <input
                    type="text"
                    placeholder="उदा. छोटा भाई, भांजा, बेटी"
                    value={relation}
                    onChange={(e) => setRelation(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D5C2A5] rounded-lg text-base text-[#3E291D] focus:ring-2 focus:ring-[#801B2B] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#5B3E2B] mb-1">
                  शुभकामना व आशीर्वाद संदेश:
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="भैया-दीदी के लिए अपने दिल के शुभ भाव यहाँ लिखें..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#D5C2A5] rounded-lg text-base text-[#3E291D] focus:ring-2 focus:ring-[#801B2B] focus:outline-none resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 border border-[#CBB288] text-[#5C4232] font-semibold rounded-lg hover:bg-[#EFE2CF]"
                >
                  रद्द करें
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#801B2B] text-[#FFF9EF] font-bold rounded-lg hover:bg-[#671421] shadow-md border border-[#C89B3C] flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>संदेश शामिल करें</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
