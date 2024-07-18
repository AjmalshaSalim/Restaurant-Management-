import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
} from '@material-tailwind/react';
import { useMaterialTailwindController } from "../../../context/index";

const categories = ["Weight Loss", "Muscle Gain", "Vegan", "Keto", "Paleo"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const times = ["Morning", "Afternoon", "Evening"];

export function CreateDietPlans() {
  const [dietPlan, setDietPlan] = useState({
    category: '',
    day: '',
    time: '',
    food: '',
    foodType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDietPlan({ ...dietPlan, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dietPlan);
    // Handle adding the diet plan data to state or sending it to backend
    // Reset the form after submission if needed
  };

  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="flex justify-center py-5 w-full h-[1100px] overflow-scroll">
      <Card className={`w-full h-[500px] max-w-8xl shadow-xl ${sidenavType === 'dark' ? 'bg-gray-900 bg-opacity-90' : 'bg-white'}`}>
        <CardHeader color="gray" className={`flex border-x border-y ${sidenavType === 'dark' ? "bg-gray-900 border-gray-800": ""} rounded-xl py-4`}>
          <Typography variant="h6" color="white" className='ml-6 w-40'>
            Create Diet Plan
          </Typography>
          <Link to="/dashboard/home" className='w-full'>
              <IoMdClose className=' w-8 h-8 absolute right-7 top-5 bg-gray-700 rounded-full p-[5px] text-gray-900 hover:bg-gray-500'/>
              </Link>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:px-20 pb-10">
            <div className="flex gap-4">
              <div className="pr-2 ">
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? "white" : "blue-gray"}
                  className=" font-medium"
                >
                  Category
                </Typography>
                <select
                  name="category"
                  value={dietPlan.category}
                  onChange={handleChange}
                  className={`py-2 pl-2 text-sm pr-20 rounded-lg bg-transparent w-[280px] border-x border-y ${sidenavType ? "text-gray-400 border-gray-700" : "text-blue-gray-600 border-blue-gray-100"}`}
                >
                  <option value="" disabled>Select Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="pr-2 ">
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? "white" : "blue-gray"}
                  className=" font-medium"
                >
                  Day
                </Typography>
                <select
                  name="day"
                  value={dietPlan.day}
                  onChange={handleChange}
                  className={`py-2 pl-2 pr-20 text-sm rounded-lg bg-transparent w-[280px] border-x border-y ${sidenavType ? "text-gray-400 border-gray-700" : "text-blue-gray-600 border-blue-gray-100"}`}
                >
                  <option value="" disabled>Select Day</option>
                  {days.map((day, index) => (
                    <option key={index} value={day}>{day}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="pr-2 ">
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? "white" : "blue-gray"}
                  className=" font-medium"
                >
                  Time
                </Typography>
                <select
                  name="time"
                  value={dietPlan.time}
                  onChange={handleChange}
                  className={`py-2 text-sm pl-2 pr-20 rounded-lg bg-transparent w-[280px] border-x border-y ${sidenavType ? "text-gray-400 border-gray-700" : "text-blue-gray-600 border-blue-gray-100"}`}
                >
                  <option value="" disabled>Select Time</option>
                  {times.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              <div className="pr-2 ">
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? "white" : "blue-gray"}
                  className=" font-medium"
                >
                  Food
                </Typography>
                <input
                  type="text"
                  name="food"
                  value={dietPlan.food}
                  onChange={handleChange}
                  placeholder="Enter The Food"
                  className={`py-2 pl-2 text-sm pr-20 rounded-lg bg-transparent w-[280px] border-x border-y ${sidenavType ? "text-gray-400 border-gray-700" : "text-blue-gray-600 border-blue-gray-100"}`}
                />
              </div>
            </div>
            <div className="pr-2 ">
              <Typography
                variant="small"
                color={sidenavType === 'dark' ? "white" : "blue-gray"}
                className=" font-medium"
              >
                Food Type
              </Typography>
              <select
                name="foodType"
                value={dietPlan.foodType}
                onChange={handleChange}
                className={`py-2 pl-2 text-sm pr-20 rounded-lg bg-transparent w-[280px] border-x border-y ${sidenavType ? "text-gray-400 border-gray-700" : "text-blue-gray-600 border-blue-gray-100"}`}
              >
                <option value="" disabled>Select Food Type</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </select>
            </div>
            <Link to="/dashboard/AllDietPlans" className="mt-2 text-blue-600 hover:underline">
              <Button type="submit" variant="filled" className={`mt-4 ${sidenavType === 'dark' ? "bg-red-700 hover:bg-red-900" : "bg-black"}`}>
                Add Diet Plan
              </Button>
            </Link>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default CreateDietPlans;
