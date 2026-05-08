import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover [transform:scaleY(-1)]"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0)] to-white" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-[1200px] pt-[290px] flex flex-col gap-8 px-6"
      >
        {/* Heading */}
        <motion.h1
          variants={item}
          className="font-geist text-[80px] leading-[1.05] tracking-[-0.04em] text-[#111]"
        >
          Simple <span className="font-instrument-serif italic text-[100px]">management</span>{" "}
          for your remote team
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="font-geist text-[18px] text-[#373a46]/80 max-w-[554px]"
        >
          Streamline workflows, improve collaboration, and manage your remote
          team with a beautifully simple experience designed for modern teams.
        </motion.p>

        {/* Email + CTA */}
        <motion.div variants={item} className="flex flex-col gap-4 max-w-[520px]">
          <div className="flex items-center gap-2 bg-[#fcfcfc] border border-black/5 rounded-[40px] px-2 py-2 shadow-[0px_10px_40px_5px_rgba(194,194,194,0.25)]">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none px-4 font-geist text-sm"
            />
            <button
              className="rounded-[40px] px-6 py-3 text-white font-geist text-sm bg-gradient-to-b from-[#2a2a2a] to-[#0f0f0f] shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)]"
            >
              Create Free Account
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-3 text-sm font-geist text-[#373a46]/70">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-black/70"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.3l6.18 3.7-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span>1,020+ Reviews</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
