import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import {Home} from "./pages/Owner/dashboard/Home";
import {Profile} from "./pages/Owner/dashboard/profile";
import {Tables} from "./pages/Owner/dashboard/tables";
import {Notifications} from "./pages/Owner/dashboard/notifications";
import { SignIn} from "./pages/Owner/auth/sign-in";
import { SignUp } from "./pages/Owner/auth/sign-up";
import { ForgotPassword } from "./pages/Owner/auth/Forgot-pw";
import ResetPwd from "./pages/Owner/auth/Reset-pw";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Forgot Password",
        path: "/Forgot-pw",
        element: <ForgotPassword />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Reset Password",
        path: "/Reset-pw",
        element: <ResetPwd />,
      },
    ],
  },
];

export default routes;
