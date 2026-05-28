import { Link } from "react-router-dom";

export function About() {
  return (
    <section id="about" className="h-screen flex-shrink-0 flex items-center px-6 md:px-16 relative w-[100vw] md:w-[80vw]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full pb-32 gap-16 md:gap-32">
        <div className="flex flex-col justify-end h-full">
           <div className="mb-24">
             <span className="font-mono text-xl md:text-2xl mb-4 text-black block">02/</span>
             <p className="text-black font-medium text-sm md:text-base leading-relaxed uppercase tracking-wide max-w-xs">
               I BUILD THE INFRASTRUCTURE <br/>
               &mdash;&mdash; BEHIND SEAMLESS <br/>
               DIGITAL EXPERIENCES.
             </p>
           </div>
            <div className="flex items-center gap-6 flex-wrap md:flex-nowrap">
              {/* African inspired geometric blocks */}
              <div className="w-32 h-32 md:w-48 md:h-48 bg-black rounded-sm flex items-center justify-center p-6 border-b-[8px] border-r-[8px] border-[#9E1B1B] shrink-0">
                 <div className="w-full h-full border-4 border-white flex items-center justify-center relative overflow-hidden">
                    {/* Triangles inside */}
                    <div className="absolute top-0 left-0 w-0 h-0 border-l-[32px] border-l-transparent border-t-[32px] border-t-[#EFA034] border-r-[32px] border-r-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[32px] border-l-transparent border-b-[32px] border-b-[#EFA034] border-r-[32px] border-r-transparent"></div>
                 </div>
              </div>
              <div className="w-32 h-32 md:w-48 md:h-48 bg-[#9E1B1B] border-t-[8px] border-l-[8px] border-black flex flex-col items-center justify-center relative shrink-0">
                 {/* Shield-like approximation */}
                 <div className="w-16 h-24 bg-black rounded-b-full rounded-t-sm flex items-center justify-center">
                   <div className="w-4 h-12 bg-white skew-x-12"></div>
                 </div>
              </div>
              {/* Profile Photo block */}
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-sm overflow-hidden border-b-[8px] border-r-[8px] border-black bg-neutral-200 shrink-0 relative group">
                 <img 
                   src="/assets/sibz.jpg" 
                   alt="Sibongamandla Mnyandu" 
                   className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 scale-105 group-hover:scale-100" 
                 />
              </div>
            </div>
        </div>

        <div className="flex flex-col h-full justify-end pb-12">
          <h2 className="text-[clamp(3.5rem,min(5.5vw,14vh),8rem)] leading-[0.85] font-display font-medium tracking-tighter uppercase mb-12 flex flex-col items-start text-black">
            <span className="block">DESIGN</span>
            <span className="block text-[#9E1B1B]">BACKEND</span>
            <span className="block">FRONTEND</span>
            <span className="block">FULLSTACK</span>
          </h2>
          
          <Link to="/about" className="px-8 py-4 border border-black rounded-xl text-black font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-colors text-sm w-fit">
            More About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
