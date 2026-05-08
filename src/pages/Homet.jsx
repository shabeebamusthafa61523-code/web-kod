import { useEffect, useState, useRef } from "react";
import { Feature, motion } from "framer-motion";
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

const images = ["/neww.jpeg", "/neww.jpeg", "/neww.jpeg"];
const overlays = ["bg-black/40", "bg-black/20", "bg-black/0"];
const navLinks = ["Home", "Services","Vision", "About Us", "Contact","Portfolio"];

// 🔥 Reveal animation (UPDATED ONLY HERE)
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
  const [menuOpen, setMenuOpen] = useState(false);

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [showLogo, setShowLogo] = useState(false);

  // 🔥 NEW STATE
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

  // 🔥 HERO IMAGE SCROLL EFFECT (UNCHANGED)
 useEffect(() => {
  const totalSteps = images.length;

  const handleScroll = () => {
    const scrollY = window.scrollY;

    const heroHeight =
      heroRef.current?.offsetHeight || window.innerHeight * 2.5;

    // 🔥 map scroll ONLY inside hero section
    const progress = Math.min(scrollY / heroHeight, 0.999);

    const newIndex = Math.floor(progress * totalSteps);

    setIndex(newIndex);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // 🔥 NAVBAR HIDE/SHOW (UNCHANGED)
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

  // 🔥 SHOW LOGO AFTER HERO (UNCHANGED)
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

  // 🔥 NEW: ENABLE ANIMATION ONLY AFTER HERO
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroBottom =
        heroRef.current.offsetTop + heroRef.current.offsetHeight;

      if (window.scrollY > heroBottom - window.innerHeight * 0.4) {
        setPassedHero(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-white">

      {/* 🔥 NAVBAR (UNCHANGED) */}
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
                  className="inline-block"
                  style={{
                    background:
                      "linear-gradient(90deg, #6b7280, #ffffff, #9ca3af, #d1d5db, #4b5563)",
                    backgroundSize: "300% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "silverFlow 10s linear infinite",
                  }}
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
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #6b7280, #ffffff, #9ca3af, #d1d5db, #4b5563)",
                    backgroundSize: "300% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "silverFlow 10s linear infinite",
                  }}
                >
                  {link}
                </span>
              </div>
            ))}
          </div>
        )}

        <style>
          {`
            @keyframes silverFlow {
              0% { background-position: 300% center; }
              100% { background-position: -300% center; }
            }
          `}
        </style>
      </motion.nav>

      {/* 🔥 HERO IMAGE SECTION (UNCHANGED) */}
      <div ref={homeRef} className="h-[110vh] bg-black relative md:h-[110vh]">
        <div className="sticky top-0 h-[110vh] flex justify-center items-center">
          <div className="relative w-screen md:w-full md:max-w-4xl h-[110vh] overflow-hidden">
            <img
              src={images[index]}
              alt="hero"
              className="absolute inset-0 w-full h-full object-contain md:object-cover object-center bg-black"
            />
            {/* 🔥 MOBILE HERO TEXT */}
{/* 🔥 MOBILE HERO TEXT (RICH VERSION) */}
<motion.div
  className="absolute inset-0 flex flex-col justify-end items-start px-6 pb-12 md:hidden z-20 overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {/* LOCALIZED KINETIC BACKGROUND */}
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

  {/* DYNAMIC BOTTOM SHADOW */}
  <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-[-1]" />

  {/* TITLE SECTION */}
  <div className="perspective-1000">
    <motion.h1 className="text-4xl font-extrabold leading-tight tracking-tighter">
      
      {/* LINE 1: STAGGERED CHARACTER REVEAL WITH SHADOW */}
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
              /* 🔥 ADDED TEXT SHADOW FOR DEPTH */
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

      {/* LINE 2: FLOATING LIME GLOW WITH INTENSE SHADOW */}
      <motion.span
        className="block relative mt-2"
        initial={{ x: -20, opacity: 0, skewX: 10 }}
        animate={{ x: 0, opacity: 1, skewX: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        <motion.span
          className="relative z-10 block text-[#c4ec0d] uppercase italic font-serif font-medium tracking-widest pl-8"
          style={{
            /* 🔥 ADDED COMPLEMENTARY LIME GLOW SHADOW */
            textShadow: "0px 0px 20px rgba(196, 236, 13, 0.3)"
          }}
          animate={{ 
            y: [0, -5, 0],
            filter: [
              "drop-shadow(0 4px 4px rgba(0,0,0,0.8))", 
              "drop-shadow(0 0 15px rgba(196,236,13,0.6))", 
              "drop-shadow(0 4px 4px rgba(0,0,0,0.8))"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Excellence
        </motion.span>

        {/* Ethereal Trail Effect */}
        <motion.span
          className="absolute inset-0 text-[#c4ec0d] opacity-20 blur-md italic font-serif"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Excellence
        </motion.span>
      </motion.span>
    </motion.h1>
  </div>
  {/* DESCRIPTION BOX - Refined Glassmorphism */}
  {/* <motion.div
    className="mt-6 backdrop-blur-xl bg-white/[0.03] border border-white/10 p-5 rounded-[2rem] shadow-2xl overflow-hidden relative"
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    {/* Internal subtle glow to catch the eye */}
    {/* <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#5b21b6]/10 blur-2xl rounded-full" /> */}
    
    

  {/* SCROLL INDICATOR (Optional) */}
 

  {/* 🔥 FLOATING PARTICLES (SUBTLE PREMIUM TOUCH) */}
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
           
{/* <LogoReveal /> */}


          <RevealSection delay={0.2} enabled={passedHero}>
            <div ref={coursesRef}>
              <Services />
            </div>
          </RevealSection>
 <RevealSection delay={0.2} enabled={passedHero}>
          <div ref={heroRef}>
            <FeaturesGrid />
          </div>
                    </RevealSection>
          <RevealSection delay={0.3} enabled={passedHero}>
            <div ref={aboutRef}>
              <AboutUs />
            </div>
          </RevealSection>
          <RevealSection delay={0.3} enabled={passedHero}>
            <div ref={aboutRef}>
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