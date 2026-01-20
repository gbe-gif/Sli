import React from 'react';
import { Zap } from 'lucide-react';

interface SystemMessageProps {
  title: string;
  subContent?: string;
  asciiArt?: string;
}

const SystemMessage: React.FC<SystemMessageProps> = ({ title, subContent, asciiArt }) => {
  return (
    <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4 my-4 shadow-[0_0_15px_rgba(59,130,246,0.2)] backdrop-blur-sm animate-fade-in-up">
      <div className="flex items-center gap-2 mb-1 text-blue-300 font-bold text-sm tracking-widest">
        <Zap className="w-4 h-4 text-yellow-400 fill-current animate-pulse" />
        상태창
        <Zap className="w-4 h-4 text-yellow-400 fill-current animate-pulse" />
      </div>
      <div className="text-white font-medium text-lg mb-1 leading-snug">
        {title}
      </div>
      {subContent && (
        <div className="text-blue-200 text-sm pl-4 border-l-2 border-blue-500/30">
          {subContent}
        </div>
      )}
      {asciiArt && (
        <div className="mt-3 bg-black/40 rounded p-3 font-mono text-xs sm:text-sm text-green-400 whitespace-pre leading-none select-none overflow-hidden">
          {asciiArt}
        </div>
      )}
    </div>
  );
};

export default SystemMessage;
