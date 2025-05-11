import React from 'react';
import './ActionButtons.css';

interface ActionButtonsProps {
  onDecline?: () => void;
  onAccept?: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onDecline, onAccept }) => {
  return (
    <div className="action-buttons">
      <button className="btn decline-btn" onClick={onDecline}>
        Decline Request
      </button>
      <button className="btn accept-btn" onClick={onAccept}>
        Accept this Debt
      </button>
    </div>
  );
};

export default ActionButtons;
