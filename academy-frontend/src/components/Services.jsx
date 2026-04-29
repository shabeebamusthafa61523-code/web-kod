import React from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "OUR COURSES",
      description:
        "Learn to build modern, responsive websites and full-stack web applications using front-end and back-end technologies. And Master creative design skills to build logos, posters, branding, and social media visuals using modern design principles.",
      path: "/cd",
    },
    {
      title: "OUR SERVICES",
      description:
        "We craft powerful brands identities, We manage and scale your presence by reaching you to the right audience. Every campaign is built with clear goal. We help your business get discovered organically through search engines.",
      path: "/servicedetails",
    },
  ];

  return (
    <div className="bg-[url('/bgb.png')] bg-cover bg-center bg-no-repeat overflow-x-hidden">
      
      {/* Heading */}
      <div className="text-center pt-28 px-4">
        <h2 className="text-3xl sm:text-5xl font-light tracking-normal sm:tracking-[0.35em] uppercase">
          <span className="text-[#c4ec0d]">Learn</span>
          <span className="text-white">.</span>
          <span className="text-[#5b21b6]">Build</span>
          <span className="text-white">.</span>
          <span className="text-[#c4ec0d]">Earn</span>
        </h2>
      </div>

      {/* Cards Section */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-10 py-10">
        <div className="flex flex-wrap gap-8 justify-center">
          
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative w-full max-w-[300px] h-[360px] rounded-2xl p-[1px] 
              bg-transparent
              hover:bg-gradient-to-br hover:from-[#c4ec0d]/60 hover:via-[#5b21b6]/60 hover:to-[#c4ec0d]/40
              shadow-[0_0_60px_rgba(153,211,51,0.03)] transition-all duration-500"
            >
              {/* Inner Card */}
              <div
                className="relative h-full rounded-2xl p-6 flex flex-col justify-between overflow-hidden 
                group-hover:-translate-y-2 transition-all duration-500"
              >
                {/* Background */}
                <div
                  className="absolute inset-0 rounded-2xl 
                  bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#1b1230]
                  opacity-10 group-hover:opacity-100
                  transition-all duration-500"
                />

                {/* Content */}
                <div className="relative z-10 text-white flex flex-col items-center text-center">
                  <h2 className="text-2xl pt-12 font-semibold leading-snug mb-4 tracking-wide">
                    {card.title}
                  </h2>

                  <p className="text-sm opacity-80 leading-relaxed px-2">
                    {card.description}
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={() => navigate(card.path)}
                  className="relative z-10 mt-6 px-3 py-2 rounded-full
                  border border-[#c4ec0d]/40
                  bg-black/30 backdrop-blur-sm
                  flex items-center gap-3
                  text-sm font-semibold tracking-[0.25em]
                  hover:tracking-[0.35em]
                  transition-all duration-500 hover:scale-105"
                >
                  <span className="text-[#c4ec0d]">SEE MORE</span>
                  <span className="text-white transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}