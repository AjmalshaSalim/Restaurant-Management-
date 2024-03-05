import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { List_Equipments } from '../../../actions/EquipmentsActions';
import { useNavigate } from 'react-router-dom';
import {
  useMaterialTailwindController
} from "../../../context/index";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";


export default function GymEquipments() {
  const navigate = useNavigate();
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  const [equipments, setEquipments] = useState([]);
  const [showAddEquipmentForm, setShowAddEquipmentForm] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const equipmentsPerPage = 6;
  const pagesVisited = pageNumber * equipmentsPerPage;

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await List_Equipments();
        setEquipments(response);
      } catch (error) {
        console.error('Failed to fetch equipments', error);
      }
    };
    fetchEquipments();
  }, []);

  const pageCount = Math.ceil(equipments.length / equipmentsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const toggleAddEquipmentForm = () => setShowAddEquipmentForm(!showAddEquipmentForm);

  function AddEquipmentForm() {

    const [equipmentData, setEquipmentData] = useState({
      image: null,
      name: '',
      category: '',
      model_number: '',
      purchase_date: '',
      manufacturer:'',
      purchase_price: 0,
      warranty_information: '',
      warranty_expiration_date: '',
      condition: '',
      maintenance_charge: 0,
      availability: false,
      additional_notes: '',
    });

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setEquipmentData(prevState => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };

    const handlePhotoChange = (e) => {
      console.log(e.target.files[0]);
      setEquipmentData(prevState => ({
        ...prevState,
        image: e.target.files[0],
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
     
      console.log('FormData:', equipmentData); //
      const formData = new FormData();
      Object.entries(equipmentData).forEach(([key, value]) => {
        formData.append(key, value); 
      });
      
      try {
        const response = await axios.post('https://achujozef.pythonanywhere.com/api/add-equipment/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data);
        navigate ('/dashboard/gym-equipments')
    
      } catch (error) {
        console.error('Error adding product:', error);
      }
    
    return (
      <>
        <div className='flex flex-row justify-between items-center mt-16 mb-5 '>
          <h1 className='font-semibold text-center flex-grow '>Add Equipment</h1>
          <button onClick={toggleAddEquipmentForm} className="py-1 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Back
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-gray-300 p-4 rounded-xl" encType="multipart/form-data">
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-black">Equipment Image</label>
            <input type="file" name="image" id="image" onChange={handlePhotoChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black" />          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black">Equipment Name</label>
            <input type="text" name="name" value={equipmentData.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"/>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-black">Equipment Category</label>
            <select name="category" value={equipmentData.category} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black">
              <option value="">Select Category</option>
              <option value="cardio">Cardio</option>
              <option value="strength">Strength</option>
              <option value="free_weights">Free Weights</option>
              <option value="machines">Machines</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="modelNumber" className="block text-sm font-medium text-black">Model Number</label>
            <input type="text" name="model_number" value={equipmentData.model_number} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"/>
          </div>
          <div>
            <label htmlFor="purchaseDate" className="block text-sm font-medium text-black">Purchase Date (YYYY-MM-DD)</label>
            <input type="text" name="purchase_date" value={equipmentData.purchase_date} onChange={handleChange} pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"/>
          </div>
          <div>
            <label htmlFor="purchasePrice" className="block text-sm font-medium text-black">Purchase Price</label>
            <input type="number" name="purchase_price" value={equipmentData.purchase_price} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black" step="any" style={{appearance: "textfield"}}/>
          </div>
          <div>
            <label htmlFor="manufacturer" className="block text-sm font-medium text-black">Manufacturer</label>
            <input type="text" name="manufacturer" value={equipmentData.manufacturer} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"/>
          </div>
          <div>
            <label htmlFor="warrantyInformation" className="block text-sm font-medium text-black">Warranty Information</label>
            <input type="text" name="warranty_information" value={equipmentData.warranty_information} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"/>
          </div>
          <div>
            <label htmlFor="warrantyExpirationDate" className="block text-sm font-medium text-black">Warranty Expiration Date (YYYY-MM-DD)</label>
            <input type="text" name="warranty_expiration_date" value={equipmentData.warranty_expiration_date} onChange={handleChange} pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"/>
          </div>
          <div>
            <label htmlFor="condition" className="block text-sm font-medium text-black">Condition</label>
            <select name="condition" value={equipmentData.condition} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black">
              <option value="">Select Condition</option>
              <option value="new">New</option>
              <option value="used">Used</option>
              <option value="refurbished">Refurbished</option>
            </select>
          </div>
          <div>
            <label htmlFor="maintenanceCharge" className="block text-sm font-medium text-black">Maintenance Charge</label>
            <input type="number" name="maintenance_charge" value={equipmentData.maintenance_charge} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"/>
          </div>
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-black">Availability</label>
            <input type="checkbox" name="availability" checked={equipmentData.availability} onChange={handleChange} className="mt-1"/>
          </div>
          <div>
            <label htmlFor="additionalNotes" className="block text-sm font-medium text-black">Additional Notes</label>
            <textarea name="additional_notes" value={equipmentData.additional_notes} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"></textarea>
          </div>
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Add Equipment
          </button>
        </form>
      </>
    );
  }
  }
  return (
    <>
    {showAddEquipmentForm ? (
      <AddEquipmentForm />
    ) : (
      <>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex justify-between items-center flex-col lg:flex-row">
          <div className="flex items-center mb-4 lg:mb-0">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Equipments</h2>
          </div>
          <div className="flex items-center flex-col lg:flex-row">
            <div className="relative border-2 py-2 rounded-lg mb-4 lg:mb-0 lg:mr-4 bg-white">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
              </div>
              <input type="text" placeholder="Search Equipments..." className="block w-full pl-10 pr-12 sm:text-sm rounded-md focus:outline-none" />
            </div>
            <button onClick={toggleAddEquipmentForm} className="inline-flex justify-center py-2 px-4 mb-4 shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              {showAddEquipmentForm ? 'Hide' : 'Add Equipment'}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in-down">
          {equipments
            .slice(pagesVisited, pagesVisited + equipmentsPerPage)
            .map((equipment, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
                  sidenavType === 'dark'
                    ? 'bg-gray-800 text-white'
                    : 'bg-white text-gray-900'
                } rounded-lg overflow-hidden my-2 mx-4`}
              >
                <Card className="w-full">
                  <CardHeader floated={false} className="h-48">
                    <img src={equipment.image} alt="equipment" className="w-full h-full object-cover"/>
                  </CardHeader>
                  <CardBody className="text-center">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {equipment.name}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                      {equipment.category}
                    </Typography>
                  </CardBody>
                  <CardFooter className="flex justify-center gap-4 pt-2">
                    <Tooltip content="Edit">
                      <button className="text-blue-500 hover:text-blue-600">
                        <i className="fas fa-edit" />
                      </button>
                    </Tooltip>
                    <Tooltip content="Delete">
                      <button className="text-red-500 hover:text-red-600">
                        <i className="fas fa-trash" />
                      </button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </div>
            ))}
        </div>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'flex justify-center items-center my-8'}
          pageLinkClassName={'mx-2 px-4 py-2 rounded-md text-black hover:bg-blue-100'}
          previousLinkClassName={'mx-2 px-4 py-2 rounded-md text-black hover:bg-blue-100'}
          nextLinkClassName={'mx-2 px-4 py-2 rounded-md text-black hover:bg-blue-100'}
          disabledClassName={'opacity-50 cursor-not-allowed'}
          activeClassName={'bg-blue-600 text-white'}
        />
      </>
    )}
  </>
  );

}










