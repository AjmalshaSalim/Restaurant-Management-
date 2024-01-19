import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Login from "../components/User/Login"
import Register from "../components/User/Register"
let Routers = () => {
    return (
        <div className="Route">
<Router>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
    </Routes>
</Router>
        </div>
    )
}
export default Routers