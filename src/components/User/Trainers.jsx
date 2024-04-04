import React from 'react';
import "./Trainers.css";
import backgroundImage from '../../assets/images/breadcrumb-bg.jpg'; 
import team1 from "../../assets/Trainers/team-1.jpg"
import team2 from "../../assets/Trainers/team-2.jpg"
import team3 from "../../assets/Trainers/team-3.jpg"
import team4 from "../../assets/Trainers/team-4.jpg"
import team5 from "../../assets/Trainers/team-5.jpg"
import team6 from "../../assets/Trainers/team-6.jpg"
import { FaFacebook ,FaYoutube,FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from './Footer';

export default function Trainers() {
    return (
        <div>
            <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb-text" data-aos="fade-up">
                                <h2>Our Trainers</h2>
                                <div class="bt-option">
                  <a href="/home">Home</a>
                  <span>Trainers</span>
                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-section team-page spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="ts-item" style={{ backgroundImage: `url(${team1})` }}>
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                                <div className="tt_social flex items-center justify-center">
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaXTwitter /></a>
                                    <a href="#"><FaYoutube /></a>
                                    <a href="#"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="ts-item" style={{ backgroundImage: `url(${team2})` }}>
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                                <div className="tt_social flex items-center justify-center">
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaXTwitter /></a>
                                    <a href="#"><FaYoutube /></a>
                                    <a href="#"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="ts-item" style={{ backgroundImage: `url(${team3})` }}>
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                                <div className="tt_social flex items-center justify-center">
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaXTwitter /></a>
                                    <a href="#"><FaYoutube /></a>
                                    <a href="#"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="ts-item" style={{ backgroundImage: `url(${team4})` }}>
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                                <div className="tt_social flex items-center justify-center">
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaXTwitter /></a>
                                    <a href="#"><FaYoutube /></a>
                                    <a href="#"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="ts-item" style={{ backgroundImage: `url(${team5})` }}>
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                                <div className="tt_social flex items-center justify-center">
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaXTwitter /></a>
                                    <a href="#"><FaYoutube /></a>
                                    <a href="#"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="ts-item" style={{ backgroundImage: `url(${team6})` }}>
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                                <div className="tt_social flex items-center justify-center">
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaXTwitter /></a>
                                    <a href="#"><FaYoutube /></a>
                                    <a href="#"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat the above structure for other team members */}
                </div>
            </div>
        </section>
        <Footer />
        </div>
    );
}
