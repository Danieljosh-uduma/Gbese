import React from 'react';
import './ActionButtons.css';

interface ActionButtonsProps {
  onDecline?: () => void;
  onAccept?: () => void;
  acceptText?: string;

}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onDecline, onAccept, acceptText = ' Accept this Debt'}) => {
  return (
    <div className="action-buttons">
      <button className="btn-act decline-btn" onClick={onDecline}>
        Decline Request
      </button>
      <button className="btn-act accept-btn" onClick={onAccept}>
        {acceptText}
      </button>
    </div>
  );
};

export default ActionButtons;

