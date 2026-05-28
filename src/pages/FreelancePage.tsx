import { PageTransition } from "../components/PageTransition";
import { Navbar } from "../components/Navbar";
import { freelanceProjects } from "../data";
import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export function FreelancePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            if (index !== null) {
              setActiveIndex(Number(index));
            }
          }
        });
      },
      { threshold: 0.5 } // trigger when 50% of image container is visible
    );

    const elements = document.querySelectorAll(".project-image-container");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <PageTransition title="FREELANCE">
      <div className="min-h-screen bg-[#eee] text-black flex flex-col font-sans selection:bg-black selection:text-white px-6 md:px-12 pt-32">
        <Navbar />

        <div className="max-w-7xl mx-auto w-full flex flex-col mt-24">
          <div className="flex flex-col md:flex-row gap-12 md:gap-32 pb-24 border-b border-black/10">
            <div className="w-full md:w-1/4 shrink-0 font-mono text-sm uppercase tracking-widest text-neutral-500">
              06/
            </div>
            <div className="flex flex-col">
              <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter uppercase mb-6">
                Freelance <br /> Works
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed text-black/80 font-medium max-w-2xl mt-8">
                This is my project-to-project consulting work, helping businesses and individuals establish their digital presence with custom tailored web solutions.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full relative">
            {/* Left Column: Scrolling Images */}
            <div className="w-full md:w-1/2 flex flex-col pb-32">
              {freelanceProjects.map((project, index) => (
                <div
                  key={project.id}
                  data-index={index}
                  className="project-image-container h-screen flex flex-col justify-center py-16 pr-0 md:pr-16"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block relative bg-neutral-200 aspect-[4/3] w-full group overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </a>
                  
                  {/* Mobile details (visible only on small screens) */}
                  <div className="md:hidden mt-8 flex flex-col">
                     <span className="font-mono text-sm text-neutral-500 mb-2">
                       [ {String(index + 1).padStart(2, '0')} / {String(freelanceProjects.length).padStart(2, '0')} ]
                     </span>
                     <h2 className="text-3xl font-display font-medium uppercase mb-2">
                        {project.title}
                     </h2>
                     <p className="text-neutral-500 font-mono text-xs uppercase mb-4">
                        Freelance / {project.category}
                     </p>
                     <p className="text-black/70 mb-6 text-sm">
                        {project.details}
                     </p>
                     <a href={project.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest text-black/50 hover:text-black transition-colors w-fit pb-1 border-b border-black/20 hover:border-black">
                        View Live Site <ExternalLink className="w-3 h-3" />
                     </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Sticky Content (Hidden on mobile) */}
            <div className="hidden md:flex w-1/2 sticky top-0 h-screen flex-col justify-center pl-16">
              <div className="relative w-full h-96">
                {freelanceProjects.map((project, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div
                      key={project.id}
                      className={`absolute inset-0 flex flex-col transition-opacity duration-700 ease-in-out ${
                        isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="flex justify-between items-end border-b border-black/10 pb-4 mb-16">
                        <span className="text-sm tracking-widest uppercase font-medium text-black">WORKS</span>
                        <span className="text-xs font-mono text-neutral-500">/sibz</span>
                      </div>

                      <div className="mb-6 font-mono tracking-widest text-xs flex items-center gap-4 text-neutral-500">
                        <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center relative"></div>
                        <span className="-ml-14 bg-[#eee] pr-2 relative z-10 text-black">
                          [ {String(index + 1).padStart(2, '0')} / {String(freelanceProjects.length).padStart(2, '0')} ]
                        </span>
                      </div>

                      <h2 className="text-4xl lg:text-5xl uppercase font-display font-medium tracking-wide mb-4 text-black">
                        {project.title}
                      </h2>

                      <p className="text-neutral-600 mb-6 font-mono text-sm uppercase tracking-widest">
                        Freelance / {project.category}
                      </p>

                      <p className="text-black/70 font-medium leading-relaxed max-w-md text-lg mb-10">
                        {project.details}
                      </p>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-xs uppercase tracking-widest font-medium text-neutral-500 hover:text-black transition-colors w-fit pb-2 border-b border-black/20 hover:border-black"
                      >
                        View Live Site <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
