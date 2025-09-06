
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-8 bg-white shadow-sm flex justify-between items-center z-50">

      <div className="flex items-center">
        {/* Logo */}
        <div className="flex items-center">
  {/* Logo */}
  <div className="h-12 w-12">
<img
  src="/GDG-Sticker-Brackets.gif"
  alt="GDG Sticker Brackets"
  className="h-100 object-contain"
/>


  </div>
</div>

</div>
      
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <NavLink href="/" active>Home</NavLink>
        <NavLink href="/about">About Us</NavLink>
        <NavLink href="/events">Events</NavLink>
        <NavLink href="/departments">Departments</NavLink>
        <NavLink href="/team">Team</NavLink>
      </div>
      
      {/* Contact and Google Logo */}
      <div className="flex items-center space-x-4">
        <NavLink href="/contact">Contact Us</NavLink>
        {/* <div>
          <div className="w-6 h-6 relative">
            <div className="absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-tl-full"></div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-tr-full"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-green-500 rounded-bl-full"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 rounded-br-full"></div>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink = ({ href, children, active }: NavLinkProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "text-gray-600 hover:text-blue-500 transition-colors font-medium",
        active && "text-blue-500"
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;
