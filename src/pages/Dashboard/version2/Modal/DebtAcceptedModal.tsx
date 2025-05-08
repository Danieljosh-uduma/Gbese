import React from 'react';
import { CloseCircle,VectorIcon } from '../../../../components/icons/Icon';
import './DebtAcceptedModal.css';

interface DebtAcceptedModalProps {
  onClose: () => void;
}

const DebtAcceptedModal: React.FC<DebtAcceptedModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          
          
          <button className="close-button" onClick={onClose}>
            <VectorIcon />
          </button>

          
          <div className="modal-title">
            <div>Debt Accepted</div>
            <p>April 27, 2025</p>
          </div>
          <button className="close-button" onClick={onClose}>
            <CloseCircle />
          </button>
        </div>

        <div className="modal-content">
          <div className="row">
            <span className="labelrow">From:</span>
            <span className="value">Jamal Reed</span>
          </div>
          <div className="row">
            <span className="labelrow">Amount:</span>
            <span className="value">₦12,000</span>
          </div>
          <div className="row">
            <span className="labelrow">Purpose:</span>
            <span className="value">Education</span>
          </div>
          <div className="note-section">
            <span className="labelrow">Note:</span>
            <p className="note-text">
              Accepted this debt to support Jamal with his online design course expenses.
            </p>
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn-outline">Save</button>
          <button className="btn-filled">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DebtAcceptedModal;
