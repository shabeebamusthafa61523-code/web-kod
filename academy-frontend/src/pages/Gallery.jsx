import React from "react";
import { motion } from "framer-motion";

const galleryItems = [
  { id: "LFb-A1", title: "Le'Tohfa", category: "Luxury Resort", src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" },
  { id: "LFb-B2", title: "Pacha.Cart", category: "E-Commerce", src: "https://images.unsplash.com/photo-1604719312563-8912e9223c6a?auto=format&fit=crop&w=800&q=80" },
  { id: "LFb-C3", title: "Brocko", category: "Branding", src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" },
  { id: "LFb-D4", title: "Tech Tap", category: "Gadgets", src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" },
  { id: "LFb-E5", title: "Sajna'z", category: "Boutique Bakery", src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80" },
  { id: "LFb-F6", title: "Logistics", category: "ERP Solution", src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" },
];

const duplicatedItems = [...galleryItems, ...galleryItems];

export default function CompactAutoGallery() {
  return (
    <div className="bg-transparent text-white py-12 overflow-hidden selection:bg-[#c4ec0d] selection:text-black">
      
      {/* Header Section - Reduced Margins & Font Sizes */}
      <div className="max-w-7xl mx-auto mb-10 px-6 md:px-12">
        <motion.p 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[#c4ec0d] font-bold tracking-[0.3em] uppercase text-[10px] mb-2"
        >
          explore
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-medium tracking-tighter leading-none"
        >
          Gallery <span className="italic font-serif text-[#5b21b6]">Drops</span>
        </motion.h2>
      </div>

      {/* Sliding Container */}
      <div className="relative flex">
        <motion.div
          className="flex gap-4 pr-4" // Reduced gap
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 25, // Slightly faster to compensate for smaller size
            repeat: Infinity,
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group relative w-[220px] md:w-[320px] shrink-0" // Reduced width
            >
              {/* Image Container with tight radius */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-[#c4ec0d]/30">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                
                {/* Compact ID Tag */}
                <div className="absolute top-4 left-4 px-2 py-0.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                  <span className="text-[8px] font-mono text-[#c4ec0d] tracking-widest">{item.id}</span>
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

              {/* Tighter Glow Effect */}
              <div className="absolute -inset-2 bg-[#5b21b6]/5 blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}