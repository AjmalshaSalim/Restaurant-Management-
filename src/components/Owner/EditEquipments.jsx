import React, { useState, useEffect } from 'react';
import {Edit_Equipments} from '../../actions/EquipmentsActions'

function EditEquipmentsForm({data}) {
const [ equipmentData, setEquipmentData ]=useState({
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
})


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEquipmentData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  useEffect(() => {
    // This effect could be used to fetch equipment data if needed
    // For now, it's just a placeholder to demonstrate where such functionality could go
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
   const response= await Edit_Equipments(equipmentData);
   console.log(response);
   } catch (error) {
    console.error('failed to add equipments',error);
   }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
        <input type="text" name="name" value={equipmentData.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"/>
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-black">Category</label>
        <input type="text" name="category" value={equipmentData.category} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"/>
      </div>
      <div>
        <label htmlFor="model_number" className="block text-sm font-medium text-black">Model Number</label>
        <input type="text" name="model_number" value={equipmentData.model_number} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"/>
      </div>
      <div>
        <label htmlFor="purchase_date" className="block text-sm font-medium text-black">Purchase Date (YYYY-MM-DD)</label>
        <input type="text" name="purchase_date" value={equipmentData.purchase_date} onChange={handleChange} pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"/>
      </div>
      <div>
        <label htmlFor="manufacturer" className="block text-sm font-medium text-black">Manufacturer</label>
        <input type="text" name="manufacturer" value={equipmentData.manufacturer} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"/>
      </div>
      <div>
        <label htmlFor="purchase_price" className="block text-sm font-medium text-black">Purchase Price</label>
        <input type="number" name="purchase_price" value={equipmentData.purchase_price} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black" step="any"/>
      </div>
      <div>
        <label htmlFor="warranty_information" className="block text-sm font-medium text-black">Warranty Information</label>
        <input type="text" name="warranty_information" value={equipmentData.warranty_information} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"/>
      </div>
      <div>
        <label htmlFor="warranty_expiration_date" className="block text-sm font-medium text-black">Warranty Expiration Date (YYYY-MM-DD)</label>
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
        <label htmlFor="maintenance_charge" className="block text-sm font-medium text-black">Maintenance Charge</label>
        <input type="number" name="maintenance_charge" value={equipmentData.maintenance_charge} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"/>
      </div>
      <div>
        <label htmlFor="availability" className="block text-sm font-medium text-black">Availability</label>
        <input type="checkbox" name="availability" checked={equipmentData.availability} onChange={handleChange} className="mt-1"/>
      </div>
      <div>
        <label htmlFor="additional_notes" className="block text-sm font-medium text-black">Additional Notes</label>
        <textarea name="additional_notes" value={equipmentData.additional_notes} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"></textarea>
      </div>
      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        Save Changes
      </button>
      </div>
    </form>
  )
}

export default EditEquipmentsForm
