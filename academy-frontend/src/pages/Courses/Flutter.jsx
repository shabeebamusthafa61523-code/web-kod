import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {  Database, Code2, Server, Cpu, CheckCircle2, TrendingUp,
  Users, ArrowRight, Globe, Layout, Smartphone, PenTool, Star, Award} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbart from '../../components/Navbart';

const Flutter = () => {
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

  /* 🌟 UNIFIED CARD STYLE (same as AppDevelopment) */
  const cardStyle =
    "relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:border-[#c4ec0d]/40 hover:shadow-[0_0_40px_rgba(183,211,51,0.15)] group";

  const path = [
    {
      title: "Frontend Development",
      icon: <Layout />,
      items: ["HTML & CSS", "JavaScript", "React", "Redux", "UI Design", "Forms Handling"]
    },
    {
      title: "Backend Development",
      icon: <Server />,
      items: ["Python", "Flask", "REST APIs", "Auth Systems", "Middleware", "Error Handling"]
    },
    {
      title: "Database & Data Ops",
      icon: <Database />,
      items: ["MongoDB", "Mongoose", "Schema Design", "Aggregation", "Indexing", "Optimization"]
    },
    {
      title: "Deployment & Advanced",
      icon: <Cpu />,
      items: ["Docker", "AWS", "CI/CD", "Microservices", "Performance", "Scaling Apps"]
    }
  ];

  const careers = [
    { role: "Full Stack Developer", salary: "₹12-25L", icon: <Code2 /> },
    { role: "MERN Developer", salary: "₹10-18L", icon: <Layout /> },
    { role: "React Developer", salary: "₹8-15L", icon: <Smartphone /> },
    { role: "Backend Engineer", salary: "₹9-16L", icon: <Server /> },
    { role: "JS Developer", salary: "₹10-14L", icon: <PenTool /> },
    { role: "Web Engineer", salary: "₹15-30L", icon: <Globe /> }
  ];

  return (
    <div>
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* 🌌 BACKGROUND (same as AppDevelopment) */}
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
          <Star size={14} className="text-[#c4ec0d]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
            Full Stack Engineering Program
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.05]">
          <span className="text-[#5b21b6]">Master </span>
          <span className="text-[#c4ec0d]">Flutter + Python</span><br />
          <span className="text-white">Development</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10">
          Become a production-ready full stack engineer with real-world projects.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">

          {/* BUTTON (same style as AppDev) */}
          <button
            onClick={handleApplyClick}
            className="
              px-5 py-3 rounded-full
              border border-white/20
              bg-white/10 backdrop-blur-xl
              shadow-lg shadow-black/30
              flex items-center gap-3
              text-sm font-semibold
              tracking-[0.25em]
              hover:tracking-[0.35em]
              transition-all duration-500
              hover:scale-105
              hover:bg-white/15
              hover:border-white/30
            "
          >
            <span className="text-[#c4ec0d] font-bold">APPLY NOW</span>
            <ArrowRight />
          </button>

          <a
            href="/brochure.pdf"
            className="
              px-5 py-3 rounded-full
              border border-white/10
              bg-white/5 backdrop-blur-sm
              flex items-center gap-3
              text-sm font-semibold
              tracking-[0.25em]
              hover:tracking-[0.35em]
              transition-all duration-500
              hover:scale-105
            "
          >
            Download Brochure
          </a>

        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {[
          { title: "Live Mentorship", desc: "Expert code reviews daily", icon: <Users /> },
          { title: "Real Projects", desc: "Build production apps", icon: <Layout /> },
          { title: "Certification", desc: "Industry recognized program", icon: <Award /> }
        ].map((f, i) => (
          <div key={i} className={cardStyle}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#5b21b6]/10 to-[#c4ec0d]/10" />
            <div className="text-[#c4ec0d] mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </div>
        ))}

      </section>

      {/* CURRICULUM */}
      <section className="px-6 py-24 max-w-6xl mx-auto">

        <h2 className="text-4xl font-black text-center mb-16 text-[#c4ec0d]">
          Structured Learning Path
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {path.map((item, i) => (
            <div key={i} className={cardStyle}>

              <div className="flex items-center gap-4 mb-6 text-[#c4ec0d]">
                {item.icon}
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>

              <ul className="space-y-3">
                {item.items.map((p, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-400 text-sm">
                    <CheckCircle2 className="text-[#c4ec0d]" />
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

        <h2 className="text-4xl font-black text-center mb-16 text-[#5b21b6]">
          Career Outcomes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {careers.map((c, i) => (
            <div key={i} className={cardStyle}>
              <div className="text-[#5b21b6] mb-4">{c.icon}</div>
              <h3 className="font-bold mb-2">{c.role}</h3>
              <p className="text-[#c4ec0d] font-black text-xl">{c.salary}</p>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 pb-24">

        <div className="
          bg-gradient-to-r from-[#5b21b6]/25 to-[#c4ec0d]/10
          border border-white/10
          rounded-[3rem] p-16 text-center
          backdrop-blur-2xl
        ">

          <h2 className="text-5xl font-black mb-6">
            Start Your Developer Journey
          </h2>

          <p className="text-gray-400 mb-10">
            Limited seats available for next batch
          </p>

         <button
  onClick={() => navigate(card.route)}
  className="mt-6 mx-auto px-3 py-2 rounded-full border border-[#c4ec0d]/40 bg-black/30 backdrop-blur-sm flex items-center justify-center gap-3 text-sm font-semibold tracking-[0.25em] text-[#c4ec0d] hover:text-white hover:tracking-[0.35em] transition-all duration-500 hover:scale-105"
>
  <span>ENROLL NOW</span>
  <span className="group-hover:translate-x-1 transition-transform duration-500">
    →
  </span>
</button>

        </div>
      </section>

    </div>
    </div>
  );
};

export default Flutter;