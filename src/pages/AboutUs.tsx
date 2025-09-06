import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const AboutUs = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, delayChildren: 0.3, staggerChildren: 0.15 },
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      <motion.main
        className="relative z-10 pt-32"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-gray-900 tracking-tight"
            variants={headingVariants}
          >
            About GDG on Campus
          </motion.h1>

          <div className="space-y-10">
            {/* Card 1 */}
            <motion.div
              className="bg-white shadow-lg rounded-2xl p-10 hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200"
              variants={paragraphVariants}
            >
              <p className="mb-4 text-lg md:text-xl text-gray-700 leading-relaxed">
                <strong>Google Developer Groups (GDG) on Campus</strong> are
                student-led communities designed to empower university students
                with the latest Google technologies. They offer hands-on
                learning experiences, mentorship, and opportunities to
                collaborate on real-world projects.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white shadow-lg rounded-2xl p-10 hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200"
              variants={paragraphVariants}
            >
              <p className="mb-4 text-lg md:text-xl text-gray-700 leading-relaxed">
                Members of GDG on Campus participate in workshops, hackathons,
                tech talks, and coding competitions. These activities help
                students build technical skills, explore emerging technologies
                like AI, Cloud, and Web Development, and gain practical
                experience beyond classroom learning.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white shadow-lg rounded-2xl p-10 hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200"
              variants={paragraphVariants}
            >
              <p className="mb-4 text-lg md:text-xl text-gray-700 leading-relaxed">
                GDG on Campus connects students to the global GDG network,
                providing access to a worldwide community of developers,
                mentors, and Google experts. This fosters collaboration,
                networking, and knowledge sharing on a global scale.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="bg-white shadow-lg rounded-2xl p-10 hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200"
              variants={paragraphVariants}
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                By participating in GDG on Campus activities, students enhance
                technical expertise, develop leadership skills, and prepare for
                successful careers in technology, while contributing to the
                broader developer ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>

      <footer className="relative z-10 bg-white py-6 text-center text-gray-500 text-sm mt-12">
        <p>© 2025 GDG on Campus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
