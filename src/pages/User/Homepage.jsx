import React, { useState, useEffect } from 'react';
import "./Homepage.css"; // Assuming you have a CSS file for Homepage styles
import Navbar from "../../components/User/Navbar.jsx";
import Hero from "../../components/User/Hero.jsx";
import Services from "../../components/User/Services.jsx";
import EquipmentsHome from "../../components/User/EquipmentsHome.jsx";
import SlotHompage from "../../components/User/SlotsHome.jsx";
import Footer from "../../components/User/Footer.jsx";
import GymVideo from "../../components/User/GymVideo.jsx";
import TrainersHome from "../../components/User/TrainersHome.jsx";
import PricingPlans from "../../components/User/PricingPlans.jsx";
import { FaArrowCircleUp } from 'react-icons/fa';

function Homepage() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-black overflow-hidden scroll-smooth">
            <Navbar />
            <Hero />
            <div className="pt-10 pb-20">
                <Services />
            </div>
            <EquipmentsHome />
            <SlotHompage />
            <TrainersHome />
            <PricingPlans />
            <GymVideo />

            <Footer />
            {/* Progress Circle */}
            {showScroll && (
                <div className="progress-circle" data-aos="fade-up" onClick={scrollToTop}>
                    <FaArrowCircleUp />
                </div>
            )}
        </div>
    );
}

export default Homepage;
