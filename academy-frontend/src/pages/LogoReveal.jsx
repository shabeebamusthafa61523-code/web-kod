import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const TransparentLogoReveal = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 1. Brightness and Light Intensity
  const brightnessValue = useTransform(scrollYProgress, [0, 0.4], [0.3, 1.2]);
  const lightOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  
  // 2. Control the mask spread (revealing the logo)
  const maskSpread = useTransform(scrollYProgress, [0, 0.4], ["20%", "100%"]);

  const smoothBrightness = useSpring(brightnessValue, { stiffness: 50, damping: 20 });
  const smoothLight = useSpring(lightOpacity, { stiffness: 50, damping: 20 });

  return (
    /* Removed bg-black to keep the section transparent */
    <div ref={containerRef} className="relative w-full h-[180vh] bg-transparent">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Overhead Light Source (Now transparent background friendly) */}
        <motion.div 
          style={{ opacity: smoothLight }}
          className="absolute top-0 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center"
        >
          <div className="w-24 h-1 bg-white/20 blur-md rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)]" />
          
          <div 
            className="w-[600px] h-[600px] -mt-2"
            style={{
              background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 60%)",
              filter: "blur(40px)"
            }}
          />
        </motion.div>

        {/* 
            The Logo Container 
            Changed max-w-5xl to max-w-2xl to make it smaller 
        */}
        <motion.div
          style={{
            filter: useTransform(smoothBrightness, (v) => `brightness(${v}) contrast(1.1)`),
            WebkitMaskImage: useTransform(
              maskSpread,
              (s) => `radial-gradient(circle at center, black ${s}, transparent 90%)`
            ),
            maskImage: useTransform(
              maskSpread,
              (s) => `radial-gradient(circle at center, black ${s}, transparent 90%)`
            ),
          }}
          className="relative z-10 w-full max-w-2xl px-12"
        >
          <img
            src="logo2.png"
            alt="KOD.brand"
            className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          />
        </motion.div>

        {/* 
            Note: Removed the Deep Vignette and Wall Texture 
            to ensure true transparency behind the logo.
        */}
      </div>

      {/* Scrollable Space */}
      <div className="h-[80vh]" />
    </div>
  );
};

export default TransparentLogoReveal;