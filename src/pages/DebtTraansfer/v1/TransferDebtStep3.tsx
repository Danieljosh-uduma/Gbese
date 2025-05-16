import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, InformationIcon } from '../../../components/icons/Icon';
import './TransfeDebtStep3.css';
import SpecificUserModal from '../Modal/SpecificUsers';
import ShareLinkModal from '../Modal/ShareLinkModal';
import SuccessModal from '../Modal/SuccessModal';
import { setTransferMethod } from '../../../services/debtTransfer';
import { useAuth } from '../../../hooks/useAuth';

function TransferDebtStep3() {
  const navigate = useNavigate();

  // STATE
  const [agreed, setAgreed] = useState(false);
  const [showSpecificUserModal, setShowSpecificUserModal] = useState(false);
  const [showShareLinkModal, setShowShareLinkModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const location = useLocation()
  const response = location.state? location.state.response: {}
  const { user } = useAuth()
  const date = new Date(response.dueDate)



  // SUBMIT HANDLER
  const handleSubmit = () => {
    if (!agreed) return;
    let method;

    if (showSpecificUserModal && selectedUser) {
      setShowSpecificUserModal(false);
      setShowSuccess(true)
      method = 'specific'
    } else if (showShareLinkModal) {
      setShowShareLinkModal(false);
      setShowSuccess(true);
      method = 'sharedLink'
    } else {
      setShowSuccess(true); // fallback (e.g. marketplace)
      method = 'marketplace'
    }
    setTransferMethod(user?.token, method, response._id, selectedUser)
        .then(res => console.log(res))
  };

 React.useEffect(() => {
  if (showSpecificUserModal || showShareLinkModal || showSuccess) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  // Optional cleanup (in case component unmounts mid-modal)
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [showSpecificUserModal, showShareLinkModal, showSuccess]);


  // SUCCESS MODAL ACTIONS
  const handleFind = () => {
    console.log('Find Benefactor clicked');
  };

  const handleShare = () => {
    console.log('Share Request clicked');
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <div className={`form-page ${showSpecificUserModal || showShareLinkModal || showSuccess ? 'blurred' : ''}`}>
        {/* HEADER */}
        <div className="debt-header">
          <div className="title-row">
            <div className="back-buttons" onClick={() => navigate(-1)}>
              <ArrowLeftIcon className="back-icon" />
              <span className="back-text">Back</span>
            </div>
            <div className="title-group">
              <h2 className="step-title">Transfer your debt</h2>
              <p className="step-description">Complete the steps to transfer your debts.</p>
            </div>
          </div>
        </div>

        {/* PROGRESS */}
        <div className="progress-sections">
          <p>Step 4/4</p>
          <div className="progress-bars">
            <div className="progress-fills" style={{ width: '100%' }} />
          </div>
        </div>

        {/* REVIEW SECTION */}
        <div className="review-section">
          <div className="review">
            <p className="review-header">Review and Confirm</p>
            <p className="review-description">Please review your debt transfer details before submitting</p>
          </div>

          <div className="debt-summary-card">
            <p>Debt Summary</p>
            <div className="summary-row"><span className="labels">Source</span><span className="value">{response.bankName}</span></div>
            <div className="summary-row"><span className="labels">Debt Amount</span><span className="value">₦{response.amount}</span></div>
            <div className="summary-row"><span className="labels">Status</span><span className="value">{response.status}</span></div>
            <div className="summary-row"><span className="labels">Account Number</span><span className="value">{response.accountNumber}</span></div>
            <div className="summary-row"><span className="labels">Due Date</span><span className="value">{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</span></div>
            <div className="summary-row"><span className="labels">Incentive</span><span className="value">{response.incentives} Gbese Coins</span></div>
          </div>
        </div>

        {/* TRANSFER METHOD */}
        <div className="transfer-method-section">
          <div className="choose-transfer">
            <p className="how">How do you want to transfer this debts?</p>
            <p>Choose a transfer method</p>
          </div>

          <div className="transfer-buttons">
            <button className="btn-method active">List on marketplace</button>
            <button className="btn-method primary" onClick={() => setShowSpecificUserModal(true)}>Send to specific users</button>
            <button className="btn-method primary" onClick={() => setShowShareLinkModal(true)}>Share payment link</button>
          </div>

          <p className="marketplace-note">
            Your debt will be listed on the Gbese marketplace where potential benefactors can find and accept it.
          </p>
          <div className="highlight-info">This option typically results in faster responses.</div>

          <div className="info-box">
            <InformationIcon className="infoo-icon" />
            <div className="infoo-text">
              <div className="infoo-header">Important Information</div>
              <p className="info-sub">
                By submitting this request, you are authorizing Gbese to facilitate the transfer of your debt obligation to another user...
              </p>
            </div>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} />
              <span>I agree to the Terms and Conditions</span>
            </label>
            <p className="terms-text">
              I have read and agree to Gbese’s Terms of Service and Privacy Policy.
            </p>
          </div>

          <div className="action-buttons">
            <button className="cancel-btn" onClick={() => navigate(-1)}>Cancel</button>
            <button className="continue-btn" disabled={!agreed} onClick={handleSubmit}>Submit Request</button>
          </div>
        </div>
      </div>

      {/* MODALS */}
      <SpecificUserModal
        isOpen={showSpecificUserModal}
        onClose={() => setShowSpecificUserModal(false)}
        agreed={agreed}
        setAgreed={setAgreed}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        onSubmit={handleSubmit}
        setShowSpecificUserModal={setShowSpecificUserModal}
        setShowShareLinkModal={setShowShareLinkModal}
         onGoToMarketplace={() => {
    setShowSpecificUserModal(false);
    // Marketplace is the base page, so no modal needed
  }}
      />

      <ShareLinkModal
  isOpen={showShareLinkModal}
  onClose={() => setShowShareLinkModal(false)}
  agreed={agreed}
  setAgreed={setAgreed}
  onSubmit={handleSubmit}
  onSendToUsers={() => {
    setShowShareLinkModal(false);
    setShowSpecificUserModal(true);
  }}
  onGoToMarketplace={() => {
    setShowShareLinkModal(false);
    // Marketplace is the base page, so no modal needed
  }}
/>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        transactionId="TRX-131106"
        amount="₦50,000"
        expectedResponse="Within 48 hours"
        onFindBenefactor={handleFind}
        onShareRequest={handleShare}
        onBackToDashboard={handleBack}
      />
    </>
  );
}

export default TransferDebtStep3;
