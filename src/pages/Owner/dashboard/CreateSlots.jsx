import React, { useState } from 'react';
import { useMaterialTailwindController } from "../../../context/index";
import { format } from 'date-fns';
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
  const [slots, setSlots] = useState([]); // Updated state to include endTime
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedDay, setSelectedDay] = useState('all'); // New state for day selection

  // Updated function to add a new slot
  const addSlot = () => {
    if (!startTime || !endTime || !selectedDay) return; // Updated validation
    const newSlot = { id: Date.now(), day: selectedDay, startTime, endTime };
    setSlots(prevSlots => [...prevSlots, newSlot]);
    setStartTime('');
    setEndTime('');
    setSelectedDay('all'); // Reset day selection to default
  };

  // Function to delete a slot by id remains the same
  const deleteSlot = (id) => {
    setSlots(prevSlots => prevSlots.filter(slot => slot.id !== id));
  };

  return (
    <>
      <div className="w-full h-[920px] overflow-scroll">
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
                {/* Day selection */}
                <div className="pr-2 ml-10">
                  <select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                    className={`py-2 pl-2 rounded-lg bg-transparent border-x border-y w-full ${sidenavType ? " text-gray-400 border-gray-700" : " text-black border-blue-gray-100"}`}
                  >
                    {/* Assuming options are based on your previous code */}
                    <option value="all">All Days</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                  </select>
                </div>

                {/* Start Time and End Time Inputs */}
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
                  <button onClick={addSlot} className={`px-4 py-2 ml-2 ${sidenavType==='dark' ? "bg-red-700" : "bg-black"}  text-white rounded-md`}>Add Slot</button>
                </div>
              </div>
              {/* Display slots */}
              <div>
                {slots.map(slot => (
                  <div key={slot.id} className={`flex justify-between items-center mx-4 my-2 py-2 px-3 ${sidenavType === 'dark'? "bg-gray-800 text-gray-200" : " bg-gray-200"} rounded-lg`}>
                    <span className=' text-sm text-gray-400'>Day - {slot.day} &nbsp;&nbsp;<br></br>Time - {slot.startTime} to {slot.endTime}</span>
                    <button onClick={() => deleteSlot(slot.id)} className="px-3 py-2 bg-red-700 text-white rounded-md"><MdDelete className=' h-5 w-5'/></button>
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
