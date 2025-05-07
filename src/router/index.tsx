import { Route,  BrowserRouter, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import SplashManager from "../hooks/SplashManager";
import AuthRoute from "./authentication";
import BenefactorRoute from "./benefactor";
import BeneficiaryRoute from "./beneficiary";
import LoginPage from "../pages/Login/LoginPage";
import Role from "../pages/role/Role";
import SignUpPage from "../pages/signup/getOtp/SignUpPage";
import CompleteProfile from "../pages/signup/userDetails/CompleteProfile";
import Otp from "../pages/signup/verifyOtp/Otp";
import DashboardNewBenefactor from "../pages/Dashboard/NewOldBenefactor";
import DashboardOldBenefactor from "../pages/Dashboard/OldBenefactor";
import RecentActivity from "../pages/Dashboard/RecentActivity";


export default function MainRouter() {

  return (
    <BrowserRouter>
        <Routes>
            {/* --- splash screen --- */}
            <Route path="/" element={<SplashManager />} />
            

            {/* --- authentication --- */}
            <Route path="/auth/*" element={<AuthRoute />}>
              {/* login  */}
              <Route path="login" element={<LoginPage/>} />
                
              {/* sign up  */}
              <Route path="signup" element={<SignUpPage/>} />
              <Route path="signup/verify-otp" element={<Otp/>} />
              <Route path="signup/completeprofile" element={<CompleteProfile/>} />
              <Route path="signup/user-role" element={<Role/>} />
            </Route>


            {/* dashboards */}

            {/* --- beneficiary --- */}
            <Route path="/dashboard/v1" element={<BeneficiaryRoute/>}>
              <Route path="" element={<DashboardNewBenefactor />} />
              <Route path="oldbenefactor" element={<DashboardOldBenefactor />} />
              <Route path="recentactivity" element={<RecentActivity/>} />
            </Route>
            
            {/* -- benefactor -- */}
            <Route path="/dashboard/v2" element={<BenefactorRoute/>}>
              <Route path="" element={<DashboardNewBenefactor />} />
              <Route path="oldbenefactor" element={<DashboardOldBenefactor />} />
              <Route path="recentactivity" element={<RecentActivity/>} />
            </Route>
            

            {/* not found  */}
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  );
}