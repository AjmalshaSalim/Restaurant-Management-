import "../../assets/styles/login.css"
import $ from "jquery"
let Login = () => {
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
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="log-bg">
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form">
                            <div className="brand-logo-login">
                                <img src="" />
                            </div>
                            <h2 className="text-center text-light">Sign in</h2>
                            <form className="login-form">
                                <p>Enter your number and password to signin</p>
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" placeholder="Your Mobile number" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control form-password" placeholder="Your password" required />
                                        <span className="input-group-text"><i class="bi bi-unlock-fill"></i><i class="bi bi-lock-fill"></i></span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn log-submit">SIGN IN</button>
                                </div>
                                <p className="signin-p">Don't you have an account?<a href="" className="signin-a">Sign Up</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login