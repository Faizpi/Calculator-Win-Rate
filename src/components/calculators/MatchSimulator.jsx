import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, XCircle, RotateCcw } from 'lucide-react';

const MatchSimulator = () => {
    const [startMatches, setStartMatches] = useState('');
    const [startWr, setStartWr] = useState('');
    const [history, setHistory] = useState([]); // Array of 'W' or 'L'
    const [simulatedWr, setSimulatedWr] = useState(null);

    useEffect(() => {
        if (!startMatches || !startWr) {
            setSimulatedWr(null);
            return;
        }

        let t = parseFloat(startMatches);
        let c = parseFloat(startWr);
        let wins = t * (c / 100);

        history.forEach(result => {
            t++;
            if (result === 'W') wins++;
        });

        setSimulatedWr((wins / t) * 100);

    }, [startMatches, startWr, history]);

    const addWin = () => setHistory([...history, 'W']);
    const addLoss = () => setHistory([...history, 'L']);
    const reset = () => setHistory([]);

    // Calculate difference
    const diff = simulatedWr && startWr ? simulatedWr - parseFloat(startWr) : 0;

    return (
        <div className="w-full max-w-5xl mx-auto pt-20 border-t border-white/5">
            <div className="flex flex-col items-center text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">Match <span className="text-[var(--accent-purple)]">Simulation</span></h2>
                <p className="text-zinc-500 font-mono text-sm max-w-md mb-8">
                    Project your winrate by simulating upcoming match results.
                </p>

                <div className="flex gap-8 justify-center w-full max-w-md">
                    <InputSmall label="Total Matches" value={startMatches} onChange={setStartMatches} />
                    <InputSmall label="Current WR %" value={startWr} onChange={setStartWr} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Controls */}
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <button
                            onClick={addWin}
                            className="flex-1 bg-[var(--accent-blue)] hover:bg-white text-black font-black uppercase tracking-widest py-6 rounded-2xl transition-all active:scale-95 flex flex-col items-center gap-2"
                        >
                            <Trophy size={24} />
                            Add Win
                        </button>
                        <button
                            onClick={addLoss}
                            className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-black uppercase tracking-widest py-6 rounded-2xl transition-all active:scale-95 flex flex-col items-center gap-2"
                        >
                            <XCircle size={24} />
                            Add Loss
                        </button>
                    </div>
                    <button
                        onClick={reset}
                        disabled={history.length === 0}
                        className="w-full border border-white/10 hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent text-zinc-500 font-bold uppercase tracking-widest py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                        <RotateCcw size={16} />
                        Reset Simulation
                    </button>
                </div>

                {/* Resuhlt */}
                <div className="glass rounded-3xl p-8 flex flex-col justify-between min-h-[300px]">
                    <div className="flex justify-between items-start">
                        <div className="text-xs font-bold tracking-widest uppercase text-zinc-500">Projected WR</div>
                        <div className={`text-xs font-bold tracking-widest uppercase font-mono ${diff >= 0 ? 'text-[var(--accent-blue)]' : 'text-rose-500'}`}>
                            {diff > 0 ? '+' : ''}{diff.toFixed(2)}%
                        </div>
                    </div>

                    <div className="text-center py-8">
                        {simulatedWr !== null ? (
                            <motion.div
                                key={history.length}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-7xl md:text-9xl font-black text-white"
                            >
                                {simulatedWr.toFixed(2)}<span className="text-4xl text-zinc-600">%</span>
                            </motion.div>
                        ) : (
                            <div className="text-4xl font-black text-zinc-800 uppercase tracking-widest">--.--%</div>
                        )}
                    </div>

                    {/* History Viz */}
                    <div className="flex gap-2 flex-wrap justify-center">
                        <AnimatePresence>
                            {history.map((res, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${res === 'W' ? 'bg-[var(--accent-blue)] text-black' : 'bg-zinc-800 text-zinc-500'}`}
                                >
                                    {res}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </div>
    );
};

const InputSmall = ({ label, value, onChange }) => (
    <div className="flex-1">
        <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block mb-2">{label}</label>
        <input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-zinc-900/50 rounded-lg p-3 text-white font-mono font-bold border border-white/5 focus:border-[var(--accent-purple)] focus:outline-none transition-colors"
        />
    </div>
);

export default MatchSimulator;
