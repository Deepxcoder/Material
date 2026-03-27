import React from 'react';
import { Clock, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Recent = () => {
  const recentItems = [
    { title: 'Genetics_Ch4_CRISPR.pdf', type: 'PDF', time: '2 hours ago', sector: 'CS' },
    { title: 'Organic_Synthesis_Protocol.docx', type: 'DOCX', time: '5 hours ago', sector: 'Chemistry' },
    { title: 'Blueprints_Library_Main.dwg', type: 'DWG', time: 'Yesterday', sector: 'Architecture' },
    { title: 'Calculus_III_Notes.pdf', type: 'PDF', time: '2 days ago', sector: 'Mathematics' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0B] pt-32 pb-48 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <Clock className="w-8 h-8 text-blue-600" />
            <h1 className="text-5xl font-black tracking-tighter text-gray-900 dark:text-white uppercase leading-none">Recent_Relay</h1>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">Sector 7 // Access History</p>
        </header>

        <div className="space-y-4">
          {recentItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-center justify-between p-6 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-blue-600 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-1">{item.title}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{item.sector}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.time}</span>
                  </div>
                </div>
              </div>
              <button className="p-3 text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <ExternalLink className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/10 text-center">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">End of Relay History</p>
        </div>
      </div>
    </div>
  );
};

export default Recent;
