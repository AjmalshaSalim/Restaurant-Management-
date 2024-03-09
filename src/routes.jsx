import {
  HomeIcon,
  UserPlusIcon,
  // TableCellsIcon,
  // InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from '@heroicons/react/24/solid';
import { FaDumbbell } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import {Home} from './pages/Owner/dashboard/Home';
import {Profile} from './pages/User/profile';
import {MembersList} from './pages/Owner/dashboard/MembersList'
import GymEquipments from './pages/Owner/dashboard/GymEquipments';
// import {Tables} from './pages/Owner/dashboard/tables';
// import {Notifications} from './pages/Owner/dashboard/notifications';
import {SignIn} from './pages/Owner/auth/sign-in';
import {SignUp} from './pages/Owner/auth/sign-up';
import {ForgotPassword} from './pages/Owner/auth/Forgot-pw';
import {Otp} from './pages/Owner/auth/Otp';
import {ResetPwd} from './pages/Owner/auth/Reset-pw';
import {AddMember} from './pages/Owner/dashboard/AddMember'
import {AddAttendance} from './pages/Owner/dashboard/AddAttendance'
import {AddEnquiries} from './pages/Owner/dashboard/AddEnquiries'
import {AllStaffs} from './pages/Owner/dashboard/AllStaffs'
const icon = {
  className: 'w-5 h-5 text-inherit',
};

export const routes = [
  {
    layout: 'dashboard',
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: 'dashboard',
        path: '/home',
        element: <Home />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: 'Add Attendance',
        path: '/AddAttendance',
        element: <AddAttendance />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: 'Add Enquiries',
        path: '/AddEnquiries',
        element: <AddEnquiries />,
      },
      {
        icon: <FaUsers {...icon} />,
        name: 'All Members',
        path: '/MembersList',
        element: <MembersList/>,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: 'Add Members',
        path: '/AddMember',
        element: <AddMember />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: 'All Staffs',
        path: '/AllStaffs',
        element: <AllStaffs />,
      },
      {
        icon: <HiUserCircle {...icon} />,
        name: 'Member Profile',
        path: '/profile',
        element: <Profile />,
      },
      {
        icon: <FaDumbbell {...icon} />,
        name: 'Equipments',
        path: '/gym-equipments',
        element: <GymEquipments />,
      },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: 'tables',
      //   path: '/tables',
      //   element: <Tables />,
      // },
      
      // {
      //   icon: <InformationCircleIcon {...icon} />,
      //   name: 'notifications',
      //   path: '/notifications',
      //   element: <Notifications />,
      // },
    ],
  },
  {
    title: 'auth pages',
    layout: 'auth',
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: 'sign in',
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: 'sign up',
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: 'Forgot Password',
        path: '/Forgot-pw',
        element: <ForgotPassword />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: 'Reset Password',
        path: '/Reset-pw',
        element: <ResetPwd />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: 'Otp',
        path: '/Otp',
        element: <Otp />,
      },
    ],
  },
];

export default routes;
