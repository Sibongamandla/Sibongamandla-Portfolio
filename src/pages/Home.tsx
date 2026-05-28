import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Interests } from "../components/Interests";
import { Skills } from "../components/Skills";
import { Work } from "../components/Work";
import { Freelance } from "../components/Freelance";
import { Contact } from "../components/Contact";
import { PageTransition } from "../components/PageTransition";
import { useMediaQuery } from "../hooks/useMediaQuery";

export function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Use a media query to determine if the user is on desktop (horizontal scroll) or mobile (vertical stack)
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  
  // Apply friction-based smoothing to the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30, // Higher damping equals more friction
    restDelta: 0.001
  });

  // Calculate horizontal translation based on smooth scroll progress
  const x = useTransform(smoothProgress, (pos) => `calc(${pos * -100}% + ${pos * 100}vw)`);

  // Prevent hydration mismatch by returning a simple state before mount
  if (!mounted) return null;

  return (
    <PageTransition title="HOME">
      {isDesktop ? (
        <div ref={targetRef} id="scroll-container" className="bg-transparent text-black h-[1000vh] relative">
          <Navbar />
          <div className="sticky top-0 h-screen overflow-hidden flex items-center">
            <motion.div style={{ x }} className="flex h-full w-max items-center will-change-transform">
              <Hero />
              <About />
              <Interests />
              <Skills />
              <Work />
              <Freelance />
              <Contact />
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="bg-transparent text-black min-h-screen relative flex flex-col w-full overflow-x-hidden">
          <Navbar />
          <div className="flex flex-col w-full items-center">
            {/* On mobile, override the fixed width classes in these components via global scope if needed, 
                or just let their intrinsic mobile widths (w-[90vw], w-[100vw]) handle it. */}
            <Hero />
            <About />
            <Interests />
            <Skills />
            <Work />
            <Freelance />
            <Contact />
          </div>
        </div>
      )}
    </PageTransition>
  );
}
