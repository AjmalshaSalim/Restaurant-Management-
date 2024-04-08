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
import { BiSolidOffer } from "react-icons/bi";
import { BsPatchPlusFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import {Home} from './pages/Owner/dashboard/Home';
import {Profile} from './pages/User/UserProfile';
import {MembersList} from './pages/Owner/dashboard/MembersList'
import GymEquipments from './pages/Owner/dashboard/GymEquipments';
// import {Tables} from './pages/Owner/dashboard/tables';
// import {Notifications} from './pages/Owner/dashboard/notifications';
import {AddMember} from './pages/Owner/dashboard/AddMember'
import {AttendanceList} from './pages/Owner/dashboard/AttendanceList'
import {AddEnquiries} from './pages/Owner/dashboard/AddEnquiries'
import {AllStaffs} from './pages/Owner/dashboard/AllStaffs'
import {CreateSlots} from './pages/Owner/dashboard/CreateSlots'
import {Plans} from './pages/Owner/dashboard/Plans'
import CreatePlans from './pages/Owner/dashboard/CreatePlans';
import EditPlan from './pages/User/EditPlan';
import ConfirmPayments from './pages/Owner/dashboard/ConfirmPayments';
import {PaymentDetail} from './pages/Owner/dashboard/PaymentDetail';
import {AllDietPlans} from './pages/Owner/dashboard/AllDietPlans';
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
        icon: <FaClipboardList {...icon} />,
        name: 'Attendance List',
        path: '/AttendanceList',
        element: <AttendanceList />,
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
        icon: <BiSolidOffer {...icon} />,
        name: 'Plans',
        path: '/Plans',
        element: <Plans/>,
      },
      {
        icon: <BsPatchPlusFill {...icon} />,
        name: 'Create Plans',
        path: '/CreatePlans',
        element: <CreatePlans/>,
      },
      {
        icon: <BsPatchPlusFill {...icon} />,
        name: 'Edit Plan',
        path: '/EditPlan',
        element: <EditPlan/>,
      },
      {
        icon: <BiSolidOffer {...icon} />,
        name: 'Payment Detail',
        path: '/PaymentDetail',
        element: <PaymentDetail/>,
      },
      {
        icon: <BsPatchPlusFill {...icon} />,
        name: 'Confirm Payments',
        path: '/ConfirmPayments',
        element: <ConfirmPayments/>,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: 'Add Members',
        path: '/AddMember',
        element: <AddMember />,
      },
      {
        icon: <FaUserTie {...icon} />,
        name: 'All Staffs',
        path: '/AllStaffs',
        element: <AllStaffs />,
      },
      {
        icon: <HiUserCircle {...icon} />,
        name: 'User Profile',
        path: '/profile',
        element: <Profile />,
      },
      {
        icon: <HiUserCircle {...icon} />,
        name: 'Create Slots',
        path: '/CreateSlots',
        element: <CreateSlots />,
      },
      {
        icon: <FaDumbbell {...icon} />,
        name: 'Equipments',
        path: '/gym-equipments',
        element: <GymEquipments />,
      },
      {
        icon: <FaDumbbell {...icon} />,
        name: 'Diet Plans',
        path: '/AllDietPlans',
        element: <AllDietPlans />,
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
];

export default routes;
