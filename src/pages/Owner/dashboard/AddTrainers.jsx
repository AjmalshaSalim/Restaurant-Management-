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
  Button,
  Input,
  Select,
  Option
} from "@material-tailwind/react";
import UserIcon from "../../../assets/gym -icons/User_Icon.svg"
import UserIconDark from "../../../assets/gym -icons/User_Icon1.svg"
import {
  useMaterialTailwindController
} from "../../../context/index";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function AddTrainers() {
  const navigate = useNavigate();
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const [trainerData, setTrainerData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    contactNumber: '',
    email: '',
    address: '',
    trainerId: '',
    certificationLevel: '',
    certificationExpiryDate: '',
    educationBackground: '',
    workingHours: '',
    daysAvailable: '',
    restDays: '',
    classSchedule: '',
    expertiseAreas: '',
    specializedSkills: '',
    sessionType: '',
    sessionDuration: '',
    preferredCommunication: '',
    clientConsultationAvailability: '',
    preferredEquipment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainerData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    setTrainerData(prev => ({
      ...prev,
      profileImage: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(trainerData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await axios.post('https://your-api-endpoint.com/api/trainers', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast("Trainer added successfully!");
      navigate('/trainers');
    } catch (error) {
      toast.error("Failed to add trainer.");
      console.error('Error adding trainer:', error);
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="w-full h-auto overflow-hidden">
        <Card className={`mt-10 ml mb-6 w-full ${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90 border-x border-y border-gray-800" : "bg-white border border-blue-gray-100"}`}
          data-aos="fade-up"
          data-aos-duration="700">
          <CardBody className="p-4">
            <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
              <div className="w-96">
                <Avatar src={trainerData.profileImage ? URL.createObjectURL(trainerData.profileImage) : (sidenavType === 'dark' ? UserIconDark : UserIcon)}
                  alt="Profile Image" size="xl" variant="rounded"
                  className={` border-x border-y rounded-lg shadow-lg ${sidenavType === 'dark' ? "shadow-blue-gray-500/40 p-2 border-gray-800" : "shadow-blue-gray-500/40 p-2 border-blue-gray-200"}`} />
                <label htmlFor="profile-image" className="absolute left-[70px] top-[70px] cursor-pointer bg-white rounded-full p-2">
                  <input type="file" id="profile-image" className="hidden" onChange={handleImageUpload} accept="image/*" />
                  <PencilIcon className="h-4 w-4 text-black" />
                </label>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-y-5 gap-x-5 px-4 lg:grid-cols-2 xl:grid-cols-3 w-full">
                <Input label="First Name" name="firstName" onChange={handleChange} type="text" variant="static" color={sidenavType==='dark'?'white': 'blue-gray'}/>
                <Input label="Last Name" name="lastName" onChange={handleChange} type="text" variant="static" color={sidenavType==='dark'?'white': 'blue-gray'}/>
                <Select label="Gender" name="gender" onChange={handleChange} variant='static'>
                  <Option value="">Select Gender</Option>
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
                <Input label="Date of Birth" name="dob" variant="static" onChange={handleChange} type="date" color={sidenavType==='dark'?'white': 'blue-gray'} />
                <Input label="Contact Number" name="contactNumber" variant="static" onChange={handleChange} type="text" color={sidenavType==='dark'?'white': 'blue-gray'} />
                <Input label="Email" name="email" onChange={handleChange} variant="static" type="email" color={sidenavType==='dark'?'white': 'blue-gray'} />
                <Input label="Address" name="address" onChange={handleChange} type="text" variant="static" color={sidenavType==='dark'?'white': 'blue-gray'}/>
                <Input label="Trainer ID" name="trainerId" onChange={handleChange} type="text" variant="static" color={sidenavType==='dark'?'white': 'blue-gray'}/>
                <Input label="Certification Level" name="certificationLevel" onChange={handleChange} type="text" variant="static" color={sidenavType==='dark'?'white': 'blue-gray'}/>
                <Input label="Certification Expiry Date" name="certificationExpiryDate" onChange={handleChange} type="date" variant="static" color={sidenavType==='dark'?'white': 'blue-gray'}/>
                <Input label="Education Background" name="educationBackground" onChange={handleChange} type="text" variant="static" color={sidenavType==='dark'?'white': 'blue-gray'}/>
                <Input label="Working Hours" name="workingHours" onChange={handleChange} type="text" variant="static" color={sidenavType==='dark'?'white': 'blue-gray'}/>
                <Input label="Days Available" name="daysAvailable" onChange={handleChange} type="text" variant="static" color={sidenavType==='dark'?'white': 'blue-gray'}/>
                <Input label="Rest Days" name="restDays" onChange={handleChange} type="text" variant="static" color={sidenavType==='dark'?'white': 'blue-gray'}/>
                <Input label="Class Schedule" name="classSchedule" onChange={handleChange} type="text" variant="static" color={sidenavType==='dark'?'white': 'blue-gray'}/>
                <Input label="Expertise Areas" name="expertiseAreas" onChange={handleChange} type="text" variant="static" color={sidenavType==='dark'?'white': 'blue-gray'}/>
                <Input label="Specialized Skills" name="specializedSkills" onChange={handleChange} type="text" variant="static" color={sidenavType==='dark'?'white': 'blue-gray'}/>
                <Select label="Session Type" name="sessionType" onChange={handleChange} variant="static">
                  <Option value="" >Select Session Type</Option>
                  <Option value="individual">Individual</Option>
                  <Option value="group">Group</Option>
                </Select>
                <Input label="Session Duration" name="sessionDuration" onChange={handleChange} type="text" variant="static" color={sidenavType==='dark'?'white': 'blue-gray'}/>
                <Select label="Preferred Communication" name="preferredCommunication" onChange={handleChange} variant="static" >
                  <Option value="">Select Preferred Communication</Option>
                  <Option value="email">Email</Option>
                  <Option value="phone">Phone</Option>
                  <Option value="inPerson">In Person</Option>
                </Select>
                <Select label="Client Consultation Availability" name="clientConsultationAvailability" onChange={handleChange} variant="static">
                  <Option value="">Select Availability</Option>
                  <Option value="available">Available</Option>
                  <Option value="unavailable">Unavailable</Option>
                </Select>
                <Input label="Preferred Equipment" name="preferredEquipment" onChange={handleChange} type="text" variant="static" color={sidenavType==='dark'?'white': 'blue-gray'}/>
              </div>
              <div className="mt-10 flex justify-end gap-4">
                <Button type="submit" variant="filled" className={`${sidenavType==='dark'? "bg-red-700": "bg-black"}`}>Add Trainer</Button>
               <Link to='/dashboard/TrainersList'>
               <Button variant="filled" className={`${sidenavType==='dark'? "bg-gray-800": " bg-blue-gray-600"}`}>Cancel</Button>
               </Link>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
export default AddTrainers