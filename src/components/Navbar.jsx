import React from "react";

const Navbar = () => {
  const navLinks = ["Home", "Courses", "About Us", "Contact"];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white/30 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ml-6">
          <img
            src="./logo2.png"
            alt="Logo"
            className="h-14 w-auto scale-[1.4] transition-transform duration-300 hover:scale-[1.5]"
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 font-medium">
          {navLinks.map((link, index) => (
           <li
  key={index}
  className="group relative px-3 py-1 cursor-pointer"
>
  <span className="relative z-10 text-gray-700 font-semibold transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-400 group-hover:via-gray-200 group-hover:to-slate-500 bg-[length:200%_100%] group-hover:animate-[shine_1.5s_linear_infinite]">
    {link}
  </span>

<span className="absolute left-3 right-3 -bottom-1 h-[2px] scale-x-0 bg-slate-400 origin-left transition-transform duration-500 group-hover:scale-x-100"></span></li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
