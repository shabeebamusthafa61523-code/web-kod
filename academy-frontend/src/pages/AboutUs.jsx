import React from "react";

const AboutUs = () => {
  return (
    <div className="relative z-10">
       <h1
          className="  font-geist text-white text-[80px] leading-[1.05] tracking-[-0.04em] text-[#111] pt-26 mb-18"
        >
          Simple <span className="font-instrument-serif italic text-[100px]">management</span>{" "}<br/>
          for your business
        </h1><br/>
    <section className="text-gray-300 pt-25 py-16 px-6 md:px-20 mb-28">
     
      <div className="max-w-4xl mx-auto text-start ">
        
        {/* Title */}
        <h2 className="text-2xl text-white mb-2">
          Our Story
        </h2>

        {/* glow underline */}
<div className=" w-24 h-[1px] mb-10 rounded-full bg-white/50 "></div>
        {/* Content */}
        <p className="text-lg leading-relaxed mb-6 text-start">
          KOD.BRAND Academy was born out of a simple yet powerful dream shared
          by four friends during our college days — a dream to reshape education
          into something more meaningful, joyful, and accessible. We weren't just
          students; we were passionate changemakers who believed that learning
          should inspire, not exhaust.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-start">
          What started as casual conversations under college roofs soon grew into
          a mission: to create a space where students could discover real-world
          skills through practical, engaging, and industry-relevant education.
        </p>

        <p className="text-lg leading-relaxed text-start">
          KOD.BRAND isn't just a name — it's a symbol of{" "}
          <span className="text-[#c4ec0d] font-semibold">freshness</span> in{" "}
          <span className="text-[#5b21b6] font-semibold">learning</span>, built with
          heart, ambition, and the belief that every student deserves more than
          just a degree classroom.
        </p>

      </div>
    </section>
    </div>
  );
};

export default AboutUs;