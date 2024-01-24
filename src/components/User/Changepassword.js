import { NavLink } from "react-router-dom"
import "../../assets/styles/login.css"
import Swal from 'sweetalert2';


import { useState } from "react"
import $ from "jquery"
let Changepassword = () => {
    const [password, setPassword] = useState({
      new: "",
        confirm: ""
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
        if (password.new == "" || password.confirm == "" || password.new!=password.confirm) {
            Swal.fire('Password doesnot matching');
        }
        else {
            Swal.fire("Successfully password Changed");
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPassword((prevLog) => ({
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
                            <form className="login-form" onSubmit={handleSubmit} action="/login">
                                <p>Enter your number and password to signin</p>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <div className="">
                                        <input type="password" className="form-control " placeholder="Your password" name="new"  value={password.new} required onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control form-password" placeholder="Your password" name="confirm" id="password" value={password.confirm} required onChange={handleChange} />
                                        <span className="input-group-text"><i class="bi bi-unlock-fill"></i><i class="bi bi-lock-fill"></i></span>
                                    </div>
                                </div>
                                <div className="mb-3 text-center">
                                    <button type="submit" className="btn log-submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Changepassword