import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, GitFork, Users, Heart, Sparkles } from 'lucide-react';

interface Screen15Props {
  onNext: () => void;
}

const TREE_NODES = [
  {
    id: 'root',
    title: 'हम (Roots)',
    role: 'भाई और बहन',
    memory: 'जहाँ से इस पवित्र रिश्ते और परिवार की नींव शुरू हुई।',
    icon: Heart,
    color: '#801B2B',
  },
  {
    id: 'spouses',
    title: 'जीवनसाथी (Partners)',
    role: 'भाभी व जीजाजी',
    memory: 'जिन्होंने परिवार में आकर रिश्तों को और अधिक प्यार और संबल दिया।',
    icon: Users,
    color: '#9E2338',
  },
  {
    id: 'children',
    title: 'बच्चे (Next Generation)',
    role: 'बेटा, बेटी, भतीजे, भांजे',
    memory: 'जिनकी किलकारियों ने घर के आँगन को हमेशा खुशियों से भर दिया।',
    icon: Sparkles,
    color: '#B45309',
  },
  {
    id: 'grand',
    title: 'अगली पीढ़ी (Grandchildren)',
    role: 'पोते-पोतियाँ व नाती-नातिन',
    memory: 'परिवार की वो नई कोंपलें, जो आज भी राखी बांधने की परंपरा को आगे बढ़ा रही हैं।',
    icon: Heart,
    color: '#047857',
  },
];

export const Screen15FamilyTree: React.FC<Screen15Props> = ({ onNext }) => {
  const [selectedNode, setSelectedNode] = useState(TREE_NODES[0]);

  return (
    <div className="relative min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center justify-between text-center px-4 py-8 bg-[#1A0F0A] text-[#FAF5EB] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
      {/* Background Subtle Tree Branches Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(200,155,60,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 space-y-1 pt-2 max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C89B3C] font-semibold">
          <GitFork className="w-4 h-4 text-[#FDE68A]" />
          <span>पारिवारिक वटवृक्ष • The Family Tree</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#FFF5DE]">
          "एक रिश्ता कभी सिर्फ़ दो लोगों का नहीं रहता..."
        </h2>
        <p className="text-xs text-[#D8C4AA] font-devanagari">
          शाखाओं पर क्लिक करें और पीढ़ियों का विस्तार देखें
        </p>
      </div>

      {/* Interactive Family Tree Branch Nodes */}
      <div className="relative z-10 max-w-3xl w-full my-auto px-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {TREE_NODES.map((node) => {
            const isSelected = selectedNode.id === node.id;
            const Icon = node.icon;

            return (
              <motion.button
                key={node.id}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedNode(node)}
                className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center text-center relative ${
                  isSelected
                    ? 'bg-[#FAF5EB] text-[#3D2418] border-[#C89B3C] shadow-xl ring-2 ring-[#C89B3C]/50'
                    : 'bg-[#29170E] text-[#D8C4AA] border-[#593825] hover:bg-[#382015]'
                }`}
              >
                <div
                  className="p-2.5 rounded-full mb-2 shadow-md"
                  style={{ backgroundColor: node.color }}
                >
                  <Icon className="w-5 h-5 text-[#FFF9EF]" />
                </div>
                <span className={`text-xs sm:text-sm font-bold font-heading ${
                  isSelected ? 'text-[#801B2B]' : 'text-[#FDE68A]'
                }`}>
                  {node.title}
                </span>
                <span className="text-[11px] font-devanagari opacity-80 mt-0.5">
                  {node.role}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Node Reflection Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedNode.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-[#24130B]/90 backdrop-blur-md p-5 rounded-2xl border border-[#C89B3C] shadow-lg max-w-xl mx-auto"
          >
            <span className="text-xs font-serif text-[#C89B3C] font-bold uppercase tracking-wider block mb-1">
              {selectedNode.title} • {selectedNode.role}
            </span>
            <p className="text-sm sm:text-base font-devanagari text-[#FFF5DE] leading-relaxed">
              "{selectedNode.memory}"
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Button */}
      <div className="relative z-10 pt-4 pb-1">
        <button
          onClick={onNext}
          className="px-8 py-3.5 bg-[#801B2B] hover:bg-[#9B2236] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg rounded-2xl border-2 border-[#C89B3C] shadow-lg flex items-center gap-3 transition cursor-pointer"
        >
          <span>दुआओं के सितारे देखें →</span>
        </button>
      </div>
    </div>
  );
};
