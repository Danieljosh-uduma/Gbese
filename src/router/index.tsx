import { Route,  BrowserRouter, Routes } from "react-router-dom";
import SignUpPage from "../pages/signup/getOtp/SignUpPage";
import LoginPage from "../pages/Login/LoginPage";
import MobileIntro1 from "../pages/signup/mobile/MobileIntro1"; 
import MobileIntro2 from "../pages/signup/mobile/MobileIntro2";
import MobileIntro3 from "../pages/signup/mobile/MobileIntro3";
import NotFound from "../pages/NotFound/NotFound";
import Otp from "../pages/signup/verifyOtp/Otp";
import Role from "../pages/role/Role"; // Ensure this file exists at the specified path
import CompleteProfile from "../pages/signup/userDetails/CompleteProfile";
import SplashManager from "../hooks/SplashManager";


export default function MainRouter() {

  return (
    <BrowserRouter>
        <Routes>
            {/* dashboard */}
            <Route path="/" element={<SplashManager />} />
            
            {/* login  */}
            <Route path="/login" element={<LoginPage/>} />
            
            {/* sign up  */}
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/signup/verify-otp" element={<Otp/>} />
            <Route path="/signup/completeprofile" element={<CompleteProfile/>} />
            <Route path="/signup/completeprofile/role" element={<Role />} />

            {/* mobile intro not done  */}
            <Route path="/mobileintro1" element={<MobileIntro1/>} />
            <Route path="/mobileintro2" element={<MobileIntro2/>} />
            <Route path="/mobileintro3" element={<MobileIntro3/>} />

            {/* not found  */}
            <Route path="*" element={<NotFound/>} />
            
        </Routes>
    
    </BrowserRouter>
  );
}
