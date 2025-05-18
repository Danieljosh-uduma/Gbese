import React, { useState } from 'react';
import { useEffect } from 'react';
import StepNavigation from '../../components/Kyc/Navbar/StepNavigation';
import StepIndicator from '../../components/Kyc/Navbar/StepIndicator';
import KycSideCard from '../../components/Kyc/Sidebar/KycSideCard';
import { TickCircleGreen } from '../../components/icons/Icon';
import SuccessModal from '../KycVerification/Modal/KycModal'; // adjust path as needed
import './R&S2.css';

const ReviewAndSubmit2 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    setShowModal(true);
  };
  useEffect(() => {
  if (showModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  // Cleanup on unmount
  return () => {
    document.body.style.overflow = '';
  };
}, [showModal]);


  return (
      <div className="{kyc-page">
      <StepNavigation />

    <div className={`kyc-container ${showModal ? 'blurred' : ''}`}>
        <KycSideCard />
        <div className="kyc-content">
          <StepIndicator activeStep={2} />
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

            <div className="review-BVN">
              <p className="section-title">Address Verification</p>
              <div className="section-box">
                <div className="status-row">
                  <p>Documents: Electricity Bill.JPG</p>
                  <div className="status verified">
                    <TickCircleGreen className="status-icon" />
                    <span> Verified</span>
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

          <div className="form-buttons">
            <button className="back-btn">← Back</button>
            <button className="submit-btn" onClick={handleSubmit}>
              Submit ⟳
            </button>
          </div>
        </div>
      </div>

      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ReviewAndSubmit2;
