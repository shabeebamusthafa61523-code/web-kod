import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Megaphone, Search, BarChart3, Share2, Mail,
  Zap, CheckCircle2, TrendingUp,
  Target, MousePointer2, Briefcase, Star, ArrowRight, Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbart from '../../components/Navbart';
import Footert from '../../components/Footert';

const DigitalMarketing = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  /* ---------------- GRID BACKGROUND (MATCH APP STYLE) ---------------- */
  const gridStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(183, 211, 51, 0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(68, 45, 131, 0.08) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
    animation: "gridMove 12s linear infinite"
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes gridMove {
        0% { transform: translateY(0px); }
        100% { transform: translateY(-60px); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const path = [
    {
      title: "Fundamentals",
      icon: <Target />,
      items: ["Marketing Overview", "Content Marketing", "Blog Writing", "LinkedIn Mastery"]
    },
    {
      title: "SEO & SEM",
      icon: <Search />,
      items: ["SEO", "Google Ads", "Analytics", "Keyword Strategy"]
    },
    {
      title: "Social Ads",
      icon: <Share2 />,
      items: ["Meta Ads", "Influencer Marketing", "Email Automation", "Social Strategy"]
    },
    {
      title: "Tools & AI",
      icon: <Zap />,
      items: ["AI Tools", "Automation", "Lead Generation", "Campaigns"]
    }
  ];

  const careerRoles = [
    { role: "Digital Marketer", salary: "₹4–7L", icon: <Briefcase /> },
    { role: "SEO Specialist", salary: "₹5–8L", icon: <Search /> },
    { role: "Social Media Manager", salary: "₹5–9L", icon: <Share2 /> },
    { role: "Performance Marketer", salary: "₹8–15L", icon: <TrendingUp /> },
    { role: "Content Strategist", salary: "₹6–12L", icon: <MousePointer2 /> },
    { role: "Marketing Lead", salary: "₹12–25L", icon: <Award /> }
  ];

  return (
    <div>
      
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* 🌌 GRID BACKGROUND */}
      <div className="fixed inset-0 -z-30 pointer-events-none bg-black">
        <div style={gridStyle} className="absolute inset-0 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* 💜 GLOW ORBS */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#5b21b6]/20 blur-[140px] rounded-full"
        />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#c4ec0d]/10 blur-[140px] rounded-full"
        />
      </div>

      {/* HERO */}
      <section className="pt-32 pb-24 text-center px-6 relative z-10">

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-xl">
          <Star size={14} className="text-[#c4ec0d]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
            Digital Marketing Program
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8">
          <span className="text-[#5b21b6]">Diploma in </span>
          <span className="text-[#c4ec0d]">Digital</span><br />
          <span className="text-white">Marketing</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10">
          Learn SEO, Ads, Content & AI-powered marketing with real-world campaigns.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">

          {/* APPLY BUTTON (MATCH APPDEV STYLE) */}
           
        <button
  onClick={handleApplyClick}
  className="mt-6 px-5 py-3 rounded-full 
  border border-white/20 
  bg-white/10 backdrop-blur-xl 
  shadow-lg shadow-black/30
  flex items-center gap-3 
  text-sm font-semibold 
  tracking-[0.25em] hover:tracking-[0.35em] 
  transition-all duration-500 
  hover:scale-105 hover:bg-white/15 
  hover:border-white/30 
  self-start"
>
  <span className="text-[#c4ec0d] font-bold">APPLY NOW</span>
  <span className="text-white transition-transform duration-500 group-hover:translate-x-1">
    →
  </span>
</button>
     <a
  href="/brochure.pdf"
  className="mt-6 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center gap-3 text-sm font-semibold tracking-[0.25em] hover:tracking-[0.35em] transition-all duration-500 hover:scale-100 self-start"
>
  <span className="text-gray-200">Download Brochure</span>
  
</a>

        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {[
          { title: "Live Campaigns", desc: "Run real ads", icon: <BarChart3 /> },
          { title: "AI Marketing", desc: "Modern tools", icon: <Zap /> },
          { title: "Placement Support", desc: "Career guidance", icon: <Award /> }
        ].map((f, i) => (
          <div
            key={i}
            className="
              relative overflow-hidden
              bg-white/5 border border-white/10
              backdrop-blur-2xl
              rounded-3xl p-8
              transition-all duration-500
              hover:scale-[1.03] hover:-translate-y-2
              hover:border-[#c4ec0d]/40
              hover:shadow-[0_0_40px_rgba(183,211,51,0.15)]
              group
            "
          >
            <div className="
              absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
              bg-gradient-to-br from-[#5b21b6]/10 via-transparent to-[#c4ec0d]/10
              pointer-events-none
            " />

            <div className="text-[#c4ec0d] mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </div>
        ))}

      </section>

      {/* CURRICULUM */}
      <section className="px-6 py-24 max-w-6xl mx-auto">

        <h2 className="text-4xl font-black text-center mb-16 text-[#5b21b6]">
          Learning Path
        </h2>

        <div className="
          grid md:grid-cols-2 gap-10
        ">

          {path.map((step, i) => (
            <div
              key={i}
              className="
                relative overflow-hidden
                bg-white/5 border border-white/10
                backdrop-blur-2xl
                rounded-3xl p-8
                transition-all duration-500
                hover:scale-[1.03] hover:-translate-y-2
                hover:border-[#c4ec0d]/40
                hover:shadow-[0_0_40px_rgba(183,211,51,0.15)]
                group
              "
            >
              <div className="flex items-center gap-4 mb-6 text-[#c4ec0d]">
                {step.icon}
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
              </div>

              <ul className="space-y-3">
                {step.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-400 text-sm">
                    <CheckCircle2 className="text-[#c4ec0d] w-4 h-4" />
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </section>

      {/* CAREERS */}
      <section className="px-6 py-24 max-w-6xl mx-auto">

        <h2 className="text-4xl font-black text-center mb-16 text-[#c4ec0d]">
          Career Outcomes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {careerRoles.map((c, i) => (
            <div
              key={i}
              className="
                bg-white/5 border border-white/10
                backdrop-blur-2xl
                rounded-3xl p-8
                hover:scale-[1.03] hover:-translate-y-2
                hover:border-[#c4ec0d]/40
                hover:shadow-[0_0_40px_rgba(183,211,51,0.15)]
                transition-all duration-500
              "
            >
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
            Start Your Marketing Career
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

export default DigitalMarketing;