import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { freelanceProjects } from "../data";
import { ArrowUpRight } from "lucide-react";

export function Freelance() {
  return (
    <section id="freelance" className="h-screen flex-shrink-0 flex items-center px-6 md:px-32 relative">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-32 h-full py-32">
        <div className="flex flex-col max-w-sm mr-12 shrink-0">
          <span className="font-mono text-xl md:text-2xl mb-4 text-[#9E1B1B]">06/</span>
          <h2 className="text-[6vw] leading-none font-display font-medium tracking-tighter uppercase mb-6">
            Independent <br/> Works
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8">
            STEERING A STRATEGIC PIVOT <br/>
            &mdash;&mdash; TOWARD MONTHLY RECURRING <br/>
            REVENUE (MRR).
          </p>
          <Link to="/freelance" className="px-8 py-4 bg-[#111] text-[#EFA034] rounded-none border-b-4 border-r-4 border-[#9E1B1B] font-bold uppercase tracking-widest hover:bg-[#9E1B1B] hover:text-white hover:border-[#111] transition-colors text-sm w-fit shadow-[8px_8px_0px_#000] group">
            View Freelance Projects <ArrowUpRight className="inline-block w-4 h-4 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {freelanceProjects.map((project, index) => (
          <div key={project.id} className="relative w-[70vw] md:w-[45vw] aspect-[4/3] group overflow-hidden rounded-2xl flex-shrink-0">
            <div className="absolute inset-0 bg-neutral-900/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div>
                  <span className="font-mono text-xs text-[#EFA034] uppercase tracking-widest block mb-2">{project.category}</span>
                  <h3 className="text-3xl text-white font-display uppercase tracking-tight">{project.title}</h3>
               </div>
               <a href={project.url} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                  <ArrowUpRight className="text-black w-6 h-6" />
               </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
