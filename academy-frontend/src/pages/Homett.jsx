import { useRef } from "react";
import Hero from "./Hero";
import Services from "../components/Services";


const videoSrc = "/video.mp4"; // place inside public folder

const overlay = "bg-black/10";

const navLinks = ["Home", "Courses", "About Us", "Contact"];

export default function Homett() {
  const videoRef = useRef(null);

  return (
    <div className="bg-black text-white">
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-center">
          <ul className="flex items-center space-x-12 font-semibold">
            {navLinks.map((link, i) => (
              <li
                key={i}
                className="relative cursor-pointer group text-lg tracking-wide"
              >
                <span
                  className="inline-block"
                  style={{
                    background:
                      "linear-gradient(90deg, #6b7280, #ffffff, #9ca3af, #d1d5db, #4b5563)",
                    backgroundSize: "300% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "silverFlow 4s linear infinite",
                  }}
                >
                  {link}
                </span>

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-gray-500 via-gray-200 to-gray-400 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </div>

        <style>
          {`
            @keyframes silverFlow {
              0% { background-position: 300% center; }
              100% { background-position: -300% center; }
            }
          `}
        </style>
      </nav>

      {/* VIDEO HERO */}
      <div className="relative h-screen">
        <div className="relative w-full max-w-6xl h-screen overflow-hidden mx-auto">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-90"
            onEnded={(e) => {
              e.currentTarget.pause();
            }}
          />

          <div className={`absolute inset-0 ${overlay}`} />
        </div>
      </div>

      <Hero />
      <Services />
    </div>
  );
}
