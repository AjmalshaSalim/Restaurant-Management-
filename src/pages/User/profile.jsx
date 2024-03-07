import React, { useEffect,useState } from "react";
import { fetchProfileData } from '../../actions/AuthActions';
import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Input,
  Switch,
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
  const [menu, setMenu]=useState(0)
  //toggle
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    firstname:"",
    lastname:"",
    gender: "",
    date_of_birth: "",
    contact_number: "",
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
    height:"",
    proffession:"",
    weight: "",
    user: null,
    membership_type: null
  });
  useEffect(() => {
    async function fetchData(){
      try{
        const response = await fetchProfileData();
        setFormData(prevFormData => ({
          ...prevFormData,
          ...response
        }));

      } catch(error){
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
console.log(">>>>"+menu)
  return (
    <>
      <Card className={`mt-10 mb-6 w-full  ${sidenavType === 'dark' ? "bg-black" : "bg-white border border-blue-gray-100"}`}>
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
                  {formData.firstname + " " + formData.lastname}
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
            <div className="w-96">
              <Tabs value="app">
                <TabsHeader>
                  <Tab value="app" onClick={()=>setMenu(0)}>
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    About
                  </Tab>
                  <Tab value="message" onClick={()=>setMenu(1)}>
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Details
                  </Tab>
                  <Tab value="settings" onClick={()=>setMenu(2)}>
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Payments
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
          {/* Profile Information */}
          <div className=" grid-cols-1 mb-12 grid px-4 lg:grid-cols-2 xl:grid-cols-3 w-full">
            {/* Editable Profile Information */}
            {isEditing ? (
              // Render editable profile info fields when in edit mode

              <form
                // onSubmit={handleSubmit}
                className="lg:mt-8 mb-2 pr-10 w-80 max-w-screen-lg lg:w-1/2"
              >
                <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
                  <div className="mb-1 flex flex-col flex-grow">
                    <Typography
                      variant="small"
                      color={sidenavType === 'dark' ? "white" : "blue-gray"}
                      className=" font-medium "
                    >
                      First name
                    </Typography>
                    <Input
                      size="lg"
                      type="string"
                      // onChange={handleChange}
                      value={formData.firstname}
                      id="firstname"
                      placeholder=""
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                  </div>
                  <div className="mb-1 flex flex-col flex-grow">
                    <Typography
                      variant="small"
                      color={sidenavType === 'dark' ? "white" : "blue-gray"}
                      className=" font-medium"
                    >
                      Last name
                    </Typography>
                    <Input
                      size="lg"
                      type="string"
                      // onChange={handleChange}
                      value={formData.lastname}
                      id="lastname"
                      placeholder=""
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
                  <div className="mb-1 flex flex-col flex-grow">
                    <Typography
                      variant="small"
                      color={sidenavType === 'dark' ? "white" : "blue-gray"}
                      className=" font-medium"
                    >
                      Mobile number
                    </Typography>
                    <Input
                      size="lg"
                      type="number"
                      // onChange={handleChange}
                      value={formData.contact_number}
                      id="mobilenumber"
               
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                  </div>
                  <div className="mb-1 flex flex-col flex-grow">
                    <Typography
                      variant="small"
                      color={sidenavType === 'dark' ? "white" : "blue-gray"}
                      className=" font-medium"
                    >
                      Email
                    </Typography>
                    <Input
                      size="lg"
                      type="email"
                      // onChange={handleChange}
                      value={formData.email}
                      id="email"
                      placeholder=""
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
                  <div className="mb-1 flex flex-col flex-grow">
                    <Typography
                      variant="small"
                      color={sidenavType === 'dark' ? "white" : "blue-gray"}
                      className=" font-medium"
                    >
                      Gender
                    </Typography>
                    <Input
                      size="lg"
                      type="string"
                      // onChange={handleChange}
                      value={formData.gender}
                      id="gender"
                      placeholder=""
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                  </div>
                  <div className="mb-1 flex flex-col flex-grow">
                    <Typography
                      variant="small"
                      color={sidenavType === 'dark' ? "white" : "blue-gray"}
                      className=" font-medium"
                    >
                      Age
                    </Typography>
                    <Input
                      size="lg"
                      type="number"
                      // onChange={handleChange}
                      value={formData.age}
                      id="age"
                      placeholder=""
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:gap-6 lg:mb-2">
                  <div className="mb-1 flex flex-col flex-grow">
                    <Typography
                      variant="small"
                      color={sidenavType === 'dark' ? "white" : "blue-gray"}
                      className=" font-medium"
                    >
                      Height
                    </Typography>
                    <Input
                      size="lg"
                      type="number"
                      // onChange={handleChange}
                      value={formData.height}
                      id="height"
                      placeholder=""
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                  </div>
                  <div className="mb-1 flex flex-col flex-grow">
                    <Typography
                      variant="small"
                      color={sidenavType === 'dark' ? "white" : "blue-gray"}
                      className=" font-medium"
                    >
                      Weight
                    </Typography>
                    <Input
                      size="lg"
                      type="number"
                      // onChange={handleChange}
                      value={formData.weight}
                      id="weight"
                      placeholder=""
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                    />
                  </div>
                </div>
                <div className="mb-2 flex flex-col gap-6">
                  <Typography
                    variant="small"
                    color={sidenavType === 'dark' ? "white" : "blue-gray"}
                    className="-mb-6 font-medium"
                  >
                    Address
                  </Typography>
                  <Input
                    size="lg"
                    type="string"
                    // onChange={handleChange}
                    value={formData.address}
                    id="address"
                    placeholder=""
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:w-[425px]"
                    labelProps={{
                      className: 'before:content-none after:content-none',
                    }}
                  />
                  <Button onClick={handleSaveChanges} className={` w-[100%] lg:w-[150px] ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>Save Changes</Button>
                </div>
                <div></div>
              </form>


            ) : (
              
              <ProfileInfoCard
              title="Profile Information"
              description=""
              details={
                menu === 0 && {
                  Name: formData.firstname + " " + formData.lastname,
                  Mobile: formData.contact_number,
                  Email: formData.email,
                  Gender: formData.gender,
                  DOB: formData.date_of_birth,                                  
                  Proffession: formData.proffession,
                  Address: formData.address,
                  place: formData.address
                }
                || menu === 1 && {
                  Height: formData.height,
                  Weight: formData.weight,
                  DOB: formData.date_of_birth,
                  Height: formData.height,
                }
                || menu === 2 && {
                  Membership_Expiry: formData.membership_expiry_date,
                }
              }
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
