import React, { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Hero = () => {
  const [percentage,setPercentage]=useState(90)
  return (
    <>
      <div className="min-h-screen bg-black flex justify-center items-center text-white relative">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center shadow-xl shadow-gray-800" style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${require("../../assets/images/hero-bg.jpg")})`,
        }}></div>

        <div className="container pb-8 sm:pb-0 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl px-2 py-2 font-bold"
              >
                Helps for your ideal body fitness
              </h1>
              <p data-aos="fade-up"
                data-aos-once="true" className="text-lg" >Motivates users with benefits and positive reinforcement and offer modifications and progress tracking</p>
            </div>
            <div className="flex space-x-4" data-aos="fade-right">
        <div className="text-center transition duration-300 ease-in-out hover:scale-105">
            <h3 className="text-lg font-semibold mb-2">Finished</h3>
            <CircularProgressbar  title="Finished" value={percentage} text={`${percentage}%`} styles={{ path: { stroke: `rgba(255, 0, 0, ${percentage / 100})` }, text: { fill: '#dc143c', fontSize: '16px' }, trail: { stroke: '#d6d6d6' }, background: { fill: '#dc143c' }, }} />
        </div>
        <div className="text-center transition duration-300 ease-in-out hover:scale-105">
            <h3 className="text-lg font-semibold mb-2">In Progress</h3>
            <CircularProgressbar title="In Progress" value={percentage} text={`${percentage}%`} styles={{ path: { stroke: `rgba(50, 255, 0 , ${percentage / 100})` }, text: { fill: '#ff0000', fontSize: '16px' }, trail: { stroke: '#d6d6d6' }, background: { fill: '#ff0000' }, }} />
        </div>
        <div className="text-center transition duration-300 ease-in-out hover:scale-105">
            <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
            <CircularProgressbar title="Your Progress" value={percentage} text={`${percentage}%`} styles={{ path: { stroke: `rgba(0, 43, 255 , ${percentage / 100})` }, text: { fill: '#ff0000', fontSize: '16px' }, trail: { stroke: '#d6d6d6' }, background: { fill: '#ffffff' }, }} />
        </div>
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
