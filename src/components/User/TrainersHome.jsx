import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import team1 from "../../assets/Trainers/team-1.jpg";
import team2 from "../../assets/Trainers/team-2.jpg";
import team3 from "../../assets/Trainers/team-3.jpg";
import team4 from "../../assets/Trainers/team-4.jpg";
import team5 from "../../assets/Trainers/team-5.jpg";
import team6 from "../../assets/Trainers/team-6.jpg";

export default function TrainersHome() {
    const trainers = [
        {
            name: "Athart hhhh",
            role: "Gym Trainer",
            image: team1
        },
        {
            name: "Athart Ra",
            role: "Gym Trainer",
            image: team2
        },
        {
            name: "Athart Rac",
            role: "Gym Trainer",
            image: team3
        },
        {
            name: "Athart Rach",
            role: "Gym Trainer",
            image: team4
        },
        {
            name: "Athart Rache",
            role: "Gym Trainer",
            image: team5
        },
        {
            name: "Athart Rachel",
            role: "Gym Trainer",
            image: team6
        }
    ];
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div >
            <div>
                {/* header section */}
                <div  data-aos="fade-up">
                    <h2 className='text-red-900 text-center text-xl lg:text-lg font-bold'>OUR TEAM</h2>
                </div>
                <div className="" data-aos="fade-up">
                    <h2 className='text-white text-center text-2xl lg:text-3xl font-bold'>TRAIN WITH EXPERTS</h2>
                </div>

                {/* Testimonial cards */}
                <div data-aos="zoom-in-up">
                    <Slider {...settings}>
                        {trainers.map((data) => (
                            <div className="my-6" key={data.id}>
                                <div className="flex flex-col items-center justify-center gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                                    <div className="mb-4">
                                        <img
                                            src={data.image}
                                            alt=""
                                            className="rounded-full w-60 h-60 transition-transform duration-300 transform hover:scale-105"
                                        />

                                    </div>
                                    {/* content section */}
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="space-y-3">
                                            <h1 className="text-xl text-white">
                                                {data.name}
                                            </h1>
                                            <p className="text-xs text-gray-200 font-poppins">{data.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                        ,,
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

