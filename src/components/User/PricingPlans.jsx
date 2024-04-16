import React, { useEffect, useState, useRef } from 'react';
import { List_Gym_Plans, List_Gym_Plan_Details } from "../../actions/GymPlansActions";
import { FaRupeeSign } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


export default function PricingPlans() {
    const [gymPlans, setGymPlans] = useState([]);
    const [showTerms, setShowTerms] = useState([]);
    // const [planDetails, setPlanDetails] = useState([]);
    const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);

    useEffect(() => {
        async function fetchGymPlans() {
            try {
                const plans = await List_Gym_Plans();
                setGymPlans(plans);
                setShowTerms(new Array(plans.length).fill(false));
                console.log('Fetched gym plans:', plans);
            } catch (error) {
                console.error('Error fetching gym plans:', error);
            }
        }

        fetchGymPlans();
    }, []);

    async function fetchGymPlanDetailsById(id) {
        try {
            const plan = await List_Gym_Plan_Details(id);
            console.log(plan);
            if (plan) {
                setSelectedPlanDetails(plan);
            }
        } catch (error) {
            console.error('Error fetching gym plan details:', error);
        }
    }

    const toggleTerms = (index) => {
        const updatedShowTerms = [...showTerms];
        updatedShowTerms[index] = !updatedShowTerms[index];
        setShowTerms(updatedShowTerms);
    };

    return (
        <div className='pt-8'>
            <div className="bg-black">
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="lg:flex justify-center">
                        <div className="lg:w-3/4 mb-5">
                            <div className="text-center mb-10" data-aos="zoom-in-up">
                                <span className="text-red-800 font-poppins uppercase">Our Plan</span>
                                <h2 className="text-white text-4xl uppercase font-semibold">Choose your pricing plan</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4 pb-5 pt-3 ">
                {gymPlans.map((plan, index) => (

                    <Card key={index} variant="gradient" className="bg-gray-900 w-full max-w-[20rem] p-8 transition-transform duration-300 ease-in-out transform hover:scale-105 " onClick={() => fetchGymPlanDetailsById(plan.id)}>
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-orange-100/40 pb-8 text-center "
                        >
                            <Typography
                                variant="small"
                                color="white"
                                className="font-poppins text-2xl text-orange-100 hover:text-orange-400 uppercase"
                            >
                                {plan.name}
                            </Typography>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mt-6 flex justify-center gap-1 text-4xl font-poppins"
                            >
                                <span className="mt-2 text-2xl"><FaRupeeSign /></span>{plan.price}
                                <span className='text-sm pt-3'>/{plan.duration_type}</span>

                            </Typography>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mt-6 flex justify-center gap-1 text-sm text-gray-300 font-poppins"
                            >
                                {plan.description}
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0 mt-4">
                            {plan.features.map((feature, Index) => (
                                <ul key={Index} className="flex flex-col gap-4">
                                    <li className="flex items-center mt-2 mb-2 gap-4">
                                        <span className="rounded-full  bg-green-800 text-white p-1">
                                            <FaCheck />
                                        </span>
                                        <Typography className="font-thin text-gray-300">{feature}</Typography>
                                    </li>
                                </ul>
                            ))}
                        </CardBody>
                        <CardFooter className="mt-12 p-0">
                            <Button
                                size="lg"
                                color="red"
                                className=" font-poppins hover:text-white focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                            >
                                Buy Now
                            </Button>
                            <Typography
                                variant="h1"
                                color="white"
                                className={`mt-6 flex justify-center gap-1 text-sm text-gray-400 font-poppins ${showTerms[index] ? '' : 'hidden'}`}
                            >
                                {plan.terms_and_conditions}
                            </Typography>
                            <Button
                                onClick={() => toggleTerms(index)}
                                size="sm"
                                className="transition-colors duration-300 font-poppins hover:text-red-700 focus:scale-[1.02] active:scale-100 mt-4"
                                ripple={false}
                                fullWidth={true}
                            >
                                Terms and Conditions
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
                {selectedPlanDetails && (
                    <PlanDetailsPopup planDetails={selectedPlanDetails} onClose={() => setSelectedPlanDetails(null)} />
                )}
            </div>
        </div>

    );
}

function PlanDetailsPopup({ planDetails, onClose }) {
    const popupRef = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    if (!planDetails) return null;

    const { name, description, price, duration, duration_type, image } = planDetails;

    const handleClickOutside = (event) => {
        if (!isFullScreen && popupRef.current && !popupRef.current.contains(event.target)) {
            onClose();
        }
    };

    const handleImageClick = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <>
            {isFullScreen && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={handleImageClick}
                >
                    <img
                        src={image}
                        alt={name}
                        className="max-w-full max-h-full cursor-pointer"
                    />
                </div>
            )}

            <div
                ref={popupRef}
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-40"
                onClick={handleClickOutside}
            >
                <div className="bg-white p-8 rounded-lg shadow-lg w-96 z-50">
                    <img
                        src={image}
                        alt={name}
                        className={`w-full h-${isFullScreen ? 'auto' : 'auto'} object-cover rounded-t-lg mb-4 cursor-pointer`}
                        onClick={handleImageClick}
                    />

                    <h2 className="text-2xl font-semibold text-black font-poppins mb-2">{name}</h2>
                    <p className="text-gray-800 font-poppins text-lg mb-2">{description}</p>

                    <div className="flex items-center mb-2">
                        <FaRupeeSign className="text-xl text-gray-900 mr-2" />
                        <span className="text-xl font-semibold text-gray-900">{price}</span>
                    </div>

                    <p className="text-gray-900 font-poppins text-xl mb-2">
                        Duration: {duration} {duration_type}
                    </p>

                    <div className='flex gap-2'>
                        <Button
                            onClick={() => {
                                // Handle purchase logic here
                                console.log('Purchase clicked for:', name);
                            }}
                            color="green"
                            className="w-full font-poppins mb-2 hover:bg-green-600 hover:text-white"
                        >
                            Purchase
                        </Button>

                        <Button
                            onClick={onClose}
                            color="red"
                            className="w-full font-poppins mb-2 hover:bg-red-600 hover:text-white"
                        >
                            Close
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

