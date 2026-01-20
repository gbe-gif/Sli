import React from 'react';
import { SYSTEM_GUIDE, WORLD_VIEW } from '../constants';
import { Info, Globe2 } from 'lucide-react';

const WorldGuide: React.FC = () => {
  return (
    <div className="bg-slate-950 border-y border-slate-800">
      
      {/* Section 1: System Guide */}
      <section className="py-16 px-4 border-b border-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-blue-400 mb-2">
                <Info className="w-5 h-5" />
                <h2 className="text-2xl font-black text-white">시스템 가이드</h2>
            </div>
            <p className="text-slate-400 text-sm">성좌와 소통하고 살아남기 위한 필수 규칙</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SYSTEM_GUIDE.map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-lg p-5 hover:border-blue-500/50 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-900/20 transition-colors text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{item.term}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: World View */}
      <section className="py-16 px-4 bg-[#0a0f1d]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-purple-400 mb-2">
                <Globe2 className="w-5 h-5" />
                <h2 className="text-2xl font-black text-white">세계관 설정</h2>
            </div>
            <p className="text-slate-400 text-sm">성좌물이 낯선 당신을 위한 배경 지식</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORLD_VIEW.map((item, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-lg p-5 hover:border-purple-500/50 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-purple-900/20 transition-colors text-purple-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{item.term}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorldGuide;
