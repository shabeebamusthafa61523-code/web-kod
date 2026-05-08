import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Code2, Briefcase, Headphones } from 'lucide-react';

const WhyKodBrand = () => {
  const features = [
    {
      title: "System-Based Learning",
      desc: "Learn with proven systems that ensure clarity, consistency & results.",
      icon: <Settings className="w-6 h-6 text-white" />,
      color: "from-[#5b21b6] to-[#3b0764]", // Violet Gradient
    },
    {
      title: "Real Projects",
      desc: "Work on live projects that give you practical exposure & real-world skills.",
      icon: <Code2 className="w-6 h-6 text-black" />,
      color: "from-[#c4ec0d] to-[#a3c40a]", // Lime Gradient
    },
    {
      title: "Internship + Earnings",
      desc: "Get internship opportunities and earn while you learn & grow.",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      color: "from-[#5b21b6] to-[#3b0764]",
    },
    {
      title: "Long-Term Support",
      desc: "We're with you even after completion for your continuous growth & success.",
      icon: <Headphones className="w-6 h-6 text-black" />,
      color: "from-[#c4ec0d] to-[#a3c40a]",
    },
  ];

  return (
    <section className="relative min-h-screen bg-transparent py-10 px-6 overflow-hidden selection:bg-[#c4ec0d] selection:text-black">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* --- LEFT CONTENT --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="mb-8 flex items-center gap-3">
             <span className="text-sm font-bold tracking-[0.4em] uppercase text-[#c4ec0d]">The Blueprint</span>
             <div className="h-px w-12 bg-white/20" />
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter text-white">
            <span className="block opacity-50 italic font-serif font-light">Why</span>
            <span className="block mt-2" style={{
              background: "linear-gradient(90deg, #c4ec0d, #ffffff, #c4ec0d)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Kod.Brand</span>
          </h2>
          
          <p className="mt-10 text-xl text-gray-400 max-w-md leading-relaxed border-l-2 border-[#5b21b6] pl-6">
            Moving beyond basic reactive models to build 
            <span className="text-white font-medium"> future-ready professionals </span> 
            through proactive AI-driven ecosystems.
          </p>

          {/* Animated Tech Target */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="mt-16 relative w-32 h-32 hidden md:flex items-center justify-center opacity-30"
          >
            <div className="absolute inset-0 border-2 border-dashed border-[#c4ec0d] rounded-full" />
            <div className="absolute inset-4 border border-[#5b21b6] rounded-full" />
            <div className="w-4 h-4 bg-white rounded-full blur-[2px]" />
          </motion.div>
        </motion.div>

        {/* --- RIGHT FEATURES LIST (Glassmorphism) --- */}
        <div className="space-y-6 relative">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative flex items-start gap-6 bg-white/[0.03] backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 transition-all duration-500 hover:bg-white/[0.07] hover:border-[#c4ec0d]/30"
            >
              {/* Animated Icon Container */}
              <div className={`bg-gradient-to-br ${item.color} p-4 rounded-2xl shadow-2xl transform group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-500`}>
                {item.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-white tracking-tight group-hover:text-[#c4ec0d] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Number */}
              <span className="absolute top-8 right-8 text-white/5 font-black text-4xl group-hover:text-[#c4ec0d]/10 transition-colors">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKodBrand;