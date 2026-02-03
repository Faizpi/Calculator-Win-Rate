import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-purple)] rounded-full blur-[150px] opacity-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent-blue)] rounded-full blur-[150px] opacity-5 pointer-events-none" />

            <div className="z-10 mt-20 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col"
                >
                    <h1 className="text-[14vw] leading-[0.8] font-black uppercase tracking-[-0.05em] text-white">
                        Winrate
                    </h1>
                    <h1 className="text-[14vw] leading-[0.8] font-black uppercase tracking-[-0.05em] text-transparent"
                        style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}>
                        Protocol
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-12 flex flex-col md:flex-row gap-12 md:items-end justify-between border-t border-white/10 pt-8"
                >
                    <div className="max-w-lg">
                        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                            Precision tools for competitive dominance. Calculate your path to the <span className="text-white font-medium">Mythic Glory</span> with absolute clarity.
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 font-mono text-xs text-[var(--accent-blue)]">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-blue)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-blue)]"></span>
                            </span>
                            SYSTEM OPERATIONAL
                        </div>
                        <div className="text-zinc-600">V.1.0.52</div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default Hero;
