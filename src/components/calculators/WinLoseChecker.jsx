import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WinLoseChecker = () => {
    const [totalMatches, setTotalMatches] = useState('');
    const [currentWr, setCurrentWr] = useState('');
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const t = parseFloat(totalMatches);
        const c = parseFloat(currentWr);

        if (t && c && c <= 100 && c >= 0) {
            const wins = Math.round(t * (c / 100));
            const losses = t - wins;
            setStats({ wins, losses });
        } else {
            setStats(null);
        }
    }, [totalMatches, currentWr]);

    return (
        <div className="w-full max-w-4xl mx-auto pt-20 border-t border-white/5">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">Win/Lose <span className="text-zinc-600">Checker</span></h2>
                    <p className="text-zinc-500 font-mono text-sm max-w-md">
                        Check exactly how many wins and losses you have accumulated in your career.
                    </p>
                </div>

                <div className="flex gap-8 w-full md:w-auto">
                    <InputSmall label="Matches" value={totalMatches} onChange={setTotalMatches} />
                    <InputSmall label="Winrate %" value={currentWr} onChange={setCurrentWr} />
                </div>
            </div>

            <motion.div className="h-40 md:h-64 glass rounded-3xl flex overflow-hidden relative">
                {stats ? (
                    <>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(stats.wins / totalMatches) * 100}%` }}
                            target={{ width: `${(stats.wins / totalMatches) * 100}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="bg-white/10 h-full flex flex-col justify-center items-center relative group"
                        >
                            <div className="absolute inset-0 bg-[var(--accent-blue)] opacity-20 group-hover:opacity-30 transition-opacity" />
                            <span className="text-4xl md:text-7xl font-black text-white z-10">{stats.wins}</span>
                            <span className="text-xs font-bold tracking-widest uppercase text-[var(--accent-blue)] z-10">Wins</span>
                        </motion.div>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(stats.losses / totalMatches) * 100}%` }}
                            className="bg-black/40 h-full flex flex-col justify-center items-center flex-1"
                        >
                            <span className="text-4xl md:text-7xl font-black text-zinc-600 z-10 group-hover:text-zinc-500 transition-colors">{stats.losses}</span>
                            <span className="text-xs font-bold tracking-widest uppercase text-zinc-700 z-10">Losses</span>
                        </motion.div>
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-700 font-black text-4xl uppercase tracking-widest opacity-30">
                        Input Data To Visualize
                    </div>
                )}
            </motion.div>
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
            className="w-full bg-zinc-900/50 rounded-lg p-3 text-white font-mono font-bold border border-white/5 focus:border-[var(--accent-blue)] focus:outline-none transition-colors"
        />
    </div>
);

export default WinLoseChecker;
