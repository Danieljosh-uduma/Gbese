import React from 'react';

import Navbar from '../../components/Kyc/Navbar/StepNavigation';
import SidebarCard from '../../components/Kyc/Sidebar/KycSideCard';
import StepIndicator from '../../components/Kyc/Navbar/StepIndicator';
import './BvnVerification.css';

const BVNVerificationForm = () => (
  <div className="bvn-form">
    <div className="bvn-form-card">
    <p className="form-head">BVN Verification</p>
    <p className="description">
      Your Bank Verification Number (BVN) is required to verify your identity. This is a unique identifier issued by the Central Bank that links all your bank accounts.
    </p>
    <div className="number">BVN Number</div>
    <input type="text" placeholder="Enter your 11-digit BVN" maxLength={11} className="bvn-input" />
    <div className="bvn-info-box">
      <p>Why we need your BVN:</p>
      <ul>
        <li>To verify your identity and prevent fraud</li>
        <li>To comply with financial regulations</li>
        <li>To enable secure financial transactions</li>
      </ul>
    </div>
    </div>
    <div className="form-buttons">
      <button className="back-btn">← Back</button>
      <button className="nexts-btn">Next →</button>
  </div>
    </div>
);

const BvnVerification = () => (
  <div className="kyc-page">
    <Navbar />
    <div className="kyc-container">
      <SidebarCard />
      <div className="kyc-main">
       <StepIndicator />
        <BVNVerificationForm />
      </div>
    </div>
  </div>
);

export default BvnVerification;
