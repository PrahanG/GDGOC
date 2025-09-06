import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      <motion.main
        className="pt-32"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-gray-900 tracking-tight"
            variants={itemVariants}
          >
            Contact Us
          </motion.h1>

          <motion.div
            className="bg-white shadow-2xl rounded-3xl p-10 space-y-10"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 text-lg">
                Have questions about GDGOC GRIET? Want to join us or collaborate? Reach out to us!
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-3 gap-8" variants={itemVariants}>
              {/* Email */}
              <motion.div
                className="flex flex-col items-center p-6 bg-blue-50 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
                variants={itemVariants}
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl mb-4">
                  📧
                </div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-800 text-center">gdgocgriet@gmail.com</p>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex flex-col items-center p-6 bg-green-50 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
                variants={itemVariants}
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl mb-4">
                  📱
                </div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-800 text-center">+91 8519838150</p>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex flex-col items-center p-6 bg-purple-50 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
                variants={itemVariants}
              >
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-2xl mb-4">
                  📍
                </div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-gray-800 text-center">
                  GRIET Campus, Hyderabad, India
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>

      <footer className="bg-white py-6 text-center text-gray-500 text-sm mt-12">
        <p>© 2025 GDGOC GRIET. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
