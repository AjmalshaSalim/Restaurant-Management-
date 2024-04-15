

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, CardHeader, CardBody, Typography, Button } from '@material-tailwind/react';
import { useMaterialTailwindController } from "../../../context/index";
import { Link } from 'react-router-dom';

export const paymentPlansData = [
    {
      id: 1,
      type: "Muscle Gain",
      day: "Sunday",
      time: "1:00",
      foods: ["2 Eggs", "1 Litre Water", "2 Badams","Meals"]
    },
    {
      id: 2,
      type: "Weight Gain",
      day: "Monday",
      time: "1:30",
      foods: ["2 Eggs", "1 Litre Water", "4 Banana","Meals"]
    },
    {
      id: 3,
      type: "Weight Lose",
      day: "Tuesday",
      time: "1:30",
      foods: ["2 Eggs", "1 Litre Water", "250 gm Chicken","Meals"]
    },
    {
      id: 4,
      type: "Keeto",
      day: "Wednesday",
      time: "9:30",
      foods: ["2 Eggs", "1 Litre Water", "50 gm Peanut Butter", "1 Glass Milk", "Meals"]
    }
  ];

export function AllDietPlans() {
  useEffect(() => {
    AOS.init();
  }, []);
const handleClickCreatePlan = ()=>{
  alert("clicked")
}
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;
  return (
    <div className=" p-5 w-full h-[1100px] overflow-scroll">
        <div className={`flex w-full pt-3 pb-4 border-x border-y rounded-xl ${sidenavType === 'dark'? " bg-gray-900 bg-opacity-90 border-gray-800" : ""} `}>
          <div className=' w-5/6 h-10'>
          <Typography variant="h6" color="white" className='pl-5 mt-2'>
            Plans
          </Typography>
          </div>
          <div className=' w-1/6 h-10'>
            <Link to='/dashboard/createDietPlans'>
            <Button variant="filled" className={` ${sidenavType === 'dark'? "bg-red-700 hover:bg-red-900" : "bg-black"}`}>
                Create Plan
              </Button>
              </Link></div>    
        </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`} data-aos="fade-up" data-aos-duration="700">
        {paymentPlansData.map(({ id, day, time, foods, type }, index) => (
          <Card key={id} className={`${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90" : "bg-white"} shadow-xl mt-16`}>
            <CardHeader className={`flex justify-center  ${sidenavType === 'dark' ? "bg-gray-800" : "bg-white"} rounded-md py-4`}>
              <Typography variant="h6" color={sidenavType === 'dark'? 'white' : 'black'} className="text-center">
                {day}
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h6" className={`text-center border-b pb-2 ${sidenavType === 'dark' ? "text-white" : "text-blue-gray-900 border-gray-800"}`}>
                {type} Diet
              </Typography>
              <Typography variant="h6" className={`text-center ${sidenavType === 'dark' ? "text-white" : "text-blue-gray-900"}`}>
               Time - {time} 
              </Typography>
              <div className="flex flex-col items-center gap-2 h-36 overflow-scroll">
                {foods.map((feature, featureIndex) => (
                  <Typography key={featureIndex} className={`text-sm pb-1 ${sidenavType === 'dark' ? "text-gray-400 border-b border-gray-800" : "text-blue-gray-500"}`}>
                   - {feature}
                  </Typography>
                ))}
              </div>
              <Button variant="filled" className={`${sidenavType === 'dark'? "bg-green-700 hover:bg-green-900" : "bg-black"}`}>
                Edit Diet Plan
              </Button>
              <Button variant="filled" className={`${sidenavType === 'dark'? "bg-red-700 hover:bg-red-900" : "bg-black"}`}>
                Delete Diet Plan
              </Button>

            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AllDietPlans;

