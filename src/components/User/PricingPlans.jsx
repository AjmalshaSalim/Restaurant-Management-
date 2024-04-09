import React, { useEffect, useState } from 'react'
import "./PricingPlans.css"
import { FaImage } from "react-icons/fa";
import { List_Gym_Plans } from "../../actions/GymPlansActions"
import { FaRupeeSign } from "react-icons/fa";

export default function PricingPlans() {
    const [gymPlans, setGymPlans] = useState([]);

    useEffect(() => {

        async function fetchGymPlans() {
            try {
                const plans = await List_Gym_Plans();
                setGymPlans(plans);
                console.log('Fetched gym plans:', plans);
            } catch (error) {
                console.error('Error fetching gym plans:', error);
            }
        }

        fetchGymPlans();
        //   return () => {
        //   };
    }, []);
    return (
        <div>  <section className="pricing-section spad">
            <div>
                <div className="row">
                    <div className="col-lg-12 mb-5">
                        <div className="section-title" data-aos="zoom-in-up">
                            <span>Our Plan</span>
                            <h2>Choose your pricing plan</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center" data-aos="zoom-out-down">
                    {gymPlans.map((plans) => (
                        <div className="col-lg-3 col-md-8">
                            <div className="ps-item">
                                <h3>{plans.name}</h3>
                                <div className="pi-price">
                                    <h2><span><FaRupeeSign /></span>{plans.price}</h2>
                                    <span>{plans.description}</span>
                                </div>
                                <ul>
                                    {plans.features.map((feature,index)=>(
                                         <li key={index}>{feature}</li>
                                    ))}
                                   
                                    {/* <li>Unlimited equipments</li>
                                    <li>Personal trainer</li>
                                    <li>Weight losing classes</li>
                                    <li>Month to mouth</li>
                                    <li>No time restriction</li> */}
                                </ul>
                                <a href="/payment" className="primary-btn pricing-btn">Enroll now</a>
                                <a href="/" className="thumb-icon"><i><img src={plans.image} alt='hi'/></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section></div>
    )
}
