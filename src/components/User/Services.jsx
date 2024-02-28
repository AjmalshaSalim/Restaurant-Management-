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
    link:'/slot-booking'
    ,
    name: "Slot Booking",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Trainer",
    link:'/trainer'
    ,
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img3,
    name: "Diet",
    link:'/diet'
    ,
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
  {
    id: 4,
    img: Img4,
    name: "Equipments",
    link:'/equipments'
    ,
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
  {
    id: 5,
    img: Img5,
    name: "Workout Plan",
    link:'/workout-plan'
    ,
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
  {
    id: 6,
    img: Img6,
    name: "Feedback",
    link:'/feedback'
    ,
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
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
            <h1 className="text-2xl font-medium font-cursive">
             Explore Our Program
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-5">
            {ServicesData.map((service) => (
            <div key={service.id}
            data-aos="fade-up"
            data-aos-delay={`${service.id*100}`}
            className="rounded-lg bg-black relative shadow-md duration-300 group mx-auto w-11/12 sm:w-auto"
            style={{ maxWidth: "556px", margin: "0 auto" }}
          ><Link to={service.link}>
            <div className="h-[61px] ">
              <img
                src={service.img}
                alt=""
                className="max-w-[80px] rounded-lg block mx-auto transform -translate-y-7 group-hover:scale-105 group-hover:rotate-3 
                
                duration-300"
                style={{ filter: "drop-shadow(0 0 0.25rem #000)", color: "black" }}
              />
            </div>
            </Link>
            <div className="p-2 text-center">
              <div className="w-full"></div>
              <h1 className="text-md text-white font-medium">{service.name}</h1>
              <p className="text-white group-hover:duration-300 text-xs line-clamp-2">
                {service.description}
              </p>
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

