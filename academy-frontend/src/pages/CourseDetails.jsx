import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Code2, Smartphone, Palette, Megaphone, 
  ArrowRight, Binary, Layers, Cpu, Globe 
} from "lucide-react";

// Individual Card Component with Enhanced 3D and Spotlight Effects
const AcademyCard = ({ course, index }) => {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
    
    cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "circOut" }}
      onClick={() => navigate(course.route)}
      className="relative h-full group cursor-pointer"
    >
      {/* Animated Gradient Border */}
      <div 
        className="absolute -inset-[1px] rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]" 
        style={{ background: `linear-gradient(135deg, ${course.accent}, transparent, ${course.accent}40)` }}
      />
      
      <div className="relative h-full overflow-hidden bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 transition-all duration-700 group-hover:bg-zinc-900/60 group-hover:border-white/10">
        {/* Dynamic Interactive Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.08),transparent_50%)]" />

        <div className="relative mb-8 flex justify-between items-start" style={{ transform: "translateZ(60px)" }}>
          <motion.div 
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10 bg-black/60 border border-white/10 group-hover:border-[#c4ec0d]/40 transition-colors"
            style={{ color: course.accent }}
          >
            {course.icon}
            <div className="absolute inset-0 rounded-2xl blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-700" style={{ backgroundColor: course.accent }} />
          </motion.div>
          <motion.span 
            className="text-[10px] font-mono opacity-20 group-hover:opacity-100 group-hover:text-[#c4ec0d] transition-all tracking-[0.3em] text-white uppercase"
            style={{ transform: "translateZ(40px)" }}
          >
            {course.id}
          </motion.span>
        </div>

        <div style={{ transform: "translateZ(40px)" }}>
          <span className="text-[9px] font-black tracking-[0.4em] uppercase mb-2 block" style={{ color: course.accent }}>
            {course.category}
          </span>
          
          <h3 className="text-white font-black text-2xl tracking-tighter uppercase mb-4 transition-transform duration-500 group-hover:translate-x-1">
            {course.title}
          </h3>

          <p className="text-zinc-500 text-xs font-medium leading-relaxed mb-8 group-hover:text-zinc-300 transition-colors">
            {course.description}
          </p>

          <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.5em] opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:gap-5" style={{ color: course.accent }}>
            EXPLORE<ArrowRight size={14} strokeWidth={3} />
          </div>
        </div>

        {/* Huge Ghost Index Number */}
        <div className="absolute -bottom-8 -right-4 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none transition-all duration-1000 group-hover:text-white/[0.05] group-hover:scale-110 italic">
          {index + 1}
        </div>
      </div>
    </motion.div>
  );
};

export default function CourseDetails() {
  // useEffect to scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const sections = [
    {
      label: "Developer",
      icon: <Cpu size={14} />,
      accent: "#c4ec0d",
      courses: [
        { title: "App Dev", route: "/ad", category: "System Architecture", description: "Crafting native performance with Flutter & React Native.", icon: <Smartphone size={24} />, id: "SYS-01", accent: "#c4ec0d" },
        { title: "Software Dev", route: "/sd", category: "Full-Stack Dev", description: "Scalable MERN ecosystems and Next.js optimization.", icon: <Code2 size={24} />, id: "SYS-02", accent: "#c4ec0d" },
      ]
    },
    {
      label: "Visual Arts",
      icon: <Layers size={14} />,
      accent: "#ffffff",
      courses: [
        { title: "Graphic Design", route: "/gd", category: "UI/UX Design", description: "Premium glassmorphism and modern brand storytelling.", icon: <Palette size={24} />, id: "DSN-01", accent: "#ffffff" },
      ]
    },
    {
      label: "Performance",
      icon: <Globe size={14} />,
      accent: "#5b21b6",
      courses: [
        { title: "Digital Marketing", route: "/dm", category: "Growth Hacking", description: "Data-driven SEO and high-ROI ad campaign management.", icon: <Megaphone size={24} />, id: "MKT-01", accent: "#5b21b6" },
      ]
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen w-full bg-transparent py-24 px-6 relative overflow-hidden font-sans"
    >
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,236,13,0.03),transparent_50%)]" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.header 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Binary className="text-[#c4ec0d] w-5 h-5" />
            </motion.div>
            <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase">Academy Catalog // 2026</span>
          </div>
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase leading-[0.8]">
            Master Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c4ec0d] to-white/10 italic">Craft</span>
          </h2>
        </motion.header>

        <div className="space-y-32">
          {sections.map((section, sIdx) => (
            <div key={sIdx}>
              {/* Category Header with Animation */}
              <motion.div 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 mb-12"
              >
                <div 
                  className="flex items-center gap-3 px-6 py-2 bg-white/[0.02] border border-white/5 rounded-full backdrop-blur-md"
                  style={{ boxShadow: `0 0 20px ${section.accent}10` }}
                >
                  <span style={{ color: section.accent }}>{section.icon}</span>
                  <span className="text-[10px] font-black tracking-[0.3em] text-white uppercase">{section.label}</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {section.courses.map((course, cIdx) => (
                  <AcademyCard key={cIdx} course={course} index={cIdx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}