export function Contact() {
  return (
    <section id="contact" className="w-[100vw] h-screen flex-shrink-0 flex items-center relative text-[#f5f5f0]">
      {/* Background with gradient on the left blending from white/orange to black */}
      <div className="absolute inset-0 bg-[#0a0a0a] z-0 overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 -left-64 w-[120vh] h-[120vh] opacity-80 blur-[100px] z-0 rounded-full mix-blend-screen scale-x-[2.0]" style={{ backgroundImage: "radial-gradient(circle at center, #9E1B1B 0%, #4d190b 40%, transparent 70%)" }}></div>
      </div>
      
      <div className="w-full h-full relative z-10 px-12 md:px-32 flex flex-col justify-center max-w-[80vw]">
        <h2 className="text-[14vw] md:text-[12vw] leading-none font-display font-bold tracking-tighter uppercase mb-6 flex flex-col items-start gap-4 text-[#f5f5f0]">
          <span className="block">Let's have</span>
          <span className="block">a chat</span>
        </h2>
        
        <div className="flex gap-4 mt-8 w-full border-t border-white/20 pt-12 items-center">
          <a href="mailto:sibonga@isutech.co.za" className="bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors border border-white/10 px-12 py-6 rounded-full text-lg tracking-wide uppercase font-mono shadow-xl relative overflow-hidden group">
            <span className="relative z-10">sibonga@isutech.co.za</span>
          </a>
          <a href="tel:+27763858588" className="bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors border border-white/10 px-12 py-6 rounded-full text-lg tracking-wide font-mono shadow-xl relative overflow-hidden group">
            <span className="relative z-10">+27 76 385 8588</span>
          </a>
          
          <div className="ml-auto">
             <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors border border-white/10 px-12 py-6 rounded-full text-lg tracking-wide font-mono shadow-xl flex items-center gap-4 group cursor-pointer">
               <span className="group-hover:-translate-x-4 transition-transform">&larr;</span> Back
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
