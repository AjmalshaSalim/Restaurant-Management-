import React, { useEffect, useState } from "react";
import { fetchProfileData } from '../../actions/AuthActions';
import UserIcon from "../../assets/gym -icons/User_Icon.svg"
import UserIconDark from "../../assets/gym -icons/User_Icon1.svg"
import AOS from 'aos';
import { IoArrowBackSharp } from "react-icons/io5";
import 'aos/dist/aos.css';
import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Input,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  useMaterialTailwindController
} from "../../context/index";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { ProfileInfoCard } from "../../widgets/cards/profile-info-card";


export function Profile() {
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;
  const [menu, setMenu] = useState(0)
  //toggle
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
    contact_number: "",
    joining_date: "",
    email: "",
    address: "",
    joining_date: "",
    membership_expiry_date: "",
    is_active: false,
    health_conditions: "",
    fitness_goals: "",
    workout_schedule: "",
    exercise_restrictions: "",
    emergency_contact_name: "",
    emergency_contact_phone_number: "",
    emergency_contact_relationship: "",
    membership_id_number: "",
    access_information: "",
    assigned_personal_trainer: null,
    trainer_contact_information: null,
    assigned_locker_number: "",
    feedback: "",
    documents: "",
    profile_picture: "",
    height: "",
    proffession: "",
    weight: "",
    user: null,
    membership_type: null
  });
  const [EditableformData, setEditableFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    Date_of_birth: "",
    contact_number: "",
    email: "",
    address: "",
    membership_expiry_date: "",
    health_conditions: "",
    fitness_goals: "",
    workout_schedule: "",
    exercise_restrictions: "",
    emergency_contact_name: "",
    emergency_contact_phone_number: "",
    emergency_contact_relationship: "",
    membership_id_number: "",
    access_information: "",
    assigned_personal_trainer: null,
    trainer_contact_information: null,
    assigned_locker_number: "",
    documents: "",
    profile_picture: "",
    height: "",
    proffession: "",
    weight: "",
    membership_type: null
  });
  useEffect(() => {
    AOS.init();
    async function fetchData() {
      try {
        const response = await fetchProfileData();
        setFormData(prevFormData => ({
          ...prevFormData,
          ...response
        }));
        setEditableFormData(prevFormData => ({
          ...prevFormData,
          ...response
        }));
      } catch (error) {
        console.error('Failed to fetch profile details', error);
      }
    }
    fetchData()
  }, []);
  console.log(formData.contact_number);
  // Function to handle saving changes
  const handleSaveChanges = () => {
    // Logic to save changes goes here
    setIsEditing(false); // Once changes are saved, exit edit mode
  };
  console.log(">>>>" + menu)
  return (
    <>
      <div className=" w-full h-[920px] overflow-hidden">
        <Card className={`mt-10 mb-6 w-full h-[700px] overflow-scroll ${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90 border-x border-y border-gray-800" : "bg-white border border-blue-gray-100"}`}
          data-aos="fade-up"
          data-aos-duration="700">
          <CardBody className="p-4">
            <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-6">
                {formData.profile_picture ?
                  <div className={`relative w-32 h-32  ${isEditing ? "-mb-10 ml-6" : ""}`}>
                    {isEditing ?
                      <div>
                        <div className="h-10">
                          <button className={` flex rounded-full w-8 h-8 -ml-9 -mt-3 ${sidenavType === 'dark' ? " bg-gray-800 text-gray-400" : "bg-blue-gray-100 text-blue-gray-700"}`}><IoArrowBackSharp className="w-7 h-7 pt-1 pl-1"
                            onClick={handleSaveChanges} />
                          </button>
                        </div>
                        <div className=" bg-white h-6 w-6 rounded-full absolute top-20 left-12 z-1"><PencilIcon className="h-5 w-5 text-black pl-1 pt-1" /></div>
                      </div>

                      :
                      <div></div>

                    }
                    <Avatar
                      src={formData.profile_picture}
                      alt="Profile Image"
                      size="xl"
                      variant="rounded"
                      className="rounded-lg shadow-lg shadow-blue-gray-500/40 border hover:w-90"
                    />
                  </div>
                  :
                  <div className="relative w-36 h-36 -mb-16" >
                    {sidenavType == 'dark' ?
                      <Avatar
                        src={UserIconDark}
                        alt="Profile Image"
                        size="xl"
                        variant="rounded"
                        className={`rounded-lg shadow-lg shadow-blue-gray-500/40 p-2 border-x border-y ${sidenavType === 'dark' ? "border-gray-700" : "border-blue-gray-200"}`}
                      /> :
                      <Avatar
                        src={UserIcon}
                        alt="Profile Image"
                        size="xl"
                        variant="rounded"
                        className="rounded-lg shadow-lg shadow-blue-gray-500/40 p-2 border"
                      />
                    }

                  </div>
                }
                <div>
                  <Typography variant="h5" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="mb-1">
                    {formData.first_name + " " + formData.last_name}
                  </Typography>
                  <Typography
                    variant="small"
                    className={`font-normal ${sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
                      }`}
                  >
                    {formData.proffession}
                  </Typography>
                </div>
              </div>
              <div className="w-96 text-red-700">
                <Tabs value="app">
                  <TabsHeader className={`${sidenavType === 'dark' ? "bg-gray-800" : " bg-blue-gray-100"}`} >
                    <Tab value="app" className={` ${sidenavType === 'dark' ? "text-gray-500" : " text-blue-gray-900"}`} onClick={() => setMenu(0)}>
                      <HomeIcon className={`-mt-1 mr-2 inline-block h-5 w-5 ${sidenavType === 'dark' ? "text-gray-500" : " text-blue-gray-900"}`} />
                      About
                    </Tab>
                    <Tab value="message" className={` ${sidenavType === 'dark' ? "text-gray-500" : " text-blue-gray-900"}`} onClick={() => setMenu(1)}>
                      <ChatBubbleLeftEllipsisIcon className={`-mt-0.5 mr-2 inline-block h-5 w-5 ${sidenavType === 'dark' ? "text-gray-500" : " text-blue-gray-900"}`} />
                      Details
                    </Tab>
                    <Tab value="settings" className={` ${sidenavType === 'dark' ? "text-gray-500" : " text-blue-gray-900"}`} onClick={() => setMenu(2)}>
                      <Cog6ToothIcon className={`-mt-1 mr-2 inline-block h-5 w-5 ${sidenavType === 'dark' ? "text-gray-500" : " text-blue-gray-900"}`} />
                      Payments
                    </Tab>
                  </TabsHeader>
                </Tabs>
              </div>
            </div>
            {/* Profile Information */}
            <div className=" w-full">
              {/* Editable Profile Information */}
              {isEditing ? (
                // Render editable profile info fields when in edit mode

                <form className="grid-cols-1 mb-12 grid gap-y-5 gap-x-5 px-4 lg:grid-cols-2 xl:grid-cols-3 w-full">
                  {Object.entries(EditableformData).map(([key, value]) => (
                    <div key={key} className="mb-1 flex flex-col flex-grow">
                      <Typography
                        variant="small"
                        color={sidenavType === 'dark' ? "white" : "blue-gray"}
                        className="font-medium"
                      >
                        {key.replace(/_/g, ' ')} {/* Convert underscore to space for display */}
                      </Typography>
                      <Input
                        size="lg"
                        type="text"
                        value={value}
                        placeholder={value}
                        onChange={(e) => setFormData(prevData => ({ ...prevData, [key]: e.target.value }))}
                        id={key}
                        className="!border-gray-700 focus:!border-white text-gray-500"
                        labelProps={{
                          className: 'before:content-none after:content-none',
                        }}
                      />
                    </div>
                  ))}
                  <Button onClick={handleSaveChanges} className={` h-14 mt-2 w-[100%] lg:w-[150px] ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>
                    Save Changes
                  </Button>
                </form>


              ) : (

                <ProfileInfoCard
                  title="Profile Information"
                  description=""
                  details={
                    menu === 0 && {
                      Name: formData.first_name + " " + formData.last_name,
                      Mobile: formData.contact_number,
                      Email: formData.email,
                      Gender: formData.gender,
                      DOB: formData.date_of_birth,
                      Proffession: formData.proffession,
                      Address: formData.address,
                      Emergency_Contact: formData.emergency_contact_name,
                      Contact_Number: formData.emergency_contact_phone_number,
                      Relationship: formData.emergency_contact_relationship
                    }
                    || menu === 1 && {
                      Membership_ID: formData.membership_id_number,
                      Locker_Number: formData.assigned_locker_number,
                      Joined: formData.joining_date,
                      Height: formData.height,
                      Weight: formData.weight,
                      Health: formData.health_conditions,
                      Goal: formData.fitness_goals,
                      Schedule: formData.workout_schedule,
                      Restrictions: formData.exercise_restrictions,
                      Personal_Trainer: formData.assigned_personal_trainer,
                      Trainer_Contact: formData.trainer_contact_information,

                    }
                    || menu === 2 && {
                      Membership_Expiry: formData.membership_expiry_date,
                    }
                  }
                  action={

                    <Tooltip content="Edit Profile" className=" border">
                      <button className={` w-14 md:mr-[700px] h-10 rounded-lg flex ${sidenavType === 'dark' ? "bg-gray-800" : "bg-black"}`}
                        onClick={() => setIsEditing(true)} // Enable edit mode when clicked
                      >
                        <PencilIcon
                          className="h-4 w-4 ml-5 mt-2 cursor-pointer text-white"
                        />
                        {/* <h1 className=" text-white ml-1 mt-1 text-lg">Edit</h1> */}
                      </button>

                    </Tooltip>

                  }
                />

              )}
              {/* Other sections */}
              {/* Add other sections like Personal Trainers here */}
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Profile;
