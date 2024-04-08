import React, { useEffect, useState } from 'react';
import './SlotsHome.css'
import { My_Bookings } from '../../actions/SlotBookingActions.jsx';
import { Link } from "react-router-dom";

function PricingSection() {
    const [bookings, setBookings] = useState([]);

    const fetchBookings = async () => {
        try {
            const response = await My_Bookings();
            if (response && Array.isArray(response) && response.length > 0) {
                const filteredBookings = response.filter(booking => new Date(booking.date) >= new Date());
                setBookings(filteredBookings); 
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
        fetchBookings();
    }, []);
    const formatTime12Hour = (time24) => {
        if (!time24) return ''; // Guard clause for undefined time24
        const [hours, minutes] = time24.split(':');
        const hours12 = ((hours % 12) || 12).toString().padStart(2, '0');
        const amPm = hours < 12 ? 'AM' : 'PM';
        return `${hours12}:${minutes} ${amPm}`;
    };
    return (
        <section className="pricing-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title"  data-aos="fade-up">
                        <h2 className='text-gray-300 text-center text-2xl lg:text-2xl font-poppins'>My Bookings</h2>
                    </div>
                </div>
            </div>
            {bookings.length > 0 ? (
                <div className="row justify-content-center">
                    {bookings.map((booking, index) => (
                        <Link to="/slot-booking" key={index} className="col-lg-4 col-md-6 col-sm-10 mb-4">
                            <div className="ps-item"  data-aos="fade-up" >
                                <h3 className="text-lg lg:text-xl mb-2">Date: {new Date(booking.date).toLocaleDateString('en-GB')}</h3>
                                <div className="pi-price">
                                    <h2 className="text-xl lg:text-xl">
                                        {formatTime12Hour(booking.slot_start_time)} to {formatTime12Hour(booking.slot_end_time)}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center">
                    <h2 className="text-gray-700 text-base lg:text-base font-poppins">No bookings found! Start booking now<Link to="/slot-booking"> <span className='ml-2 cursor-pointer'>➡️</span></Link></h2>
                </div>
            )}
        </div>
    </section>
    
    );
}

export default PricingSection;
