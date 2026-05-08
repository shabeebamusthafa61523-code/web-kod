import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Gallery from "./Gallery";
import WhyKodBrand from "../components/WhyKodBrand";

const AboutUs = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const y1 = useTransform(smoothProgress, [0, 1], [0, -150]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, 150]);

  // Animation variants for cards
  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };

  return (
    <>
    <motion.section
      ref={containerRef}
      className="relative z-10 bg-transparent min-h-screen overflow-hidden selection:bg-[#c4ec0d] selection:text-black font-geist text-white"
    >
      {/* --- CINEMATIC AMBIENCE --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }} 
          className="absolute top-[5%] -left-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#5b21b6]/10 blur-[80px] md:blur-[160px] rounded-full will-change-transform" 
        />
        <motion.div 
          style={{ y: y2 }} 
          className="absolute bottom-[10%] -right-[10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#c4ec0d]/5 blur-[80px] md:blur-[140px] rounded-full will-change-transform" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 relative z-20">
        
        {/* --- HERO SECTION --- */}
        <header className="pt-3 pb-5 md:pt-24 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 mb-8 md:ml-80"
            >
              <span className="text-[#c4ec0d] text-xs sm:text-sm md:text-lg font-bold tracking-[0.2em] sm:tracking-[0.4em] uppercase">Discovery</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="text-[#5b21b6] text-xs sm:text-sm md:text-lg font-bold tracking-[0.2em] sm:tracking-[0.4em] uppercase">Design</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="text-[#c4ec0d] text-xs sm:text-sm md:text-lg font-bold tracking-[0.2em] sm:tracking-[0.4em] uppercase">Delivery</span>
            </motion.div>

            <div className="text-center flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white text-4xl sm:text-6xl md:text-8xl font-medium tracking-tight leading-[1.1] md:leading-[0.9] max-w-4xl mx-auto"
              >
                Reshaping  
                <span className="italic font-monospace text-[#c4ec0d] "> education</span> <br className="hidden sm:block" />
                for the bold
              </motion.h1>
            </div>
          </motion.div>
        </header>

        {/* --- OUR STORY --- */}
        <article className="py-12 md:py-20 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5"
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-light leading-[1.2] md:leading-[1.1] mb-6 md:mb-8">
                Born from a dream <br className="hidden lg:block"/>
                shared by <span className="text-[#5b21b6] italic">three friends.</span>
              </h2>
              <div className="h-[1px] w-2/3 bg-gradient-to-r from-[#c4ec0d] to-transparent opacity-50" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-7 space-y-6 md:space-y-8"
            >
              <div className="space-y-4 md:space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                  KOD.BRAND Academy was born out of a powerful dream shared by four friends during our college days — a dream to reshape education into something <span className="text-white italic">more meaningful, joyful, and accessible.</span>
                </p>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-light">
                  We weren't just students; we were passionate changemakers who believed learning should inspire, not exhaust. What started as casual conversations grew into a mission: a space where students discover real-world skills through practical, industry-relevant education.
                </p>
                <p className="text-base sm:text-lg text-gray-500 italic font-light">
                  KOD.BRAND isn't just a name — it's a symbol of <span className="text-[#c4ec0d]">freshness</span> in learning, built with heart and the belief that every student deserves more than just a degree.
                </p>
              </div>
            </motion.div>
          </div>
        </article>

        {/* --- VISION & MISSION --- */}
        <section className="py-12 md:py-24 overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
            
            {/* --- VISION CARD --- */}
            <motion.div
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onMouseMove={(e) => {
                const { currentTarget: target, clientX, clientY } = e;
                const { left, top, width, height } = target.getBoundingClientRect();
                const x = ((clientX - left) / width) * 100;
                const y = ((clientY - top) / height) * 100;
                target.style.setProperty("--mouse-x", `${x}%`);
                target.style.setProperty("--mouse-y", `${y}%`);
              }}
              className="relative group p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-zinc-900/40 border border-white/5 backdrop-blur-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-out hover:border-[#c4ec0d]/40"
              style={{
                background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(196, 236, 13, 0.15) 0%, transparent 80%)`,
              }}
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700" 
                   style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: [0, 20, 0],
                  y: [0, -20, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-48 md:w-64 h-48 md:h-64 bg-[#c4ec0d]/10 blur-[60px] md:blur-[80px] rounded-full pointer-events-none"
              />

              <div className="relative z-10">
                <div className="mb-8 md:mb-12 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c4ec0d] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c4ec0d]"></span>
                  </span>
                  <span className="text-[#c4ec0d] font-bold tracking-[0.4em] uppercase text-[14px]">Our Vision</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] md:leading-[0.95]">
                  Empowering <br />
                  <span className="text-[#c4ec0d] italic font-serif">measurable</span> <br />
                  growth.
                </h2>
                
                <p className="mt-6 md:mt-8 text-base sm:text-lg text-zinc-400 font-light max-w-sm leading-relaxed">
                  Empowering businesses to achieve measurable growth through innovative digital marketing strategies and practical learning.
                </p>
              </div>

              <div className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-transparent to-[#c4ec0d]/5 group-hover:to-[#c4ec0d]/20 transition-all duration-700" />
            </motion.div>

            {/* --- MISSION CARD --- */}
            <motion.div
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onMouseMove={(e) => {
                const { currentTarget: target, clientX, clientY } = e;
                const { left, top, width, height } = target.getBoundingClientRect();
                const x = ((clientX - left) / width) * 100;
                const y = ((clientY - top) / height) * 100;
                target.style.setProperty("--mouse-x", `${x}%`);
                target.style.setProperty("--mouse-y", `${y}%`);
              }}
              className="relative group p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-zinc-900/40 border border-white/5 backdrop-blur-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-out hover:border-[#5b21b6]/40"
              style={{
                background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(91, 33, 182, 0.2) 0%, transparent 80%)`,
              }}
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700" 
                   style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

              <motion.div 
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, -30, 0],
                  y: [0, 30, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -left-20 w-64 md:w-80 h-64 md:h-80 bg-[#5b21b6]/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"
              />

              <div className="relative z-10">
                <div className="mb-8 md:mb-12 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5b21b6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5b21b6]"></span>
                  </span>
                  <span className="text-[#5b21b6] font-bold tracking-[0.4em] uppercase text-[14px]">Our Mission</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] md:leading-[0.95]">
                  Strategy to <br />
                  <span className="text-[#5b21b6] italic font-serif">execution</span> <br />
                  excellence.
                </h2>

                <p className="mt-6 md:mt-8 text-base sm:text-lg text-zinc-400 font-light max-w-sm leading-relaxed">
                  Bridge the gap between strategy and execution by delivering customized, result-driven digital marketing solutions that are transparent, future-ready, and industry-relevant.
                </p>
              </div>

              <div className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-transparent to-[#5b21b6]/5 group-hover:to-[#5b21b6]/20 transition-all duration-700" />
            </motion.div>

          </div>
        </section>
        
      </div>
      
    </motion.section>
    <WhyKodBrand/>
        <Gallery/>
</>
      );
};

export default AboutUs;