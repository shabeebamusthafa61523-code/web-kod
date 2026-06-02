import React from "react";
import { motion } from "framer-motion";

const galleryItems = [
  {
    id: "01",
    src: "/gallery/gallery (11).jpeg",
    title: "Authentication",
    category: "Security",
  },
  {
    id: "02",
    src: "/gallery/gallery (1).jpeg",
    title: "Dashboard",
    category: "UI Module",
  },
  {
    id: "03",
    src: "/gallery/gallery (2).jpeg",
    title: "Analytics",
    category: "Reports",
  },
  {
    id: "04",
    src: "/gallery/gallery (3).jpeg",
    title: "Cloud Storage",
    category: "Infrastructure",
  },
  {
    id: "05",
    src: "/gallery/gallery (4).jpeg",
    title: "API Gateway",
    category: "Backend",
  },
  {
    id: "06",
    src: "/gallery/gallery (5).jpeg",
    title: "Notifications",
    category: "Communication",
  },
  {
    id: "07",
    src: "/gallery/gallery (6).jpeg",
    title: "Payment System",
    category: "Finance",
  },
  {
    id: "08",
    src: "/gallery/gallery (7).jpeg",
    title: "AI Module",
    category: "Automation",
  },
  {
    id: "09",
    src: "/gallery/gallery (8).jpeg",
    title: "User Profiles",
    category: "Management",
  },
  {
    id: "10",
    src: "/gallery/gallery (9).jpeg",
    title: "Monitoring",
    category: "DevOps",
  },
  {
    id: "11",
    src: "/gallery/gallery (10).jpeg",
    title: "Data Engine",
    category: "Database",
  },
];

const duplicatedItems = [...galleryItems, ...galleryItems];

export default function CompactAutoGallery() {
  return (
    <div className="bg-transparent text-white py-12 overflow-hidden selection:bg-[#c4ec0d] selection:text-black">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[#c4ec0d] font-bold tracking-[0.3em] uppercase text-[10px] mb-2"
        >
          Our Space
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-medium tracking-tighter leading-none"
        >
          KOD{" "}
          <span className="italic font-serif text-[#5b21b6]">
            Gallery
          </span>
        </motion.h2>
      </div>

      {/* Sliding Gallery */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-4 pr-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group relative w-[220px] md:w-[320px] shrink-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-[#c4ec0d]/40">

                <img
                  src={item.src}
                  // alt={item.title}
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute top-4 left-4 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                  <span className="text-[8px] font-mono text-[#c4ec0d] tracking-widest uppercase">
                    {item.id}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  {/* <p className="text-[#c4ec0d] text-[8px] font-bold uppercase tracking-[0.2em] mb-1">
                    {item.category}
                  </p> */}

                  {/* <h3 className="text-lg md:text-xl font-medium tracking-tight text-white italic">
                    {item.title}
                  </h3> */}
                </div>
              </div>

              <div className="absolute -inset-2 bg-[#5b21b6]/10 blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}