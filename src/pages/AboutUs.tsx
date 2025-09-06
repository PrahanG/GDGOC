import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const AboutUs = () => {
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
    <div className="min-h-screen relative overflow-hidden bg-gray-50">
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
            About GDG on Campus
          </motion.h1>

          <div className="transition transform hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-400/40 border border-gray-300 rounded-lg duration-300 ease-in-out">
            <motion.div
              className="bg-white rounded-lg p-8"
              variants={paragraphVariants}
            >
              <motion.p
                className="mb-6 text-lg text-gray-700"
                variants={paragraphVariants}
              >
                <strong>Google Developer Groups (GDG) on Campus</strong> are student-led communities that aim to empower university students with the latest Google technologies. They provide hands-on learning experiences, mentorship, and opportunities to collaborate on real-world projects.
              </motion.p>

              <motion.p
                className="mb-6 text-lg text-gray-700"
                variants={paragraphVariants}
              >
                Members of GDG on Campus engage in workshops, hackathons, tech talks, and coding competitions. These activities help students build technical skills, explore emerging technologies like AI, Cloud, and Web Development, and gain practical experience beyond classroom learning.
              </motion.p>

              <motion.p
                className="mb-6 text-lg text-gray-700"
                variants={paragraphVariants}
              >
                GDG on Campus also connects students to the global GDG network, providing access to a wide community of developers, industry mentors, and Google experts. This fosters collaboration, networking, and knowledge sharing on a global scale.
              </motion.p>

              <motion.p
                className="text-lg text-gray-700"
                variants={paragraphVariants}
              >
                By participating in GDG on Campus activities, students enhance their technical expertise, develop leadership skills, and prepare for successful careers in technology while contributing to the broader developer ecosystem.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.main>

      <footer className="relative z-10 bg-white py-6 text-center text-gray-500 text-sm">
        <p>© 2025 GDG on Campus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
