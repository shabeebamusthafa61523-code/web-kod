import React from "react";

export default function CourseCardt() {
  const cards = [
    {
      title: "App Development",
      description:
        "Learn to create native iOS and Android apps with Flutter and React Native.",
      logo: "/logo3.jpeg",
    },
    {
      title: "Software Development",
      description:
        "Master HTML, CSS, JavaScript, React, and backend technologies for modern web apps.",
      logo: "/logo3.jpeg",
    },
    {
      title: "Graphic Designing",
      description:
        "Develop skills in visual design, UI/UX, branding, and industry standard design software.",
      logo: "/logo3.jpeg",
    },
    {
      title: "Digital Marketing",
      description:
        "Learn SEO, social media marketing, content creation, and analytics for effective digital campaigns.",
      logo: "/logo3.jpeg",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-[#0a0a0a] to-[#111111] py-20 px-6 text-white">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-light tracking-[0.35em] uppercase">
          <span className="text-[#b7d333]">Learn</span>
          <span className="text-white">.</span>
          <span className="text-[#5b21b6]">Build</span>
          <span className="text-white">.</span>
          <span className="text-[#b7d333]">Earn</span>
        </h2><br/>

        
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {cards.map((card, i) => (
          <div
            key={i}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-[#b7d333]/30 via-[#1a1a1a] to-[#442d82]/30"
          >
            {/* Inner Card */}
            <div className="bg-[#0b0b0b] rounded-2xl p-6 h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(68,45,130,0.25)]">

              {/* Logo */}
              <div className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-5">
                <img
                  src={card.logo}
                  alt={card.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold tracking-wide text-white mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-6 flex-1">
                {card.description}
              </p>

              {/* Button */}
              <button className="mt-6 flex items-center gap-2 text-sm font-medium tracking-widest">
                <span className="text-[#b7d333] group-hover:text-[#442d82] transition">
                  EXPLORE
                </span>
                <span className="text-[#442d82] group-hover:text-[#b7d333] transition">
                  →
                </span>
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}