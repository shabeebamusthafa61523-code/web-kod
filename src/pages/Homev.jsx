import { useEffect, useRef, useState } from "react";

const images = [
  "/neww.jpg",
  "/neww.jpg",
  "/neww.jpg",
  "/neww.jpg",
  "/neww.jpg",
];

export default function Homev() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight - windowHeight;

      const scrollFraction = scrollTop / docHeight;
      const newIndex = Math.min(
        images.length - 1,
        Math.floor(scrollFraction * images.length)
      );

      setIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-10 h-[400vh] text-white">
      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center"
      >
        <img
          src={images[index]}
          alt="scroll visual"
          className="w-full h-full object-cover transition-opacity duration-700"
        />
      </div>

      <div className="relative z-10 p-10 text-white">
        <h1 className="text-4xl font-bold">Scroll to change images</h1>
        <p className="mt-4">Images change based on scroll position.</p>
      </div>
    </div>
  );
}
