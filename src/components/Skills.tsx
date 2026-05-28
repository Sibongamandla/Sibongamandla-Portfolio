export function Skills() {
  return (
    <section id="skills" className="h-screen flex-shrink-0 flex items-center px-6 md:px-16 relative w-[90vw] md:w-[75vw]">
      <div className="flex flex-col md:flex-row items-end justify-between w-full h-full pb-32 gap-16 md:gap-32">
        <div className="flex flex-col justify-end h-full">
           <div className="mb-12 md:mb-24">
             <span className="font-mono text-xl md:text-2xl mb-4 text-black block">04/</span>
             <h2 className="text-[10vw] md:text-[6vw] leading-none font-display font-medium tracking-tighter uppercase">
               Technical <br/> Arsenal
             </h2>
           </div>
           
           <div className="grid grid-cols-2 gap-4 gap-y-8 md:gap-x-16 max-w-2xl">
             <div className="flex flex-col gap-2">
               <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Frontend</span>
               <p className="font-medium">React, TypeScript, Tailwind CSS</p>
             </div>
             <div className="flex flex-col gap-2">
               <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Backend</span>
               <p className="font-medium">.NET 8, Node.js, NestJS, Python, Go</p>
             </div>
             <div className="flex flex-col gap-2">
               <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Database</span>
               <p className="font-medium">PostgreSQL, MongoDB, Redis</p>
             </div>
             <div className="flex flex-col gap-2">
               <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Cloud/Security</span>
               <p className="font-medium">AWS, GCP, Docker, Kubernetes</p>
             </div>
           </div>
        </div>

        <div className="hidden md:flex flex-col h-full justify-end pb-12 w-1/3">
           <div className="w-full aspect-square bg-[#111] rounded-sm p-8 flex flex-col justify-between text-[#EFA034] border-t-[16px] border-[#9E1B1B] shadow-[16px_16px_0px_0px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:-translate-y-2 hover:-translate-x-2 transition-transform">
              <span className="text-[#9E1B1B] font-mono text-xl font-bold uppercase tracking-widest z-10 block mix-blend-difference">IZINTO /</span>
              
              <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:scale-110 transition-transform duration-700">
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                   <pattern id="card-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="#9E1B1B" />
                     <circle cx="20" cy="20" r="4" fill="#EFA034" />
                   </pattern>
                   <rect width="100%" height="100%" fill="url(#card-pattern)" />
                 </svg>
              </div>

              <h3 className="text-6xl font-display uppercase tracking-tighter leading-none mt-auto z-10 bg-[#111] w-fit p-2 text-white">
                NGEKE <br/> SIPHELE.
              </h3>
           </div>
        </div>
      </div>
    </section>
  );
}
