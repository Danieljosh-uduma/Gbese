import React from 'react';
import './RequestSentModal.css';

const RequestSentModal: React.FC = () => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Request Sent</h2>
        <p className='modal-subheader'>Please review your payment</p>

        <div className="modal-body">
          <p><strong>To:</strong> john.doe@example.com</p>
          <p><strong>Due Date:</strong> 2025-06-01</p>
          <p><strong>Amount:</strong> $1,200</p>
          <p><strong>Description:</strong> Monthly website maintenance</p>
          <p><strong>Reference:</strong> INV-2025-00987</p>
        </div>
        <div className="modal-buttons">
          <button className="primary-btn">Request Another Money</button>
          <button className="secondary-btn">Finish</button>
        </div>
      </div>
    </div>
  );
};

export default RequestSentModal;
