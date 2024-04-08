import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import { Slot_List, Book_Slot, My_Bookings, Cancel_Bookings } from '../../actions/SlotBookingActions.jsx';
import { MdDelete } from "react-icons/md";
import "./SlotBooking.css"
import backgroundImage from "../../assets/images/breadcrumb-bg.jpg"
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';

const SlotBooking = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [availableSlots, setAvailableSlots] = useState({});
    const [bookingDetails, setBookingDetails] = useState(null);
    const [bookings, setBookings] = useState([]);

    const fetchAvailableSlots = async (date) => {
        try {
            const response = await Slot_List();
            if (response !== null && typeof response === 'object' && !Array.isArray(response)) {
                const filteredSlots = response.filter(slot => {
                    const slotDate = new Date(slot.date);
                    return slotDate >= new Date();
                });
                setAvailableSlots(filteredSlots);
            } else {
                console.error('Response is not an object:', response);
                setAvailableSlots({});
            }
        } catch (error) {
            console.error('Failed to fetch available slots:', error);
            setAvailableSlots({});
        }
    };

    const fetchBookings = async () => {
        try {
            const response = await My_Bookings();
            if (response && Array.isArray(response) && response.length > 0) {
                const filteredBookings = response.filter(booking => new Date(booking.date) >= new Date());
                setBookings(filteredBookings); // Store all bookings that are not expired
            } else {
                console.error('No bookings found');
                setBookings([]);
            }
        } catch (error) {
            console.error('Failed to fetch bookings:', error);
            setBookings([]);
        }
    };

    useEffect(() => {
        fetchAvailableSlots(selectedDate);
        fetchBookings();
    }, [selectedDate]);

    const handleDateSelect = async (day) => {
        const newSelectedDate = new Date(selectedDate);
        newSelectedDate.setDate(today.getDate() + day);
        setSelectedDate(newSelectedDate);
        setSelectedSlot(null);
        setBookingDetails(null);
        await fetchAvailableSlots(newSelectedDate); // Fetch available slots for the selected date
    };

    const handleSlotSelect = (slot) => {
        if (slot.available) {
            const isSlotAlreadyBooked = bookings.some(booking => booking.slot_start_time === slot.start_time && booking.slot_end_time === slot.end_time && new Date(booking.date).toDateString() === selectedDate.toDateString());
            if (isSlotAlreadyBooked) {
                alert('You have already booked a slot for this date. Please select another slot.');
            } else {
                setSelectedSlot(slot);
            }
        } else {
            alert('This slot is not available. Please choose another one.');
        }
    };

    const handleBooking = async (e) => {
        e.preventDefault();
        if (selectedSlot && selectedDate) {
            const isSlotAlreadyBooked = bookings.some(booking => booking.slot_start_time === selectedSlot.start_time && booking.slot_end_time === selectedSlot.end_time && new Date(booking.date).toDateString() === selectedDate.toDateString());
            if (isSlotAlreadyBooked) {
                alert('You have already booked this slot for the selected date and time.');
            } else {
                try {
                    const formattedDate = selectedDate.toISOString().split('T')[0];
                    const response = await Book_Slot({ id: selectedSlot.id, date: formattedDate });
                    if (response) {
                        alert("You have successfully booked the slot.");
                        setBookingDetails(selectedSlot);
                        fetchBookings(); // Refresh bookings list
                    } else {
                        alert('Failed to book the slot. Please try again.');
                    }
                } catch (error) {
                    console.error('Error booking the slot:', error);
                    alert('An error occurred while booking the slot. Please try again.');
                }
            }
        } else {
            alert('Please select a slot and date before booking.');
        }
    };

    const handleCancelBooking = async (id) => {
        try {
            const response = await Cancel_Bookings(id);
            if (response) {
                alert('Booking canceled successfully.');
                fetchBookings(); // Refresh bookings list
            } else {
                alert('Failed to cancel booking. Please try again.');
            }
        } catch (error) {
            console.error('Error canceling booking:', error);
            alert('An error occurred while canceling the booking. Please try again.');
        }
    };

    const today = new Date();
    const isToday = (day) => {
        const compareDay = new Date();
        compareDay.setDate(today.getDate() + day);
        return compareDay.toDateString() === selectedDate.toDateString();
    };

    const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(selectedDate);

    const formatTime12Hour = (time24) => {
        if (!time24) return ''; // Guard clause for undefined time24
        const [hours, minutes] = time24.split(':');
        const hours12 = ((hours % 12) || 12).toString().padStart(2, '0');
        const amPm = hours < 12 ? 'AM' : 'PM';
        return `${hours12}:${minutes} ${amPm}`;
    };

    const days = [0, 1, 2, 3, 4, 5, 6];

    return (
        <>
            <Navbar />
            <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb-text" data-aos="fade-up">
                                <h2>My Bookings</h2>
                                <div class="bt-option">
                                    <Link to='/home'>
                                        <p>Home</p>
                                    </Link>

                                    <span> Slot-Booking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex flex-col lg:flex-col bg-black min-h-screen text-white overflow-hidden">
                <div className="flex flex-col p-4 lg:p-8 pt-4 lg:pt-5 xl:pt-20 w-full">
                    {bookings.length > 0 && (
                        <div className="mb-4 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-5">
                            {bookings.map((booking, index) => (
                                <div key={index}
                                    className="p-4 text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-white via-black from-green-800 bg-size-200 hover:bg-right-bottom mb-4 sm:mb-0">
                                    <p>{formatTime12Hour(booking.slot_start_time)} to {formatTime12Hour(booking.slot_end_time)}</p>
                                    <p>Date: {new Date(booking.date).toLocaleDateString('en-GB')}</p>
                                    <button
                                        type='button'
                                        onClick={() => handleCancelBooking(booking.id)}
                                        className="px-2 py-2 bg-red-800 text-white rounded-md hover:bg-red-300 mt-2"
                                    >
                                        <MdDelete />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="mb-4 flex flex-col sm:flex-row items-center justify-center">
                        <div className='w-full sm:w-96 items-center mx-auto'>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-poppins mb-2 text-center">Select a Day to Book Slot:</h3>
                            <div className="flex flex-col sm:flex-row lg:flex-row gap-2 justify-center">
                                {days.map((day) => (
                                    <div
                                        key={day}
                                        onClick={() => handleDateSelect(day)}
                                        className={`cursor-pointer text-center text-white rounded-md p-2 ${isToday(day) ? 'bg-green-500' : 'bg-gray-500'} hover:bg-gray-800`}
                                    >
                                        {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date().setDate(today.getDate() + day))}
                                    </div>
                                ))}
                            </div>
                            <p className="text-md sm:text-lg md:text-xl font-poppins mt-4 text-center">Today's Date:<span className='text-gray-500'> {today.toLocaleDateString('en-GB')}</span></p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center  p-4 lg:p-8 pt-8 lg:pt-16 xl:pt-36 w-full">
                    <h2 className="text-xl sm:text-2xl md:text-3xl flex font-poppins mb-4 text-center" data-aos="fade-down">Available Slots</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-center">
                        {availableSlots[dayOfWeek] && availableSlots[dayOfWeek].length > 0 && availableSlots[dayOfWeek].map((slot) => (
                            <div
                                key={slot.id}
                                onClick={() => handleSlotSelect(slot)}
                                className={`p-4 rounded-md cursor-pointer ${slot.available
                                    ? 'text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-white via-black from-green-800 bg-size-200 hover:bg-right-bottom'
                                    : 'text-white rounded-xl transition-all duration-500 bg-gradient-to-br to-white via-black from-red-500 bg-size-200 hover:bg-right-bottom cursor-not-allowed'
                                    }`}
                            >
                                <span className="block">{formatTime12Hour(slot.start_time)} -</span>
                                <span className="block">{formatTime12Hour(slot.end_time)}</span>
                                <span className="block text-sm">{slot.available ? 'Available' : 'Booked'}</span>
                            </div>
                        ))}
                    </div>
                    {selectedSlot && (
                        <div className="mt-4 flex justify-center items-center">
                            <p className="font-poppins">Selected Slot :  {formatTime12Hour(selectedSlot.start_time)} to {formatTime12Hour(selectedSlot.end_time)}</p>
                            <button
                                type='button'
                                onClick={handleBooking}
                                className="px-4 py-2 ml-5 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            >
                                Book slot
                            </button>
                        </div>
                    )}
                </div>

            </div>
            <Footer />
        </>
    );
};

export default SlotBooking;





