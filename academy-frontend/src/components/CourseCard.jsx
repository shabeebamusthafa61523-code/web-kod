import React from "react";

export default function CourseCard() {
  const cards = [
    {
      title: "App Development",
      description:
        "Learn to create native iOS and Android apps with Flutter and React Native.",
      color: "slate",
      logo: "/logo3.jpeg",
    },
    {
      title: "Software Development",
      description:
        "Master HTML, CSS, JavaScript, React, and backend technologies for modern web apps.",
      color: "slate",
      logo: "/logo3.jpeg",
    },
    {
      title: "Graphic Designing",
      description:
        "Develop skills in visual design, UI/UX, branding, and industry standard design software.",
      color: "slate",
      logo: "/logo3.jpeg",
    },
    {
      title: "Digital Marketing",
      description:
        "Learn SEO, social media marketing, content creation, and analytics for effective digital campaigns.",
      color: "slate",
      logo: "/logo3.jpeg",
    },
  ];

  const styles = {
    slate: {
      glow: "hover:shadow-slate-300/60",
      accent: "text-slate-600",
      bg: "from-slate-100 to-slate-50",
    },
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full px-4">
      <h2 className="text-3xl sm:text-4xl font-medium tracking-[0.15em] sm:tracking-[0.30em] leading-tight text-[#8E4585] px-4 text-center w-full">
          LEARN.BUILD.EARN
        </h2>

      </div>

      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl w-full [&:hover_.course-card:not(:hover)]:opacity-50 [&:hover_.course-card:not(:hover)]:blur-[1px]">
          {cards.map((card, i) => {
            const theme = styles[card.color];

            return (
              <div
                key={i}
                className={`course-card relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:z-10 hover:!opacity-100 hover:!blur-0 scale-95 ${theme.glow}`}
              >
                {/* Top Gradient Header */}
                <div className={`h-28 bg-gradient-to-br ${theme.bg} opacity-90`} />

                {/* Logo */}
                <div className="absolute top-4 left-4 h-14 w-14 rounded-2xl bg-black/90 flex items-center justify-center shadow-lg p-2">
                  <img
                    src={card.logo}
                    alt={card.title}
                    className="h-full w-full object-contain scale-150 rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="p-5 pt-6 flex flex-col min-h-[260px]">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 leading-6 text-sm mb-6 flex-1">
                    {card.description}
                  </p>

                  {/* Button */}
                  <button className="group mt-auto self-start font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 flex items-center">
                    <span>
                      <span className="text-[#b7d333] transition-colors duration-300 group-hover:text-[#442d82]">
                        EX
                      </span>
                      <span className="text-[#442d82] transition-colors duration-300 group-hover:text-[#b7d333]">
                        PLORE
                      </span>
                    </span>

                    <span className="ml-1 text-slate-700 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>

                {/* Bottom Glow */}
                <div
                  className={`absolute inset-x-6 bottom-0 h-6 blur-2xl opacity-60 bg-gradient-to-r ${theme.bg}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
