import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Code2, Server, Cpu, CheckCircle2,
  Users, ArrowRight, Globe, Layout,
  Smartphone, PenTool, Star, Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbart from '../../components/Navbart';

const Reactfrontend = () => {
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
    "relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:border-[#c4ec0d]/40 hover:shadow-[0_0_40px_rgba(183,211,51,0.15)] group";

  /* ✅ UPDATED PATH FOR REACT */
  const path = [
    {
      title: "Core Frontend",
      icon: <Layout />,
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "DOM Manipulation", "Responsive Design", "Flexbox & Grid"]
    },
    {
      title: "React Fundamentals",
      icon: <Code2 />,
      items: ["JSX", "Components", "Props & State", "Hooks", "Event Handling", "Conditional Rendering"]
    },
    {
      title: "Advanced React",
      icon: <Cpu />,
      items: ["Context API", "Custom Hooks", "Performance Optimization", "Code Splitting", "Error Boundaries", "Testing"]
    },
    {
      title: "Deployment & Ecosystem",
      icon: <Server />,
      items: ["React Router", "API Integration", "Axios", "Firebase / Vercel", "Build Tools", "Project Deployment"]
    }
  ];

  /* ✅ UPDATED CAREERS */
  const careers = [
    { role: "React Developer", salary: "₹8-18L", icon: <Smartphone /> },
    { role: "Frontend Developer", salary: "₹6-15L", icon: <Layout /> },
    { role: "UI Developer", salary: "₹7-14L", icon: <PenTool /> },
    { role: "JavaScript Developer", salary: "₹8-16L", icon: <Code2 /> },
    { role: "Web Developer", salary: "₹6-12L", icon: <Globe /> },
    { role: "Frontend Engineer", salary: "₹12-25L", icon: <Server /> }
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
            <Star size={14} className="text-[#c4ec0d]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
              Frontend Engineering Program
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.05]">
            <span className="text-[#5b21b6]">Master </span>
            <span className="text-[#c4ec0d]">React</span><br />
            <span className="text-white">Development</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10">
            Build modern, scalable user interfaces with real-world React projects.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <button
              onClick={handleApplyClick}
              className="px-5 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg shadow-black/30 flex items-center gap-3 text-sm font-semibold tracking-[0.25em] hover:tracking-[0.35em] transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:border-white/30"
            >
              <span className="text-[#c4ec0d] font-bold">APPLY NOW</span>
              <ArrowRight />
            </button>

            <a
              href="/React.pdf"
              download
              className="px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center gap-3 text-sm font-semibold tracking-[0.25em] hover:tracking-[0.35em] transition-all duration-500 hover:scale-105"
            >
              Download Brochure
            </a>

          </div>
        </section>

        {/* FEATURES */}
        <section className="px-6 py-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            { title: "Live Mentorship", desc: "Expert React guidance daily", icon: <Users /> },
            { title: "Real Projects", desc: "Build production UI apps", icon: <Layout /> },
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

      </div>
    </div>
  );
};

export default Reactfrontend;