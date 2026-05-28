import { PageTransition } from "../components/PageTransition";
import { Navbar } from "../components/Navbar";
import { projects } from "../data";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project, index, total }: { project: any, index: number, total: number, key?: number }) {
  const techStack = [
    "NEXT.JS • SUPABASE • GSAP",
    "REACT NATIVE • ZUSTAND • SQL",
    "ANGULAR • .NET CORE • AZURE",
    "NEXT.JS • NODE.JS • AWS"
  ];
  
  return (
    <div 
      className="group sticky w-full h-fit min-h-[90vh] md:h-[calc(100vh-4rem)] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.2)] border border-white/20 backdrop-blur-[40px] bg-neutral-900/40"
      style={{ 
        top: `calc(1rem + ${index * 1}rem)` 
      }}
    >
      {/* Background with blurry blobs styling adjusted for glass overlay */}
      <div className="absolute inset-0 bg-transparent overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className={`absolute top-[30%] left-[20%] w-[60%] h-[60%] rounded-full opacity-[0.15] blur-[120px] ${
          ['bg-blue-400', 'bg-purple-400', 'bg-emerald-400', 'bg-orange-400'][index % 4]
        }`}></div>
      </div>

      <div className="relative z-10 w-full h-full p-6 md:p-12 xl:p-16 flex flex-col justify-between">
        
        {/* Top Row */}
        <div className="flex justify-between items-start w-full">
          {/* Tracker Circle */}
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/30 flex flex-col items-center justify-center backdrop-blur-xl bg-white/10 shrink-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
             <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1 leading-none">Project</span>
             <span className="font-mono text-sm md:text-base font-medium text-white leading-none">
                {String(index + 1).padStart(2, '0')} <span className="opacity-30 mx-2">|</span> {String(total).padStart(2, '0')}
             </span>
          </div>

          {/* Right Text Block (Hidden on mobile) */}
          <div className="hidden md:flex flex-col items-end w-[350px] xl:w-[450px]">
            <div className="flex gap-[3px] mb-12 xl:mb-16 opacity-40">
              <div className="w-[1.5px] h-4 bg-white"></div>
              <div className="w-[1.5px] h-4 bg-white"></div>
              <div className="w-[1.5px] h-4 bg-white"></div>
              <div className="w-[1.5px] h-4 bg-white"></div>
            </div>

            <div className="w-full border-b border-white/20 pb-4 mb-4 text-left">
              <h4 className="font-mono text-xs xl:text-sm tracking-[0.2em] uppercase text-white">{project.category}</h4>
            </div>
            <div className="w-full border-b border-white/20 pb-4 text-left">
              <p className="font-mono text-[10px] xl:text-xs tracking-widest uppercase text-white/50">
                {techStack[index % techStack.length]}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Text Block */}
        <div className="md:hidden w-full mt-8 mb-4">
           <div className="w-full border-b border-white/20 pb-3 mb-3 text-left">
              <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-white">{project.category}</h4>
           </div>
           <div className="w-full border-b border-white/20 pb-3 text-left">
              <p className="font-mono text-[8px] tracking-widest uppercase text-white/50">
                {techStack[index % techStack.length]}
              </p>
           </div>
        </div>

        {/* Mobile Image - Glassmorphism */}
        <div className="md:hidden w-full aspect-video rounded-xl border border-white/20 overflow-hidden mb-8 shadow-2xl shrink-0 bg-white/10 backdrop-blur-md">
           <div className="w-full h-5 border-b border-white/20 flex items-center px-2 gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
           </div>
           <div className="w-full h-[calc(100%-1.25rem)] p-2">
             <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded shadow-inner opacity-90 border border-white/10" />
           </div>
        </div>

        {/* Bottom Content */}
        <div className="w-full flex-1 flex flex-col justify-end relative">
          <div className="max-w-md xl:max-w-2xl z-20 pb-4 md:pb-8">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[90px] xl:text-[110px] font-display uppercase tracking-[-0.04em] text-white mb-4 md:mb-6 leading-[0.85]">
              {project.title}
            </h2>
            <p className="text-white/60 text-sm md:text-lg xl:text-xl leading-relaxed mb-8 md:mb-10 xl:mb-14 font-light max-w-[280px] sm:max-w-sm xl:max-w-md">
               {(project as any).details}
            </p>
            
            <a href="#" className="flex items-center gap-3 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors group/btn w-fit">
               ( <span className="group-hover/btn:underline underline-offset-4 md:underline-offset-8">VISIT SITE</span> <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 ml-1 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /> )
            </a>
          </div>

          {/* Absolute Desktop Mockup - Glassmorphism version */}
          <div className="hidden md:flex absolute bottom-0 right-0 w-[55%] lg:w-[45%] max-w-4xl aspect-[16/10] bg-white/10 backdrop-blur-2xl rounded-t-2xl xl:rounded-t-[32px] overflow-hidden shadow-[0_-8px_32px_rgba(0,0,0,0.3)] translate-y-8 group-hover:translate-y-4 transition-transform duration-[800ms] ease-out z-10 border border-white/20 border-b-0 flex-col">
             <div className="w-full h-8 xl:h-10 bg-white/10 border-b border-white/20 flex items-center px-4 xl:px-6 gap-2 shrink-0">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30 backdrop-blur-sm border border-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30 backdrop-blur-sm border border-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30 backdrop-blur-sm border border-white/20"></div>
                </div>
                <div className="mx-auto w-1/3 h-3 xl:h-4 bg-white/10 rounded-full border border-white/10 shadow-inner"></div>
             </div>
             <div className="w-full h-full p-4 xl:p-8 overflow-hidden relative bg-black/10">
                <div className="absolute inset-0 rounded-lg border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden translate-y-4 mx-4 xl:mx-8 mb-4">
                   <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 scale-100 group-hover:scale-[1.02] transition-all duration-1000 ease-out" 
                   />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function WorksPage() {
  return (
    <PageTransition title="WORKS">
      <div className="min-h-screen bg-[#f5f5f5] text-black flex flex-col font-sans selection:bg-black selection:text-white pb-32">
        <Navbar />
        
        <div className="w-full flex flex-col items-center justify-center pt-40 md:pt-48 pb-24 text-center px-4">
           <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-neutral-400 mb-6">05/ Works</span>
           <h1 className="text-5xl sm:text-6xl md:text-8xl xl:text-[120px] font-display font-medium tracking-tighter text-black uppercase leading-none">
             Selected <br /> Works
           </h1>
           <p className="text-neutral-500 font-medium max-w-xl mx-auto mt-8 md:text-lg">
             A curated selection of enterprise applications, scalable automated workflows, and high-performance digital products.
           </p>
        </div>
        
        <div className="w-full max-w-[1700px] mx-auto px-4 md:px-8">
          <div className="relative w-full flex flex-col mt-8 pb-[20vh]">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                total={projects.length} 
              />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
