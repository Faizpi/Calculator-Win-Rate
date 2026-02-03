import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, XCircle, RotateCcw } from 'lucide-react';

const MatchSimulator = () => {
    const [startMatches, setStartMatches] = useState('');
    const [startWr, setStartWr] = useState('');
    const [history, setHistory] = useState([]);
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

    const diff = simulatedWr && startWr ? simulatedWr - parseFloat(startWr) : 0;

    return (
        <div className="w-full max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-400 mb-4 block">03 / Simulator</span>
                    <h2 className="section-title">
                        Match<br />
                        <span className="text-white/30">Simulation</span>
                    </h2>
                    <p className="mt-6 text-lg text-white/40 max-w-lg leading-relaxed">
                        Predict your future winrate by simulating upcoming match results in real-time.
                    </p>
                </motion.div>
            </div>

            {/* Simulator Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Controls */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6"
                >
                    {/* Inputs */}
                    <div className="glass p-8 space-y-6">
                        <InputField label="Starting Matches" value={startMatches} onChange={setStartMatches} placeholder="1000" />
                        <InputField label="Starting WR %" value={startWr} onChange={setStartWr} placeholder="55.0" />
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={addWin}
                            className="group glass p-6 flex flex-col items-center gap-3 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <Trophy className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-bold uppercase tracking-widest">Add Win</span>
                        </button>
                        <button
                            onClick={addLoss}
                            className="group glass p-6 flex flex-col items-center gap-3 hover:bg-rose-500/10 hover:border-rose-500/30 transition-all duration-300"
                        >
                            <XCircle className="w-8 h-8 text-rose-400 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-bold uppercase tracking-widest">Add Loss</span>
                        </button>
                    </div>

                    {/* Reset */}
                    <button
                        onClick={reset}
                        disabled={history.length === 0}
                        className="w-full glass p-4 flex items-center justify-center gap-3 text-white/40 hover:text-white hover:bg-white/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        <RotateCcw size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Reset Simulation</span>
                    </button>
                </motion.div>

                {/* Result Display */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="glass p-8 flex flex-col relative overflow-hidden"
                >
                    {/* Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]" />

                    {/* Header */}
                    <div className="flex justify-between items-start mb-8 relative z-10">
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/40">Projected WR</span>
                        <span className={`text-sm font-mono font-bold ${diff >= 0 ? 'text-cyan-400' : 'text-rose-400'}`}>
                            {diff > 0 ? '+' : ''}{diff.toFixed(2)}%
                        </span>
                    </div>

                    {/* Big Number */}
                    <div className="flex-1 flex items-center justify-center relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={simulatedWr?.toFixed(2) ?? 'empty'}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                className="text-center"
                            >
                                {simulatedWr !== null ? (
                                    <div className="text-7xl md:text-8xl font-black text-white">
                                        {simulatedWr.toFixed(2)}
                                        <span className="text-3xl text-white/40">%</span>
                                    </div>
                                ) : (
                                    <div className="text-6xl font-black text-white/10">--.--</div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* History Pills */}
                    <div className="flex flex-wrap gap-2 mt-8 relative z-10 min-h-[40px]">
                        <AnimatePresence>
                            {history.slice(-20).map((res, i) => (
                                <motion.div
                                    key={`${i}-${res}`}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${res === 'W'
                                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                            : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                                        }`}
                                >
                                    {res}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const InputField = ({ label, value, onChange, placeholder }) => (
    <div className="space-y-3">
        <label className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 block">
            {label}
        </label>
        <input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="input-premium"
        />
    </div>
);

export default MatchSimulator;
