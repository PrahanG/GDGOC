import Navbar from "@/components/Navbar";

const Departments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <br />
          <br />
          <h1 className="text-4xl font-bold mb-8">Departments</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DepartmentCard 
              name="Technical" 
              description="Responsible for workshops, technical sessions, and hackathons."
              icon="💻"
            />
            <DepartmentCard 
              name="Design" 
              description="Creates visual content, UI/UX designs, and branding materials."
              icon="🎨"
            />
            <DepartmentCard 
              name="Marketing" 
              description="Handles promotion, outreach, and community engagement."
              icon="📢"
            />
            <DepartmentCard 
              name="Event Management" 
              description="Organizes and coordinates all GDGOC GRIET events."
              icon="📆"
            />
          </div>
        </div>
      </main>
      
      <footer className="bg-white py-6 text-center text-gray-500 text-sm">
        <p>© 2025 GDGOC GRIET. All rights reserved.</p>
      </footer>
    </div>
  );
};

interface DepartmentCardProps {
  name: string;
  description: string;
  icon: string;
}

const DepartmentCard = ({ name, description, icon }: DepartmentCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
          {icon}
        </div>
        <h3 className="text-xl font-medium">{name}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Departments;
