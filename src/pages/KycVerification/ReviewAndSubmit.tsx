import StepNavigation from '../../components/Kyc/Navbar/StepNavigation';
import StepIndicator from '../../components/Kyc/Navbar/StepIndicator';
import KycSideCard from '../../components/Kyc/Sidebar/KycSideCard';
import './ReviewAndSubmit.css'; // Create this for custom styling

const ReviewAndSubmit = () => {
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
                <p>BVN:</p>
                {/* Display fetched or passed BVN here if available */}
              </div>
            </div>

            <div className="review-address">
              <p className="section-title">Address Verification</p>
              <div className="section-box">
                {/* Address details could be rendered here if available */}
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

export default ReviewAndSubmit;
