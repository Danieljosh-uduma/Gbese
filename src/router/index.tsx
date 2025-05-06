import { Route,  BrowserRouter, Routes } from "react-router-dom";
import SignUpPage from "../pages/Login/SignUpPage";
import LoginPage from "../pages/Login/LoginPage";
import CompleteProfileForm from "../pages/Login/CompleteProfile";
import MobileIntroCarousel from "../pages/Login/MobileIntroCarousel";
// import Layout from "../components/layout/layout";
import DashboardNewBenefactor from "../pages/Dashboard/NewOldBenefactor";
import DashboardOldBenefactor from "../pages/Dashboard/OldBenefactor";
import RecentActivity from "../pages/Dashboard/RecentActivity"
export default function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<DashboardNewBenefactor />} />
            <Route path="/oldbenefactor" element={<DashboardOldBenefactor />} />
            <Route path="/signup" element={<SignUpPage/>} />
           < Route path="/login" element={<LoginPage/>} />
            <Route path="/mobileintro" element={<MobileIntroCarousel/>} />
           <Route path="/completeprofile" element={<CompleteProfileForm/>} />
           <Route path="/recentactivity" element={<RecentActivity/>} />
           
           
            {/* <Route path="/" element={<Layout />}> */}
                {/* <Route index element={<DashboardNewBenefactor />} /> */}
            {/* </Route> */}
        </Routes>
          
           
    
    </BrowserRouter>
  );
}