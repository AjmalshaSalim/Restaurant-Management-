import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from "react";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Button,
  Input,
  Select,
} from "@material-tailwind/react";
import UserIcon from "../../../assets/gym -icons/User_Icon.svg"
import UserIconDark from "../../../assets/gym -icons/User_Icon1.svg"
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
import { Link } from "react-router-dom";


export function AddMember() {
  const navigate = useNavigate();
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;
  //toggle
  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    profileImage: null,
    firstname: " ",
    lastname: " ",
    mobilenumber: " ",
    email: " ",
    gender: " ",
    age: " ",
    height: " ",
    weight: " ",
    proffession: " ",
    address: " "
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function to handle image file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setUserData((prevData) => ({
      ...prevData,
      profileImage: file
    }));
  };

  // Function to handle saving changes
  const handleSaveChanges = () => {
    // Logic to save changes goes here
    setIsEditing(false); // Once changes are saved, exit edit mode
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('FormData:', userData); //
    const formData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await axios.post('https://achujozef.pythonanywhere.com/api/add_user/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      toast("User Created Successfully")
      navigate('/dashboard/MembersList')
    } catch (error) {
      console.error('Error adding member:', error);
    }
  }
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className=" w-full h-[920px] overflow-hidden">
        <Card className={`mt-10 ml mb-6  w-full  ${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90 border-x border-y border-gray-800" : "bg-white border border-blue-gray-100"}`}
          data-aos="fade-up"
          data-aos-duration="700">
          <CardBody className="p-4" >
            <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
              <div className="w-96">



                {userData.profileImage ?
                  <div className="relative w-36 h-36 -mb-5">
                    <Avatar
                      src={URL.createObjectURL(userData.profileImage)}
                      alt="Profile Image"
                      size="xl"
                      variant="rounded"
                      className={`rounded-lg shadow-lg shadow-blue-gray-500/40 p-2 ${sidenavType === 'dark' ? "border-x border-y border-gray-800" : "border-x border-y border-blue-gray-200"}`}
                    />
                    <label htmlFor="profile-image" className="absolute bottom-16 border right-16 cursor-pointer bg-white rounded-full p-2">
                      <input type="file" id="profile-image" className="hidden" onChange={handleImageUpload} accept="image/*" />
                      <PencilIcon className="h-4 w-4 text-black" />
                    </label>
                  </div> :
                  <div className="relative w-36 h-36 -mb-5" >
                    {sidenavType == 'dark' ?
                      <Avatar
                        src={UserIconDark}
                        alt="Profile Image"
                        size="xl"
                        variant="rounded"
                        className="rounded-lg shadow-lg shadow-blue-gray-500/40 p-2 border-x border-y border-gray-700"
                      /> :
                      <Avatar
                        src={UserIcon}
                        alt="Profile Image"
                        size="xl"
                        variant="rounded"
                        className="rounded-lg shadow-lg shadow-blue-gray-500/40 p-2 border border-x border-y border-blue-gray-200"
                      />
                    }

                    <label htmlFor="profile-image" className="absolute bottom-16 border right-16 cursor-pointer bg-white rounded-full p-2">
                      <input type="file" id="profile-image" className="hidden" onChange={handleImageUpload} accept="image/*" />
                      <PencilIcon className="h-4 w-4 text-black" />
                    </label>

                  </div>
                }

              </div>
            </div>
            {/* Profile Information */}
            <div className="grid-cols-1 mb-12 grid gap-y-5 gap-x-5 px-4 lg:grid-cols-2 xl:grid-cols-3 w-full">
              {/* Editable Profile Information */}
              <div>
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? "white" : "blue-gray"}
                  className=" font-medium"
                >
                  First Name
                </Typography>
                <input
                  type="text"
                  placeholder="Enter first name"
                  // value={formData.firstname}
                  name="firstname"
                  onChange={handleChange}
                  className={` py-2  pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`}
                />
              </div>

              <div>
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? "white" : "blue-gray"}
                  className=" font-medium"
                >
                  Last Name
                </Typography>
                <input
                  type="text"
                  placeholder="Last Name"
                  // value={formData.lastname}
                  name="lastname"
                  onChange={handleChange}
                  className={` py-2  pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`}
                />
              </div>

              <div>
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? "white" : "blue-gray"}
                  className=" font-medium"
                >
                  Phone
                </Typography>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  // value={formData.mobilenumber}
                  name="mobilenumber"
                  onChange={handleChange}
                  className={` py-2  pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`}
                />
              </div>

              <div>
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? "white" : "blue-gray"}
                  className=" font-medium"
                >
                  Email
                </Typography>
                <input
                  type="email"
                  placeholder="Email"
                  value={userData.email}
                  name="email"
                  onChange={handleChange}
                  className={` py-2  pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`}
                />
              </div>

              <div className="pr-2 ">
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? "white" : "blue-gray"}
                  className=" font-medium"
                >
                  Gender
                </Typography>
                <select
                  value={userData.gender}
                  onChange={handleChange}
                  name="gender"
                  className={`py-2 pl-2 pr-20 rounded-lg bg-transparent w-[280px] border-x border-y ${sidenavType ? " text-gray-400 border-gray-700" : " text-blue-gray-600 border-blue-gray-100"}`}
                >
                  <option value="male" className={`${sidenavType === 'dark' ? "bg-black" : "bg-white"}`}>Male</option>
                  <option value="female" className={`${sidenavType === 'dark' ? "bg-black" : "bg-white"}`}>Female</option>
                </select>
              </div>


              <div>
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? "white" : "blue-gray"}
                  className=" font-medium"
                >
                  Age
                </Typography>
                <input
                  type="number"
                  placeholder="Age"
                  // value={formData.age}
                  name="age"
                  onChange={handleChange}
                  className={` py-2  pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`}
                />
              </div>

              <div>
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? "white" : "blue-gray"}
                  className=" font-medium"
                >
                  Height
                </Typography>
                <input
                  type="text"
                  placeholder="Height"
                  // value={formData.height}
                  name="height"
                  onChange={handleChange}
                  className={` py-2  pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`}
                />
              </div>


              <div>
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? "white" : "blue-gray"}
                  className=" font-medium"
                >
                  Weight
                </Typography>
                <input
                  type="text"
                  placeholder="Weight"
                  // value={formData.weight}
                  name="weight"
                  onChange={handleChange}
                  className={` py-2  pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`}
                />
              </div>


              <div>
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? "white" : "blue-gray"}
                  className=" font-medium"
                >
                  Proffession
                </Typography>
                <input
                  type="text"
                  placeholder="Profession"
                  // value={formData.proffession}
                  name="proffession"
                  onChange={handleChange}
                  className={` py-2  pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`}
                />
              </div>


              <div>
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? "white" : "blue-gray"}
                  className=" font-medium"
                >
                  Address
                </Typography>
                <input
                  type="text"
                  placeholder="Address"
                  // value={formData.address}
                  name="address"
                  onChange={handleChange}
                  className={` py-2  pl-2 pr-20 rounded-lg bg-transparent border-x border-y ${sidenavType === 'dark' ? "border-gray-600" : " border-blue-gray-100"}`}
                />
              </div>
              <div className=" pt-3 pl-5">
                <Link to="/">
                  <Button type="submit" onClick={handleSubmit} className={` w-[100%] lg:w-[180px] ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>create user</Button>
                </Link>
              </div>

            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default AddMember;
