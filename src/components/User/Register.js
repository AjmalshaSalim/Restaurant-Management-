let Register = () => {
    let goal = ["training", "weight loss", "weight gain"]
    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="log-bg">
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="reg-form">
                            <div className="brand-logo-register">
                                <img src="" />
                            </div>
                            <h2 className="text-center text-light">Register Now</h2>
                            <form className="login-form">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="mb-3">
                                                <label className="form-label">User Name</label>
                                                <input type="tel" className="form-control" placeholder="Your Mobile number" required />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="mb-3">
                                                <label className="form-label">Full Name</label>
                                                <input type="tel" className="form-control" placeholder="Your Mobile number" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="mb-3">
                                                <label className="form-label">Phone Number</label>
                                                <input type="tel" className="form-control" placeholder="Your Mobile number" required />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="mb-3">
                                                <label className="form-label">Email Id</label>
                                                <input type="tel" className="form-control" placeholder="Your Mobile number" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="mb-3">
                                                <label className="form-label">Create Password</label>
                                                <input type="tel" className="form-control" placeholder="Your Mobile number" required />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="mb-3">
                                                <label className="form-label">Confirm Password</label>
                                                <input type="tel" className="form-control" placeholder="Your Mobile number" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3">
                                            <label className="form-label">Select Your Goal</label>
                                            <select className="form-control" placeholder="Your Mobile number" required>
                                                {goal.map((item, id) => (
                                                    <option key={id}>{item}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn log-submit">REGISTER NOW</button>
                                </div>
                                <p className="signin-p">Already have an account?<a href="" className="signin-a">Sign in</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register