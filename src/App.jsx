


import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../src/layouts/dashboard";
import { Auth } from "../src/layouts/auth";
import Login from "./pages/User/Login";
import Forgetpassword from "./pages/User/Forgetpassword";
import Otp from "./pages/User/Otp";

function App() {
  return (
  
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      {/* for use login  */}
      <Route path="/login/*" element={<Login />} />  
      <Route path="/Forgetpassword/" element={<Forgetpassword />} />
      <Route path="/Otp/" element={<Otp />} />
    </Routes>
 
  );
}

export default App;