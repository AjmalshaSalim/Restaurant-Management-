import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Typography, Button, Avatar } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useMaterialTailwindController } from "../../../context/index";
import { MdDelete } from "react-icons/md";

const CreatePlans = () => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    image: '',
    price: '',
    features: [''],
  });

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
    <div className="w-full h-[920px] overflow-y-scroll p-5 ">
      <div className={`flex w-full pt-3 pb-4 border-x border-y rounded-xl ${sidenavType==='dark' ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200 text-black"}`}>
        <div className=' w-5/6 h-10'>
          <Typography variant="h6" color={sidenavType === 'dark'? "white" : "black"} className='pl-5 mt-2'>
            Create Plan
          </Typography>
        </div>
        <div className= "w-1/6 h-10" >
          <Link to='/dashboard/Plans'>
            <Button variant="filled" className={`${sidenavType==='dark'?"bg-red-700" : "bg-black"}`}>
              Back to Plans
            </Button>
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <Card className={`bg-white shadow-xl mt-16 ${sidenavType === 'dark' ? "bg-gray-900" : "bg-white"}`}>
          <CardHeader className={`flex justify-center bg-white rounded-md py-4 ${sidenavType === 'dark'? "bg-gray-800 text-white" : "bg-white text-black"}`}>
            <Typography variant="h6" className="text-center">
              {formData.title || "New Plan"}
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <input type="text" name="id" placeholder="ID" value={formData.id} onChange={handleChange} className={`p-2 rounded-md border-x border-y ${sidenavType==='dark'? "bg-gray-900 border-gray-800" : "border-gray-200"}`} />
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className={`p-2 rounded-md border-x border-y ${sidenavType==='dark'? "bg-gray-900 border-gray-800" : "border-gray-200"}`} />
            <input type="file" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className={`p-2 rounded-md border-x border-y ${sidenavType==='dark'? "bg-gray-900 border-gray-800" : "border-gray-200"}`} />
            <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className={`p-2 rounded-md border-x border-y ${sidenavType==='dark'? "bg-gray-900 border-gray-800" : "border-gray-200"}`} />
            <div>
              {formData.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 my-2">
                  <input type="text" placeholder={`Feature ${index + 1}`} value={feature} onChange={(e) => handleFeaturesChange(e, index)} className={`p-2 border-x border-y rounded-md focus:outline-none flex-grow ${sidenavType==='dark'? "border-gray-800 bg-gray-900": "border-gray-200"}`} />
                  <button type="button" onClick={() => removeFeature(index)} className="p-2 bg-red-500 text-white rounded-md focus:outline-none"><MdDelete className="text-xl"/></button>
                </div>
              ))}
              <button type="button" onClick={addFeature} className="p-2 my-2 bg-green-500 text-white rounded-md focus:outline-none">Add Features</button>
            </div>
            <Button type="submit" variant="filled" className={`${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>
              Create Plan
            </Button>
          </CardBody>
        </Card>
      </form>
    </div>
  );
};

export default CreatePlans;
