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

const logos = ["/razain.png", "/redpex.png", "/horizone.png","/inkspire.png", "/paris cafe.png",  "/ipas-logo.png", "/brownie-bakes.png"];
const tickerItems = ["Brand Strategy", "Visual Identity", "Motion Design", "Web Development", "3D Modeling", "Campaign Direction"];

const devCards = [
  { img: "new.png", label: "Brand Portals" },
  { img: "bgb.png", label: "Campaign Sites" },
  { img: "logo3.jpeg", label: "E-Commerce" },
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

          @media (max-width: 1024px) {
            section { padding-left: 5vw !important; padding-right: 5vw !important; }
            .svc-row { flex-direction: column !important; align-items: flex-start !important; gap: 1rem !important; }
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
            flex: "0 0 220px", // Wider slot
            height: "150px",  // Taller slot
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
background: "#FFFFFF", 
    // Added backdropBlur for a glassmorphism effect
    backdropFilter: "blur(10px)",            borderRadius: "4px",    // Slight rounding to feel premium
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)" // Lifted effect
          }}
          whileHover={{ 
            y: -10,
            boxShadow: `0 20px 40px ${C.acid}33`, // Acid glow on hover
            borderColor: C.acid
          }}
        >
          {/* THE LOGO - Big and Highlighted */}
          <motion.img 
            src={logo} 
            alt="" 
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.3 }} // Large Zoom
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            style={{ 
              width: "220px",
              height: "auto",
              maxHeight: "320px", // Much larger
              maxWidth: "85%",    // Filling more of the white box
              objectFit: "contain",
              zIndex: 2
            }} 
          />

          {/* Bottom highlight bar */}
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
        {/* ── DEVELOPMENT ── */}
        <section className="py-[12vh] px-[6vw] pb-[20vh] bg-transparent">
          <Reveal>
            <h2 className="font-[DM Serif Display] text-[clamp(2.5rem,7vw,6rem)] font-normal leading-none mb-16">
              Website <span className="italic text-[#c4ec0d]">Development</span><br />for your business
            </h2>
          </Reveal>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {devCards.map((card, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="p-[1px] bg-gradient-to-r from-[#c4ec0d] to-[#2b51b6] transition-all duration-300 hover:scale-[1.02]">
                  <div className="bg-black/40 backdrop-blur-md overflow-hidden">
                    <div className="h-[220px] flex items-center justify-center p-8">
                      <img src={`/${card.img}`} alt="" className="h-20 object-contain opacity-90" />
                    </div>
                    <div className="border-t border-white/10 px-6 py-4 flex justify-between items-center text-[0.75rem] tracking-[0.14em] uppercase text-[#f5f5f0]/60">
                      <span>{card.label}</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}