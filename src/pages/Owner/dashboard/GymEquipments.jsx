    import { useState } from 'react';
    import img2 from '../../../assets/gym-equipments/img2.png'
import img3 from '../../../assets/gym-equipments/img3.png'
import img4 from '../../../assets/gym-equipments/img4.png'
import img5 from '../../../assets/gym-equipments/img5.png'
import img6 from '../../../assets/gym-equipments/img6.png'
import img7 from '../../../assets/gym-equipments/img7.png'
import img8 from '../../../assets/gym-equipments/img8.png'

    export default function GymEquipments() {
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
        
      const [showAddEquipmentForm, setShowAddEquipmentForm] = useState(false);

      const toggleAddEquipmentForm = () => setShowAddEquipmentForm(!showAddEquipmentForm);

      function AddEquipmentForm() {
        const [equipmentData, setEquipmentData] = useState({
          photo: '',
          name: '',
          description: '',
          purchaseDate: '',
          guaranteeDate: '',
          serviceDate: '',
        });

        const handleChange = (e) => {
          const { name, value } = e.target;
          setEquipmentData(prevState => ({
            ...prevState,
            [name]: value,
          }));
        };

        const handlePhotoChange = (e) => {
          setEquipmentData(prevState => ({
            ...prevState,
            photo: e.target.files[0],
          }));
        };

        const handleSubmit = (e) => {
          e.preventDefault();
          console.log(equipmentData);
        };

        return (
          <>
          <div className='flex flex-row justify-between items-center'>
            <h1 className='font-semibold text-center flex-grow '>Add Equipments</h1>
      
            <button onClick={toggleAddEquipmentForm} className="py-1 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Back
            </button>
          </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Equipment Photo</label>
                <input type="file" name="photo" onChange={handlePhotoChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"/>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Equipment Name</label>
                <input type="text" name="name" value={equipmentData.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"/>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea name="description" value={equipmentData.description} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"></textarea>
              </div>
              <div>
                <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700">Date of Purchase</label>
                <input type="date" name="purchaseDate" value={equipmentData.purchaseDate} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"/>
              </div>
              <div>
                <label htmlFor="guaranteeDate" className="block text-sm font-medium text-gray-700">Guarantee Date</label>
                <input type="date" name="guaranteeDate" value={equipmentData.guaranteeDate} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"/>
              </div>
              <div>
                <label htmlFor="serviceDate" className="block text-sm font-medium text-gray-700">Service Date</label>
                <input type="date" name="serviceDate" value={equipmentData.serviceDate} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"/>
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                <input type="text" name="price" value={equipmentData.price} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700"/>
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
                  <button onClick={toggleAddEquipmentForm} className="inline-flex justify-center py-2 px-4 mb-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    Add equipment
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap justify-between">
                {equipments.map((equipment, index) => (
                  <div key={index} className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded overflow-hidden my-4 mx-2 w-full lg:w-auto">
                    <img className="w-full lg:w-48 h-auto object-contain" src={equipment.img} alt={equipment.title} />
                    <div className="px-6 py-4 flex-grow">
                      <div className="font-bold text-xl mb-2">{equipment.title}</div>
                      <p className="text-gray-700 text-base">
                        {equipment.description}
                      </p>
                      <div className="mt-4">
                        <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Purchase Date: {equipment.purchaseDate}</span>
                        <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Guarantee Date: {equipment.guaranteeDate}</span>
                        <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Service Date: {equipment.serviceDate}</span>
                        <span className="inline-block mb-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Price: ${equipment.price}</span>
                      </div>
                    </div>
                    <button className="ml-auto mb-5 py-1 px-4 mr-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      );
    }
