function Register() {
    return (
<<<<<<< HEAD
        <div>
            register
=======
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
                                <img src="" alt=""/>
                            </div>
                            <h2 className="text-center text-light">Register Now</h2>
                            <form className="login-form" onSubmit={handleSubmit}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                                            <div className="mb-3">
                                                <label className="form-label">User Name</label>
                                                <input type="text" className="form-control" placeholder="Your username" required onChange={handleChange} value={account.username} name="username" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                                            <div className="mb-3">
                                                <label className="form-label">Full Name</label>
                                                <input type="text" className="form-control" placeholder="Your fullname" required onChange={handleChange} value={account.fullname} name="fullname" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                                            <div className="mb-3">
                                                <label className="form-label">Phone Number</label>
                                                <input type="tel" className="form-control" placeholder="Your Mobile number" required onChange={handleChange} value={account.phonenumber} name="phonenumber" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                                            <div className="mb-3">
                                                <label className="form-label">Email Id</label>
                                                <input type="email" className="form-control" placeholder="" required onChange={handleChange} name="email" value={account.email} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                                            <div className="mb-3">
                                                <label className="form-label">Create Password</label>
                                                <input type="password" className="form-control " placeholder="Your password" required onChange={handleChange} value={account.newpassword} name="newpassword" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-6 col-md-12 col-lg-6 col-xxl-6 col-sm-12 ">
                                            <div className="mb-3">
                                                <label className="form-label">Confirm Password</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control form-password" id="password" placeholder="Your password" required onChange={handleChange} value={account.confirmpassword} name="confirmpassword" />
                                                    <span className="input-group-text"><i class="bi bi-unlock-fill"></i><i class="bi bi-lock-fill"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3">
                                            <label className="form-label">Select Your Goal</label>
                                            <select className="form-control select-goal " placeholder="Your Mobile number" required onChange={handleChange} value={account.goal} name="goal">
                                                <option className="goal-option" value="" disabled selected>Select your goal</option>
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
>>>>>>> 5c5fbfc111395d04379b602dc6ea4c70192e8d89
        </div>
    )
}

export default Register
