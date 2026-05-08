import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Megaphone, 
  Target, 
  Search, 
  PenTool, 
  Palette, 
  Code2, 
  Rocket, 
  BarChart3 
} from "lucide-react";

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    cardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
    cardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      className="relative h-full group"
    >
      <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
      
      <div className="relative h-full overflow-hidden bg-zinc-900/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="relative mb-8 flex justify-center" style={{ transform: "translateZ(50px)" }}>
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
            className="w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-2xl relative z-10"
            style={{ 
              backgroundColor: `${service.color}15`, 
              border: `1px solid ${service.color}40`,
              color: service.color
            }}
          >
            {service.icon}
            <div className="absolute inset-0 rounded-[2rem] blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" style={{ backgroundColor: service.color }} />
          </motion.div>
        </div>

        <div style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-center text-white font-bold text-sm tracking-[0.2em] uppercase mb-8 group-hover:text-white transition-colors">
            {service.title}
          </h3>

          <ul className="space-y-4">
            {service.items.map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i + index * 0.1 }}
                className="flex items-center gap-3 group/item"
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                <span className="text-zinc-400 text-xs font-medium tracking-wide group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="absolute -bottom-6 -right-2 text-9xl font-black text-white/[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:scale-110">
          {index + 1}
        </div>
      </div>
    </motion.div>
  );
};

export default function ServiceDetails() {
  // Auto-scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cards = [
    { title: "Social Media Marketing", icon: <Megaphone size={32} />, color: "#c4ec0d", items: ["Account Management", "Content Creation", "Daily Posting", "Community Engagement", "Growth & Branding"] },
    { title: "Paid Advertising", icon: <Target size={32} />, color: "#5b21b6", items: ["Meta (Ads Manager)", "Google Search & Display", "YouTube Video Ads", "Ad Campaign Strategy", "ROAS Optimization"] },
    { title: "SEO Optimization", icon: <Search size={32} />, color: "#c4ec0d", items: ["On-Page SEO", "Technical Audit", "Keyword Research", "Authority Building", "Performance Reporting"] },
    { title: "Content Marketing", icon: <PenTool size={32} />, color: "#5b21b6", items: ["Blog & Article Writing", "Website Copywriting", "SEO-Driven Content", "Creative Strategy", "Sales Copywriting"] },
    { title: "Graphic Designing", icon: <Palette size={32} />, color: "#c4ec0d", items: ["Social Media Visuals", "Brand Identity Design", "Marketing Collaterals", "UI/UX Assets", "Custom Illustrations"] },
    { title: "Website Development", icon: <Code2 size={32} />, color: "#5b21b6", items: ["Business Ecosystems", "E-Commerce Solutions", "High-Converting Landers", "Maintenance & Hosting", "Speed Optimization"] },
    { title: "Lead Generation", icon: <Rocket size={32} />, color: "#c4ec0d", items: ["B2B/B2C Campaigns", "Sales Funnel Architecture", "Conversion Optimization", "CRM Automation", "Lead Qualification"] },
    { title: "Analytics & Reporting", icon: <BarChart3 size={32} />, color: "#5b21b6", items: ["Pixel/GTM Tracking", "In-depth Data Analysis", "Monthly ROI Insights", "Attribution Modeling", "Strategic Consulting"] },
  ];

  return (
    <section className="min-h-screen w-full bg-transparent py-24 px-6 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-4">
            CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c4ec0d] to-[#5b21b6]">SERVICES</span>
          </h2>
          <p className="text-zinc-500 tracking-[0.3em] uppercase text-xs font-bold ">Scalable Digital Solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}