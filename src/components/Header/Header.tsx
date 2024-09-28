import { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "docs", label: "Docs" },
    { to: "product", label: "Product" },
    { to: "playground", label: "Playground" },
  ];

  const socialLinks = [
    { href: "https://github.com/xshshahab", icon: <FiGithub size={24} /> },
    { href: "https://x.com/xsh_shahab", icon: <FaXTwitter size={24} /> },
  ];

  return (
    <>
      {/* Transparent navbar with glassmorphism effect */}
      <nav
        className={`fixed z-20 flex items-center justify-between w-full py-2.5 px-5 transition-all duration-300 ${
          isScrolled
            ? "bg-black/30 backdrop-blur-md bg-opacity-80 shadow-md"
            : "bg-transparent"
        }`}
      >
        {/* Left side with logo */}
        <div className="flex items-center gap-3 font-bold text-white">
          <Link to="/" className="flex items-center text-2xl">
            Unlok <span className="ml-1.5 font-bold text-green-500">Dev</span>
          </Link>
        </div>

        {/* Navigation links and social icons for larger screens */}
        <div className="items-center hidden gap-4 md:flex">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="font-semibold text-white hover:text-green-500"
            >
              {label}
            </Link>
          ))}
          <div className="w-0.5 h-6 bg-white bg-opacity-20" />

          {socialLinks.map(({ href, icon }) => (
            <a
              key={href}
              href={href}
              className="font-semibold text-white hover:text-green-500"
            >
              {icon}
            </a>
          ))}
          <div className="w-0.5 h-6 bg-white bg-opacity-20" />

          {/* Login and Sign Up buttons */}
          <button className="gap-2 font-semibold text-green-500 transition duration-300 hover:text-green-600">
            Login
          </button>
          <button className="px-2.5 py-1.5 font-semibold text-white bg-green-500 rounded transition duration-300 hover:bg-green-600">
            Sign Up
          </button>
        </div>

        {/* Menu icon for small screens */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleSidebar}>
            <RiMenu3Fill size={24} className="text-white" />
          </button>
        </div>
      </nav>

      {/* Sidebar for mobile view */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-neutral-950 text-white shadow-lg transition-transform duration-300 ease-in-out z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close button for the sidebar */}
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar}>
            <IoClose size={24} className="text-white" />
          </button>
        </div>

        {/* Sidebar navigation links displayed in a column layout */}
        <div className="flex flex-col gap-3 p-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={toggleSidebar}
              className="font-semibold text-white hover:text-green-500"
            >
              {label}
            </Link>
          ))}
          <div className="w-full h-px my-4 bg-white bg-opacity-20" />

          {socialLinks.map(({ href, icon }) => (
            <a
              key={href}
              href={href}
              onClick={toggleSidebar}
              className="font-semibold text-white hover:text-green-500"
            >
              {icon}
            </a>
          ))}
          <div className="w-full h-px my-4 bg-white bg-opacity-20" />

          {/* Login and Sign Up buttons in sidebar */}
          <button
            onClick={toggleSidebar}
            className="w-1/2 px-2 py-2 mt-4 font-semibold text-green-500 transition duration-300 text-start hover:text-green-600"
          >
            Login
          </button>
          <button
            onClick={toggleSidebar}
            className="w-1/2 px-1 py-2 mt-2 font-semibold text-white transition duration-300 bg-green-500 rounded hover:bg-green-600"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
