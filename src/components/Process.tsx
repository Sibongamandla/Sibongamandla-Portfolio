import { processSteps } from "../data";

export function Process() {
  return (
    <section id="process" className="h-screen flex-shrink-0 flex items-center px-6 md:px-32 relative text-black border-l border-neutral-300 ml-12 md:ml-32">
      <div className="flex items-center h-full py-32">
        <div className="flex flex-col mr-16 md:mr-32">
          <span className="font-mono text-xl md:text-2xl mb-4 text-[#9E1B1B]">03/</span>
          <h2 className="text-[6vw] leading-none font-display font-medium tracking-tighter uppercase mb-6">
            The <br/> Process
          </h2>
        </div>
        
        <div className="flex gap-16 md:gap-32">
          {processSteps.map((step) => (
            <div key={step.number} className="w-[70vw] md:w-[35vw] flex flex-col">
              <div className="font-mono text-xl text-neutral-400 mb-6">
                {step.number} //
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-medium mb-6">
                {step.title}
              </h3>
              <p className="text-neutral-500 text-base md:text-lg max-w-md leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
