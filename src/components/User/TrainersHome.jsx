import React from 'react'
import team1 from "../../assets/Trainers/team-1.jpg"
import team2 from "../../assets/Trainers/team-2.jpg"
import team3 from "../../assets/Trainers/team-3.jpg"
import team4 from "../../assets/Trainers/team-4.jpg"
import team5 from "../../assets/Trainers/team-5.jpg"
import team6 from "../../assets/Trainers/team-6.jpg"
import "./TrainersHome.css"

export default function TrainersHome() {
    return (
        <div>
            <section className="team-section spad">
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-12">
                            <div className="team-title">
                                <div className="section-title">
                                    <span>Our Team</span>
                                    <h2>TRAIN WITH EXPERTS</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="flex flex-row gap-5 ts-slider owl-carousel">
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" style={{ backgroundImage: `url(${team1})` }}>
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" style={{ backgroundImage: `url(${team2})` }}>
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" style={{ backgroundImage: `url(${team3})` }}>
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" style={{ backgroundImage: `url(${team4})` }}>
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" style={{ backgroundImage: `url(${team5})` }}>
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" style={{ backgroundImage: `url(${team6})` }}>
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

