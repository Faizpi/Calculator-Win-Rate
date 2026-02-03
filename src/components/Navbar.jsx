import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Twitter } from 'lucide-react';

const Navbar = ({ onOpenInstruction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "INSTRUCTION", action: () => { onOpenInstruction(); setIsOpen(false); } },
    { title: "CALCULATOR", href: "#calculator" },
    { title: "WIN/LOSE", href: "#win-lose" },
    { title: "SIMULATION", href: "#simulation" },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full px-6 md:px-12 py-8 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
        <div className="pointer-events-auto">
          <div className="text-2xl font-black tracking-tighter font-main">WR<span className="text-[var(--accent-blue)]">.</span>GG</div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto flex items-center gap-3 uppercase text-xs font-bold tracking-[0.2em] group hover:text-[var(--accent-blue)] transition-colors"
        >
          <span className="hidden md:block">Menu</span>
          <div className="bg-white group-hover:bg-[var(--accent-blue)] text-black p-2 rounded-full transition-colors">
            <Menu size={20} className="text-black" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-[#050505] z-[60] flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-6 md:right-12 text-white flex items-center gap-3 uppercase text-xs font-bold tracking-[0.2em] group hover:text-[var(--accent-blue)] transition-colors"
            >
              <span className="hidden md:block">Close</span>
              <div className="bg-white/10 group-hover:bg-[var(--accent-blue)] text-white group-hover:text-black p-2 rounded-full transition-colors">
                <X size={20} />
              </div>
            </button>

            <nav className="flex flex-col gap-2 md:gap-4 items-start">
              {menuItems.map((item, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div
                    onClick={item.action ? item.action : () => setIsOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    className="cursor-pointer group flex items-center gap-4"
                  >
                    {item.href ? (
                      <a href={item.href} className="flex items-center gap-4 text-5xl md:text-8xl font-black text-transparent hover:text-white transition-colors duration-300 font-main uppercase tracking-tighter" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>
                        <span className="group-hover:translate-x-4 transition-transform duration-500 ease-out">{item.title}</span>
                        <ArrowUpRight size={32} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[var(--accent-blue)]" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 text-5xl md:text-8xl font-black text-transparent hover:text-white transition-colors duration-300 font-main uppercase tracking-tighter" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>
                        <span className="group-hover:translate-x-4 transition-transform duration-500 ease-out">{item.title}</span>
                        <ArrowUpRight size={32} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[var(--accent-blue)]" />
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </nav>

            <div className="absolute bottom-12 w-full px-12 flex justify-between border-t border-white/10 pt-6">
              <div className="text-xs text-zinc-500 font-mono">
                DESIGNED FOR GAMERS
              </div>
              <div className="flex gap-6">
                {socialLinks.map((link, i) => (
                  <a key={i} href={link.href} className="text-zinc-500 hover:text-white transition-colors">
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
