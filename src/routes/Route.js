import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Login from "../components/User/Login"
import Register from "../components/User/Register"
import Forgetpassword from "../components/User/Forgetpassword"
import Otp from "../components/User/Otp"
import Changepassword from "../components/User/Changepassword"
let Routers = () => {
    return (
        <div className="Route">
<Router>
    <Routes>
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