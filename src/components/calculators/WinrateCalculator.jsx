import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WinrateCalculator = () => {
    const [totalMatches, setTotalMatches] = useState('');
    const [currentWr, setCurrentWr] = useState('');
    const [targetWr, setTargetWr] = useState('');
    const [result, setResult] = useState(null);

    useEffect(() => {
        const t = parseFloat(totalMatches);
        const c = parseFloat(currentWr);
        const target = parseFloat(targetWr);

        if (!t || !c || !target) {
            setResult(null);
            return;
        }

        if (target >= 100 || target <= 0) {
            setResult({ error: "Target must be 0-100" });
            return;
        }

        if (target <= c) {
            setResult({ error: "Target > Current" });
            return;
        }

        const currentWins = t * (c / 100);
        const targetPercent = target / 100;
        const neededWins = (t * targetPercent - currentWins) / (1 - targetPercent);

        setResult({ wins: Math.ceil(neededWins) });
    }, [totalMatches, currentWr, targetWr]);

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
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-4 block">01 / Calculator</span>
                    <h2 className="section-title">
                        Target<br />
                        <span className="text-gradient-cyan">Calibration</span>
                    </h2>
                    <p className="mt-6 text-lg text-white/40 max-w-lg leading-relaxed">
                        Calculate the exact consecutive wins needed to reach your desired winrate percentage.
                    </p>
                </motion.div>
            </div>

            {/* Calculator Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass p-8 md:p-10 space-y-8"
                >
                    <InputField
                        label="Total Matches"
                        value={totalMatches}
                        onChange={setTotalMatches}
                        placeholder="1240"
                    />
                    <InputField
                        label="Current Winrate %"
                        value={currentWr}
                        onChange={setCurrentWr}
                        placeholder="54.5"
                    />
                    <InputField
                        label="Target Winrate %"
                        value={targetWr}
                        onChange={setTargetWr}
                        placeholder="60.0"
                    />
                </motion.div>

                {/* Result Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="glass p-8 md:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden min-h-[400px]"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px]" />

                    <AnimatePresence mode="wait">
                        {result?.error ? (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="relative z-10"
                            >
                                <div className="text-rose-400 font-mono text-lg">{result.error}</div>
                            </motion.div>
                        ) : result?.wins !== undefined ? (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                className="relative z-10"
                            >
                                <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/40 block mb-4">
                                    Required Wins
                                </span>
                                <div className="display-number text-white glow-cyan">
                                    {result.wins}
                                </div>
                                <span className="text-sm font-mono text-white/30 mt-4 block">
                                    Consecutive victories needed
                                </span>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="placeholder"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="relative z-10"
                            >
                                <div className="text-6xl md:text-8xl font-black text-white/5 uppercase tracking-widest">
                                    ---
                                </div>
                                <span className="text-sm font-mono text-white/20 mt-4 block">
                                    Awaiting input
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
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

export default WinrateCalculator;
