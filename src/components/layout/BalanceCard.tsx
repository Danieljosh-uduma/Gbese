    import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './styles/BalanceCard.css';

const BalanceCard: React.FC = () => {
  const [showBalance, setShowBalance] = useState(false);
  
  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };
  
  // Calculate the clip path for the progress fill based on percentage
  const getProgressClipStyle = (percentage: number) => {
    // For a semi-circle, 0% is fully hidden and 100% is fully visible
    // We'll adjust the clip rect based on the percentage
    const progressValue = percentage / 100;
    const clipX = progressValue * 160; // 160px is the width of our circle
    
    return {
      clip: `rect(0, ${clipX}px, 160px, 0)`
    };
  };
  
  return (
    <div className="balance-card">
      <div className="balance-header">
        <h3>Balance</h3>
        <button onClick={toggleBalance} className="toggle-balance-btn">
          {showBalance ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      
      <div className="balance-amount">
        {showBalance ? '₦0.00' : '••••••••'}
      </div>
      
      <div className="credit-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={getProgressClipStyle(0)}></div>
        </div>
        <div className="progress-percentage">0%</div>
        <div className="progress-values">
          <span className="progress-min">0</span>
          <span className="progress-max">100</span>
        </div>
      </div>
      
      <div className="credit-limit">Credit Limit : ₦0 of ₦50,000</div>
      
      <div className="balance-decoration">
      
      </div>
    </div>
  );
};

export default BalanceCard;