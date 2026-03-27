import React from 'react';
import { FileText, Image as ImageIcon, Music, Film, MoreVertical } from 'lucide-react';

const RecentlyUploaded = () => {
  const files = [
    { name: 'Physics_Notes.pdf', type: 'doc', color: 'bg-pixel-blue' },
    { name: 'Quantum_Mechanics.pdf', type: 'doc', color: 'bg-pixel-mint' },
    { name: 'Atom_Diagram.png', type: 'img', color: 'bg-pixel-mint' },
    { name: 'Lecture_Audio.mp3', type: 'audio', color: 'bg-pixel-blue' },
    { name: 'Particle_Sim.mp4', type: 'vid', color: 'bg-pixel-blue' },
    { name: 'Lab_Report.pdf', type: 'doc', color: 'bg-pixel-mint' },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'doc': return <FileText className="w-6 h-6" />;
      case 'img': return <ImageIcon className="w-6 h-6" />;
      case 'audio': return <Music className="w-6 h-6" />;
      case 'vid': return <Film className="w-6 h-6" />;
      default: return <FileText className="w-6 h-6" />;
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">RELIANCE_MODS</h2>
      <div className="space-y-3">
        {files.slice(0, 4).map((file, i) => (
          <div key={i} className="border-2 border-white/10 p-3 bg-pixel-dark-charcoal flex items-center gap-3 hover:border-white/40 cursor-pointer group transition-all">
            <div className={`w-8 h-8 ${file.color} border-2 border-white/20 flex items-center justify-center shrink-0`}>
              <div className="text-white scale-75">
                {getIcon(file.type)}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[10px] truncate text-white/80">{file.name}</p>
              <p className="text-[8px] font-bold text-white/20 mt-0.5 uppercase">PDF DATA</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyUploaded;
