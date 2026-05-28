import React from "react";
import { motion } from "motion/react";

export function PageTransition({ children, title = "" }: { children: React.ReactNode, title?: string }) {
  return (
    <>
      {/* Slide UP to cover on exit */}
      <motion.div
        className="fixed inset-0 bg-white/10 backdrop-blur-2xl z-[100] flex items-center justify-center overflow-hidden border-t border-white/20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]"
        initial={{ top: "100%" }}
        animate={{ top: "100%" }}
        exit={{ top: "0%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.span 
          initial={{ opacity: 0 }} 
          exit={{ opacity: 1 }} 
          transition={{ duration: 0.2, delay: 0.4 }}
          className="text-black font-display text-4xl font-medium tracking-tighter uppercase drop-shadow-lg"
        >
          {title}
        </motion.span>
      </motion.div>

      {/* Slide UP to reveal on enter */}
      <motion.div
        className="fixed inset-0 bg-white/10 backdrop-blur-2xl z-[100] border-b border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        initial={{ top: "0%", height: "100vh" }}
        animate={{ top: "0%", height: "0vh" }}
        exit={{ top: "0%", height: "0vh" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />
      
      {children}
    </>
  );
}
