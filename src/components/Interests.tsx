import { Link } from "react-router-dom";

export function Interests() {
  return (
    <section id="interests" className="h-screen flex-shrink-0 flex items-center px-12 md:px-16 relative w-[85vw] md:w-[60vw]">
      <div className="flex flex-col justify-end h-full w-full pb-32">
         <div className="mb-12 md:mb-24">
           <span className="font-mono text-xl md:text-2xl mb-4 text-black block">03/</span>
           <h2 className="text-[10vw] md:text-[6vw] leading-none font-display font-medium tracking-tighter uppercase">
             Core <br/> Interests
           </h2>
         </div>
         
         <div className="flex flex-col gap-6 w-full max-w-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black/10 py-6">
              <h3 className="text-2xl md:text-4xl font-display font-medium uppercase mb-4 md:mb-0">System Architecture</h3>
              <p className="text-neutral-500 font-mono text-sm max-w-xs">Writing the rules and coding infrastructure.</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black/10 py-6">
              <h3 className="text-2xl md:text-4xl font-display font-medium uppercase mb-4 md:mb-0">Agentic AI</h3>
              <p className="text-neutral-500 font-mono text-sm max-w-xs">Building the KZN Iron Man tech lab brain.</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black/10 py-6">
              <h3 className="text-2xl md:text-4xl font-display font-medium uppercase mb-4 md:mb-0">Cybersecurity</h3>
              <p className="text-neutral-500 font-mono text-sm max-w-xs">MWR CyberSec Learnship & defense.</p>
            </div>
         </div>
      </div>
    </section>
  );
}
