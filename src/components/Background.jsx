import React from 'react';

const Background = ({ videoOpacity = 0.1, gridOpacity = 0.05 }) => {
  return (
    <div className="fixed inset-0 z-0 bg-black pointer-events-none">
      {/* 1. THE VIDEO LAYER */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: videoOpacity }}
      >
        <source src="/bgv.mp4" type="video/mp4" />
      </video>

      {/* 2. DEPTH GRADIENTS */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      
      {/* 3. TECHNICAL GRID SYSTEM */}
      <div 
        className="absolute inset-0"
        style={{ 
          opacity: gridOpacity,
          backgroundImage: `linear-gradient(to right, #ffffff1a 1px, transparent 1px), 
                            linear-gradient(to bottom, #ffffff1a 1px, transparent 1px)`,
          backgroundSize: '80px 80px' 
        }}
      />
      
      {/* 4. SOFT ACCENT GLOW */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[150px] rounded-full" />
    </div>
  );
};

export default Background;