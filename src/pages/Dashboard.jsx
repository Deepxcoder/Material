import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import V2Hero from "../components/ui/V2Hero";
import InterestSelector from "../components/ui/InterestSelector";
import InstagramFeed from "../components/ui/InstagramFeed";
import V2ResourceCard from "../components/ui/V2ResourceCard";
import V2AuthModal from "../components/ui/V2AuthModal";
import FieldOfStudyModal from "../components/ui/FieldOfStudyModal";
import NewsResourceCard from "../components/ui/NewsResourceCard";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Filter, LayoutGrid, School, Sparkles } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const { currentTheme } = useTheme();
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isFieldModalOpen, setIsFieldModalOpen] = useState(false);
  const [activeToggle, setActiveToggle] = useState('interests'); // 'interests' or 'college'
  const [hasScrolledForModal, setHasScrolledForModal] = useState(false);

  // Scroll listener for FieldOfStudyModal
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !hasScrolledForModal && !user) {
        setIsFieldModalOpen(true);
        setHasScrolledForModal(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledForModal, user]);

  const handleStart = () => {
    setIsSelectorOpen(true);
  };

  const handleSelectorClose = () => {
    setIsSelectorOpen(false);
    setIsHeroVisible(false);
  };

  const newsItems = [
    {
      category: "Computer Science",
      timestamp: "2 hours ago",
      headline: "The Future of Quantum Computing in Sustainable Systems",
      summaryPoints: [
        "AI-driven optimization for qubits reduces energy overhead by 40%.",
        "Scalable architecture patterns emerging for decentralized nodes.",
        "Integrated photonics layer eliminates thermal noise in room-temp tests."
      ],
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const architectureFeed = [
    {
      type: 'material',
      user: { name: 'Arch. Julian Vane' },
      time: 'Just Now',
      content: {
        title: 'Brutalist Library - Floor Plans & Sections',
        description: 'Detailed high-fidelity blueprints for the OMA-inspired library project. Focus on structural load integration and negative space.',
        file: { name: 'Library_Blueprints_V1.pdf', size: '18.4 MB' }
      },
      stats: { likes: 1204, comments: 88 }
    },
    {
      type: 'material',
      user: { name: 'Studio_N7' },
      time: '1 hour ago',
      content: {
        title: 'Parametric Facades: A Summary',
        description: 'A deep dive into Grasshopper scripts for responsive building envelopes. Essential for B.Arch Year 3.',
        file: { name: 'Parametric_Summary.pdf', size: '4.2 MB' }
      },
      stats: { likes: 542, comments: 45 }
    }
  ];

  return (
    <div className="bg-white dark:bg-[#0A0A0B] min-h-screen">
      <AnimatePresence>
        {isHeroVisible && (
          <motion.div 
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <V2Hero onStart={handleStart} />
          </motion.div>
        )}
      </AnimatePresence>

      <InterestSelector isOpen={isSelectorOpen} onClose={handleSelectorClose} />
      <V2AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <FieldOfStudyModal isOpen={isFieldModalOpen} onClose={() => setIsFieldModalOpen(false)} />

      {!isHeroVisible && (
        <div className="max-w-[700px] mx-auto px-4 pt-24 pb-48">
          {/* V3: Pill Toggle */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 p-1">
              <button 
                onClick={() => setActiveToggle('interests')}
                className={`flex items-center gap-2 px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeToggle === 'interests' 
                  ? 'bg-white dark:bg-white/10 text-blue-600 shadow-sm' 
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
                }`}
              >
                <LayoutGrid className="w-3 h-3" />
                My Interests
              </button>
              <button 
                onClick={() => setActiveToggle('college')}
                className={`flex items-center gap-2 px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeToggle === 'college' 
                  ? 'bg-white dark:bg-white/10 text-blue-600 shadow-sm' 
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
                }`}
              >
                <School className="w-3 h-3" />
                My College
              </button>
            </div>
          </div>

          <header className="mb-24 text-center">
            <h2 className="text-6xl font-black tracking-tighter text-gray-900 dark:text-white uppercase leading-none">
              {activeToggle === 'interests' ? 'Interest_Relay' : 'Campus_Sync'}
            </h2>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mt-4">Sector 7 // Active Intelligence</p>
          </header>

          {/* V4: News & Resource Card Section */}
          <section className="mb-24">
            <div className="flex items-center gap-3 mb-12">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">Featured_Intelligence</h3>
            </div>
            <div className="space-y-12">
              {newsItems.map((news, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <NewsResourceCard {...news} />
                </motion.div>
              ))}
            </div>
          </section>

          <div className="flex items-center gap-3 mb-12">
            <LayoutGrid className="w-5 h-5 text-gray-400" />
            <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">Resource_Feed</h3>
          </div>

          <InstagramFeed>
            {[...architectureFeed].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <V2ResourceCard {...item} />
              </motion.div>
            ))}
          </InstagramFeed>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
