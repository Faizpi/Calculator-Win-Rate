import { motion, AnimatePresence } from 'framer-motion';
import { X, Target, BarChart2, Gamepad2 } from 'lucide-react';

const InstructionModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-2">
                                System <span className="text-[var(--accent-blue)]">Manual</span>
                            </h2>
                            <p className="text-zinc-500 font-mono text-sm mb-12">
                                Operational guide for Winrate Protocol v1.0
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <FeatureGuide
                                    icon={<Target className="text-[var(--accent-blue)]" size={32} />}
                                    title="Target"
                                    desc="Calculate required wins to reach a specific WR%."
                                    steps={["Input Total Matches", "Input Current WR%", "Input Goal WR%"]}
                                />
                                <FeatureGuide
                                    icon={<BarChart2 className="text-[var(--accent-purple)]" size={32} />}
                                    title="Checker"
                                    desc="Reveal exact win/loss count hidden by the game."
                                    steps={["Input Total Matches", "Input Current WR%", "View Win/Loss Ratio"]}
                                />
                                <FeatureGuide
                                    icon={<Gamepad2 className="text-emerald-400" size={32} />}
                                    title="Simulation"
                                    desc="Predict future WR% outcomes in real-time."
                                    steps={["Set Base Stats", "Click Add Win/Loss", "Observe Trajectory"]}
                                />
                            </div>
                        </div>

                        <div className="bg-white/5 p-6 text-center text-xs font-mono text-zinc-500 uppercase tracking-widest">
                            Press ESC to close
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const FeatureGuide = ({ icon, title, desc, steps }) => (
    <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
        <div className="mb-6">{icon}</div>
        <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 h-12">{desc}</p>
        <ul className="space-y-2">
            {steps.map((step, i) => (
                <li key={i} className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                    <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[10px]">{i + 1}</span>
                    {step}
                </li>
            ))}
        </ul>
    </div>
);

export default InstructionModal;
