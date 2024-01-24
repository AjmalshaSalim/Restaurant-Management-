import { NavLink } from "react-router-dom"
import "../../assets/styles/login.css"
import Swal from 'sweetalert2';


import { useState } from "react"
let Otp=()=>{
    const [otp, setOtp] = useState({
        code: ""
    })
    let handleSubmit = (e) => {
        if (otp.code == "") {
            alert('fill the fields')
        }
        else {
            // document.getElementById("password").type = "password";
            Swal.fire('Suceess'); 
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setOtp((prevLog) => ({
            ...prevLog,
            [name]: value,
        }));
    };
    return(
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
                            <h2 className="text-center text-light">OTP</h2>
                            <form className="login-form" onSubmit={handleSubmit} action="/Changepassword">
                                <p>Enter Otp send in your giver Phone number  </p>
                                <div className="mb-3">
                                    <label className="form-label">Otp</label>
                                    <input type="number" className="form-control" placeholder="Your otp number" name="code" value={otp.code} required onChange={handleChange} />
                                </div>
                                <div className="mb-3 text-center">
                                    <button type="submit" className="btn log-submit">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Otp