import React from "react";
import { motion } from "framer-motion";

const galleryItems = [
  { id: "SYS-01", title: "Neural Sync", category: "AI Interface", src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" },
  { id: "SYS-02", title: "Cloud Mesh", category: "Network Arch", src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" },
  { id: "SYS-03", title: "Quantum Dev", category: "Core Systems", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" },
  { id: "SYS-04", title: "Cyber Node", category: "Hardware Lab", src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" },
  { id: "SYS-05", title: "Data Stream", category: "Cyber Security", src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" },
  { id: "SYS-06", title: "Apex Logic", category: "Software Suite", src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" },
];

const duplicatedItems = [...galleryItems, ...galleryItems];

export default function CompactAutoGallery() {
  return (
    <div className="bg-transparent text-white py-12 overflow-hidden selection:bg-[#c4ec0d] selection:text-black">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-10 px-6 md:px-12">
        <motion.p 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[#c4ec0d] font-bold tracking-[0.3em] uppercase text-[10px] mb-2"
        >
          Tech Stack
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-medium tracking-tighter leading-none"
        >
          System <span className="italic font-serif text-[#5b21b6]">Components</span>
        </motion.h2>
      </div>

      {/* Sliding Container */}
      <div className="relative flex">
        <motion.div
          className="flex gap-4 pr-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 30, // Smoother glide for tech visuals
            repeat: Infinity,
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group relative w-[220px] md:w-[320px] shrink-0"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-[#c4ec0d]/40">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* Compact ID Tag */}
                <div className="absolute top-4 left-4 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                  <span className="text-[8px] font-mono text-[#c4ec0d] tracking-widest uppercase">{item.id}</span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[#c4ec0d] text-[8px] font-bold uppercase tracking-[0.2em] mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-lg md:text-xl font-medium tracking-tight text-white italic">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Tighter Blue/Purple Glow Effect */}
              <div className="absolute -inset-2 bg-[#5b21b6]/10 blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}