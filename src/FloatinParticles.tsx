import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

// Generate random positions
const getRandomPosition = () => ({
  top: `${Math.random() * 90}%`,
  left: `${Math.random() * 90}%`,
});

export const FloatingParticles = () => {
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 10 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 10 });

  const xTransform = useTransform(smoothX, [-200, 200], [-15, 15]);
  const yTransform = useTransform(smoothY, [-200, 200], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Define random shapes and sizes
  const shapes = [
    {
      type: "circle",
      size: 80,
      color: "rgba(59, 130, 246, 0.3)",
      ...getRandomPosition(),
    },
    {
      type: "blob",
      size: 100,
      color: "rgba(239, 68, 68, 0.3)",
      ...getRandomPosition(),
    },
    {
      type: "triangle",
      size: 70,
      color: "rgba(16, 185, 129, 0.3)",
      ...getRandomPosition(),
    },
    {
      type: "hexagon",
      size: 90,
      color: "rgba(245, 158, 11, 0.3)",
      ...getRandomPosition(),
    },
    {
      type: "blob",
      size: 120,
      color: "rgba(168, 85, 247, 0.3)",
      ...getRandomPosition(),
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute opacity-50"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            backgroundColor: shape.color,
            top: shape.top,
            left: shape.left,
            x: xTransform,
            y: yTransform,
            clipPath:
              shape.type === "blob"
                ? "polygon(25% 5%, 75% 0%, 100% 50%, 75% 100%, 25% 95%, 0% 50%)"
                : shape.type === "triangle"
                ? "polygon(50% 0%, 100% 100%, 0% 100%)"
                : shape.type === "hexagon"
                ? "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                : "circle(50% at 50% 50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            x: ["0%", `${Math.random() * 10 - 5}%`, "0%"],
            y: ["0%", `${Math.random() * 10 - 5}%`, "0%"],
            rotate:
              shape.type === "hexagon" || shape.type === "triangle"
                ? [0, 10, -10, 0]
                : 0,
          }}
          transition={{
            repeat: Infinity,
            duration: 6 + i,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
