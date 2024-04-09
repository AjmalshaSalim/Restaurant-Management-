import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/images/Gymsoft_Logo.jpg"
import Logo2 from "../../assets/images/Gymsoft_Logo1-removebg-preview.png"
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "../../context/index";

export function Sidenav({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gray-800 to-orange-500",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };
  const logoSrc = sidenavType === 'dark' ? Logo2 : Logo;

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } absolute inset-0 z-50 my-4 ml-4 max-h-fit w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 ${sidenavType === 'dark'? "lg:bg-opacity-50 lg:bg-gray-800 bg-gray-900 border-x border-y border-gray-800" : "border border-opacity-5 "}`}
    
    >
      <div
        className={`relative`}
      >
        <div className=" w-full">
          <img src={logoSrc} alt="Gymsoft" className=" px-4 pt-2"/>
        </div>
        <Link to="/" className="py-6 px-8 text-center">
          <Typography
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
          >
            {/* {brandName} */}
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-1 top-1 grid rounded-br-none rounded-tl-none xl:hidden bg-gray-800 rounded-full"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-gray-600" />
        </IconButton>
      </div>
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "black"}
                  className="font-black uppercase opacity-75 text-xs "
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "red" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                          ? "white"
                          : "black"
                      }
                      className={sidenavType === 'dark' ? `flex items-center gap-4 w-60 capitalize ${isActive ? "bg-red-700" : "bg-transparent"}` : `flex w-60 items-center gap-4 px-4 capitalize ${isActive ? "bg-black" : "bg-transparent"}`}
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize text-sm  hover:space-x-4"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/Gymsoft_Logo.jpg",
  brandName: "Gymsoft--",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
