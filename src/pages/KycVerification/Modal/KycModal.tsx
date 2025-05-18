import React from 'react';
import './KycModal.css';
import { TickCircleIcon } from '../../../components/icons/Icon';

const SuccessModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <TickCircleIcon className="modal-icon" />
        <h2>Advanced KYC updated successfully</h2>
        <p>Your advanced KYC has been completed</p>
        <button className="modal-button" onClick={onClose}>
          Finish
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
