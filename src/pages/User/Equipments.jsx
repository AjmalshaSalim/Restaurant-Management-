import React from 'react'
import img2 from '../../assets/gym-equipments/img2.png'
import img3 from '../../assets/gym-equipments/img3.png'
import img4 from '../../assets/gym-equipments/img4.png'
import img5 from '../../assets/gym-equipments/img5.png'
import img6 from '../../assets/gym-equipments/img6.png'
import img7 from '../../assets/gym-equipments/img7.png'
import img8 from '../../assets/gym-equipments/img8.png'
import Navbar from "../../components/User/Navbar.jsx"
import { motion } from 'framer-motion';

export const equipments = [{
    id: 1,
    img: img7,
    title: 'Equipment 1',
    description: 'The gym equipment enhances your strength.'
}, {
    id: 2,
    img: img2,
    title: 'Equipment 2',
    description: 'The gym equipment enhances your strength.'
}, {
    id: 3,
    img: img3,
    title: 'Equipment 3',
    description: 'The gym equipment enhances your strength.'
}, {
    id: 4,
    img: img4,
    title: 'Equipment 4',
    description: 'The gym equipment enhances your strength.'
}, {
    id: 5,
    img: img5,
    title: 'Equipment 5',
    description: 'The gym equipment enhances your strength.'
}, {
    id: 6,
    img: img6,
    title: 'Equipment 6',
    description: 'The gym equipment enhances your strength.'
}, {
    id: 7,
    img: img7,
    title: 'Equipment 7',
    description: 'The gym equipment enhances your strength.'
}, {
    id: 8,
    img: img8,
    title: 'Equipment 8',
    description: 'The gym equipment enhances your strength.'
},
{
    id: 9,
    img: img4,
    title: 'Equipment 8',
    description: 'The gym equipment enhances your strength.'
},
{
    id: 10,
    img: img3,
    title: 'Equipment 8',
    description: 'The gym equipment enhances your strength.'
}]

export default function Equipments() {
    return (
        <div className='min-h-screen bg-black'>
            <Navbar bgColor="bg-black" />
            <h1 className="text-4xl font-bold text-white text-center pt-32 " data-aos="fade-down"> Equipments</h1>
            <div className="flex flex-wrap justify-between items-center my-4">

                <div className="flex-1 mx-4">
                    <div className="flex justify-center items-center w-full ml-28" data-aos="fade-right">
                        <div className="flex items-center bg-red-500 text-white rounded-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
                            <input
                                type="text"
                                placeholder="Search Equipments..."
                                className="px-2 py-2 w-full text-black rounded-l-md focus:outline-none text-sm"
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
                <div className="flex items-center mr-2 space-x-2" data-aos="fade-left">
                    <span className="text-white">Sort by:</span>
                    <button
                        className="px-3 py-1 border border-red-500 text-white hover:bg-red-500 hover:text-white rounded-md focus:outline-none"
                    >
                        Price
                    </button>
                    <button
                        className="px-3 py-1 border border-red-500 text-white hover:bg-red-500 hover:text-white rounded-md focus:outline-none"
                    >
                        Newest
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:m-3 xl:grid-cols-6 gap-3 p-2 mt-8" data-aos="fade-up">
                {equipments.map((equipment) => (
                    <motion.div key={equipment.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, delay: equipment.id * 0.1, type: "spring", stiffness: 400, damping: 10 }}
                        className="block rounded-md bg-white dark:bg-neutral-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-red-400 shadow-lg">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat object-cover h-48">
                            <img
                                className="rounded-t-md h-full w-full transition duration-200 ease-in-out"
                                src={equipment.img}
                                alt={equipment.title} />
                        </div>
                        <div className="p-2">
                            <h5
                                className="mb-1 text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50 transition duration-200 ease-in-out">
                                {equipment.title}
                            </h5>
                            <p className="text-xs text-neutral-500 dark:text-neutral-300 transition duration-200 ease-in-out">
                                {equipment.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
