
import { useEffect, useState } from 'react';
import './FundDetails.css';
import Nav from './Nav';


function FundDetails (props: {amount: number; accountNumber: string}) {
    const [timeLeft, setTimeLeft] = useState(1800);
    const [copied, setCopied] = useState(false);

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

    return(
        <div className="container">
            <Nav
            coinCount={200}/>
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
                        <button className="btn-send">I've sent the money</button>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default FundDetails;