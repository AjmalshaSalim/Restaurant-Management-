import { useState } from 'react';
import img2 from '../../../assets/gym-equipments/img2.png'
import img3 from '../../../assets/gym-equipments/img3.png'
import img4 from '../../../assets/gym-equipments/img4.png'
import img5 from '../../../assets/gym-equipments/img5.png'
import img6 from '../../../assets/gym-equipments/img6.png'
import img7 from '../../../assets/gym-equipments/img7.png'
import img8 from '../../../assets/gym-equipments/img8.png'
import {ADD_Equipments} from '../../../actions/EquipmentsActions'
import { useNavigate } from 'react-router-dom';
import {
  useMaterialTailwindController
} from "../../../context/index";

export default function GymEquipments() {
  const navigate=useNavigate()
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const [showAddEquipmentForm, setShowAddEquipmentForm] = useState(false);

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
      setEquipmentData(prevState => ({
        ...prevState,
        image: e.target.files[0],
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
     try {
     const response= await ADD_Equipments(equipmentData);
      if(response.success){
        console.log('sucess');
        navigate('/dashboard/gym-equipments')
      }
     } catch (error) {
      console.error('failed to add equipments',error);
     }
    };

    return (
      <>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='font-semibold text-center flex-grow '>Add Equipment</h1>
          <button onClick={toggleAddEquipmentForm} className="py-1 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Back
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-900">Equipment Image</label>
            <input type="file" name="image" id="image" onChange={handlePhotoChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"/>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">Equipment Name</label>
            <input type="text" name="name" value={equipmentData.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"/>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-900">Equipment Category</label>
            <select name="category" value={equipmentData.category} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700">
              <option value="">Select Category</option>
              <option value="cardio">Cardio</option>
              <option value="strength">Strength</option>
              <option value="free_weights">Free Weights</option>
              <option value="machines">Machines</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="modelNumber" className="block text-sm font-medium text-gray-900">Model Number</label>
            <input type="text" name="model_number" value={equipmentData.model_number} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"/>
          </div>
          <div>
            <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-900">Purchase Date (YYYY-MM-DD)</label>
            <input type="text" name="purchase_date" value={equipmentData.purchase_date} onChange={handleChange} pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"/>
          </div>
          <div>
            <label htmlFor="purchasePrice" className="block text-sm font-medium text-gray-900">Purchase Price</label>
            <input type="number" name="purchase_price" value={equipmentData.purchase_price} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700" step="any" style={{appearance: "textfield"}}/>
          </div>
          <div>
            <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-900">Manufacturer</label>
            <input type="text" name="manufacturer" value={equipmentData.manufacturer} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"/>
          </div>
          <div>
            <label htmlFor="warrantyInformation" className="block text-sm font-medium text-gray-900">Warranty Information</label>
            <input type="text" name="warranty_information" value={equipmentData.warranty_information} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"/>
          </div>
          <div>
            <label htmlFor="warrantyExpirationDate" className="block text-sm font-medium text-gray-900">Warranty Expiration Date (YYYY-MM-DD)</label>
            <input type="text" name="warranty_expiration_date" value={equipmentData.warranty_expiration_date} onChange={handleChange} pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"/>
          </div>
          <div>
            <label htmlFor="condition" className="block text-sm font-medium text-gray-900">Condition</label>
            <select name="condition" value={equipmentData.condition} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700">
              <option value="">Select Condition</option>
              <option value="new">New</option>
              <option value="used">Used</option>
              <option value="refurbished">Refurbished</option>
            </select>
          </div>
          <div>
            <label htmlFor="maintenanceCharge" className="block text-sm font-medium text-gray-900">Maintenance Charge</label>
            <input type="number" name="maintenance_charge" value={equipmentData.maintenance_charge} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"/>
          </div>
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-900">Availability</label>
            <input type="checkbox" name="availability" checked={equipmentData.availability} onChange={handleChange} className="mt-1"/>
          </div>
          <div>
            <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-900">Additional Notes</label>
            <textarea name="additional_notes" value={equipmentData.additional_notes} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"></textarea>
          </div>
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Add Equipment
          </button>
        </form>
      </>
    );
  }
  const equipments=[{
    id:1,
    img:img7,
    title:'Equipment 1',
    description:'The gym equipment enhances your strength.',
    purchaseDate: '25-05-2022',
    guaranteeDate:'25-05-2025',
    serviceDate:'16-2-2024',
    price:'2034320',
},{
    id:2,
    img:img2,
    title:'Equipment 2',
    description:'The gym equipment enhances your strength.',
    purchaseDate: '25-05-2022',
    guaranteeDate:'25-05-2025',
    serviceDate:'16-2-2024',
    price:'2034320',
},{
    id:3,
    img:img3,
    title:'Equipment 3',
    description:'The gym equipment enhances your strength.',
    purchaseDate: '25-05-2022',
    guaranteeDate:'25-05-2025',
    serviceDate:'16-2-2024',
    price:'2034320',
},{
    id:4,
    img:img4,
    title:'Equipment 4',
    description:'The gym equipment enhances your strength.',
    purchaseDate: '25-05-2022',
    guaranteeDate:'25-05-2025',
    serviceDate:'16-2-2024',
    price:'2034320',
},{
    id:5,
    img:img5,
    title:'Equipment 5',
    description:'The gym equipment enhances your strength.',
    purchaseDate: '25-05-2022',
    guaranteeDate:'25-05-2025',
    serviceDate:'16-2-2024',
    price:'2034320',
},{
    id:6,
    img:img6,
    title:'Equipment 6',
    description:'The gym equipment enhances your strength.',
    purchaseDate: '25-05-2022',
    guaranteeDate:'25-05-2025',
    serviceDate:'16-2-2024',
    price:'2034320',
},{
    id:7,
    img:img7,
    title:'Equipment 7',
    description:'The gym equipment enhances your strength.',
    purchaseDate: '25-05-2022',
    guaranteeDate:'25-05-2025',
    serviceDate:'16-2-2024',
    price:'2034320',
},{
    id:8,
    img:img8,
    title:'Equipment 8',
    description:'The gym equipment enhances your strength.',
    purchaseDate: '25-05-2022',
    guaranteeDate:'25-05-2025',
    serviceDate:'16-2-2024',
    price:'2034320',
},
{
    id:9,
    img:img4,
    title:'Equipment 8',
    description:'The gym equipment enhances your strength.',
    purchaseDate: '25-05-2022',
    guaranteeDate:'25-05-2025',
    serviceDate:'16-2-2024',
    price:'2034320',
},
{
    id:10,
    img:img3,
    title:'Equipment 8',
    description:'The gym equipment enhances your strength.',
    purchaseDate: '25-05-2022',
    guaranteeDate:'25-05-2025',
    serviceDate:'16-2-2024',
    price:'2034320',
}]

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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" title="Edit">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <span className="sr-only">Edit</span>
                </div>
                <img className="w-full lg:w-48 h-auto object-contain" src={equipment.img} alt={equipment.title} />
                <div className="px-6 py-4 flex-grow">
                  <div className={`font-bold text-xl mb-2 ${sidenavType === 'dark' ? "text-white" : "text-black"}`}>{equipment.title}</div>
                  <p className="text-gray-700 text-base">
                    {equipment.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Purchase Date: {equipment.purchaseDate}</span>
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Warranty period: {equipment.guaranteeDate}</span>
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Service Date: {equipment.serviceDate}</span>
                    <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Price: ${equipment.price}</span>
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
