import { NavLink } from "react-router-dom"
import "../../assets/styles/login.css"

import $ from "jquery"

let Register = () => {
    let goal = ["training", "weight loss", "weight gain"]
    $(document).ready(function(){
        $(".bi-unlock-fill").click(function(){
            $(".bi-unlock-fill").hide();
            $(".bi-lock-fill").show();
            $(".form-password").attr("type","password")
        })
        $(".bi-lock-fill").click(function(){
            $(".bi-lock-fill").hide();
            $(".bi-unlock-fill").show();
            $(".form-password").attr("type","text")
        })
    })
    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                        <div className="log-bg">
                        </div>
                    </div>
                    <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                        <div className="reg-form">
                            <div className="brand-logo-register">
                                <img src="" />
                            </div>
                            <h2 className="text-center text-light">Register Now</h2>
                            <form className="login-form">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                                            <div className="mb-3">
                                                <label className="form-label">User Name</label>
                                                <input type="tel" className="form-control" placeholder="Your Mobile number" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                                            <div className="mb-3">
                                                <label className="form-label">Full Name</label>
                                                <input type="tel" className="form-control" placeholder="Your Mobile number" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                                            <div className="mb-3">
                                                <label className="form-label">Phone Number</label>
                                                <input type="tel" className="form-control" placeholder="Your Mobile number" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                                            <div className="mb-3">
                                                <label className="form-label">Email Id</label>
                                                <input type="tel" className="form-control" placeholder="Your Mobile number" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                                        <div className="mb-3">
                                    <label className="form-label">Create Password</label>
                                        <input type="password" className="form-control " placeholder="Your password" required />
                                </div>
                                        </div>
                                        <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                                        <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control form-password" id="password" placeholder="Your password" required />
                                        <span className="input-group-text"><i class="bi bi-unlock-fill"></i><i class="bi bi-lock-fill"></i></span>
                                    </div>
                                </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3">
                                            <label className="form-label">Select Your Goal</label>
                                            <select className="form-control select-goal " placeholder="Your Mobile number" required>
                                            <option className="goal-option" value="" selected></option>
                                                {goal.map((item, id) => (
                                                    <option className="goal-option" key={id}>{item}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 text-center">
                                    <button type="submit" className="btn log-submit">REGISTER NOW</button>
                                </div>
                                <p className="signin-p">Already have an account?<NavLink to="/login" className="signin-a">Sign in</NavLink></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register