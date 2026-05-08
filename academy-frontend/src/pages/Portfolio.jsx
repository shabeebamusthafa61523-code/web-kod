import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// ── Tokens ─────────────────────────────────────────────────────────────────
const C = {
  acid:  "#c4ec0d",
  blue:  "#2b51b6",
  black: "#050505",
  white: "#f5f5f0",
  dim:   "rgba(245,245,240,0.38)",
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
  { title: "Designing",   desc: "Detailed objects, characters, and environments tailored to specific client needs — ideal for games, products, and immersive visualizations." },
  { title: "Branding",    desc: "Photorealistic renders with custom lighting, textures, and materials that bring concepts to life and communicate quality at a glance." },
  { title: "Marketing",   desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences." },
  { title: "Development", desc: "Cohesive visual identities — from logos to full brand systems — that communicate a clear, memorable, and lasting presence." },
];

const logos = ["/logo.jpeg", "/logo2.png", "/bgb.png", "/new.png", "/neww.jpeg"];
const tickerItems = ["Brand Strategy", "Visual Identity", "Motion Design", "Web Development", "3D Modeling", "Campaign Direction"];

const devCards = [
  { img: "new.png",    label: "Brand Portals" },
  { img: "bgb.png",    label: "Campaign Sites" },
  { img: "logo3.jpeg", label: "E-Commerce" },
];

// ── Main Component ───────────────────────────────────────────────────────────
export default function Portfolio() {
  return (
    <div className="relative z-10 " >
    <div style={{ background: C.black, color: C.white, fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,500;0,900;1,300&family=DM+Serif+Display:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; z-index:10 }

        ::selection { background: ${C.acid}; color: #000; }

        body { background: ${C.black}; }

        .acid { color: ${C.acid}; }
        .blue { color: ${C.blue}; }

        /* Noise grain overlay */
        .grain::after {
          content: '';
          position: fixed; inset: 0; pointer-events: none; z-index:-1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.35;
        }

        /* Horizontal rule */
        .rule { height: 1px; background: rgba(245,245,240,0.10); }

        /* Service row */
        .svc-row { border-bottom: 1px solid rgba(245,245,240,0.08); }
        .svc-row:hover .svc-num { color: var(--hover-color, ${C.acid}); transition: color 0.3s; }
        .svc-row:hover .svc-arrow { transform: translateX(6px); color: var(--hover-color, ${C.acid}); }

      

        /* Dev card */
        .dev-card { border: 1px solid rgba(245,245,240,0.08); transition: border-color 0.4s, transform 0.4s; }
        .dev-card:hover { border-color: ${C.acid}; transform: translateY(-6px); }
        .dev-card:hover .card-bar { background: ${C.acid}; color: #000; }

        /* Underline accent */
        .u-acid { text-decoration: underline; text-decoration-color: ${C.acid}; text-underline-offset: 6px; }
      
        /* ─────────────────────────────────────────────
   RESPONSIVE ONLY (NO DESIGN CHANGES)
   ───────────────────────────────────────────── */

/* Tablets */
@media (max-width: 1024px) {

  section {
    padding-left: 5vw !important;
    padding-right: 5vw !important;
  }

  /* About grid stacks */
  section[style*="grid-template-columns: 1fr 1fr"] {
    grid-template-columns: 1fr !important;
    gap: 3rem !important;
  }

  /* Services become vertical */
  .svc-row {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 1rem !important;
  }

  /* Dev cards: 3 → 2 */
  section[style*="repeat(3, 1fr)"] {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

/* Mobile */

@media (max-width: 640px) {
  section:first-of-type {
    justify-content: center !important;
    padding-top: 10vh !important;
  }


  section {
    padding-left: 5vw !important;
    padding-right: 5vw !important;
  }

  /* Services spacing */
  .svc-row {
    padding: 1.5rem 0 !important;
  }

  /* Logos: 5 → 2 */
  section[style*="repeat(5, 1fr)"] {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  /* Dev cards: single column */
  section[style*="repeat(3, 1fr)"] {
    grid-template-columns: 1fr !important;
  }

  /* Hero title scale fix */
  h1 {
    line-height: 0.9 !important;
  }
}
  
      `},
      
       
      </style>

      <div className="grain" />

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 6vw 8vh", position: "relative", }}>
        {/* Blue atmospheric glow */}
        <div style={{ position: "absolute", top: "30%", right: "10%", width: 560, height: 560, borderRadius: "50%", background: `radial-gradient(circle, ${C.blue}28 0%, transparent 70%)`, pointerEvents: "none" }} />
      
        {/* Floating label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{ marginBottom: "2.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
        >
          <span style={{ width: 32, height: 1, background: C.acid }} />
          <span style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: C.acid }}>KOD.BRAND — Est. 2025</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(4.5rem, 14vw, 13rem)", lineHeight: 0.92, letterSpacing: "-0.02em", fontWeight: 400 }}
        >
          PORT<br />
          <span style={{ fontStyle: "italic", color: C.acid }}>FOLIO</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ marginTop: "3rem", maxWidth: 420, color: C.dim, fontSize: "1rem", lineHeight: 1.7 }}
        >
          We build scalable digital experiences and powerful brand identities for modern businesses.
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ position: "absolute", right: "6vw", bottom: "8vh", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
        >
          <span style={{ fontSize: "0.62rem", letterSpacing: "0.2em", color: C.dim, writingMode: "vertical-rl" }}>SCROLL</span>
          <div style={{ width: 1, height: 48, background: `linear-gradient(to bottom, ${C.acid}, transparent)` }} />
        </motion.div>
      </section>

      {/* ── TICKER ── */}
      <Ticker items={tickerItems} />

      {/* ── ABOUT ── */}
      <section style={{ padding: "12vh 6vw", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4vw", alignItems: "center" }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Excon', serif", fontSize: "clamp(3rem, 9vw, 8rem)", lineHeight: 0.95, fontWeight: 400 }}>
            About<br /><span style={{ fontStyle: "italic", color: C.acid }}>Us</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ color: C.dim, lineHeight: 1.85, fontSize: "1.05rem" }}>
            <p style={{ marginBottom: "1.5rem" }}>
              KOD.BRAND is a full-service digital marketing and branding agency committed to helping businesses build impactful, lasting connections with their audiences.
            </p>
            <p>
              We combine data-driven strategy, creative innovation, and market expertise to deliver campaigns that drive results and build strong, memorable brands.
            </p>
            <div style={{ marginTop: "2.5rem", display: "flex", gap: "3rem" }}>
              {[["120+", "Brands", C.acid], ["08", "Years", C.blue], ["4", "Studios", C.acid]].map(([num, label, clr]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Excon', serif", fontSize: "2.5rem", color: clr }}>{num}</div>
                  <div style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: C.dim, marginTop: "0.25rem" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <div className="rule" />

      {/* ── SERVICES ── */}
      <section style={{ padding: "12vh 6vw" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem" }}>
            <h2 style={{ fontFamily: "'Excon', serif", fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: 0.95, fontWeight: 400 }}>
              What we<br /><span style={{ fontStyle: "italic" }}>do</span>
            </h2>
            <span style={{ fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: C.dim }}>0{services.length} services</span>
          </div>
        </Reveal>

        {services.map((s, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="svc-row" style={{ display: "flex", alignItems: "center", gap: "2rem", padding: "2.2rem 0", cursor: "default" }}>
              <span className="svc-num" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "3.5rem", color: "rgba(245,245,240,0.12)", minWidth: "5rem", transition: "color 0.3s", "--hover-color": i % 2 === 0 ? C.acid : C.blue }}>
                0{i + 1}
              </span>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 500, letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>{s.title}</h3>
                <p style={{ color: C.dim, fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 560 }}>{s.desc}</p>
              </div>
              <span className="svc-arrow" style={{ fontSize: "1.5rem", color: "rgba(255, 255, 255, 0.62)", transition: "transform 0.3s, color 0.3s" }}>→</span>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ── TRUSTED BY ── */}
      <section style={{ background: `linear-gradient(135deg, #080810 0%, #0a0a0a 60%, rgba(43,81,182,0.08) 100%)`, padding: "12vh 6vw", position: "relative", overflow: "hidden" }}>
        {/* Blue corner glow */}
        <div style={{ position: "absolute", bottom: 0, right: 0, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${C.blue}20 0%, transparent 70%)`, pointerEvents: "none" }} />
        <Reveal>
          <div style={{ marginBottom: "5rem" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.blue, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ display: "inline-block", width: 24, height: 2, background: C.blue }} />
              Our Clients
            </p>
            <h2 style={{ fontFamily: "'Excon', serif", fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 400, lineHeight: 1 }}>
              Trusted by <span style={{ fontStyle: "italic" }}>industry</span><br />leaders
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "3rem", alignItems: "center", maxWidth: 900 }}>
          {logos.map((logo, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="logo-item pb-26" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={logo} alt={`client-${i}`} style={{ height: 52, objectFit: "contain" }} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── DEVELOPMENT ── */}
    <section className="py-[12vh] px-[6vw] pb-[20vh]">
  <Reveal>
    <h2 className="font-[Excon] text-[clamp(2.5rem,7vw,6rem)] font-normal leading-none mb-16 pt-4">
      Website{" "}
      <span className="italic text-[#c4ec0d]">Development</span>
      <br />
      for your business
    </h2>
  </Reveal>

  <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 max-lg:grid-cols-2">
    {devCards.map((card, i) => (
      <Reveal key={i} delay={i * 0.12}>
        
        {/* OUTER GRADIENT BORDER */}
        <div className="p-[1px] bg-gradient-to-r from-[#c4ec0d] to-[#2b51b6] transition-all duration-300 hover:from-[#2b51b6] hover:to-[#c4ec0d] hover:scale-[1.02]">

          {/* INNER CARD */}
          <div className="bg-[#0e0e0e] overflow-hidden">

            {/* IMAGE */}
            <div className="h-[220px] flex items-center justify-center p-8">
              <img
                src={`/${card.img}`}
                alt=""
                className="h-20 object-contain opacity-90"
              />
            </div>

            {/* FOOTER */}
            <div className="border-t border-white/10 px-6 py-4 flex justify-between items-center text-[0.75rem] tracking-[0.14em] uppercase text-[#f5f5f0]/60 transition-colors hover:text-white">
              <span>{card.label}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
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

