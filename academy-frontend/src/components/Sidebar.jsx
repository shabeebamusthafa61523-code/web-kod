import { useEffect, useState } from "react";

export default function Sidebar() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <style>{`body { cursor: none; }`}</style>

      <div
        style={{
          position: "fixed",
          top: pos.y,
          left: pos.x,
          width: "18px",
          height: "18px",
          border: "1.5px solid black",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}