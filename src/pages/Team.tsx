import { FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/Navbar";

const Team = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Intro Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Our people make us <span className="text-blue-600">great</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals behind our chapter – driving growth,
            innovation, and community impact.
          </p>
        </div>

        {/* Admin Team */}
        <Section title="Admin Team">
          <TeamMember
            name="Naina Thippani"
            role="Chapter Organizer"
            image="https://i.pravatar.cc/300?img=9"
            linkedin="#"
          />
          <TeamMember
            name="Gouthami"
            role="Chapter Co-organizer"
            image="https://i.pravatar.cc/300?img=9"
            linkedin="#"
          />
        </Section>

        {/* Non-Tech Team */}
        <Section title="Non-Tech Team">
          <TeamMember
            name="Mahathi"
            role="Design Lead"
            image="https://i.pravatar.cc/300?img=9"
            linkedin="#"
          />
          <TeamMember
            name="Lokesh"
            role="Marketing"
            image="https://i.pravatar.cc/300?img=11"
            linkedin="#"
          />
          <TeamMember
            name="Rahul"
            role="Social Media"
            image="https://i.pravatar.cc/300?img=11"
            linkedin="#"
          />
          <TeamMember
            name="Adarsh"
            role="Event Management"
            image="https://i.pravatar.cc/300?img=12"
            linkedin="#"
          />
          <TeamMember
            name="Sriram"
            role="Logistics Lead"
            image="https://i.pravatar.cc/300?img=13"
            linkedin="#"
          />
        </Section>

        {/* Tech Team */}
        <Section title="Tech Team">
          <TeamMember
            name="Prahan Gundala"
            role="Technical Lead"
            image="https://i.pravatar.cc/300?img=14"
            linkedin="#"
          />
          <TeamMember
            name="Sumith"
            role="Technical Co-lead"
            image="https://i.pravatar.cc/300?img=15"
            linkedin="#"
          />
          <TeamMember
            name="Poojith"
            role="AI/ML Lead"
            image="https://i.pravatar.cc/300?img=16"
            linkedin="#"
          />
          <TeamMember
            name="Pavan"
            role="Full Stack Lead"
            image="https://i.pravatar.cc/300?img=11"
            linkedin="#"
          />
        </Section>
      </main>

      <footer className="bg-gray-50 py-6 text-center text-gray-500 text-sm border-t">
        <p>© 2025 GDGOC GRIET. All rights reserved.</p>
      </footer>
    </div>
  );
};

/* Section Wrapper */
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-20">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 justify-items-center">
      {children}
    </div>
  </section>
);


/* Team Member Card */
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const TeamMember = ({ name, role, image, linkedin }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-gray-200 shadow-md"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600 text-base mb-3">{role}</p>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors text-3xl"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};


export default Team;
