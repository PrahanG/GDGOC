import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full py-2 px-6 bg-white shadow-sm flex justify-between items-center z-50 font-sans text-xl md:text-2xl text-gray-700">
      
      {/* Logo */}
      <div className="flex items-center">
        <div className="h-20 w-20 md:h-20 md:w-20">
          <img
            src="/GDG23_IG_Sticker_01_v01.gif"
            alt="GDG Sticker Brackets"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Centered Desktop Links */}
      <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
        <NavLink href="/" active>Home</NavLink>
        <NavLink href="/about">About Us</NavLink>
        <NavLink href="/events">Events</NavLink>
        <NavLink href="/team">Team</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
      </div>

      {/* Mobile Menu Button (right side) */}
      <div className="md:hidden ml-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start p-4 space-y-4 md:hidden">
          <NavLink href="/" active>Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/team">Team</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </div>
      )}
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
        "text-gray-600 hover:text-gray-900 transition-colors font-sans text-lg md:text-xl",
        active && "text-gray-900"
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;
