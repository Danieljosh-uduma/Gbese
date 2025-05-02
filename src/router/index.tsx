import { Route,  BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Page";
import SignUpPage from "../pages/signup/SignUpPage";
import LoginPage from "../pages/Login/LoginPage";
import MobileIntro1 from "../pages/signup/MobileIntro1"; 
import MobileIntro2 from "../pages/signup/MobileIntro2";
import MobileIntro3 from "../pages/signup/MobileIntro3";
import NotFound from "../pages/NotFound/NotFound";
import Otp from "../pages/Otp page/Otp";

export default function MainRouter() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/verify-otp" element={<Otp/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/mobileintro1" element={<MobileIntro1/>} />
            <Route path="/mobileintro2" element={<MobileIntro2/>} />
            <Route path="/mobileintro3" element={<MobileIntro3/>} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    
    </BrowserRouter>
  );
}
