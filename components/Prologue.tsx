import React from 'react';
import { PROLOGUE_DATA } from '../constants';
import SystemMessage from './SystemMessage';
import { Terminal } from 'lucide-react';

const Prologue: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-8 text-blue-400 justify-center">
        <Terminal className="w-6 h-6" />
        <h2 className="text-2xl font-bold tracking-wider">PROLOGUE TEASER</h2>
      </div>

      <div className="space-y-6 font-serif">
        {PROLOGUE_DATA.map((segment, idx) => {
          if (segment.type === 'system') {
            return (
              <SystemMessage 
                key={idx} 
                title={segment.content} 
                subContent={segment.subContent} 
                asciiArt={segment.asciiArt} 
              />
            );
          }

          if (segment.type === 'dialogue') {
            return (
              <div key={idx} className="pl-4 border-l-4 border-slate-700 my-4">
                <span className="block text-slate-500 text-xs font-bold mb-1 uppercase tracking-wider sans-serif">
                  {segment.speaker}
                </span>
                <p className="text-white text-lg font-medium italic">
                  "{segment.content}"
                </p>
              </div>
            );
          }

          if (segment.type === 'effect') {
            return (
              <div key={idx} className="text-center py-6">
                 <p className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent animate-pulse">
                  {segment.content}
                </p>
              </div>
            );
          }

          // Narrative
          return (
            <p key={idx} className="text-slate-300 leading-relaxed text-justify">
              {segment.content}
            </p>
          );
        })}
      </div>

      <div className="mt-12 text-center">
         <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all transform hover:scale-105">
            지금 성좌와 계약하기
         </button>
      </div>
    </section>
  );
};

export default Prologue;
