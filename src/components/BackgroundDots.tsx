// components/BackgroundDots.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const googleColors = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"];

const BackgroundDots = () => {
  const [backgroundDots, setBackgroundDots] = useState<
    { x: number; y: number; color: string }[]
  >([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = Array.from({ length: 50 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        color: googleColors[Math.floor(Math.random() * googleColors.length)],
      }));
      setBackgroundDots(newDots);
    };

    generateDots();
    window.addEventListener("resize", generateDots);
    return () => window.removeEventListener("resize", generateDots);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {backgroundDots.map((dot, index) => {
        const size = Math.random() * 8 + 8;
        const offsetX = Math.random() * 40 - 20;
        const offsetY = Math.random() * 40 - 20;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: dot.color,
            }}
            initial={{
              x: dot.x,
              y: dot.y,
              opacity: 0.6,
            }}
            animate={{
              x: dot.x + offsetX,
              y: dot.y + offsetY,
              opacity: 0.8,
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default BackgroundDots;
