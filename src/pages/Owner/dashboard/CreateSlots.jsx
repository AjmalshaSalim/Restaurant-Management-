import React, { useEffect, useState } from 'react';
import { useMaterialTailwindController } from "../../../context/index";
import { Create_Slot, Slot_List } from '../../../actions/SlotBookingActions';
import { MdDelete } from "react-icons/md";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from '@material-tailwind/react';

export const CreateSlots = () => {

    const [controller] = useMaterialTailwindController();
    const { sidenavType } = controller;
    const [slots, setSlots] = useState([]);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [selectedDay, setSelectedDay] = useState('all');

    useEffect(() => {
        const fetchSlotList = async () => {
            try {
                const response = await Slot_List();
                if(response && response.slots) { 
                    setSlots(response.slots);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchSlotList();
    }, []);

    const addSlot = () => {
        if (!startTime || !endTime || !selectedDay) return;
        const newSlot = { id: Date.now(), startTime, endTime };
        const updatedSlots = [...slots, newSlot];
        setSlots(updatedSlots);
        setStartTime('');
        setEndTime('');
        updateSlotsInBackend(updatedSlots);
    };

    const deleteSlot = (id) => {
        setSlots(prevSlots => prevSlots.filter(slot => slot.id !== id));
    };

    const updateSlotsInBackend = (updatedSlots) => {
        try {
            const slotsData = updatedSlots.map(slot => ({
                start_time: slot.startTime,
                end_time: slot.endTime,
                available: true
            }));
            const requestData = {
                day_type: selectedDay,
                slots: slotsData
            };
            console.log(requestData);
            Create_Slot(requestData);
        } catch (error) {
            console.error('Error while creating slots', error);
            throw error;
        }
    };

    return (
        <>
            <div className="w-full h-[1100px] overflow-scroll">
                <div className={`mt-12 mb-8 flex flex-col gap-12 rounded-xl ${sidenavType === "dark" ? "bg-transparent border-x border-y border-gray-800" : "bg-white"
                    }`} data-aos="fade-up"
                    data-aos-duration="700">
                    <Card className={`${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-90" : "bg-white"}`}>
                        <CardHeader variant="filled" color="gray" className={`mb-8 p-6 ${sidenavType === 'dark' ? "bg-gray-900 border-x border-y border-gray-800" : "bg-gray-900"}`}>
                            <Typography variant="h6" color="white">
                                Create Slots
                            </Typography>
                        </CardHeader>
                        <CardBody className={`overflow-x-scroll px-0 pt-0 pb-2 ${sidenavType === 'dark' ? "bg-gray-900 bg-opacity-40" : "bg-white"}`}>
                            <div className='w-full flex justify-between items-center pr-6'>
                                <div className="pr-2 ml-10">
                                    <select
                                        value={selectedDay}
                                        onChange={(e) => setSelectedDay(e.target.value)}
                                        className={`py-2 pl-2 rounded-lg bg-transparent border-x border-y w-full ${sidenavType ? " text-gray-400 border-gray-700" : " text-black border-blue-gray-100"}`}
                                    >
                                        <option value="all">All Days</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                        <option value="saturday">Saturday</option>
                                    </select>
                                </div>
                                <div className="my-4">
                                    <input
                                        type="time"
                                        value={startTime}
                                        onChange={(e) => setStartTime(e.target.value)}
                                        className="mx-2 py-2 px-3 rounded-md"
                                    />
                                    <input
                                        type="time"
                                        value={endTime}
                                        onChange={(e) => setEndTime(e.target.value)}
                                        className="mx-2 py-2 px-3 rounded-md"
                                    />
                                    <button onClick={addSlot} className={`px-4 py-2 ml-2 ${sidenavType === 'dark' ? "bg-red-700" : "bg-black"}  text-white rounded-md`}>Add Slot</button>
                                </div>
                            </div>
                            <div>
                                {slots && slots.map(slot => ( // Ensure slots is truthy before mapping to avoid undefined error
                                    <div key={slot.id} className={`flex justify-between items-center mx-4 my-2 py-2 px-3 ${sidenavType === 'dark' ? "bg-gray-800 text-gray-200" : " bg-gray-200"} rounded-lg`}>
                                        <span className=' text-sm text-gray-400'>Time - {slot.startTime} to {slot.endTime}</span>
                                        <button onClick={() => deleteSlot(slot.id)} className="px-3 py-2 bg-red-700 text-white rounded-md"><MdDelete className=' h-5 w-5' /></button>
                                    </div>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default CreateSlots;



