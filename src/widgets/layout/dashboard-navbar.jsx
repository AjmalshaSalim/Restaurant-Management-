import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "../../context/index";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const { sidenavType} =
    controller;
  return (
    <Navbar
      color={fixedNavbar ? "blue-gray" : "transparent"}
      className={`rounded-lg transition-all ${sidenavType === 'dark'? "bg-transparent" : "bg-white"} ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5 "
          : "px-4 py-1"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/`}>
              <Typography
                variant="small"
                color={sidenavType === 'dark' ? "white" : "blue-gray"}
                className="font-normal opacity-50 transition-all hover:text-red-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color={sidenavType === 'dark'? "white" : "blue-gray"}
              className="font-normal"
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color={sidenavType ==='dark' ? "white" : "blue-gray"}>
            {page}
          </Typography>
        </div>
        <div className="flex items-center">
          {/* <div className="mr-auto md:mr-4 md:w-56">
            <Input label="Search" />
          </div> */}
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
          <Link to="/auth/sign-in">
            <Button
              variant="text"
              color={sidenavType === 'dark'? "white" : "blue-gray"}
              className="hidden items-center gap-1 px-4 xl:flex normal-case"
            >
              <UserCircleIcon className={`h-5 w-5 ${
                sidenavType === 'dark'? "text-white" : "text-blue-gray-500"
              }`} />
              Sign In
            </Button>
            <IconButton
              variant="text"
              color="blue-gray"
              className="grid xl:hidden"
            >
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            </IconButton>
          </Link>
          <Menu>
            <MenuHandler>
              <IconButton variant="text" color="blue-gray">
                <BellIcon className={`h-5 w-5 ${sidenavType ==='dark'? "text-white" : "text-blue-gray-500"}`} />
              </IconButton>
            </MenuHandler>
            <MenuList className={`w-max border-0 ${sidenavType === 'dark'? "bg-black" : "bg-white"} `}>
              <MenuItem className="flex items-center gap-3">
                <Avatar
                  src="https://avatars.githubusercontent.com/u/98327654?v=4"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography
                    variant="small"
                    color={sidenavType === 'dark'? "white" : "blue-gray"}
                    className="mb-1 font-normal"
                  >
                    <strong>New Payment Request</strong> from Achu
                  </Typography>
                  <Typography
                    variant="small"
                    color={sidenavType === 'dark'? "white" : "blue-gray"}
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 13 minutes ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <Avatar
                  src="https://avatars.githubusercontent.com/u/123806799?v=4"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography
                    variant="small"
                    color={sidenavType === 'dark'? "white" : "blue-gray"}
                    className="mb-1 font-normal"
                  >
                    <strong>New Enquiry</strong> From Ajmalsha
                  </Typography>
                  <Typography
                    variant="small"
                    color={sidenavType === 'dark'? "white" : "blue-gray"}
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 1 day ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-red-800 to-blue-gray-900">
                  <CreditCardIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color={sidenavType === 'dark'? "white" : "blue-gray"}
                    className="mb-1 font-normal"
                  >
                    Payment Confirmed successfully
                  </Typography>
                  <Typography
                    variant="small"
                    color={sidenavType === 'dark'? "white" : "blue-gray"}
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 2 days ago
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
          <IconButton
            variant="text"
            color={sidenavType === 'dark'? "white" : "blue-gray"}
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className={`h-5 w-5 ${ sidenavType === 'dark' ? "text-white" : "text-blue-gray-500"}`} />
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
