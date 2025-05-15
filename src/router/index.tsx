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
import Marketplace from "../pages/Marketplace/v1/Marketplace";
import DebtSourceStep from "../pages/DebtTraansfer/v1/DebtSourceStep";
import DebtTransferForm from "../pages/DebtTraansfer/v1/DebtTransferForm";
import DebtTransferStep3 from "../pages/DebtTraansfer/v1/DebtTransferStep3";
import TransferDebtStep3 from "../pages/DebtTraansfer/v1/TransferDebtStep3";
import DTRoute from "./debtTransferRoute";
import NoDebtTransfer from "../pages/DebtTraansfer/v2/NoDebtTransfer";
import DebtorEmpty from "../pages/Marketplace/v2/DebtorEmpty";
import ProfilePage from "../pages/profile/Page";
import TransactionsPage from "../pages/TransactionHistory/TransactionPage";
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
              <Route path="transpage" element={<TransactionsPage/>} />


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

                <Route path='debt-transfer/*' element={<DTRoute />}>
                  <Route path='' element={<DebtSourceStep />} />
                  <Route path='form' element={<DebtTransferForm />} />
                  <Route path='incentives' element={<DebtTransferStep3 />} />
                  <Route path='payment-method' element={<TransferDebtStep3 />} />
                </Route>

                <Route path="profile" element={<ProfilePage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="v2/" element={<BenefactorRoute />}>
                <Route path="" element={<DashboardBenefactor />} />
                <Route path="debt-transfer" element={<NoDebtTransfer />} />
                <Route path="marketplace" element={<DebtorEmpty />}/>
             
              </Route>
            </Route>  
       


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