import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WinrateCalculator = () => {
    const [totalMatches, setTotalMatches] = useState('');
    const [currentWr, setCurrentWr] = useState('');
    const [targetWr, setTargetWr] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const t = parseFloat(totalMatches);
        const c = parseFloat(currentWr);
        const target = parseFloat(targetWr);

        if (!t || !c || !target) {
            setResult(null);
            return;
        }

        if (target >= 100 || target <= 0) {
            setResult({ error: "Target must be between 0 and 100" });
            return;
        }

        if (target <= c) {
            setResult({ error: "Target must be higher than current WR" });
            return;
        }

        const currentWins = t * (c / 100);
        // Formula: (CurrentWins + x) / (Total + x) = Target / 100
        // x = (Total * Target% - CurrentWins) / (1 - Target%)

        const targetPercent = target / 100;
        const remainingPercent = 1 - targetPercent;

        const neededWins = (t * targetPercent - currentWins) / remainingPercent;

        setResult({ wins: Math.ceil(neededWins) });
    };

    useEffect(() => {
        calculate();
    }, [totalMatches, currentWr, targetWr]);

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="mb-12">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">Target <span className="text-[var(--accent-blue)]">Calibration</span></h2>
                <p className="text-zinc-500 font-mono text-sm md:text-base max-w-xl">
                    Input your current stats and your desired winrate. Our algorithm determines the precise number of consecutive wins required to reach your goal.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                    <InputGroup label="Total Matches" value={totalMatches} onChange={setTotalMatches} placeholder="e.g. 1240" />
                    <InputGroup label="Current Winrate (%)" value={currentWr} onChange={setCurrentWr} placeholder="e.g. 54.5" />
                    <InputGroup label="Target Winrate (%)" value={targetWr} onChange={setTargetWr} placeholder="e.g. 60.0" />
                </div>

                <motion.div
                    layout
                    className="relative p-8 md:p-12 glass rounded-3xl min-h-[300px] flex flex-col justify-center items-center text-center overflow-hidden group"
                >
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-blue)] blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity" />

                    <AnimatePresence mode="wait">
                        {result?.error ? (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="text-rose-500 font-mono text-center"
                            >
                                {result.error}
                            </motion.div>
                        ) : result?.wins !== undefined ? (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="relative z-10"
                            >
                                <div className="text-zinc-400 text-sm font-mono uppercase tracking-widest mb-2">Required Wins</div>
                                <div className="text-8xl md:text-9xl font-black tracking-tighter text-white glow-text leading-none">
                                    {result.wins}
                                </div>
                                <div className="text-zinc-500 text-sm mt-4 font-mono">
                                    Consecutive victories needed without losing
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                className="text-center"
                            >
                                <div className="text-zinc-600 font-black text-6xl uppercase tracking-widest opacity-20">
                                    Waiting for Data
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

const InputGroup = ({ label, value, onChange, placeholder }) => (
    <div className="space-y-3">
        <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-1">{label}</label>
        <input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent border-b-2 border-zinc-800 text-3xl md:text-4xl py-4 font-bold text-white focus:border-[var(--accent-blue)] focus:outline-none transition-colors placeholder:text-zinc-800"
        />
    </div>
);

export default WinrateCalculator;
