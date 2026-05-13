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
const navLinks = ["Home", "Services","Vision", "About Us", "Contact","Portfolio"];

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

  const handleNavClick = (link) => {
    if (link === "Home") scrollToSection(homeRef);
    if (link === "Services") scrollToSection(coursesRef);
    if (link === "Vision") window.location.href = "/vision";
    if (link === "About Us") scrollToSection(aboutRef);
    if (link === "Contact") scrollToSection(contactRef);
    if (link === "Portfolio") scrollToSection(PortfolioRef);
    setMenuOpen(false);
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
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: showNav ? 0 : -100,
          opacity: showNav ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-[3px]"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 relative flex items-center">
          <motion.div
            className="cursor-pointer z-10"
            onClick={() => scrollToSection(homeRef)}
            initial={false}
            animate={{
              opacity: showLogo ? 1 : 0,
              y: showLogo ? 0 : -8,
              scale: showLogo ? 1 : 0.98,
              filter: showLogo ? "blur(0px)" : "blur(6px)",
            }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.8, 0.25, 1],
            }}
          >
            <img src="/logo2.png" alt="logo" className="h-10 w-auto" />
          </motion.div>

          <ul className="hidden md:flex items-center space-x-12 font-semibold absolute left-1/2 transform -translate-x-1/2 ">
            {navLinks.map((link, i) => (
              <li
                key={i}
                onClick={() => handleNavClick(link)}
                className="relative cursor-pointer group text-md tracking-wide"
              >
                <span
                  className="inline-block silver-flow-text"
                >
                  {link}
                </span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-gray-500 via-gray-200 to-gray-400 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          <div className="md:hidden ml-auto z-10">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              ☰
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/90 text-center py-6 space-y-6">
            {navLinks.map((link, i) => (
              <div
                key={i}
                onClick={() => handleNavClick(link)}
                className="text-lg cursor-pointer"
              >
                <span className="silver-flow-text">{link}</span>
              </div>
            ))}
          </div>
        )}
      </motion.nav>

      {/* <div ref={homeRef} className="relative w-full h-[100svh] overflow-hidden bg-black flex items-center justify-center"> */}
  
  {/* VIDEO CONTAINER */}
 {/* 1. Remove the 'flex items-center justify-center' from this wrapper to let content fill space naturally */}
<div ref={homeRef} className="relative w-full h-[100svh] overflow-hidden bg-black">
  
  {/* 2. Remove the md:w-[90%] and md:h-[85vh] to go edge-to-edge */}
  <div className="relative z-0 w-full h-full md:rounded-none overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      key={isMobile ? "mobile-video" : "desktop-video"} 
      className="w-full h-full object-cover object-center"
    >
      <source src={isMobile ? "/web ph.mp4" : "/web int.mp4"} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* 3. This overlay will now be pinned to the true edges of the browser */}
    <div className="absolute inset-0 w-full h-full bg-black/40 md:bg-black/20 z-[1]" />
  </div>

  {/* ... rest of your kinetic elements and scroll indicator ... */}

  {/* KINETIC DECORATIVE ELEMENTS (Glows) */}
  <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
    <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-10 -left-10 w-64 h-64 md:w-96 md:h-96 bg-[#5b21b6] rounded-full blur-[80px] md:blur-[120px]"
    />
    <motion.div
      animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-10 right-0 w-48 h-48 md:w-80 md:h-80 bg-[#c4ec0d]/10 rounded-full blur-[60px] md:blur-[100px]"
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
