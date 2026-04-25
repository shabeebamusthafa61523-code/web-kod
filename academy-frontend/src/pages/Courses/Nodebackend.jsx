import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Database, Code2, Server, Cpu, CheckCircle2,
  Users, ArrowRight, Globe, Layout,
  Smartphone, PenTool, Star, Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbart from '../../components/Navbart';

const Nodebackend = () => {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();

  const scaleX = useSpring(scrollYProgress);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const cardStyle =
    "relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:border-[#B7D333]/40 hover:shadow-[0_0_40px_rgba(183,211,51,0.15)] group";

  /* ✅ NODE.JS LEARNING PATH */
  const path = [
    {
      title: "JavaScript & Core Backend",
      icon: <Code2 />,
      items: ["JavaScript (ES6+)", "Async/Await", "Event Loop", "Modules", "NPM", "File System"]
    },
    {
      title: "Node.js Fundamentals",
      icon: <Server />,
      items: ["Node Architecture", "Express.js", "Routing", "Middleware", "Error Handling", "Environment Config"]
    },
    {
      title: "APIs & Database",
      icon: <Database />,
      items: ["REST APIs", "MongoDB", "Mongoose", "Authentication (JWT)", "CRUD Operations", "Validation"]
    },
    {
      title: "Advanced Backend & DevOps",
      icon: <Cpu />,
      items: ["Microservices", "Docker", "CI/CD", "Caching (Redis)", "Performance Optimization", "Scaling Apps"]
    }
  ];

  /* ✅ CAREERS UPDATED */
  const careers = [
    { role: "Node.js Developer", salary: "₹8-18L", icon: <Server /> },
    { role: "Backend Developer", salary: "₹7-16L", icon: <Database /> },
    { role: "API Developer", salary: "₹6-14L", icon: <Globe /> },
    { role: "Full Stack Developer", salary: "₹12-25L", icon: <Code2 /> },
    { role: "Software Engineer", salary: "₹10-20L", icon: <Cpu /> },
    { role: "Backend Engineer", salary: "₹9-18L", icon: <Layout /> }
  ];

  return (
    <div>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">

        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-30 pointer-events-none bg-black">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(183,211,51,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(68,45,131,0.08) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
          />
        </div>

        {/* HERO */}
        <section className="pt-32 pb-24 text-center px-6 relative z-10">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-xl">
            <Star size={14} className="text-[#B7D333]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
              Backend Engineering Program
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.05]">
            <span className="text-[#442D83]">Master </span>
            <span className="text-[#B7D333]">Node.js</span><br />
            <span className="text-white">Development</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10">
            Build scalable backend systems, APIs, and production-ready server applications.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <button
              onClick={handleApplyClick}
              className="px-5 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg shadow-black/30 flex items-center gap-3 text-sm font-semibold tracking-[0.25em] hover:tracking-[0.35em] transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:border-white/30"
            >
              <span className="text-[#B7D333] font-bold">APPLY NOW</span>
              <ArrowRight />
            </button>

            <a
              href="/brochure.pdf"
              className="px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center gap-3 text-sm font-semibold tracking-[0.25em] hover:tracking-[0.35em] transition-all duration-500 hover:scale-105"
            >
              Download Brochure
            </a>

          </div>
        </section>

        {/* FEATURES */}
        <section className="px-6 py-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            { title: "Live Mentorship", desc: "Backend experts guide you daily", icon: <Users /> },
            { title: "Real Projects", desc: "Build APIs & scalable systems", icon: <Server /> },
            { title: "Certification", desc: "Industry recognized program", icon: <Award /> }
          ].map((f, i) => (
            <div key={i} className={cardStyle}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#442D83]/10 to-[#B7D333]/10" />
              <div className="text-[#B7D333] mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}

        </section>

        {/* CURRICULUM */}
        <section className="px-6 py-24 max-w-6xl mx-auto">

          <h2 className="text-4xl font-black text-center mb-16 text-[#B7D333]">
            Structured Learning Path
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {path.map((item, i) => (
              <div key={i} className={cardStyle}>
                <div className="flex items-center gap-4 mb-6 text-[#B7D333]">
                  {item.icon}
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>

                <ul className="space-y-3">
                  {item.items.map((p, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-400 text-sm">
                      <CheckCircle2 className="text-[#B7D333]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </section>

        {/* CAREERS */}
        <section className="px-6 py-24 max-w-6xl mx-auto">

          <h2 className="text-4xl font-black text-center mb-16 text-[#442D83]">
            Career Outcomes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {careers.map((c, i) => (
              <div key={i} className={cardStyle}>
                <div className="text-[#442D83] mb-4">{c.icon}</div>
                <h3 className="font-bold mb-2">{c.role}</h3>
                <p className="text-[#B7D333] font-black text-xl">{c.salary}</p>
              </div>
            ))}

          </div>

        </section>

      </div>
    </div>
  );
};

export default Nodebackend;