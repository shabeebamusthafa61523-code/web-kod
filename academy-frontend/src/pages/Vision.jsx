/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaRegUserCircle,
  FaBookOpen,
  FaChartLine,
  FaCogs,
  FaCrosshairs,
  FaLightbulb,
  FaRocket,
  FaSyncAlt,
  FaUserTie,
  FaCheckCircle,
  FaCalendarAlt,
  FaLaptopCode,
  FaBullhorn,
  FaPalette,
  FaArrowRight,
  FaHtml5,
  FaJs,
  FaGithub,
  FaReact,
  FaFacebook,
  FaInstagram,
  FaEdit,
  FaRobot,
  FaMountain,
  FaComments,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaNodeJs,
  FaDatabase,
  FaLock,
  FaPython,
  FaMobileAlt,
  FaSearch,
  FaEnvelope,
  FaFilter,
  FaBullseye,
  FaVideo,
  FaStar,
  FaAward,
  FaMoneyBillWave,
  FaFlagCheckered,
} from "react-icons/fa";
import {
  SiCanva,
  SiGoogleads,
  SiMeta,
  SiTailwindcss,
  SiMongodb,
  SiFlutter,
} from "react-icons/si";
import {
  Target, Users, Zap, TrendingUp, ChevronRight, Code, Megaphone, PenTool, Monitor, Smartphone, Database, Server, Bot, ShieldCheck, Award, DollarSign, PieChart, Briefcase, Layers, Settings, Cpu, CheckCircle2, Trophy, ArrowRight, ArrowUp, Sparkles,
  Rocket, Clock, BarChart, FileText, CheckSquare, PhoneCall, RefreshCw, Handshake, Star, UserPlus, CreditCard, Gift, LineChart, CandlestickChart
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const ObjectiveItem = ({ Icon, text, keyPoints }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex items-center gap-4 py-3 px-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
  >
    <div className="p-2 bg-purple-600/20 rounded-full">
      <Icon className="text-xl text-[#c4ec0d]" />
    </div>
    <p className="text-sm md:text-base text-white/90">
      {text} <strong className="text-[#c4ec0d]">{keyPoints}</strong>
    </p>
  </motion.div>
);

const PillarItem = ({ Icon, text }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex flex-col items-center gap-2 p-4 min-w-[120px]"
  >
    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 hover:border-[#c4ec0d] transition-colors">
      <Icon className="text-xl text-[#c4ec0d]" />
    </div>
    <span className="text-[10px] font-black uppercase tracking-widest text-white/70 text-center">
      {text}
    </span>
  </motion.div>
);

const TrackCard = ({
  title,
  icon: Icon,
  items,
  outcomes,
  color = "border-white/10",
}) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`bg-white/5 border ${color} rounded-3xl p-6 flex flex-col h-full hover:border-[#c4ec0d]/50 transition-colors cursor-pointer`}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-[#c4ec0d] rounded-xl">
        <Icon className="text-black text-xl" />
      </div>
      <h3 className="text-white font-bold uppercase tracking-wider text-sm">
        {title}
      </h3>
    </div>
    <div className="space-y-4 flex-grow">
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-3">
          <div className="mt-1">{item.icon}</div>
          <div>
            <p className="text-white text-sm font-bold">{item.label}</p>
            <p className="text-gray-400 text-xs leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-8 pt-6 border-t border-white/10">
      <div className="flex items-center gap-2 mb-3">
        <FaCheckCircle className="text-[#c4ec0d]" />
        <span className="text-[#c4ec0d] font-bold text-[10px] uppercase">
          Expected Outcome
        </span>
      </div>
      <ul className="text-gray-300 text-xs space-y-2">
        {outcomes.map((o, i) => (
          <li key={i} className="flex items-start gap-2">
            <span>•</span> {o}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const VisionPage = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });



  return (
    <div
      ref={targetRef}
      className="relative overflow-x-hidden font-sans"
      style={{ background: 'rgba(0,0,0,0.55)' }}
    >

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SECTION 1 — VISION & OBJECTIVES
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-[#c4ec0d] font-black uppercase tracking-widest text-sm mb-2">
                Target Goals
              </h2>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                OUR{" "}
                <span className="text-purple-500 underline decoration-[#c4ec0d]">
                  OBJECTIVE
                </span>
              </h1>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <ObjectiveItem
                Icon={FaRegUserCircle}
                text="Build"
                keyPoints="System-Oriented Professionals"
              />
              <ObjectiveItem
                Icon={FaUserTie}
                text="Create"
                keyPoints="Independent Agency Owners"
              />
              <ObjectiveItem
                Icon={FaCrosshairs}
                text="Focus on"
                keyPoints="Realistic & Result-Oriented"
              />
              <ObjectiveItem
                Icon={FaSyncAlt}
                text="Combine"
                keyPoints="Skills + Systems + Financial Awareness"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            <div className="absolute w-80 h-80 bg-purple-600/20 rounded-full blur-[120px]" />
            <img
              src="/logo2.png"
              alt="Vision"
              className="relative z-10 w-full max-w-sm drop-shadow-[0_0_30px_rgba(196,236,13,0.2)]"
            />
          </motion.div>
        </div>

        {/* Pillars Bar */}
        <div className="mt-20 w-full max-w-4xl bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-2 overflow-x-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-around items-center min-w-[600px]"
          >
            <PillarItem Icon={FaLightbulb} text="System Driven" />
            <div className="h-10 w-px bg-white/10" />
            <PillarItem Icon={FaRocket} text="Future Focused" />
            <div className="h-10 w-px bg-white/10" />
            <PillarItem Icon={FaChartLine} text="Growth Oriented" />
            <div className="h-10 w-px bg-white/10" />
            <PillarItem Icon={FaCheckCircle} text="Result Based" />
          </motion.div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SECTION 2 — PROGRAM STRUCTURE (STAIRCASE)
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    SECTION 2 — PROGRAM STRUCTURE (REAL 3D STAIRCASE)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center py-28 px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white text-center md:text-left">
            PROGRAM <span className="text-[#c4ec0d]">STRUCTURE</span>
          </h2>
          <p className="text-gray-500 text-[10px] md:text-xs tracking-[0.4em] uppercase mt-4 text-center md:text-left">
            Step-by-step transformation
          </p>
        </motion.div>

        {/* STAIRCASE - Ported from Final Outcome */}
        <div className="relative flex flex-col md:block md:h-[550px] w-full max-w-3xl mt-12 lg:mt-0 mx-auto gap-6 px-4 md:px-0">
          {/* Connecting Glowing Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '85%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute bottom-10 left-[20%] md:left-[30%] w-1 bg-gradient-to-t from-purple-600 via-cyan-400 to-[#c4ec0d] rounded-full blur-[3px]"
          />
          <div className="hidden md:block absolute bottom-10 left-[20%] md:left-[30%] w-[2px] h-[85%] bg-gradient-to-t from-purple-600 via-cyan-400 to-[#c4ec0d] rounded-full opacity-50" />

          {[
            { level: 1, title: "Basics & Foundation", color: "from-purple-700 to-purple-500", border: "border-purple-500/30", textClass: "text-white" },
            { level: 2, title: "Kod.Pro Skills", color: "from-cyan-500 to-teal-500", border: "border-cyan-400/40", textClass: "text-white" },
            { level: 3, title: "Agency Management System", color: "from-[#c4ec0d] to-[#c4ec0d]", border: "border-[#c4ec0d]", textClass: "text-black" }
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.18 }}
              className={`relative md:absolute w-full md:w-[70%] p-5 md:p-6 rounded-2xl border ${step.border} bg-gradient-to-r ${step.color} shadow-[0_15px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl group hover:-translate-y-3 transition-all duration-300 md:bottom-[var(--stair-bottom)] md:left-[var(--stair-left)] z-10`}
              style={{ '--stair-bottom': `${idx * 25 + 5}%`, '--stair-left': `${idx * 15}%` }}
            >
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 text-center md:text-left">
                <div className={`w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/20 shadow-inner font-black text-xl group-hover:scale-110 transition-transform flex-shrink-0 ${step.textClass ? 'bg-black/20 border-black/20 text-black' : 'text-white'}`}>
                  0{step.level}
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <div className={`text-[10px] md:text-xs font-black uppercase tracking-widest opacity-70 mb-1 ${step.textClass || 'text-white'}`}>Level 0{step.level}</div>
                  <div className={`font-bold text-lg md:text-xl leading-tight ${step.textClass || 'text-white'}`}>{step.title}</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            </motion.div>
          ))}

          {/* Target at Top */}
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
            className="absolute top-[0%] left-[60%] md:left-[70%] z-50 flex flex-col items-center"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-[#c4ec0d] blur-2xl opacity-40 group-hover:opacity-70 group-hover:blur-3xl transition-all duration-500 animate-pulse" />
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-b from-black to-purple-950 rounded-full border-2 border-[#c4ec0d] flex items-center justify-center shadow-[0_0_40px_rgba(196,236,13,0.5)] relative z-10 group-hover:scale-110 transition-transform duration-500">
                <Target className="text-[#c4ec0d] w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_0_10px_rgba(196,236,13,0.8)]" />
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowUp className="text-[#c4ec0d] w-8 h-8 mt-4 drop-shadow-[0_0_10px_rgba(196,236,13,0.5)]" />
            </motion.div>
          </motion.div>

          {/* Floating Particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -30, 0], opacity: [0, 0.8, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{ repeat: Infinity, duration: 3 + ((i * 1.5) % 2), delay: i * 0.4 }}
              className="absolute w-2 h-2 rounded-full bg-[#c4ec0d] blur-[1px] z-50 pointer-events-none"
              style={{
                bottom: `${((i * 13) % 80) + 20}%`,
                left: `${((i * 27) % 80) + 10}%`,
              }}
            />
          ))}
        </div>

        {/* BOTTOM BADGES */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl w-full mx-auto px-4 md:px-0">

          {/* STEP BY STEP */}
          <div className="group bg-white/5 border border-white/10 rounded-xl p-5 text-center backdrop-blur-md transition-all duration-300 hover:border-[#c4ec0d]/40 hover:shadow-[0_0_20px_rgba(196,236,13,0.15)]">

            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#c4ec0d]/10 flex items-center justify-center">
              <FaCrosshairs className="text-[#c4ec0d] text-sm" />
            </div>

            <p className="text-white text-xs font-bold uppercase tracking-wide">
              Step-by-step
            </p>
            <p className="text-gray-500 text-[10px] mt-1">
              Learning Path
            </p>
          </div>

          {/* PROGRESSIVE */}
          <div className="group bg-white/5 border border-[#c4ec0d]/30 rounded-xl p-5 text-center backdrop-blur-md transition-all duration-300 hover:border-[#c4ec0d]/60 hover:shadow-[0_0_25px_rgba(196,236,13,0.25)]">

            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#c4ec0d]/10 flex items-center justify-center">
              <FaChartLine className="text-[#c4ec0d] text-sm" />
            </div>

            <p className="text-[#c4ec0d] text-xs font-bold uppercase tracking-wide">
              Progressive
            </p>
            <p className="text-gray-500 text-[10px] mt-1">
              Skill Growth
            </p>
          </div>

          {/* REAL GROWTH */}
          <div className="group bg-white/5 border border-white/10 rounded-xl p-5 text-center backdrop-blur-md transition-all duration-300 hover:border-[#c4ec0d]/40 hover:shadow-[0_0_20px_rgba(196,236,13,0.15)]">

            <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#c4ec0d]/10 flex items-center justify-center">
              <FaCheckCircle className="text-[#c4ec0d] text-sm" />
            </div>

            <p className="text-white text-xs font-bold uppercase tracking-wide">
              Real Results
            </p>
            <p className="text-gray-500 text-[10px] mt-1">
              Real Transformation
            </p>
          </div>

        </div>

      </section>
      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SECTION 3 — LEVEL 1 DETAILED (FULL)
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="relative z-10 min-h-screen py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left"
        >
          <div>
            <h2 className="text-[#c4ec0d] font-black text-5xl md:text-7xl mb-2">
              Level 1 —
            </h2>
            <h3 className="text-white text-3xl md:text-5xl font-light text-center md:text-left">
              Basics & Foundation
            </h3>
          </div>
          <div className="bg-[#c4ec0d] text-black px-8 py-4 rounded-2xl flex items-center justify-center gap-4 shadow-[0_0_20px_rgba(196,236,13,0.4)] w-full md:w-auto">
            <FaCalendarAlt className="text-2xl flex-shrink-0" />
            <div className="text-left">
              <p className="text-[10px] uppercase font-black leading-none">
                Duration
              </p>
              <p className="text-xl font-bold">30 Days</p>
            </div>
          </div>
        </motion.div>

        {/* Focus / Ring / Outcome */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20"
        >
          <motion.div variants={itemVariants} className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h4 className="text-purple-500 font-black uppercase text-center mb-6">
              Focus
            </h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaLaptopCode className="text-[#c4ec0d]" /> Digital Basics
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaComments className="text-[#c4ec0d]" /> Communication
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaCogs className="text-[#c4ec0d]" /> Agency Workflow
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-40 h-40 rounded-full border-4 border-dashed border-[#c4ec0d] flex flex-col items-center justify-center bg-purple-900/20 backdrop-blur-xl">
              <span className="text-5xl font-black text-white">01</span>
              <span className="text-xs font-bold text-[#c4ec0d] uppercase">
                Level
              </span>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
            <h4 className="text-[#c4ec0d] font-black uppercase mb-6">
              Outcome
            </h4>
            <div className="flex flex-col items-center gap-2">
              <FaMountain className="text-4xl text-white/50 mb-2" />
              <p className="text-xl font-bold text-white leading-tight">
                Strong foundation & clarity
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Track Cards — Level 1 FULL */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <TrackCard
            title="Coding Track — L1"
            icon={FaLaptopCode}
            items={[
              {
                icon: <FaHtml5 className="text-orange-500" />,
                label: "HTML, CSS, UI Basics",
                desc: "Foundational structure.",
              },
              {
                icon: <FaJs className="text-yellow-400" />,
                label: "JavaScript Fundamentals",
                desc: "Interactive logic.",
              },
              {
                icon: <FaGithub className="text-white" />,
                label: "Git & Deployment",
                desc: "Versioning and hosting.",
              },
              {
                icon: <FaReact className="text-blue-400" />,
                label: "Intro to Frameworks",
                desc: "React/Flutter basics.",
              },
            ]}
            outcomes={[
              "Build 1 Website / App",
              "Coding workflow",
              "L2 Readiness",
            ]}
          />
          <TrackCard
            title="Digital Marketing — L1"
            icon={FaBullhorn}
            items={[
              {
                icon: (
                  <div className="flex gap-1 text-xs">
                    <FaFacebook className="text-[#1877F2]" />
                    <FaInstagram className="text-[#E1306C]" />
                  </div>
                ),
                label: "Social Media Growth",
                desc: "Engagement & Content.",
              },
              {
                icon: <FaEdit className="text-[#c4ec0d]" />,
                label: "Content Creation",
                desc: "Reels and Copywriting.",
              },
              {
                icon: <SiCanva className="text-blue-400" />,
                label: "Graphic Tools",
                desc: "Canva mastery.",
              },
              {
                icon: <SiMeta className="text-blue-500" />,
                label: "Intro to Paid Ads",
                desc: "Basic campaign setup.",
              },
            ]}
            outcomes={["3-5 Projects", "Portfolio Started", "Client Ready"]}
          />
          <TrackCard
            title="Graphic Design — L1"
            icon={FaPalette}
            items={[
              {
                icon: <FaPalette className="text-red-400" />,
                label: "Design Theory",
                desc: "Typography & Layout.",
              },
              {
                icon: <SiCanva className="text-blue-400" />,
                label: "Visual Composition",
                desc: "Layout techniques.",
              },
              {
                icon: <FaInstagram className="text-pink-500" />,
                label: "Social Creatives",
                desc: "Posts and Banners.",
              },
              {
                icon: <FaRegUserCircle className="text-orange-400" />,
                label: "Identity Basics",
                desc: "Branding and Logos.",
              },
            ]}
            outcomes={[
              "Set of Social Designs",
              "Portfolio Starter",
              "Design Fundamentals",
            ]}
          />
        </motion.div>

        {/* Step Flow Footer */}
        <div className="bg-white/5 rounded-full p-4 border border-white/10 hidden lg:block">
          <div className="flex justify-around items-center text-[10px] font-bold text-white uppercase tracking-tighter">
            <div className="flex items-center gap-2">
              1. Learn Basics <FaArrowRight className="text-[#c4ec0d]" />
            </div>
            <div className="flex items-center gap-2">
              2. Build Projects <FaArrowRight className="text-[#c4ec0d]" />
            </div>
            <div className="flex items-center gap-2">
              3. Upload & Share <FaArrowRight className="text-[#c4ec0d]" />
            </div>
            <div className="flex items-center gap-2">
              4. Get Feedback <FaArrowRight className="text-[#c4ec0d]" />
            </div>
            <div className="flex items-center gap-2">5. Level 2 Ready</div>
          </div>
        </div>

        <div className="mt-10 bg-gradient-to-r from-purple-900/50 to-transparent border-y border-[#c4ec0d]/30 py-4 text-center backdrop-blur-sm">
          <p className="text-white font-black tracking-widest text-xs italic">
            â­ START SMALL. LEARN SMART. GROW BIG. —{" "}
            <span className="text-[#c4ec0d]">KOD.brand</span>
          </p>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SECTION 4 — LEVEL 2 DETAILED (FULL)
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-[#c4ec0d] font-black text-5xl md:text-7xl mb-2 uppercase italic text-center md:text-left">
              Level 2 —
            </h2>
            <h3 className="text-white text-3xl md:text-5xl font-light text-center md:text-left">
              Kod.Pro Skills
            </h3>
          </div>
          <div className="bg-[#c4ec0d] text-black px-8 py-4 rounded-2xl flex items-center justify-center gap-4 shadow-[0_0_20px_rgba(196,236,13,0.4)] w-full md:w-auto">
            <FaCalendarAlt className="text-2xl flex-shrink-0" />
            <div className="text-left">
              <p className="text-[10px] uppercase font-black leading-none">
                Duration
              </p>
              <p className="text-xl font-bold">45 Days</p>
            </div>
          </div>
        </div>

        {/* Focus / Ring / Outcome */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-24">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6 order-2 lg:order-1">
            <h4 className="text-purple-400 font-black uppercase text-center border-b border-white/10 pb-4">
              Focus
            </h4>
            <ul className="space-y-6">
              <li className="flex flex-col items-center text-center gap-4 text-white/90 font-medium bg-white/5 p-3 rounded-xl border border-white/5">
                <FaGraduationCap className="text-[#c4ec0d] text-2xl flex-shrink-0" /> Advanced
                Skills
              </li>
              <li className="flex flex-col items-center text-center gap-4 text-white/90 font-medium bg-white/5 p-3 rounded-xl border border-white/5">
                <FaUserTie className="text-[#c4ec0d] text-2xl flex-shrink-0" /> Client
                Handling
              </li>
              <li className="flex flex-col items-center text-center gap-4 text-white/90 font-medium bg-white/5 p-3 rounded-xl border border-white/5">
                <FaBriefcase className="text-[#c4ec0d] text-2xl flex-shrink-0" /> Real
                Projects
              </li>
            </ul>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#c4ec0d]/20 rounded-full blur-3xl group-hover:bg-[#c4ec0d]/40 transition-all" />
              <div className="relative w-48 h-48 rounded-full border-4 border-dashed border-[#c4ec0d] flex flex-col items-center justify-center bg-black backdrop-blur-xl">
                <span className="text-6xl font-black text-white">02</span>
                <span className="text-sm font-bold text-[#c4ec0d] uppercase tracking-widest">
                  Level
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-[#c4ec0d]/30 order-3 text-center">
            <h4 className="text-[#c4ec0d] font-black uppercase mb-6 border-b border-white/10 pb-4">
              Outcome
            </h4>
            <FaCheckCircle className="text-5xl text-[#c4ec0d] mx-auto mb-4" />
            <p className="text-2xl font-bold text-white mb-2 leading-tight">
              Job-ready + Practical Experience
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="text-[10px] text-white/60 uppercase border border-white/20 px-2 py-1 rounded">
                Gain Skills
              </span>
              <span className="text-[10px] text-white/60 uppercase border border-white/20 px-2 py-1 rounded">
                Real Projects
              </span>
              <span className="text-[10px] text-white/60 uppercase border border-white/20 px-2 py-1 rounded">
                Job-Ready
              </span>
            </div>
          </div>
        </div>

        {/* Branding Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16 bg-white/5 p-10 rounded-[3rem] border border-white/10">
          <div>
            <h2 className="text-4xl font-black text-white text-center lg:text-left">KOD.Pro</h2>
            <p className="text-[#c4ec0d] font-bold text-center lg:text-left">by KOD.brand</p>
          </div>
          <div className="text-center space-y-4">
            <div className="inline-block bg-[#c4ec0d] text-black font-black px-6 py-1 rounded-full text-sm uppercase">
              â˜… Level 2 —˜…
            </div>
            <h3 className="text-2xl font-bold text-white uppercase italic">
              Get Certified. Earn. Grow.
            </h3>
            <p className="text-gray-400 text-sm">
              Use your Level 1 knowledge to handle projects, gain experience,
              freelance, and earn more.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="text-white font-bold text-xs uppercase mb-4 flex items-center justify-center lg:justify-start gap-2">
              <FaStar className="text-[#c4ec0d]" /> L2 Benefits
            </h4>
            <ul className="text-[11px] text-gray-300 space-y-2 text-center lg:text-left">
              <li>• Advanced Marketing & Analytics</li>
              <li>• Real-World Project Work</li>
              <li>• Industry Tools & Workshops</li>
              <li>• Freelance / Job Opportunities</li>
              <li>• Higher Earning Potential</li>
            </ul>
          </div>
        </div>

        {/* Professional Tracks */}
        <h4 className="text-white font-bold uppercase tracking-[0.3em] text-center mb-12 text-sm italic">
          Courses — L2 (Professional Track)
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <TrackCard
            title="React Developer"
            icon={FaReact}
            items={[
              {
                icon: <FaReact className="text-blue-400" />,
                label: "Advanced React",
                desc: "Hooks, Context, Performance.",
              },
              {
                icon: <FaCode className="text-white" />,
                label: "API & State",
                desc: "Redux, Axios, REST.",
              },
              {
                icon: <FaDatabase className="text-[#c4ec0d]" />,
                label: "State Management",
                desc: "Managing global app states.",
              },
            ]}
            outcomes={["Frontend Developer Role"]}
          />
          <TrackCard
            title="Node.JS Backend"
            icon={FaNodeJs}
            items={[
              {
                icon: <FaNodeJs className="text-[#c4ec0d]" />,
                label: "Node & Express",
                desc: "Building scalable servers.",
              },
              {
                icon: <FaDatabase className="text-yellow-400" />,
                label: "Database",
                desc: "MongoDB / PostgreSQL.",
              },
              {
                icon: <FaLock className="text-red-400" />,
                label: "Security",
                desc: "JWT & Auth protocols.",
              },
            ]}
            outcomes={["Backend Developer Role"]}
          />
          <TrackCard
            title="MERN Full Stack"
            icon={SiMongodb}
            items={[
              {
                icon: <SiMongodb className="text-[#c4ec0d]" />,
                label: "Full Stack Sync",
                desc: "Connecting Node to React.",
              },
              {
                icon: <FaCode className="text-purple-400" />,
                label: "CRUD Operations",
                desc: "Data lifecycle management.",
              },
              {
                icon: <FaRocket className="text-blue-400" />,
                label: "Deployment",
                desc: "Cloud & Server hosting.",
              },
            ]}
            outcomes={["Full Stack Developer"]}
            color="border-purple-500/50"
          />
          <TrackCard
            title="Flutter App Dev"
            icon={SiFlutter}
            items={[
              {
                icon: <SiFlutter className="text-blue-400" />,
                label: "Dart Mastery",
                desc: "Programming for mobile.",
              },
              {
                icon: <FaMobileAlt className="text-teal-400" />,
                label: "UI Design",
                desc: "Responsive app layouts.",
              },
              {
                icon: <FaDatabase className="text-orange-400" />,
                label: "Firebase",
                desc: "Real-time databases.",
              },
            ]}
            outcomes={["App Developer Role"]}
          />
          <TrackCard
            title="Python Advanced"
            icon={FaPython}
            items={[
              {
                icon: <FaRobot className="text-white" />,
                label: "AI & ML Basics",
                desc: "Intro to data intelligence.",
              },
              {
                icon: <FaCogs className="text-yellow-400" />,
                label: "Automation",
                desc: "Scripting for efficiency.",
              },
              {
                icon: <FaDatabase className="text-[#c4ec0d]" />,
                label: "Data Handling",
                desc: "Complex data structures.",
              },
            ]}
            outcomes={["AI / Data Specialist"]}
          />
        </div>

        {/* Marketing & Design L2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gradient-to-br from-[#c4ec0d]/10 to-black p-8 rounded-[2rem] border border-[#c4ec0d]/20">
            <h4 className="text-[#c4ec0d] font-bold mb-6 flex items-center justify-center md:justify-start gap-2 text-xl">
              <FaBullhorn /> Digital Marketing — L2
            </h4>
            <div className="grid grid-cols-2 gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <FaSearch className="text-[#c4ec0d]" /> SEO Mastery
              </div>
              <div className="flex items-center gap-2">
                <SiGoogleads className="text-blue-500" /> Google Ads (PPC)
              </div>
              <div className="flex items-center gap-2">
                <FaChartLine className="text-yellow-500" /> Analytics &
                Reporting
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-red-500" /> Email Automation
              </div>
              <div className="flex items-center gap-2">
                <FaFilter className="text-purple-500" /> Conversion Strategy
              </div>
              <div className="flex items-center gap-2">
                <FaRobot className="text-white" /> AI Marketing Tools
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-[#c4ec0d] font-bold uppercase">
                  L2 Outcome
                </p>
                <p className="text-white font-bold">
                  Marketing Expert / Freelancer
                </p>
              </div>
              <FaAward className="text-3xl text-[#c4ec0d]" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-black p-8 rounded-[2rem] border border-purple-500/20">
            <h4 className="text-purple-400 font-bold mb-6 flex items-center justify-center md:justify-start gap-2 text-xl">
              <FaPalette /> Graphic Design — L2
            </h4>
            <div className="grid grid-cols-2 gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <FaEdit className="text-blue-400" /> Adobe Photoshop
              </div>
              <div className="flex items-center gap-2">
                <FaPalette className="text-orange-500" /> Adobe Illustrator
              </div>
              <div className="flex items-center gap-2">
                <FaBullseye className="text-red-500" /> Branding Identity
              </div>
              <div className="flex items-center gap-2">
                <FaLaptopCode className="text-pink-500" /> UI/UX Basics
              </div>
              <div className="flex items-center gap-2">
                <FaVideo className="text-blue-500" /> Motion Graphics
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-[#c4ec0d]" /> High-Paying Projects
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-purple-400 font-bold uppercase">
                  L2 Outcome
                </p>
                <p className="text-white font-bold">Professional Designer</p>
              </div>
              <FaAward className="text-3xl text-purple-500" />
            </div>
          </div>
        </div>

        {/* L2 CTA */}
        <div className="mt-16 bg-[#c4ec0d] p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-black rounded-2xl">
              <FaMoneyBillWave className="text-[#c4ec0d] text-3xl" />
            </div>
            <div>
              <h4 className="text-black font-black text-2xl uppercase">
                KOD.Pro Journey
              </h4>
              <p className="text-black/70 font-medium">
                From Learner to Earner. Start your Pro Track Today.
              </p>
            </div>
          </div>
          <button className="bg-black text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3">
            Become a Pro <FaArrowRight />
          </button>
        </div>

        <div className="mt-10 py-4 text-center">
          <p className="text-white font-black tracking-widest text-xs italic">
            â­ LEVEL UP YOUR CAREER WITH{" "}
            <span className="text-[#c4ec0d]">KOD.Pro</span> — POWERED BY
            KOD.brand
          </p>
        </div>
      </section>
      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SECTION 5 — LEVEL 3 DETAILED
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-6 text-center md:text-left"
        >
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-[#c4ec0d]/20 text-[#c4ec0d] text-xs font-bold mb-4 uppercase border border-[#c4ec0d]/30">Phase 03</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">LEVEL 3 - <span className="text-purple-500">AGENCY MANAGEMENT</span></h2>
            <p className="text-xl text-gray-400 font-medium mt-4 max-w-3xl">Master the complete system to build, manage & scale your own agency with structure, automation & clarity.</p>
          </div>
          <div className="bg-[#c4ec0d] text-black px-8 py-4 rounded-2xl flex items-center justify-center gap-4 shadow-[0_0_20px_rgba(196,236,13,0.4)] w-full md:w-auto">
            <FaCalendarAlt className="text-2xl flex-shrink-0" />
            <div className="text-left">
              <p className="text-[10px] uppercase font-black leading-none">
                Duration
              </p>
              <p className="text-xl font-bold">45 Days</p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {/* Grid Column 1 (Focus Areas) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/10 lg:col-span-1 hover:border-[#c4ec0d]/30 transition-colors h-full">
            <h3 className="text-xl font-black text-purple-400 mb-6 uppercase tracking-wider">Focus Areas</h3>
            <ul className="space-y-6">
              {[
                { icon: <Layers className="text-[#c4ec0d]" />, title: "SOP & Documentation", desc: "Build structured processes & standard operating procedures." },
                { icon: <Monitor className="text-[#c4ec0d]" />, title: "System Implementation", desc: "Implement end-to-end agency management systems." },
                { icon: <Bot className="text-[#c4ec0d]" />, title: "Automation", desc: "Automate workflows, track performance & scale with efficiency." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 bg-white/5 p-3 rounded-xl border border-white/10">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Grid Column 2 (Outcome) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-purple-900/40 to-[#c4ec0d]/10 text-white p-8 rounded-3xl shadow-2xl lg:col-span-1 flex flex-col justify-center items-center text-center relative overflow-hidden border border-white/10 h-full">
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#c4ec0d]/20 blur-[50px] rounded-full" />
            <div className="w-24 h-24 bg-black/40 border border-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
              <Rocket className="w-12 h-12 text-[#c4ec0d]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#c4ec0d] mb-2">Outcome</h3>
            <h2 className="text-3xl font-black mb-4 leading-tight text-white">Run agency independently</h2>
            <div className="inline-block bg-[#c4ec0d] text-black px-6 py-2 rounded-full font-black uppercase tracking-wider mb-6">
              (30 Days)
            </div>
            <p className="text-white/80 font-medium">Build. Manage. Scale. Lead with Systems.</p>
          </motion.div>

          {/* Add-On Courses Section */}
          <div className="lg:col-span-1 h-full flex flex-col">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-purple-500/20 relative overflow-hidden group hover:border-purple-500/50 transition-colors flex-grow flex flex-col text-center md:text-left">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 group-hover:w-2 transition-all"></div>
              <div className="w-full">
                <span className="text-[10px] font-black bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-md uppercase mb-4 inline-block mx-auto md:mx-0">15 Days - Add-on Course</span>
              </div>
              <h4 className="font-bold text-lg text-white mb-5">System Management Implementation</h4>
              <div className="space-y-3 mt-auto">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">What You'll Learn:</p>
                <ul className="text-sm text-gray-300 space-y-3 flex flex-col items-center md:items-start">
                  <li className="flex items-center gap-3 text-left"><CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" /> Framework & Workflow</li>
                  <li className="flex items-center gap-3 text-left"><CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" /> Tools & Setup</li>
                  <li className="flex items-center gap-3 text-left"><CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" /> Team Management</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>



        {/* PART B: Master & Lead Dashboard */}
        <div className="mt-24 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              <span className="text-[#c4ec0d]">KOD.Pro</span> Agency Management System
            </h2>
            <p className="text-gray-500 font-medium tracking-widest uppercase text-sm">by KOD.brand</p>
          </div>

          <div className="bg-white/5 rounded-[40px] p-8 border border-white/10 shadow-inner backdrop-blur-sm">
            <div className="bg-gradient-to-r from-purple-900 to-black border border-purple-500/30 text-white text-center py-4 rounded-2xl mb-8 shadow-lg">
              <h3 className="text-xl font-black tracking-widest flex items-center justify-center gap-3">
                <Star className="text-[#c4ec0d] w-5 h-5" fill="currentColor" />
                LEVEL 3 (MASTER & LEAD)
                <Star className="text-[#c4ec0d] w-5 h-5" fill="currentColor" />
              </h3>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-5 gap-4"
            >
              {[
                {
                  title: "Full Stack System Architect",
                  icon: <Code className="w-8 h-8" />,
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                  border: "border-blue-500/20",
                  items: ["Website development", "API & Backend", "No-code / Low-code", "Hosting & CI/CD"],
                  outcome: "Tech Architect"
                },
                {
                  title: "Advanced AI & Automation",
                  icon: <Bot className="w-8 h-8" />,
                  color: "text-[#c4ec0d]",
                  bg: "bg-[#c4ec0d]/10",
                  border: "border-[#c4ec0d]/20",
                  items: ["LLMs & Chatbots", "Workflow Automation", "Data Processing", "AI Tools Development"],
                  outcome: "AI Automation Expert"
                },
                {
                  title: "Digital Growth Strategist",
                  icon: <TrendingUp className="w-8 h-8" />,
                  color: "text-purple-400",
                  bg: "bg-purple-500/10",
                  border: "border-purple-500/20",
                  items: ["Advanced SEO", "Meta/Google Ads", "Marketing Automation (CRM)", "Scaling ROAS"],
                  outcome: "Growth Strategist"
                },
                {
                  title: "Brand & Creative Mastery",
                  icon: <PenTool className="w-8 h-8" />,
                  color: "text-pink-400",
                  bg: "bg-pink-500/10",
                  border: "border-pink-500/20",
                  items: ["UI/UX Design Systems", "Motion Graphics", "Video Production", "Brand Strategy"],
                  outcome: "Creative Director"
                },
                {
                  title: "Business & Leadership",
                  icon: <Briefcase className="w-8 h-8" />,
                  color: "text-orange-400",
                  bg: "bg-orange-500/10",
                  border: "border-orange-500/20",
                  items: ["Business Model", "Team Building", "Sales Closing", "Revenue & Profit Mgmt"],
                  outcome: "Agency Owner"
                }
              ].map((pillar, i) => (
                <motion.div 
                  variants={itemVariants}
                  key={i}
                  whileHover={{ y: -10 }}
                  className={`bg-black/50 rounded-3xl p-6 shadow-md border ${pillar.border} flex flex-col h-full hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${pillar.bg} ${pillar.color} border ${pillar.border} flex items-center justify-center mb-6 mx-auto`}>
                    {pillar.icon}
                  </div>
                  <h4 className={`text-center font-bold text-sm h-10 mb-4 ${pillar.color}`}>
                    {pillar.title}
                  </h4>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pillar.items.map((item, j) => (
                      <li key={j} className="text-xs text-gray-400 flex items-start gap-2 text-center justify-center">
                        <span className="opacity-70">•</span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-auto pt-4 border-t border-white/10 text-center font-bold text-xs ${pillar.color} flex flex-col items-center gap-2`}>
                    <Award className="w-5 h-5 opacity-50" />
                    {pillar.outcome}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* PART C: AMS 10 Pillars & Flow */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* 10 Pillars */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 p-8 rounded-3xl shadow-xl border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <Settings className="text-[#c4ec0d]" /> Agency Management System
            </h3>
            <div className="space-y-4">
              {[
                "Niche & Branding",
                "Offer Creation & Pricing",
                "Standard Operating Procedures (SOPs)",
                "Lead Generation System",
                "Sales & Closing Mastery",
                "Client Onboarding Workflow",
                "Service Delivery & Project Mgmt",
                "Team Building & Delegation",
                "Financial & Cashflow Mgmt",
                "Automate & Scale"
              ].map((pillar, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-white font-black flex items-center justify-center text-sm border border-white/10 group-hover:bg-[#c4ec0d] group-hover:text-black group-hover:border-[#c4ec0d] transition-colors">
                    {i + 1}
                  </div>
                  <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">{pillar}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* The Flow */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-black/60 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col border border-[#c4ec0d]/20 backdrop-blur-xl">
            <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-purple-900/30 blur-[80px] rounded-full pointer-events-none" />
            <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-3 relative z-10">
              <RefreshCw className="text-[#c4ec0d]" /> The Implementation Flow
            </h3>

            <div className="flex-grow flex flex-col justify-center relative z-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-4">
                {[
                  { icon: <Target />, label: "Acquisition" },
                  { icon: <UserPlus />, label: "New Lead" },
                  { icon: <PhoneCall />, label: "Call/Meeting" },
                  { icon: <Handshake />, label: "Onboarding" },
                  { icon: <Code />, label: "Delivery" },
                  { icon: <CheckSquare />, label: "Review" },
                  { icon: <BarChart />, label: "Reporting" },
                  { icon: <CreditCard />, label: "Payment" },
                  { icon: <Users />, label: "Referral" },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center relative">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-3 text-[#c4ec0d] border border-white/10 backdrop-blur-sm group hover:bg-[#c4ec0d]/10 transition-colors">
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">{step.label}</span>
                    {i % 3 !== 2 && i !== 8 && (
                      <ChevronRight className="absolute top-4 -right-4 w-6 h-6 text-white/20 hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* PART D: Your L3 Journey & Gains */}
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-6 md:p-12 backdrop-blur-md overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

            {/* â”€â”€ LEFT: Journey â”€â”€ */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl md:text-2xl font-black text-white mb-6 flex items-center gap-2">
                <Rocket className="text-[#c4ec0d] w-5 h-5" /> Your L3 Journey
              </h3>

              {/* Number badges */}
              <div className="flex items-center justify-between mb-4 gap-1">
                {[1,2,3,4,5,6].map((num, i) => (
                  <div key={i} className="flex-1 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.25, 1], opacity: [0.35, 1, 0.35] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 1.3, repeatDelay: 5 * 1.3, ease: "easeInOut" }}
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-black text-xs md:text-sm ${
                        i === 5
                          ? "bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                          : "bg-[#c4ec0d] text-black shadow-[0_0_10px_rgba(196,236,13,0.5)]"
                      }`}
                    >{num}</motion.div>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="relative h-1 mb-3 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#c4ec0d] to-purple-500"
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 7.8, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Label strip */}
              <div className="flex justify-between mb-5">
                {["Choose Vision","Build System","Implement","Find Clients","Scale","Lead"].map((lbl, i) => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0.25, 1, 0.25] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 1.3, repeatDelay: 5 * 1.3 }}
                    className={`text-[7px] md:text-[9px] font-bold uppercase tracking-wide text-center flex-1 leading-tight px-0.5 ${
                      i === 5 ? "text-purple-400" : "text-gray-500"
                    }`}
                  >{lbl}</motion.span>
                ))}
              </div>

              {/* Active step spotlight */}
              <div className="relative h-[120px] overflow-hidden rounded-2xl">
                {[
                  { num:1, label:"Choose Vision",  isLast:false },
                  { num:2, label:"Build System",   isLast:false },
                  { num:3, label:"Implement",      isLast:false },
                  { num:4, label:"Find Clients",   isLast:false },
                  { num:5, label:"Scale",          isLast:false },
                  { num:6, label:"Lead",           isLast:true  },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl border px-4 text-center ${
                      s.isLast
                        ? "bg-gradient-to-br from-purple-900/80 to-black border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                        : "bg-black/60 border-white/10"
                    }`}
                    animate={{ opacity: [0, 1, 1, 0], y: [16, 0, 0, -16] }}
                    transition={{ duration: 1.3, times: [0, 0.15, 0.85, 1], repeat: Infinity, delay: i * 1.3, repeatDelay: 5 * 1.3, ease: "easeInOut" }}
                  >
                    <div className={`w-9 h-9 rounded-full font-black flex items-center justify-center mb-2 text-sm ${
                      s.isLast
                        ? "bg-purple-500 text-white shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                        : "bg-[#c4ec0d] text-black shadow-[0_0_12px_rgba(196,236,13,0.5)]"
                    }`}>{s.num}</div>
                    <p className={`font-black text-base md:text-lg tracking-wide uppercase ${s.isLast ? "text-white" : "text-gray-200"}`}>{s.label}</p>
                    {s.isLast && <span className="mt-1 text-purple-300 text-[10px] font-bold uppercase tracking-widest">âœ¦ Final Destination</span>}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* â”€â”€ RIGHT: L3 Gains â”€â”€ */}
            <div className="lg:w-[300px] bg-black/50 rounded-3xl p-6 md:p-8 shadow-xl border border-[#c4ec0d]/20 backdrop-blur-sm flex flex-col justify-center">
              <h3 className="text-lg md:text-xl font-black text-white mb-6 flex items-center gap-2">
                <Trophy className="text-[#c4ec0d] w-5 h-5 flex-shrink-0" /> L3 Gains
              </h3>
              <motion.ul variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
                {[
                  { icon: <DollarSign className="w-5 h-5" />, text: "High Income Potential" },
                  { icon: <Briefcase className="w-5 h-5" />, text: "Brand Ownership" },
                  { icon: <Clock className="w-5 h-5" />, text: "Time & Location Freedom" },
                  { icon: <Award className="w-5 h-5" />, text: "Build a Legacy" },
                ].map((gain, i) => (
                  <motion.li variants={itemVariants} key={i} className="flex items-center gap-4">
                    <div className="text-[#c4ec0d] bg-[#c4ec0d]/10 p-2.5 rounded-xl border border-[#c4ec0d]/20 flex-shrink-0">{gain.icon}</div>
                    <span className="font-semibold text-gray-200 leading-tight text-sm md:text-base">{gain.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

          </div>
        </div>

        {/* PROMOTIONAL BANNER: Stock Market Add-On Program */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mt-24 mb-10 w-full bg-black/40 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.15)] relative flex flex-col md:flex-row border border-white/10">
          {/* Left Content */}
          <div className="p-10 md:p-14 lg:w-[60%] relative z-10 flex flex-col justify-between pb-28 md:pb-14 items-center text-center md:items-start md:text-left">
            <div>
              <div className="text-white font-black text-xl tracking-tighter mb-8">
                KOD<span className="text-[#c4ec0d]">.</span>brand
              </div>

              <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase leading-none tracking-tight">
                <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Add-On</span> <span className="text-[#c4ec0d] drop-shadow-[0_0_15px_rgba(196,236,13,0.4)]">Program</span>
              </h2>
              <p className="text-gray-400 font-medium text-lg md:text-xl max-w-lg mb-10 mx-auto md:mx-0">
                Master the art of trading with strategy, tools & discipline.
              </p>

              {/* Feature List */}
              <div className="space-y-5 mb-10 w-full">
                {[
                  { icon: <CandlestickChart className="w-5 h-5 text-purple-400" />, text: "Swing Trading (NSE / BSE)" },
                  { icon: <Briefcase className="w-5 h-5 text-purple-400" />, text: "Zerodha Setup" },
                  { icon: <TrendingUp className="w-5 h-5 text-purple-400" />, text: "VCP Strategy" },
                  { icon: <ShieldCheck className="w-5 h-5 text-purple-400" />, text: "Risk Awareness" },
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-4 justify-center md:justify-start w-full">
                    <div className="w-10 h-10 rounded-xl bg-purple-900/30 border border-purple-500/20 flex items-center justify-center shadow-md flex-shrink-0">
                      {feat.icon}
                    </div>
                    <span className="text-white font-bold text-lg text-left">{feat.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex justify-center md:justify-start w-full">
              <div className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#c4ec0d] to-[#c4ec0d] text-black px-8 py-4 rounded-full font-black text-xl shadow-[0_10px_30px_rgba(196,236,13,0.2)] hover:scale-105 transition-transform cursor-pointer border border-[#c4ec0d]/50 text-center flex-col sm:flex-row w-full sm:w-auto">
                <Gift className="w-6 h-6 text-black sm:w-8 sm:h-8" />
                <span>FREE for <span className="text-black underline decoration-4 underline-offset-4">Level 3</span></span>
              </div>
            </div>
          </div>

          {/* Right Visual Elements */}
          <div className="lg:w-[40%] bg-gradient-to-br from-black to-purple-950/40 relative overflow-hidden hidden md:flex flex-col items-center justify-center min-h-[400px] border-l border-white/5">
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#c4ec0d 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none"></div>

            {/* High-tech Monitor */}
            <div className="relative z-10 w-[80%] h-[60%] bg-black/80 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden mb-12">
              {/* Monitor Header */}
              <div className="h-6 bg-white/5 border-b border-white/10 flex items-center px-3 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
              </div>
              {/* Monitor Screen / Chart */}
              <div className="flex-1 p-4 relative flex items-end justify-between gap-3">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                {[40, 70, 30, 90, 60, 100].map((h, i) => (
                  <div key={i} className="w-1/6 bg-[#c4ec0d]/80 rounded-t-sm relative flex justify-center z-10" style={{ height: `${h}%` }}>
                    <div className="absolute top-[-20px] w-[2px] h-[calc(100%+40px)] bg-[#c4ec0d]/50"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Abstract Golden Bull */}
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-yellow-400 via-yellow-600 to-yellow-800 rounded-full shadow-[0_0_50px_rgba(234,179,8,0.2)] flex items-center justify-center border border-yellow-500/50 z-20 hover:scale-110 transition-transform">
              <TrendingUp className="w-16 h-16 text-black drop-shadow-md" />
            </div>
          </div>

          {/* Bottom Footer bar */}
          <div className="absolute bottom-0 left-0 w-full bg-purple-900/40 backdrop-blur-md text-white flex flex-wrap justify-between items-center py-4 px-6 md:px-14 border-t border-purple-500/30 z-30">
            {[
              { icon: <Target className="w-4 h-4 text-[#c4ec0d]" />, label: "Real Market Knowledge" },
              { icon: <LineChart className="w-4 h-4 text-[#c4ec0d]" />, label: "Practical Strategies" },
              { icon: <ShieldCheck className="w-4 h-4 text-[#c4ec0d]" />, label: "Risk Managed Approach" },
              { icon: <Users className="w-4 h-4 text-[#c4ec0d]" />, label: "Mentorship Support" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider mb-2 md:mb-0 text-gray-300">
                {item.icon} {item.label}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          SECTION 6 — FINAL OUTCOME
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="relative z-10 py-28 px-6 max-w-7xl mx-auto border-t border-white/10 overflow-hidden">
        {/* Background Ambient Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c4ec0d]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c4ec0d] text-xs font-black uppercase tracking-[0.2em] mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" /> Final Outcome
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
              From Learning to <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">Leading</span>
            </h2>

            <p className="text-2xl md:text-3xl font-bold text-[#c4ec0d] mb-8 tracking-wide">
              Create. Systemize. Earn. Grow.
            </p>

            <div className="text-gray-400 text-lg md:text-xl leading-relaxed space-y-4 font-medium max-w-xl">
              <p>
                The ultimate transformation. Build and manage your own <strong className="text-white">agency</strong>, create scalable <strong className="text-white">SOP systems</strong>, and work on real client projects.
              </p>
              <p>
                Develop deep <strong className="text-white">financial awareness</strong> and scale your long-term success into an independent, profitable enterprise.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE: 3D Staircase Visualization */}
          <div className="relative h-[550px] w-full flex items-center justify-center perspective-[1000px] mt-10 lg:mt-0">
            {/* Connecting Glowing Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '85%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute bottom-10 left-[20%] md:left-[30%] w-1 bg-gradient-to-t from-purple-600 via-purple-400 to-[#c4ec0d] rounded-full blur-[3px]"
            />
            <div className="absolute bottom-10 left-[20%] md:left-[30%] w-[2px] h-[85%] bg-gradient-to-t from-purple-600 via-purple-400 to-[#c4ec0d] rounded-full opacity-50" />

            {[
              { level: 1, title: "Financial Awareness", color: "from-purple-900/95 to-black", border: "border-purple-500/30", icon: <DollarSign className="text-purple-400" /> },
              { level: 2, title: "Earn Through Projects", color: "from-purple-800/95 to-purple-950/95", border: "border-purple-400/40", icon: <Briefcase className="text-purple-300" /> },
              { level: 3, title: "Implement SOP Systems", color: "from-purple-600/95 to-purple-800/95", border: "border-purple-300/50", icon: <Layers className="text-purple-200" /> },
              { level: 4, title: "Build & Manage Agency", color: "from-[#c4ec0d]/95 to-[#c4ec0d]/95", border: "border-[#c4ec0d]", icon: <Settings className="text-black" />, textClass: "text-black" }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.18 }}
                className={`absolute w-[80%] md:w-[70%] p-5 md:p-6 rounded-2xl border ${step.border} bg-gradient-to-r ${step.color} shadow-[0_15px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl group hover:-translate-y-3 transition-all duration-300`}
                style={{ bottom: `${idx * 18 + 5}%`, left: `${idx * 10}%`, zIndex: 10 + idx }}
              >
                <div className="flex items-center gap-4 md:gap-5">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 shadow-inner group-hover:scale-110 transition-transform ${step.textClass ? 'bg-black/10 border-black/20' : ''}`}>
                    {step.icon}
                  </div>
                  <div>
                    <div className={`text-[10px] md:text-xs font-black uppercase tracking-widest opacity-70 mb-1 ${step.textClass || 'text-white'}`}>Step 0{step.level}</div>
                    <div className={`font-bold text-lg md:text-xl leading-tight ${step.textClass || 'text-white'}`}>{step.title}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              </motion.div>
            ))}

            {/* Trophy at Top */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, type: "spring" }}
              className="absolute top-[0%] left-[60%] md:left-[70%] z-50 flex flex-col items-center"
            >
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-[#c4ec0d] blur-2xl opacity-40 group-hover:opacity-70 group-hover:blur-3xl transition-all duration-500 animate-pulse" />
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-b from-black to-purple-950 rounded-full border-2 border-[#c4ec0d] flex items-center justify-center shadow-[0_0_40px_rgba(196,236,13,0.5)] relative z-10 group-hover:scale-110 transition-transform duration-500">
                  <Trophy className="text-[#c4ec0d] w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_0_10px_rgba(196,236,13,0.8)]" />
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ArrowUp className="text-[#c4ec0d] w-8 h-8 mt-4 drop-shadow-[0_0_10px_rgba(196,236,13,0.5)]" />
              </motion.div>
            </motion.div>

            {/* Floating Particles */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -30, 0], opacity: [0, 0.8, 0], scale: [0.5, 1.5, 0.5] }}
                transition={{ repeat: Infinity, duration: 3 + ((i * 1.5) % 2), delay: i * 0.4 }}
                className="absolute w-2 h-2 rounded-full bg-[#c4ec0d] blur-[1px] z-50 pointer-events-none"
                style={{
                  bottom: `${((i * 13) % 80) + 20}%`,
                  left: `${((i * 27) % 80) + 10}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM FEATURE CARDS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-32 relative z-10"
        >
          {[
            { title: "Real-World Skills", desc: "Learn what truly matters in business.", icon: <Star className="text-purple-400" /> },
            { title: "Practical Experience", desc: "Work on live projects and real workflows.", icon: <Briefcase className="text-[#c4ec0d]" /> },
            { title: "Financial Growth", desc: "Earn, invest, and scale sustainably.", icon: <LineChart className="text-purple-400" /> },
            { title: "Long-Term Success", desc: "Build systems that continue growing.", icon: <ShieldCheck className="text-[#c4ec0d]" /> },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }} 
              transition={{ type: "spring", stiffness: 300 }}
              className="group bg-white/5 border border-white/10 p-8 rounded-[30px] backdrop-blur-md hover:bg-white/10 hover:border-[#c4ec0d]/40 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(196,236,13,0.15)] transition-all duration-300 group-hover:border-[#c4ec0d]/30">
                {card.icon}
              </div>
              <h4 className="text-white font-bold text-xl mb-3 group-hover:text-[#c4ec0d] transition-colors">{card.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PART E: Footer CTA */}
      <footer className="bg-black/40 backdrop-blur-md text-white py-16 px-6 relative overflow-hidden border-t border-white/10">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-[#c4ec0d]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[100%] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-white/5 text-[#c4ec0d] text-xs font-black mb-6 uppercase tracking-[0.3em] backdrop-blur-sm border border-white/10">
              Not for you, learn for your future!
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-white">
              Become a leader. Create the future. <br />
              <span className="text-[#c4ec0d] italic">KOD.Pro AMS.</span>
            </h2>
            <div className="inline-block bg-[#c4ec0d] text-black font-black px-10 py-4 rounded-full text-lg shadow-[0_0_30px_rgba(196,236,13,0.3)] hover:scale-105 transition-transform cursor-pointer mt-4 uppercase tracking-widest">
              Move forward with us! <ArrowRight className="inline ml-2 mb-1" />
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16 relative z-10"
          >
            {[
              { icon: <Users />, label: "1-to-1 Mentorship" },
              { icon: <Code />, label: "Real Projects" },
              { icon: <FileText />, label: "Tools & Templates" },
              { icon: <Briefcase />, label: "Internship" },
              { icon: <Award />, label: "Placement Support" }
            ].map((benefit, i) => (
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }} 
                transition={{ type: "spring", stiffness: 300 }}
                key={i} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mx-auto mb-4 text-[#c4ec0d] border border-white/10 group-hover:border-[#c4ec0d]/50 transition-colors">
                  {benefit.icon}
                </div>
                <p className="font-bold text-xs tracking-widest uppercase text-gray-400 group-hover:text-white transition-colors">{benefit.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <div className="text-2xl font-black tracking-tighter">
              <span className="text-white">KOD</span>
              <span className="text-[#c4ec0d]">.</span>
              <span className="text-white">brand</span>
            </div>
            <p className="text-gray-600 text-xs font-bold tracking-widest uppercase">Â© 2024 KOD.brand Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VisionPage;

