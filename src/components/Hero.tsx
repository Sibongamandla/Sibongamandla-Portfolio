import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="h-screen flex-shrink-0 flex flex-col justify-between pt-20 pb-12 px-12 md:pl-32 md:pr-16 relative w-[90vw] md:w-[75vw]">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-end justify-between w-full mt-4 md:mt-8">
        <div className="flex flex-col pb-4 md:pb-0 z-10">
          <span className="font-mono text-xl md:text-2xl mb-4 text-[#9E1B1B]">01/</span>
          <span className="text-xl md:text-2xl font-bold max-w-xs leading-tight">
            From Gauteng with Love
          </span>
        </div>
        
        <h1 className="text-[clamp(3.5rem,min(9vw,22vh),10rem)] leading-[0.85] font-display font-medium tracking-tighter uppercase text-black text-right md:-mr-4 z-10">
          <span className="block">Software</span>
          <span className="block">Engineer</span>
        </h1>
      </div>

      {/* Spacer to absorb extra height and prevent middle collision */}
      <div className="flex-grow min-h-[2rem]"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-end justify-between w-full relative mb-4 md:mb-0">
        <div className="flex flex-col z-10">
          <h1 className="text-[clamp(3.5rem,min(8.5vw,22vh),10rem)] leading-[0.85] font-display font-medium tracking-tighter uppercase text-black">
            <span className="block">Sibongamandla</span>
            <span className="block">Mnyandu</span>
          </h1>
          <p className="mt-4 text-xs font-mono font-medium flex items-center gap-2">
            &copy; 2026 Portfolio
          </p>
        </div>

        <div className="hidden md:block z-10 mb-2">
          <p className="text-sm font-medium max-w-xs text-right uppercase tracking-wider">
            Based in Gauteng,<br/>
            Passionate in Enterprise, Web Architecture & Cybersecurity
          </p>
        </div>
      </div>

      {/* Arrow placed explicitly with absolute to avoid disrupting flex layout */}
      <div className="absolute bottom-12 right-1/2 translate-x-1/2 text-2xl font-black z-0">
        &rarr;
      </div>
    </section>
  );
}
