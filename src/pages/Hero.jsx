import Homet from "./Homet";


export default function Hero() {
  const menu = [
    'DESIGN PRINCIPLES',
    'CODE FUNDAMENTALS',
    'MARKETING IDEAS',
    'FULL-STACK',
  ];
  
                 
  return (
    <div>
      

      
    <div className="min-h-screen text-white flex items-center justify-center p-6">
      <div className="w-full max-w-7xl rounded-[2rem]  overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 sm:p-8 lg:p-14">

          {/* Left typography block */}
            <div className="space-y-0 w-[120%] leading-none bg-[linear-gradient(144.5deg,white_50%,rgba(0,0,0,0)_115%)] bg-clip-text text-transparent">
           <h1
        style={{ fontFamily: "YourFont" }}
          className="text-[4rem] sm:text-[5rem] lg:text-[7rem] tracking-wide">
  TECH & DESIGN</h1>

<h2
  style={{ fontFamily: "YourFont" }}
  className="text-[4rem] sm:text-[5rem] lg:text-[7rem] -mt-3"
>
  ACADEMY
</h2>
          </div>

          {/* Right visual card */}
          <div className="relative group [perspective:1200px] flex justify-center lg:justify-end">

            <div className="relative h-[280px] sm:h-[320px] lg:h-[420px] w-full max-w-[420px] lg:max-w-none  overflow-hidden shadow-2xl">

              {/* grid - visibility increased to 45% (and 70% on hover) */}
              <div
                className="absolute inset-[-6%] opacity-45 transition-all duration-700 ease-out will-change-transform group-hover:scale-[1.08] group-hover:[transform:scale(1.08)_rotateX(8deg)_rotateY(-4deg)] group-hover:opacity-70"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #fff 1.5px, transparent 1.5px), linear-gradient(to bottom, #fff 1.5px, transparent 1.5px)',
                  backgroundSize: '28px 28px',
                  maskImage:
                    'radial-gradient(circle at center, black 0%, black 45%, rgba(0,0,0,0.85) 65%, transparent 100%)',
                  WebkitMaskImage:
                    'radial-gradient(circle at center, black 0%, black 45%, rgba(0,0,0,0.85) 65%, transparent 100%)',
                }}
              />

              {/* glow - increased default visibility and brand purple tone */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] opacity-60 transition-opacity duration-700 group-hover:opacity-100" />

              {/* pedestal - shifted to lg:left-[33%] on desktop to clear the right side menu with better balance */}
              <div className="absolute bottom-10 left-1/2 lg:left-[33%] -translate-x-1/2 w-32 sm:w-40 h-16 sm:h-20 bg-zinc-300 shadow-[0_10px_25px_rgba(255,255,255,0.05)] border border-white/10 rotate-[-2deg]" />

              {/* camera - shifted to lg:left-[33%] on desktop to clear the right side menu with better balance */}
              <div className="absolute bottom-24 sm:bottom-28 left-1/2 lg:left-[33%] -translate-x-1/2 w-40 sm:w-48 h-24 sm:h-28 bg-zinc-900 rounded-md shadow-2xl border border-zinc-600 transition-all duration-700 ease-out group-hover:-translate-y-3 group-hover:rotate-[-2deg] group-hover:scale-105 animate-[float_4s_ease-in-out_infinite]">
                <div className="absolute top-2 left-4 w-6 h-2 bg-zinc-600 rounded" />
                <div className="absolute top-2 right-4 w-10 h-4 bg-zinc-600 rounded-sm" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-20 h-16 sm:h-20 rounded-full border-[8px] sm:border-[10px] border-zinc-800 bg-black" />
                {/* Pulsing Lime lens core for maximum visibility */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#c4ec0d] shadow-[0_0_15px_rgba(196,236,13,0.8)] animate-pulse" />
              </div>

              {/* floating menu - card background made highly transparent to make background things visible behind it */}
              <div className="
                static lg:absolute
                mt-6 lg:mt-0
                right-4 top-1/2 lg:-translate-y-1/2
                w-full sm:w-72 lg:w-72
                mx-auto lg:mx-0
                rounded-[1.75rem] border border-white/25
                bg-[linear-gradient(180deg,rgba(70,30,160,0.55),rgba(20,5,60,0.65))]
                backdrop-blur-xl p-5 md:p-6
                transition-all duration-700 ease-out
                group-hover:translate-x-[-10px] group-hover:scale-[1.03]
                overflow-hidden
                shadow-[0_20px_50px_rgba(88,61,160,0.4)]
              ">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_50%)] pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between border-b border-white/15 pb-3">
                    <span className="text-xs md:text-sm tracking-[0.3em] text-[#c4ec0d] font-bold">PROGRAMS</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#c4ec0d] animate-pulse" />
                  </div>

                  <div className="space-y-2.5">
                    {menu.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-3 text-xs md:text-sm text-zinc-100 font-semibold tracking-wide hover:bg-white/[0.1] transition-all duration-300"
                      >
                        <span className="w-2.5 h-2.5 rounded-full border border-white/30 bg-white/10" />
                        <span className="truncate tracking-wide">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#d7f05f] to-[#c4ec0d] text-[#2d1b69] text-xs md:text-sm font-extrabold tracking-[0.2em] py-3.5 shadow-lg shadow-[#c4ec0d]/20 hover:shadow-[#c4ec0d]/35 hover:scale-[1.02] transition-all duration-300">
                    APPLY NOW
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}