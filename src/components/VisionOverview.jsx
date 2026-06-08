import React from "react";
import { motion } from "framer-motion";
import { Layers, Monitor, Bot, Rocket, CheckCircle2, Star, Calendar, ArrowRight, Shield } from "lucide-react";

/**
 * VisionOverview Component
 * Fulfills precise alignment, typography hierarchy, and spacing requirements
 * for the KodBrand Alignment & Vision sections.
 */
export default function VisionOverview() {
  // CSS Custom Properties for theme flexibility
  const containerStyle = {
    "--accent-color": "#c4ec0d",
    "--accent-muted": "rgba(196, 236, 13, 0.15)",
    "--primary-purple": "#a855f7",
    "--purple-glow": "rgba(168, 85, 247, 0.2)",
    "--card-bg": "rgba(255, 255, 255, 0.03)",
    "--card-border": "rgba(255, 255, 255, 0.08)",
    "--card-hover-border": "rgba(196, 236, 13, 0.25)",
    "--text-primary": "#f5f5f0",
    "--text-secondary": "rgba(245, 245, 240, 0.55)",
    "--text-muted": "rgba(245, 245, 240, 0.35)",
  };

  // Animation variants for unified reveal effects
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section 
      style={containerStyle}
      className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-white/10 overflow-hidden font-sans"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#c4ec0d]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* SECTION 3: Programme Overview Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left"
      >
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--accent-color)] text-xs font-black uppercase tracking-[0.2em] backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 fill-current" /> Overview & Alignment
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--text-primary)] leading-tight tracking-tight">
            PROGRAMME <span className="text-[var(--primary-purple)]">OVERVIEW</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] font-medium max-w-2xl leading-relaxed">
            A comprehensive, professional-grade curriculum structured to take you from foundational concepts to advanced agency systems.
          </p>
        </div>

        {/* Global Stats/Duration Indicator - Vertically aligned with title */}
        <div className="bg-white/5 border border-[var(--card-border)] text-[var(--text-primary)] px-8 py-5 rounded-2xl flex items-center justify-center gap-4 shadow-xl backdrop-blur-md w-full md:w-auto flex-shrink-0">
          <Calendar className="text-2xl text-[var(--accent-color)] flex-shrink-0" />
          <div className="text-left">
            <p className="text-[10px] uppercase font-black tracking-widest text-[var(--text-muted)] leading-none mb-1.5">
              Total Duration
            </p>
            <p className="text-2xl font-black tracking-tight text-[var(--accent-color)]">120 Days</p>
          </div>
        </div>
      </motion.div>

      {/* SECTION 1: Programme Structure Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 mb-20 items-stretch"
      >
        {/* Card 1: Focus Areas */}
        <motion.div 
          variants={itemVariants} 
          className="relative group bg-[var(--card-bg)] backdrop-blur-md p-8 md:p-9 rounded-[32px] border border-[var(--card-border)] hover:border-[var(--card-hover-border)] transition-all duration-500 flex flex-col justify-between shadow-lg h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >
          {/* Badge: Left-aligned, properly offset above the card */}
          <div className="absolute -top-3.5 left-8 md:left-9 px-5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px] font-black uppercase tracking-widest shadow-md backdrop-blur-md">
            Phase 01 — Core
          </div>

          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-purple-400 uppercase tracking-wider">
              Focus Areas
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Build robust systems, implement SOPs, and automate workflows for absolute operational consistency.
            </p>
            
            {/* Alignment Items */}
            <ul className="space-y-5 pt-4">
              {[
                { icon: <Layers className="text-[var(--accent-color)]" />, title: "SOP & Documentation", desc: "Build structured processes & standard operating procedures." },
                { icon: <Monitor className="text-[var(--accent-color)]" />, title: "System Implementation", desc: "Implement end-to-end agency management systems." },
                { icon: <Bot className="text-[var(--accent-color)]" />, title: "Automation Setup", desc: "Automate workflows, track performance & scale with efficiency." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-left">
                  <div className="mt-1 bg-white/5 p-2.5 rounded-xl border border-white/10 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] text-base">{item.title}</h4>
                    <p className="text-[var(--text-secondary)] text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Card 2: Core Outcome */}
        <motion.div 
          variants={itemVariants}
          className="relative group bg-gradient-to-br from-purple-950/40 to-[var(--accent-muted)] text-[var(--text-primary)] p-8 md:p-9 rounded-[32px] border border-[var(--card-border)] hover:border-[var(--card-hover-border)] transition-all duration-500 flex flex-col justify-start items-start text-left shadow-lg h-full hover:shadow-[0_20px_40px_rgba(196,236,13,0.1)]"
        >
          {/* Badge: Left-aligned, properly offset above the card (visible because overflow-hidden is removed from parent) */}
          <div className="absolute -top-3.5 left-8 md:left-9 px-5 py-1.5 rounded-full bg-[var(--accent-color)] text-black text-[10px] font-black uppercase tracking-widest shadow-md z-20">
            Achieved Status
          </div>

          {/* Overflow wrapper to clip the glow circle within the card's rounded borders */}
          <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--accent-color)]/10 blur-[60px] rounded-full" />
          </div>
          
          <div className="relative z-10 flex flex-col justify-start items-start text-left h-full w-full">
            <div className="w-20 h-20 bg-black/40 border border-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md shadow-inner">
              <Rocket className="w-10 h-10 text-[var(--accent-color)]" />
            </div>
            
            <span className="text-xs font-black uppercase tracking-widest text-[var(--text-muted)] mb-2 block">
              Target Goal
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[var(--accent-color)] uppercase tracking-wider mb-4 leading-tight">
              Run Agency Independently
            </h3>
            <div className="inline-block bg-[var(--accent-color)] text-black px-6 py-2 rounded-full font-black uppercase text-xs tracking-wider mb-6 shadow-md">
              100% Autonomy
            </div>
            
            <p className="text-[var(--text-primary)] opacity-80 font-medium text-sm leading-relaxed max-w-xs">
              Develop financial awareness and scale your own operations with premium standard systems.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Level 3 Add-on Course Section (Section 2) */}
        <motion.div 
          variants={itemVariants}
          className="relative group bg-[var(--card-bg)] backdrop-blur-md p-8 md:p-9 rounded-[32px] border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 flex flex-col justify-between shadow-lg h-full hover:shadow-[0_20px_40px_rgba(168,85,247,0.2)]"
        >
          {/* Badge: Left-aligned, properly offset above the card */}
          <div className="absolute -top-3.5 left-8 md:left-9 px-5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-[10px] font-black uppercase tracking-widest shadow-md backdrop-blur-md">
            15 Days — Add-on Course
          </div>

          <div className="space-y-6 flex-grow flex flex-col justify-between text-left items-start">
            <div className="space-y-4">
              <span className="text-[10px] font-black bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-md uppercase tracking-wider inline-block">
                Specialized Add-on
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-purple-400 uppercase tracking-wider mt-4">
                System Management Implementation
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Unlock specialized execution frameworks to manage remote teams, configure modern tools, and streamline client delivery.
              </p>
            </div>

            {/* SECTION 2: 3 Alignment Points (Aligned to match Card 1 layout) */}
            <div className="space-y-4 pt-6 border-t border-white/5 w-full">
              <p className="text-xs font-black text-[var(--text-muted)] uppercase tracking-wider">
                Alignment Points:
              </p>
              <ul className="space-y-5 pt-2">
                {[
                  { icon: <CheckCircle2 className="text-purple-400" />, title: "Framework & Workflow", desc: "Proven operational blueprints to standardize client work." },
                  { icon: <Monitor className="text-purple-400" />, title: "Tools & Setup", desc: "Step-by-step config of Notion, Slack, and tracking software." },
                  { icon: <CheckCircle2 className="text-purple-400" />, title: "Team Management", desc: "Establishing delegation, reporting channels & feedback loops." }
                ].map((point, index) => (
                  <li key={index} className="flex gap-4 items-start text-left">
                    <div className="mt-1 bg-white/5 p-2.5 rounded-xl border border-white/10 flex-shrink-0">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-primary)] text-base">{point.title}</h4>
                      <p className="text-[var(--text-secondary)] text-xs mt-1 leading-relaxed">{point.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* SECTION 3: Consolidated Program Overview Footer Bar */}
      <div className="bg-white/5 rounded-3xl p-6 md:p-8 border border-[var(--card-border)] backdrop-blur-md shadow-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="absolute top-0 left-0 w-2 h-full bg-[var(--accent-color)] pointer-events-none" />
        
        <div className="space-y-2 text-center md:text-left">
          <h4 className="text-lg font-black text-[var(--text-primary)] uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
            <Shield className="w-5 h-5 text-[var(--accent-color)]" />
            Consolidated Alignment Standard
          </h4>
          <p className="text-sm text-[var(--text-secondary)] max-w-xl leading-relaxed">
            All curriculum phases are mapped precisely to real-world outcomes, ensuring operational readiness, agency owner credentials, and financial independence.
          </p>
        </div>

        <button className="bg-[var(--accent-color)] text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-lg flex-shrink-0 w-full md:w-auto">
          Explore Curriculum Details <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
