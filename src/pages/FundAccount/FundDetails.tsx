
import { useEffect, useState } from 'react';
import './FundDetails.css';


function FundDetails (props: {amount: number; accountNumber: string}) {
    const [timeLeft, setTimeLeft] = useState(1800);
    const [copied, setCopied] = useState(false);
    const [transactionStatus, setTransactionStatus] = useState<"success" | "error" | null>(null);


    useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    function formatTime(seconds: number) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  }


  function handleCopy() {
    navigator.clipboard.writeText(props.accountNumber).then (() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 700)
    });
  }

  function handleSendMoney() {
  try {
    // Your transaction logic
    const success = false; // replace with actual result

    if (success) {
      setTransactionStatus("success");
    } else {
      setTransactionStatus("error");
    }
  } catch {
    setTransactionStatus("error");
  }
}


  

    return(
        <div className="container">
            
            <div className="review-container">
                <p className="review-title">Review Funding Details</p>
                <p className="review-subtext">
                    Transfer NGN{props.amount.toLocaleString()} to Paystack.
                </p>

                <div className="review-card">
                    <div className="review">
                         <div className="review-row">
                        <span>Bank Name:</span>
                        <span className="review-value">Paystack-Gbese</span>
                    </div>
                    <div className="review-row">
                        <span>Account Number:</span>
                        <span className="review-value">{props.accountNumber}
                            <img src="/src/assets/images/icons/copy.svg" 
                            alt="" 
                            className="click-icon"
                            onClick={handleCopy} 
                            />
                            {copied && <span className='copied'>Copied!</span>}
                        </span>
                    </div>
                    <div className="review-row">
                        <span>Amount:</span>
                        <span className="review-value">₦{props.amount}</span>
                    </div>
                    </div>

                    <div className="review-info">
                        <img src="/src/assets/images/icons/timer.svg" alt="" className="c-icon" />
                        <p>
                            This account is for this transaction only and expires in {''}
                            <span className="countdown">{formatTime(timeLeft)}</span>
                        </p>
                    </div>

                    <div className="review-warning">
                        <img src="/src/assets/images/icons/warning.svg" alt="" className="w-icon" />
                        <p className='gb'>
                            Your Gbese account will be credited shortly after transfer. No update after 10 mins? {''}
                            <p className="a">
                                <a href="">Tap here</a> to retry or get {' '}
                                <a href="#">Contact support</a>
                            </p>
                        </p>
                    </div>

                    <div className="review-buttons">
                        <button className="btn-cancel">Cancel</button>
                        <button className="btn-send" onClick={handleSendMoney}>I've sent the money</button>
                    </div>
                </div>
            </div>

            {transactionStatus === "success" && (
  <div className="modal">
    <div className="modal-content">
      <div className="icon success">
        <img src="/src/assets/images/icons/success.svg" alt="" />
      </div>
      <p className='successful'>Account Successfully Funded!</p>
      <p className='s-text'>₦{props.amount.toLocaleString()} has been added to your account</p>
      <div className="status-modal">
        <button className="btn-primary">Share Receipt</button>
      <button className="btn-link" onClick={() => setTransactionStatus(null)}>Back to Dashboard</button>
      </div>
    </div>
  </div>
)}

{transactionStatus === "error" && (
  <div className="modal">
    <div className="modal-content">
      <div className="icon error">
        <img src="/src/assets/images/icons/error.svg" alt="" />
      </div>
      <p className='failed'>Transaction Failed</p>
      <p className='f-text'>We couldn't complete your Top-up because your card failed.</p>
      <div className="status-modal">
        <button className="btn-primary">Try Again</button>
      <button className="btn-link" onClick={() => setTransactionStatus(null)}>Use a Different Method</button>
      </div>
      
    </div>
  </div>
)}



        </div>
    )
};

export default FundDetails;