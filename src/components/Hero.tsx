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
    <div className="relative overflow-hidden py-8 sm:py-12 md:py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading + GIF */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-sans leading-none text-center sm:text-left">
  {[ 
    { text: "G", color: "#EF4444" },
    { text: "D", color: "#FACC15" },
    { text: "Go", color: "#22C55E" },
    { text: "C", color: "#3B82F6" },
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
  <span className="inline-block">&nbsp;</span>
  {"GRIET".split("").map((char, index) => {
    const colors = ["#EF4444", "#FACC15", "#22C55E", "#3B82F6", "#10B981"];
    return (
      <span
        key={index}
        className="inline-block animate-title-pop"
        style={{
          animationDelay: `${(index + 4) * 0.2}s`,
          color: colors[index % colors.length],
        }}
      >
        {char}
      </span>
    );
  })}
</h1>


          {/* GIF */}
          <img
            src="/GDG-Sticker-Brackets.gif"
            alt="GDG Sticker"
            className="mt-4 sm:mt-0 h-12 sm:h-16 md:h-20 lg:h-28 object-contain"
          />
        </div>

        {/* Subheading */}
        <h2 className="text-base sm:text-lg md:text-xl text-gray-700 flex gap-1 items-center mt-6 justify-center sm:justify-start">
          Empowering students through{" "}
          <span key={fadeKey} className="text-red-500 font-medium animate-slide-in">
            {techTerms[currentIndex]}
          </span>{" "}
          technology.
        </h2>

        {/* Programs Section */}
        <div className="w-full mt-12">
          <div className="flex items-center mb-6 gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-sm">💡</span>
            </div>
            <h3 className="text-xl font-medium text-blue-600">
              Explore Our Impactful Programs
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center sm:justify-start">
            <a
              href="https://gdg.community.dev/gdg-on-campus-gokaraju-rangaraju-institute-of-engineering-technology-hyderabad-india/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 text-center"
            >
              Join Community
            </a>
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
