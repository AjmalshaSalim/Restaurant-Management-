import {
  BellIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  LockOpenIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

export const ordersOverviewData = [
  {
    icon: BellIcon,
    color: "text-blue-gray-300",
    title: "Pending Payment Notification",
    description: "06 Feb 7:20 PM",
  },
  {
    icon: PlusCircleIcon,
    color: "text-blue-gray-300",
    title: "New Enquiries to Followup",
    description: "05 Feb 11 PM",
  },
  {
    icon: CreditCardIcon,
    color: "text-blue-gray-300",
    title: "New Payment Requests To Confirm",
    description: "10 Feb 2:20 AM",
  },
  {
    icon: LockOpenIcon,
    color: "text-blue-gray-300",
    title: "New Access Requests",
    description: "18 Feb 4:54 AM",
  },
];

export default ordersOverviewData;
