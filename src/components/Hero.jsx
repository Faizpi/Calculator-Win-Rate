import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 overflow-hidden">

            {/* Background Effects */}
            <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl">
                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-widest uppercase text-white/50">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        System Online
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black uppercase leading-[0.85] tracking-[-0.04em]">
                        <span className="block text-white">Winrate</span>
                        <span className="block text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>
                            Protocol
                        </span>
                    </h1>
                </motion.div>

                {/* Subtext */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-12 md:mt-16 max-w-xl"
                >
                    <p className="text-lg md:text-xl lg:text-2xl text-white/50 font-light leading-relaxed">
                        Precision tools for competitive dominance. Calculate your path to{' '}
                        <span className="text-white font-medium">Mythic Glory</span> with absolute clarity.
                    </p>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 flex flex-wrap gap-8 md:gap-16"
                >
                    <div className="glass-subtle px-6 py-4">
                        <div className="text-3xl md:text-4xl font-black text-cyan-400">3</div>
                        <div className="text-xs font-mono uppercase tracking-widest text-white/40 mt-1">Calculators</div>
                    </div>
                    <div className="glass-subtle px-6 py-4">
                        <div className="text-3xl md:text-4xl font-black text-white">∞</div>
                        <div className="text-xs font-mono uppercase tracking-widest text-white/40 mt-1">Simulations</div>
                    </div>
                    <div className="glass-subtle px-6 py-4">
                        <div className="text-3xl md:text-4xl font-black text-purple-400">100%</div>
                        <div className="text-xs font-mono uppercase tracking-widest text-white/40 mt-1">Accuracy</div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-white/40 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
