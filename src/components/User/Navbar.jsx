import React from "react";
import Logo from "../../assets/images/Gymsoft_Logo1-removebg-preview.png";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Program",
    link: "/program",
  },
  {
    id: 3,
    name: "Pricing",
    link: "/pricing",
  },
  {
    id: 4,
    name: "Community",
    link: "/community",
  },
];

const Navbar = () => {
  return (
    <nav className=" text-white absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center" data-aos="fade-down" data-aos-once="true">
          <button
            className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2 tracking-wider"
            onClick={() => {/* handle action here */}}
          >
            <img src={Logo} alt="Logo" className="w-32 sm:w-36 md:w-64" />
          </button>
        </div>

        {/* Link section */}
        <div
          className="flex items-center gap-0"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <ul className="hidden md:flex items-center gap-4">
            {Menu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="text-sm sm:text-base md:text-lg lg:text-base py-2 px-2 hover:text-red-500 transition duration-200"
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="bg-red-900 rounded-3xl items-center text-sm sm:text-base md:text-lg ml-3 lg:text-base pt-1 pb-1 px-4 hover:bg-red-500 transition duration-200">
            SignIn
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
