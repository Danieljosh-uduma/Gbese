import React, { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './BalanceCard.css';
import { useAuth } from '../../../hooks/useAuth';

const BalanceCard: React.FC = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [percent, setPercent] = useState(0)
  const { user } = useAuth()
  
  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };
  
  // Calculate the clip path for the progress fill based on percentage
  const getProgressClipStyle = (limit: number) => {
    // For a semi-circle, 0% is fully hidden and 100% is fully visible
    // We'll adjust the clip rect based on the percentage
    const progressValue = user?  user.balance/ limit: 0;
    const clipX = progressValue * 160; // 160px is the width of our circle
    
    return {
      style: {clip: `rect(0, ${clipX}px, 160px, 0)`},
      value: clipX
    };
  };
  const style = getProgressClipStyle(user? user.creditLimit: 0).style
  const clip = getProgressClipStyle(user? user.creditLimit: 0).value

  useEffect(() => {
    setPercent((clip/160) * 100)
  }, [clip])
  
  return (
    <div className="balance-card">
      <div className="balance-header">
        <h3>Balance</h3>
        <button onClick={toggleBalance} className="toggle-balance-btn">
          {showBalance ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      
      <div className="balance-amount">
        {showBalance ? `₦${user?.balance}` : '••••••••'}
      </div>
      
      <div className="credit-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={style}></div>
        </div>
        <div className="progress-percentage">{showBalance ? Math.floor(percent) : ''}%</div>
        <div className="progress-values">
          <span className="progress-min">{showBalance ? '₦0' : '••'}</span>
          <span className="progress-max">{showBalance ? `₦${user?.creditLimit}` : '••••'}</span>
        </div>
      </div>
      
      <div className="credit-limit">Credit Limit : ₦0 of ₦50,000</div>
      
      <div className="balance-decoration">
      
      </div>
    </div>
  );
};

export default BalanceCard;