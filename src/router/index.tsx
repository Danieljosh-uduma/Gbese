import { Route,  BrowserRouter, Routes, Navigate } from "react-router-dom";
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
import DashboardRoute from "./dashboardRoute";
import DashboardBeneficiary from "../pages/Dashboard/version1/Page";
import DashboardBenefactor from "../pages/Dashboard/version2/dashboard/Page";
import Marketplace from "../pages/Marketplace/Marketplace";
import NoDebtTransfer from "../pages/DebtTraansfer/NoDebtTransfer";
import DebtSourceStep from "../pages/DebtTraansfer/DebtSourceStep";
import DebtTransferForm from "../pages/DebtTraansfer/DebtTransferForm";
import DebtTransferStep3 from "../pages/DebtTraansfer/DebtTransferStep3";
import TransferDebtStep3 from "../pages/DebtTraansfer/TransferDebtStep3";

export default function MainRouter() {

  return (
    <BrowserRouter>

        <Routes>
           
            {/*Align later   */}
             <Route path="nodebt" element={<NoDebtTransfer/>} />
              <Route path="debtsource" element={<DebtSourceStep/>} />
              <Route path="debtransfer" element={<DebtTransferForm/>} />
              <Route path="debtstep3" element={<DebtTransferStep3/>} />
              <Route path="transdebt3" element={<TransferDebtStep3/>} />


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
              <Route path="*" element={<Navigate to='/' />} />
            </Route>


            {/* dashboards */}
            <Route path="dashboard/*" element={<DashboardRoute />}>
              <Route path="v1/" element={<BeneficiaryRoute />}>
                <Route path="" element={<DashboardBeneficiary />} />
                <Route path="marketplace" element={<Marketplace />}/>
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="v2/" element={<BenefactorRoute />}>
                <Route path="" element={<DashboardBenefactor />} />
                <Route path="marketplace" element={<Marketplace />}/>
             
              </Route>
            </Route>  

            <Route path='debt2/' element={<DebtTransferForm />} />        
            <Route path='debt1/' element={<DebtSourceStep />} />        
            <Route path='debt3/' element={<DebtTransferStep3 />} />        
            <Route path='debt4/' element={<TransferDebtStep3 />} />        
            <Route path='debt/' element={<NoDebtTransfer />} />        


            {/* not found  */}
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  );
}


{/* <Route path="/dashboard/v1" element={<BeneficiaryRoute/>}>
              <Route path="" element={<DashboardNewBenefactor />} />
              <Route path="oldbenefactor" element={<DashboardOldBenefactor />} />
              {/* <Route path="recentactivity" element={<RecentActivity/>} /> */}
            // </Route>
            
            {/* -- benefactor -- */}
            // <Route path="/dashboard/v2" element={<BenefactorRoute/>}>
              {/* <Route path="" element={<DashboardNewBenefactor />} /> */}
              {/*  */}
              {/* <Route path="recentactivity" element={<RecentActivity/>} /> */}
            {/* </Route>  */}