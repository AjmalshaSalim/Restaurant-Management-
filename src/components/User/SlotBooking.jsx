import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SlotBooking = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [availableSlots, setAvailableSlots] = useState([]);
    const [bookingDetails, setBookingDetails] = useState(null);

    const fetchAvailableSlots = (date) => {
        const dummyAvailableSlots = [
            { id: 1, time: '04:00 AM - 05:00 AM', available: true },
            { id: 2, time: '05:00 AM - 06:00 AM', available: false },
            { id: 3, time: '06:00 AM - 07:00 PM', available: true },
            { id: 4, time: '07:00 AM - 08:00 AM', available: true },
            { id: 5, time: '08:00 AM - 09:00 AM', available: false },
            { id: 6, time: '09:00 AM - 10:00 PM', available: true },
            { id: 7, time: '10:00 AM - 11:00 AM', available: true },
            { id: 8, time: '04:00 PM - 05:00 PM', available: true },
            { id: 9, time: '05:00 PM - 06:00 PM', available: false },
            { id: 10, time: '06:00 PM - 07:00 PM', available: true },
        ];
        setAvailableSlots(dummyAvailableSlots);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        fetchAvailableSlots(date);
        setSelectedSlot(null);
        setBookingDetails(null);
    };

    const handleSlotSelect = (slot) => {
        if (slot.available) {
            setSelectedSlot(slot);
        } else {
            alert('This slot is not available. Please choose another one.');
        }
    };

    const handleBooking = () => {
        if (selectedSlot) {
            setBookingDetails(selectedSlot);
            alert(`You have successfully booked the slot: ${selectedSlot.time}`);
        } else {
            alert('Please select a slot before booking.');
        }
    };

    const tileDisabled = ({ date, view }) => {
        // Calculate the dates for today, tomorrow, and the day after tomorrow
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const dayAfterTomorrow = new Date(today);
        dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

        // Disable dates that are not today, tomorrow, or the day after tomorrow
        return (
            view === 'month' &&
            !(
                date.toDateString() === today.toDateString() ||
                date.toDateString() === tomorrow.toDateString() ||
                date.toDateString() === dayAfterTomorrow.toDateString()
            )
        );
    };

    return (
        <div className="flex flex-col md:flex-row bg-black h-screen text-white overflow-x-hidden">
            <Navbar />
            <div className="flex-1 p-8 pt-16 md:pt-36">
                {bookingDetails && (
                    <div className="mb-4 text-center">
                        <h3 className="text-xl font-semibold text-white">Current Booking Details:</h3>
                        <p>Date: {selectedDate.toDateString()}</p>
                        <p>Time: {bookingDetails.time}</p>
                    </div>
                )}
                <h2 className="text-3xl font-poppins mb-4 text-center" data-aos="fade-down">Slot Booking</h2>
                <div className="mb-4 flex-row items-center justify-center" >
                    <p className='font-poppins text-xl pr-5' data-aos="fade-left">Select Date:</p>
                    <div className='flex items-center justify-center ' data-aos="flip-left">
                        <Calendar
                            className="text-black bg-white rounded-lg shadow p-4"
                            onChange={handleDateChange}
                            value={selectedDate}
                            minDate={new Date()}
                            tileDisabled={tileDisabled}
                            tileClassName={({ date, view }) =>
                                view === 'month' && date.getDate() === new Date().getDate() ? 'bg-red-500 text-black' : ''
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="flex-1 p-8 pt-16 md:pt-36" >
                <h2 className="text-3xl flex font-poppins mb-4 text-center" data-aos="fade-down">Available Slots</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
                    {availableSlots.map((slot) => (
                        <div
                            key={slot.id}
                            onClick={() => handleSlotSelect(slot)}
                            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                            className={`p-4 rounded-md cursor-pointer ${slot.available
                                ? 'text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-white via-black from-green-500 bg-size-200 hover:bg-right-bottom'
                                : 'text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-white via-black from-red-500 bg-size-200 hover:bg-right-bottom cursor-not-allowed'
                                }`}
                        >
                            <span className="block">{slot.time}</span>
                            <span className="block text-sm">{slot.available ? 'Available' : 'Booked'}</span>
                        </div>
                    ))}
                </div>
                {selectedSlot && (
                    <div className="mt-4 flex justify-center items-center">
                        <p className="font-poppins">Selected Slot : {selectedSlot.time}</p>
                        <button
                            onClick={handleBooking}
                            className="px-4 py-2 ml-5 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Book Slot
                        </button>
                    </div>
                )}
            </div>
        </div >
    );
};

export default SlotBooking;
