import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [backgroundDots, setBackgroundDots] = useState<
    { x: number; y: number; color: string }[]
  >([]);

  const googleColors = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"];

  useEffect(() => {
    const generateDots = () => {
      const newDots: { x: number; y: number; color: string }[] = [];

      for (let i = 0; i < 50; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const color =
          googleColors[Math.floor(Math.random() * googleColors.length)];
        newDots.push({ x, y, color });
      }

      setBackgroundDots(newDots);
    };

    generateDots();

    const handleResize = () => {
      generateDots();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, delayChildren: 0.3, staggerChildren: 0.1 },
    },
  };

  const headingVariants = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Dots */}
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

      <Navbar />

      <motion.main
        className="relative z-10 pt-32"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.h1
            className="text-4xl font-bold text-center mb-8 text-gray-800"
            variants={headingVariants}
          >
            About Google Student Developers Club GRIET
          </motion.h1>

          {/* Card wrapper for hover effect */}
          <div className="transition transform hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-400/40 border border-gray-300 rounded-lg duration-300 ease-in-out">
            <motion.div
              className="bg-white rounded-lg p-8"
              variants={paragraphVariants}
            >
              <motion.p
                className="mb-6 text-lg text-gray-700"
                variants={paragraphVariants}
              >
                Welcome to the Google Student Developers Club (GDSC) at GRIET! We
                are a vibrant community passionate about Google's cutting-edge
                technologies and dedicated to fostering a culture of learning and
                collaboration among students.
              </motion.p>

              <motion.p
                className="mb-6 text-lg text-gray-700"
                variants={paragraphVariants}
              >
                Our mission is to bridge the gap between theory and practice by
                providing hands-on workshops, insightful speaker sessions,
                exciting hackathons, collaborative study jams, and engaging
                social events.
              </motion.p>

              <motion.p
                className="mb-6 text-lg text-gray-700"
                variants={paragraphVariants}
              >
                We focus on a wide range of Google technologies, including
                Android development, Web development with Flutter and Angular,
                Machine Learning with TensorFlow, Cloud Computing with Google
                Cloud Platform, and much more.
              </motion.p>

              <motion.p
                className="text-lg text-gray-700"
                variants={paragraphVariants}
              >
                Join us on this exciting journey of exploration and innovation.
                Together, we can learn, build amazing projects, and make a
                positive impact on our community and beyond. Stay tuned for our
                upcoming events and opportunities to get involved!
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.main>

      <footer className="relative z-10 bg-white py-6 text-center text-gray-500 text-sm">
        <p>© 2025 GDGOC GRIET. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;