import React from 'react'
import Navbar from './Navbar.jsx';
import { Link } from 'react-router-dom';
import backgroundImage from "../../assets/images/breadcrumb-bg.jpg"
import img1 from "../../assets/diets/1.jpg"
import img2 from "../../assets/diets/2.jpg"
import img3 from "../../assets/diets/3.jpg"
import img4 from "../../assets/diets/4.jpg"
import img5 from "../../assets/diets/8.jpg"
import img6 from "../../assets/diets/9.jpg"
import "./DietPlans.css"
import { FaArrowRight } from "react-icons/fa6";
import Footer from './Footer.jsx';

export default function DietPlans() {
  return (
    <div className='bg-black'>
          <Navbar />
            <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb-text" data-aos="fade-up">
                                <h2>Diet Plans</h2>
                                <div class="bt-option">
                                    <Link to='/home'>
                                        <p>Home</p>
                                    </Link>

                                    <span> Diet Plans</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="classes section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-60">
                        <div className="item">
                            <div className="position-re o-hidden"> <img src={img1} alt="" /> </div>
                            <div className="con">
                                <h5><a href="classes-single.html">Diet Plans</a></h5>
                                <div className="line"></div>
                                <div className="icon">
                                    <a href="classes-single.html"><i><FaArrowRight /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-60">
                        <div className="item">
                            <div className="position-re o-hidden"> <img src={img2} alt="" /> </div>
                            <div className="con">
                                <h5><a href="classes-single.html">Diet Plans</a></h5>
                                <div className="line"></div>
                                <div className="icon">
                                    <a href="classes-single.html"><i><FaArrowRight /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-60">
                        <div className="item">
                            <div className="position-re o-hidden"> <img src={img3} alt="" /> </div>
                            <div className="con">
                                <h5><a href="classes-single.html">Diet Plans</a></h5>
                                <div className="line"></div>
                                <div className="icon">
                                    <a href="classes-single.html"><i><FaArrowRight /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-60">
                        <div className="item">
                            <div className="position-re o-hidden"> <img src={img4} alt="" /> </div>
                            <div className="con">
                                <h5><a href="classes-single.html">Diet Plans</a></h5>
                                <div className="line"></div>
                                <div className="icon">
                                    <a href="classes-single.html"><i><FaArrowRight /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-60">
                        <div className="item">
                            <div className="position-re o-hidden"> <img src={img5} alt="" /> </div>
                            <div className="con">
                                <h5><a href="classes-single.html">Diet Plans</a></h5>
                                <div className="line"></div>
                                <div className="icon">
                                    <a href="classes-single.html"><i><FaArrowRight /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-60">
                        <div className="item">
                            <div className="position-re o-hidden"> <img src={img6} alt="" /> </div>
                            <div className="con">
                                <h5><a href="classes-single.html">Diet Plans</a></h5>
                                <div className="line"></div>
                                <div className="icon">
                                    <a href="classes-single.html"><i><FaArrowRight /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}
