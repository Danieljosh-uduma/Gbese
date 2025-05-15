import React from 'react';
import './ReviewRequestModal.css';

const ReviewRequestModal: React.FC = () => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Review Requests</h2>
        <div className="modal-body">
          <p><strong>To:</strong> john.doe@example.com</p>
          <p><strong>Due Date:</strong> 2025-06-01</p>
          <p><strong>Amount:</strong> $1,200</p>
          <p><strong>Description:</strong> Monthly website maintenance</p>
          <p><strong>Reference:</strong> INV-2025-00987</p>
        </div>
        <div className="modal-buttons">
          <button className="primary-btn">Send Request</button>
          <button className="secondary-btn">Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewRequestModal;
