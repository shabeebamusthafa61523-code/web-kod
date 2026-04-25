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
import Particles from "./Particles";
import CourseCardt from "../components/CourseCardt";

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
    <div className="relative min-h-screen bg-white">

      {/* HERO SECTION */}
      <section
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMouse}
        className="relative mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 lg:grid-cols-2"
      >
        {/* LEFT SIDE: Visual Card */}
        <div className="relative">
          <div
            className="absolute -top-[120px] sm:-top-[160px] lg:-top-[270px] left-4 sm:left-8 lg:left-12 z-[60] w-[110%] sm:w-[120%] lg:w-[130%] transition-transform duration-200 ease-out will-change-transform"
            style={{
              transform: `
                translate(${mousePos.x}px, ${mousePos.y}px)
                rotateY(${mousePos.x / 3}deg)
                rotateX(${-mousePos.y / 3}deg)
              `,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="rounded-[2rem] p-6">
              <img
                src="/logo2.png"
                alt="Hero showcase"
                className="h-[320px] sm:h-[420px] lg:h-[520px] w-full object-contain"
              />
            </div>
          </div>

          {/* Spacer */}
          <div className="h-[420px] sm:h-[520px] lg:h-[620px]"></div>
        </div>

        {/* FLOATING ICONS (desktop only) */}
        <div className="absolute left-0 top-0 w-full lg:w-[60%] h-full hidden lg:block overflow-hidden">
          {[
            { icon: Code2, top: 470, left: 190, duration: 4 },
            { icon: Palette, top: 700, left: 80, duration: 5 },
            { icon: PenTool, top: 650, left: 180, duration: 4.8 },
            { icon: Globe, top: 540, left: 310, duration: 5.2 },
            { icon: Layers3, top: 720, left: 410, duration: 5.5 },
            { icon: Cpu, top: 500, left: 30, duration: 6 },
            { icon: Server, top: 620, left: 370, duration: 6.2 },
            { icon: Terminal, top: 580, left: 120, duration: 5.8 },
            { icon: Monitor, top: 340, left: 140, duration: 6.5 },
            { icon: Box, top: 420, left: 320, duration: 5.3 },
            { icon: Feather, top: 480, left: 480, duration: 5.7 },
          ].map((item, idx) => (
            <div
              key={idx}
              className="absolute rounded-full bg-white/60 p-3 backdrop-blur-md"
              style={{
                top: `${item.top}px`,
                left: `${item.left}px`,
                animation: `floatSlow ${item.duration}s ease-in-out infinite`,
              }}
            >
              <item.icon className="h-7 w-7 text-slate-300" />
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="relative z-10 mt-24 lg:mt-[320px]">
          <p className="group relative mb-6 inline-flex items-center overflow-hidden rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-200 via-fuchsia-100 to-sky-100 opacity-80"></span>
            <span className="absolute inset-[1px] rounded-full bg-white/80"></span>
            <span className="relative z-10 tracking-wide">
              ✨ Premium IT & Creative Learning Platform
            </span>
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900">
            Build Your Future In
            <span className="block bg-gradient-to-r from-slate-700 via-slate-500 to-slate-800 bg-clip-text text-transparent">
              Tech, Design & Marketing
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
            Join our community of innovators and learn skills that drive the
            future of technology. Experience interactive learning like never
            before.
          </p>
        </div>
      </section>

      <Particles />
      <CourseCard />

      {/* FLOAT ANIMATION */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      <Footer />
    </div>
  );
}