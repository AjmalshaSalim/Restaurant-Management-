import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/images/Gymsoft_Logo1-removebg-preview.png";
import ResponsiveNavbar from "./ResponsiveNavbar.jsx";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/home",

  },
  {
    id: 2,
    name: "Diet",
    link: "/diet",

  },
  {
    id: 3,
    name: "Equipments",
    link: "/equipments",

  },
  {
    id: 4,
    name: "Trainers",
    link: "/community",

  },
  {
    id: 5,
    name: "Profile",
    link: "/profile",

  },
  {
    id: 6,
    name: "Slot-Booking",
    link: "/slot-booking",

  },

];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef();
  const menuButtonRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className={`text-white fixed top-0 left-0 w-full z-50 ${isScrolled ? 'bg-black transition-colors duration-500' : 'bg-transparent'}`} ref={navbarRef}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center" data-aos="fade-down" data-aos-once="true">
          <button
            className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2 tracking-wider"
            onClick={() => {/* handle action here */ }}
          >
            <img src={Logo} alt="Logo" className="w-36 sm:w-36 md:w-64" />
          </button>
        </div>


        <div className="md:hidden">
          <button onClick={toggleMenu} ref={menuButtonRef}>
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Responsive Navbar for mobile devices */}
        {isMenuOpen && <ResponsiveNavbar showMenu={isMenuOpen} />}

        {/* Link section for larger screens */}
        <div
          className="hidden md:flex items-center gap-0"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <ul className="flex flex-row items-center gap-4">
            {Menu.map((menu) => (
              <li key={menu.id} className="relative group">
                <Link
                  to={menu.link}
                  className="text-sm sm:text-base md:text-lg lg:text-base py-2 px-2 hover:text-red-900 transition duration-200 flex items-center gap-2"
                >
                  <span className="align-middle font-poppins">{menu.name}</span>
                </Link>
                {/* third hover effect */}
                <p className="absolute -bottom-1 left-0 w-full">
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-red-900 transition-all group-hover:w-full"></span>
                </p>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
