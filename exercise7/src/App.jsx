import { useState, useEffect } from "react";

const MouseTracker = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Mouse X: {mouse.x}</h2>
      <h2>Mouse Y: {mouse.y}</h2>
    </div>
  );
};

export default MouseTracker;