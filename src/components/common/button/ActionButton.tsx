import React, { ReactNode } from 'react';
import './ActionButton.css';

interface ActionButtonProps {
  icon: ReactNode;
  label: string;
  color: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, color, onClick }) => {
  return (
    <div className="action-button-container">
      <div className="action-icon">
        <div className="icon-wrapper">
          {icon}
        </div>
      </div>
      <button 
        className="action-button" 
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default ActionButton;