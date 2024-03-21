import React, { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MdOutlineQrCodeScanner } from "react-icons/md";
// QR Code Scanner


const Hero = () => {
  const [percentage, setPercentage] = useState(50);
  const ScanQrHandleClick = (() => {
    alert('open Qr Scanner')
  })
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 md:pt-0" >
              {/* Finished Workouts */}
              <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
                <h2 className="text-xl font-semibold mb-2 text-center md:text-left">Completed Workouts</h2>
                <p className="text-4xl font-bold text-center md:text-left">12</p>
                <p className="text-sm text-gray-400 text-center md:text-left">Workouts</p>
              </div>
              {/* In Progress Workouts */}
              <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <h2 className="text-xl font-semibold mb-2 text-center md:text-left">In Progress</h2>
                <p className="text-4xl font-bold text-center md:text-left">2</p>
                <p className="text-sm text-gray-400 text-center md:text-left">Workouts</p>
              </div>
              {/* Your Progress */}
              <div className="bg-black bg-opacity-50 p-2 rounded-lg shadow-lg flex flex-col items-center justify-center" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                <h2 className="text-xl font-semibold mb-2 text-center">Your Progress</h2>
                <p className="text-lg pb-2 text-center">Weight Gain</p>
                <div style={{ width: '60%', height: '60%' }} className="flex items-center justify-center pt-4 sm:pt-4">
                  <CircularProgressbar value={percentage} text={`${percentage}%`} styles={{
                    path: {
                      stroke: `red`,
                    },
                    trail: {
                      stroke: 'white',
                    },
                    text: {
                      fill: 'white',
                      fontSize: '20px',
                    },
                  }} />
                </div>
              </div>
              <div data-aos="fade-up" className=" bg-red-900 h-20 w-30 rounded-lg text-center bg-opacity-60 cursor-pointer" onClick={ScanQrHandleClick}>
                <MdOutlineQrCodeScanner className=" w-10 h-10 mx-auto mt-2 " />
                <h3 className=" mt-1">Add Attendance</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
