import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 text-black bg-white/40 backdrop-blur-xl border-b border-white/50 shadow-[0_4px_32px_rgba(0,0,0,0.05)]"
    >
      <Link to="/" className="font-display text-xl font-bold tracking-tight z-50">
        Sibongamandla<span className="text-[#9E1B1B]">.</span>
      </Link>
      <nav className="hidden md:flex items-center gap-4 text-xs font-medium text-neutral-500 uppercase tracking-widest z-50">
        <Link to="/works" className="hover:text-black transition-colors">Works</Link>
        <span>,</span>
        <Link to="/freelance" className="hover:text-black transition-colors">Freelance</Link>
        <span>,</span>
        <Link to="/about" className="hover:text-black transition-colors">About</Link>
        <span>,</span>
        <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="hover:text-black transition-colors uppercase tracking-widest text-xs font-medium">Contact</button>
      </nav>
      <div className="flex items-center gap-6 text-sm font-medium z-50">
        <Link to="/card" className="hover:text-neutral-500 transition-colors uppercase font-mono text-xs hidden md:block">Profile Card</Link>
        <a href="https://github.com/sibongamandla" target="_blank" rel="noreferrer" className="hover:text-neutral-500 transition-colors">Github</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-neutral-500 transition-colors">LinkedIn</a>
        <a href="mailto:sibonga@isutech.co.za" className="hover:text-neutral-500 transition-colors">Email</a>
      </div>
    </motion.header>
  );
}
