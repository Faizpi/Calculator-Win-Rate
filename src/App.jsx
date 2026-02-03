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
    <div className="relative bg-[var(--bg-dark)] text-white selection:bg-[var(--accent-blue)] selection:text-black min-h-screen">
      {/* Navbar - Z-Index 100 */}
      <div className="relative z-[100]">
        <Navbar onOpenInstruction={() => setShowInstruction(true)} />
      </div>

      {/* Modal - Z-Index 150 */}
      <InstructionModal isOpen={showInstruction} onClose={() => setShowInstruction(false)} />

      {/* Global Gradient Overlay - Background Ambiance (Z-1) */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0)_0%,_rgba(5,5,5,0.6)_100%)] z-[1]" />

      {/* Content - Z-Index 10 */}
      <div className="relative z-10">
        <Hero />

        <main className="space-y-32 pb-32">
          <section id="calculator" className="px-6 md:px-12 pt-20">
            <WinrateCalculator />
          </section>

          <section id="win-lose" className="px-6 md:px-12">
            <WinLoseChecker />
          </section>

          <section id="simulation" className="px-6 md:px-12">
            <MatchSimulator />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
