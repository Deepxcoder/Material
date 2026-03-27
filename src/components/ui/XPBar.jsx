import React from 'react';

const XPBar = ({ title, value, max }) => {
  const percentage = Math.max(0, Math.min(100, (value / max) * 100));
  
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] font-bold uppercase text-white/60">{title}</span>
        <span className="text-[10px] font-bold text-pixel-xp-green">{value} XP</span>
      </div>
      <div className="h-4 w-full border-2 border-white/10 bg-pixel-dark-charcoal p-0.5">
        <div 
          className="h-full bg-pixel-xp-green transition-all duration-1000 shadow-[0_0_8px_rgba(76,175,80,0.5)]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default XPBar;
