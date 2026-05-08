import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, Users, ShieldCheck } from 'lucide-react';

const ProductsAndServicesGrid = () => {
  const categories = [
    {
      id: "01",
      title: "RESULT DRIVEN",
      desc: "Data-backed strategies that deliver measurable growth.",
      icon: <Target className="w-6 h-6 text-[#c4ec0d]" />,
      gradient: "from-[#5b21b6]/20 to-transparent",
    },
    {
      id: "02",
      title: "CREATIVE & INNOVATIVE",
      desc: "Unique ideas and creative content that make your brand stand out.",
      icon: <Lightbulb className="w-6 h-6 text-[#c4ec0d]" />,
      gradient: "from-[#c4ec0d]/10 to-transparent",
    },
    {
      id: "03",
      title: "GROWTH FOCUSED",
      desc: "We focus on building your brand, leads, and conversions.",
      icon: <TrendingUp className="w-6 h-6 text-[#c4ec0d]" />,
      gradient: "from-[#5b21b6]/20 to-transparent",
    },
    {
      id: "04",
      title: "EXPERT TEAM",
      desc: "Experienced professionals dedicated to your success.",
      icon: <Users className="w-6 h-6 text-[#c4ec0d]" />,
      gradient: "from-[#c4ec0d]/10 to-transparent",
    },
    {
      id: "05",
      title: "TRANSPARENT & RELIABLE",
      desc: "Clear communication, regular reporting, and total transparency.",
      icon: <ShieldCheck className="w-6 h-6 text-[#c4ec0d]" />,
      gradient: "from-[#5b21b6]/20 to-transparent",
    },
  ];

  return (
    <section className="relative py-10 lg:py-9 px-6 bg-transparent overflow-hidden selection:bg-[#c4ec0d] selection:text-black">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-[#5b21b6]/10 blur-[80px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-[#c4ec0d]/5 blur-[80px] md:blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section: Adjusted for Mobile Alignment */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-24 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-white opacity-10 leading-none mb-[-1rem] md:mb-[-2rem]">
              PRODUCTS
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white tracking-tight relative z-10 uppercase">
              And <span className="text-[#c4ec0d]">Services.</span>
            </h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 max-w-sm text-left md:text-right font-medium italic border-l-2 md:border-l-0 md:border-r-2 border-[#c4ec0d] pl-4 md:pl-0 md:pr-6 text-sm sm:text-base"
          >
            "KOD.BRAND Digital Marketing Solution • Smart Strategies • Creative Solutions • Real Results"
          </motion.p>
        </div>

        {/* Responsive Grid: 1 col (mobile), 2 cols (tablet), 5 cols (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
          {categories.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="relative group p-6 lg:p-8 rounded-[2rem] lg:rounded-[3rem] bg-white/[0.02] border border-white/10 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.05] hover:border-[#c4ec0d]/40 flex flex-col h-full"
            >
              {/* Inner Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 lg:mb-8 flex justify-between items-center">
                  <div className="p-3 rounded-2xl bg-black/50 border border-white/10 group-hover:border-[#c4ec0d]/50 transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-4xl lg:text-5xl font-black text-white/5 group-hover:text-[#c4ec0d]/20 transition-colors">
                    {step.id}
                  </span>
                </div>

                <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 tracking-tight group-hover:text-[#c4ec0d] transition-colors uppercase leading-tight">
                  {step.title}
                </h4>
                
                <p className="text-gray-500 text-xs lg:text-sm leading-relaxed font-medium group-hover:text-gray-300 transition-colors flex-grow">
                  {step.desc}
                </p>

                {/* Decorative Dot: Fixed at bottom */}
                <div className="mt-6 lg:mt-10 w-1.5 h-1.5 rounded-full bg-purple-200 opacity-20 group-hover:bg-[#c4ec0d] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsAndServicesGrid;