import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { projects } from "../data";

export function Work() {
  return (
    <section id="work" className="h-screen flex-shrink-0 flex items-center px-12 md:px-32 relative">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-32 h-full py-32">
        <div className="flex flex-col max-w-sm mr-12 shrink-0">
          <span className="font-mono text-xl md:text-2xl mb-4 text-[#9E1B1B]">05/</span>
          <h2 className="text-[6vw] leading-none font-display font-medium tracking-tighter uppercase mb-6">
            Selected <br/> Work
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8">
            I BUILD THE INFRASTRUCTURE <br/>
            &mdash;&mdash; BEHIND SEAMLESS <br/>
            DIGITAL EXPERIENCES.
          </p>
          <Link to="/works" className="px-8 py-4 bg-[#111] text-[#EFA034] rounded-none border-b-4 border-r-4 border-[#9E1B1B] font-bold uppercase tracking-widest hover:bg-[#9E1B1B] hover:text-white hover:border-[#111] transition-colors text-sm w-fit shadow-[8px_8px_0px_#000]">
            View All Projects
          </Link>
        </div>

        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="group cursor-pointer shrink-0 w-[85vw] sm:w-[60vw] md:w-[40vw] flex flex-col h-full justify-center"
          >
            <div className="overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3] mb-6 relative">
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-medium mb-1 group-hover:tracking-wide transition-all duration-500">{project.title}</h3>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{project.category}</span>
                </div>
                <span className="font-mono text-xs text-neutral-400 bg-neutral-200 px-3 py-1 rounded-full">{project.year}</span>
              </div>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-md">
                {(project as any).details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
