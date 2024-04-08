import React from 'react'
import "./PricingPlans.css"
import { FaImage } from "react-icons/fa";

export default function PricingPlans() {
  return (
    <div>  <section className="pricing-section spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 mb-5">
                <div className="section-title" data-aos="zoom-in-up">
                    <span>Our Plan</span>
                    <h2>Choose your pricing plan</h2>
                </div>
            </div>
        </div>
        <div className="row justify-content-center" data-aos="zoom-out-down">
            <div className="col-lg-4 col-md-8">
                <div className="ps-item">
                    <h3>Class drop-in</h3>
                    <div className="pi-price">
                        <h2>$ 39.0</h2>
                        <span>SINGLE CLASS</span>
                    </div>
                    <ul>
                        <li>Free riding</li>
                        <li>Unlimited equipments</li>
                        <li>Personal trainer</li>
                        <li>Weight losing classes</li>
                        <li>Month to mouth</li>
                        <li>No time restriction</li>
                    </ul>
                    <a href="/payment" className="primary-btn pricing-btn">Enroll now</a>
                    <a href="/" className="thumb-icon"><i><FaImage /></i></a>
                </div>
            </div>
            <div className="col-lg-4 col-md-8">
                <div className="ps-item">
                    <h3>12 Month unlimited</h3>
                    <div className="pi-price">
                        <h2>$ 99.0</h2>
                        <span>SINGLE CLASS</span>
                    </div>
                    <ul>
                        <li>Free riding</li>
                        <li>Unlimited equipments</li>
                        <li>Personal trainer</li>
                        <li>Weight losing classes</li>
                        <li>Month to mouth</li>
                        <li>No time restriction</li>
                    </ul>
                    <a href="/" className="primary-btn pricing-btn">Enroll now</a>
                    <a href="/" className="thumb-icon"><i><FaImage /></i></a>
                </div>
            </div>
            <div className="col-lg-4 col-md-8">
                <div className="ps-item">
                    <h3>6 Month unlimited</h3>
                    <div className="pi-price">
                        <h2>$ 59.0</h2>
                        <span>SINGLE CLASS</span>
                    </div>
                    <ul className='font-poppins'>
                        <li>Free riding</li>
                        <li>Unlimited equipments</li>
                        <li>Personal trainer</li>
                        <li>Weight losing classes</li>
                        <li>Month to mouth</li>
                        <li>No time restriction</li>
                    </ul>
                    <a href="/" className="primary-btn pricing-btn">Enroll now</a>
                    <a href="/" className="thumb-icon"><i><FaImage /></i></a>
                </div>
            </div>
        </div>
    </div>
</section></div>
  )
}
