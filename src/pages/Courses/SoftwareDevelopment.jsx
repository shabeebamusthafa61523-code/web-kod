import React from "react";
import { useNavigate } from "react-router-dom";

const cards = [
  //   {
  //   title: "React",
  //   description:
  //     "React is a JavaScript library for building fast, interactive user interfaces for web applications.",
  //   path: "/re",
  // },
  // {
  //   title: "Node",
  //   description:
  //     "Node.js is a powerful backend runtime for building scalable server-side applications.",
  //   path: "/node",
  // },
  
  {
    title: "Python",
    description:
      "Python is widely used for backend development, APIs, and data-driven applications.",
    path: "/python",
  },
  {
    title: "MERN Stack",
    description:
      "The MERN Stack is a full-stack development framework that enables you to build modern, scalable web applications using a single language—JavaScript.",
    path: "/mr",
  },
  // {
  //   title: "React + Python",
  //   description:
  //     "React + Python is a powerful full-stack combination that blends backend strength with dynamic frontend UI.",
  //   path: "/py",
  // },
  // {
  //   title: "Flutter + Python",
  //   description:
  //     "Flutter and Python together allow you to build cross-platform apps with strong backend support.",
  //   path: "/fl",
  // },

];

export default function PremiumCards() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black pt-36 pb-28 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-[#2a2a2a] via-[#333] to-[#111] hover:from-[#c4ec0d] hover:via-[#8fa92a] hover:to-[#5b21b6] transition duration-500"
            >
              <div className="h-full min-h-[320px] w-full rounded-2xl bg-black p-6 flex flex-col justify-between shadow-xl group-hover:shadow-2xl transition duration-500">
                <div>
                  <h2 className="text-white text-3xl font-extrabold text-center mb-3 tracking-wide">
                    {card.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed text-center">
                    {card.description}
                  </p>
                </div>

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

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 blur-2xl bg-gradient-to-br from-[#c4ec0d] via-[#8fa92a] to-[#5b21b6] transition duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}