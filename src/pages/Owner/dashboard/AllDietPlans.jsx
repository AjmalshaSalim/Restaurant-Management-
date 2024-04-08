

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, CardHeader, CardBody, Typography, Button } from '@material-tailwind/react';
import { useMaterialTailwindController } from "../../../context/index";
import { Link } from 'react-router-dom';

export const paymentPlansData = [
    {
      id: 1,
      title: "Basic Plan",
      price: "1500/month",
      features: ["Access to all equipment", "1 fitness consultation", "2 group classes per month"]
    },
    {
      id: 2,
      title: "Premium Plan",
      price: "1200/month",
      features: ["All Basic Plan features", "Unlimited group classes", "4 personal training sessions"]
    },
    {
      id: 3,
      title: "Elite Plan",
      price: "1000/month",
      features: ["All Premium Plan features", "Personalized nutrition plan", "Spa and sauna access"]
    },
    {
      id: 4,
      title: "Special Plan",
      price: "900/month",
      features: ["All Premium Plan features", "Personalized nutrition plan", "Spa and sauna access", "yoga"]
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
    <div className="w-full h-full overflow-auto p-5">
        <div className={`flex w-full pt-3 pb-4 border-x border-y rounded-xl ${sidenavType === 'dark'? " bg-gray-900 bg-opacity-90 border-gray-800" : ""} `}>
          <div className=' w-5/6 h-10'>
          <Typography variant="h6" color="white" className='pl-5 mt-2'>
            Plans
          </Typography>
          </div>
          <div className=' w-1/6 h-10'>
            <Link to='/dashboard/CreatePlans'>
            <Button variant="filled" className={` ${sidenavType === 'dark'? "bg-red-700 hover:bg-red-900" : "bg-black"}`}>
                Create Plan
              </Button>
              </Link></div>    
        </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`} data-aos="fade-up" data-aos-duration="700">
        {paymentPlansData.map(({ id, title, price, features }, index) => (
          <Card key={id} className={`${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90" : "bg-white"} shadow-xl mt-16`}>
            <CardHeader className={`flex justify-center  ${sidenavType === 'dark' ? "bg-gray-800" : "bg-white"} rounded-md py-4`}>
              <Typography variant="h6" color={sidenavType === 'dark'? 'white' : 'black'} className="text-center">
                {title}
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h6" className={`text-center ${sidenavType === 'dark' ? "text-white" : "text-blue-gray-900"}`}>
              ₹ {price} / month
              </Typography>
              <div className="flex flex-col items-center gap-2">
                {features.map((feature, featureIndex) => (
                  <Typography key={featureIndex} className={`text-sm pb-1 ${sidenavType === 'dark' ? "text-gray-400 border-b border-gray-800" : "text-blue-gray-500"}`}>
                   - {feature}
                  </Typography>
                ))}
              </div>
              <Button variant="filled" className={`${sidenavType === 'dark'? "bg-red-700 hover:bg-red-900" : "bg-black"}`}>
                Edit Plan
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AllDietPlans;

