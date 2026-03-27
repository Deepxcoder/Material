import React from 'react';
import { Upload } from 'lucide-react';

const UploadZone = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative group cursor-pointer transition-transform hover:-translate-y-1">
        <div className="absolute inset-0 bg-pixel-neon-teal translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
        <div className="bg-pixel-purple-deep border-4 border-pixel-neon-teal border-dashed p-16 flex flex-col items-center justify-center gap-6">
          <div className="w-20 h-20 bg-pixel-neon-teal flex items-center justify-center">
            <Upload className="w-10 h-10 text-pixel-purple-deep" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-pixel text-pixel-neon-teal mb-4">INITIALIZE UPLOAD</h3>
            <p className="text-[10px] font-pixel text-pixel-neon-teal/40 leading-relaxed uppercase">
              Drag and drop PDF modules<br/>or select manually
            </p>
          </div>
          <div className="mt-6 flex gap-4">
            <div className="border border-pixel-neon-teal px-3 py-1 text-[8px] font-pixel text-pixel-neon-teal uppercase">Limit: 50MB</div>
            <div className="border border-pixel-neon-teal px-3 py-1 text-[8px] font-pixel text-pixel-neon-teal uppercase">V.01.2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadZone;
