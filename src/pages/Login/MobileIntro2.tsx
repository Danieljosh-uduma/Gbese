import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  ArrowRightIcon, ArrowLeftIcon, LoanImageOne,} from '../../components/icons/Icon'
import './MobileIntro.css'
function MobileIntro2() {
  const navigate = useNavigate();

  return (
    <div className="mobile-screen">
      <button className="skip-btn" onClick={() => navigate('/signup')}>
      <span>Skip</span> <ArrowRightIcon/>

      </button>

       <LoanImageOne className="illustration" width={300} />
       <div className="illustration-text">
      <h2>Secure Transaction</h2>
      <p>
      Gbese have Bank-level security for all your transactions
      </p>
      </div>
      <div className="dots">
        <span className="dot" />
        <span className="dot active"  />
        <span className="dot" />
      </div>
      <div className="backlink-mobile" onClick={() => navigate('/mobileintro1')} 
          style={{cursor: 'pointer'}}><ArrowLeftIcon /> <span>Back</span>
        </div>

      <button className="next-btn" onClick={() => navigate('/mobileintro3')}>
        Next
      </button>
 </div>
);
}
export default MobileIntro2;
