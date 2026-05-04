import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function CourseDetails() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "App Development",
      route: "/ad",
      description:
        "Learn to create native iOS and Android apps with Flutter and React Native.",
      logo: "/logo3.jpeg",
    },
    {
      title: "Software Development",
      route: "/sd",
      description:
        "Master HTML, CSS, JavaScript, React, and backend technologies for modern web apps.",
      logo: "/logo3.jpeg",
    },
    {
      title: "Graphic Designing",
      route: "/gd",
      description:
        "Develop skills in visual design, UI/UX, branding, and industry standard design software.",
      logo: "/logo3.jpeg",
    },
    {
      title: "Digital Marketing",
      route: "/dm",
      description:
        "Learn SEO, social media marketing, content creation, and analytics for effective digital campaigns.",
      logo: "/logo3.jpeg",
    },
   
  ];

  // Categorize cards
  const developmentCards = cards.filter(
    (card) =>
      card.title !== "Graphic Designing" &&
      card.title !== "Digital Marketing"
  );

  const designingCards = cards.filter(
    (card) => card.title === "Graphic Designing"
  );

  const marketingCards = cards.filter(
    (card) => card.title === "Digital Marketing"
  );

  // Reusable renderer
  const renderCards = (cardList) =>
    cardList.map((card, i) => {
      const isSpecial = i % 3 === 0;

      return (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className={`group rounded-2xl p-[1px] ${
            isSpecial
              ? "bg-gradient-to-br from-[#c4ec0d]/60 via-[#5b21b6]/60 to-[#c4ec0d]/40 shadow-[0_0_60px_rgba(183,211,51,0.15)]"
              : "bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a]"
          }`}
        >
          <div
            className={`rounded-2xl p-6 h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 ${
              isSpecial
                ? "bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#1b1230]"
                : "bg-[#0b0b0b]"
            } group-hover:shadow-[0_0_40px_rgba(68,45,130,0.25)]`}
          >
            {/* Logo */}
            <div className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-5">
              <img
                src={card.logo}
                alt={card.title}
                className={`object-contain ${
                  isSpecial ? "w-10 h-10" : "w-8 h-8"
                }`}
              />
            </div>

            {/* Title */}
            <h3
              className={`font-semibold tracking-wide text-white ${
                isSpecial ? "text-2xl mb-4" : "text-2xl mb-4"
              }`}
            >
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-6 flex-1">
              {card.description}
            </p>

            {/* Button */}
            <button
              onClick={() => navigate(card.route)}
              className="mt-6 px-3 py-2 rounded-full border border-[#c4ec0d]/40 bg-black/30 backdrop-blur-sm flex items-center gap-3 text-sm font-semibold tracking-[0.25em] hover:tracking-[0.35em] transition-all duration-500 hover:scale-105 self-start"
            >
              <span className="text-[#c4ec0d]">EXPLORE</span>
              <span className="text-white group-hover:translate-x-1 transition-transform duration-500">
                →
              </span>
            </button>
          </div>
        </motion.div>
      );
    });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen w-full  py-20 pt-38 px-6 text-white relative overflow-hidden"
    >
      {/* Background styles */}
      <style>{`
        @keyframes blob1 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(80px, -60px) scale(1.1); }
          66% { transform: translate(-60px, 40px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blob2 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-70px, 50px) scale(1.2); }
          66% { transform: translate(60px, -40px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blob3 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(40px, 30px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .blob1 { animation: blob1 18s infinite; }
        .blob2 { animation: blob2 22s infinite; }
        .blob3 { animation: blob3 20s infinite; }
      `}</style>

      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-[#c4ec0d]/10 rounded-full blur-[120px] blob1 top-[-200px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-[#5b21b6]/20 rounded-full blur-[120px] blob2 bottom-[-200px] right-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] blob3 top-[40%] left-[40%]" />
      </div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Development */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {renderCards(developmentCards)}
          </div>
        </div>

        {/* Designing */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Designing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {renderCards(designingCards)}
          </div>
        </div>

        {/* Marketing */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {renderCards(marketingCards)}
          </div>
        </div>

      </div>
    </motion.div>
  );
}