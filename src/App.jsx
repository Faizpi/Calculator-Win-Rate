import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WinrateCalculator from './components/calculators/WinrateCalculator';
import WinLoseChecker from './components/calculators/WinLoseChecker';
import MatchSimulator from './components/calculators/MatchSimulator';
import InstructionModal from './components/InstructionModal';

function App() {
  const [showInstruction, setShowInstruction] = useState(false);

  return (
    <div className="relative bg-[#030303] text-white min-h-screen noise">
      <Navbar onOpenInstruction={() => setShowInstruction(true)} />
      <InstructionModal isOpen={showInstruction} onClose={() => setShowInstruction(false)} />

      <Hero />

      <main className="relative z-10 space-y-40 pb-40">
        <section id="calculator" className="px-6 md:px-12 lg:px-24">
          <WinrateCalculator />
        </section>

        <section id="win-lose" className="px-6 md:px-12 lg:px-24">
          <WinLoseChecker />
        </section>

        <section id="simulation" className="px-6 md:px-12 lg:px-24">
          <MatchSimulator />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-2xl font-black tracking-tighter">
            WR<span className="text-cyan-400">.</span>GG
          </span>
          <span className="text-xs font-mono text-white/30 tracking-widest uppercase">
            Designed for Competitive Players
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
