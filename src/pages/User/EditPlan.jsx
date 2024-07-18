import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Typography, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useMaterialTailwindController } from "../../context/index";
import { MdDelete } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const EditPlan = () => {
  const [formData, setFormData] = useState({
    id: 1,
    title: "Basic Plan",
    image: null,
    price: "1500/month",
    features: ["Access to all equipment", "1 fitness consultation", "2 group classes per month"]
  });
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({
  //     ...formData,
  //     image: file,
  //   });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFeaturesChange = (e, index) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = e.target.value;
    setFormData({
      ...formData,
      features: newFeatures,
    });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, ''],
    });
  };

  const removeFeature = (index) => {
    const newFeatures = [...formData.features];
    newFeatures.splice(index, 1);
    setFormData({
      ...formData,
      features: newFeatures,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
  };
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;
  return (
    <div className=" p-5 w-full h-[1100px] overflow-scroll">
      <div className={`flex w-full pt-3 pb-4 border-x border-y rounded-xl ${sidenavType==='dark'? "bg-gray-900 border-gray-800" : "bg-white"}`}>
        <div className={` w-5/6 h-10`}>
          <Typography variant="h6" color={sidenavType==='dark'? "white" : "black"} className='pl-5 mt-2'>
            Edit Plan
          </Typography>
        </div>
        <div className=' w-1/6 h-10'>
          <Link to='/dashboard/Plans'>
            <Button variant="filled" className={`bg-black ${sidenavType=== 'dark'? "bg-red-700": "bg-black"}`}>
              Back to Plans
            </Button>
          </Link>
          <Link to="/dashboard/home" className='w-full'>
              <IoMdClose className=' w-8 h-8 absolute right-24 top-40 bg-gray-700 rounded-full p-[5px] text-gray-900 hover:bg-gray-500'/>
              </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <Card className={`bg-white shadow-xl mt-16 ${sidenavType==='dark'? "bg-gray-900": "bg-white"}`}>
          <CardHeader className={`flex justify-center bg-white rounded-md py-4 ${sidenavType==='dark'? "bg-gray-800 text-white" : "text-black bg-white border-gray-200"}`}>
            <Typography variant="h6" className="text-center">
              {formData.title}
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <input type="text" name="id" value={formData.id} onChange={handleChange} className={`p-2 border-x border-y rounded-md focus:outline-none ${sidenavType==='dark'? "bg-gray-900 border-gray-800 text-white":"bg-white text-black"}`} disabled />
            <input type="text" name="title" value={formData.title} onChange={handleChange} className={`p-2 border-x border-y rounded-md focus:outline-none ${sidenavType==='dark'? "bg-gray-900 border-gray-800 text-white":"bg-white text-black"}`} />
            <input type="file" name="image" value={formData.image} onChange={handleChange} className={`p-2 border-x border-y rounded-md focus:outline-none ${sidenavType==='dark'? "bg-gray-900 border-gray-800 text-white":"bg-white text-black"}`} />
            <input type="text" name="price" value={formData.price} onChange={handleChange} className={`p-2 border-x border-y rounded-md focus:outline-none ${sidenavType==='dark'? "bg-gray-900 border-gray-800 text-white":"bg-white text-black"}`} />
            <div>
              {formData.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input type="text" value={feature} onChange={(e) => handleFeaturesChange(e, index)} className={`p-2 my-2 rounded-md focus:outline-none flex-grow ${sidenavType=== 'dark'? "bg-gray-800 text-white":"bg-gray-100 text-black"}`} />
                  <button type="button" onClick={() => removeFeature(index)} className="p-2 bg-red-500 text-white rounded-md focus:outline-none"><MdDelete className='text-xl'/></button>
                </div>
              ))}
              <button type="button" onClick={addFeature} className="p-2 bg-green-500 text-white rounded-md focus:outline-none my-2">Add Feature</button>
            </div>
            <Button type="submit" variant="filled" className={`${sidenavType=== 'dark'? "bg-red-700" : "bg-black"}`}>
              Save Changes
            </Button>
          </CardBody>
        </Card>
      </form>
    </div>
  );
};

export default EditPlan;
