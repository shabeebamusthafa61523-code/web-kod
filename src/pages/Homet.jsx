import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Footert from "../components/Footert";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Services from "../components/Services";
import Vision from "./Vision";
import FeaturesGrid from "../components/FeaturesGrid";
import BoardMembers from "../components/BoardMembers";
import Portfolio from "./Portfolio";

const images = ["/neww.jpeg", "/neww.jpeg", "/neww.jpeg"];
const overlays = ["bg-black/40", "bg-black/20", "bg-black/0"];

// 🔥 Reveal animation
function RevealSection({ children, delay = 0, enabled }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.98, filter: "blur(20px)" }}
      whileInView={
        enabled
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : {}
      }
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Homet() {
  const [index, setIndex] = useState(0);
  const [passedHero, setPassedHero] = useState(false);

  const homeRef = useRef(null);
  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const PortfolioRef = useRef(null);

  // 🔥 HERO IMAGE SCROLL EFFECT
  useEffect(() => {
    const totalSteps = images.length;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || window.innerHeight * 2.5;
      const progress = Math.min(scrollY / heroHeight, 0.999);
      const newIndex = Math.floor(progress * totalSteps);
      setIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 ENABLE ANIMATION ONLY AFTER HERO
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
      if (window.scrollY > heroBottom - window.innerHeight * 0.4) {
        setPassedHero(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-white bg-black">
      
      {/* 🔥 HERO IMAGE SECTION */}
      <div ref={homeRef} className="h-[110vh] bg-black relative md:h-[110vh]">
        <div className="sticky top-0 h-[110vh] flex justify-center items-center">
          <div className="relative w-screen md:w-full md:max-w-4xl h-[110vh] overflow-hidden">
            <img
              src={images[index]}
              alt="hero"
              className="absolute inset-0 w-full h-full object-contain md:object-cover object-center bg-black"
            />
            
            {/* 🔥 MOBILE HERO TEXT (RICH VERSION) */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-end items-start px-6 pb-12 md:hidden z-20 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* KINETIC BACKGROUND */}
              <div className="absolute inset-0 z-[-2] pointer-events-none">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-20 -left-20 w-80 h-80 bg-[#5b21b6] rounded-full blur-[100px]"
                />
                <motion.div
                  animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-20 right-0 w-64 h-64 bg-[#c4ec0d]/10 rounded-full blur-[80px]"
                />
                <div 
                  className="absolute inset-0 opacity-[0.03]" 
                  style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} 
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-[-1]" />

              <div className="perspective-1000">
                <motion.h1 className="text-4xl font-extrabold leading-tight tracking-tighter">
                  <div className="flex overflow-hidden py-1">
                    {"DIGITAL STRATEGY".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        className="inline-block relative z-10 uppercase"
                        style={{
                          background: "linear-gradient(110deg, #9ca3af, #ffffff, #9ca3af)",
                          backgroundSize: "200% 100%",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          marginRight: char === " " ? "0.3em" : "0",
                          textShadow: "2px 4px 8px rgba(0,0,0,0.5)"
                        }}
                        initial={{ y: "100%", opacity: 0, rotateX: -90 }}
                        animate={{ 
                          y: 0, 
                          opacity: 1, 
                          rotateX: 0,
                          backgroundPosition: ["0%", "200%"] 
                        }}
                        transition={{
                          y: { duration: 0.8, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.5, delay: index * 0.03 },
                          rotateX: { duration: 0.8, delay: index * 0.03 },
                          backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" }
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>

                  <motion.span
                    className="block relative mt-2"
                    initial={{ x: -20, opacity: 0, skewX: 10 }}
                    animate={{ x: 0, opacity: 1, skewX: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  >
                    <motion.span
                      className="relative z-10 block text-[#c4ec0d] uppercase italic font-serif font-medium tracking-widest pl-8"
                      style={{ textShadow: "0px 0px 20px rgba(196, 236, 13, 0.3)" }}
                      animate={{ 
                        y: [0, -5, 0],
                        filter: [
                          "drop-shadow(0 4px 4px rgba(0,0,0,0.8))", 
                          "drop-shadow(0 0 15px rgba(196,236,13,0.6))", 
                          "drop-shadow(0 4px 4px rgba(0,0,0,0.8))"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      Excellence
                    </motion.span>
                  </motion.span>
                </motion.h1>
              </div>

              {/* FLOATING PARTICLES */}
              <motion.div
                className="absolute bottom-20 left-6 w-2 h-2 bg-lime-400 rounded-full blur-sm"
                animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-24 left-16 w-1.5 h-1.5 bg-white rounded-full blur-sm"
                animate={{ y: [0, -15, 0], opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>
            <div className={`absolute inset-0 ${overlays[index]}`} />
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <RevealSection delay={0.2} enabled={passedHero}>
          <div ref={heroRef}>
            <Hero />
          </div>
        </RevealSection>

        <RevealSection delay={0.2} enabled={passedHero}>
          <div ref={coursesRef}>
            <Services />
          </div>
        </RevealSection>

        <RevealSection delay={0.2} enabled={passedHero}>
          <div>
            <FeaturesGrid />
          </div>
        </RevealSection>

        <RevealSection delay={0.3} enabled={passedHero}>
          <div ref={aboutRef}>
            <AboutUs />
          </div>
        </RevealSection>

        <RevealSection delay={0.3} enabled={passedHero}>
          <div>
            <BoardMembers />
          </div>
        </RevealSection>

        <RevealSection delay={0.3} enabled={passedHero}>
          <div ref={contactRef}>
            <Contact />
          </div>
        </RevealSection>
      </div>
    </div>
  );
}