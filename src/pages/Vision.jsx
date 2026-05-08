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

const VisionPage = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const step1Opacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);
  const step2Opacity = useTransform(scrollYProgress, [0.15, 0.2], [0, 1]);
  const step3Opacity = useTransform(scrollYProgress, [0.2, 0.25], [0, 1]);

  const step1Y = useTransform(scrollYProgress, [0.1, 0.15], [40, 0]);
  const step2Y = useTransform(scrollYProgress, [0.15, 0.2], [40, 0]);
  const step3Y = useTransform(scrollYProgress, [0.2, 0.25], [40, 0]);

  const ObjectiveItem = ({ Icon, text, keyPoints }) => (
    <div className="flex items-center gap-4 py-3 px-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all">
      <div className="p-2 bg-purple-600/20 rounded-full">
        <Icon className="text-xl text-[#c4ec0d]" />
      </div>
      <p className="text-sm md:text-base text-white/90">
        {text} <strong className="text-[#c4ec0d]">{keyPoints}</strong>
      </p>
    </div>
  );

  const PillarItem = ({ Icon, text }) => (
    <div className="flex flex-col items-center gap-2 p-4 min-w-[120px]">
      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 hover:border-[#c4ec0d] transition-colors">
        <Icon className="text-xl text-[#c4ec0d]" />
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-white/70 text-center">
        {text}
      </span>
    </div>
  );

  const TrackCard = ({
    title,
    icon: Icon,
    items,
    outcomes,
    color = "border-white/10",
  }) => (
    <div
      className={`bg-white/5 border ${color} rounded-3xl p-6 flex flex-col h-full hover:border-[#c4ec0d]/50 transition-colors`}
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
    </div>
  );

  return (
    <div
      ref={targetRef}
      className="relative bg-black overflow-x-hidden font-sans"
    >
      {/* BACKGROUND VIDEO */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/bgv.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* ═══════════════════════════════════════
          SECTION 1 — VISION & OBJECTIVES
      ═══════════════════════════════════════ */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-10"
            >
              {/* <h2 className="text-[#c4ec0d] font-black uppercase tracking-widest text-sm mb-2">
                Target Goals
              </h2> */}
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight pt-2">
                OUR{" "}
                <span className="text-purple-500 underline decoration-[#c4ec0d]">
                  OBJECTIVES
                </span>
              </h1>
            </motion.div>
            <div className="flex flex-col gap-4">
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
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute w-80 h-80 bg-purple-600/20 rounded-full blur-[120px]" />
            <img
              src="/logo2.png"
              alt="Vision"
              className="relative z-10 w-full max-w-sm drop-shadow-[0_0_30px_rgba(196,236,13,0.2)]"
            />
          </div>
        </div>

        {/* Pillars Bar */}
        <div className="mt-20 w-full max-w-4xl bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-2 overflow-x-auto">
          <div className="flex justify-around items-center min-w-[600px]">
            <PillarItem Icon={FaLightbulb} text="System Driven" />
            <div className="h-10 w-px bg-white/10" />
            <PillarItem Icon={FaRocket} text="Future Focused" />
            <div className="h-10 w-px bg-white/10" />
            <PillarItem Icon={FaChartLine} text="Growth Oriented" />
            <div className="h-10 w-px bg-white/10" />
            <PillarItem Icon={FaCheckCircle} text="Result Based" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — PROGRAM STRUCTURE (STAIRCASE)
      ═══════════════════════════════════════ */}
{/* ═══════════════════════════════════════
    SECTION 2 — PROGRAM STRUCTURE (REAL 3D STAIRCASE)
═══════════════════════════════════════ */}
<section className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center py-28 px-6">

  {/* HEADER */}
  <div className="text-center mb-24">
    <h2 className="text-5xl md:text-7xl font-black text-white">
      PROGRAM <span className="text-[#c4ec0d]">STRUCTURE</span>
    </h2>
    <p className="text-gray-500 text-xs tracking-[0.4em] uppercase mt-4">
      Step-by-step transformation
    </p>
  </div>

  {/* STAIRCASE */}
  <div className="relative w-full max-w-5xl h-[520px] perspective-[1200px]">

    {/* CONNECTING LINE */}
    <motion.div
      style={{ scaleY: scrollYProgress }}
      className="absolute left-[18%] top-10 w-[3px] h-[80%] origin-top 
      bg-gradient-to-b from-[#c4ec0d] via-[#c4ec0d]/40 to-transparent"
    />

    {/* ========== LEVEL 1 (BOTTOM) ========== */}
    <motion.div
      style={{ opacity: step1Opacity, y: step1Y }}
      className="absolute bottom-0 left-0 w-[80%]"
    >
      <div className="relative group transform-gpu">

        {/* 3D SIDE */}
        <div className="absolute left-0 top-0 w-6 h-full bg-purple-900 skew-y-6 origin-left" />

        {/* 3D TOP */}
        <div className="absolute top-0 left-0 w-full h-6 bg-purple-500/70 -translate-y-6 skew-x-6 origin-top" />

        {/* MAIN FACE */}
        <div className="relative bg-gradient-to-r from-purple-700 to-purple-500 
        p-8 rounded-lg shadow-2xl border border-white/10
        group-hover:scale-[1.02] transition-all duration-300">

          <motion.div
            style={{ opacity: step1Opacity }}
            className="absolute inset-0 bg-[#c4ec0d]/10 blur-2xl"
          />

          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white font-black text-lg">01</span>
            </div>
            <div>
              <p className="text-white/60 text-xs uppercase">Level 1</p>
              <h3 className="text-white font-black text-xl">
                Basics & Foundation
              </h3>
            </div>
          </div>

        </div>
      </div>
    </motion.div>

    {/* ========== LEVEL 2 (MIDDLE) ========== */}
    <motion.div
      style={{ opacity: step2Opacity, y: step2Y }}
      className="absolute bottom-[170px] left-[10%] w-[70%]"
    >
      <div className="relative group transform-gpu">

        {/* SIDE */}
        <div className="absolute left-0 top-0 w-6 h-full bg-teal-900 skew-y-6 origin-left" />

        {/* TOP */}
        <div className="absolute top-0 left-0 w-full h-6 bg-cyan-400/70 -translate-y-6 skew-x-6 origin-top" />

        {/* FACE */}
        <div className="relative bg-gradient-to-r from-cyan-400 to-teal-500 
        p-8 rounded-lg shadow-2xl border border-white/10
        group-hover:scale-[1.02] transition-all duration-300">

          <motion.div
            style={{ opacity: step2Opacity }}
            className="absolute inset-0 bg-[#c4ec0d]/10 blur-2xl"
          />

          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-black/20 rounded-full flex items-center justify-center">
              <span className="text-black font-black text-lg">02</span>
            </div>
            <div>
              <p className="text-black/60 text-xs uppercase">Level 2</p>
              <h3 className="text-black font-black text-xl">
                Kod.Pro Skills
              </h3>
            </div>
          </div>

        </div>
      </div>
    </motion.div>

    {/* ========== LEVEL 3 (TOP — FIXED VISIBILITY) ========== */}
    <motion.div
      style={{ opacity: step3Opacity, y: step3Y }}
      className="absolute bottom-[340px] left-[25%] w-[55%]"
    >
      <div className="relative group transform-gpu">

        {/* SIDE */}
        <div className="absolute left-0 top-0 w-6 h-full bg-lime-700 skew-y-6 origin-left" />

        {/* TOP */}
        <div className="absolute top-0 left-0 w-full h-6 bg-[#c4ec0d]/80 -translate-y-6 skew-x-6 origin-top" />

        {/* FACE */}
        <div className="relative bg-gradient-to-r from-[#c4ec0d] to-[#a3c40b] 
        p-8 rounded-lg shadow-2xl border border-black/10
        group-hover:scale-[1.02] transition-all duration-300">

          <motion.div
            style={{ opacity: step3Opacity }}
            className="absolute inset-0 bg-white/20 blur-2xl"
          />

          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-black/20 rounded-full flex items-center justify-center">
              <span className="text-black font-black text-lg">03</span>
            </div>
            <div>
              <p className="text-black/60 text-xs uppercase">Level 3</p>
              <h3 className="text-black font-black text-xl">
                Agency Management System
              </h3>
            </div>
          </div>

        </div>
      </div>
    </motion.div>

  </div>

  {/* BOTTOM BADGES */}
  <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl w-full">

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
      {/* ═══════════════════════════════════════
          SECTION 3 — LEVEL 1 DETAILED (FULL)
      ═══════════════════════════════════════ */}
      <section className="relative z-10 min-h-screen py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[#c4ec0d] font-black text-5xl md:text-7xl mb-2">
              Level 1 —
            </h2>
            <h3 className="text-white text-3xl md:text-5xl font-light">
              Basics & Foundation
            </h3>
          </div>
          <div className="bg-[#c4ec0d] text-black px-8 py-4 rounded-2xl flex items-center gap-4 shadow-[0_0_20px_rgba(196,236,13,0.4)]">
            <FaCalendarAlt className="text-2xl" />
            <div>
              <p className="text-[10px] uppercase font-black leading-none">
                Duration
              </p>
              <p className="text-xl font-bold">30 Days</p>
            </div>
          </div>
        </div>

        {/* Focus / Ring / Outcome */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h4 className="text-purple-500 font-black uppercase text-center mb-6">
              Focus
            </h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center gap-3">
                <FaLaptopCode className="text-[#c4ec0d]" /> Digital Basics
              </li>
              <li className="flex items-center gap-3">
                <FaComments className="text-[#c4ec0d]" /> Communication
              </li>
              <li className="flex items-center gap-3">
                <FaCogs className="text-[#c4ec0d]" /> Agency Workflow
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="w-40 h-40 rounded-full border-4 border-dashed border-[#c4ec0d] flex flex-col items-center justify-center bg-purple-900/20 backdrop-blur-xl">
              <span className="text-5xl font-black text-white">01</span>
              <span className="text-xs font-bold text-[#c4ec0d] uppercase">
                Level
              </span>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
            <h4 className="text-[#c4ec0d] font-black uppercase mb-6">
              Outcome
            </h4>
            <div className="flex flex-col items-center gap-2">
              <FaMountain className="text-4xl text-white/50 mb-2" />
              <p className="text-xl font-bold text-white leading-tight">
                Strong foundation & clarity
              </p>
            </div>
          </div>
        </div>

        {/* Track Cards — Level 1 FULL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
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
                    <FaFacebook />
                    <FaInstagram />
                  </div>
                ),
                label: "Social Media Growth",
                desc: "Engagement & Content.",
              },
              {
                icon: <FaEdit className="text-green-400" />,
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
        </div>

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

        <div className="mt-10 bg-gradient-to-r from-purple-900 to-black border-y border-[#c4ec0d]/30 py-4 text-center">
          <p className="text-white font-black tracking-widest text-xs italic">
            ⭐ START SMALL. LEARN SMART. GROW BIG. —{" "}
            <span className="text-[#c4ec0d]">KOD.brand</span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4 — LEVEL 2 DETAILED (FULL)
      ═══════════════════════════════════════ */}
      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[#c4ec0d] font-black text-5xl md:text-7xl mb-2 uppercase italic">
              Level 2 —
            </h2>
            <h3 className="text-white text-3xl md:text-5xl font-light">
              Kod.Pro Skills
            </h3>
          </div>
          <div className="bg-[#c4ec0d] text-black px-8 py-4 rounded-2xl flex items-center gap-4 shadow-[0_0_20px_rgba(196,236,13,0.4)]">
            <FaCalendarAlt className="text-2xl" />
            <div>
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
              <li className="flex items-center gap-4 text-white/90 font-medium bg-white/5 p-3 rounded-xl border border-white/5">
                <FaGraduationCap className="text-[#c4ec0d] text-2xl" /> Advanced
                Skills
              </li>
              <li className="flex items-center gap-4 text-white/90 font-medium bg-white/5 p-3 rounded-xl border border-white/5">
                <FaUserTie className="text-[#c4ec0d] text-2xl" /> Client
                Handling
              </li>
              <li className="flex items-center gap-4 text-white/90 font-medium bg-white/5 p-3 rounded-xl border border-white/5">
                <FaBriefcase className="text-[#c4ec0d] text-2xl" /> Real
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
            <h2 className="text-4xl font-black text-white">KOD.Pro</h2>
            <p className="text-[#c4ec0d] font-bold">by KOD.brand</p>
          </div>
          <div className="text-center space-y-4">
            <div className="inline-block bg-[#c4ec0d] text-black font-black px-6 py-1 rounded-full text-sm uppercase">
              ★ Level 2 (PRO) ★
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
            <h4 className="text-white font-bold text-xs uppercase mb-4 flex items-center gap-2">
              <FaStar className="text-[#c4ec0d]" /> L2 Benefits
            </h4>
            <ul className="text-[11px] text-gray-300 space-y-2">
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
                icon: <FaDatabase className="text-green-400" />,
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
                icon: <FaNodeJs className="text-green-500" />,
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
                icon: <SiMongodb className="text-green-400" />,
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
                icon: <FaDatabase className="text-green-400" />,
                label: "Data Handling",
                desc: "Complex data structures.",
              },
            ]}
            outcomes={["AI / Data Specialist"]}
          />
        </div>

        {/* Marketing & Design L2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gradient-to-br from-green-900/20 to-black p-8 rounded-[2rem] border border-green-500/20">
            <h4 className="text-green-400 font-bold mb-6 flex items-center gap-2 text-xl">
              <FaBullhorn /> Digital Marketing — L2
            </h4>
            <div className="grid grid-cols-2 gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <FaSearch className="text-green-500" /> SEO Mastery
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
                <p className="text-[10px] text-green-400 font-bold uppercase">
                  L2 Outcome
                </p>
                <p className="text-white font-bold">
                  Marketing Expert / Freelancer
                </p>
              </div>
              <FaAward className="text-3xl text-green-500" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-black p-8 rounded-[2rem] border border-purple-500/20">
            <h4 className="text-purple-400 font-bold mb-6 flex items-center gap-2 text-xl">
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
            ⭐ LEVEL UP YOUR CAREER WITH{" "}
            <span className="text-[#c4ec0d]">KOD.Pro</span> — POWERED BY
            KOD.brand
          </p>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;
