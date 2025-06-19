import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
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
import ProfilePage from "../pages/profile/Page";
import TransactionsPage from "../pages/TransactionHistory/Page";
import FundAccount from "../pages/FundAccount/FundAccount";
import SendMoney from "../pages/Sendmoney/Page";
import EditInfo from "../pages/kyc/EditInfo";
import BvnVerification from "../pages/KycVerification/BvnVerification";
import AddressVerification from "../pages/KycVerification/AddressVerification";
import SettingRoute from "./settingRoute";
import ReviewAndSubmit2 from "../pages/KycVerification/R&S2";
export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* --- splash screen --- */}
        <Route path="/" element={<SplashManager />} />

        {/* --- authentication --- */}
        <Route path="/auth/*" element={<AuthRoute />}>
          {/* login  */}
          <Route path="login" element={<LoginPage />} />

          {/* sign up  */}
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signup/verify-otp" element={<Otp />} />
          <Route path="signup/completeprofile" element={<CompleteProfile />} />
          <Route path="signup/user-role" element={<Role />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>

        {/* dashboards */}
        <Route path="dashboard/*" element={<DashboardRoute />}>
          {/* beneficiary dasboard  */}
          <Route path="v1/" element={<BeneficiaryRoute />}>
            <Route path="" element={<DashboardBeneficiary />} />
            <Route path="send-money" element={<SendMoney />} />
            <Route path="fund-account" element={<FundAccount />} />

            {/* Debt transfer  */}
            <Route path="debt-transfer/*" element={<DTRoute />}>
              <Route path="" element={<DebtSourceStep />} />
              <Route path="form" element={<DebtTransferForm />} />
              <Route path="incentives" element={<DebtTransferStep3 />} />
              <Route path="payment-method" element={<TransferDebtStep3 />} />
            </Route>

            {/* Request  */}

            {/* History  */}
            <Route path="history" element={<TransactionsPage />} />

            {/* Market place  */}
            <Route path="marketplace" element={<Marketplace />} />

            {/* Profile  */}
            <Route path="profile" element={<ProfilePage />} />

            {/* Setting  */}
            <Route path="setting/*" element={<SettingRoute />}>
              <Route path="" element={<BvnVerification />} />
              <Route path="profile" element={<BvnVerification />} />
              <Route path="verify-address" element={<AddressVerification />} />
              <Route path="review-details" element={<ReviewAndSubmit2 />} />
              <Route path="edit-profile" element={<EditInfo />} />
            </Route>

            {/* Not found */}
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="v2/" element={<BenefactorRoute />}>
            <Route path="" element={<DashboardBenefactor />} />
            <Route path="send-money" element={<SendMoney />} />
            <Route path="fund-account" element={<FundAccount />} />

            {/* Debt transfer  */}
            <Route path="debt-transfer/*" element={<DTRoute />}>
              <Route path="" element={<DebtSourceStep />} />
              <Route path="form" element={<DebtTransferForm />} />
              <Route path="incentives" element={<DebtTransferStep3 />} />
              <Route path="payment-method" element={<TransferDebtStep3 />} />
            </Route>

            {/* Request  */}

            {/* History  */}
            <Route path="history" element={<TransactionsPage />} />

            {/* Market place  */}
            <Route path="marketplace" element={<Marketplace />} />

            {/* Profile  */}
            <Route path="profile" element={<ProfilePage />} />

            {/* Setting  */}
            <Route path="setting/*" element={<SettingRoute />}>
              <Route path="" element={<BvnVerification />} />
              <Route path="profile" element={<BvnVerification />} />
              <Route path="verify-address" element={<AddressVerification />} />
              <Route path="review-details" element={<ReviewAndSubmit2 />} />
              <Route path="edit-profile" element={<EditInfo />} />
            </Route>

            {/* Not found */}
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* benefactor dashboard  */}
        </Route>

        {/* benefactor dashboard  */}

        {/* not found  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
