import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {Sidenav} from "../widgets/layout/sidenav";
import {DashboardNavbar} from "../widgets/layout/dashboard-navbar";
import {Configurator} from "../widgets/layout/configurator";
import { Footer} from "../widgets/layout/footer";
// import BgImageDark from "../assets/images/hero-bg.jpg"
import BgImageDark from "../assets/images/hero-bg.jpg"
import BgImageWhite from "../assets/images/Dumbel_Workout1.jpg"
import routes from "../routes";
import { useMaterialTailwindController, setOpenConfigurator } from "../context/index";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Dashboard() {
  useEffect (() => {
    AOS.init ();
  });
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  return (
    <div
      className={`min-h-screen ${
        sidenavType === "dark" ? "bg-black" : "bg-white"
      }`}
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.5), 
            rgba(0, 0, 0, 0.5)
          ), 
          ${sidenavType === "dark" ? `url(${BgImageDark})` : `url(${BgImageWhite})`}`,
        backgroundSize: "cover",
        backgroundPosition: "center", 
      }}
      
    >
      <div data-aos="fade-right"
        data-aos-duration="1000">
 <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      </div>
     
      <div className="p-4 xl:ml-80">
        <div data-aos="fade-down"
        data-aos-duration="1000">
        <DashboardNavbar />
        </div>
        <Configurator />
        {/* <IconButton
          size="lg"
          color={sidenavType==='dark'? "black" : "white"}
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton> */}
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className={`${
      sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
    }`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
