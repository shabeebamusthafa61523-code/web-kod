import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

function RevealSection({ children, delay = 0, enabled }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.98, filter: "blur(20px)" }}
      whileInView={
        enabled ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}
      }
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Homet() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [passedHero, setPassedHero] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // POPUP CONTROL
  const [showContactPop, setShowContactPop] = useState(false);
  const [hasClosedContact, setHasClosedContact] = useState(false);

  const homeRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const vh = window.innerHeight;

      // 1. Navbar Visibility
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);

      // 2. Section Reveal Logic
      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        if (currentScrollY > heroBottom - vh * 0.4) {
          setPassedHero(true);
        }
      }

      // 3. UPDATED: Contact Popup Logic (Trigger after 3-4 scrolls)
      // vh * 3.5 is the "sweet spot" for 3-4 scrolls.
      if (!hasClosedContact && currentScrollY > vh * 3.5) {
        setShowContactPop(true);
      } 
      
      // Reset logic: if they scroll back to the very top, allow it to pop again later
      if (currentScrollY < vh * 0.5) {
        setHasClosedContact(false);
        setShowContactPop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hasClosedContact]);

  const closePopup = () => {
    setShowContactPop(false);
    setHasClosedContact(true);
  };

  return (
    <div className="text-white bg-black">
      {/* --- HERO VIDEO SECTION --- */}
      <div ref={homeRef} className="relative w-full h-[100svh] overflow-hidden bg-black z-[20]">
        <div className="relative z-[21] w-full h-full overflow-hidden"> 
          <video
            autoPlay
            muted
            playsInline
            loop
            key={isMobile ? "mobile-video" : "desktop-video"} 
            className="w-full h-full object-cover object-center"
          >
            <source src={isMobile ? "/web ph (2).mp4" : "/web int.mp4"} type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 z-[10] pointer-events-none overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 w-64 h-64 md:w-96 md:h-96 bg-[#5b21b6] rounded-full blur-[80px] md:blur-[120px]"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-[40]" 
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold">Scroll</span>
        </motion.div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10">
        <RevealSection delay={0.2} enabled={passedHero}>
          <div ref={heroRef}><Hero /></div>
        </RevealSection>

        <RevealSection delay={0.2} enabled={passedHero}>
          <Services />
        </RevealSection>

        <RevealSection delay={0.2} enabled={passedHero}>
          <FeaturesGrid />
        </RevealSection>

        <RevealSection delay={0.3} enabled={passedHero}>
          <AboutUs />
        </RevealSection>

        <RevealSection delay={0.3} enabled={passedHero}>
          <BoardMembers />
        </RevealSection>
        <RevealSection delay={0.3} enabled={passedHero}>
          <Contact />
        </RevealSection>
      </div>

      {/* --- CENTER POPUP CONTACT --- */}
      <AnimatePresence>
        {showContactPop && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            {/* Contact Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/10 rounded-3xl shadow-2xl p-6 md:p-12 z-10"
            >
              {/* Close Button */}
              <button 
                onClick={closePopup}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all z-50 text-xl"
              >
                ✕
              </button>

              <Contact />
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      <style jsx>{`
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
      `}</style>
    </div>
  );
}
