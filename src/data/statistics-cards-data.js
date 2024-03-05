import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaUserCheck } from "react-icons/fa";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: FaMoneyCheck,
    title: "Pending Payments",
    value: "5",
    footer: {
      color: "text-green-500",
      value: "-5%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: PiUsersThreeFill,
    title: "Today's Attendance",
    value: "21/30",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: FaPersonCircleQuestion,
    title: "New Enquiries",
    value: "11",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: FaUserCheck,
    title: "Active Members",
    value: "10",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
