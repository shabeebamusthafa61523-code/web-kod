import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Vision", path: "/vision" },
  { name: "AboutUs", path: "/au" },
  { name: "Contact", path: "/cu" },
  { name: "Portfolio", path: "/portfolio" }
];

const Navbart = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (Math.abs(window.scrollY - lastScrollY) < 10) return;

      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowNav(false);
        setMenuOpen(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-500 ease-out ${
        showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 relative flex items-center justify-between">
        
        {/* LOGO */}
        <div onClick={() => navigate("/")} className="cursor-pointer relative z-[101]">
          <img 
            src="/logo2.png" 
            alt="logo" 
            className="h-17 w-auto hover:scale-[1.03] transition-transform duration-300" 
          />
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-2 font-semibold absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <li
                key={i}
                onMouseEnter={() => setHoveredLink(i)}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={() => navigate(link.path)}
                className={`relative px-4 py-2 cursor-pointer rounded-full transition-all duration-300 text-[13px] font-extrabold tracking-wide uppercase ${
                  isActive ? "text-teal-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {hoveredLink === i && (
                  <motion.div
                    layoutId="navHoverBg"
                    className="absolute inset-0 bg-white/[0.05] border border-white/5 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                <span className="relative z-10">{link.name}</span>
                
                {isActive && (
                  <motion.div 
                    layoutId="activeDot"
                    className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-teal-400 z-10 left-1/2 -translate-x-1/2"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* MOBILE BUTTON / MENU ALIGNMENT SPACER */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-teal-400 transition-colors cursor-pointer relative z-[102] w-8 h-8 flex items-center justify-center focus:outline-none"
          >
            <div className="flex flex-col gap-1.5 items-center justify-center">
              <span className={`w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
              <span className={`w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
            </div>
          </button>
        </div>

        {/* Desktop Spacer to offset absolute logo placement balance */}
        <div className="hidden md:block w-20 h-5" />

      </div>

      {/* FULL-SCREEN MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] md:hidden bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center pointer-events-auto"
          >
            <ul className="flex flex-col items-center gap-8 py-6">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.li
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    key={i}
                    onClick={() => {
                      navigate(link.path);
                      setMenuOpen(false);
                    }}
                    className={`relative cursor-pointer group text-2xl font-black tracking-widest uppercase ${
                      isActive ? "text-teal-400" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-teal-400 rounded-full" />
                    )}
                  </motion.li>
                );
              })}
            </ul>
            
            {/* Mobile CTA */}
            <motion.button 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: navLinks.length * 0.05, duration: 0.4 }}
              onClick={() => {
                navigate("/cu");
                setMenuOpen(false);
              }}
              className="mt-8 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-500 hover:to-teal-400 text-white text-xs font-extrabold rounded-full transition-all duration-300 shadow-xl uppercase tracking-widest"
            >
              Apply Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbart;