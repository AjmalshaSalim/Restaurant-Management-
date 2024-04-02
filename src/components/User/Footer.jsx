// Footer.js

import "./Footer.css";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/images/Gymsoft_Logo1-removebg-preview.png";

import React from 'react'

export default function Footer() {
    return (
        <section className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="fs-about">
                            <div className="fa-logo">
                                <a href="/home"><img src={Logo} alt="" /></a>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua endisse ultrices gravida lorem.</p>
                            <div className="fa-social flex pt-2 ">
                                <a href="#"><i><FaFacebook /></i></a>
                                <a href="#"><i><FaXTwitter /></i></a>
                                <a href="#"><i><FaYoutube /></i></a>
                                <a href="#"><i><FaInstagram /></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3">
                        <div className="fs-widget">
                            <h4>Useful links</h4>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Classes</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3">
                        <div className="fs-widget">
                            <h4>Support</h4>
                            <ul>
                                <li><a href="/login">Login</a></li>
                                <li><a href="/profile">My Profile</a></li>
                                <li><a href="/aboutus">About Us</a></li>
                                <li><a href="#/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="fs-widget">
                            <h4>Contact</h4>
                            <div className="fw-recent font-poppins">
                                <h6><a href="#">333 Middle Winchendon Rd, Rindge,<br /> NH 03461</a></h6>
                            </div>
                            <div className="fw-recent font-poppins">
                                <h6><a href="#">125-668-886 | 125-668-856 </a></h6>
                            </div>
                            <div className="fw-recent font-poppins">
                                <h6><a href="#">Support.gymcenter@gmail.com</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="copyright-text font-poppins">
                            <p>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script> All rights reserved <span className="text-base font-poppins">A2ZAlphabetSolutionz</span>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
