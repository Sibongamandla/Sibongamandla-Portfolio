import { PageTransition } from "../components/PageTransition";
import { Navbar } from "../components/Navbar";

export function AboutPage() {
  return (
    <PageTransition title="ABOUT">
      <div className="min-h-screen bg-transparent text-black pt-32 px-6 md:px-12 flex flex-col font-sans">
        <Navbar />
        
        <div className="max-w-4xl mx-auto w-full mt-24">
          <div className="flex flex-col md:flex-row gap-12 md:gap-32 pb-24 border-b border-black/10">
            <div className="w-full md:w-1/4 shrink-0 flex flex-col gap-8">
              <span className="font-mono text-sm uppercase tracking-widest text-neutral-500">01/</span>
              <div className="w-full aspect-[3/4] bg-neutral-200 overflow-hidden rounded-2xl border border-black/10 shadow-sm relative group">
                <img 
                  src="/assets/sibz.jpg" 
                  alt="Sibongamandla Mnyandu"
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 scale-105 group-hover:scale-100" 
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter uppercase mb-24">
                Sibongamandla <br />
                Mnyandu
              </h1>
              
              <div className="flex flex-col md:flex-row gap-12 mt-12">
                <h3 className="font-mono text-sm uppercase tracking-widest text-neutral-500 w-full md:w-32 shrink-0">
                  Hi There
                </h3>
                <div className="flex flex-col gap-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-black/80 font-medium">
                  <p>
                    I'm a 23-year-old architect of systems operating out of Gauteng. I exist at a fascinating intersection of hyper-logical software engineering, deep philosophical introspection, and a raw, uncalculated thirst for life.
                  </p>
                  <p>
                    I hold a Bachelor of Information Systems and am currently advancing through my B.IT Honours at the University of Pretoria, where my academic research delves into Agentic AI and e-Government. As the Director and newly appointed CTO of iSu Technologies, I am steering a strategic pivot toward Monthly Recurring Revenue (MRR), actively building AI-powered platforms like ConformEdge and ParallelSelf.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-12 mt-16">
                <h3 className="font-mono text-sm uppercase tracking-widest text-neutral-500 w-full md:w-32 shrink-0">
                  Philosophy & Drive
                </h3>
                <div className="flex flex-col gap-8 max-w-2xl text-lg md:text-xl leading-relaxed text-black/80 font-medium">
                  <p>
                    My mindset leans heavily toward Stoic-like practices—emphasizing self-discipline, structured routines, physical training, and pushing through discomfort. I am motivated not merely by success, but by the pursuit of character formation, delayed gratification, and becoming grounded enough to quietly handle pressure.
                  </p>
                  <p>
                    I think constantly about legacy and systems. Growing iSu Technologies, creating opportunities, and building long-term infrastructure aren't just career goals; they're an extension of wanting my output to genuinely matter. Coupling this with my deep faith, I believe true influence comes through service, discipline, and building a meaningful life beyond material accumulation.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-12 mt-16">
                <h3 className="font-mono text-sm uppercase tracking-widest text-neutral-500 w-full md:w-32 shrink-0">
                  Goals
                </h3>
                <div className="flex flex-col gap-8 max-w-2xl text-lg md:text-xl leading-relaxed text-black/80 font-medium">
                  <p>
                    Currently, my focus is directed toward finishing my academic chapters and achieving mastery in the domains I operate within.
                  </p>
                  <p>
                    In the end, it’s about drawing closer to God, completing my courses, achieving what I set out to do, and simply finding deep enjoyment in the work once the major blocks are built.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-24">
            <h3 className="font-mono text-sm uppercase tracking-widest text-neutral-800 mb-6">
              Gauteng, ZA
            </h3>
            <div className="aspect-[21/9] bg-neutral-200 w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1549643276-fdf2fab574f5?q=80&w=2600&auto=format&fit=crop" 
                alt="Landscape"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
              />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
