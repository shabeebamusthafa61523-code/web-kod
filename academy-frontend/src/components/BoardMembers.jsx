import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, ShieldCheck, Binary } from "lucide-react";

const members = [
  { id: "01", name: "MOHAMED JASIM.P", role: "Executive Board" },
  { id: "02", name: "SHIHAB PALAN PADIYAN", role: "Executive Board" },
  { id: "03", name: "ABDUL SABEER .P", role: "Executive Board" },
  { id: "04", name: "HASHIR", role: "Executive Board" },
  { id: "05", name: "HAWAS", role: "Executive Board" },
  { id: "06", name: "MOHAMED", role: "Executive Board" },
];

export default function BoardMembers() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Architectural Elements - Restored from previous style */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section - Premium KOD Style */}
        <div className="relative mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Binary className="text-[#c4ec0d] w-5 h-5" />
            <span className="text-xs font-black tracking-[0.5em] text-white/40 uppercase">EXECUTIVE // ADVISORY</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-[0.9]">
            BOARD <br />
            <span className="text-[#c4ec0d] italic flex items-center gap-4">
              MEMBERS <ShieldCheck className="w-10 h-10 md:w-16 md:h-16 not-italic opacity-50" />
            </span>
          </h1>
        </div>

        {/* Responsive Grid: grid-cols-2 ensures 2 columns on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Glass Card - Architectural Style */}
              <div className="relative h-full p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-2xl transition-all duration-700 group-hover:border-[#c4ec0d]/40 group-hover:bg-white/[0.08]">
                
                {/* ID Corner Badge */}
                {/* <div className="absolute top-6 right-8 text-[10px] font-mono text-[#c4ec0d] tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">
                  REF_{member.id}
                </div> */}

                <div className="relative z-10 flex flex-col items-center">
                  {/* Avatar Section */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 md:w-36 md:h-36 rounded-full border border-dashed border-white/20 p-2 group-hover:border-[#c4ec0d] transition-all duration-700 group-hover:rotate-12">
                      <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center overflow-hidden border border-white/5 relative shadow-2xl">
                        <User className="w-10 h-10 md:w-20 md:h-20 text-white/5 group-hover:text-white/20 transition-all" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#5b21b6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    
                    {/* The 01/02 Circle from Image */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#5b21b6] text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 shadow-xl group-hover:bg-[#c4ec0d] group-hover:text-black transition-colors duration-500">
                      {member.id}
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="text-center space-y-2 md:space-y-4">
                    <h3 className="text-sm md:text-2xl font-black text-white tracking-tighter leading-tight group-hover:text-[#c4ec0d] transition-colors uppercase">
                      {member.name}
                    </h3>
                    <div className="h-px w-8 bg-[#c4ec0d]/30 mx-auto group-hover:w-16 transition-all duration-500" />
                    <p className="text-[8px] md:text-xs font-black tracking-[0.4em] text-white/30 uppercase group-hover:text-white/60">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Decorative Tech Detail */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/10 group-hover:bg-[#c4ec0d] group-hover:scale-150 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}