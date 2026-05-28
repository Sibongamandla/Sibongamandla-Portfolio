import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="h-screen flex-shrink-0 flex flex-col justify-center px-12 md:pl-32 md:pr-16 relative w-[90vw] md:w-[75vw]">
      <div className="flex flex-col md:flex-row items-end justify-between w-full mt-20">
        <div className="flex flex-col">
          <span className="font-mono text-xl md:text-2xl mb-4 text-[#9E1B1B]">01/</span>
          <span className="text-xl md:text-2xl font-bold max-w-xs leading-tight">
            From Gauteng with Love
          </span>
        </div>
        
        <h1 className="text-[12vw] md:text-[10vw] leading-[0.85] font-display font-medium tracking-tighter uppercase text-black text-right md:-mr-4">
          <span className="block">Software</span>
          <span className="block">Engineer</span>
        </h1>
      </div>

      <div className="absolute bottom-12 left-6 md:left-12 flex flex-col">
        <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-display font-medium tracking-tighter uppercase text-black">
          <span className="block">Sibongamandla</span>
          <span className="block">Mnyandu</span>
        </h1>
        <p className="mt-4 text-xs font-mono font-medium flex items-center gap-2">
          &copy; 2026 Portfolio
        </p>
      </div>

      <div className="absolute bottom-12 right-6 md:right-12 hidden md:block">
        <p className="text-sm font-medium max-w-xs text-right uppercase tracking-wider">
          Based in Gauteng,<br/>
          Passionate in Enterprise, Web Architecture & Cybersecurity
        </p>
      </div>
      <div className="absolute bottom-12 right-1/2 translate-x-1/2 text-2xl font-black">
        &rarr;
      </div>
    </section>
  );
}
