import "../../assets/styles/login.css"
import Swal from 'sweetalert2';


import { useState } from "react"
let Forgetpassword=()=>{
    const [forget, setForget] = useState({
        number: ""
    })
    let handleSubmit = (e) => {
        if (forget.number === "") {
            Swal.fire('Password doesnot matching'); 
        }
        else {
            Swal.fire("Success");
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForget((prevLog) => ({
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
                                <img src="" alt=""/>
                            </div>
                            <h2 className="text-center text-light">Forget Password</h2>
                            <form className="login-form" onSubmit={handleSubmit} action="/Otp">
                                <p>Enter your Phone number</p>
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" placeholder="Your Mobile number" name="number" value={forget.number} required onChange={handleChange} />
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
export default Forgetpassword