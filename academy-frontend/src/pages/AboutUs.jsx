import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-black text-gray-300 pt-25 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Story
        </h2>

        {/* Gradient underline using your colors */}
        <div className="w-24 h-1 mx-auto mb-10 rounded-full bg-gradient-to-r from-[#c4ec0d] to-[#5b21b6]"></div>

        {/* Content */}
        <p className="text-lg leading-relaxed mb-6">
          KOD.BRAND Academy was born out of a simple yet powerful dream shared
          by four friends during our college days — a dream to reshape education
          into something more meaningful, joyful, and accessible. We weren't just
          students; we were passionate changemakers who believed that learning
          should inspire, not exhaust.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          What started as casual conversations under college roofs soon grew into
          a mission: to create a space where students could discover real-world
          skills through practical, engaging, and industry-relevant education.
        </p>

        <p className="text-lg leading-relaxed">
          KOD.BRAND isn't just a name — it's a symbol of{" "}
          <span className="text-[#c4ec0d] font-semibold">freshness</span> in{" "}
          <span className="text-[#5b21b6] font-semibold">learning</span>, built with
          heart, ambition, and the belief that every student deserves more than
          just a degree classroom.
        </p>

      </div>
    </section>
  );
};

export default AboutUs;