import { useState } from "react";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
import {
  Code2,
  Palette,
  PenTool,
  Globe,
  Layers3,
  Cpu,
  Server,
  Monitor,
  Terminal,
  Box,
  Feather,
} from "lucide-react";
import { motion } from "framer-motion"; // Added for smooth animations
import Particles from "./Particles";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 40;
    const y = (e.clientY - rect.top - rect.height / 2) / 40;
    setMousePos({ x, y });
  };

  const resetMouse = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* 🎥 THEME LAYER: Video & Animated Glows */}
      <div className="fixed inset-0 z-0">
        <video 
          autoPlay muted loop playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/your-background-video.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        
        {/* Animated Glow Blobs (The "Vision" Aesthetic) */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-10 left-10 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[150px]" 
        />
      </div>

      {/* HERO SECTION */}
      <section
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMouse}
        className="relative z-10 mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 lg:grid-cols-2"
      >
        {/* LEFT SIDE: Visual Card with 3D Tilt */}
        <div className="relative order-2 lg:order-1">
          <div
            className="relative z-[60] w-full transition-transform duration-200 ease-out will-change-transform"
            style={{
              transform: `
                translate(${mousePos.x}px, ${mousePos.y}px)
                rotateY(${mousePos.x / 2}deg)
                rotateX(${-mousePos.y / 2}deg)
              `,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="rounded-[2.5rem] bg-white/5 border border-white/10 p-4 backdrop-blur-2xl shadow-2xl">
              <img
                src="/logo2.png"
                alt="Hero showcase"
                className="h-[300px] sm:h-[400px] lg:h-[500px] w-full object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="relative z-20 order-1 lg:order-2 lg:pl-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative mb-8 inline-flex items-center overflow-hidden rounded-full px-6 py-2 text-xs sm:text-sm font-bold text-white shadow-2xl border border-white/10"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-teal-500/40 opacity-50 transition-opacity group-hover:opacity-100"></span>
            <span className="relative z-10 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
              ✨ Premium IT & Creative Learning Platform
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter">
            Build Your Future In
            <span className="block bg-gradient-to-r from-purple-400 via-teal-300 to-white bg-clip-text text-transparent">
              Tech & Design
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
            Join a community of elite innovators. Master the skills of tomorrow 
            through a system-driven learning path designed for results.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
             <button className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl shadow-lg shadow-purple-500/30 transition-all transform hover:-translate-y-1">
               Start Learning
             </button>
             <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 backdrop-blur-md transition-all">
               View Courses
             </button>
          </div>
        </div>
      </section>

      {/* FLOATING ICONS (Layered behind Hero Content) */}
      <div className="absolute inset-0 z-0 hidden lg:block overflow-hidden pointer-events-none">
        {[
          { icon: Code2, top: 20, left: 10, duration: 4 },
          { icon: Palette, top: 70, left: 20, duration: 5 },
          { icon: Cpu, top: 40, left: 45, duration: 6 },
          { icon: Globe, top: 80, left: 40, duration: 5.2 },
          { icon: Terminal, top: 15, left: 85, duration: 5.8 },
        ].map((item, idx) => (
          <div
            key={idx}
            className="absolute rounded-2xl bg-white/5 p-4 border border-white/10 backdrop-blur-xl opacity-20"
            style={{
              top: `${item.top}%`,
              left: `${item.left}%`,
              animation: `floatSlow ${item.duration}s ease-in-out infinite`,
            }}
          >
            <item.icon className="h-8 w-8 text-white" />
          </div>
        ))}
      </div>

      {/* SECTIONS */}
      <div className="relative z-10 bg-black/50 backdrop-blur-sm">
        <Particles />
        <div className="py-20">
          <CourseCard />
        </div>
      </div>

      <Footer />

      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}