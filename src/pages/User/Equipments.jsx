import React, { useEffect, useState } from 'react';
import Navbar from "../../components/User/Navbar.jsx";
import { motion } from 'framer-motion';
import { List_Equipments } from '../../actions/EquipmentsActions';
import backgroundImage from "../../assets/images/breadcrumb-bg.jpg"
import "../../components/User/Equipments.css"
import { FaSearch } from "react-icons/fa";
import Footer from "../../components/User/Footer.jsx"

export default function Equipments() {
    const [equipments, setEquipments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);

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

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredEquipments.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset current page when searching
    };

    return (
        <div className='min-h-screen bg-black'>
            <Navbar bgColor="bg-black" />
            <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb-text text-gray-300" data-aos="fade-up">
                                <h2>Our Equipments</h2>
                                <div class="bt-option">
                  <a href="/home">Home</a>
                  <span>Equipments</span>
                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center my-4">
                        <div className="flex-1 mx-4">
                            <div className="flex justify-center items-center w-full" data-aos="fade-right">
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
                                        <FaSearch />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {filteredEquipments.length === 0 ? (
                <div className="text-white font-poppins text-xl text-center mt-20" data-aos="fade-up">No equipments found</div>
            ) : (
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-2 mt-8">
                        {currentItems.map((equipment) => (
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
                    {filteredEquipments.length > 0 && (
                        <div className="flex justify-center mt-4 mb-5">
                            <nav>
                                <ul className="pagination gap-3 cursor-pointer">
                                    <li className={currentPage === 1 ? 'disabled' : ''}>
                                        <button onClick={() => paginate(currentPage - 1)} className="page-link rounded-full font-poppins">
                                            Previous
                                        </button>
                                    </li>
                                    {Array.from({ length: Math.ceil(filteredEquipments.length / itemsPerPage) }).map((_, index) => (
                                        <li key={index} className={index + 1 === currentPage ? 'active' : ''}>
                                            <button onClick={() => paginate(index + 1)} className="page-link rounded-full ">
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={currentPage === Math.ceil(filteredEquipments.length / itemsPerPage) ? 'disabled' : ''}>
                                        <button onClick={() => paginate(currentPage + 1)} className="page-link rounded-full font-poppins">
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>
            )}
            <Footer />
        </div>
    );
}
