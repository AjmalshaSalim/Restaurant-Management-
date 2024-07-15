import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { MdEdit, MdDelete } from "react-icons/md";
import { List_Equipments, ADD_Equipments, Edit_Equipments, Delete_Equipments } from '../../../actions/EquipmentsActions';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaDumbbell } from "react-icons/fa";
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
import {
  Button,
} from '@material-tailwind/react';


export default function GymEquipments() {

  const navigate = useNavigate();
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  const [showAddEquipmentForm, setShowAddEquipmentForm] = useState(false);
  const [showEditEquipmentForm, setShowEditEquipmentForm] = useState(false);
  const [equipments, setEquipments] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');


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
  const toggleAddEquipmentForm = () => {
    setShowAddEquipmentForm(!showAddEquipmentForm);
  }
  const handleAddEquipmentFormToggle = () => {
    setShowAddEquipmentForm(prevState => !prevState);

  };
  const handleEditEquipments = (equipment) => {
    //
    setShowEditEquipmentForm(!showEditEquipmentForm)
    // console.log(equipment);
  }
  const handleEditEquipmentToggle = () => {
    setShowEditEquipmentForm(prevState => !prevState);
  }
  const handleDeleteEquipments = async (id) => {
    try {
      await Delete_Equipments(id);
      setEquipments(prevEquipments => prevEquipments.filter(equipment => equipment.id !== id));
      toast("Equipment deleted successfully");
    } catch (error) {
      console.error('Failed to delete equipments', error);
    }
  }

  const filteredEquipments = equipments.filter((equipment) =>
    equipment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    equipment.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    equipment.id.toString().includes(searchQuery.toLowerCase())
  );



  const AddEquipmentForm = () => {
    const [equipmentData, setEquipmentData] = useState({
      image: null,
      name: '',
      category: '',
      model_number: '',
      purchase_date: '',
      manufacturer: '',
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
      const file = e.target.files[0];
      if (file) {
        setEquipmentData(prevState => ({
          ...prevState,
          image: file,
        }));
      } else {
        console.error('No file selected');
      }
    };;

    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData();
      for (const key in equipmentData) {
        formData.append(key, equipmentData[key]);
      }

      try {
        formData.forEach((value, key) => {
          console.log(key, value);
        });

        const response = await ADD_Equipments(equipmentData);
        console.log(response.data);
        toast("Added");
        navigate('/dashboard/gym-equipments');
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };

    return (
      <>
        <div className=" w-full h-[1100px] overflow-scroll">
          <div className='flex flex-row justify-between items-center mt-8 mb-3'>
            <h1 className={`text-3xl font-extrabold tracking-tight flex-grow ${sidenavType === 'dark' ? "text-white" : "text-black"}`}>Add Equipments</h1>
            <Button onClick={handleAddEquipmentFormToggle} className={` px-4 shadow-sm font-medium py-3 ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>
              Back
            </Button>
          </div>

          <form onSubmit={handleSubmit} encType="multipart/form-data" className={`grid-cols-1 border-x border-y rounded-lg mb-12 pt-10 pb-10 grid gap-y-5 gap-x-5 pl-16 md:pl-20 lg:grid-cols-2 xl:grid-cols-3 w-full ${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90 border-gray-800 text-white" : "bg-white text-black"}`}>
            <div>
              <Typography variant="small" className="font-medium">Equipment Image</Typography>
              <input type="file" name="image" id="image" onChange={handlePhotoChange} className="w-[280px] py-2 pl-2 rounded-lg bg-transparent border-x border-y border-gray-500" />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Equipment Name</Typography>
              <input type="text" name="name" placeholder="Eg : Dumbel" value={equipmentData.name} onChange={handleChange} className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Equipment Category</Typography>
              <select name="category" value={equipmentData.category} onChange={handleChange} className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`}>
                <option value="">Select Category</option>
                <option value="cardio">Cardio</option>
                <option value="strength">Strength</option>
                <option value="free_weights">Free Weights</option>
                <option value="machines">Machines</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <Typography variant="small" className="font-medium">Model Number</Typography>
              <input type="text" name="model_number" placeholder="Eg : 001" value={equipmentData.model_number} onChange={handleChange} className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Purchase Date (YYYY-MM-DD)</Typography>
              <input type="text" name="purchase_date" value={equipmentData.purchase_date} onChange={handleChange} pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD" className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Purchase Price</Typography>
              <input type="number" name="purchase_price" value={equipmentData.purchase_price} onChange={handleChange} className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} step="any" style={{ appearance: "textfield" }} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Manufacturer</Typography>
              <input type="text" name="manufacturer" placeholder="Eg : Hitachee" value={equipmentData.manufacturer} onChange={handleChange} className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Warranty Information</Typography>
              <input type="text" name="warranty_information" placeholder="Eg : 6 months" value={equipmentData.warranty_information} onChange={handleChange} className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Warranty Expiration Date (YYYY-MM-DD)</Typography>
              <input type="text" name="warranty_expiration_date" value={equipmentData.warranty_expiration_date} onChange={handleChange} pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD" className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Condition</Typography>
              <select name="condition" value={equipmentData.condition} onChange={handleChange} className={`py-2 pl-2 pr-20 w-[280px] rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`}>
                <option value="">Select Condition</option>
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="refurbished">Refurbished</option>
              </select>
            </div>
            <div>
              <Typography variant="small" className="font-medium">Maintenance Charge</Typography>
              <input type="number" name="maintenance_charge" value={equipmentData.maintenance_charge} onChange={handleChange} className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Availability</Typography>
              <input type="checkbox" name="availability" checked={equipmentData.availability} onChange={handleChange} className="w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500" />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Additional Notes</Typography>
              <textarea name="additional_notes" value={equipmentData.additional_notes} onChange={handleChange} className={`py-2 pl-2 pr-20 w-[280px] rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`}></textarea>
            </div>
            <div className="pt-3 pl-10 md:mr-10 mt-3">
              <Button type="submit" onClick={handleSubmit} className={`${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>Add Equipment</Button>
            </div>
          </form>

        </div>
      </>

    );
  }
  const EditEquipmentForm = ({ equipments }) => {
    const [equipmentData, setEquipmentData] = useState({
      image: null,
      name: '',
      category: '',
      model_number: '',
      purchase_date: '',
      manufacturer: '',
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
      const file = e.target.files[0];
      if (file) {
        setEquipmentData(prevState => ({
          ...prevState,
          image: file,
        }));
      } else {
        console.error('No file selected');
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(equipments);
      const formData = new FormData();
      // // Add equipment data fields to formData
      // Object.entries(equipmentData).forEach(([key, value]) => {
      //   formData.append(key, value);
      // });

      // // Append file to formData
      formData.append('image', equipmentData.image);

      try {
        // Check if image field is set
        if (!equipmentData.image) {
          console.error('No image selected');
          return;
        }

        const response = await Edit_Equipments(equipmentData.id);

        console.log(response.data);
        toast("Added");
        navigate('/dashboard/gym-equipments');
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };

    return (
      <>
        <div className=" w-full h-[870px] overflow-scroll">
          <div className='flex flex-row justify-between items-center mt-8 mb-3'>
            <h1 className={`text-3xl font-extrabold tracking-tight flex-grow ${sidenavType === 'dark' ? "text-white" : "text-black"}`}>Edit Equipments</h1>
            <Button onClick={handleEditEquipmentToggle} className={` px-4 shadow-sm font-medium py-3 ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>
              Back
            </Button>
          </div>

          <form onSubmit={handleSubmit} encType="multipart/form-data" className={`grid-cols-1 border-x border-y rounded-lg mb-12 pt-10 pb-10 grid gap-y-5 gap-x-5 pl-16 md:pl-20 lg:grid-cols-2 xl:grid-cols-3 w-full ${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90 border-gray-800 text-white" : "bg-white text-black"}`}>
            <div>
              <Typography variant="small" className="font-medium">Equipment Image</Typography>
              <input type="file" name="image" id="image" onChange={handlePhotoChange} className="w-[280px] py-2 pl-2 rounded-lg bg-transparent border-x border-y border-gray-500" />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Equipment Name</Typography>
              <input type="text" name="name" placeholder="Eg : Dumbel" value={equipmentData.name} onChange={handleChange} className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Equipment Category</Typography>
              <select name="category" value={equipmentData.category} onChange={handleChange} className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`}>
                <option value="">Select Category</option>
                <option value="cardio">Cardio</option>
                <option value="strength">Strength</option>
                <option value="free_weights">Free Weights</option>
                <option value="machines">Machines</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <Typography variant="small" className="font-medium">Model Number</Typography>
              <input type="text" name="model_number" placeholder="Eg : 001" value={equipmentData.model_number} onChange={handleChange} className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Purchase Date (YYYY-MM-DD)</Typography>
              <input type="text" name="purchase_date" value={equipmentData.purchase_date} onChange={handleChange} pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD" className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Purchase Price</Typography>
              <input type="number" name="purchase_price" value={equipmentData.purchase_price} onChange={handleChange} className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} step="any" style={{ appearance: "textfield" }} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Manufacturer</Typography>
              <input type="text" name="manufacturer" placeholder="Eg : Hitachee" value={equipmentData.manufacturer} onChange={handleChange} className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Warranty Information</Typography>
              <input type="text" name="warranty_information" placeholder="Eg : 6 months" value={equipmentData.warranty_information} onChange={handleChange} className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Warranty Expiration Date (YYYY-MM-DD)</Typography>
              <input type="text" name="warranty_expiration_date" value={equipmentData.warranty_expiration_date} onChange={handleChange} pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD" className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Condition</Typography>
              <select name="condition" value={equipmentData.condition} onChange={handleChange} className={`py-2 pl-2 pr-20 w-[280px] rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`}>
                <option value="">Select Condition</option>
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="refurbished">Refurbished</option>
              </select>
            </div>
            <div>
              <Typography variant="small" className="font-medium">Maintenance Charge</Typography>
              <input type="number" name="maintenance_charge" value={equipmentData.maintenance_charge} onChange={handleChange} className={`w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`} />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Availability</Typography>
              <input type="checkbox" name="availability" checked={equipmentData.availability} onChange={handleChange} className="w-[280px] py-2 pl-2 pr-20 rounded-lg bg-transparent border-x border-y border-gray-500" />
            </div>
            <div>
              <Typography variant="small" className="font-medium">Additional Notes</Typography>
              <textarea name="additional_notes" value={equipmentData.additional_notes} onChange={handleChange} className={`py-2 pl-2 pr-20 w-[280px] rounded-lg bg-transparent border-x border-y border-gray-500 ${sidenavType === 'dark' ? "border-gray-600" : "border-blue-gray-100"}`}></textarea>
            </div>
            <div className="pt-3 pl-10 md:mr-10 mt-3">
              <Button type="submit" onClick={handleSubmit} className={`${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>Save Changes</Button>
            </div>
          </form>

        </div>
      </>

    );
  }

  return (
    <>
      <div className=" w-full h-[1100px] overflow-scroll">
        <ToastContainer />
        {showAddEquipmentForm ? (
          <AddEquipmentForm />
        ) : showEditEquipmentForm ? (
          <EditEquipmentForm />

        ) : (
          <>
            {equipments.length > 0 ?
              <div>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex justify-between items-center flex-col lg:flex-row">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <h2 className={`text-3xl font-extrabold tracking-tight ${sidenavType === 'dark' ? "text-white" : "text-black"}`}>Equipments</h2>
                  </div>
                  <div className="flex items-center flex-col lg:flex-row">
                    <div className={`relative border-2 py-2 rounded-lg mb-4 lg:mb-0 lg:mr-4 ${sidenavType === 'dark' ? "bg-black" : "bg-white"}`}>
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                      </div>


                      <input type="text" placeholder="Search Equipments..."  value={searchQuery}   onChange={(e) => setSearchQuery(e.target.value)} className="block w-full pl-10 pr-12 sm:text-sm rounded-md focus:outline-none bg-transparent text-white " />
                    </div>
                    <Button size='sm' onClick={toggleAddEquipmentForm} className={`py-3 -mt-6 ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>
                      {showAddEquipmentForm ? 'Hide' : 'Add Equipments'}
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in-down">
                  {filteredEquipments
                    .slice(pagesVisited, pagesVisited + equipmentsPerPage)
                    .map((equipment, index) => (
                      <div
                        key={equipment.id}
                        className={`relative flex flex-col items-center shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${sidenavType === 'dark'
                          ? 'bg-gray-800 text-white'
                          : 'bg-white text-gray-900'
                          } rounded-lg overflow-hidden my-2 mx-4`}
                      >
                        <Card className={`w-full ${sidenavType === 'dark' ? "bg-black" : "bg-white"}`}>
                          <CardHeader floated={false} className="h-64">
                            <img src={equipment.image} alt="equipment" className="w-full h-full object-contain duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
                          </CardHeader>
                          <CardBody className="text-center">
                            <Typography variant="h5" color={sidenavType === 'dark' ? "white" : "blue-gray"} className="mb-2">
                              {equipment.name}
                            </Typography>
                            <Typography color={sidenavType === 'dark' ? "white" : "blue-gray"} className="font-medium text-opacity-75">
                              {equipment.category}
                            </Typography>
                          </CardBody>
                          <CardFooter className="flex justify-center gap-4 pt-2">
                            <Tooltip content="Edit" className=" border">
                              <Button className=" bg-green-700 text-black py-1 px-3" onClick={() => handleEditEquipments(equipment.id)}>
                                <MdEdit className='text-lg' />
                              </Button>
                            </Tooltip>
                            <Tooltip content="Delete" className=" border">
                              <Button onClick={() => handleDeleteEquipments(equipment.id)} className=" bg-red-700 text-black py-1 px-3">
                                <MdDelete className='text-lg' />
                              </Button>
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
                  pageLinkClassName={`mx-2 px-4 py-2 rounded-md hover:bg-[#ffffff1f]  ${sidenavType === 'dark' ? " text-white " : " text-white"}`}
                  previousLinkClassName={`mx-2 px-2 py-2 rounded-md ${sidenavType === 'dark' ? "text-white bg-black hover:border" : "text-black bg-white"}`}
                  nextLinkClassName={`mx-2 px-4 py-2 rounded-md ${sidenavType === 'dark' ? "text-white bg-black hover:border" : "text-black bg-white"}`}
                  disabledClassName={'opacity-50 cursor-not-allowed'}
                  activeClassName={'bg-red-700 px-1 py-2 rounded-md text-white'}
                />
              </div> :
              <div className=' w-full h-[800px]'>
                <div className='flex w-full pt-5'>
                  <div className='w-1/2'>
                  </div>
                  <div className="w-1/2 flex items-center flex-col lg:flex-row">
                    <div className={`relative border-1 py-[11px] rounded-lg mb-4 lg:mb-0 lg:mr-4 ${sidenavType === 'dark' ? "bg-black" : "bg-white"}`}>
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                      </div>
                      <input type="text" placeholder="Search " className={`block w-full pl-10 pr-12 sm:text-sm rounded-md focus:outline-none bg-transparent ${sidenavType === 'dark' ? "text-white" : "text-black"}`} />
                    </div>
                    <Button size='sm' onClick={toggleAddEquipmentForm} className={`py-3 -mt-6 ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}`}>
                      {showAddEquipmentForm ? 'Hide' : 'Add Equipments'}
                    </Button>
                  </div>
                </div>
                <div className={`w-[80%] h-2/6 mt-12 mx-auto rounded-3xl ${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90 border-x border-y border-gray-800" : "bg-white"}`}>
                  <div className='w-full h-1/2 pt-5'>
                    <FaDumbbell className={` mx-auto text-7xl ${sidenavType === 'dark' ? "text-white" : "text-black"}`} />
                  </div>
                  <div className='w-full text-center h-1/2 pt-4'>
                    <Typography
                      className=' text-sm'
                      color={sidenavType === 'dark' ? 'white' : 'black'}
                    >
                      No Equipments Found
                    </Typography>
                  </div>
                </div>
              </div>}

          </>
        )}
      </div>
    </>
  );
}






