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
            setStats({ wins, losses, total: t });
        } else {
            setStats(null);
        }
    }, [totalMatches, currentWr]);

    const winPercent = stats ? (stats.wins / stats.total) * 100 : 50;

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
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-purple-400 mb-4 block">02 / Checker</span>
                    <h2 className="section-title">
                        Win/Lose<br />
                        <span className="text-white/30">Breakdown</span>
                    </h2>
                    <p className="mt-6 text-lg text-white/40 max-w-lg leading-relaxed">
                        Reveal your exact win and loss count based on total matches and current winrate.
                    </p>
                </motion.div>
            </div>

            {/* Checker Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Input Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass p-8 space-y-8"
                >
                    <InputField
                        label="Total Matches"
                        value={totalMatches}
                        onChange={setTotalMatches}
                        placeholder="1000"
                    />
                    <InputField
                        label="Current Winrate %"
                        value={currentWr}
                        onChange={setCurrentWr}
                        placeholder="55.0"
                    />
                </motion.div>

                {/* Wins Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="glass p-8 flex flex-col justify-center items-center text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 block mb-4 relative z-10">
                        Total Wins
                    </span>
                    <div className="text-7xl md:text-8xl font-black text-white relative z-10">
                        {stats?.wins ?? '---'}
                    </div>
                </motion.div>

                {/* Losses Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="glass p-8 flex flex-col justify-center items-center text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent" />
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-rose-400 block mb-4 relative z-10">
                        Total Losses
                    </span>
                    <div className="text-7xl md:text-8xl font-black text-white/60 relative z-10">
                        {stats?.losses ?? '---'}
                    </div>
                </motion.div>
            </div>

            {/* Visual Bar */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-8 glass p-6 overflow-hidden"
            >
                <div className="h-4 bg-white/5 rounded-full overflow-hidden flex">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: stats ? `${winPercent}%` : '50%' }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-l-full"
                    />
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: stats ? `${100 - winPercent}%` : '50%' }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-rose-500/50 to-rose-600/30 rounded-r-full"
                    />
                </div>
                <div className="flex justify-between mt-3 text-xs font-mono text-white/40">
                    <span>Wins {stats ? `${winPercent.toFixed(1)}%` : '--'}</span>
                    <span>Losses {stats ? `${(100 - winPercent).toFixed(1)}%` : '--'}</span>
                </div>
            </motion.div>
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

export default WinLoseChecker;
