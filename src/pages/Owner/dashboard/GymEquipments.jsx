import { useEffect, useState } from 'react';
import axios from 'axios';
import {ADD_Equipments} from '../../../actions/EquipmentsActions'
import {List_Equipments} from '../../../actions/EquipmentsActions'
import { useNavigate } from 'react-router-dom';
import {
  useMaterialTailwindController
} from "../../../context/index";
import EditEquipmentsForm from '../../../components/Owner/EditEquipments';

export default function GymEquipments() {
  const navigate=useNavigate()
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
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

  const [showAddEquipmentForm, setShowAddEquipmentForm] = useState(false);
  const [equipments,setEquipments]=useState([]);
  const [equipmentData,setEquipmentData]=useState({})
  const [showEditEquipmentForm,setShowEditEquipmentForm]=useState(false)
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

      Object.keys(equipmentData).forEach(key => {
        if (key === 'image' && equipmentData[key]) {
          formData.append(key, equipmentData[key], equipmentData[key].name);
        } else {
          formData.append(key, equipmentData[key]);
        }

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
    
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };
    
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


  return (
    <>
      {showAddEquipmentForm ? (
        <AddEquipmentForm />
      ) : (
        <>
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex justify-between items-center flex-col lg:flex-row">
            <div className="flex items-center mb-4 lg:mb-0">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Equipments</h2>
            </div>
            <div className="flex items-center flex-col lg:flex-row">
              <div className="relative border-2 py-2 rounded-lg mb-4 lg:mb-0 lg:mr-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                </div>
                <input type="text" placeholder="Search Equipments..." className="block w-full pl-10 pr-12 sm:text-sm rounded-md focus:outline-none" />
              </div>
              <button onClick={toggleAddEquipmentForm} className="inline-flex justify-center py-2 px-4 mb-4 shadow-sm text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {showAddEquipmentForm ? 'Hide' : 'Add equipment'}
              </button>
            </div>
            {showAddEquipmentForm && <AddEquipmentForm />}
          </div>
          <div className="flex flex-wrap justify-between">
            {equipments.map((equipment, index) => (
              <div key={index} className={`relative flex flex-col lg:flex-row items-center shadow-lg ${sidenavType === 'dark' ? "bg-black border-1 border-gray-900" : "bg-white"} rounded overflow-hidden my-2 mx-4 w-full lg:w-auto`}>
                <div className="absolute top-0 right-0 p-2">
                  <button onClick={() => {setShowEditEquipmentForm(true); setEquipmentData(equipment);}} className="p-1 rounded-full hover:bg-gray-200">
                    {showEditEquipmentForm && <EditEquipmentsForm equipmentData={equipmentData} />}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" title="Edit">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
                <img className="w-full lg:w-48 h-auto object-contain" src={equipment.img} alt={equipment.title} />
                <div className="px-6 py-4 flex-grow">
                  <div className={`font-bold text-xl mb-2 ${sidenavType === 'dark' ? "text-white" : "text-black"}`}>{equipment.title}</div>
                  <p className="text-gray-700 text-base">
                    {equipment.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Name: {equipment.name}</span>
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Category: {equipment.category}</span>
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Model Number: {equipment.model_number}</span>
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Purchase Date: {equipment.purchase_date}</span>
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Manufacturer: {equipment.manufacturer}</span>
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Purchase Price: ${equipment.purchase_price}</span>
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Warranty Information: {equipment.warranty_information}</span>
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Warranty Expiration Date: {equipment.warranty_expiration_date}</span>
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Condition: {equipment.condition}</span>
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Maintenance Charge: ${equipment.maintenance_charge}</span>
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Availability: {equipment.availability ? 'Yes' : 'No'}</span>
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Description: {equipment.additional_notes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );

}

}










