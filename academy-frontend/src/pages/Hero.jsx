export default function Hero() {
  const menu = [
    'DESIGN PRINCIPLES',
    'CODE FUNDAMENTALS',
    'MARKETING IDEAS',
    'FULL-STACK',
  ];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-7xl rounded-[2rem] overflow-hidden bg-black shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 sm:p-8 lg:p-14">

          {/* Left typography block */}
          <div className="space-y-0 leading-none text-center lg:text-left">
            <h1
              style={{ fontFamily: "YourFont" }}
              className="text-[3rem] sm:text-[5rem] lg:text-[7rem] tracking-wide"
            >
              TECH & DESIGN
            </h1>

            <h2
              style={{ fontFamily: "YourFont" }}
              className="text-[3rem] sm:text-[5rem] lg:text-[7rem] -mt-2"
            >
              ACADEMY
            </h2>
          </div>

          {/* Right visual card */}
          <div className="relative group [perspective:1200px] flex justify-center lg:justify-end">

            <div className="relative h-[280px] sm:h-[320px] lg:h-[420px] w-full max-w-[420px] lg:max-w-none bg-black overflow-hidden shadow-2xl">

              {/* grid */}
              <div
                className="absolute inset-[-6%] opacity-20 transition-all duration-700 ease-out will-change-transform group-hover:scale-[1.08] group-hover:[transform:scale(1.08)_rotateX(8deg)_rotateY(-4deg)]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                  maskImage:
                    'radial-gradient(circle at center, black 0%, black 35%, rgba(0,0,0,0.75) 55%, transparent 100%)',
                  WebkitMaskImage:
                    'radial-gradient(circle at center, black 0%, black 35%, rgba(0,0,0,0.75) 55%, transparent 100%)',
                }}
              />

              {/* glow */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* pedestal */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-16 sm:h-20 bg-zinc-400 shadow-lg rotate-[-2deg]" />

              {/* camera */}
              <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 w-40 sm:w-48 h-24 sm:h-28 bg-zinc-900 rounded-md shadow-2xl border border-zinc-700 transition-all duration-700 ease-out group-hover:-translate-y-3 group-hover:rotate-[-2deg] group-hover:scale-105 animate-[float_4s_ease-in-out_infinite]">
                <div className="absolute top-2 left-4 w-6 h-2 bg-zinc-700 rounded" />
                <div className="absolute top-2 right-4 w-10 h-4 bg-zinc-700 rounded-sm" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-20 h-16 sm:h-20 rounded-full border-[8px] sm:border-[10px] border-zinc-800 bg-black" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-zinc-700" />
              </div>

              {/* floating menu */}
              <div className="
                static lg:absolute
                mt-6 lg:mt-0
                right-4 top-1/2 lg:-translate-y-1/2
                w-full sm:w-64 lg:w-52
                mx-auto lg:mx-0
                rounded-2xl border border-white/10
                bg-[linear-gradient(180deg,rgba(88,61,160,0.95),rgba(48,30,99,0.92))]
                backdrop-blur-xl p-4
                transition-all duration-700 ease-out
                group-hover:translate-x-[-10px] group-hover:scale-[1.03]
                overflow-hidden
              ">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_45%)] pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[9px] tracking-[0.25em] text-white/60">PROGRAMS</span>
                    <span className="h-2 w-2 rounded-full bg-[#c4ec0d]" />
                  </div>

                  <div className="space-y-2">
                    {menu.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-2 py-2 text-[10px] text-zinc-100"
                      >
                        <span className="w-2 h-2 rounded-full border border-white/40 bg-white/10" />
                        <span className="truncate tracking-wide">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#d7f05f] to-[#c4ec0d] text-[#2d1b69] text-[10px] font-extrabold tracking-[0.2em] py-2">
                    APPLY NOW
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}