


import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../src/layouts/dashboard";
import { Auth } from "../src/layouts/auth";
import Login from "./pages/User/Login";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      {/* for use login  */}
      <Route path="/login/*" element={<Login />} />  
    </Routes>
  );
}

export default App;