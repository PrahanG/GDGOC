import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const techTerms = ["AI", "ML", "Blockchain", "IoT", "Cloud", "AR/VR"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % techTerms.length);
      setFadeKey((prevKey) => prevKey + 1); // force reanimation
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden py-16 px-8 bg-white">
      <div className="absolute left-100 top-300"></div>
      <div className="absolute right-36 top-48"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-start space-y-8">
          <h1 className="text-7xl font-extrabold font-sans relative inline-block">
              {[
                { text: "G", color: "#EF4444" }, // Tailwind red-500
                { text: "D", color: "#FACC15" }, // Tailwind yellow-400
                { text: "Go", color: "#22C55E" }, // same yellow
                { text: "C", color: "#3B82F6" }, // Tailwind blue-500
              ].map((part, index) => (
                <span
                  key={index}
                  className="inline-block animate-title-pop"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    color: part.color,
                  }}
                >
                  {part.text}
                </span>
              ))}

              {/* Add space between GDGoC and GRIET */}
              <span className="inline-block">&nbsp;</span>

              {"GRIET".split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block animate-title-pop"
                  style={{
                    animationDelay: `${(index + 4) * 0.2}s`, // continue after GDGoC
                    color: "#10B981", // Tailwind green-500
                  }}
                >
                  {char}
                </span>
              ))}

              {/* <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 via-indigo-500 to-purple-600 animate-pulse" /> */}
            </h1>

          <h2 className="text-xl text-gray-700 flex gap-1 items-center h-8">
            Empowering students through{" "}
            <span
              key={fadeKey}
              className="text-red-500 font-medium animate-slide-in"
            >
              {techTerms[currentIndex]}
            </span>{" "}
            technology.
          </h2>

          <div className="w-full mt-12">
            <div className="flex items-center mb-6 gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-sm">💡</span>
              </div>
              <h3 className="text-xl font-medium text-blue-600">Explore Our Impactful Programs</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OfferCard
                icon="G"
                title="Google Campaign"
                description="Connect with Google technologies and experts."
                iconBg="bg-white"
                iconColor="text-blue-500"
              />
              <OfferCard
                icon="</>"
                title="Coding Workshops"
                description="Hands-on workshops to enhance your skills."
                iconBg="bg-yellow-100"
                iconColor="text-yellow-600"
              />
              <OfferCard
                icon="💡"
                title="Innovative Projects"
                description="Collaborate on cutting-edge tech projects."
                iconBg="bg-green-100"
                iconColor="text-green-600"
              />
              <OfferCard
                icon="📈"
                title="Career Growth"
                description="Boost your career with industry connections."
                iconBg="bg-red-100"
                iconColor="text-red-600"
              />
            </div>

            <div className="flex gap-4 mt-10">
              <a
                href="https://gdg.community.dev/gdg-on-campus-gokaraju-rangaraju-institute-of-engineering-technology-hyderabad-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                Join Community
              </a>
              <Link
                to="/learn-more"
                className="px-6 py-3 bg-white text-blue-500 border border-blue-500 rounded-full hover:bg-blue-50 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OfferCard = ({ icon, title, description, iconBg, iconColor }) => {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div
          className={`h-10 w-10 rounded-md ${iconBg} flex items-center justify-center`}
        >
          <span className={`text-lg font-bold ${iconColor}`}>{icon}</span>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-2">{title}</h4>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
