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
  <div className="overflow-hidden whitespace-nowrap border-y py-3 select-none" style={{ borderColor: "rgba(43,81,182,0.35)", background: "rgba(43,81,182,0.06)" }}>
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

const logos = ["/razain.png", "/redpex.png", "/horizone.png", "/inkspire.png", "/paris cafe.png", "/ipas-logo.png", "/brownie-bakes.png"];
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
  },
  {
    logo: "/ipas-logo.png",
    name: "IPAS Advisory",
    sector: "Finance & Consultancy",
    desc: "IPAS Advisory is a trusted consultancy firm providing expert services in GST, Income Tax, Accounting, and Business Advisory. Serving clients across India and the UAE, they help businesses stay compliant and achieve sustainable growth.",
  },
  {
    logo: "/brownie-bakes.png",
    name: "Brownie Bakes",
    sector: "Food & Bakery",
    desc: "Placeholder — client to provide final copy.",
  },
  {
    logo: "/razain.png",
    name: "Razain",
    sector: "TBD",
    desc: "Placeholder — client to provide final copy.",
  },
  {
    logo: "/redpex.png",
    name: "Redpex",
    sector: "TBD",
    desc: "Placeholder — client to provide final copy.",
  },
  {
    logo: "/horizone.png",
    name: "Horizone Energy",
    sector: "Solar / Energy",
    desc: "Horizone Energy Malappuram provides reliable solar energy solutions designed to help homes and businesses switch to clean, sustainable, and cost-effective power.",
  },
  {
    logo: "/inkspire.png",
    name: "Inkspire Study Point",
    sector: "Education",
    desc: "Inkspire Study Point Tuition Centre, Malappuram, is a trusted learning center dedicated to helping students achieve academic excellence. With experienced tutors, personalized teaching methods, and both online and offline classes, the institute focuses on building strong fundamentals — covering CBSE and State syllabus subjects.",
  },
];

export default function Portfolio() {
  return (
    <div className="relative z-10 bg-transparent">
      {/* <Navbart /> */}
      <div style={{ color: C.white, fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}>

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
            display: flex;
            align-items: flex-start;
            gap: 2rem;
            margin-top: 4rem;
            min-height: 450px;
            padding-bottom: 2rem;
          }
          .cs-img-slot {
            flex: 1;
            aspect-ratio: 16/10;
            border: 1px solid rgba(245,245,240,0.15);
            border-radius: 12px;
            overflow: hidden;
            background: rgba(255,255,255,0.03);
            backdrop-filter: blur(10px);
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            position: relative;
          }
          .cs-img-slot::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; height: 24px;
            background: rgba(255,255,255,0.05);
            border-bottom: 1px solid rgba(255,255,255,0.1);
            z-index: 2;
          }
          .cs-img-slot:hover { 
            border-color: ${C.acid}; 
            transform: translateY(-15px) scale(1.02) !important;
            box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 20px ${C.acid}22;
          }
          .cs-img-slot img {
            width: 100%; height: 100%; object-fit: cover;
            display: block;
            opacity: 0.8;
          }
            margin-top: 2rem;
          }

          @media (max-width: 1024px) {
            section { padding-left: 5vw !important; padding-right: 5vw !important; }
            .svc-row { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
          }
          @media (max-width: 640px) {
            .cs-img-grid { grid-template-columns: 1fr !important; }
            .cs-block { padding: 1.5rem !important; }
            .cs-header { flex-direction: column !important; align-items: flex-start !important; gap: 0.75rem !important; }
            .cs-sector { margin-left: 0 !important; }
          }
        `}</style>

        <div className="grain" />

        {/* ── HERO ── */}
        <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 6vw 8vh", position: "relative" }}>
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
        {/* ── TRUSTED BY (THEMED HIGH-CONTRAST SLIDER) ── */}
        <section style={{
          padding: "12vh 0",
          background: "transparent",
          overflow: "hidden",
          position: "relative"
        }}>
          <div style={{ padding: "0 6vw", marginBottom: "4rem" }}>
            <Reveal>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: C.acid, marginBottom: "1rem" }}>
                Proven Results
              </p>
              <h2 style={{
                fontFamily: "'DM Sans",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: C.white,
                lineHeight: 1,
                fontWeight: 400
              }}>
                Trusted by <span style={{ fontStyle: "italic", color: C.acid }}>Industry Leaders</span>
              </h2>
            </Reveal>
          </div>

          {/* The Slider Container */}
          <div style={{ display: "flex", overflow: "hidden", position: "relative", width: "100%" }}>
            <motion.div
              style={{ display: "flex", gap: "2rem", padding: "20px 0" }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <motion.div
                  key={i}
                  style={{
                    flex: "0 0 220px",
                    height: "150px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#FFFFFF",
                    backdropFilter: "blur(10px)", borderRadius: "4px",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                  }}
                  whileHover={{
                    y: -10,
                    boxShadow: `0 20px 40px ${C.acid}33`,
                    borderColor: C.acid
                  }}
                >
                  <motion.img
                    src={logo}
                    alt=""
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    style={{
                      width: "220px",
                      height: "auto",
                      maxHeight: "320px",
                      maxWidth: "85%",
                      objectFit: "contain",
                      zIndex: 2
                    }}
                  />

                  <motion.div
                    initial={{ height: 0 }}
                    whileHover={{ height: "6px" }}
                    style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      background: C.acid, zIndex: 3
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="rule" />

        {/* ── VISUAL CAMPAIGNS / CLIENT CASE STUDIES ── */}
        <section style={{ padding: "12vh 6vw 20vh", background: "transparent" }}>

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
                    </div>
                    <span className="cs-sector">Sector&nbsp;:&nbsp;{client.sector}</span>
                  </div>

                  <p style={{ color: C.dim, fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 700, marginBottom: "0.5rem" }}>
                    {client.desc}
                  </p>

                  <div className="cs-img-grid">
                    {["Work 1", "Work 2", "Work 3"].map((label, j) => {
                      const offsets = [
                        { rotate: "-2deg", y: "0px" },
                        { rotate: "3deg", y: "40px" },
                        { rotate: "-1deg", y: "15px" }
                      ];
                      return (
                        <div 
                          key={j} 
                          className="cs-img-slot cs-img-slot-empty" 
                          data-label={label}
                          style={{ 
                            transform: `rotate(${offsets[j].rotate}) translateY(${offsets[j].y})`,
                            zIndex: j === 1 ? 5 : 1
                          }}
                        >
                          <img src="" alt={`${client.name.toLowerCase().replace(/\s+/g, "-")}-work-${j + 1}`} />
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
}