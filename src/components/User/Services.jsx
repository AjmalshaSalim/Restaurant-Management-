import React from "react";
import Img1 from "../../assets/gym -icons/SLOT BOOKING.png";
import Img2 from "../../assets/gym -icons/trainer2.png";
import Img3 from "../../assets/gym -icons/diet.png";
import Img4 from "../../assets/gym -icons/gym-equipment.png";
import Img5 from "../../assets/gym -icons/planning.png";
import Img6 from "../../assets/gym -icons/feedback.png";
import { Link } from "react-router-dom";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    link: '/slot-booking',
    name: "Slot Booking",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Trainer",
    link: '/Trainers',
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img3,
    name: "Diet",
    link: '/dietplansuser',
    aosDelay: "500",
  },
  {
    id: 4,
    img: Img4,
    name: "Equipments",
    link: '/equipments',
    aosDelay: "500",
  },
  {
    id: 5,
    img: Img5,
    name: "Workout Plan",
    link: '/workout-plan',
    aosDelay: "500",
  },
  {
    id: 6,
    img: Img6,
    name: "Feedback",
    link: '/feedback',
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-5">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-16">
            <h1 className="text-2xl font-medium font-cursive text-gray-300"   data-aos="fade-up">
              Explore Our Program
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-5">
            {ServicesData.map((service) => (
             <div
             key={service.id}
             data-aos="fade-up"
             data-aos-delay={`${service.id * 100}`}
             className="rounded-lg bg-black relative shadow-md duration-300 group mx-auto"
             style={{ width: "100%", maxWidth: "556px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}
           >
             <Link to={service.link}>
               <div className="h-[61px] bg-black" style={{ width: "80px", margin: "0 auto" }}>
                 <img
                   src={service.img}
                   alt=""
                   className="max-w-[80px] rounded-lg block mx-auto transform -translate-y-7 group-hover:scale-105 group-hover:rotate-3   duration-300"
                   style={{ filter: "drop-shadow(0 0 0.25rem #000)", color: "black" }}
                 />
               </div>
             </Link>
             <div className="p-2 text-center flex-grow">
               <h1 className="text-md text-gray-500 font-medium">{service.name}</h1>
             </div>
           </div>
           
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Services;

