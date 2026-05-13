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
import LogoReveal from "./LogoReveal";
import Portfolio from "./Portfolio";

const videoUrl = "/web int.mp4"; 


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
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [passedHero, setPassedHero] = useState(false);

  const homeRef = useRef(null);
  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const PortfolioRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

 

  useEffect(() => {
    const handleScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScrollDirection);
    return () => window.removeEventListener("scroll", handleScrollDirection);
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroTop = heroRef.current.offsetTop;
      const triggerPoint = heroTop - window.innerHeight * 0.2;
      setShowLogo(window.scrollY > triggerPoint);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  handleResize(); // Check on initial load
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
  return (
    <div className="text-white">
     

      {/* <div ref={homeRef} className="relative w-full h-[100svh] overflow-hidden bg-black flex items-center justify-center"> */}
  
  {/* VIDEO CONTAINER */}
 {/* 1. Remove the 'flex items-center justify-center' from this wrapper to let content fill space naturally */}
<div 
  ref={homeRef} 
  className="relative w-full h-[100svh] overflow-hidden bg-black z-[20]" // Added z-[20] to elevate the entire block
>
  
  {/* VIDEO CONTAINER */}
  <div className="relative z-[21] w-full h-full md:rounded-none overflow-hidden"> 
    {/* Increased to z-[21] to stay above the wrapper */}
    <video
      autoPlay
      muted
      playsInline
      key={isMobile ? "mobile-video" : "desktop-video"} 
      className="w-full h-full object-cover object-center"
    >
      <source src={isMobile ? "/web ph (2).mp4" : "/web int.mp4"} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* OVERLAY */}
    <div className="absolute inset-0 w-full h-full bg-black/40 md:bg-black/20 z-[22]" /> 
    {/* Overlay must be higher than the video (z-[21]) to darken it */}
  </div>

  {/* KINETIC DECORATIVE ELEMENTS */}
  {/* If you want these BEHIND the video, set z to [5]. If you want them ON TOP, set z to [30] */}
  <div className="absolute inset-0 z-[10] pointer-events-none overflow-hidden">
    <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-10 -left-10 w-64 h-64 md:w-96 md:h-96 bg-[#5b21b6] rounded-full blur-[80px] md:blur-[120px]"
    />
  </div>
  {/* SCROLL INDICATOR */}
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2 }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-[3]"
  >
    <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
    <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold">Scroll</span>
  </motion.div>
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
          <FeaturesGrid />
        </RevealSection>

        <RevealSection delay={0.3} enabled={passedHero}>
          <div ref={aboutRef}>
            <AboutUs />
          </div>
        </RevealSection>

        <RevealSection delay={0.3} enabled={passedHero}>
          <BoardMembers />
        </RevealSection>

        <RevealSection delay={0.3} enabled={passedHero}>
          <div ref={contactRef}>
            <Contact />
          </div>
        </RevealSection>
      </div>

      <style>
        {`
          .silver-flow-text {
            background: linear-gradient(90deg, #6b7280, #ffffff, #9ca3af, #d1d5db, #4b5563);
            background-size: 300% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: silverFlow 10s linear infinite;
          }
          @keyframes silverFlow {
            0% { background-position: 300% center; }
            100% { background-position: -300% center; }
          }
        `}
      </style>
    </div>
  );
}
