import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, CardHeader, CardBody, Typography, Button, Input, Textarea } from '@material-tailwind/react';
import { useMaterialTailwindController } from "../../../context/index";

export function CreatePlans() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [planDetails, setPlanDetails] = useState({
    title: '',
    price: '',
    description: '',
    features: ''
  });

  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(planDetails);
    // Here you would usually send the data to the backend or handle it as needed
  };

  return (
    <div className="flex justify-center items-center h-[920px] overflow-scroll -mt-20">
      <Card className={`${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-80 border-gray-800" : "bg-white"} border-x border-y w-full max-w-8xl shadow-xl `}>
        <CardHeader className={`flex justify-center border-x border-y ${sidenavType === 'dark' ? "bg-gray-900 border-gray-800": ""}  rounded-xl py-4`}>
          <Typography variant="h6" color={sidenavType === 'dark'? 'white' : 'black'} className="text-center">
            Create Gym Plan
          </Typography>
        </CardHeader>
        <CardBody className={`flex flex-col gap-4  mb-10 ${sidenavType === 'dark' ? "" : ""}`}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:px-60">
            <Input
              type="text"
              color="lightBlue"
              size="regular"
              placeholder="Plan Title"
              name="title"
              value={planDetails.title}
              onChange={handleChange}
            />
            <Input
              type="number"
              color="lightBlue"
              size="regular"
              placeholder="Price ($)"
              name="price"
              value={planDetails.price}
              onChange={handleChange}
            />
            <Textarea
              color="lightBlue"
              size="regular"
              outline={true}
              placeholder="Plan Features (separate by commas)"
              name="features"
              value={planDetails.features}
              onChange={handleChange}
            />
            <Textarea
              color="lightBlue"
              size="regular"
              outline={true}
              placeholder="Plan Description"
              name="description"
              value={planDetails.description}
              onChange={handleChange}
            />
            <Button type="submit" variant="filled" className={`${sidenavType === 'dark'? "bg-red-700 hover:bg-red-900" : "bg-black"}`}>
              Create Plan
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default CreatePlans;
