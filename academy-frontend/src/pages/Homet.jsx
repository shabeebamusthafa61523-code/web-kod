import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Footert from "../components/Footert";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Services from "../components/Services";

const images = ["/new.png", "/new.png", "/new.png"];
const overlays = ["bg-black/40", "bg-black/20", "bg-black/0"];
const navLinks = ["Home", "Services", "About Us", "Contact"];

function RevealSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
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

  const homeRef = useRef(null);
  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (link) => {
    if (link === "Home") scrollToSection(homeRef);
    if (link === "Services") scrollToSection(coursesRef);
    if (link === "About Us") scrollToSection(aboutRef);
    if (link === "Contact") scrollToSection(contactRef);
    setMenuOpen(false);
  };

  useEffect(() => {
    const totalSteps = images.length;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      const sectionHeight = window.innerHeight * (isMobile ? 1.5 : 2.2);
      const stepHeight = sectionHeight / totalSteps;

      const newIndex = Math.min(
        totalSteps - 1,
        Math.floor(scrollY / stepHeight)
      );

      setIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: showNav ? 0 : -100, opacity: showNav ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-[2px]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 relative flex items-center">

          <motion.div
            className="cursor-pointer z-10"
            onClick={() => scrollToSection(homeRef)}
            animate={{
              opacity: showLogo ? 1 : 0,
              y: showLogo ? 0 : -8,
              scale: showLogo ? 1 : 0.98,
              filter: showLogo ? "blur(0px)" : "blur(6px)",
            }}
            transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <img src="/logo2.png" alt="logo" className="h-8 sm:h-10 w-auto" />
          </motion.div>

          <ul className="hidden md:flex items-center gap-6 lg:gap-12 font-semibold absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link, i) => (
              <li
                key={i}
                onClick={() => handleNavClick(link)}
                className="relative cursor-pointer group text-base lg:text-lg tracking-wide"
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
          <div className="md:hidden bg-black/95 backdrop-blur-md text-center py-6 space-y-6">
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

      {/* HERO SECTION */}
      <div
        ref={homeRef}
        className="h-[120vh] sm:h-[130vh] md:h-[200vh] lg:h-[260vh] relative"
      >
        <div className="sticky top-0 md:top-10 h-screen flex justify-center items-center">
          <div className="relative w-full max-w-[100vw] sm:max-w-[90vw] md:max-w-4xl h-screen overflow-hidden">

            <img
              src={images[index]}
              alt="hero"
              className="absolute inset-0 w-full h-full object-contain object-center bg-black"
            />

            <div className={`absolute inset-0 ${overlays[index]}`} />
          </div>
        </div>
      </div>

      <div ref={heroRef}>
        <Hero />
      </div>

      <RevealSection delay={0.2}>
        <div ref={coursesRef} className="px-4 sm:px-6 md:px-12">
          <Services />
        </div>
      </RevealSection>

      <div ref={aboutRef} className="px-4 sm:px-6 md:px-12">
        <AboutUs />
      </div>

      <div ref={contactRef} className="px-4 sm:px-6 md:px-12">
        <Contact />
      </div>

    </div>
  );
}
