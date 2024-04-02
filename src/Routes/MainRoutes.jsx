import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"; 
import { Dashboard } from "../layouts/dashboard";
import { Auth } from "../layouts/auth";
import Login from "../pages/User/Login";
import { lazy, Suspense } from "react";
import Forgetpassword from "../pages/User/Forgetpassword";
import Changepassword from "../pages/User/Changepassword";
import Otp from "../pages/User/Otp";
import Homepage from "../pages/User/Homepage";
import AddMember from "../pages/Owner/dashboard/AddMember";
import Equipments from "../pages/User/Equipments";
import OwnerLogin from "../pages/Owner/auth/sign-in";
import OwnerRegister from "../pages/Owner/auth/sign-up";
import OwnerForgetpassword from "../pages/Owner/auth/Forgot-pw";
import OwnerOtp from "../pages/Owner/auth/Otp";
import OwnerChangepassword from "../pages/Owner/auth/Reset-pw";
import OwnerUserList from "../pages/Owner/dashboard/MembersList";
import { PhoneNumberProvider } from "../context/phoneNumberContext";
import PublicRoutes from "../utils/PublicRoutes";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import store from '../store';
import { Provider } from 'react-redux'; 

const MainRoutes = () => {
  const [showRoutes, setShowRoutes] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRoutes(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return showRoutes ? (
    <Provider store={store}>
      <PhoneNumberProvider>
        <div>
          <Routes>
          <Route element={<PublicRoutes />}>
          <Route path="/login/" element={<Login />} />
            </Route>
            <Route path="/" element={<ProtectedRoutes component={Dashboard} />} />
            <Route path="/auth/*" element={<ProtectedRoutes component={Auth} />} />
            <Route path="/home" element={<ProtectedRoutes component={Homepage} />} />
            <Route path="/Forgotpassword/" element={<ProtectedRoutes component={Forgetpassword} />} />
            <Route path="/Otp/" element={<ProtectedRoutes component={Otp} />} />
            <Route path="/changepassword/" element={<ProtectedRoutes component={Changepassword} />} />
            
            <Route path="/Ownerlogin" element={<OwnerLogin />} />
            <Route path="/OwnerRegister" element={<OwnerRegister />} />
            <Route path="/OwnerForgetpassword" element={<OwnerForgetpassword />} />
            <Route path="/OwnerOtp" element={<OwnerOtp />} />
            <Route path="/OwnerChangepassword" element={<OwnerChangepassword />} />
            <Route path="/equipments/" element={<ProtectedRoutes component={Equipments} />} />
            <Route path="/MembersList/" element={<ProtectedRoutes component={OwnerUserList} />} />
            <Route path="/AddMember/" element={<ProtectedRoutes component={AddMember} />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </PhoneNumberProvider>
    </Provider>
  ) : null;
};

export default MainRoutes;
