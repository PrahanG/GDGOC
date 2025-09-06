import { FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/Navbar";

const Team = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      
      <Navbar />
      <br />
      <br />
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

                {/* Tech Team */}
        <Section title="Faculty Coordinator">
          <TeamMember
            name="Dr. P. Sanjeeva"
            role="GDGoC GRIET Coordinator"
            image="/GDG Leads/sanjeeva.jpg"
            linkedin="#"
          />
        </Section>
        {/* Admin Team */}
        <Section title="Admin Team">
          <TeamMember
            name="Naina Thippani"
            role="Chapter Organizer"
            image="/GDG Leads/naina.jpg"
            linkedin="https://www.linkedin.com/in/naina-thippani-99a095299/"
          />

          <TeamMember
            name="Gowthami Neelapu"
            role="Executive Lead"
            image="/GDG Leads/gowthami.jpg"
            linkedin="https://www.linkedin.com/in/gowthami-n-805208303/"
          />
          <TeamMember
            name="Prahan Gundala"
            role="Technical Lead"
            image="/GDG Leads/prahan.jpg"
            linkedin="https://www.linkedin.com/in/prahan-gundala/"
          />
          <TeamMember
            name="Sumith Chandra Nuka"
            role="Technical Co-lead"
            image="/GDG Leads/Sumith.jpg"
            linkedin="https://www.linkedin.com/in/sumith-chandra-nuka/"
          />
          <TeamMember
            name="Sunaina Kancharla"
            role="Non-Technical Lead"
            image="/GDG Leads/Sunaina.jpg"
            linkedin="#"
          />
          <TeamMember
            name="Joshika Andhavarapu"
            role="Non-Technical Co-lead"
            image="/GDG Leads/Joshika.jpg"
            linkedin="https://www.linkedin.com/in/andhavarapu-joshika-6971a1311/"
          />
        </Section>


        {/* Tech Team */}
        <Section title="Tech Team">
          <TeamMember
            name="Poojith Jasti"
            role="AI/ML Lead"
            image="/GDG Leads/poojith.jpg"
            linkedin="https://www.linkedin.com/in/jasti-poojith-sai-b03423283/"
          />
          <TeamMember
            name="Pavan Sai Teja Ganapavarapu "
            role="Full Stack Lead"
            image="/GDG Leads/PavanSaiTeja.jpg"
            linkedin="https://www.linkedin.com/in/pavansaiteja/"
          />
        </Section>
        {/* Non-Tech Team */}
        <Section title="Non-Tech Team">
          <TeamMember
            name="Mahathi Mahasiv"
            role="Design Lead"
            image="/GDG Leads/mahati.jpg"
            linkedin="https://www.linkedin.com/in/mahathi-mahasiv-bb7a8830a/"
          />
          <TeamMember
            name="Lokesh"
            role="Marketing"
            image="/GDG Leads/lokesh.jpg"
            linkedin="#"
          />
          <TeamMember
            name="Rahul Padala"
            role="Social Media"
            image="/GDG Leads/Rahul.jpg"
            linkedin="https://www.linkedin.com/in/padala-rahul-13b28b299/"
          />
          <TeamMember
            name="Adarsh Kumar Singh"
            role="Event Management"
            image="/GDG Leads/adarsh.jpg"
            linkedin="https://www.linkedin.com/in/adarsh-kumar-singh-4b042b28a/"
          />
          <TeamMember
            name="Sriram Rishvith Paladugu"
            role="Logistics Lead"
            image="/GDG Leads/sriram.jpg"
            linkedin="https://www.linkedin.com/in/sriram-rishvith-paladugu-ba507b332/"
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
