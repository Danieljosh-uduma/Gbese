import { Route,  BrowserRouter, Routes } from "react-router-dom";
import SignUpPage from "../pages/Login/SignUpPage";
import LoginPage from "../pages/Login/LoginPage";
import CompleteProfileForm from "../pages/Login/CompleteProfile";
import MobileIntroCarousel from "../pages/Login/MobileIntroCarousel";
export default function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<SignUpPage/>} />
           < Route path="/login" element={<LoginPage/>} />
            <Route path="/mobileintro" element={<MobileIntroCarousel/>} />
           <Route path="/completeprofile" element={<CompleteProfileForm/>} />
        </Routes>
          
           
    
    </BrowserRouter>
  );
}