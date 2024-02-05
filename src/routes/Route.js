import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Login from "../pages/User/Login"
import Register from "../pages/User/Register"
import Forgetpassword from "../pages/User/Forgetpassword"
import Otp from "../pages/User/Otp"
import Changepassword from "../pages/User/Changepassword"
import Dashboard from "../../src/pages/dashboard/Home"
let Routers = () => {
    return (
        <div className="Route">
<Router>
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Forgetpassword" element={<Forgetpassword/>}/>
        <Route path ="/Otp" element={<Otp/>}/>
        <Route path="/Changepassword" element={<Changepassword/>}/>
    </Routes>
</Router>
        </div>
    )
}
export default Routers