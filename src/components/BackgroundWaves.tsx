// components/BackgroundWaves.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundWaves = () => {
  const [grid, setGrid] = useState<{ hLines: string[]; vLines: string[] }>({
    hLines: [],
    vLines: [],
  });

  useEffect(() => {
    const generateGrid = () => {
      const hLines: string[] = [];
      const vLines: string[] = [];

      const cols = 20;
      const rows = 15;
      const spacingX = window.innerWidth / cols;
      const spacingY = window.innerHeight / rows;

      // Generate horizontal paths
      for (let y = 0; y <= window.innerHeight; y += spacingY) {
        let path = `M 0 ${y}`;
        for (let x = 0; x <= window.innerWidth; x += spacingX) {
          const offset = Math.sin((x / window.innerWidth) * Math.PI * 2 + y / 100) * 10;
          path += ` L ${x} ${y + offset}`;
        }
        hLines.push(path);
      }

      // Generate vertical paths
      for (let x = 0; x <= window.innerWidth; x += spacingX) {
        let path = `M ${x} 0`;
        for (let y = 0; y <= window.innerHeight; y += spacingY) {
          const offset = Math.sin((y / window.innerHeight) * Math.PI * 2 + x / 100) * 10;
          path += ` L ${x + offset} ${y}`;
        }
        vLines.push(path);
      }

      setGrid({ hLines, vLines });
    };

    generateGrid();
    window.addEventListener("resize", generateGrid);
    return () => window.removeEventListener("resize", generateGrid);
  }, []);

  return (
    <svg
      className="absolute inset-0 z-0 pointer-events-none"
      width="100%"
      height="100%"
    >
      {grid.hLines.map((d, i) => (
        <motion.path
          key={`h-${i}`}
          d={d}
          stroke="#D1D5DB"
          strokeWidth={1}
          fill="transparent"
          animate={{
            d: [
              d,
              d.replace(/(\d+\.\d+|\d+)/g, (n, idx) =>
                idx % 2 === 1 ? String(parseFloat(n) + Math.random() * 8 - 4) : n
              ),
              d,
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      {grid.vLines.map((d, i) => (
        <motion.path
          key={`v-${i}`}
          d={d}
          stroke="#D1D5DB"
          strokeWidth={1}
          fill="transparent"
          animate={{
            d: [
              d,
              d.replace(/(\d+\.\d+|\d+)/g, (n, idx) =>
                idx % 2 === 0 ? String(parseFloat(n) + Math.random() * 8 - 4) : n
              ),
              d,
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
};

export default BackgroundWaves;
