import React, { useState } from 'react';
import { COMMAND_EXAMPLES } from '../constants';
import { Terminal, ChevronDown, ChevronUp, Lock } from 'lucide-react';

const CommandGuide: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700 mb-4">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-xs font-bold text-green-400 tracking-wider">AVAILABLE COMMANDS</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-2">채팅 명령어 가이드</h2>
          <p className="text-slate-400 text-sm">캐릭터챗 내에서 사용할 수 있는 특수 명령어입니다.</p>
        </div>

        <div className="space-y-4">
          {COMMAND_EXAMPLES.map((cmd, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden transition-all duration-300">
              <div 
                className="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-800 transition-colors"
                onClick={() => toggleExpand(idx)}
              >
                <div className="flex items-center gap-4">
                  <code className="px-3 py-1 bg-slate-950 text-green-400 rounded-md font-mono font-bold border border-slate-700 shadow-inner">
                    {cmd.command}
                  </code>
                  <p className="text-slate-300 text-sm font-medium">{cmd.description}</p>
                </div>
                {cmd.isSecret && (
                   <Lock className="w-4 h-4 text-red-400 mr-2" />
                )}
                <div className="text-slate-500">
                  {expandedIndex === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              {expandedIndex === idx && (
                <div className="bg-black/40 border-t border-slate-700 p-6 animate-fade-in">
                  <div className="text-xs text-slate-500 font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    {cmd.outputTitle}
                  </div>
                  <pre className={`font-mono text-sm leading-relaxed whitespace-pre-wrap p-4 rounded-lg bg-[#1e1e1e] text-slate-300 border-l-4 ${cmd.isSecret ? 'border-red-500' : 'border-blue-500'}`}>
                    {cmd.outputContent}
                  </pre>
                  {cmd.isSecret && (
                    <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      일부 내용은 감응도(친밀도)가 높아야 해금됩니다.
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommandGuide;
