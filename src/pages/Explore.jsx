import React from 'react';
import { Search, TrendingUp, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Explore = () => {
  const trending = [
    { title: 'Full Stack Roadmap 2026', sector: 'CS', color: 'bg-blue-600' },
    { title: 'Structural Analysis Masterclass', sector: 'B.Tech', color: 'bg-indigo-600' },
    { title: 'Modernist Interior Design', sector: 'Architecture', color: 'bg-emerald-600' },
    { title: 'Blockchain Fundamentals', sector: 'CS', color: 'bg-amber-600' },
    { title: 'Robotics & AI Ethics', sector: 'B.Tech', color: 'bg-rose-600' },
    { title: 'Sustainable Urbanism', sector: 'Architecture', color: 'bg-slate-700' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0B] pt-32 pb-48 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h1 className="text-6xl font-black tracking-tighter text-gray-900 dark:text-white mb-8 uppercase">Explore_Relay</h1>
          <div className="relative group max-w-2xl">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <input 
              type="text" 
              placeholder="SEARCH ALL SECTORS..."
              className="w-full bg-gray-50 dark:bg-white/5 border-2 border-transparent border-b-gray-200 dark:border-b-white/10 p-6 pl-16 text-sm font-black uppercase tracking-widest focus:outline-none focus:border-b-blue-600 transition-all"
            />
          </div>
        </header>

        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">Trending_Resources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trending.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-64 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 flex flex-col justify-between hover:border-blue-600 transition-all cursor-pointer overflow-hidden"
              >
                <div className="flex justify-between items-start">
                  <span className={`px-3 py-1 text-[10px] font-black text-white uppercase tracking-widest ${item.color}`}>
                    {item.sector}
                  </span>
                  <Star className="w-4 h-4 text-gray-300 group-hover:text-amber-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white leading-tight uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Zap className="w-3 h-3 text-blue-600" />
                    High Activity
                  </p>
                </div>
                
                {/* Accent line */}
                <div className="absolute top-0 right-0 w-1 h-0 group-hover:h-full bg-blue-600 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;
