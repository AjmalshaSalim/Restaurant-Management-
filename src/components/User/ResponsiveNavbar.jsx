import { Menu } from "./Navbar.jsx";
import { Link } from "react-router-dom";


const ResponsiveMenu = ({showMenu}) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-black text-white px-8 pb-6 pt-16 transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {Menu.map((data) => (
              <li key={data.name}>
                <Link to={data.link} className="mb-5 inline-block px-2 py-1 rounded-md text-white hover:text-red-500 transition-colors duration-200">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          <p>Copyright ©2024 A2Z Alphabet Solutionz PVT.LTD. All Rights Reserved .</p>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;