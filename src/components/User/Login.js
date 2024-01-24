import { NavLink } from "react-router-dom"
import "../../assets/styles/login.css"
import Swal from 'sweetalert2';


import { useState } from "react"
import $ from "jquery"
let Login = () => {
    const [log, setLog] = useState({
        number: "",
        password: ""
    })
    $(document).ready(function () {
        $(".bi-unlock-fill").click(function () {
            $(".bi-unlock-fill").hide();
            $(".bi-lock-fill").show();
            $(".form-password").attr("type", "password")
        })
        $(".bi-lock-fill").click(function () {
            $(".bi-lock-fill").hide();
            $(".bi-unlock-fill").show();
            $(".form-password").attr("type", "text")
        })
    })
    let handleSubmit = (e) => {
        if (log.number === "" || log.password === "") {
            alert('fill the fields')
        }
        else {
            // document.getElementById("password").type = "password";
            alert("submitted")
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLog((prevLog) => ({
            ...prevLog,
            [name]: value,
        }));
    };
    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                        <div className="log-bg">
                        </div>
                    </div>
                    <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                        <div className="form">
                            <div className="brand-logo-login">
                                <img src="" />
                            </div>
                            <h2 className="text-center text-light">Sign in</h2>
                            <form className="login-form" onSubmit={handleSubmit}>
                                <p>Enter your number and password to signin</p>
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" placeholder="Your Mobile number" name="number" value={log.number} required onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control form-password" placeholder="Your password" name="password" id="password" value={log.password} required onChange={handleChange} />
                                        <span className="input-group-text"><i class="bi bi-unlock-fill"></i><i class="bi bi-lock-fill"></i></span>
                                    </div>
                                </div>
                                <div className="mb-3 text-center">
                                    <button type="submit" className="btn log-submit">SIGN IN</button>
                                </div>
                                <div className="text-center mb-3">
                                    <NavLink to="/Forgetpassword" className="signin-p">Forget password ?</NavLink>
                                </div>
                                <p className="signin-p">Don't you have an account?<NavLink to="/Register" className="signin-a">Sign Up</NavLink></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login