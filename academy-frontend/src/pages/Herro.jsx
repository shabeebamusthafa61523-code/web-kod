import { useEffect, useRef, useState } from "react";

export default function Herro() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // opening amount (subtle)
  const open = 0.08 + progress * 0.12; // % of width

  // subtle "finger" movement
  const fingerShift = progress * 8; // px

  return (
    <div className="bg-black">
      <section ref={ref} className="h-[200vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          {/* IMAGE */}
          <img
            src="reveal.png"
            className="absolute inset-0 w-full h-full object-cover"
            alt="bg"
          />

          {/* SVG MASK LAYER */}
          <svg className="absolute inset-0 w-full h-full z-20">
            <defs>
              <clipPath id="handClip" clipPathUnits="objectBoundingBox">
                {/* Left "hand" */}
                <path
                  d={`
                    M0,0 
                    L${0.5 - open},0 
                    C${0.45 - open},0.2 ${0.42 - open},0.4 ${0.48 - open},0.5
                    C${0.42 - open},0.6 ${0.45 - open},0.8 ${0.5 - open},1
                    L0,1 Z
                  `}
                />

                {/* Right "hand" */}
                <path
                  d={`
                    M1,0 
                    L${0.5 + open},0 
                    C${0.55 + open},0.2 ${0.58 + open},0.4 ${0.52 + open},0.5
                    C${0.58 + open},0.6 ${0.55 + open},0.8 ${0.5 + open},1
                    L1,1 Z
                  `}
                />
              </clipPath>
            </defs>

            {/* Black overlay using clip-path */}
            <rect
              width="100%"
              height="100%"
              fill="black"
              clipPath="url(#handClip)"
              style={{
                transform: `translateX(${fingerShift * 0.2}px)`
              }}
            />
          </svg>

          {/* CENTER SLIT ENHANCEMENT (eye focus) */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-full z-10"
            style={{ width: `${open * 100}vw` }}
          >
            <img
              src="/mnt/data/a_dark_dramatic_website_homepage_landing_page_m.png"
              className="h-full object-cover"
              style={{
                width: "100vw",
                transform: "translateX(-50%)",
                position: "absolute",
                left: "50%"
              }}
            />
          </div>

        </div>
      </section>

      <section className="h-screen flex items-center justify-center text-gray-500">
        End
      </section>
    </div>
  );
}