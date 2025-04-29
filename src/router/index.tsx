import { Route,  BrowserRouter, Routes } from "react-router-dom";
import SignUpPage from "../pages/Login/SignUpPage";
import LoginPage from "../pages/Login/LoginPage";
import MobileIntro1 from "../pages/Login/MobileIntro1"; 
import MobileIntro2 from "../pages/Login/MobileIntro2";
import MobileIntro3 from "../pages/Login/MobileIntro3";

export default function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<SignUpPage/>} />
           < Route path="/login" element={<LoginPage/>} />
            <Route path="/mobileintro1" element={<MobileIntro1/>} />
            <Route path="/mobileintro2" element={<MobileIntro2/>} />
            <Route path="/mobileintro3" element={<MobileIntro3/>} />
        </Routes>
    
    </BrowserRouter>
  );
}