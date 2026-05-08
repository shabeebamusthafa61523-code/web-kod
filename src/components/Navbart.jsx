import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (Math.abs(window.scrollY - lastScrollY) < 10) return;

      if (window.scrollY > lastScrollY) {
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
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-[3px] transition-transform duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 relative flex items-center justify-between">

        {/* LOGO */}
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src="/logo2.png" alt="logo" className="h-10 w-auto" />
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center space-x-12 font-semibold absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link, i) => (
            <li
              key={i}
              onClick={() => navigate(link.path)}
              className="relative cursor-pointer group text-md tracking-wide"
            >
              <span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(110deg, #9ca3af 20%, #e5e7eb 40%, #ffffff 50%, #e5e7eb 60%, #9ca3af 80%)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "silverShine 7s ease-in-out infinite"
                }}
              >
                {link.name}
              </span>

              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(110deg, #9ca3af 20%, #ffffff 50%, #9ca3af 80%)",
                  backgroundSize: "200% 100%",
                  animation: "silverLine 3s linear infinite",
                }}
              />
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 bg-black/80 backdrop-blur-lg">
          {navLinks.map((link, i) => (
            <li
              key={i}
              onClick={() => {
                navigate(link.path);
                setMenuOpen(false);
              }}
              className="relative cursor-pointer group text-lg tracking-wide"
            >
              <span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(110deg, #9ca3af 20%, #e5e7eb 40%, #ffffff 50%, #e5e7eb 60%, #9ca3af 80%)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "silverShine 6s ease-in-out infinite"
                }}
              >
                {link.name}
              </span>

              <span
                className="absolute left-0 right-0 mx-auto -bottom-1 h-[2px] w-0 group-active:w-full transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(110deg, #9ca3af 20%, #ffffff 50%, #9ca3af 80%)",
                  backgroundSize: "200% 100%",
                  animation: "silverLine 3s linear infinite",
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes silverShine {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }

          @keyframes silverLine {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbart;