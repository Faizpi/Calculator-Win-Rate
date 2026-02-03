import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Instagram, MessageCircle } from 'lucide-react';

const Navbar = ({ onOpenInstruction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "INSTRUCTION", action: () => { onOpenInstruction(); setIsOpen(false); } },
    { title: "CALCULATOR", href: "#calculator" },
    { title: "WIN/LOSE", href: "#win-lose" },
    { title: "SIMULATION", href: "#simulation" },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, label: "Github", href: "#" },
    { icon: <Instagram size={18} />, label: "Instagram", href: "#" },
    { icon: <MessageCircle size={18} />, label: "Discord", href: "#" },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl md:text-3xl font-black tracking-tighter">
              WR<span className="text-cyan-400">.</span>GG
            </span>
          </motion.div>

          {/* Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-4 group"
          >
            <span className="hidden md:block text-xs font-bold tracking-[0.3em] uppercase text-white/60 group-hover:text-white transition-colors">
              Menu
            </span>
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-all duration-300">
              <Menu size={20} className="group-hover:text-black transition-colors" />
            </div>
          </motion.button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 3rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#030303] z-[60] flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center px-6 md:px-12 py-6">
              <span className="text-2xl md:text-3xl font-black tracking-tighter">
                WR<span className="text-cyan-400">.</span>GG
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 group"
              >
                <span className="hidden md:block text-xs font-bold tracking-[0.3em] uppercase text-white/60 group-hover:text-white transition-colors">
                  Close
                </span>
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                  <X size={20} className="group-hover:text-black transition-colors" />
                </div>
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24">
              <nav className="space-y-2 md:space-y-4">
                {menuItems.map((item, index) => (
                  <div key={index} className="overflow-hidden">
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                      transition={{ delay: 0.1 + index * 0.08, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="group flex items-center gap-4 md:gap-8"
                        >
                          <span className="text-[10vw] md:text-[8vw] font-black tracking-[-0.04em] text-transparent transition-all duration-500 group-hover:text-white"
                            style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.3)' }}>
                            {item.title}
                          </span>
                          <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-cyan-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                        </a>
                      ) : (
                        <button
                          onClick={item.action}
                          className="group flex items-center gap-4 md:gap-8 text-left"
                        >
                          <span className="text-[10vw] md:text-[8vw] font-black tracking-[-0.04em] text-transparent transition-all duration-500 group-hover:text-white"
                            style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.3)' }}>
                            {item.title}
                          </span>
                          <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-cyan-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                        </button>
                      )}
                    </motion.div>
                  </div>
                ))}
              </nav>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-6 md:px-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div className="text-xs font-mono text-white/30 tracking-widest uppercase">
                Designed for Competitive Players
              </div>
              <div className="flex gap-6">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="flex items-center gap-2 text-white/40 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.icon}
                    <span className="hidden md:inline">{link.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
