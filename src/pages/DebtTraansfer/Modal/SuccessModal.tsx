import React from 'react';
import { TickCircleIcon } from '../../../components/icons/Icon'; // Update this import path if needed
import './SuccessModal.css';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  transactionId: string;
  amount: string;
  expectedResponse: string;
  onFindBenefactor: () => void;
  onShareRequest: () => void;
  onBackToDashboard: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  transactionId,
  amount,
  expectedResponse,
  onFindBenefactor,
  onShareRequest,
//   onBackToDashboard,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="success-modal">
        <div className="success-icon">
          <TickCircleIcon />
        </div>

        <h3 className="success-title">Your debt transfer request is live</h3>
        <p className="success-subtitle">
          Your request has been submitted successfully and is now visible to potential benefactors.
        </p>

        <div className="success-details">
          <div className="detail-row">
            <span className="labels">Transaction ID:</span>
            <span className="value">{transactionId}</span>
          </div>
          <div className="detail-row">
            <span className="labels">Amount:</span>
            <span className="value">{amount}</span>
          </div>
          <div className="detail-row">
            <span className="labels">Expected response:</span>
            <span className="value">{expectedResponse}</span>
          </div>
        </div>

        <button className="primary-button" onClick={onFindBenefactor}>Find Benefactor</button>
        <button className="secondary-button" onClick={onShareRequest}>Share this Request</button>
        <button className="back-button" onClick={onClose}>Back to Dashboard</button>
      </div>
    </div>
  );
};

export default SuccessModal;
