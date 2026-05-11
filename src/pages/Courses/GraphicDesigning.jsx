import React, { useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  Lightbulb, PenTool, Video, Sparkles, Star,
  CheckCircle, ArrowRight, TrendingUp, Layers,
  Award, Target, Palette, MousePointer2, Megaphone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbart from '../../components/Navbart';

const GraphicDesigning = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyClick = () => {
    navigate('/cu');
    window.scrollTo(0, 0);
  };

  const cardStyle =
    "relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:border-[#A5CC39]/40 hover:shadow-[0_0_40px_rgba(165,204,57,0.15)] group";

  const curriculum = [
    {
      title: "Design Ideation",
      icon: <Lightbulb />,
      items: ["Brand Strategy", "Typography", "Color Theory", "Ad Concepts"]
    },
    {
      title: "Visual Execution",
      icon: <PenTool />,
      items: ["Photoshop", "Illustrator", "UI Basics", "Brand Design"]
    },
    {
      title: "Digital Production",
      icon: <Video />,
      items: ["Motion Graphics", "Video Editing", "Packaging", "Portfolio"]
    },
    {
      title: "AI Design Future",
      icon: <Sparkles />,
      items: ["Midjourney", "Prompt Design", "AI Workflows", "Live Projects"]
    }
  ];

  const careers = [
    { role: "Graphic Designer", salary: "₹6-12L", icon: <Palette /> },
    { role: "UI/UX Designer", salary: "₹8-15L", icon: <MousePointer2 /> },
    { role: "Motion Designer", salary: "₹7-14L", icon: <Video /> },
    { role: "Art Director", salary: "₹15-30L", icon: <Layers /> },
    { role: "Brand Strategist", salary: "₹8-16L", icon: <Megaphone /> },
    { role: "Creative Lead", salary: "₹18-35L", icon: <Award /> }
  ];

  return (
    <div>
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-30">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(165,204,57,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(75,46,131,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#4B2E83]/20 blur-[140px] rounded-full"
        />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#A5CC39]/10 blur-[140px] rounded-full"
        />
      </div>

      {/* HERO */}
      <section className="pt-32 pb-24 text-center px-6 relative z-10">

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-xl">
          <Star size={14} className="text-[#A5CC39]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
            Creative Design Academy
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-8">
          <span className="text-[#4B2E83]">Master </span>
          <span className="text-[#A5CC39]">Graphic</span><br />
          <span className="text-white">Designing</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10">
          Learn modern design, branding, UI/UX, motion graphics and AI-powered creativity.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">

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
  href="/gd br copy.pdf"
  download="Graphic_Designing_Brochure.pdf"
  className="mt-6 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center gap-3 text-sm font-semibold tracking-[0.25em] hover:tracking-[0.35em] transition-all duration-500 hover:scale-100 self-start"
>
  <span className="text-gray-200">Download Brochure</span>
  
</a>

        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {[
          { title: "AI Design", desc: "Modern AI-powered creativity", icon: <Sparkles /> },
          { title: "Live Projects", desc: "Real brand experience", icon: <Target /> },
          { title: "Mentorship", desc: "Industry experts guidance", icon: <Layers /> }
        ].map((f, i) => (
          <div key={i} className={cardStyle}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#4B2E83]/10 to-[#A5CC39]/10" />
            <div className="text-[#A5CC39] mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </div>
        ))}

      </section>

      {/* CURRICULUM */}
      <section className="px-6 py-24 max-w-6xl mx-auto">

        <h2 className="text-4xl font-black text-center mb-16 text-[#A5CC39]">
          Creative Learning Path
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {curriculum.map((c, i) => (
            <div key={i} className={cardStyle}>

              <div className="flex items-center gap-4 mb-6 text-[#A5CC39]">
                {c.icon}
                <h3 className="text-xl font-bold text-white">{c.title}</h3>
              </div>

              <ul className="space-y-3">
                {c.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-400 text-sm">
                    <CheckCircle className="text-[#A5CC39]" />
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

        <h2 className="text-4xl font-black text-center mb-16 text-[#4B2E83]">
          Career Outcomes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {careers.map((c, i) => (
            <div key={i} className={cardStyle}>
              <div className="text-[#4B2E83] mb-4">{c.icon}</div>
              <h3 className="font-bold mb-2">{c.role}</h3>
              <p className="text-[#A5CC39] font-black text-xl">{c.salary}</p>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="bg-gradient-to-r from-[#4B2E83]/25 to-[#A5CC39]/10 border border-white/10 rounded-[3rem] p-16 text-center backdrop-blur-2xl">

          <h2 className="text-5xl font-black mb-6">Start Your Creative Journey</h2>

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

export default GraphicDesigning;