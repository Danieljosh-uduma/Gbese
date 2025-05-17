import React from 'react';
import StepNavigation from '../../components/Kyc/Navbar/StepNavigation';
import StepIndicator from '../../components/Kyc/Navbar/StepIndicator';
import KycSideCard from '../../components/Kyc/Sidebar/KycSideCard';
import './ReviewAndSubmit.css'; // Create this for custom styling
import { TickCircleGreen, InfoCircleRed } from '../../components/icons/Icon';
import './R&S2.css'

const ReviewAndSubmit2 = () => {
  return (
    <div className="kyc-page">
      {/* Purple Header */}
      <StepNavigation />

      <div className="kyc-container">
        {/* Left Sidebar */}
        <KycSideCard />

        {/* Main Content */}
        <div className="kyc-content">
          {/* Step Indicator */}
          <StepIndicator activeStep={2} />

          {/* Review and Submit Card */}
          <div className="review-card">
            <p className="review-title">Review and Submit</p>
            <p className="review-subtext">
              Please review your information before submission
            </p>

      <div className="review-BVN">
  <p className="section-title">BVN Verification</p>
  <div className="section-box">
    <div className="status-row">
      <p>BVN: 624******832</p>
      <div className="status verified">
        <TickCircleGreen className="status-icon" />
        <span>Verified</span>
      </div>
    </div>
  </div>
</div>

<div className="review-address">
  <p className="section-title">Address Verification</p>
  <div className="section-box">
    <div className="status-row">
      <p>Address: 12 Example Lane</p>
      <div className="status not-verified">
        <InfoCircleRed className="status-icon" />
        <span>Not Verified</span>
      </div>
    </div>
  </div>
</div>

            <div className="review-warning">
              <p>
                By submitting this information you confirm that all provided
                details are accurate and authentic. False information may lead
                to account restriction
              </p>
            </div>
          </div>

            {/* Navigation Buttons */}
            <div className="form-buttons">
              <button className="back-btn">← Back</button>
              <button className="submit-btn">Submit ⟳</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAndSubmit2;
