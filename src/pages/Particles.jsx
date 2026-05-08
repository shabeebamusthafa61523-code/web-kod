import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

export default function Particles() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Desktop animation (unchanged feel)
  const userXDesktop = useTransform(scrollYProgress, [0, 0.35], [40, 320]);

  // Mobile animation (stop at center of laptop instead of going across screen)
  const userXMobile = useTransform(scrollYProgress, [0, 0.35], [20, 160]);

  const userX = isMobile ? userXMobile : userXDesktop;

  const laptopRotate = useTransform(scrollYProgress, [0.15, 0.45], ["-65deg", "0deg"]);
  const keyboardY = useTransform(scrollYProgress, [0.2, 0.5], [80, 0]);
  const mouseX = useTransform(scrollYProgress, [0.25, 0.6], [160, 0]);
  const layersY = useTransform(scrollYProgress, [0.45, 0.8], [100, 0]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 grid h-screen grid-cols-1 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="flex items-center justify-center px-6 sm:px-10 lg:px-16">
          <div className="max-w-xl">
            <div className="mb-10 sm:mb-14 text-left">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-500">
                Featured Learning Paths
              </p>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                Explore Future-Ready Courses
              </h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
                Watch the journey unfold as a learner moves toward a digital workstation,
                opening immersive lessons in code, design, and analytics through Comprehensive courses designed to build in-demand skills.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SCROLL STORY */}
        <div className="relative flex items-center justify-center overflow-hidden [perspective:1400px] px-4">
          <div className="relative h-[420px] sm:h-[520px] w-full max-w-2xl">
            {/* user */}
            <motion.div
              style={{ x: userX }}
              className="absolute bottom-12 sm:bottom-16 left-4 sm:left-8 z-20"
            >
              <div className="relative">
                <div className="mx-auto h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-slate-700" />
                <div className="mx-auto mt-2 h-16 sm:h-20 w-6 sm:w-8 rounded-full bg-slate-600" />
                <div className="absolute left-[-10px] sm:left-[-14px] top-10 sm:top-12 h-2 w-10 sm:w-14 rounded-full bg-slate-500" />
                <div className="absolute right-[-10px] sm:right-[-14px] top-10 sm:top-12 h-2 w-10 sm:w-14 rounded-full bg-slate-500" />
                <div className="absolute left-0 bottom-[-16px] sm:bottom-[-20px] h-12 sm:h-16 w-2 rounded-full bg-slate-500" />
                <div className="absolute right-0 bottom-[-16px] sm:bottom-[-20px] h-12 sm:h-16 w-2 rounded-full bg-slate-500" />
              </div>
            </motion.div>

            {/* laptop screen */}
            <motion.div
              style={{ rotateX: laptopRotate }}
              className="absolute right-4 sm:right-16 top-10 sm:top-14 z-10 h-48 sm:h-64 w-[260px] sm:w-[380px] rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700 shadow-2xl origin-bottom"
            >
              <div className="m-3 sm:m-4 h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] rounded-2xl bg-white p-3 sm:p-4">
                <motion.div style={{ y: layersY }} className="grid gap-2 sm:gap-3">
                  <div className="flex h-12 sm:h-16 items-center rounded-2xl bg-gradient-to-r from-violet-100 to-violet-50 px-4 sm:px-5 shadow-sm">
                    <span className="text-xs sm:text-sm font-bold tracking-wide text-violet-700">
                      | App Development
                    </span>
                  </div>

                  <div className="flex h-14 sm:h-20 items-center rounded-2xl bg-gradient-to-r from-pink-100 to-fuchsia-50 px-4 sm:px-5 shadow-sm">
                    <span className="text-xs sm:text-sm font-bold tracking-wide text-pink-700">
                      | Software Development
                    </span>
                  </div>

                  <div className="flex h-20 sm:h-24 flex-col justify-center rounded-2xl bg-gradient-to-r from-emerald-100 to-cyan-50 px-4 sm:px-5 shadow-sm">
                    <span className="text-xs sm:text-sm font-bold tracking-wide text-emerald-700">
                      | Graphic Designing
                    </span>
                    <span className="text-xs sm:text-sm font-bold tracking-wide text-emerald-700">
                      | Digital Marketing
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: keyboardY }}
              className="absolute right-2 sm:right-12 top-[280px] sm:top-[320px] h-6 sm:h-8 w-[260px] sm:w-[430px] rounded-b-[2rem] bg-gradient-to-r from-slate-300 to-slate-100 shadow-2xl"
            />

            <motion.div
              style={{ x: mouseX }}
              className="absolute right-[-5px] sm:right-[-10px] top-[300px] sm:top-[345px] h-8 sm:h-10 w-5 sm:w-6 rounded-full bg-slate-300 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
