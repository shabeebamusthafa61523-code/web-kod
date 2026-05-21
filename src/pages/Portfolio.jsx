import React from "react";
import { motion } from "framer-motion";
// import Navbart from "../components/Navbart";

// ── Tokens ─────────────────────────────────────────────────────────────────
const C = {
  acid: "#c4ec0d",
  blue: "#2b51b6",
  black: "transparent",
  white: "#f5f5f0",
  dim: "rgba(245,245,240,0.38)",
};

// ── Reusable reveal ──────────────────────────────────────────────────────────
const Reveal = ({ children, delay = 0, y = 48, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

// ── Ticker ───────────────────────────────────────────────────────────────────
const Ticker = ({ items }) => (
  <div className="overflow-hidden whitespace-nowrap border-y py-3 select-none" style={{ borderColor: "rgba(43,81,182,0.35)", background: "transparent" }}>
    <motion.div
      className="inline-flex gap-16"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
    >
      {[...items, ...items].map((item, i) => (
        <span key={i} className="text-xs tracking-[0.22em] uppercase font-medium" style={{ color: C.dim }}>
          {item}
          <span className="mx-8" style={{ color: i % 2 === 0 ? C.acid : C.blue }}>✦</span>
        </span>
      ))}
    </motion.div>
  </div>
);

// ── Data ─────────────────────────────────────────────────────────────────────
const services = [
  { title: "Designing", desc: "Detailed objects, characters, and environments tailored to specific client needs — ideal for games, products, and immersive visualizations." },
  { title: "Branding", desc: "Photorealistic renders with custom lighting, textures, and materials that bring concepts to life and communicate quality at a glance." },
  { title: "Marketing", desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences." },
  { title: "Development", desc: "Cohesive visual identities — from logos to full brand systems — that communicate a clear, memorable, and lasting presence." },
];


const logos = ["/razain.png", "/redpex.png", "/horizone.png","/inkspire.png", "/paris cafe.png",  "/ipas-logo.png", "/brownie-bakes.png","LOGO 1.png","LOGO 4.png","LOGO 5.png","LOGO 2.png"];

const tickerItems = ["Brand Strategy", "Visual Identity", "Motion Design", "Web Development", "3D Modeling", "Campaign Direction"];

const devCards = [
  { img: "new.png", label: "Brand Portals" },
  { img: "bgb.png", label: "Campaign Sites" },
  { img: "logo3.jpeg", label: "E-Commerce" },
];

const caseStudies = [
  {
    logo: "/paris cafe.png",
    name: "Paris Cafe",
    sector: "Food & Beverage",
    desc: "Paris Cafe is a cozy coffee shop in Malappuram serving delicious coffee, snacks, and refreshing beverages in a warm and relaxing atmosphere.",
    images: ["/paris-2.jpeg", "/paris-3.jpeg", "/paris-4.jpeg"]
  },
  {
    logo: "/ipas-logo.png",
    name: "IPAS Advisory",
    sector: "Finance & Consultancy",
    desc: "IPAS Advisory is a trusted consultancy firm providing expert services in GST, Income Tax, Accounting, and Business Advisory. Serving clients across India and the UAE, they help businesses stay compliant and achieve sustainable growth.",
    images: ["/ipas-3.jpeg", "/ipas-4.jpeg", "/ipas-5.jpeg"]
  },
  {
    logo: "/redpex.png",
    name: "Redpex",
    sector: "E-Commerce",
    desc: "Redpex is a modern digital platform focused on delivering premium product experiences and streamlined retail solutions.",
    images: ["/redpex-1.jpeg", "/redpex-2.png", "/redpex-3.jpeg"]
  },
  {
    logo: "/horizone.png",
    name: "Horizone Energy",
    sector: "Solar / Energy",
    desc: "Horizone Energy Malappuram provides reliable solar energy solutions designed to help homes and businesses switch to clean, sustainable, and cost-effective power.",
    images: ["/horizone-1.jpeg", "/horizone-2.jpeg", "/horizone-3.jpeg"]
  },
  {
    logo: "/inkspire.png",
    name: "Inkspire Study Point",
    sector: "Education",
    desc: "Inkspire Study Point Tuition Centre, Malappuram, is a trusted learning center dedicated to helping students achieve academic excellence. With experienced tutors, personalized teaching methods, and both online and offline classes, the institute focuses on building strong fundamentals — covering CBSE and State syllabus subjects.",
    images: ["/inkspire-1.jpeg", "/inkspire-2.jpeg", "/inkspire-3.jpeg"]
  },
];

export default function Portfolio() {
  return (
    <div className="relative z-10 bg-transparent">
      {/* <Navbart /> */}
      <div style={{ color: C.white, fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: "transparent" }}>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,500;0,900;1,300&family=DM+Serif+Display:ital@0;1&display=swap');
          *, *::before, *::after { box-sizing: border-box; }
          ::selection { background: ${C.acid}; color: #000; }
          .grain::after {
            content: '';
            position: fixed; inset: 0; pointer-events: none; z-index:-1;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
            opacity: 0.15;
          }
          .rule { height: 1px; background: rgba(245,245,240,0.10); }
          .svc-row { border-bottom: 1px solid rgba(245,245,240,0.08); }
          .svc-row:hover .svc-num { color: var(--hover-color, ${C.acid}); transition: color 0.3s; }
          .svc-row:hover .svc-arrow { transform: translateX(6px); color: var(--hover-color, ${C.acid}); }

          /* ── Case Study Cards ── */
          .cs-block {
            padding: 2.5rem;
            border: 1px solid rgba(245,245,240,0.08);
            border-radius: 4px;
            background: rgba(245,245,240,0.025);
          }
          .cs-logo-area {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 200px;
            height: 200px;
            padding: 1.5rem;
            border: 1px solid rgba(245,245,240,0.12);
            border-radius: 50%;
            background: #FFFFFF;
            overflow: hidden;
            flex-shrink: 0;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          }
          .cs-logo-area img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            transform: scale(1.1);
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.05));
          }
          .cs-sector {
            font-size: 0.7rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: ${C.acid};
            margin-left: auto;
            padding: 0.35rem 0.8rem;
            border: 1px solid rgba(196,236,13,0.25);
            border-radius: 20px;
          }
          .cs-img-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin-top: 4rem;
            padding-bottom: 2rem;
          }
          .cs-img-slot {
            flex: 1;
            min-height: 400px;
            border: 1px solid rgba(245,245,240,0.15);
            border-radius: 12px;
            overflow: hidden;
            background: rgba(255,255,255,0.03);
            backdrop-filter: blur(10px);
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            position: relative;
          }
          .cs-img-slot::before {
            content: '';
            display: block;
            height: 32px;
            width: 100%;
            background: rgba(255,255,255,0.05);
            border-bottom: 1px solid rgba(255,255,255,0.1);
            flex-shrink: 0;
            z-index: 2;
          }
          .cs-img-slot:hover { 
            border-color: ${C.acid}; 
            transform: translateY(-15px) scale(1.02) !important;
            box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 20px ${C.acid}22;
          }
          .cs-img-slot img {
            width: 100%; 
            height: 100%; 
            object-fit: contain;
            display: block;
            opacity: 1;
            padding: 1.5rem;
            background: rgba(0,0,0,0.15);
            transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .cs-img-slot:hover img {
            transform: scale(1.02);
          }
          .mockup-controls {
            position: absolute;
            top: 12px;
            left: 14px;
            display: flex;
            gap: 6px;
            z-index: 3;
          }
          .mockup-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: rgba(255,255,255,0.2);
          }
            margin-top: 2rem;
          }

          @media (max-width: 1024px) {
            section { padding-left: 5vw !important; padding-right: 5vw !important; }
            .svc-row { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }

            .cs-img-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
            .cs-img-slot { min-height: 350px; }
          }
          @media (max-width: 640px) {
            .cs-img-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
            .cs-img-slot { min-height: 280px !important; transform: none !important; }
            .cs-block { padding: 1.5rem !important; }
            .cs-header { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
            .cs-logo-area { width: 140px; height: 140px; }
            .cs-sector { margin-left: 0 !important; }
            .cs-img-slot img { padding: 1rem; }

            .trusted-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
            .trusted-header { padding-right: 0 !important; border-right: none !important; border-bottom: 1px solid rgba(245,245,240,0.1) !important; padding-bottom: 2rem !important; }

          }
        `}</style>

        <div className="grain" />

        {/* ── HERO ── */}
        <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 6vw 8vh", position: "relative", background: "transparent" }}>
          <div style={{ position: "absolute", top: "30%", right: "10%", width: 560, height: 560, borderRadius: "50%", background: `radial-gradient(circle, ${C.blue}28 0%, transparent 70%)`, pointerEvents: "none" }} />

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(4.5rem, 14vw, 13rem)", lineHeight: 0.92, letterSpacing: "-0.02em", fontWeight: 400 }}
          >
            PORT<br />
            <span style={{ fontStyle: "italic", color: C.acid }}>FOLIO</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ marginTop: "3rem", maxWidth: 420, color: C.dim, fontSize: "1rem", lineHeight: 1.7 }}
          >
            We build scalable digital experiences and powerful brand identities for modern businesses.
          </motion.p>
        </section>

        <Ticker items={tickerItems} />

        {/* ── ABOUT ── */}
        <section style={{ padding: "12vh 6vw", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4vw", alignItems: "center", background: "transparent" }}>
          <Reveal>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(3rem, 9vw, 8rem)", lineHeight: 0.95, fontWeight: 400 }}>
              About<br /><span style={{ fontStyle: "italic", color: C.acid }}>Us</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ color: C.dim, lineHeight: 1.85, fontSize: "1.05rem" }}>
              <p>KOD.BRAND is a full-service digital marketing and branding agency committed to helping businesses build impactful, lasting connections with their audiences.</p>
              <div style={{ marginTop: "2.5rem", display: "flex", gap: "3rem" }}>
                {[["120+", "Brands", C.acid], ["08", "Years", C.blue], ["4", "Studios", C.acid]].map(([num, label, clr]) => (
                  <div key={label}>
                    <div style={{ fontSize: "2.5rem", color: clr, fontWeight: 900 }}>{num}</div>
                    <div style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: C.dim }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <div className="rule" />

        {/* ── SERVICES ── */}
        <section style={{ padding: "12vh 6vw", background: "transparent" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem" }}>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: 0.95, fontWeight: 400 }}>
                What we<br /><span style={{ fontStyle: "italic" }}>do</span>
              </h2>
            </div>
          </Reveal>
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="svc-row" style={{ display: "flex", alignItems: "center", gap: "2rem", padding: "2.2rem 0" }}>
                <span className="svc-num" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "3.5rem", color: "rgba(245,245,240,0.12)", minWidth: "5rem", "--hover-color": i % 2 === 0 ? C.acid : C.blue }}>0{i + 1}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 500, marginBottom: "0.5rem" }}>{s.title}</h3>
                  <p style={{ color: C.dim, fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 560 }}>{s.desc}</p>
                </div>
                <span className="svc-arrow" style={{ fontSize: "1.5rem", transition: "0.3s" }}>→</span>
              </div>
            </Reveal>
          ))}
        </section>


        {/* ── TRUSTED BY (UPDATED VERSION) ── */}

        {/* ── TRUSTED BY (MINIMALIST WHITE LOGO TICKER) ── */}
        <section style={{ padding: "14vh 0", background: "transparent", overflow: "hidden" }}>
          <div className="trusted-layout" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", alignItems: "center", width: "100%" }}>
            
            {/* Left Content Column */}
            <div className="trusted-header" style={{ padding: "0 6vw", borderRight: "1px solid rgba(245,245,240,0.10)", background: "transparent" }}>
              <Reveal>
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", color: C.acid, marginBottom: "1rem", fontWeight: 500 }}>
                  Strategic Alliances
                </p>
                <h2 style={{ 
                  fontFamily: "'DM Serif Display', serif", 
                  fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)", 
                  color: C.white,
                  lineHeight: 1.05,
                  fontWeight: 400
                }}>
                  Trusted by <br />
                  <span style={{ fontStyle: "italic", color: C.acid }}>Global Leaders</span>
                </h2>
                <p style={{ color: C.dim, fontSize: "0.9rem", marginTop: "1.5rem", lineHeight: 1.6, maxWidth: "340px" }}>
                  Partnering with forward-thinking enterprises to deliver absolute distinction across digital footprints.
                </p>
              </Reveal>
            </div>

            {/* Right Infinite Ticker Column */}
            <div style={{ position: "relative", width: "100%", overflow: "hidden", background: "transparent" }}>
              
              {/* Soft gradient edges to smoothly fade logos in and out on the sides */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, transparent 100%)",
                zIndex: 5, pointerEvents: "none"
              }} />

              {/* Transparent Ticker Runway */}
              <div style={{ 
                display: "flex", 
                width: "100%",
                background: "transparent", 
                padding: "0" 
              }}>
                <motion.div
                  style={{ display: "flex", gap: "8rem", padding: "0 4rem", alignItems: "center" }} 
                  animate={{ x: ["0%", "-50%"] }} 
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                >
                  {[...logos, ...logos].map((logo, i) => (
                    <div 
                      key={i}
                      style={{ 
                        display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer", height: "200px", width: "160px", background: "transparent"
                      }}
                    >
                      <motion.img 
                        src={logo} 
                        alt="" 
                        initial={{ scale: 1, opacity: 0.4 }}
                        whileHover={{ scale: 1.12, opacity: 0.95 }}
                        transition={{ type: "spring", stiffness: 350, damping: 22 }}
                        style={{ 
                          width: "auto", 
                          maxHeight: (logo.includes("LOGO(1)") || logo.includes("LOGO (2)") || logo.includes("LOGO (4)") || logo.includes("LOGO 1") || logo.includes("LOGO 2") || logo.includes("LOGO 4")) ? "250px" : "200px", 
                          maxWidth: "160px",
                          objectFit: "contain", zIndex: 6,
                          /* Forces any color logo into a pristine, solid white layout */
                          filter: "brightness(0) invert(1)",
                          WebkitFilter: "brightness(0) invert(1)"
                        }} 
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>


          </div>
        </section>

        <div className="rule" />


        {/* ── VISUAL CAMPAIGNS / CLIENT CASE STUDIES ── */}
        <section style={{ padding: "12vh 6vw 20vh", background: "transparent" }}>



        {/* ── DEVELOPMENT ── */}
        <section className="py-[12vh] px-[6vw] pb-[20vh] bg-transparent">

          <Reveal>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.5rem,7vw,6rem)", fontWeight: 400, lineHeight: 0.95, marginBottom: "1rem", paddingTop: "1rem" }}>
              Visual{" "}
              <span style={{ fontStyle: "italic", color: C.acid }}>Campaigns</span>
            </h2>
            <p style={{ color: C.dim, fontSize: "1rem", lineHeight: 1.7, maxWidth: 560, marginBottom: "5rem" }}>
              A curated selection of brand campaigns and visual identities crafted for clients across diverse industries.
            </p>
          </Reveal>


          {caseStudies.map((client, i) => (
            <div key={i}>
              <Reveal delay={i * 0.06}>
                <div className="cs-block">

                  <div className="cs-header" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                    <div className="cs-logo-area">
                      <img src={client.logo} alt={client.name} />

          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {devCards.map((card, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="p-[1px] bg-gradient-to-r from-[#c4ec0d] to-[#2b51b6] transition-all duration-300 hover:scale-[1.02]">
                  <div className="bg-transparent backdrop-blur-md overflow-hidden">
                    <div className="h-[220px] flex items-center justify-center p-8">
                      <img src={`/${card.img}`} alt="" className="h-20 object-contain opacity-90" />
                    </div>
                    <div className="border-t border-white/10 px-6 py-4 flex justify-between items-center text-[0.75rem] tracking-[0.14em] uppercase text-[#f5f5f0]/60">
                      <span>{card.label}</span>
                      <span>→</span>

                    </div>
                    <span className="cs-sector">Sector&nbsp;:&nbsp;{client.sector}</span>
                  </div>

                  <p style={{ color: C.dim, fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 700, marginBottom: "0.5rem" }}>
                    {client.desc}
                  </p>

                  <div className="cs-img-grid">
                    {client.images.map((imgSrc, j) => {
                      const offsets = [
                        { rotate: "-2deg", y: "0px" },
                        { rotate: "3deg", y: "40px" },
                        { rotate: "-1deg", y: "15px" }
                      ];
                      return (
                        <div 
                          key={j} 
                          className="cs-img-slot" 
                          style={{ 
                            transform: `rotate(${offsets[j].rotate}) translateY(${offsets[j].y})`,
                            zIndex: j === 1 ? 5 : 1
                          }}
                        >
                          <div className="mockup-controls">
                            <div className="mockup-dot" />
                            <div className="mockup-dot" />
                            <div className="mockup-dot" />
                          </div>
                          <img src={imgSrc} alt={`${client.name} work ${j + 1}`} />
                        </div>
                      );
                    })}
                  </div>

                </div>
              </Reveal>
              {i < caseStudies.length - 1 && (
                <div className="rule" style={{ margin: "2.5rem 0" }} />
              )}
            </div>
          ))}

        </section>
      </div>
    </div>
  );
