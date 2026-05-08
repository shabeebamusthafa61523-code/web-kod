import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Rocket } from "lucide-react";

export default function Services() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "OUR COURSES",
      icon: <BookOpen className="w-8 h-8" />,
      description:
        "Master modern full-stack development and creative design. We bridge the gap between technical execution and visual branding to turn students into industry-ready creators.",
      path: "/cd",
      accentColor: "#c4ec0d", // Lime
      gradient: "from-[#c4ec0d]/20 to-[#5b21b6]/20",
    },
    {
      title: "OUR SERVICES",
      icon: <Rocket className="w-8 h-8" />,
      description:
        "We scale brands through strategic identity design and organic growth. From high-converting campaigns to SEO optimization, we build digital presences that command attention.",
      path: "/servicedetails",
      accentColor: "#5b21b6", // Violet
      gradient: "from-[#5b21b6]/20 to-[#c4ec0d]/20",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative z-10 bg-transparent min-h-screen overflow-x-hidden font-sans selection:bg-[#c4ec0d] selection:text-black">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[500px] bg-[#5b21b6]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <div className="relative pt-8 md:pt-10 pb-16 md:pb-24 px-6 flex flex-col items-center text-center">
       <motion.div 
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  /* Increased gap and vertical margin */
  className="flex items-center gap-4 md:gap-8 mb-10 md:mb-16"
>
  {["Learn", "•", "Build", "•", "Earn"].map((text, index) => (
    <motion.span 
      key={index}
      variants={itemVariants}
      className={`${
        /* Increased dot size from w-1 to w-2/3 and margin */
        text === "•" ? "w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/30 mx-2" : 
        /* Increased font sizes: mobile text-sm to text-lg | desktop text-sm to text-2xl */
        (index === 0 || index === 4 ? "text-[#c4ec0d]" : "text-[#5b21b6]") + 
        " text-sm md:text-2xl font-black tracking-[0.3em] md:tracking-[0.4em] uppercase"
      }`}
    >
      {text === "•" ? "" : text}
    </motion.span>
  ))}
</motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-4xl sm:text-6xl md:text-8xl font-medium tracking-tighter leading-[1.1] md:leading-[0.9] max-w-5xl"
        >
          Shaping <span className="italic font-monospace text-[#c4ec0d]">agencies</span> <br className="hidden sm:block" />
          of tomorrow
        </motion.h1>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 px-6 pb-7 md:pb-10 max-w-7xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: "circOut" }}
            whileHover={{ y: -12, transition: { duration: 0.3 } }}
            className="group relative w-full sm:w-[calc(50%-2rem)] lg:max-w-[400px]"
          >
            {/* Outer Border Glow */}
            <div className={`absolute -inset-[1px] rounded-[2rem] bg-gradient-to-b ${card.gradient} opacity-20 group-hover:opacity-100 transition duration-500 blur-[2px]`} />
            
            {/* Main Card Body */}
            <div className="relative h-full min-h-[450px] md:h-[520px] bg-black/40 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 flex flex-col justify-between border border-white/10 overflow-hidden shadow-2xl">
              
              {/* Internal Glassmorphism Detail */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
              
              {/* Animated Accent Glow on Hover */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-64 opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 100%, ${card.accentColor}22 0%, transparent 70%)`
                }}
              />

              <div className="relative z-10">
                {/* Icon with float animation on hover */}
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="mb-6 inline-flex items-center justify-center p-4 rounded-2xl border border-white/10 bg-white/5"
                  style={{ color: card.accentColor }}
                >
                  {card.icon}
                </motion.div>

                <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: 48 }}
                   viewport={{ once: true }}
                   className="h-1 mb-6 rounded-full" 
                   style={{ backgroundColor: card.accentColor }}
                />
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                  {card.title}
                </h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                  {card.description}
                </p>
              </div>

              {/* Action Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(card.path)}
                className="relative z-10 w-fit group/btn flex items-center gap-4 py-3 px-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white transition-all duration-500 mt-8"
              >
                <span className="text-white group-hover/btn:text-black font-bold tracking-widest text-[10px] uppercase transition-colors">
                  See More
                </span>
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 group-hover/btn:bg-black/10 transition-colors">
                  <motion.svg 
                    width="14" height="14" viewBox="0 0 16 16" fill="none" 
                    className="text-white group-hover/btn:text-black"
                    animate={{ x: [0, 2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                </div>
              </motion.button>

              {/* Bottom Right Decorative Blob */}
              <div 
                className="absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] rounded-full opacity-10 group-hover:opacity-40 group-hover:-translate-y-10 transition-all duration-1000" 
                style={{ backgroundColor: card.accentColor }}
              />

              {/* Animated Progress-style Bottom Border */}
              <div 
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
                style={{ backgroundColor: card.accentColor }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}