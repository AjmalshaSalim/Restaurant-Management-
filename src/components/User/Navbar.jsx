import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/images/Gymsoft_Logo1-removebg-preview.png";
import ResponsiveNavbar from "./ResponsiveNavbar.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Avatar from '@mui/material/Avatar'; 
import {User_Profile} from "../../actions/UserActions"
import store from "../../store"

export const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/home",
  },
  {
    id: 2,
    name: "Diet",
    link: "/dietplansuser",
  },
  {
    id: 3,
    name: "Equipments",
    link: "/equipments",
  },
  {
    id: 4,
    name: "Trainers",
    link: "/Trainers",
  },
  {
    id: 5,
    name: "Slot-Booking",
    link: "/slot-booking",
  },
  {
    id: 6,
    name: "Profile",
    link: "/userprofile",
  },
];

const Navbar = () => {

  const navigate=useNavigate()
  const [profileDetails, setProfileDetails] = useState({
    first_name: "",
    last_name: "",
    profile_picture:null,
   
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef();
  const menuButtonRef = useRef();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchUserProfile=async()=>{
      try {
        const response=await User_Profile()
        setProfileDetails(response);
      } catch (error) {
        console.log(error);
      } 
    }
    fetchUserProfile()
  }, []);

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

  const handleLogout=()=>{
    store.dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('userAccessToken');
    localStorage.removeItem('userRefreshToken');
    navigate('/userlogin')
  }

  return (
    <nav className={`text-white fixed top-0 left-0 w-full z-50 ${isScrolled ? 'bg-black transition-colors duration-500' : 'bg-transparent'}`} ref={navbarRef}>
      <div className="mx-auto sm:px-2 md:px-16 flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center" data-aos="fade-down" data-aos-once="true">
          <button
            className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2 tracking-wider"
            onClick={() => {/* handle action here */ }}
          >
            <img src={Logo} alt="Logo" className="w-36 sm:w-36 md:w-64" />
          </button>
        </div>

        <div className="md:hidden mr-3">
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
                  className={`text-sm sm:text-base md:text-lg lg:text-base py-2 px-2 transition duration-200  flex items-center gap-2 ${location.pathname === menu.link ? 'text-red-900' : 'text-white'}`}
                >
                  <span className={`align-middle font-poppins ${location.pathname === menu.link ? 'text-red-900' : 'text-gray-300'} hover:text-red-900`}>{menu.name}</span>
                </Link>           
              </li>
            ))}
            {/* Avatar component */}
          
            <div className="relative group">
           
              <Avatar alt="Cindy Baker" src={profileDetails.profile_picture} />
              
              <ul className="absolute hidden group-hover:block font-poppins bg-white text-black py-2 rounded-md shadow-lg">
                <li className="cursor-pointer px-3 py-1 text-red-900 hover:bg-gray-200" onClick={handleLogout} >Logout</li>
              </ul>
            </div>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
