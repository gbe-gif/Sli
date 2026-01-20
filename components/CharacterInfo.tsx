import React, { useState } from 'react';
import { CHARACTER_INFO } from '../constants';
import { Lock, EyeOff, AlertTriangle } from 'lucide-react';

const CharacterInfo: React.FC = () => {
  const [isMaskRevealed, setIsMaskRevealed] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
        
        {/* Photo Section - Fixed Width on Desktop */}
        <div className="w-full lg:w-auto flex-shrink-0 mx-auto">
          <div className="grid grid-cols-2 gap-2 w-full max-w-[500px] lg:w-[500px]">
            {/* Photo 1: Normal */}
            <div className="aspect-square relative overflow-hidden rounded-lg border-2 border-slate-700 shadow-xl group">
              <img 
                src={CHARACTER_INFO.images.normal} 
                alt="Normal Appearance" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <span className="text-xs text-slate-300 font-mono">DEFAULT_SKIN</span>
              </div>
            </div>

            {/* Photo 2: Secret / Mask Reveal */}
            <div 
              className="aspect-square relative overflow-hidden rounded-lg border-2 border-slate-700 shadow-xl cursor-pointer group"
              onClick={() => setIsMaskRevealed(!isMaskRevealed)}
            >
              {isMaskRevealed ? (
                <>
                  <img 
                    src={CHARACTER_INFO.images.secret} 
                    alt="Secret Appearance" 
                    className="w-full h-full object-cover animate-fade-in"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <EyeOff className="text-white w-8 h-8 drop-shadow-md" />
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center text-slate-400 group-hover:bg-slate-750 transition-colors p-4 text-center">
                  <Lock className="w-8 h-8 mb-2 text-slate-500" />
                  <span className="font-bold text-sm tracking-wider">마스크를 벗으면?</span>
                  <span className="text-xs text-slate-500 mt-1">(Click to Reveal)</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-4 text-center lg:text-center">
            <h1 className="text-3xl font-black text-white mb-1 tracking-tight">{CHARACTER_INFO.name}</h1>
            <h2 className="text-xl text-blue-400 font-bold mb-4">{CHARACTER_INFO.constellationName}</h2>
            <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700">
                    {CHARACTER_INFO.mbti}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700">
                    {CHARACTER_INFO.appearance.height}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700">
                   냉미남
                </span>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 w-full space-y-6 max-w-[500px] lg:max-w-none mx-auto">
            {/* Personality */}
            <section className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
                    성격 및 성향
                </h3>
                <ul className="space-y-2">
                    {CHARACTER_INFO.personality.map((item, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </section>

             {/* TMI */}
             <section className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 bg-purple-500 rounded-full"></span>
                    상세 정보
                </h3>
                <div className="grid grid-cols-1 gap-3">
                    {CHARACTER_INFO.tmi.map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 border-b border-slate-800/50 last:border-0 pb-2 last:pb-0">
                            <span className="text-slate-400 text-xs sm:text-sm font-bold min-w-[100px] shrink-0">
                                {item.label}
                            </span>
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className={`text-slate-200 text-sm ${item.isSensitive ? 'blur-[2px] hover:blur-none transition-all cursor-help select-none' : ''}`}>
                                    {item.value}
                                </span>
                                {item.isSensitive && (
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-red-900/30 text-red-300 border border-red-800/30 opacity-70">
                                        <AlertTriangle className="w-3 h-3 mr-1" />
                                        (Safe Mode 에는 없는 정보)
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

             {/* Habits */}
             <section className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 bg-green-500 rounded-full"></span>
                    무의식적 습관
                </h3>
                <div className="flex flex-wrap gap-2">
                    {CHARACTER_INFO.habits.map((item, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700">
                            {item}
                        </span>
                    ))}
                </div>
            </section>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;