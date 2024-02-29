import React, { useState } from "react";
import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  useMaterialTailwindController
} from "../../../context/index";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { ProfileInfoCard } from "../../../widgets/cards/profile-info-card";
import { platformSettingsData } from "../../../data/platform-settings-data";
import { conversationsData } from "../../../data/conversations-data";

export function Profile() {
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode

  // Function to handle saving changes
  const handleSaveChanges = () => {
    // Logic to save changes goes here
    setIsEditing(false); // Once changes are saved, exit edit mode
  };

  return (
    <>
      <Card className={`mx-3 mt-10 mb-6 lg:mx-4  ${sidenavType === 'dark' ? "bg-black" : "bg-white border border-blue-gray-100"}`}>
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/Achu.jpeg"
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="mb-1">
                  Achu Joseph
                </Typography>
                <Typography
                  variant="small"
                  className={`font-normal ${
                    sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
                  }`}
                >
                  Software Developer
                </Typography>
              </div>
            </div>
            <div className="w-96">
              <Tabs value="app">
                <TabsHeader>
                  <Tab value="app">
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    About
                  </Tab>
                  <Tab value="message">
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Details
                  </Tab>
                  <Tab value="settings">
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Payments
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
          {/* Profile Information */}
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            {/* Editable Profile Information */}
            {isEditing ? (
              // Render editable profile info fields when in edit mode
              <div>
                {/* Fields for editing profile info */}
                {/* Add your input fields here for editing */}
                {/* Example:
                <input type="text" placeholder="First Name" />
                */}
                <Button onClick={handleSaveChanges}>Save Changes</Button>
              </div>
            ) : (
              // Render non-editable profile info when not in edit mode
              <ProfileInfoCard
                title="Profile Information"
                description=""
                details={{
                  "first name": "Achu joseph SL",
                  mobile: "7306129332",
                  email: "achujoseph@gmail.com",
                  location: "Kerala,India",
                  Join: (
                    <div className="flex items-center gap-4">
                      <i className="fa-brands fa-facebook text-blue-700" />
                      <i className="fa-brands fa-twitter text-blue-400" />
                      <i className="fa-brands fa-instagram text-purple-500" />
                    </div>
                  ),
                }}
                action={
                  <Tooltip content="Edit Profile" className=" border">
                    <PencilIcon
                      className="h-4 w-4 cursor-pointer text-blue-gray-500"
                      onClick={() => setIsEditing(true)} // Enable edit mode when clicked
                    />
                  </Tooltip>
                }
              />
            )}
            {/* Other sections */}
            {/* Add other sections like Personal Trainers here */}
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
