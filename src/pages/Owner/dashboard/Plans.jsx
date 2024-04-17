
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, CardHeader, CardBody, Typography, Button, Avatar } from '@material-tailwind/react';
import { useMaterialTailwindController } from "../../../context/index";
import { Link } from 'react-router-dom';
import {List_Gym_Plans,Delete_Gym_Plans} from "../../../actions/GymPlansActions"

export const paymentPlansData = [
    {
      id: 1,
      title: "Basic Plan",
      image: "../../../assets/images/Dumbel_Workout.jpg",
      price: "1500/month",
      features: ["Access to all equipment", "1 fitness consultation", "2 group classes per month"]
    },
    {
      id: 2,
      title: "Premium Plan",
      image: "",
      price: "1200/month",
      features: ["All Basic Plan features", "Unlimited group classes", "4 personal training sessions"]
    },
    {
      id: 3,
      title: "Elite Plan",
      image: "",
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

export function Plans() {

  const [gymPlans, setGymPlans] = useState([]);
  // const [showTerms, setShowTerms] = useState([]);
  useEffect(() => {
    AOS.init();
  }, []);
useEffect(() => {
  async function fetchGymPlans() {
      try {
          const plans = await List_Gym_Plans();
          setGymPlans(plans);
          // setShowTerms(new Array(plans.length).fill(false));
          console.log('Fetched gym plans:', plans);
      } catch (error) {
          console.error('Error fetching gym plans:', error);
      }
  }
  fetchGymPlans();
}, []);

const handleDeletePlan = async (id) => {
  try {
    await Delete_Gym_Plans(id);
    const updatedPlans = await List_Gym_Plans();
    setGymPlans(updatedPlans);
    console.log(`Plan with id ${id} deleted successfully`);
  } catch (error) {
    console.error(`Error deleting plan with id ${id}:`, error);
  }
};
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  
  return (
    <div className="p-5 w-full h-[1100px] overflow-scroll" >
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
        {gymPlans.map((data, index) => (
          <Card key={index} className={`${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90" : "bg-white"} shadow-xl mt-16`}>
            <CardHeader className={`flex justify-center  ${sidenavType === 'dark' ? "bg-gray-800" : "bg-white"} rounded-md py-4`}>
              <Typography variant="h6" color={sidenavType === 'dark'? 'white' : 'black'} className="text-center">
                {data.name}
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
            {data.image ?
                  <div className={`relative w-32 h-20 mx-auto`}>
                    <Avatar
                      src={data.image}
                      alt="Profile Image"
                      size="xl"
                      variant="rounded"
                      className="rounded-lg shadow-lg shadow-blue-gray-500/40 border mx-7"
                    />
                  </div>
                  :
                  <div className="flex items-center justify-center font-poppins h-full">
                  no image...
                </div>                  
                }
              <Typography variant="h6" className={`text-center ${sidenavType === 'dark' ? "text-white" : "text-blue-gray-900"}`}>
              {data.description}
              </Typography>
              <Typography variant="h6" className={`text-center ${sidenavType === 'dark' ? "text-white" : "text-blue-gray-900"}`}>
              ₹ {data.price} / {data.duration_type}
              </Typography>
              <div className="flex flex-col items-center gap-2">
                {data.features.map((feature, featureIndex) => (
                  <Typography key={featureIndex} className={`text-sm pb-1 ${sidenavType === 'dark' ? "text-gray-400 border-b border-gray-800" : "text-blue-gray-500"}`}>
                   - {feature}
                  </Typography>
                ))}
              </div>
              <Link to='/dashboard/EditPlan' className="w-full">
              <Button variant="filled" className={`w-full ${sidenavType === 'dark'? "bg-green-700 hover:bg-green-900" : "bg-black"}`}>
                Edit Plan
              </Button>
              </Link>
              <Button variant="filled" onClick={()=>handleDeletePlan(data.id)} className={`${sidenavType === 'dark'? "bg-red-700 hover:bg-red-900" : "bg-black"}`}>
                Delete Plan
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Plans;

