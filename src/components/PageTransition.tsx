import React from "react";
import { motion } from "motion/react";

export function PageTransition({ children, title = "" }: { children: React.ReactNode, title?: string }) {
  return (
    <>
      {/* Slide UP to cover on exit (No text, just covers the screen) */}
      <motion.div
        className="fixed inset-0 bg-white/10 backdrop-blur-2xl z-[100] flex items-center justify-center overflow-hidden border-t border-white/20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] pointer-events-none"
        initial={{ top: "100%" }}
        animate={{ top: "100%" }}
        exit={{ top: "0%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Slide UP to reveal on enter (Shows the new page title) */}
      <motion.div
        className="fixed inset-x-0 top-0 bg-white/10 backdrop-blur-2xl z-[100] border-b border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden pointer-events-none"
        initial={{ height: "100vh" }}
        animate={{ height: "0vh" }}
        exit={{ height: "0vh" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
      >
        <motion.span 
          initial={{ opacity: 1, y: 0 }} 
          animate={{ opacity: 0, y: -20 }} 
          transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
          className="text-black font-display text-4xl font-medium tracking-tighter uppercase drop-shadow-lg"
        >
          {title}
        </motion.span>
      </motion.div>
      
      {children}
    </>
  );
}
