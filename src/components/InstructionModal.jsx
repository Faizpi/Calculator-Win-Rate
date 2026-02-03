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
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-5xl glass overflow-hidden relative"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all z-10"
                        >
                            <X size={18} />
                        </button>

                        {/* Content */}
                        <div className="p-8 md:p-12">
                            <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-4 block">
                                System Manual
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-[-0.04em] mb-12">
                                How to <span className="text-gradient-cyan">Use</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <FeatureCard
                                    icon={<Target className="text-cyan-400" size={28} />}
                                    title="Target Calibration"
                                    color="cyan"
                                    steps={[
                                        "Enter total matches played",
                                        "Enter current winrate %",
                                        "Enter your goal winrate %",
                                        "See required consecutive wins"
                                    ]}
                                />
                                <FeatureCard
                                    icon={<BarChart2 className="text-purple-400" size={28} />}
                                    title="Win/Lose Checker"
                                    color="purple"
                                    steps={[
                                        "Enter total matches played",
                                        "Enter current winrate %",
                                        "View exact win/loss count",
                                        "See visual ratio breakdown"
                                    ]}
                                />
                                <FeatureCard
                                    icon={<Gamepad2 className="text-emerald-400" size={28} />}
                                    title="Match Simulator"
                                    color="emerald"
                                    steps={[
                                        "Set your base statistics",
                                        "Click Add Win or Add Loss",
                                        "Watch projected WR change",
                                        "Plan your climb to Mythic"
                                    ]}
                                />
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="bg-white/[0.02] border-t border-white/5 px-8 md:px-12 py-6 flex justify-between items-center">
                            <span className="text-xs font-mono text-white/30 tracking-widest uppercase">
                                Press ESC to close
                            </span>
                            <button
                                onClick={onClose}
                                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm uppercase tracking-widest rounded-xl transition-colors"
                            >
                                Got it
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const FeatureCard = ({ icon, title, color, steps }) => (
    <div className={`glass-subtle p-6 hover:bg-white/[0.04] transition-colors group`}>
        <div className="mb-6">{icon}</div>
        <h3 className="text-lg font-bold uppercase tracking-wide mb-6">{title}</h3>
        <ul className="space-y-3">
            {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                    <span className={`w-5 h-5 rounded-full bg-${color}-500/20 border border-${color}-500/30 flex items-center justify-center text-[10px] font-bold text-${color}-400 shrink-0 mt-0.5`}>
                        {i + 1}
                    </span>
                    {step}
                </li>
            ))}
        </ul>
    </div>
);

export default InstructionModal;
