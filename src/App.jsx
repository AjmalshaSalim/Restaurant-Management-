import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../src/layouts/dashboard";
import { Auth } from "../src/layouts/auth";
import Login from "./pages/User/Login";
import Forgetpassword from "./pages/User/Forgetpassword";
import Changepassword from "./pages/User/Changepassword";
import Otp from "./pages/User/Otp";
import Homepage from "./pages/User/Homepage";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";
// OWNER 
import OwnerLogin from "../src/pages/Owner/auth/sign-in"
import OwnerRegister from "../src/pages/Owner/auth/sign-up"
import OwnerForgetpassword from "../src/pages/Owner/auth/Forgot-pw"
import OwnerOtp from "../src/pages/Owner/auth/Otp"
import OwnerChangepassword from "../src/pages/Owner/auth/Reset-pw"


function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1200,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <Routes>
       // USER ROUTES
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      {/* for use login  */}
      <Route path="/home" element={<Homepage />} />
      <Route path="/login/*" element={<Login />} />  
      <Route path="/Forgetpassword/" element={<Forgetpassword />} />
      <Route path="/Otp/" element={<Otp />} />
      <Route path="/changepassword/" element={<Changepassword />} /> 
      // OWNER ROUTES
        <Route path="/Ownerlogin" element={<OwnerLogin/>}/>
        <Route path="/OwnerRegister" element={<OwnerRegister/>}/>
        <Route path="/OwnerForgetpassword" element={<OwnerForgetpassword/>}/>
        <Route path ="/OwnerOtp" element={<OwnerOtp/>}/>
        <Route path="/OwnerChangepassword" element={<OwnerChangepassword/>}/>
    </Routes> 
  );
}

export default App;