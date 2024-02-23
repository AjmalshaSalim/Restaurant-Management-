import React from "react";

const Hero = () => {
  return (
    <>
      <div className="min-h-screen bg-black flex justify-center items-center text-white relative">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center shadow-xl shadow-gray-800" style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${require("../../assets/images/hero-bg.jpg")})`,
        }}></div>

        <div className="container pb-8 sm:pb-0 z-10 flex flex-row">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-1 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl px-2 py-2 font-bold"
              >
                Helps for your ideal body fitness
              </h1>
              <p data-aos="fade-up"
                data-aos-once="true" className="text-lg" >Motivates users with benefits and positive reinforcement and offer modifications and progress tracking</p>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className=" border-2 border-red-700 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Start Training
                </button>
              </div>
            </div>
            
          </div>
          
         
        </div>
       
      </div>
    </>
  );
};

export default Hero;
