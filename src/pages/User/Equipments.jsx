import React, { useEffect, useState } from 'react';
import Navbar from "../../components/User/Navbar.jsx";
import { motion } from 'framer-motion';
import { List_Equipments } from '../../actions/EquipmentsActions';

export default function Equipments() {
    const [equipments, setEquipments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    // Filter equipments based on search term
    const filteredEquipments = equipments.filter(equipment =>
        equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        equipment.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className='min-h-screen bg-black'>
            <Navbar bgColor="bg-black" />
            <h1 className="text-4xl font-poppins text-white text-center pt-16 md:pt-32" data-aos="fade-down"> Equipments</h1>
            <div className="flex flex-wrap justify-center items-center my-4"> {/* Updated justify-center */}
                <div className="flex-1 mx-4">
                    <div className="flex justify-center items-center w-full" data-aos="fade-right"> {/* Removed ml-28 */}
                        <div className="flex items-center justify-center bg-red-500 text-white rounded-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
                            <input
                                type="text"
                                placeholder="Search Equipments..."
                                className="px-2 py-2 w-full text-black rounded-l-md focus:outline-none text-sm"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <button
                                className="px-2 py-2 bg-red-700 hover:bg-red-800 rounded-r-md flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Sort by buttons */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-2 mt-8"> {/* Updated grid classes */}
                {filteredEquipments.map((equipment) => (
                    <motion.div
                        key={equipment.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.1, type: "tween", stiffness: 200, damping: 10 }}
                        className="block rounded-md bg-white dark:bg-neutral-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-red-400 shadow-lg"
                    >
                        <div className="relative overflow-hidden bg-cover bg-no-repeat h-48">
                            <img
                                className="rounded-t-md h-full w-full transition duration-200 ease-in-out object-contain"
                                src={equipment.image}
                                alt={equipment.title}
                            />
                        </div>
                        <div className="p-2">
                            <h5 className="mb-1 text-lg leading-tight text-neutral-800 dark:text-neutral-50 transition duration-200 ease-in-out font-poppins">
                                {equipment.name}
                            </h5>
                            <p className="text-xs text-neutral-500 dark:text-neutral-300 transition duration-200 ease-in-out font-poppins">
                                {equipment.category}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
