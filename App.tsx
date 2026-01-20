import React from 'react';
import CharacterInfo from './components/CharacterInfo';
import WorldGuide from './components/WorldGuide';
import CommandGuide from './components/CommandGuide';
import Prologue from './components/Prologue';
import { Stars } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500/30 selection:text-white pb-20">
      
      {/* Hero / Header */}
      <header className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5980?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-30 blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a]"></div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-300 text-xs font-bold tracking-widest mb-4">
            <Stars className="w-3 h-3" />
            CHARACTER PROMOTION
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-2 shadow-sm drop-shadow-2xl">
            성좌님 말 좀 해봐요
          </h1>
          <p className="text-slate-400 font-medium sm:text-lg">
            S급 헌터의 영혼을 사랑한 절대 성좌와의 고수위 개그 로코
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <CharacterInfo />
        <WorldGuide />
        <CommandGuide />
        <Prologue />
      </main>

      {/* Footer */}
      <footer className="text-center text-slate-600 text-xs py-8 border-t border-slate-800/50">
        <p>© 2024 Silent Covenant Executor Character Chat Promotion.</p>
        <p className="mt-1">Designed for an immersive roleplay experience.</p>
      </footer>
    </div>
  );
};

export default App;